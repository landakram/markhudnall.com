// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27785 = cljs.core._EQ_;
var expr__27786 = (function (){var or__21230__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27785.call(null,"true",expr__27786))){
return true;
} else {
if(cljs.core.truth_(pred__27785.call(null,"false",expr__27786))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27786)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27788__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27789__i = 0, G__27789__a = new Array(arguments.length -  0);
while (G__27789__i < G__27789__a.length) {G__27789__a[G__27789__i] = arguments[G__27789__i + 0]; ++G__27789__i;}
  args = new cljs.core.IndexedSeq(G__27789__a,0);
} 
return G__27788__delegate.call(this,args);};
G__27788.cljs$lang$maxFixedArity = 0;
G__27788.cljs$lang$applyTo = (function (arglist__27790){
var args = cljs.core.seq(arglist__27790);
return G__27788__delegate(args);
});
G__27788.cljs$core$IFn$_invoke$arity$variadic = G__27788__delegate;
return G__27788;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27791){
var map__27794 = p__27791;
var map__27794__$1 = ((((!((map__27794 == null)))?((((map__27794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27794):map__27794);
var message = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21230__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21230__auto__)){
return or__21230__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21218__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21218__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21218__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23514__auto___27956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___27956,ch){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___27956,ch){
return (function (state_27925){
var state_val_27926 = (state_27925[(1)]);
if((state_val_27926 === (7))){
var inst_27921 = (state_27925[(2)]);
var state_27925__$1 = state_27925;
var statearr_27927_27957 = state_27925__$1;
(statearr_27927_27957[(2)] = inst_27921);

(statearr_27927_27957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (1))){
var state_27925__$1 = state_27925;
var statearr_27928_27958 = state_27925__$1;
(statearr_27928_27958[(2)] = null);

(statearr_27928_27958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (4))){
var inst_27878 = (state_27925[(7)]);
var inst_27878__$1 = (state_27925[(2)]);
var state_27925__$1 = (function (){var statearr_27929 = state_27925;
(statearr_27929[(7)] = inst_27878__$1);

return statearr_27929;
})();
if(cljs.core.truth_(inst_27878__$1)){
var statearr_27930_27959 = state_27925__$1;
(statearr_27930_27959[(1)] = (5));

} else {
var statearr_27931_27960 = state_27925__$1;
(statearr_27931_27960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (15))){
var inst_27885 = (state_27925[(8)]);
var inst_27900 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27885);
var inst_27901 = cljs.core.first.call(null,inst_27900);
var inst_27902 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27901);
var inst_27903 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27902)].join('');
var inst_27904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27903);
var state_27925__$1 = state_27925;
var statearr_27932_27961 = state_27925__$1;
(statearr_27932_27961[(2)] = inst_27904);

(statearr_27932_27961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (13))){
var inst_27909 = (state_27925[(2)]);
var state_27925__$1 = state_27925;
var statearr_27933_27962 = state_27925__$1;
(statearr_27933_27962[(2)] = inst_27909);

(statearr_27933_27962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (6))){
var state_27925__$1 = state_27925;
var statearr_27934_27963 = state_27925__$1;
(statearr_27934_27963[(2)] = null);

(statearr_27934_27963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (17))){
var inst_27907 = (state_27925[(2)]);
var state_27925__$1 = state_27925;
var statearr_27935_27964 = state_27925__$1;
(statearr_27935_27964[(2)] = inst_27907);

(statearr_27935_27964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (3))){
var inst_27923 = (state_27925[(2)]);
var state_27925__$1 = state_27925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27925__$1,inst_27923);
} else {
if((state_val_27926 === (12))){
var inst_27884 = (state_27925[(9)]);
var inst_27898 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27884,opts);
var state_27925__$1 = state_27925;
if(cljs.core.truth_(inst_27898)){
var statearr_27936_27965 = state_27925__$1;
(statearr_27936_27965[(1)] = (15));

} else {
var statearr_27937_27966 = state_27925__$1;
(statearr_27937_27966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (2))){
var state_27925__$1 = state_27925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27925__$1,(4),ch);
} else {
if((state_val_27926 === (11))){
var inst_27885 = (state_27925[(8)]);
var inst_27890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27891 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27885);
var inst_27892 = cljs.core.async.timeout.call(null,(1000));
var inst_27893 = [inst_27891,inst_27892];
var inst_27894 = (new cljs.core.PersistentVector(null,2,(5),inst_27890,inst_27893,null));
var state_27925__$1 = state_27925;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27925__$1,(14),inst_27894);
} else {
if((state_val_27926 === (9))){
var inst_27885 = (state_27925[(8)]);
var inst_27911 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27912 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27885);
var inst_27913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27912);
var inst_27914 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27913)].join('');
var inst_27915 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27914);
var state_27925__$1 = (function (){var statearr_27938 = state_27925;
(statearr_27938[(10)] = inst_27911);

return statearr_27938;
})();
var statearr_27939_27967 = state_27925__$1;
(statearr_27939_27967[(2)] = inst_27915);

(statearr_27939_27967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (5))){
var inst_27878 = (state_27925[(7)]);
var inst_27880 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27881 = (new cljs.core.PersistentArrayMap(null,2,inst_27880,null));
var inst_27882 = (new cljs.core.PersistentHashSet(null,inst_27881,null));
var inst_27883 = figwheel.client.focus_msgs.call(null,inst_27882,inst_27878);
var inst_27884 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27883);
var inst_27885 = cljs.core.first.call(null,inst_27883);
var inst_27886 = figwheel.client.autoload_QMARK_.call(null);
var state_27925__$1 = (function (){var statearr_27940 = state_27925;
(statearr_27940[(9)] = inst_27884);

(statearr_27940[(8)] = inst_27885);

return statearr_27940;
})();
if(cljs.core.truth_(inst_27886)){
var statearr_27941_27968 = state_27925__$1;
(statearr_27941_27968[(1)] = (8));

} else {
var statearr_27942_27969 = state_27925__$1;
(statearr_27942_27969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (14))){
var inst_27896 = (state_27925[(2)]);
var state_27925__$1 = state_27925;
var statearr_27943_27970 = state_27925__$1;
(statearr_27943_27970[(2)] = inst_27896);

(statearr_27943_27970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (16))){
var state_27925__$1 = state_27925;
var statearr_27944_27971 = state_27925__$1;
(statearr_27944_27971[(2)] = null);

(statearr_27944_27971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (10))){
var inst_27917 = (state_27925[(2)]);
var state_27925__$1 = (function (){var statearr_27945 = state_27925;
(statearr_27945[(11)] = inst_27917);

return statearr_27945;
})();
var statearr_27946_27972 = state_27925__$1;
(statearr_27946_27972[(2)] = null);

(statearr_27946_27972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27926 === (8))){
var inst_27884 = (state_27925[(9)]);
var inst_27888 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27884,opts);
var state_27925__$1 = state_27925;
if(cljs.core.truth_(inst_27888)){
var statearr_27947_27973 = state_27925__$1;
(statearr_27947_27973[(1)] = (11));

} else {
var statearr_27948_27974 = state_27925__$1;
(statearr_27948_27974[(1)] = (12));

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
});})(c__23514__auto___27956,ch))
;
return ((function (switch__23402__auto__,c__23514__auto___27956,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23403__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23403__auto____0 = (function (){
var statearr_27952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27952[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23403__auto__);

(statearr_27952[(1)] = (1));

return statearr_27952;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23403__auto____1 = (function (state_27925){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_27925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e27953){if((e27953 instanceof Object)){
var ex__23406__auto__ = e27953;
var statearr_27954_27975 = state_27925;
(statearr_27954_27975[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27976 = state_27925;
state_27925 = G__27976;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23403__auto__ = function(state_27925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23403__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23403__auto____1.call(this,state_27925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23403__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23403__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___27956,ch))
})();
var state__23516__auto__ = (function (){var statearr_27955 = f__23515__auto__.call(null);
(statearr_27955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___27956);

return statearr_27955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___27956,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27977_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27977_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27984 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27984){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27983 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27982,_STAR_print_newline_STAR_27983,base_path_27984){
return (function() { 
var G__27985__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27986__i = 0, G__27986__a = new Array(arguments.length -  0);
while (G__27986__i < G__27986__a.length) {G__27986__a[G__27986__i] = arguments[G__27986__i + 0]; ++G__27986__i;}
  args = new cljs.core.IndexedSeq(G__27986__a,0);
} 
return G__27985__delegate.call(this,args);};
G__27985.cljs$lang$maxFixedArity = 0;
G__27985.cljs$lang$applyTo = (function (arglist__27987){
var args = cljs.core.seq(arglist__27987);
return G__27985__delegate(args);
});
G__27985.cljs$core$IFn$_invoke$arity$variadic = G__27985__delegate;
return G__27985;
})()
;})(_STAR_print_fn_STAR_27982,_STAR_print_newline_STAR_27983,base_path_27984))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27983;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27982;
}}catch (e27981){if((e27981 instanceof Error)){
var e = e27981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27984], null));
} else {
var e = e27981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27984))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27988){
var map__27995 = p__27988;
var map__27995__$1 = ((((!((map__27995 == null)))?((((map__27995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var opts = map__27995__$1;
var build_id = cljs.core.get.call(null,map__27995__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27995,map__27995__$1,opts,build_id){
return (function (p__27997){
var vec__27998 = p__27997;
var map__27999 = cljs.core.nth.call(null,vec__27998,(0),null);
var map__27999__$1 = ((((!((map__27999 == null)))?((((map__27999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27999):map__27999);
var msg = map__27999__$1;
var msg_name = cljs.core.get.call(null,map__27999__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27998,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27998,map__27999,map__27999__$1,msg,msg_name,_,map__27995,map__27995__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27998,map__27999,map__27999__$1,msg,msg_name,_,map__27995,map__27995__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27995,map__27995__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28005){
var vec__28006 = p__28005;
var map__28007 = cljs.core.nth.call(null,vec__28006,(0),null);
var map__28007__$1 = ((((!((map__28007 == null)))?((((map__28007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28007):map__28007);
var msg = map__28007__$1;
var msg_name = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28006,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28009){
var map__28019 = p__28009;
var map__28019__$1 = ((((!((map__28019 == null)))?((((map__28019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28019):map__28019);
var on_compile_warning = cljs.core.get.call(null,map__28019__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28019__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28019,map__28019__$1,on_compile_warning,on_compile_fail){
return (function (p__28021){
var vec__28022 = p__28021;
var map__28023 = cljs.core.nth.call(null,vec__28022,(0),null);
var map__28023__$1 = ((((!((map__28023 == null)))?((((map__28023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);
var msg = map__28023__$1;
var msg_name = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28022,(1));
var pred__28025 = cljs.core._EQ_;
var expr__28026 = msg_name;
if(cljs.core.truth_(pred__28025.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28026))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28025.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28026))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28019,map__28019__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__,msg_hist,msg_names,msg){
return (function (state_28242){
var state_val_28243 = (state_28242[(1)]);
if((state_val_28243 === (7))){
var inst_28166 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28166)){
var statearr_28244_28290 = state_28242__$1;
(statearr_28244_28290[(1)] = (8));

} else {
var statearr_28245_28291 = state_28242__$1;
(statearr_28245_28291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (20))){
var inst_28236 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28246_28292 = state_28242__$1;
(statearr_28246_28292[(2)] = inst_28236);

(statearr_28246_28292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (27))){
var inst_28232 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28247_28293 = state_28242__$1;
(statearr_28247_28293[(2)] = inst_28232);

(statearr_28247_28293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (1))){
var inst_28159 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28159)){
var statearr_28248_28294 = state_28242__$1;
(statearr_28248_28294[(1)] = (2));

} else {
var statearr_28249_28295 = state_28242__$1;
(statearr_28249_28295[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (24))){
var inst_28234 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28250_28296 = state_28242__$1;
(statearr_28250_28296[(2)] = inst_28234);

(statearr_28250_28296[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (4))){
var inst_28240 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28242__$1,inst_28240);
} else {
if((state_val_28243 === (15))){
var inst_28238 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28251_28297 = state_28242__$1;
(statearr_28251_28297[(2)] = inst_28238);

(statearr_28251_28297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (21))){
var inst_28197 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28252_28298 = state_28242__$1;
(statearr_28252_28298[(2)] = inst_28197);

(statearr_28252_28298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (31))){
var inst_28221 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28221)){
var statearr_28253_28299 = state_28242__$1;
(statearr_28253_28299[(1)] = (34));

} else {
var statearr_28254_28300 = state_28242__$1;
(statearr_28254_28300[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (32))){
var inst_28230 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28255_28301 = state_28242__$1;
(statearr_28255_28301[(2)] = inst_28230);

(statearr_28255_28301[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (33))){
var inst_28219 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28256_28302 = state_28242__$1;
(statearr_28256_28302[(2)] = inst_28219);

(statearr_28256_28302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (13))){
var inst_28180 = figwheel.client.heads_up.clear.call(null);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(16),inst_28180);
} else {
if((state_val_28243 === (22))){
var inst_28201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28202 = figwheel.client.heads_up.append_message.call(null,inst_28201);
var state_28242__$1 = state_28242;
var statearr_28257_28303 = state_28242__$1;
(statearr_28257_28303[(2)] = inst_28202);

(statearr_28257_28303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (36))){
var inst_28228 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28258_28304 = state_28242__$1;
(statearr_28258_28304[(2)] = inst_28228);

(statearr_28258_28304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (29))){
var inst_28212 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28259_28305 = state_28242__$1;
(statearr_28259_28305[(2)] = inst_28212);

(statearr_28259_28305[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (6))){
var inst_28161 = (state_28242[(7)]);
var state_28242__$1 = state_28242;
var statearr_28260_28306 = state_28242__$1;
(statearr_28260_28306[(2)] = inst_28161);

(statearr_28260_28306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (28))){
var inst_28208 = (state_28242[(2)]);
var inst_28209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28210 = figwheel.client.heads_up.display_warning.call(null,inst_28209);
var state_28242__$1 = (function (){var statearr_28261 = state_28242;
(statearr_28261[(8)] = inst_28208);

return statearr_28261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(29),inst_28210);
} else {
if((state_val_28243 === (25))){
var inst_28206 = figwheel.client.heads_up.clear.call(null);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(28),inst_28206);
} else {
if((state_val_28243 === (34))){
var inst_28223 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(37),inst_28223);
} else {
if((state_val_28243 === (17))){
var inst_28188 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28262_28307 = state_28242__$1;
(statearr_28262_28307[(2)] = inst_28188);

(statearr_28262_28307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (3))){
var inst_28178 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28178)){
var statearr_28263_28308 = state_28242__$1;
(statearr_28263_28308[(1)] = (13));

} else {
var statearr_28264_28309 = state_28242__$1;
(statearr_28264_28309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (12))){
var inst_28174 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28265_28310 = state_28242__$1;
(statearr_28265_28310[(2)] = inst_28174);

(statearr_28265_28310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (2))){
var inst_28161 = (state_28242[(7)]);
var inst_28161__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28242__$1 = (function (){var statearr_28266 = state_28242;
(statearr_28266[(7)] = inst_28161__$1);

return statearr_28266;
})();
if(cljs.core.truth_(inst_28161__$1)){
var statearr_28267_28311 = state_28242__$1;
(statearr_28267_28311[(1)] = (5));

} else {
var statearr_28268_28312 = state_28242__$1;
(statearr_28268_28312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (23))){
var inst_28204 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28204)){
var statearr_28269_28313 = state_28242__$1;
(statearr_28269_28313[(1)] = (25));

} else {
var statearr_28270_28314 = state_28242__$1;
(statearr_28270_28314[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (35))){
var state_28242__$1 = state_28242;
var statearr_28271_28315 = state_28242__$1;
(statearr_28271_28315[(2)] = null);

(statearr_28271_28315[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (19))){
var inst_28199 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28199)){
var statearr_28272_28316 = state_28242__$1;
(statearr_28272_28316[(1)] = (22));

} else {
var statearr_28273_28317 = state_28242__$1;
(statearr_28273_28317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (11))){
var inst_28170 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28274_28318 = state_28242__$1;
(statearr_28274_28318[(2)] = inst_28170);

(statearr_28274_28318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (9))){
var inst_28172 = figwheel.client.heads_up.clear.call(null);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(12),inst_28172);
} else {
if((state_val_28243 === (5))){
var inst_28163 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28242__$1 = state_28242;
var statearr_28275_28319 = state_28242__$1;
(statearr_28275_28319[(2)] = inst_28163);

(statearr_28275_28319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (14))){
var inst_28190 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28190)){
var statearr_28276_28320 = state_28242__$1;
(statearr_28276_28320[(1)] = (18));

} else {
var statearr_28277_28321 = state_28242__$1;
(statearr_28277_28321[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (26))){
var inst_28214 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28214)){
var statearr_28278_28322 = state_28242__$1;
(statearr_28278_28322[(1)] = (30));

} else {
var statearr_28279_28323 = state_28242__$1;
(statearr_28279_28323[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (16))){
var inst_28182 = (state_28242[(2)]);
var inst_28183 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28184 = figwheel.client.format_messages.call(null,inst_28183);
var inst_28185 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28186 = figwheel.client.heads_up.display_error.call(null,inst_28184,inst_28185);
var state_28242__$1 = (function (){var statearr_28280 = state_28242;
(statearr_28280[(9)] = inst_28182);

return statearr_28280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(17),inst_28186);
} else {
if((state_val_28243 === (30))){
var inst_28216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28217 = figwheel.client.heads_up.display_warning.call(null,inst_28216);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(33),inst_28217);
} else {
if((state_val_28243 === (10))){
var inst_28176 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28281_28324 = state_28242__$1;
(statearr_28281_28324[(2)] = inst_28176);

(statearr_28281_28324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (18))){
var inst_28192 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28193 = figwheel.client.format_messages.call(null,inst_28192);
var inst_28194 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28195 = figwheel.client.heads_up.display_error.call(null,inst_28193,inst_28194);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(21),inst_28195);
} else {
if((state_val_28243 === (37))){
var inst_28225 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28282_28325 = state_28242__$1;
(statearr_28282_28325[(2)] = inst_28225);

(statearr_28282_28325[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (8))){
var inst_28168 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(11),inst_28168);
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
});})(c__23514__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23402__auto__,c__23514__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto____0 = (function (){
var statearr_28286 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28286[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto__);

(statearr_28286[(1)] = (1));

return statearr_28286;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto____1 = (function (state_28242){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_28242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e28287){if((e28287 instanceof Object)){
var ex__23406__auto__ = e28287;
var statearr_28288_28326 = state_28242;
(statearr_28288_28326[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28327 = state_28242;
state_28242 = G__28327;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto__ = function(state_28242){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto____1.call(this,state_28242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__,msg_hist,msg_names,msg))
})();
var state__23516__auto__ = (function (){var statearr_28289 = f__23515__auto__.call(null);
(statearr_28289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__,msg_hist,msg_names,msg))
);

return c__23514__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23514__auto___28390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto___28390,ch){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto___28390,ch){
return (function (state_28373){
var state_val_28374 = (state_28373[(1)]);
if((state_val_28374 === (1))){
var state_28373__$1 = state_28373;
var statearr_28375_28391 = state_28373__$1;
(statearr_28375_28391[(2)] = null);

(statearr_28375_28391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (2))){
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28373__$1,(4),ch);
} else {
if((state_val_28374 === (3))){
var inst_28371 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28373__$1,inst_28371);
} else {
if((state_val_28374 === (4))){
var inst_28361 = (state_28373[(7)]);
var inst_28361__$1 = (state_28373[(2)]);
var state_28373__$1 = (function (){var statearr_28376 = state_28373;
(statearr_28376[(7)] = inst_28361__$1);

return statearr_28376;
})();
if(cljs.core.truth_(inst_28361__$1)){
var statearr_28377_28392 = state_28373__$1;
(statearr_28377_28392[(1)] = (5));

} else {
var statearr_28378_28393 = state_28373__$1;
(statearr_28378_28393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (5))){
var inst_28361 = (state_28373[(7)]);
var inst_28363 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28361);
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28373__$1,(8),inst_28363);
} else {
if((state_val_28374 === (6))){
var state_28373__$1 = state_28373;
var statearr_28379_28394 = state_28373__$1;
(statearr_28379_28394[(2)] = null);

(statearr_28379_28394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (7))){
var inst_28369 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
var statearr_28380_28395 = state_28373__$1;
(statearr_28380_28395[(2)] = inst_28369);

(statearr_28380_28395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (8))){
var inst_28365 = (state_28373[(2)]);
var state_28373__$1 = (function (){var statearr_28381 = state_28373;
(statearr_28381[(8)] = inst_28365);

return statearr_28381;
})();
var statearr_28382_28396 = state_28373__$1;
(statearr_28382_28396[(2)] = null);

(statearr_28382_28396[(1)] = (2));


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
});})(c__23514__auto___28390,ch))
;
return ((function (switch__23402__auto__,c__23514__auto___28390,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23403__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23403__auto____0 = (function (){
var statearr_28386 = [null,null,null,null,null,null,null,null,null];
(statearr_28386[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23403__auto__);

(statearr_28386[(1)] = (1));

return statearr_28386;
});
var figwheel$client$heads_up_plugin_$_state_machine__23403__auto____1 = (function (state_28373){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_28373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e28387){if((e28387 instanceof Object)){
var ex__23406__auto__ = e28387;
var statearr_28388_28397 = state_28373;
(statearr_28388_28397[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28398 = state_28373;
state_28373 = G__28398;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23403__auto__ = function(state_28373){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23403__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23403__auto____1.call(this,state_28373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23403__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23403__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto___28390,ch))
})();
var state__23516__auto__ = (function (){var statearr_28389 = f__23515__auto__.call(null);
(statearr_28389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto___28390);

return statearr_28389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto___28390,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23514__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23514__auto__){
return (function (){
var f__23515__auto__ = (function (){var switch__23402__auto__ = ((function (c__23514__auto__){
return (function (state_28419){
var state_val_28420 = (state_28419[(1)]);
if((state_val_28420 === (1))){
var inst_28414 = cljs.core.async.timeout.call(null,(3000));
var state_28419__$1 = state_28419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28419__$1,(2),inst_28414);
} else {
if((state_val_28420 === (2))){
var inst_28416 = (state_28419[(2)]);
var inst_28417 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28419__$1 = (function (){var statearr_28421 = state_28419;
(statearr_28421[(7)] = inst_28416);

return statearr_28421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28419__$1,inst_28417);
} else {
return null;
}
}
});})(c__23514__auto__))
;
return ((function (switch__23402__auto__,c__23514__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23403__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23403__auto____0 = (function (){
var statearr_28425 = [null,null,null,null,null,null,null,null];
(statearr_28425[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23403__auto__);

(statearr_28425[(1)] = (1));

return statearr_28425;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23403__auto____1 = (function (state_28419){
while(true){
var ret_value__23404__auto__ = (function (){try{while(true){
var result__23405__auto__ = switch__23402__auto__.call(null,state_28419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23405__auto__;
}
break;
}
}catch (e28426){if((e28426 instanceof Object)){
var ex__23406__auto__ = e28426;
var statearr_28427_28429 = state_28419;
(statearr_28427_28429[(5)] = ex__23406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28430 = state_28419;
state_28419 = G__28430;
continue;
} else {
return ret_value__23404__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23403__auto__ = function(state_28419){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23403__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23403__auto____1.call(this,state_28419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23403__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23403__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23403__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23403__auto__;
})()
;})(switch__23402__auto__,c__23514__auto__))
})();
var state__23516__auto__ = (function (){var statearr_28428 = f__23515__auto__.call(null);
(statearr_28428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23514__auto__);

return statearr_28428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23516__auto__);
});})(c__23514__auto__))
);

return c__23514__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28431){
var map__28438 = p__28431;
var map__28438__$1 = ((((!((map__28438 == null)))?((((map__28438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28438):map__28438);
var ed = map__28438__$1;
var formatted_exception = cljs.core.get.call(null,map__28438__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28438__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28438__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28440_28444 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28441_28445 = null;
var count__28442_28446 = (0);
var i__28443_28447 = (0);
while(true){
if((i__28443_28447 < count__28442_28446)){
var msg_28448 = cljs.core._nth.call(null,chunk__28441_28445,i__28443_28447);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28448);

var G__28449 = seq__28440_28444;
var G__28450 = chunk__28441_28445;
var G__28451 = count__28442_28446;
var G__28452 = (i__28443_28447 + (1));
seq__28440_28444 = G__28449;
chunk__28441_28445 = G__28450;
count__28442_28446 = G__28451;
i__28443_28447 = G__28452;
continue;
} else {
var temp__4425__auto___28453 = cljs.core.seq.call(null,seq__28440_28444);
if(temp__4425__auto___28453){
var seq__28440_28454__$1 = temp__4425__auto___28453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28440_28454__$1)){
var c__22033__auto___28455 = cljs.core.chunk_first.call(null,seq__28440_28454__$1);
var G__28456 = cljs.core.chunk_rest.call(null,seq__28440_28454__$1);
var G__28457 = c__22033__auto___28455;
var G__28458 = cljs.core.count.call(null,c__22033__auto___28455);
var G__28459 = (0);
seq__28440_28444 = G__28456;
chunk__28441_28445 = G__28457;
count__28442_28446 = G__28458;
i__28443_28447 = G__28459;
continue;
} else {
var msg_28460 = cljs.core.first.call(null,seq__28440_28454__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28460);

var G__28461 = cljs.core.next.call(null,seq__28440_28454__$1);
var G__28462 = null;
var G__28463 = (0);
var G__28464 = (0);
seq__28440_28444 = G__28461;
chunk__28441_28445 = G__28462;
count__28442_28446 = G__28463;
i__28443_28447 = G__28464;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28465){
var map__28468 = p__28465;
var map__28468__$1 = ((((!((map__28468 == null)))?((((map__28468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28468):map__28468);
var w = map__28468__$1;
var message = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21218__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21218__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21218__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28476 = cljs.core.seq.call(null,plugins);
var chunk__28477 = null;
var count__28478 = (0);
var i__28479 = (0);
while(true){
if((i__28479 < count__28478)){
var vec__28480 = cljs.core._nth.call(null,chunk__28477,i__28479);
var k = cljs.core.nth.call(null,vec__28480,(0),null);
var plugin = cljs.core.nth.call(null,vec__28480,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28482 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28476,chunk__28477,count__28478,i__28479,pl_28482,vec__28480,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28482.call(null,msg_hist);
});})(seq__28476,chunk__28477,count__28478,i__28479,pl_28482,vec__28480,k,plugin))
);
} else {
}

var G__28483 = seq__28476;
var G__28484 = chunk__28477;
var G__28485 = count__28478;
var G__28486 = (i__28479 + (1));
seq__28476 = G__28483;
chunk__28477 = G__28484;
count__28478 = G__28485;
i__28479 = G__28486;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28476);
if(temp__4425__auto__){
var seq__28476__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28476__$1)){
var c__22033__auto__ = cljs.core.chunk_first.call(null,seq__28476__$1);
var G__28487 = cljs.core.chunk_rest.call(null,seq__28476__$1);
var G__28488 = c__22033__auto__;
var G__28489 = cljs.core.count.call(null,c__22033__auto__);
var G__28490 = (0);
seq__28476 = G__28487;
chunk__28477 = G__28488;
count__28478 = G__28489;
i__28479 = G__28490;
continue;
} else {
var vec__28481 = cljs.core.first.call(null,seq__28476__$1);
var k = cljs.core.nth.call(null,vec__28481,(0),null);
var plugin = cljs.core.nth.call(null,vec__28481,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28491 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28476,chunk__28477,count__28478,i__28479,pl_28491,vec__28481,k,plugin,seq__28476__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28491.call(null,msg_hist);
});})(seq__28476,chunk__28477,count__28478,i__28479,pl_28491,vec__28481,k,plugin,seq__28476__$1,temp__4425__auto__))
);
} else {
}

var G__28492 = cljs.core.next.call(null,seq__28476__$1);
var G__28493 = null;
var G__28494 = (0);
var G__28495 = (0);
seq__28476 = G__28492;
chunk__28477 = G__28493;
count__28478 = G__28494;
i__28479 = G__28495;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28496 = [];
var len__22288__auto___28499 = arguments.length;
var i__22289__auto___28500 = (0);
while(true){
if((i__22289__auto___28500 < len__22288__auto___28499)){
args28496.push((arguments[i__22289__auto___28500]));

var G__28501 = (i__22289__auto___28500 + (1));
i__22289__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var G__28498 = args28496.length;
switch (G__28498) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28496.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22295__auto__ = [];
var len__22288__auto___28507 = arguments.length;
var i__22289__auto___28508 = (0);
while(true){
if((i__22289__auto___28508 < len__22288__auto___28507)){
args__22295__auto__.push((arguments[i__22289__auto___28508]));

var G__28509 = (i__22289__auto___28508 + (1));
i__22289__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var argseq__22296__auto__ = ((((0) < args__22295__auto__.length))?(new cljs.core.IndexedSeq(args__22295__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22296__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28504){
var map__28505 = p__28504;
var map__28505__$1 = ((((!((map__28505 == null)))?((((map__28505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var opts = map__28505__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28503){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28503));
});

//# sourceMappingURL=client.js.map