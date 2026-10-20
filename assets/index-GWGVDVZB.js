var aM=Object.defineProperty;var sM=(o,e,i)=>e in o?aM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var mn=(o,e,i)=>sM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Bx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var mh={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function rM(){if(g_)return hl;g_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:f}}return hl.Fragment=e,hl.jsx=i,hl.jsxs=i,hl}var v_;function oM(){return v_||(v_=1,mh.exports=rM()),mh.exports}var M=oM(),gh={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function lM(){if(__)return pe;__=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(F){return F===null||typeof F!="object"?null:(F=E&&F[E]||F["@@iterator"],typeof F=="function"?F:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function U(F,st,et){this.props=F,this.context=st,this.refs=S,this.updater=et||C}U.prototype.isReactComponent={},U.prototype.setState=function(F,st){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,st,"setState")},U.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function L(){}L.prototype=U.prototype;function R(F,st,et){this.props=F,this.context=st,this.refs=S,this.updater=et||C}var O=R.prototype=new L;O.constructor=R,y(O,U.prototype),O.isPureReactComponent=!0;var H=Array.isArray;function B(){}var G={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function w(F,st,et){var ot=et.ref;return{$$typeof:o,type:F,key:st,ref:ot!==void 0?ot:null,props:et}}function k(F,st){return w(F.type,st,F.props)}function q(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function _t(F){var st={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(et){return st[et]})}var Et=/\/+/g;function ht(F,st){return typeof F=="object"&&F!==null&&F.key!=null?_t(""+F.key):st.toString(36)}function Z(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(B,B):(F.status="pending",F.then(function(st){F.status==="pending"&&(F.status="fulfilled",F.value=st)},function(st){F.status==="pending"&&(F.status="rejected",F.reason=st)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function ct(F,st,et,ot,Lt){var pt=typeof F;(pt==="undefined"||pt==="boolean")&&(F=null);var gt=!1;if(F===null)gt=!0;else switch(pt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(F.$$typeof){case o:case e:gt=!0;break;case x:return gt=F._init,ct(gt(F._payload),st,et,ot,Lt)}}if(gt)return Lt=Lt(F),gt=ot===""?"."+ht(F,0):ot,H(Lt)?(et="",gt!=null&&(et=gt.replace(Et,"$&/")+"/"),ct(Lt,st,et,"",function(z){return z})):Lt!=null&&(q(Lt)&&(Lt=k(Lt,et+(Lt.key==null||F&&F.key===Lt.key?"":(""+Lt.key).replace(Et,"$&/")+"/")+gt)),st.push(Lt)),1;gt=0;var dt=ot===""?".":ot+":";if(H(F))for(var Dt=0;Dt<F.length;Dt++)ot=F[Dt],pt=dt+ht(ot,Dt),gt+=ct(ot,st,et,pt,Lt);else if(Dt=T(F),typeof Dt=="function")for(F=Dt.call(F),Dt=0;!(ot=F.next()).done;)ot=ot.value,pt=dt+ht(ot,Dt++),gt+=ct(ot,st,et,pt,Lt);else if(pt==="object"){if(typeof F.then=="function")return ct(Z(F),st,et,ot,Lt);throw st=String(F),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return gt}function Q(F,st,et){if(F==null)return F;var ot=[],Lt=0;return ct(F,ot,"","",function(pt){return st.call(et,pt,Lt++)}),ot}function Ct(F){if(F._status===-1){var st=F._result,et=st();et.then(function(ot){(F._status===0||F._status===-1)&&(F._status=1,F._result=ot,et.status===void 0&&(et.status="fulfilled",et.value=ot))},function(ot){(F._status===0||F._status===-1)&&(F._status=2,F._result=ot,et.status===void 0&&(et.status="rejected",et.reason=ot))}),F._status===-1&&(F._status=0,F._result=et)}if(F._status===1)return F._result.default;throw F._result}var wt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Ft(F){var st=G.T,et={};et.types=st!==null?st.types:null,G.T=et;try{var ot=F(),Lt=G.S;Lt!==null&&Lt(et,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(B,wt)}catch(pt){wt(pt)}finally{st!==null&&et.types!==null&&(st.types=et.types),G.T=st}}function ae(F){var st=G.T;if(st!==null){var et=st.types;et===null?st.types=[F]:et.indexOf(F)===-1&&et.push(F)}else Ft(ae.bind(null,F))}var me={map:Q,forEach:function(F,st,et){Q(F,function(){st.apply(this,arguments)},et)},count:function(F){var st=0;return Q(F,function(){st++}),st},toArray:function(F){return Q(F,function(st){return st})||[]},only:function(F){if(!q(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return pe.Activity=g,pe.Children=me,pe.Component=U,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=R,pe.StrictMode=r,pe.Suspense=m,pe.ViewTransition=v,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,pe.__COMPILER_RUNTIME={__proto__:null,c:function(F){return G.H.useMemoCache(F)}},pe.addTransitionType=ae,pe.cache=function(F){return function(){return F.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(F,st,et){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var ot=y({},F.props),Lt=F.key;if(st!=null)for(pt in st.key!==void 0&&(Lt=""+st.key),st)!N.call(st,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&st.ref===void 0||(ot[pt]=st[pt]);var pt=arguments.length-2;if(pt===1)ot.children=et;else if(1<pt){for(var gt=Array(pt),dt=0;dt<pt;dt++)gt[dt]=arguments[dt+2];ot.children=gt}return w(F.type,Lt,ot)},pe.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},pe.createElement=function(F,st,et){var ot,Lt={},pt=null;if(st!=null)for(ot in st.key!==void 0&&(pt=""+st.key),st)N.call(st,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(Lt[ot]=st[ot]);var gt=arguments.length-2;if(gt===1)Lt.children=et;else if(1<gt){for(var dt=Array(gt),Dt=0;Dt<gt;Dt++)dt[Dt]=arguments[Dt+2];Lt.children=dt}if(F&&F.defaultProps)for(ot in gt=F.defaultProps,gt)Lt[ot]===void 0&&(Lt[ot]=gt[ot]);return w(F,pt,Lt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(F){return{$$typeof:h,render:F}},pe.isValidElement=q,pe.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:Ct}},pe.memo=function(F,st){return{$$typeof:p,type:F,compare:st===void 0?null:st}},pe.startTransition=Ft,pe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},pe.use=function(F){return G.H.use(F)},pe.useActionState=function(F,st,et){return G.H.useActionState(F,st,et)},pe.useCallback=function(F,st){return G.H.useCallback(F,st)},pe.useContext=function(F){return G.H.useContext(F)},pe.useDebugValue=function(){},pe.useDeferredValue=function(F,st){return G.H.useDeferredValue(F,st)},pe.useEffect=function(F,st){return G.H.useEffect(F,st)},pe.useEffectEvent=function(F){return G.H.useEffectEvent(F)},pe.useId=function(){return G.H.useId()},pe.useImperativeHandle=function(F,st,et){return G.H.useImperativeHandle(F,st,et)},pe.useInsertionEffect=function(F,st){return G.H.useInsertionEffect(F,st)},pe.useLayoutEffect=function(F,st){return G.H.useLayoutEffect(F,st)},pe.useMemo=function(F,st){return G.H.useMemo(F,st)},pe.useOptimistic=function(F,st){return G.H.useOptimistic(F,st)},pe.useReducer=function(F,st,et){return G.H.useReducer(F,st,et)},pe.useRef=function(F){return G.H.useRef(F)},pe.useState=function(F){return G.H.useState(F)},pe.useSyncExternalStore=function(F,st,et){return G.H.useSyncExternalStore(F,st,et)},pe.useTransition=function(){return G.H.useTransition()},pe.version="19.3.1",pe}var x_;function Zp(){return x_||(x_=1,gh.exports=lM()),gh.exports}var Yt=Zp();const cM=Bx(Yt);var vh={exports:{}},pl={},_h={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function uM(){return y_||(y_=1,(function(o){function e(Z,ct){var Q=Z.length;Z.push(ct);t:for(;0<Q;){var Ct=Q-1>>>1,wt=Z[Ct];if(0<l(wt,ct))Z[Ct]=ct,Z[Q]=wt,Q=Ct;else break t}}function i(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var ct=Z[0],Q=Z.pop();if(Q!==ct){Z[0]=Q;t:for(var Ct=0,wt=Z.length,Ft=wt>>>1;Ct<Ft;){var ae=2*(Ct+1)-1,me=Z[ae],F=ae+1,st=Z[F];if(0>l(me,Q))F<wt&&0>l(st,me)?(Z[Ct]=st,Z[F]=Q,Ct=F):(Z[Ct]=me,Z[ae]=Q,Ct=ae);else if(F<wt&&0>l(st,Q))Z[Ct]=st,Z[F]=Q,Ct=F;else break t}}return ct}function l(Z,ct){var Q=Z.sortIndex-ct.sortIndex;return Q!==0?Q:Z.id-ct.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,v=3,E=!1,T=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(Z){for(var ct=i(p);ct!==null;){if(ct.callback===null)r(p);else if(ct.startTime<=Z)r(p),ct.sortIndex=ct.expirationTime,e(m,ct);else break;ct=i(p)}}function O(Z){if(C=!1,R(Z),!T)if(i(m)!==null)T=!0,H||(H=!0,q());else{var ct=i(p);ct!==null&&ht(O,ct.startTime-Z)}}var H=!1,B=-1,G=5,N=-1;function w(){return y?!0:!(o.unstable_now()-N<G)}function k(){if(y=!1,H){var Z=o.unstable_now();N=Z;var ct=!0;try{t:{T=!1,C&&(C=!1,U(B),B=-1),E=!0;var Q=v;try{e:{for(R(Z),g=i(m);g!==null&&!(g.expirationTime>Z&&w());){var Ct=g.callback;if(typeof Ct=="function"){g.callback=null,v=g.priorityLevel;var wt=Ct(g.expirationTime<=Z);if(Z=o.unstable_now(),typeof wt=="function"){g.callback=wt,R(Z),ct=!0;break e}g===i(m)&&r(m),R(Z)}else r(m);g=i(m)}if(g!==null)ct=!0;else{var Ft=i(p);Ft!==null&&ht(O,Ft.startTime-Z),ct=!1}}break t}finally{g=null,v=Q,E=!1}ct=void 0}}finally{ct?q():H=!1}}}var q;if(typeof L=="function")q=function(){L(k)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,Et=_t.port2;_t.port1.onmessage=k,q=function(){Et.postMessage(null)}}else q=function(){S(k,0)};function ht(Z,ct){B=S(function(){Z(o.unstable_now())},ct)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(Z){switch(v){case 1:case 2:case 3:var ct=3;break;default:ct=v}var Q=v;v=ct;try{return Z()}finally{v=Q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(Z,ct){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var Q=v;v=Z;try{return ct()}finally{v=Q}},o.unstable_scheduleCallback=function(Z,ct,Q){var Ct=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Ct+Q:Ct):Q=Ct,Z){case 1:var wt=-1;break;case 2:wt=250;break;case 5:wt=1073741823;break;case 4:wt=1e4;break;default:wt=5e3}return wt=Q+wt,Z={id:x++,callback:ct,priorityLevel:Z,startTime:Q,expirationTime:wt,sortIndex:-1},Q>Ct?(Z.sortIndex=Q,e(p,Z),i(m)===null&&Z===i(p)&&(C?(U(B),B=-1):C=!0,ht(O,Q-Ct))):(Z.sortIndex=wt,e(m,Z),T||E||(T=!0,H||(H=!0,q()))),Z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(Z){var ct=v;return function(){var Q=v;v=ct;try{return Z.apply(this,arguments)}finally{v=Q}}}})(xh)),xh}var S_;function fM(){return S_||(S_=1,_h.exports=uM()),_h.exports}var yh={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function dM(){if(M_)return Hn;M_=1;var o=Zp();function e(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:x,containerInfo:g,implementation:v}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.browser=function(x){return{$$typeof:f,_reason:x}},Hn.createPortal=function(x,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(x,g,null,v)},Hn.flushSync=function(x){var g=m.T,v=r.p;try{if(m.T=null,r.p=2,x)return x()}finally{m.T=g,r.p=v,r.d.f()}},Hn.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(x,g))},Hn.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},Hn.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var v=g.as,E=p(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:C}):v==="script"&&r.d.X(x,{crossOrigin:E,integrity:T,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Hn.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);r.d.M(x,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(x)},Hn.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=p(v,g.crossOrigin);r.d.L(x,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Hn.preloadModule=function(x,g){if(typeof x=="string")if(g){var v=p(g.as,g.crossOrigin);r.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(x)},Hn.requestFormReset=function(x){r.d.r(x)},Hn.unstable_batchedUpdates=function(x,g){return x(g)},Hn.useFormState=function(x,g,v){return m.H.useFormState(x,g,v)},Hn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Hn.version="19.3.1",Hn}var E_;function Fx(){if(E_)return yh.exports;E_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yh.exports=dM(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function hM(){if(T_)return pl;T_=1;var o=fM(),e=Zp(),i=Fx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return m(c),t;if(u===s)return m(c),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=u;else{for(var _=!1,b=c.child;b;){if(b===a){_=!0,a=c,s=u;break}if(b===s){_=!0,s=c,a=u;break}b=b.sibling}if(!_){for(b=u.child;b;){if(b===a){_=!0,a=u,s=c;break}if(b===s){_=!0,s=u,a=c;break}b=b.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,c,u))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=v(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,U=null;function L(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function R(t,n,a){return t===a?(U=t,!1):t===n?(U!==null&&(S=t),!0):!1}function O(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function H(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var u=n;u;u=a(u))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var B=Object.assign,G=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),_t=Symbol.for("react.profiler"),Et=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ct=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Ft=Symbol.for("react.activity"),ae=Symbol.for("react.legacy_hidden"),me=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),st=Symbol.for("react.recoverable"),et=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=et&&t[et]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case _t:return"Profiler";case q:return"StrictMode";case ct:return"Suspense";case Q:return"SuspenseList";case Ft:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ht:return t.displayName||"Context";case Et:return(t._context.displayName||"Context")+".Consumer";case Z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ct:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case wt:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var gt=Array.isArray,dt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},se=[],Vt=-1;function Xt(t){return{current:t}}function Ot(t){0>Vt||(t.current=se[Vt],se[Vt]=null,Vt--)}function Wt(t,n){Vt++,se[Vt]=t.current,t.current=n}var jt=Xt(null),fe=Xt(null),Ee=Xt(null),Ne=Xt(null);function P(t,n){switch(Wt(Ee,n),Wt(fe,t),Wt(jt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?bv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=bv(n),t=Av(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ot(jt),Wt(jt,t)}function A(){Ot(jt),Ot(fe),Ot(Ee)}function rt(t){var n=t.memoizedState;n!==null&&(Vr._currentValue=n.memoizedState,Wt(Ne,t)),n=jt.current;var a=Av(n,t.type);n!==a&&(Wt(fe,t),Wt(jt,a))}function St(t){fe.current===t&&(Ot(jt),Ot(fe)),Ne.current===t&&(Ot(Ne),Vr._currentValue=z)}var Ut,Mt;function Jt(t){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",Mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+t+Mt}var Ht=!1;function $t(t,n){if(!t||Ht)return"";Ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(qt){var K=qt}Reflect.construct(t,[],Rt)}else{try{Rt.call()}catch(qt){K=qt}Rt=!1;try{var lt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Rt=!0,new t}finally{Rt&&(lt!==void 0?Object.defineProperty(t.prototype,"props",lt):delete t.prototype.props)}}}else{try{throw Error()}catch(qt){K=qt}(Rt=t())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(qt){if(qt&&K&&typeof qt.stack=="string")return[qt.stack,K.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),_=u[0],b=u[1];if(_&&b){var V=_.split(`
`),$=b.split(`
`);for(c=s=0;s<V.length&&!V[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===V.length||c===$.length)for(s=V.length-1,c=$.length-1;1<=s&&0<=c&&V[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(V[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||V[s]!==$[c]){var ft=`
`+V[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{Ht=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Jt(a):""}function ee(t,n){switch(t.tag){case 26:case 27:case 5:return Jt(t.type);case 16:return Jt("Lazy");case 13:return t.child!==n&&n!==null?Jt("Suspense Fallback"):Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return Jt("Activity");case 30:return Jt("ViewTransition");default:return""}}function Pt(t){try{var n="",a=null;do n+=ee(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var kt=Object.prototype.hasOwnProperty,X=o.unstable_scheduleCallback,Y=o.unstable_cancelCallback,mt=o.unstable_shouldYield,Tt=o.unstable_requestPaint,I=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Nt=o.unstable_ImmediatePriority,j=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,vt=o.unstable_LowPriority,It=o.unstable_IdlePriority,zt=o.log,ce=o.unstable_setDisableYieldValue,de=null,Ce=null;function Xe(t){if(typeof zt=="function"&&ce(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(de,t)}catch{}}var Qe=Math.clz32?Math.clz32:ma,Xn=Math.log,oi=Math.LN2;function ma(t){return t>>>=0,t===0?32:31-(Xn(t)/oi|0)|0}var ln=256,Pi=262144,Ii=4194304;function rn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ei(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,u=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~u,s!==0?c=rn(s):(_&=b,_!==0?c=rn(_):a||(a=b&~t,a!==0&&(c=rn(a))))):(b=s&~u,b!==0?c=rn(b):_!==0?c=rn(_):a||(a=s&~t,a!==0&&(c=rn(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function li(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ba(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Qe(a),c=1<<s;n|=t[s],a&=~c}return n}function To(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(){var t=Ii;return Ii<<=1,(Ii&62914560)===0&&(Ii=4194304),t}function an(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function On(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bi(t,n,a,s,c,u){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,V=t.expirationTimes,$=t.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-Qe(a),Rt=1<<ft;b[ft]=0,V[ft]=-1;var K=$[ft];if(K!==null)for($[ft]=null,ft=0;ft<K.length;ft++){var lt=K[ft];lt!==null&&(lt.lane&=-536870913)}a&=~Rt}s!==0&&D(t,s,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(_&~n))}function D(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Qe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function tt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Qe(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function xt(t,n){var a=n&-n;return a=(a&42)!==0?1:yt(a),(a&(t.suspendedLanes|n))!==0?0:a}function yt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bt(){var t=Dt.p;return t!==0?t:(t=window.event,t===void 0?32:c_(t.type))}function Zt(t,n){var a=Dt.p;try{return Dt.p=t,n()}finally{Dt.p=a}}var Qt=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Qt,ne="__reactProps$"+Qt,ue="__reactContainer$"+Qt,oe="__reactEvents$"+Qt,Me="__reactListeners$"+Qt,ke="__reactHandles$"+Qt,sn="__reactResources$"+Qt,Fe="__reactMarker$"+Qt,ze="__reactLoad$"+Qt;function le(t){delete t[Gt],delete t[ne],delete t[Me],delete t[ke]}function He(t){var n;if(n=t[Gt])return n;for(var a=t.parentNode;a;){if(n=a[ue]||a[Gt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=kv(t);t!==null;){if(a=t[Gt])return a;t=kv(t)}return n}t=a,a=t.parentNode}return null}function ye(t){if(t=t[Gt]||t[ue]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function En(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ci(t){var n=t[sn];return n||(n=t[sn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(t){t[Fe]=!0}function Fa(t){t[ze]=void 0}var $e=new Set,qn={};function vn(t,n){un(t,n),un(t+"Capture",n)}function un(t,n){for(qn[t]=n,t=0;t<n.length;t++)$e.add(n[t])}var Gn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sr={},Ki={};function Ey(t){return kt.call(Ki,t)?!0:kt.call(sr,t)?!1:Gn.test(t)?Ki[t]=!0:(sr[t]=!0,!1)}var Ie=!1;function fm(){var t=Ie;return Ie=!1,t}function Ol(t,n,a){if(Ey(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function zl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ga(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ui(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ty(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,u.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ju(t){if(!t._valueTracker){var n=dm(t)?"checked":"value";t._valueTracker=Ty(t,n,""+t[n])}}function hm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=dm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var by=/[\n"\\]/g;function Ti(t){return t.replace(by,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xu(t,n,a,s,c,u,_,b){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ui(n)):t.value!==""+ui(n)&&(t.value=""+ui(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?qu(t,ui(t.value)):qu(t,ui(n)):a!=null?qu(t,ui(a)):s!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ui(b):t.removeAttribute("name")}function pm(t,n,a,s,c,u,_,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){ju(t);return}a=a!=null?""+ui(a):"",n=n!=null?""+ui(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),ju(t)}function qu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function rr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ui(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function mm(t,n,a){if(n!=null&&(n=""+ui(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ui(a):""}function gm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(gt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ui(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ju(t)}function or(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ay=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ay.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _m(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ie=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(vm(t,c,s),Ie=!0)}else for(var u in n)n.hasOwnProperty(u)&&vm(t,u,n[u])}function Wu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ry=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return Cy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Yu=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,cr=null;function xm(t){var n=ye(t);if(n&&(t=n.stateNode)){var a=t[ne]||null;t:switch(t=n.stateNode,n.type){case"input":if(Xu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ti(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[ne]||null;if(!c)throw Error(r(90));Xu(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&hm(s)}break t;case"textarea":mm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rr(t,!!a.multiple,n,!1)}}}var Ku=!1;function ym(t,n,a){if(Ku)return t(n,a);Ku=!0;try{var s=t(n);return s}finally{if(Ku=!1,(lr!==null||cr!==null)&&(Pc(),lr&&(n=lr,t=cr,cr=lr=null,xm(n),t)))for(n=0;n<t.length;n++)xm(t[n])}}function bo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[ne]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(va)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Qu=!1}var Ha=null,Ju=null,Il=null;function Sm(){if(Il)return Il;var t,n=Ju,a=n.length,s,c="value"in Ha?Ha.value:Ha.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[u-s];s++);return Il=c.slice(t,1<s?1-s:void 0)}function Bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function Mm(){return!1}function Wn(t){function n(a,s,c,u,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=_,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fl:Mm,this.isPropagationStopped=Mm,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Wn(Ga),Ro=B({},Ga,{view:0,detail:0}),wy=Wn(Ro),$u,tf,Co,Gl=B({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?($u=t.screenX-Co.screenX,tf=t.screenY-Co.screenY):tf=$u=0,Co=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),Em=Wn(Gl),Dy=B({},Gl,{dataTransfer:0}),Ny=Wn(Dy),Uy=B({},Ro,{relatedTarget:0}),ef=Wn(Uy),Ly=B({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=Wn(Ly),zy=B({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Py=Wn(zy),Iy=B({},Ga,{data:0}),Tm=Wn(Iy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hy[t])?!!n[t]:!1}function nf(){return Gy}var Vy=B({},Ro,{key:function(t){if(t.key){var n=By[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ky=Wn(Vy),jy=B({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Wn(jy),Xy=B({},Ga,{submitter:0}),qy=Wn(Xy),Wy=B({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),Yy=Wn(Wy),Zy=B({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=Wn(Zy),Qy=B({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=Wn(Qy),$y=B({},Ga,{newState:0,oldState:0,source:0}),tS=Wn($y),eS=[9,13,27,32],af=va&&"CompositionEvent"in window,wo=null;va&&"documentMode"in document&&(wo=document.documentMode);var nS=va&&"TextEvent"in window&&!wo,Am=va&&(!af||wo&&8<wo&&11>=wo),Rm=" ",Cm=!1;function wm(t,n){switch(t){case"keyup":return eS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function iS(t,n){switch(t){case"compositionend":return Dm(n);case"keypress":return n.which!==32?null:(Cm=!0,Rm);case"textInput":return t=n.data,t===Rm&&Cm?null:t;default:return null}}function aS(t,n){if(ur)return t==="compositionend"||!af&&wm(t,n)?(t=Sm(),Il=Ju=Ha=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Am&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sS[t.type]:n==="textarea"}function Um(t,n,a,s){lr?cr?cr.push(s):cr=[s]:lr=s,n=Vc(n,"onChange"),0<n.length&&(a=new Hl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Do=null,No=null;function rS(t){xv(t,0)}function Vl(t){var n=En(t);if(hm(n))return t}function Lm(t,n){if(t==="change")return n}var Om=!1;if(va){var sf;if(va){var rf="oninput"in document;if(!rf){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),rf=typeof zm.oninput=="function"}sf=rf}else sf=!1;Om=sf&&(!document.documentMode||9<document.documentMode)}function Pm(){Do&&(Do.detachEvent("onpropertychange",Im),No=Do=null)}function Im(t){if(t.propertyName==="value"&&Vl(No)){var n=[];Um(n,No,t,Zu(t)),ym(rS,n)}}function oS(t,n,a){t==="focusin"?(Pm(),Do=n,No=a,Do.attachEvent("onpropertychange",Im)):t==="focusout"&&Pm()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(No)}function cS(t,n){if(t==="click")return Vl(n)}function uS(t,n){if(t==="input"||t==="change")return Vl(n)}function fS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:fS;function Uo(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!kt.call(n,c)||!fi(t[c],n[c]))return!1}return!0}function of(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,n){var a=Bm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bm(a)}}function Hm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=of(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=of(t.document)}return n}function lf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var dS=va&&"documentMode"in document&&11>=document.documentMode,fr=null,cf=null,Lo=null,uf=!1;function Vm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uf||fr==null||fr!==of(s)||(s=fr,"selectionStart"in s&&lf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Lo&&Uo(Lo,s)||(Lo=s,s=Vc(cf,"onSelect"),0<s.length&&(n=new Hl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=fr)))}function Ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var dr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},ff={},km={};va&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Es(t){if(ff[t])return ff[t];if(!dr[t])return t;var n=dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in km)return ff[t]=n[a];return t}var jm=Es("animationend"),Xm=Es("animationiteration"),qm=Es("animationstart"),hS=Es("transitionrun"),pS=Es("transitionstart"),mS=Es("transitioncancel"),Wm=Es("transitionend"),Ym=new Map,df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");df.push("scrollEnd");function Fi(t,n){Ym.set(t,n),vn(n,[t])}var gS=0;function _a(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=ki.identifierPrefix;var a=gS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Zm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ur;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function xa(t,n){return t=Zm(t),n=Zm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],hr=0,hf=0;function jl(){for(var t=hr,n=hf=hr=0;n<t;){var a=bi[n];bi[n++]=null;var s=bi[n];bi[n++]=null;var c=bi[n];bi[n++]=null;var u=bi[n];if(bi[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}u!==0&&Km(a,c,u)}}function Xl(t,n,a,s){bi[hr++]=t,bi[hr++]=n,bi[hr++]=a,bi[hr++]=s,hf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function pf(t,n,a,s){return Xl(t,n,a,s),ql(t)}function Ts(t,n){return Xl(t,null,null,n),ql(t)}function Km(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-Qe(a),t=u.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),u):null}function ql(t){if(50<el)throw el=0,zc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var pr={};function vS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,s){return new vS(t,n,a,s)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ya(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,a,s,c,u){var _=0;if(s=t,typeof s=="function")mf(s)&&(_=1);else if(typeof s=="string")_=X1(t,a,jt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ft:return t=ei(31,a,n,c),t.elementType=Ft,t.lanes=u,t;case k:return bs(a.children,c,u,n);case q:_=8,c|=24;break;case _t:return t=ei(12,a,n,c|2),t.elementType=_t,t.lanes=u,t;case ct:return t=ei(13,a,n,c),t.elementType=ct,t.lanes=u,t;case Q:return t=ei(19,a,n,c),t.elementType=Q,t.lanes=u,t;case ae:case F:return t=c|32,t=ei(30,a,n,t),t.elementType=F,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ht:_=10;break t;case Et:_=9;break t;case Z:_=11;break t;case Ct:_=14;break t;case wt:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ei(_,a,n,c),n.elementType=t,n.type=s,n.lanes=u,n}function bs(t,n,a,s){return t=ei(7,t,s,n),t.lanes=a,t}function gf(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function Jm(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function vf(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $m=new WeakMap;function Ai(t,n){if(typeof t=="object"&&t!==null){var a=$m.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pt(n)},$m.set(t,n),n)}return{value:t,source:n,stack:Pt(n)}}var mr=[],gr=0,Yl=null,Oo=0,Ri=[],Ci=0,Va=null,Ji=1,$i="";function Sa(t,n){mr[gr++]=Oo,mr[gr++]=Yl,Yl=t,Oo=n}function t0(t,n,a){Ri[Ci++]=Ji,Ri[Ci++]=$i,Ri[Ci++]=Va,Va=t;var s=Ji;t=$i;var c=32-Qe(s)-1;s&=~(1<<c),a+=1;var u=32-Qe(n)+c;if(30<u){var _=c-c%5;u=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ji=1<<32-Qe(n)+c|a<<c|s,$i=u+t}else Ji=1<<u|a<<c|s,$i=t}function Zl(t){t.return!==null&&(Sa(t,1),t0(t,1,0))}function _f(t){for(;t===Yl;)Yl=mr[--gr],mr[gr]=null,Oo=mr[--gr],mr[gr]=null;for(;t===Va;)Va=Ri[--Ci],Ri[Ci]=null,$i=Ri[--Ci],Ri[Ci]=null,Ji=Ri[--Ci],Ri[Ci]=null}function e0(t,n){Ri[Ci++]=Ji,Ri[Ci++]=$i,Ri[Ci++]=Va,Ji=n.id,$i=n.overflow,Va=t}var Rn=null,tn=null,Se=!1,ka=null,wi=!1,xf=Error(r(519));function ja(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Ai(n,t)),xf}function n0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Gt]=t,n[ne]=s,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)be(il[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),pm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),gm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ev(n.textContent,a)?(s.popover!=null&&(be("beforetoggle",n),be("toggle",n)),s.onScroll!=null&&be("scroll",n),s.onScrollEnd!=null&&be("scrollend",n),s.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||ja(t,!0)}function Kl(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Rn=Rn.return}}function vr(t){if(t!==Rn)return!1;if(!Se)return Kl(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zd(t.type,t.memoizedProps)),a=!a),a&&tn&&ja(t),Kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=Vv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=Vv(t)}else n===27?(n=tn,rs(t.type)?(t=ah,ah=null,tn=t):tn=n):tn=Rn?Ni(t.stateNode.nextSibling):null;return!0}function As(){tn=Rn=null,Se=!1}function yf(){var t=ka;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),ka=null),t}function zo(t){ka===null?ka=[t]:ka.push(t)}var Sf=Xt(null),Rs=null,Ma=null;function Xa(t,n,a){Wt(Sf,n._currentValue),n._currentValue=a}function Ea(t){t._currentValue=Sf.current,Ot(Sf)}function Ql(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Mf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var _=c.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=c;for(var V=0;V<n.length;V++)if(b.context===n[V]){u.lanes|=a,b=u.alternate,b!==null&&(b.lanes|=a),Ql(u.return,a,t),s||(_=null);break t}u=b.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,u=_.alternate,u!==null&&(u.lanes|=a),Ql(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),Ql(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Cs(t,n,a,s){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var b=c.type;fi(c.pendingProps.value,_.value)||(t!==null?t.push(b):t=[b])}}else if(c===Ne.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Vr):t=[Vr])}c=c.return}return t!==null&&Mf(n,t,a,s),n.flags|=262144,t!==null}function Jl(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){Rs=t,Ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return i0(Rs,t)}function $l(t,n){return Rs===null&&ws(t),i0(t,n)}function i0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ma===null){if(t===null)throw Error(r(308));Ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ma=Ma.next=n;return a}var _S=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xS=o.unstable_scheduleCallback,yS=o.unstable_NormalPriority,_n={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new _S,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&xS(yS,function(){t.controller.abort()})}function a0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Io=null;function SS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Bo=null,Tf=0,Ds=0,_r=null;function MS(t,n){if(Bo===null){var a=Bo=[];Tf=0,Ds=Hd(),_r={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Tf++,n.then(s0,s0),n}function s0(){if(--Tf===0&&(Io=null,Bo!==null)){_r!==null&&(_r.status="fulfilled");var t=Bo;Bo=null,Ds=0,_r=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ES(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var r0=dt.S;dt.S=function(t,n){if(Jg=I(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&MS(t,n),Io!==null)for(var a=Pr;a!==null;)a0(a,Io),a=a.next;if(a=t.types,a!==null){for(var s=Pr;s!==null;)a0(s,a),s=s.next;if(Ds!==0){s=Io,s===null&&(s=Io=[]);for(var c=0;c<a.length;c++){var u=a[c];s.indexOf(u)===-1&&s.push(u)}}}r0!==null&&r0(t,n)};var Ns=Xt(null);function bf(){var t=Ns.current;return t!==null?t:Je.pooledCache}function tc(t,n){n===null?Wt(Ns,Ns.current):Wt(Ns,n.pool)}function o0(){var t=bf();return t===null?null:{parent:_n._currentValue,pool:t}}var xr=Error(r(460)),Af=Error(r(474)),ec=Error(r(542)),nc={then:function(){}};function l0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function c0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,f0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,f0(t),t}throw Ls=n,xr}}function Us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ls=a,xr):a}}var Ls=null;function u0(){if(Ls===null)throw Error(r(459));var t=Ls;return Ls=null,t}function f0(t){if(t===xr||t===ec)throw Error(r(483))}var yr=null,Fo=0;function ic(t){var n=Fo;return Fo+=1,yr===null&&(yr=[]),c0(yr,t,n)}function qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ac(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function d0(t){function n(J,W){if(t){var at=J.deletions;at===null?(J.deletions=[W],J.flags|=16):at.push(W)}}function a(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function s(J){for(var W=new Map;J!==null;)J.key===null?W.set(J.index,J):W.set(J.key,J),J=J.sibling;return W}function c(J,W){return J=ya(J,W),J.index=0,J.sibling=null,J}function u(J,W,at){return J.index=at,t?(at=J.alternate,at!==null?(at=at.index,at<W?(J.flags|=2,W):at):(J.flags|=134217730,W)):(J.flags|=1048576,W)}function _(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function b(J,W,at,bt){return W===null||W.tag!==6?(W=gf(at,J.mode,bt),W.return=J,W):(W=c(W,at),W.return=J,W)}function V(J,W,at,bt){var te=at.type;return te===k?(J=ft(J,W,at.props.children,bt,at.key),qa(J,at),J):W!==null&&(W.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===wt&&Us(te)===W.type)?(W=c(W,at.props),qa(W,at),W.return=J,W):(W=Wl(at.type,at.key,at.props,null,J.mode,bt),qa(W,at),W.return=J,W)}function $(J,W,at,bt){return W===null||W.tag!==4||W.stateNode.containerInfo!==at.containerInfo||W.stateNode.implementation!==at.implementation?(W=vf(at,J.mode,bt),W.return=J,W):(W=c(W,at.children||[]),W.return=J,W)}function ft(J,W,at,bt,te){return W===null||W.tag!==7?(W=bs(at,J.mode,bt,te),W.return=J,W):(W=c(W,at),W.return=J,W)}function Rt(J,W,at){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=gf(""+W,J.mode,at),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return at=Wl(W.type,W.key,W.props,null,J.mode,at),qa(at,W),at.return=J,at;case w:return W=vf(W,J.mode,at),W.return=J,W;case wt:return W=Us(W),Rt(J,W,at)}if(gt(W)||ot(W))return W=bs(W,J.mode,at,null),W.return=J,W;if(typeof W.then=="function")return Rt(J,ic(W),at);if(W.$$typeof===ht)return Rt(J,$l(J,W),at);ac(J,W)}return null}function K(J,W,at,bt){var te=W!==null?W.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return te!==null?null:b(J,W,""+at,bt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case N:return at.key===te?V(J,W,at,bt):null;case w:return at.key===te?$(J,W,at,bt):null;case wt:return at=Us(at),K(J,W,at,bt)}if(gt(at)||ot(at))return te!==null?null:ft(J,W,at,bt,null);if(typeof at.then=="function")return K(J,W,ic(at),bt);if(at.$$typeof===ht)return K(J,W,$l(J,at),bt);ac(J,at)}return null}function lt(J,W,at,bt,te){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return J=J.get(at)||null,b(W,J,""+bt,te);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case N:return J=J.get(bt.key===null?at:bt.key)||null,V(W,J,bt,te);case w:return J=J.get(bt.key===null?at:bt.key)||null,$(W,J,bt,te);case wt:return bt=Us(bt),lt(J,W,at,bt,te)}if(gt(bt)||ot(bt))return J=J.get(at)||null,ft(W,J,bt,te,null);if(typeof bt.then=="function")return lt(J,W,at,ic(bt),te);if(bt.$$typeof===ht)return lt(J,W,at,$l(W,bt),te);ac(W,bt)}return null}function qt(J,W,at,bt){for(var te=null,De=null,re=W,he=W=0,Sn=null;re!==null&&he<at.length;he++){re.index>he?(Sn=re,re=null):Sn=re.sibling;var Oe=K(J,re,at[he],bt);if(Oe===null){re===null&&(re=Sn);break}t&&re&&Oe.alternate===null&&n(J,re),W=u(Oe,W,he),De===null?te=Oe:De.sibling=Oe,De=Oe,re=Sn}if(he===at.length)return a(J,re),Se&&Sa(J,he),te;if(re===null){for(;he<at.length;he++)re=Rt(J,at[he],bt),re!==null&&(W=u(re,W,he),De===null?te=re:De.sibling=re,De=re);return Se&&Sa(J,he),te}for(re=s(re);he<at.length;he++)Sn=lt(re,J,he,at[he],bt),Sn!==null&&(t&&(Oe=Sn.alternate,Oe!==null&&re.delete(Oe.key===null?he:Oe.key)),W=u(Sn,W,he),De===null?te=Sn:De.sibling=Sn,De=Sn);return t&&re.forEach(function(fs){return n(J,fs)}),Se&&Sa(J,he),te}function ie(J,W,at,bt){if(at==null)throw Error(r(151));for(var te=null,De=null,re=W,he=W=0,Sn=null,Oe=at.next();re!==null&&!Oe.done;he++,Oe=at.next()){re.index>he?(Sn=re,re=null):Sn=re.sibling;var fs=K(J,re,Oe.value,bt);if(fs===null){re===null&&(re=Sn);break}t&&re&&fs.alternate===null&&n(J,re),W=u(fs,W,he),De===null?te=fs:De.sibling=fs,De=fs,re=Sn}if(Oe.done)return a(J,re),Se&&Sa(J,he),te;if(re===null){for(;!Oe.done;he++,Oe=at.next())Oe=Rt(J,Oe.value,bt),Oe!==null&&(W=u(Oe,W,he),De===null?te=Oe:De.sibling=Oe,De=Oe);return Se&&Sa(J,he),te}for(re=s(re);!Oe.done;he++,Oe=at.next())Oe=lt(re,J,he,Oe.value,bt),Oe!==null&&(t&&(Sn=Oe.alternate,Sn!==null&&re.delete(Sn.key===null?he:Sn.key)),W=u(Oe,W,he),De===null?te=Oe:De.sibling=Oe,De=Oe);return t&&re.forEach(function(iM){return n(J,iM)}),Se&&Sa(J,he),te}function ve(J,W,at,bt){if(typeof at=="object"&&at!==null&&at.type===k&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case N:t:{for(var te=at.key;W!==null;){if(W.key===te){if(te=at.type,te===k){if(W.tag===7){a(J,W.sibling),bt=c(W,at.props.children),qa(bt,at),bt.return=J,J=bt;break t}}else if(W.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===wt&&Us(te)===W.type){a(J,W.sibling),bt=c(W,at.props),qa(bt,at),bt.return=J,J=bt;break t}a(J,W);break}else n(J,W);W=W.sibling}at.type===k?(bt=bs(at.props.children,J.mode,bt,at.key),qa(bt,at),bt.return=J,J=bt):(bt=Wl(at.type,at.key,at.props,null,J.mode,bt),qa(bt,at),bt.return=J,J=bt)}return _(J);case w:t:{for(te=at.key;W!==null;){if(W.key===te)if(W.tag===4&&W.stateNode.containerInfo===at.containerInfo&&W.stateNode.implementation===at.implementation){a(J,W.sibling),bt=c(W,at.children||[]),bt.return=J,J=bt;break t}else{a(J,W);break}else n(J,W);W=W.sibling}bt=vf(at,J.mode,bt),bt.return=J,J=bt}return _(J);case wt:return at=Us(at),ve(J,W,at,bt)}if(gt(at))return qt(J,W,at,bt);if(ot(at)){if(te=ot(at),typeof te!="function")throw Error(r(150));return at=te.call(at),ie(J,W,at,bt)}if(typeof at.then=="function")return ve(J,W,ic(at),bt);if(at.$$typeof===ht)return ve(J,W,$l(J,at),bt);ac(J,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,W!==null&&W.tag===6?(a(J,W.sibling),bt=c(W,at),bt.return=J,J=bt):(a(J,W),bt=gf(at,J.mode,bt),bt.return=J,J=bt),_(J)):a(J,W)}return function(J,W,at,bt){try{Fo=0;var te=ve(J,W,at,bt);return yr=null,te}catch(re){if(re===xr||re===ec)throw re;var De=ei(29,re,null,J.mode);return De.lanes=bt,De.return=J,De}finally{}}}var Os=d0(!0),h0=d0(!1),Wa=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ge&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ql(t),Km(t,null,a),n}return Xl(t,s,n,a),ql(t)}function Ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,tt(t,a)}}function wf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=_:u=u.next=_,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Df=!1;function Go(){if(Df){var t=_r;if(t!==null)throw t}}function Vo(t,n,a,s){Df=!1;var c=t.updateQueue;Wa=!1;var u=c.firstBaseUpdate,_=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var V=b,$=V.next;V.next=null,_===null?u=$:_.next=$,_=V;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==_&&(b===null?ft.firstBaseUpdate=$:b.next=$,ft.lastBaseUpdate=V))}if(u!==null){var Rt=c.baseState;_=0,ft=$=V=null,b=u;do{var K=b.lane&-536870913,lt=K!==b.lane;if(lt?(we&K)===K:(s&K)===K){K!==0&&K===Ds&&(Df=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var qt=t,ie=b;K=n;var ve=a;switch(ie.tag){case 1:if(qt=ie.payload,typeof qt=="function"){Rt=qt.call(ve,Rt,K);break t}Rt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ie.payload,K=typeof qt=="function"?qt.call(ve,Rt,K):qt,K==null)break t;Rt=B({},Rt,K);break t;case 2:Wa=!0}}K=b.callback,K!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[K]:lt.push(K))}else lt={lane:K,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?($=ft=lt,V=Rt):ft=ft.next=lt,_|=K;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ft===null&&(V=Rt),c.baseState=V,c.firstBaseUpdate=$,c.lastBaseUpdate=ft,u===null&&(c.shared.lanes=0),ns|=_,t.lanes=_,t.memoizedState=Rt}}function p0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function m0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)p0(a[t],n)}var Ka=Xt(null),sc=Xt(0);function g0(t,n){t=Ca,Wt(sc,t),Wt(Ka,n),Ca=t|n.baseLanes}function Nf(){Wt(sc,Ca),Wt(Ka,Ka.current)}function Uf(){Ca=sc.current,Ot(Ka),Ot(sc)}var Pn=Xt(null),Vn=null;function Qa(t){var n=t.alternate;Wt(In,In.current&1),Wt(Pn,t),Vn===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(Vn=t)}function Lf(t){Wt(In,In.current),Wt(Pn,t),Vn===null&&(Vn=t)}function v0(t){t.tag===22?(Wt(In,In.current),Wt(Pn,t),Vn===null&&(Vn=t)):Ja()}function Ja(){Wt(In,In.current),Wt(Pn,Pn.current)}function di(t){Ot(Pn),Vn===t&&(Vn=null),Ot(In)}var In=Xt(0);function ko(t,n){Wt(Pn,Pn.current),Wt(In,n)}function Of(t){Ot(In),Ot(Pn),Vn===t&&(Vn=null)}function rc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nh(a)||ih(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,ge=null,Ze=null,xn=null,oc=!1,Sr=!1,zs=!1,lc=0,jo=0,Mr=null,TS=0;function fn(){throw Error(r(321))}function zf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function Pf(t,n,a,s,c,u){return Ta=u,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,dt.H=t===null||t.memoizedState===null?tg:eg,zs=!1,u=a(s,c),zs=!1,Sr&&(u=x0(n,a,s,c)),_0(t),u}function _0(t){dt.H=mc;var n=Ze!==null&&Ze.next!==null;if(Ta=0,xn=Ze=ge=null,oc=!1,jo=0,Mr=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&Jl(t)&&(yn=!0))}function x0(t,n,a,s){ge=t;var c=0;do{if(Sr&&(Mr=null),jo=0,Sr=!1,25<=c)throw Error(r(301));if(c+=1,xn=Ze=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}dt.H=US,u=n(a,s)}while(Sr);return u}function bS(){var t=dt.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(ge.flags|=1024),n}function If(){var t=lc!==0;return lc=0,t}function Bf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ff(t){if(oc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}oc=!1}Ta=0,xn=Ze=ge=null,Sr=!1,jo=lc=0,Mr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?ge.memoizedState=xn=t:xn=xn.next=t,xn}function pn(){if(Ze===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=xn===null?ge.memoizedState:xn.next;if(n!==null)xn=n,Ze=t;else{if(t===null)throw ge.alternate===null?Error(r(467)):Error(r(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},xn===null?ge.memoizedState=xn=t:xn=xn.next=t}return xn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=jo;return jo+=1,Mr===null&&(Mr=[]),t=c0(Mr,t,n),n=ge,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,dt.H=n===null||n.memoizedState===null?tg:eg),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===st)return;if(t.$$typeof===ht)return zn(t)}throw Error(r(438,String(t)))}function Hf(t){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ge.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cc(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=me;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function fc(t){var n=pn();return Gf(n,Ze,t)}function Gf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,u=s.pending;if(u!==null){if(c!==null){var _=c.next;c.next=u.next,u.next=_}n.baseQueue=c=u,s.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var b=_=null,V=null,$=n,ft=!1;do{var Rt=$.lane&-536870913;if(Rt!==$.lane?(we&Rt)===Rt:(Ta&Rt)===Rt){var K=$.revertLane;if(K===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Rt===Ds&&(ft=!0);else if((Ta&K)===K){$=$.next,K===Ds&&(ft=!0);continue}else Rt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},V===null?(b=V=Rt,_=u):V=V.next=Rt,ge.lanes|=K,ns|=K;Rt=$.action,zs&&a(u,Rt),u=$.hasEagerState?$.eagerState:a(u,Rt)}else K={lane:Rt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},V===null?(b=V=K,_=u):V=V.next=K,ge.lanes|=Rt,ns|=Rt;$=$.next}while($!==null&&$!==n);if(V===null?_=u:V.next=b,!fi(u,t.memoizedState)&&(yn=!0,ft&&(a=_r,a!==null)))throw a;t.memoizedState=u,t.baseState=_,t.baseQueue=V,s.lastRenderedState=u}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Vf(t){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do u=t(u,_.action),_=_.next;while(_!==c);fi(u,n.memoizedState)||(yn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function y0(t,n,a){var s=ge,c=pn(),u=Se;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!fi((Ze||c).memoizedState,a);if(_&&(c.memoizedState=a,yn=!0),c=c.queue,Xf(E0.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||_||xn!==null&&(xn.memoizedState.tag&1)!==0,Er(t?9:8,{destroy:void 0},M0.bind(null,s,c,a,n),null),t){if(s.flags|=2048,Je===null)throw Error(r(349));u||(Ta&127)!==0||S0(s,n,a)}return a}function S0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=cc(),ge.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function M0(t,n,a,s){n.value=a,n.getSnapshot=s,T0(n)&&b0(t)}function E0(t,n,a){return a(function(){T0(n)&&b0(t)})}function T0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function b0(t){var n=Ts(t,2);n!==null&&si(n,t,2)}function kf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),zs){Xe(!0);try{a()}finally{Xe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function A0(t,n,a,s){return t.baseState=a,Gf(t,Ze,typeof s=="function"?s:ba)}function AS(t,n,a,s,c){if(pc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){u.listeners.push(_)}};dt.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,R0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function R0(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var u=dt.T,_={};_.types=u!==null?u.types:null,dt.T=_;try{var b=a(c,s),V=dt.S;V!==null&&V(_,b),C0(t,n,b)}catch($){jf(t,n,$)}finally{u!==null&&_.types!==null&&(u.types=_.types),dt.T=u}}else try{u=a(c,s),C0(t,n,u)}catch($){jf(t,n,$)}}function C0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){w0(t,n,s)},function(s){return jf(t,n,s)}):w0(t,n,a)}function w0(t,n,a){n.status="fulfilled",n.value=a,D0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,R0(t,a)))}function jf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,D0(n),n=n.next;while(n!==s)}t.action=null}function D0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function N0(t,n){return n}function U0(t,n){if(Se){var a=Je.formState;if(a!==null){t:{var s=ge;if(Se){if(tn){e:{for(var c=tn,u=wi;c.nodeType!==8;){if(!u){c=null;break e}if(c=Ni(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){tn=Ni(c.nextSibling),s=c.data==="F!";break t}}ja(s)}s=!1}s&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:n},a.queue=s,a=Q0.bind(null,ge,s),s.dispatch=a,s=kf(!1),u=Kf.bind(null,ge,!1,s.queue),s=Yn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=AS.bind(null,ge,c,u,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function L0(t){var n=pn();return O0(n,Ze,t)}function O0(t,n,a){if(n=Gf(t,n,N0)[0],t=fc(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xo(n)}catch(_){throw _===xr?ec:_}else s=n;n=pn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Er(9,{destroy:void 0},RS.bind(null,c,a),null)),[s,u,t]}function RS(t,n){t.action=n}function z0(t){var n=pn(),a=Ze;if(a!==null)return O0(n,a,t);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Er(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ge.updateQueue,n===null&&(n=cc(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function P0(){return pn().memoizedState}function dc(t,n,a,s){var c=Yn();ge.flags|=t,c.memoizedState=Er(1|n,{destroy:void 0},a,s===void 0?null:s)}function hc(t,n,a,s){var c=pn();s=s===void 0?null:s;var u=c.memoizedState.inst;Ze!==null&&s!==null&&zf(s,Ze.memoizedState.deps)?c.memoizedState=Er(n,u,a,s):(ge.flags|=t,c.memoizedState=Er(1|n,u,a,s))}function I0(t,n){dc(8390656,8,t,n)}function Xf(t,n){hc(2048,8,t,n)}function CS(t){ge.flags|=4;var n=ge.updateQueue;if(n===null)n=cc(),ge.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function B0(t){var n=pn().memoizedState;return CS({ref:n,nextImpl:t}),function(){if((Ge&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function F0(t,n){return hc(4,2,t,n)}function H0(t,n){return hc(4,4,t,n)}function G0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function V0(t,n,a){a=a!=null?a.concat([t]):null,hc(4,4,G0.bind(null,n,t),a)}function qf(){}function k0(t,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&zf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function j0(t,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&zf(n,s[1]))return s[0];if(s=t(),zs){Xe(!0);try{t()}finally{Xe(!1)}}return a.memoizedState=[s,n],s}function Wf(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(we&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=tv(),ge.lanes|=t,ns|=t,a)}function X0(t,n,a,s){return fi(a,n)?a:Ka.current!==null?(t=Wf(t,a,s),fi(t,n)||(yn=!0),t):(Ta&106)===0||(Ta&1073741824)!==0&&(we&261930)===0?(yn=!0,t.memoizedState=a):(t=tv(),ge.lanes|=t,ns|=t,n)}function q0(t,n,a,s,c){var u=Dt.p;Dt.p=u!==0&&8>u?u:8;var _=dt.T,b={};b.types=_!==null?_.types:null,dt.T=b,Kf(t,!1,n,a);try{var V=c(),$=dt.S;if($!==null&&$(b,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ft=ES(V,s);qo(t,n,ft,gi(t))}else qo(t,n,s,gi(t))}catch(Rt){qo(t,n,{then:function(){},status:"rejected",reason:Rt},gi())}finally{Dt.p=u,_!==null&&b.types!==null&&(_.types=b.types),dt.T=_}}function wS(){}function Yf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=W0(t).queue;q0(t,c,n,z,a===null?wS:function(){return Y0(t),a(s)})}function W0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Y0(t){var n=W0(t);n.next===null&&(n=t.alternate.memoizedState),qo(t,n.next.queue,{},gi())}function Zf(){return zn(Vr)}function Z0(){return pn().memoizedState}function K0(){return pn().memoizedState}function DS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();t=Ya(a);var s=Za(n,t,a);s!==null&&(si(s,n,a),Ho(s,n,a)),n={cache:Ef()},t.payload=n;return}n=n.return}}function NS(t,n,a){var s=gi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pc(t)?J0(n,a):(a=pf(t,n,a,s),a!==null&&(si(a,t,s),$0(a,n,s)))}function Q0(t,n,a){var s=gi();qo(t,n,a,s)}function qo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pc(t))J0(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var _=n.lastRenderedState,b=u(_,a);if(c.hasEagerState=!0,c.eagerState=b,fi(b,_))return Xl(t,n,c,0),Je===null&&jl(),!1}catch{}finally{}if(a=pf(t,n,c,s),a!==null)return si(a,t,s),$0(a,n,s),!0}return!1}function Kf(t,n,a,s){if(s={lane:2,revertLane:Hd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(n)throw Error(r(479))}else n=pf(t,a,s,2),n!==null&&si(n,t,2)}function pc(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function J0(t,n){Sr=oc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,tt(t,a)}}var mc={readContext:zn,use:uc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},tg={readContext:zn,use:uc,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:zn,useEffect:I0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,dc(4194308,4,G0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return dc(4194308,4,t,n)},useInsertionEffect:function(t,n){dc(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var s=t();if(zs){Xe(!0);try{t()}finally{Xe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Yn();if(a!==void 0){var c=a(n);if(zs){Xe(!0);try{a(n)}finally{Xe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=NS.bind(null,ge,t),[s.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=kf(t);var n=t.queue,a=Q0.bind(null,ge,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qf,useDeferredValue:function(t,n){var a=Yn();return Wf(a,t,n)},useTransition:function(){var t=kf(!1);return t=q0.bind(null,ge,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ge,c=Yn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Je===null)throw Error(r(349));(we&127)!==0||S0(s,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,I0(E0.bind(null,s,u,t),[t]),s.flags|=2048,Er(9,{destroy:void 0},M0.bind(null,s,u,a,n),null),a},useId:function(){var t=Yn(),n=Je.identifierPrefix;if(Se){var a=$i,s=Ji;a=(s&~(1<<32-Qe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=lc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=TS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Zf,useFormState:U0,useActionState:U0,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kf.bind(null,ge,!0,a),a.dispatch=n,[t,n]},useMemoCache:Hf,useCacheRefresh:function(){return Yn().memoizedState=DS.bind(null,ge)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Ge&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},eg={readContext:zn,use:uc,useCallback:k0,useContext:zn,useEffect:Xf,useImperativeHandle:V0,useInsertionEffect:F0,useLayoutEffect:H0,useMemo:j0,useReducer:fc,useRef:P0,useState:function(){return fc(ba)},useDebugValue:qf,useDeferredValue:function(t,n){var a=pn();return X0(a,Ze.memoizedState,t,n)},useTransition:function(){var t=fc(ba)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:y0,useId:Z0,useHostTransitionStatus:Zf,useFormState:L0,useActionState:L0,useOptimistic:function(t,n){var a=pn();return A0(a,Ze,t,n)},useMemoCache:Hf,useCacheRefresh:K0,useEffectEvent:B0},US={readContext:zn,use:uc,useCallback:k0,useContext:zn,useEffect:Xf,useImperativeHandle:V0,useInsertionEffect:F0,useLayoutEffect:H0,useMemo:j0,useReducer:Vf,useRef:P0,useState:function(){return Vf(ba)},useDebugValue:qf,useDeferredValue:function(t,n){var a=pn();return Ze===null?Wf(a,t,n):X0(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Vf(ba)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:y0,useId:Z0,useHostTransitionStatus:Zf,useFormState:z0,useActionState:z0,useOptimistic:function(t,n){var a=pn();return Ze!==null?A0(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:K0,useEffectEvent:B0};function Qf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:B({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Jf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=gi(),c=Ya(s);c.payload=n,a!=null&&(c.callback=a),n=Za(t,c,s),n!==null&&(si(n,t,s),Ho(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=gi(),c=Ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Za(t,c,s),n!==null&&(si(n,t,s),Ho(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=gi(),s=Ya(a);s.tag=2,n!=null&&(s.callback=n),n=Za(t,s,a),n!==null&&(si(n,t,a),Ho(n,t,a))}};function ng(t,n,a,s,c,u,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,_):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,s)||!Uo(c,u):!0}function ig(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Jf.enqueueReplaceState(n,n.state,null)}function Ps(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=B({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function ag(t){kl(t)}function sg(t){console.error(t)}function rg(t){kl(t)}function gc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function og(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $f(t,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){gc(t,n)},a}function lg(t){return t=Ya(t),t.tag=3,t}function cg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;t.payload=function(){return c(u)},t.callback=function(){og(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){og(n,a,s),typeof c!="function"&&(is===null?is=new Set([this]):is.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function LS(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Cs(n,a,c,!0),a=Pn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Vn===null?Ic():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===nc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Id(t,s,c)),!1;case 22:return a.flags|=65536,s===nc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Id(t,s,c)),!1}throw Error(r(435,a.tag))}return Id(t,s,c),Ic(),!1}if(Se)return n=Pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==xf&&(t=Error(r(422),{cause:s}),zo(Ai(t,a)))):(s!==xf&&(n=Error(r(423),{cause:s}),zo(Ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Ai(s,a),c=$f(t.stateNode,s,c),wf(t,c),dn!==4&&(dn=2)),!1;var u=Error(r(520),{cause:s});if(u=Ai(u,a),tl===null?tl=[u]:tl.push(u),dn!==4&&(dn=2),n===null)return!0;s=Ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=$f(a.stateNode,s,t),wf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(is===null||!is.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=lg(c),cg(c,t,a,s),wf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var td=Error(r(461)),yn=!1;function Tn(t,n,a,s){n.child=t===null?h0(n,null,a,s):Os(n,t.child,a,s)}function ug(t,n,a,s,c){a=a.render;var u=n.ref;if("ref"in s){var _={};for(var b in s)b!=="ref"&&(_[b]=s[b])}else _=s;return ws(n),s=Pf(t,n,a,_,u,c),b=If(),t!==null&&!yn?(Bf(t,n,c),Aa(t,n,c)):(Se&&b&&Zl(n),n.flags|=1,Tn(t,n,s,c),n.child)}function fg(t,n,a,s,c){if(t===null){var u=a.type;return typeof u=="function"&&!mf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,dg(t,n,u,s,c)):(t=Wl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!ld(t,c)){var _=u.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(_,s)&&t.ref===n.ref)return Aa(t,n,c)}return n.flags|=1,t=ya(u,s),t.ref=n.ref,t.return=n,n.child=t}function dg(t,n,a,s,c){if(t!==null){var u=t.memoizedProps;if(Uo(u,s)&&t.ref===n.ref)if(yn=!1,n.pendingProps=s=u,ld(t,c))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,Aa(t,n,c)}return ed(t,n,a,s,c)}function hg(t,n,a,s){var c=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~u}else s=0,n.child=null;return pg(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tc(n,u!==null?u.cachePool:null),u!==null?g0(n,u):Nf(),v0(n);else return s=n.lanes=536870912,pg(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(tc(n,u.cachePool),g0(n,u),Ja(),n.memoizedState=null):(t!==null&&tc(n,null),Nf(),Ja());return Tn(t,n,c,a),n.child}function Wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pg(t,n,a,s,c){var u=bf();return u=u===null?null:{parent:_n._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&tc(n,null),Nf(),v0(n),t!==null&&Cs(t,n,s,!0),n.childLanes=c,null}function vc(t,n){return n=_c({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function mg(t,n,a){return Os(n,t.child,null,a),t=vc(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function OS(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=vc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wo(null,t);if(Lf(n),(t=tn)?(t=Gv(t,wi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=Jm(t),a.return=n,n.child=a,Rn=n,tn=null)):t=null,t===null)throw ja(n);return n.lanes=536870912,null}return vc(n,s)}var u=t.memoizedState;if(u!==null){var _=u.dehydrated;if(Lf(n),c)if(n.flags&256)n.flags&=-257,n=mg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||Cs(t,n,a,!1),c=(a&t.childLanes)!==0,yn||c){if(Ka.current===null){if(s=Je,s!==null&&(_=xt(s,a),_!==0&&_!==u.retryLane))throw u.retryLane=_,Ts(t,_),si(s,t,_),td;Ic()}n=mg(t,n,a)}else t=u.treeContext,tn=Ni(_.nextSibling),Rn=n,Se=!0,ka=null,wi=!1,t!==null&&e0(n,t),n=vc(n,s),n.flags|=134221824;return n}return t=ya(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Tr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ed(t,n,a,s,c){return ws(n),a=Pf(t,n,a,s,void 0,c),s=If(),t!==null&&!yn?(Bf(t,n,c),Aa(t,n,c)):(Se&&s&&Zl(n),n.flags|=1,Tn(t,n,a,c),n.child)}function gg(t,n,a,s,c,u){return ws(n),n.updateQueue=null,a=x0(n,s,a,c),_0(t),s=If(),t!==null&&!yn?(Bf(t,n,u),Aa(t,n,u)):(Se&&s&&Zl(n),n.flags|=1,Tn(t,n,a,u),n.child)}function vg(t,n,a,s,c){if(ws(n),n.stateNode===null){var u=pr,_=a.contextType;typeof _=="object"&&_!==null&&(u=zn(_)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Jf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Rf(n),_=a.contextType,u.context=typeof _=="object"&&_!==null?zn(_):pr,u.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Qf(n,a,_,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(_=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),_!==u.state&&Jf.enqueueReplaceState(u,u.state,null),Vo(n,s,u,c),Go(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var b=n.memoizedProps,V=Ps(a,b);u.props=V;var $=u.context,ft=a.contextType;_=pr,typeof ft=="object"&&ft!==null&&(_=zn(ft));var Rt=a.getDerivedStateFromProps;ft=typeof Rt=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||$!==_)&&ig(n,u,s,_),Wa=!1;var K=n.memoizedState;u.state=K,Vo(n,s,u,c),Go(),$=n.memoizedState,b||K!==$||Wa?(typeof Rt=="function"&&(Qf(n,a,Rt,s),$=n.memoizedState),(V=Wa||ng(n,a,V,s,K,$,_))?(ft||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),u.props=s,u.state=$,u.context=_,s=V):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,Cf(t,n),_=n.memoizedProps,ft=Ps(a,_),u.props=ft,Rt=n.pendingProps,K=u.context,$=a.contextType,V=pr,typeof $=="object"&&$!==null&&(V=zn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_!==Rt||K!==V)&&ig(n,u,s,V),Wa=!1,K=n.memoizedState,u.state=K,Vo(n,s,u,c),Go();var lt=n.memoizedState;_!==Rt||K!==lt||Wa||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof b=="function"&&(Qf(n,a,b,s),lt=n.memoizedState),(ft=Wa||ng(n,a,ft,s,K,lt,V)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,lt,V),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,lt,V)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),u.props=s,u.state=lt,u.context=V,s=ft):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,Tr(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Os(n,t.child,null,c),n.child=Os(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=Aa(t,n,c),t}function _g(t,n,a,s){return As(),n.flags|=256,Tn(t,n,a,s),n.child}var nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function id(t){return{baseLanes:t,cachePool:o0()}}function ad(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=mi),t}function xg(t,n,a){var s=n.pendingProps,c=!1,u=(n.flags&128)!==0,_;if((_=u)||(_=t!==null&&t.memoizedState===null?!1:(In.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Qa(n):Ja(),(t=tn)?(t=Gv(t,wi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=Jm(t),a.return=n,n.child=a,Rn=n,tn=null)):t=null,t===null)throw ja(n);return ih(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,c?(Ja(),c=n.mode,u=_c({mode:"hidden",children:u},c),s=bs(s,c,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=id(a),s.childLanes=ad(t,_,a),n.memoizedState=nd,Wo(null,s)):(Qa(n),sd(n,u))}var b=t.memoizedState;if(b!==null){var V=b.dehydrated;if(V!==null)return zS(t,n,u,_,s,V,b,a)}return c?(Ja(),c=s.fallback,u=n.mode,b=t.child,V=b.sibling,s=ya(b,{mode:"hidden",children:s.children}),s.subtreeFlags=b.subtreeFlags&1206910976,V!==null?c=ya(V,c):(c=bs(c,u,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Wo(null,s),s=n.child,c=t.child.memoizedState,c===null?c=id(a):(u=c.cachePool,u!==null?(b=_n._currentValue,u=u.parent!==b?{parent:b,pool:b}:u):u=o0(),c={baseLanes:c.baseLanes|a,cachePool:u}),s.memoizedState=c,s.childLanes=ad(t,_,a),n.memoizedState=nd,Wo(t.child,s)):(Qa(n),a=t.child,t=a.sibling,a=ya(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function sd(t,n){return n=_c({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _c(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function xc(t,n,a){return Os(n,t.child,null,a),t=sd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function zS(t,n,a,s,c,u,_,b){if(a)return n.flags&256?(Qa(n),n.flags&=-257,xc(t,n,b)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),u=c.fallback,_=n.mode,c=_c({mode:"visible",children:c.children},_),u=bs(u,_,b,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Os(n,t.child,null,b),c=n.child,c.memoizedState=id(b),c.childLanes=ad(t,s,b),n.memoizedState=nd,Wo(null,c));if(Qa(n),ih(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var V=s.dgst;return s=V,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,zo({value:c,source:null,stack:null})),xc(t,n,b)}if(yn||Cs(t,n,b,!1),s=(b&t.childLanes)!==0,yn||s){if(Ka.current!==null)return xc(t,n,b);if(s=Je,s!==null&&(c=xt(s,b),c!==0&&c!==_.retryLane))throw _.retryLane=c,Ts(t,c),si(s,t,c),td;return nh(u)||Ic(),xc(t,n,b)}return nh(u)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,tn=Ni(u.nextSibling),Rn=n,Se=!0,ka=null,wi=!1,t!==null&&e0(n,t),n=sd(n,c.children),n.flags|=134221824,n)}function yg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ql(t.return,n,a)}function Sg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&rc(a)===null&&(n=t),t=t.sibling}return n}function yc(t,n,a,s,c,u){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:u}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=u)}function rd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function od(t,n,a){var s=n.pendingProps,c=s.revealOrder,u=s.tail;s=s.children;var _=In.current;if(n.flags&128)return ko(n,_),null;var b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,ko(n,_),c==="backwards"&&t!==null?(rd(t),Tn(t,n,s,a),rd(t)):Tn(t,n,s,a),s=Se?Oo:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yg(t,a,n);else if(t.tag===19)yg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Sg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,rd(n)),yc(n,!0,c,null,u,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&rc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}yc(n,!0,a,null,u,s);break;case"together":yc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Sg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),yc(n,!1,c,a,u,s)}return n.child}function Mg(t,n,a){var s=n.pendingProps;return Xa(n,n.type,s.value),Tn(t,n,s.children,a),n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Cs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ya(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ya(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ld(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function PS(t,n,a){switch(n.tag){case 3:P(n,n.stateNode.containerInfo),Xa(n,_n,t.memoizedState.cache),As();break;case 27:case 5:rt(n);break;case 4:P(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Qa(n),n.flags|=128,null;s=Cs(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?xg(t,n,a):(Qa(n),t=Aa(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return od(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Cs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return od(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ko(n,In.current),s)break;return null;case 22:return n.lanes=0,hg(t,n,a,n.pendingProps);case 24:Xa(n,_n,t.memoizedState.cache)}return Aa(t,n,a)}function Eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!ld(t,a)&&(n.flags&128)===0)return yn=!1,PS(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,Se&&(n.flags&1048576)!==0&&t0(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Us(n.elementType),n.type=t,typeof t=="function")mf(t)?(s=Ps(t,s),n.tag=1,n=vg(null,n,t,s,a)):(n.tag=0,n=ed(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===Z){n.tag=11,n=ug(null,n,t,s,a);break t}else if(c===Ct){n.tag=14,n=fg(null,n,t,s,a);break t}else if(c===ht){n.tag=10,n.type=t,n=Mg(null,n,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return ed(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ps(s,n.pendingProps),vg(t,n,s,c,a);case 3:t:{if(P(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;c=u.element,Cf(t,n),Vo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Xa(n,_n,s),s!==u.cache&&Mf(n,[_n],a,!0),Go(),s=_.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=_g(t,n,s,a);break t}else if(s!==c){c=Ai(Error(r(424)),n),zo(c),n=_g(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Ni(t.firstChild),Rn=n,Se=!0,ka=null,wi=!0,a=h0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(As(),s===c){n=Aa(t,n,a);break t}Tn(t,n,s,a)}n=n.child}return n;case 26:return Tr(t,n),t===null?(a=Yv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=Rv(n.type,n.pendingProps,Ee.current,n)):n.memoizedState=Yv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return rt(n),t===null&&Se&&(s=n.stateNode=jv(n.type,n.pendingProps,Ee.current),Rn=n,wi=!0,c=tn,rs(n.type)?(ah=c,tn=Ni(s.firstChild)):tn=c),Tn(t,n,n.pendingProps.children,a),Tr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=s=tn)&&(s=D1(s,n.type,n.pendingProps,wi),s!==null?(n.stateNode=s,Rn=n,tn=Ni(s.firstChild),wi=!1,c=!0):c=!1),c||ja(n)),rt(n),c=n.type,u=n.pendingProps,_=t!==null?t.memoizedProps:null,s=u.children,Zd(c,u)?s=null:_!==null&&Zd(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Pf(t,n,bS,null,null,a),Vr._currentValue=c),Tr(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=tn)&&(a=N1(a,n.pendingProps,wi),a!==null?(n.stateNode=a,Rn=n,tn=null,t=!0):t=!1),t||ja(n)),null;case 13:return xg(t,n,a);case 4:return P(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Os(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return ug(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Tr(t,n),Tn(t,n,s,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return Mg(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,ws(n),c=zn(c),s=s(c),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return fg(t,n,n.type,n.pendingProps,a);case 15:return dg(t,n,n.type,n.pendingProps,a);case 19:return od(t,n,a);case 31:return OS(t,n,a);case 22:return hg(t,n,a,n.pendingProps);case 24:return ws(n),s=zn(_n),t===null?(c=bf(),c===null&&(c=Je,u=Ef(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:s,cache:c},Rf(n),Xa(n,_n,c)):((t.lanes&a)!==0&&(Cf(t,n),Vo(n,null,null,a),Go()),c=t.memoizedState,u=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Xa(n,_n,s)):(s=u.cache,Xa(n,_n,s),s!==c.cache&&Mf(n,[_n],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&Zl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Tr(t,n),Tn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(t){t.flags|=4}function cd(t,n,a,s,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?Jv(n,s):Jv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(av())t.flags|=8192;else throw Ls=nc,Af}else t.flags&=-16777217}function Tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$v(n))if(av())t.flags|=8192;else throw Ls=nc,Af}function Sc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ln():536870912,t.lanes|=n,wr|=n)}function Yo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function IS(t,n,a){var s=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(_n),A(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vr(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yf())),en(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(Ra(n),u!==null?(en(n),Tg(n,u)):(en(n),cd(n,c,null,s,a))):u?u!==t.memoizedState?(Ra(n),en(n),Tg(n,u)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ra(n),en(n),cd(n,c,t,s,a)),null;case 27:if(St(n),a=Ee.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}t=jt.current,vr(n)?n0(n):(t=jv(c,s,a),n.stateNode=t,Ra(n))}return en(n),n.subtreeFlags&=-33554433,null;case 5:if(St(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}if(u=jt.current,vr(n))n0(n);else{var _=sl(Ee.current);switch(u){case 1:u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=_.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}u[Gt]=n,u[ne]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)u.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=u;t:switch(Fn(u,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ra(n)}}return en(n),n.subtreeFlags&=-33554433,cd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ee.current,vr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Gt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ev(t.nodeValue,a)),t||ja(n,!0)}else t=sl(t).createTextNode(s),t[Gt]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=vr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Gt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=vr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Gt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else c=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sc(n,n.updateQueue),en(n),null);case 4:return A(),t===null&&jd(n.stateNode.containerInfo),n.flags|=67108864,en(n),null;case 10:return Ea(n.type),en(n),null;case 19:if(Of(n),s=n.memoizedState,s===null)return en(n),null;if(c=(n.flags&128)!==0,u=s.rendering,u===null)if(c)Yo(s,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=rc(t),u!==null){for(n.flags|=128,Yo(s,!1),t=u.updateQueue,n.updateQueue=t,Sc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Qm(a,t),a=a.sibling;return ko(n,In.current&1|2),Se&&Sa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&I()>Lc&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304)}else{if(!c)if(t=rc(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Sc(n,t),Yo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!Se)return en(n),null}else 2*I()-s.renderingStartTime>Lc&&a!==536870912&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=I(),t.sibling=null,u=In.current,u=c?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Se?ko(n,u):(a=u,Wt(Pn,n),Wt(In,a),Vn===null&&(Vn=n)),Se&&Sa(n,s.treeForkCount),t}return en(n),null;case 22:case 23:return di(n),Uf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Sc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ot(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(_n),en(n),null;case 25:return null;case 30:return n.flags|=33554432,en(n),null}throw Error(r(156,n.tag))}function BS(t,n){switch(_f(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ea(_n),A(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return St(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Of(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return A(),null;case 10:return Ea(n.type),null;case 22:case 23:return di(n),Uf(),t!==null&&Ot(Ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ea(_n),null;case 25:return null;default:return null}}function bg(t,n){switch(_f(n),n.tag){case 3:Ea(_n),A();break;case 26:case 27:case 5:St(n);break;case 4:A();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:Of(n);break;case 10:Ea(n.type);break;case 22:case 23:di(n),Uf(),t!==null&&Ot(Ns);break;case 24:Ea(_n)}}function Zo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var u=a.create,_=a.inst;s=u(),_.destroy=s}a=a.next}while(a!==c)}}catch(b){We(n,n.return,b)}}function $a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&t)===t){var _=s.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,c=n;var V=a,$=b;try{$()}catch(ft){We(c,V,ft)}}}s=s.next}while(s!==u)}}catch(ft){We(n,n.return,ft)}}function Ag(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{m0(n,a)}catch(s){We(t,t.return,s)}}}function Rg(t,n,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){We(t,n,s)}}function ta(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,u=_a(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=Ov(u)),s=c.ref;break;case 7:if(t.stateNode===null){var _=new vi(t);g(t.child,!1,C1,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(b){We(t,n,b)}}function Bn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){We(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(t,n,c)}else a.current=null}function Mc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Hv(t.stateNode,n[a])}function Cg(t){for(var n=t.return;n!==null&&(fd(n)&&Hv(t.stateNode,n.stateNode),!ud(n));)n=n.return}function Ko(t){for(var n=t.return;n!==null&&(fd(n)&&w1(t.stateNode,n.stateNode),!ud(n));)n=n.return}function ud(t){return t.tag===5||t.tag===3||t.tag===27}function fd(t){return t&&t.tag===7&&t.stateNode!==null}function dd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){We(t,t.return,c)}}function hd(t,n,a){try{var s=t.stateNode;u1(s,t.type,a,n),s[ne]=n}catch(c){We(t,t.return,c)}}function wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function pd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi)),Mc(t,s),Ie=!0;else if(c!==4&&(c===27&&(Mc(t,s),s=null,rs(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(md(t,n,a,s),t=t.sibling;t!==null;)md(t,n,a,s),t=t.sibling}function Ec(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Mc(t,s),Ie=!0;else if(c!==4&&(c===27&&(Mc(t,s),s=null,rs(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Ec(t,n,a,s),t=t.sibling;t!==null;)Ec(t,n,a,s),t=t.sibling}function Dg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Fn(n,s,a),n[Gt]=t,n[ne]=a}catch(u){We(t,t.return,u)}}var Tc=!1,hi=null;function Ng(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Tc=!0)}var ea=null;function Ug(){var t=ea;return ea=null,t}var ni=0;function br(t,n,a,s,c){return ni=0,Lg(t.child,n,a,s,c)}function Lg(t,n,a,s,c){for(var u=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var b=Jd(_);s.push(b),b.view&&(u=!0)}else u||Jd(_).view&&(u=!0);Tc=!0,Uv(_,ni===0?n:n+"_"+ni,a),ni++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||Lg(t.child,n,a,s,c)&&(u=!0));t=t.sibling}return u}function na(t,n){for(;t!==null;)t.tag===5?Lv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||na(t.child,n)),t=t.sibling}function bc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(bc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(br(t,a,n,null,!1)||na(t.child,!1))}t=t.sibling}}function gd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=_a(s,a),u=xa(s.default,a.paired?s.share:s.enter);u!=="none"?br(t,c,u,null,!1)?(bc(t),a.paired||n||Lr(t,s.onEnter)):na(t.child,!1):bc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)gd(t,n),t=t.sibling;else bc(t)}function vd(t){if(hi!==null&&hi.size!==0){var n=hi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var u=xa(a.default,a.share);if(u!=="none"&&(br(t,s,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,Lr(t,a.onShare)):na(t.child,!1)),n.delete(s),n.size===0)break}}}vd(t)}t=t.sibling}}}function _d(t){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode),s=hi!==null?hi.get(a):void 0,c=xa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(br(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,hi.delete(a),Lr(t,n.onShare)):Lr(t,n.onExit):na(t.child,!1)),hi!==null&&vd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_d(t),t=t.sibling;else hi!==null&&vd(t)}function Og(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode);n=xa(n.default,n.update),t.flags&=-5,n!=="none"&&br(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Og(t);t=t.sibling}}function xd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,na(t.child,!1))}xd(t)}t=t.sibling}}function Ac(t){if(t.tag===30)t.stateNode.paired=null,na(t.child,!1),xd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ac(t),t=t.sibling;else xd(t)}function zg(t){for(t=t.child;t!==null;)t.tag===30?na(t.child,!1):(t.subtreeFlags&33554432)!==0&&zg(t),t=t.sibling}function yd(t,n,a,s,c,u,_){for(var b=!1;n!==null;){if(n.tag===5){var V=n.stateNode;if(u!==null&&ni<u.length){var $=u[ni],ft=Jd(V);($.view||ft.view)&&(b=!0);var Rt;if(Rt=(t.flags&4)===0)if(ft.clip)Rt=!0;else{Rt=$.rect;var K=ft.rect;Rt=Rt.y!==K.y||Rt.x!==K.x||Rt.height!==K.height||Rt.width!==K.width}Rt&&(t.flags|=4),ft.abs?ft=!$.abs:($=$.rect,ft=ft.rect,ft=$.height!==ft.height||$.width!==ft.width),ft&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Uv(V,ni===0?a:a+"_"+ni,c),b&&(t.flags&4)!==0||(ea===null&&(ea=[]),ea.push(V,ni===0?s:s+"_"+ni,n.memoizedProps)),ni++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:yd(t,n.child,a,s,c,u,_)&&(b=!0));n=n.sibling}return b}function Pg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=_a(a,s),u=xa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var b=t.child;ni=0,c=yd(s,b,c,c,u,_,!1),(t.flags&4)!==0&&c&&Lr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Pg(t);t=t.sibling}}var Cn=!1,je=!1,ia=!1,Sd=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,wn=null,aa=!1,Qo=!1,Rc=!1,Md=!1;function FS(t,n,a){if(t=t.containerInfo,Wd=kr,t=Gm(t),lf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var u=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var b=0,V=-1,$=-1,ft=0,Rt=0,K=t,lt=null;e:for(;;){for(var qt;K!==s||u!==0&&K.nodeType!==3||(V=b+u),K!==_||c!==0&&K.nodeType!==3||($=b+c),K.nodeType===3&&(b+=K.nodeValue.length),(qt=K.firstChild)!==null;)lt=K,K=qt;for(;;){if(K===t)break e;if(lt===s&&++ft===u&&(V=b),lt===_&&++Rt===c&&($=b),(qt=K.nextSibling)!==null)break;K=lt,lt=K.parentNode}K=qt}s=V===-1||$===-1?null:{start:V,end:$}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yd={focusedElem:t,selectionRange:s},kr=!1,a=(a&335544064)===a,wn=n,n=a?9270:1024;wn!==null;){if(t=wn,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&_d(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&Ng(t),Cc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&_d(s),Cc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Ng(t),Cc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,wn=s):(a&&Og(t),Cc(a))}}hi=null}function Cc(t){for(;wn!==null;){var n=wn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var _=Ps(n.type,c);a=u.getSnapshotBeforeUpdate(_,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(b){We(n,n.return,b)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)eh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":eh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=_a(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=xa(c.default,c.update),c!=="none"&&br(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,wn=s;break}wn=n.return}}function Bg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),s&4&&Zo(5,a);break;case 1:if(sa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){We(a,a.return,_)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}s&64&&Ag(a),s&512&&ta(a,a.return);break;case 3:if(sa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{m0(t,n)}catch(_){We(a,a.return,_)}}break;case 27:n===null&&s&4&&Dg(a);case 26:case 5:sa(t,a),n===null&&s&4&&dd(a),s&512&&ta(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),s&4&&Vg(t,a);break;case 13:sa(t,a),s&4&&kg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=QS.bind(null,a),U1(t,a))));break;case 22:if(s=a.memoizedState!==null||Cn,!s){var u=n!==null&&n.memoizedState!==null||je;n=Cn,c=je,Cn=s,(je=u)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Vi(t,a,s)):sa(t,a),Cn=n,je=c}break;case 30:sa(t,a),s&512&&ta(a,a.return);break;case 7:s&512&&ta(a,a.return);default:sa(t,a)}}function Ed(t,n){for(t=t.child;t!==null;)Fg(t,n),t=t.sibling}function Fg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,_=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(V){We(t,t.return,V)}Td(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ie=!0}catch(V){We(t,t.return,V)}break;case 18:try{var b=t.stateNode;n?Nv(b,!0):Nv(t.stateNode,!1)}catch(V){We(t,t.return,V)}break;case 22:case 23:t.memoizedState===null&&Ed(t,n);break;default:Ed(t,n)}}function Td(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Fg(a,s);break t;case 22:a.memoizedState===null&&Td(a,s);break t;default:Td(a,s)}}t=t.sibling}}function Hg(t){var n=t.alternate;n!==null&&(t.alternate=null,Hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&le(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,ii=!1;function Hi(t,n,a){for(a=a.child;a!==null;)Gg(t,n,a),a=a.sibling}function Gg(t,n,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:je||Bn(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!je&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||Bn(a,n),Ko(a);var s=on,c=ii;rs(a.type)&&(on=a.stateNode,ii=!1),Hi(t,n,a),Xv(a.stateNode,a.type,a.memoizedProps),on=s,ii=c;break;case 5:je||Bn(a,n),Ko(a);case 6:if(a.tag===6&&Ko(a),s=on,c=ii,on=null,Hi(t,n,a),on=s,ii=c,on!==null)if(ii)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode),Ie=!0}catch(u){We(a,n,u)}else try{on.removeChild(a.stateNode),Ie=!0}catch(u){We(a,n,u)}break;case 18:on!==null&&(ii?(t=on,Dv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),jr(t)):Dv(on,a.stateNode));break;case 4:s=on,c=ii,on=a.stateNode.containerInfo,ii=!0,Hi(t,n,a),on=s,ii=c;break;case 0:case 11:case 14:case 15:$a(2,a,n),je||$a(4,a,n),Hi(t,n,a);break;case 1:je||(Bn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Rg(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:je=(s=je)||a.memoizedState!==null,Hi(t,n,a),je=s;break;case 30:Bn(a,n),Hi(t,n,a);break;case 7:je||Bn(a,n),Hi(t,n,a);break;default:Hi(t,n,a)}}function Vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{jr(t)}catch(a){We(n,n.return,a)}}}function kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jr(t)}catch(a){We(n,n.return,a)}}function HS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ig),n;default:throw Error(r(435,t.tag))}}function wc(t,n){var a=HS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=JS.bind(null,t,s);s.then(c,c)}})}function Zn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var u=s[c],_=t,b=n,V=b;t:for(;V!==null;){switch(V.tag){case 27:if(rs(V.type)){on=V.stateNode,ii=!1;break t}break;case 5:on=V.stateNode,ii=!1;break t;case 3:case 4:on=V.stateNode.containerInfo,ii=!0;break t}V=V.return}if(on===null)throw Error(r(160));Gg(_,b,u),on=null,ii=!1,_=u.alternate,_!==null&&(_.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,t,a),n=n.sibling}var Gi=null;function jg(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var _=s[u];_.ref.impl=_.nextImpl}Zn(n,t,a),Kn(t),c&4&&($a(3,t,t.return),Zo(3,t),$a(5,t,t.return));break;case 1:Zn(n,t,a),Kn(t),c&512&&(je||s===null||Bn(s,s.return)),c&64&&Cn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Gi,Zn(n,t,a),Kn(t),c&512&&(je||s===null||Bn(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Cn)t.stateNode=Rv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Fe]||s[Gt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Fn(s,n,a),s[Gt]=t,Pe(s),n=s;break t;case"link":if(u=Qv("link","href",c).get(n+(a.href||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(_,1);break e}}s=c.createElement(n),Fn(s,n,a),c.head.appendChild(s);break;case"meta":if(u=Qv("meta","content",c).get(n+(a.content||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(_,1);break e}}s=c.createElement(n),Fn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[Gt]=t,Pe(s),n=s}t.stateNode=n}else Cn||lh(u,t.type,t.stateNode);else t.stateNode=Kv(u,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||je||n.parentNode.removeChild(n)):c.count--,a===null?Cn||lh(u,t.type,t.stateNode):Kv(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&hd(t,t.memoizedProps,s.memoizedProps);break;case 27:Zn(n,t,a),Kn(t),c&512&&(je||s===null||Bn(s,s.return)),s!==null&&c&4&&hd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=ia,ia=!1,Zn(n,t,a),ia=u,Kn(t),c&512&&(je||s===null||Bn(s,s.return)),t.flags&32){n=t.stateNode;try{or(n,""),Ie=!0}catch(ft){We(t,t.return,ft)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,hd(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Sd=!0);break;case 6:if(Zn(n,t,a),Kn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ie=!0}catch(ft){We(t,t.return,ft)}}break;case 3:if(Ie=!1,jc=null,u=Gi,Gi=rl(n.containerInfo),Zn(n,t,a),Gi=u,Kn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(ft){We(t,t.return,ft)}Sd&&(Sd=!1,Xg(t)),Ie=!1;break;case 4:c=ia,ia=Cn,s=fm(),u=Gi,Gi=rl(t.stateNode.containerInfo),Zn(n,t,a),Kn(t),Gi=u,Ie&&Qo&&(Rc=!0),Ie=s,ia=c;break;case 12:Zn(n,t,a),Kn(t);break;case 31:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wc(t,n)));break;case 13:Zn(n,t,a),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Uc=I()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wc(t,n)));break;case 22:u=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var b=Cn,V=je,$=ia;Cn=b||u,ia=$||u,je=V||_,Zn(n,t,a),je=V,ia=$,Cn=b,Kn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||_||Cn||je||(n=_||je,a=Cn,s=je,Cn=u||Cn,je=n,ts(t,2),Cn=a,je=s),!u&&ia||Ed(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wc(t,a))));break;case 19:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wc(t,n)));break;case 30:c&512&&(je||s===null||Bn(s,s.return)),c=fm(),u=Qo,_=(a&335544064)===a,b=t.memoizedProps,Qo=_&&xa(b.default,b.update)!=="none",Zn(n,t,a),Kn(t),_&&s!==null&&Ie&&(t.flags|=4),Qo=u,Ie=c;break;case 21:break;case 7:c&512&&(je||s===null||Bn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Zn(n,t,a),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(wg(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(fd(c)){var u=c.stateNode;s===null?s=[u]:s.push(u)}if(ud(c))break;c=c.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var b=a.stateNode,V=pd(t);Ec(t,V,b,_);break;case 5:var $=a.stateNode;a.flags&32&&(or($,""),a.flags&=-33);var ft=pd(t);Ec(t,ft,$,_);break;case 3:case 4:var Rt=a.stateNode.containerInfo,K=pd(t);md(t,K,Rt,_);break;default:throw Error(r(161))}}catch(lt){We(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Xg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Xg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,kr=!0,n.reset(),kr=!1),t=t.sibling}}function Ar(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)qg(n,t),n=n.sibling;else Pg(n)}function qg(t,n){var a=t.alternate;if(a===null)gd(t,!1);else switch(t.tag){case 3:if(Md=aa=!1,Ug(),Ar(n,t),!aa&&!Rc){if(t=ea,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];Lv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Md=!0}ea=null;break;case 5:Ar(n,t);break;case 4:s=aa,aa=!1,Ar(n,t),aa&&(Rc=!0),aa=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?gd(t,!1):Ar(n,t));break;case 30:s=aa,c=Ug(),aa=!1,Ar(n,t),aa&&(t.flags|=4);var u=t.memoizedProps,_=t.stateNode;n=_a(u,_),_=_a(a.memoizedProps,_);var b=xa(u.default,u.update);b==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,ni=0,n=yd(t,a,n,_,b,u,!0),ni!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Lr(t,t.memoizedProps.onUpdate),ea=c):c!==null&&(c.push.apply(c,ea),ea=c),aa=(t.flags&32)!==0?!0:s;break;default:Ar(n,t)}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bg(t,n.alternate,n),n=n.sibling}function ts(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),ts(a,s);break;case 1:Bn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Rg(a,a.return,c),ts(a,s);break;case 27:(s&2)!==0&&Xv(a.stateNode,a.type,a.memoizedProps);case 5:Bn(a,a.return),a.tag!==5&&a.tag!==27||Ko(a),ts(a,s);break;case 6:Ko(a);break;case 26:Bn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||je||c.parentNode.removeChild(c),ts(a,s);break;case 22:a.memoizedState===null&&ts(a,s);break;case 30:Bn(a,a.return),ts(a,s);break;case 7:Bn(a,a.return);default:ts(a,s)}t=t.sibling}}function Vi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,u=n,_=u.flags,b=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Vi(c,u,a),Zo(4,u);break;case 1:if(Vi(c,u,a),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ft){We(s,s.return,ft)}if(s=u,c=s.updateQueue,c!==null){var V=s.stateNode;try{var $=c.shared.hiddenCallbacks;if($!==null)for(c.shared.hiddenCallbacks=null,c=0;c<$.length;c++)p0($[c],V)}catch(ft){We(s,s.return,ft)}}b&&_&64&&Ag(u),ta(u,u.return);break;case 27:(a&2)!==0&&Dg(u);case 5:u.tag!==5&&u.tag!==27||Cg(u),Vi(c,u,a),b&&s===null&&_&4&&dd(u),ta(u,u.return);break;case 6:Cg(u);break;case 26:V=u.stateNode,u.memoizedState!==null||V===null||Cn||lh(rl(V.ownerDocument),u.type,V),Vi(c,u,a),b&&s===null&&_&4&&dd(u),ta(u,u.return);break;case 12:Vi(c,u,a);break;case 31:Vi(c,u,a),b&&_&4&&Vg(c,u);break;case 13:Vi(c,u,a),b&&_&4&&kg(c,u);break;case 22:u.memoizedState===null&&Vi(c,u,a),ta(u,u.return);break;case 30:Vi(c,u,a),ta(u,u.return);break;case 7:ta(u,u.return);default:Vi(c,u,a)}n=n.sibling}}function bd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Po(a))}function Ad(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t))}function Di(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Wg(t,n,a,s),n=n.sibling;else c&&zg(n)}function Wg(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ac(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,s),u&2048&&Zo(9,n);break;case 1:Di(t,n,a,s);break;case 3:Di(t,n,a,s),c&&Md&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Po(u)));break;case 12:if(u&2048){Di(t,n,a,s),u=n.stateNode;try{var _=n.memoizedProps,b=_.id,V=_.onPostCommit;typeof V=="function"&&V(b,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch($){We(n,n.return,$)}}else Di(t,n,a,s);break;case 31:Di(t,n,a,s);break;case 13:Di(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,b=n.alternate,n.memoizedState!==null?(c&&b!==null&&b.memoizedState===null&&Ac(b),_._visibility&2?Di(t,n,a,s):Jo(t,n)):(c&&b!==null&&b.memoizedState!==null&&Ac(n),_._visibility&2?Di(t,n,a,s):(_._visibility|=2,Rr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&bd(b,n);break;case 24:Di(t,n,a,s),u&2048&&Ad(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(na(u.child,!0),na(n.child,!0))),Di(t,n,a,s);break;default:Di(t,n,a,s)}}function Rr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,_=n,b=a,V=s,$=_.flags;switch(_.tag){case 0:case 11:case 15:Rr(u,_,b,V,c),Zo(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?Rr(u,_,b,V,c):Jo(u,_):(ft._visibility|=2,Rr(u,_,b,V,c)),c&&$&2048&&bd(_.alternate,_);break;case 24:Rr(u,_,b,V,c),c&&$&2048&&Ad(_.alternate,_);break;default:Rr(u,_,b,V,c)}n=n.sibling}}function Jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Jo(a,s),c&2048&&bd(s.alternate,s);break;case 24:Jo(a,s),c&2048&&Ad(s.alternate,s);break;default:Jo(a,s)}n=n.sibling}}var Is=8192;function Bs(t,n,a){if(t.subtreeFlags&Is)for(t=t.child;t!==null;)Yg(t,n,a),t=t.sibling}function Yg(t,n,a){switch(t.tag){case 26:Bs(t,n,a),t.flags&Is&&(t.memoizedState!==null?q1(a,Gi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&e_(a,t)));break;case 5:Bs(t,n,a),t.flags&Is&&(t=t.stateNode,(n&335544128)===n&&e_(a,t));break;case 3:case 4:var s=Gi;Gi=rl(t.stateNode.containerInfo),Bs(t,n,a),Gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Is,Is=16777216,Bs(t,n,a),Is=s):Bs(t,n,a));break;case 30:if((t.flags&Is)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,hi===null&&(hi=new Map),hi.set(s,c)}Bs(t,n,a);break;default:Bs(t,n,a)}}function Zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];wn=s,Qg(s,t)}Zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:$o(t),t.flags&2048&&$a(9,t,t.return);break;case 3:$o(t);break;case 12:$o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dc(t)):$o(t);break;default:$o(t)}}function Dc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];wn=s,Qg(s,t)}Zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Dc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dc(n));break;default:Dc(n)}t=t.sibling}}function Qg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Po(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,wn=s;else t:for(a=t;wn!==null;){s=wn;var c=s.sibling,u=s.return;if(Hg(s),s===a){wn=null;break t}if(c!==null){c.return=u,wn=c;break t}wn=u}}}var GS={getCacheForType:function(t){var n=zn(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return zn(_n).controller.signal}},VS=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Je=null,Te=null,we=0,qe=0,pi=null,es=!1,Cr=!1,Rd=!1,Ca=0,dn=0,ns=0,Fs=0,Nc=0,mi=0,wr=0,tl=null,ai=null,Cd=!1,Uc=0,Jg=0,Lc=1/0,Oc=null,is=null,cn=0,ki=null,Hs=null,ra=0,wd=0,Dd=null,$g=null,Dr=null,Nr=null,Ur=null,el=0,zc=null;function gi(){return(Ge&2)!==0&&we!==0?we&-we:dt.T!==null?Hd():Bt()}function tv(){if(mi===0)if((we&536870912)===0||Se){var t=Pi;Pi<<=1,(Pi&3932160)===0&&(Pi=262144),mi=t}else mi=536870912;return t=Pn.current,t!==null&&(t.flags|=32),mi}function Lr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Ov(_a(t.memoizedProps,a))),Nr===null&&(Nr=[]),Nr.push(n.bind(null,s))}}function si(t,n,a){(t===Je&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(Or(t,0),as(t,we,mi,!1)),On(t,a),((Ge&2)===0||t!==Je)&&(t===Je&&((Ge&2)===0&&(Fs|=a),dn===4&&as(t,we,mi,!1)),oa(t))}function ev(t,n,a){if((Ge&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||li(t,n),c=s?XS(t,n):Ud(t,n,!0),u=s;do{if(c===0){Cr&&!s&&as(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!kS(a)){c=Ud(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var b=t;c=tl;var V=b.current.memoizedState.isDehydrated;if(V&&(Or(b,_).flags|=256),_=Ud(b,_,!1),_!==2&&_!==6){if(Rd&&!V){b.errorRecoveryDisabledLanes|=u,Fs|=u,c=4;break t}u=ai,ai=c,u!==null&&(ai===null?ai=u:ai.push.apply(ai,u))}c=_}if(u=!1,c!==2)continue}}if(c===1){Or(t,0),as(t,n,0,!0);break}t:{switch(s=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:as(s,n,mi,!es);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Uc+300-I(),10<c)){if(as(s,n,mi,!es),Ei(s,0,!0)!==0)break t;ra=n,s.timeoutHandle=Qd(nv.bind(null,s,a,ai,Oc,Cd,n,mi,Fs,wr,es,u,"Throttled",-0,0),c);break t}nv(s,a,ai,Oc,Cd,n,mi,Fs,wr,es,u,null,-0,0)}}break}while(!0);oa(t)}function nv(t,n,a,s,c,u,_,b,V,$,ft,Rt,K,lt){t.timeoutHandle=-1;var qt=n.subtreeFlags,ie=(u&335544064)===u;if(Rt=null,(ie||qt&8192||(qt&16785408)===16785408)&&(Rt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},hi=null,Yg(n,u,Rt),ie&&(qt=Rt,ie=t.containerInfo,ie=(ie.nodeType===9?ie:ie.ownerDocument).__reactViewTransition,ie!=null&&(qt.count++,qt.waitingForViewTransition=!0,qt=cl.bind(qt),ie.finished.then(qt,qt))),qt=(u&62914560)===u?Uc-I():(u&4194048)===u?Jg-I():0,qt=W1(Rt,qt),qt!==null)){ra=u,t.cancelPendingCommit=qt(uv.bind(null,t,n,u,a,s,c,_,b,V,$,ft,Rt,null,K,lt)),as(t,u,_,!$);return}uv(t,n,u,a,s,c,_,b,V,$,ft,Rt)}function kS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],u=c.getSnapshot;c=c.value;try{if(!fi(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,s){n=Ba(t,n),n&=~Nc,n&=~Fs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var u=31-Qe(c),_=1<<u;s[u]=-1,c&=~_}a!==0&&D(t,a,n)}function Pc(){return(Ge&6)===0?(nl(0),!1):!0}function Nd(){if(Te!==null){if(qe===0)var t=Te.return;else t=Te,Ma=Rs=null,Ff(t),yr=null,Fo=0,t=Te;for(;t!==null;)bg(t.alternate,t),t=t.return;Te=null}}function Or(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,h1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ra=0,Nd(),Je=t,Te=a=ya(t.current,null),we=n,qe=0,pi=null,es=!1,Cr=li(t,n),Rd=!1,wr=mi=Nc=Fs=ns=dn=0,ai=tl=null,Cd=!1,Ca=Ba(t,n),jl(),a}function iv(t,n){ge=null,dt.H=mc,n===xr||n===ec?(n=u0(),qe=3):n===Af?(n=u0(),qe=4):qe=n===td?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Te===null&&(dn=1,gc(t,Ai(n,t.current)))}function av(){var t=Pn.current;return t===null?!0:(we&4194048)===we?Vn===null:(we&62914560)===we||(we&536870912)!==0?t===Vn:!1}function sv(){var t=dt.H;return dt.H=mc,t===null?mc:t}function rv(){var t=dt.A;return dt.A=GS,t}function Ic(){dn=4,es||(we&4194048)!==we&&Pn.current!==null||(Cr=!0),(ns&134217727)===0&&(Fs&134217727)===0||Je===null||as(Je,we,mi,!1)}function Ud(t,n,a){var s=Ge;Ge|=2;var c=sv(),u=rv();(Je!==t||we!==n)&&(Oc=null,Or(t,n)),n=!1;var _=dn;t:do try{if(qe!==0&&Te!==null){var b=Te,V=pi;switch(qe){case 8:Nd(),_=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(n=!0);var $=qe;if(qe=0,pi=null,zr(t,b,V,$),a&&Cr){_=0;break t}break;default:$=qe,qe=0,pi=null,zr(t,b,V,$)}}jS(),_=dn;break}catch(ft){iv(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ma=Rs=null,Ge=s,dt.H=c,dt.A=u,Te===null&&(Je=null,we=0,jl()),_}function jS(){for(;Te!==null;)ov(Te)}function XS(t,n){var a=Ge;Ge|=2;var s=sv(),c=rv();Je!==t||we!==n?(Oc=null,Lc=I()+500,Or(t,n)):Cr=li(t,n);t:do try{if(qe!==0&&Te!==null){n=Te;var u=pi;e:switch(qe){case 1:qe=0,pi=null,zr(t,n,u,1);break;case 2:case 9:if(l0(u)){qe=0,pi=null,lv(n);break}n=function(){qe!==2&&qe!==9||Je!==t||(qe=7),oa(t)},u.then(n,n);break t;case 3:qe=7;break t;case 4:qe=5;break t;case 7:l0(u)?(qe=0,pi=null,lv(n)):(qe=0,pi=null,zr(t,n,u,7));break;case 5:var _=null;switch(Te.tag){case 26:_=Te.memoizedState;case 5:case 27:var b=Te;if(_?$v(_):b.stateNode.complete){qe=0,pi=null;var V=b.sibling;if(V!==null)Te=V;else{var $=b.return;$!==null?(Te=$,Bc($)):Te=null}break e}}qe=0,pi=null,zr(t,n,u,5);break;case 6:qe=0,pi=null,zr(t,n,u,6);break;case 8:Nd(),dn=6;break t;default:throw Error(r(462))}}qS();break}catch(ft){iv(t,ft)}while(!0);return Ma=Rs=null,dt.H=s,dt.A=c,Ge=a,Te!==null?0:(Je=null,we=0,jl(),dn)}function qS(){for(;Te!==null&&!mt();)ov(Te)}function ov(t){var n=Eg(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,n===null?Bc(t):Te=n}function lv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Ff(n);var s=n;s===Rn&&(Se?(Kl(s),s.tag===5&&s.stateNode!=null&&(tn=s.stateNode)):(Kl(s),Se=!0));default:bg(a,n),n=Te=Qm(n,Ca),n=Eg(a,n,Ca)}t.memoizedProps=t.pendingProps,n===null?Bc(t):Te=n}function zr(t,n,a,s){Ma=Rs=null,Ff(n),yr=null,Fo=0;var c=n.return;try{if(LS(t,c,n,a,we)){dn=1,gc(t,Ai(a,t.current)),Te=null;return}}catch(u){if(c!==null)throw Te=c,u;dn=1,gc(t,Ai(a,t.current)),Te=null;return}n.flags&32768?(Se||s===1?t=!0:Cr||(we&536870912)!==0?t=!1:(es=t=!0,(s===2||s===9||s===3||s===6)&&(s=Pn.current,s!==null&&s.tag===13&&(s.flags|=16384))),cv(n,t)):Bc(n)}function Bc(t){var n=t;do{if((n.flags&32768)!==0){cv(n,es);return}t=n.return;var a=IS(n.alternate,n,Ca);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);dn===0&&(dn=5)}function cv(t,n){do{var a=BS(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);dn=6,Te=null}function uv(t,n,a,s,c,u,_,b,V,$,ft,Rt){t.cancelPendingCommit=null;do Fc();while(cn!==0);if((Ge&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Je&&(Te=Je=null,we=0),Hs=n,ki=t,ra=a,Dd=c,$g=s,WS(t,n,a,_,b,V,Rt)}}function WS(t,n,a,s,c,u,_){var b=n.lanes|n.childLanes;if(wd=b,b|=hf,Bi(t,a,b,s,c,u),Nr=null,(a&335544064)===a?(Ur=SS(t),s=10262):(Ur=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,$S(ut,function(){return Pd(),null})):(t.callbackNode=null,t.callbackPriority=0),Tc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=dt.T,dt.T=null,c=Dt.p,Dt.p=2,u=Ge,Ge|=4;try{FS(t,n,a)}finally{Ge=u,Dt.p=c,dt.T=s}}cn=1,Tc?Dr=x1(_,t.containerInfo,Ur,Ld,Od,ZS,zd,Pd,YS):(Ld(),Od(),zd())}function YS(t){if(cn!==0){var n=ki.onRecoverableError;n(t,{componentStack:null})}}function ZS(){cn===3&&(cn=0,qg(Hs,ki),cn=4)}function Ld(){if(cn===1){cn=0;var t=ki,n=Hs,a=ra,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=dt.T,dt.T=null;var c=Dt.p;Dt.p=2;var u=Ge;Ge|=4;try{Qo=Rc=!1,jg(n,t,a),a=Yd;var _=Gm(t.containerInfo),b=a.focusedElem,V=a.selectionRange;if(_!==b&&b&&b.ownerDocument&&Hm(b.ownerDocument.documentElement,b)){if(V!==null&&lf(b)){var $=V.start,ft=V.end;if(ft===void 0&&(ft=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ft,b.value.length);else{var Rt=b.ownerDocument||document,K=Rt&&Rt.defaultView||window;if(K.getSelection){var lt=K.getSelection(),qt=b.textContent.length,ie=Math.min(V.start,qt),ve=V.end===void 0?ie:Math.min(V.end,qt);!lt.extend&&ie>ve&&(_=ve,ve=ie,ie=_);var J=Fm(b,ie),W=Fm(b,ve);if(J&&W&&(lt.rangeCount!==1||lt.anchorNode!==J.node||lt.anchorOffset!==J.offset||lt.focusNode!==W.node||lt.focusOffset!==W.offset)){var at=Rt.createRange();at.setStart(J.node,J.offset),lt.removeAllRanges(),ie>ve?(lt.addRange(at),lt.extend(W.node,W.offset)):(at.setEnd(W.node,W.offset),lt.addRange(at))}}}}for(Rt=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&Rt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Rt.length;b++){var bt=Rt[b];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}kr=!!Wd,Yd=Wd=null}finally{Ge=u,Dt.p=c,dt.T=s}}t.current=n,cn=2}}function Od(){if(cn===2){cn=0;var t=ki,n=Hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=dt.T,dt.T=null;var s=Dt.p;Dt.p=2;var c=Ge;Ge|=4;try{Bg(t,n.alternate,n)}finally{Ge=c,Dt.p=s,dt.T=a}}cn=3}}function zd(){if(cn===4||cn===3){cn=0;var t=Dr;Dr=null,Tt();var n=ki,a=Hs,s=ra,c=$g,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?cn=5:(cn=0,Hs=ki=null,fv(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(is=null),nt(s),a=a.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(de,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=dt.T,u=Dt.p,Dt.p=2,dt.T=null;try{for(var _=n.onRecoverableError,b=0;b<c.length;b++){var V=c[b];_(V.value,{componentStack:V.stack})}}finally{dt.T=a,Dt.p=u}}if(c=Nr,_=Ur,Ur=null,c!==null&&(Nr=null,_===null&&(_=[]),t!==null))for(V=0;V<c.length;V++)a=(0,c[V])(_),a!==void 0&&t.finished.finally(a);(ra&3)!==0&&Fc(),oa(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===zc?el++:(el=0,zc=n):(el=0,zc=null),nl(0)}}function fv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Po(n)))}function Fc(){return Dr!==null&&(Dr.skipTransition(),Dr=null),Ld(),Od(),zd(),Pd()}function Pd(){if(cn!==5)return!1;var t=ki,n=wd;wd=0;var a=nt(ra),s=dt.T,c=Dt.p;try{Dt.p=32>a?32:a,dt.T=null,a=Dd,Dd=null;var u=ki,_=ra;if(cn=0,Hs=ki=null,ra=0,(Ge&6)!==0)throw Error(r(331));var b=Ge;if(Ge|=4,Kg(u.current),Wg(u,u.current,_,a),Ge=b,nl(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(de,u)}catch{}return!0}finally{Dt.p=c,dt.T=s,fv(t,n)}}function dv(t,n,a){n=Ai(a,n),n=$f(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(On(t,2),oa(t))}function We(t,n,a){if(t.tag===3)dv(t,t,a);else for(;n!==null;){if(n.tag===3){dv(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(is===null||!is.has(s))){t=Ai(a,t),a=lg(2),s=Za(n,a,2),s!==null&&(cg(a,s,n,t),On(s,2),oa(s));break}}n=n.return}}function Id(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new VS;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Rd=!0,c.add(a),t=KS.bind(null,t,n,a),n.then(t,t))}function KS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Je===t&&(we&a)===a&&((dn===4||dn===3&&(we&62914560)===we&&300>I()-Uc)&&(Ge&2)===0?Or(t,0):Nc|=a,wr===we&&(wr=0)),oa(t)}function hv(t,n){n===0&&(n=Ln()),t=Ts(t,n),t!==null&&(On(t,n),oa(t))}function QS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hv(t,a)}function JS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),hv(t,a)}function $S(t,n){return X(t,n)}var Pr=null,Ir=null,Bd=!1,Hc=!1,Fd=!1,ss=0;function oa(t){t!==Ir&&t.next===null&&(Ir===null?Pr=Ir=t:Ir=Ir.next=t),Hc=!0,Bd||(Bd=!0,e1())}function nl(t,n){if(!Fd&&Hc){Fd=!0;do for(var a=!1,s=Pr;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var _=s.suspendedLanes,b=s.pingedLanes;u=(1<<31-Qe(42|t)+1)-1,u&=c&~(_&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,vv(s,u))}else u=we,u=Ei(s,s===Je?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||li(s,u)||(a=!0,vv(s,u));s=s.next}while(a);Fd=!1}}function t1(){pv()}function pv(){Hc=Bd=!1;var t=0;ss!==0&&d1()&&(t=ss);for(var n=I(),a=null,s=Pr;s!==null;){var c=s.next,u=mv(s,n);u===0?(s.next=null,a===null?Pr=c:a.next=c,c===null&&(Ir=a)):(a=s,(t!==0||(u&3)!==0)&&(Hc=!0)),s=c}cn!==0&&cn!==5||nl(t),ss!==0&&(ss=0)}function mv(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var _=31-Qe(u),b=1<<_,V=c[_];V===-1?((b&a)===0||(b&s)!==0)&&(c[_]=To(b,n)):V<=n&&(t.expiredLanes|=b),u&=~b}if(n=Je,a=we,a=Ei(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Y(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||li(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Y(s),nt(a)){case 2:case 8:a=j;break;case 32:a=ut;break;case 268435456:a=It;break;default:a=ut}return s=gv.bind(null,t),a=X(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Y(s),t.callbackPriority=2,t.callbackNode=null,2}function gv(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fc()&&t.callbackNode!==a)return null;var s=we;return s=Ei(t,t===Je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ev(t,s,n),mv(t,I()),t.callbackNode!=null&&t.callbackNode===a?gv.bind(null,t):null)}function vv(t,n){if(Fc())return null;ev(t,n,!0)}function e1(){p1(function(){(Ge&6)!==0?X(Nt,t1):pv()})}function Hd(){if(ss===0){var t=Ds;t===0&&(t=ln,ln<<=1,(ln&261888)===0&&(ln=256)),ss=t}return ss}function _v(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(t)}function n1(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var u=_v((c[ne]||null).action),_=s.submitter;_&&(n=(n=_[ne]||null)?_v(n.formAction):_.getAttribute("formAction"),n!==null&&(u=n,_=null));var b=new Hl("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ss!==0){var V=new FormData(c,_);Yf(a,{pending:!0,data:V,method:c.method,action:u},null,V)}}else typeof u=="function"&&(b.preventDefault(),V=new FormData(c,_),Yf(a,{pending:!0,data:V,method:c.method,action:u},u,V))},currentTarget:c}]})}}for(var Gd=0;Gd<df.length;Gd++){var Vd=df[Gd],i1=Vd.toLowerCase(),a1=Vd[0].toUpperCase()+Vd.slice(1);Fi(i1,"on"+a1)}Fi(jm,"onAnimationEnd"),Fi(Xm,"onAnimationIteration"),Fi(qm,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(hS,"onTransitionRun"),Fi(pS,"onTransitionStart"),Fi(mS,"onTransitionCancel"),Fi(Wm,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function xv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var _=s.length-1;0<=_;_--){var b=s[_],V=b.instance,$=b.currentTarget;if(b=b.listener,V!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=$;try{u(c)}catch(ft){kl(ft)}c.currentTarget=null,u=V}else for(_=0;_<s.length;_++){if(b=s[_],V=b.instance,$=b.currentTarget,b=b.listener,V!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=$;try{u(c)}catch(ft){kl(ft)}c.currentTarget=null,u=V}}}}function be(t,n){var a=n[oe];a===void 0&&(a=n[oe]=new Set);var s=t+"__bubble";a.has(s)||(yv(n,t,2,!1),a.add(s))}function kd(t,n,a){var s=0;n&&(s|=4),yv(a,t,s,n)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function jd(t){if(!t[Gc]){t[Gc]=!0,$e.forEach(function(a){a!=="selectionchange"&&(s1.has(a)||kd(a,!1,t),kd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Gc]||(n[Gc]=!0,kd("selectionchange",!1,n))}}function yv(t,n,a,s){switch(c_(n)){case 2:var c=Q1;break;case 8:c=J1;break;default:c=uh}a=c.bind(null,n,a,t),c=void 0,!Qu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Xd(t,n,a,s,c){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var b=s.stateNode.containerInfo;if(b===c)break;if(_===4)for(_=s.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;b!==null;){if(_=He(b),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){s=u=_;continue t}b=b.parentNode}}s=s.return}ym(function(){var $=u,ft=Zu(a),Rt=[];t:{var K=Ym.get(t);if(K!==void 0){var lt=Hl,qt=t;switch(t){case"keypress":if(Bl(a)===0)break t;case"keydown":case"keyup":lt=ky;break;case"focusin":qt="focus",lt=ef;break;case"focusout":qt="blur",lt=ef;break;case"beforeblur":case"afterblur":lt=ef;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Yy;break;case jm:case Xm:case qm:lt=Oy;break;case Wm:lt=Ky;break;case"scroll":case"scrollend":lt=wy;break;case"wheel":lt=Jy;break;case"copy":case"cut":case"paste":lt=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=bm;break;case"submit":lt=qy;break;case"toggle":case"beforetoggle":lt=tS}var ie=(n&4)!==0,ve=!ie&&(t==="scroll"||t==="scrollend"),J=ie?K!==null?K+"Capture":null:K;ie=[];for(var W=$,at;W!==null;){var bt=W;if(at=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||at===null||J===null||(bt=bo(W,J),bt!=null&&ie.push(al(W,bt,at))),ve)break;W=W.return}0<ie.length&&(K=new lt(K,qt,null,a,ft),Rt.push({event:K,listeners:ie}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",lt&&a!==Yu&&(qt=a.relatedTarget||a.fromElement)&&(He(qt)||qt[ue]))break t;(K||lt)&&(qt=ft.window===ft?ft:(lt=ft.ownerDocument)?lt.defaultView||lt.parentWindow:window,K?(lt=a.relatedTarget||a.toElement,K=$,lt=lt?He(lt):null,lt!==null&&(ve=f(lt),ie=lt.tag,lt!==ve||ie!==5&&ie!==27&&ie!==6)&&(lt=null)):(K=null,lt=$),K!==lt&&(ie=Em,bt="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ie=bm,bt="onPointerLeave",J="onPointerEnter",W="pointer"),ve=K==null?qt:En(K),at=lt==null?qt:En(lt),qt=new ie(bt,W+"leave",K,a,ft),qt.target=ve,qt.relatedTarget=at,bt=null,He(ft)===$&&(ie=new ie(J,W+"enter",lt,a,ft),ie.target=at,ie.relatedTarget=ve,bt=ie),ve=bt,ie=K&&lt?H(K,lt,r1):null,K!==null&&Sv(Rt,qt,K,ie,!1),lt!==null&&ve!==null&&Sv(Rt,ve,lt,ie,!0)))}t:{if(K=$?En($):window,lt=K.nodeName&&K.nodeName.toLowerCase(),lt==="select"||lt==="input"&&K.type==="file")var te=Lm;else if(Nm(K))if(Om)te=uS;else{te=lS;var De=oS}else lt=K.nodeName,!lt||lt.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?$&&Wu($.elementType)&&(te=Lm):te=cS;if(te&&(te=te(t,$))){Um(Rt,te,a,ft);break t}De&&De(t,K,$)}switch(De=$?En($):window,t){case"focusin":(Nm(De)||De.contentEditable==="true")&&(fr=De,cf=$,Lo=null);break;case"focusout":Lo=cf=fr=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Vm(Rt,a,ft);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":Vm(Rt,a,ft)}var re;if(af)t:{switch(t){case"compositionstart":var he="onCompositionStart";break t;case"compositionend":he="onCompositionEnd";break t;case"compositionupdate":he="onCompositionUpdate";break t}he=void 0}else ur?wm(t,a)&&(he="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Am&&a.locale!=="ko"&&(ur||he!=="onCompositionStart"?he==="onCompositionEnd"&&ur&&(re=Sm()):(Ha=ft,Ju="value"in Ha?Ha.value:Ha.textContent,ur=!0)),De=Vc($,he),0<De.length&&(he=new Tm(he,t,null,a,ft),Rt.push({event:he,listeners:De}),re?he.data=re:(re=Dm(a),re!==null&&(he.data=re)))),(re=nS?iS(t,a):aS(t,a))&&(he=Vc($,"onBeforeInput"),0<he.length&&(De=new Tm("onBeforeInput","beforeinput",null,a,ft),Rt.push({event:De,listeners:he}),De.data=re)),n1(Rt,t,$,a,ft)}xv(Rt,n)})}function al(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Vc(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=bo(t,a),c!=null&&s.unshift(al(t,c,u)),c=bo(t,n),c!=null&&s.push(al(t,c,u))),t.tag===3)return s;t=t.return}return[]}function r1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sv(t,n,a,s,c){for(var u=n._reactName,_=[];a!==null&&a!==s;){var b=a,V=b.alternate,$=b.stateNode;if(b=b.tag,V!==null&&V===s)break;b!==5&&b!==26&&b!==27||$===null||(V=$,c?($=bo(a,u),$!=null&&_.unshift(al(a,$,V))):c||($=bo(a,u),$!=null&&_.push(al(a,$,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var o1=/\r\n?/g,l1=/\u0000|\uFFFD/g;function Mv(t){return(typeof t=="string"?t:""+t).replace(o1,`
`).replace(l1,"")}function Ev(t,n){return n=Mv(n),Mv(t)===n}function Ye(t,n,a,s,c,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||or(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&or(t,""+s);else return;break;case"className":zl(t,"class",s);break;case"tabIndex":zl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zl(t,a,s);break;case"style":_m(t,s,u);return;case"data":if(n!=="object"){zl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Pl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",c.name,c,null),Ye(t,n,"formEncType",c.formEncType,c,null),Ye(t,n,"formMethod",c.formMethod,c,null),Ye(t,n,"formTarget",c.formTarget,c,null)):(Ye(t,n,"encType",c.encType,c,null),Ye(t,n,"method",c.method,c,null),Ye(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Pl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Qi);return;case"onScroll":s!=null&&be("scroll",t);return;case"onScrollEnd":s!=null&&be("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Pl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":be("beforetoggle",t),be("toggle",t),Ol(t,"popover",s);break;case"xlinkActuate":ga(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ga(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ga(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ga(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ga(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ga(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ga(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ga(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ga(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ol(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Ry.get(a)||a,Ol(t,a,s);else return}Ie=!0}function qd(t,n,a,s,c,u){switch(a){case"style":_m(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")or(t,s);else if(typeof s=="number"||typeof s=="bigint")or(t,""+s);else return;break;case"onScroll":s!=null&&be("scroll",t);return;case"onScrollEnd":s!=null&&be("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[ne]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,c);break t}Ie=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ol(t,a,s)}return}Ie=!0}function Fn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",t),be("load",t);var s=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var _=a[u];if(_!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,u,_,a,null)}}c&&Ye(t,n,"srcSet",a.srcSet,a,null),s&&Ye(t,n,"src",a.src,a,null);return;case"input":be("invalid",t);var b=u=_=c=null,V=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":_=ft;break;case"checked":V=ft;break;case"defaultChecked":$=ft;break;case"value":u=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ye(t,n,s,ft,a,null)}}pm(t,u,b,V,$,_,c,!1);return;case"select":be("invalid",t),s=_=u=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":u=b;break;case"defaultValue":_=b;break;case"multiple":s=b;default:Ye(t,n,c,b,a,null)}n=u,a=_,t.multiple=!!s,n!=null?rr(t,!!s,n,!1):a!=null&&rr(t,!!s,a,!0);return;case"textarea":be("invalid",t),u=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":s=b;break;case"defaultValue":c=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ye(t,n,_,b,a,null)}gm(t,s,c,u);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ye(t,n,V,s,a,null)}return;case"dialog":be("beforetoggle",t),be("toggle",t),be("cancel",t),be("close",t);break;case"iframe":case"object":be("load",t);break;case"video":case"audio":for(s=0;s<il.length;s++)be(il[s],t);break;case"image":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"embed":case"source":case"link":be("error",t),be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,$,s,a,null)}return;default:if(Wu(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&qd(t,n,ft,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ye(t,n,b,s,a,null))}var c1={};function u1(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,_=null,b=null,V=null,$=null,ft=null;for(lt in a){var Rt=a[lt];if(a.hasOwnProperty(lt)&&Rt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":V=Rt;default:s.hasOwnProperty(lt)||Ye(t,n,lt,null,s,Rt)}}for(var K in s){var lt=s[K];if(Rt=a[K],s.hasOwnProperty(K)&&(lt!=null||Rt!=null))switch(K){case"type":lt!==Rt&&(Ie=!0),u=lt;break;case"name":lt!==Rt&&(Ie=!0),c=lt;break;case"checked":lt!==Rt&&(Ie=!0),$=lt;break;case"defaultChecked":lt!==Rt&&(Ie=!0),ft=lt;break;case"value":lt!==Rt&&(Ie=!0),_=lt;break;case"defaultValue":lt!==Rt&&(Ie=!0),b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==Rt&&Ye(t,n,K,lt,s,Rt)}}Xu(t,_,b,V,$,ft,u,c);return;case"select":lt=_=b=K=null;for(u in a)if(V=a[u],a.hasOwnProperty(u)&&V!=null)switch(u){case"value":break;case"multiple":lt=V;default:s.hasOwnProperty(u)||Ye(t,n,u,null,s,V)}for(c in s)if(u=s[c],V=a[c],s.hasOwnProperty(c)&&(u!=null||V!=null))switch(c){case"value":u!==V&&(Ie=!0),K=u;break;case"defaultValue":u!==V&&(Ie=!0),b=u;break;case"multiple":u!==V&&(Ie=!0),_=u;default:u!==V&&Ye(t,n,c,u,s,V)}n=b,a=_,s=lt,K!=null?rr(t,!!a,K,!1):!!s!=!!a&&(n!=null?rr(t,!!a,n,!0):rr(t,!!a,a?[]:"",!1));return;case"textarea":lt=K=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ye(t,n,b,null,s,c)}for(_ in s)if(c=s[_],u=a[_],s.hasOwnProperty(_)&&(c!=null||u!=null))switch(_){case"value":c!==u&&(Ie=!0),K=c;break;case"defaultValue":c!==u&&(Ie=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&Ye(t,n,_,c,s,u)}mm(t,K,lt);return;case"option":for(var qt in a)if(K=a[qt],a.hasOwnProperty(qt)&&K!=null&&!s.hasOwnProperty(qt))switch(qt){case"selected":t.selected=!1;break;default:Ye(t,n,qt,null,s,K)}for(V in s)if(K=s[V],lt=a[V],s.hasOwnProperty(V)&&K!==lt&&(K!=null||lt!=null))switch(V){case"selected":K!==lt&&(Ie=!0),t.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Ye(t,n,V,K,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)K=a[ie],a.hasOwnProperty(ie)&&K!=null&&!s.hasOwnProperty(ie)&&Ye(t,n,ie,null,s,K);for($ in s)if(K=s[$],lt=a[$],s.hasOwnProperty($)&&K!==lt&&(K!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,n));break;default:Ye(t,n,$,K,s,lt)}return;default:if(Wu(n)){for(var ve in a)K=a[ve],a.hasOwnProperty(ve)&&K!==void 0&&!s.hasOwnProperty(ve)&&qd(t,n,ve,void 0,s,K);for(ft in s)K=s[ft],lt=a[ft],!s.hasOwnProperty(ft)||K===lt||K===void 0&&lt===void 0||qd(t,n,ft,K,s,lt);return}}for(var J in a)K=a[J],a.hasOwnProperty(J)&&K!=null&&!s.hasOwnProperty(J)&&Ye(t,n,J,null,s,K);for(Rt in s)K=s[Rt],lt=a[Rt],!s.hasOwnProperty(Rt)||K===lt||K==null&&lt==null||Ye(t,n,Rt,K,s,lt)}function Tv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function f1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],u=c.transferSize,_=c.initiatorType,b=c.duration;if(u&&b&&Tv(_)){for(_=0,b=c.responseEnd,s+=1;s<a.length;s++){var V=a[s],$=V.startTime;if($>b)break;var ft=V.transferSize,Rt=V.initiatorType;ft&&Tv(Rt)&&(V=V.responseEnd,_+=ft*(V<b?1:(b-$)/(V-$)))}if(--s,n+=8*(u+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wd=null,Yd=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function bv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Av(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Rv(t,n,a,s){return a=sl(a).createElement(t),a[Gt]=s,a[ne]=n,Fn(a,t,n),Pe(a),a}function Zd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kd=null;function d1(){var t=window.event;return t&&t.type==="popstate"?t===Kd?!1:(Kd=t,!0):(Kd=null,!1)}var Qd=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,wv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Qd,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(t){return Cv.resolve(null).then(t).catch(m1)}:Qd;function m1(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function Dv(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),jr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")sh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,sh(a);for(var u=a.firstChild;u;){var _=u.nextSibling,b=u.nodeName;u[Fe]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=_}}else a==="body"&&sh(t.ownerDocument.body);a=c}while(a);jr(n)}function Nv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Uv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Lv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function g1(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Jd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return g1(n,a,t)}function v1(t){return t.documentElement.clientHeight}function _1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function x1(t,n,a,s,c,u,_,b,V){var $=n.nodeType===9?n:n.ownerDocument;try{var ft=$.startViewTransition({update:function(){var K=$.defaultView,lt=K.navigation&&K.navigation.transition,qt=$.fonts.status;s();var ie=[];if(qt==="loaded"&&(v1($),$.fonts.status==="loading"&&ie.push($.fonts.ready)),qt=ie.length,t!==null)for(var ve=t.suspenseyImages,J=0,W=0;W<ve.length;W++){var at=ve[W];if(!at.complete){var bt=at.getBoundingClientRect();if(0<bt.bottom&&0<bt.right&&bt.top<K.innerHeight&&bt.left<K.innerWidth){if(J+=t_(at),J>Xc){ie.length=qt;break}at=new Promise(_1.bind(at)),ie.push(at)}}}if(0<ie.length)return K=Promise.race([Promise.all(ie),new Promise(function(te){return setTimeout(te,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,K]):K).then(u,u);if(c(),lt)return lt.finished.then(u,u);u()},types:a});$.__reactViewTransition=ft;var Rt=[];return ft.ready.then(function(){for(var K=$.documentElement.getAnimations({subtree:!0}),lt=0;lt<K.length;lt++){var qt=K[lt],ie=qt.effect,ve=ie.pseudoElement;if(ve!=null&&ve.startsWith("::view-transition")){Rt.push(qt),qt=ie.getKeyframes();for(var J=ve=void 0,W=!0,at=0;at<qt.length;at++){var bt=qt[at],te=bt.width;if(ve===void 0)ve=te;else if(ve!==te){W=!1;break}if(te=bt.height,J===void 0)J=te;else if(J!==te){W=!1;break}delete bt.width,delete bt.height,bt.transform==="none"&&delete bt.transform}W&&ve!==void 0&&J!==void 0&&(ie.setKeyframes(qt),W=getComputedStyle(ie.target,ie.pseudoElement),W.width!==ve||W.height!==J)&&(W=qt[0],W.width=ve,W.height=J,W=qt[qt.length-1],W.width=ve,W.height=J,ie.setKeyframes(qt))}}_()},function(K){$.__reactViewTransition===ft&&($.__reactViewTransition=null);try{if(typeof K=="object"&&K!==null)switch(K.name){case"InvalidStateError":(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null)}K!==null&&V(K)}finally{s(),c(),_()}}),ft.finished.finally(function(){for(var K=0;K<Rt.length;K++)Rt[K].cancel();$.__reactViewTransition===ft&&($.__reactViewTransition=null),b()}),ft}catch{return s(),c(),_(),null}}function Gs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:B({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[c])}return s},Gs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ov(t){return{name:t,group:new Gs("group",t),imagePair:new Gs("image-pair",t),old:new Gs("old",t),new:new Gs("new",t)}}function vi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Pv(u,t,n,a)===-1){var _=this,b=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(b=function(V){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,V):n.handleEvent(V)}),s!==null&&(c=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Br(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:b,cleanup:c}),g(this._fragmentFiber.child,!1,y1,t,b,s)}this._eventListeners=u}};function y1(t,n,a,s){return y(t).addEventListener(n,a,s),!1}vi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Pv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var u=c.cleanup;c=Br(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,S1,t,a,c),s.splice(n,1),u!==null&&u()}};function S1(t,n,a,s){return y(t).removeEventListener(n,a,s),!1}function Br(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function zv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Pv(t,n,a,s){if(t.length===0)return-1;s=zv(s);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&zv(u.optionsOrUseCapture)===s)return c}return-1}vi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];s.addEventListener(u.type,u.attachedListener,Br(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],s.removeEventListener(u.type,u.attachedListener,Br(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},vi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,Iv,t,void 0,void 0)};function Iv(t,n){return t.tag===6?!1:(t=y(t),L1(t,n))}vi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,$d,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Iv(n[a],t);a--);};function $d(t,n){return n.push(t),!1}vi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=y(t),t=sl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,M1,t,void 0,void 0))};function M1(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,E1,t,void 0,void 0)};function E1(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}vi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,T1,t,void 0,void 0);for(var a=n=0;a<ji.length;a++){var s=ji[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):ji[n++]=s}ji.length=n}};function T1(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var ji=[],th=!1;function b1(t,n,a){ji.push({fragmentInstance:t,observer:n,instance:a}),th||(th=!0,O1(function(){th=!1;var s=ji;ji=[];for(var c=0;c<s.length;c++){var u=s[c];u.observer.unobserve(u.instance)}}))}vi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,A1,t,void 0,void 0),t};function A1(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}vi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},vi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,$d,a,void 0,void 0);var s=y(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),c=y(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),b=c.compareDocumentPosition(t),V=_&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=s&&u&&_&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&c===t||V||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||R1(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function R1(t,n,a,s,c){var u=He(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=v(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=H(a,u,O),n===null?n=!1:(g(n,!0,L,u,a),u=S,S=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=H(s,u,O),n===null?n=!1:(g(n,!0,R,u,s),u=S,U=S=null,n=u!==null)),n):!1}function Bv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,$d,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=y(s),Bv(t,a);return}if(s=y(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=y(c),Bv(c,a)):y(c).scrollIntoView(t),s+=a?-1:1}};function C1(t,n){return t=y(t),Fv(t,n),!1}function Fv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Hv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Br(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var _=0,b=0;b<ji.length;b++){var V=ji[b];(V.fragmentInstance!==n||V.observer!==u||V.instance!==t)&&(ji[_++]=V)}ji.length=_,u.observe(t)}),Fv(t,n))}function w1(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Br(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?b1(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),le(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function D1(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Fe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ni(t.nextSibling),t===null)break}return null}function N1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ni(t.nextSibling),t===null))return null;return t}function Gv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ni(t.nextSibling),t===null))return null;return t}function nh(t){return t.data==="$?"||t.data==="$~"}function ih(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function U1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ni(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ah=null;function Vv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ni(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function kv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function L1(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function O1(t){wv(function(){wv(function(n){return t(n)})})}function jv(t,n,a){switch(n=sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xv(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ye(t,n,s,null,c1,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Qi&&(t.onclick=null),le(t)}function sh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);le(t)}var Ui=new Map,qv=new Set;function rl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var wa=Dt.d;Dt.d={f:z1,r:P1,D:I1,C:B1,L:F1,m:H1,X:V1,S:G1,M:k1};function z1(){var t=wa.f(),n=Pc();return t||n}function P1(t){var n=ye(t);n!==null&&n.tag===5&&n.type==="form"?Y0(n):wa.r(t)}var Fr=typeof document>"u"?null:document;function Wv(t,n,a){var s=Fr;if(s&&typeof n=="string"&&n){var c=Ti(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),qv.has(c)||(qv.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Fn(n,"link",t),Pe(n),s.head.appendChild(n)))}}function I1(t){wa.D(t),Wv("dns-prefetch",t,null)}function B1(t,n){wa.C(t,n),Wv("preconnect",t,n)}function F1(t,n,a){wa.L(t,n,a);var s=Fr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ti(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ti(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ti(a.imageSizes)+'"]')):c+='[href="'+Ti(t)+'"]';var u=c;switch(n){case"style":u=Hr(t);break;case"script":u=Gr(t)}if(!(Ui.has(u)||(t=B({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ui.set(u,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ol(u))||n==="script"&&s.querySelector(ll(u))))){var _=s.createElement("link");Fn(_,"link",t),n==="style"&&(_[ze]=!0,_.onload=_.onerror=function(){Fa(_)}),Pe(_),s.head.appendChild(_)}}}function H1(t,n){wa.m(t,n);var a=Fr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ti(s)+'"][href="'+Ti(t)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Gr(t)}if(!Ui.has(u)&&(t=B({rel:"modulepreload",href:t},n),Ui.set(u,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(u)))return}s=a.createElement("link"),Fn(s,"link",t),Pe(s),a.head.appendChild(s)}}}function G1(t,n,a){wa.S(t,n,a);var s=Fr;if(s&&t){var c=ci(s).hoistableStyles,u=Hr(t);n=n||"default";var _=c.get(u);if(!_){var b={loading:0,preload:null};if(_=s.querySelector(ol(u)))b.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ui.get(u))&&rh(t,a);var V=_=s.createElement("link");Pe(V),Fn(V,"link",t),V._p=new Promise(function($,ft){V.onload=$,V.onerror=ft}),V.addEventListener("load",function(){b.loading|=1}),V.addEventListener("error",function(){b.loading|=2}),b.loading|=4,kc(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:b},c.set(u,_)}}}function V1(t,n){wa.X(t,n);var a=Fr;if(a&&t){var s=ci(a).hoistableScripts,c=Gr(t),u=s.get(c);u||(u=a.querySelector(ll(c)),u||(t=B({src:t,async:!0},n),(n=Ui.get(c))&&oh(t,n),u=a.createElement("script"),Pe(u),Fn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function k1(t,n){wa.M(t,n);var a=Fr;if(a&&t){var s=ci(a).hoistableScripts,c=Gr(t),u=s.get(c);u||(u=a.querySelector(ll(c)),u||(t=B({src:t,async:!0,type:"module"},n),(n=Ui.get(c))&&oh(t,n),u=a.createElement("script"),Pe(u),Fn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function Yv(t,n,a,s){var c=(c=Ee.current)?rl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Hr(a.href),n=ci(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Hr(a.href);var u=ci(c).hoistableStyles,_=u.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,_),(u=c.querySelector(ol(t)))?u._p||(_.instance=u,_.state.loading=5):(u=Ui.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ui.set(t,u)),j1(c,t,u,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Gr(a),n=ci(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Hr(t){return'href="'+Ti(t)+'"'}function ol(t){return'link[rel="stylesheet"]['+t+"]"}function Zv(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function j1(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ze]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[ze]=!0,n.onload=n.onerror=Fa.bind(null,n),Fn(n,"link",a),Pe(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Gr(t){return'[src="'+Ti(t)+'"]'}function ll(t){return"script[async]"+t}function Kv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ti(a.href)+'"]');if(s)return n.instance=s,Pe(s),s;var c=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Pe(s),Fn(s,"style",c),kc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Hr(a.href);var u=t.querySelector(ol(c));if(u)return n.state.loading|=4,n.instance=u,Pe(u),u;s=Zv(a),(c=Ui.get(c))&&rh(s,c),u=(t.ownerDocument||t).createElement("link"),Pe(u);var _=u;return _._p=new Promise(function(b,V){_.onload=b,_.onerror=V}),Fn(u,"link",s),n.state.loading|=4,kc(u,a.precedence,t),n.instance=u;case"script":return u=Gr(a.src),(c=t.querySelector(ll(u)))?(n.instance=c,Pe(c),c):(s=a,(c=Ui.get(u))&&(s=B({},a),oh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Pe(c),Fn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,kc(s,a.precedence,t));return n.instance}function kc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,_=0;_<s.length;_++){var b=s[_];if(b.dataset.precedence===n)u=b;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function rh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function oh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jc=null;function Qv(t,n,a){if(jc===null){var s=new Map,c=jc=new Map;c.set(a,s)}else c=jc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[Fe]||u[Gt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var _=u.getAttribute(n)||"";_=t+_;var b=s.get(_);b?b.push(u):s.set(_,[u])}}return s}function lh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function X1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function $v(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function t_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function e_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=t_(n),t.suspenseyImages.push(n)),t=Y1.bind(t),n.decode().then(t,t))}function q1(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Hr(s.href),u=n.querySelector(ol(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Pe(u);return}u=n.ownerDocument||n,s=Zv(s),(c=Ui.get(c))&&rh(s,c),u=u.createElement("link"),Pe(u);var _=u;_._p=new Promise(function(b,V){_.onload=b,_.onerror=V}),Fn(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xc=0;function W1(t,n){return t.stylesheets&&t.count===0&&Wc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Wc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Xc===0&&(Xc=62500*f1());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Xc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function n_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Wc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function cl(){this.count--,n_(this)}function Y1(){this.imgCount--,n_(this)}var qc=null;function Wc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qc=new Map,n.forEach(Z1,t),qc=null,cl.call(t))}function Z1(t,n){if(!(n.state.loading&4)){var a=qc.get(t);if(a)var s=a.get(null);else{a=new Map,qc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var _=c[u];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),u=a.get(_)||s,u===s&&a.set(null,c),a.set(_,c),this.count++,s=cl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Vr={$$typeof:ht,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function K1(t,n,a,s,c,u,_,b,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=an(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.hiddenUpdates=an(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.transitionTypes=null,this.incompleteTransitions=new Map}function i_(t,n,a,s,c,u,_,b,V,$,ft,Rt){return t=new K1(t,n,a,_,V,$,ft,Rt,b),n=1,u===!0&&(n|=24),u=ei(3,null,null,n),t.current=u,u.stateNode=t,n=Ef(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Rf(u),t}function a_(t){return t?(t=pr,t):pr}function s_(t,n,a,s,c,u){c=a_(c),s.context===null?s.context=c:s.pendingContext=c,s=Ya(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Za(t,s,n),a!==null&&(si(a,t,n),Ho(a,t,n))}function r_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ch(t,n){r_(t,n),(t=t.alternate)&&r_(t,n)}function o_(t){if(t.tag===13||t.tag===31){var n=Ts(t,67108864);n!==null&&si(n,t,67108864),ch(t,67108864)}}function l_(t){if(t.tag===13||t.tag===31){var n=gi();n=yt(n);var a=Ts(t,n);a!==null&&si(a,t,n),ch(t,n)}}var kr=!0;function Q1(t,n,a,s){var c=dt.T;dt.T=null;var u=Dt.p;try{Dt.p=2,uh(t,n,a,s)}finally{Dt.p=u,dt.T=c}}function J1(t,n,a,s){var c=dt.T;dt.T=null;var u=Dt.p;try{Dt.p=8,uh(t,n,a,s)}finally{Dt.p=u,dt.T=c}}function uh(t,n,a,s){if(kr){var c=fh(s);if(c===null)Xd(t,n,s,Yc,a),u_(t,s);else if(tM(c,t,n,a,s))s.stopPropagation();else if(u_(t,s),n&4&&-1<$1.indexOf(t)){for(;c!==null;){var u=ye(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var _=rn(u.pendingLanes);if(_!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var V=1<<31-Qe(_);b.entanglements[1]|=V,_&=~V}oa(u),(Ge&6)===0&&(Lc=I()+500,nl(0))}}break;case 31:case 13:b=Ts(u,2),b!==null&&si(b,u,2),Pc(),ch(u,2)}if(u=fh(s),u===null&&Xd(t,n,s,Yc,a),u===c)break;c=u}c!==null&&s.stopPropagation()}else Xd(t,n,s,null,a)}}function fh(t){return t=Zu(t),dh(t)}var Yc=null;function dh(t){if(Yc=null,t=He(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yc=t,null}function c_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Nt:return 2;case j:return 8;case ut:case vt:return 32;case It:return 268435456;default:return 32}default:return 32}}var hh=!1,os=null,ls=null,cs=null,ul=new Map,fl=new Map,us=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u_(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function dl(t,n,a,s,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},n!==null&&(n=ye(n),n!==null&&o_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function tM(t,n,a,s,c){switch(n){case"focusin":return os=dl(os,t,n,a,s,c),!0;case"dragenter":return ls=dl(ls,t,n,a,s,c),!0;case"mouseover":return cs=dl(cs,t,n,a,s,c),!0;case"pointerover":var u=c.pointerId;return ul.set(u,dl(ul.get(u)||null,t,n,a,s,c)),!0;case"gotpointercapture":return u=c.pointerId,fl.set(u,dl(fl.get(u)||null,t,n,a,s,c)),!0}return!1}function f_(t){var n=He(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Zt(t.priority,function(){l_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Zt(t.priority,function(){l_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=fh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Yu=s,a.target.dispatchEvent(s),Yu=null}else return n=ye(a),n!==null&&o_(n),t.blockedOn=a,!1;n.shift()}return!0}function d_(t,n,a){Zc(t)&&a.delete(n)}function eM(){hh=!1,os!==null&&Zc(os)&&(os=null),ls!==null&&Zc(ls)&&(ls=null),cs!==null&&Zc(cs)&&(cs=null),ul.forEach(d_),fl.forEach(d_)}function Kc(t,n){t.blockedOn===n&&(t.blockedOn=null,hh||(hh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,eM)))}var Qc=null;function h_(t){Qc!==t&&(Qc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Qc===t&&(Qc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(dh(s||a)===null)continue;break}var u=ye(a);u!==null&&(t.splice(n,3),n-=3,Yf(u,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function jr(t){function n(V){return Kc(V,t)}os!==null&&Kc(os,t),ls!==null&&Kc(ls,t),cs!==null&&Kc(cs,t),ul.forEach(n),fl.forEach(n);for(var a=0;a<us.length;a++){var s=us[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)f_(a),a.blockedOn===null&&us.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],u=a[s+1],_=c[ne]||null;if(typeof u=="function")_||h_(a);else if(_){var b=null;if(u&&u.hasAttribute("formAction")){if(c=u,_=u[ne]||null)b=_.formAction;else if(dh(c)!==null)continue}else b=_.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),h_(a)}}}function p_(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ph(t){this._internalRoot=t}Jc.prototype.render=ph.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=gi();s_(a,s,t,n,null,null)},Jc.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;s_(t.current,2,null,t,null,null),Pc(),n[ue]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,t),a===0&&f_(t)}};var m_=e.version;if(m_!=="19.3.1")throw Error(r(527,m_,"19.3.1"));Dt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var nM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:dt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$c.isDisabled&&$c.supportsFiber)try{de=$c.inject(nM),Ce=$c}catch{}}return pl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=ag,u=sg,_=rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=i_(t,1,!1,null,null,a,s,null,c,u,_,p_),t[ue]=n.current,jd(t),new ph(n)},pl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",u=ag,_=sg,b=rg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=i_(t,1,!0,n,a??null,s,c,V,u,_,b,p_),n.context=a_(null),a=n.current,s=gi(),s=yt(s),c=Ya(s),c.callback=null,Za(a,c,s),a=s,n.current.lanes=a,On(n,a),oa(n),t[ue]=n.current,jd(t),new Jc(n)},pl.version="19.3.1",pl}var b_;function pM(){if(b_)return vh.exports;b_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vh.exports=hM(),vh.exports}var mM=pM();const gM=Bx(mM);var vM=Fx();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hx=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Yt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:f,iconNode:d,...h},m)=>Yt.createElement("svg",{ref:m,...xM,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:Hx("lucide",l),...h},[...d.map(([p,x])=>Yt.createElement(p,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(o,e)=>{const i=Yt.forwardRef(({className:r,...l},f)=>Yt.createElement(yM,{ref:f,iconNode:e,className:Hx(`lucide-${_M(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=Re("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=Re("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=Re("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=Re("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=Re("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=Re("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Re("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=Re("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Re("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=Re("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Re("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=Re("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=Re("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=Re("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=Re("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Re("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Re("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Re("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Re("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=Re("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Re("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=Re("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Re("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=Re("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Re("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Re("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=Re("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Re("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Re("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Re("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=Re("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Re("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=Re("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=Re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kp="180",XM=0,R_=1,qM=2,kx=1,jx=2,za=3,Ss=0,Jn=1,ca=2,xs=0,uo=1,C_=2,w_=3,D_=4,WM=5,Ks=100,YM=101,ZM=102,KM=103,QM=104,JM=200,$M=201,tE=202,eE=203,sp=204,rp=205,nE=206,iE=207,aE=208,sE=209,rE=210,oE=211,lE=212,cE=213,uE=214,op=0,lp=1,cp=2,po=3,up=4,fp=5,dp=6,hp=7,Xx=0,fE=1,dE=2,ys=0,hE=1,pE=2,mE=3,qx=4,gE=5,vE=6,_E=7,Wx=300,mo=301,go=302,pp=303,mp=304,Vu=306,gp=1e3,$s=1001,vp=1002,Mi=1003,xE=1004,su=1005,ua=1006,Th=1007,tr=1008,ha=1009,Yx=1010,Zx=1011,bl=1012,Qp=1013,er=1014,fa=1015,Nl=1016,Jp=1017,$p=1018,Al=1020,Kx=35902,Qx=35899,Jx=1021,$x=1022,Zi=1023,Rl=1026,Cl=1027,tm=1028,em=1029,ty=1030,nm=1031,im=1033,Nu=33776,Uu=33777,Lu=33778,Ou=33779,_p=35840,xp=35841,yp=35842,Sp=35843,Mp=36196,Ep=37492,Tp=37496,bp=37808,Ap=37809,Rp=37810,Cp=37811,wp=37812,Dp=37813,Np=37814,Up=37815,Lp=37816,Op=37817,zp=37818,Pp=37819,Ip=37820,Bp=37821,Fp=36492,Hp=36494,Gp=36495,Vp=36283,kp=36284,jp=36285,Xp=36286,yE=3200,SE=3201,ey=0,ME=1,_s="",yi="srgb",vo="srgb-linear",Iu="linear",Ke="srgb",Xr=7680,N_=519,EE=512,TE=513,bE=514,ny=515,AE=516,RE=517,CE=518,wE=519,U_=35044,DE=35048,L_="300 es",da=2e3,Bu=2001;class yo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,qp=180/Math.PI;function Ul(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[o&255]+kn[o>>8&255]+kn[o>>16&255]+kn[o>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function Ue(o,e,i){return Math.max(e,Math.min(i,o))}function NE(o,e){return(o%e+e)%e}function Ah(o,e,i){return(1-i)*o+i*e}function ml(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ri(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,i=0){Le.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*l+e.x,this.y=f*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ll{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3];const v=f[d+0],E=f[d+1],T=f[d+2],C=f[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h===1){e[i+0]=v,e[i+1]=E,e[i+2]=T,e[i+3]=C;return}if(g!==C||m!==v||p!==E||x!==T){let y=1-h;const S=m*v+p*E+x*T+g*C,U=S>=0?1:-1,L=1-S*S;if(L>Number.EPSILON){const O=Math.sqrt(L),H=Math.atan2(O,S*U);y=Math.sin(y*H)/O,h=Math.sin(h*H)/O}const R=h*U;if(m=m*y+v*R,p=p*y+E*R,x=x*y+T*R,g=g*y+C*R,y===1-h){const O=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=O,p*=O,x*=O,g*=O}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,f,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=f[d],v=f[d+1],E=f[d+2],T=f[d+3];return e[i]=h*T+x*g+m*E-p*v,e[i+1]=m*T+x*v+p*g-h*E,e[i+2]=p*T+x*E+h*v-m*g,e[i+3]=x*T-h*g-m*v-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(f/2),v=m(r/2),E=m(l/2),T=m(f/2);switch(d){case"XYZ":this._x=v*x*g+p*E*T,this._y=p*E*g-v*x*T,this._z=p*x*T+v*E*g,this._w=p*x*g-v*E*T;break;case"YXZ":this._x=v*x*g+p*E*T,this._y=p*E*g-v*x*T,this._z=p*x*T-v*E*g,this._w=p*x*g+v*E*T;break;case"ZXY":this._x=v*x*g-p*E*T,this._y=p*E*g+v*x*T,this._z=p*x*T+v*E*g,this._w=p*x*g-v*E*T;break;case"ZYX":this._x=v*x*g-p*E*T,this._y=p*E*g+v*x*T,this._z=p*x*T-v*E*g,this._w=p*x*g+v*E*T;break;case"YZX":this._x=v*x*g+p*E*T,this._y=p*E*g+v*x*T,this._z=p*x*T-v*E*g,this._w=p*x*g-v*E*T;break;case"XZY":this._x=v*x*g-p*E*T,this._y=p*E*g-v*x*T,this._z=p*x*T+v*E*g,this._w=p*x*g+v*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],v=r+h+g;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(x-m)*E,this._y=(f-p)*E,this._z=(d-l)*E}else if(r>h&&r>g){const E=2*Math.sqrt(1+r-h-g);this._w=(x-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(f+p)/E}else if(h>g){const E=2*Math.sqrt(1+h-r-g);this._w=(f-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+g-r-h);this._w=(d-l)/E,this._x=(f+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-f*m,this._y=l*x+d*m+f*h-r*p,this._z=f*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=f,this;const m=1-h*h;if(m<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,h),g=Math.sin((1-i)*x)/p,v=Math.sin(i*x)/p;return this._w=d*g+this._w*v,this._x=r*g+this._x*v,this._y=l*g+this._y*v,this._z=f*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(O_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(O_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-f*l),g=2*(f*r-d*i);return this.x=i+m*p+d*g-h*x,this.y=r+m*x+h*p-f*g,this.z=l+m*g+f*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-f*h,this.y=f*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new it,O_=new Ll;class _e{constructor(e,i,r,l,f,d,h,m,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,m,p)}set(e,i,r,l,f,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=f,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],v=r[2],E=r[5],T=r[8],C=l[0],y=l[3],S=l[6],U=l[1],L=l[4],R=l[7],O=l[2],H=l[5],B=l[8];return f[0]=d*C+h*U+m*O,f[3]=d*y+h*L+m*H,f[6]=d*S+h*R+m*B,f[1]=p*C+x*U+g*O,f[4]=p*y+x*L+g*H,f[7]=p*S+x*R+g*B,f[2]=v*C+E*U+T*O,f[5]=v*y+E*L+T*H,f[8]=v*S+E*R+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*f*x+r*h*m+l*f*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*d-h*p,v=h*m-x*f,E=p*f-d*m,T=i*g+r*v+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(l*p-x*r)*C,e[2]=(h*r-l*d)*C,e[3]=v*C,e[4]=(x*i-l*m)*C,e[5]=(l*f-h*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Ch.makeScale(e,i)),this}rotate(e){return this.premultiply(Ch.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new _e;function iy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function UE(){const o=Fu("canvas");return o.style.display="block",o}const z_={};function wl(o){o in z_||(z_[o]=!0,console.warn(o))}function LE(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const P_=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OE(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ke&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ke&&(l.r=fo(l.r),l.g=fo(l.g),l.b=fo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?Iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return wl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return wl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vo]:{primaries:e,whitePoint:r,transfer:Iu,toXYZ:P_,fromXYZ:I_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:r,transfer:Ke,toXYZ:P_,fromXYZ:I_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Be=OE();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qr;class zE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qr===void 0&&(qr=Fu("canvas")),qr.width=e.width,qr.height=e.height;const l=qr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Fu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PE=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(wh(l[d].image)):f.push(wh(l[d]))}else f=wh(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function wh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IE=0;const Dh=new it;class $n extends yo{constructor(e=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,r=$s,l=$s,f=ua,d=tr,h=Zi,m=ha,p=$n.DEFAULT_ANISOTROPY,x=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Ul(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case $s:e.x=e.x<0?0:1;break;case vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case $s:e.y=e.y<0?0:1;break;case vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Wx;$n.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,i=0,r=0,l=1){hn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const m=e.elements,p=m[0],x=m[4],g=m[8],v=m[1],E=m[5],T=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+C)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,R=(E+1)/2,O=(S+1)/2,H=(x+v)/4,B=(g+C)/4,G=(T+y)/4;return L>R&&L>O?L<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(L),l=H/r,f=B/r):R>O?R<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(R),r=H/l,f=G/l):O<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(O),r=B/f,l=G/f),this.set(r,l,f,i),this}let U=Math.sqrt((y-T)*(y-T)+(g-C)*(g-C)+(v-x)*(v-x));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(g-C)/U,this.z=(v-x)/U,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this.w=Ue(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this.w=Ue(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends yo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ua,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new hn(0,0,e,i),this.scissorTest=!1,this.viewport=new hn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new $n(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ua,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new am(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends BE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ay extends $n{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FE extends $n{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Xi):Xi.fromBufferAttribute(f,d),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ru.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ru.copy(r.boundingBox)),ru.applyMatrix4(e.matrixWorld),this.union(ru)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),ou.subVectors(this.max,gl),Wr.subVectors(e.a,gl),Yr.subVectors(e.b,gl),Zr.subVectors(e.c,gl),ds.subVectors(Yr,Wr),hs.subVectors(Zr,Yr),Vs.subVectors(Wr,Zr);let i=[0,-ds.z,ds.y,0,-hs.z,hs.y,0,-Vs.z,Vs.y,ds.z,0,-ds.x,hs.z,0,-hs.x,Vs.z,0,-Vs.x,-ds.y,ds.x,0,-hs.y,hs.x,0,-Vs.y,Vs.x,0];return!Nh(i,Wr,Yr,Zr,ou)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,Wr,Yr,Zr,ou))?!1:(lu.crossVectors(ds,hs),i=[lu.x,lu.y,lu.z],Nh(i,Wr,Yr,Zr,ou))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new it,new it,new it,new it,new it,new it,new it,new it],Xi=new it,ru=new ar,Wr=new it,Yr=new it,Zr=new it,ds=new it,hs=new it,Vs=new it,gl=new it,ou=new it,lu=new it,ks=new it;function Nh(o,e,i,r,l){for(let f=0,d=o.length-3;f<=d;f+=3){ks.fromArray(o,f);const h=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),m=e.dot(ks),p=i.dot(ks),x=r.dot(ks);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const HE=new ar,vl=new it,Uh=new it;class So{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):HE.setFromPoints(e).getCenter(r);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Uh)),this.expandByPoint(vl.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Na=new it,Lh=new it,cu=new it,ps=new it,Oh=new it,uu=new it,zh=new it;class sy{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Lh.copy(e).add(i).multiplyScalar(.5),cu.copy(i).sub(e).normalize(),ps.copy(this.origin).sub(Lh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(cu),h=ps.dot(this.direction),m=-ps.dot(cu),p=ps.lengthSq(),x=Math.abs(1-d*d);let g,v,E,T;if(x>0)if(g=d*m-h,v=d*h-m,T=f*x,g>=0)if(v>=-T)if(v<=T){const C=1/x;g*=C,v*=C,E=g*(g+d*v+2*h)+v*(d*g+v+2*m)+p}else v=f,g=Math.max(0,-(d*v+h)),E=-g*g+v*(v+2*m)+p;else v=-f,g=Math.max(0,-(d*v+h)),E=-g*g+v*(v+2*m)+p;else v<=-T?(g=Math.max(0,-(-d*f+h)),v=g>0?-f:Math.min(Math.max(-f,-m),f),E=-g*g+v*(v+2*m)+p):v<=T?(g=0,v=Math.min(Math.max(-f,-m),f),E=v*(v+2*m)+p):(g=Math.max(0,-(d*f+h)),v=g>0?f:Math.min(Math.max(-f,-m),f),E=-g*g+v*(v+2*m)+p);else v=d>0?-f:f,g=Math.max(0,-(d*v+h)),E=-g*g+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Lh).addScaledVector(cu,v),E}intersectSphere(e,i){Na.subVectors(e.center,this.origin);const r=Na.dot(this.direction),l=Na.dot(Na)-r*r,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(f=(e.min.y-v.y)*x,d=(e.max.y-v.y)*x):(f=(e.max.y-v.y)*x,d=(e.min.y-v.y)*x),r>d||f>l||((f>r||isNaN(r))&&(r=f),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,r,l,f){Oh.subVectors(i,e),uu.subVectors(r,e),zh.crossVectors(Oh,uu);let d=this.direction.dot(zh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ps.subVectors(this.origin,e);const m=h*this.direction.dot(uu.crossVectors(ps,uu));if(m<0)return null;const p=h*this.direction.dot(Oh.cross(ps));if(p<0||m+p>d)return null;const x=-h*ps.dot(zh);return x<0?null:this.at(x/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,f,d,h,m,p,x,g,v,E,T,C,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,m,p,x,g,v,E,T,C,y)}set(e,i,r,l,f,d,h,m,p,x,g,v,E,T,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=f,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=g,S[14]=v,S[3]=E,S[7]=T,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Kr.setFromMatrixColumn(e,0).length(),f=1/Kr.setFromMatrixColumn(e,1).length(),d=1/Kr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const v=d*x,E=d*g,T=h*x,C=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=E+T*p,i[5]=v-C*p,i[9]=-h*m,i[2]=C-v*p,i[6]=T+E*p,i[10]=d*m}else if(e.order==="YXZ"){const v=m*x,E=m*g,T=p*x,C=p*g;i[0]=v+C*h,i[4]=T*h-E,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=E*h-T,i[6]=C+v*h,i[10]=d*m}else if(e.order==="ZXY"){const v=m*x,E=m*g,T=p*x,C=p*g;i[0]=v-C*h,i[4]=-d*g,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*x,i[9]=C-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const v=d*x,E=d*g,T=h*x,C=h*g;i[0]=m*x,i[4]=T*p-E,i[8]=v*p+C,i[1]=m*g,i[5]=C*p+v,i[9]=E*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const v=d*m,E=d*p,T=h*m,C=h*p;i[0]=m*x,i[4]=C-v*g,i[8]=T*g+E,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=E*g+T,i[10]=v-C*g}else if(e.order==="XZY"){const v=d*m,E=d*p,T=h*m,C=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=v*g+C,i[5]=d*x,i[9]=E*g-T,i[2]=T*g-E,i[6]=h*x,i[10]=C*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GE,e,VE)}lookAt(e,i,r){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ms.crossVectors(r,_i),ms.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ms.crossVectors(r,_i)),ms.normalize(),fu.crossVectors(_i,ms),l[0]=ms.x,l[4]=fu.x,l[8]=_i.x,l[1]=ms.y,l[5]=fu.y,l[9]=_i.y,l[2]=ms.z,l[6]=fu.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],v=r[9],E=r[13],T=r[2],C=r[6],y=r[10],S=r[14],U=r[3],L=r[7],R=r[11],O=r[15],H=l[0],B=l[4],G=l[8],N=l[12],w=l[1],k=l[5],q=l[9],_t=l[13],Et=l[2],ht=l[6],Z=l[10],ct=l[14],Q=l[3],Ct=l[7],wt=l[11],Ft=l[15];return f[0]=d*H+h*w+m*Et+p*Q,f[4]=d*B+h*k+m*ht+p*Ct,f[8]=d*G+h*q+m*Z+p*wt,f[12]=d*N+h*_t+m*ct+p*Ft,f[1]=x*H+g*w+v*Et+E*Q,f[5]=x*B+g*k+v*ht+E*Ct,f[9]=x*G+g*q+v*Z+E*wt,f[13]=x*N+g*_t+v*ct+E*Ft,f[2]=T*H+C*w+y*Et+S*Q,f[6]=T*B+C*k+y*ht+S*Ct,f[10]=T*G+C*q+y*Z+S*wt,f[14]=T*N+C*_t+y*ct+S*Ft,f[3]=U*H+L*w+R*Et+O*Q,f[7]=U*B+L*k+R*ht+O*Ct,f[11]=U*G+L*q+R*Z+O*wt,f[15]=U*N+L*_t+R*ct+O*Ft,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],v=e[10],E=e[14],T=e[3],C=e[7],y=e[11],S=e[15];return T*(+f*m*g-l*p*g-f*h*v+r*p*v+l*h*E-r*m*E)+C*(+i*m*E-i*p*v+f*d*v-l*d*E+l*p*x-f*m*x)+y*(+i*p*g-i*h*E-f*d*g+r*d*E+f*h*x-r*p*x)+S*(-l*h*x-i*m*g+i*h*v+l*d*g-r*d*v+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],v=e[10],E=e[11],T=e[12],C=e[13],y=e[14],S=e[15],U=g*y*p-C*v*p+C*m*E-h*y*E-g*m*S+h*v*S,L=T*v*p-x*y*p-T*m*E+d*y*E+x*m*S-d*v*S,R=x*C*p-T*g*p+T*h*E-d*C*E-x*h*S+d*g*S,O=T*g*m-x*C*m-T*h*v+d*C*v+x*h*y-d*g*y,H=i*U+r*L+l*R+f*O;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=U*B,e[1]=(C*v*f-g*y*f-C*l*E+r*y*E+g*l*S-r*v*S)*B,e[2]=(h*y*f-C*m*f+C*l*p-r*y*p-h*l*S+r*m*S)*B,e[3]=(g*m*f-h*v*f-g*l*p+r*v*p+h*l*E-r*m*E)*B,e[4]=L*B,e[5]=(x*y*f-T*v*f+T*l*E-i*y*E-x*l*S+i*v*S)*B,e[6]=(T*m*f-d*y*f-T*l*p+i*y*p+d*l*S-i*m*S)*B,e[7]=(d*v*f-x*m*f+x*l*p-i*v*p-d*l*E+i*m*E)*B,e[8]=R*B,e[9]=(T*g*f-x*C*f-T*r*E+i*C*E+x*r*S-i*g*S)*B,e[10]=(d*C*f-T*h*f+T*r*p-i*C*p-d*r*S+i*h*S)*B,e[11]=(x*h*f-d*g*f-x*r*p+i*g*p+d*r*E-i*h*E)*B,e[12]=O*B,e[13]=(x*C*l-T*g*l+T*r*v-i*C*v-x*r*y+i*g*y)*B,e[14]=(T*h*l-d*C*l-T*r*m+i*C*m+d*r*y-i*h*y)*B,e[15]=(d*g*l-x*h*l+x*r*m-i*g*m-d*r*v+i*h*v)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,d=e.x,h=e.y,m=e.z,p=f*d,x=f*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,f*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,d){return this.set(1,r,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,p=f+f,x=d+d,g=h+h,v=f*p,E=f*x,T=f*g,C=d*x,y=d*g,S=h*g,U=m*p,L=m*x,R=m*g,O=r.x,H=r.y,B=r.z;return l[0]=(1-(C+S))*O,l[1]=(E+R)*O,l[2]=(T-L)*O,l[3]=0,l[4]=(E-R)*H,l[5]=(1-(v+S))*H,l[6]=(y+U)*H,l[7]=0,l[8]=(T+L)*B,l[9]=(y-U)*B,l[10]=(1-(v+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Kr.set(l[0],l[1],l[2]).length();const d=Kr.set(l[4],l[5],l[6]).length(),h=Kr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],qi.copy(this);const p=1/f,x=1/d,g=1/h;return qi.elements[0]*=p,qi.elements[1]*=p,qi.elements[2]*=p,qi.elements[4]*=x,qi.elements[5]*=x,qi.elements[6]*=x,qi.elements[8]*=g,qi.elements[9]*=g,qi.elements[10]*=g,i.setFromRotationMatrix(qi),r.x=f,r.y=d,r.z=h,this}makePerspective(e,i,r,l,f,d,h=da,m=!1){const p=this.elements,x=2*f/(i-e),g=2*f/(r-l),v=(i+e)/(i-e),E=(r+l)/(r-l);let T,C;if(m)T=f/(d-f),C=d*f/(d-f);else if(h===da)T=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(h===Bu)T=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,f,d,h=da,m=!1){const p=this.elements,x=2/(i-e),g=2/(r-l),v=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,C;if(m)T=1/(d-f),C=d/(d-f);else if(h===da)T=-2/(d-f),C=-(d+f)/(d-f);else if(h===Bu)T=-1/(d-f),C=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Kr=new it,qi=new nn,GE=new it(0,0,0),VE=new it(1,1,1),ms=new it,fu=new it,_i=new it,B_=new nn,F_=new Ll;class pa{constructor(e=0,i=0,r=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ue(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return B_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return F_.setFromEuler(this),this.setFromQuaternion(F_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class ry{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kE=0;const H_=new it,Qr=new Ll,Ua=new nn,du=new it,_l=new it,jE=new it,XE=new Ll,G_=new it(1,0,0),V_=new it(0,1,0),k_=new it(0,0,1),j_={type:"added"},qE={type:"removed"},Jr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Un extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new it,i=new pa,r=new Ll,l=new it(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new _e}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Qr.setFromAxisAngle(e,i),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,i){return Qr.setFromAxisAngle(e,i),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(G_,e)}rotateY(e){return this.rotateOnAxis(V_,e)}rotateZ(e){return this.rotateOnAxis(k_,e)}translateOnAxis(e,i){return H_.copy(e).applyQuaternion(this.quaternion),this.position.add(H_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(G_,e)}translateY(e){return this.translateOnAxis(V_,e)}translateZ(e){return this.translateOnAxis(k_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?du.copy(e):du.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(_l,du,this.up):Ua.lookAt(du,_l,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),Qr.setFromRotationMatrix(Ua),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j_),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qE),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j_),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,jE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];f(e.shapes,g)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(e.materials,this.material[m]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(f(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),g=d(e.shapes),v=d(e.skeletons),E=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new it(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new it,La=new it,Ih=new it,Oa=new it,$r=new it,to=new it,X_=new it,Bh=new it,Fh=new it,Hh=new it,Gh=new hn,Vh=new hn,kh=new hn;class Yi{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Wi.subVectors(e,i),l.cross(Wi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Wi.subVectors(l,i),La.subVectors(r,i),Ih.subVectors(e,i);const d=Wi.dot(Wi),h=Wi.dot(La),m=Wi.dot(Ih),p=La.dot(La),x=La.dot(Ih),g=d*p-h*h;if(g===0)return f.set(0,0,0),null;const v=1/g,E=(p*m-h*x)*v,T=(d*x-h*m)*v;return f.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(e,i,r,l,f,d,h,m){return this.getBarycoord(e,i,r,l,Oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Oa.x),m.addScaledVector(d,Oa.y),m.addScaledVector(h,Oa.z),m)}static getInterpolatedAttribute(e,i,r,l,f,d){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(e,i),Vh.fromBufferAttribute(e,r),kh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Gh,f.x),d.addScaledVector(Vh,f.y),d.addScaledVector(kh,f.z),d}static isFrontFacing(e,i,r,l){return Wi.subVectors(r,i),La.subVectors(e,i),Wi.cross(La).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Wi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let d,h;$r.subVectors(l,r),to.subVectors(f,r),Bh.subVectors(e,r);const m=$r.dot(Bh),p=to.dot(Bh);if(m<=0&&p<=0)return i.copy(r);Fh.subVectors(e,l);const x=$r.dot(Fh),g=to.dot(Fh);if(x>=0&&g<=x)return i.copy(l);const v=m*g-x*p;if(v<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector($r,d);Hh.subVectors(e,f);const E=$r.dot(Hh),T=to.dot(Hh);if(T>=0&&E<=T)return i.copy(f);const C=E*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(to,h);const y=x*T-E*g;if(y<=0&&g-x>=0&&E-T>=0)return X_.subVectors(f,l),h=(g-x)/(g-x+(E-T)),i.copy(l).addScaledVector(X_,h);const S=1/(y+C+v);return d=C*S,h=v*S,i.copy(r).addScaledVector($r,d).addScaledVector(to,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},hu={h:0,s:0,l:0};function jh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ae{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Be.workingColorSpace){return this.r=e,this.g=i,this.b=r,Be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Be.workingColorSpace){if(e=NE(e,1),i=Ue(i,0,1),r=Ue(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=jh(d,f,e+1/3),this.g=jh(d,f,e),this.b=jh(d,f,e-1/3)}return Be.colorSpaceToWorking(this,l),this}setStyle(e,i=yi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const r=oy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Be.workingToColorSpace(jn.copy(this),e),Math.round(Ue(jn.r*255,0,255))*65536+Math.round(Ue(jn.g*255,0,255))*256+Math.round(Ue(jn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Be.workingColorSpace){Be.workingToColorSpace(jn.copy(this),i);const r=jn.r,l=jn.g,f=jn.b,d=Math.max(r,l,f),h=Math.min(r,l,f);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-f)/g+(l<f?6:0);break;case l:m=(f-r)/g+2;break;case f:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Be.workingColorSpace){return Be.workingToColorSpace(jn.copy(this),i),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=yi){Be.workingToColorSpace(jn.copy(this),e);const i=jn.r,r=jn.g,l=jn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+i,gs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(gs),e.getHSL(hu);const r=Ah(gs.h,hu.h,i),l=Ah(gs.s,hu.s,i),f=Ah(gs.l,hu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new Ae;Ae.NAMES=oy;let WE=0;class Mo extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=uo,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=rp,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==Ss&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sp&&(r.blendSrc=this.blendSrc),this.blendDst!==rp&&(r.blendDst=this.blendDst),this.blendEquation!==Ks&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hu extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new it,pu=new Le;let YE=0;class zi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=U_,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pu.fromBufferAttribute(this,i),pu.applyMatrix3(e),this.setXY(i,pu.x,pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ml(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ri(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ml(i,this.array)),i}setX(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ml(i,this.array)),i}setY(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ml(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ml(i,this.array)),i}setW(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),l=ri(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),l=ri(l,this.array),f=ri(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==U_&&(e.usage=this.usage),e}}class ly extends zi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class cy extends zi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class gn extends zi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ZE=0;const Li=new nn,Xh=new Un,eo=new it,xi=new ar,xl=new ar,Dn=new it;class ti extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iy(e)?cy:ly)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new _e().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,i,r){return Li.makeTranslation(e,i,r),this.applyMatrix4(Li),this}scale(e,i,r){return Li.makeScale(e,i,r),this.applyMatrix4(Li),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];xi.setFromBufferAttribute(f),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];xl.setFromBufferAttribute(h),this.morphTargetsRelative?(Dn.addVectors(xi.min,xl.min),xi.expandByPoint(Dn),Dn.addVectors(xi.max,xl.max),xi.expandByPoint(Dn)):(xi.expandByPoint(xl.min),xi.expandByPoint(xl.max))}xi.getCenter(r);let l=0;for(let f=0,d=e.count;f<d;f++)Dn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Dn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Dn.fromBufferAttribute(h,p),m&&(eo.fromBufferAttribute(e,p),Dn.add(eo)),l=Math.max(l,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let G=0;G<r.count;G++)h[G]=new it,m[G]=new it;const p=new it,x=new it,g=new it,v=new Le,E=new Le,T=new Le,C=new it,y=new it;function S(G,N,w){p.fromBufferAttribute(r,G),x.fromBufferAttribute(r,N),g.fromBufferAttribute(r,w),v.fromBufferAttribute(f,G),E.fromBufferAttribute(f,N),T.fromBufferAttribute(f,w),x.sub(p),g.sub(p),E.sub(v),T.sub(v);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(g,-E.y).multiplyScalar(k),y.copy(g).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(k),h[G].add(C),h[N].add(C),h[w].add(C),m[G].add(y),m[N].add(y),m[w].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,N=U.length;G<N;++G){const w=U[G],k=w.start,q=w.count;for(let _t=k,Et=k+q;_t<Et;_t+=3)S(e.getX(_t+0),e.getX(_t+1),e.getX(_t+2))}const L=new it,R=new it,O=new it,H=new it;function B(G){O.fromBufferAttribute(l,G),H.copy(O);const N=h[G];L.copy(N),L.sub(O.multiplyScalar(O.dot(N))).normalize(),R.crossVectors(H,N);const k=R.dot(m[G])<0?-1:1;d.setXYZW(G,L.x,L.y,L.z,k)}for(let G=0,N=U.length;G<N;++G){const w=U[G],k=w.start,q=w.count;for(let _t=k,Et=k+q;_t<Et;_t+=3)B(e.getX(_t+0)),B(e.getX(_t+1)),B(e.getX(_t+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const l=new it,f=new it,d=new it,h=new it,m=new it,p=new it,x=new it,g=new it;if(e)for(let v=0,E=e.count;v<E;v+=3){const T=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,T),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),x.subVectors(d,f),g.subVectors(l,f),x.cross(g),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,f),g.subVectors(l,f),x.cross(g),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,v=new p.constructor(m.length*x);let E=0,T=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*x;for(let S=0;S<x;S++)v[T++]=p[E++]}return new zi(v,x,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let x=0,g=p.length;x<g;x++){const v=p[x],E=e(v,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,v=p.length;g<v;g++){const E=p[g];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const f=e.morphAttributes;for(const p in f){const x=[],g=f[p];for(let v=0,E=g.length;v<E;v++)x.push(g[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const q_=new nn,js=new sy,mu=new So,W_=new it,gu=new it,vu=new it,_u=new it,qh=new it,xu=new it,Y_=new it,yu=new it;class Ve extends Un{constructor(e=new ti,i=new Hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){xu.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const x=h[m],g=f[m];x!==0&&(qh.fromBufferAttribute(g,e),d?xu.addScaledVector(qh,x):xu.addScaledVector(qh.sub(i),x))}i.add(xu)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(f),js.copy(e.ray).recast(e.near),!(mu.containsPoint(js.origin)===!1&&(js.intersectSphere(mu,W_)===null||js.origin.distanceToSquared(W_)>(e.far-e.near)**2))&&(q_.copy(f).invert(),js.copy(e.ray).applyMatrix4(q_),!(r.boundingBox!==null&&js.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,js)))}_computeIntersections(e,i,r){let l;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,x=f.attributes.uv1,g=f.attributes.normal,v=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const y=v[T],S=d[y.materialIndex],U=Math.max(y.start,E.start),L=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let R=U,O=L;R<O;R+=3){const H=h.getX(R),B=h.getX(R+1),G=h.getX(R+2);l=Su(this,S,e,r,p,x,g,H,B,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let y=T,S=C;y<S;y+=3){const U=h.getX(y),L=h.getX(y+1),R=h.getX(y+2);l=Su(this,d,e,r,p,x,g,U,L,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const y=v[T],S=d[y.materialIndex],U=Math.max(y.start,E.start),L=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let R=U,O=L;R<O;R+=3){const H=R,B=R+1,G=R+2;l=Su(this,S,e,r,p,x,g,H,B,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=T,S=C;y<S;y+=3){const U=y,L=y+1,R=y+2;l=Su(this,d,e,r,p,x,g,U,L,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function KE(o,e,i,r,l,f,d,h){let m;if(e.side===Jn?m=r.intersectTriangle(d,f,l,!0,h):m=r.intersectTriangle(l,f,d,e.side===Ss,h),m===null)return null;yu.copy(h),yu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yu);return p<i.near||p>i.far?null:{distance:p,point:yu.clone(),object:o}}function Su(o,e,i,r,l,f,d,h,m,p){o.getVertexPosition(h,gu),o.getVertexPosition(m,vu),o.getVertexPosition(p,_u);const x=KE(o,e,i,r,gu,vu,_u,Y_);if(x){const g=new it;Yi.getBarycoord(Y_,gu,vu,_u,g),l&&(x.uv=Yi.getInterpolatedAttribute(l,h,m,p,g,new Le)),f&&(x.uv1=Yi.getInterpolatedAttribute(f,h,m,p,g,new Le)),d&&(x.normal=Yi.getInterpolatedAttribute(d,h,m,p,g,new it),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new it,materialIndex:0};Yi.getNormal(gu,vu,_u,v.normal),x.face=v,x.barycoord=g}return x}class ir extends ti{constructor(e=1,i=1,r=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],x=[],g=[];let v=0,E=0;T("z","y","x",-1,-1,r,i,e,d,f,0),T("z","y","x",1,-1,r,i,-e,d,f,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,f,4),T("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(m),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(g,2));function T(C,y,S,U,L,R,O,H,B,G,N){const w=R/B,k=O/G,q=R/2,_t=O/2,Et=H/2,ht=B+1,Z=G+1;let ct=0,Q=0;const Ct=new it;for(let wt=0;wt<Z;wt++){const Ft=wt*k-_t;for(let ae=0;ae<ht;ae++){const me=ae*w-q;Ct[C]=me*U,Ct[y]=Ft*L,Ct[S]=Et,p.push(Ct.x,Ct.y,Ct.z),Ct[C]=0,Ct[y]=0,Ct[S]=H>0?1:-1,x.push(Ct.x,Ct.y,Ct.z),g.push(ae/B),g.push(1-wt/G),ct+=1}}for(let wt=0;wt<G;wt++)for(let Ft=0;Ft<B;Ft++){const ae=v+Ft+ht*wt,me=v+Ft+ht*(wt+1),F=v+(Ft+1)+ht*(wt+1),st=v+(Ft+1)+ht*wt;m.push(ae,me,st),m.push(me,F,st),Q+=6}h.addGroup(E,Q,N),E+=Q,v+=ct}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Qn(o){const e={};for(let i=0;i<o.length;i++){const r=_o(o[i]);for(const l in r)e[l]=r[l]}return e}function QE(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function uy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const JE={clone:_o,merge:Qn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=tT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class fy extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new it,Z_=new Le,K_=new Le;class Oi extends fy{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,Z_,K_),i.subVectors(K_,Z_)}setViewOffset(e,i,r,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const no=-90,io=1;class eT extends Un{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Oi(no,io,e,i);l.layers=this.layers,this.add(l);const f=new Oi(no,io,e,i);f.layers=this.layers,this.add(f);const d=new Oi(no,io,e,i);d.layers=this.layers,this.add(d);const h=new Oi(no,io,e,i);h.layers=this.layers,this.add(h);const m=new Oi(no,io,e,i);m.layers=this.layers,this.add(m);const p=new Oi(no,io,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,d,h,m]=i;for(const p of i)this.remove(p);if(e===da)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Bu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(g,v,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class dy extends $n{constructor(e=[],i=mo,r,l,f,d,h,m,p,x){super(e,i,r,l,f,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nT extends nr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new dy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ir(5,5,5),f=new Ia({name:"CubemapFromEquirect",uniforms:_o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:xs});f.uniforms.tEquirect.value=i;const d=new Ve(l,f),h=i.minFilter;return i.minFilter===tr&&(i.minFilter=ua),new eT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(f)}}class Nn extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iT={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),S=this._getHandJoint(p,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=x.position.distanceTo(g.position),E=.02,T=.005;p.inputState.pinching&&v>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Nn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class sm{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=i,this.far=r}clone(){return new sm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class aT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class sT extends $n{constructor(e=null,i=1,r=1,l,f,d,h,m,p=Mi,x=Mi,g,v){super(null,d,h,m,p,x,l,f,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q_ extends zi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ao=new nn,J_=new nn,Mu=[],$_=new ar,rT=new nn,yl=new Ve,Sl=new So;class oT extends Ve{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new Q_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,rT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ao),$_.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union($_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ao),Sl.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(Sl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,f=r.length+1,d=e*f+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(yl.geometry=this.geometry,yl.material=this.material,yl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sl.copy(this.boundingSphere),Sl.applyMatrix4(r),e.ray.intersectsSphere(Sl)!==!1))for(let f=0;f<l;f++){this.getMatrixAt(f,ao),J_.multiplyMatrices(r,ao),yl.matrixWorld=J_,yl.raycast(e,Mu);for(let d=0,h=Mu.length;d<h;d++){const m=Mu[d];m.instanceId=f,m.object=this,i.push(m)}Mu.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new Q_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new sT(new Float32Array(l*this.count),l,this.count,tm,fa));const f=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,m=l*e;f[m]=h,f.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yh=new it,lT=new it,cT=new _e;class Ys{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yh.subVectors(r,i).cross(lT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||cT.getNormalMatrix(e),l=this.coplanarPoint(Yh).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new So,uT=new Le(.5,.5),Eu=new it;class rm{constructor(e=new Ys,i=new Ys,r=new Ys,l=new Ys,f=new Ys,d=new Ys){this.planes=[e,i,r,l,f,d]}set(e,i,r,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=da,r=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],m=f[2],p=f[3],x=f[4],g=f[5],v=f[6],E=f[7],T=f[8],C=f[9],y=f[10],S=f[11],U=f[12],L=f[13],R=f[14],O=f[15];if(l[0].setComponents(p-d,E-x,S-T,O-U).normalize(),l[1].setComponents(p+d,E+x,S+T,O+U).normalize(),l[2].setComponents(p+h,E+g,S+C,O+L).normalize(),l[3].setComponents(p-h,E-g,S-C,O-L).normalize(),r)l[4].setComponents(m,v,y,R).normalize(),l[5].setComponents(p-m,E-v,S-y,O-R).normalize();else if(l[4].setComponents(p-m,E-v,S-y,O-R).normalize(),i===da)l[5].setComponents(p+m,E+v,S+y,O+R).normalize();else if(i===Bu)l[5].setComponents(m,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const i=uT.distanceTo(e.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Eu.x=l.normal.x>0?e.max.x:e.min.x,Eu.y=l.normal.y>0?e.max.y:e.min.y,Eu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hy extends Mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tx=new nn,Wp=new sy,Tu=new So,bu=new it;class ex extends Un{constructor(e=new ti,i=new hy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(l),Tu.radius+=f,e.ray.intersectsSphere(Tu)===!1)return;tx.copy(l).invert(),Wp.copy(e.ray).applyMatrix4(tx);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const v=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let T=v,C=E;T<C;T++){const y=p.getX(T);bu.fromBufferAttribute(g,y),nx(bu,y,m,l,e,i,this)}}else{const v=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let T=v,C=E;T<C;T++)bu.fromBufferAttribute(g,T),nx(bu,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function nx(o,e,i,r,l,f,d){const h=Wp.distanceSqToPoint(o);if(h<i){const m=new it;Wp.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;f.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class py extends $n{constructor(e,i,r=er,l,f,d,h=Mi,m=Mi,p,x=Rl,g=1){if(x!==Rl&&x!==Cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,f,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class my extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dl extends ti{constructor(e=1,i=1,r=1,l=32,f=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),f=Math.floor(f);const x=[],g=[],v=[],E=[];let T=0;const C=[],y=r/2;let S=0;U(),d===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(E,2));function U(){const R=new it,O=new it;let H=0;const B=(i-e)/r;for(let G=0;G<=f;G++){const N=[],w=G/f,k=w*(i-e)+e;for(let q=0;q<=l;q++){const _t=q/l,Et=_t*m+h,ht=Math.sin(Et),Z=Math.cos(Et);O.x=k*ht,O.y=-w*r+y,O.z=k*Z,g.push(O.x,O.y,O.z),R.set(ht,B,Z).normalize(),v.push(R.x,R.y,R.z),E.push(_t,1-w),N.push(T++)}C.push(N)}for(let G=0;G<l;G++)for(let N=0;N<f;N++){const w=C[N][G],k=C[N+1][G],q=C[N+1][G+1],_t=C[N][G+1];(e>0||N!==0)&&(x.push(w,k,_t),H+=3),(i>0||N!==f-1)&&(x.push(k,q,_t),H+=3)}p.addGroup(S,H,0),S+=H}function L(R){const O=T,H=new Le,B=new it;let G=0;const N=R===!0?e:i,w=R===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,y*w,0),v.push(0,w,0),E.push(.5,.5),T++;const k=T;for(let q=0;q<=l;q++){const Et=q/l*m+h,ht=Math.cos(Et),Z=Math.sin(Et);B.x=N*Z,B.y=y*w,B.z=N*ht,g.push(B.x,B.y,B.z),v.push(0,w,0),H.x=ht*.5+.5,H.y=Z*.5*w+.5,E.push(H.x,H.y),T++}for(let q=0;q<l;q++){const _t=O+q,Et=k+q;R===!0?x.push(Et,Et+1,_t):x.push(Et+1,Et,_t),G+=3}p.addGroup(S,G,R===!0?1:2),S+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class om extends Dl{constructor(e=1,i=1,r=32,l=1,f=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,f,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:f,thetaStart:d,thetaLength:h}}static fromJSON(e){return new om(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lm extends ti{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const f=[],d=[];h(l),p(r),x(),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(f.slice(),3)),this.setAttribute("uv",new gn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const L=new it,R=new it,O=new it;for(let H=0;H<i.length;H+=3)E(i[H+0],L),E(i[H+1],R),E(i[H+2],O),m(L,R,O,U)}function m(U,L,R,O){const H=O+1,B=[];for(let G=0;G<=H;G++){B[G]=[];const N=U.clone().lerp(R,G/H),w=L.clone().lerp(R,G/H),k=H-G;for(let q=0;q<=k;q++)q===0&&G===H?B[G][q]=N:B[G][q]=N.clone().lerp(w,q/k)}for(let G=0;G<H;G++)for(let N=0;N<2*(H-G)-1;N++){const w=Math.floor(N/2);N%2===0?(v(B[G][w+1]),v(B[G+1][w]),v(B[G][w])):(v(B[G][w+1]),v(B[G+1][w+1]),v(B[G+1][w]))}}function p(U){const L=new it;for(let R=0;R<f.length;R+=3)L.x=f[R+0],L.y=f[R+1],L.z=f[R+2],L.normalize().multiplyScalar(U),f[R+0]=L.x,f[R+1]=L.y,f[R+2]=L.z}function x(){const U=new it;for(let L=0;L<f.length;L+=3){U.x=f[L+0],U.y=f[L+1],U.z=f[L+2];const R=y(U)/2/Math.PI+.5,O=S(U)/Math.PI+.5;d.push(R,1-O)}T(),g()}function g(){for(let U=0;U<d.length;U+=6){const L=d[U+0],R=d[U+2],O=d[U+4],H=Math.max(L,R,O),B=Math.min(L,R,O);H>.9&&B<.1&&(L<.2&&(d[U+0]+=1),R<.2&&(d[U+2]+=1),O<.2&&(d[U+4]+=1))}}function v(U){f.push(U.x,U.y,U.z)}function E(U,L){const R=U*3;L.x=e[R+0],L.y=e[R+1],L.z=e[R+2]}function T(){const U=new it,L=new it,R=new it,O=new it,H=new Le,B=new Le,G=new Le;for(let N=0,w=0;N<f.length;N+=9,w+=6){U.set(f[N+0],f[N+1],f[N+2]),L.set(f[N+3],f[N+4],f[N+5]),R.set(f[N+6],f[N+7],f[N+8]),H.set(d[w+0],d[w+1]),B.set(d[w+2],d[w+3]),G.set(d[w+4],d[w+5]),O.copy(U).add(L).add(R).divideScalar(3);const k=y(O);C(H,w+0,U,k),C(B,w+2,L,k),C(G,w+4,R,k)}}function C(U,L,R,O){O<0&&U.x===1&&(d[L]=U.x-1),R.x===0&&R.z===0&&(d[L]=O/2/Math.PI+.5)}function y(U){return Math.atan2(U.z,-U.x)}function S(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lm(e.vertices,e.indices,e.radius,e.details)}}class cm extends lm{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,f,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new cm(e.radius,e.detail)}}class xo extends ti{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=e/h,v=i/m,E=[],T=[],C=[],y=[];for(let S=0;S<x;S++){const U=S*v-d;for(let L=0;L<p;L++){const R=L*g-f;T.push(R,-U,0),C.push(0,0,1),y.push(L/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let U=0;U<h;U++){const L=U+p*S,R=U+p*(S+1),O=U+1+p*(S+1),H=U+1+p*S;E.push(L,R,H),E.push(R,O,H)}this.setIndex(E),this.setAttribute("position",new gn(T,3)),this.setAttribute("normal",new gn(C,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qs extends ti{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const x=[],g=new it,v=new it,E=[],T=[],C=[],y=[];for(let S=0;S<=r;S++){const U=[],L=S/r;let R=0;S===0&&d===0?R=.5/i:S===r&&m===Math.PI&&(R=-.5/i);for(let O=0;O<=i;O++){const H=O/i;g.x=-e*Math.cos(l+H*f)*Math.sin(d+L*h),g.y=e*Math.cos(d+L*h),g.z=e*Math.sin(l+H*f)*Math.sin(d+L*h),T.push(g.x,g.y,g.z),v.copy(g).normalize(),C.push(v.x,v.y,v.z),y.push(H+R,1-L),U.push(p++)}x.push(U)}for(let S=0;S<r;S++)for(let U=0;U<i;U++){const L=x[S][U+1],R=x[S][U],O=x[S+1][U],H=x[S+1][U+1];(S!==0||d>0)&&E.push(L,R,H),(S!==r-1||m<Math.PI)&&E.push(R,O,H)}this.setIndex(E),this.setAttribute("position",new gn(T,3)),this.setAttribute("normal",new gn(C,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gu extends ti{constructor(e=1,i=.4,r=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:f},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],x=new it,g=new it,v=new it;for(let E=0;E<=r;E++)for(let T=0;T<=l;T++){const C=T/l*f,y=E/r*Math.PI*2;g.x=(e+i*Math.cos(y))*Math.cos(C),g.y=(e+i*Math.cos(y))*Math.sin(C),g.z=i*Math.sin(y),h.push(g.x,g.y,g.z),x.x=e*Math.cos(C),x.y=e*Math.sin(C),v.subVectors(g,x).normalize(),m.push(v.x,v.y,v.z),p.push(T/l),p.push(E/r)}for(let E=1;E<=r;E++)for(let T=1;T<=l;T++){const C=(l+1)*E+T-1,y=(l+1)*(E-1)+T-1,S=(l+1)*(E-1)+T,U=(l+1)*E+T;d.push(C,y,U),d.push(y,S,U)}this.setIndex(d),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(m,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Au extends Mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ey,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fT extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gy extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class hT extends gy{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Zh=new nn,ix=new it,ax=new it;class pT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=ha,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rm,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;ix.setFromMatrixPosition(e.matrixWorld),i.position.copy(ix),ax.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ax),i.updateMatrixWorld(),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vy extends fy{constructor(e=-1,i=1,r=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class mT extends pT{constructor(){super(new vy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gT extends gy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new mT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vT extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sx(o,e,i,r){const l=_T(r);switch(i){case Jx:return o*e;case tm:return o*e/l.components*l.byteLength;case em:return o*e/l.components*l.byteLength;case ty:return o*e*2/l.components*l.byteLength;case nm:return o*e*2/l.components*l.byteLength;case $x:return o*e*3/l.components*l.byteLength;case Zi:return o*e*4/l.components*l.byteLength;case im:return o*e*4/l.components*l.byteLength;case Nu:case Uu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lu:case Ou:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:case Sp:return Math.max(o,16)*Math.max(e,8)/4;case _p:case yp:return Math.max(o,8)*Math.max(e,8)/2;case Mp:case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Np:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Fp:case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Vp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case jp:case Xp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _T(o){switch(o){case ha:case Yx:return{byteLength:1,components:1};case bl:case Zx:case Nl:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case er:case Qp:case fa:return{byteLength:4,components:1};case Kx:case Qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _y(){let o=null,e=!1,i=null,r=null;function l(f,d){i(f,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function xT(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(m,v),o.bufferData(m,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,x);else{g.sort((E,T)=>E.start-T.start);let v=0;for(let E=1;E<g.length;E++){const T=g[v],C=g[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++v,g[v]=C)}g.length=v+1;for(let E=0,T=g.length;E<T;E++){const C=g[E];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:f,update:d}}var yT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,db=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_b=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:yT,alphahash_pars_fragment:ST,alphamap_fragment:MT,alphamap_pars_fragment:ET,alphatest_fragment:TT,alphatest_pars_fragment:bT,aomap_fragment:AT,aomap_pars_fragment:RT,batching_pars_vertex:CT,batching_vertex:wT,begin_vertex:DT,beginnormal_vertex:NT,bsdfs:UT,iridescence_fragment:LT,bumpmap_pars_fragment:OT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:IT,clipping_planes_vertex:BT,color_fragment:FT,color_pars_fragment:HT,color_pars_vertex:GT,color_vertex:VT,common:kT,cube_uv_reflection_fragment:jT,defaultnormal_vertex:XT,displacementmap_pars_vertex:qT,displacementmap_vertex:WT,emissivemap_fragment:YT,emissivemap_pars_fragment:ZT,colorspace_fragment:KT,colorspace_pars_fragment:QT,envmap_fragment:JT,envmap_common_pars_fragment:$T,envmap_pars_fragment:tb,envmap_pars_vertex:eb,envmap_physical_pars_fragment:db,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:ab,fog_fragment:sb,fog_pars_fragment:rb,gradientmap_pars_fragment:ob,lightmap_pars_fragment:lb,lights_lambert_fragment:cb,lights_lambert_pars_fragment:ub,lights_pars_begin:fb,lights_toon_fragment:hb,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:vb,lights_physical_pars_fragment:_b,lights_fragment_begin:xb,lights_fragment_maps:yb,lights_fragment_end:Sb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:bb,map_fragment:Ab,map_pars_fragment:Rb,map_particle_fragment:Cb,map_particle_pars_fragment:wb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Nb,morphinstance_vertex:Ub,morphcolor_vertex:Lb,morphnormal_vertex:Ob,morphtarget_pars_vertex:zb,morphtarget_vertex:Pb,normal_fragment_begin:Ib,normal_fragment_maps:Bb,normal_pars_fragment:Fb,normal_pars_vertex:Hb,normal_vertex:Gb,normalmap_pars_fragment:Vb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Xb,iridescence_pars_fragment:qb,opaque_fragment:Wb,packing:Yb,premultiplied_alpha_fragment:Zb,project_vertex:Kb,dithering_fragment:Qb,dithering_pars_fragment:Jb,roughnessmap_fragment:$b,roughnessmap_pars_fragment:tA,shadowmap_pars_fragment:eA,shadowmap_pars_vertex:nA,shadowmap_vertex:iA,shadowmask_pars_fragment:aA,skinbase_vertex:sA,skinning_pars_vertex:rA,skinning_vertex:oA,skinnormal_vertex:lA,specularmap_fragment:cA,specularmap_pars_fragment:uA,tonemapping_fragment:fA,tonemapping_pars_fragment:dA,transmission_fragment:hA,transmission_pars_fragment:pA,uv_pars_fragment:mA,uv_pars_vertex:gA,uv_vertex:vA,worldpos_vertex:_A,background_vert:xA,background_frag:yA,backgroundCube_vert:SA,backgroundCube_frag:MA,cube_vert:EA,cube_frag:TA,depth_vert:bA,depth_frag:AA,distanceRGBA_vert:RA,distanceRGBA_frag:CA,equirect_vert:wA,equirect_frag:DA,linedashed_vert:NA,linedashed_frag:UA,meshbasic_vert:LA,meshbasic_frag:OA,meshlambert_vert:zA,meshlambert_frag:PA,meshmatcap_vert:IA,meshmatcap_frag:BA,meshnormal_vert:FA,meshnormal_frag:HA,meshphong_vert:GA,meshphong_frag:VA,meshphysical_vert:kA,meshphysical_frag:jA,meshtoon_vert:XA,meshtoon_frag:qA,points_vert:WA,points_frag:YA,shadow_vert:ZA,shadow_frag:KA,sprite_vert:QA,sprite_frag:JA},Kt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},la={basic:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Qn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Qn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Qn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Qn([Kt.points,Kt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Qn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Qn([Kt.common,Kt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Qn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Qn([Kt.sprite,Kt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Qn([Kt.common,Kt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Qn([Kt.lights,Kt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};la.physical={uniforms:Qn([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Ru={r:0,b:0,g:0},qs=new pa,$A=new nn;function t2(o,e,i,r,l,f,d){const h=new Ae(0);let m=f===!0?0:1,p,x,g=null,v=0,E=null;function T(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?i:e).get(R)),R}function C(L){let R=!1;const O=T(L);O===null?S(h,m):O&&O.isColor&&(S(O,1),R=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,R){const O=T(R);O&&(O.isCubeTexture||O.mapping===Vu)?(x===void 0&&(x=new Ve(new ir(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:_o(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(H,B,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),qs.copy(R.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),x.material.uniforms.envMap.value=O,x.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4($A.makeRotationFromEuler(qs)),x.material.toneMapped=Be.getTransfer(O.colorSpace)!==Ke,(g!==O||v!==O.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,g=O,v=O.version,E=o.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Ve(new xo(2,2),new Ia({name:"BackgroundMaterial",uniforms:_o(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Be.getTransfer(O.colorSpace)!==Ke,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,g=O,v=O.version,E=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function S(L,R){L.getRGB(Ru,uy(o)),r.buffers.color.setClear(Ru.r,Ru.g,Ru.b,R,d)}function U(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,R=1){h.set(L),m=R,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,S(h,m)},render:C,addToRenderList:y,dispose:U}}function e2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let f=l,d=!1;function h(w,k,q,_t,Et){let ht=!1;const Z=g(_t,q,k);f!==Z&&(f=Z,p(f.object)),ht=E(w,_t,q,Et),ht&&T(w,_t,q,Et),Et!==null&&e.update(Et,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,R(w,k,q,_t),Et!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Et).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function g(w,k,q){const _t=q.wireframe===!0;let Et=r[w.id];Et===void 0&&(Et={},r[w.id]=Et);let ht=Et[k.id];ht===void 0&&(ht={},Et[k.id]=ht);let Z=ht[_t];return Z===void 0&&(Z=v(m()),ht[_t]=Z),Z}function v(w){const k=[],q=[],_t=[];for(let Et=0;Et<i;Et++)k[Et]=0,q[Et]=0,_t[Et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:_t,object:w,attributes:{},index:null}}function E(w,k,q,_t){const Et=f.attributes,ht=k.attributes;let Z=0;const ct=q.getAttributes();for(const Q in ct)if(ct[Q].location>=0){const wt=Et[Q];let Ft=ht[Q];if(Ft===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Ft=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Ft=w.instanceColor)),wt===void 0||wt.attribute!==Ft||Ft&&wt.data!==Ft.data)return!0;Z++}return f.attributesNum!==Z||f.index!==_t}function T(w,k,q,_t){const Et={},ht=k.attributes;let Z=0;const ct=q.getAttributes();for(const Q in ct)if(ct[Q].location>=0){let wt=ht[Q];wt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(wt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(wt=w.instanceColor));const Ft={};Ft.attribute=wt,wt&&wt.data&&(Ft.data=wt.data),Et[Q]=Ft,Z++}f.attributes=Et,f.attributesNum=Z,f.index=_t}function C(){const w=f.newAttributes;for(let k=0,q=w.length;k<q;k++)w[k]=0}function y(w){S(w,0)}function S(w,k){const q=f.newAttributes,_t=f.enabledAttributes,Et=f.attributeDivisors;q[w]=1,_t[w]===0&&(o.enableVertexAttribArray(w),_t[w]=1),Et[w]!==k&&(o.vertexAttribDivisor(w,k),Et[w]=k)}function U(){const w=f.newAttributes,k=f.enabledAttributes;for(let q=0,_t=k.length;q<_t;q++)k[q]!==w[q]&&(o.disableVertexAttribArray(q),k[q]=0)}function L(w,k,q,_t,Et,ht,Z){Z===!0?o.vertexAttribIPointer(w,k,q,Et,ht):o.vertexAttribPointer(w,k,q,_t,Et,ht)}function R(w,k,q,_t){C();const Et=_t.attributes,ht=q.getAttributes(),Z=k.defaultAttributeValues;for(const ct in ht){const Q=ht[ct];if(Q.location>=0){let Ct=Et[ct];if(Ct===void 0&&(ct==="instanceMatrix"&&w.instanceMatrix&&(Ct=w.instanceMatrix),ct==="instanceColor"&&w.instanceColor&&(Ct=w.instanceColor)),Ct!==void 0){const wt=Ct.normalized,Ft=Ct.itemSize,ae=e.get(Ct);if(ae===void 0)continue;const me=ae.buffer,F=ae.type,st=ae.bytesPerElement,et=F===o.INT||F===o.UNSIGNED_INT||Ct.gpuType===Qp;if(Ct.isInterleavedBufferAttribute){const ot=Ct.data,Lt=ot.stride,pt=Ct.offset;if(ot.isInstancedInterleavedBuffer){for(let gt=0;gt<Q.locationSize;gt++)S(Q.location+gt,ot.meshPerAttribute);w.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let gt=0;gt<Q.locationSize;gt++)y(Q.location+gt);o.bindBuffer(o.ARRAY_BUFFER,me);for(let gt=0;gt<Q.locationSize;gt++)L(Q.location+gt,Ft/Q.locationSize,F,wt,Lt*st,(pt+Ft/Q.locationSize*gt)*st,et)}else{if(Ct.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)S(Q.location+ot,Ct.meshPerAttribute);w.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let ot=0;ot<Q.locationSize;ot++)y(Q.location+ot);o.bindBuffer(o.ARRAY_BUFFER,me);for(let ot=0;ot<Q.locationSize;ot++)L(Q.location+ot,Ft/Q.locationSize,F,wt,Ft*st,Ft/Q.locationSize*ot*st,et)}}else if(Z!==void 0){const wt=Z[ct];if(wt!==void 0)switch(wt.length){case 2:o.vertexAttrib2fv(Q.location,wt);break;case 3:o.vertexAttrib3fv(Q.location,wt);break;case 4:o.vertexAttrib4fv(Q.location,wt);break;default:o.vertexAttrib1fv(Q.location,wt)}}}}U()}function O(){G();for(const w in r){const k=r[w];for(const q in k){const _t=k[q];for(const Et in _t)x(_t[Et].object),delete _t[Et];delete k[q]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const q in k){const _t=k[q];for(const Et in _t)x(_t[Et].object),delete _t[Et];delete k[q]}delete r[w.id]}function B(w){for(const k in r){const q=r[k];if(q[w.id]===void 0)continue;const _t=q[w.id];for(const Et in _t)x(_t[Et].object),delete _t[Et];delete q[w.id]}}function G(){N(),d=!0,f!==l&&(f=l,p(f.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:N,dispose:O,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function n2(o,e,i){let r;function l(p){r=p}function f(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,g){g!==0&&(o.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let E=0;for(let T=0;T<g;T++)E+=x[T];i.update(E,r,1)}function m(p,x,g,v){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)d(p[T],x[T],v[T]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,x,0,v,0,g);let T=0;for(let C=0;C<g;C++)T+=x[C]*v[C];i.update(T,r,1)}}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function i2(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Zi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const G=B===Nl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ha&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==fa&&!G)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:O,maxSamples:H}}function a2(o){const e=this;let i=null,r=0,l=!1,f=!1;const d=new Ys,h=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const E=g.length!==0||v||r!==0||l;return l=v,r=g.length,E},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,E){const T=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,S=o.get(g);if(!l||T===null||T.length===0||f&&!y)f?x(null):p();else{const U=f?0:r,L=U*4;let R=S.clippingState||null;m.value=R,R=x(T,v,L,E);for(let O=0;O!==L;++O)R[O]=i[O];S.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,v,E,T){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const S=E+C*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,R=E;L!==C;++L,R+=4)d.copy(g[L]).applyMatrix4(U,h),d.normal.toArray(y,R),y[R+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function s2(o){let e=new WeakMap;function i(d,h){return h===pp?d.mapping=mo:h===mp&&(d.mapping=go),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===pp||h===mp)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new nT(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const co=4,rx=[.125,.215,.35,.446,.526,.582],Js=20,Kh=new vy,ox=new Ae;let Qh=null,Jh=0,$h=0,tp=!1;const Zs=(1+Math.sqrt(5))/2,so=1/Zs,lx=[new it(-Zs,so,0),new it(Zs,so,0),new it(-so,0,Zs),new it(so,0,Zs),new it(0,Zs,-so),new it(0,Zs,so),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],r2=new it;class cx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:d=256,position:h=r2}=f;Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,Jh,$h),this._renderer.xr.enabled=tp,e.scissorTest=!1,Cu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ua,minFilter:ua,generateMipmaps:!1,type:Nl,format:Zi,colorSpace:vo,depthBuffer:!1},l=ux(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ux(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o2(f)),this._blurMaterial=l2(f,e,i)}return l}_compileMaterial(e){const i=new Ve(this._lodPlanes[0],e);this._renderer.compile(i,Kh)}_sceneToCubeUV(e,i,r,l,f){const m=new Oi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,E=g.toneMapping;g.getClearColor(ox),g.toneMapping=ys,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const C=new Hu({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),y=new Ve(new ir,C);let S=!1;const U=e.background;U?U.isColor&&(C.color.copy(U),e.background=null,S=!0):(C.color.copy(ox),S=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(m.up.set(0,p[L],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+x[L],f.y,f.z)):R===1?(m.up.set(0,0,p[L]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+x[L],f.z)):(m.up.set(0,p[L],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+x[L]));const O=this._cubeSize;Cu(l,R*O,L>2?O:0,O,O),g.setRenderTarget(l),S&&g.render(y,m),g.render(e,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=E,g.autoClear=v,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===mo||e.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fx());const f=l?this._cubemapMaterial:this._equirectMaterial,d=new Ve(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const m=this._cubeSize;Cu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Kh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=lx[(l-f-1)%lx.length];this._blur(e,f-1,f,d,h)}i.autoClear=r}_blur(e,i,r,l,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",f),this._halfBlur(d,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,g=new Ve(this._lodPlanes[l],p),v=p.uniforms,E=this._sizeLods[r]-1,T=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*Js-1),C=f/T,y=isFinite(f)?1+Math.floor(x*C):Js;y>Js&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Js}`);const S=[];let U=0;for(let B=0;B<Js;++B){const G=B/C,N=Math.exp(-G*G/2);S.push(N),B===0?U+=N:B<y&&(U+=2*N)}for(let B=0;B<S.length;B++)S[B]=S[B]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-r;const R=this._sizeLods[l],O=3*R*(l>L-co?l-L+co:0),H=4*(this._cubeSize-R);Cu(i,O,H,3*R,2*R),m.setRenderTarget(i),m.render(g,Kh)}}function o2(o){const e=[],i=[],r=[];let l=o;const f=o-co+1+rx.length;for(let d=0;d<f;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-co?m=rx[d-o+co-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),x=-p,g=1+p,v=[x,x,g,x,g,g,x,x,g,g,x,g],E=6,T=6,C=3,y=2,S=1,U=new Float32Array(C*T*E),L=new Float32Array(y*T*E),R=new Float32Array(S*T*E);for(let H=0;H<E;H++){const B=H%3*2/3-1,G=H>2?0:-1,N=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];U.set(N,C*T*H),L.set(v,y*T*H);const w=[H,H,H,H,H,H];R.set(w,S*T*H)}const O=new ti;O.setAttribute("position",new zi(U,C)),O.setAttribute("uv",new zi(L,y)),O.setAttribute("faceIndex",new zi(R,S)),e.push(O),l>co&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function ux(o,e,i){const r=new nr(o,e,i);return r.texture.mapping=Vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function l2(o,e,i){const r=new Float32Array(Js),l=new it(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function fx(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function dx(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function um(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c2(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===pp||m===mp,x=m===mo||m===go;if(p||x){let g=e.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new cx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const E=h.image;return p&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new cx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function f(h){const m=h.target;m.removeEventListener("dispose",f);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function u2(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&wl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function f2(o,e,i,r){const l={},f=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete l[v.id];const E=f.get(v);E&&(e.remove(E),f.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const E in v)e.update(v[E],o.ARRAY_BUFFER)}function p(g){const v=[],E=g.index,T=g.attributes.position;let C=0;if(E!==null){const U=E.array;C=E.version;for(let L=0,R=U.length;L<R;L+=3){const O=U[L+0],H=U[L+1],B=U[L+2];v.push(O,H,H,B,B,O)}}else if(T!==void 0){const U=T.array;C=T.version;for(let L=0,R=U.length/3-1;L<R;L+=3){const O=L+0,H=L+1,B=L+2;v.push(O,H,H,B,B,O)}}else return;const y=new(iy(v)?cy:ly)(v,1);y.version=C;const S=f.get(g);S&&e.remove(S),f.set(g,y)}function x(g){const v=f.get(g);if(v){const E=g.index;E!==null&&v.version<E.version&&p(g)}else p(g);return f.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function d2(o,e,i){let r;function l(v){r=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function m(v,E){o.drawElements(r,E,f,v*d),i.update(E,r,1)}function p(v,E,T){T!==0&&(o.drawElementsInstanced(r,E,f,v*d,T),i.update(E,r,T))}function x(v,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,f,v,0,T);let y=0;for(let S=0;S<T;S++)y+=E[S];i.update(y,r,1)}function g(v,E,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)p(v[S]/d,E[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,f,v,0,C,0,T);let S=0;for(let U=0;U<T;U++)S+=E[U]*C[U];i.update(S,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function h2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function p2(o,e,i){const r=new WeakMap,l=new hn;function f(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let w=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var E=w;v!==void 0&&v.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let R=0;T===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let O=h.attributes.position.count*R,H=1;O>e.maxTextureSize&&(H=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*H*4*g),G=new ay(B,O,H,g);G.type=fa,G.needsUpdate=!0;const N=R*4;for(let k=0;k<g;k++){const q=S[k],_t=U[k],Et=L[k],ht=O*H*4*k;for(let Z=0;Z<q.count;Z++){const ct=Z*N;T===!0&&(l.fromBufferAttribute(q,Z),B[ht+ct+0]=l.x,B[ht+ct+1]=l.y,B[ht+ct+2]=l.z,B[ht+ct+3]=0),C===!0&&(l.fromBufferAttribute(_t,Z),B[ht+ct+4]=l.x,B[ht+ct+5]=l.y,B[ht+ct+6]=l.z,B[ht+ct+7]=0),y===!0&&(l.fromBufferAttribute(Et,Z),B[ht+ct+8]=l.x,B[ht+ct+9]=l.y,B[ht+ct+10]=l.z,B[ht+ct+11]=Et.itemSize===4?l.w:1)}}v={count:g,texture:G,size:new Le(O,H)},r.set(h,v),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const C=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function m2(o,e,i,r){let l=new WeakMap;function f(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:d}}const xy=new $n,hx=new py(1,1),yy=new ay,Sy=new FE,My=new dy,px=[],mx=[],gx=new Float32Array(16),vx=new Float32Array(9),_x=new Float32Array(4);function Eo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=px[l];if(f===void 0&&(f=new Float32Array(l),px[l]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function bn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function An(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function ku(o,e){let i=mx[e];i===void 0&&(i=new Int32Array(e),mx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function g2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function v2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;o.uniform2fv(this.addr,e),An(i,e)}}function _2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(bn(i,e))return;o.uniform3fv(this.addr,e),An(i,e)}}function x2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;o.uniform4fv(this.addr,e),An(i,e)}}function y2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(bn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(bn(i,r))return;_x.set(r),o.uniformMatrix2fv(this.addr,!1,_x),An(i,r)}}function S2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(bn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(bn(i,r))return;vx.set(r),o.uniformMatrix3fv(this.addr,!1,vx),An(i,r)}}function M2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(bn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(bn(i,r))return;gx.set(r),o.uniformMatrix4fv(this.addr,!1,gx),An(i,r)}}function E2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function T2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;o.uniform2iv(this.addr,e),An(i,e)}}function b2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(bn(i,e))return;o.uniform3iv(this.addr,e),An(i,e)}}function A2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;o.uniform4iv(this.addr,e),An(i,e)}}function R2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function C2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;o.uniform2uiv(this.addr,e),An(i,e)}}function w2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(bn(i,e))return;o.uniform3uiv(this.addr,e),An(i,e)}}function D2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;o.uniform4uiv(this.addr,e),An(i,e)}}function N2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(hx.compareFunction=ny,f=hx):f=xy,i.setTexture2D(e||f,l)}function U2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Sy,l)}function L2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||My,l)}function O2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||yy,l)}function z2(o){switch(o){case 5126:return g2;case 35664:return v2;case 35665:return _2;case 35666:return x2;case 35674:return y2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return E2;case 35667:case 35671:return T2;case 35668:case 35672:return b2;case 35669:case 35673:return A2;case 5125:return R2;case 36294:return C2;case 36295:return w2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return O2}}function P2(o,e){o.uniform1fv(this.addr,e)}function I2(o,e){const i=Eo(e,this.size,2);o.uniform2fv(this.addr,i)}function B2(o,e){const i=Eo(e,this.size,3);o.uniform3fv(this.addr,i)}function F2(o,e){const i=Eo(e,this.size,4);o.uniform4fv(this.addr,i)}function H2(o,e){const i=Eo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function G2(o,e){const i=Eo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function V2(o,e){const i=Eo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function k2(o,e){o.uniform1iv(this.addr,e)}function j2(o,e){o.uniform2iv(this.addr,e)}function X2(o,e){o.uniform3iv(this.addr,e)}function q2(o,e){o.uniform4iv(this.addr,e)}function W2(o,e){o.uniform1uiv(this.addr,e)}function Y2(o,e){o.uniform2uiv(this.addr,e)}function Z2(o,e){o.uniform3uiv(this.addr,e)}function K2(o,e){o.uniform4uiv(this.addr,e)}function Q2(o,e,i){const r=this.cache,l=e.length,f=ku(i,l);bn(r,f)||(o.uniform1iv(this.addr,f),An(r,f));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||xy,f[d])}function J2(o,e,i){const r=this.cache,l=e.length,f=ku(i,l);bn(r,f)||(o.uniform1iv(this.addr,f),An(r,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Sy,f[d])}function $2(o,e,i){const r=this.cache,l=e.length,f=ku(i,l);bn(r,f)||(o.uniform1iv(this.addr,f),An(r,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||My,f[d])}function tR(o,e,i){const r=this.cache,l=e.length,f=ku(i,l);bn(r,f)||(o.uniform1iv(this.addr,f),An(r,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||yy,f[d])}function eR(o){switch(o){case 5126:return P2;case 35664:return I2;case 35665:return B2;case 35666:return F2;case 35674:return H2;case 35675:return G2;case 35676:return V2;case 5124:case 35670:return k2;case 35667:case 35671:return j2;case 35668:case 35672:return X2;case 35669:case 35673:return q2;case 5125:return W2;case 36294:return Y2;case 36295:return Z2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return tR}}class nR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=z2(i.type)}}class iR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eR(i.type)}}class aR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],r)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function xx(o,e){o.seq.push(e),o.map[e.id]=e}function sR(o,e,i){const r=o.name,l=r.length;for(ep.lastIndex=0;;){const f=ep.exec(r),d=ep.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){xx(i,p===void 0?new nR(h,o,e):new iR(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new aR(h),xx(i,g)),i=g}}}class zu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),d=e.getUniformLocation(i,f.name);sR(f,d,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function yx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const rR=37297;let oR=0;function lR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Sx=new _e;function cR(o){Be._getMatrix(Sx,Be.workingColorSpace,o);const e=`mat3( ${Sx.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(o)){case Iu:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Mx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+lR(o.getShaderSource(e),h)}else return f}function uR(o,e){const i=cR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function fR(o,e){let i;switch(e){case hE:i="Linear";break;case pE:i="Reinhard";break;case mE:i="Cineon";break;case qx:i="ACESFilmic";break;case vE:i="AgX";break;case _E:i="Neutral";break;case gE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wu=new it;function dR(){Be.getLuminanceCoefficients(wu);const o=wu.x.toFixed(4),e=wu.y.toFixed(4),i=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function pR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function mR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ml(o){return o!==""}function Ex(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yp(o){return o.replace(gR,_R)}const vR=new Map;function _R(o,e){let i=xe[e];if(i===void 0){const r=vR.get(e);if(r!==void 0)i=xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yp(i)}const xR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bx(o){return o.replace(xR,yR)}function yR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Ax(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===kx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===za&&(e="SHADOWMAP_TYPE_VSM"),e}function MR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ER(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function TR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Xx:e="ENVMAP_BLENDING_MULTIPLY";break;case fE:e="ENVMAP_BLENDING_MIX";break;case dE:e="ENVMAP_BLENDING_ADD";break}return e}function bR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function AR(o,e,i,r){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=SR(i),p=MR(i),x=ER(i),g=TR(i),v=bR(i),E=hR(i),T=pR(f),C=l.createProgram();let y,S,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ml).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ml).join(`
`),S.length>0&&(S+=`
`)):(y=[Ax(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),S=[Ax(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ys?"#define TONE_MAPPING":"",i.toneMapping!==ys?xe.tonemapping_pars_fragment:"",i.toneMapping!==ys?fR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,uR("linearToOutputTexel",i.outputColorSpace),dR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ml).join(`
`)),d=Yp(d),d=Ex(d,i),d=Tx(d,i),h=Yp(h),h=Ex(h,i),h=Tx(h,i),d=bx(d),h=bx(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=U+y+d,R=U+S+h,O=yx(l,l.VERTEX_SHADER,L),H=yx(l,l.FRAGMENT_SHADER,R);l.attachShader(C,O),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(k){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",_t=l.getShaderInfoLog(O)||"",Et=l.getShaderInfoLog(H)||"",ht=q.trim(),Z=_t.trim(),ct=Et.trim();let Q=!0,Ct=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,O,H);else{const wt=Mx(l,O,"vertex"),Ft=Mx(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ht+`
`+wt+`
`+Ft)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(Z===""||ct==="")&&(Ct=!1);Ct&&(k.diagnostics={runnable:Q,programLog:ht,vertexShader:{log:Z,prefix:y},fragmentShader:{log:ct,prefix:S}})}l.deleteShader(O),l.deleteShader(H),G=new zu(l,C),N=mR(l,C)}let G;this.getUniforms=function(){return G===void 0&&B(this),G};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,rR)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=H,this}let RR=0;class CR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new wR(e),i.set(e,r)),r}}class wR{constructor(e){this.id=RR++,this.code=e,this.usedTimes=0}}function DR(o,e,i,r,l,f,d){const h=new ry,m=new CR,p=new Set,x=[],g=l.logarithmicDepthBuffer,v=l.vertexTextures;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(N){return p.add(N),N===0?"uv":`uv${N}`}function y(N,w,k,q,_t){const Et=q.fog,ht=_t.geometry,Z=N.isMeshStandardMaterial?q.environment:null,ct=(N.isMeshStandardMaterial?i:e).get(N.envMap||Z),Q=ct&&ct.mapping===Vu?ct.image.height:null,Ct=T[N.type];N.precision!==null&&(E=l.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const wt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ft=wt!==void 0?wt.length:0;let ae=0;ht.morphAttributes.position!==void 0&&(ae=1),ht.morphAttributes.normal!==void 0&&(ae=2),ht.morphAttributes.color!==void 0&&(ae=3);let me,F,st,et;if(Ct){const de=la[Ct];me=de.vertexShader,F=de.fragmentShader}else me=N.vertexShader,F=N.fragmentShader,m.update(N),st=m.getVertexShaderID(N),et=m.getFragmentShaderID(N);const ot=o.getRenderTarget(),Lt=o.state.buffers.depth.getReversed(),pt=_t.isInstancedMesh===!0,gt=_t.isBatchedMesh===!0,dt=!!N.map,Dt=!!N.matcap,z=!!ct,se=!!N.aoMap,Vt=!!N.lightMap,Xt=!!N.bumpMap,Ot=!!N.normalMap,Wt=!!N.displacementMap,jt=!!N.emissiveMap,fe=!!N.metalnessMap,Ee=!!N.roughnessMap,Ne=N.anisotropy>0,P=N.clearcoat>0,A=N.dispersion>0,rt=N.iridescence>0,St=N.sheen>0,Ut=N.transmission>0,Mt=Ne&&!!N.anisotropyMap,Jt=P&&!!N.clearcoatMap,Ht=P&&!!N.clearcoatNormalMap,$t=P&&!!N.clearcoatRoughnessMap,ee=rt&&!!N.iridescenceMap,Pt=rt&&!!N.iridescenceThicknessMap,kt=St&&!!N.sheenColorMap,X=St&&!!N.sheenRoughnessMap,Y=!!N.specularMap,mt=!!N.specularColorMap,Tt=!!N.specularIntensityMap,I=Ut&&!!N.transmissionMap,At=Ut&&!!N.thicknessMap,Nt=!!N.gradientMap,j=!!N.alphaMap,ut=N.alphaTest>0,vt=!!N.alphaHash,It=!!N.extensions;let zt=ys;N.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(zt=o.toneMapping);const ce={shaderID:Ct,shaderType:N.type,shaderName:N.name,vertexShader:me,fragmentShader:F,defines:N.defines,customVertexShaderID:st,customFragmentShaderID:et,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:gt,batchingColor:gt&&_t._colorsTexture!==null,instancing:pt,instancingColor:pt&&_t.instanceColor!==null,instancingMorph:pt&&_t.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:vo,alphaToCoverage:!!N.alphaToCoverage,map:dt,matcap:Dt,envMap:z,envMapMode:z&&ct.mapping,envMapCubeUVHeight:Q,aoMap:se,lightMap:Vt,bumpMap:Xt,normalMap:Ot,displacementMap:v&&Wt,emissiveMap:jt,normalMapObjectSpace:Ot&&N.normalMapType===ME,normalMapTangentSpace:Ot&&N.normalMapType===ey,metalnessMap:fe,roughnessMap:Ee,anisotropy:Ne,anisotropyMap:Mt,clearcoat:P,clearcoatMap:Jt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:$t,dispersion:A,iridescence:rt,iridescenceMap:ee,iridescenceThicknessMap:Pt,sheen:St,sheenColorMap:kt,sheenRoughnessMap:X,specularMap:Y,specularColorMap:mt,specularIntensityMap:Tt,transmission:Ut,transmissionMap:I,thicknessMap:At,gradientMap:Nt,opaque:N.transparent===!1&&N.blending===uo&&N.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:vt,combine:N.combine,mapUv:dt&&C(N.map.channel),aoMapUv:se&&C(N.aoMap.channel),lightMapUv:Vt&&C(N.lightMap.channel),bumpMapUv:Xt&&C(N.bumpMap.channel),normalMapUv:Ot&&C(N.normalMap.channel),displacementMapUv:Wt&&C(N.displacementMap.channel),emissiveMapUv:jt&&C(N.emissiveMap.channel),metalnessMapUv:fe&&C(N.metalnessMap.channel),roughnessMapUv:Ee&&C(N.roughnessMap.channel),anisotropyMapUv:Mt&&C(N.anisotropyMap.channel),clearcoatMapUv:Jt&&C(N.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&C(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&C(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(N.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&C(N.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&C(N.sheenColorMap.channel),sheenRoughnessMapUv:X&&C(N.sheenRoughnessMap.channel),specularMapUv:Y&&C(N.specularMap.channel),specularColorMapUv:mt&&C(N.specularColorMap.channel),specularIntensityMapUv:Tt&&C(N.specularIntensityMap.channel),transmissionMapUv:I&&C(N.transmissionMap.channel),thicknessMapUv:At&&C(N.thicknessMap.channel),alphaMapUv:j&&C(N.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Ot||Ne),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:_t.isPoints===!0&&!!ht.attributes.uv&&(dt||j),fog:!!Et,useFog:N.fog===!0,fogExp2:!!Et&&Et.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Lt,skinning:_t.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:zt,decodeVideoTexture:dt&&N.map.isVideoTexture===!0&&Be.getTransfer(N.map.colorSpace)===Ke,decodeVideoTextureEmissive:jt&&N.emissiveMap.isVideoTexture===!0&&Be.getTransfer(N.emissiveMap.colorSpace)===Ke,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ca,flipSided:N.side===Jn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:It&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&N.extensions.multiDraw===!0||gt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return ce.vertexUv1s=p.has(1),ce.vertexUv2s=p.has(2),ce.vertexUv3s=p.has(3),p.clear(),ce}function S(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const k in N.defines)w.push(k),w.push(N.defines[k]);return N.isRawShaderMaterial===!1&&(U(w,N),L(w,N),w.push(o.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function U(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function L(N,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),N.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),N.push(h.mask)}function R(N){const w=T[N.type];let k;if(w){const q=la[w];k=JE.clone(q.uniforms)}else k=N.uniforms;return k}function O(N,w){let k;for(let q=0,_t=x.length;q<_t;q++){const Et=x[q];if(Et.cacheKey===w){k=Et,++k.usedTimes;break}}return k===void 0&&(k=new AR(o,w,N,f),x.push(k)),k}function H(N){if(--N.usedTimes===0){const w=x.indexOf(N);x[w]=x[x.length-1],x.pop(),N.destroy()}}function B(N){m.remove(N)}function G(){m.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:R,acquireProgram:O,releaseProgram:H,releaseShaderCache:B,programs:x,dispose:G}}function NR(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function UR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Rx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Cx(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function d(g,v,E,T,C,y){let S=o[e];return S===void 0?(S={id:g.id,object:g,geometry:v,material:E,groupOrder:T,renderOrder:g.renderOrder,z:C,group:y},o[e]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=E,S.groupOrder=T,S.renderOrder=g.renderOrder,S.z=C,S.group=y),e++,S}function h(g,v,E,T,C,y){const S=d(g,v,E,T,C,y);E.transmission>0?r.push(S):E.transparent===!0?l.push(S):i.push(S)}function m(g,v,E,T,C,y){const S=d(g,v,E,T,C,y);E.transmission>0?r.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,v){i.length>1&&i.sort(g||UR),r.length>1&&r.sort(v||Rx),l.length>1&&l.sort(v||Rx)}function x(){for(let g=e,v=o.length;g<v;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:h,unshift:m,finish:x,sort:p}}function LR(){let o=new WeakMap;function e(r,l){const f=o.get(r);let d;return f===void 0?(d=new Cx,o.set(r,[d])):l>=f.length?(d=new Cx,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function OR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Ae};break;case"SpotLight":i={position:new it,direction:new it,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function zR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let PR=0;function IR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function BR(o){const e=new OR,i=zR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,f=new nn,d=new nn;function h(p){let x=0,g=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,T=0,C=0,y=0,S=0,U=0,L=0,R=0,O=0,H=0,B=0;p.sort(IR);for(let N=0,w=p.length;N<w;N++){const k=p[N],q=k.color,_t=k.intensity,Et=k.distance,ht=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=q.r*_t,g+=q.g*_t,v+=q.b*_t;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(k.sh.coefficients[Z],_t);B++}else if(k.isDirectionalLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ct=k.shadow,Q=i.get(k);Q.shadowIntensity=ct.intensity,Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,r.directionalShadow[E]=Q,r.directionalShadowMap[E]=ht,r.directionalShadowMatrix[E]=k.shadow.matrix,U++}r.directional[E]=Z,E++}else if(k.isSpotLight){const Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(q).multiplyScalar(_t),Z.distance=Et,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,r.spot[C]=Z;const ct=k.shadow;if(k.map&&(r.spotLightMap[O]=k.map,O++,ct.updateMatrices(k),k.castShadow&&H++),r.spotLightMatrix[C]=ct.matrix,k.castShadow){const Q=i.get(k);Q.shadowIntensity=ct.intensity,Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,r.spotShadow[C]=Q,r.spotShadowMap[C]=ht,R++}C++}else if(k.isRectAreaLight){const Z=e.get(k);Z.color.copy(q).multiplyScalar(_t),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=Z,y++}else if(k.isPointLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const ct=k.shadow,Q=i.get(k);Q.shadowIntensity=ct.intensity,Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,Q.shadowCameraNear=ct.camera.near,Q.shadowCameraFar=ct.camera.far,r.pointShadow[T]=Q,r.pointShadowMap[T]=ht,r.pointShadowMatrix[T]=k.shadow.matrix,L++}r.point[T]=Z,T++}else if(k.isHemisphereLight){const Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(_t),Z.groundColor.copy(k.groundColor).multiplyScalar(_t),r.hemi[S]=Z,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Kt.LTC_FLOAT_1,r.rectAreaLTC2=Kt.LTC_FLOAT_2):(r.rectAreaLTC1=Kt.LTC_HALF_1,r.rectAreaLTC2=Kt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==E||G.pointLength!==T||G.spotLength!==C||G.rectAreaLength!==y||G.hemiLength!==S||G.numDirectionalShadows!==U||G.numPointShadows!==L||G.numSpotShadows!==R||G.numSpotMaps!==O||G.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+O-H,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,G.directionalLength=E,G.pointLength=T,G.spotLength=C,G.rectAreaLength=y,G.hemiLength=S,G.numDirectionalShadows=U,G.numPointShadows=L,G.numSpotShadows=R,G.numSpotMaps=O,G.numLightProbes=B,r.version=PR++)}function m(p,x){let g=0,v=0,E=0,T=0,C=0;const y=x.matrixWorldInverse;for(let S=0,U=p.length;S<U;S++){const L=p[S];if(L.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),g++}else if(L.isSpotLight){const R=r.spot[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),d.identity(),f.copy(L.matrixWorld),f.premultiply(y),d.extractRotation(f),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function wx(o){const e=new BR(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function f(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:f,pushShadow:d}}function FR(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new wx(o),e.set(l,[h])):f>=d.length?(h=new wx(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const HR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VR(o,e,i){let r=new rm;const l=new Le,f=new Le,d=new hn,h=new fT({depthPacking:SE}),m=new dT,p={},x=i.maxTextureSize,g={[Ss]:Jn,[Jn]:Ss,[ca]:ca},v=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:HR,fragmentShader:GR}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const T=new ti;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ve(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kx;let S=this.type;this.render=function(H,B,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const N=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),q=o.state;q.setBlending(xs),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const _t=S!==za&&this.type===za,Et=S===za&&this.type!==za;for(let ht=0,Z=H.length;ht<Z;ht++){const ct=H[ht],Q=ct.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const Ct=Q.getFrameExtents();if(l.multiply(Ct),f.copy(Q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(f.x=Math.floor(x/Ct.x),l.x=f.x*Ct.x,Q.mapSize.x=f.x),l.y>x&&(f.y=Math.floor(x/Ct.y),l.y=f.y*Ct.y,Q.mapSize.y=f.y)),Q.map===null||_t===!0||Et===!0){const Ft=this.type!==za?{minFilter:Mi,magFilter:Mi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new nr(l.x,l.y,Ft),Q.map.texture.name=ct.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const wt=Q.getViewportCount();for(let Ft=0;Ft<wt;Ft++){const ae=Q.getViewport(Ft);d.set(f.x*ae.x,f.y*ae.y,f.x*ae.z,f.y*ae.w),q.viewport(d),Q.updateMatrices(ct,Ft),r=Q.getFrustum(),R(B,G,Q.camera,ct,this.type)}Q.isPointLightShadow!==!0&&this.type===za&&U(Q,G),Q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(N,w,k)};function U(H,B){const G=e.update(C);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new nr(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,G,v,C,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,G,E,C,null)}function L(H,B,G,N){let w=null;const k=G.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)w=k;else if(w=G.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=w.uuid,_t=B.uuid;let Et=p[q];Et===void 0&&(Et={},p[q]=Et);let ht=Et[_t];ht===void 0&&(ht=w.clone(),Et[_t]=ht,B.addEventListener("dispose",O)),w=ht}if(w.visible=B.visible,w.wireframe=B.wireframe,N===za?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:g[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=o.properties.get(w);q.light=G}return w}function R(H,B,G,N,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===za)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,H.matrixWorld);const _t=e.update(H),Et=H.material;if(Array.isArray(Et)){const ht=_t.groups;for(let Z=0,ct=ht.length;Z<ct;Z++){const Q=ht[Z],Ct=Et[Q.materialIndex];if(Ct&&Ct.visible){const wt=L(H,Ct,N,w);H.onBeforeShadow(o,H,B,G,_t,wt,Q),o.renderBufferDirect(G,null,_t,wt,H,Q),H.onAfterShadow(o,H,B,G,_t,wt,Q)}}}else if(Et.visible){const ht=L(H,Et,N,w);H.onBeforeShadow(o,H,B,G,_t,ht,null),o.renderBufferDirect(G,null,_t,ht,H,null),H.onAfterShadow(o,H,B,G,_t,ht,null)}}const q=H.children;for(let _t=0,Et=q.length;_t<Et;_t++)R(q[_t],B,G,N,w)}function O(H){H.target.removeEventListener("dispose",O);for(const G in p){const N=p[G],w=H.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const kR={[op]:lp,[cp]:dp,[up]:hp,[po]:fp,[lp]:op,[dp]:cp,[hp]:up,[fp]:po};function jR(o,e){function i(){let I=!1;const At=new hn;let Nt=null;const j=new hn(0,0,0,0);return{setMask:function(ut){Nt!==ut&&!I&&(o.colorMask(ut,ut,ut,ut),Nt=ut)},setLocked:function(ut){I=ut},setClear:function(ut,vt,It,zt,ce){ce===!0&&(ut*=zt,vt*=zt,It*=zt),At.set(ut,vt,It,zt),j.equals(At)===!1&&(o.clearColor(ut,vt,It,zt),j.copy(At))},reset:function(){I=!1,Nt=null,j.set(-1,0,0,0)}}}function r(){let I=!1,At=!1,Nt=null,j=null,ut=null;return{setReversed:function(vt){if(At!==vt){const It=e.get("EXT_clip_control");vt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),At=vt;const zt=ut;ut=null,this.setClear(zt)}},getReversed:function(){return At},setTest:function(vt){vt?ot(o.DEPTH_TEST):Lt(o.DEPTH_TEST)},setMask:function(vt){Nt!==vt&&!I&&(o.depthMask(vt),Nt=vt)},setFunc:function(vt){if(At&&(vt=kR[vt]),j!==vt){switch(vt){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case cp:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case up:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case dp:o.depthFunc(o.GREATER);break;case hp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}j=vt}},setLocked:function(vt){I=vt},setClear:function(vt){ut!==vt&&(At&&(vt=1-vt),o.clearDepth(vt),ut=vt)},reset:function(){I=!1,Nt=null,j=null,ut=null,At=!1}}}function l(){let I=!1,At=null,Nt=null,j=null,ut=null,vt=null,It=null,zt=null,ce=null;return{setTest:function(de){I||(de?ot(o.STENCIL_TEST):Lt(o.STENCIL_TEST))},setMask:function(de){At!==de&&!I&&(o.stencilMask(de),At=de)},setFunc:function(de,Ce,Xe){(Nt!==de||j!==Ce||ut!==Xe)&&(o.stencilFunc(de,Ce,Xe),Nt=de,j=Ce,ut=Xe)},setOp:function(de,Ce,Xe){(vt!==de||It!==Ce||zt!==Xe)&&(o.stencilOp(de,Ce,Xe),vt=de,It=Ce,zt=Xe)},setLocked:function(de){I=de},setClear:function(de){ce!==de&&(o.clearStencil(de),ce=de)},reset:function(){I=!1,At=null,Nt=null,j=null,ut=null,vt=null,It=null,zt=null,ce=null}}}const f=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},v=new WeakMap,E=[],T=null,C=!1,y=null,S=null,U=null,L=null,R=null,O=null,H=null,B=new Ae(0,0,0),G=0,N=!1,w=null,k=null,q=null,_t=null,Et=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ct=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=ct>=1):Q.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=ct>=2);let Ct=null,wt={};const Ft=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),me=new hn().fromArray(Ft),F=new hn().fromArray(ae);function st(I,At,Nt,j){const ut=new Uint8Array(4),vt=o.createTexture();o.bindTexture(I,vt),o.texParameteri(I,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(I,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Nt;It++)I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,j,0,o.RGBA,o.UNSIGNED_BYTE,ut):o.texImage2D(At+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ut);return vt}const et={};et[o.TEXTURE_2D]=st(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=st(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=st(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=st(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ot(o.DEPTH_TEST),d.setFunc(po),Xt(!1),Ot(R_),ot(o.CULL_FACE),se(xs);function ot(I){x[I]!==!0&&(o.enable(I),x[I]=!0)}function Lt(I){x[I]!==!1&&(o.disable(I),x[I]=!1)}function pt(I,At){return g[I]!==At?(o.bindFramebuffer(I,At),g[I]=At,I===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=At),I===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=At),!0):!1}function gt(I,At){let Nt=E,j=!1;if(I){Nt=v.get(At),Nt===void 0&&(Nt=[],v.set(At,Nt));const ut=I.textures;if(Nt.length!==ut.length||Nt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,It=ut.length;vt<It;vt++)Nt[vt]=o.COLOR_ATTACHMENT0+vt;Nt.length=ut.length,j=!0}}else Nt[0]!==o.BACK&&(Nt[0]=o.BACK,j=!0);j&&o.drawBuffers(Nt)}function dt(I){return T!==I?(o.useProgram(I),T=I,!0):!1}const Dt={[Ks]:o.FUNC_ADD,[YM]:o.FUNC_SUBTRACT,[ZM]:o.FUNC_REVERSE_SUBTRACT};Dt[KM]=o.MIN,Dt[QM]=o.MAX;const z={[JM]:o.ZERO,[$M]:o.ONE,[tE]:o.SRC_COLOR,[sp]:o.SRC_ALPHA,[rE]:o.SRC_ALPHA_SATURATE,[aE]:o.DST_COLOR,[nE]:o.DST_ALPHA,[eE]:o.ONE_MINUS_SRC_COLOR,[rp]:o.ONE_MINUS_SRC_ALPHA,[sE]:o.ONE_MINUS_DST_COLOR,[iE]:o.ONE_MINUS_DST_ALPHA,[oE]:o.CONSTANT_COLOR,[lE]:o.ONE_MINUS_CONSTANT_COLOR,[cE]:o.CONSTANT_ALPHA,[uE]:o.ONE_MINUS_CONSTANT_ALPHA};function se(I,At,Nt,j,ut,vt,It,zt,ce,de){if(I===xs){C===!0&&(Lt(o.BLEND),C=!1);return}if(C===!1&&(ot(o.BLEND),C=!0),I!==WM){if(I!==y||de!==N){if((S!==Ks||R!==Ks)&&(o.blendEquation(o.FUNC_ADD),S=Ks,R=Ks),de)switch(I){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case C_:o.blendFunc(o.ONE,o.ONE);break;case w_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case C_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case w_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case D_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}U=null,L=null,O=null,H=null,B.set(0,0,0),G=0,y=I,N=de}return}ut=ut||At,vt=vt||Nt,It=It||j,(At!==S||ut!==R)&&(o.blendEquationSeparate(Dt[At],Dt[ut]),S=At,R=ut),(Nt!==U||j!==L||vt!==O||It!==H)&&(o.blendFuncSeparate(z[Nt],z[j],z[vt],z[It]),U=Nt,L=j,O=vt,H=It),(zt.equals(B)===!1||ce!==G)&&(o.blendColor(zt.r,zt.g,zt.b,ce),B.copy(zt),G=ce),y=I,N=!1}function Vt(I,At){I.side===ca?Lt(o.CULL_FACE):ot(o.CULL_FACE);let Nt=I.side===Jn;At&&(Nt=!Nt),Xt(Nt),I.blending===uo&&I.transparent===!1?se(xs):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),d.setFunc(I.depthFunc),d.setTest(I.depthTest),d.setMask(I.depthWrite),f.setMask(I.colorWrite);const j=I.stencilWrite;h.setTest(j),j&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Lt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(I){w!==I&&(I?o.frontFace(o.CW):o.frontFace(o.CCW),w=I)}function Ot(I){I!==XM?(ot(o.CULL_FACE),I!==k&&(I===R_?o.cullFace(o.BACK):I===qM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Lt(o.CULL_FACE),k=I}function Wt(I){I!==q&&(Z&&o.lineWidth(I),q=I)}function jt(I,At,Nt){I?(ot(o.POLYGON_OFFSET_FILL),(_t!==At||Et!==Nt)&&(o.polygonOffset(At,Nt),_t=At,Et=Nt)):Lt(o.POLYGON_OFFSET_FILL)}function fe(I){I?ot(o.SCISSOR_TEST):Lt(o.SCISSOR_TEST)}function Ee(I){I===void 0&&(I=o.TEXTURE0+ht-1),Ct!==I&&(o.activeTexture(I),Ct=I)}function Ne(I,At,Nt){Nt===void 0&&(Ct===null?Nt=o.TEXTURE0+ht-1:Nt=Ct);let j=wt[Nt];j===void 0&&(j={type:void 0,texture:void 0},wt[Nt]=j),(j.type!==I||j.texture!==At)&&(Ct!==Nt&&(o.activeTexture(Nt),Ct=Nt),o.bindTexture(I,At||et[I]),j.type=I,j.texture=At)}function P(){const I=wt[Ct];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{o.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{o.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{o.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{o.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{o.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{o.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{o.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{o.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){me.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function X(I){F.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),F.copy(I))}function Y(I,At){let Nt=p.get(At);Nt===void 0&&(Nt=new WeakMap,p.set(At,Nt));let j=Nt.get(I);j===void 0&&(j=o.getUniformBlockIndex(At,I.name),Nt.set(I,j))}function mt(I,At){const j=p.get(At).get(I);m.get(At)!==j&&(o.uniformBlockBinding(At,j,I.__bindingPointIndex),m.set(At,j))}function Tt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Ct=null,wt={},g={},v=new WeakMap,E=[],T=null,C=!1,y=null,S=null,U=null,L=null,R=null,O=null,H=null,B=new Ae(0,0,0),G=0,N=!1,w=null,k=null,q=null,_t=null,Et=null,me.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ot,disable:Lt,bindFramebuffer:pt,drawBuffers:gt,useProgram:dt,setBlending:se,setMaterial:Vt,setFlipSided:Xt,setCullFace:Ot,setLineWidth:Wt,setPolygonOffset:jt,setScissorTest:fe,activeTexture:Ee,bindTexture:Ne,unbindTexture:P,compressedTexImage2D:A,compressedTexImage3D:rt,texImage2D:ee,texImage3D:Pt,updateUBOMapping:Y,uniformBlockBinding:mt,texStorage2D:Ht,texStorage3D:$t,texSubImage2D:St,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Jt,scissor:kt,viewport:X,reset:Tt}}function XR(o,e,i,r,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,x=new WeakMap;let g;const v=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,A){return E?new OffscreenCanvas(P,A):Fu("canvas")}function C(P,A,rt){let St=1;const Ut=Ne(P);if((Ut.width>rt||Ut.height>rt)&&(St=rt/Math.max(Ut.width,Ut.height)),St<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Mt=Math.floor(St*Ut.width),Jt=Math.floor(St*Ut.height);g===void 0&&(g=T(Mt,Jt));const Ht=A?T(Mt,Jt):g;return Ht.width=Mt,Ht.height=Jt,Ht.getContext("2d").drawImage(P,0,0,Mt,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+Mt+"x"+Jt+")."),Ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),P;return P}function y(P){return P.generateMipmaps}function S(P){o.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(P,A,rt,St,Ut=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Mt=A;if(A===o.RED&&(rt===o.FLOAT&&(Mt=o.R32F),rt===o.HALF_FLOAT&&(Mt=o.R16F),rt===o.UNSIGNED_BYTE&&(Mt=o.R8)),A===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(Mt=o.R8UI),rt===o.UNSIGNED_SHORT&&(Mt=o.R16UI),rt===o.UNSIGNED_INT&&(Mt=o.R32UI),rt===o.BYTE&&(Mt=o.R8I),rt===o.SHORT&&(Mt=o.R16I),rt===o.INT&&(Mt=o.R32I)),A===o.RG&&(rt===o.FLOAT&&(Mt=o.RG32F),rt===o.HALF_FLOAT&&(Mt=o.RG16F),rt===o.UNSIGNED_BYTE&&(Mt=o.RG8)),A===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(Mt=o.RG8UI),rt===o.UNSIGNED_SHORT&&(Mt=o.RG16UI),rt===o.UNSIGNED_INT&&(Mt=o.RG32UI),rt===o.BYTE&&(Mt=o.RG8I),rt===o.SHORT&&(Mt=o.RG16I),rt===o.INT&&(Mt=o.RG32I)),A===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(Mt=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(Mt=o.RGB16UI),rt===o.UNSIGNED_INT&&(Mt=o.RGB32UI),rt===o.BYTE&&(Mt=o.RGB8I),rt===o.SHORT&&(Mt=o.RGB16I),rt===o.INT&&(Mt=o.RGB32I)),A===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(Mt=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(Mt=o.RGBA16UI),rt===o.UNSIGNED_INT&&(Mt=o.RGBA32UI),rt===o.BYTE&&(Mt=o.RGBA8I),rt===o.SHORT&&(Mt=o.RGBA16I),rt===o.INT&&(Mt=o.RGBA32I)),A===o.RGB&&(rt===o.UNSIGNED_INT_5_9_9_9_REV&&(Mt=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(Mt=o.R11F_G11F_B10F)),A===o.RGBA){const Jt=Ut?Iu:Be.getTransfer(St);rt===o.FLOAT&&(Mt=o.RGBA32F),rt===o.HALF_FLOAT&&(Mt=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(Mt=Jt===Ke?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(Mt=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(Mt=o.RGB5_A1)}return(Mt===o.R16F||Mt===o.R32F||Mt===o.RG16F||Mt===o.RG32F||Mt===o.RGBA16F||Mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Mt}function R(P,A){let rt;return P?A===null||A===er||A===Al?rt=o.DEPTH24_STENCIL8:A===fa?rt=o.DEPTH32F_STENCIL8:A===bl&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===er||A===Al?rt=o.DEPTH_COMPONENT24:A===fa?rt=o.DEPTH_COMPONENT32F:A===bl&&(rt=o.DEPTH_COMPONENT16),rt}function O(P,A){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mi&&P.minFilter!==ua?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function H(P){const A=P.target;A.removeEventListener("dispose",H),G(A),A.isVideoTexture&&x.delete(A)}function B(P){const A=P.target;A.removeEventListener("dispose",B),w(A)}function G(P){const A=r.get(P);if(A.__webglInit===void 0)return;const rt=P.source,St=v.get(rt);if(St){const Ut=St[A.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&N(P),Object.keys(St).length===0&&v.delete(rt)}r.remove(P)}function N(P){const A=r.get(P);o.deleteTexture(A.__webglTexture);const rt=P.source,St=v.get(rt);delete St[A.__cacheKey],d.memory.textures--}function w(P){const A=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(A.__webglFramebuffer[St]))for(let Ut=0;Ut<A.__webglFramebuffer[St].length;Ut++)o.deleteFramebuffer(A.__webglFramebuffer[St][Ut]);else o.deleteFramebuffer(A.__webglFramebuffer[St]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[St])}else{if(Array.isArray(A.__webglFramebuffer))for(let St=0;St<A.__webglFramebuffer.length;St++)o.deleteFramebuffer(A.__webglFramebuffer[St]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let St=0;St<A.__webglColorRenderbuffer.length;St++)A.__webglColorRenderbuffer[St]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[St]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const rt=P.textures;for(let St=0,Ut=rt.length;St<Ut;St++){const Mt=r.get(rt[St]);Mt.__webglTexture&&(o.deleteTexture(Mt.__webglTexture),d.memory.textures--),r.remove(rt[St])}r.remove(P)}let k=0;function q(){k=0}function _t(){const P=k;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),k+=1,P}function Et(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ht(P,A){const rt=r.get(P);if(P.isVideoTexture&&fe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&rt.__version!==P.version){const St=P.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(rt,P,A);return}}else P.isExternalTexture&&(rt.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+A)}function Z(P,A){const rt=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&rt.__version!==P.version){et(rt,P,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+A)}function ct(P,A){const rt=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&rt.__version!==P.version){et(rt,P,A);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+A)}function Q(P,A){const rt=r.get(P);if(P.version>0&&rt.__version!==P.version){ot(rt,P,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+A)}const Ct={[gp]:o.REPEAT,[$s]:o.CLAMP_TO_EDGE,[vp]:o.MIRRORED_REPEAT},wt={[Mi]:o.NEAREST,[xE]:o.NEAREST_MIPMAP_NEAREST,[su]:o.NEAREST_MIPMAP_LINEAR,[ua]:o.LINEAR,[Th]:o.LINEAR_MIPMAP_NEAREST,[tr]:o.LINEAR_MIPMAP_LINEAR},Ft={[EE]:o.NEVER,[wE]:o.ALWAYS,[TE]:o.LESS,[ny]:o.LEQUAL,[bE]:o.EQUAL,[CE]:o.GEQUAL,[AE]:o.GREATER,[RE]:o.NOTEQUAL};function ae(P,A){if(A.type===fa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ua||A.magFilter===Th||A.magFilter===su||A.magFilter===tr||A.minFilter===ua||A.minFilter===Th||A.minFilter===su||A.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Ct[A.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Ct[A.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Ct[A.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,wt[A.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,wt[A.minFilter]),A.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,Ft[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Mi||A.minFilter!==su&&A.minFilter!==tr||A.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function me(P,A){let rt=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",H));const St=A.source;let Ut=v.get(St);Ut===void 0&&(Ut={},v.set(St,Ut));const Mt=Et(A);if(Mt!==P.__cacheKey){Ut[Mt]===void 0&&(Ut[Mt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,rt=!0),Ut[Mt].usedTimes++;const Jt=Ut[P.__cacheKey];Jt!==void 0&&(Ut[P.__cacheKey].usedTimes--,Jt.usedTimes===0&&N(A)),P.__cacheKey=Mt,P.__webglTexture=Ut[Mt].texture}return rt}function F(P,A,rt){return Math.floor(Math.floor(P/rt)/A)}function st(P,A,rt,St){const Mt=P.updateRanges;if(Mt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,rt,St,A.data);else{Mt.sort((Pt,kt)=>Pt.start-kt.start);let Jt=0;for(let Pt=1;Pt<Mt.length;Pt++){const kt=Mt[Jt],X=Mt[Pt],Y=kt.start+kt.count,mt=F(X.start,A.width,4),Tt=F(kt.start,A.width,4);X.start<=Y+1&&mt===Tt&&F(X.start+X.count-1,A.width,4)===mt?kt.count=Math.max(kt.count,X.start+X.count-kt.start):(++Jt,Mt[Jt]=X)}Mt.length=Jt+1;const Ht=o.getParameter(o.UNPACK_ROW_LENGTH),$t=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Pt=0,kt=Mt.length;Pt<kt;Pt++){const X=Mt[Pt],Y=Math.floor(X.start/4),mt=Math.ceil(X.count/4),Tt=Y%A.width,I=Math.floor(Y/A.width),At=mt,Nt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Tt),o.pixelStorei(o.UNPACK_SKIP_ROWS,I),i.texSubImage2D(o.TEXTURE_2D,0,Tt,I,At,Nt,rt,St,A.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ht),o.pixelStorei(o.UNPACK_SKIP_PIXELS,$t),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function et(P,A,rt){let St=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(St=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(St=o.TEXTURE_3D);const Ut=me(P,A),Mt=A.source;i.bindTexture(St,P.__webglTexture,o.TEXTURE0+rt);const Jt=r.get(Mt);if(Mt.version!==Jt.__version||Ut===!0){i.activeTexture(o.TEXTURE0+rt);const Ht=Be.getPrimaries(Be.workingColorSpace),$t=A.colorSpace===_s?null:Be.getPrimaries(A.colorSpace),ee=A.colorSpace===_s||Ht===$t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Pt=C(A.image,!1,l.maxTextureSize);Pt=Ee(A,Pt);const kt=f.convert(A.format,A.colorSpace),X=f.convert(A.type);let Y=L(A.internalFormat,kt,X,A.colorSpace,A.isVideoTexture);ae(St,A);let mt;const Tt=A.mipmaps,I=A.isVideoTexture!==!0,At=Jt.__version===void 0||Ut===!0,Nt=Mt.dataReady,j=O(A,Pt);if(A.isDepthTexture)Y=R(A.format===Cl,A.type),At&&(I?i.texStorage2D(o.TEXTURE_2D,1,Y,Pt.width,Pt.height):i.texImage2D(o.TEXTURE_2D,0,Y,Pt.width,Pt.height,0,kt,X,null));else if(A.isDataTexture)if(Tt.length>0){I&&At&&i.texStorage2D(o.TEXTURE_2D,j,Y,Tt[0].width,Tt[0].height);for(let ut=0,vt=Tt.length;ut<vt;ut++)mt=Tt[ut],I?Nt&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,mt.width,mt.height,kt,X,mt.data):i.texImage2D(o.TEXTURE_2D,ut,Y,mt.width,mt.height,0,kt,X,mt.data);A.generateMipmaps=!1}else I?(At&&i.texStorage2D(o.TEXTURE_2D,j,Y,Pt.width,Pt.height),Nt&&st(A,Pt,kt,X)):i.texImage2D(o.TEXTURE_2D,0,Y,Pt.width,Pt.height,0,kt,X,Pt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){I&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,j,Y,Tt[0].width,Tt[0].height,Pt.depth);for(let ut=0,vt=Tt.length;ut<vt;ut++)if(mt=Tt[ut],A.format!==Zi)if(kt!==null)if(I){if(Nt)if(A.layerUpdates.size>0){const It=sx(mt.width,mt.height,A.format,A.type);for(const zt of A.layerUpdates){const ce=mt.data.subarray(zt*It/mt.data.BYTES_PER_ELEMENT,(zt+1)*It/mt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,zt,mt.width,mt.height,1,kt,ce)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,Pt.depth,kt,mt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,Y,mt.width,mt.height,Pt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?Nt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,Pt.depth,kt,X,mt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ut,Y,mt.width,mt.height,Pt.depth,0,kt,X,mt.data)}else{I&&At&&i.texStorage2D(o.TEXTURE_2D,j,Y,Tt[0].width,Tt[0].height);for(let ut=0,vt=Tt.length;ut<vt;ut++)mt=Tt[ut],A.format!==Zi?kt!==null?I?Nt&&i.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,mt.width,mt.height,kt,mt.data):i.compressedTexImage2D(o.TEXTURE_2D,ut,Y,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?Nt&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,mt.width,mt.height,kt,X,mt.data):i.texImage2D(o.TEXTURE_2D,ut,Y,mt.width,mt.height,0,kt,X,mt.data)}else if(A.isDataArrayTexture)if(I){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,j,Y,Pt.width,Pt.height,Pt.depth),Nt)if(A.layerUpdates.size>0){const ut=sx(Pt.width,Pt.height,A.format,A.type);for(const vt of A.layerUpdates){const It=Pt.data.subarray(vt*ut/Pt.data.BYTES_PER_ELEMENT,(vt+1)*ut/Pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Pt.width,Pt.height,1,kt,X,It)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Pt.width,Pt.height,Pt.depth,kt,X,Pt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Y,Pt.width,Pt.height,Pt.depth,0,kt,X,Pt.data);else if(A.isData3DTexture)I?(At&&i.texStorage3D(o.TEXTURE_3D,j,Y,Pt.width,Pt.height,Pt.depth),Nt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Pt.width,Pt.height,Pt.depth,kt,X,Pt.data)):i.texImage3D(o.TEXTURE_3D,0,Y,Pt.width,Pt.height,Pt.depth,0,kt,X,Pt.data);else if(A.isFramebufferTexture){if(At)if(I)i.texStorage2D(o.TEXTURE_2D,j,Y,Pt.width,Pt.height);else{let ut=Pt.width,vt=Pt.height;for(let It=0;It<j;It++)i.texImage2D(o.TEXTURE_2D,It,Y,ut,vt,0,kt,X,null),ut>>=1,vt>>=1}}else if(Tt.length>0){if(I&&At){const ut=Ne(Tt[0]);i.texStorage2D(o.TEXTURE_2D,j,Y,ut.width,ut.height)}for(let ut=0,vt=Tt.length;ut<vt;ut++)mt=Tt[ut],I?Nt&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,kt,X,mt):i.texImage2D(o.TEXTURE_2D,ut,Y,kt,X,mt);A.generateMipmaps=!1}else if(I){if(At){const ut=Ne(Pt);i.texStorage2D(o.TEXTURE_2D,j,Y,ut.width,ut.height)}Nt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,kt,X,Pt)}else i.texImage2D(o.TEXTURE_2D,0,Y,kt,X,Pt);y(A)&&S(St),Jt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ot(P,A,rt){if(A.image.length!==6)return;const St=me(P,A),Ut=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+rt);const Mt=r.get(Ut);if(Ut.version!==Mt.__version||St===!0){i.activeTexture(o.TEXTURE0+rt);const Jt=Be.getPrimaries(Be.workingColorSpace),Ht=A.colorSpace===_s?null:Be.getPrimaries(A.colorSpace),$t=A.colorSpace===_s||Jt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const ee=A.isCompressedTexture||A.image[0].isCompressedTexture,Pt=A.image[0]&&A.image[0].isDataTexture,kt=[];for(let vt=0;vt<6;vt++)!ee&&!Pt?kt[vt]=C(A.image[vt],!0,l.maxCubemapSize):kt[vt]=Pt?A.image[vt].image:A.image[vt],kt[vt]=Ee(A,kt[vt]);const X=kt[0],Y=f.convert(A.format,A.colorSpace),mt=f.convert(A.type),Tt=L(A.internalFormat,Y,mt,A.colorSpace),I=A.isVideoTexture!==!0,At=Mt.__version===void 0||St===!0,Nt=Ut.dataReady;let j=O(A,X);ae(o.TEXTURE_CUBE_MAP,A);let ut;if(ee){I&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,j,Tt,X.width,X.height);for(let vt=0;vt<6;vt++){ut=kt[vt].mipmaps;for(let It=0;It<ut.length;It++){const zt=ut[It];A.format!==Zi?Y!==null?I?Nt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,zt.width,zt.height,Y,zt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,Tt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,zt.width,zt.height,Y,mt,zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,Tt,zt.width,zt.height,0,Y,mt,zt.data)}}}else{if(ut=A.mipmaps,I&&At){ut.length>0&&j++;const vt=Ne(kt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,j,Tt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Pt){I?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt[vt].width,kt[vt].height,Y,mt,kt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Tt,kt[vt].width,kt[vt].height,0,Y,mt,kt[vt].data);for(let It=0;It<ut.length;It++){const ce=ut[It].image[vt].image;I?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,ce.width,ce.height,Y,mt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,Tt,ce.width,ce.height,0,Y,mt,ce.data)}}else{I?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Y,mt,kt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Tt,Y,mt,kt[vt]);for(let It=0;It<ut.length;It++){const zt=ut[It];I?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,Y,mt,zt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,Tt,Y,mt,zt.image[vt])}}}y(A)&&S(o.TEXTURE_CUBE_MAP),Mt.__version=Ut.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Lt(P,A,rt,St,Ut,Mt){const Jt=f.convert(rt.format,rt.colorSpace),Ht=f.convert(rt.type),$t=L(rt.internalFormat,Jt,Ht,rt.colorSpace),ee=r.get(A),Pt=r.get(rt);if(Pt.__renderTarget=A,!ee.__hasExternalTextures){const kt=Math.max(1,A.width>>Mt),X=Math.max(1,A.height>>Mt);Ut===o.TEXTURE_3D||Ut===o.TEXTURE_2D_ARRAY?i.texImage3D(Ut,Mt,$t,kt,X,A.depth,0,Jt,Ht,null):i.texImage2D(Ut,Mt,$t,kt,X,0,Jt,Ht,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),jt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,Ut,Pt.__webglTexture,0,Wt(A)):(Ut===o.TEXTURE_2D||Ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,St,Ut,Pt.__webglTexture,Mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function pt(P,A,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,P),A.depthBuffer){const St=A.depthTexture,Ut=St&&St.isDepthTexture?St.type:null,Mt=R(A.stencilBuffer,Ut),Jt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=Wt(A);jt(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ht,Mt,A.width,A.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,Mt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Jt,o.RENDERBUFFER,P)}else{const St=A.textures;for(let Ut=0;Ut<St.length;Ut++){const Mt=St[Ut],Jt=f.convert(Mt.format,Mt.colorSpace),Ht=f.convert(Mt.type),$t=L(Mt.internalFormat,Jt,Ht,Mt.colorSpace),ee=Wt(A);rt&&jt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,$t,A.width,A.height):jt(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,$t,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,$t,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function gt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=r.get(A.depthTexture);St.__renderTarget=A,(!St.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ht(A.depthTexture,0);const Ut=St.__webglTexture,Mt=Wt(A);if(A.depthTexture.format===Rl)jt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0);else if(A.depthTexture.format===Cl)jt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function dt(P){const A=r.get(P),rt=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const St=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),St){const Ut=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,St.removeEventListener("dispose",Ut)};St.addEventListener("dispose",Ut),A.__depthDisposeCallback=Ut}A.__boundDepthTexture=St}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const St=P.texture.mipmaps;St&&St.length>0?gt(A.__webglFramebuffer[0],P):gt(A.__webglFramebuffer,P)}else if(rt){A.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[St]),A.__webglDepthbuffer[St]===void 0)A.__webglDepthbuffer[St]=o.createRenderbuffer(),pt(A.__webglDepthbuffer[St],P,!1);else{const Ut=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer[St];o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,Mt)}}else{const St=P.texture.mipmaps;if(St&&St.length>0?i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),pt(A.__webglDepthbuffer,P,!1);else{const Ut=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,Mt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(P,A,rt){const St=r.get(P);A!==void 0&&Lt(St.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&dt(P)}function z(P){const A=P.texture,rt=r.get(P),St=r.get(A);P.addEventListener("dispose",B);const Ut=P.textures,Mt=P.isWebGLCubeRenderTarget===!0,Jt=Ut.length>1;if(Jt||(St.__webglTexture===void 0&&(St.__webglTexture=o.createTexture()),St.__version=A.version,d.memory.textures++),Mt){rt.__webglFramebuffer=[];for(let Ht=0;Ht<6;Ht++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[Ht]=[];for(let $t=0;$t<A.mipmaps.length;$t++)rt.__webglFramebuffer[Ht][$t]=o.createFramebuffer()}else rt.__webglFramebuffer[Ht]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ht=0;Ht<A.mipmaps.length;Ht++)rt.__webglFramebuffer[Ht]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Jt)for(let Ht=0,$t=Ut.length;Ht<$t;Ht++){const ee=r.get(Ut[Ht]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&jt(P)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ht=0;Ht<Ut.length;Ht++){const $t=Ut[Ht];rt.__webglColorRenderbuffer[Ht]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ht]);const ee=f.convert($t.format,$t.colorSpace),Pt=f.convert($t.type),kt=L($t.internalFormat,ee,Pt,$t.colorSpace,P.isXRRenderTarget===!0),X=Wt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,X,kt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ht])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),pt(rt.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Mt){i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),ae(o.TEXTURE_CUBE_MAP,A);for(let Ht=0;Ht<6;Ht++)if(A.mipmaps&&A.mipmaps.length>0)for(let $t=0;$t<A.mipmaps.length;$t++)Lt(rt.__webglFramebuffer[Ht][$t],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$t);else Lt(rt.__webglFramebuffer[Ht],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0);y(A)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let Ht=0,$t=Ut.length;Ht<$t;Ht++){const ee=Ut[Ht],Pt=r.get(ee);let kt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(kt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(kt,Pt.__webglTexture),ae(kt,ee),Lt(rt.__webglFramebuffer,P,ee,o.COLOR_ATTACHMENT0+Ht,kt,0),y(ee)&&S(kt)}i.unbindTexture()}else{let Ht=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ht=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ht,St.__webglTexture),ae(Ht,A),A.mipmaps&&A.mipmaps.length>0)for(let $t=0;$t<A.mipmaps.length;$t++)Lt(rt.__webglFramebuffer[$t],P,A,o.COLOR_ATTACHMENT0,Ht,$t);else Lt(rt.__webglFramebuffer,P,A,o.COLOR_ATTACHMENT0,Ht,0);y(A)&&S(Ht),i.unbindTexture()}P.depthBuffer&&dt(P)}function se(P){const A=P.textures;for(let rt=0,St=A.length;rt<St;rt++){const Ut=A[rt];if(y(Ut)){const Mt=U(P),Jt=r.get(Ut).__webglTexture;i.bindTexture(Mt,Jt),S(Mt),i.unbindTexture()}}}const Vt=[],Xt=[];function Ot(P){if(P.samples>0){if(jt(P)===!1){const A=P.textures,rt=P.width,St=P.height;let Ut=o.COLOR_BUFFER_BIT;const Mt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Jt=r.get(P),Ht=A.length>1;if(Ht)for(let ee=0;ee<A.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const $t=P.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ee=0;ee<A.length;ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ut|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ut|=o.STENCIL_BUFFER_BIT)),Ht){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Jt.__webglColorRenderbuffer[ee]);const Pt=r.get(A[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,rt,St,0,0,rt,St,Ut,o.NEAREST),m===!0&&(Vt.length=0,Xt.length=0,Vt.push(o.COLOR_ATTACHMENT0+ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Vt.push(Mt),Xt.push(Mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Vt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ht)for(let ee=0;ee<A.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Jt.__webglColorRenderbuffer[ee]);const Pt=r.get(A[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const A=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Wt(P){return Math.min(l.maxSamples,P.samples)}function jt(P){const A=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function fe(P){const A=d.render.frame;x.get(P)!==A&&(x.set(P,A),P.update())}function Ee(P,A){const rt=P.colorSpace,St=P.format,Ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||rt!==vo&&rt!==_s&&(Be.getTransfer(rt)===Ke?(St!==Zi||Ut!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),A}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=_t,this.resetTextureUnits=q,this.setTexture2D=ht,this.setTexture2DArray=Z,this.setTexture3D=ct,this.setTextureCube=Q,this.rebindTextures=Dt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=jt}function qR(o,e){function i(r,l=_s){let f;const d=Be.getTransfer(l);if(r===ha)return o.UNSIGNED_BYTE;if(r===Jp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Kx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Qx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Yx)return o.BYTE;if(r===Zx)return o.SHORT;if(r===bl)return o.UNSIGNED_SHORT;if(r===Qp)return o.INT;if(r===er)return o.UNSIGNED_INT;if(r===fa)return o.FLOAT;if(r===Nl)return o.HALF_FLOAT;if(r===Jx)return o.ALPHA;if(r===$x)return o.RGB;if(r===Zi)return o.RGBA;if(r===Rl)return o.DEPTH_COMPONENT;if(r===Cl)return o.DEPTH_STENCIL;if(r===tm)return o.RED;if(r===em)return o.RED_INTEGER;if(r===ty)return o.RG;if(r===nm)return o.RG_INTEGER;if(r===im)return o.RGBA_INTEGER;if(r===Nu||r===Uu||r===Lu||r===Ou)if(d===Ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Nu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ou)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Nu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ou)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_p||r===xp||r===yp||r===Sp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===_p)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mp||r===Ep||r===Tp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Mp||r===Ep)return d===Ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Tp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Np||r===Up||r===Lp||r===Op||r===zp||r===Pp||r===Ip||r===Bp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===bp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ap)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Np)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Up)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Op)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ip)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fp||r===Hp||r===Gp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Fp)return d===Ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vp||r===kp||r===jp||r===Xp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Vp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===kp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Al?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new my(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:WR,fragmentShader:YR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ve(new xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KR extends yo{constructor(e,i){super();const r=this;let l=null,f=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,v=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",y=new ZR,S={},U=i.getContextAttributes();let L=null,R=null;const O=[],H=[],B=new Le;let G=null;const N=new Oi;N.viewport=new hn;const w=new Oi;w.viewport=new hn;const k=[N,w],q=new vT;let _t=null,Et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ot=O[et];return ot===void 0&&(ot=new Wh,O[et]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(et){let ot=O[et];return ot===void 0&&(ot=new Wh,O[et]=ot),ot.getGripSpace()},this.getHand=function(et){let ot=O[et];return ot===void 0&&(ot=new Wh,O[et]=ot),ot.getHandSpace()};function ht(et){const ot=H.indexOf(et.inputSource);if(ot===-1)return;const Lt=O[ot];Lt!==void 0&&(Lt.update(et.inputSource,et.frame,p||d),Lt.dispatchEvent({type:et.type,data:et.inputSource}))}function Z(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",Z),l.removeEventListener("inputsourceschange",ct);for(let et=0;et<O.length;et++){const ot=H[et];ot!==null&&(H[et]=null,O[et].disconnect(ot))}_t=null,Et=null,y.reset();for(const et in S)delete S[et];e.setRenderTarget(L),E=null,v=null,g=null,l=null,R=null,st.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){f=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",Z),l.addEventListener("inputsourceschange",ct),U.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,pt=null,gt=null;U.depth&&(gt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=U.stencil?Cl:Rl,pt=U.stencil?Al:er);const dt={colorFormat:i.RGBA8,depthFormat:gt,scaleFactor:f};g=this.getBinding(),v=g.createProjectionLayer(dt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new nr(v.textureWidth,v.textureHeight,{format:Zi,type:ha,depthTexture:new py(v.textureWidth,v.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Lt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),R=new nr(E.framebufferWidth,E.framebufferHeight,{format:Zi,type:ha,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),st.setContext(l),st.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ct(et){for(let ot=0;ot<et.removed.length;ot++){const Lt=et.removed[ot],pt=H.indexOf(Lt);pt>=0&&(H[pt]=null,O[pt].disconnect(Lt))}for(let ot=0;ot<et.added.length;ot++){const Lt=et.added[ot];let pt=H.indexOf(Lt);if(pt===-1){for(let dt=0;dt<O.length;dt++)if(dt>=H.length){H.push(Lt),pt=dt;break}else if(H[dt]===null){H[dt]=Lt,pt=dt;break}if(pt===-1)break}const gt=O[pt];gt&&gt.connect(Lt)}}const Q=new it,Ct=new it;function wt(et,ot,Lt){Q.setFromMatrixPosition(ot.matrixWorld),Ct.setFromMatrixPosition(Lt.matrixWorld);const pt=Q.distanceTo(Ct),gt=ot.projectionMatrix.elements,dt=Lt.projectionMatrix.elements,Dt=gt[14]/(gt[10]-1),z=gt[14]/(gt[10]+1),se=(gt[9]+1)/gt[5],Vt=(gt[9]-1)/gt[5],Xt=(gt[8]-1)/gt[0],Ot=(dt[8]+1)/dt[0],Wt=Dt*Xt,jt=Dt*Ot,fe=pt/(-Xt+Ot),Ee=fe*-Xt;if(ot.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ee),et.translateZ(fe),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),gt[10]===-1)et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Ne=Dt+fe,P=z+fe,A=Wt-Ee,rt=jt+(pt-Ee),St=se*z/P*Ne,Ut=Vt*z/P*Ne;et.projectionMatrix.makePerspective(A,rt,St,Ut,Ne,P),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Ft(et,ot){ot===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ot.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ot=et.near,Lt=et.far;y.texture!==null&&(y.depthNear>0&&(ot=y.depthNear),y.depthFar>0&&(Lt=y.depthFar)),q.near=w.near=N.near=ot,q.far=w.far=N.far=Lt,(_t!==q.near||Et!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),_t=q.near,Et=q.far),q.layers.mask=et.layers.mask|6,N.layers.mask=q.layers.mask&3,w.layers.mask=q.layers.mask&5;const pt=et.parent,gt=q.cameras;Ft(q,pt);for(let dt=0;dt<gt.length;dt++)Ft(gt[dt],pt);gt.length===2?wt(q,N,w):q.projectionMatrix.copy(N.projectionMatrix),ae(et,q,pt)};function ae(et,ot,Lt){Lt===null?et.matrix.copy(ot.matrixWorld):(et.matrix.copy(Lt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ot.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=qp*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&E===null))return m},this.setFoveation=function(et){m=et,v!==null&&(v.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(et){return S[et]};let me=null;function F(et,ot){if(x=ot.getViewerPose(p||d),T=ot,x!==null){const Lt=x.views;E!==null&&(e.setRenderTargetFramebuffer(R,E.framebuffer),e.setRenderTarget(R));let pt=!1;Lt.length!==q.cameras.length&&(q.cameras.length=0,pt=!0);for(let z=0;z<Lt.length;z++){const se=Lt[z];let Vt=null;if(E!==null)Vt=E.getViewport(se);else{const Ot=g.getViewSubImage(v,se);Vt=Ot.viewport,z===0&&(e.setRenderTargetTextures(R,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(R))}let Xt=k[z];Xt===void 0&&(Xt=new Oi,Xt.layers.enable(z),Xt.viewport=new hn,k[z]=Xt),Xt.matrix.fromArray(se.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(se.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),z===0&&(q.matrix.copy(Xt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),pt===!0&&q.cameras.push(Xt)}const gt=l.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const z=g.getDepthInformation(Lt[0]);z&&z.isValid&&z.texture&&y.init(z,l.renderState)}if(gt&&gt.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let z=0;z<Lt.length;z++){const se=Lt[z].camera;if(se){let Vt=S[se];Vt||(Vt=new my,S[se]=Vt);const Xt=g.getCameraImage(se);Vt.sourceTexture=Xt}}}}for(let Lt=0;Lt<O.length;Lt++){const pt=H[Lt],gt=O[Lt];pt!==null&&gt!==void 0&&gt.update(pt,ot,p||d)}me&&me(et,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),T=null}const st=new _y;st.setAnimationLoop(F),this.setAnimationLoop=function(et){me=et},this.dispose=function(){}}}const Ws=new pa,QR=new nn;function JR(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,uy(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,U,L,R){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(y,S):S.isMeshToonMaterial?(f(y,S),g(y,S)):S.isMeshPhongMaterial?(f(y,S),x(y,S)):S.isMeshStandardMaterial?(f(y,S),v(y,S),S.isMeshPhysicalMaterial&&E(y,S,R)):S.isMeshMatcapMaterial?(f(y,S),T(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),C(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,U,L):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const U=e.get(S),L=U.envMap,R=U.envMapRotation;L&&(y.envMap.value=L,Ws.copy(R),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),y.envMapRotation.value.setFromMatrix4(QR.makeRotationFromEuler(Ws)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,U,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*U,y.scale.value=L*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,U){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const U=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function $R(o,e,i,r){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const R=L.program;r.uniformBlockBinding(U,R)}function p(U,L){let R=l[U.id];R===void 0&&(T(U),R=x(U),l[U.id]=R,U.addEventListener("dispose",y));const O=L.program;r.updateUBOMapping(U,O);const H=e.render.frame;f[U.id]!==H&&(v(U),f[U.id]=H)}function x(U){const L=g();U.__bindingPointIndex=L;const R=o.createBuffer(),O=U.__size,H=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,O,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,R),R}function g(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const L=l[U.id],R=U.uniforms,O=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,B=R.length;H<B;H++){const G=Array.isArray(R[H])?R[H]:[R[H]];for(let N=0,w=G.length;N<w;N++){const k=G[N];if(E(k,H,N,O)===!0){const q=k.__offset,_t=Array.isArray(k.value)?k.value:[k.value];let Et=0;for(let ht=0;ht<_t.length;ht++){const Z=_t[ht],ct=C(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,q+Et,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):(Z.toArray(k.__data,Et),Et+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(U,L,R,O){const H=U.value,B=L+"_"+R;if(O[B]===void 0)return typeof H=="number"||typeof H=="boolean"?O[B]=H:O[B]=H.clone(),!0;{const G=O[B];if(typeof H=="number"||typeof H=="boolean"){if(G!==H)return O[B]=H,!0}else if(G.equals(H)===!1)return G.copy(H),!0}return!1}function T(U){const L=U.uniforms;let R=0;const O=16;for(let B=0,G=L.length;B<G;B++){const N=Array.isArray(L[B])?L[B]:[L[B]];for(let w=0,k=N.length;w<k;w++){const q=N[w],_t=Array.isArray(q.value)?q.value:[q.value];for(let Et=0,ht=_t.length;Et<ht;Et++){const Z=_t[Et],ct=C(Z),Q=R%O,Ct=Q%ct.boundary,wt=Q+Ct;R+=Ct,wt!==0&&O-wt<ct.storage&&(R+=O-wt),q.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=ct.storage}}}const H=R%O;return H>0&&(R+=O-H),U.__size=R,U.__cache={},this}function C(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function y(U){const L=U.target;L.removeEventListener("dispose",y);const R=d.indexOf(L.__bindingPointIndex);d.splice(R,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete f[L.id]}function S(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},f={}}return{bind:m,update:p,dispose:S}}class t3{constructor(e={}){const{canvas:i=UE(),context:r=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const T=new Uint32Array(4),C=new Int32Array(4);let y=null,S=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let O=!1;this._outputColorSpace=yi;let H=0,B=0,G=null,N=-1,w=null;const k=new hn,q=new hn;let _t=null;const Et=new Ae(0);let ht=0,Z=i.width,ct=i.height,Q=1,Ct=null,wt=null;const Ft=new hn(0,0,Z,ct),ae=new hn(0,0,Z,ct);let me=!1;const F=new rm;let st=!1,et=!1;const ot=new nn,Lt=new it,pt=new hn,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Dt(){return G===null?Q:1}let z=r;function se(D,tt){return i.getContext(D,tt)}try{const D={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kp}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",j,!1),i.addEventListener("webglcontextcreationerror",ut,!1),z===null){const tt="webgl2";if(z=se(tt,D),z===null)throw se(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Vt,Xt,Ot,Wt,jt,fe,Ee,Ne,P,A,rt,St,Ut,Mt,Jt,Ht,$t,ee,Pt,kt,X,Y,mt,Tt;function I(){Vt=new u2(z),Vt.init(),Y=new qR(z,Vt),Xt=new i2(z,Vt,e,Y),Ot=new jR(z,Vt),Xt.reversedDepthBuffer&&v&&Ot.buffers.depth.setReversed(!0),Wt=new h2(z),jt=new NR,fe=new XR(z,Vt,Ot,jt,Xt,Y,Wt),Ee=new s2(R),Ne=new c2(R),P=new xT(z),mt=new e2(z,P),A=new f2(z,P,Wt,mt),rt=new m2(z,A,P,Wt),Pt=new p2(z,Xt,fe),Ht=new a2(jt),St=new DR(R,Ee,Ne,Vt,Xt,mt,Ht),Ut=new JR(R,jt),Mt=new LR,Jt=new FR(Vt),ee=new t2(R,Ee,Ne,Ot,rt,E,m),$t=new VR(R,rt,Xt),Tt=new $R(z,Wt,Xt,Ot),kt=new n2(z,Vt,Wt),X=new d2(z,Vt,Wt),Wt.programs=St.programs,R.capabilities=Xt,R.extensions=Vt,R.properties=jt,R.renderLists=Mt,R.shadowMap=$t,R.state=Ot,R.info=Wt}I();const At=new KR(R,z);this.xr=At,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const D=Vt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Vt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(D){D!==void 0&&(Q=D,this.setSize(Z,ct,!1))},this.getSize=function(D){return D.set(Z,ct)},this.setSize=function(D,tt,xt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=D,ct=tt,i.width=Math.floor(D*Q),i.height=Math.floor(tt*Q),xt===!0&&(i.style.width=D+"px",i.style.height=tt+"px"),this.setViewport(0,0,D,tt)},this.getDrawingBufferSize=function(D){return D.set(Z*Q,ct*Q).floor()},this.setDrawingBufferSize=function(D,tt,xt){Z=D,ct=tt,Q=xt,i.width=Math.floor(D*xt),i.height=Math.floor(tt*xt),this.setViewport(0,0,D,tt)},this.getCurrentViewport=function(D){return D.copy(k)},this.getViewport=function(D){return D.copy(Ft)},this.setViewport=function(D,tt,xt,yt){D.isVector4?Ft.set(D.x,D.y,D.z,D.w):Ft.set(D,tt,xt,yt),Ot.viewport(k.copy(Ft).multiplyScalar(Q).round())},this.getScissor=function(D){return D.copy(ae)},this.setScissor=function(D,tt,xt,yt){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,tt,xt,yt),Ot.scissor(q.copy(ae).multiplyScalar(Q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(D){Ot.setScissorTest(me=D)},this.setOpaqueSort=function(D){Ct=D},this.setTransparentSort=function(D){wt=D},this.getClearColor=function(D){return D.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(D=!0,tt=!0,xt=!0){let yt=0;if(D){let nt=!1;if(G!==null){const Bt=G.texture.format;nt=Bt===im||Bt===nm||Bt===em}if(nt){const Bt=G.texture.type,Zt=Bt===ha||Bt===er||Bt===bl||Bt===Al||Bt===Jp||Bt===$p,Qt=ee.getClearColor(),Gt=ee.getClearAlpha(),ne=Qt.r,ue=Qt.g,oe=Qt.b;Zt?(T[0]=ne,T[1]=ue,T[2]=oe,T[3]=Gt,z.clearBufferuiv(z.COLOR,0,T)):(C[0]=ne,C[1]=ue,C[2]=oe,C[3]=Gt,z.clearBufferiv(z.COLOR,0,C))}else yt|=z.COLOR_BUFFER_BIT}tt&&(yt|=z.DEPTH_BUFFER_BIT),xt&&(yt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(yt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",j,!1),i.removeEventListener("webglcontextcreationerror",ut,!1),ee.dispose(),Mt.dispose(),Jt.dispose(),jt.dispose(),Ee.dispose(),Ne.dispose(),rt.dispose(),mt.dispose(),Tt.dispose(),St.dispose(),At.dispose(),At.removeEventListener("sessionstart",Xe),At.removeEventListener("sessionend",Qe),Xn.stop()};function Nt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=Wt.autoReset,tt=$t.enabled,xt=$t.autoUpdate,yt=$t.needsUpdate,nt=$t.type;I(),Wt.autoReset=D,$t.enabled=tt,$t.autoUpdate=xt,$t.needsUpdate=yt,$t.type=nt}function ut(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function vt(D){const tt=D.target;tt.removeEventListener("dispose",vt),It(tt)}function It(D){zt(D),jt.remove(D)}function zt(D){const tt=jt.get(D).programs;tt!==void 0&&(tt.forEach(function(xt){St.releaseProgram(xt)}),D.isShaderMaterial&&St.releaseShaderCache(D))}this.renderBufferDirect=function(D,tt,xt,yt,nt,Bt){tt===null&&(tt=gt);const Zt=nt.isMesh&&nt.matrixWorld.determinant()<0,Qt=Ba(D,tt,xt,yt,nt);Ot.setMaterial(yt,Zt);let Gt=xt.index,ne=1;if(yt.wireframe===!0){if(Gt=A.getWireframeAttribute(xt),Gt===void 0)return;ne=2}const ue=xt.drawRange,oe=xt.attributes.position;let Me=ue.start*ne,ke=(ue.start+ue.count)*ne;Bt!==null&&(Me=Math.max(Me,Bt.start*ne),ke=Math.min(ke,(Bt.start+Bt.count)*ne)),Gt!==null?(Me=Math.max(Me,0),ke=Math.min(ke,Gt.count)):oe!=null&&(Me=Math.max(Me,0),ke=Math.min(ke,oe.count));const sn=ke-Me;if(sn<0||sn===1/0)return;mt.setup(nt,yt,Qt,xt,Gt);let Fe,ze=kt;if(Gt!==null&&(Fe=P.get(Gt),ze=X,ze.setIndex(Fe)),nt.isMesh)yt.wireframe===!0?(Ot.setLineWidth(yt.wireframeLinewidth*Dt()),ze.setMode(z.LINES)):ze.setMode(z.TRIANGLES);else if(nt.isLine){let le=yt.linewidth;le===void 0&&(le=1),Ot.setLineWidth(le*Dt()),nt.isLineSegments?ze.setMode(z.LINES):nt.isLineLoop?ze.setMode(z.LINE_LOOP):ze.setMode(z.LINE_STRIP)}else nt.isPoints?ze.setMode(z.POINTS):nt.isSprite&&ze.setMode(z.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)wl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ze.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const le=nt._multiDrawStarts,He=nt._multiDrawCounts,ye=nt._multiDrawCount,En=Gt?P.get(Gt).bytesPerElement:1,ci=jt.get(yt).currentProgram.getUniforms();for(let Pe=0;Pe<ye;Pe++)ci.setValue(z,"_gl_DrawID",Pe),ze.render(le[Pe]/En,He[Pe])}else if(nt.isInstancedMesh)ze.renderInstances(Me,sn,nt.count);else if(xt.isInstancedBufferGeometry){const le=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,He=Math.min(xt.instanceCount,le);ze.renderInstances(Me,sn,He)}else ze.render(Me,sn)};function ce(D,tt,xt){D.transparent===!0&&D.side===ca&&D.forceSinglePass===!1?(D.side=Jn,D.needsUpdate=!0,rn(D,tt,xt),D.side=Ss,D.needsUpdate=!0,rn(D,tt,xt),D.side=ca):rn(D,tt,xt)}this.compile=function(D,tt,xt=null){xt===null&&(xt=D),S=Jt.get(xt),S.init(tt),L.push(S),xt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(S.pushLight(nt),nt.castShadow&&S.pushShadow(nt))}),D!==xt&&D.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(S.pushLight(nt),nt.castShadow&&S.pushShadow(nt))}),S.setupLights();const yt=new Set;return D.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Bt=nt.material;if(Bt)if(Array.isArray(Bt))for(let Zt=0;Zt<Bt.length;Zt++){const Qt=Bt[Zt];ce(Qt,xt,nt),yt.add(Qt)}else ce(Bt,xt,nt),yt.add(Bt)}),S=L.pop(),yt},this.compileAsync=function(D,tt,xt=null){const yt=this.compile(D,tt,xt);return new Promise(nt=>{function Bt(){if(yt.forEach(function(Zt){jt.get(Zt).currentProgram.isReady()&&yt.delete(Zt)}),yt.size===0){nt(D);return}setTimeout(Bt,10)}Vt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let de=null;function Ce(D){de&&de(D)}function Xe(){Xn.stop()}function Qe(){Xn.start()}const Xn=new _y;Xn.setAnimationLoop(Ce),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(D){de=D,At.setAnimationLoop(D),D===null?Xn.stop():Xn.start()},At.addEventListener("sessionstart",Xe),At.addEventListener("sessionend",Qe),this.render=function(D,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(tt),tt=At.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,tt,G),S=Jt.get(D,L.length),S.init(tt),L.push(S),ot.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),F.setFromProjectionMatrix(ot,da,tt.reversedDepth),et=this.localClippingEnabled,st=Ht.init(this.clippingPlanes,et),y=Mt.get(D,U.length),y.init(),U.push(y),At.enabled===!0&&At.isPresenting===!0){const Bt=R.xr.getDepthSensingMesh();Bt!==null&&oi(Bt,tt,-1/0,R.sortObjects)}oi(D,tt,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(Ct,wt),dt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,dt&&ee.addToRenderList(y,D),this.info.render.frame++,st===!0&&Ht.beginShadows();const xt=S.state.shadowsArray;$t.render(xt,D,tt),st===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const yt=y.opaque,nt=y.transmissive;if(S.setupLights(),tt.isArrayCamera){const Bt=tt.cameras;if(nt.length>0)for(let Zt=0,Qt=Bt.length;Zt<Qt;Zt++){const Gt=Bt[Zt];ln(yt,nt,D,Gt)}dt&&ee.render(D);for(let Zt=0,Qt=Bt.length;Zt<Qt;Zt++){const Gt=Bt[Zt];ma(y,D,Gt,Gt.viewport)}}else nt.length>0&&ln(yt,nt,D,tt),dt&&ee.render(D),ma(y,D,tt);G!==null&&B===0&&(fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G)),D.isScene===!0&&D.onAfterRender(R,D,tt),mt.resetDefaultState(),N=-1,w=null,L.pop(),L.length>0?(S=L[L.length-1],st===!0&&Ht.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function oi(D,tt,xt,yt){if(D.visible===!1)return;if(D.layers.test(tt.layers)){if(D.isGroup)xt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(tt);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||F.intersectsSprite(D)){yt&&pt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ot);const Zt=rt.update(D),Qt=D.material;Qt.visible&&y.push(D,Zt,Qt,xt,pt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||F.intersectsObject(D))){const Zt=rt.update(D),Qt=D.material;if(yt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),pt.copy(D.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),pt.copy(Zt.boundingSphere.center)),pt.applyMatrix4(D.matrixWorld).applyMatrix4(ot)),Array.isArray(Qt)){const Gt=Zt.groups;for(let ne=0,ue=Gt.length;ne<ue;ne++){const oe=Gt[ne],Me=Qt[oe.materialIndex];Me&&Me.visible&&y.push(D,Zt,Me,xt,pt.z,oe)}}else Qt.visible&&y.push(D,Zt,Qt,xt,pt.z,null)}}const Bt=D.children;for(let Zt=0,Qt=Bt.length;Zt<Qt;Zt++)oi(Bt[Zt],tt,xt,yt)}function ma(D,tt,xt,yt){const nt=D.opaque,Bt=D.transmissive,Zt=D.transparent;S.setupLightsView(xt),st===!0&&Ht.setGlobalState(R.clippingPlanes,xt),yt&&Ot.viewport(k.copy(yt)),nt.length>0&&Pi(nt,tt,xt),Bt.length>0&&Pi(Bt,tt,xt),Zt.length>0&&Pi(Zt,tt,xt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function ln(D,tt,xt,yt){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[yt.id]===void 0&&(S.state.transmissionRenderTarget[yt.id]=new nr(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Nl:ha,minFilter:tr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const Bt=S.state.transmissionRenderTarget[yt.id],Zt=yt.viewport||k;Bt.setSize(Zt.z*R.transmissionResolutionScale,Zt.w*R.transmissionResolutionScale);const Qt=R.getRenderTarget(),Gt=R.getActiveCubeFace(),ne=R.getActiveMipmapLevel();R.setRenderTarget(Bt),R.getClearColor(Et),ht=R.getClearAlpha(),ht<1&&R.setClearColor(16777215,.5),R.clear(),dt&&ee.render(xt);const ue=R.toneMapping;R.toneMapping=ys;const oe=yt.viewport;if(yt.viewport!==void 0&&(yt.viewport=void 0),S.setupLightsView(yt),st===!0&&Ht.setGlobalState(R.clippingPlanes,yt),Pi(D,xt,yt),fe.updateMultisampleRenderTarget(Bt),fe.updateRenderTargetMipmap(Bt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let ke=0,sn=tt.length;ke<sn;ke++){const Fe=tt[ke],ze=Fe.object,le=Fe.geometry,He=Fe.material,ye=Fe.group;if(He.side===ca&&ze.layers.test(yt.layers)){const En=He.side;He.side=Jn,He.needsUpdate=!0,Ii(ze,xt,yt,le,He,ye),He.side=En,He.needsUpdate=!0,Me=!0}}Me===!0&&(fe.updateMultisampleRenderTarget(Bt),fe.updateRenderTargetMipmap(Bt))}R.setRenderTarget(Qt,Gt,ne),R.setClearColor(Et,ht),oe!==void 0&&(yt.viewport=oe),R.toneMapping=ue}function Pi(D,tt,xt){const yt=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Bt=D.length;nt<Bt;nt++){const Zt=D[nt],Qt=Zt.object,Gt=Zt.geometry,ne=Zt.group;let ue=Zt.material;ue.allowOverride===!0&&yt!==null&&(ue=yt),Qt.layers.test(xt.layers)&&Ii(Qt,tt,xt,Gt,ue,ne)}}function Ii(D,tt,xt,yt,nt,Bt){D.onBeforeRender(R,tt,xt,yt,nt,Bt),D.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),nt.onBeforeRender(R,tt,xt,yt,D,Bt),nt.transparent===!0&&nt.side===ca&&nt.forceSinglePass===!1?(nt.side=Jn,nt.needsUpdate=!0,R.renderBufferDirect(xt,tt,yt,nt,D,Bt),nt.side=Ss,nt.needsUpdate=!0,R.renderBufferDirect(xt,tt,yt,nt,D,Bt),nt.side=ca):R.renderBufferDirect(xt,tt,yt,nt,D,Bt),D.onAfterRender(R,tt,xt,yt,nt,Bt)}function rn(D,tt,xt){tt.isScene!==!0&&(tt=gt);const yt=jt.get(D),nt=S.state.lights,Bt=S.state.shadowsArray,Zt=nt.state.version,Qt=St.getParameters(D,nt.state,Bt,tt,xt),Gt=St.getProgramCacheKey(Qt);let ne=yt.programs;yt.environment=D.isMeshStandardMaterial?tt.environment:null,yt.fog=tt.fog,yt.envMap=(D.isMeshStandardMaterial?Ne:Ee).get(D.envMap||yt.environment),yt.envMapRotation=yt.environment!==null&&D.envMap===null?tt.environmentRotation:D.envMapRotation,ne===void 0&&(D.addEventListener("dispose",vt),ne=new Map,yt.programs=ne);let ue=ne.get(Gt);if(ue!==void 0){if(yt.currentProgram===ue&&yt.lightsStateVersion===Zt)return li(D,Qt),ue}else Qt.uniforms=St.getUniforms(D),D.onBeforeCompile(Qt,R),ue=St.acquireProgram(Qt,Gt),ne.set(Gt,ue),yt.uniforms=Qt.uniforms;const oe=yt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(oe.clippingPlanes=Ht.uniform),li(D,Qt),yt.needsLights=Ln(D),yt.lightsStateVersion=Zt,yt.needsLights&&(oe.ambientLightColor.value=nt.state.ambient,oe.lightProbe.value=nt.state.probe,oe.directionalLights.value=nt.state.directional,oe.directionalLightShadows.value=nt.state.directionalShadow,oe.spotLights.value=nt.state.spot,oe.spotLightShadows.value=nt.state.spotShadow,oe.rectAreaLights.value=nt.state.rectArea,oe.ltc_1.value=nt.state.rectAreaLTC1,oe.ltc_2.value=nt.state.rectAreaLTC2,oe.pointLights.value=nt.state.point,oe.pointLightShadows.value=nt.state.pointShadow,oe.hemisphereLights.value=nt.state.hemi,oe.directionalShadowMap.value=nt.state.directionalShadowMap,oe.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,oe.spotShadowMap.value=nt.state.spotShadowMap,oe.spotLightMatrix.value=nt.state.spotLightMatrix,oe.spotLightMap.value=nt.state.spotLightMap,oe.pointShadowMap.value=nt.state.pointShadowMap,oe.pointShadowMatrix.value=nt.state.pointShadowMatrix),yt.currentProgram=ue,yt.uniformsList=null,ue}function Ei(D){if(D.uniformsList===null){const tt=D.currentProgram.getUniforms();D.uniformsList=zu.seqWithValue(tt.seq,D.uniforms)}return D.uniformsList}function li(D,tt){const xt=jt.get(D);xt.outputColorSpace=tt.outputColorSpace,xt.batching=tt.batching,xt.batchingColor=tt.batchingColor,xt.instancing=tt.instancing,xt.instancingColor=tt.instancingColor,xt.instancingMorph=tt.instancingMorph,xt.skinning=tt.skinning,xt.morphTargets=tt.morphTargets,xt.morphNormals=tt.morphNormals,xt.morphColors=tt.morphColors,xt.morphTargetsCount=tt.morphTargetsCount,xt.numClippingPlanes=tt.numClippingPlanes,xt.numIntersection=tt.numClipIntersection,xt.vertexAlphas=tt.vertexAlphas,xt.vertexTangents=tt.vertexTangents,xt.toneMapping=tt.toneMapping}function Ba(D,tt,xt,yt,nt){tt.isScene!==!0&&(tt=gt),fe.resetTextureUnits();const Bt=tt.fog,Zt=yt.isMeshStandardMaterial?tt.environment:null,Qt=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vo,Gt=(yt.isMeshStandardMaterial?Ne:Ee).get(yt.envMap||Zt),ne=yt.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,ue=!!xt.attributes.tangent&&(!!yt.normalMap||yt.anisotropy>0),oe=!!xt.morphAttributes.position,Me=!!xt.morphAttributes.normal,ke=!!xt.morphAttributes.color;let sn=ys;yt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(sn=R.toneMapping);const Fe=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,ze=Fe!==void 0?Fe.length:0,le=jt.get(yt),He=S.state.lights;if(st===!0&&(et===!0||D!==w)){const un=D===w&&yt.id===N;Ht.setState(yt,D,un)}let ye=!1;yt.version===le.__version?(le.needsLights&&le.lightsStateVersion!==He.state.version||le.outputColorSpace!==Qt||nt.isBatchedMesh&&le.batching===!1||!nt.isBatchedMesh&&le.batching===!0||nt.isBatchedMesh&&le.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&le.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&le.instancing===!1||!nt.isInstancedMesh&&le.instancing===!0||nt.isSkinnedMesh&&le.skinning===!1||!nt.isSkinnedMesh&&le.skinning===!0||nt.isInstancedMesh&&le.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&le.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&le.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&le.instancingMorph===!1&&nt.morphTexture!==null||le.envMap!==Gt||yt.fog===!0&&le.fog!==Bt||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Ht.numPlanes||le.numIntersection!==Ht.numIntersection)||le.vertexAlphas!==ne||le.vertexTangents!==ue||le.morphTargets!==oe||le.morphNormals!==Me||le.morphColors!==ke||le.toneMapping!==sn||le.morphTargetsCount!==ze)&&(ye=!0):(ye=!0,le.__version=yt.version);let En=le.currentProgram;ye===!0&&(En=rn(yt,tt,nt));let ci=!1,Pe=!1,Fa=!1;const $e=En.getUniforms(),qn=le.uniforms;if(Ot.useProgram(En.program)&&(ci=!0,Pe=!0,Fa=!0),yt.id!==N&&(N=yt.id,Pe=!0),ci||w!==D){Ot.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),$e.setValue(z,"projectionMatrix",D.projectionMatrix),$e.setValue(z,"viewMatrix",D.matrixWorldInverse);const Gn=$e.map.cameraPosition;Gn!==void 0&&Gn.setValue(z,Lt.setFromMatrixPosition(D.matrixWorld)),Xt.logarithmicDepthBuffer&&$e.setValue(z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(yt.isMeshPhongMaterial||yt.isMeshToonMaterial||yt.isMeshLambertMaterial||yt.isMeshBasicMaterial||yt.isMeshStandardMaterial||yt.isShaderMaterial)&&$e.setValue(z,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,Pe=!0,Fa=!0)}if(nt.isSkinnedMesh){$e.setOptional(z,nt,"bindMatrix"),$e.setOptional(z,nt,"bindMatrixInverse");const un=nt.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),$e.setValue(z,"boneTexture",un.boneTexture,fe))}nt.isBatchedMesh&&($e.setOptional(z,nt,"batchingTexture"),$e.setValue(z,"batchingTexture",nt._matricesTexture,fe),$e.setOptional(z,nt,"batchingIdTexture"),$e.setValue(z,"batchingIdTexture",nt._indirectTexture,fe),$e.setOptional(z,nt,"batchingColorTexture"),nt._colorsTexture!==null&&$e.setValue(z,"batchingColorTexture",nt._colorsTexture,fe));const vn=xt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Pt.update(nt,xt,En),(Pe||le.receiveShadow!==nt.receiveShadow)&&(le.receiveShadow=nt.receiveShadow,$e.setValue(z,"receiveShadow",nt.receiveShadow)),yt.isMeshGouraudMaterial&&yt.envMap!==null&&(qn.envMap.value=Gt,qn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),yt.isMeshStandardMaterial&&yt.envMap===null&&tt.environment!==null&&(qn.envMapIntensity.value=tt.environmentIntensity),Pe&&($e.setValue(z,"toneMappingExposure",R.toneMappingExposure),le.needsLights&&To(qn,Fa),Bt&&yt.fog===!0&&Ut.refreshFogUniforms(qn,Bt),Ut.refreshMaterialUniforms(qn,yt,Q,ct,S.state.transmissionRenderTarget[D.id]),zu.upload(z,Ei(le),qn,fe)),yt.isShaderMaterial&&yt.uniformsNeedUpdate===!0&&(zu.upload(z,Ei(le),qn,fe),yt.uniformsNeedUpdate=!1),yt.isSpriteMaterial&&$e.setValue(z,"center",nt.center),$e.setValue(z,"modelViewMatrix",nt.modelViewMatrix),$e.setValue(z,"normalMatrix",nt.normalMatrix),$e.setValue(z,"modelMatrix",nt.matrixWorld),yt.isShaderMaterial||yt.isRawShaderMaterial){const un=yt.uniformsGroups;for(let Gn=0,sr=un.length;Gn<sr;Gn++){const Ki=un[Gn];Tt.update(Ki,En),Tt.bind(Ki,En)}}return En}function To(D,tt){D.ambientLightColor.needsUpdate=tt,D.lightProbe.needsUpdate=tt,D.directionalLights.needsUpdate=tt,D.directionalLightShadows.needsUpdate=tt,D.pointLights.needsUpdate=tt,D.pointLightShadows.needsUpdate=tt,D.spotLights.needsUpdate=tt,D.spotLightShadows.needsUpdate=tt,D.rectAreaLights.needsUpdate=tt,D.hemisphereLights.needsUpdate=tt}function Ln(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,tt,xt){const yt=jt.get(D);yt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,yt.__autoAllocateDepthBuffer===!1&&(yt.__useRenderToTexture=!1),jt.get(D.texture).__webglTexture=tt,jt.get(D.depthTexture).__webglTexture=yt.__autoAllocateDepthBuffer?void 0:xt,yt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,tt){const xt=jt.get(D);xt.__webglFramebuffer=tt,xt.__useDefaultFramebuffer=tt===void 0};const an=z.createFramebuffer();this.setRenderTarget=function(D,tt=0,xt=0){G=D,H=tt,B=xt;let yt=!0,nt=null,Bt=!1,Zt=!1;if(D){const Gt=jt.get(D);if(Gt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(z.FRAMEBUFFER,null),yt=!1;else if(Gt.__webglFramebuffer===void 0)fe.setupRenderTarget(D);else if(Gt.__hasExternalTextures)fe.rebindTextures(D,jt.get(D.texture).__webglTexture,jt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const oe=D.depthTexture;if(Gt.__boundDepthTexture!==oe){if(oe!==null&&jt.has(oe)&&(D.width!==oe.image.width||D.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(D)}}const ne=D.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Zt=!0);const ue=jt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ue[tt])?nt=ue[tt][xt]:nt=ue[tt],Bt=!0):D.samples>0&&fe.useMultisampledRTT(D)===!1?nt=jt.get(D).__webglMultisampledFramebuffer:Array.isArray(ue)?nt=ue[xt]:nt=ue,k.copy(D.viewport),q.copy(D.scissor),_t=D.scissorTest}else k.copy(Ft).multiplyScalar(Q).floor(),q.copy(ae).multiplyScalar(Q).floor(),_t=me;if(xt!==0&&(nt=an),Ot.bindFramebuffer(z.FRAMEBUFFER,nt)&&yt&&Ot.drawBuffers(D,nt),Ot.viewport(k),Ot.scissor(q),Ot.setScissorTest(_t),Bt){const Gt=jt.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Gt.__webglTexture,xt)}else if(Zt){const Gt=tt;for(let ne=0;ne<D.textures.length;ne++){const ue=jt.get(D.textures[ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ne,ue.__webglTexture,xt,Gt)}}else if(D!==null&&xt!==0){const Gt=jt.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Gt.__webglTexture,xt)}N=-1},this.readRenderTargetPixels=function(D,tt,xt,yt,nt,Bt,Zt,Qt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=jt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Zt!==void 0&&(Gt=Gt[Zt]),Gt){Ot.bindFramebuffer(z.FRAMEBUFFER,Gt);try{const ne=D.textures[Qt],ue=ne.format,oe=ne.type;if(!Xt.textureFormatReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=D.width-yt&&xt>=0&&xt<=D.height-nt&&(D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qt),z.readPixels(tt,xt,yt,nt,Y.convert(ue),Y.convert(oe),Bt))}finally{const ne=G!==null?jt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(D,tt,xt,yt,nt,Bt,Zt,Qt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=jt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Zt!==void 0&&(Gt=Gt[Zt]),Gt)if(tt>=0&&tt<=D.width-yt&&xt>=0&&xt<=D.height-nt){Ot.bindFramebuffer(z.FRAMEBUFFER,Gt);const ne=D.textures[Qt],ue=ne.format,oe=ne.type;if(!Xt.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Me),z.bufferData(z.PIXEL_PACK_BUFFER,Bt.byteLength,z.STREAM_READ),D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qt),z.readPixels(tt,xt,yt,nt,Y.convert(ue),Y.convert(oe),0);const ke=G!==null?jt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,ke);const sn=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await LE(z,sn,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Me),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Bt),z.deleteBuffer(Me),z.deleteSync(sn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,tt=null,xt=0){const yt=Math.pow(2,-xt),nt=Math.floor(D.image.width*yt),Bt=Math.floor(D.image.height*yt),Zt=tt!==null?tt.x:0,Qt=tt!==null?tt.y:0;fe.setTexture2D(D,0),z.copyTexSubImage2D(z.TEXTURE_2D,xt,0,0,Zt,Qt,nt,Bt),Ot.unbindTexture()};const On=z.createFramebuffer(),Bi=z.createFramebuffer();this.copyTextureToTexture=function(D,tt,xt=null,yt=null,nt=0,Bt=null){Bt===null&&(nt!==0?(wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Bt=nt,nt=0):Bt=0);let Zt,Qt,Gt,ne,ue,oe,Me,ke,sn;const Fe=D.isCompressedTexture?D.mipmaps[Bt]:D.image;if(xt!==null)Zt=xt.max.x-xt.min.x,Qt=xt.max.y-xt.min.y,Gt=xt.isBox3?xt.max.z-xt.min.z:1,ne=xt.min.x,ue=xt.min.y,oe=xt.isBox3?xt.min.z:0;else{const vn=Math.pow(2,-nt);Zt=Math.floor(Fe.width*vn),Qt=Math.floor(Fe.height*vn),D.isDataArrayTexture?Gt=Fe.depth:D.isData3DTexture?Gt=Math.floor(Fe.depth*vn):Gt=1,ne=0,ue=0,oe=0}yt!==null?(Me=yt.x,ke=yt.y,sn=yt.z):(Me=0,ke=0,sn=0);const ze=Y.convert(tt.format),le=Y.convert(tt.type);let He;tt.isData3DTexture?(fe.setTexture3D(tt,0),He=z.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(fe.setTexture2DArray(tt,0),He=z.TEXTURE_2D_ARRAY):(fe.setTexture2D(tt,0),He=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,tt.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,tt.unpackAlignment);const ye=z.getParameter(z.UNPACK_ROW_LENGTH),En=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ci=z.getParameter(z.UNPACK_SKIP_PIXELS),Pe=z.getParameter(z.UNPACK_SKIP_ROWS),Fa=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ne),z.pixelStorei(z.UNPACK_SKIP_ROWS,ue),z.pixelStorei(z.UNPACK_SKIP_IMAGES,oe);const $e=D.isDataArrayTexture||D.isData3DTexture,qn=tt.isDataArrayTexture||tt.isData3DTexture;if(D.isDepthTexture){const vn=jt.get(D),un=jt.get(tt),Gn=jt.get(vn.__renderTarget),sr=jt.get(un.__renderTarget);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Ki=0;Ki<Gt;Ki++)$e&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.get(D).__webglTexture,nt,oe+Ki),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.get(tt).__webglTexture,Bt,sn+Ki)),z.blitFramebuffer(ne,ue,Zt,Qt,Me,ke,Zt,Qt,z.DEPTH_BUFFER_BIT,z.NEAREST);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(nt!==0||D.isRenderTargetTexture||jt.has(D)){const vn=jt.get(D),un=jt.get(tt);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,On),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bi);for(let Gn=0;Gn<Gt;Gn++)$e?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vn.__webglTexture,nt,oe+Gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vn.__webglTexture,nt),qn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,Bt,sn+Gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,Bt),nt!==0?z.blitFramebuffer(ne,ue,Zt,Qt,Me,ke,Zt,Qt,z.COLOR_BUFFER_BIT,z.NEAREST):qn?z.copyTexSubImage3D(He,Bt,Me,ke,sn+Gn,ne,ue,Zt,Qt):z.copyTexSubImage2D(He,Bt,Me,ke,ne,ue,Zt,Qt);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else qn?D.isDataTexture||D.isData3DTexture?z.texSubImage3D(He,Bt,Me,ke,sn,Zt,Qt,Gt,ze,le,Fe.data):tt.isCompressedArrayTexture?z.compressedTexSubImage3D(He,Bt,Me,ke,sn,Zt,Qt,Gt,ze,Fe.data):z.texSubImage3D(He,Bt,Me,ke,sn,Zt,Qt,Gt,ze,le,Fe):D.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Bt,Me,ke,Zt,Qt,ze,le,Fe.data):D.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Bt,Me,ke,Fe.width,Fe.height,ze,Fe.data):z.texSubImage2D(z.TEXTURE_2D,Bt,Me,ke,Zt,Qt,ze,le,Fe);z.pixelStorei(z.UNPACK_ROW_LENGTH,ye),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,En),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ci),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Fa),Bt===0&&tt.generateMipmaps&&z.generateMipmap(He),Ot.unbindTexture()},this.initRenderTarget=function(D){jt.get(D).__webglFramebuffer===void 0&&fe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?fe.setTextureCube(D,0):D.isData3DTexture?fe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?fe.setTexture2DArray(D,0):fe.setTexture2D(D,0),Ot.unbindTexture()},this.resetState=function(){H=0,B=0,G=null,Ot.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),i.unpackColorSpace=Be._getUnpackColorSpace()}}const Dx={forest:{sky:"#dce9df",horizon:"#eff1d9",ground:"#a8bd7c",grass:"#a6bc77",leaf:"#708e50",leafLight:"#91a563",darkLeaf:"#4e734e",hill:"#99ac8f",farHill:"#a6beb5",water:"#a3c8b3",light:"#fff1cf"},coast:{sky:"#cde6e8",horizon:"#edf2df",ground:"#b8c88c",grass:"#b2c086",leaf:"#6f9672",leafLight:"#a1b57c",darkLeaf:"#4b7d67",hill:"#a5c0ae",farHill:"#c0d5cb",water:"#82c5c4",light:"#fff2d5"},sunset:{sky:"#efdac9",horizon:"#f7e8c8",ground:"#b7bc80",grass:"#b1b574",leaf:"#80915e",leafLight:"#b0ac70",darkLeaf:"#657b55",hill:"#b2ae91",farHill:"#c9c1ac",water:"#b9c3b4",light:"#ffd5a3"}};function e3({speed:o,running:e,route:i,playerCount:r=1,opponentSpeed:l=0,playerDistances:f}){const d=Yt.useRef(null),h=Yt.useRef({speed:o,running:e,playerCount:r,opponentSpeed:l,playerDistances:f}),m=Yt.useRef(i),p=Yt.useRef(null),x=Yt.useRef(null),[g,v]=Yt.useState(!1);return Yt.useEffect(()=>{h.current={speed:o,running:e,playerCount:r,opponentSpeed:l,playerDistances:f}},[o,e,r,l,f]),Yt.useEffect(()=>{var E;(E=x.current)==null||E.call(x,r)},[r]),Yt.useEffect(()=>{var E;m.current=i,(E=p.current)==null||E.call(p,i)},[i]),Yt.useEffect(()=>{const E=d.current;if(!E)return;let T;try{T=new t3({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{v(!0);return}const C=new aT,y=Dx[m.current];C.background=new Ae(y.sky),C.fog=new sm(y.horizon,48,160),T.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),T.shadowMap.enabled=!0,T.shadowMap.type=jx,T.outputColorSpace=yi,T.toneMapping=qx,T.toneMappingExposure=1.08,T.domElement.setAttribute("aria-label","3D 森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進"),T.domElement.setAttribute("role","img"),T.domElement.style.cssText="display:block;width:100%;height:100%;outline:none",E.appendChild(T.domElement);const S=new Oi(48,1,.1,300);S.position.set(3.5,4.8,12.3),S.lookAt(-3,1.1,-10);const U=new hT("#fff9e8","#88986b",1.7);C.add(U);const L=new gT(y.light,2.3);L.position.set(-18,28,-16),L.castShadow=!0,L.shadow.mapSize.set(1536,1536),L.shadow.camera.left=-35,L.shadow.camera.right=35,L.shadow.camera.top=24,L.shadow.camera.bottom=-42,L.shadow.camera.near=.5,L.shadow.camera.far=100,L.shadow.normalBias=.045,L.shadow.bias=-15e-5,L.shadow.radius=4,L.target.position.set(0,0,-12),C.add(L,L.target);const R=(X,Y=.95)=>new Au({color:X,roughness:Y}),O={ground:R(y.ground),grass:R(y.grass),leaf:R(y.leaf),leafLight:R(y.leafLight),darkLeaf:R(y.darkLeaf),hill:R(y.hill),farHill:R(y.farHill),water:new Au({color:y.water,roughness:.35,metalness:.07}),bark:R("#867651"),paleBark:R("#d7d4b4"),road:R("#ddcba5"),edge:R("#e6dab9"),rock:R("#b9bbaa"),rockLight:R("#cccdb8"),flower:R("#f6e5a0"),flowerWhite:R("#f4f1d5"),stem:R("#849254"),fence:R("#a59a71"),stripe:R("#dce8d9")},H=new Ia({uniforms:{top:{value:new Ae(y.sky)},bottom:{value:new Ae(y.horizon)}},vertexShader:"varying vec3 vWorld; void main(){vec4 p=modelMatrix*vec4(position,1.0);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){float h=clamp(normalize(vWorld+vec3(0.,20.,0.)).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,smoothstep(0.,.65,h)),1.);
#include <colorspace_fragment>
}`,side:Jn,depthWrite:!1});C.add(new Ve(new Qs(245,24,18),H));const B=new Ve(new xo(450,450),O.ground);B.rotation.x=-Math.PI/2,B.position.set(0,-.035,-100),B.receiveShadow=!0,C.add(B);const G=(()=>{let X=4917;return()=>(X=X*16807%2147483647,(X-1)/2147483646)})(),N=X=>Math.sin(X*.035)*3.5*Math.min(1,Math.abs(X)/22);function w(X,Y,mt,Tt){const I=[],At=[];for(let ut=0;ut<=200;ut++){const vt=20-ut,It=Y(vt);if(I.push(It-X/2,mt,vt,It+X/2,mt,vt),ut<200){const zt=ut*2;At.push(zt,zt+1,zt+2,zt+1,zt+3,zt+2)}}const Nt=new ti;Nt.setAttribute("position",new gn(I,3)),Nt.setIndex(At),Nt.computeVertexNormals();const j=new Ve(Nt,Tt);return j.receiveShadow=!0,C.add(j),j}w(6.6,N,.005,O.edge),w(6.1,N,.018,O.road);const k=X=>N(X)+15+Math.sin(X*.055)*3.5,q=w(5.3,k,-.018,O.edge),_t=w(4.3,k,-.008,O.water),Et=new Nn,ht=new Au({color:"#81bdc7",roughness:.34,metalness:.12}),Z=R("#e3d1a7");Et.add(w(200,X=>N(X)+110,.001,ht)),Et.add(w(7,X=>N(X)+8.5,.003,Z)),C.add(Et),Et.visible=m.current==="coast";const ct=new Nn,Q=new Ve(new Qs(8.5,24,16),new Hu({color:"#ffcc83",fog:!1,toneMapped:!1}));ct.add(Q);for(const X of[1.3,1.8]){const Y=new Ve(new Qs(8.5*X,24,16),new Hu({color:"#ffe7b2",transparent:!0,opacity:.075,depthWrite:!1,fog:!1,toneMapped:!1}));ct.add(Y)}ct.position.set(-35,30,-135),ct.visible=m.current==="sunset",C.add(ct);const Ct=new Qs(1,12,10),wt=new cm(1,1),Ft=new Dl(1,1,1,9),ae=new om(1,1,9),me=new it(0,1,0);function F(X,Y,mt,Tt,I=!1){const At=new Ve(I?wt:Ct,Tt);return At.position.set(...Y),At.scale.set(...mt),At.castShadow=!0,At.receiveShadow=!0,X.add(At),At}function st(X,Y,mt,Tt,I){const At=new it(...Y),Nt=new it(...mt),j=Nt.clone().sub(At),ut=new Ve(Ft,I);return ut.position.copy(At.add(Nt).multiplyScalar(.5)),ut.scale.set(Tt,j.length(),Tt),ut.quaternion.setFromUnitVectors(me,j.normalize()),ut.castShadow=!0,X.add(ut),ut}[[-57,-3,-113,40,14,32],[41,-4,-132,52,20,28],[1,-4,-168,58,23,31],[-90,-4,-150,45,25,40],[75,-3,-84,38,12,32],[-51,-5,-56,29,10,28]].forEach((X,Y)=>F(C,[X[0],X[1],X[2]],[X[3],X[4],X[5]],Y<3?O.farHill:O.hill));const et=new Au({color:"#f7f5e6",roughness:1,transparent:!0,opacity:.73,depthWrite:!1});for(let X=0;X<7;X++){const Y=new Nn;Y.position.set(-75+X*26,31+G()*8,-115-G()*65);for(let mt=0;mt<4;mt++)F(Y,[mt*3.7-5,G()*1.4,G()],[5.5,1.8+G(),2.5],et);C.add(Y)}function ot(X){const Y=new Nn;if(X===1){st(Y,[0,0,0],[0,4.1,0],.15,O.bark);for(let mt=0;mt<3;mt++){const Tt=new Ve(ae,mt===1?O.leaf:O.darkLeaf);Tt.position.set(0,2.8+mt*1.25,0),Tt.scale.set(1.65-mt*.38,2.8-mt*.28,1.65-mt*.38),Tt.castShadow=!0,Y.add(Tt)}}else X===2?(st(Y,[0,0,0],[.12,4.4,0],.16,O.paleBark),st(Y,[0,2.3,0],[-.8,3.7,.15],.075,O.paleBark),F(Y,[0,4.5,0],[1.38,1.8,1.25],O.leafLight),F(Y,[-.7,3.7,.1],[1.05,1.25,1.1],O.leafLight),F(Y,[.8,4.25,-.1],[.92,1.3,1],O.leaf)):(st(Y,[0,0,0],[0,3.9,0],.23,O.bark),st(Y,[0,2.3,0],[-.9,3.6,0],.11,O.bark),st(Y,[0,2.7,0],[.9,4.1,.1],.1,O.bark),F(Y,[0,4.55,0],[1.8,1.7,1.65],O.leaf),F(Y,[-1.05,3.9,.15],[1.25,1.3,1.3],O.darkLeaf),F(Y,[1.1,4.25,.12],[1.25,1.4,1.3],O.leafLight),F(Y,[.1,5.45,-.1],[1.25,1.25,1.23],O.leafLight));return Y}const Lt=[ot(0),ot(1),ot(2)],pt=[],gt=new Set,dt=new Set,Dt=(X,Y,mt,Tt=!1)=>{X.position.x=(Tt?k(mt):N(mt))+Y,X.position.z=mt,C.add(X),pt.push({object:X,lateral:Y,z:mt,stream:Tt})};for(let X=0;X<91;X++){const Y=8-G()*175,mt=X%2?-1:1,Tt=mt*(7.4+G()*30);if(mt>0&&Tt>11&&Tt<21)continue;const I=Lt[Math.floor(G()*Lt.length)].clone(),At=.75+G()*.85;I.scale.setScalar(At),I.rotation.y=G()*Math.PI*2,gt.add(I),Dt(I,Tt,Y)}[[-9.6,-9,1.3],[10.3,-22,1.2],[-8.3,-38,1.2]].forEach(([X,Y,mt],Tt)=>{const I=Lt[Tt%3].clone();I.scale.setScalar(mt),gt.add(I),Dt(I,X,Y)});const z=R("#a18a62"),se=R("#5d8c70");se.side=ca;const Vt=[],Xt=[];for(let X=0;X<=10;X++){const Y=X/10,mt=Math.sin(Y*Math.PI)*.4,Tt=Math.sin(Y*Math.PI)*.45-Y*Y*.85;if(Vt.push(-mt,Tt,Y*3.1,0,Tt+.1*Math.sin(Y*Math.PI),Y*3.1,mt,Tt,Y*3.1),X<10){const I=X*3;Xt.push(I,I+3,I+1,I+1,I+3,I+4,I+1,I+4,I+2,I+2,I+4,I+5)}}const Ot=new ti;Ot.setAttribute("position",new gn(Vt,3)),Ot.setIndex(Xt),Ot.computeVertexNormals();const Wt=new Nn;for(let X=0;X<5;X++)st(Wt,[.12*X*X/4,X,0],[.12*(X+1)*(X+1)/4,X+1,0],.14-X*.008,z);for(let X=0;X<9;X++){const Y=new Ve(Ot,se);Y.position.set(.75,5,0),Y.rotation.y=X*Math.PI*2/9,Y.rotation.x=X%3===0?-.2:.05,Y.castShadow=!0,Wt.add(Y)}for(let X=0;X<3;X++)F(Wt,[.6+X*.14,4.9,.1],[.15,.18,.15],z);[[-8,-8],[7.3,-20],[-9,-32],[6.5,-43],[-9,-58],[6.7,-75],[-8,-93],[7,-113],[-10,-133],[7,-151]].forEach(([X,Y],mt)=>{const Tt=Wt.clone();Tt.scale.setScalar(.95+mt%3*.12),Tt.rotation.y=mt*1.7,dt.add(Tt),Dt(Tt,X,Y)});for(let X=0;X<110;X++){const Y=new Nn,mt=12-G()*165,Tt=(X%2?1:-1)*(3.9+G()*9),I=3+Math.floor(G()*5);for(let At=0;At<I;At++){const Nt=(G()-.5)*1.4,j=(G()-.5)*1.2,ut=.14+G()*.19,vt=new Ve(ae,O.grass);vt.position.set(Nt,ut/2,j),vt.scale.set(.08,ut,.08),Y.add(vt),At<2&&X%3!==0&&(st(Y,[Nt,0,j],[Nt,ut+.07,j],.013,O.stem),F(Y,[Nt,ut+.07,j],[.09,.045,.09],X%2?O.flower:O.flowerWhite))}Dt(Y,Tt,mt)}for(let X=0;X<32;X++){const Y=new Nn,mt=.2+G()*.5;F(Y,[0,mt*.23,0],[mt,mt*.65,mt*.8],X%2?O.rock:O.rockLight,!0),X%2===0&&F(Y,[mt*.7,.08,mt*.4],[mt*.5,mt*.36,mt*.5],O.rockLight,!0),Dt(Y,(X%2?-1:1)*(4+G()*7),8-G()*140)}for(let X=0;X<17;X++){const Y=new Nn;st(Y,[0,0,0],[0,1.1,0],.075,O.fence),st(Y,[0,.48,-.1],[0,.48,-3.7],.045,O.fence),st(Y,[0,.92,-.1],[0,.92,-3.7],.045,O.fence),Dt(Y,-5.9,-6-X*3.7)}const jt=new xo(1,.035);for(let X=0;X<26;X++){const Y=new Ve(jt,O.stripe);Y.rotation.x=-Math.PI/2,Y.scale.x=.45+G()*1.5,Y.position.y=.007,Dt(Y,(G()-.5)*3,-4-G()*145,!0)}const fe=new Map;for(const X of pt){X.object.updateMatrixWorld(!0);const Y=X.object.matrixWorld.clone().invert(),mt=gt.has(X.object)?"forest":dt.has(X.object)?"coast":"world";X.object.traverse(Tt=>{if(!(Tt instanceof Ve)||Array.isArray(Tt.material))return;const I=`${mt}:${Tt.geometry.uuid}:${Tt.material.uuid}:${Tt.castShadow}:${Tt.receiveShadow}`;let At=fe.get(I);At||(At={geometry:Tt.geometry,material:Tt.material,shadow:Tt.castShadow,receive:Tt.receiveShadow,kind:mt,entries:[]},fe.set(I,At)),At.entries.push({source:X.object,local:Y.clone().multiply(Tt.matrixWorld)})}),C.remove(X.object)}const Ee=new nn,Ne=[...fe.values()].map(X=>{const Y=new oT(X.geometry,X.material,X.entries.length);return Y.castShadow=X.shadow,Y.receiveShadow=X.receive,Y.frustumCulled=!1,Y.instanceMatrix.setUsage(DE),X.entries.forEach((mt,Tt)=>Y.setMatrixAt(Tt,Ee.multiplyMatrices(mt.source.matrixWorld,mt.local))),C.add(Y),{mesh:Y,entries:X.entries,kind:X.kind}});function P(X){const Y=new Nn;Y.name=X===1?"P1-GreenCyclist":"P2-BlueCyclist",Y.position.set(0,.04,2),C.add(Y);const mt=R("#3f4a43"),Tt=R("#c7cdbd",.5),I=R("#d5d6bd",.45),At=R(X===1?"#3f7568":"#426d9c",.5),Nt=R("#354b44"),j=R(X===1?"#568e7b":"#4a83c2"),ut=R(X===1?"#6ca18b":"#72a4db"),vt=R("#3c5149"),It=R("#dfb58f"),zt=R("#f1e8cd"),ce=R("#d9d8cb"),de=R("#efdfbf"),Ce=[];for(const Ln of[.91,-1.03]){const an=new Nn;an.position.set(0,.58,Ln);const On=new Ve(new Gu(.52,.047,8,36),mt);On.rotation.y=Math.PI/2,On.castShadow=!0,an.add(On);const Bi=new Ve(new Gu(.467,.014,6,36),Tt);Bi.rotation.y=Math.PI/2,an.add(Bi),st(an,[-.09,0,0],[.09,0,0],.043,I);for(let D=0;D<12;D++){const tt=D*Math.PI/6;st(an,[0,0,0],[0,Math.cos(tt)*.46,Math.sin(tt)*.46],.006,Tt)}Y.add(an),Ce.push(an)}const Xe=[0,.58,.91],Qe=[0,.55,.04],Xn=[0,1.34,.36],oi=[0,1.29,-.81];[[Xe,Qe],[Qe,Xn],[Xn,Xe],[Xn,oi],[oi,Qe],[oi,[0,.58,-1.03]]].forEach(([Ln,an])=>st(Y,Ln,an,.035,At)),st(Y,[0,1.23,.39],[0,1.48,.44],.027,I),F(Y,[0,1.48,.43],[.22,.052,.18],Nt),st(Y,[0,1.29,-.81],[0,1.51,-.83],.024,I),st(Y,[-.34,1.52,-.87],[.34,1.52,-.87],.022,I),st(Y,[-.34,1.52,-.87],[-.34,1.5,-1.02],.034,Nt),st(Y,[.34,1.52,-.87],[.34,1.5,-1.02],.034,Nt),st(Y,[-.15,.64,.92],[-.15,1.16,.8],.013,I),st(Y,[.15,.64,.92],[.15,1.16,.8],.013,I),st(Y,[-.15,1.16,.5],[-.15,1.16,1.2],.016,I),st(Y,[.15,1.16,.5],[.15,1.16,1.2],.016,I),st(Y,[-.15,1.16,1.2],[.15,1.16,1.2],.016,I),F(Y,[0,1.15,1.23],[.07,.035,.02],R("#c37658")),st(Y,[.03,.74,-.14],[.03,.98,-.3],.065,R("#e4d6ac"));const ln=new Nn;Y.add(ln),F(ln,[0,1.64,.37],[.27,.2,.19],vt);const Pi=F(ln,[0,1.99,.17],[.31,.43,.22],j);Pi.rotation.x=-.24,F(ln,[0,2.18,.13],[.32,.15,.22],ut);const Ii=new Ve(new ir(.42,.045,.014),zt);Ii.position.set(0,1.98,.392),Ii.rotation.x=-.24,ln.add(Ii),st(ln,[0,2.21,.04],[0,2.37,-.03],.09,It);const rn=new Nn;rn.position.set(0,2.49,-.065),ln.add(rn),F(rn,[0,0,0],[.205,.235,.19],It),F(rn,[0,.035,.07],[.211,.19,.17],ce),F(rn,[-.205,-.015,0],[.043,.07,.045],It),F(rn,[.205,-.015,0],[.043,.07,.045],It),F(rn,[0,-.035,-.18],[.05,.06,.065],It);const Ei=new Ve(new Qs(.254,18,10,0,Math.PI*2,0,Math.PI*.62),zt);Ei.position.y=.095,Ei.scale.set(1,.8,1.1),Ei.castShadow=!0,rn.add(Ei);for(const Ln of[-.13,0,.13])F(rn,[Ln,.272-Math.abs(Ln)*.25,.015],[.021,.014,.125],Nt);st(rn,[-.19,.04,.06],[-.11,-.19,-.02],.012,Nt),st(rn,[.19,.04,.06],[.11,-.19,-.02],.012,Nt);for(const Ln of[-1,1]){const an=[Ln*.275,2.18,.12],On=[Ln*.36,1.92,-.36],Bi=[Ln*.34,1.53,-.94];st(ln,an,On,.082,j),F(ln,On,[.065,.065,.065],It),st(ln,On,Bi,.058,It),F(ln,Bi,[.065,.055,.075],It)}const li=new Nn;li.position.set(0,.55,.04),Y.add(li);const Ba=new Ve(new Dl(.14,.14,.025,20),Nt);Ba.rotation.z=Math.PI/2,Ba.position.x=.09,li.add(Ba);const To=[-1,1].map(Ln=>{const an=new Nn;Y.add(an);const On=st(an,[0,0,0],[0,1,0],.105,vt),Bi=st(an,[0,0,0],[0,1,0],.062,It),D=F(an,[0,0,0],[.075,.075,.075],It),tt=F(an,[0,0,0],[.085,.065,.17],de),xt=new Ve(new ir(.19,.035,.13),Nt);an.add(xt);const yt=st(an,[0,0,0],[0,1,0],.023,I);return{side:Ln,upper:On,lower:Bi,knee:D,shoe:tt,pedal:xt,arm:yt}});return{cyclist:Y,wheels:Ce,crank:li,legs:To,phase:0,traveled:0}}const A=[P(1),P(2)];A[1].cyclist.visible=!1;function rt(X,Y,mt,Tt){const I=mt.clone().sub(Y);X.position.copy(Y).add(mt).multiplyScalar(.5),X.scale.set(Tt,I.length(),Tt),X.quaternion.setFromUnitVectors(me,I.normalize())}const St=new Float32Array(105);for(let X=0;X<35;X++)St[X*3]=(G()-.5)*28,St[X*3+1]=1.2+G()*7,St[X*3+2]=8-G()*48;const Ut=new ti;Ut.setAttribute("position",new zi(St,3)),C.add(new ex(Ut,new hy({color:"#fff4cc",size:.055,transparent:!0,opacity:.75,depthWrite:!1}))),p.current=X=>{const Y=Dx[X];C.background.set(Y.sky),C.fog.color.set(Y.horizon),H.uniforms.top.value.set(Y.sky),H.uniforms.bottom.value.set(Y.horizon),L.color.set(Y.light),Et.visible=X==="coast",ct.visible=X==="sunset",_t.visible=X!=="coast",q.visible=X!=="coast",L.position.set(X==="sunset"?-30:-18,X==="sunset"?19:28,-16),Ne.forEach(Tt=>{Tt.mesh.visible=Tt.kind==="world"||(Tt.kind==="coast"?X==="coast":X!=="coast")});const mt=X==="coast"?"海岸騎行：長者騎著單車沿著棕櫚樹與藍色海洋前進":X==="sunset"?"夕陽騎行：長者騎著單車穿過暖色山丘與林間小徑":"森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進";T.domElement.setAttribute("aria-label",`3D ${h.current.playerCount===2?"雙人競賽，左側綠色玩家 1、右側藍色玩家 2。":""}${mt}`);for(const Tt of["ground","grass","leaf","leafLight","darkLeaf","hill","farHill","water"])O[Tt].color.set(Y[Tt])},p.current(m.current);const Mt=()=>{h.current.playerCount===2?(S.position.set(2.7,5.3,15),S.lookAt(-1.7,1.2,-9)):(S.position.set(3.5,4.8,12.3),S.lookAt(-3,1.1,-10)),S.fov=S.aspect<1.1?58:48,S.updateProjectionMatrix()},Jt=()=>{const X=E.clientWidth,Y=E.clientHeight;!X||!Y||(T.setSize(X,Y,!1),S.aspect=X/Y,Mt())};x.current=X=>{var Y;A[1].cyclist.visible=X===2,A.forEach((mt,Tt)=>{mt.cyclist.position.x=X===2?Tt===0?-1.1:1.1:0,mt.cyclist.position.z=2,mt.traveled=0}),Mt(),(Y=p.current)==null||Y.call(p,m.current)};const Ht=new ResizeObserver(Jt);Ht.observe(E),Jt(),x.current(h.current.playerCount);let $t=0,ee=0;function Pt(X,Y,mt,Tt){X.phase+=Y*mt*1.55,X.traveled+=Y*mt;const{cyclist:I,wheels:At,crank:Nt,legs:j,phase:ut}=X;At.forEach(vt=>{vt.rotation.x-=Y*mt/.52}),Nt.rotation.x=ut,Tt&&(I.rotation.z=Y>0?Math.sin(ut)*.014:0,I.position.y=.04+(Y>0?Math.sin(ut*2)*.006:0)),j.forEach(vt=>{const It=ut+(vt.side>0?Math.PI:0),zt=vt.side*.18,ce=new it(zt,.64+Math.cos(It)*.225,.04+Math.sin(It)*.225),de=new it(zt,1.57,.36),Ce=ce.clone().sub(de),Xe=Math.min(Ce.length(),1.195),Qe=(.61*.61-.59*.59+Xe*Xe)/(2*Xe),Xn=Math.sqrt(Math.max(0,.61*.61-Qe*Qe)),oi=Ce.clone().normalize(),ma=new it(0,-oi.z,oi.y).normalize();ma.z>0&&ma.negate();const ln=de.clone().addScaledVector(oi,Qe).addScaledVector(ma,Xn);rt(vt.upper,de,ln,.1),rt(vt.lower,ln,ce,.06),vt.knee.position.copy(ln),vt.shoe.position.copy(ce).add(new it(0,-.015,-.055)),vt.pedal.position.copy(ce).add(new it(0,-.07,0)),rt(vt.arm,new it(zt,.55,.04),ce.clone().add(new it(0,-.07,0)),.023)})}const kt=X=>{$t=requestAnimationFrame(kt);const Y=ee?Math.min((X-ee)/1e3,.05):0;ee=X;const{speed:mt,running:Tt,playerCount:I,opponentSpeed:At,playerDistances:Nt}=h.current,j=I===2,ut=[mt,At].map(zt=>Tt&&Number.isFinite(zt)?Math.max(0,zt)/3.6:0),It=(j?(ut[0]+ut[1])/2:ut[0])*Y;if(It>0){for(const zt of pt)zt.z+=It,zt.z>18&&(zt.z-=184),zt.object.position.z=zt.z,zt.object.position.x=(zt.stream?k(zt.z):N(zt.z))+zt.lateral,zt.object.updateMatrix();for(const zt of Ne)zt.entries.forEach((ce,de)=>zt.mesh.setMatrixAt(de,Ee.multiplyMatrices(ce.source.matrix,ce.local))),zt.mesh.instanceMatrix.needsUpdate=!0}if(A.forEach((zt,ce)=>{(ce===0||j)&&Pt(zt,ut[ce],Y,Tt)}),j){const zt=Nt??[A[0].traveled,A[1].traveled],ce=zt[0]-zt[1],de=Number.isFinite(ce)?Math.tanh(ce/10)*3.2:0;A.forEach((Ce,Xe)=>{const Qe=2+(Xe===0?-de/2:de/2);Ce.cyclist.position.z=Qe,Ce.cyclist.position.x=N(Qe)+(Xe===0?-1.1:1.1)})}T.render(C,S)};return $t=requestAnimationFrame(kt),()=>{var mt;cancelAnimationFrame($t),Ht.disconnect(),p.current=null,x.current=null;const X=new Set,Y=new Set;C.traverse(Tt=>{(Tt instanceof Ve||Tt instanceof ex)&&(X.add(Tt.geometry),(Array.isArray(Tt.material)?Tt.material:[Tt.material]).forEach(I=>Y.add(I)))}),Lt.forEach(Tt=>Tt.traverse(I=>{I instanceof Ve&&(X.add(I.geometry),Y.add(I.material))})),X.forEach(Tt=>Tt.dispose()),Y.forEach(Tt=>Tt.dispose()),(mt=L.shadow.map)==null||mt.dispose(),T.dispose(),T.domElement.parentNode===E&&E.removeChild(T.domElement)}},[]),M.jsx("div",{ref:d,className:"ride-scene",style:{position:"absolute",inset:0,overflow:"hidden",background:"#dce9df"},children:g&&M.jsxs("div",{role:"status",style:{position:"absolute",inset:0,display:"grid",placeContent:"center",textAlign:"center",padding:30,color:"#385b4b",background:"linear-gradient(#e3eddf,#b6c78c)"},children:[M.jsx("strong",{children:"3D 騎行環境需要 WebGL"}),M.jsx("p",{children:"請開啟瀏覽器硬體加速，再重新載入。動作偵測與運動紀錄仍可使用。"})]})})}class Nx{constructor(){mn(this,"lastTime",null);mn(this,"filtered",0);mn(this,"center",0);mn(this,"armed",!1);mn(this,"lastCrossing",null);mn(this,"intervals",[]);mn(this,"samples",[]);mn(this,"rpm",0)}reset(){this.lastTime=null,this.filtered=0,this.center=0,this.armed=!1,this.lastCrossing=null,this.intervals=[],this.samples=[],this.rpm=0}update(e,i){if(!Number.isFinite(e)||!Number.isFinite(i))return 0;if(this.lastTime!==null&&(i<this.lastTime||i-this.lastTime>1500)&&this.reset(),this.lastTime===null)return this.lastTime=i,this.filtered=e,this.center=e,this.samples.push({time:i,value:e}),0;const r=Math.max(0,i-this.lastTime);for(this.lastTime=i,this.filtered+=(e-this.filtered)*(1-Math.exp(-r/65)),this.center+=(this.filtered-this.center)*(1-Math.exp(-r/2400)),this.samples.push({time:i,value:this.filtered});this.samples.length>1&&this.samples[0].time<i-1600;)this.samples.shift();let l=1/0,f=-1/0;for(const v of this.samples)l=Math.min(l,v.value),f=Math.max(f,v.value);const d=f-l,h=Math.max(.024,Math.min(.065,d*.12)),m=this.filtered-this.center;if(m<-h&&(this.armed=!0),this.armed&&m>h&&d>=.065)if(this.armed=!1,this.lastCrossing!==null){const v=i-this.lastCrossing;if(v>=333&&v<=5e3){this.intervals.push(v),this.intervals.length>3&&this.intervals.shift();const E=[...this.intervals].sort((y,S)=>y-S),T=Math.floor(E.length/2),C=E.length%2?E[T]:(E[T-1]+E[T])/2;this.rpm=Math.min(180,6e4/C)}else v>5e3&&(this.intervals=[],this.rpm=0);v>=333&&(this.lastCrossing=i)}else this.lastCrossing=i;const p=this.intervals.length?Math.max(1800,this.intervals[this.intervals.length-1]*1.8):5500,x=this.lastCrossing!==null&&i-this.lastCrossing>p,g=this.samples.length>1&&i-this.samples[0].time>1400&&d<.045;return(x||g)&&(this.rpm=0,this.intervals=[],this.lastCrossing=null,this.armed=!1),this.rpm}}const np=-.08,n3=-.3,i3=1500,a3=2e3,Ux=6e3;class Lx{constructor(){mn(this,"phases",["unarmed","unarmed"]);mn(this,"loweredAt",[null,null]);mn(this,"liftStartedAt",[null,null]);mn(this,"lastFrameTime",null);mn(this,"lastStepTime",null);mn(this,"lastStepSide",null);mn(this,"lastGoodTime",null);mn(this,"intervals",[]);mn(this,"lastCycleDuration",0);mn(this,"cadence",0);mn(this,"steps",0);mn(this,"feedback","raise")}reset(){this.steps=0,this.suspend()}suspend(){this.phases=["unarmed","unarmed"],this.loweredAt=[null,null],this.liftStartedAt=[null,null],this.lastFrameTime=null,this.lastStepTime=null,this.lastStepSide=null,this.lastGoodTime=null,this.intervals=[],this.lastCycleDuration=0,this.cadence=0,this.feedback="raise"}update(e,i,r){var h;if(![e,i,r].every(Number.isFinite))return this.suspend(),this.reading();if(this.lastFrameTime!==null){if(r<this.lastFrameTime||r-this.lastFrameTime>i3)this.suspend();else if(r===this.lastFrameTime)return this.reading()}if(this.lastFrameTime=r,this.lastStepTime!==null){const m=this.intervals.at(-1)??this.lastCycleDuration,p=Math.min(Ux,Math.max(a3,m*1.5));r-this.lastStepTime>=p&&(this.cadence=0),r-this.lastStepTime>Ux&&(this.lastStepTime=null,this.lastStepSide=null,this.intervals=[])}const l=[e,i],f=[],d=[0,0];if(l.every(m=>m>=np))this.phases=["unarmed","unarmed"],this.loweredAt=[null,null],this.liftStartedAt=[null,null];else for(const m of[0,1])l[m]<=n3?(this.phases[m]==="raised"&&(f.push(m),d[m]=r-(this.liftStartedAt[m]??r)),this.phases[m]="lowered",this.loweredAt[m]=r,this.liftStartedAt[m]=null):this.phases[m]==="lowered"&&((h=this.liftStartedAt)[m]??(h[m]=this.loweredAt[m]??r),l[m]>=np&&(this.phases[m]="raised"));if(f.length===1&&f[0]!==this.lastStepSide){if(this.steps+=1,this.lastCycleDuration=d[f[0]],this.lastStepTime!==null){const m=r-this.lastStepTime;if(m>0){this.intervals.push(m),this.intervals.length>5&&this.intervals.shift();const x=3e4/(this.intervals.reduce((g,v)=>g+v,0)/this.intervals.length);this.cadence=Number.isFinite(x)?x:0}}else this.cadence=Math.min(60,3e4/Math.max(500,this.lastCycleDuration));this.lastStepTime=r,this.lastStepSide=f[0],this.lastGoodTime=r,this.feedback="good"}else l.some(m=>m>=np)||this.phases.some(m=>m==="raised")?this.feedback="lower":this.feedback=this.lastGoodTime!==null&&r-this.lastGoodTime<800?"good":"raise";return this.reading()}reading(){return{cadence:this.cadence,steps:this.steps,feedback:this.feedback}}}function Tl(o){return`/bike-game/${o.replace(/^\/+/,"")}`}function s3(o,e){return e===1?{x:0,width:1}:{x:o===0?.5:0,width:.5}}function r3(o,e){return o.map(i=>({...i,x:e.x+i.x*e.width}))}function ho(o,e=.5){return!!o&&(o.visibility??0)>=e&&(o.presence??1)>=e&&o.x>.015&&o.x<.985&&o.y>.015&&o.y<.985}function o3(o,e=4/3,i="seated"){const r=i==="standing"?[23,24,25,26]:[23,24,25,26,27,28];if(!o||!r.every(h=>ho(o[h]))||!ho(o[11],.4)||!ho(o[12],.4))return null;const l=(o[23].x+o[24].x)/2;if(l<.1||l>.9)return null;const f=Math.hypot((o[11].x+o[12].x-o[23].x-o[24].x)/2*e,(o[11].y+o[12].y-o[23].y-o[24].y)/2);if(f<.07)return null;let d=0;if(i==="seated"){const h=o[23].y-(o[25].y*.6+o[27].y*.4),m=o[24].y-(o[26].y*.6+o[28].y*.4);d=(h-m)/f}return{signal:d,leftLift:(o[23].y-o[25].y)/f,rightLift:(o[24].y-o[26].y)/f,quality:Math.round(r.reduce((h,m)=>h+(o[m].visibility??0),0)/r.length*100)}}let ro=null;function l3(){return window.Pose?Promise.resolve(window.Pose):ro||(ro=new Promise((o,e)=>{const i=document.createElement("script");i.src=Tl("pose/pose.js"),i.async=!0,i.onload=()=>{window.Pose?o(window.Pose):(ro=null,i.remove(),e(new Error("Local pose runtime is unavailable")))},i.onerror=()=>{ro=null,i.remove(),e(new Error("Cannot load local pose runtime"))},document.head.appendChild(i)}),ro)}const Si=["#d4ee94","#8dcaff"],c3=[[11,12],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,31],[28,32]],u3=[11,12,23,24,25,26,27,28,31,32],oo=o=>o==="standing"?"請讓肩膀、髖部與膝蓋入鏡":"請讓肩膀到雙腳入鏡",lo=(o="請讓肩膀到雙腳入鏡")=>({cadence:0,tracking:!1,quality:0,feedback:o,highKnees:0});function Ox(o){const e=o instanceof Error?o.name:"";return e==="NotAllowedError"||e==="PermissionDeniedError"?"請允許此網站使用攝影機後重試。":e==="NotFoundError"||e==="DevicesNotFoundError"?"找不到攝影機，請連接攝影機後重試。":e==="NotReadableError"||e==="TrackStartError"?"攝影機正被其他程式使用，請關閉其他視訊程式後重試。":e==="SecurityError"?"請使用 HTTPS 或 localhost 開啟遊戲，才能使用攝影機。":"無法啟動動作分析，請確認攝影機和本機辨識模型可用後重試。"}function f3({mode:o,running:e,demoCadence:i,onCadence:r,onTracking:l,playerCount:f=1,exerciseMode:d="seated",demoCadence2:h=i,onPlayers:m,resetKey:p=0}){const x=Yt.useRef(null),g=Yt.useRef(null),v=Yt.useRef({onCadence:r,onTracking:l,onPlayers:m}),E=Yt.useRef({running:e,exerciseMode:d}),T=Yt.useRef([new Nx,new Nx]),C=Yt.useRef([new Lx,new Lx]),y=Yt.useRef([lo(oo(d)),lo(oo(d))]),S=Yt.useRef(()=>{}),U=Yt.useRef(()=>{}),[L,R]=Yt.useState(y.current),[O,H]=Yt.useState(o==="demo"?"demo":"loading"),[B,G]=Yt.useState(""),[N,w]=Yt.useState(0);return v.current={onCadence:r,onTracking:l,onPlayers:m},E.current={running:e,exerciseMode:d},Yt.useEffect(()=>{e||S.current()},[e]),Yt.useEffect(()=>{U.current()},[p,d]),Yt.useEffect(()=>{let k=!1,q=!1,_t=0,Et=0,ht=null,Z=-1,ct=0,Q=null;const Ct=Array.from({length:f},(pt,gt)=>({index:gt,region:s3(gt,f),model:null,pending:null,crop:document.createElement("canvas"),lastResult:0,imageAspect:4/3}));for(const pt of T.current)pt.reset();for(const pt of C.current)pt.reset();y.current=[lo(oo(E.current.exerciseMode)),lo(f===2?oo(E.current.exerciseMode):"單人模式")],G("");const wt=pt=>{k||pt===Q||(Q=pt,H(pt),v.current.onTracking(pt))},Ft=(pt=!1)=>{var dt,Dt;if(k)return;const gt=[{...y.current[0]},{...y.current[1]}];R(gt),v.current.onCadence(gt[0].cadence),(Dt=(dt=v.current).onPlayers)==null||Dt.call(dt,gt),pt&&wt(gt.slice(0,f).some(z=>z.tracking)?"tracking":"positioning")};S.current=()=>{if(!k){for(const pt of T.current)pt.reset();for(const pt of C.current)pt.suspend();y.current=y.current.map(pt=>({...pt,cadence:0,feedback:pt.tracking?"已暫停":pt.feedback})),Ft()}},U.current=()=>{if(!k){for(const pt of T.current)pt.reset();for(const pt of C.current)pt.reset();y.current=y.current.map(pt=>({...pt,cadence:0,highKnees:0,feedback:pt.tracking?E.current.exerciseMode==="standing"?"膝蓋抬到髖部高度":"請交替抬腳踩踏":oo(E.current.exerciseMode)})),Ft()}},Ft();const ae=()=>{for(const pt of Ct){const gt=pt.model;pt.model=null,gt&&Promise.resolve(pt.pending).catch(()=>{}).then(()=>gt.close()).catch(()=>{})}},me=(pt,gt=oo(E.current.exerciseMode))=>{T.current[pt.index].reset(),C.current[pt.index].suspend(),pt.points=void 0,y.current[pt.index]={...y.current[pt.index],cadence:0,tracking:!1,quality:0,feedback:gt}},F=pt=>{if(!(k||q)){q=!0,cancelAnimationFrame(_t),window.clearInterval(Et),G(pt);for(const gt of Ct)me(gt,"攝影機未連線");ht==null||ht.getTracks().forEach(gt=>{gt.onended=null,gt.stop()}),ae(),Ft(),wt("error")}};if(o==="demo")return y.current=[lo("示範・非即時影像"),lo("示範・非即時影像")],Ft(),wt("demo"),()=>{k=!0};wt("loading");const st=()=>{const pt=g.current,gt=x.current,dt=pt==null?void 0:pt.getContext("2d");if(!pt||!gt||!dt)return;const Dt=gt.videoWidth||960,z=gt.videoHeight||720;(pt.width!==Dt||pt.height!==z)&&(pt.width=Dt,pt.height=z),dt.clearRect(0,0,Dt,z);const se=Dt/640;dt.lineCap="round";for(const Vt of Ct){const Xt=Vt.points;if(!Xt)continue;const Ot=r3(Xt,Vt.region);dt.strokeStyle=Si[Vt.index],dt.fillStyle=Si[Vt.index],dt.lineWidth=3.2*se,dt.shadowColor=Si[Vt.index],dt.shadowBlur=5*se;for(const[Wt,jt]of c3)!ho(Xt[Wt],.35)||!ho(Xt[jt],.35)||(dt.beginPath(),dt.moveTo(Ot[Wt].x*Dt,Ot[Wt].y*z),dt.lineTo(Ot[jt].x*Dt,Ot[jt].y*z),dt.stroke());dt.shadowBlur=0;for(const Wt of u3)ho(Xt[Wt],.35)&&(dt.beginPath(),dt.arc(Ot[Wt].x*Dt,Ot[Wt].y*z,4.8*se,0,Math.PI*2),dt.fill());if(E.current.exerciseMode==="standing"&&y.current[Vt.index].tracking){const Wt=(Ot[23].y+Ot[24].y)/2*z;dt.setLineDash([5*se,4*se]),dt.lineWidth=1.2*se,dt.beginPath(),dt.moveTo((Vt.region.x+Vt.region.width*.12)*Dt,Wt),dt.lineTo((Vt.region.x+Vt.region.width*.88)*Dt,Wt),dt.stroke(),dt.setLineDash([])}}},et=(pt,gt)=>{if(k||q)return;const dt=performance.now();pt.lastResult=dt;const Dt=gt.poseLandmarks,z=o3(Dt,pt.imageAspect,E.current.exerciseMode);if(!z||!Dt){me(pt),pt.points=Dt;return}pt.points=Dt;let se=0,Vt=y.current[pt.index].highKnees,Xt="已暫停";if(E.current.running)if(E.current.exerciseMode==="standing"){const Ot=C.current[pt.index].update(z.leftLift,z.rightLift,dt);se=Ot.cadence,Vt=Ot.steps,Xt=Ot.feedback==="raise"?"膝蓋抬到髖部高度":Ot.feedback==="lower"?"放下抬起的膝蓋":"左右交替，做得很好"}else se=T.current[pt.index].update(z.signal,dt),Xt=se>0?"持續交替踩踏":"請交替抬腳踩踏";y.current[pt.index]={cadence:se,highKnees:Vt,feedback:Xt,tracking:!0,quality:z.quality}},ot=async pt=>{if(k||q)return;const gt=x.current;if(gt&&gt.readyState>=2&&gt.currentTime!==Z&&pt-ct>=(f===2?80:66)){Z=gt.currentTime,ct=pt;try{if(f===2)for(const dt of Ct){const Dt=gt.videoWidth*dt.region.width,z=gt.videoHeight,se=Math.min(1,480/Dt,640/z),Vt=Math.max(1,Math.round(Dt*se)),Xt=Math.max(1,Math.round(z*se));(dt.crop.width!==Vt||dt.crop.height!==Xt)&&(dt.crop.width=Vt,dt.crop.height=Xt);const Ot=dt.crop.getContext("2d");if(!Ot)throw new Error("Cannot create player camera crop");Ot.drawImage(gt,gt.videoWidth*dt.region.x,0,Dt,z,0,0,Vt,Xt),dt.imageAspect=Vt/Xt}else Ct[0].imageAspect=gt.videoWidth/gt.videoHeight;for(const dt of Ct){if(k||q||!dt.model)return;const Dt=dt.model.send({image:f===2?dt.crop:gt});dt.pending=Dt,await Dt,dt.pending===Dt&&(dt.pending=null)}!k&&!q&&(st(),Ft(!0))}catch(dt){F(Ox(dt));return}}!k&&!q&&(_t=requestAnimationFrame(ot))};return(async()=>{var pt;try{if(!window.isSecureContext||!((pt=navigator.mediaDevices)!=null&&pt.getUserMedia))throw new DOMException("Secure context is required","SecurityError");if(ht=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:f===2?1280:960},height:{ideal:720}},audio:!1}),k||q){ht.getTracks().forEach(Dt=>Dt.stop());return}ht.getVideoTracks().forEach(Dt=>{Dt.onended=()=>F("攝影機已中斷，請檢查裝置後重新連線。")});const gt=x.current;if(!gt)throw new Error("Camera preview is unavailable");gt.srcObject=ht,await gt.play();const dt=await l3();if(k||q)return;for(const Dt of Ct){if(k||q)return;const z=new dt({locateFile:Vt=>Tl(`pose/${Vt}`)});Dt.model=z,z.setOptions({modelComplexity:0,smoothLandmarks:!0,enableSegmentation:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),z.onResults(Vt=>et(Dt,Vt));const se=z.initialize();Dt.pending=se,await se,Dt.pending===se&&(Dt.pending=null)}if(k||q)return;wt("positioning"),_t=requestAnimationFrame(ot),Et=window.setInterval(()=>{if(k||q)return;const Dt=performance.now();let z=!1;for(const se of Ct)se.lastResult&&Dt-se.lastResult>1600&&y.current[se.index].tracking&&(me(se,"影像暫停，請檢查攝影機"),z=!0);z&&(st(),Ft(!0))},400)}catch(gt){F(Ox(gt))}})(),()=>{k=!0,cancelAnimationFrame(_t),window.clearInterval(Et),ht==null||ht.getTracks().forEach(gt=>{gt.onended=null,gt.stop()}),ae();const pt=x.current;pt&&(pt.srcObject=null);for(const gt of T.current)gt.reset();for(const gt of C.current)gt.suspend()}},[o,f,N]),M.jsxs("div",{className:`pose-camera pose-camera--${o}`,"data-player-count":f,"data-exercise-mode":d,style:{position:"relative",width:"100%",height:"100%",minHeight:0,overflow:"hidden",borderRadius:12,background:"#26352d",color:"#eef2e5"},children:[o==="camera"?M.jsxs(M.Fragment,{children:[M.jsx("video",{ref:x,muted:!0,playsInline:!0,autoPlay:!0,className:"pose-video","aria-label":"鏡像攝影機畫面",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}}),M.jsx("canvas",{ref:g,className:"pose-overlay","aria-label":"即時人體關節標記",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}})]}):M.jsx(d3,{running:e,cadences:[i,h],playerCount:f,exerciseMode:d}),M.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,pointerEvents:"none",background:"linear-gradient(180deg,#12251e88,transparent 27%,transparent 62%,#12251ed9)"}}),f===2&&M.jsx("div",{"aria-hidden":"true",style:{position:"absolute",left:"50%",top:29,bottom:38,borderLeft:"1px dashed #dce9cd66"}}),M.jsxs("div",{className:"pose-topline",style:{position:"absolute",top:8,left:8,right:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:4,fontSize:9},children:[M.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5},children:[M.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:O==="error"?"#e8a78f":Si[0]}}),o==="demo"?"示範動畫・非即時影像":`${f===2?"雙人 ":""}AI 動作分析`]}),M.jsx("span",{style:{fontSize:8,color:"#c4d7ba"},children:d==="standing"?"站姿抬膝":"坐姿踩踏"})]}),M.jsx("div",{className:"pose-player-labels",style:{position:"absolute",top:27,left:8,right:8,display:"flex",gap:8,pointerEvents:"none"},children:Array.from({length:f},(k,q)=>M.jsxs("span",{"data-player-zone":q+1,style:{flex:1,color:Si[q],fontSize:9,textAlign:"left",textShadow:"0 1px 4px #000"},children:["● 玩家 ",q+1,o==="camera"&&L[q].tracking?` · ${L[q].quality}%`:""]},q))}),O==="loading"&&o==="camera"&&M.jsxs("div",{role:"status",style:{position:"absolute",inset:"42% 8px auto",textAlign:"center",fontSize:10,textShadow:"0 1px 8px #000"},children:["正在載入",f===2?"雙人":"本機","辨識模型…"]}),O==="error"&&o==="camera"&&M.jsxs("div",{role:"alert",className:"pose-error",style:{position:"absolute",inset:"29px 7px 28px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",gap:7,padding:7,background:"#24362df5",borderRadius:8},children:[M.jsx("span",{style:{fontSize:10,lineHeight:1.6},children:B}),M.jsx("button",{type:"button",onClick:()=>w(k=>k+1),style:{border:"1px solid #91a878",borderRadius:6,padding:"4px 10px",fontSize:10,color:"#e8f0dc",background:"#3f5540",cursor:"pointer"},children:"重新連線"})]}),M.jsx("div",{className:"pose-footer",style:{position:"absolute",bottom:6,left:7,right:7,display:"flex",gap:5},children:Array.from({length:f},(k,q)=>M.jsxs("div",{style:{flex:1,minWidth:0,padding:"4px 5px",borderRadius:5,background:"#14291ec4",border:`1px solid ${Si[q]}30`},children:[M.jsx("span",{"data-player-status":q+1,"data-tracking":L[q].tracking?"true":"false","data-cadence":L[q].cadence.toFixed(2),"data-high-knees":L[q].highKnees,style:{display:"block",color:Si[q],fontSize:9,whiteSpace:"nowrap"},children:o==="demo"?`玩家${q+1}示範`:`玩家${q+1}${L[q].tracking?"已辨識":"待入鏡"}`}),M.jsx("span",{title:L[q].feedback,style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:"#dae6d1",fontSize:8,marginTop:2},children:o==="demo"?"非即時影像":L[q].feedback})]},q))})]})}function d3({running:o,cadences:e,playerCount:i,exerciseMode:r}){const l=Yt.useRef(null),f=Yt.useRef({running:o,cadences:e,playerCount:i,exerciseMode:r});return f.current={running:o,cadences:e,playerCount:i,exerciseMode:r},Yt.useEffect(()=>{let d=0,h=0;const m=[.7,2.3],p=x=>{const g=l.current,v=g==null?void 0:g.getContext("2d");if(!g||!v)return;const E=h?Math.min((x-h)/1e3,.1):0;h=x;const T=480,C=360;v.clearRect(0,0,T,C),v.strokeStyle="#c4db9b0e",v.lineWidth=1;for(let y=0;y<T;y+=30)v.beginPath(),v.moveTo(y,0),v.lineTo(y,C),v.stroke();for(let y=0;y<C;y+=30)v.beginPath(),v.moveTo(0,y),v.lineTo(T,y),v.stroke();for(let y=0;y<f.current.playerCount;y++){f.current.running&&(m[y]+=E*f.current.cadences[y]/60*Math.PI*2);const S=m[y],U=f.current.exerciseMode==="standing",L=f.current.playerCount===2?120+y*240:240,R=f.current.playerCount===2?.85:1;v.save(),v.translate(L,0),v.scale(R,1);const O=U?Math.max(0,Math.sin(S)):Math.sin(S),H=U?Math.max(0,-Math.sin(S)):-Math.sin(S),B=U?190:192,G=[[-22,113],[22,113],[-17,B],[17,B],[-37,U?253-O*78:230-O*24],[37,U?253-H*78:230-H*24],[-22+(U?0:Math.cos(S)*12),U?314-O*82:286-O*19],[22-(U?0:Math.cos(S)*12),U?314-H*82:286-H*19],[-40,U?314-O*82:280-O*19],[40,U?314-H*82:280-H*19],[-47,165],[47,165]];U?(v.strokeStyle=`${Si[y]}55`,v.lineWidth=1,v.setLineDash([5,5]),v.beginPath(),v.moveTo(-75,B),v.lineTo(75,B),v.stroke(),v.setLineDash([])):(v.strokeStyle="#bfd09d30",v.lineWidth=5,v.lineCap="round",v.beginPath(),v.moveTo(-49,191),v.lineTo(-49,227),v.lineTo(45,227),v.lineTo(45,301),v.moveTo(-42,227),v.lineTo(-42,301),v.stroke()),v.fillStyle=`${Si[y]}09`,v.beginPath(),v.moveTo(...G[0]),v.lineTo(...G[1]),v.lineTo(...G[3]),v.lineTo(...G[2]),v.closePath(),v.fill(),v.strokeStyle=`${Si[y]}77`,v.lineWidth=2,v.beginPath(),v.ellipse(0,82,18,22,0,0,Math.PI*2),v.stroke(),v.beginPath(),v.moveTo(0,104),v.lineTo(0,113),v.stroke();const N=[[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[0,10],[1,11],[10,2],[11,3]];v.strokeStyle=Si[y],v.shadowColor=Si[y],v.shadowBlur=6,v.lineWidth=3;for(const[w,k]of N)v.beginPath(),v.moveTo(...G[w]),v.lineTo(...G[k]),v.stroke();v.shadowBlur=0;for(const[w,k]of G)v.beginPath(),v.arc(w,k,4.5,0,Math.PI*2),v.fillStyle=Si[y],v.fill(),v.strokeStyle="#26382c",v.lineWidth=1.3,v.stroke();v.restore()}d=requestAnimationFrame(p)};return d=requestAnimationFrame(p),()=>cancelAnimationFrame(d)},[]),M.jsx("canvas",{ref:l,width:480,height:360,"aria-label":`示範${i===2?"雙人":"單人"}${r==="standing"?"站姿高抬膝":"坐姿空中踩踏"}關節動畫，非即時攝影機影像`,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}})}const zx=[50,100,250,500];function Px({exerciseMode:o,onExerciseModeChange:e,playerCount:i,onPlayerCountChange:r,raceMeters:l,onRaceMetersChange:f,locked:d,compact:h=!1}){const m=o==="standing"?"左右交替，膝蓋抬到髖部高度才計分":"坐穩椅子，雙腳交替踩踏";return h?M.jsxs("div",{className:"game-setup game-setup-compact","aria-label":"畫面內遊戲設定",children:[M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"運動模式"}),M.jsxs("select",{"aria-label":"畫面內運動模式",value:o,disabled:d,onChange:p=>e(p.target.value),children:[M.jsx("option",{value:"seated",children:"坐姿踩踏"}),M.jsx("option",{value:"standing",children:"站姿高抬膝"})]})]}),M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"騎行玩法"}),M.jsxs("select",{"aria-label":"畫面內騎行玩法",value:i,disabled:d,onChange:p=>r(Number(p.target.value)),children:[M.jsx("option",{value:1,children:"單人漫遊"}),M.jsx("option",{value:2,children:"雙人競賽"})]})]}),i===2&&M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"競賽距離"}),M.jsx("select",{"aria-label":"畫面內競賽距離",value:l,disabled:d,onChange:p=>f(Number(p.target.value)),children:zx.map(p=>M.jsxs("option",{value:p,children:[p," 公尺"]},p))})]}),M.jsx("p",{className:"game-setup-compact-hint",children:m})]}):M.jsxs("section",{className:"game-setup","aria-label":"遊戲設定",children:[M.jsxs("div",{className:"game-setup-field",children:[M.jsx("span",{className:"game-setup-label",children:"運動模式"}),M.jsxs("div",{className:"game-segmented",role:"group","aria-label":"運動模式",children:[M.jsxs("button",{type:"button","aria-pressed":o==="seated",disabled:d,onClick:()=>e("seated"),children:[M.jsx(Du,{size:17,"aria-hidden":"true"}),"坐姿踩踏"]}),M.jsxs("button",{type:"button","aria-pressed":o==="standing",disabled:d,onClick:()=>e("standing"),children:[M.jsx(Gx,{size:17,"aria-hidden":"true"}),"站姿高抬膝"]})]}),M.jsx("p",{className:"game-setup-hint",children:m})]}),M.jsxs("div",{className:"game-setup-field",children:[M.jsx("span",{className:"game-setup-label",children:"騎行玩法"}),M.jsxs("div",{className:"game-segmented",role:"group","aria-label":"騎行玩法",children:[M.jsxs("button",{type:"button","aria-pressed":i===1,disabled:d,onClick:()=>r(1),children:[M.jsx(IM,{size:17,"aria-hidden":"true"}),"單人漫遊"]}),M.jsxs("button",{type:"button","aria-pressed":i===2,disabled:d,onClick:()=>r(2),children:[M.jsx(BM,{size:17,"aria-hidden":"true"}),"雙人競賽"]})]}),M.jsx("p",{className:"game-setup-hint",children:i===2?"兩人共用一個鏡頭，依畫面左右分區":"照自己的步調，享受沿途風景"})]}),i===2&&M.jsxs("label",{className:"game-setup-field game-distance-field",children:[M.jsxs("span",{className:"game-setup-label",children:[M.jsx(El,{size:13,"aria-hidden":"true"}),"競賽距離"]}),M.jsx("select",{"aria-label":"競賽距離",value:l,disabled:d,onChange:p=>f(Number(p.target.value)),children:zx.map(p=>M.jsxs("option",{value:p,children:[p," 公尺"]},p))}),M.jsx("span",{className:"game-setup-hint",children:"先抵達終點者獲勝"})]})]})}function Pu(o){return Number.isFinite(o)?Math.max(0,o):0}function h3(o){const e=Math.floor(Pu(o));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function p3({speeds:o,distances:e,targetMeters:i,running:r,countdown:l,result:f}){const d=Math.max(1,Pu(i)),h=e.map(Pu),m=h[0]-h[1],p=Math.abs(m)<.1?null:m>0?0:1;return M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"race-hud","aria-label":"雙人競賽狀態",children:[M.jsxs("div",{className:"race-hud-heading",children:[M.jsxs("span",{children:[M.jsx(El,{size:13,"aria-hidden":"true"}),f?"競賽完成":l!==null?"準備出發":r?"競賽進行中":"雙人競賽"]}),M.jsxs("span",{children:["終點 ",d," 公尺"]})]}),M.jsx("div",{className:"race-player-grid",children:[0,1].map(x=>{const g=Math.min(100,h[x]/d*100);return M.jsxs("div",{className:`race-player-card race-player-${x+1}`,"data-player":x+1,"aria-label":`玩家 ${x+1} 狀態`,children:[M.jsxs("div",{className:"race-player-heading",children:[M.jsxs("span",{className:"race-player-name",children:[M.jsx("i",{"aria-hidden":"true"}),"玩家 ",x+1]}),p===x&&M.jsx("span",{className:"race-lead-label",children:"領先"})]}),M.jsxs("div",{className:"race-player-metrics",children:[M.jsxs("div",{className:"race-player-speed",children:[M.jsx("strong",{"data-metric":"speed",children:Pu(o[x]).toFixed(1)}),M.jsx("span",{children:"km/h"})]}),M.jsxs("div",{className:"race-player-distance",children:[M.jsx("strong",{"data-metric":"distance",children:h[x].toFixed(0)}),M.jsxs("span",{children:[" / ",d," 公尺"]})]})]}),M.jsx("div",{className:"race-progress-track",role:"progressbar","aria-label":`玩家 ${x+1} 騎行進度`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(g),"aria-valuetext":`${h[x].toFixed(0)} / ${d} 公尺`,children:M.jsx("span",{style:{width:`${g}%`}})})]},x)})})]}),l!==null&&M.jsxs("div",{className:"race-countdown",role:"status","aria-live":"assertive",children:[M.jsx("span",{children:"準備好了嗎？"}),M.jsx("strong",{children:l>0?l:"出發！"}),M.jsx("span",{children:"左右交替，一起向前"})]}),f&&M.jsxs("div",{className:"race-result-inline",role:"status","aria-live":"polite",children:[M.jsx("span",{className:"race-result-icon",children:M.jsx(Vx,{size:24,"aria-hidden":"true"})}),M.jsxs("div",{children:[M.jsx("strong",{children:f.winner==="tie"?"精彩平手！":`玩家 ${f.winner} 獲勝！`}),M.jsxs("span",{children:["完成時間 ",h3(f.elapsed)," · 每一次踩踏都很棒"]})]})]})]})}function ip(){return{elapsed:0,distances:[0,0],result:null}}function m3(o,e,i,r){if(o.result!==null||!Number.isFinite(i)||i<=0||!Number.isFinite(r)||r<=0)return o;const l=e.map(T=>Number.isFinite(T)&&T>0?T/3.6:0),f=o.distances.map(T=>Number.isFinite(T)&&T>0?Math.min(T,r):0),d=f.map((T,C)=>{const y=r-T;return y<=0?0:l[C]>0?y/l[C]:1/0}),h=Math.min(...d),m=h<=i,p=m?h:i,x=(Number.isFinite(o.elapsed)&&o.elapsed>0?o.elapsed:0)+p,g=[Math.min(r,f[0]+l[0]*p),Math.min(r,f[1]+l[1]*p)];if(!m)return{elapsed:x,distances:g,result:null};const E=d.every(T=>T<=i)&&Math.abs(d[0]-d[1])<1e-6?"tie":d[0]<d[1]?1:2;return(E==="tie"||E===1)&&(g[0]=r),(E==="tie"||E===2)&&(g[1]=r),{elapsed:x,distances:g,result:{winner:E,elapsed:x}}}const Ix=[{id:"forest",title:"晨光森林",subtitle:"穿過綠意，和微風打聲招呼",label:"平緩・森林",icon:PM,image:Tl("routes/forest.svg")},{id:"coast",title:"蔚藍海岸",subtitle:"沿著海岸線，把心情放晴",label:"平緩・海岸",icon:VM,image:Tl("routes/coast.svg")},{id:"sunset",title:"暖陽山丘",subtitle:"追著金色陽光，慢慢向前",label:"平緩・山丘",icon:DM,image:Tl("routes/sunset.svg")}],ap=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(Math.floor(o%60)).padStart(2,"0")}`;function g3(){try{const o=JSON.parse(localStorage.getItem("forest-pedal-rides")||"[]");return Array.isArray(o)?o.filter(e=>!!e&&typeof e.route=="string"&&typeof e.date=="string"&&Number.isFinite(Date.parse(e.date))&&Number.isFinite(e.seconds)&&e.seconds>=0&&Number.isFinite(e.distance)&&e.distance>=0).slice(0,100):[]}catch{return[]}}function v3(){var Nt;const[o,e]=Yt.useState("forest"),[i,r]=Yt.useState(!1),[l,f]=Yt.useState("demo"),[d,h]=Yt.useState(42),[m,p]=Yt.useState(38),[x,g]=Yt.useState(0),[v,E]=Yt.useState("demo"),[T,C]=Yt.useState("seated"),[y,S]=Yt.useState(1),[U,L]=Yt.useState(100),[R,O]=Yt.useState(null),[H,B]=Yt.useState(ip),[G,N]=Yt.useState(0),[w,k]=Yt.useState([{cadence:0,tracking:!1,quality:0,feedback:"請讓身體入鏡",highKnees:0},{cadence:0,tracking:!1,quality:0,feedback:"請讓身體入鏡",highKnees:0}]),[q,_t]=Yt.useState(!1),[Et,ht]=Yt.useState(!1),[Z,ct]=Yt.useState(!1),[Q,Ct]=Yt.useState(15),[wt,Ft]=Yt.useState(null),[ae,me]=Yt.useState(g3),[F,st]=Yt.useState(!0),[et,ot]=Yt.useState(!1),[Lt,pt]=Yt.useState(!1),[gt,dt]=Yt.useState(!1),[Dt,z]=Yt.useState(""),se=Yt.useRef(null),Vt=Yt.useRef(null),Xt=Yt.useRef(null),Ot=Ix.find(j=>j.id===o),Wt=H.elapsed,jt=H.distances[0]/1e3,fe=H.distances[1]/1e3,Ee=i?l==="demo"?d:w[0].tracking?x:0:0,Ne=Math.min(30,Ee*.28),P=i&&y===2?l==="demo"?m:w[1].tracking?w[1].cadence:0:0,A=Math.min(30,P*.28),rt=((Nt=H.result)==null?void 0:Nt.winner)==="tie"?"兩位玩家平手！":H.result?`玩家 ${H.result.winner} 獲勝`:"一起出發，享受這場競賽。",St=i||R!==null,Ut=y===1||l==="demo"||w.every(j=>j.tracking),Mt=Math.min(1,Wt/(Q*60)),Jt=Yt.useCallback(j=>g(j),[]),Ht=Yt.useCallback(j=>E(j),[]),$t=Yt.useCallback(j=>k(j),[]),ee=Yt.useRef([Ne,A]);ee.current=[Ne,A],Yt.useEffect(()=>{if(!i)return;let j=performance.now();const ut=setInterval(()=>{const vt=performance.now(),It=Math.min((vt-j)/1e3,2);j=vt,B(zt=>y===2?m3(zt,ee.current,It,U):{...zt,elapsed:zt.elapsed+It,distances:[zt.distances[0]+ee.current[0]/3.6*It,0]})},100);return()=>clearInterval(ut)},[i,y,U]),Yt.useEffect(()=>{if(R===null)return;const j=setTimeout(()=>{R<=1?(O(null),r(!0)):O(R-1)},1e3);return()=>clearTimeout(j)},[R]),Yt.useEffect(()=>{H.result&&!gt&&kt()},[H.result,gt]),Yt.useEffect(()=>{i&&l==="camera"&&v==="error"&&(r(!1),z("攝影機已中斷，旅程已暫停。重新連線後可繼續。"))},[i,l,v]),Yt.useEffect(()=>{const j=()=>ht(document.fullscreenElement===se.current);return document.addEventListener("fullscreenchange",j),()=>document.removeEventListener("fullscreenchange",j)},[]),Yt.useEffect(()=>{if(!Dt)return;const j=setTimeout(()=>z(""),4e3);return()=>clearTimeout(j)},[Dt]),Yt.useEffect(()=>{const j=ut=>{ut.key==="Escape"&&(Ft(null),ct(!1))};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[]),Yt.useEffect(()=>{if(!wt)return;const j=document.activeElement,ut=vt=>{if(vt.key!=="Tab")return;const It=[...document.querySelectorAll(".modal button:not(:disabled), .modal select, .modal a[href], .modal input")],zt=It[0],ce=It[It.length-1];vt.shiftKey&&document.activeElement===zt?(vt.preventDefault(),ce==null||ce.focus()):!vt.shiftKey&&document.activeElement===ce&&(vt.preventDefault(),zt==null||zt.focus())};return document.addEventListener("keydown",ut),()=>{document.removeEventListener("keydown",ut),j!=null&&j.isConnected&&j.focus()}},[wt]),Yt.useEffect(()=>{const j=document.body.style.overflow;return(wt||Z)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=j}},[wt,Z]),Yt.useEffect(()=>{Xt.current&&Vt.current&&Xt.current.gain.setTargetAtTime(!F&&i?.08:0,Vt.current.currentTime,.3)},[F,i,et]),Yt.useEffect(()=>()=>{var j;(j=Vt.current)==null||j.close()},[]);async function Pt(){if(!Vt.current){const j=new AudioContext;Vt.current=j;const ut=j.createBuffer(1,j.sampleRate*3,j.sampleRate),vt=ut.getChannelData(0);let It=0;for(let Ce=0;Ce<vt.length;Ce++)It=(It+(Math.random()*2-1)*.025)/1.02,vt[Ce]=It*3;const zt=j.createBufferSource();zt.buffer=ut,zt.loop=!0;const ce=j.createBiquadFilter();ce.type="lowpass",ce.frequency.value=700;const de=j.createGain();de.gain.value=0,Xt.current=de,zt.connect(ce).connect(de).connect(j.destination),zt.start(),ot(!0)}await Vt.current.resume(),st(j=>!j)}function kt(){var j;if(r(!1),O(null),Wt>0&&!gt){const vt=[{date:new Date().toISOString(),seconds:Math.floor(Wt),distance:jt,route:Ot.title,playerCount:y,exerciseMode:T,secondDistance:y===2?fe:void 0,winner:(j=H.result)==null?void 0:j.winner},...ae].slice(0,100);me(vt),dt(!0);try{localStorage.setItem("forest-pedal-rides",JSON.stringify(vt))}catch{z("瀏覽器無法儲存紀錄，本次成績仍可在畫面查看。")}Ft("finish")}else gt&&Ft("finish")}function X(){r(!1),O(null),B(ip()),N(j=>j+1),g(0),dt(!1),Ft(null)}function Y(){if(R!==null){O(null);return}if(i){r(!1);return}if(!Ut){z("請先讓兩位玩家分別進入鏡頭左右區域。");return}gt&&(B(ip()),N(j=>j+1),dt(!1)),y===2&&(gt||Wt===0)?O(3):r(!0)}async function mt(){var j;if(Z){ct(!1);return}try{document.fullscreenElement?await document.exitFullscreen():(j=se.current)!=null&&j.requestFullscreen?await se.current.requestFullscreen():ct(!0)}catch{ct(!0)}}function Tt(j,ut){St||(Wt>0&&!gt&&kt(),X(),j(),z(ut))}function I(j){if(l!==j){if(y===2){if(St){z("請先暫停競賽，再切換動作來源。");return}Tt(()=>f(j),"已切換動作來源，競賽將重新開始。")}else f(j);g(0)}}const At={exerciseMode:T,onExerciseModeChange:j=>{j!==T&&Tt(()=>C(j),j==="standing"?"已切換站姿高抬膝；膝蓋抬到髖部高度才計分。":"已切換坐姿踩踏，請坐穩椅子。")},playerCount:y,onPlayerCountChange:j=>{j!==y&&Tt(()=>S(j),j===2?"雙人競賽：畫面左側是玩家 1，右側是玩家 2。":"已切換單人漫遊。")},raceMeters:U,onRaceMetersChange:j=>{j!==U&&Tt(()=>L(j),`賽程已設定為 ${j} 公尺。`)},locked:St};return M.jsxs("div",{className:`app-shell${Lt?" large-text":""}`,children:[M.jsxs("header",{className:"site-header",children:[M.jsxs("a",{href:"#",className:"brand","aria-label":"森森騎旅首頁",children:[M.jsxs("span",{className:"brand-mark",children:[M.jsx(Eh,{size:27,strokeWidth:1.8}),M.jsx("span",{className:"brand-wheel left"}),M.jsx("span",{className:"brand-wheel right"})]}),M.jsxs("span",{children:[M.jsxs("strong",{children:["森森騎旅",M.jsx("span",{className:"brand-dot",children:"."})]}),M.jsx("small",{children:"Little pedals. Big adventures."})]})]}),M.jsxs("nav",{"aria-label":"主要導覽",children:[M.jsxs("button",{className:"nav-item active",onClick:()=>{var j;Ft(null),(j=document.getElementById("ride"))==null||j.scrollIntoView({behavior:"smooth"})},children:[M.jsx(A_,{size:17}),"騎行天地"]}),M.jsxs("button",{className:"nav-item",onClick:()=>Ft("records"),children:[M.jsx(Sh,{size:17}),"我的紀錄"]}),M.jsxs("button",{className:"nav-item",onClick:()=>Ft("guide"),children:[M.jsx(AM,{size:17}),"使用說明"]})]}),M.jsxs("div",{className:"header-right",children:[M.jsxs("span",{className:"local-badge",children:[M.jsx("span",{}),"自在動一動，好心情一整天"]}),M.jsx("button",{className:"icon-button settings-button","aria-label":"騎行設定",onClick:()=>Ft("settings"),children:M.jsx(Mh,{size:19})})]})]}),M.jsxs("main",{id:"ride",className:"main-content",children:[M.jsxs("section",{className:"page-heading",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"eyebrow",children:[M.jsx("span",{}),"YOUR EVERYDAY LITTLE ADVENTURE"]}),M.jsxs("h1",{children:[T==="standing"?"站著動，也能去遠方":"坐著動，也能去遠方",M.jsx("span",{children:"。"})]}),M.jsx("p",{children:"跟著自己的節奏踩踏，讓每一小步，都有好風景。"})]}),M.jsxs("div",{className:"heading-note",children:[M.jsx("span",{className:"note-icon",children:M.jsx(iu,{size:21})}),M.jsxs("div",{children:[M.jsx("strong",{children:"不必趕路，享受這一刻"}),M.jsx("span",{children:"今天的旅程，從舒服開始。"})]})]})]}),M.jsxs("div",{className:"dashboard-grid",children:[M.jsxs("div",{className:"main-column",children:[M.jsx(Px,{...At}),M.jsxs("section",{className:`ride-card route-${o}${y===2?" is-duel":""}${Z?" expanded-view":""}`,ref:se,"aria-label":"3D 騎行遊戲","data-fullscreen":Et||Z,children:[M.jsx(e3,{speed:Ne,running:i,route:o,playerCount:y,opponentSpeed:A,playerDistances:H.distances}),M.jsx("div",{className:"scene-fullscreen-setup",children:M.jsx(Px,{...At,compact:!0})}),M.jsxs("div",{className:"scene-top",children:[M.jsxs("div",{className:"scene-location",children:[M.jsxs("span",{className:"scene-kicker",children:[M.jsx(wM,{size:12}),"你的此刻，正在自然裡"]}),M.jsx("h2",{children:Ot.title}),M.jsxs("span",{className:"scene-route-label",children:[M.jsx(Ot.icon,{size:13}),Ot.label,M.jsx("span",{className:"scene-dot",children:"·"}),y===2?"雙人競賽":"自由騎行"]})]}),M.jsxs("div",{className:"scene-tools",children:[M.jsxs("span",{className:"weather-pill",children:[M.jsx(zM,{size:17}),o==="sunset"?"暖陽相伴":o==="coast"?"海風正好":"陽光正好"]}),M.jsx("button",{onClick:()=>void mt(),className:"scene-icon","aria-label":"切換全螢幕","aria-pressed":Et||Z,children:M.jsx(CM,{size:17})})]})]}),M.jsxs("aside",{className:`scene-camera${q?" is-collapsed":""}`,"aria-label":"畫面內人體偵測",children:[M.jsxs("div",{className:"scene-camera-heading",children:[M.jsxs("span",{children:[M.jsx(eu,{size:14}),"人體偵測",M.jsx("span",{className:`camera-status-dot ${v==="tracking"?"detected":""}`})]}),M.jsxs("div",{children:[M.jsx("button",{className:"camera-source-button",onClick:()=>I(l==="demo"?"camera":"demo"),disabled:y===2&&St,"aria-label":l==="demo"?"開啟即時攝影機":"切回示範模式",children:l==="demo"?"示範":"即時"}),M.jsx("button",{onClick:()=>_t(j=>!j),"aria-label":q?"展開人體偵測視窗":"收合人體偵測視窗",children:q?M.jsx(TM,{size:15}):M.jsx(bM,{size:15})})]})]}),M.jsx("div",{className:"camera-viewport",children:M.jsx(f3,{mode:l,running:i,demoCadence:d,demoCadence2:m,playerCount:y,exerciseMode:T,resetKey:G,onCadence:Jt,onTracking:Ht,onPlayers:$t})}),M.jsx("div",{className:"scene-camera-summary",role:"status",children:l==="demo"?"示範姿態，尚未使用攝影機":v==="loading"?"正在載入辨識模型…":v==="error"?"攝影機尚未連線":y===2?`玩家 1 ${w[0].tracking?"已辨識":"未入鏡"} · 玩家 2 ${w[1].tracking?"已辨識":"未入鏡"}`:w[0].tracking?"已偵測到你，標點會跟著動作移動":T==="standing"?"請讓肩膀、髖部與膝蓋入鏡":"請讓肩膀、膝蓋和雙腳完整入鏡"})]}),y===2&&M.jsx(p3,{speeds:[Ne,A],distances:H.distances,targetMeters:U,running:i,countdown:R,result:H.result}),M.jsxs("div",{className:"scene-status",children:[M.jsx("span",{className:i?"status-dot live":"status-dot"}),l==="demo"?"示範模式":v==="tracking"?"動作已連線":v==="loading"?"攝影機準備中":"攝影機模式",M.jsx("span",{className:"status-separator"}),i?Ee>0?"微風與你同行":"等你開始踩踏":"準備好就出發",M.jsx("span",{className:"status-separator"}),T==="standing"?"站姿高抬膝":"坐姿踩踏"]}),M.jsxs("div",{className:"scene-bottom",children:[M.jsxs("div",{className:"ride-metrics",children:[M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx(Sh,{size:14}),"騎行距離"]}),M.jsxs("strong",{children:[jt.toFixed(2),M.jsx("small",{children:"km"})]})]}),M.jsx("span",{className:"metric-divider"}),M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx(RM,{size:14}),"騎行時間"]}),M.jsx("strong",{children:ap(Wt)})]})]}),M.jsxs("button",{className:`start-button ${i?"is-running":""}`,onClick:Y,disabled:!i&&R===null&&!Ut,children:[i?M.jsx(NM,{size:19,fill:"currentColor"}):M.jsx(UM,{size:19,fill:"currentColor"}),R!==null?`取消倒數 ${R}`:i?"暫停一下":gt?"再騎一趟":Wt>0?"繼續騎行":y===2?"開始競賽":"開始騎行",!i&&M.jsx(tu,{size:18})]}),M.jsxs("button",{className:"end-ride",disabled:Wt===0,onClick:kt,children:[M.jsx(El,{size:15}),"結束旅程"]})]}),y===2&&l==="camera"&&!Ut&&!i&&M.jsx("p",{className:"race-positioning-note",children:"請先讓兩位玩家完整入鏡，再開始競賽。"})]}),M.jsxs("section",{className:"routes-section",children:[M.jsxs("div",{className:"section-title",children:[M.jsxs("div",{children:[M.jsx("span",{className:"small-icon",children:M.jsx(A_,{size:18})}),M.jsx("h2",{children:"下一站，想去哪裡？"})]}),M.jsx("span",{children:"3 條風景・隨心切換"})]}),M.jsx("div",{className:"route-grid",children:Ix.map((j,ut)=>M.jsxs("button",{className:`route-card ${o===j.id?"selected":""}`,onClick:()=>{e(j.id),o!==j.id&&z(`已切換至${j.title}，旅程繼續累計。`)},"aria-pressed":o===j.id,children:[M.jsxs("div",{className:"route-image",style:{backgroundImage:`url(${j.image})`},children:[M.jsxs("span",{className:"route-number",children:["0",ut+1]}),M.jsx("span",{className:"route-selection",children:o===j.id?M.jsxs(M.Fragment,{children:[M.jsx(nu,{size:11}),"正在探索"]}):M.jsxs(M.Fragment,{children:[M.jsx(j.icon,{size:11}),j.label.split("・")[1]]})})]}),M.jsxs("div",{className:"route-copy",children:[M.jsxs("h3",{children:[j.title,M.jsx("span",{children:o===j.id?M.jsx("span",{className:"selected-dot"}):M.jsx(EM,{size:15})})]}),M.jsx("p",{children:j.subtitle})]})]},j.id))})]}),M.jsxs("div",{className:"gentle-reminder",children:[M.jsx("span",{className:"reminder-icon",children:M.jsx(au,{size:21})}),M.jsxs("div",{children:[M.jsx("strong",{children:"動得舒服，比動得快更重要。"}),M.jsx("p",{children:T==="standing"?"請在穩固、無障礙的空間站立，量力交替高抬膝；需要支撐時可扶穩固椅背。":"請坐穩有靠背的椅子，依自己的體力輕鬆踩踏；若感到不適，隨時停下休息。"})]}),M.jsx(iu,{className:"reminder-leaf",size:35,strokeWidth:1.1})]})]}),M.jsxs("aside",{className:"side-column",children:[M.jsxs("section",{className:"pace-card","data-player":"1",children:[M.jsxs("div",{className:"card-heading",children:[M.jsxs("h2",{children:[M.jsx(SM,{size:17}),y===2?"玩家 1 運動節奏":T==="standing"?"你的高抬膝節奏":"你的踩踏節奏"]}),M.jsxs("span",{className:"live-label",children:[M.jsx("span",{}),l==="demo"?"DEMO":"LIVE"]})]}),M.jsxs("div",{className:"speed-reading",children:[M.jsx("strong",{"data-metric":"speed",children:Ne.toFixed(1)}),M.jsx("span",{children:"km/h"}),M.jsxs("span",{className:"speed-illustration",children:[M.jsx(kM,{size:27}),M.jsx(Du,{size:43,strokeWidth:1.2})]})]}),M.jsx("div",{className:"pace-divider"}),M.jsxs("div",{className:"cadence-reading",children:[M.jsxs("span",{children:[M.jsx(Gx,{size:16}),T==="standing"?"有效抬膝頻率":"踩踏頻率"]}),M.jsxs("strong",{"data-metric":"cadence",children:[Math.round(Ee*(T==="standing"?2:1)),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),M.jsx("div",{className:"pace-bars","aria-hidden":"true",children:Array.from({length:28},(j,ut)=>M.jsx("i",{className:ut<Math.round(Ee/90*28)?"filled":""},ut))}),M.jsxs("p",{className:"pace-caption",children:[i?Ee===0?"輕輕抬腿，開始你的踩踏":Ee>70?"很有活力！記得保持呼吸順暢":"很棒，保持舒服的節奏就好":"按下開始，跟著你的節奏出發",M.jsx(iu,{size:13})]}),T==="standing"&&l==="camera"&&M.jsxs("p",{className:"high-knee-feedback","data-player-feedback":"1",children:[w[0].feedback," · 有效抬膝 ",w[0].highKnees," 次"]}),y===2&&M.jsxs("div",{className:"second-player-pace","data-player":"2",children:[M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx("i",{}),"玩家 2"]}),M.jsxs("strong",{"data-metric":"speed",children:[A.toFixed(1),M.jsx("small",{children:"km/h"})]})]}),M.jsxs("div",{children:[M.jsx("span",{children:T==="standing"?"抬膝頻率":"踩踏頻率"}),M.jsxs("strong",{"data-metric":"cadence",children:[Math.round(P*(T==="standing"?2:1)),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),T==="standing"&&l==="camera"&&M.jsxs("p",{"data-player-feedback":"2",children:[w[1].feedback," · ",w[1].highKnees," 次"]})]})]}),M.jsxs("section",{className:"camera-card",children:[M.jsxs("div",{className:"card-heading",children:[M.jsxs("h2",{children:[M.jsx(eu,{size:17}),"偵測與試玩設定"]}),M.jsxs("span",{className:`tracking-label ${v==="tracking"?"tracked":""}`,children:[M.jsx("span",{}),l==="demo"?"示範中":{loading:"啟動中",tracking:"已辨識",positioning:"請調整位置",error:"尚未連線",demo:"準備中"}[v]]})]}),M.jsxs("div",{className:"mode-tabs",role:"group","aria-label":"選擇動作模式",children:[M.jsxs("button",{className:l==="demo"?"active":"",onClick:()=>I("demo"),disabled:y===2&&St,children:[M.jsx(OM,{size:13}),"先試玩看看"]}),M.jsxs("button",{className:l==="camera"?"active":"",onClick:()=>I("camera"),disabled:y===2&&St,children:[M.jsx(eu,{size:13}),"使用攝影機"]})]}),M.jsxs("div",{className:"tracking-summary-card",children:[M.jsx("span",{className:"tracking-summary-icon",children:y===2?M.jsx(FM,{size:24}):M.jsx(eu,{size:24})}),M.jsxs("div",{children:[M.jsxs("strong",{children:[T==="standing"?"站姿高抬膝":"坐姿踩踏",y===2?" · 雙人競賽":" · 單人漫遊"]}),M.jsx("p",{children:"人體標點已放在遊戲畫面右上角，放大後也能看見。"})]})]}),l==="camera"&&M.jsx("div",{className:"player-tracking-list",children:w.slice(0,y).map((j,ut)=>M.jsxs("div",{"data-player":ut+1,children:[M.jsx("span",{className:j.tracking?"tracked":"not-tracked"}),M.jsxs("strong",{children:["玩家 ",ut+1]}),M.jsx("span",{children:j.tracking?`已辨識 ${j.quality}%`:"請完整入鏡"})]},ut))}),l==="demo"?M.jsxs("div",{className:"demo-control",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"demo-speed",children:y===2?"玩家 1 示範速度":T==="standing"?"試試不同的高抬膝速度":"試試不同的踩踏速度"}),M.jsxs("span",{children:[d*(T==="standing"?2:1),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),M.jsx("input",{id:"demo-speed",type:"range",min:"0",max:"90",step:"1",value:d,onChange:j=>h(Number(j.target.value)),"aria-label":"示範踩踏速度"}),M.jsxs("div",{className:"range-labels",children:[M.jsx("span",{children:T==="standing"?"慢慢抬":"慢慢踩"}),M.jsx("span",{children:T==="standing"?"活力抬":"活力踩"})]}),y===2&&M.jsxs("div",{className:"player-two-demo",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"demo-speed-2",children:"玩家 2 示範速度"}),M.jsxs("span",{children:[m*(T==="standing"?2:1),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),M.jsx("input",{id:"demo-speed-2",type:"range",min:"0",max:"90",step:"1",value:m,onChange:j=>p(Number(j.target.value)),"aria-label":"玩家 2 示範速度"}),M.jsxs("div",{className:"range-labels",children:[M.jsx("span",{children:"慢慢動"}),M.jsx("span",{children:"活力動"})]})]})]}):M.jsxs("div",{className:"camera-instruction",children:[M.jsx("span",{className:"privacy-icon",children:M.jsx(au,{size:17})}),M.jsxs("p",{children:[y===2&&"兩人共用一個鏡頭，分別在畫面左右區域。",T==="standing"?"鏡頭需拍到肩膀、髖部與膝蓋；抬膝時腳踝短暫遮住仍可辨識。":"鏡頭需拍到肩膀、髖部、膝蓋和腳踝。",M.jsx("br",{}),M.jsx("small",{children:"影像僅在裝置分析，不錄影、不上傳。"})]})]})]}),M.jsxs("section",{className:"goal-card",children:[M.jsxs("div",{className:"goal-copy",children:[M.jsxs("span",{className:"goal-eyebrow",children:[M.jsx(El,{size:13}),"今天的小目標"]}),M.jsxs("h3",{children:["給自己一點",M.jsx("br",{}),"動起來的時間。"]}),M.jsxs("label",{className:"goal-select",children:[M.jsx("select",{value:Q,onChange:j=>Ct(Number(j.target.value)),"aria-label":"騎行時間目標",children:[5,10,15,20,30].map(j=>M.jsxs("option",{value:j,children:[j," 分鐘輕鬆騎"]},j))}),M.jsx(MM,{size:12})]})]}),M.jsxs("div",{className:"goal-ring",children:[M.jsxs("svg",{viewBox:"0 0 100 100",children:[M.jsx("circle",{className:"ring-track",cx:"50",cy:"50",r:"42"}),M.jsx("circle",{className:"ring-progress",cx:"50",cy:"50",r:"42",strokeDasharray:`${Mt*264} 264`})]}),M.jsx("div",{children:Mt>=1?M.jsx(nu,{size:26}):M.jsxs(M.Fragment,{children:[M.jsxs("strong",{children:[Math.floor(Wt/60),M.jsxs("small",{children:[" / ",Q]})]}),M.jsx("span",{children:"分鐘"})]})})]}),Mt>=1&&M.jsx("span",{className:"goal-complete",children:"今天的小目標達成了！"})]})]})]}),M.jsxs("footer",{className:"site-footer",children:[M.jsxs("span",{children:[M.jsx(Eh,{size:13}),"每一次踩踏，都是照顧自己的開始。"]}),M.jsxs("div",{children:[M.jsx("span",{children:"為每一個年紀，留一段好風景"}),M.jsx("span",{className:"footer-dot",children:"·"}),M.jsxs("button",{onClick:()=>Ft("settings"),children:["騎行設定",M.jsx(Mh,{size:12})]}),M.jsxs("button",{onClick:()=>Ft("guide"),children:["需要幫忙嗎？",M.jsx(tu,{size:12})]})]})]})]}),M.jsxs("button",{className:`sound-button ${F?"":"sound-on"}`,onClick:()=>void Pt(),"aria-label":F?"開啟自然環境音":"關閉自然環境音",title:F?"開啟自然環境音":"關閉自然環境音",children:[F?M.jsx(GM,{size:18}):M.jsx(HM,{size:18}),M.jsxs("span",{children:["自然環境音",F?"已關閉":"已開啟"]})]}),Dt&&M.jsxs("div",{className:"toast",role:"status",children:[M.jsx(nu,{size:17}),Dt]}),wt&&vM.createPortal(M.jsx("div",{className:`modal-backdrop${Lt?" large-text":""}`,onClick:j=>{j.target===j.currentTarget&&Ft(null)},children:M.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[M.jsx("button",{className:"modal-close icon-button",autoFocus:!0,onClick:()=>Ft(null),"aria-label":"關閉視窗",children:M.jsx(jM,{size:20})}),wt==="guide"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(iu,{size:22})}),M.jsx("p",{className:"eyebrow",children:"A LITTLE GUIDE FOR YOUR RIDE"}),M.jsx("h2",{id:"modal-title",children:"準備好，輕鬆出發。"}),M.jsx("p",{className:"modal-intro",children:"不用穿上車鞋，也能騎進好風景。"}),M.jsxs("ol",{className:"guide-steps",children:[M.jsxs("li",{children:[M.jsx("span",{children:"01"}),M.jsxs("div",{children:[M.jsx("h3",{children:"選擇運動方式與玩法"}),M.jsx("p",{children:"坐姿模式請坐穩有靠背的椅子；站姿模式請留足活動空間，交替把膝蓋抬到髖部高度。可選單人漫遊或同畫面的雙人競賽。"})]})]}),M.jsxs("li",{children:[M.jsx("span",{children:"02"}),M.jsxs("div",{children:[M.jsx("h3",{children:"打開攝影機，讓雙腿入鏡"}),M.jsx("p",{children:"將鏡頭放在前方，拍到肩膀、髖部與膝蓋；坐姿模式還需拍到腳踝。允許攝影機後，綠色標點會跟著身體移動。需要 HTTPS 或本機環境。雙人共用一個鏡頭，畫面左側是綠色玩家 1，右側是藍色玩家 2。右上角小視窗放大後也會持續顯示。"})]})]}),M.jsxs("li",{children:[M.jsx("span",{children:"03"}),M.jsxs("div",{children:[M.jsx("h3",{children:"按下開始，左右交替動起來"}),M.jsx("p",{children:"坐姿像踩空中腳踏車一樣交替抬腿；站姿需完成「抬高、放下」並左右交替才計分。雙人競賽有 3 秒倒數，各自控制一台車，先到終點者獲勝。示範模式可分別調整兩人的速度。"})]})]})]}),M.jsxs("div",{className:"guide-note",children:[M.jsx(au,{size:19}),M.jsx("p",{children:"以自己的舒適程度為準，不需追求速度。如有疼痛、頭暈或喘不過氣，請停止並尋求協助。本遊戲不作醫療評估。"})]}),M.jsxs("button",{className:"primary-button",onClick:()=>Ft(null),children:["知道了，準備出發",M.jsx(tu,{size:17})]})]}),wt==="records"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(Sh,{size:23})}),M.jsx("p",{className:"eyebrow",children:"EVERY LITTLE RIDE COUNTS"}),M.jsx("h2",{id:"modal-title",children:"我的騎行足跡"}),M.jsx("p",{className:"modal-intro",children:"每一段旅程，都值得記下來。紀錄儲存於此瀏覽器。"}),ae.length?M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"records-totals",children:[M.jsxs("div",{children:[M.jsx("strong",{children:ae.length}),M.jsx("span",{children:"趟旅程"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:ae.reduce((j,ut)=>j+ut.distance,0).toFixed(2)}),M.jsx("span",{children:"總公里"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:Math.floor(ae.reduce((j,ut)=>j+ut.seconds,0)/60)}),M.jsx("span",{children:"總分鐘"})]})]}),M.jsx("div",{className:"records-list",children:ae.map((j,ut)=>M.jsxs("div",{className:"record-row",children:[M.jsx("span",{className:"record-icon",children:M.jsx(Du,{size:21})}),M.jsxs("div",{children:[M.jsxs("strong",{children:[j.route,j.playerCount===2?" · 雙人競賽":""]}),M.jsx("span",{children:new Date(j.date).toLocaleString("zh-TW",{month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),M.jsxs("div",{children:[M.jsx("strong",{children:j.playerCount===2?`P1 ${Math.round(j.distance*1e3)}m / P2 ${Math.round((j.secondDistance??0)*1e3)}m`:`${j.distance.toFixed(2)} km`}),M.jsx("span",{children:ap(j.seconds)}),j.exerciseMode&&M.jsxs("span",{children:[j.exerciseMode==="standing"?"站姿高抬膝":"坐姿踩踏",j.winner?j.winner==="tie"?" · 平手":` · 玩家 ${j.winner} 獲勝`:""]})]})]},`${j.date}-${ut}`))}),M.jsx("p",{className:"record-footnote",children:"示範與攝影機模式的旅程皆會保存在此。距離為遊戲中的虛擬里程。"})]}):M.jsxs("div",{className:"empty-records",children:[M.jsx(Du,{size:48,strokeWidth:1.2}),M.jsx("h3",{children:"第一段好風景，正等著你。"}),M.jsx("p",{children:"完成騎行後按「結束旅程」，足跡就會留在這裡。"}),M.jsxs("button",{className:"primary-button",onClick:()=>Ft(null),children:["去騎一會兒",M.jsx(tu,{size:17})]})]})]}),wt==="finish"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge finish-badge",children:y===2?M.jsx(Vx,{size:25}):M.jsx(El,{size:25})}),M.jsx("p",{className:"eyebrow",children:"YOU DID SOMETHING GOOD TODAY"}),M.jsx("h2",{id:"modal-title",children:y===2?H.result?rt:"雙人騎行已結束":"把這份好心情，帶回生活。"}),M.jsx("p",{className:"modal-intro",children:y===2?"謝謝兩位一起動起來，每一段前進都值得掌聲。":"今天的你很棒，謝謝自己願意動一動。"}),M.jsxs("div",{className:"finish-scene",children:[M.jsx(Eh,{size:65,strokeWidth:1.2}),M.jsx("span",{children:"旅程已儲存"})]}),M.jsxs("div",{className:"records-totals",children:[M.jsxs("div",{children:[M.jsx("strong",{children:y===2?Math.round(jt*1e3):jt.toFixed(2)}),M.jsx("span",{children:y===2?"玩家 1 公尺":"公里"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:ap(Wt)}),M.jsx("span",{children:"騎行時間"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:y===2?Math.round(fe*1e3):`${Math.round(Mt*100)}%`}),M.jsx("span",{children:y===2?"玩家 2 公尺":"目標完成"})]})]}),M.jsxs("p",{className:"finish-note",children:["喝口水，讓身體休息一下。",M.jsx("br",{}),l==="demo"?"本次為示範騎行，里程為虛擬模擬。":"騎行距離為依踩踏節奏推估的遊戲里程。"]}),M.jsxs("button",{className:"primary-button",onClick:X,children:[M.jsx(LM,{size:17}),"開始一段新旅程"]})]}),wt==="settings"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(Mh,{size:23})}),M.jsx("p",{className:"eyebrow",children:"MAKE YOURSELF COMFORTABLE"}),M.jsx("h2",{id:"modal-title",children:"照你的步調就好。"}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"自然環境音"}),M.jsx("p",{children:"騎行時，讓輕柔風聲陪伴你。"})]}),M.jsx("button",{className:`toggle ${F?"":"on"}`,role:"switch","aria-checked":!F,"aria-label":"自然環境音",onClick:()=>void Pt(),children:M.jsx("span",{})})]}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"友善大字模式"}),M.jsx("p",{children:"放大主要操作與提示文字，看得更輕鬆。"})]}),M.jsx("button",{className:`toggle ${Lt?"on":""}`,role:"switch","aria-checked":Lt,"aria-label":"友善大字模式",onClick:()=>pt(j=>!j),children:M.jsx("span",{})})]}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"騎行目標"}),M.jsx("p",{children:"目標達成後仍可繼續自由騎行。"})]}),M.jsx("select",{value:Q,onChange:j=>Ct(Number(j.target.value)),"aria-label":"設定騎行目標",children:[5,10,15,20,30].map(j=>M.jsxs("option",{value:j,children:[j," 分鐘"]},j))})]}),M.jsxs("div",{className:"guide-note",children:[M.jsx(au,{size:19}),M.jsx("p",{children:"攝影機影像在你的裝置即時分析，不會傳送至伺服器。切換回示範模式便會關閉攝影機。"})]}),M.jsxs("button",{className:"primary-button",onClick:()=>Ft(null),children:["設定完成",M.jsx(nu,{size:17})]})]})]})}),document.fullscreenElement||document.body)]})}gM.createRoot(document.getElementById("root")).render(M.jsx(cM.StrictMode,{children:M.jsx(v3,{})}));
