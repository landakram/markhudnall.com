// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21230__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21230__auto__){
return or__21230__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21230__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26457_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26457_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26462 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26463 = null;
var count__26464 = (0);
var i__26465 = (0);
while(true){
if((i__26465 < count__26464)){
var n = cljs.core._nth.call(null,chunk__26463,i__26465);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26466 = seq__26462;
var G__26467 = chunk__26463;
var G__26468 = count__26464;
var G__26469 = (i__26465 + (1));
seq__26462 = G__26466;
chunk__26463 = G__26467;
count__26464 = G__26468;
i__26465 = G__26469;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26462);
if(temp__4425__auto__){
var seq__26462__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26462__$1)){
var c__22033__auto__ = cljs.core.chunk_first.call(null,seq__26462__$1);
var G__26470 = cljs.core.chunk_rest.call(null,seq__26462__$1);
var G__26471 = c__22033__auto__;
var G__26472 = cljs.core.count.call(null,c__22033__auto__);
var G__26473 = (0);
seq__26462 = G__26470;
chunk__26463 = G__26471;
count__26464 = G__26472;
i__26465 = G__26473;
continue;
} else {
var n = cljs.core.first.call(null,seq__26462__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26474 = cljs.core.next.call(null,seq__26462__$1);
var G__26475 = null;
var G__26476 = (0);
var G__26477 = (0);
seq__26462 = G__26474;
chunk__26463 = G__26475;
count__26464 = G__26476;
i__26465 = G__26477;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26516_26523 = cljs.core.seq.call(null,deps);
var chunk__26517_26524 = null;
var count__26518_26525 = (0);
var i__26519_26526 = (0);
while(true){
if((i__26519_26526 < count__26518_26525)){
var dep_26527 = cljs.core._nth.call(null,chunk__26517_26524,i__26519_26526);
topo_sort_helper_STAR_.call(null,dep_26527,(depth + (1)),state);

var G__26528 = seq__26516_26523;
var G__26529 = chunk__26517_26524;
var G__26530 = count__26518_26525;
var G__26531 = (i__26519_26526 + (1));
seq__26516_26523 = G__26528;
chunk__26517_26524 = G__26529;
count__26518_26525 = G__26530;
i__26519_26526 = G__26531;
continue;
} else {
var temp__4425__auto___26532 = cljs.core.seq.call(null,seq__26516_26523);
if(temp__4425__auto___26532){
var seq__26516_26533__$1 = temp__4425__auto___26532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26516_26533__$1)){
var c__22033__auto___26534 = cljs.core.chunk_first.call(null,seq__26516_26533__$1);
var G__26535 = cljs.core.chunk_rest.call(null,seq__26516_26533__$1);
var G__26536 = c__22033__auto___26534;
var G__26537 = cljs.core.count.call(null,c__22033__auto___26534);
var G__26538 = (0);
seq__26516_26523 = G__26535;
chunk__26517_26524 = G__26536;
count__26518_26525 = G__26537;
i__26519_26526 = G__26538;
continue;
} else {
var dep_26539 = cljs.core.first.call(null,seq__26516_26533__$1);
topo_sort_helper_STAR_.call(null,dep_26539,(depth + (1)),state);

var G__26540 = cljs.core.next.call(null,seq__26516_26533__$1);
var G__26541 = null;
var G__26542 = (0);
var G__26543 = (0);
seq__26516_26523 = G__26540;
chunk__26517_26524 = G__26541;
count__26518_26525 = G__26542;
i__26519_26526 = G__26543;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26520){
var vec__26522 = p__26520;
var x = cljs.core.nth.call(null,vec__26522,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26522,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26522,x,xs,get_deps__$1){
return (function (p1__26478_SHARP_){
return clojure.set.difference.call(null,p1__26478_SHARP_,x);
});})(vec__26522,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26556 = cljs.core.seq.call(null,provides);
var chunk__26557 = null;
var count__26558 = (0);
var i__26559 = (0);
while(true){
if((i__26559 < count__26558)){
var prov = cljs.core._nth.call(null,chunk__26557,i__26559);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26560_26568 = cljs.core.seq.call(null,requires);
var chunk__26561_26569 = null;
var count__26562_26570 = (0);
var i__26563_26571 = (0);
while(true){
if((i__26563_26571 < count__26562_26570)){
var req_26572 = cljs.core._nth.call(null,chunk__26561_26569,i__26563_26571);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26572,prov);

var G__26573 = seq__26560_26568;
var G__26574 = chunk__26561_26569;
var G__26575 = count__26562_26570;
var G__26576 = (i__26563_26571 + (1));
seq__26560_26568 = G__26573;
chunk__26561_26569 = G__26574;
count__26562_26570 = G__26575;
i__26563_26571 = G__26576;
continue;
} else {
var temp__4425__auto___26577 = cljs.core.seq.call(null,seq__26560_26568);
if(temp__4425__auto___26577){
var seq__26560_26578__$1 = temp__4425__auto___26577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26560_26578__$1)){
var c__22033__auto___26579 = cljs.core.chunk_first.call(null,seq__26560_26578__$1);
var G__26580 = cljs.core.chunk_rest.call(null,seq__26560_26578__$1);
var G__26581 = c__22033__auto___26579;
var G__26582 = cljs.core.count.call(null,c__22033__auto___26579);
var G__26583 = (0);
seq__26560_26568 = G__26580;
chunk__26561_26569 = G__26581;
count__26562_26570 = G__26582;
i__26563_26571 = G__26583;
continue;
} else {
var req_26584 = cljs.core.first.call(null,seq__26560_26578__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26584,prov);

var G__26585 = cljs.core.next.call(null,seq__26560_26578__$1);
var G__26586 = null;
var G__26587 = (0);
var G__26588 = (0);
seq__26560_26568 = G__26585;
chunk__26561_26569 = G__26586;
count__26562_26570 = G__26587;
i__26563_26571 = G__26588;
continue;
}
} else {
}
}
break;
}

var G__26589 = seq__26556;
var G__26590 = chunk__26557;
var G__26591 = count__26558;
var G__26592 = (i__26559 + (1));
seq__26556 = G__26589;
chunk__26557 = G__26590;
count__26558 = G__26591;
i__26559 = G__26592;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26556);
if(temp__4425__auto__){
var seq__26556__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26556__$1)){
var c__22033__auto__ = cljs.core.chunk_first.call(null,seq__26556__$1);
var G__26593 = cljs.core.chunk_rest.call(null,seq__26556__$1);
var G__26594 = c__22033__auto__;
var G__26595 = cljs.core.count.call(null,c__22033__auto__);
var G__26596 = (0);
seq__26556 = G__26593;
chunk__26557 = G__26594;
count__26558 = G__26595;
i__26559 = G__26596;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26556__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26564_26597 = cljs.core.seq.call(null,requires);
var chunk__26565_26598 = null;
var count__26566_26599 = (0);
var i__26567_26600 = (0);
while(true){
if((i__26567_26600 < count__26566_26599)){
var req_26601 = cljs.core._nth.call(null,chunk__26565_26598,i__26567_26600);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26601,prov);

var G__26602 = seq__26564_26597;
var G__26603 = chunk__26565_26598;
var G__26604 = count__26566_26599;
var G__26605 = (i__26567_26600 + (1));
seq__26564_26597 = G__26602;
chunk__26565_26598 = G__26603;
count__26566_26599 = G__26604;
i__26567_26600 = G__26605;
continue;
} else {
var temp__4425__auto___26606__$1 = cljs.core.seq.call(null,seq__26564_26597);
if(temp__4425__auto___26606__$1){
var seq__26564_26607__$1 = temp__4425__auto___26606__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26564_26607__$1)){
var c__22033__auto___26608 = cljs.core.chunk_first.call(null,seq__26564_26607__$1);
var G__26609 = cljs.core.chunk_rest.call(null,seq__26564_26607__$1);
var G__26610 = c__22033__auto___26608;
var G__26611 = cljs.core.count.call(null,c__22033__auto___26608);
var G__26612 = (0);
seq__26564_26597 = G__26609;
chunk__26565_26598 = G__26610;
count__26566_26599 = G__26611;
i__26567_26600 = G__26612;
continue;
} else {
var req_26613 = cljs.core.first.call(null,seq__26564_26607__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26613,prov);

var G__26614 = cljs.core.next.call(null,seq__26564_26607__$1);
var G__26615 = null;
var G__26616 = (0);
var G__26617 = (0);
seq__26564_26597 = G__26614;
chunk__26565_26598 = G__26615;
count__26566_26599 = G__26616;
i__26567_26600 = G__26617;
continue;
}
} else {
}
}
break;
}

var G__26618 = cljs.core.next.call(null,seq__26556__$1);
var G__26619 = null;
var G__26620 = (0);
var G__26621 = (0);
seq__26556 = G__26618;
chunk__26557 = G__26619;
count__26558 = G__26620;
i__26559 = G__26621;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26626_26630 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26627_26631 = null;
var count__26628_26632 = (0);
var i__26629_26633 = (0);
while(true){
if((i__26629_26633 < count__26628_26632)){
var ns_26634 = cljs.core._nth.call(null,chunk__26627_26631,i__26629_26633);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26634);

var G__26635 = seq__26626_26630;
var G__26636 = chunk__26627_26631;
var G__26637 = count__26628_26632;
var G__26638 = (i__26629_26633 + (1));
seq__26626_26630 = G__26635;
chunk__26627_26631 = G__26636;
count__26628_26632 = G__26637;
i__26629_26633 = G__26638;
continue;
} else {
var temp__4425__auto___26639 = cljs.core.seq.call(null,seq__26626_26630);
if(temp__4425__auto___26639){
var seq__26626_26640__$1 = temp__4425__auto___26639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26626_26640__$1)){
var c__22033__auto___26641 = cljs.core.chunk_first.call(null,seq__26626_26640__$1);
var G__26642 = cljs.core.chunk_rest.call(null,seq__26626_26640__$1);
var G__26643 = c__22033__auto___26641;
var G__26644 = cljs.core.count.call(null,c__22033__auto___26641);
var G__26645 = (0);
seq__26626_26630 = G__26642;
chunk__26627_26631 = G__26643;
count__26628_26632 = G__26644;
i__26629_26633 = G__26645;
continue;
} else {
var ns_26646 = cljs.core.first.call(null,seq__26626_26640__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26646);

var G__26647 = cljs.core.next.call(null,seq__26626_26640__$1);
var G__26648 = null;
var G__26649 = (0);
var G__26650 = (0);
seq__26626_26630 = G__26647;
chunk__26627_26631 = G__26648;
count__26628_26632 = G__26649;
i__26629_26633 = G__26650;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21230__auto__ = goog.require__;
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26651__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26652__i = 0, G__26652__a = new Array(arguments.length -  0);
while (G__26652__i < G__26652__a.length) {G__26652__a[G__26652__i] = arguments[G__26652__i + 0]; ++G__26652__i;}
  args = new cljs.core.IndexedSeq(G__26652__a,0);
} 
return G__26651__delegate.call(this,args);};
G__26651.cljs$lang$maxFixedArity = 0;
G__26651.cljs$lang$applyTo = (function (arglist__26653){
var args = cljs.core.seq(arglist__26653);
return G__26651__delegate(args);
});
G__26651.cljs$core$IFn$_invoke$arity$variadic = G__26651__delegate;
return G__26651;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26655 = cljs.core._EQ_;
var expr__26656 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26655.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26656))){
var path_parts = ((function (pred__26655,expr__26656){
return (function (p1__26654_SHARP_){
return clojure.string.split.call(null,p1__26654_SHARP_,/[\/\\]/);
});})(pred__26655,expr__26656))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26655,expr__26656){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26658){if((e26658 instanceof Error)){
var e = e26658;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26658;

}
}})());
});
;})(path_parts,sep,root,pred__26655,expr__26656))
} else {
if(cljs.core.truth_(pred__26655.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26656))){
return ((function (pred__26655,expr__26656){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26655,expr__26656){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26655,expr__26656))
);

return deferred.addErrback(((function (deferred,pred__26655,expr__26656){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26655,expr__26656))
);
});
;})(pred__26655,expr__26656))
} else {
return ((function (pred__26655,expr__26656){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26655,expr__26656))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26659,callback){
var map__26662 = p__26659;
var map__26662__$1 = ((((!((map__26662 == null)))?((((map__26662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26662):map__26662);
var file_msg = map__26662__$1;
var request_url = cljs.core.get.call(null,map__26662__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26662,map__26662__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26662,map__26662__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__){
return (function (state_26686){
var state_val_26687 = (state_26686[(1)]);
if((state_val_26687 === (7))){
var inst_26682 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26688_26708 = state_26686__$1;
(statearr_26688_26708[(2)] = inst_26682);

(statearr_26688_26708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (1))){
var state_26686__$1 = state_26686;
var statearr_26689_26709 = state_26686__$1;
(statearr_26689_26709[(2)] = null);

(statearr_26689_26709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (4))){
var inst_26666 = (state_26686[(7)]);
var inst_26666__$1 = (state_26686[(2)]);
var state_26686__$1 = (function (){var statearr_26690 = state_26686;
(statearr_26690[(7)] = inst_26666__$1);

return statearr_26690;
})();
if(cljs.core.truth_(inst_26666__$1)){
var statearr_26691_26710 = state_26686__$1;
(statearr_26691_26710[(1)] = (5));

} else {
var statearr_26692_26711 = state_26686__$1;
(statearr_26692_26711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (6))){
var state_26686__$1 = state_26686;
var statearr_26693_26712 = state_26686__$1;
(statearr_26693_26712[(2)] = null);

(statearr_26693_26712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (3))){
var inst_26684 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26686__$1,inst_26684);
} else {
if((state_val_26687 === (2))){
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26686__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26687 === (11))){
var inst_26678 = (state_26686[(2)]);
var state_26686__$1 = (function (){var statearr_26694 = state_26686;
(statearr_26694[(8)] = inst_26678);

return statearr_26694;
})();
var statearr_26695_26713 = state_26686__$1;
(statearr_26695_26713[(2)] = null);

(statearr_26695_26713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (9))){
var inst_26670 = (state_26686[(9)]);
var inst_26672 = (state_26686[(10)]);
var inst_26674 = inst_26672.call(null,inst_26670);
var state_26686__$1 = state_26686;
var statearr_26696_26714 = state_26686__$1;
(statearr_26696_26714[(2)] = inst_26674);

(statearr_26696_26714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (5))){
var inst_26666 = (state_26686[(7)]);
var inst_26668 = figwheel.client.file_reloading.blocking_load.call(null,inst_26666);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26686__$1,(8),inst_26668);
} else {
if((state_val_26687 === (10))){
var inst_26670 = (state_26686[(9)]);
var inst_26676 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26670);
var state_26686__$1 = state_26686;
var statearr_26697_26715 = state_26686__$1;
(statearr_26697_26715[(2)] = inst_26676);

(statearr_26697_26715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (8))){
var inst_26666 = (state_26686[(7)]);
var inst_26672 = (state_26686[(10)]);
var inst_26670 = (state_26686[(2)]);
var inst_26671 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26672__$1 = cljs.core.get.call(null,inst_26671,inst_26666);
var state_26686__$1 = (function (){var statearr_26698 = state_26686;
(statearr_26698[(9)] = inst_26670);

(statearr_26698[(10)] = inst_26672__$1);

return statearr_26698;
})();
if(cljs.core.truth_(inst_26672__$1)){
var statearr_26699_26716 = state_26686__$1;
(statearr_26699_26716[(1)] = (9));

} else {
var statearr_26700_26717 = state_26686__$1;
(statearr_26700_26717[(1)] = (10));

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
});})(c__23514__auto__))
;
return ((function (switch__23402__auto__,c__23514__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23403__auto__ = null;
var figwheel$client$file_reloading$state_machine__23403__auto____0 = (function (){
var statearr_26704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26704[(0)] = figwheel$client$file_reloading$state_machine__23403__auto__);

(statearr_26704[(1)] = (1));

return statearr_26704;
});
var figwheel$client$file_reloading$state_machine__23403__auto____1 = (function (state_26686){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_26686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e26705){if((e26705 instanceof Object)){
var ex__23406__auto__ = e26705;
var statearr_26706_26718 = state_26686;
(statearr_26706_26718[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26719 = state_26686;
state_26686 = G__26719;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23403__auto__ = function(state_26686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23403__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23403__auto____1.call(this,state_26686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23403__auto____0;
figwheel$client$file_reloading$state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23403__auto____1;
return figwheel$client$file_reloading$state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__))
})();
var state__23516__auto__ = (function (){var statearr_26707 = f__23515__auto__.call(null);
(statearr_26707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_26707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__))
);

return c__23514__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26720,callback){
var map__26723 = p__26720;
var map__26723__$1 = ((((!((map__26723 == null)))?((((map__26723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26723):map__26723);
var file_msg = map__26723__$1;
var namespace = cljs.core.get.call(null,map__26723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26723,map__26723__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26723,map__26723__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26725){
var map__26728 = p__26725;
var map__26728__$1 = ((((!((map__26728 == null)))?((((map__26728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26728):map__26728);
var file_msg = map__26728__$1;
var namespace = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21218__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21218__auto__){
var or__21230__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
var or__21230__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21230__auto____$1)){
return or__21230__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21218__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26730,callback){
var map__26733 = p__26730;
var map__26733__$1 = ((((!((map__26733 == null)))?((((map__26733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26733):map__26733);
var file_msg = map__26733__$1;
var request_url = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23514__auto___26821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___26821,out){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___26821,out){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (1))){
var inst_26781 = cljs.core.nth.call(null,files,(0),null);
var inst_26782 = cljs.core.nthnext.call(null,files,(1));
var inst_26783 = files;
var state_26803__$1 = (function (){var statearr_26805 = state_26803;
(statearr_26805[(7)] = inst_26783);

(statearr_26805[(8)] = inst_26782);

(statearr_26805[(9)] = inst_26781);

return statearr_26805;
})();
var statearr_26806_26822 = state_26803__$1;
(statearr_26806_26822[(2)] = null);

(statearr_26806_26822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (2))){
var inst_26783 = (state_26803[(7)]);
var inst_26786 = (state_26803[(10)]);
var inst_26786__$1 = cljs.core.nth.call(null,inst_26783,(0),null);
var inst_26787 = cljs.core.nthnext.call(null,inst_26783,(1));
var inst_26788 = (inst_26786__$1 == null);
var inst_26789 = cljs.core.not.call(null,inst_26788);
var state_26803__$1 = (function (){var statearr_26807 = state_26803;
(statearr_26807[(11)] = inst_26787);

(statearr_26807[(10)] = inst_26786__$1);

return statearr_26807;
})();
if(inst_26789){
var statearr_26808_26823 = state_26803__$1;
(statearr_26808_26823[(1)] = (4));

} else {
var statearr_26809_26824 = state_26803__$1;
(statearr_26809_26824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (3))){
var inst_26801 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26803__$1,inst_26801);
} else {
if((state_val_26804 === (4))){
var inst_26786 = (state_26803[(10)]);
var inst_26791 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26786);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26803__$1,(7),inst_26791);
} else {
if((state_val_26804 === (5))){
var inst_26797 = cljs.core.async.close_BANG_.call(null,out);
var state_26803__$1 = state_26803;
var statearr_26810_26825 = state_26803__$1;
(statearr_26810_26825[(2)] = inst_26797);

(statearr_26810_26825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (6))){
var inst_26799 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26811_26826 = state_26803__$1;
(statearr_26811_26826[(2)] = inst_26799);

(statearr_26811_26826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (7))){
var inst_26787 = (state_26803[(11)]);
var inst_26793 = (state_26803[(2)]);
var inst_26794 = cljs.core.async.put_BANG_.call(null,out,inst_26793);
var inst_26783 = inst_26787;
var state_26803__$1 = (function (){var statearr_26812 = state_26803;
(statearr_26812[(7)] = inst_26783);

(statearr_26812[(12)] = inst_26794);

return statearr_26812;
})();
var statearr_26813_26827 = state_26803__$1;
(statearr_26813_26827[(2)] = null);

(statearr_26813_26827[(1)] = (2));


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
});})(c__23514__auto___26821,out))
;
return ((function (switch__23402__auto__,c__23514__auto___26821,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto____0 = (function (){
var statearr_26817 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26817[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto__);

(statearr_26817[(1)] = (1));

return statearr_26817;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto____1 = (function (state_26803){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_26803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e26818){if((e26818 instanceof Object)){
var ex__23406__auto__ = e26818;
var statearr_26819_26828 = state_26803;
(statearr_26819_26828[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26829 = state_26803;
state_26803 = G__26829;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___26821,out))
})();
var state__23516__auto__ = (function (){var statearr_26820 = f__23515__auto__.call(null);
(statearr_26820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___26821);

return statearr_26820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___26821,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26830,opts){
var map__26834 = p__26830;
var map__26834__$1 = ((((!((map__26834 == null)))?((((map__26834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);
var eval_body__$1 = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21218__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21218__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21218__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26836){var e = e26836;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26837_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26837_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26842){
var vec__26843 = p__26842;
var k = cljs.core.nth.call(null,vec__26843,(0),null);
var v = cljs.core.nth.call(null,vec__26843,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26844){
var vec__26845 = p__26844;
var k = cljs.core.nth.call(null,vec__26845,(0),null);
var v = cljs.core.nth.call(null,vec__26845,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26849,p__26850){
var map__27097 = p__26849;
var map__27097__$1 = ((((!((map__27097 == null)))?((((map__27097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27097):map__27097);
var opts = map__27097__$1;
var before_jsload = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27098 = p__26850;
var map__27098__$1 = ((((!((map__27098 == null)))?((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27098):map__27098);
var msg = map__27098__$1;
var files = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27251){
var state_val_27252 = (state_27251[(1)]);
if((state_val_27252 === (7))){
var inst_27113 = (state_27251[(7)]);
var inst_27112 = (state_27251[(8)]);
var inst_27114 = (state_27251[(9)]);
var inst_27115 = (state_27251[(10)]);
var inst_27120 = cljs.core._nth.call(null,inst_27113,inst_27115);
var inst_27121 = figwheel.client.file_reloading.eval_body.call(null,inst_27120,opts);
var inst_27122 = (inst_27115 + (1));
var tmp27253 = inst_27113;
var tmp27254 = inst_27112;
var tmp27255 = inst_27114;
var inst_27112__$1 = tmp27254;
var inst_27113__$1 = tmp27253;
var inst_27114__$1 = tmp27255;
var inst_27115__$1 = inst_27122;
var state_27251__$1 = (function (){var statearr_27256 = state_27251;
(statearr_27256[(7)] = inst_27113__$1);

(statearr_27256[(11)] = inst_27121);

(statearr_27256[(8)] = inst_27112__$1);

(statearr_27256[(9)] = inst_27114__$1);

(statearr_27256[(10)] = inst_27115__$1);

return statearr_27256;
})();
var statearr_27257_27343 = state_27251__$1;
(statearr_27257_27343[(2)] = null);

(statearr_27257_27343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (20))){
var inst_27155 = (state_27251[(12)]);
var inst_27163 = figwheel.client.file_reloading.sort_files.call(null,inst_27155);
var state_27251__$1 = state_27251;
var statearr_27258_27344 = state_27251__$1;
(statearr_27258_27344[(2)] = inst_27163);

(statearr_27258_27344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (27))){
var state_27251__$1 = state_27251;
var statearr_27259_27345 = state_27251__$1;
(statearr_27259_27345[(2)] = null);

(statearr_27259_27345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (1))){
var inst_27104 = (state_27251[(13)]);
var inst_27101 = before_jsload.call(null,files);
var inst_27102 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27103 = (function (){return ((function (inst_27104,inst_27101,inst_27102,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26846_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26846_SHARP_);
});
;})(inst_27104,inst_27101,inst_27102,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27104__$1 = cljs.core.filter.call(null,inst_27103,files);
var inst_27105 = cljs.core.not_empty.call(null,inst_27104__$1);
var state_27251__$1 = (function (){var statearr_27260 = state_27251;
(statearr_27260[(14)] = inst_27102);

(statearr_27260[(13)] = inst_27104__$1);

(statearr_27260[(15)] = inst_27101);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27105)){
var statearr_27261_27346 = state_27251__$1;
(statearr_27261_27346[(1)] = (2));

} else {
var statearr_27262_27347 = state_27251__$1;
(statearr_27262_27347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (24))){
var state_27251__$1 = state_27251;
var statearr_27263_27348 = state_27251__$1;
(statearr_27263_27348[(2)] = null);

(statearr_27263_27348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (39))){
var inst_27205 = (state_27251[(16)]);
var state_27251__$1 = state_27251;
var statearr_27264_27349 = state_27251__$1;
(statearr_27264_27349[(2)] = inst_27205);

(statearr_27264_27349[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (46))){
var inst_27246 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27265_27350 = state_27251__$1;
(statearr_27265_27350[(2)] = inst_27246);

(statearr_27265_27350[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (4))){
var inst_27149 = (state_27251[(2)]);
var inst_27150 = cljs.core.List.EMPTY;
var inst_27151 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27150);
var inst_27152 = (function (){return ((function (inst_27149,inst_27150,inst_27151,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26847_SHARP_){
var and__21218__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26847_SHARP_);
if(cljs.core.truth_(and__21218__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26847_SHARP_));
} else {
return and__21218__auto__;
}
});
;})(inst_27149,inst_27150,inst_27151,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27153 = cljs.core.filter.call(null,inst_27152,files);
var inst_27154 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27155 = cljs.core.concat.call(null,inst_27153,inst_27154);
var state_27251__$1 = (function (){var statearr_27266 = state_27251;
(statearr_27266[(17)] = inst_27151);

(statearr_27266[(12)] = inst_27155);

(statearr_27266[(18)] = inst_27149);

return statearr_27266;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27267_27351 = state_27251__$1;
(statearr_27267_27351[(1)] = (16));

} else {
var statearr_27268_27352 = state_27251__$1;
(statearr_27268_27352[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (15))){
var inst_27139 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27269_27353 = state_27251__$1;
(statearr_27269_27353[(2)] = inst_27139);

(statearr_27269_27353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (21))){
var inst_27165 = (state_27251[(19)]);
var inst_27165__$1 = (state_27251[(2)]);
var inst_27166 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27165__$1);
var state_27251__$1 = (function (){var statearr_27270 = state_27251;
(statearr_27270[(19)] = inst_27165__$1);

return statearr_27270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27251__$1,(22),inst_27166);
} else {
if((state_val_27252 === (31))){
var inst_27249 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27251__$1,inst_27249);
} else {
if((state_val_27252 === (32))){
var inst_27205 = (state_27251[(16)]);
var inst_27210 = inst_27205.cljs$lang$protocol_mask$partition0$;
var inst_27211 = (inst_27210 & (64));
var inst_27212 = inst_27205.cljs$core$ISeq$;
var inst_27213 = (inst_27211) || (inst_27212);
var state_27251__$1 = state_27251;
if(cljs.core.truth_(inst_27213)){
var statearr_27271_27354 = state_27251__$1;
(statearr_27271_27354[(1)] = (35));

} else {
var statearr_27272_27355 = state_27251__$1;
(statearr_27272_27355[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (40))){
var inst_27226 = (state_27251[(20)]);
var inst_27225 = (state_27251[(2)]);
var inst_27226__$1 = cljs.core.get.call(null,inst_27225,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27227 = cljs.core.get.call(null,inst_27225,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27228 = cljs.core.not_empty.call(null,inst_27226__$1);
var state_27251__$1 = (function (){var statearr_27273 = state_27251;
(statearr_27273[(20)] = inst_27226__$1);

(statearr_27273[(21)] = inst_27227);

return statearr_27273;
})();
if(cljs.core.truth_(inst_27228)){
var statearr_27274_27356 = state_27251__$1;
(statearr_27274_27356[(1)] = (41));

} else {
var statearr_27275_27357 = state_27251__$1;
(statearr_27275_27357[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (33))){
var state_27251__$1 = state_27251;
var statearr_27276_27358 = state_27251__$1;
(statearr_27276_27358[(2)] = false);

(statearr_27276_27358[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (13))){
var inst_27125 = (state_27251[(22)]);
var inst_27129 = cljs.core.chunk_first.call(null,inst_27125);
var inst_27130 = cljs.core.chunk_rest.call(null,inst_27125);
var inst_27131 = cljs.core.count.call(null,inst_27129);
var inst_27112 = inst_27130;
var inst_27113 = inst_27129;
var inst_27114 = inst_27131;
var inst_27115 = (0);
var state_27251__$1 = (function (){var statearr_27277 = state_27251;
(statearr_27277[(7)] = inst_27113);

(statearr_27277[(8)] = inst_27112);

(statearr_27277[(9)] = inst_27114);

(statearr_27277[(10)] = inst_27115);

return statearr_27277;
})();
var statearr_27278_27359 = state_27251__$1;
(statearr_27278_27359[(2)] = null);

(statearr_27278_27359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (22))){
var inst_27173 = (state_27251[(23)]);
var inst_27168 = (state_27251[(24)]);
var inst_27169 = (state_27251[(25)]);
var inst_27165 = (state_27251[(19)]);
var inst_27168__$1 = (state_27251[(2)]);
var inst_27169__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27168__$1);
var inst_27170 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168__$1;
var res = inst_27169__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27173,inst_27168,inst_27169,inst_27165,inst_27168__$1,inst_27169__$1,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26848_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26848_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27173,inst_27168,inst_27169,inst_27165,inst_27168__$1,inst_27169__$1,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27171 = cljs.core.filter.call(null,inst_27170,inst_27168__$1);
var inst_27172 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27173__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27172);
var inst_27174 = cljs.core.not_empty.call(null,inst_27173__$1);
var state_27251__$1 = (function (){var statearr_27279 = state_27251;
(statearr_27279[(23)] = inst_27173__$1);

(statearr_27279[(24)] = inst_27168__$1);

(statearr_27279[(26)] = inst_27171);

(statearr_27279[(25)] = inst_27169__$1);

return statearr_27279;
})();
if(cljs.core.truth_(inst_27174)){
var statearr_27280_27360 = state_27251__$1;
(statearr_27280_27360[(1)] = (23));

} else {
var statearr_27281_27361 = state_27251__$1;
(statearr_27281_27361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (36))){
var state_27251__$1 = state_27251;
var statearr_27282_27362 = state_27251__$1;
(statearr_27282_27362[(2)] = false);

(statearr_27282_27362[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (41))){
var inst_27226 = (state_27251[(20)]);
var inst_27230 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27231 = cljs.core.map.call(null,inst_27230,inst_27226);
var inst_27232 = cljs.core.pr_str.call(null,inst_27231);
var inst_27233 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27232)].join('');
var inst_27234 = figwheel.client.utils.log.call(null,inst_27233);
var state_27251__$1 = state_27251;
var statearr_27283_27363 = state_27251__$1;
(statearr_27283_27363[(2)] = inst_27234);

(statearr_27283_27363[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (43))){
var inst_27227 = (state_27251[(21)]);
var inst_27237 = (state_27251[(2)]);
var inst_27238 = cljs.core.not_empty.call(null,inst_27227);
var state_27251__$1 = (function (){var statearr_27284 = state_27251;
(statearr_27284[(27)] = inst_27237);

return statearr_27284;
})();
if(cljs.core.truth_(inst_27238)){
var statearr_27285_27364 = state_27251__$1;
(statearr_27285_27364[(1)] = (44));

} else {
var statearr_27286_27365 = state_27251__$1;
(statearr_27286_27365[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (29))){
var inst_27173 = (state_27251[(23)]);
var inst_27168 = (state_27251[(24)]);
var inst_27171 = (state_27251[(26)]);
var inst_27169 = (state_27251[(25)]);
var inst_27165 = (state_27251[(19)]);
var inst_27205 = (state_27251[(16)]);
var inst_27201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27204 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27205,inst_27201,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27203){
var map__27287 = p__27203;
var map__27287__$1 = ((((!((map__27287 == null)))?((((map__27287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27287):map__27287);
var namespace = cljs.core.get.call(null,map__27287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27205,inst_27201,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27205__$1 = cljs.core.group_by.call(null,inst_27204,inst_27171);
var inst_27207 = (inst_27205__$1 == null);
var inst_27208 = cljs.core.not.call(null,inst_27207);
var state_27251__$1 = (function (){var statearr_27289 = state_27251;
(statearr_27289[(28)] = inst_27201);

(statearr_27289[(16)] = inst_27205__$1);

return statearr_27289;
})();
if(inst_27208){
var statearr_27290_27366 = state_27251__$1;
(statearr_27290_27366[(1)] = (32));

} else {
var statearr_27291_27367 = state_27251__$1;
(statearr_27291_27367[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (44))){
var inst_27227 = (state_27251[(21)]);
var inst_27240 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27227);
var inst_27241 = cljs.core.pr_str.call(null,inst_27240);
var inst_27242 = [cljs.core.str("not required: "),cljs.core.str(inst_27241)].join('');
var inst_27243 = figwheel.client.utils.log.call(null,inst_27242);
var state_27251__$1 = state_27251;
var statearr_27292_27368 = state_27251__$1;
(statearr_27292_27368[(2)] = inst_27243);

(statearr_27292_27368[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (6))){
var inst_27146 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27293_27369 = state_27251__$1;
(statearr_27293_27369[(2)] = inst_27146);

(statearr_27293_27369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (28))){
var inst_27171 = (state_27251[(26)]);
var inst_27198 = (state_27251[(2)]);
var inst_27199 = cljs.core.not_empty.call(null,inst_27171);
var state_27251__$1 = (function (){var statearr_27294 = state_27251;
(statearr_27294[(29)] = inst_27198);

return statearr_27294;
})();
if(cljs.core.truth_(inst_27199)){
var statearr_27295_27370 = state_27251__$1;
(statearr_27295_27370[(1)] = (29));

} else {
var statearr_27296_27371 = state_27251__$1;
(statearr_27296_27371[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (25))){
var inst_27169 = (state_27251[(25)]);
var inst_27185 = (state_27251[(2)]);
var inst_27186 = cljs.core.not_empty.call(null,inst_27169);
var state_27251__$1 = (function (){var statearr_27297 = state_27251;
(statearr_27297[(30)] = inst_27185);

return statearr_27297;
})();
if(cljs.core.truth_(inst_27186)){
var statearr_27298_27372 = state_27251__$1;
(statearr_27298_27372[(1)] = (26));

} else {
var statearr_27299_27373 = state_27251__$1;
(statearr_27299_27373[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (34))){
var inst_27220 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
if(cljs.core.truth_(inst_27220)){
var statearr_27300_27374 = state_27251__$1;
(statearr_27300_27374[(1)] = (38));

} else {
var statearr_27301_27375 = state_27251__$1;
(statearr_27301_27375[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (17))){
var state_27251__$1 = state_27251;
var statearr_27302_27376 = state_27251__$1;
(statearr_27302_27376[(2)] = recompile_dependents);

(statearr_27302_27376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (3))){
var state_27251__$1 = state_27251;
var statearr_27303_27377 = state_27251__$1;
(statearr_27303_27377[(2)] = null);

(statearr_27303_27377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (12))){
var inst_27142 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27304_27378 = state_27251__$1;
(statearr_27304_27378[(2)] = inst_27142);

(statearr_27304_27378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (2))){
var inst_27104 = (state_27251[(13)]);
var inst_27111 = cljs.core.seq.call(null,inst_27104);
var inst_27112 = inst_27111;
var inst_27113 = null;
var inst_27114 = (0);
var inst_27115 = (0);
var state_27251__$1 = (function (){var statearr_27305 = state_27251;
(statearr_27305[(7)] = inst_27113);

(statearr_27305[(8)] = inst_27112);

(statearr_27305[(9)] = inst_27114);

(statearr_27305[(10)] = inst_27115);

return statearr_27305;
})();
var statearr_27306_27379 = state_27251__$1;
(statearr_27306_27379[(2)] = null);

(statearr_27306_27379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (23))){
var inst_27173 = (state_27251[(23)]);
var inst_27168 = (state_27251[(24)]);
var inst_27171 = (state_27251[(26)]);
var inst_27169 = (state_27251[(25)]);
var inst_27165 = (state_27251[(19)]);
var inst_27176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27178 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27176,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27177){
var map__27307 = p__27177;
var map__27307__$1 = ((((!((map__27307 == null)))?((((map__27307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27307):map__27307);
var request_url = cljs.core.get.call(null,map__27307__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27176,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27179 = cljs.core.reverse.call(null,inst_27173);
var inst_27180 = cljs.core.map.call(null,inst_27178,inst_27179);
var inst_27181 = cljs.core.pr_str.call(null,inst_27180);
var inst_27182 = figwheel.client.utils.log.call(null,inst_27181);
var state_27251__$1 = (function (){var statearr_27309 = state_27251;
(statearr_27309[(31)] = inst_27176);

return statearr_27309;
})();
var statearr_27310_27380 = state_27251__$1;
(statearr_27310_27380[(2)] = inst_27182);

(statearr_27310_27380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (35))){
var state_27251__$1 = state_27251;
var statearr_27311_27381 = state_27251__$1;
(statearr_27311_27381[(2)] = true);

(statearr_27311_27381[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (19))){
var inst_27155 = (state_27251[(12)]);
var inst_27161 = figwheel.client.file_reloading.expand_files.call(null,inst_27155);
var state_27251__$1 = state_27251;
var statearr_27312_27382 = state_27251__$1;
(statearr_27312_27382[(2)] = inst_27161);

(statearr_27312_27382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (11))){
var state_27251__$1 = state_27251;
var statearr_27313_27383 = state_27251__$1;
(statearr_27313_27383[(2)] = null);

(statearr_27313_27383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (9))){
var inst_27144 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27314_27384 = state_27251__$1;
(statearr_27314_27384[(2)] = inst_27144);

(statearr_27314_27384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (5))){
var inst_27114 = (state_27251[(9)]);
var inst_27115 = (state_27251[(10)]);
var inst_27117 = (inst_27115 < inst_27114);
var inst_27118 = inst_27117;
var state_27251__$1 = state_27251;
if(cljs.core.truth_(inst_27118)){
var statearr_27315_27385 = state_27251__$1;
(statearr_27315_27385[(1)] = (7));

} else {
var statearr_27316_27386 = state_27251__$1;
(statearr_27316_27386[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (14))){
var inst_27125 = (state_27251[(22)]);
var inst_27134 = cljs.core.first.call(null,inst_27125);
var inst_27135 = figwheel.client.file_reloading.eval_body.call(null,inst_27134,opts);
var inst_27136 = cljs.core.next.call(null,inst_27125);
var inst_27112 = inst_27136;
var inst_27113 = null;
var inst_27114 = (0);
var inst_27115 = (0);
var state_27251__$1 = (function (){var statearr_27317 = state_27251;
(statearr_27317[(7)] = inst_27113);

(statearr_27317[(8)] = inst_27112);

(statearr_27317[(9)] = inst_27114);

(statearr_27317[(10)] = inst_27115);

(statearr_27317[(32)] = inst_27135);

return statearr_27317;
})();
var statearr_27318_27387 = state_27251__$1;
(statearr_27318_27387[(2)] = null);

(statearr_27318_27387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (45))){
var state_27251__$1 = state_27251;
var statearr_27319_27388 = state_27251__$1;
(statearr_27319_27388[(2)] = null);

(statearr_27319_27388[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (26))){
var inst_27173 = (state_27251[(23)]);
var inst_27168 = (state_27251[(24)]);
var inst_27171 = (state_27251[(26)]);
var inst_27169 = (state_27251[(25)]);
var inst_27165 = (state_27251[(19)]);
var inst_27188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27190 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27189){
var map__27320 = p__27189;
var map__27320__$1 = ((((!((map__27320 == null)))?((((map__27320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27320):map__27320);
var namespace = cljs.core.get.call(null,map__27320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27191 = cljs.core.map.call(null,inst_27190,inst_27169);
var inst_27192 = cljs.core.pr_str.call(null,inst_27191);
var inst_27193 = figwheel.client.utils.log.call(null,inst_27192);
var inst_27194 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,inst_27190,inst_27191,inst_27192,inst_27193,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,inst_27190,inst_27191,inst_27192,inst_27193,state_val_27252,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27195 = setTimeout(inst_27194,(10));
var state_27251__$1 = (function (){var statearr_27322 = state_27251;
(statearr_27322[(33)] = inst_27193);

(statearr_27322[(34)] = inst_27188);

return statearr_27322;
})();
var statearr_27323_27389 = state_27251__$1;
(statearr_27323_27389[(2)] = inst_27195);

(statearr_27323_27389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (16))){
var state_27251__$1 = state_27251;
var statearr_27324_27390 = state_27251__$1;
(statearr_27324_27390[(2)] = reload_dependents);

(statearr_27324_27390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (38))){
var inst_27205 = (state_27251[(16)]);
var inst_27222 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27205);
var state_27251__$1 = state_27251;
var statearr_27325_27391 = state_27251__$1;
(statearr_27325_27391[(2)] = inst_27222);

(statearr_27325_27391[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (30))){
var state_27251__$1 = state_27251;
var statearr_27326_27392 = state_27251__$1;
(statearr_27326_27392[(2)] = null);

(statearr_27326_27392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (10))){
var inst_27125 = (state_27251[(22)]);
var inst_27127 = cljs.core.chunked_seq_QMARK_.call(null,inst_27125);
var state_27251__$1 = state_27251;
if(inst_27127){
var statearr_27327_27393 = state_27251__$1;
(statearr_27327_27393[(1)] = (13));

} else {
var statearr_27328_27394 = state_27251__$1;
(statearr_27328_27394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (18))){
var inst_27159 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
if(cljs.core.truth_(inst_27159)){
var statearr_27329_27395 = state_27251__$1;
(statearr_27329_27395[(1)] = (19));

} else {
var statearr_27330_27396 = state_27251__$1;
(statearr_27330_27396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (42))){
var state_27251__$1 = state_27251;
var statearr_27331_27397 = state_27251__$1;
(statearr_27331_27397[(2)] = null);

(statearr_27331_27397[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (37))){
var inst_27217 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27332_27398 = state_27251__$1;
(statearr_27332_27398[(2)] = inst_27217);

(statearr_27332_27398[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (8))){
var inst_27125 = (state_27251[(22)]);
var inst_27112 = (state_27251[(8)]);
var inst_27125__$1 = cljs.core.seq.call(null,inst_27112);
var state_27251__$1 = (function (){var statearr_27333 = state_27251;
(statearr_27333[(22)] = inst_27125__$1);

return statearr_27333;
})();
if(inst_27125__$1){
var statearr_27334_27399 = state_27251__$1;
(statearr_27334_27399[(1)] = (10));

} else {
var statearr_27335_27400 = state_27251__$1;
(statearr_27335_27400[(1)] = (11));

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
}
});})(c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23402__auto__,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto____0 = (function (){
var statearr_27339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27339[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto__);

(statearr_27339[(1)] = (1));

return statearr_27339;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto____1 = (function (state_27251){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_27251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e27340){if((e27340 instanceof Object)){
var ex__23406__auto__ = e27340;
var statearr_27341_27401 = state_27251;
(statearr_27341_27401[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27402 = state_27251;
state_27251 = G__27402;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto__ = function(state_27251){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto____1.call(this,state_27251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23516__auto__ = (function (){var statearr_27342 = f__23515__auto__.call(null);
(statearr_27342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_27342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23514__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27405,link){
var map__27408 = p__27405;
var map__27408__$1 = ((((!((map__27408 == null)))?((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408):map__27408);
var file = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27408,map__27408__$1,file){
return (function (p1__27403_SHARP_,p2__27404_SHARP_){
if(cljs.core._EQ_.call(null,p1__27403_SHARP_,p2__27404_SHARP_)){
return p1__27403_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27408,map__27408__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27414){
var map__27415 = p__27414;
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var match_length = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27410_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27410_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27417 = [];
var len__22288__auto___27420 = arguments.length;
var i__22289__auto___27421 = (0);
while(true){
if((i__22289__auto___27421 < len__22288__auto___27420)){
args27417.push((arguments[i__22289__auto___27421]));

var G__27422 = (i__22289__auto___27421 + (1));
i__22289__auto___27421 = G__27422;
continue;
} else {
}
break;
}

var G__27419 = args27417.length;
switch (G__27419) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27417.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27424_SHARP_,p2__27425_SHARP_){
return cljs.core.assoc.call(null,p1__27424_SHARP_,cljs.core.get.call(null,p2__27425_SHARP_,key),p2__27425_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27426){
var map__27429 = p__27426;
var map__27429__$1 = ((((!((map__27429 == null)))?((((map__27429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27429):map__27429);
var f_data = map__27429__$1;
var file = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27431,files_msg){
var map__27438 = p__27431;
var map__27438__$1 = ((((!((map__27438 == null)))?((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var opts = map__27438__$1;
var on_cssload = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27440_27444 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27441_27445 = null;
var count__27442_27446 = (0);
var i__27443_27447 = (0);
while(true){
if((i__27443_27447 < count__27442_27446)){
var f_27448 = cljs.core._nth.call(null,chunk__27441_27445,i__27443_27447);
figwheel.client.file_reloading.reload_css_file.call(null,f_27448);

var G__27449 = seq__27440_27444;
var G__27450 = chunk__27441_27445;
var G__27451 = count__27442_27446;
var G__27452 = (i__27443_27447 + (1));
seq__27440_27444 = G__27449;
chunk__27441_27445 = G__27450;
count__27442_27446 = G__27451;
i__27443_27447 = G__27452;
continue;
} else {
var temp__4425__auto___27453 = cljs.core.seq.call(null,seq__27440_27444);
if(temp__4425__auto___27453){
var seq__27440_27454__$1 = temp__4425__auto___27453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27440_27454__$1)){
var c__22033__auto___27455 = cljs.core.chunk_first.call(null,seq__27440_27454__$1);
var G__27456 = cljs.core.chunk_rest.call(null,seq__27440_27454__$1);
var G__27457 = c__22033__auto___27455;
var G__27458 = cljs.core.count.call(null,c__22033__auto___27455);
var G__27459 = (0);
seq__27440_27444 = G__27456;
chunk__27441_27445 = G__27457;
count__27442_27446 = G__27458;
i__27443_27447 = G__27459;
continue;
} else {
var f_27460 = cljs.core.first.call(null,seq__27440_27454__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27460);

var G__27461 = cljs.core.next.call(null,seq__27440_27454__$1);
var G__27462 = null;
var G__27463 = (0);
var G__27464 = (0);
seq__27440_27444 = G__27461;
chunk__27441_27445 = G__27462;
count__27442_27446 = G__27463;
i__27443_27447 = G__27464;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27438,map__27438__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27438,map__27438__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map