// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27481_27495 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27482_27496 = null;
var count__27483_27497 = (0);
var i__27484_27498 = (0);
while(true){
if((i__27484_27498 < count__27483_27497)){
var f_27499 = cljs.core._nth.call(null,chunk__27482_27496,i__27484_27498);
cljs.core.println.call(null,"  ",f_27499);

var G__27500 = seq__27481_27495;
var G__27501 = chunk__27482_27496;
var G__27502 = count__27483_27497;
var G__27503 = (i__27484_27498 + (1));
seq__27481_27495 = G__27500;
chunk__27482_27496 = G__27501;
count__27483_27497 = G__27502;
i__27484_27498 = G__27503;
continue;
} else {
var temp__4425__auto___27504 = cljs.core.seq.call(null,seq__27481_27495);
if(temp__4425__auto___27504){
var seq__27481_27505__$1 = temp__4425__auto___27504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27481_27505__$1)){
var c__22033__auto___27506 = cljs.core.chunk_first.call(null,seq__27481_27505__$1);
var G__27507 = cljs.core.chunk_rest.call(null,seq__27481_27505__$1);
var G__27508 = c__22033__auto___27506;
var G__27509 = cljs.core.count.call(null,c__22033__auto___27506);
var G__27510 = (0);
seq__27481_27495 = G__27507;
chunk__27482_27496 = G__27508;
count__27483_27497 = G__27509;
i__27484_27498 = G__27510;
continue;
} else {
var f_27511 = cljs.core.first.call(null,seq__27481_27505__$1);
cljs.core.println.call(null,"  ",f_27511);

var G__27512 = cljs.core.next.call(null,seq__27481_27505__$1);
var G__27513 = null;
var G__27514 = (0);
var G__27515 = (0);
seq__27481_27495 = G__27512;
chunk__27482_27496 = G__27513;
count__27483_27497 = G__27514;
i__27484_27498 = G__27515;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27516 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21230__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27516);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27516)))?cljs.core.second.call(null,arglists_27516):arglists_27516));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27486 = null;
var count__27487 = (0);
var i__27488 = (0);
while(true){
if((i__27488 < count__27487)){
var vec__27489 = cljs.core._nth.call(null,chunk__27486,i__27488);
var name = cljs.core.nth.call(null,vec__27489,(0),null);
var map__27490 = cljs.core.nth.call(null,vec__27489,(1),null);
var map__27490__$1 = ((((!((map__27490 == null)))?((((map__27490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27490):map__27490);
var doc = cljs.core.get.call(null,map__27490__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27490__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27517 = seq__27485;
var G__27518 = chunk__27486;
var G__27519 = count__27487;
var G__27520 = (i__27488 + (1));
seq__27485 = G__27517;
chunk__27486 = G__27518;
count__27487 = G__27519;
i__27488 = G__27520;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27485);
if(temp__4425__auto__){
var seq__27485__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27485__$1)){
var c__22033__auto__ = cljs.core.chunk_first.call(null,seq__27485__$1);
var G__27521 = cljs.core.chunk_rest.call(null,seq__27485__$1);
var G__27522 = c__22033__auto__;
var G__27523 = cljs.core.count.call(null,c__22033__auto__);
var G__27524 = (0);
seq__27485 = G__27521;
chunk__27486 = G__27522;
count__27487 = G__27523;
i__27488 = G__27524;
continue;
} else {
var vec__27492 = cljs.core.first.call(null,seq__27485__$1);
var name = cljs.core.nth.call(null,vec__27492,(0),null);
var map__27493 = cljs.core.nth.call(null,vec__27492,(1),null);
var map__27493__$1 = ((((!((map__27493 == null)))?((((map__27493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27493):map__27493);
var doc = cljs.core.get.call(null,map__27493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27525 = cljs.core.next.call(null,seq__27485__$1);
var G__27526 = null;
var G__27527 = (0);
var G__27528 = (0);
seq__27485 = G__27525;
chunk__27486 = G__27526;
count__27487 = G__27527;
i__27488 = G__27528;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map