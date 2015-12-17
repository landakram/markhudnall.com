// Compiled by ClojureScript 1.7.170 {}
goog.provide('markhudnall.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
console.log("Hello world!");
markhudnall.core.get_canvas = (function markhudnall$core$get_canvas(){
return cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementsByClassName("life-canvas")));
});
markhudnall.core.number_of_rows = (100);
markhudnall.core.get_cell_size = (function markhudnall$core$get_cell_size(){
var canvas = markhudnall.core.get_canvas.call(null);
var canvas_width = canvas.width;
var canvas_height = canvas.height;
var canvas_size = (function (){var x__21567__auto__ = canvas_height;
var y__21568__auto__ = canvas_width;
return ((x__21567__auto__ > y__21568__auto__) ? x__21567__auto__ : y__21568__auto__);
})();
return (canvas_size / markhudnall.core.number_of_rows);
});
markhudnall.core.cell_size = markhudnall.core.get_cell_size.call(null);
markhudnall.core.rand_bool = (function markhudnall$core$rand_bool(var_args){
var args__22301__auto__ = [];
var len__22294__auto___25844 = arguments.length;
var i__22295__auto___25845 = (0);
while(true){
if((i__22295__auto___25845 < len__22294__auto___25844)){
args__22301__auto__.push((arguments[i__22295__auto___25845]));

var G__25846 = (i__22295__auto___25845 + (1));
i__22295__auto___25845 = G__25846;
continue;
} else {
}
break;
}

var argseq__22302__auto__ = ((((0) < args__22301__auto__.length))?(new cljs.core.IndexedSeq(args__22301__auto__.slice((0)),(0))):null);
return markhudnall.core.rand_bool.cljs$core$IFn$_invoke$arity$variadic(argseq__22302__auto__);
});

markhudnall.core.rand_bool.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs.core.rand_int.call(null,(10)) === (0));
});

markhudnall.core.rand_bool.cljs$lang$maxFixedArity = (0);

markhudnall.core.rand_bool.cljs$lang$applyTo = (function (seq25843){
return markhudnall.core.rand_bool.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25843));
});
/**
 * Renders a cell on a canvas
 */
markhudnall.core.render_cell_BANG_ = (function markhudnall$core$render_cell_BANG_(ctx,x,y,value){
var color = (cljs.core.truth_(value)?"rgb(0,200,0)":null);
if(cljs.core.truth_(ctx.fillStyle = color)){
return ctx.fillRect((x * markhudnall.core.cell_size),(y * markhudnall.core.cell_size),markhudnall.core.cell_size,markhudnall.core.cell_size);
} else {
return null;
}
});
/**
 * Given a grid, render it to the page.
 */
markhudnall.core.render_grid_BANG_ = (function markhudnall$core$render_grid_BANG_(canvas,grid,size){
var canvas__$1 = markhudnall.core.get_canvas.call(null);
var ctx = canvas__$1.getContext("2d");
ctx.clearRect((0),(0),canvas__$1.offsetWidth,canvas__$1.offsetHeight);

var seq__25859 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__25864 = null;
var count__25865 = (0);
var i__25866 = (0);
while(true){
if((i__25866 < count__25865)){
var x = cljs.core._nth.call(null,chunk__25864,i__25866);
var seq__25867_25871 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__25868_25872 = null;
var count__25869_25873 = (0);
var i__25870_25874 = (0);
while(true){
if((i__25870_25874 < count__25869_25873)){
var y_25875 = cljs.core._nth.call(null,chunk__25868_25872,i__25870_25874);
markhudnall.core.render_cell_BANG_.call(null,ctx,x,y_25875,grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25875], null)));

var G__25876 = seq__25867_25871;
var G__25877 = chunk__25868_25872;
var G__25878 = count__25869_25873;
var G__25879 = (i__25870_25874 + (1));
seq__25867_25871 = G__25876;
chunk__25868_25872 = G__25877;
count__25869_25873 = G__25878;
i__25870_25874 = G__25879;
continue;
} else {
var temp__4425__auto___25880 = cljs.core.seq.call(null,seq__25867_25871);
if(temp__4425__auto___25880){
var seq__25867_25881__$1 = temp__4425__auto___25880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25867_25881__$1)){
var c__22039__auto___25882 = cljs.core.chunk_first.call(null,seq__25867_25881__$1);
var G__25883 = cljs.core.chunk_rest.call(null,seq__25867_25881__$1);
var G__25884 = c__22039__auto___25882;
var G__25885 = cljs.core.count.call(null,c__22039__auto___25882);
var G__25886 = (0);
seq__25867_25871 = G__25883;
chunk__25868_25872 = G__25884;
count__25869_25873 = G__25885;
i__25870_25874 = G__25886;
continue;
} else {
var y_25887 = cljs.core.first.call(null,seq__25867_25881__$1);
markhudnall.core.render_cell_BANG_.call(null,ctx,x,y_25887,grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25887], null)));

var G__25888 = cljs.core.next.call(null,seq__25867_25881__$1);
var G__25889 = null;
var G__25890 = (0);
var G__25891 = (0);
seq__25867_25871 = G__25888;
chunk__25868_25872 = G__25889;
count__25869_25873 = G__25890;
i__25870_25874 = G__25891;
continue;
}
} else {
}
}
break;
}

var G__25892 = seq__25859;
var G__25893 = chunk__25864;
var G__25894 = count__25865;
var G__25895 = (i__25866 + (1));
seq__25859 = G__25892;
chunk__25864 = G__25893;
count__25865 = G__25894;
i__25866 = G__25895;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25859);
if(temp__4425__auto__){
var seq__25859__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25859__$1)){
var c__22039__auto__ = cljs.core.chunk_first.call(null,seq__25859__$1);
var G__25896 = cljs.core.chunk_rest.call(null,seq__25859__$1);
var G__25897 = c__22039__auto__;
var G__25898 = cljs.core.count.call(null,c__22039__auto__);
var G__25899 = (0);
seq__25859 = G__25896;
chunk__25864 = G__25897;
count__25865 = G__25898;
i__25866 = G__25899;
continue;
} else {
var x = cljs.core.first.call(null,seq__25859__$1);
var seq__25860_25900 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__25861_25901 = null;
var count__25862_25902 = (0);
var i__25863_25903 = (0);
while(true){
if((i__25863_25903 < count__25862_25902)){
var y_25904 = cljs.core._nth.call(null,chunk__25861_25901,i__25863_25903);
markhudnall.core.render_cell_BANG_.call(null,ctx,x,y_25904,grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25904], null)));

var G__25905 = seq__25860_25900;
var G__25906 = chunk__25861_25901;
var G__25907 = count__25862_25902;
var G__25908 = (i__25863_25903 + (1));
seq__25860_25900 = G__25905;
chunk__25861_25901 = G__25906;
count__25862_25902 = G__25907;
i__25863_25903 = G__25908;
continue;
} else {
var temp__4425__auto___25909__$1 = cljs.core.seq.call(null,seq__25860_25900);
if(temp__4425__auto___25909__$1){
var seq__25860_25910__$1 = temp__4425__auto___25909__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25860_25910__$1)){
var c__22039__auto___25911 = cljs.core.chunk_first.call(null,seq__25860_25910__$1);
var G__25912 = cljs.core.chunk_rest.call(null,seq__25860_25910__$1);
var G__25913 = c__22039__auto___25911;
var G__25914 = cljs.core.count.call(null,c__22039__auto___25911);
var G__25915 = (0);
seq__25860_25900 = G__25912;
chunk__25861_25901 = G__25913;
count__25862_25902 = G__25914;
i__25863_25903 = G__25915;
continue;
} else {
var y_25916 = cljs.core.first.call(null,seq__25860_25910__$1);
markhudnall.core.render_cell_BANG_.call(null,ctx,x,y_25916,grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25916], null)));

var G__25917 = cljs.core.next.call(null,seq__25860_25910__$1);
var G__25918 = null;
var G__25919 = (0);
var G__25920 = (0);
seq__25860_25900 = G__25917;
chunk__25861_25901 = G__25918;
count__25862_25902 = G__25919;
i__25863_25903 = G__25920;
continue;
}
} else {
}
}
break;
}

var G__25921 = cljs.core.next.call(null,seq__25859__$1);
var G__25922 = null;
var G__25923 = (0);
var G__25924 = (0);
seq__25859 = G__25921;
chunk__25864 = G__25922;
count__25865 = G__25923;
i__25866 = G__25924;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Returns a sequence of tuples that are neighbors of the given cell
 */
markhudnall.core.neighbors = (function markhudnall$core$neighbors(p__25925){
var vec__25933 = p__25925;
var x = cljs.core.nth.call(null,vec__25933,(0),null);
var y = cljs.core.nth.call(null,vec__25933,(1),null);
var iter__22008__auto__ = ((function (vec__25933,x,y){
return (function markhudnall$core$neighbors_$_iter__25934(s__25935){
return (new cljs.core.LazySeq(null,((function (vec__25933,x,y){
return (function (){
var s__25935__$1 = s__25935;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25935__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var mx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__22004__auto__ = ((function (s__25935__$1,mx,xs__4977__auto__,temp__4425__auto__,vec__25933,x,y){
return (function markhudnall$core$neighbors_$_iter__25934_$_iter__25936(s__25937){
return (new cljs.core.LazySeq(null,((function (s__25935__$1,mx,xs__4977__auto__,temp__4425__auto__,vec__25933,x,y){
return (function (){
var s__25937__$1 = s__25937;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__25937__$1);
if(temp__4425__auto____$1){
var s__25937__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25937__$2)){
var c__22006__auto__ = cljs.core.chunk_first.call(null,s__25937__$2);
var size__22007__auto__ = cljs.core.count.call(null,c__22006__auto__);
var b__25939 = cljs.core.chunk_buffer.call(null,size__22007__auto__);
if((function (){var i__25938 = (0);
while(true){
if((i__25938 < size__22007__auto__)){
var my = cljs.core._nth.call(null,c__22006__auto__,i__25938);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
cljs.core.chunk_append.call(null,b__25939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + mx),(y + my)], null));

var G__25940 = (i__25938 + (1));
i__25938 = G__25940;
continue;
} else {
var G__25941 = (i__25938 + (1));
i__25938 = G__25941;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25939),markhudnall$core$neighbors_$_iter__25934_$_iter__25936.call(null,cljs.core.chunk_rest.call(null,s__25937__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25939),null);
}
} else {
var my = cljs.core.first.call(null,s__25937__$2);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + mx),(y + my)], null),markhudnall$core$neighbors_$_iter__25934_$_iter__25936.call(null,cljs.core.rest.call(null,s__25937__$2)));
} else {
var G__25942 = cljs.core.rest.call(null,s__25937__$2);
s__25937__$1 = G__25942;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__25935__$1,mx,xs__4977__auto__,temp__4425__auto__,vec__25933,x,y))
,null,null));
});})(s__25935__$1,mx,xs__4977__auto__,temp__4425__auto__,vec__25933,x,y))
;
var fs__22005__auto__ = cljs.core.seq.call(null,iterys__22004__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__22005__auto__){
return cljs.core.concat.call(null,fs__22005__auto__,markhudnall$core$neighbors_$_iter__25934.call(null,cljs.core.rest.call(null,s__25935__$1)));
} else {
var G__25943 = cljs.core.rest.call(null,s__25935__$1);
s__25935__$1 = G__25943;
continue;
}
} else {
return null;
}
break;
}
});})(vec__25933,x,y))
,null,null));
});})(vec__25933,x,y))
;
return iter__22008__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
});
markhudnall.core.build_grid = (function markhudnall$core$build_grid(prev){
var all_neighbors = cljs.core.mapcat.call(null,markhudnall.core.neighbors,prev);
var neighbor_count = cljs.core.frequencies.call(null,all_neighbors);
return cljs.core.set.call(null,(function (){var iter__22008__auto__ = ((function (all_neighbors,neighbor_count){
return (function markhudnall$core$build_grid_$_iter__25952(s__25953){
return (new cljs.core.LazySeq(null,((function (all_neighbors,neighbor_count){
return (function (){
var s__25953__$1 = s__25953;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25953__$1);
if(temp__4425__auto__){
var s__25953__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25953__$2)){
var c__22006__auto__ = cljs.core.chunk_first.call(null,s__25953__$2);
var size__22007__auto__ = cljs.core.count.call(null,c__22006__auto__);
var b__25955 = cljs.core.chunk_buffer.call(null,size__22007__auto__);
if((function (){var i__25954 = (0);
while(true){
if((i__25954 < size__22007__auto__)){
var vec__25958 = cljs.core._nth.call(null,c__22006__auto__,i__25954);
var cell = cljs.core.nth.call(null,vec__25958,(0),null);
var count = cljs.core.nth.call(null,vec__25958,(1),null);
if(cljs.core.truth_((function (){var or__21236__auto__ = cljs.core._EQ_.call(null,count,(3));
if(or__21236__auto__){
return or__21236__auto__;
} else {
var and__21224__auto__ = cljs.core._EQ_.call(null,count,(2));
if(and__21224__auto__){
return prev.call(null,cell);
} else {
return and__21224__auto__;
}
}
})())){
cljs.core.chunk_append.call(null,b__25955,cell);

var G__25960 = (i__25954 + (1));
i__25954 = G__25960;
continue;
} else {
var G__25961 = (i__25954 + (1));
i__25954 = G__25961;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25955),markhudnall$core$build_grid_$_iter__25952.call(null,cljs.core.chunk_rest.call(null,s__25953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25955),null);
}
} else {
var vec__25959 = cljs.core.first.call(null,s__25953__$2);
var cell = cljs.core.nth.call(null,vec__25959,(0),null);
var count = cljs.core.nth.call(null,vec__25959,(1),null);
if(cljs.core.truth_((function (){var or__21236__auto__ = cljs.core._EQ_.call(null,count,(3));
if(or__21236__auto__){
return or__21236__auto__;
} else {
var and__21224__auto__ = cljs.core._EQ_.call(null,count,(2));
if(and__21224__auto__){
return prev.call(null,cell);
} else {
return and__21224__auto__;
}
}
})())){
return cljs.core.cons.call(null,cell,markhudnall$core$build_grid_$_iter__25952.call(null,cljs.core.rest.call(null,s__25953__$2)));
} else {
var G__25962 = cljs.core.rest.call(null,s__25953__$2);
s__25953__$1 = G__25962;
continue;
}
}
} else {
return null;
}
break;
}
});})(all_neighbors,neighbor_count))
,null,null));
});})(all_neighbors,neighbor_count))
;
return iter__22008__auto__.call(null,neighbor_count);
})());
});
markhudnall.core.build_initial_grid = (function markhudnall$core$build_initial_grid(size,alive_QMARK_){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__22008__auto__ = (function markhudnall$core$build_initial_grid_$_iter__25969(s__25970){
return (new cljs.core.LazySeq(null,(function (){
var s__25970__$1 = s__25970;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25970__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__22004__auto__ = ((function (s__25970__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function markhudnall$core$build_initial_grid_$_iter__25969_$_iter__25971(s__25972){
return (new cljs.core.LazySeq(null,((function (s__25970__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__25972__$1 = s__25972;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__25972__$1);
if(temp__4425__auto____$1){
var s__25972__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25972__$2)){
var c__22006__auto__ = cljs.core.chunk_first.call(null,s__25972__$2);
var size__22007__auto__ = cljs.core.count.call(null,c__22006__auto__);
var b__25974 = cljs.core.chunk_buffer.call(null,size__22007__auto__);
if((function (){var i__25973 = (0);
while(true){
if((i__25973 < size__22007__auto__)){
var y = cljs.core._nth.call(null,c__22006__auto__,i__25973);
if(cljs.core.truth_(alive_QMARK_.call(null,x,y))){
cljs.core.chunk_append.call(null,b__25974,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__25975 = (i__25973 + (1));
i__25973 = G__25975;
continue;
} else {
var G__25976 = (i__25973 + (1));
i__25973 = G__25976;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25974),markhudnall$core$build_initial_grid_$_iter__25969_$_iter__25971.call(null,cljs.core.chunk_rest.call(null,s__25972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25974),null);
}
} else {
var y = cljs.core.first.call(null,s__25972__$2);
if(cljs.core.truth_(alive_QMARK_.call(null,x,y))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),markhudnall$core$build_initial_grid_$_iter__25969_$_iter__25971.call(null,cljs.core.rest.call(null,s__25972__$2)));
} else {
var G__25977 = cljs.core.rest.call(null,s__25972__$2);
s__25972__$1 = G__25977;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__25970__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__25970__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__22005__auto__ = cljs.core.seq.call(null,iterys__22004__auto__.call(null,cljs.core.range.call(null,size)));
if(fs__22005__auto__){
return cljs.core.concat.call(null,fs__22005__auto__,markhudnall$core$build_initial_grid_$_iter__25969.call(null,cljs.core.rest.call(null,s__25970__$1)));
} else {
var G__25978 = cljs.core.rest.call(null,s__25970__$1);
s__25970__$1 = G__25978;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22008__auto__.call(null,cljs.core.range.call(null,size));
})());
});
/**
 * Recursively renders successive game states.
 */
markhudnall.core.render_game_BANG_ = (function markhudnall$core$render_game_BANG_(canvas,game){
return markhudnall.core.render_grid_BANG_.call(null,canvas,game,markhudnall.core.number_of_rows);
});
markhudnall.core.get_canvas.call(null).setAttribute("width",[cljs.core.str(document.body.offsetWidth)].join(''));
markhudnall.core.get_canvas.call(null).setAttribute("height",[cljs.core.str(document.body.offsetHeight)].join(''));
if(typeof markhudnall.core.render_chan !== 'undefined'){
} else {
markhudnall.core.render_chan = cljs.core.async.chan.call(null);
}
if(typeof markhudnall.core.grid_chan !== 'undefined'){
} else {
markhudnall.core.grid_chan = cljs.core.async.chan.call(null);
}
markhudnall.core.animation_loop_BANG_ = (function markhudnall$core$animation_loop_BANG_(ch,prev,timestamp){
var diff = (timestamp - prev);
if((diff > (200))){
cljs.core.async.put_BANG_.call(null,ch,timestamp);

return window.requestAnimationFrame(cljs.core.partial.call(null,markhudnall$core$animation_loop_BANG_,ch,timestamp));
} else {
return window.requestAnimationFrame(cljs.core.partial.call(null,markhudnall$core$animation_loop_BANG_,ch,prev));
}
});
markhudnall.core.handle_canvas_click = (function markhudnall$core$handle_canvas_click(e){
var canvas = e.target;
return cljs.core.println.call(null,"got ",canvas);
});
markhudnall.core.loop_game_BANG_ = (function markhudnall$core$loop_game_BANG_(){
var canvas = markhudnall.core.get_canvas.call(null);
var animation_ch = cljs.core.async.chan.call(null);
var starting_grid = markhudnall.core.build_initial_grid.call(null,markhudnall.core.number_of_rows,markhudnall.core.rand_bool);
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("canvas"))[(0)]),new cljs.core.Keyword(null,"click","click",1912301393),markhudnall.core.handle_canvas_click);

markhudnall.core.animation_loop_BANG_.call(null,animation_ch,(0),(0));

cljs.core.async.put_BANG_.call(null,markhudnall.core.grid_chan,starting_grid);

var c__24063__auto___26097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24063__auto___26097,canvas,animation_ch,starting_grid){
return (function (){
var f__24064__auto__ = (function (){var switch__24042__auto__ = ((function (c__24063__auto___26097,canvas,animation_ch,starting_grid){
return (function (state_26049){
var state_val_26050 = (state_26049[(1)]);
if((state_val_26050 === (1))){
var state_26049__$1 = state_26049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26049__$1,(2),markhudnall.core.render_chan);
} else {
if((state_val_26050 === (2))){
var inst_26039 = (state_26049[(2)]);
var inst_26040 = inst_26039;
var state_26049__$1 = (function (){var statearr_26051 = state_26049;
(statearr_26051[(7)] = inst_26040);

return statearr_26051;
})();
var statearr_26052_26098 = state_26049__$1;
(statearr_26052_26098[(2)] = null);

(statearr_26052_26098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (3))){
var inst_26040 = (state_26049[(7)]);
var inst_26042 = markhudnall.core.render_game_BANG_.call(null,canvas,inst_26040);
var state_26049__$1 = (function (){var statearr_26053 = state_26049;
(statearr_26053[(8)] = inst_26042);

return statearr_26053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26049__$1,(5),markhudnall.core.render_chan);
} else {
if((state_val_26050 === (4))){
var inst_26047 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26049__$1,inst_26047);
} else {
if((state_val_26050 === (5))){
var inst_26044 = (state_26049[(2)]);
var inst_26040 = inst_26044;
var state_26049__$1 = (function (){var statearr_26054 = state_26049;
(statearr_26054[(7)] = inst_26040);

return statearr_26054;
})();
var statearr_26055_26099 = state_26049__$1;
(statearr_26055_26099[(2)] = null);

(statearr_26055_26099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__24063__auto___26097,canvas,animation_ch,starting_grid))
;
return ((function (switch__24042__auto__,c__24063__auto___26097,canvas,animation_ch,starting_grid){
return (function() {
var markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__ = null;
var markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____0 = (function (){
var statearr_26059 = [null,null,null,null,null,null,null,null,null];
(statearr_26059[(0)] = markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__);

(statearr_26059[(1)] = (1));

return statearr_26059;
});
var markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____1 = (function (state_26049){
while(true){
var ret_value__24044__auto__ = (function (){try{while(true){
var result__24045__auto__ = switch__24042__auto__.call(null,state_26049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24045__auto__;
}
break;
}
}catch (e26060){if((e26060 instanceof Object)){
var ex__24046__auto__ = e26060;
var statearr_26061_26100 = state_26049;
(statearr_26061_26100[(5)] = ex__24046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26101 = state_26049;
state_26049 = G__26101;
continue;
} else {
return ret_value__24044__auto__;
}
break;
}
});
markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__ = function(state_26049){
switch(arguments.length){
case 0:
return markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____0.call(this);
case 1:
return markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____1.call(this,state_26049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__.cljs$core$IFn$_invoke$arity$0 = markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____0;
markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__.cljs$core$IFn$_invoke$arity$1 = markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____1;
return markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__;
})()
;})(switch__24042__auto__,c__24063__auto___26097,canvas,animation_ch,starting_grid))
})();
var state__24065__auto__ = (function (){var statearr_26062 = f__24064__auto__.call(null);
(statearr_26062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24063__auto___26097);

return statearr_26062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24065__auto__);
});})(c__24063__auto___26097,canvas,animation_ch,starting_grid))
);


var c__24063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24063__auto__,canvas,animation_ch,starting_grid){
return (function (){
var f__24064__auto__ = (function (){var switch__24042__auto__ = ((function (c__24063__auto__,canvas,animation_ch,starting_grid){
return (function (state_26081){
var state_val_26082 = (state_26081[(1)]);
if((state_val_26082 === (1))){
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,(2),animation_ch);
} else {
if((state_val_26082 === (2))){
var inst_26064 = (state_26081[(2)]);
var state_26081__$1 = (function (){var statearr_26083 = state_26081;
(statearr_26083[(7)] = inst_26064);

return statearr_26083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,(3),markhudnall.core.grid_chan);
} else {
if((state_val_26082 === (3))){
var inst_26064 = (state_26081[(7)]);
var inst_26066 = (state_26081[(2)]);
var inst_26067 = inst_26064;
var inst_26068 = inst_26066;
var state_26081__$1 = (function (){var statearr_26084 = state_26081;
(statearr_26084[(8)] = inst_26067);

(statearr_26084[(9)] = inst_26068);

return statearr_26084;
})();
var statearr_26085_26102 = state_26081__$1;
(statearr_26085_26102[(2)] = null);

(statearr_26085_26102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (4))){
var inst_26068 = (state_26081[(9)]);
var inst_26070 = cljs.core.async.put_BANG_.call(null,markhudnall.core.render_chan,inst_26068);
var inst_26071 = markhudnall.core.build_grid.call(null,inst_26068);
var inst_26072 = cljs.core.async.put_BANG_.call(null,markhudnall.core.grid_chan,inst_26071);
var state_26081__$1 = (function (){var statearr_26086 = state_26081;
(statearr_26086[(10)] = inst_26070);

(statearr_26086[(11)] = inst_26072);

return statearr_26086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,(6),animation_ch);
} else {
if((state_val_26082 === (5))){
var inst_26079 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26081__$1,inst_26079);
} else {
if((state_val_26082 === (6))){
var inst_26074 = (state_26081[(2)]);
var state_26081__$1 = (function (){var statearr_26087 = state_26081;
(statearr_26087[(12)] = inst_26074);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,(7),markhudnall.core.grid_chan);
} else {
if((state_val_26082 === (7))){
var inst_26074 = (state_26081[(12)]);
var inst_26076 = (state_26081[(2)]);
var inst_26067 = inst_26074;
var inst_26068 = inst_26076;
var state_26081__$1 = (function (){var statearr_26088 = state_26081;
(statearr_26088[(8)] = inst_26067);

(statearr_26088[(9)] = inst_26068);

return statearr_26088;
})();
var statearr_26089_26103 = state_26081__$1;
(statearr_26089_26103[(2)] = null);

(statearr_26089_26103[(1)] = (4));


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
});})(c__24063__auto__,canvas,animation_ch,starting_grid))
;
return ((function (switch__24042__auto__,c__24063__auto__,canvas,animation_ch,starting_grid){
return (function() {
var markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__ = null;
var markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____0 = (function (){
var statearr_26093 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26093[(0)] = markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__);

(statearr_26093[(1)] = (1));

return statearr_26093;
});
var markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____1 = (function (state_26081){
while(true){
var ret_value__24044__auto__ = (function (){try{while(true){
var result__24045__auto__ = switch__24042__auto__.call(null,state_26081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24045__auto__;
}
break;
}
}catch (e26094){if((e26094 instanceof Object)){
var ex__24046__auto__ = e26094;
var statearr_26095_26104 = state_26081;
(statearr_26095_26104[(5)] = ex__24046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26105 = state_26081;
state_26081 = G__26105;
continue;
} else {
return ret_value__24044__auto__;
}
break;
}
});
markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__ = function(state_26081){
switch(arguments.length){
case 0:
return markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____0.call(this);
case 1:
return markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____1.call(this,state_26081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__.cljs$core$IFn$_invoke$arity$0 = markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____0;
markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__.cljs$core$IFn$_invoke$arity$1 = markhudnall$core$loop_game_BANG__$_state_machine__24043__auto____1;
return markhudnall$core$loop_game_BANG__$_state_machine__24043__auto__;
})()
;})(switch__24042__auto__,c__24063__auto__,canvas,animation_ch,starting_grid))
})();
var state__24065__auto__ = (function (){var statearr_26096 = f__24064__auto__.call(null);
(statearr_26096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24063__auto__);

return statearr_26096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24065__auto__);
});})(c__24063__auto__,canvas,animation_ch,starting_grid))
);

return c__24063__auto__;
});
if(typeof markhudnall.core.game !== 'undefined'){
} else {
markhudnall.core.game = markhudnall.core.loop_game_BANG_.call(null);
}

//# sourceMappingURL=core.js.map