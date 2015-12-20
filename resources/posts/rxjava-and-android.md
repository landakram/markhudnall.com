Title: RxJava and Android: Just What the Doctor Ordered
Date: 2013-10-15

I work on Android at [Clef](https://getclef.com). Most of the time, though, it feels like I'm working against Android. The Activity and Service model is elegantly designed for interoperability, but when it comes down to implementation, it's often painful to work with.[^1]

But a bigger problem is handling user interaction. There are two very common patterns that I have trouble with:

1.  Doing something in the background and updating the UI. 
2.  Responding to user interaction and updating a different part of the UI. 

## RxJava

In both cases, [RxJava](https://github.com/Netflix/RxJava) helps me keep my sanity. RxJava is a Java implementation of [Functional Reactive Programming](https://en.wikipedia.org/wiki/Functional_reactive_programming). If you aren't familiar with FRP, it's not as complicated as its name makes it sound. FRP is all about streams of data. A *stream* produces data at different points in time. An *observer* is notified whenever data in that stream and does something with it. It's a little different than the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern), since there's a focus on composition. You can map, filter, and reduce streams—that's where the "functional" part comes in.

## Doing things in the background

### The old way: AsyncTask

It's an inconvenient necessity that we have to worry about blocking the UI thread. Android provides [AsyncTask](https://developer.android.com/reference/android/os/AsyncTask.html) to help ease this pain, letting you do work on the background with `doInBackground` and then delivering on the UI thread with `onPostExecute`. For the most part, the AsyncTasks I create are requests to Clef's API server that return JSON. But there are a few pitfalls with AsyncTask:

*   Error handling: as [mttkay points out](https://mttkay.github.io/blog/2013/08/25/functional-reactive-programming-on-android-with-rxjava/), there's no easy way to handle error messages in the UI for errors that happen in the background. I usually return null instead of the actual JSONObject and then later handle the case where the JSONObject is null. Ugh.
*   Code reuse/readability: Since API requests are all similar, I use a general APIRequestTask that I give a path and some parameters. I also pass in the caller which implements a `APIRequestHandler` interface, so the caller can handle the results.
    
    In the activity/fragment:
    
        APIRequestTask request = new APIRequestTask("/user/register", this);
        request.putParameter("email", "test@example.com");
        request.execute();
        
    
    In `APIRequestTask.java`:
    
        public interface NetworkRequestHandler {
            public void onRequestCompleted(JSONObject response, String url);
        }
        
        public NetworkRequestTask(String url, NetworkRequestHandler handler) {
            this.url = url;
            this.mHandler = handler;
            this.requestParameters = new ArrayList<NameValuePair>();
        }
        
        public void putParameter(String key, String value) {
            if (key != null && value != null) {
                requestParameters.add(new BasicNameValuePair(key, value));
            }
        }
        
        @Override
        protected JSONObject doInBackground(Void... voids) {
            // Do the request
        }
        
        @Override
        protected void onPostExecute(JSONObject response) {
            if (mHandler != null) {
                mHandler.onRequestCompleted(response, this.url);
            }
        }
        
    
    Though the generality is nice, with this pattern, if a calling Activity/Fragment makes multiple requests, it needs to handle responses in a single function by switching on the URL. This makes for code that isn't very readable, especially when you have to jump from where the request is executed to where the response is handled.

### Once more, with feeling

Let's try that again with RxJava:

    Observable.create(new Observable.OnSubscribeFunc<JSONObject>() {
        @Override
        public Subscription onSubscribe(Observer<? super JSONObject> observer) {
            try {
                // Do the request
                // ...
                observer.onNext(jsonResponse);
                observer.onCompleted();
            }
            catch (Exception e) {
                observer.onError(e);
            }
    
            return Subscriptions.empty()
        }
    }).subscribeOn(Schedulers.newThread()).observeOn(AndroidSchedulers.mainThread())
      .subscribe(new Action1<JSONObject>() {
        @Override
        public void call(JSONObject response) {
            if (response.getBoolean("success")) {
                RegistrationActivity.this.messageView.setText("You're all set.");
            }
        }
    }, new Action1<Throwable>() {
        @Override
        public void call(Throwable error) {
            Toast.makeText(RegistrationActivity.this,
                error.getMessage(),
                Toast.LENGTH_SHORT)
            .show();
        }
    });
    

`Observable.create` creates a stream that makes a network request. When the request completes, the response is delivered from the stream to an observer. In this case, the observer is the first `Action1` in the `subscribe` method. If there are any errors, they are delivered to the second `Action1` passed into the `subscribe` method.

`subscribeOn(Schedulers.newThread())` runs the `OnSubscribeFunc` on a thread, while `observeOn(AndroidSchedulers.mainThread())` delivers the results to the main thread.

It's still a little verbose, but it's more similar to writing synchronous code. I use the response in code that directly follows the request. I also get error handling on the UI thread for free.

### Composition

RxJava also lets you compose logically separated tasks. [mttkay gives](https://mttkay.github.io/blog/2013/08/25/functional-reactive-programming-on-android-with-rxjava/) this example:

    Observable<String> filePathObservable = downloadFileObservable().map(new Func1<File, String>() {
        @Override
        public String call(File file) {
            return file.getAbsolutePath();
        }
    });
    
    // now emits file paths, not `File`s
    subscription = filePathObservable.subscribe(/* Observer<String> */);
    

Unfortunately, if `return file.getAbsolutePath();` throws an error, we run into the same problem that we had with AsyncTasks: how do we handle the error when we don't have a reference to an observer? Instead of `map`, we must use `flatMap`. Here's an example where we tokenize a credit card into a [Balanced](http://balancedpayments.com) uri and then use the uri in a request to our server:

    final Card card = new Card(cardNumber, expiryMonth, expiryYear, cvc);
    
    Observable.create(new Observable.OnSubscribeFunc<String>() {
        @Override
        public Subscription onSubscribe(Observer<? super String> observer) {
            try {
                Balanced balanced = new Balanced(Constants.BALANCED_MARKETPLACE_URI, NewCreditCardActivity.this);
                String cardURI = balanced.tokenizeCard(card);
                observer.onNext(cardURI);
                observer.onCompleted();
            } catch (Exception e) {
                observer.onError(e);
            }
    
            return Subscriptions.empty();
        }
    })
    .flatMap(new Func1<String, Observable<JSONObject>>() {
        @Override
        public Observable<JSONObject> call(String cardURI) {
            return Observable.create(new Observable.OnSubscribeFunc<JSONObject>() {
                @Override
                public Subscription onSubscribe(Observer<? super JSONObject> observer) {
                    try {
                        JSONObject response = doTheRequest(cardURI); 
                        observer.onNext(response);
                        observer.onCompleted();
                    }
                    catch (Exception e) {
                        observer.onError(e);
                    }
                    return Subscriptions.empty();
                }
            });
        }
    })
    .subscribe(/* ... */);
    

Unfortunately, maintaining the error handling abilities makes the code much more verbose. However, it also makes it *a lot* easier to display errors to the UI and chain separate, dependent asynchronous operations in a readable way.

**Edit:** lungos in the comments pointed out that the using `flatMap` may be overkill. Any exceptions in the `flatMap`'s `OnSubscribeFunc` will be caught by the try/catch block in the original `Observable`'s `OnSubscribeFunc`. In fact, `flatMap` is not necessary here at all, because `map` in RxJava will wrap return values in an `Observable` automatically, making `map` and `flatMap` essentially the same. They aren't *actually* the same, but the nuance requires an explanation of monads and other theory that I don't want to get into.

## Responding to user interaction

RxJava isn't just for background operations. While RxJava isn't yet as fully featured as its Objective-C counterpart, [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa), it's still really useful for making a responsive UI. It also enforces a separation of view and model logic.

For instance, say I'm displaying information about a pending payment. Instead of storing payment information as member variables of an activity, I store them in a separate `Payment` model object (which is good practice anyway). A user can select a shipping option that increases a total amount of the payment. I could create an `onItemClickListener` which updates the amount `TextView`, but this entangles the view logic with the underlying model logic.

With RxJava, I can use a [Subject](http://netflix.github.io/RxJava/javadoc/rx/subjects/ReplaySubject.html) to automatically update the UI. Subjects are observables that you can both subscribe to and trigger updates on. With Subjects, you don't need a reference to an observer—you just emit the data on the subject itself.

    public class Payment {
        private Integer totalAmount; 
        private ReplaySubject<Integer> totalAmountSubject = new ReplaySubject.create();
    
        /* ... */
    
        public void setTotalAmount(Integer newAmount) {
            this.totalAmount = newAmount; 
            this.totalAmountSubject.onNext(this.totalAmount);
        }
    
        public Observable<Integer> totalAmountObservable() {
            return this.totalAmountSubject.observeOn(AndroidSchedulers.mainThread());
        }
    
        /* ... */
    }
    

Now, I can subscribe to `totalAmountObservable` in the Activity like so:

    this.totalAmountSubscription = this.payment.totalAmountInCentsObservable().subscribe(new Action1<Integer>() {
        @Override
        public void call(Integer newAmount) {
            Log.d(TAG, "Total amount in cents has been updated!");
            TextView amountView = (TextView) findViewById(R.id.price);
            amountView.setText(Format.formatCents(newAmount));
        }
    });
    

In the `onItemClickListener` (and anywhere else), I can now just use `setTotalAmount`, and the view is automatically updated to reflect the new amount.

If you've used [Backbone.js](http://backbonejs.org/) or another JavaScript framework, this one-way binding might not be new to you, but it's nice to have it available on Android. There's also an [open issue on GitHub](http://github.com/Netflix/RxJava/issues/335) for adding more UI hooks and make it even more usable.

**Edit:** [@bryanstern](http://twitter.com/bryanstern) pointed out that you can use a `BehaviorSubject` instead of a `ReplaySubject` to the same effect. The difference between them is that `BehaviorSubject` emits only the last item when it is subscribed to, while `ReplaySubject` emits all previous items. That means if you do `subject.onNext(foo1); subject.onNext(foo2);` you'll get `foo1` and then `foo2` with a `ReplaySubject`, but just `foo2` with a `BehaviorSubject`. Check out the different kinds of subjects in the [docs](http://github.com/Netflix/RxJava/wiki/Subject).

## Final thoughts

RxJava has been a pleasure to use so far. There are a few snags, like remembering to include `subscribeOn(Schedulers.newThread())` and `observeOn(AndroidSchedulers.mainThread())`, but being able to properly handle errors and write more readable code is essential.

What are your experiences using RxJava with Android? Am I doing anything egregiously wrong? Let me know in the comments.

You should follow me on [Twitter](http://twitter.com/landakram).

[^1]: For instance, detecting when an app is being backgrounded is simple on iOS because a delegate function is provided for you. On Android, however, we are forced to manually keep track of whether activities are open (or other similar hackery). Again, the Activity model is beautiful, but sometimes, we need to keep global state, dammit.

