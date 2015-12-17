// Compiled by ClojureScript 1.7.170 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__21236__auto__ = elem.textContent;
if(cljs.core.truth_(or__21236__auto__)){
return or__21236__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args22439 = [];
var len__22294__auto___22442 = arguments.length;
var i__22295__auto___22443 = (0);
while(true){
if((i__22295__auto___22443 < len__22294__auto___22442)){
args22439.push((arguments[i__22295__auto___22443]));

var G__22444 = (i__22295__auto___22443 + (1));
i__22295__auto___22443 = G__22444;
continue;
} else {
}
break;
}

var G__22441 = args22439.length;
switch (G__22441) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22439.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args22446 = [];
var len__22294__auto___22449 = arguments.length;
var i__22295__auto___22450 = (0);
while(true){
if((i__22295__auto___22450 < len__22294__auto___22449)){
args22446.push((arguments[i__22295__auto___22450]));

var G__22451 = (i__22295__auto___22450 + (1));
i__22295__auto___22450 = G__22451;
continue;
} else {
}
break;
}

var G__22448 = args22446.length;
switch (G__22448) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22446.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args22454 = [];
var len__22294__auto___22457 = arguments.length;
var i__22295__auto___22458 = (0);
while(true){
if((i__22295__auto___22458 < len__22294__auto___22457)){
args22454.push((arguments[i__22295__auto___22458]));

var G__22459 = (i__22295__auto___22458 + (1));
i__22295__auto___22458 = G__22459;
continue;
} else {
}
break;
}

var G__22456 = args22454.length;
switch (G__22456) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22454.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__22453_SHARP_){
return !((p1__22453_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__22301__auto__ = [];
var len__22294__auto___22469 = arguments.length;
var i__22295__auto___22470 = (0);
while(true){
if((i__22295__auto___22470 < len__22294__auto___22469)){
args__22301__auto__.push((arguments[i__22295__auto___22470]));

var G__22471 = (i__22295__auto___22470 + (1));
i__22295__auto___22470 = G__22471;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((1) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22302__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__22463_22472 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__22464_22473 = null;
var count__22465_22474 = (0);
var i__22466_22475 = (0);
while(true){
if((i__22466_22475 < count__22465_22474)){
var vec__22467_22476 = cljs.core._nth.call(null,chunk__22464_22473,i__22466_22475);
var k_22477 = cljs.core.nth.call(null,vec__22467_22476,(0),null);
var v_22478 = cljs.core.nth.call(null,vec__22467_22476,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_22477),v_22478);

var G__22479 = seq__22463_22472;
var G__22480 = chunk__22464_22473;
var G__22481 = count__22465_22474;
var G__22482 = (i__22466_22475 + (1));
seq__22463_22472 = G__22479;
chunk__22464_22473 = G__22480;
count__22465_22474 = G__22481;
i__22466_22475 = G__22482;
continue;
} else {
var temp__4425__auto___22483 = cljs.core.seq.call(null,seq__22463_22472);
if(temp__4425__auto___22483){
var seq__22463_22484__$1 = temp__4425__auto___22483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22463_22484__$1)){
var c__22039__auto___22485 = cljs.core.chunk_first.call(null,seq__22463_22484__$1);
var G__22486 = cljs.core.chunk_rest.call(null,seq__22463_22484__$1);
var G__22487 = c__22039__auto___22485;
var G__22488 = cljs.core.count.call(null,c__22039__auto___22485);
var G__22489 = (0);
seq__22463_22472 = G__22486;
chunk__22464_22473 = G__22487;
count__22465_22474 = G__22488;
i__22466_22475 = G__22489;
continue;
} else {
var vec__22468_22490 = cljs.core.first.call(null,seq__22463_22484__$1);
var k_22491 = cljs.core.nth.call(null,vec__22468_22490,(0),null);
var v_22492 = cljs.core.nth.call(null,vec__22468_22490,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_22491),v_22492);

var G__22493 = cljs.core.next.call(null,seq__22463_22484__$1);
var G__22494 = null;
var G__22495 = (0);
var G__22496 = (0);
seq__22463_22472 = G__22493;
chunk__22464_22473 = G__22494;
count__22465_22474 = G__22495;
i__22466_22475 = G__22496;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq22461){
var G__22462 = cljs.core.first.call(null,seq22461);
var seq22461__$1 = cljs.core.next.call(null,seq22461);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22462,seq22461__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__22301__auto__ = [];
var len__22294__auto___22503 = arguments.length;
var i__22295__auto___22504 = (0);
while(true){
if((i__22295__auto___22504 < len__22294__auto___22503)){
args__22301__auto__.push((arguments[i__22295__auto___22504]));

var G__22505 = (i__22295__auto___22504 + (1));
i__22295__auto___22504 = G__22505;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((1) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22302__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__22499_22506 = cljs.core.seq.call(null,keywords);
var chunk__22500_22507 = null;
var count__22501_22508 = (0);
var i__22502_22509 = (0);
while(true){
if((i__22502_22509 < count__22501_22508)){
var kw_22510 = cljs.core._nth.call(null,chunk__22500_22507,i__22502_22509);
style.removeProperty(dommy.utils.as_str.call(null,kw_22510));

var G__22511 = seq__22499_22506;
var G__22512 = chunk__22500_22507;
var G__22513 = count__22501_22508;
var G__22514 = (i__22502_22509 + (1));
seq__22499_22506 = G__22511;
chunk__22500_22507 = G__22512;
count__22501_22508 = G__22513;
i__22502_22509 = G__22514;
continue;
} else {
var temp__4425__auto___22515 = cljs.core.seq.call(null,seq__22499_22506);
if(temp__4425__auto___22515){
var seq__22499_22516__$1 = temp__4425__auto___22515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22499_22516__$1)){
var c__22039__auto___22517 = cljs.core.chunk_first.call(null,seq__22499_22516__$1);
var G__22518 = cljs.core.chunk_rest.call(null,seq__22499_22516__$1);
var G__22519 = c__22039__auto___22517;
var G__22520 = cljs.core.count.call(null,c__22039__auto___22517);
var G__22521 = (0);
seq__22499_22506 = G__22518;
chunk__22500_22507 = G__22519;
count__22501_22508 = G__22520;
i__22502_22509 = G__22521;
continue;
} else {
var kw_22522 = cljs.core.first.call(null,seq__22499_22516__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_22522));

var G__22523 = cljs.core.next.call(null,seq__22499_22516__$1);
var G__22524 = null;
var G__22525 = (0);
var G__22526 = (0);
seq__22499_22506 = G__22523;
chunk__22500_22507 = G__22524;
count__22501_22508 = G__22525;
i__22502_22509 = G__22526;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq22497){
var G__22498 = cljs.core.first.call(null,seq22497);
var seq22497__$1 = cljs.core.next.call(null,seq22497);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22498,seq22497__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__22301__auto__ = [];
var len__22294__auto___22535 = arguments.length;
var i__22295__auto___22536 = (0);
while(true){
if((i__22295__auto___22536 < len__22294__auto___22535)){
args__22301__auto__.push((arguments[i__22295__auto___22536]));

var G__22537 = (i__22295__auto___22536 + (1));
i__22295__auto___22536 = G__22537;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((1) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22302__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__22529_22538 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__22530_22539 = null;
var count__22531_22540 = (0);
var i__22532_22541 = (0);
while(true){
if((i__22532_22541 < count__22531_22540)){
var vec__22533_22542 = cljs.core._nth.call(null,chunk__22530_22539,i__22532_22541);
var k_22543 = cljs.core.nth.call(null,vec__22533_22542,(0),null);
var v_22544 = cljs.core.nth.call(null,vec__22533_22542,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_22543,[cljs.core.str(v_22544),cljs.core.str("px")].join(''));

var G__22545 = seq__22529_22538;
var G__22546 = chunk__22530_22539;
var G__22547 = count__22531_22540;
var G__22548 = (i__22532_22541 + (1));
seq__22529_22538 = G__22545;
chunk__22530_22539 = G__22546;
count__22531_22540 = G__22547;
i__22532_22541 = G__22548;
continue;
} else {
var temp__4425__auto___22549 = cljs.core.seq.call(null,seq__22529_22538);
if(temp__4425__auto___22549){
var seq__22529_22550__$1 = temp__4425__auto___22549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22529_22550__$1)){
var c__22039__auto___22551 = cljs.core.chunk_first.call(null,seq__22529_22550__$1);
var G__22552 = cljs.core.chunk_rest.call(null,seq__22529_22550__$1);
var G__22553 = c__22039__auto___22551;
var G__22554 = cljs.core.count.call(null,c__22039__auto___22551);
var G__22555 = (0);
seq__22529_22538 = G__22552;
chunk__22530_22539 = G__22553;
count__22531_22540 = G__22554;
i__22532_22541 = G__22555;
continue;
} else {
var vec__22534_22556 = cljs.core.first.call(null,seq__22529_22550__$1);
var k_22557 = cljs.core.nth.call(null,vec__22534_22556,(0),null);
var v_22558 = cljs.core.nth.call(null,vec__22534_22556,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_22557,[cljs.core.str(v_22558),cljs.core.str("px")].join(''));

var G__22559 = cljs.core.next.call(null,seq__22529_22550__$1);
var G__22560 = null;
var G__22561 = (0);
var G__22562 = (0);
seq__22529_22538 = G__22559;
chunk__22530_22539 = G__22560;
count__22531_22540 = G__22561;
i__22532_22541 = G__22562;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq22527){
var G__22528 = cljs.core.first.call(null,seq22527);
var seq22527__$1 = cljs.core.next.call(null,seq22527);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22528,seq22527__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args22563 = [];
var len__22294__auto___22578 = arguments.length;
var i__22295__auto___22579 = (0);
while(true){
if((i__22295__auto___22579 < len__22294__auto___22578)){
args22563.push((arguments[i__22295__auto___22579]));

var G__22580 = (i__22295__auto___22579 + (1));
i__22295__auto___22579 = G__22580;
continue;
} else {
}
break;
}

var G__22569 = args22563.length;
switch (G__22569) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__22313__auto__ = (new cljs.core.IndexedSeq(args22563.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22313__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__22570 = elem;
(G__22570[k__$1] = v);

return G__22570;
} else {
var G__22571 = elem;
G__22571.setAttribute(k__$1,v);

return G__22571;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__22572_22582 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__22573_22583 = null;
var count__22574_22584 = (0);
var i__22575_22585 = (0);
while(true){
if((i__22575_22585 < count__22574_22584)){
var vec__22576_22586 = cljs.core._nth.call(null,chunk__22573_22583,i__22575_22585);
var k_22587__$1 = cljs.core.nth.call(null,vec__22576_22586,(0),null);
var v_22588__$1 = cljs.core.nth.call(null,vec__22576_22586,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_22587__$1,v_22588__$1);

var G__22589 = seq__22572_22582;
var G__22590 = chunk__22573_22583;
var G__22591 = count__22574_22584;
var G__22592 = (i__22575_22585 + (1));
seq__22572_22582 = G__22589;
chunk__22573_22583 = G__22590;
count__22574_22584 = G__22591;
i__22575_22585 = G__22592;
continue;
} else {
var temp__4425__auto___22593 = cljs.core.seq.call(null,seq__22572_22582);
if(temp__4425__auto___22593){
var seq__22572_22594__$1 = temp__4425__auto___22593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22572_22594__$1)){
var c__22039__auto___22595 = cljs.core.chunk_first.call(null,seq__22572_22594__$1);
var G__22596 = cljs.core.chunk_rest.call(null,seq__22572_22594__$1);
var G__22597 = c__22039__auto___22595;
var G__22598 = cljs.core.count.call(null,c__22039__auto___22595);
var G__22599 = (0);
seq__22572_22582 = G__22596;
chunk__22573_22583 = G__22597;
count__22574_22584 = G__22598;
i__22575_22585 = G__22599;
continue;
} else {
var vec__22577_22600 = cljs.core.first.call(null,seq__22572_22594__$1);
var k_22601__$1 = cljs.core.nth.call(null,vec__22577_22600,(0),null);
var v_22602__$1 = cljs.core.nth.call(null,vec__22577_22600,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_22601__$1,v_22602__$1);

var G__22603 = cljs.core.next.call(null,seq__22572_22594__$1);
var G__22604 = null;
var G__22605 = (0);
var G__22606 = (0);
seq__22572_22582 = G__22603;
chunk__22573_22583 = G__22604;
count__22574_22584 = G__22605;
i__22575_22585 = G__22606;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq22564){
var G__22565 = cljs.core.first.call(null,seq22564);
var seq22564__$1 = cljs.core.next.call(null,seq22564);
var G__22566 = cljs.core.first.call(null,seq22564__$1);
var seq22564__$2 = cljs.core.next.call(null,seq22564__$1);
var G__22567 = cljs.core.first.call(null,seq22564__$2);
var seq22564__$3 = cljs.core.next.call(null,seq22564__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22565,G__22566,G__22567,seq22564__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args22607 = [];
var len__22294__auto___22617 = arguments.length;
var i__22295__auto___22618 = (0);
while(true){
if((i__22295__auto___22618 < len__22294__auto___22617)){
args22607.push((arguments[i__22295__auto___22618]));

var G__22619 = (i__22295__auto___22618 + (1));
i__22295__auto___22618 = G__22619;
continue;
} else {
}
break;
}

var G__22612 = args22607.length;
switch (G__22612) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22313__auto__ = (new cljs.core.IndexedSeq(args22607.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22313__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_22621__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_22621__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_22621__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__22613_22622 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__22614_22623 = null;
var count__22615_22624 = (0);
var i__22616_22625 = (0);
while(true){
if((i__22616_22625 < count__22615_22624)){
var k_22626__$1 = cljs.core._nth.call(null,chunk__22614_22623,i__22616_22625);
dommy.core.remove_attr_BANG_.call(null,elem,k_22626__$1);

var G__22627 = seq__22613_22622;
var G__22628 = chunk__22614_22623;
var G__22629 = count__22615_22624;
var G__22630 = (i__22616_22625 + (1));
seq__22613_22622 = G__22627;
chunk__22614_22623 = G__22628;
count__22615_22624 = G__22629;
i__22616_22625 = G__22630;
continue;
} else {
var temp__4425__auto___22631 = cljs.core.seq.call(null,seq__22613_22622);
if(temp__4425__auto___22631){
var seq__22613_22632__$1 = temp__4425__auto___22631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22613_22632__$1)){
var c__22039__auto___22633 = cljs.core.chunk_first.call(null,seq__22613_22632__$1);
var G__22634 = cljs.core.chunk_rest.call(null,seq__22613_22632__$1);
var G__22635 = c__22039__auto___22633;
var G__22636 = cljs.core.count.call(null,c__22039__auto___22633);
var G__22637 = (0);
seq__22613_22622 = G__22634;
chunk__22614_22623 = G__22635;
count__22615_22624 = G__22636;
i__22616_22625 = G__22637;
continue;
} else {
var k_22638__$1 = cljs.core.first.call(null,seq__22613_22632__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_22638__$1);

var G__22639 = cljs.core.next.call(null,seq__22613_22632__$1);
var G__22640 = null;
var G__22641 = (0);
var G__22642 = (0);
seq__22613_22622 = G__22639;
chunk__22614_22623 = G__22640;
count__22615_22624 = G__22641;
i__22616_22625 = G__22642;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq22608){
var G__22609 = cljs.core.first.call(null,seq22608);
var seq22608__$1 = cljs.core.next.call(null,seq22608);
var G__22610 = cljs.core.first.call(null,seq22608__$1);
var seq22608__$2 = cljs.core.next.call(null,seq22608__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22609,G__22610,seq22608__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args22643 = [];
var len__22294__auto___22646 = arguments.length;
var i__22295__auto___22647 = (0);
while(true){
if((i__22295__auto___22647 < len__22294__auto___22646)){
args22643.push((arguments[i__22295__auto___22647]));

var G__22648 = (i__22295__auto___22647 + (1));
i__22295__auto___22647 = G__22648;
continue;
} else {
}
break;
}

var G__22645 = args22643.length;
switch (G__22645) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22643.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args22650 = [];
var len__22294__auto___22668 = arguments.length;
var i__22295__auto___22669 = (0);
while(true){
if((i__22295__auto___22669 < len__22294__auto___22668)){
args22650.push((arguments[i__22295__auto___22669]));

var G__22670 = (i__22295__auto___22669 + (1));
i__22295__auto___22669 = G__22670;
continue;
} else {
}
break;
}

var G__22655 = args22650.length;
switch (G__22655) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22313__auto__ = (new cljs.core.IndexedSeq(args22650.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22313__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___22672 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___22672)){
var class_list_22673 = temp__4423__auto___22672;
var seq__22656_22674 = cljs.core.seq.call(null,classes__$1);
var chunk__22657_22675 = null;
var count__22658_22676 = (0);
var i__22659_22677 = (0);
while(true){
if((i__22659_22677 < count__22658_22676)){
var c_22678 = cljs.core._nth.call(null,chunk__22657_22675,i__22659_22677);
class_list_22673.add(c_22678);

var G__22679 = seq__22656_22674;
var G__22680 = chunk__22657_22675;
var G__22681 = count__22658_22676;
var G__22682 = (i__22659_22677 + (1));
seq__22656_22674 = G__22679;
chunk__22657_22675 = G__22680;
count__22658_22676 = G__22681;
i__22659_22677 = G__22682;
continue;
} else {
var temp__4425__auto___22683 = cljs.core.seq.call(null,seq__22656_22674);
if(temp__4425__auto___22683){
var seq__22656_22684__$1 = temp__4425__auto___22683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22656_22684__$1)){
var c__22039__auto___22685 = cljs.core.chunk_first.call(null,seq__22656_22684__$1);
var G__22686 = cljs.core.chunk_rest.call(null,seq__22656_22684__$1);
var G__22687 = c__22039__auto___22685;
var G__22688 = cljs.core.count.call(null,c__22039__auto___22685);
var G__22689 = (0);
seq__22656_22674 = G__22686;
chunk__22657_22675 = G__22687;
count__22658_22676 = G__22688;
i__22659_22677 = G__22689;
continue;
} else {
var c_22690 = cljs.core.first.call(null,seq__22656_22684__$1);
class_list_22673.add(c_22690);

var G__22691 = cljs.core.next.call(null,seq__22656_22684__$1);
var G__22692 = null;
var G__22693 = (0);
var G__22694 = (0);
seq__22656_22674 = G__22691;
chunk__22657_22675 = G__22692;
count__22658_22676 = G__22693;
i__22659_22677 = G__22694;
continue;
}
} else {
}
}
break;
}
} else {
var seq__22660_22695 = cljs.core.seq.call(null,classes__$1);
var chunk__22661_22696 = null;
var count__22662_22697 = (0);
var i__22663_22698 = (0);
while(true){
if((i__22663_22698 < count__22662_22697)){
var c_22699 = cljs.core._nth.call(null,chunk__22661_22696,i__22663_22698);
var class_name_22700 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_22700,c_22699))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_22700 === ""))?c_22699:[cljs.core.str(class_name_22700),cljs.core.str(" "),cljs.core.str(c_22699)].join('')));
}

var G__22701 = seq__22660_22695;
var G__22702 = chunk__22661_22696;
var G__22703 = count__22662_22697;
var G__22704 = (i__22663_22698 + (1));
seq__22660_22695 = G__22701;
chunk__22661_22696 = G__22702;
count__22662_22697 = G__22703;
i__22663_22698 = G__22704;
continue;
} else {
var temp__4425__auto___22705 = cljs.core.seq.call(null,seq__22660_22695);
if(temp__4425__auto___22705){
var seq__22660_22706__$1 = temp__4425__auto___22705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22660_22706__$1)){
var c__22039__auto___22707 = cljs.core.chunk_first.call(null,seq__22660_22706__$1);
var G__22708 = cljs.core.chunk_rest.call(null,seq__22660_22706__$1);
var G__22709 = c__22039__auto___22707;
var G__22710 = cljs.core.count.call(null,c__22039__auto___22707);
var G__22711 = (0);
seq__22660_22695 = G__22708;
chunk__22661_22696 = G__22709;
count__22662_22697 = G__22710;
i__22663_22698 = G__22711;
continue;
} else {
var c_22712 = cljs.core.first.call(null,seq__22660_22706__$1);
var class_name_22713 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_22713,c_22712))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_22713 === ""))?c_22712:[cljs.core.str(class_name_22713),cljs.core.str(" "),cljs.core.str(c_22712)].join('')));
}

var G__22714 = cljs.core.next.call(null,seq__22660_22706__$1);
var G__22715 = null;
var G__22716 = (0);
var G__22717 = (0);
seq__22660_22695 = G__22714;
chunk__22661_22696 = G__22715;
count__22662_22697 = G__22716;
i__22663_22698 = G__22717;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__22664_22718 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__22665_22719 = null;
var count__22666_22720 = (0);
var i__22667_22721 = (0);
while(true){
if((i__22667_22721 < count__22666_22720)){
var c_22722 = cljs.core._nth.call(null,chunk__22665_22719,i__22667_22721);
dommy.core.add_class_BANG_.call(null,elem,c_22722);

var G__22723 = seq__22664_22718;
var G__22724 = chunk__22665_22719;
var G__22725 = count__22666_22720;
var G__22726 = (i__22667_22721 + (1));
seq__22664_22718 = G__22723;
chunk__22665_22719 = G__22724;
count__22666_22720 = G__22725;
i__22667_22721 = G__22726;
continue;
} else {
var temp__4425__auto___22727 = cljs.core.seq.call(null,seq__22664_22718);
if(temp__4425__auto___22727){
var seq__22664_22728__$1 = temp__4425__auto___22727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22664_22728__$1)){
var c__22039__auto___22729 = cljs.core.chunk_first.call(null,seq__22664_22728__$1);
var G__22730 = cljs.core.chunk_rest.call(null,seq__22664_22728__$1);
var G__22731 = c__22039__auto___22729;
var G__22732 = cljs.core.count.call(null,c__22039__auto___22729);
var G__22733 = (0);
seq__22664_22718 = G__22730;
chunk__22665_22719 = G__22731;
count__22666_22720 = G__22732;
i__22667_22721 = G__22733;
continue;
} else {
var c_22734 = cljs.core.first.call(null,seq__22664_22728__$1);
dommy.core.add_class_BANG_.call(null,elem,c_22734);

var G__22735 = cljs.core.next.call(null,seq__22664_22728__$1);
var G__22736 = null;
var G__22737 = (0);
var G__22738 = (0);
seq__22664_22718 = G__22735;
chunk__22665_22719 = G__22736;
count__22666_22720 = G__22737;
i__22667_22721 = G__22738;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq22651){
var G__22652 = cljs.core.first.call(null,seq22651);
var seq22651__$1 = cljs.core.next.call(null,seq22651);
var G__22653 = cljs.core.first.call(null,seq22651__$1);
var seq22651__$2 = cljs.core.next.call(null,seq22651__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22652,G__22653,seq22651__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args22739 = [];
var len__22294__auto___22749 = arguments.length;
var i__22295__auto___22750 = (0);
while(true){
if((i__22295__auto___22750 < len__22294__auto___22749)){
args22739.push((arguments[i__22295__auto___22750]));

var G__22751 = (i__22295__auto___22750 + (1));
i__22295__auto___22750 = G__22751;
continue;
} else {
}
break;
}

var G__22744 = args22739.length;
switch (G__22744) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22313__auto__ = (new cljs.core.IndexedSeq(args22739.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22313__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___22753 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___22753)){
var class_list_22754 = temp__4423__auto___22753;
class_list_22754.remove(c__$1);
} else {
var class_name_22755 = dommy.core.class$.call(null,elem);
var new_class_name_22756 = dommy.utils.remove_class_str.call(null,class_name_22755,c__$1);
if((class_name_22755 === new_class_name_22756)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_22756);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__22745 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__22746 = null;
var count__22747 = (0);
var i__22748 = (0);
while(true){
if((i__22748 < count__22747)){
var c = cljs.core._nth.call(null,chunk__22746,i__22748);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__22757 = seq__22745;
var G__22758 = chunk__22746;
var G__22759 = count__22747;
var G__22760 = (i__22748 + (1));
seq__22745 = G__22757;
chunk__22746 = G__22758;
count__22747 = G__22759;
i__22748 = G__22760;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22745);
if(temp__4425__auto__){
var seq__22745__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22745__$1)){
var c__22039__auto__ = cljs.core.chunk_first.call(null,seq__22745__$1);
var G__22761 = cljs.core.chunk_rest.call(null,seq__22745__$1);
var G__22762 = c__22039__auto__;
var G__22763 = cljs.core.count.call(null,c__22039__auto__);
var G__22764 = (0);
seq__22745 = G__22761;
chunk__22746 = G__22762;
count__22747 = G__22763;
i__22748 = G__22764;
continue;
} else {
var c = cljs.core.first.call(null,seq__22745__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__22765 = cljs.core.next.call(null,seq__22745__$1);
var G__22766 = null;
var G__22767 = (0);
var G__22768 = (0);
seq__22745 = G__22765;
chunk__22746 = G__22766;
count__22747 = G__22767;
i__22748 = G__22768;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq22740){
var G__22741 = cljs.core.first.call(null,seq22740);
var seq22740__$1 = cljs.core.next.call(null,seq22740);
var G__22742 = cljs.core.first.call(null,seq22740__$1);
var seq22740__$2 = cljs.core.next.call(null,seq22740__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22741,G__22742,seq22740__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args22769 = [];
var len__22294__auto___22772 = arguments.length;
var i__22295__auto___22773 = (0);
while(true){
if((i__22295__auto___22773 < len__22294__auto___22772)){
args22769.push((arguments[i__22295__auto___22773]));

var G__22774 = (i__22295__auto___22773 + (1));
i__22295__auto___22773 = G__22774;
continue;
} else {
}
break;
}

var G__22771 = args22769.length;
switch (G__22771) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22769.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___22776 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___22776)){
var class_list_22777 = temp__4423__auto___22776;
class_list_22777.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args22778 = [];
var len__22294__auto___22781 = arguments.length;
var i__22295__auto___22782 = (0);
while(true){
if((i__22295__auto___22782 < len__22294__auto___22781)){
args22778.push((arguments[i__22295__auto___22782]));

var G__22783 = (i__22295__auto___22782 + (1));
i__22295__auto___22782 = G__22783;
continue;
} else {
}
break;
}

var G__22780 = args22778.length;
switch (G__22780) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22778.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args22785 = [];
var len__22294__auto___22788 = arguments.length;
var i__22295__auto___22789 = (0);
while(true){
if((i__22295__auto___22789 < len__22294__auto___22788)){
args22785.push((arguments[i__22295__auto___22789]));

var G__22790 = (i__22295__auto___22789 + (1));
i__22295__auto___22789 = G__22790;
continue;
} else {
}
break;
}

var G__22787 = args22785.length;
switch (G__22787) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22785.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args22792 = [];
var len__22294__auto___22803 = arguments.length;
var i__22295__auto___22804 = (0);
while(true){
if((i__22295__auto___22804 < len__22294__auto___22803)){
args22792.push((arguments[i__22295__auto___22804]));

var G__22805 = (i__22295__auto___22804 + (1));
i__22295__auto___22804 = G__22805;
continue;
} else {
}
break;
}

var G__22797 = args22792.length;
switch (G__22797) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22313__auto__ = (new cljs.core.IndexedSeq(args22792.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22313__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__22798 = parent;
G__22798.appendChild(child);

return G__22798;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__22799_22807 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__22800_22808 = null;
var count__22801_22809 = (0);
var i__22802_22810 = (0);
while(true){
if((i__22802_22810 < count__22801_22809)){
var c_22811 = cljs.core._nth.call(null,chunk__22800_22808,i__22802_22810);
dommy.core.append_BANG_.call(null,parent,c_22811);

var G__22812 = seq__22799_22807;
var G__22813 = chunk__22800_22808;
var G__22814 = count__22801_22809;
var G__22815 = (i__22802_22810 + (1));
seq__22799_22807 = G__22812;
chunk__22800_22808 = G__22813;
count__22801_22809 = G__22814;
i__22802_22810 = G__22815;
continue;
} else {
var temp__4425__auto___22816 = cljs.core.seq.call(null,seq__22799_22807);
if(temp__4425__auto___22816){
var seq__22799_22817__$1 = temp__4425__auto___22816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22799_22817__$1)){
var c__22039__auto___22818 = cljs.core.chunk_first.call(null,seq__22799_22817__$1);
var G__22819 = cljs.core.chunk_rest.call(null,seq__22799_22817__$1);
var G__22820 = c__22039__auto___22818;
var G__22821 = cljs.core.count.call(null,c__22039__auto___22818);
var G__22822 = (0);
seq__22799_22807 = G__22819;
chunk__22800_22808 = G__22820;
count__22801_22809 = G__22821;
i__22802_22810 = G__22822;
continue;
} else {
var c_22823 = cljs.core.first.call(null,seq__22799_22817__$1);
dommy.core.append_BANG_.call(null,parent,c_22823);

var G__22824 = cljs.core.next.call(null,seq__22799_22817__$1);
var G__22825 = null;
var G__22826 = (0);
var G__22827 = (0);
seq__22799_22807 = G__22824;
chunk__22800_22808 = G__22825;
count__22801_22809 = G__22826;
i__22802_22810 = G__22827;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq22793){
var G__22794 = cljs.core.first.call(null,seq22793);
var seq22793__$1 = cljs.core.next.call(null,seq22793);
var G__22795 = cljs.core.first.call(null,seq22793__$1);
var seq22793__$2 = cljs.core.next.call(null,seq22793__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22794,G__22795,seq22793__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args22828 = [];
var len__22294__auto___22839 = arguments.length;
var i__22295__auto___22840 = (0);
while(true){
if((i__22295__auto___22840 < len__22294__auto___22839)){
args22828.push((arguments[i__22295__auto___22840]));

var G__22841 = (i__22295__auto___22840 + (1));
i__22295__auto___22840 = G__22841;
continue;
} else {
}
break;
}

var G__22833 = args22828.length;
switch (G__22833) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22313__auto__ = (new cljs.core.IndexedSeq(args22828.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22313__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__22834 = parent;
G__22834.insertBefore(child,parent.firstChild);

return G__22834;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__22835_22843 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__22836_22844 = null;
var count__22837_22845 = (0);
var i__22838_22846 = (0);
while(true){
if((i__22838_22846 < count__22837_22845)){
var c_22847 = cljs.core._nth.call(null,chunk__22836_22844,i__22838_22846);
dommy.core.prepend_BANG_.call(null,parent,c_22847);

var G__22848 = seq__22835_22843;
var G__22849 = chunk__22836_22844;
var G__22850 = count__22837_22845;
var G__22851 = (i__22838_22846 + (1));
seq__22835_22843 = G__22848;
chunk__22836_22844 = G__22849;
count__22837_22845 = G__22850;
i__22838_22846 = G__22851;
continue;
} else {
var temp__4425__auto___22852 = cljs.core.seq.call(null,seq__22835_22843);
if(temp__4425__auto___22852){
var seq__22835_22853__$1 = temp__4425__auto___22852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22835_22853__$1)){
var c__22039__auto___22854 = cljs.core.chunk_first.call(null,seq__22835_22853__$1);
var G__22855 = cljs.core.chunk_rest.call(null,seq__22835_22853__$1);
var G__22856 = c__22039__auto___22854;
var G__22857 = cljs.core.count.call(null,c__22039__auto___22854);
var G__22858 = (0);
seq__22835_22843 = G__22855;
chunk__22836_22844 = G__22856;
count__22837_22845 = G__22857;
i__22838_22846 = G__22858;
continue;
} else {
var c_22859 = cljs.core.first.call(null,seq__22835_22853__$1);
dommy.core.prepend_BANG_.call(null,parent,c_22859);

var G__22860 = cljs.core.next.call(null,seq__22835_22853__$1);
var G__22861 = null;
var G__22862 = (0);
var G__22863 = (0);
seq__22835_22843 = G__22860;
chunk__22836_22844 = G__22861;
count__22837_22845 = G__22862;
i__22838_22846 = G__22863;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq22829){
var G__22830 = cljs.core.first.call(null,seq22829);
var seq22829__$1 = cljs.core.next.call(null,seq22829);
var G__22831 = cljs.core.first.call(null,seq22829__$1);
var seq22829__$2 = cljs.core.next.call(null,seq22829__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22830,G__22831,seq22829__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___22864 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___22864)){
var next_22865 = temp__4423__auto___22864;
dommy.core.insert_before_BANG_.call(null,elem,next_22865);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args22866 = [];
var len__22294__auto___22870 = arguments.length;
var i__22295__auto___22871 = (0);
while(true){
if((i__22295__auto___22871 < len__22294__auto___22870)){
args22866.push((arguments[i__22295__auto___22871]));

var G__22872 = (i__22295__auto___22871 + (1));
i__22295__auto___22871 = G__22872;
continue;
} else {
}
break;
}

var G__22868 = args22866.length;
switch (G__22868) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22866.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__22869 = p;
G__22869.removeChild(elem);

return G__22869;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22874){
var vec__22875 = p__22874;
var special_mouse_event = cljs.core.nth.call(null,vec__22875,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__22875,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__22875,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__22875,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__21236__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__21236__auto__)){
return or__21236__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__21224__auto__ = related_target;
if(cljs.core.truth_(and__21224__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__21224__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__22875,special_mouse_event,real_mouse_event))
});})(vec__22875,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__21224__auto__ = selected_target;
if(cljs.core.truth_(and__21224__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__21224__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__21236__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__21236__auto__)){
return or__21236__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__22301__auto__ = [];
var len__22294__auto___22879 = arguments.length;
var i__22295__auto___22880 = (0);
while(true){
if((i__22295__auto___22880 < len__22294__auto___22879)){
args__22301__auto__.push((arguments[i__22295__auto___22880]));

var G__22881 = (i__22295__auto___22880 + (1));
i__22295__auto___22880 = G__22881;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((2) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22302__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq22876){
var G__22877 = cljs.core.first.call(null,seq22876);
var seq22876__$1 = cljs.core.next.call(null,seq22876);
var G__22878 = cljs.core.first.call(null,seq22876__$1);
var seq22876__$2 = cljs.core.next.call(null,seq22876__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22877,G__22878,seq22876__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__22301__auto__ = [];
var len__22294__auto___22907 = arguments.length;
var i__22295__auto___22908 = (0);
while(true){
if((i__22295__auto___22908 < len__22294__auto___22907)){
args__22301__auto__.push((arguments[i__22295__auto___22908]));

var G__22909 = (i__22295__auto___22908 + (1));
i__22295__auto___22908 = G__22909;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((1) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22302__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__22884_22910 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_22911 = cljs.core.nth.call(null,vec__22884_22910,(0),null);
var selector_22912 = cljs.core.nth.call(null,vec__22884_22910,(1),null);
var seq__22885_22913 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__22892_22914 = null;
var count__22893_22915 = (0);
var i__22894_22916 = (0);
while(true){
if((i__22894_22916 < count__22893_22915)){
var vec__22901_22917 = cljs.core._nth.call(null,chunk__22892_22914,i__22894_22916);
var orig_type_22918 = cljs.core.nth.call(null,vec__22901_22917,(0),null);
var f_22919 = cljs.core.nth.call(null,vec__22901_22917,(1),null);
var seq__22895_22920 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_22918,cljs.core.PersistentArrayMap.fromArray([orig_type_22918,cljs.core.identity], true, false)));
var chunk__22897_22921 = null;
var count__22898_22922 = (0);
var i__22899_22923 = (0);
while(true){
if((i__22899_22923 < count__22898_22922)){
var vec__22902_22924 = cljs.core._nth.call(null,chunk__22897_22921,i__22899_22923);
var actual_type_22925 = cljs.core.nth.call(null,vec__22902_22924,(0),null);
var factory_22926 = cljs.core.nth.call(null,vec__22902_22924,(1),null);
var canonical_f_22927 = (cljs.core.truth_(selector_22912)?cljs.core.partial.call(null,dommy.core.live_listener,elem_22911,selector_22912):cljs.core.identity).call(null,factory_22926.call(null,f_22919));
dommy.core.update_event_listeners_BANG_.call(null,elem_22911,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22912,actual_type_22925,f_22919], null),canonical_f_22927);

if(cljs.core.truth_(elem_22911.addEventListener)){
elem_22911.addEventListener(cljs.core.name.call(null,actual_type_22925),canonical_f_22927);
} else {
elem_22911.attachEvent(cljs.core.name.call(null,actual_type_22925),canonical_f_22927);
}

var G__22928 = seq__22895_22920;
var G__22929 = chunk__22897_22921;
var G__22930 = count__22898_22922;
var G__22931 = (i__22899_22923 + (1));
seq__22895_22920 = G__22928;
chunk__22897_22921 = G__22929;
count__22898_22922 = G__22930;
i__22899_22923 = G__22931;
continue;
} else {
var temp__4425__auto___22932 = cljs.core.seq.call(null,seq__22895_22920);
if(temp__4425__auto___22932){
var seq__22895_22933__$1 = temp__4425__auto___22932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22895_22933__$1)){
var c__22039__auto___22934 = cljs.core.chunk_first.call(null,seq__22895_22933__$1);
var G__22935 = cljs.core.chunk_rest.call(null,seq__22895_22933__$1);
var G__22936 = c__22039__auto___22934;
var G__22937 = cljs.core.count.call(null,c__22039__auto___22934);
var G__22938 = (0);
seq__22895_22920 = G__22935;
chunk__22897_22921 = G__22936;
count__22898_22922 = G__22937;
i__22899_22923 = G__22938;
continue;
} else {
var vec__22903_22939 = cljs.core.first.call(null,seq__22895_22933__$1);
var actual_type_22940 = cljs.core.nth.call(null,vec__22903_22939,(0),null);
var factory_22941 = cljs.core.nth.call(null,vec__22903_22939,(1),null);
var canonical_f_22942 = (cljs.core.truth_(selector_22912)?cljs.core.partial.call(null,dommy.core.live_listener,elem_22911,selector_22912):cljs.core.identity).call(null,factory_22941.call(null,f_22919));
dommy.core.update_event_listeners_BANG_.call(null,elem_22911,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22912,actual_type_22940,f_22919], null),canonical_f_22942);

if(cljs.core.truth_(elem_22911.addEventListener)){
elem_22911.addEventListener(cljs.core.name.call(null,actual_type_22940),canonical_f_22942);
} else {
elem_22911.attachEvent(cljs.core.name.call(null,actual_type_22940),canonical_f_22942);
}

var G__22943 = cljs.core.next.call(null,seq__22895_22933__$1);
var G__22944 = null;
var G__22945 = (0);
var G__22946 = (0);
seq__22895_22920 = G__22943;
chunk__22897_22921 = G__22944;
count__22898_22922 = G__22945;
i__22899_22923 = G__22946;
continue;
}
} else {
}
}
break;
}

var G__22947 = seq__22885_22913;
var G__22948 = chunk__22892_22914;
var G__22949 = count__22893_22915;
var G__22950 = (i__22894_22916 + (1));
seq__22885_22913 = G__22947;
chunk__22892_22914 = G__22948;
count__22893_22915 = G__22949;
i__22894_22916 = G__22950;
continue;
} else {
var temp__4425__auto___22951 = cljs.core.seq.call(null,seq__22885_22913);
if(temp__4425__auto___22951){
var seq__22885_22952__$1 = temp__4425__auto___22951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22885_22952__$1)){
var c__22039__auto___22953 = cljs.core.chunk_first.call(null,seq__22885_22952__$1);
var G__22954 = cljs.core.chunk_rest.call(null,seq__22885_22952__$1);
var G__22955 = c__22039__auto___22953;
var G__22956 = cljs.core.count.call(null,c__22039__auto___22953);
var G__22957 = (0);
seq__22885_22913 = G__22954;
chunk__22892_22914 = G__22955;
count__22893_22915 = G__22956;
i__22894_22916 = G__22957;
continue;
} else {
var vec__22904_22958 = cljs.core.first.call(null,seq__22885_22952__$1);
var orig_type_22959 = cljs.core.nth.call(null,vec__22904_22958,(0),null);
var f_22960 = cljs.core.nth.call(null,vec__22904_22958,(1),null);
var seq__22886_22961 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_22959,cljs.core.PersistentArrayMap.fromArray([orig_type_22959,cljs.core.identity], true, false)));
var chunk__22888_22962 = null;
var count__22889_22963 = (0);
var i__22890_22964 = (0);
while(true){
if((i__22890_22964 < count__22889_22963)){
var vec__22905_22965 = cljs.core._nth.call(null,chunk__22888_22962,i__22890_22964);
var actual_type_22966 = cljs.core.nth.call(null,vec__22905_22965,(0),null);
var factory_22967 = cljs.core.nth.call(null,vec__22905_22965,(1),null);
var canonical_f_22968 = (cljs.core.truth_(selector_22912)?cljs.core.partial.call(null,dommy.core.live_listener,elem_22911,selector_22912):cljs.core.identity).call(null,factory_22967.call(null,f_22960));
dommy.core.update_event_listeners_BANG_.call(null,elem_22911,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22912,actual_type_22966,f_22960], null),canonical_f_22968);

if(cljs.core.truth_(elem_22911.addEventListener)){
elem_22911.addEventListener(cljs.core.name.call(null,actual_type_22966),canonical_f_22968);
} else {
elem_22911.attachEvent(cljs.core.name.call(null,actual_type_22966),canonical_f_22968);
}

var G__22969 = seq__22886_22961;
var G__22970 = chunk__22888_22962;
var G__22971 = count__22889_22963;
var G__22972 = (i__22890_22964 + (1));
seq__22886_22961 = G__22969;
chunk__22888_22962 = G__22970;
count__22889_22963 = G__22971;
i__22890_22964 = G__22972;
continue;
} else {
var temp__4425__auto___22973__$1 = cljs.core.seq.call(null,seq__22886_22961);
if(temp__4425__auto___22973__$1){
var seq__22886_22974__$1 = temp__4425__auto___22973__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22886_22974__$1)){
var c__22039__auto___22975 = cljs.core.chunk_first.call(null,seq__22886_22974__$1);
var G__22976 = cljs.core.chunk_rest.call(null,seq__22886_22974__$1);
var G__22977 = c__22039__auto___22975;
var G__22978 = cljs.core.count.call(null,c__22039__auto___22975);
var G__22979 = (0);
seq__22886_22961 = G__22976;
chunk__22888_22962 = G__22977;
count__22889_22963 = G__22978;
i__22890_22964 = G__22979;
continue;
} else {
var vec__22906_22980 = cljs.core.first.call(null,seq__22886_22974__$1);
var actual_type_22981 = cljs.core.nth.call(null,vec__22906_22980,(0),null);
var factory_22982 = cljs.core.nth.call(null,vec__22906_22980,(1),null);
var canonical_f_22983 = (cljs.core.truth_(selector_22912)?cljs.core.partial.call(null,dommy.core.live_listener,elem_22911,selector_22912):cljs.core.identity).call(null,factory_22982.call(null,f_22960));
dommy.core.update_event_listeners_BANG_.call(null,elem_22911,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_22912,actual_type_22981,f_22960], null),canonical_f_22983);

if(cljs.core.truth_(elem_22911.addEventListener)){
elem_22911.addEventListener(cljs.core.name.call(null,actual_type_22981),canonical_f_22983);
} else {
elem_22911.attachEvent(cljs.core.name.call(null,actual_type_22981),canonical_f_22983);
}

var G__22984 = cljs.core.next.call(null,seq__22886_22974__$1);
var G__22985 = null;
var G__22986 = (0);
var G__22987 = (0);
seq__22886_22961 = G__22984;
chunk__22888_22962 = G__22985;
count__22889_22963 = G__22986;
i__22890_22964 = G__22987;
continue;
}
} else {
}
}
break;
}

var G__22988 = cljs.core.next.call(null,seq__22885_22952__$1);
var G__22989 = null;
var G__22990 = (0);
var G__22991 = (0);
seq__22885_22913 = G__22988;
chunk__22892_22914 = G__22989;
count__22893_22915 = G__22990;
i__22894_22916 = G__22991;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq22882){
var G__22883 = cljs.core.first.call(null,seq22882);
var seq22882__$1 = cljs.core.next.call(null,seq22882);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22883,seq22882__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__22301__auto__ = [];
var len__22294__auto___23017 = arguments.length;
var i__22295__auto___23018 = (0);
while(true){
if((i__22295__auto___23018 < len__22294__auto___23017)){
args__22301__auto__.push((arguments[i__22295__auto___23018]));

var G__23019 = (i__22295__auto___23018 + (1));
i__22295__auto___23018 = G__23019;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((1) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22302__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__22994_23020 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23021 = cljs.core.nth.call(null,vec__22994_23020,(0),null);
var selector_23022 = cljs.core.nth.call(null,vec__22994_23020,(1),null);
var seq__22995_23023 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23002_23024 = null;
var count__23003_23025 = (0);
var i__23004_23026 = (0);
while(true){
if((i__23004_23026 < count__23003_23025)){
var vec__23011_23027 = cljs.core._nth.call(null,chunk__23002_23024,i__23004_23026);
var orig_type_23028 = cljs.core.nth.call(null,vec__23011_23027,(0),null);
var f_23029 = cljs.core.nth.call(null,vec__23011_23027,(1),null);
var seq__23005_23030 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23028,cljs.core.PersistentArrayMap.fromArray([orig_type_23028,cljs.core.identity], true, false)));
var chunk__23007_23031 = null;
var count__23008_23032 = (0);
var i__23009_23033 = (0);
while(true){
if((i__23009_23033 < count__23008_23032)){
var vec__23012_23034 = cljs.core._nth.call(null,chunk__23007_23031,i__23009_23033);
var actual_type_23035 = cljs.core.nth.call(null,vec__23012_23034,(0),null);
var __23036 = cljs.core.nth.call(null,vec__23012_23034,(1),null);
var keys_23037 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23022,actual_type_23035,f_23029], null);
var canonical_f_23038 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23021),keys_23037);
dommy.core.update_event_listeners_BANG_.call(null,elem_23021,dommy.utils.dissoc_in,keys_23037);

if(cljs.core.truth_(elem_23021.removeEventListener)){
elem_23021.removeEventListener(cljs.core.name.call(null,actual_type_23035),canonical_f_23038);
} else {
elem_23021.detachEvent(cljs.core.name.call(null,actual_type_23035),canonical_f_23038);
}

var G__23039 = seq__23005_23030;
var G__23040 = chunk__23007_23031;
var G__23041 = count__23008_23032;
var G__23042 = (i__23009_23033 + (1));
seq__23005_23030 = G__23039;
chunk__23007_23031 = G__23040;
count__23008_23032 = G__23041;
i__23009_23033 = G__23042;
continue;
} else {
var temp__4425__auto___23043 = cljs.core.seq.call(null,seq__23005_23030);
if(temp__4425__auto___23043){
var seq__23005_23044__$1 = temp__4425__auto___23043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23005_23044__$1)){
var c__22039__auto___23045 = cljs.core.chunk_first.call(null,seq__23005_23044__$1);
var G__23046 = cljs.core.chunk_rest.call(null,seq__23005_23044__$1);
var G__23047 = c__22039__auto___23045;
var G__23048 = cljs.core.count.call(null,c__22039__auto___23045);
var G__23049 = (0);
seq__23005_23030 = G__23046;
chunk__23007_23031 = G__23047;
count__23008_23032 = G__23048;
i__23009_23033 = G__23049;
continue;
} else {
var vec__23013_23050 = cljs.core.first.call(null,seq__23005_23044__$1);
var actual_type_23051 = cljs.core.nth.call(null,vec__23013_23050,(0),null);
var __23052 = cljs.core.nth.call(null,vec__23013_23050,(1),null);
var keys_23053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23022,actual_type_23051,f_23029], null);
var canonical_f_23054 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23021),keys_23053);
dommy.core.update_event_listeners_BANG_.call(null,elem_23021,dommy.utils.dissoc_in,keys_23053);

if(cljs.core.truth_(elem_23021.removeEventListener)){
elem_23021.removeEventListener(cljs.core.name.call(null,actual_type_23051),canonical_f_23054);
} else {
elem_23021.detachEvent(cljs.core.name.call(null,actual_type_23051),canonical_f_23054);
}

var G__23055 = cljs.core.next.call(null,seq__23005_23044__$1);
var G__23056 = null;
var G__23057 = (0);
var G__23058 = (0);
seq__23005_23030 = G__23055;
chunk__23007_23031 = G__23056;
count__23008_23032 = G__23057;
i__23009_23033 = G__23058;
continue;
}
} else {
}
}
break;
}

var G__23059 = seq__22995_23023;
var G__23060 = chunk__23002_23024;
var G__23061 = count__23003_23025;
var G__23062 = (i__23004_23026 + (1));
seq__22995_23023 = G__23059;
chunk__23002_23024 = G__23060;
count__23003_23025 = G__23061;
i__23004_23026 = G__23062;
continue;
} else {
var temp__4425__auto___23063 = cljs.core.seq.call(null,seq__22995_23023);
if(temp__4425__auto___23063){
var seq__22995_23064__$1 = temp__4425__auto___23063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22995_23064__$1)){
var c__22039__auto___23065 = cljs.core.chunk_first.call(null,seq__22995_23064__$1);
var G__23066 = cljs.core.chunk_rest.call(null,seq__22995_23064__$1);
var G__23067 = c__22039__auto___23065;
var G__23068 = cljs.core.count.call(null,c__22039__auto___23065);
var G__23069 = (0);
seq__22995_23023 = G__23066;
chunk__23002_23024 = G__23067;
count__23003_23025 = G__23068;
i__23004_23026 = G__23069;
continue;
} else {
var vec__23014_23070 = cljs.core.first.call(null,seq__22995_23064__$1);
var orig_type_23071 = cljs.core.nth.call(null,vec__23014_23070,(0),null);
var f_23072 = cljs.core.nth.call(null,vec__23014_23070,(1),null);
var seq__22996_23073 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23071,cljs.core.PersistentArrayMap.fromArray([orig_type_23071,cljs.core.identity], true, false)));
var chunk__22998_23074 = null;
var count__22999_23075 = (0);
var i__23000_23076 = (0);
while(true){
if((i__23000_23076 < count__22999_23075)){
var vec__23015_23077 = cljs.core._nth.call(null,chunk__22998_23074,i__23000_23076);
var actual_type_23078 = cljs.core.nth.call(null,vec__23015_23077,(0),null);
var __23079 = cljs.core.nth.call(null,vec__23015_23077,(1),null);
var keys_23080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23022,actual_type_23078,f_23072], null);
var canonical_f_23081 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23021),keys_23080);
dommy.core.update_event_listeners_BANG_.call(null,elem_23021,dommy.utils.dissoc_in,keys_23080);

if(cljs.core.truth_(elem_23021.removeEventListener)){
elem_23021.removeEventListener(cljs.core.name.call(null,actual_type_23078),canonical_f_23081);
} else {
elem_23021.detachEvent(cljs.core.name.call(null,actual_type_23078),canonical_f_23081);
}

var G__23082 = seq__22996_23073;
var G__23083 = chunk__22998_23074;
var G__23084 = count__22999_23075;
var G__23085 = (i__23000_23076 + (1));
seq__22996_23073 = G__23082;
chunk__22998_23074 = G__23083;
count__22999_23075 = G__23084;
i__23000_23076 = G__23085;
continue;
} else {
var temp__4425__auto___23086__$1 = cljs.core.seq.call(null,seq__22996_23073);
if(temp__4425__auto___23086__$1){
var seq__22996_23087__$1 = temp__4425__auto___23086__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22996_23087__$1)){
var c__22039__auto___23088 = cljs.core.chunk_first.call(null,seq__22996_23087__$1);
var G__23089 = cljs.core.chunk_rest.call(null,seq__22996_23087__$1);
var G__23090 = c__22039__auto___23088;
var G__23091 = cljs.core.count.call(null,c__22039__auto___23088);
var G__23092 = (0);
seq__22996_23073 = G__23089;
chunk__22998_23074 = G__23090;
count__22999_23075 = G__23091;
i__23000_23076 = G__23092;
continue;
} else {
var vec__23016_23093 = cljs.core.first.call(null,seq__22996_23087__$1);
var actual_type_23094 = cljs.core.nth.call(null,vec__23016_23093,(0),null);
var __23095 = cljs.core.nth.call(null,vec__23016_23093,(1),null);
var keys_23096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23022,actual_type_23094,f_23072], null);
var canonical_f_23097 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23021),keys_23096);
dommy.core.update_event_listeners_BANG_.call(null,elem_23021,dommy.utils.dissoc_in,keys_23096);

if(cljs.core.truth_(elem_23021.removeEventListener)){
elem_23021.removeEventListener(cljs.core.name.call(null,actual_type_23094),canonical_f_23097);
} else {
elem_23021.detachEvent(cljs.core.name.call(null,actual_type_23094),canonical_f_23097);
}

var G__23098 = cljs.core.next.call(null,seq__22996_23087__$1);
var G__23099 = null;
var G__23100 = (0);
var G__23101 = (0);
seq__22996_23073 = G__23098;
chunk__22998_23074 = G__23099;
count__22999_23075 = G__23100;
i__23000_23076 = G__23101;
continue;
}
} else {
}
}
break;
}

var G__23102 = cljs.core.next.call(null,seq__22995_23064__$1);
var G__23103 = null;
var G__23104 = (0);
var G__23105 = (0);
seq__22995_23023 = G__23102;
chunk__23002_23024 = G__23103;
count__23003_23025 = G__23104;
i__23004_23026 = G__23105;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq22992){
var G__22993 = cljs.core.first.call(null,seq22992);
var seq22992__$1 = cljs.core.next.call(null,seq22992);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22993,seq22992__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__22301__auto__ = [];
var len__22294__auto___23115 = arguments.length;
var i__22295__auto___23116 = (0);
while(true){
if((i__22295__auto___23116 < len__22294__auto___23115)){
args__22301__auto__.push((arguments[i__22295__auto___23116]));

var G__23117 = (i__22295__auto___23116 + (1));
i__22295__auto___23116 = G__23117;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((1) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22302__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__23108_23118 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23119 = cljs.core.nth.call(null,vec__23108_23118,(0),null);
var selector_23120 = cljs.core.nth.call(null,vec__23108_23118,(1),null);
var seq__23109_23121 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23110_23122 = null;
var count__23111_23123 = (0);
var i__23112_23124 = (0);
while(true){
if((i__23112_23124 < count__23111_23123)){
var vec__23113_23125 = cljs.core._nth.call(null,chunk__23110_23122,i__23112_23124);
var type_23126 = cljs.core.nth.call(null,vec__23113_23125,(0),null);
var f_23127 = cljs.core.nth.call(null,vec__23113_23125,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_23126,((function (seq__23109_23121,chunk__23110_23122,count__23111_23123,i__23112_23124,vec__23113_23125,type_23126,f_23127,vec__23108_23118,elem_23119,selector_23120){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_23126,dommy$core$this_fn);

return f_23127.call(null,e);
});})(seq__23109_23121,chunk__23110_23122,count__23111_23123,i__23112_23124,vec__23113_23125,type_23126,f_23127,vec__23108_23118,elem_23119,selector_23120))
);

var G__23128 = seq__23109_23121;
var G__23129 = chunk__23110_23122;
var G__23130 = count__23111_23123;
var G__23131 = (i__23112_23124 + (1));
seq__23109_23121 = G__23128;
chunk__23110_23122 = G__23129;
count__23111_23123 = G__23130;
i__23112_23124 = G__23131;
continue;
} else {
var temp__4425__auto___23132 = cljs.core.seq.call(null,seq__23109_23121);
if(temp__4425__auto___23132){
var seq__23109_23133__$1 = temp__4425__auto___23132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23109_23133__$1)){
var c__22039__auto___23134 = cljs.core.chunk_first.call(null,seq__23109_23133__$1);
var G__23135 = cljs.core.chunk_rest.call(null,seq__23109_23133__$1);
var G__23136 = c__22039__auto___23134;
var G__23137 = cljs.core.count.call(null,c__22039__auto___23134);
var G__23138 = (0);
seq__23109_23121 = G__23135;
chunk__23110_23122 = G__23136;
count__23111_23123 = G__23137;
i__23112_23124 = G__23138;
continue;
} else {
var vec__23114_23139 = cljs.core.first.call(null,seq__23109_23133__$1);
var type_23140 = cljs.core.nth.call(null,vec__23114_23139,(0),null);
var f_23141 = cljs.core.nth.call(null,vec__23114_23139,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_23140,((function (seq__23109_23121,chunk__23110_23122,count__23111_23123,i__23112_23124,vec__23114_23139,type_23140,f_23141,seq__23109_23133__$1,temp__4425__auto___23132,vec__23108_23118,elem_23119,selector_23120){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_23140,dommy$core$this_fn);

return f_23141.call(null,e);
});})(seq__23109_23121,chunk__23110_23122,count__23111_23123,i__23112_23124,vec__23114_23139,type_23140,f_23141,seq__23109_23133__$1,temp__4425__auto___23132,vec__23108_23118,elem_23119,selector_23120))
);

var G__23142 = cljs.core.next.call(null,seq__23109_23133__$1);
var G__23143 = null;
var G__23144 = (0);
var G__23145 = (0);
seq__23109_23121 = G__23142;
chunk__23110_23122 = G__23143;
count__23111_23123 = G__23144;
i__23112_23124 = G__23145;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq23106){
var G__23107 = cljs.core.first.call(null,seq23106);
var seq23106__$1 = cljs.core.next.call(null,seq23106);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23107,seq23106__$1);
});

//# sourceMappingURL=core.js.map