Title: Handling GCM messages in the foreground and background
Author: Mark Hudnall
Date: 2013-11-13

# Handling GCM messages in the foreground and background

When the [Clef](https://getclef.com) Android app gets notifications, we want it to behave differently when it's open and in the foreground than when it's in the background.

This is a surprisingly difficult thing to do, since it's actually quite difficult to determine whether an app is in the background. You can use a static boolean or keep track of the shown activity (maybe in a custom `Application` class or another singleton), but that isn't always reliable. You might also have other requirements—what if you want to differentiate behavior based on which activity is in the foreground?

One [solution](http://stackoverflow.com/a/15949723/826650) is `sendOrderedBroadcast`, but I prefer something with a little less boilerplate.

## All aboard the event bus

Instead of using `BroadcastReceivers`, we can use an event bus like [Otto](http://square.github.io/otto/) or [EventBus](https://github.com/greenrobot/EventBus) to notify activities about an incoming GCM message. If no activities are registered on the bus, we can correctly place a notification in the notification drawer.

If you aren't familiar with event buses, the idea is simple. Any object (usually an `Activity`) can register with (or as I like to say, ride) the event bus:

    bus.register(this);
    

The object then provides subscriber methods to run when the bus emits an event:

    public void onEvent(NotificationEvent event) {
        Toast.makeText(this, 
            event.payload.getString("message"), 
            LENGTH_SHORT)
        .show();
    }
    

When an object should stop riding the event bus, you can unregister it:

    bus.unregister(this);
    

To actually emit events:

    NotificationEvent event = new NotificationEvent(bundle);
    bus.post(event);
    

This triggers a call to the `onEvent(NotificationEvent event)` method in every object registered on the bus. You can add different subscriber methods (such as `onEvent(LocationEvent event)`) and these method will only be run when an event of the same type is emitted (`bus.post(new LocationEvent())`) There is no limit to how many objects can register with the bus.

If there are no objects registered, a second event is automatically posted. With Otto, this event is called `DeadEvent`. With EventBus, it's called `NoSubscriberEvent`. This lets you separately handle cases where there are no subscribers (you might see where this is going).

You can also post any object. I like to create classes that logically separate events and suffix them with `Event`. For instance, the `NotificationEvent` class looks like this:

    public class NotificationEvent {
        public Bundle payload;
    
        public NotificationEvent(Bundle extras) {
            this.payload = extras;
        }
    }
    

### Otto and EventBus

These libraries are very similar. [Otto](http://square.github.io/otto/) uses annotations (`@Subscribe`) to determine which subscriber methods to run, while [EventBus](https://github.com/greenrobot/EventBus) uses a consistent method name (`onEvent`).

Unfortunately, both libraries have drawbacks. Otto [doesn't let you](https://github.com/square/otto/issues/83) register with the bus in a superclass and receive events in a subclass. This is annoying if you'd like to register in a `BaseActivity` that all of your activities extend from.

EventBus has a bug when trying to subscribe to the `NoSubscriberEvent`. If you register and unregister an object, the event never fires. Bummer. There's a [pull request](https://github.com/greenrobot/EventBus/pull/32) that adds a *one line fix*, but the maintainers haven't touched it yet.

I ended up choosing EventBus because I really wanted to be able to register with the bus in a base class[^ft1], but again, they are basically the same for most purposes. I did have to add the patch in [this pull request](https://github.com/greenrobot/EventBus/pull/32) to make it work.

## Changing app behavior for GCM messages

Here's how we use an event bus to do different things when the app is in the foreground or background.

We use a singleton event bus. The EventBus library provides one for you with `EventBus.getInstance()`. It's also easy to make a singleton bus with Otto—you can even use [Dagger](https://github.com/square/dagger/) to inject the global bus where needed (to truly Square-ify your code).

Every activity registers with the bus when it is shown and unregisters when it is hidden. This ensures that only one activity receives events from the bus at a time. We also add a subscriber method to handle the notification. We accomplish this with a base class:

    public abstract class BaseActivity extends Activity {
        @Override
        public void onResume() {
            super.onResume();
            EventBus.getInstance().register(this);
        }
        
        @Override
        public void onPause() {
            super.onPause();
            EventBus.getInstance().unregister(this);
        }
    
        public void onEvent(NotificationEvent notification) {
            startActivity(new Intent(BaseActivity.this, NotificationActivity.class));
            overridePendingTransition(R.anim.fade_in_animation, R.anim.fade_out_animation);
        }
    
    }
    

Then, in our GCM Receiver, we post to the event bus:

    public class GcmReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(context);
            String gcmMessageType = gcm.getMessageType(intent);
            if (GoogleCloudMessaging.MESSAGE_TYPE_MESSAGE.equals(gcmMessageType)) {
                Bundle payload = intent.getExtras();
                NotificationEvent notification = new NotificationEvent(payload);
    
                // Register ourselves so we can receive the NoSubscriberEvent notification if no
                // activities are registered
                EventBus.getDefault().register(this, NoSubscriberEvent.class);
    
                // Post the notification for an activity
                EventBus.getDefault().post(notification);
            }
            setResultCode(Activity.RESULT_OK);
        }
    

The real magic happens in this line:

        // Register ourselves so we can receive the NoSubscriberEvent notification if no
        // activities are registered
        EventBus.getDefault().register(this, NoSubscriberEvent.class);
    

We register the `GcmReceiver` with the event bus to receive only the `NoSubscriberEvent`. If no activity is being displayed, then nothing is registered for `NotificationEvent`. EventBus will then post the `NoSubscriberEvent`, which we can handle in `GcmReceiver` like so:

    /*
     * Called when there are no subscribers to the NotificationEvent.
     *
     * This occurs when the app is in the background and no activities are riding the bus.
     */
    public void onEvent(NoSubscriberEvent deadEvent) {
        // We're all done here
        EventBus.getDefault().unregister(this);
    
        NotificationEvent notification = (NotificationEvent) deadEvent.originalEvent;
    
        // Save the wee little notification for later consumption by an activity
        Mailbox.getInstance().put(notification);
    
        // Display the notification in the notification drawer
        buildNotification(notification);
    }
    

`buildNotification` puts the notification in the notification drawer with a [PendingIntent](https://developer.android.com/reference/android/app/PendingIntent.html). We also save the notification in a global queue, so that when application is opened back up *not* from the notification drawer, we can process it as normal. There's probably a better solution than this, since it's possible for the `Mailbox` singleton to be deallocated when the app is in the background.

Both EventBus and Otto also support "sticky" events. Once you post an event with `postSticky`, EventBus caches it, so you can get the last event back with `bus.getStickyEvent(TheEventClass.class)`. Otto allows you to use a default value by defining a method with a `@Provides` annotation. In this example, sticky events could replace storing the notification away in `Mailbox`.

### Differentiating notifications

Your app probably sends more than one kind of GCM message. If that's the case, you can subclass `NotificationEvent` to handle different message types. When you register an activity with the event bus, you can write your subscriber functions so they only respond to certain kinds of notifications. This is a nice way to use the built-in type system, instead of doing something like `payload.getString("type").equals(aMessageType)` everywhere.

## Conclusion

Event buses are awesome. There are many more use cases, such as communicating between fragments in a sane way (without using interfaces) or making callbacks from `AsyncTasks` (although, I prefer replacing `AsyncTask` [with RxJava](http://markhudnall.com/2013/10/15/rxjava-and-android/) altogether[^ft2]).

[^ft1]: Though there is a [workaround](http://howrobotswork.wordpress.com/2013/07/20/subclassing-with-otto/) for Otto.
[^ft2]: Event buses could actually replace RxJava for a lot of simpler use cases. Otto and EventBus both provide some control over threading so you can do things in the background, and it might make for less complex looking code.
