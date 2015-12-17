// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23559 = [];
var len__22288__auto___23565 = arguments.length;
var i__22289__auto___23566 = (0);
while(true){
if((i__22289__auto___23566 < len__22288__auto___23565)){
args23559.push((arguments[i__22289__auto___23566]));

var G__23567 = (i__22289__auto___23566 + (1));
i__22289__auto___23566 = G__23567;
continue;
} else {
}
break;
}

var G__23561 = args23559.length;
switch (G__23561) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23559.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23562 = (function (f,blockable,meta23563){
this.f = f;
this.blockable = blockable;
this.meta23563 = meta23563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23564,meta23563__$1){
var self__ = this;
var _23564__$1 = this;
return (new cljs.core.async.t_cljs$core$async23562(self__.f,self__.blockable,meta23563__$1));
});

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23564){
var self__ = this;
var _23564__$1 = this;
return self__.meta23563;
});

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23563","meta23563",1708935040,null)], null);
});

cljs.core.async.t_cljs$core$async23562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23562";

cljs.core.async.t_cljs$core$async23562.cljs$lang$ctorPrWriter = (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async23562");
});

cljs.core.async.__GT_t_cljs$core$async23562 = (function cljs$core$async$__GT_t_cljs$core$async23562(f__$1,blockable__$1,meta23563){
return (new cljs.core.async.t_cljs$core$async23562(f__$1,blockable__$1,meta23563));
});

}

return (new cljs.core.async.t_cljs$core$async23562(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23571 = [];
var len__22288__auto___23574 = arguments.length;
var i__22289__auto___23575 = (0);
while(true){
if((i__22289__auto___23575 < len__22288__auto___23574)){
args23571.push((arguments[i__22289__auto___23575]));

var G__23576 = (i__22289__auto___23575 + (1));
i__22289__auto___23575 = G__23576;
continue;
} else {
}
break;
}

var G__23573 = args23571.length;
switch (G__23573) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23571.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23578 = [];
var len__22288__auto___23581 = arguments.length;
var i__22289__auto___23582 = (0);
while(true){
if((i__22289__auto___23582 < len__22288__auto___23581)){
args23578.push((arguments[i__22289__auto___23582]));

var G__23583 = (i__22289__auto___23582 + (1));
i__22289__auto___23582 = G__23583;
continue;
} else {
}
break;
}

var G__23580 = args23578.length;
switch (G__23580) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23578.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23585 = [];
var len__22288__auto___23588 = arguments.length;
var i__22289__auto___23589 = (0);
while(true){
if((i__22289__auto___23589 < len__22288__auto___23588)){
args23585.push((arguments[i__22289__auto___23589]));

var G__23590 = (i__22289__auto___23589 + (1));
i__22289__auto___23589 = G__23590;
continue;
} else {
}
break;
}

var G__23587 = args23585.length;
switch (G__23587) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23585.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23592 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23592);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23592,ret){
return (function (){
return fn1.call(null,val_23592);
});})(val_23592,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23593 = [];
var len__22288__auto___23596 = arguments.length;
var i__22289__auto___23597 = (0);
while(true){
if((i__22289__auto___23597 < len__22288__auto___23596)){
args23593.push((arguments[i__22289__auto___23597]));

var G__23598 = (i__22289__auto___23597 + (1));
i__22289__auto___23597 = G__23598;
continue;
} else {
}
break;
}

var G__23595 = args23593.length;
switch (G__23595) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23593.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22133__auto___23600 = n;
var x_23601 = (0);
while(true){
if((x_23601 < n__22133__auto___23600)){
(a[x_23601] = (0));

var G__23602 = (x_23601 + (1));
x_23601 = G__23602;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23603 = (i + (1));
i = G__23603;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23607 = (function (alt_flag,flag,meta23608){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23608 = meta23608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23609,meta23608__$1){
var self__ = this;
var _23609__$1 = this;
return (new cljs.core.async.t_cljs$core$async23607(self__.alt_flag,self__.flag,meta23608__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23609){
var self__ = this;
var _23609__$1 = this;
return self__.meta23608;
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23608","meta23608",833948400,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23607";

cljs.core.async.t_cljs$core$async23607.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async23607");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23607 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23607(alt_flag__$1,flag__$1,meta23608){
return (new cljs.core.async.t_cljs$core$async23607(alt_flag__$1,flag__$1,meta23608));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23607(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23613 = (function (alt_handler,flag,cb,meta23614){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23614 = meta23614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23615,meta23614__$1){
var self__ = this;
var _23615__$1 = this;
return (new cljs.core.async.t_cljs$core$async23613(self__.alt_handler,self__.flag,self__.cb,meta23614__$1));
});

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23615){
var self__ = this;
var _23615__$1 = this;
return self__.meta23614;
});

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23614","meta23614",536622101,null)], null);
});

cljs.core.async.t_cljs$core$async23613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23613";

cljs.core.async.t_cljs$core$async23613.cljs$lang$ctorPrWriter = (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async23613");
});

cljs.core.async.__GT_t_cljs$core$async23613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23613(alt_handler__$1,flag__$1,cb__$1,meta23614){
return (new cljs.core.async.t_cljs$core$async23613(alt_handler__$1,flag__$1,cb__$1,meta23614));
});

}

return (new cljs.core.async.t_cljs$core$async23613(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23616_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23617_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21230__auto__ = wport;
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23618 = (i + (1));
i = G__23618;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21230__auto__ = ret;
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__21218__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21218__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21218__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22295__auto__ = [];
var len__22288__auto___23624 = arguments.length;
var i__22289__auto___23625 = (0);
while(true){
if((i__22289__auto___23625 < len__22288__auto___23624)){
args__22295__auto__.push((arguments[i__22289__auto___23625]));

var G__23626 = (i__22289__auto___23625 + (1));
i__22289__auto___23625 = G__23626;
continue;
} else {
}
break;
}

var argseq__22296__auto__ = ((((1) < args__22295__auto__.length))?(new cljs.core.IndexedSeq(args__22295__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22296__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23621){
var map__23622 = p__23621;
var map__23622__$1 = ((((!((map__23622 == null)))?((((map__23622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23622):map__23622);
var opts = map__23622__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23619){
var G__23620 = cljs.core.first.call(null,seq23619);
var seq23619__$1 = cljs.core.next.call(null,seq23619);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23620,seq23619__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23627 = [];
var len__22288__auto___23677 = arguments.length;
var i__22289__auto___23678 = (0);
while(true){
if((i__22289__auto___23678 < len__22288__auto___23677)){
args23627.push((arguments[i__22289__auto___23678]));

var G__23679 = (i__22289__auto___23678 + (1));
i__22289__auto___23678 = G__23679;
continue;
} else {
}
break;
}

var G__23629 = args23627.length;
switch (G__23629) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23627.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23514__auto___23681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___23681){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___23681){
return (function (state_23653){
var state_val_23654 = (state_23653[(1)]);
if((state_val_23654 === (7))){
var inst_23649 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
var statearr_23655_23682 = state_23653__$1;
(statearr_23655_23682[(2)] = inst_23649);

(statearr_23655_23682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (1))){
var state_23653__$1 = state_23653;
var statearr_23656_23683 = state_23653__$1;
(statearr_23656_23683[(2)] = null);

(statearr_23656_23683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (4))){
var inst_23632 = (state_23653[(7)]);
var inst_23632__$1 = (state_23653[(2)]);
var inst_23633 = (inst_23632__$1 == null);
var state_23653__$1 = (function (){var statearr_23657 = state_23653;
(statearr_23657[(7)] = inst_23632__$1);

return statearr_23657;
})();
if(cljs.core.truth_(inst_23633)){
var statearr_23658_23684 = state_23653__$1;
(statearr_23658_23684[(1)] = (5));

} else {
var statearr_23659_23685 = state_23653__$1;
(statearr_23659_23685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (13))){
var state_23653__$1 = state_23653;
var statearr_23660_23686 = state_23653__$1;
(statearr_23660_23686[(2)] = null);

(statearr_23660_23686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (6))){
var inst_23632 = (state_23653[(7)]);
var state_23653__$1 = state_23653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23653__$1,(11),to,inst_23632);
} else {
if((state_val_23654 === (3))){
var inst_23651 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23653__$1,inst_23651);
} else {
if((state_val_23654 === (12))){
var state_23653__$1 = state_23653;
var statearr_23661_23687 = state_23653__$1;
(statearr_23661_23687[(2)] = null);

(statearr_23661_23687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (2))){
var state_23653__$1 = state_23653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23653__$1,(4),from);
} else {
if((state_val_23654 === (11))){
var inst_23642 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
if(cljs.core.truth_(inst_23642)){
var statearr_23662_23688 = state_23653__$1;
(statearr_23662_23688[(1)] = (12));

} else {
var statearr_23663_23689 = state_23653__$1;
(statearr_23663_23689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (9))){
var state_23653__$1 = state_23653;
var statearr_23664_23690 = state_23653__$1;
(statearr_23664_23690[(2)] = null);

(statearr_23664_23690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (5))){
var state_23653__$1 = state_23653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23665_23691 = state_23653__$1;
(statearr_23665_23691[(1)] = (8));

} else {
var statearr_23666_23692 = state_23653__$1;
(statearr_23666_23692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (14))){
var inst_23647 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
var statearr_23667_23693 = state_23653__$1;
(statearr_23667_23693[(2)] = inst_23647);

(statearr_23667_23693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (10))){
var inst_23639 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
var statearr_23668_23694 = state_23653__$1;
(statearr_23668_23694[(2)] = inst_23639);

(statearr_23668_23694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (8))){
var inst_23636 = cljs.core.async.close_BANG_.call(null,to);
var state_23653__$1 = state_23653;
var statearr_23669_23695 = state_23653__$1;
(statearr_23669_23695[(2)] = inst_23636);

(statearr_23669_23695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___23681))
;
return ((function (switch__23402__auto__,c__23514__auto___23681){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_23673 = [null,null,null,null,null,null,null,null];
(statearr_23673[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_23673[(1)] = (1));

return statearr_23673;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_23653){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_23653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e23674){if((e23674 instanceof Object)){
var ex__23406__auto__ = e23674;
var statearr_23675_23696 = state_23653;
(statearr_23675_23696[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23697 = state_23653;
state_23653 = G__23697;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_23653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_23653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___23681))
})();
var state__23516__auto__ = (function (){var statearr_23676 = f__23515__auto__.call(null);
(statearr_23676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___23681);

return statearr_23676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___23681))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23881){
var vec__23882 = p__23881;
var v = cljs.core.nth.call(null,vec__23882,(0),null);
var p = cljs.core.nth.call(null,vec__23882,(1),null);
var job = vec__23882;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23514__auto___24064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___24064,res,vec__23882,v,p,job,jobs,results){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___24064,res,vec__23882,v,p,job,jobs,results){
return (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (1))){
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23887__$1,(2),res,v);
} else {
if((state_val_23888 === (2))){
var inst_23884 = (state_23887[(2)]);
var inst_23885 = cljs.core.async.close_BANG_.call(null,res);
var state_23887__$1 = (function (){var statearr_23889 = state_23887;
(statearr_23889[(7)] = inst_23884);

return statearr_23889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else {
return null;
}
}
});})(c__23514__auto___24064,res,vec__23882,v,p,job,jobs,results))
;
return ((function (switch__23402__auto__,c__23514__auto___24064,res,vec__23882,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0 = (function (){
var statearr_23893 = [null,null,null,null,null,null,null,null];
(statearr_23893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__);

(statearr_23893[(1)] = (1));

return statearr_23893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1 = (function (state_23887){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_23887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e23894){if((e23894 instanceof Object)){
var ex__23406__auto__ = e23894;
var statearr_23895_24065 = state_23887;
(statearr_23895_24065[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24066 = state_23887;
state_23887 = G__24066;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___24064,res,vec__23882,v,p,job,jobs,results))
})();
var state__23516__auto__ = (function (){var statearr_23896 = f__23515__auto__.call(null);
(statearr_23896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___24064);

return statearr_23896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___24064,res,vec__23882,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23897){
var vec__23898 = p__23897;
var v = cljs.core.nth.call(null,vec__23898,(0),null);
var p = cljs.core.nth.call(null,vec__23898,(1),null);
var job = vec__23898;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22133__auto___24067 = n;
var __24068 = (0);
while(true){
if((__24068 < n__22133__auto___24067)){
var G__23899_24069 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23899_24069) {
case "compute":
var c__23514__auto___24071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24068,c__23514__auto___24071,G__23899_24069,n__22133__auto___24067,jobs,results,process,async){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (__24068,c__23514__auto___24071,G__23899_24069,n__22133__auto___24067,jobs,results,process,async){
return (function (state_23912){
var state_val_23913 = (state_23912[(1)]);
if((state_val_23913 === (1))){
var state_23912__$1 = state_23912;
var statearr_23914_24072 = state_23912__$1;
(statearr_23914_24072[(2)] = null);

(statearr_23914_24072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (2))){
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23912__$1,(4),jobs);
} else {
if((state_val_23913 === (3))){
var inst_23910 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23912__$1,inst_23910);
} else {
if((state_val_23913 === (4))){
var inst_23902 = (state_23912[(2)]);
var inst_23903 = process.call(null,inst_23902);
var state_23912__$1 = state_23912;
if(cljs.core.truth_(inst_23903)){
var statearr_23915_24073 = state_23912__$1;
(statearr_23915_24073[(1)] = (5));

} else {
var statearr_23916_24074 = state_23912__$1;
(statearr_23916_24074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (5))){
var state_23912__$1 = state_23912;
var statearr_23917_24075 = state_23912__$1;
(statearr_23917_24075[(2)] = null);

(statearr_23917_24075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (6))){
var state_23912__$1 = state_23912;
var statearr_23918_24076 = state_23912__$1;
(statearr_23918_24076[(2)] = null);

(statearr_23918_24076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (7))){
var inst_23908 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
var statearr_23919_24077 = state_23912__$1;
(statearr_23919_24077[(2)] = inst_23908);

(statearr_23919_24077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24068,c__23514__auto___24071,G__23899_24069,n__22133__auto___24067,jobs,results,process,async))
;
return ((function (__24068,switch__23402__auto__,c__23514__auto___24071,G__23899_24069,n__22133__auto___24067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0 = (function (){
var statearr_23923 = [null,null,null,null,null,null,null];
(statearr_23923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__);

(statearr_23923[(1)] = (1));

return statearr_23923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1 = (function (state_23912){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_23912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e23924){if((e23924 instanceof Object)){
var ex__23406__auto__ = e23924;
var statearr_23925_24078 = state_23912;
(statearr_23925_24078[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24079 = state_23912;
state_23912 = G__24079;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = function(state_23912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1.call(this,state_23912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__;
})()
;})(__24068,switch__23402__auto__,c__23514__auto___24071,G__23899_24069,n__22133__auto___24067,jobs,results,process,async))
})();
var state__23516__auto__ = (function (){var statearr_23926 = f__23515__auto__.call(null);
(statearr_23926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___24071);

return statearr_23926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(__24068,c__23514__auto___24071,G__23899_24069,n__22133__auto___24067,jobs,results,process,async))
);


break;
case "async":
var c__23514__auto___24080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24068,c__23514__auto___24080,G__23899_24069,n__22133__auto___24067,jobs,results,process,async){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (__24068,c__23514__auto___24080,G__23899_24069,n__22133__auto___24067,jobs,results,process,async){
return (function (state_23939){
var state_val_23940 = (state_23939[(1)]);
if((state_val_23940 === (1))){
var state_23939__$1 = state_23939;
var statearr_23941_24081 = state_23939__$1;
(statearr_23941_24081[(2)] = null);

(statearr_23941_24081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (2))){
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23939__$1,(4),jobs);
} else {
if((state_val_23940 === (3))){
var inst_23937 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else {
if((state_val_23940 === (4))){
var inst_23929 = (state_23939[(2)]);
var inst_23930 = async.call(null,inst_23929);
var state_23939__$1 = state_23939;
if(cljs.core.truth_(inst_23930)){
var statearr_23942_24082 = state_23939__$1;
(statearr_23942_24082[(1)] = (5));

} else {
var statearr_23943_24083 = state_23939__$1;
(statearr_23943_24083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (5))){
var state_23939__$1 = state_23939;
var statearr_23944_24084 = state_23939__$1;
(statearr_23944_24084[(2)] = null);

(statearr_23944_24084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (6))){
var state_23939__$1 = state_23939;
var statearr_23945_24085 = state_23939__$1;
(statearr_23945_24085[(2)] = null);

(statearr_23945_24085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (7))){
var inst_23935 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
var statearr_23946_24086 = state_23939__$1;
(statearr_23946_24086[(2)] = inst_23935);

(statearr_23946_24086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24068,c__23514__auto___24080,G__23899_24069,n__22133__auto___24067,jobs,results,process,async))
;
return ((function (__24068,switch__23402__auto__,c__23514__auto___24080,G__23899_24069,n__22133__auto___24067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0 = (function (){
var statearr_23950 = [null,null,null,null,null,null,null];
(statearr_23950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__);

(statearr_23950[(1)] = (1));

return statearr_23950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1 = (function (state_23939){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_23939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e23951){if((e23951 instanceof Object)){
var ex__23406__auto__ = e23951;
var statearr_23952_24087 = state_23939;
(statearr_23952_24087[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24088 = state_23939;
state_23939 = G__24088;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__;
})()
;})(__24068,switch__23402__auto__,c__23514__auto___24080,G__23899_24069,n__22133__auto___24067,jobs,results,process,async))
})();
var state__23516__auto__ = (function (){var statearr_23953 = f__23515__auto__.call(null);
(statearr_23953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___24080);

return statearr_23953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(__24068,c__23514__auto___24080,G__23899_24069,n__22133__auto___24067,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24089 = (__24068 + (1));
__24068 = G__24089;
continue;
} else {
}
break;
}

var c__23514__auto___24090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___24090,jobs,results,process,async){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___24090,jobs,results,process,async){
return (function (state_23975){
var state_val_23976 = (state_23975[(1)]);
if((state_val_23976 === (1))){
var state_23975__$1 = state_23975;
var statearr_23977_24091 = state_23975__$1;
(statearr_23977_24091[(2)] = null);

(statearr_23977_24091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (2))){
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(4),from);
} else {
if((state_val_23976 === (3))){
var inst_23973 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23975__$1,inst_23973);
} else {
if((state_val_23976 === (4))){
var inst_23956 = (state_23975[(7)]);
var inst_23956__$1 = (state_23975[(2)]);
var inst_23957 = (inst_23956__$1 == null);
var state_23975__$1 = (function (){var statearr_23978 = state_23975;
(statearr_23978[(7)] = inst_23956__$1);

return statearr_23978;
})();
if(cljs.core.truth_(inst_23957)){
var statearr_23979_24092 = state_23975__$1;
(statearr_23979_24092[(1)] = (5));

} else {
var statearr_23980_24093 = state_23975__$1;
(statearr_23980_24093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (5))){
var inst_23959 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23975__$1 = state_23975;
var statearr_23981_24094 = state_23975__$1;
(statearr_23981_24094[(2)] = inst_23959);

(statearr_23981_24094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (6))){
var inst_23956 = (state_23975[(7)]);
var inst_23961 = (state_23975[(8)]);
var inst_23961__$1 = cljs.core.async.chan.call(null,(1));
var inst_23962 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23963 = [inst_23956,inst_23961__$1];
var inst_23964 = (new cljs.core.PersistentVector(null,2,(5),inst_23962,inst_23963,null));
var state_23975__$1 = (function (){var statearr_23982 = state_23975;
(statearr_23982[(8)] = inst_23961__$1);

return statearr_23982;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23975__$1,(8),jobs,inst_23964);
} else {
if((state_val_23976 === (7))){
var inst_23971 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23983_24095 = state_23975__$1;
(statearr_23983_24095[(2)] = inst_23971);

(statearr_23983_24095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (8))){
var inst_23961 = (state_23975[(8)]);
var inst_23966 = (state_23975[(2)]);
var state_23975__$1 = (function (){var statearr_23984 = state_23975;
(statearr_23984[(9)] = inst_23966);

return statearr_23984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23975__$1,(9),results,inst_23961);
} else {
if((state_val_23976 === (9))){
var inst_23968 = (state_23975[(2)]);
var state_23975__$1 = (function (){var statearr_23985 = state_23975;
(statearr_23985[(10)] = inst_23968);

return statearr_23985;
})();
var statearr_23986_24096 = state_23975__$1;
(statearr_23986_24096[(2)] = null);

(statearr_23986_24096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___24090,jobs,results,process,async))
;
return ((function (switch__23402__auto__,c__23514__auto___24090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0 = (function (){
var statearr_23990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__);

(statearr_23990[(1)] = (1));

return statearr_23990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1 = (function (state_23975){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_23975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e23991){if((e23991 instanceof Object)){
var ex__23406__auto__ = e23991;
var statearr_23992_24097 = state_23975;
(statearr_23992_24097[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24098 = state_23975;
state_23975 = G__24098;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = function(state_23975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1.call(this,state_23975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___24090,jobs,results,process,async))
})();
var state__23516__auto__ = (function (){var statearr_23993 = f__23515__auto__.call(null);
(statearr_23993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___24090);

return statearr_23993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___24090,jobs,results,process,async))
);


var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__,jobs,results,process,async){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__,jobs,results,process,async){
return (function (state_24031){
var state_val_24032 = (state_24031[(1)]);
if((state_val_24032 === (7))){
var inst_24027 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24033_24099 = state_24031__$1;
(statearr_24033_24099[(2)] = inst_24027);

(statearr_24033_24099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (20))){
var state_24031__$1 = state_24031;
var statearr_24034_24100 = state_24031__$1;
(statearr_24034_24100[(2)] = null);

(statearr_24034_24100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (1))){
var state_24031__$1 = state_24031;
var statearr_24035_24101 = state_24031__$1;
(statearr_24035_24101[(2)] = null);

(statearr_24035_24101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (4))){
var inst_23996 = (state_24031[(7)]);
var inst_23996__$1 = (state_24031[(2)]);
var inst_23997 = (inst_23996__$1 == null);
var state_24031__$1 = (function (){var statearr_24036 = state_24031;
(statearr_24036[(7)] = inst_23996__$1);

return statearr_24036;
})();
if(cljs.core.truth_(inst_23997)){
var statearr_24037_24102 = state_24031__$1;
(statearr_24037_24102[(1)] = (5));

} else {
var statearr_24038_24103 = state_24031__$1;
(statearr_24038_24103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (15))){
var inst_24009 = (state_24031[(8)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24031__$1,(18),to,inst_24009);
} else {
if((state_val_24032 === (21))){
var inst_24022 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24039_24104 = state_24031__$1;
(statearr_24039_24104[(2)] = inst_24022);

(statearr_24039_24104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (13))){
var inst_24024 = (state_24031[(2)]);
var state_24031__$1 = (function (){var statearr_24040 = state_24031;
(statearr_24040[(9)] = inst_24024);

return statearr_24040;
})();
var statearr_24041_24105 = state_24031__$1;
(statearr_24041_24105[(2)] = null);

(statearr_24041_24105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (6))){
var inst_23996 = (state_24031[(7)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24031__$1,(11),inst_23996);
} else {
if((state_val_24032 === (17))){
var inst_24017 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
if(cljs.core.truth_(inst_24017)){
var statearr_24042_24106 = state_24031__$1;
(statearr_24042_24106[(1)] = (19));

} else {
var statearr_24043_24107 = state_24031__$1;
(statearr_24043_24107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (3))){
var inst_24029 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24031__$1,inst_24029);
} else {
if((state_val_24032 === (12))){
var inst_24006 = (state_24031[(10)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24031__$1,(14),inst_24006);
} else {
if((state_val_24032 === (2))){
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24031__$1,(4),results);
} else {
if((state_val_24032 === (19))){
var state_24031__$1 = state_24031;
var statearr_24044_24108 = state_24031__$1;
(statearr_24044_24108[(2)] = null);

(statearr_24044_24108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (11))){
var inst_24006 = (state_24031[(2)]);
var state_24031__$1 = (function (){var statearr_24045 = state_24031;
(statearr_24045[(10)] = inst_24006);

return statearr_24045;
})();
var statearr_24046_24109 = state_24031__$1;
(statearr_24046_24109[(2)] = null);

(statearr_24046_24109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (9))){
var state_24031__$1 = state_24031;
var statearr_24047_24110 = state_24031__$1;
(statearr_24047_24110[(2)] = null);

(statearr_24047_24110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (5))){
var state_24031__$1 = state_24031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24048_24111 = state_24031__$1;
(statearr_24048_24111[(1)] = (8));

} else {
var statearr_24049_24112 = state_24031__$1;
(statearr_24049_24112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (14))){
var inst_24011 = (state_24031[(11)]);
var inst_24009 = (state_24031[(8)]);
var inst_24009__$1 = (state_24031[(2)]);
var inst_24010 = (inst_24009__$1 == null);
var inst_24011__$1 = cljs.core.not.call(null,inst_24010);
var state_24031__$1 = (function (){var statearr_24050 = state_24031;
(statearr_24050[(11)] = inst_24011__$1);

(statearr_24050[(8)] = inst_24009__$1);

return statearr_24050;
})();
if(inst_24011__$1){
var statearr_24051_24113 = state_24031__$1;
(statearr_24051_24113[(1)] = (15));

} else {
var statearr_24052_24114 = state_24031__$1;
(statearr_24052_24114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (16))){
var inst_24011 = (state_24031[(11)]);
var state_24031__$1 = state_24031;
var statearr_24053_24115 = state_24031__$1;
(statearr_24053_24115[(2)] = inst_24011);

(statearr_24053_24115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (10))){
var inst_24003 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24054_24116 = state_24031__$1;
(statearr_24054_24116[(2)] = inst_24003);

(statearr_24054_24116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (18))){
var inst_24014 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24055_24117 = state_24031__$1;
(statearr_24055_24117[(2)] = inst_24014);

(statearr_24055_24117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (8))){
var inst_24000 = cljs.core.async.close_BANG_.call(null,to);
var state_24031__$1 = state_24031;
var statearr_24056_24118 = state_24031__$1;
(statearr_24056_24118[(2)] = inst_24000);

(statearr_24056_24118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto__,jobs,results,process,async))
;
return ((function (switch__23402__auto__,c__23514__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0 = (function (){
var statearr_24060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__);

(statearr_24060[(1)] = (1));

return statearr_24060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1 = (function (state_24031){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_24031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object)){
var ex__23406__auto__ = e24061;
var statearr_24062_24119 = state_24031;
(statearr_24062_24119[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24120 = state_24031;
state_24031 = G__24120;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__ = function(state_24031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1.call(this,state_24031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__,jobs,results,process,async))
})();
var state__23516__auto__ = (function (){var statearr_24063 = f__23515__auto__.call(null);
(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_24063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__,jobs,results,process,async))
);

return c__23514__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24121 = [];
var len__22288__auto___24124 = arguments.length;
var i__22289__auto___24125 = (0);
while(true){
if((i__22289__auto___24125 < len__22288__auto___24124)){
args24121.push((arguments[i__22289__auto___24125]));

var G__24126 = (i__22289__auto___24125 + (1));
i__22289__auto___24125 = G__24126;
continue;
} else {
}
break;
}

var G__24123 = args24121.length;
switch (G__24123) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24121.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24128 = [];
var len__22288__auto___24131 = arguments.length;
var i__22289__auto___24132 = (0);
while(true){
if((i__22289__auto___24132 < len__22288__auto___24131)){
args24128.push((arguments[i__22289__auto___24132]));

var G__24133 = (i__22289__auto___24132 + (1));
i__22289__auto___24132 = G__24133;
continue;
} else {
}
break;
}

var G__24130 = args24128.length;
switch (G__24130) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24128.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24135 = [];
var len__22288__auto___24188 = arguments.length;
var i__22289__auto___24189 = (0);
while(true){
if((i__22289__auto___24189 < len__22288__auto___24188)){
args24135.push((arguments[i__22289__auto___24189]));

var G__24190 = (i__22289__auto___24189 + (1));
i__22289__auto___24189 = G__24190;
continue;
} else {
}
break;
}

var G__24137 = args24135.length;
switch (G__24137) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24135.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23514__auto___24192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___24192,tc,fc){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___24192,tc,fc){
return (function (state_24163){
var state_val_24164 = (state_24163[(1)]);
if((state_val_24164 === (7))){
var inst_24159 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24165_24193 = state_24163__$1;
(statearr_24165_24193[(2)] = inst_24159);

(statearr_24165_24193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (1))){
var state_24163__$1 = state_24163;
var statearr_24166_24194 = state_24163__$1;
(statearr_24166_24194[(2)] = null);

(statearr_24166_24194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (4))){
var inst_24140 = (state_24163[(7)]);
var inst_24140__$1 = (state_24163[(2)]);
var inst_24141 = (inst_24140__$1 == null);
var state_24163__$1 = (function (){var statearr_24167 = state_24163;
(statearr_24167[(7)] = inst_24140__$1);

return statearr_24167;
})();
if(cljs.core.truth_(inst_24141)){
var statearr_24168_24195 = state_24163__$1;
(statearr_24168_24195[(1)] = (5));

} else {
var statearr_24169_24196 = state_24163__$1;
(statearr_24169_24196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (13))){
var state_24163__$1 = state_24163;
var statearr_24170_24197 = state_24163__$1;
(statearr_24170_24197[(2)] = null);

(statearr_24170_24197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (6))){
var inst_24140 = (state_24163[(7)]);
var inst_24146 = p.call(null,inst_24140);
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24146)){
var statearr_24171_24198 = state_24163__$1;
(statearr_24171_24198[(1)] = (9));

} else {
var statearr_24172_24199 = state_24163__$1;
(statearr_24172_24199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (3))){
var inst_24161 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24163__$1,inst_24161);
} else {
if((state_val_24164 === (12))){
var state_24163__$1 = state_24163;
var statearr_24173_24200 = state_24163__$1;
(statearr_24173_24200[(2)] = null);

(statearr_24173_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (2))){
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24163__$1,(4),ch);
} else {
if((state_val_24164 === (11))){
var inst_24140 = (state_24163[(7)]);
var inst_24150 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24163__$1,(8),inst_24150,inst_24140);
} else {
if((state_val_24164 === (9))){
var state_24163__$1 = state_24163;
var statearr_24174_24201 = state_24163__$1;
(statearr_24174_24201[(2)] = tc);

(statearr_24174_24201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (5))){
var inst_24143 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24144 = cljs.core.async.close_BANG_.call(null,fc);
var state_24163__$1 = (function (){var statearr_24175 = state_24163;
(statearr_24175[(8)] = inst_24143);

return statearr_24175;
})();
var statearr_24176_24202 = state_24163__$1;
(statearr_24176_24202[(2)] = inst_24144);

(statearr_24176_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (14))){
var inst_24157 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24177_24203 = state_24163__$1;
(statearr_24177_24203[(2)] = inst_24157);

(statearr_24177_24203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (10))){
var state_24163__$1 = state_24163;
var statearr_24178_24204 = state_24163__$1;
(statearr_24178_24204[(2)] = fc);

(statearr_24178_24204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (8))){
var inst_24152 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24152)){
var statearr_24179_24205 = state_24163__$1;
(statearr_24179_24205[(1)] = (12));

} else {
var statearr_24180_24206 = state_24163__$1;
(statearr_24180_24206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___24192,tc,fc))
;
return ((function (switch__23402__auto__,c__23514__auto___24192,tc,fc){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_24184 = [null,null,null,null,null,null,null,null,null];
(statearr_24184[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_24184[(1)] = (1));

return statearr_24184;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_24163){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_24163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e24185){if((e24185 instanceof Object)){
var ex__23406__auto__ = e24185;
var statearr_24186_24207 = state_24163;
(statearr_24186_24207[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24208 = state_24163;
state_24163 = G__24208;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___24192,tc,fc))
})();
var state__23516__auto__ = (function (){var statearr_24187 = f__23515__auto__.call(null);
(statearr_24187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___24192);

return statearr_24187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___24192,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__){
return (function (state_24272){
var state_val_24273 = (state_24272[(1)]);
if((state_val_24273 === (7))){
var inst_24268 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24274_24295 = state_24272__$1;
(statearr_24274_24295[(2)] = inst_24268);

(statearr_24274_24295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (1))){
var inst_24252 = init;
var state_24272__$1 = (function (){var statearr_24275 = state_24272;
(statearr_24275[(7)] = inst_24252);

return statearr_24275;
})();
var statearr_24276_24296 = state_24272__$1;
(statearr_24276_24296[(2)] = null);

(statearr_24276_24296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (4))){
var inst_24255 = (state_24272[(8)]);
var inst_24255__$1 = (state_24272[(2)]);
var inst_24256 = (inst_24255__$1 == null);
var state_24272__$1 = (function (){var statearr_24277 = state_24272;
(statearr_24277[(8)] = inst_24255__$1);

return statearr_24277;
})();
if(cljs.core.truth_(inst_24256)){
var statearr_24278_24297 = state_24272__$1;
(statearr_24278_24297[(1)] = (5));

} else {
var statearr_24279_24298 = state_24272__$1;
(statearr_24279_24298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (6))){
var inst_24252 = (state_24272[(7)]);
var inst_24259 = (state_24272[(9)]);
var inst_24255 = (state_24272[(8)]);
var inst_24259__$1 = f.call(null,inst_24252,inst_24255);
var inst_24260 = cljs.core.reduced_QMARK_.call(null,inst_24259__$1);
var state_24272__$1 = (function (){var statearr_24280 = state_24272;
(statearr_24280[(9)] = inst_24259__$1);

return statearr_24280;
})();
if(inst_24260){
var statearr_24281_24299 = state_24272__$1;
(statearr_24281_24299[(1)] = (8));

} else {
var statearr_24282_24300 = state_24272__$1;
(statearr_24282_24300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (3))){
var inst_24270 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
} else {
if((state_val_24273 === (2))){
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(4),ch);
} else {
if((state_val_24273 === (9))){
var inst_24259 = (state_24272[(9)]);
var inst_24252 = inst_24259;
var state_24272__$1 = (function (){var statearr_24283 = state_24272;
(statearr_24283[(7)] = inst_24252);

return statearr_24283;
})();
var statearr_24284_24301 = state_24272__$1;
(statearr_24284_24301[(2)] = null);

(statearr_24284_24301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (5))){
var inst_24252 = (state_24272[(7)]);
var state_24272__$1 = state_24272;
var statearr_24285_24302 = state_24272__$1;
(statearr_24285_24302[(2)] = inst_24252);

(statearr_24285_24302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (10))){
var inst_24266 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24286_24303 = state_24272__$1;
(statearr_24286_24303[(2)] = inst_24266);

(statearr_24286_24303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (8))){
var inst_24259 = (state_24272[(9)]);
var inst_24262 = cljs.core.deref.call(null,inst_24259);
var state_24272__$1 = state_24272;
var statearr_24287_24304 = state_24272__$1;
(statearr_24287_24304[(2)] = inst_24262);

(statearr_24287_24304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto__))
;
return ((function (switch__23402__auto__,c__23514__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23403__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23403__auto____0 = (function (){
var statearr_24291 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24291[(0)] = cljs$core$async$reduce_$_state_machine__23403__auto__);

(statearr_24291[(1)] = (1));

return statearr_24291;
});
var cljs$core$async$reduce_$_state_machine__23403__auto____1 = (function (state_24272){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_24272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e24292){if((e24292 instanceof Object)){
var ex__23406__auto__ = e24292;
var statearr_24293_24305 = state_24272;
(statearr_24293_24305[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24306 = state_24272;
state_24272 = G__24306;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23403__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23403__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23403__auto____0;
cljs$core$async$reduce_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23403__auto____1;
return cljs$core$async$reduce_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__))
})();
var state__23516__auto__ = (function (){var statearr_24294 = f__23515__auto__.call(null);
(statearr_24294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_24294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__))
);

return c__23514__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24307 = [];
var len__22288__auto___24359 = arguments.length;
var i__22289__auto___24360 = (0);
while(true){
if((i__22289__auto___24360 < len__22288__auto___24359)){
args24307.push((arguments[i__22289__auto___24360]));

var G__24361 = (i__22289__auto___24360 + (1));
i__22289__auto___24360 = G__24361;
continue;
} else {
}
break;
}

var G__24309 = args24307.length;
switch (G__24309) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24307.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__){
return (function (state_24334){
var state_val_24335 = (state_24334[(1)]);
if((state_val_24335 === (7))){
var inst_24316 = (state_24334[(2)]);
var state_24334__$1 = state_24334;
var statearr_24336_24363 = state_24334__$1;
(statearr_24336_24363[(2)] = inst_24316);

(statearr_24336_24363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (1))){
var inst_24310 = cljs.core.seq.call(null,coll);
var inst_24311 = inst_24310;
var state_24334__$1 = (function (){var statearr_24337 = state_24334;
(statearr_24337[(7)] = inst_24311);

return statearr_24337;
})();
var statearr_24338_24364 = state_24334__$1;
(statearr_24338_24364[(2)] = null);

(statearr_24338_24364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (4))){
var inst_24311 = (state_24334[(7)]);
var inst_24314 = cljs.core.first.call(null,inst_24311);
var state_24334__$1 = state_24334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24334__$1,(7),ch,inst_24314);
} else {
if((state_val_24335 === (13))){
var inst_24328 = (state_24334[(2)]);
var state_24334__$1 = state_24334;
var statearr_24339_24365 = state_24334__$1;
(statearr_24339_24365[(2)] = inst_24328);

(statearr_24339_24365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (6))){
var inst_24319 = (state_24334[(2)]);
var state_24334__$1 = state_24334;
if(cljs.core.truth_(inst_24319)){
var statearr_24340_24366 = state_24334__$1;
(statearr_24340_24366[(1)] = (8));

} else {
var statearr_24341_24367 = state_24334__$1;
(statearr_24341_24367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (3))){
var inst_24332 = (state_24334[(2)]);
var state_24334__$1 = state_24334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24334__$1,inst_24332);
} else {
if((state_val_24335 === (12))){
var state_24334__$1 = state_24334;
var statearr_24342_24368 = state_24334__$1;
(statearr_24342_24368[(2)] = null);

(statearr_24342_24368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (2))){
var inst_24311 = (state_24334[(7)]);
var state_24334__$1 = state_24334;
if(cljs.core.truth_(inst_24311)){
var statearr_24343_24369 = state_24334__$1;
(statearr_24343_24369[(1)] = (4));

} else {
var statearr_24344_24370 = state_24334__$1;
(statearr_24344_24370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (11))){
var inst_24325 = cljs.core.async.close_BANG_.call(null,ch);
var state_24334__$1 = state_24334;
var statearr_24345_24371 = state_24334__$1;
(statearr_24345_24371[(2)] = inst_24325);

(statearr_24345_24371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (9))){
var state_24334__$1 = state_24334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24346_24372 = state_24334__$1;
(statearr_24346_24372[(1)] = (11));

} else {
var statearr_24347_24373 = state_24334__$1;
(statearr_24347_24373[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (5))){
var inst_24311 = (state_24334[(7)]);
var state_24334__$1 = state_24334;
var statearr_24348_24374 = state_24334__$1;
(statearr_24348_24374[(2)] = inst_24311);

(statearr_24348_24374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (10))){
var inst_24330 = (state_24334[(2)]);
var state_24334__$1 = state_24334;
var statearr_24349_24375 = state_24334__$1;
(statearr_24349_24375[(2)] = inst_24330);

(statearr_24349_24375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24335 === (8))){
var inst_24311 = (state_24334[(7)]);
var inst_24321 = cljs.core.next.call(null,inst_24311);
var inst_24311__$1 = inst_24321;
var state_24334__$1 = (function (){var statearr_24350 = state_24334;
(statearr_24350[(7)] = inst_24311__$1);

return statearr_24350;
})();
var statearr_24351_24376 = state_24334__$1;
(statearr_24351_24376[(2)] = null);

(statearr_24351_24376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto__))
;
return ((function (switch__23402__auto__,c__23514__auto__){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_24355 = [null,null,null,null,null,null,null,null];
(statearr_24355[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_24355[(1)] = (1));

return statearr_24355;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_24334){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_24334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e24356){if((e24356 instanceof Object)){
var ex__23406__auto__ = e24356;
var statearr_24357_24377 = state_24334;
(statearr_24357_24377[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24378 = state_24334;
state_24334 = G__24378;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_24334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_24334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__))
})();
var state__23516__auto__ = (function (){var statearr_24358 = f__23515__auto__.call(null);
(statearr_24358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_24358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__))
);

return c__23514__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21885__auto__ = (((_ == null))?null:_);
var m__21886__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,_);
} else {
var m__21886__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21886__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m,ch);
} else {
var m__21886__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m);
} else {
var m__21886__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24600 = (function (mult,ch,cs,meta24601){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24601 = meta24601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24602,meta24601__$1){
var self__ = this;
var _24602__$1 = this;
return (new cljs.core.async.t_cljs$core$async24600(self__.mult,self__.ch,self__.cs,meta24601__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24602){
var self__ = this;
var _24602__$1 = this;
return self__.meta24601;
});})(cs))
;

cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24600.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24601","meta24601",-1884752767,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24600";

cljs.core.async.t_cljs$core$async24600.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async24600");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24600 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24600(mult__$1,ch__$1,cs__$1,meta24601){
return (new cljs.core.async.t_cljs$core$async24600(mult__$1,ch__$1,cs__$1,meta24601));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24600(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23514__auto___24821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___24821,cs,m,dchan,dctr,done){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___24821,cs,m,dchan,dctr,done){
return (function (state_24733){
var state_val_24734 = (state_24733[(1)]);
if((state_val_24734 === (7))){
var inst_24729 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24735_24822 = state_24733__$1;
(statearr_24735_24822[(2)] = inst_24729);

(statearr_24735_24822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (20))){
var inst_24634 = (state_24733[(7)]);
var inst_24644 = cljs.core.first.call(null,inst_24634);
var inst_24645 = cljs.core.nth.call(null,inst_24644,(0),null);
var inst_24646 = cljs.core.nth.call(null,inst_24644,(1),null);
var state_24733__$1 = (function (){var statearr_24736 = state_24733;
(statearr_24736[(8)] = inst_24645);

return statearr_24736;
})();
if(cljs.core.truth_(inst_24646)){
var statearr_24737_24823 = state_24733__$1;
(statearr_24737_24823[(1)] = (22));

} else {
var statearr_24738_24824 = state_24733__$1;
(statearr_24738_24824[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (27))){
var inst_24681 = (state_24733[(9)]);
var inst_24674 = (state_24733[(10)]);
var inst_24605 = (state_24733[(11)]);
var inst_24676 = (state_24733[(12)]);
var inst_24681__$1 = cljs.core._nth.call(null,inst_24674,inst_24676);
var inst_24682 = cljs.core.async.put_BANG_.call(null,inst_24681__$1,inst_24605,done);
var state_24733__$1 = (function (){var statearr_24739 = state_24733;
(statearr_24739[(9)] = inst_24681__$1);

return statearr_24739;
})();
if(cljs.core.truth_(inst_24682)){
var statearr_24740_24825 = state_24733__$1;
(statearr_24740_24825[(1)] = (30));

} else {
var statearr_24741_24826 = state_24733__$1;
(statearr_24741_24826[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (1))){
var state_24733__$1 = state_24733;
var statearr_24742_24827 = state_24733__$1;
(statearr_24742_24827[(2)] = null);

(statearr_24742_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (24))){
var inst_24634 = (state_24733[(7)]);
var inst_24651 = (state_24733[(2)]);
var inst_24652 = cljs.core.next.call(null,inst_24634);
var inst_24614 = inst_24652;
var inst_24615 = null;
var inst_24616 = (0);
var inst_24617 = (0);
var state_24733__$1 = (function (){var statearr_24743 = state_24733;
(statearr_24743[(13)] = inst_24615);

(statearr_24743[(14)] = inst_24617);

(statearr_24743[(15)] = inst_24614);

(statearr_24743[(16)] = inst_24651);

(statearr_24743[(17)] = inst_24616);

return statearr_24743;
})();
var statearr_24744_24828 = state_24733__$1;
(statearr_24744_24828[(2)] = null);

(statearr_24744_24828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (39))){
var state_24733__$1 = state_24733;
var statearr_24748_24829 = state_24733__$1;
(statearr_24748_24829[(2)] = null);

(statearr_24748_24829[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (4))){
var inst_24605 = (state_24733[(11)]);
var inst_24605__$1 = (state_24733[(2)]);
var inst_24606 = (inst_24605__$1 == null);
var state_24733__$1 = (function (){var statearr_24749 = state_24733;
(statearr_24749[(11)] = inst_24605__$1);

return statearr_24749;
})();
if(cljs.core.truth_(inst_24606)){
var statearr_24750_24830 = state_24733__$1;
(statearr_24750_24830[(1)] = (5));

} else {
var statearr_24751_24831 = state_24733__$1;
(statearr_24751_24831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (15))){
var inst_24615 = (state_24733[(13)]);
var inst_24617 = (state_24733[(14)]);
var inst_24614 = (state_24733[(15)]);
var inst_24616 = (state_24733[(17)]);
var inst_24630 = (state_24733[(2)]);
var inst_24631 = (inst_24617 + (1));
var tmp24745 = inst_24615;
var tmp24746 = inst_24614;
var tmp24747 = inst_24616;
var inst_24614__$1 = tmp24746;
var inst_24615__$1 = tmp24745;
var inst_24616__$1 = tmp24747;
var inst_24617__$1 = inst_24631;
var state_24733__$1 = (function (){var statearr_24752 = state_24733;
(statearr_24752[(13)] = inst_24615__$1);

(statearr_24752[(18)] = inst_24630);

(statearr_24752[(14)] = inst_24617__$1);

(statearr_24752[(15)] = inst_24614__$1);

(statearr_24752[(17)] = inst_24616__$1);

return statearr_24752;
})();
var statearr_24753_24832 = state_24733__$1;
(statearr_24753_24832[(2)] = null);

(statearr_24753_24832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (21))){
var inst_24655 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24757_24833 = state_24733__$1;
(statearr_24757_24833[(2)] = inst_24655);

(statearr_24757_24833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (31))){
var inst_24681 = (state_24733[(9)]);
var inst_24685 = done.call(null,null);
var inst_24686 = cljs.core.async.untap_STAR_.call(null,m,inst_24681);
var state_24733__$1 = (function (){var statearr_24758 = state_24733;
(statearr_24758[(19)] = inst_24685);

return statearr_24758;
})();
var statearr_24759_24834 = state_24733__$1;
(statearr_24759_24834[(2)] = inst_24686);

(statearr_24759_24834[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (32))){
var inst_24675 = (state_24733[(20)]);
var inst_24674 = (state_24733[(10)]);
var inst_24673 = (state_24733[(21)]);
var inst_24676 = (state_24733[(12)]);
var inst_24688 = (state_24733[(2)]);
var inst_24689 = (inst_24676 + (1));
var tmp24754 = inst_24675;
var tmp24755 = inst_24674;
var tmp24756 = inst_24673;
var inst_24673__$1 = tmp24756;
var inst_24674__$1 = tmp24755;
var inst_24675__$1 = tmp24754;
var inst_24676__$1 = inst_24689;
var state_24733__$1 = (function (){var statearr_24760 = state_24733;
(statearr_24760[(20)] = inst_24675__$1);

(statearr_24760[(22)] = inst_24688);

(statearr_24760[(10)] = inst_24674__$1);

(statearr_24760[(21)] = inst_24673__$1);

(statearr_24760[(12)] = inst_24676__$1);

return statearr_24760;
})();
var statearr_24761_24835 = state_24733__$1;
(statearr_24761_24835[(2)] = null);

(statearr_24761_24835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (40))){
var inst_24701 = (state_24733[(23)]);
var inst_24705 = done.call(null,null);
var inst_24706 = cljs.core.async.untap_STAR_.call(null,m,inst_24701);
var state_24733__$1 = (function (){var statearr_24762 = state_24733;
(statearr_24762[(24)] = inst_24705);

return statearr_24762;
})();
var statearr_24763_24836 = state_24733__$1;
(statearr_24763_24836[(2)] = inst_24706);

(statearr_24763_24836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (33))){
var inst_24692 = (state_24733[(25)]);
var inst_24694 = cljs.core.chunked_seq_QMARK_.call(null,inst_24692);
var state_24733__$1 = state_24733;
if(inst_24694){
var statearr_24764_24837 = state_24733__$1;
(statearr_24764_24837[(1)] = (36));

} else {
var statearr_24765_24838 = state_24733__$1;
(statearr_24765_24838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (13))){
var inst_24624 = (state_24733[(26)]);
var inst_24627 = cljs.core.async.close_BANG_.call(null,inst_24624);
var state_24733__$1 = state_24733;
var statearr_24766_24839 = state_24733__$1;
(statearr_24766_24839[(2)] = inst_24627);

(statearr_24766_24839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (22))){
var inst_24645 = (state_24733[(8)]);
var inst_24648 = cljs.core.async.close_BANG_.call(null,inst_24645);
var state_24733__$1 = state_24733;
var statearr_24767_24840 = state_24733__$1;
(statearr_24767_24840[(2)] = inst_24648);

(statearr_24767_24840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (36))){
var inst_24692 = (state_24733[(25)]);
var inst_24696 = cljs.core.chunk_first.call(null,inst_24692);
var inst_24697 = cljs.core.chunk_rest.call(null,inst_24692);
var inst_24698 = cljs.core.count.call(null,inst_24696);
var inst_24673 = inst_24697;
var inst_24674 = inst_24696;
var inst_24675 = inst_24698;
var inst_24676 = (0);
var state_24733__$1 = (function (){var statearr_24768 = state_24733;
(statearr_24768[(20)] = inst_24675);

(statearr_24768[(10)] = inst_24674);

(statearr_24768[(21)] = inst_24673);

(statearr_24768[(12)] = inst_24676);

return statearr_24768;
})();
var statearr_24769_24841 = state_24733__$1;
(statearr_24769_24841[(2)] = null);

(statearr_24769_24841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (41))){
var inst_24692 = (state_24733[(25)]);
var inst_24708 = (state_24733[(2)]);
var inst_24709 = cljs.core.next.call(null,inst_24692);
var inst_24673 = inst_24709;
var inst_24674 = null;
var inst_24675 = (0);
var inst_24676 = (0);
var state_24733__$1 = (function (){var statearr_24770 = state_24733;
(statearr_24770[(27)] = inst_24708);

(statearr_24770[(20)] = inst_24675);

(statearr_24770[(10)] = inst_24674);

(statearr_24770[(21)] = inst_24673);

(statearr_24770[(12)] = inst_24676);

return statearr_24770;
})();
var statearr_24771_24842 = state_24733__$1;
(statearr_24771_24842[(2)] = null);

(statearr_24771_24842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (43))){
var state_24733__$1 = state_24733;
var statearr_24772_24843 = state_24733__$1;
(statearr_24772_24843[(2)] = null);

(statearr_24772_24843[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (29))){
var inst_24717 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24773_24844 = state_24733__$1;
(statearr_24773_24844[(2)] = inst_24717);

(statearr_24773_24844[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (44))){
var inst_24726 = (state_24733[(2)]);
var state_24733__$1 = (function (){var statearr_24774 = state_24733;
(statearr_24774[(28)] = inst_24726);

return statearr_24774;
})();
var statearr_24775_24845 = state_24733__$1;
(statearr_24775_24845[(2)] = null);

(statearr_24775_24845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (6))){
var inst_24665 = (state_24733[(29)]);
var inst_24664 = cljs.core.deref.call(null,cs);
var inst_24665__$1 = cljs.core.keys.call(null,inst_24664);
var inst_24666 = cljs.core.count.call(null,inst_24665__$1);
var inst_24667 = cljs.core.reset_BANG_.call(null,dctr,inst_24666);
var inst_24672 = cljs.core.seq.call(null,inst_24665__$1);
var inst_24673 = inst_24672;
var inst_24674 = null;
var inst_24675 = (0);
var inst_24676 = (0);
var state_24733__$1 = (function (){var statearr_24776 = state_24733;
(statearr_24776[(20)] = inst_24675);

(statearr_24776[(30)] = inst_24667);

(statearr_24776[(10)] = inst_24674);

(statearr_24776[(21)] = inst_24673);

(statearr_24776[(29)] = inst_24665__$1);

(statearr_24776[(12)] = inst_24676);

return statearr_24776;
})();
var statearr_24777_24846 = state_24733__$1;
(statearr_24777_24846[(2)] = null);

(statearr_24777_24846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (28))){
var inst_24673 = (state_24733[(21)]);
var inst_24692 = (state_24733[(25)]);
var inst_24692__$1 = cljs.core.seq.call(null,inst_24673);
var state_24733__$1 = (function (){var statearr_24778 = state_24733;
(statearr_24778[(25)] = inst_24692__$1);

return statearr_24778;
})();
if(inst_24692__$1){
var statearr_24779_24847 = state_24733__$1;
(statearr_24779_24847[(1)] = (33));

} else {
var statearr_24780_24848 = state_24733__$1;
(statearr_24780_24848[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (25))){
var inst_24675 = (state_24733[(20)]);
var inst_24676 = (state_24733[(12)]);
var inst_24678 = (inst_24676 < inst_24675);
var inst_24679 = inst_24678;
var state_24733__$1 = state_24733;
if(cljs.core.truth_(inst_24679)){
var statearr_24781_24849 = state_24733__$1;
(statearr_24781_24849[(1)] = (27));

} else {
var statearr_24782_24850 = state_24733__$1;
(statearr_24782_24850[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (34))){
var state_24733__$1 = state_24733;
var statearr_24783_24851 = state_24733__$1;
(statearr_24783_24851[(2)] = null);

(statearr_24783_24851[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (17))){
var state_24733__$1 = state_24733;
var statearr_24784_24852 = state_24733__$1;
(statearr_24784_24852[(2)] = null);

(statearr_24784_24852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (3))){
var inst_24731 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24733__$1,inst_24731);
} else {
if((state_val_24734 === (12))){
var inst_24660 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24785_24853 = state_24733__$1;
(statearr_24785_24853[(2)] = inst_24660);

(statearr_24785_24853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (2))){
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24733__$1,(4),ch);
} else {
if((state_val_24734 === (23))){
var state_24733__$1 = state_24733;
var statearr_24786_24854 = state_24733__$1;
(statearr_24786_24854[(2)] = null);

(statearr_24786_24854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (35))){
var inst_24715 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24787_24855 = state_24733__$1;
(statearr_24787_24855[(2)] = inst_24715);

(statearr_24787_24855[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (19))){
var inst_24634 = (state_24733[(7)]);
var inst_24638 = cljs.core.chunk_first.call(null,inst_24634);
var inst_24639 = cljs.core.chunk_rest.call(null,inst_24634);
var inst_24640 = cljs.core.count.call(null,inst_24638);
var inst_24614 = inst_24639;
var inst_24615 = inst_24638;
var inst_24616 = inst_24640;
var inst_24617 = (0);
var state_24733__$1 = (function (){var statearr_24788 = state_24733;
(statearr_24788[(13)] = inst_24615);

(statearr_24788[(14)] = inst_24617);

(statearr_24788[(15)] = inst_24614);

(statearr_24788[(17)] = inst_24616);

return statearr_24788;
})();
var statearr_24789_24856 = state_24733__$1;
(statearr_24789_24856[(2)] = null);

(statearr_24789_24856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (11))){
var inst_24614 = (state_24733[(15)]);
var inst_24634 = (state_24733[(7)]);
var inst_24634__$1 = cljs.core.seq.call(null,inst_24614);
var state_24733__$1 = (function (){var statearr_24790 = state_24733;
(statearr_24790[(7)] = inst_24634__$1);

return statearr_24790;
})();
if(inst_24634__$1){
var statearr_24791_24857 = state_24733__$1;
(statearr_24791_24857[(1)] = (16));

} else {
var statearr_24792_24858 = state_24733__$1;
(statearr_24792_24858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (9))){
var inst_24662 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24793_24859 = state_24733__$1;
(statearr_24793_24859[(2)] = inst_24662);

(statearr_24793_24859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (5))){
var inst_24612 = cljs.core.deref.call(null,cs);
var inst_24613 = cljs.core.seq.call(null,inst_24612);
var inst_24614 = inst_24613;
var inst_24615 = null;
var inst_24616 = (0);
var inst_24617 = (0);
var state_24733__$1 = (function (){var statearr_24794 = state_24733;
(statearr_24794[(13)] = inst_24615);

(statearr_24794[(14)] = inst_24617);

(statearr_24794[(15)] = inst_24614);

(statearr_24794[(17)] = inst_24616);

return statearr_24794;
})();
var statearr_24795_24860 = state_24733__$1;
(statearr_24795_24860[(2)] = null);

(statearr_24795_24860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (14))){
var state_24733__$1 = state_24733;
var statearr_24796_24861 = state_24733__$1;
(statearr_24796_24861[(2)] = null);

(statearr_24796_24861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (45))){
var inst_24723 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24797_24862 = state_24733__$1;
(statearr_24797_24862[(2)] = inst_24723);

(statearr_24797_24862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (26))){
var inst_24665 = (state_24733[(29)]);
var inst_24719 = (state_24733[(2)]);
var inst_24720 = cljs.core.seq.call(null,inst_24665);
var state_24733__$1 = (function (){var statearr_24798 = state_24733;
(statearr_24798[(31)] = inst_24719);

return statearr_24798;
})();
if(inst_24720){
var statearr_24799_24863 = state_24733__$1;
(statearr_24799_24863[(1)] = (42));

} else {
var statearr_24800_24864 = state_24733__$1;
(statearr_24800_24864[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (16))){
var inst_24634 = (state_24733[(7)]);
var inst_24636 = cljs.core.chunked_seq_QMARK_.call(null,inst_24634);
var state_24733__$1 = state_24733;
if(inst_24636){
var statearr_24801_24865 = state_24733__$1;
(statearr_24801_24865[(1)] = (19));

} else {
var statearr_24802_24866 = state_24733__$1;
(statearr_24802_24866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (38))){
var inst_24712 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24803_24867 = state_24733__$1;
(statearr_24803_24867[(2)] = inst_24712);

(statearr_24803_24867[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (30))){
var state_24733__$1 = state_24733;
var statearr_24804_24868 = state_24733__$1;
(statearr_24804_24868[(2)] = null);

(statearr_24804_24868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (10))){
var inst_24615 = (state_24733[(13)]);
var inst_24617 = (state_24733[(14)]);
var inst_24623 = cljs.core._nth.call(null,inst_24615,inst_24617);
var inst_24624 = cljs.core.nth.call(null,inst_24623,(0),null);
var inst_24625 = cljs.core.nth.call(null,inst_24623,(1),null);
var state_24733__$1 = (function (){var statearr_24805 = state_24733;
(statearr_24805[(26)] = inst_24624);

return statearr_24805;
})();
if(cljs.core.truth_(inst_24625)){
var statearr_24806_24869 = state_24733__$1;
(statearr_24806_24869[(1)] = (13));

} else {
var statearr_24807_24870 = state_24733__$1;
(statearr_24807_24870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (18))){
var inst_24658 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24808_24871 = state_24733__$1;
(statearr_24808_24871[(2)] = inst_24658);

(statearr_24808_24871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (42))){
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24733__$1,(45),dchan);
} else {
if((state_val_24734 === (37))){
var inst_24701 = (state_24733[(23)]);
var inst_24605 = (state_24733[(11)]);
var inst_24692 = (state_24733[(25)]);
var inst_24701__$1 = cljs.core.first.call(null,inst_24692);
var inst_24702 = cljs.core.async.put_BANG_.call(null,inst_24701__$1,inst_24605,done);
var state_24733__$1 = (function (){var statearr_24809 = state_24733;
(statearr_24809[(23)] = inst_24701__$1);

return statearr_24809;
})();
if(cljs.core.truth_(inst_24702)){
var statearr_24810_24872 = state_24733__$1;
(statearr_24810_24872[(1)] = (39));

} else {
var statearr_24811_24873 = state_24733__$1;
(statearr_24811_24873[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (8))){
var inst_24617 = (state_24733[(14)]);
var inst_24616 = (state_24733[(17)]);
var inst_24619 = (inst_24617 < inst_24616);
var inst_24620 = inst_24619;
var state_24733__$1 = state_24733;
if(cljs.core.truth_(inst_24620)){
var statearr_24812_24874 = state_24733__$1;
(statearr_24812_24874[(1)] = (10));

} else {
var statearr_24813_24875 = state_24733__$1;
(statearr_24813_24875[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___24821,cs,m,dchan,dctr,done))
;
return ((function (switch__23402__auto__,c__23514__auto___24821,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23403__auto__ = null;
var cljs$core$async$mult_$_state_machine__23403__auto____0 = (function (){
var statearr_24817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24817[(0)] = cljs$core$async$mult_$_state_machine__23403__auto__);

(statearr_24817[(1)] = (1));

return statearr_24817;
});
var cljs$core$async$mult_$_state_machine__23403__auto____1 = (function (state_24733){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_24733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e24818){if((e24818 instanceof Object)){
var ex__23406__auto__ = e24818;
var statearr_24819_24876 = state_24733;
(statearr_24819_24876[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24877 = state_24733;
state_24733 = G__24877;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23403__auto__ = function(state_24733){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23403__auto____1.call(this,state_24733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23403__auto____0;
cljs$core$async$mult_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23403__auto____1;
return cljs$core$async$mult_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___24821,cs,m,dchan,dctr,done))
})();
var state__23516__auto__ = (function (){var statearr_24820 = f__23515__auto__.call(null);
(statearr_24820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___24821);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___24821,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24878 = [];
var len__22288__auto___24881 = arguments.length;
var i__22289__auto___24882 = (0);
while(true){
if((i__22289__auto___24882 < len__22288__auto___24881)){
args24878.push((arguments[i__22289__auto___24882]));

var G__24883 = (i__22289__auto___24882 + (1));
i__22289__auto___24882 = G__24883;
continue;
} else {
}
break;
}

var G__24880 = args24878.length;
switch (G__24880) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24878.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m,ch);
} else {
var m__21886__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m,ch);
} else {
var m__21886__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m);
} else {
var m__21886__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m,state_map);
} else {
var m__21886__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21885__auto__ = (((m == null))?null:m);
var m__21886__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,m,mode);
} else {
var m__21886__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22295__auto__ = [];
var len__22288__auto___24895 = arguments.length;
var i__22289__auto___24896 = (0);
while(true){
if((i__22289__auto___24896 < len__22288__auto___24895)){
args__22295__auto__.push((arguments[i__22289__auto___24896]));

var G__24897 = (i__22289__auto___24896 + (1));
i__22289__auto___24896 = G__24897;
continue;
} else {
}
break;
}

var argseq__22296__auto__ = ((((3) < args__22295__auto__.length))?(new cljs.core.IndexedSeq(args__22295__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22296__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24889){
var map__24890 = p__24889;
var map__24890__$1 = ((((!((map__24890 == null)))?((((map__24890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24890):map__24890);
var opts = map__24890__$1;
var statearr_24892_24898 = state;
(statearr_24892_24898[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24890,map__24890__$1,opts){
return (function (val){
var statearr_24893_24899 = state;
(statearr_24893_24899[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24890,map__24890__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24894_24900 = state;
(statearr_24894_24900[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24885){
var G__24886 = cljs.core.first.call(null,seq24885);
var seq24885__$1 = cljs.core.next.call(null,seq24885);
var G__24887 = cljs.core.first.call(null,seq24885__$1);
var seq24885__$2 = cljs.core.next.call(null,seq24885__$1);
var G__24888 = cljs.core.first.call(null,seq24885__$2);
var seq24885__$3 = cljs.core.next.call(null,seq24885__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24886,G__24887,G__24888,seq24885__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25064 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25065){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25065 = meta25065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25066,meta25065__$1){
var self__ = this;
var _25066__$1 = this;
return (new cljs.core.async.t_cljs$core$async25064(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25065__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25066){
var self__ = this;
var _25066__$1 = this;
return self__.meta25065;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25065","meta25065",-755491505,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25064";

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async25064");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25064 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25064(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25065){
return (new cljs.core.async.t_cljs$core$async25064(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25065));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25064(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23514__auto___25227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___25227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___25227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25164){
var state_val_25165 = (state_25164[(1)]);
if((state_val_25165 === (7))){
var inst_25082 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
var statearr_25166_25228 = state_25164__$1;
(statearr_25166_25228[(2)] = inst_25082);

(statearr_25166_25228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (20))){
var inst_25094 = (state_25164[(7)]);
var state_25164__$1 = state_25164;
var statearr_25167_25229 = state_25164__$1;
(statearr_25167_25229[(2)] = inst_25094);

(statearr_25167_25229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (27))){
var state_25164__$1 = state_25164;
var statearr_25168_25230 = state_25164__$1;
(statearr_25168_25230[(2)] = null);

(statearr_25168_25230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (1))){
var inst_25070 = (state_25164[(8)]);
var inst_25070__$1 = calc_state.call(null);
var inst_25072 = (inst_25070__$1 == null);
var inst_25073 = cljs.core.not.call(null,inst_25072);
var state_25164__$1 = (function (){var statearr_25169 = state_25164;
(statearr_25169[(8)] = inst_25070__$1);

return statearr_25169;
})();
if(inst_25073){
var statearr_25170_25231 = state_25164__$1;
(statearr_25170_25231[(1)] = (2));

} else {
var statearr_25171_25232 = state_25164__$1;
(statearr_25171_25232[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (24))){
var inst_25124 = (state_25164[(9)]);
var inst_25138 = (state_25164[(10)]);
var inst_25117 = (state_25164[(11)]);
var inst_25138__$1 = inst_25117.call(null,inst_25124);
var state_25164__$1 = (function (){var statearr_25172 = state_25164;
(statearr_25172[(10)] = inst_25138__$1);

return statearr_25172;
})();
if(cljs.core.truth_(inst_25138__$1)){
var statearr_25173_25233 = state_25164__$1;
(statearr_25173_25233[(1)] = (29));

} else {
var statearr_25174_25234 = state_25164__$1;
(statearr_25174_25234[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (4))){
var inst_25085 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
if(cljs.core.truth_(inst_25085)){
var statearr_25175_25235 = state_25164__$1;
(statearr_25175_25235[(1)] = (8));

} else {
var statearr_25176_25236 = state_25164__$1;
(statearr_25176_25236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (15))){
var inst_25111 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
if(cljs.core.truth_(inst_25111)){
var statearr_25177_25237 = state_25164__$1;
(statearr_25177_25237[(1)] = (19));

} else {
var statearr_25178_25238 = state_25164__$1;
(statearr_25178_25238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (21))){
var inst_25116 = (state_25164[(12)]);
var inst_25116__$1 = (state_25164[(2)]);
var inst_25117 = cljs.core.get.call(null,inst_25116__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25118 = cljs.core.get.call(null,inst_25116__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25119 = cljs.core.get.call(null,inst_25116__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25164__$1 = (function (){var statearr_25179 = state_25164;
(statearr_25179[(12)] = inst_25116__$1);

(statearr_25179[(11)] = inst_25117);

(statearr_25179[(13)] = inst_25118);

return statearr_25179;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25164__$1,(22),inst_25119);
} else {
if((state_val_25165 === (31))){
var inst_25146 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
if(cljs.core.truth_(inst_25146)){
var statearr_25180_25239 = state_25164__$1;
(statearr_25180_25239[(1)] = (32));

} else {
var statearr_25181_25240 = state_25164__$1;
(statearr_25181_25240[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (32))){
var inst_25123 = (state_25164[(14)]);
var state_25164__$1 = state_25164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25164__$1,(35),out,inst_25123);
} else {
if((state_val_25165 === (33))){
var inst_25116 = (state_25164[(12)]);
var inst_25094 = inst_25116;
var state_25164__$1 = (function (){var statearr_25182 = state_25164;
(statearr_25182[(7)] = inst_25094);

return statearr_25182;
})();
var statearr_25183_25241 = state_25164__$1;
(statearr_25183_25241[(2)] = null);

(statearr_25183_25241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (13))){
var inst_25094 = (state_25164[(7)]);
var inst_25101 = inst_25094.cljs$lang$protocol_mask$partition0$;
var inst_25102 = (inst_25101 & (64));
var inst_25103 = inst_25094.cljs$core$ISeq$;
var inst_25104 = (inst_25102) || (inst_25103);
var state_25164__$1 = state_25164;
if(cljs.core.truth_(inst_25104)){
var statearr_25184_25242 = state_25164__$1;
(statearr_25184_25242[(1)] = (16));

} else {
var statearr_25185_25243 = state_25164__$1;
(statearr_25185_25243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (22))){
var inst_25124 = (state_25164[(9)]);
var inst_25123 = (state_25164[(14)]);
var inst_25122 = (state_25164[(2)]);
var inst_25123__$1 = cljs.core.nth.call(null,inst_25122,(0),null);
var inst_25124__$1 = cljs.core.nth.call(null,inst_25122,(1),null);
var inst_25125 = (inst_25123__$1 == null);
var inst_25126 = cljs.core._EQ_.call(null,inst_25124__$1,change);
var inst_25127 = (inst_25125) || (inst_25126);
var state_25164__$1 = (function (){var statearr_25186 = state_25164;
(statearr_25186[(9)] = inst_25124__$1);

(statearr_25186[(14)] = inst_25123__$1);

return statearr_25186;
})();
if(cljs.core.truth_(inst_25127)){
var statearr_25187_25244 = state_25164__$1;
(statearr_25187_25244[(1)] = (23));

} else {
var statearr_25188_25245 = state_25164__$1;
(statearr_25188_25245[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (36))){
var inst_25116 = (state_25164[(12)]);
var inst_25094 = inst_25116;
var state_25164__$1 = (function (){var statearr_25189 = state_25164;
(statearr_25189[(7)] = inst_25094);

return statearr_25189;
})();
var statearr_25190_25246 = state_25164__$1;
(statearr_25190_25246[(2)] = null);

(statearr_25190_25246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (29))){
var inst_25138 = (state_25164[(10)]);
var state_25164__$1 = state_25164;
var statearr_25191_25247 = state_25164__$1;
(statearr_25191_25247[(2)] = inst_25138);

(statearr_25191_25247[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (6))){
var state_25164__$1 = state_25164;
var statearr_25192_25248 = state_25164__$1;
(statearr_25192_25248[(2)] = false);

(statearr_25192_25248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (28))){
var inst_25134 = (state_25164[(2)]);
var inst_25135 = calc_state.call(null);
var inst_25094 = inst_25135;
var state_25164__$1 = (function (){var statearr_25193 = state_25164;
(statearr_25193[(7)] = inst_25094);

(statearr_25193[(15)] = inst_25134);

return statearr_25193;
})();
var statearr_25194_25249 = state_25164__$1;
(statearr_25194_25249[(2)] = null);

(statearr_25194_25249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (25))){
var inst_25160 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
var statearr_25195_25250 = state_25164__$1;
(statearr_25195_25250[(2)] = inst_25160);

(statearr_25195_25250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (34))){
var inst_25158 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
var statearr_25196_25251 = state_25164__$1;
(statearr_25196_25251[(2)] = inst_25158);

(statearr_25196_25251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (17))){
var state_25164__$1 = state_25164;
var statearr_25197_25252 = state_25164__$1;
(statearr_25197_25252[(2)] = false);

(statearr_25197_25252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (3))){
var state_25164__$1 = state_25164;
var statearr_25198_25253 = state_25164__$1;
(statearr_25198_25253[(2)] = false);

(statearr_25198_25253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (12))){
var inst_25162 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25164__$1,inst_25162);
} else {
if((state_val_25165 === (2))){
var inst_25070 = (state_25164[(8)]);
var inst_25075 = inst_25070.cljs$lang$protocol_mask$partition0$;
var inst_25076 = (inst_25075 & (64));
var inst_25077 = inst_25070.cljs$core$ISeq$;
var inst_25078 = (inst_25076) || (inst_25077);
var state_25164__$1 = state_25164;
if(cljs.core.truth_(inst_25078)){
var statearr_25199_25254 = state_25164__$1;
(statearr_25199_25254[(1)] = (5));

} else {
var statearr_25200_25255 = state_25164__$1;
(statearr_25200_25255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (23))){
var inst_25123 = (state_25164[(14)]);
var inst_25129 = (inst_25123 == null);
var state_25164__$1 = state_25164;
if(cljs.core.truth_(inst_25129)){
var statearr_25201_25256 = state_25164__$1;
(statearr_25201_25256[(1)] = (26));

} else {
var statearr_25202_25257 = state_25164__$1;
(statearr_25202_25257[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (35))){
var inst_25149 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
if(cljs.core.truth_(inst_25149)){
var statearr_25203_25258 = state_25164__$1;
(statearr_25203_25258[(1)] = (36));

} else {
var statearr_25204_25259 = state_25164__$1;
(statearr_25204_25259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (19))){
var inst_25094 = (state_25164[(7)]);
var inst_25113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25094);
var state_25164__$1 = state_25164;
var statearr_25205_25260 = state_25164__$1;
(statearr_25205_25260[(2)] = inst_25113);

(statearr_25205_25260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (11))){
var inst_25094 = (state_25164[(7)]);
var inst_25098 = (inst_25094 == null);
var inst_25099 = cljs.core.not.call(null,inst_25098);
var state_25164__$1 = state_25164;
if(inst_25099){
var statearr_25206_25261 = state_25164__$1;
(statearr_25206_25261[(1)] = (13));

} else {
var statearr_25207_25262 = state_25164__$1;
(statearr_25207_25262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (9))){
var inst_25070 = (state_25164[(8)]);
var state_25164__$1 = state_25164;
var statearr_25208_25263 = state_25164__$1;
(statearr_25208_25263[(2)] = inst_25070);

(statearr_25208_25263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (5))){
var state_25164__$1 = state_25164;
var statearr_25209_25264 = state_25164__$1;
(statearr_25209_25264[(2)] = true);

(statearr_25209_25264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (14))){
var state_25164__$1 = state_25164;
var statearr_25210_25265 = state_25164__$1;
(statearr_25210_25265[(2)] = false);

(statearr_25210_25265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (26))){
var inst_25124 = (state_25164[(9)]);
var inst_25131 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25124);
var state_25164__$1 = state_25164;
var statearr_25211_25266 = state_25164__$1;
(statearr_25211_25266[(2)] = inst_25131);

(statearr_25211_25266[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (16))){
var state_25164__$1 = state_25164;
var statearr_25212_25267 = state_25164__$1;
(statearr_25212_25267[(2)] = true);

(statearr_25212_25267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (38))){
var inst_25154 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
var statearr_25213_25268 = state_25164__$1;
(statearr_25213_25268[(2)] = inst_25154);

(statearr_25213_25268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (30))){
var inst_25124 = (state_25164[(9)]);
var inst_25117 = (state_25164[(11)]);
var inst_25118 = (state_25164[(13)]);
var inst_25141 = cljs.core.empty_QMARK_.call(null,inst_25117);
var inst_25142 = inst_25118.call(null,inst_25124);
var inst_25143 = cljs.core.not.call(null,inst_25142);
var inst_25144 = (inst_25141) && (inst_25143);
var state_25164__$1 = state_25164;
var statearr_25214_25269 = state_25164__$1;
(statearr_25214_25269[(2)] = inst_25144);

(statearr_25214_25269[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (10))){
var inst_25070 = (state_25164[(8)]);
var inst_25090 = (state_25164[(2)]);
var inst_25091 = cljs.core.get.call(null,inst_25090,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25092 = cljs.core.get.call(null,inst_25090,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25093 = cljs.core.get.call(null,inst_25090,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25094 = inst_25070;
var state_25164__$1 = (function (){var statearr_25215 = state_25164;
(statearr_25215[(16)] = inst_25092);

(statearr_25215[(17)] = inst_25091);

(statearr_25215[(7)] = inst_25094);

(statearr_25215[(18)] = inst_25093);

return statearr_25215;
})();
var statearr_25216_25270 = state_25164__$1;
(statearr_25216_25270[(2)] = null);

(statearr_25216_25270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (18))){
var inst_25108 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
var statearr_25217_25271 = state_25164__$1;
(statearr_25217_25271[(2)] = inst_25108);

(statearr_25217_25271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (37))){
var state_25164__$1 = state_25164;
var statearr_25218_25272 = state_25164__$1;
(statearr_25218_25272[(2)] = null);

(statearr_25218_25272[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (8))){
var inst_25070 = (state_25164[(8)]);
var inst_25087 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25070);
var state_25164__$1 = state_25164;
var statearr_25219_25273 = state_25164__$1;
(statearr_25219_25273[(2)] = inst_25087);

(statearr_25219_25273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___25227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23402__auto__,c__23514__auto___25227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23403__auto__ = null;
var cljs$core$async$mix_$_state_machine__23403__auto____0 = (function (){
var statearr_25223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25223[(0)] = cljs$core$async$mix_$_state_machine__23403__auto__);

(statearr_25223[(1)] = (1));

return statearr_25223;
});
var cljs$core$async$mix_$_state_machine__23403__auto____1 = (function (state_25164){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_25164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e25224){if((e25224 instanceof Object)){
var ex__23406__auto__ = e25224;
var statearr_25225_25274 = state_25164;
(statearr_25225_25274[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25275 = state_25164;
state_25164 = G__25275;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23403__auto__ = function(state_25164){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23403__auto____1.call(this,state_25164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23403__auto____0;
cljs$core$async$mix_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23403__auto____1;
return cljs$core$async$mix_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___25227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23516__auto__ = (function (){var statearr_25226 = f__23515__auto__.call(null);
(statearr_25226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___25227);

return statearr_25226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___25227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21885__auto__ = (((p == null))?null:p);
var m__21886__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21886__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21885__auto__ = (((p == null))?null:p);
var m__21886__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,p,v,ch);
} else {
var m__21886__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25276 = [];
var len__22288__auto___25279 = arguments.length;
var i__22289__auto___25280 = (0);
while(true){
if((i__22289__auto___25280 < len__22288__auto___25279)){
args25276.push((arguments[i__22289__auto___25280]));

var G__25281 = (i__22289__auto___25280 + (1));
i__22289__auto___25280 = G__25281;
continue;
} else {
}
break;
}

var G__25278 = args25276.length;
switch (G__25278) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25276.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21885__auto__ = (((p == null))?null:p);
var m__21886__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,p);
} else {
var m__21886__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21885__auto__ = (((p == null))?null:p);
var m__21886__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21885__auto__)]);
if(!((m__21886__auto__ == null))){
return m__21886__auto__.call(null,p,v);
} else {
var m__21886__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21886__auto____$1 == null))){
return m__21886__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25284 = [];
var len__22288__auto___25409 = arguments.length;
var i__22289__auto___25410 = (0);
while(true){
if((i__22289__auto___25410 < len__22288__auto___25409)){
args25284.push((arguments[i__22289__auto___25410]));

var G__25411 = (i__22289__auto___25410 + (1));
i__22289__auto___25410 = G__25411;
continue;
} else {
}
break;
}

var G__25286 = args25284.length;
switch (G__25286) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25284.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21230__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21230__auto__,mults){
return (function (p1__25283_SHARP_){
if(cljs.core.truth_(p1__25283_SHARP_.call(null,topic))){
return p1__25283_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25283_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21230__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25287 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25288){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25288 = meta25288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25289,meta25288__$1){
var self__ = this;
var _25289__$1 = this;
return (new cljs.core.async.t_cljs$core$async25287(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25288__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25289){
var self__ = this;
var _25289__$1 = this;
return self__.meta25288;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25288","meta25288",-549611863,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25287";

cljs.core.async.t_cljs$core$async25287.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async25287");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25287 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25287(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25288){
return (new cljs.core.async.t_cljs$core$async25287(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25288));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25287(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23514__auto___25413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___25413,mults,ensure_mult,p){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___25413,mults,ensure_mult,p){
return (function (state_25361){
var state_val_25362 = (state_25361[(1)]);
if((state_val_25362 === (7))){
var inst_25357 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
var statearr_25363_25414 = state_25361__$1;
(statearr_25363_25414[(2)] = inst_25357);

(statearr_25363_25414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (20))){
var state_25361__$1 = state_25361;
var statearr_25364_25415 = state_25361__$1;
(statearr_25364_25415[(2)] = null);

(statearr_25364_25415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (1))){
var state_25361__$1 = state_25361;
var statearr_25365_25416 = state_25361__$1;
(statearr_25365_25416[(2)] = null);

(statearr_25365_25416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (24))){
var inst_25340 = (state_25361[(7)]);
var inst_25349 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25340);
var state_25361__$1 = state_25361;
var statearr_25366_25417 = state_25361__$1;
(statearr_25366_25417[(2)] = inst_25349);

(statearr_25366_25417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (4))){
var inst_25292 = (state_25361[(8)]);
var inst_25292__$1 = (state_25361[(2)]);
var inst_25293 = (inst_25292__$1 == null);
var state_25361__$1 = (function (){var statearr_25367 = state_25361;
(statearr_25367[(8)] = inst_25292__$1);

return statearr_25367;
})();
if(cljs.core.truth_(inst_25293)){
var statearr_25368_25418 = state_25361__$1;
(statearr_25368_25418[(1)] = (5));

} else {
var statearr_25369_25419 = state_25361__$1;
(statearr_25369_25419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (15))){
var inst_25334 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
var statearr_25370_25420 = state_25361__$1;
(statearr_25370_25420[(2)] = inst_25334);

(statearr_25370_25420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (21))){
var inst_25354 = (state_25361[(2)]);
var state_25361__$1 = (function (){var statearr_25371 = state_25361;
(statearr_25371[(9)] = inst_25354);

return statearr_25371;
})();
var statearr_25372_25421 = state_25361__$1;
(statearr_25372_25421[(2)] = null);

(statearr_25372_25421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (13))){
var inst_25316 = (state_25361[(10)]);
var inst_25318 = cljs.core.chunked_seq_QMARK_.call(null,inst_25316);
var state_25361__$1 = state_25361;
if(inst_25318){
var statearr_25373_25422 = state_25361__$1;
(statearr_25373_25422[(1)] = (16));

} else {
var statearr_25374_25423 = state_25361__$1;
(statearr_25374_25423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (22))){
var inst_25346 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
if(cljs.core.truth_(inst_25346)){
var statearr_25375_25424 = state_25361__$1;
(statearr_25375_25424[(1)] = (23));

} else {
var statearr_25376_25425 = state_25361__$1;
(statearr_25376_25425[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (6))){
var inst_25292 = (state_25361[(8)]);
var inst_25342 = (state_25361[(11)]);
var inst_25340 = (state_25361[(7)]);
var inst_25340__$1 = topic_fn.call(null,inst_25292);
var inst_25341 = cljs.core.deref.call(null,mults);
var inst_25342__$1 = cljs.core.get.call(null,inst_25341,inst_25340__$1);
var state_25361__$1 = (function (){var statearr_25377 = state_25361;
(statearr_25377[(11)] = inst_25342__$1);

(statearr_25377[(7)] = inst_25340__$1);

return statearr_25377;
})();
if(cljs.core.truth_(inst_25342__$1)){
var statearr_25378_25426 = state_25361__$1;
(statearr_25378_25426[(1)] = (19));

} else {
var statearr_25379_25427 = state_25361__$1;
(statearr_25379_25427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (25))){
var inst_25351 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
var statearr_25380_25428 = state_25361__$1;
(statearr_25380_25428[(2)] = inst_25351);

(statearr_25380_25428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (17))){
var inst_25316 = (state_25361[(10)]);
var inst_25325 = cljs.core.first.call(null,inst_25316);
var inst_25326 = cljs.core.async.muxch_STAR_.call(null,inst_25325);
var inst_25327 = cljs.core.async.close_BANG_.call(null,inst_25326);
var inst_25328 = cljs.core.next.call(null,inst_25316);
var inst_25302 = inst_25328;
var inst_25303 = null;
var inst_25304 = (0);
var inst_25305 = (0);
var state_25361__$1 = (function (){var statearr_25381 = state_25361;
(statearr_25381[(12)] = inst_25302);

(statearr_25381[(13)] = inst_25305);

(statearr_25381[(14)] = inst_25304);

(statearr_25381[(15)] = inst_25303);

(statearr_25381[(16)] = inst_25327);

return statearr_25381;
})();
var statearr_25382_25429 = state_25361__$1;
(statearr_25382_25429[(2)] = null);

(statearr_25382_25429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (3))){
var inst_25359 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25361__$1,inst_25359);
} else {
if((state_val_25362 === (12))){
var inst_25336 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
var statearr_25383_25430 = state_25361__$1;
(statearr_25383_25430[(2)] = inst_25336);

(statearr_25383_25430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (2))){
var state_25361__$1 = state_25361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25361__$1,(4),ch);
} else {
if((state_val_25362 === (23))){
var state_25361__$1 = state_25361;
var statearr_25384_25431 = state_25361__$1;
(statearr_25384_25431[(2)] = null);

(statearr_25384_25431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (19))){
var inst_25292 = (state_25361[(8)]);
var inst_25342 = (state_25361[(11)]);
var inst_25344 = cljs.core.async.muxch_STAR_.call(null,inst_25342);
var state_25361__$1 = state_25361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25361__$1,(22),inst_25344,inst_25292);
} else {
if((state_val_25362 === (11))){
var inst_25302 = (state_25361[(12)]);
var inst_25316 = (state_25361[(10)]);
var inst_25316__$1 = cljs.core.seq.call(null,inst_25302);
var state_25361__$1 = (function (){var statearr_25385 = state_25361;
(statearr_25385[(10)] = inst_25316__$1);

return statearr_25385;
})();
if(inst_25316__$1){
var statearr_25386_25432 = state_25361__$1;
(statearr_25386_25432[(1)] = (13));

} else {
var statearr_25387_25433 = state_25361__$1;
(statearr_25387_25433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (9))){
var inst_25338 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
var statearr_25388_25434 = state_25361__$1;
(statearr_25388_25434[(2)] = inst_25338);

(statearr_25388_25434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (5))){
var inst_25299 = cljs.core.deref.call(null,mults);
var inst_25300 = cljs.core.vals.call(null,inst_25299);
var inst_25301 = cljs.core.seq.call(null,inst_25300);
var inst_25302 = inst_25301;
var inst_25303 = null;
var inst_25304 = (0);
var inst_25305 = (0);
var state_25361__$1 = (function (){var statearr_25389 = state_25361;
(statearr_25389[(12)] = inst_25302);

(statearr_25389[(13)] = inst_25305);

(statearr_25389[(14)] = inst_25304);

(statearr_25389[(15)] = inst_25303);

return statearr_25389;
})();
var statearr_25390_25435 = state_25361__$1;
(statearr_25390_25435[(2)] = null);

(statearr_25390_25435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (14))){
var state_25361__$1 = state_25361;
var statearr_25394_25436 = state_25361__$1;
(statearr_25394_25436[(2)] = null);

(statearr_25394_25436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (16))){
var inst_25316 = (state_25361[(10)]);
var inst_25320 = cljs.core.chunk_first.call(null,inst_25316);
var inst_25321 = cljs.core.chunk_rest.call(null,inst_25316);
var inst_25322 = cljs.core.count.call(null,inst_25320);
var inst_25302 = inst_25321;
var inst_25303 = inst_25320;
var inst_25304 = inst_25322;
var inst_25305 = (0);
var state_25361__$1 = (function (){var statearr_25395 = state_25361;
(statearr_25395[(12)] = inst_25302);

(statearr_25395[(13)] = inst_25305);

(statearr_25395[(14)] = inst_25304);

(statearr_25395[(15)] = inst_25303);

return statearr_25395;
})();
var statearr_25396_25437 = state_25361__$1;
(statearr_25396_25437[(2)] = null);

(statearr_25396_25437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (10))){
var inst_25302 = (state_25361[(12)]);
var inst_25305 = (state_25361[(13)]);
var inst_25304 = (state_25361[(14)]);
var inst_25303 = (state_25361[(15)]);
var inst_25310 = cljs.core._nth.call(null,inst_25303,inst_25305);
var inst_25311 = cljs.core.async.muxch_STAR_.call(null,inst_25310);
var inst_25312 = cljs.core.async.close_BANG_.call(null,inst_25311);
var inst_25313 = (inst_25305 + (1));
var tmp25391 = inst_25302;
var tmp25392 = inst_25304;
var tmp25393 = inst_25303;
var inst_25302__$1 = tmp25391;
var inst_25303__$1 = tmp25393;
var inst_25304__$1 = tmp25392;
var inst_25305__$1 = inst_25313;
var state_25361__$1 = (function (){var statearr_25397 = state_25361;
(statearr_25397[(12)] = inst_25302__$1);

(statearr_25397[(13)] = inst_25305__$1);

(statearr_25397[(14)] = inst_25304__$1);

(statearr_25397[(17)] = inst_25312);

(statearr_25397[(15)] = inst_25303__$1);

return statearr_25397;
})();
var statearr_25398_25438 = state_25361__$1;
(statearr_25398_25438[(2)] = null);

(statearr_25398_25438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (18))){
var inst_25331 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
var statearr_25399_25439 = state_25361__$1;
(statearr_25399_25439[(2)] = inst_25331);

(statearr_25399_25439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (8))){
var inst_25305 = (state_25361[(13)]);
var inst_25304 = (state_25361[(14)]);
var inst_25307 = (inst_25305 < inst_25304);
var inst_25308 = inst_25307;
var state_25361__$1 = state_25361;
if(cljs.core.truth_(inst_25308)){
var statearr_25400_25440 = state_25361__$1;
(statearr_25400_25440[(1)] = (10));

} else {
var statearr_25401_25441 = state_25361__$1;
(statearr_25401_25441[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___25413,mults,ensure_mult,p))
;
return ((function (switch__23402__auto__,c__23514__auto___25413,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_25405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25405[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_25405[(1)] = (1));

return statearr_25405;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_25361){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_25361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e25406){if((e25406 instanceof Object)){
var ex__23406__auto__ = e25406;
var statearr_25407_25442 = state_25361;
(statearr_25407_25442[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25443 = state_25361;
state_25361 = G__25443;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_25361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_25361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___25413,mults,ensure_mult,p))
})();
var state__23516__auto__ = (function (){var statearr_25408 = f__23515__auto__.call(null);
(statearr_25408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___25413);

return statearr_25408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___25413,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25444 = [];
var len__22288__auto___25447 = arguments.length;
var i__22289__auto___25448 = (0);
while(true){
if((i__22289__auto___25448 < len__22288__auto___25447)){
args25444.push((arguments[i__22289__auto___25448]));

var G__25449 = (i__22289__auto___25448 + (1));
i__22289__auto___25448 = G__25449;
continue;
} else {
}
break;
}

var G__25446 = args25444.length;
switch (G__25446) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25444.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25451 = [];
var len__22288__auto___25454 = arguments.length;
var i__22289__auto___25455 = (0);
while(true){
if((i__22289__auto___25455 < len__22288__auto___25454)){
args25451.push((arguments[i__22289__auto___25455]));

var G__25456 = (i__22289__auto___25455 + (1));
i__22289__auto___25455 = G__25456;
continue;
} else {
}
break;
}

var G__25453 = args25451.length;
switch (G__25453) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25451.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25458 = [];
var len__22288__auto___25529 = arguments.length;
var i__22289__auto___25530 = (0);
while(true){
if((i__22289__auto___25530 < len__22288__auto___25529)){
args25458.push((arguments[i__22289__auto___25530]));

var G__25531 = (i__22289__auto___25530 + (1));
i__22289__auto___25530 = G__25531;
continue;
} else {
}
break;
}

var G__25460 = args25458.length;
switch (G__25460) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25458.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23514__auto___25533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___25533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___25533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25499){
var state_val_25500 = (state_25499[(1)]);
if((state_val_25500 === (7))){
var state_25499__$1 = state_25499;
var statearr_25501_25534 = state_25499__$1;
(statearr_25501_25534[(2)] = null);

(statearr_25501_25534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (1))){
var state_25499__$1 = state_25499;
var statearr_25502_25535 = state_25499__$1;
(statearr_25502_25535[(2)] = null);

(statearr_25502_25535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (4))){
var inst_25463 = (state_25499[(7)]);
var inst_25465 = (inst_25463 < cnt);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25465)){
var statearr_25503_25536 = state_25499__$1;
(statearr_25503_25536[(1)] = (6));

} else {
var statearr_25504_25537 = state_25499__$1;
(statearr_25504_25537[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (15))){
var inst_25495 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25505_25538 = state_25499__$1;
(statearr_25505_25538[(2)] = inst_25495);

(statearr_25505_25538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (13))){
var inst_25488 = cljs.core.async.close_BANG_.call(null,out);
var state_25499__$1 = state_25499;
var statearr_25506_25539 = state_25499__$1;
(statearr_25506_25539[(2)] = inst_25488);

(statearr_25506_25539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (6))){
var state_25499__$1 = state_25499;
var statearr_25507_25540 = state_25499__$1;
(statearr_25507_25540[(2)] = null);

(statearr_25507_25540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (3))){
var inst_25497 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25499__$1,inst_25497);
} else {
if((state_val_25500 === (12))){
var inst_25485 = (state_25499[(8)]);
var inst_25485__$1 = (state_25499[(2)]);
var inst_25486 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25485__$1);
var state_25499__$1 = (function (){var statearr_25508 = state_25499;
(statearr_25508[(8)] = inst_25485__$1);

return statearr_25508;
})();
if(cljs.core.truth_(inst_25486)){
var statearr_25509_25541 = state_25499__$1;
(statearr_25509_25541[(1)] = (13));

} else {
var statearr_25510_25542 = state_25499__$1;
(statearr_25510_25542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (2))){
var inst_25462 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25463 = (0);
var state_25499__$1 = (function (){var statearr_25511 = state_25499;
(statearr_25511[(7)] = inst_25463);

(statearr_25511[(9)] = inst_25462);

return statearr_25511;
})();
var statearr_25512_25543 = state_25499__$1;
(statearr_25512_25543[(2)] = null);

(statearr_25512_25543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (11))){
var inst_25463 = (state_25499[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25499,(10),Object,null,(9));
var inst_25472 = chs__$1.call(null,inst_25463);
var inst_25473 = done.call(null,inst_25463);
var inst_25474 = cljs.core.async.take_BANG_.call(null,inst_25472,inst_25473);
var state_25499__$1 = state_25499;
var statearr_25513_25544 = state_25499__$1;
(statearr_25513_25544[(2)] = inst_25474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25499__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (9))){
var inst_25463 = (state_25499[(7)]);
var inst_25476 = (state_25499[(2)]);
var inst_25477 = (inst_25463 + (1));
var inst_25463__$1 = inst_25477;
var state_25499__$1 = (function (){var statearr_25514 = state_25499;
(statearr_25514[(7)] = inst_25463__$1);

(statearr_25514[(10)] = inst_25476);

return statearr_25514;
})();
var statearr_25515_25545 = state_25499__$1;
(statearr_25515_25545[(2)] = null);

(statearr_25515_25545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (5))){
var inst_25483 = (state_25499[(2)]);
var state_25499__$1 = (function (){var statearr_25516 = state_25499;
(statearr_25516[(11)] = inst_25483);

return statearr_25516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25499__$1,(12),dchan);
} else {
if((state_val_25500 === (14))){
var inst_25485 = (state_25499[(8)]);
var inst_25490 = cljs.core.apply.call(null,f,inst_25485);
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25499__$1,(16),out,inst_25490);
} else {
if((state_val_25500 === (16))){
var inst_25492 = (state_25499[(2)]);
var state_25499__$1 = (function (){var statearr_25517 = state_25499;
(statearr_25517[(12)] = inst_25492);

return statearr_25517;
})();
var statearr_25518_25546 = state_25499__$1;
(statearr_25518_25546[(2)] = null);

(statearr_25518_25546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (10))){
var inst_25467 = (state_25499[(2)]);
var inst_25468 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25499__$1 = (function (){var statearr_25519 = state_25499;
(statearr_25519[(13)] = inst_25467);

return statearr_25519;
})();
var statearr_25520_25547 = state_25499__$1;
(statearr_25520_25547[(2)] = inst_25468);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25499__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (8))){
var inst_25481 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25521_25548 = state_25499__$1;
(statearr_25521_25548[(2)] = inst_25481);

(statearr_25521_25548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___25533,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23402__auto__,c__23514__auto___25533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_25525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25525[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_25525[(1)] = (1));

return statearr_25525;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_25499){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_25499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e25526){if((e25526 instanceof Object)){
var ex__23406__auto__ = e25526;
var statearr_25527_25549 = state_25499;
(statearr_25527_25549[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25550 = state_25499;
state_25499 = G__25550;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_25499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_25499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___25533,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23516__auto__ = (function (){var statearr_25528 = f__23515__auto__.call(null);
(statearr_25528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___25533);

return statearr_25528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___25533,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25552 = [];
var len__22288__auto___25608 = arguments.length;
var i__22289__auto___25609 = (0);
while(true){
if((i__22289__auto___25609 < len__22288__auto___25608)){
args25552.push((arguments[i__22289__auto___25609]));

var G__25610 = (i__22289__auto___25609 + (1));
i__22289__auto___25609 = G__25610;
continue;
} else {
}
break;
}

var G__25554 = args25552.length;
switch (G__25554) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25552.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23514__auto___25612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___25612,out){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___25612,out){
return (function (state_25584){
var state_val_25585 = (state_25584[(1)]);
if((state_val_25585 === (7))){
var inst_25564 = (state_25584[(7)]);
var inst_25563 = (state_25584[(8)]);
var inst_25563__$1 = (state_25584[(2)]);
var inst_25564__$1 = cljs.core.nth.call(null,inst_25563__$1,(0),null);
var inst_25565 = cljs.core.nth.call(null,inst_25563__$1,(1),null);
var inst_25566 = (inst_25564__$1 == null);
var state_25584__$1 = (function (){var statearr_25586 = state_25584;
(statearr_25586[(7)] = inst_25564__$1);

(statearr_25586[(9)] = inst_25565);

(statearr_25586[(8)] = inst_25563__$1);

return statearr_25586;
})();
if(cljs.core.truth_(inst_25566)){
var statearr_25587_25613 = state_25584__$1;
(statearr_25587_25613[(1)] = (8));

} else {
var statearr_25588_25614 = state_25584__$1;
(statearr_25588_25614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (1))){
var inst_25555 = cljs.core.vec.call(null,chs);
var inst_25556 = inst_25555;
var state_25584__$1 = (function (){var statearr_25589 = state_25584;
(statearr_25589[(10)] = inst_25556);

return statearr_25589;
})();
var statearr_25590_25615 = state_25584__$1;
(statearr_25590_25615[(2)] = null);

(statearr_25590_25615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (4))){
var inst_25556 = (state_25584[(10)]);
var state_25584__$1 = state_25584;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25584__$1,(7),inst_25556);
} else {
if((state_val_25585 === (6))){
var inst_25580 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
var statearr_25591_25616 = state_25584__$1;
(statearr_25591_25616[(2)] = inst_25580);

(statearr_25591_25616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (3))){
var inst_25582 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25584__$1,inst_25582);
} else {
if((state_val_25585 === (2))){
var inst_25556 = (state_25584[(10)]);
var inst_25558 = cljs.core.count.call(null,inst_25556);
var inst_25559 = (inst_25558 > (0));
var state_25584__$1 = state_25584;
if(cljs.core.truth_(inst_25559)){
var statearr_25593_25617 = state_25584__$1;
(statearr_25593_25617[(1)] = (4));

} else {
var statearr_25594_25618 = state_25584__$1;
(statearr_25594_25618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (11))){
var inst_25556 = (state_25584[(10)]);
var inst_25573 = (state_25584[(2)]);
var tmp25592 = inst_25556;
var inst_25556__$1 = tmp25592;
var state_25584__$1 = (function (){var statearr_25595 = state_25584;
(statearr_25595[(11)] = inst_25573);

(statearr_25595[(10)] = inst_25556__$1);

return statearr_25595;
})();
var statearr_25596_25619 = state_25584__$1;
(statearr_25596_25619[(2)] = null);

(statearr_25596_25619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (9))){
var inst_25564 = (state_25584[(7)]);
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25584__$1,(11),out,inst_25564);
} else {
if((state_val_25585 === (5))){
var inst_25578 = cljs.core.async.close_BANG_.call(null,out);
var state_25584__$1 = state_25584;
var statearr_25597_25620 = state_25584__$1;
(statearr_25597_25620[(2)] = inst_25578);

(statearr_25597_25620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (10))){
var inst_25576 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
var statearr_25598_25621 = state_25584__$1;
(statearr_25598_25621[(2)] = inst_25576);

(statearr_25598_25621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (8))){
var inst_25564 = (state_25584[(7)]);
var inst_25565 = (state_25584[(9)]);
var inst_25563 = (state_25584[(8)]);
var inst_25556 = (state_25584[(10)]);
var inst_25568 = (function (){var cs = inst_25556;
var vec__25561 = inst_25563;
var v = inst_25564;
var c = inst_25565;
return ((function (cs,vec__25561,v,c,inst_25564,inst_25565,inst_25563,inst_25556,state_val_25585,c__23514__auto___25612,out){
return (function (p1__25551_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25551_SHARP_);
});
;})(cs,vec__25561,v,c,inst_25564,inst_25565,inst_25563,inst_25556,state_val_25585,c__23514__auto___25612,out))
})();
var inst_25569 = cljs.core.filterv.call(null,inst_25568,inst_25556);
var inst_25556__$1 = inst_25569;
var state_25584__$1 = (function (){var statearr_25599 = state_25584;
(statearr_25599[(10)] = inst_25556__$1);

return statearr_25599;
})();
var statearr_25600_25622 = state_25584__$1;
(statearr_25600_25622[(2)] = null);

(statearr_25600_25622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___25612,out))
;
return ((function (switch__23402__auto__,c__23514__auto___25612,out){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_25604 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25604[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_25604[(1)] = (1));

return statearr_25604;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_25584){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_25584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e25605){if((e25605 instanceof Object)){
var ex__23406__auto__ = e25605;
var statearr_25606_25623 = state_25584;
(statearr_25606_25623[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25624 = state_25584;
state_25584 = G__25624;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_25584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_25584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___25612,out))
})();
var state__23516__auto__ = (function (){var statearr_25607 = f__23515__auto__.call(null);
(statearr_25607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___25612);

return statearr_25607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___25612,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25625 = [];
var len__22288__auto___25674 = arguments.length;
var i__22289__auto___25675 = (0);
while(true){
if((i__22289__auto___25675 < len__22288__auto___25674)){
args25625.push((arguments[i__22289__auto___25675]));

var G__25676 = (i__22289__auto___25675 + (1));
i__22289__auto___25675 = G__25676;
continue;
} else {
}
break;
}

var G__25627 = args25625.length;
switch (G__25627) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25625.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23514__auto___25678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___25678,out){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___25678,out){
return (function (state_25651){
var state_val_25652 = (state_25651[(1)]);
if((state_val_25652 === (7))){
var inst_25633 = (state_25651[(7)]);
var inst_25633__$1 = (state_25651[(2)]);
var inst_25634 = (inst_25633__$1 == null);
var inst_25635 = cljs.core.not.call(null,inst_25634);
var state_25651__$1 = (function (){var statearr_25653 = state_25651;
(statearr_25653[(7)] = inst_25633__$1);

return statearr_25653;
})();
if(inst_25635){
var statearr_25654_25679 = state_25651__$1;
(statearr_25654_25679[(1)] = (8));

} else {
var statearr_25655_25680 = state_25651__$1;
(statearr_25655_25680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (1))){
var inst_25628 = (0);
var state_25651__$1 = (function (){var statearr_25656 = state_25651;
(statearr_25656[(8)] = inst_25628);

return statearr_25656;
})();
var statearr_25657_25681 = state_25651__$1;
(statearr_25657_25681[(2)] = null);

(statearr_25657_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (4))){
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25651__$1,(7),ch);
} else {
if((state_val_25652 === (6))){
var inst_25646 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25658_25682 = state_25651__$1;
(statearr_25658_25682[(2)] = inst_25646);

(statearr_25658_25682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (3))){
var inst_25648 = (state_25651[(2)]);
var inst_25649 = cljs.core.async.close_BANG_.call(null,out);
var state_25651__$1 = (function (){var statearr_25659 = state_25651;
(statearr_25659[(9)] = inst_25648);

return statearr_25659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25651__$1,inst_25649);
} else {
if((state_val_25652 === (2))){
var inst_25628 = (state_25651[(8)]);
var inst_25630 = (inst_25628 < n);
var state_25651__$1 = state_25651;
if(cljs.core.truth_(inst_25630)){
var statearr_25660_25683 = state_25651__$1;
(statearr_25660_25683[(1)] = (4));

} else {
var statearr_25661_25684 = state_25651__$1;
(statearr_25661_25684[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (11))){
var inst_25628 = (state_25651[(8)]);
var inst_25638 = (state_25651[(2)]);
var inst_25639 = (inst_25628 + (1));
var inst_25628__$1 = inst_25639;
var state_25651__$1 = (function (){var statearr_25662 = state_25651;
(statearr_25662[(8)] = inst_25628__$1);

(statearr_25662[(10)] = inst_25638);

return statearr_25662;
})();
var statearr_25663_25685 = state_25651__$1;
(statearr_25663_25685[(2)] = null);

(statearr_25663_25685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (9))){
var state_25651__$1 = state_25651;
var statearr_25664_25686 = state_25651__$1;
(statearr_25664_25686[(2)] = null);

(statearr_25664_25686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (5))){
var state_25651__$1 = state_25651;
var statearr_25665_25687 = state_25651__$1;
(statearr_25665_25687[(2)] = null);

(statearr_25665_25687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (10))){
var inst_25643 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25666_25688 = state_25651__$1;
(statearr_25666_25688[(2)] = inst_25643);

(statearr_25666_25688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (8))){
var inst_25633 = (state_25651[(7)]);
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25651__$1,(11),out,inst_25633);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___25678,out))
;
return ((function (switch__23402__auto__,c__23514__auto___25678,out){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_25670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25670[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_25670[(1)] = (1));

return statearr_25670;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_25651){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_25651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object)){
var ex__23406__auto__ = e25671;
var statearr_25672_25689 = state_25651;
(statearr_25672_25689[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25690 = state_25651;
state_25651 = G__25690;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_25651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_25651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___25678,out))
})();
var state__23516__auto__ = (function (){var statearr_25673 = f__23515__auto__.call(null);
(statearr_25673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___25678);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___25678,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25698 = (function (map_LT_,f,ch,meta25699){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25699 = meta25699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25700,meta25699__$1){
var self__ = this;
var _25700__$1 = this;
return (new cljs.core.async.t_cljs$core$async25698(self__.map_LT_,self__.f,self__.ch,meta25699__$1));
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25700){
var self__ = this;
var _25700__$1 = this;
return self__.meta25699;
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25701 = (function (map_LT_,f,ch,meta25699,_,fn1,meta25702){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25699 = meta25699;
this._ = _;
this.fn1 = fn1;
this.meta25702 = meta25702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25703,meta25702__$1){
var self__ = this;
var _25703__$1 = this;
return (new cljs.core.async.t_cljs$core$async25701(self__.map_LT_,self__.f,self__.ch,self__.meta25699,self__._,self__.fn1,meta25702__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25703){
var self__ = this;
var _25703__$1 = this;
return self__.meta25702;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25691_SHARP_){
return f1.call(null,(((p1__25691_SHARP_ == null))?null:self__.f.call(null,p1__25691_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25701.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25699","meta25699",-354566145,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25698","cljs.core.async/t_cljs$core$async25698",-698731148,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25702","meta25702",-652480266,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25701";

cljs.core.async.t_cljs$core$async25701.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async25701");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25701 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25701(map_LT___$1,f__$1,ch__$1,meta25699__$1,___$2,fn1__$1,meta25702){
return (new cljs.core.async.t_cljs$core$async25701(map_LT___$1,f__$1,ch__$1,meta25699__$1,___$2,fn1__$1,meta25702));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25701(self__.map_LT_,self__.f,self__.ch,self__.meta25699,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21218__auto__ = ret;
if(cljs.core.truth_(and__21218__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21218__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25699","meta25699",-354566145,null)], null);
});

cljs.core.async.t_cljs$core$async25698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25698";

cljs.core.async.t_cljs$core$async25698.cljs$lang$ctorPrWriter = (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async25698");
});

cljs.core.async.__GT_t_cljs$core$async25698 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25698(map_LT___$1,f__$1,ch__$1,meta25699){
return (new cljs.core.async.t_cljs$core$async25698(map_LT___$1,f__$1,ch__$1,meta25699));
});

}

return (new cljs.core.async.t_cljs$core$async25698(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25707 = (function (map_GT_,f,ch,meta25708){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25708 = meta25708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25709,meta25708__$1){
var self__ = this;
var _25709__$1 = this;
return (new cljs.core.async.t_cljs$core$async25707(self__.map_GT_,self__.f,self__.ch,meta25708__$1));
});

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25709){
var self__ = this;
var _25709__$1 = this;
return self__.meta25708;
});

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25708","meta25708",126157446,null)], null);
});

cljs.core.async.t_cljs$core$async25707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25707";

cljs.core.async.t_cljs$core$async25707.cljs$lang$ctorPrWriter = (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async25707");
});

cljs.core.async.__GT_t_cljs$core$async25707 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25707(map_GT___$1,f__$1,ch__$1,meta25708){
return (new cljs.core.async.t_cljs$core$async25707(map_GT___$1,f__$1,ch__$1,meta25708));
});

}

return (new cljs.core.async.t_cljs$core$async25707(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25713 = (function (filter_GT_,p,ch,meta25714){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25714 = meta25714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25715,meta25714__$1){
var self__ = this;
var _25715__$1 = this;
return (new cljs.core.async.t_cljs$core$async25713(self__.filter_GT_,self__.p,self__.ch,meta25714__$1));
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25715){
var self__ = this;
var _25715__$1 = this;
return self__.meta25714;
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25714","meta25714",-627992434,null)], null);
});

cljs.core.async.t_cljs$core$async25713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25713";

cljs.core.async.t_cljs$core$async25713.cljs$lang$ctorPrWriter = (function (this__21828__auto__,writer__21829__auto__,opt__21830__auto__){
return cljs.core._write.call(null,writer__21829__auto__,"cljs.core.async/t_cljs$core$async25713");
});

cljs.core.async.__GT_t_cljs$core$async25713 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25713(filter_GT___$1,p__$1,ch__$1,meta25714){
return (new cljs.core.async.t_cljs$core$async25713(filter_GT___$1,p__$1,ch__$1,meta25714));
});

}

return (new cljs.core.async.t_cljs$core$async25713(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25716 = [];
var len__22288__auto___25760 = arguments.length;
var i__22289__auto___25761 = (0);
while(true){
if((i__22289__auto___25761 < len__22288__auto___25760)){
args25716.push((arguments[i__22289__auto___25761]));

var G__25762 = (i__22289__auto___25761 + (1));
i__22289__auto___25761 = G__25762;
continue;
} else {
}
break;
}

var G__25718 = args25716.length;
switch (G__25718) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25716.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23514__auto___25764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___25764,out){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___25764,out){
return (function (state_25739){
var state_val_25740 = (state_25739[(1)]);
if((state_val_25740 === (7))){
var inst_25735 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25741_25765 = state_25739__$1;
(statearr_25741_25765[(2)] = inst_25735);

(statearr_25741_25765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (1))){
var state_25739__$1 = state_25739;
var statearr_25742_25766 = state_25739__$1;
(statearr_25742_25766[(2)] = null);

(statearr_25742_25766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (4))){
var inst_25721 = (state_25739[(7)]);
var inst_25721__$1 = (state_25739[(2)]);
var inst_25722 = (inst_25721__$1 == null);
var state_25739__$1 = (function (){var statearr_25743 = state_25739;
(statearr_25743[(7)] = inst_25721__$1);

return statearr_25743;
})();
if(cljs.core.truth_(inst_25722)){
var statearr_25744_25767 = state_25739__$1;
(statearr_25744_25767[(1)] = (5));

} else {
var statearr_25745_25768 = state_25739__$1;
(statearr_25745_25768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (6))){
var inst_25721 = (state_25739[(7)]);
var inst_25726 = p.call(null,inst_25721);
var state_25739__$1 = state_25739;
if(cljs.core.truth_(inst_25726)){
var statearr_25746_25769 = state_25739__$1;
(statearr_25746_25769[(1)] = (8));

} else {
var statearr_25747_25770 = state_25739__$1;
(statearr_25747_25770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (3))){
var inst_25737 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25739__$1,inst_25737);
} else {
if((state_val_25740 === (2))){
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25739__$1,(4),ch);
} else {
if((state_val_25740 === (11))){
var inst_25729 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25748_25771 = state_25739__$1;
(statearr_25748_25771[(2)] = inst_25729);

(statearr_25748_25771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (9))){
var state_25739__$1 = state_25739;
var statearr_25749_25772 = state_25739__$1;
(statearr_25749_25772[(2)] = null);

(statearr_25749_25772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (5))){
var inst_25724 = cljs.core.async.close_BANG_.call(null,out);
var state_25739__$1 = state_25739;
var statearr_25750_25773 = state_25739__$1;
(statearr_25750_25773[(2)] = inst_25724);

(statearr_25750_25773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (10))){
var inst_25732 = (state_25739[(2)]);
var state_25739__$1 = (function (){var statearr_25751 = state_25739;
(statearr_25751[(8)] = inst_25732);

return statearr_25751;
})();
var statearr_25752_25774 = state_25739__$1;
(statearr_25752_25774[(2)] = null);

(statearr_25752_25774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (8))){
var inst_25721 = (state_25739[(7)]);
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25739__$1,(11),out,inst_25721);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___25764,out))
;
return ((function (switch__23402__auto__,c__23514__auto___25764,out){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_25756 = [null,null,null,null,null,null,null,null,null];
(statearr_25756[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_25756[(1)] = (1));

return statearr_25756;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_25739){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_25739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e25757){if((e25757 instanceof Object)){
var ex__23406__auto__ = e25757;
var statearr_25758_25775 = state_25739;
(statearr_25758_25775[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25776 = state_25739;
state_25739 = G__25776;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_25739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_25739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___25764,out))
})();
var state__23516__auto__ = (function (){var statearr_25759 = f__23515__auto__.call(null);
(statearr_25759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___25764);

return statearr_25759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___25764,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25777 = [];
var len__22288__auto___25780 = arguments.length;
var i__22289__auto___25781 = (0);
while(true){
if((i__22289__auto___25781 < len__22288__auto___25780)){
args25777.push((arguments[i__22289__auto___25781]));

var G__25782 = (i__22289__auto___25781 + (1));
i__22289__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var G__25779 = args25777.length;
switch (G__25779) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25777.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__){
return (function (state_25949){
var state_val_25950 = (state_25949[(1)]);
if((state_val_25950 === (7))){
var inst_25945 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25951_25992 = state_25949__$1;
(statearr_25951_25992[(2)] = inst_25945);

(statearr_25951_25992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (20))){
var inst_25915 = (state_25949[(7)]);
var inst_25926 = (state_25949[(2)]);
var inst_25927 = cljs.core.next.call(null,inst_25915);
var inst_25901 = inst_25927;
var inst_25902 = null;
var inst_25903 = (0);
var inst_25904 = (0);
var state_25949__$1 = (function (){var statearr_25952 = state_25949;
(statearr_25952[(8)] = inst_25926);

(statearr_25952[(9)] = inst_25902);

(statearr_25952[(10)] = inst_25901);

(statearr_25952[(11)] = inst_25904);

(statearr_25952[(12)] = inst_25903);

return statearr_25952;
})();
var statearr_25953_25993 = state_25949__$1;
(statearr_25953_25993[(2)] = null);

(statearr_25953_25993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (1))){
var state_25949__$1 = state_25949;
var statearr_25954_25994 = state_25949__$1;
(statearr_25954_25994[(2)] = null);

(statearr_25954_25994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (4))){
var inst_25890 = (state_25949[(13)]);
var inst_25890__$1 = (state_25949[(2)]);
var inst_25891 = (inst_25890__$1 == null);
var state_25949__$1 = (function (){var statearr_25955 = state_25949;
(statearr_25955[(13)] = inst_25890__$1);

return statearr_25955;
})();
if(cljs.core.truth_(inst_25891)){
var statearr_25956_25995 = state_25949__$1;
(statearr_25956_25995[(1)] = (5));

} else {
var statearr_25957_25996 = state_25949__$1;
(statearr_25957_25996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (15))){
var state_25949__$1 = state_25949;
var statearr_25961_25997 = state_25949__$1;
(statearr_25961_25997[(2)] = null);

(statearr_25961_25997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (21))){
var state_25949__$1 = state_25949;
var statearr_25962_25998 = state_25949__$1;
(statearr_25962_25998[(2)] = null);

(statearr_25962_25998[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (13))){
var inst_25902 = (state_25949[(9)]);
var inst_25901 = (state_25949[(10)]);
var inst_25904 = (state_25949[(11)]);
var inst_25903 = (state_25949[(12)]);
var inst_25911 = (state_25949[(2)]);
var inst_25912 = (inst_25904 + (1));
var tmp25958 = inst_25902;
var tmp25959 = inst_25901;
var tmp25960 = inst_25903;
var inst_25901__$1 = tmp25959;
var inst_25902__$1 = tmp25958;
var inst_25903__$1 = tmp25960;
var inst_25904__$1 = inst_25912;
var state_25949__$1 = (function (){var statearr_25963 = state_25949;
(statearr_25963[(9)] = inst_25902__$1);

(statearr_25963[(10)] = inst_25901__$1);

(statearr_25963[(11)] = inst_25904__$1);

(statearr_25963[(14)] = inst_25911);

(statearr_25963[(12)] = inst_25903__$1);

return statearr_25963;
})();
var statearr_25964_25999 = state_25949__$1;
(statearr_25964_25999[(2)] = null);

(statearr_25964_25999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (22))){
var state_25949__$1 = state_25949;
var statearr_25965_26000 = state_25949__$1;
(statearr_25965_26000[(2)] = null);

(statearr_25965_26000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (6))){
var inst_25890 = (state_25949[(13)]);
var inst_25899 = f.call(null,inst_25890);
var inst_25900 = cljs.core.seq.call(null,inst_25899);
var inst_25901 = inst_25900;
var inst_25902 = null;
var inst_25903 = (0);
var inst_25904 = (0);
var state_25949__$1 = (function (){var statearr_25966 = state_25949;
(statearr_25966[(9)] = inst_25902);

(statearr_25966[(10)] = inst_25901);

(statearr_25966[(11)] = inst_25904);

(statearr_25966[(12)] = inst_25903);

return statearr_25966;
})();
var statearr_25967_26001 = state_25949__$1;
(statearr_25967_26001[(2)] = null);

(statearr_25967_26001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (17))){
var inst_25915 = (state_25949[(7)]);
var inst_25919 = cljs.core.chunk_first.call(null,inst_25915);
var inst_25920 = cljs.core.chunk_rest.call(null,inst_25915);
var inst_25921 = cljs.core.count.call(null,inst_25919);
var inst_25901 = inst_25920;
var inst_25902 = inst_25919;
var inst_25903 = inst_25921;
var inst_25904 = (0);
var state_25949__$1 = (function (){var statearr_25968 = state_25949;
(statearr_25968[(9)] = inst_25902);

(statearr_25968[(10)] = inst_25901);

(statearr_25968[(11)] = inst_25904);

(statearr_25968[(12)] = inst_25903);

return statearr_25968;
})();
var statearr_25969_26002 = state_25949__$1;
(statearr_25969_26002[(2)] = null);

(statearr_25969_26002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (3))){
var inst_25947 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25949__$1,inst_25947);
} else {
if((state_val_25950 === (12))){
var inst_25935 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25970_26003 = state_25949__$1;
(statearr_25970_26003[(2)] = inst_25935);

(statearr_25970_26003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (2))){
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25949__$1,(4),in$);
} else {
if((state_val_25950 === (23))){
var inst_25943 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25971_26004 = state_25949__$1;
(statearr_25971_26004[(2)] = inst_25943);

(statearr_25971_26004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (19))){
var inst_25930 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25972_26005 = state_25949__$1;
(statearr_25972_26005[(2)] = inst_25930);

(statearr_25972_26005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (11))){
var inst_25901 = (state_25949[(10)]);
var inst_25915 = (state_25949[(7)]);
var inst_25915__$1 = cljs.core.seq.call(null,inst_25901);
var state_25949__$1 = (function (){var statearr_25973 = state_25949;
(statearr_25973[(7)] = inst_25915__$1);

return statearr_25973;
})();
if(inst_25915__$1){
var statearr_25974_26006 = state_25949__$1;
(statearr_25974_26006[(1)] = (14));

} else {
var statearr_25975_26007 = state_25949__$1;
(statearr_25975_26007[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (9))){
var inst_25937 = (state_25949[(2)]);
var inst_25938 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25949__$1 = (function (){var statearr_25976 = state_25949;
(statearr_25976[(15)] = inst_25937);

return statearr_25976;
})();
if(cljs.core.truth_(inst_25938)){
var statearr_25977_26008 = state_25949__$1;
(statearr_25977_26008[(1)] = (21));

} else {
var statearr_25978_26009 = state_25949__$1;
(statearr_25978_26009[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (5))){
var inst_25893 = cljs.core.async.close_BANG_.call(null,out);
var state_25949__$1 = state_25949;
var statearr_25979_26010 = state_25949__$1;
(statearr_25979_26010[(2)] = inst_25893);

(statearr_25979_26010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (14))){
var inst_25915 = (state_25949[(7)]);
var inst_25917 = cljs.core.chunked_seq_QMARK_.call(null,inst_25915);
var state_25949__$1 = state_25949;
if(inst_25917){
var statearr_25980_26011 = state_25949__$1;
(statearr_25980_26011[(1)] = (17));

} else {
var statearr_25981_26012 = state_25949__$1;
(statearr_25981_26012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (16))){
var inst_25933 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25982_26013 = state_25949__$1;
(statearr_25982_26013[(2)] = inst_25933);

(statearr_25982_26013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25950 === (10))){
var inst_25902 = (state_25949[(9)]);
var inst_25904 = (state_25949[(11)]);
var inst_25909 = cljs.core._nth.call(null,inst_25902,inst_25904);
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25949__$1,(13),out,inst_25909);
} else {
if((state_val_25950 === (18))){
var inst_25915 = (state_25949[(7)]);
var inst_25924 = cljs.core.first.call(null,inst_25915);
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25949__$1,(20),out,inst_25924);
} else {
if((state_val_25950 === (8))){
var inst_25904 = (state_25949[(11)]);
var inst_25903 = (state_25949[(12)]);
var inst_25906 = (inst_25904 < inst_25903);
var inst_25907 = inst_25906;
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25907)){
var statearr_25983_26014 = state_25949__$1;
(statearr_25983_26014[(1)] = (10));

} else {
var statearr_25984_26015 = state_25949__$1;
(statearr_25984_26015[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto__))
;
return ((function (switch__23402__auto__,c__23514__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23403__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23403__auto____0 = (function (){
var statearr_25988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25988[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23403__auto__);

(statearr_25988[(1)] = (1));

return statearr_25988;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23403__auto____1 = (function (state_25949){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_25949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e25989){if((e25989 instanceof Object)){
var ex__23406__auto__ = e25989;
var statearr_25990_26016 = state_25949;
(statearr_25990_26016[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26017 = state_25949;
state_25949 = G__26017;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23403__auto__ = function(state_25949){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23403__auto____1.call(this,state_25949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23403__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23403__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__))
})();
var state__23516__auto__ = (function (){var statearr_25991 = f__23515__auto__.call(null);
(statearr_25991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_25991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__))
);

return c__23514__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26018 = [];
var len__22288__auto___26021 = arguments.length;
var i__22289__auto___26022 = (0);
while(true){
if((i__22289__auto___26022 < len__22288__auto___26021)){
args26018.push((arguments[i__22289__auto___26022]));

var G__26023 = (i__22289__auto___26022 + (1));
i__22289__auto___26022 = G__26023;
continue;
} else {
}
break;
}

var G__26020 = args26018.length;
switch (G__26020) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26018.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26025 = [];
var len__22288__auto___26028 = arguments.length;
var i__22289__auto___26029 = (0);
while(true){
if((i__22289__auto___26029 < len__22288__auto___26028)){
args26025.push((arguments[i__22289__auto___26029]));

var G__26030 = (i__22289__auto___26029 + (1));
i__22289__auto___26029 = G__26030;
continue;
} else {
}
break;
}

var G__26027 = args26025.length;
switch (G__26027) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26025.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26032 = [];
var len__22288__auto___26083 = arguments.length;
var i__22289__auto___26084 = (0);
while(true){
if((i__22289__auto___26084 < len__22288__auto___26083)){
args26032.push((arguments[i__22289__auto___26084]));

var G__26085 = (i__22289__auto___26084 + (1));
i__22289__auto___26084 = G__26085;
continue;
} else {
}
break;
}

var G__26034 = args26032.length;
switch (G__26034) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26032.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23514__auto___26087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___26087,out){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___26087,out){
return (function (state_26058){
var state_val_26059 = (state_26058[(1)]);
if((state_val_26059 === (7))){
var inst_26053 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26060_26088 = state_26058__$1;
(statearr_26060_26088[(2)] = inst_26053);

(statearr_26060_26088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (1))){
var inst_26035 = null;
var state_26058__$1 = (function (){var statearr_26061 = state_26058;
(statearr_26061[(7)] = inst_26035);

return statearr_26061;
})();
var statearr_26062_26089 = state_26058__$1;
(statearr_26062_26089[(2)] = null);

(statearr_26062_26089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (4))){
var inst_26038 = (state_26058[(8)]);
var inst_26038__$1 = (state_26058[(2)]);
var inst_26039 = (inst_26038__$1 == null);
var inst_26040 = cljs.core.not.call(null,inst_26039);
var state_26058__$1 = (function (){var statearr_26063 = state_26058;
(statearr_26063[(8)] = inst_26038__$1);

return statearr_26063;
})();
if(inst_26040){
var statearr_26064_26090 = state_26058__$1;
(statearr_26064_26090[(1)] = (5));

} else {
var statearr_26065_26091 = state_26058__$1;
(statearr_26065_26091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (6))){
var state_26058__$1 = state_26058;
var statearr_26066_26092 = state_26058__$1;
(statearr_26066_26092[(2)] = null);

(statearr_26066_26092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (3))){
var inst_26055 = (state_26058[(2)]);
var inst_26056 = cljs.core.async.close_BANG_.call(null,out);
var state_26058__$1 = (function (){var statearr_26067 = state_26058;
(statearr_26067[(9)] = inst_26055);

return statearr_26067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26058__$1,inst_26056);
} else {
if((state_val_26059 === (2))){
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26058__$1,(4),ch);
} else {
if((state_val_26059 === (11))){
var inst_26038 = (state_26058[(8)]);
var inst_26047 = (state_26058[(2)]);
var inst_26035 = inst_26038;
var state_26058__$1 = (function (){var statearr_26068 = state_26058;
(statearr_26068[(7)] = inst_26035);

(statearr_26068[(10)] = inst_26047);

return statearr_26068;
})();
var statearr_26069_26093 = state_26058__$1;
(statearr_26069_26093[(2)] = null);

(statearr_26069_26093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (9))){
var inst_26038 = (state_26058[(8)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26058__$1,(11),out,inst_26038);
} else {
if((state_val_26059 === (5))){
var inst_26038 = (state_26058[(8)]);
var inst_26035 = (state_26058[(7)]);
var inst_26042 = cljs.core._EQ_.call(null,inst_26038,inst_26035);
var state_26058__$1 = state_26058;
if(inst_26042){
var statearr_26071_26094 = state_26058__$1;
(statearr_26071_26094[(1)] = (8));

} else {
var statearr_26072_26095 = state_26058__$1;
(statearr_26072_26095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (10))){
var inst_26050 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26073_26096 = state_26058__$1;
(statearr_26073_26096[(2)] = inst_26050);

(statearr_26073_26096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (8))){
var inst_26035 = (state_26058[(7)]);
var tmp26070 = inst_26035;
var inst_26035__$1 = tmp26070;
var state_26058__$1 = (function (){var statearr_26074 = state_26058;
(statearr_26074[(7)] = inst_26035__$1);

return statearr_26074;
})();
var statearr_26075_26097 = state_26058__$1;
(statearr_26075_26097[(2)] = null);

(statearr_26075_26097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___26087,out))
;
return ((function (switch__23402__auto__,c__23514__auto___26087,out){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_26079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26079[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_26079[(1)] = (1));

return statearr_26079;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_26058){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_26058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e26080){if((e26080 instanceof Object)){
var ex__23406__auto__ = e26080;
var statearr_26081_26098 = state_26058;
(statearr_26081_26098[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_26058;
state_26058 = G__26099;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_26058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_26058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___26087,out))
})();
var state__23516__auto__ = (function (){var statearr_26082 = f__23515__auto__.call(null);
(statearr_26082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___26087);

return statearr_26082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___26087,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26100 = [];
var len__22288__auto___26170 = arguments.length;
var i__22289__auto___26171 = (0);
while(true){
if((i__22289__auto___26171 < len__22288__auto___26170)){
args26100.push((arguments[i__22289__auto___26171]));

var G__26172 = (i__22289__auto___26171 + (1));
i__22289__auto___26171 = G__26172;
continue;
} else {
}
break;
}

var G__26102 = args26100.length;
switch (G__26102) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26100.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23514__auto___26174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___26174,out){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___26174,out){
return (function (state_26140){
var state_val_26141 = (state_26140[(1)]);
if((state_val_26141 === (7))){
var inst_26136 = (state_26140[(2)]);
var state_26140__$1 = state_26140;
var statearr_26142_26175 = state_26140__$1;
(statearr_26142_26175[(2)] = inst_26136);

(statearr_26142_26175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (1))){
var inst_26103 = (new Array(n));
var inst_26104 = inst_26103;
var inst_26105 = (0);
var state_26140__$1 = (function (){var statearr_26143 = state_26140;
(statearr_26143[(7)] = inst_26105);

(statearr_26143[(8)] = inst_26104);

return statearr_26143;
})();
var statearr_26144_26176 = state_26140__$1;
(statearr_26144_26176[(2)] = null);

(statearr_26144_26176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (4))){
var inst_26108 = (state_26140[(9)]);
var inst_26108__$1 = (state_26140[(2)]);
var inst_26109 = (inst_26108__$1 == null);
var inst_26110 = cljs.core.not.call(null,inst_26109);
var state_26140__$1 = (function (){var statearr_26145 = state_26140;
(statearr_26145[(9)] = inst_26108__$1);

return statearr_26145;
})();
if(inst_26110){
var statearr_26146_26177 = state_26140__$1;
(statearr_26146_26177[(1)] = (5));

} else {
var statearr_26147_26178 = state_26140__$1;
(statearr_26147_26178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (15))){
var inst_26130 = (state_26140[(2)]);
var state_26140__$1 = state_26140;
var statearr_26148_26179 = state_26140__$1;
(statearr_26148_26179[(2)] = inst_26130);

(statearr_26148_26179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (13))){
var state_26140__$1 = state_26140;
var statearr_26149_26180 = state_26140__$1;
(statearr_26149_26180[(2)] = null);

(statearr_26149_26180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (6))){
var inst_26105 = (state_26140[(7)]);
var inst_26126 = (inst_26105 > (0));
var state_26140__$1 = state_26140;
if(cljs.core.truth_(inst_26126)){
var statearr_26150_26181 = state_26140__$1;
(statearr_26150_26181[(1)] = (12));

} else {
var statearr_26151_26182 = state_26140__$1;
(statearr_26151_26182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (3))){
var inst_26138 = (state_26140[(2)]);
var state_26140__$1 = state_26140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26140__$1,inst_26138);
} else {
if((state_val_26141 === (12))){
var inst_26104 = (state_26140[(8)]);
var inst_26128 = cljs.core.vec.call(null,inst_26104);
var state_26140__$1 = state_26140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26140__$1,(15),out,inst_26128);
} else {
if((state_val_26141 === (2))){
var state_26140__$1 = state_26140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26140__$1,(4),ch);
} else {
if((state_val_26141 === (11))){
var inst_26120 = (state_26140[(2)]);
var inst_26121 = (new Array(n));
var inst_26104 = inst_26121;
var inst_26105 = (0);
var state_26140__$1 = (function (){var statearr_26152 = state_26140;
(statearr_26152[(10)] = inst_26120);

(statearr_26152[(7)] = inst_26105);

(statearr_26152[(8)] = inst_26104);

return statearr_26152;
})();
var statearr_26153_26183 = state_26140__$1;
(statearr_26153_26183[(2)] = null);

(statearr_26153_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (9))){
var inst_26104 = (state_26140[(8)]);
var inst_26118 = cljs.core.vec.call(null,inst_26104);
var state_26140__$1 = state_26140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26140__$1,(11),out,inst_26118);
} else {
if((state_val_26141 === (5))){
var inst_26105 = (state_26140[(7)]);
var inst_26104 = (state_26140[(8)]);
var inst_26113 = (state_26140[(11)]);
var inst_26108 = (state_26140[(9)]);
var inst_26112 = (inst_26104[inst_26105] = inst_26108);
var inst_26113__$1 = (inst_26105 + (1));
var inst_26114 = (inst_26113__$1 < n);
var state_26140__$1 = (function (){var statearr_26154 = state_26140;
(statearr_26154[(12)] = inst_26112);

(statearr_26154[(11)] = inst_26113__$1);

return statearr_26154;
})();
if(cljs.core.truth_(inst_26114)){
var statearr_26155_26184 = state_26140__$1;
(statearr_26155_26184[(1)] = (8));

} else {
var statearr_26156_26185 = state_26140__$1;
(statearr_26156_26185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (14))){
var inst_26133 = (state_26140[(2)]);
var inst_26134 = cljs.core.async.close_BANG_.call(null,out);
var state_26140__$1 = (function (){var statearr_26158 = state_26140;
(statearr_26158[(13)] = inst_26133);

return statearr_26158;
})();
var statearr_26159_26186 = state_26140__$1;
(statearr_26159_26186[(2)] = inst_26134);

(statearr_26159_26186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (10))){
var inst_26124 = (state_26140[(2)]);
var state_26140__$1 = state_26140;
var statearr_26160_26187 = state_26140__$1;
(statearr_26160_26187[(2)] = inst_26124);

(statearr_26160_26187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26141 === (8))){
var inst_26104 = (state_26140[(8)]);
var inst_26113 = (state_26140[(11)]);
var tmp26157 = inst_26104;
var inst_26104__$1 = tmp26157;
var inst_26105 = inst_26113;
var state_26140__$1 = (function (){var statearr_26161 = state_26140;
(statearr_26161[(7)] = inst_26105);

(statearr_26161[(8)] = inst_26104__$1);

return statearr_26161;
})();
var statearr_26162_26188 = state_26140__$1;
(statearr_26162_26188[(2)] = null);

(statearr_26162_26188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___26174,out))
;
return ((function (switch__23402__auto__,c__23514__auto___26174,out){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_26166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26166[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_26166[(1)] = (1));

return statearr_26166;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_26140){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_26140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e26167){if((e26167 instanceof Object)){
var ex__23406__auto__ = e26167;
var statearr_26168_26189 = state_26140;
(statearr_26168_26189[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26190 = state_26140;
state_26140 = G__26190;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_26140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_26140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___26174,out))
})();
var state__23516__auto__ = (function (){var statearr_26169 = f__23515__auto__.call(null);
(statearr_26169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___26174);

return statearr_26169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___26174,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26191 = [];
var len__22288__auto___26265 = arguments.length;
var i__22289__auto___26266 = (0);
while(true){
if((i__22289__auto___26266 < len__22288__auto___26265)){
args26191.push((arguments[i__22289__auto___26266]));

var G__26267 = (i__22289__auto___26266 + (1));
i__22289__auto___26266 = G__26267;
continue;
} else {
}
break;
}

var G__26193 = args26191.length;
switch (G__26193) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26191.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23514__auto___26269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___26269,out){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___26269,out){
return (function (state_26235){
var state_val_26236 = (state_26235[(1)]);
if((state_val_26236 === (7))){
var inst_26231 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26237_26270 = state_26235__$1;
(statearr_26237_26270[(2)] = inst_26231);

(statearr_26237_26270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (1))){
var inst_26194 = [];
var inst_26195 = inst_26194;
var inst_26196 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26235__$1 = (function (){var statearr_26238 = state_26235;
(statearr_26238[(7)] = inst_26195);

(statearr_26238[(8)] = inst_26196);

return statearr_26238;
})();
var statearr_26239_26271 = state_26235__$1;
(statearr_26239_26271[(2)] = null);

(statearr_26239_26271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (4))){
var inst_26199 = (state_26235[(9)]);
var inst_26199__$1 = (state_26235[(2)]);
var inst_26200 = (inst_26199__$1 == null);
var inst_26201 = cljs.core.not.call(null,inst_26200);
var state_26235__$1 = (function (){var statearr_26240 = state_26235;
(statearr_26240[(9)] = inst_26199__$1);

return statearr_26240;
})();
if(inst_26201){
var statearr_26241_26272 = state_26235__$1;
(statearr_26241_26272[(1)] = (5));

} else {
var statearr_26242_26273 = state_26235__$1;
(statearr_26242_26273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (15))){
var inst_26225 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26243_26274 = state_26235__$1;
(statearr_26243_26274[(2)] = inst_26225);

(statearr_26243_26274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (13))){
var state_26235__$1 = state_26235;
var statearr_26244_26275 = state_26235__$1;
(statearr_26244_26275[(2)] = null);

(statearr_26244_26275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (6))){
var inst_26195 = (state_26235[(7)]);
var inst_26220 = inst_26195.length;
var inst_26221 = (inst_26220 > (0));
var state_26235__$1 = state_26235;
if(cljs.core.truth_(inst_26221)){
var statearr_26245_26276 = state_26235__$1;
(statearr_26245_26276[(1)] = (12));

} else {
var statearr_26246_26277 = state_26235__$1;
(statearr_26246_26277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (3))){
var inst_26233 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26235__$1,inst_26233);
} else {
if((state_val_26236 === (12))){
var inst_26195 = (state_26235[(7)]);
var inst_26223 = cljs.core.vec.call(null,inst_26195);
var state_26235__$1 = state_26235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26235__$1,(15),out,inst_26223);
} else {
if((state_val_26236 === (2))){
var state_26235__$1 = state_26235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(4),ch);
} else {
if((state_val_26236 === (11))){
var inst_26199 = (state_26235[(9)]);
var inst_26203 = (state_26235[(10)]);
var inst_26213 = (state_26235[(2)]);
var inst_26214 = [];
var inst_26215 = inst_26214.push(inst_26199);
var inst_26195 = inst_26214;
var inst_26196 = inst_26203;
var state_26235__$1 = (function (){var statearr_26247 = state_26235;
(statearr_26247[(11)] = inst_26215);

(statearr_26247[(7)] = inst_26195);

(statearr_26247[(12)] = inst_26213);

(statearr_26247[(8)] = inst_26196);

return statearr_26247;
})();
var statearr_26248_26278 = state_26235__$1;
(statearr_26248_26278[(2)] = null);

(statearr_26248_26278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (9))){
var inst_26195 = (state_26235[(7)]);
var inst_26211 = cljs.core.vec.call(null,inst_26195);
var state_26235__$1 = state_26235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26235__$1,(11),out,inst_26211);
} else {
if((state_val_26236 === (5))){
var inst_26199 = (state_26235[(9)]);
var inst_26203 = (state_26235[(10)]);
var inst_26196 = (state_26235[(8)]);
var inst_26203__$1 = f.call(null,inst_26199);
var inst_26204 = cljs.core._EQ_.call(null,inst_26203__$1,inst_26196);
var inst_26205 = cljs.core.keyword_identical_QMARK_.call(null,inst_26196,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26206 = (inst_26204) || (inst_26205);
var state_26235__$1 = (function (){var statearr_26249 = state_26235;
(statearr_26249[(10)] = inst_26203__$1);

return statearr_26249;
})();
if(cljs.core.truth_(inst_26206)){
var statearr_26250_26279 = state_26235__$1;
(statearr_26250_26279[(1)] = (8));

} else {
var statearr_26251_26280 = state_26235__$1;
(statearr_26251_26280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (14))){
var inst_26228 = (state_26235[(2)]);
var inst_26229 = cljs.core.async.close_BANG_.call(null,out);
var state_26235__$1 = (function (){var statearr_26253 = state_26235;
(statearr_26253[(13)] = inst_26228);

return statearr_26253;
})();
var statearr_26254_26281 = state_26235__$1;
(statearr_26254_26281[(2)] = inst_26229);

(statearr_26254_26281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (10))){
var inst_26218 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26255_26282 = state_26235__$1;
(statearr_26255_26282[(2)] = inst_26218);

(statearr_26255_26282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (8))){
var inst_26195 = (state_26235[(7)]);
var inst_26199 = (state_26235[(9)]);
var inst_26203 = (state_26235[(10)]);
var inst_26208 = inst_26195.push(inst_26199);
var tmp26252 = inst_26195;
var inst_26195__$1 = tmp26252;
var inst_26196 = inst_26203;
var state_26235__$1 = (function (){var statearr_26256 = state_26235;
(statearr_26256[(7)] = inst_26195__$1);

(statearr_26256[(14)] = inst_26208);

(statearr_26256[(8)] = inst_26196);

return statearr_26256;
})();
var statearr_26257_26283 = state_26235__$1;
(statearr_26257_26283[(2)] = null);

(statearr_26257_26283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23514__auto___26269,out))
;
return ((function (switch__23402__auto__,c__23514__auto___26269,out){
return (function() {
var cljs$core$async$state_machine__23403__auto__ = null;
var cljs$core$async$state_machine__23403__auto____0 = (function (){
var statearr_26261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26261[(0)] = cljs$core$async$state_machine__23403__auto__);

(statearr_26261[(1)] = (1));

return statearr_26261;
});
var cljs$core$async$state_machine__23403__auto____1 = (function (state_26235){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_26235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e26262){if((e26262 instanceof Object)){
var ex__23406__auto__ = e26262;
var statearr_26263_26284 = state_26235;
(statearr_26263_26284[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26285 = state_26235;
state_26235 = G__26285;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
cljs$core$async$state_machine__23403__auto__ = function(state_26235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23403__auto____1.call(this,state_26235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23403__auto____0;
cljs$core$async$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23403__auto____1;
return cljs$core$async$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___26269,out))
})();
var state__23516__auto__ = (function (){var statearr_26264 = f__23515__auto__.call(null);
(statearr_26264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___26269);

return statearr_26264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___26269,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map