var lM=Object.defineProperty;var cM=(o,e,i)=>e in o?lM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var an=(o,e,i)=>cM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Vx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gh={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function uM(){if(__)return hl;__=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:f}}return hl.Fragment=e,hl.jsx=i,hl.jsxs=i,hl}var x_;function fM(){return x_||(x_=1,gh.exports=uM()),gh.exports}var M=fM(),vh={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function dM(){if(y_)return me;y_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,S={};function L(V,ct,Z){this.props=V,this.context=ct,this.refs=S,this.updater=Z||D}L.prototype.isReactComponent={},L.prototype.setState=function(V,ct){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,ct,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function I(){}I.prototype=L.prototype;function R(V,ct,Z){this.props=V,this.context=ct,this.refs=S,this.updater=Z||D}var P=R.prototype=new I;P.constructor=R,x(P,L.prototype),P.isPureReactComponent=!0;var O=Array.isArray;function B(){}var G={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(V,ct,Z){var rt=Z.ref;return{$$typeof:o,type:V,key:ct,ref:rt!==void 0?rt:null,props:Z}}function k(V,ct){return C(V.type,ct,V.props)}function W(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function et(V){var ct={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Z){return ct[Z]})}var St=/\/+/g;function ft(V,ct){return typeof V=="object"&&V!==null&&V.key!=null?et(""+V.key):ct.toString(36)}function K(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(B,B):(V.status="pending",V.then(function(ct){V.status==="pending"&&(V.status="fulfilled",V.value=ct)},function(ct){V.status==="pending"&&(V.status="rejected",V.reason=ct)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function dt(V,ct,Z,rt,wt){var Pt=typeof V;(Pt==="undefined"||Pt==="boolean")&&(V=null);var Lt=!1;if(V===null)Lt=!0;else switch(Pt){case"bigint":case"string":case"number":Lt=!0;break;case"object":switch(V.$$typeof){case o:case e:Lt=!0;break;case y:return Lt=V._init,dt(Lt(V._payload),ct,Z,rt,wt)}}if(Lt)return wt=wt(V),Lt=rt===""?"."+ft(V,0):rt,O(wt)?(Z="",Lt!=null&&(Z=Lt.replace(St,"$&/")+"/"),dt(wt,ct,Z,"",function(F){return F})):wt!=null&&(W(wt)&&(wt=k(wt,Z+(wt.key==null||V&&V.key===wt.key?"":(""+wt.key).replace(St,"$&/")+"/")+Lt)),ct.push(wt)),1;Lt=0;var Ut=rt===""?".":rt+":";if(O(V))for(var Wt=0;Wt<V.length;Wt++)rt=V[Wt],Pt=Ut+ft(rt,Wt),Lt+=dt(rt,ct,Z,Pt,wt);else if(Wt=T(V),typeof Wt=="function")for(V=Wt.call(V),Wt=0;!(rt=V.next()).done;)rt=rt.value,Pt=Ut+ft(rt,Wt++),Lt+=dt(rt,ct,Z,Pt,wt);else if(Pt==="object"){if(typeof V.then=="function")return dt(K(V),ct,Z,rt,wt);throw ct=String(V),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return Lt}function Q(V,ct,Z){if(V==null)return V;var rt=[],wt=0;return dt(V,rt,"","",function(Pt){return ct.call(Z,Pt,wt++)}),rt}function At(V){if(V._status===-1){var ct=V._result,Z=ct();Z.then(function(rt){(V._status===0||V._status===-1)&&(V._status=1,V._result=rt,Z.status===void 0&&(Z.status="fulfilled",Z.value=rt))},function(rt){(V._status===0||V._status===-1)&&(V._status=2,V._result=rt,Z.status===void 0&&(Z.status="rejected",Z.reason=rt))}),V._status===-1&&(V._status=0,V._result=Z)}if(V._status===1)return V._result.default;throw V._result}var Ct=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Ht(V){var ct=G.T,Z={};Z.types=ct!==null?ct.types:null,G.T=Z;try{var rt=V(),wt=G.S;wt!==null&&wt(Z,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(B,Ct)}catch(Pt){Ct(Pt)}finally{ct!==null&&Z.types!==null&&(ct.types=Z.types),G.T=ct}}function oe(V){var ct=G.T;if(ct!==null){var Z=ct.types;Z===null?ct.types=[V]:Z.indexOf(V)===-1&&Z.push(V)}else Ht(oe.bind(null,V))}var ge={map:Q,forEach:function(V,ct,Z){Q(V,function(){ct.apply(this,arguments)},Z)},count:function(V){var ct=0;return Q(V,function(){ct++}),ct},toArray:function(V){return Q(V,function(ct){return ct})||[]},only:function(V){if(!W(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return me.Activity=m,me.Children=ge,me.Component=L,me.Fragment=i,me.Profiler=l,me.PureComponent=R,me.StrictMode=r,me.Suspense=g,me.ViewTransition=v,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,me.__COMPILER_RUNTIME={__proto__:null,c:function(V){return G.H.useMemoCache(V)}},me.addTransitionType=oe,me.cache=function(V){return function(){return V.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(V,ct,Z){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var rt=x({},V.props),wt=V.key;if(ct!=null)for(Pt in ct.key!==void 0&&(wt=""+ct.key),ct)!w.call(ct,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&ct.ref===void 0||(rt[Pt]=ct[Pt]);var Pt=arguments.length-2;if(Pt===1)rt.children=Z;else if(1<Pt){for(var Lt=Array(Pt),Ut=0;Ut<Pt;Ut++)Lt[Ut]=arguments[Ut+2];rt.children=Lt}return C(V.type,wt,rt)},me.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:f,_context:V},V},me.createElement=function(V,ct,Z){var rt,wt={},Pt=null;if(ct!=null)for(rt in ct.key!==void 0&&(Pt=""+ct.key),ct)w.call(ct,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&(wt[rt]=ct[rt]);var Lt=arguments.length-2;if(Lt===1)wt.children=Z;else if(1<Lt){for(var Ut=Array(Lt),Wt=0;Wt<Lt;Wt++)Ut[Wt]=arguments[Wt+2];wt.children=Ut}if(V&&V.defaultProps)for(rt in Lt=V.defaultProps,Lt)wt[rt]===void 0&&(wt[rt]=Lt[rt]);return C(V,Pt,wt)},me.createRef=function(){return{current:null}},me.forwardRef=function(V){return{$$typeof:h,render:V}},me.isValidElement=W,me.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:At}},me.memo=function(V,ct){return{$$typeof:p,type:V,compare:ct===void 0?null:ct}},me.startTransition=Ht,me.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},me.use=function(V){return G.H.use(V)},me.useActionState=function(V,ct,Z){return G.H.useActionState(V,ct,Z)},me.useCallback=function(V,ct){return G.H.useCallback(V,ct)},me.useContext=function(V){return G.H.useContext(V)},me.useDebugValue=function(){},me.useDeferredValue=function(V,ct){return G.H.useDeferredValue(V,ct)},me.useEffect=function(V,ct){return G.H.useEffect(V,ct)},me.useEffectEvent=function(V){return G.H.useEffectEvent(V)},me.useId=function(){return G.H.useId()},me.useImperativeHandle=function(V,ct,Z){return G.H.useImperativeHandle(V,ct,Z)},me.useInsertionEffect=function(V,ct){return G.H.useInsertionEffect(V,ct)},me.useLayoutEffect=function(V,ct){return G.H.useLayoutEffect(V,ct)},me.useMemo=function(V,ct){return G.H.useMemo(V,ct)},me.useOptimistic=function(V,ct){return G.H.useOptimistic(V,ct)},me.useReducer=function(V,ct,Z){return G.H.useReducer(V,ct,Z)},me.useRef=function(V){return G.H.useRef(V)},me.useState=function(V){return G.H.useState(V)},me.useSyncExternalStore=function(V,ct,Z){return G.H.useSyncExternalStore(V,ct,Z)},me.useTransition=function(){return G.H.useTransition()},me.version="19.3.1",me}var S_;function Qp(){return S_||(S_=1,vh.exports=dM()),vh.exports}var Xt=Qp();const hM=Vx(Xt);var _h={exports:{}},pl={},xh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function pM(){return M_||(M_=1,(function(o){function e(K,dt){var Q=K.length;K.push(dt);t:for(;0<Q;){var At=Q-1>>>1,Ct=K[At];if(0<l(Ct,dt))K[At]=dt,K[Q]=Ct,Q=At;else break t}}function i(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var dt=K[0],Q=K.pop();if(Q!==dt){K[0]=Q;t:for(var At=0,Ct=K.length,Ht=Ct>>>1;At<Ht;){var oe=2*(At+1)-1,ge=K[oe],V=oe+1,ct=K[V];if(0>l(ge,Q))V<Ct&&0>l(ct,ge)?(K[At]=ct,K[V]=Q,At=V):(K[At]=ge,K[oe]=Q,At=oe);else if(V<Ct&&0>l(ct,Q))K[At]=ct,K[V]=Q,At=V;else break t}}return dt}function l(K,dt){var Q=K.sortIndex-dt.sortIndex;return Q!==0?Q:K.id-dt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],p=[],y=1,m=null,v=3,E=!1,T=!1,D=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function R(K){for(var dt=i(p);dt!==null;){if(dt.callback===null)r(p);else if(dt.startTime<=K)r(p),dt.sortIndex=dt.expirationTime,e(g,dt);else break;dt=i(p)}}function P(K){if(D=!1,R(K),!T)if(i(g)!==null)T=!0,O||(O=!0,W());else{var dt=i(p);dt!==null&&ft(P,dt.startTime-K)}}var O=!1,B=-1,G=5,w=-1;function C(){return x?!0:!(o.unstable_now()-w<G)}function k(){if(x=!1,O){var K=o.unstable_now();w=K;var dt=!0;try{t:{T=!1,D&&(D=!1,L(B),B=-1),E=!0;var Q=v;try{e:{for(R(K),m=i(g);m!==null&&!(m.expirationTime>K&&C());){var At=m.callback;if(typeof At=="function"){m.callback=null,v=m.priorityLevel;var Ct=At(m.expirationTime<=K);if(K=o.unstable_now(),typeof Ct=="function"){m.callback=Ct,R(K),dt=!0;break e}m===i(g)&&r(g),R(K)}else r(g);m=i(g)}if(m!==null)dt=!0;else{var Ht=i(p);Ht!==null&&ft(P,Ht.startTime-K),dt=!1}}break t}finally{m=null,v=Q,E=!1}dt=void 0}}finally{dt?W():O=!1}}}var W;if(typeof I=="function")W=function(){I(k)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,St=et.port2;et.port1.onmessage=k,W=function(){St.postMessage(null)}}else W=function(){S(k,0)};function ft(K,dt){B=S(function(){K(o.unstable_now())},dt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(K){K.callback=null},o.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<K?Math.floor(1e3/K):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(K){switch(v){case 1:case 2:case 3:var dt=3;break;default:dt=v}var Q=v;v=dt;try{return K()}finally{v=Q}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(K,dt){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Q=v;v=K;try{return dt()}finally{v=Q}},o.unstable_scheduleCallback=function(K,dt,Q){var At=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?At+Q:At):Q=At,K){case 1:var Ct=-1;break;case 2:Ct=250;break;case 5:Ct=1073741823;break;case 4:Ct=1e4;break;default:Ct=5e3}return Ct=Q+Ct,K={id:y++,callback:dt,priorityLevel:K,startTime:Q,expirationTime:Ct,sortIndex:-1},Q>At?(K.sortIndex=Q,e(p,K),i(g)===null&&K===i(p)&&(D?(L(B),B=-1):D=!0,ft(P,Q-At))):(K.sortIndex=Ct,e(g,K),T||E||(T=!0,O||(O=!0,W()))),K},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(K){var dt=v;return function(){var Q=v;v=dt;try{return K.apply(this,arguments)}finally{v=Q}}}})(yh)),yh}var E_;function mM(){return E_||(E_=1,xh.exports=pM()),xh.exports}var Sh={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function gM(){if(T_)return Hn;T_=1;var o=Qp();function e(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(y,m,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:y,containerInfo:m,implementation:v}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.browser=function(y){return{$$typeof:f,_reason:y}},Hn.createPortal=function(y,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return h(y,m,null,v)},Hn.flushSync=function(y){var m=g.T,v=r.p;try{if(g.T=null,r.p=2,y)return y()}finally{g.T=m,r.p=v,r.d.f()}},Hn.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(y,m))},Hn.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},Hn.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var v=m.as,E=p(v,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:D}):v==="script"&&r.d.X(y,{crossOrigin:E,integrity:T,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Hn.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);r.d.M(y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(y)},Hn.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,E=p(v,m.crossOrigin);r.d.L(y,v,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Hn.preloadModule=function(y,m){if(typeof y=="string")if(m){var v=p(m.as,m.crossOrigin);r.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(y)},Hn.requestFormReset=function(y){r.d.r(y)},Hn.unstable_batchedUpdates=function(y,m){return y(m)},Hn.useFormState=function(y,m,v){return g.H.useFormState(y,m,v)},Hn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Hn.version="19.3.1",Hn}var b_;function kx(){if(b_)return Sh.exports;b_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sh.exports=gM(),Sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function vM(){if(A_)return pl;A_=1;var o=mM(),e=Qp(),i=kx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return g(c),t;if(u===s)return g(c),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=u;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,s=u;break}if(A===s){_=!0,s=c,a=u;break}A=A.sibling}if(!_){for(A=u.child;A;){if(A===a){_=!0,a=u,s=c;break}if(A===s){_=!0,s=u,a=c;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,s,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,s,c,u))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=v(t);return a===null||D(n,t,a.child,{foundSelf:!1}),n}function D(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(t,n,a.child,s))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,L=null;function I(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function R(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(S=t),!0):!1}function P(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var u=n;u;u=a(u))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var B=Object.assign,G=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),St=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),dt=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),oe=Symbol.for("react.legacy_hidden"),ge=Symbol.for("react.memo_cache_sentinel"),V=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),Z=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===wt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case et:return"Profiler";case W:return"StrictMode";case dt:return"Suspense";case Q:return"SuspenseList";case Ht:return"Activity";case V:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ft:return t.displayName||"Context";case St:return(t._context.displayName||"Context")+".Consumer";case K:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return n=t.displayName||null,n!==null?n:Pt(t.type)||"Memo";case Ct:n=t._payload,t=t._init;try{return Pt(t(n))}catch{}}return null}var Lt=Array.isArray,Ut=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},Ee=[],re=-1;function Jt(t){return{current:t}}function Ft(t){0>re||(t.current=Ee[re],Ee[re]=null,re--)}function $t(t,n){re++,Ee[re]=t.current,t.current=n}var lt=Jt(null),Dt=Jt(null),Nt=Jt(null),ie=Jt(null);function U(t,n){switch($t(Nt,n),$t(Dt,t),$t(lt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Rv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Rv(n),t=Cv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ft(lt),$t(lt,t)}function b(){Ft(lt),Ft(Dt),Ft(Nt)}function J(t){var n=t.memoizedState;n!==null&&(jr._currentValue=n.memoizedState,$t(ie,t)),n=lt.current;var a=Cv(n,t.type);n!==a&&($t(Dt,t),$t(lt,a))}function _t(t){Dt.current===t&&(Ft(lt),Ft(Dt)),ie.current===t&&(Ft(ie),jr._currentValue=F)}var Mt,ht;function qt(t){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+ht}var Bt=!1;function ee(t,n){if(!t||Bt)return"";Bt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(jt){var $=jt}Reflect.construct(t,[],Tt)}else{try{Tt.call()}catch(jt){$=jt}Tt=!1;try{var ut=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Tt=!0,new t}finally{Tt&&(ut!==void 0?Object.defineProperty(t.prototype,"props",ut):delete t.prototype.props)}}}else{try{throw Error()}catch(jt){$=jt}(Tt=t())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(jt){if(jt&&$&&typeof jt.stack=="string")return[jt.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),_=u[0],A=u[1];if(_&&A){var H=_.split(`
`),it=A.split(`
`);for(c=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(s===H.length||c===it.length)for(s=H.length-1,c=it.length-1;1<=s&&0<=c&&H[s]!==it[c];)c--;for(;1<=s&&0<=c;s--,c--)if(H[s]!==it[c]){if(s!==1||c!==1)do if(s--,c--,0>c||H[s]!==it[c]){var mt=`
`+H[s].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=s&&0<=c);break}}}finally{Bt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qt(a):""}function ne(t,n){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return t.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return ee(t.type,!1);case 11:return ee(t.type.render,!1);case 1:return ee(t.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function Ot(t){try{var n="",a=null;do n+=ne(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Vt=Object.prototype.hasOwnProperty,le=o.unstable_scheduleCallback,X=o.unstable_cancelCallback,q=o.unstable_shouldYield,bt=o.unstable_requestPaint,z=o.unstable_now,gt=o.unstable_getCurrentPriorityLevel,Rt=o.unstable_ImmediatePriority,j=o.unstable_UserBlockingPriority,xt=o.unstable_NormalPriority,pt=o.unstable_LowPriority,zt=o.unstable_IdlePriority,kt=o.log,Yt=o.unstable_setDisableYieldValue,ce=null,Te=null;function Ye(t){if(typeof kt=="function"&&Yt(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(ce,t)}catch{}}var $e=Math.clz32?Math.clz32:Ei,gn=Math.log,Ii=Math.LN2;function Ei(t){return t>>>=0,t===0?32:31-(gn(t)/Ii|0)|0}var Ti=256,rn=262144,pa=4194304;function Gn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function En(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,u=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~u,s!==0?c=Gn(s):(_&=A,_!==0?c=Gn(_):a||(a=A&~t,a!==0&&(c=Gn(a))))):(A=s&~u,A!==0?c=Gn(A):_!==0?c=Gn(_):a||(a=s&~t,a!==0&&(c=Gn(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function oi(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ma(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-$e(a),c=1<<s;n|=t[s],a&=~c}return n}function Ss(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rr(){var t=pa;return pa<<=1,(pa&62914560)===0&&(pa=4194304),t}function Cn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,a,s,c,u){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,it=t.hiddenUpdates;for(a=_&~a;0<a;){var mt=31-$e(a),Tt=1<<mt;A[mt]=0,H[mt]=-1;var $=it[mt];if($!==null)for(it[mt]=null,mt=0;mt<$.length;mt++){var ut=$[mt];ut!==null&&(ut.lane&=-536870913)}a&=~Tt}s!==0&&N(t,s,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(_&~n))}function N(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-$e(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function nt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-$e(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function vt(t,n){var a=n&-n;return a=(a&42)!==0?1:yt(a),(a&(t.suspendedLanes|n))!==0?0:a}function yt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function at(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function It(){var t=Wt.p;return t!==0?t:(t=window.event,t===void 0?32:f_(t.type))}function Zt(t,n){var a=Wt.p;try{return Wt.p=t,n()}finally{Wt.p=a}}var Qt=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Qt,ae="__reactProps$"+Qt,he="__reactContainer$"+Qt,fe="__reactEvents$"+Qt,be="__reactListeners$"+Qt,ke="__reactHandles$"+Qt,on="__reactResources$"+Qt,Fe="__reactMarker$"+Qt,ze="__reactLoad$"+Qt;function de(t){delete t[Gt],delete t[ae],delete t[be],delete t[ke]}function He(t){var n;if(n=t[Gt])return n;for(var a=t.parentNode;a;){if(n=a[he]||a[Gt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xv(t);t!==null;){if(a=t[Gt])return a;t=Xv(t)}return n}t=a,a=t.parentNode}return null}function Se(t){if(t=t[Gt]||t[he]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Tn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ci(t){var n=t[on];return n||(n=t[on]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(t){t[Fe]=!0}function Ba(t){t[ze]=void 0}var tn=new Set,qn={};function vn(t,n){un(t,n),un(t+"Capture",n)}function un(t,n){for(qn[t]=n,t=0;t<n.length;t++)tn.add(n[t])}var Vn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),or={},Zi={};function Ry(t){return Vt.call(Zi,t)?!0:Vt.call(or,t)?!1:Vn.test(t)?Zi[t]=!0:(or[t]=!0,!1)}var Ie=!1;function hm(){var t=Ie;return Ie=!1,t}function zl(t,n,a){if(Ry(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Pl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ga(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ui(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cy(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,u.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xu(t){if(!t._valueTracker){var n=pm(t)?"checked":"value";t._valueTracker=Cy(t,n,""+t[n])}}function mm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=pm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var wy=/[\n"\\]/g;function bi(t){return t.replace(wy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qu(t,n,a,s,c,u,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ui(n)):t.value!==""+ui(n)&&(t.value=""+ui(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Wu(t,ui(t.value)):Wu(t,ui(n)):a!=null?Wu(t,ui(a)):s!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ui(A):t.removeAttribute("name")}function gm(t,n,a,s,c,u,_,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Xu(t);return}a=a!=null?""+ui(a):"",n=n!=null?""+ui(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Xu(t)}function Wu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function lr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ui(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vm(t,n,a){if(n!=null&&(n=""+ui(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ui(a):""}function _m(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ui(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Xu(t)}function cr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Dy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Dy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ym(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ie=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(xm(t,c,s),Ie=!0)}else for(var u in n)n.hasOwnProperty(u)&&xm(t,u,n[u])}function Yu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(t){return Uy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var Zu=null;function Ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ur=null,fr=null;function Sm(t){var n=Se(t);if(n&&(t=n.stateNode)){var a=t[ae]||null;t:switch(t=n.stateNode,n.type){case"input":if(qu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[ae]||null;if(!c)throw Error(r(90));qu(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&mm(s)}break t;case"textarea":vm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&lr(t,!!a.multiple,n,!1)}}}var Qu=!1;function Mm(t,n,a){if(Qu)return t(n,a);Qu=!0;try{var s=t(n);return s}finally{if(Qu=!1,(ur!==null||fr!==null)&&(Ic(),ur&&(n=ur,t=fr,fr=ur=null,Sm(n),t)))for(n=0;n<t.length;n++)Sm(t[n])}}function bo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[ae]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(va)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Ju=!1}var Fa=null,$u=null,Bl=null;function Em(){if(Bl)return Bl;var t,n=$u,a=n.length,s,c="value"in Fa?Fa.value:Fa.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[u-s];s++);return Bl=c.slice(t,1<s?1-s:void 0)}function Fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function Tm(){return!1}function Wn(t){function n(a,s,c,u,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Hl:Tm,this.isPropagationStopped=Tm,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Wn(Ha),Ro=B({},Ha,{view:0,detail:0}),Ly=Wn(Ro),tf,ef,Co,Vl=B({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(tf=t.screenX-Co.screenX,ef=t.screenY-Co.screenY):ef=tf=0,Co=t),tf)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),bm=Wn(Vl),Oy=B({},Vl,{dataTransfer:0}),zy=Wn(Oy),Py=B({},Ro,{relatedTarget:0}),nf=Wn(Py),Iy=B({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),By=Wn(Iy),Fy=B({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hy=Wn(Fy),Gy=B({},Ha,{data:0}),Am=Wn(Gy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=jy[t])?!!n[t]:!1}function af(){return Xy}var qy=B({},Ro,{key:function(t){if(t.key){var n=Vy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ky[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wy=Wn(qy),Yy=B({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Wn(Yy),Zy=B({},Ha,{submitter:0}),Ky=Wn(Zy),Qy=B({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Jy=Wn(Qy),$y=B({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Wn($y),eS=B({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Wn(eS),iS=B({},Ha,{newState:0,oldState:0,source:0}),aS=Wn(iS),sS=[9,13,27,32],sf=va&&"CompositionEvent"in window,wo=null;va&&"documentMode"in document&&(wo=document.documentMode);var rS=va&&"TextEvent"in window&&!wo,Cm=va&&(!sf||wo&&8<wo&&11>=wo),wm=" ",Dm=!1;function Nm(t,n){switch(t){case"keyup":return sS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function oS(t,n){switch(t){case"compositionend":return Um(n);case"keypress":return n.which!==32?null:(Dm=!0,wm);case"textInput":return t=n.data,t===wm&&Dm?null:t;default:return null}}function lS(t,n){if(dr)return t==="compositionend"||!sf&&Nm(t,n)?(t=Em(),Bl=$u=Fa=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cm&&n.locale!=="ko"?null:n.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cS[t.type]:n==="textarea"}function Om(t,n,a,s){ur?fr?fr.push(s):fr=[s]:ur=s,n=kc(n,"onChange"),0<n.length&&(a=new Gl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Do=null,No=null;function uS(t){Sv(t,0)}function kl(t){var n=Tn(t);if(mm(n))return t}function zm(t,n){if(t==="change")return n}var Pm=!1;if(va){var rf;if(va){var of="oninput"in document;if(!of){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),of=typeof Im.oninput=="function"}rf=of}else rf=!1;Pm=rf&&(!document.documentMode||9<document.documentMode)}function Bm(){Do&&(Do.detachEvent("onpropertychange",Fm),No=Do=null)}function Fm(t){if(t.propertyName==="value"&&kl(No)){var n=[];Om(n,No,t,Ku(t)),Mm(uS,n)}}function fS(t,n,a){t==="focusin"?(Bm(),Do=n,No=a,Do.attachEvent("onpropertychange",Fm)):t==="focusout"&&Bm()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(No)}function hS(t,n){if(t==="click")return kl(n)}function pS(t,n){if(t==="input"||t==="change")return kl(n)}function mS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:mS;function Uo(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Vt.call(n,c)||!fi(t[c],n[c]))return!1}return!0}function lf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,n){var a=Hm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hm(a)}}function Vm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function km(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=lf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=lf(t.document)}return n}function cf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var gS=va&&"documentMode"in document&&11>=document.documentMode,hr=null,uf=null,Lo=null,ff=!1;function jm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ff||hr==null||hr!==lf(s)||(s=hr,"selectionStart"in s&&cf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Lo&&Uo(Lo,s)||(Lo=s,s=kc(uf,"onSelect"),0<s.length&&(n=new Gl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=hr)))}function Ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var pr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},df={},Xm={};va&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Es(t){if(df[t])return df[t];if(!pr[t])return t;var n=pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xm)return df[t]=n[a];return t}var qm=Es("animationend"),Wm=Es("animationiteration"),Ym=Es("animationstart"),vS=Es("transitionrun"),_S=Es("transitionstart"),xS=Es("transitioncancel"),Zm=Es("transitionend"),Km=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Bi(t,n){Km.set(t,n),vn(n,[t])}var yS=0;function _a(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Vi.identifierPrefix;var a=yS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Qm(t){if(t==null||typeof t=="string")return t;var n=null,a=Or;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function xa(t,n){return t=Qm(t),n=Qm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ai=[],mr=0,pf=0;function Xl(){for(var t=mr,n=pf=mr=0;n<t;){var a=Ai[n];Ai[n++]=null;var s=Ai[n];Ai[n++]=null;var c=Ai[n];Ai[n++]=null;var u=Ai[n];if(Ai[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}u!==0&&Jm(a,c,u)}}function ql(t,n,a,s){Ai[mr++]=t,Ai[mr++]=n,Ai[mr++]=a,Ai[mr++]=s,pf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function mf(t,n,a,s){return ql(t,n,a,s),Wl(t)}function Ts(t,n){return ql(t,null,null,n),Wl(t)}function Jm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-$e(a),t=u.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),u):null}function Wl(t){if(50<el)throw el=0,Pc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gr={};function SS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,s){return new SS(t,n,a,s)}function gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ya(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $m(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yl(t,n,a,s,c,u){var _=0;if(s=t,typeof s=="function")gf(s)&&(_=1);else if(typeof s=="string")_=Z1(t,a,lt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ht:return t=ei(31,a,n,c),t.elementType=Ht,t.lanes=u,t;case k:return bs(a.children,c,u,n);case W:_=8,c|=24;break;case et:return t=ei(12,a,n,c|2),t.elementType=et,t.lanes=u,t;case dt:return t=ei(13,a,n,c),t.elementType=dt,t.lanes=u,t;case Q:return t=ei(19,a,n,c),t.elementType=Q,t.lanes=u,t;case oe:case V:return t=c|32,t=ei(30,a,n,t),t.elementType=V,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ft:_=10;break t;case St:_=9;break t;case K:_=11;break t;case At:_=14;break t;case Ct:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ei(_,a,n,c),n.elementType=t,n.type=s,n.lanes=u,n}function bs(t,n,a,s){return t=ei(7,t,s,n),t.lanes=a,t}function vf(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function t0(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function _f(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var e0=new WeakMap;function Ri(t,n){if(typeof t=="object"&&t!==null){var a=e0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ot(n)},e0.set(t,n),n)}return{value:t,source:n,stack:Ot(n)}}var vr=[],_r=0,Zl=null,Oo=0,Ci=[],wi=0,Ga=null,Qi=1,Ji="";function Sa(t,n){vr[_r++]=Oo,vr[_r++]=Zl,Zl=t,Oo=n}function n0(t,n,a){Ci[wi++]=Qi,Ci[wi++]=Ji,Ci[wi++]=Ga,Ga=t;var s=Qi;t=Ji;var c=32-$e(s)-1;s&=~(1<<c),a+=1;var u=32-$e(n)+c;if(30<u){var _=c-c%5;u=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Qi=1<<32-$e(n)+c|a<<c|s,Ji=u+t}else Qi=1<<u|a<<c|s,Ji=t}function Kl(t){t.return!==null&&(Sa(t,1),n0(t,1,0))}function xf(t){for(;t===Zl;)Zl=vr[--_r],vr[_r]=null,Oo=vr[--_r],vr[_r]=null;for(;t===Ga;)Ga=Ci[--wi],Ci[wi]=null,Ji=Ci[--wi],Ci[wi]=null,Qi=Ci[--wi],Ci[wi]=null}function i0(t,n){Ci[wi++]=Qi,Ci[wi++]=Ji,Ci[wi++]=Ga,Qi=n.id,Ji=n.overflow,Ga=t}var wn=null,en=null,Me=!1,Va=null,Di=!1,yf=Error(r(519));function ka(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Ri(n,t)),yf}function a0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Gt]=t,n[ae]=s,a){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)Re(il[a],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),gm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),_m(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||bv(n.textContent,a)?(s.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),s.onScroll!=null&&Re("scroll",n),s.onScrollEnd!=null&&Re("scrollend",n),s.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||ka(t,!0)}function Ql(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:wn=wn.return}}function xr(t){if(t!==wn)return!1;if(!Me)return Ql(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kd(t.type,t.memoizedProps)),a=!a),a&&en&&ka(t),Ql(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=jv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=jv(t)}else n===27?(n=en,ss(t.type)?(t=sh,sh=null,en=t):en=n):en=wn?Ui(t.stateNode.nextSibling):null;return!0}function As(){en=wn=null,Me=!1}function Sf(){var t=Va;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),Va=null),t}function zo(t){Va===null?Va=[t]:Va.push(t)}var Mf=Jt(null),Rs=null,Ma=null;function ja(t,n,a){$t(Mf,n._currentValue),n._currentValue=a}function Ea(t){t._currentValue=Mf.current,Ft(Mf)}function Jl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ef(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var _=c.child;u=u.firstContext;t:for(;u!==null;){var A=u;u=c;for(var H=0;H<n.length;H++)if(A.context===n[H]){u.lanes|=a,A=u.alternate,A!==null&&(A.lanes|=a),Jl(u.return,a,t),s||(_=null);break t}u=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,u=_.alternate,u!==null&&(u.lanes|=a),Jl(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),Jl(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Cs(t,n,a,s){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=c.type;fi(c.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(c===ie.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(jr):t=[jr])}c=c.return}return t!==null&&Ef(n,t,a,s),n.flags|=262144,t!==null}function $l(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){Rs=t,Ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return s0(Rs,t)}function tc(t,n){return Rs===null&&ws(t),s0(t,n)}function s0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ma===null){if(t===null)throw Error(r(308));Ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ma=Ma.next=n;return a}var MS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ES=o.unstable_scheduleCallback,TS=o.unstable_NormalPriority,_n={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new MS,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&ES(TS,function(){t.controller.abort()})}function r0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Io=null;function bS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Bo=null,bf=0,Ds=0,yr=null;function AS(t,n){if(Bo===null){var a=Bo=[];bf=0,Ds=Gd(),yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return bf++,n.then(o0,o0),n}function o0(){if(--bf===0&&(Io=null,Bo!==null)){yr!==null&&(yr.status="fulfilled");var t=Bo;Bo=null,Ds=0,yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function RS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var l0=Ut.S;Ut.S=function(t,n){if(tv=z(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&AS(t,n),Io!==null)for(var a=Br;a!==null;)r0(a,Io),a=a.next;if(a=t.types,a!==null){for(var s=Br;s!==null;)r0(s,a),s=s.next;if(Ds!==0){s=Io,s===null&&(s=Io=[]);for(var c=0;c<a.length;c++){var u=a[c];s.indexOf(u)===-1&&s.push(u)}}}l0!==null&&l0(t,n)};var Ns=Jt(null);function Af(){var t=Ns.current;return t!==null?t:Je.pooledCache}function ec(t,n){n===null?$t(Ns,Ns.current):$t(Ns,n.pool)}function c0(){var t=Af();return t===null?null:{parent:_n._currentValue,pool:t}}var Sr=Error(r(460)),Rf=Error(r(474)),nc=Error(r(542)),ic={then:function(){}};function u0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function f0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,h0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,h0(t),t}throw Ls=n,Sr}}function Us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ls=a,Sr):a}}var Ls=null;function d0(){if(Ls===null)throw Error(r(459));var t=Ls;return Ls=null,t}function h0(t){if(t===Sr||t===nc)throw Error(r(483))}var Mr=null,Fo=0;function ac(t){var n=Fo;return Fo+=1,Mr===null&&(Mr=[]),f0(Mr,t,n)}function Xa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sc(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function p0(t){function n(tt,Y){if(t){var ot=tt.deletions;ot===null?(tt.deletions=[Y],tt.flags|=16):ot.push(Y)}}function a(tt,Y){if(!t)return null;for(;Y!==null;)n(tt,Y),Y=Y.sibling;return null}function s(tt){for(var Y=new Map;tt!==null;)tt.key===null?Y.set(tt.index,tt):Y.set(tt.key,tt),tt=tt.sibling;return Y}function c(tt,Y){return tt=ya(tt,Y),tt.index=0,tt.sibling=null,tt}function u(tt,Y,ot){return tt.index=ot,t?(ot=tt.alternate,ot!==null?(ot=ot.index,ot<Y?(tt.flags|=2,Y):ot):(tt.flags|=134217730,Y)):(tt.flags|=1048576,Y)}function _(tt){return t&&tt.alternate===null&&(tt.flags|=134217730),tt}function A(tt,Y,ot,Et){return Y===null||Y.tag!==6?(Y=vf(ot,tt.mode,Et),Y.return=tt,Y):(Y=c(Y,ot),Y.return=tt,Y)}function H(tt,Y,ot,Et){var te=ot.type;return te===k?(tt=mt(tt,Y,ot.props.children,Et,ot.key),Xa(tt,ot),tt):Y!==null&&(Y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Ct&&Us(te)===Y.type)?(Y=c(Y,ot.props),Xa(Y,ot),Y.return=tt,Y):(Y=Yl(ot.type,ot.key,ot.props,null,tt.mode,Et),Xa(Y,ot),Y.return=tt,Y)}function it(tt,Y,ot,Et){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ot.containerInfo||Y.stateNode.implementation!==ot.implementation?(Y=_f(ot,tt.mode,Et),Y.return=tt,Y):(Y=c(Y,ot.children||[]),Y.return=tt,Y)}function mt(tt,Y,ot,Et,te){return Y===null||Y.tag!==7?(Y=bs(ot,tt.mode,Et,te),Y.return=tt,Y):(Y=c(Y,ot),Y.return=tt,Y)}function Tt(tt,Y,ot){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=vf(""+Y,tt.mode,ot),Y.return=tt,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case w:return ot=Yl(Y.type,Y.key,Y.props,null,tt.mode,ot),Xa(ot,Y),ot.return=tt,ot;case C:return Y=_f(Y,tt.mode,ot),Y.return=tt,Y;case Ct:return Y=Us(Y),Tt(tt,Y,ot)}if(Lt(Y)||rt(Y))return Y=bs(Y,tt.mode,ot,null),Y.return=tt,Y;if(typeof Y.then=="function")return Tt(tt,ac(Y),ot);if(Y.$$typeof===ft)return Tt(tt,tc(tt,Y),ot);sc(tt,Y)}return null}function $(tt,Y,ot,Et){var te=Y!==null?Y.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return te!==null?null:A(tt,Y,""+ot,Et);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case w:return ot.key===te?H(tt,Y,ot,Et):null;case C:return ot.key===te?it(tt,Y,ot,Et):null;case Ct:return ot=Us(ot),$(tt,Y,ot,Et)}if(Lt(ot)||rt(ot))return te!==null?null:mt(tt,Y,ot,Et,null);if(typeof ot.then=="function")return $(tt,Y,ac(ot),Et);if(ot.$$typeof===ft)return $(tt,Y,tc(tt,ot),Et);sc(tt,ot)}return null}function ut(tt,Y,ot,Et,te){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return tt=tt.get(ot)||null,A(Y,tt,""+Et,te);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case w:return tt=tt.get(Et.key===null?ot:Et.key)||null,H(Y,tt,Et,te);case C:return tt=tt.get(Et.key===null?ot:Et.key)||null,it(Y,tt,Et,te);case Ct:return Et=Us(Et),ut(tt,Y,ot,Et,te)}if(Lt(Et)||rt(Et))return tt=tt.get(ot)||null,mt(Y,tt,Et,te,null);if(typeof Et.then=="function")return ut(tt,Y,ot,ac(Et),te);if(Et.$$typeof===ft)return ut(tt,Y,ot,tc(Y,Et),te);sc(Y,Et)}return null}function jt(tt,Y,ot,Et){for(var te=null,Ne=null,ue=Y,pe=Y=0,Sn=null;ue!==null&&pe<ot.length;pe++){ue.index>pe?(Sn=ue,ue=null):Sn=ue.sibling;var Oe=$(tt,ue,ot[pe],Et);if(Oe===null){ue===null&&(ue=Sn);break}t&&ue&&Oe.alternate===null&&n(tt,ue),Y=u(Oe,Y,pe),Ne===null?te=Oe:Ne.sibling=Oe,Ne=Oe,ue=Sn}if(pe===ot.length)return a(tt,ue),Me&&Sa(tt,pe),te;if(ue===null){for(;pe<ot.length;pe++)ue=Tt(tt,ot[pe],Et),ue!==null&&(Y=u(ue,Y,pe),Ne===null?te=ue:Ne.sibling=ue,Ne=ue);return Me&&Sa(tt,pe),te}for(ue=s(ue);pe<ot.length;pe++)Sn=ut(ue,tt,pe,ot[pe],Et),Sn!==null&&(t&&(Oe=Sn.alternate,Oe!==null&&ue.delete(Oe.key===null?pe:Oe.key)),Y=u(Sn,Y,pe),Ne===null?te=Sn:Ne.sibling=Sn,Ne=Sn);return t&&ue.forEach(function(us){return n(tt,us)}),Me&&Sa(tt,pe),te}function se(tt,Y,ot,Et){if(ot==null)throw Error(r(151));for(var te=null,Ne=null,ue=Y,pe=Y=0,Sn=null,Oe=ot.next();ue!==null&&!Oe.done;pe++,Oe=ot.next()){ue.index>pe?(Sn=ue,ue=null):Sn=ue.sibling;var us=$(tt,ue,Oe.value,Et);if(us===null){ue===null&&(ue=Sn);break}t&&ue&&us.alternate===null&&n(tt,ue),Y=u(us,Y,pe),Ne===null?te=us:Ne.sibling=us,Ne=us,ue=Sn}if(Oe.done)return a(tt,ue),Me&&Sa(tt,pe),te;if(ue===null){for(;!Oe.done;pe++,Oe=ot.next())Oe=Tt(tt,Oe.value,Et),Oe!==null&&(Y=u(Oe,Y,pe),Ne===null?te=Oe:Ne.sibling=Oe,Ne=Oe);return Me&&Sa(tt,pe),te}for(ue=s(ue);!Oe.done;pe++,Oe=ot.next())Oe=ut(ue,tt,pe,Oe.value,Et),Oe!==null&&(t&&(Sn=Oe.alternate,Sn!==null&&ue.delete(Sn.key===null?pe:Sn.key)),Y=u(Oe,Y,pe),Ne===null?te=Oe:Ne.sibling=Oe,Ne=Oe);return t&&ue.forEach(function(oM){return n(tt,oM)}),Me&&Sa(tt,pe),te}function _e(tt,Y,ot,Et){if(typeof ot=="object"&&ot!==null&&ot.type===k&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case w:t:{for(var te=ot.key;Y!==null;){if(Y.key===te){if(te=ot.type,te===k){if(Y.tag===7){a(tt,Y.sibling),Et=c(Y,ot.props.children),Xa(Et,ot),Et.return=tt,tt=Et;break t}}else if(Y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Ct&&Us(te)===Y.type){a(tt,Y.sibling),Et=c(Y,ot.props),Xa(Et,ot),Et.return=tt,tt=Et;break t}a(tt,Y);break}else n(tt,Y);Y=Y.sibling}ot.type===k?(Et=bs(ot.props.children,tt.mode,Et,ot.key),Xa(Et,ot),Et.return=tt,tt=Et):(Et=Yl(ot.type,ot.key,ot.props,null,tt.mode,Et),Xa(Et,ot),Et.return=tt,tt=Et)}return _(tt);case C:t:{for(te=ot.key;Y!==null;){if(Y.key===te)if(Y.tag===4&&Y.stateNode.containerInfo===ot.containerInfo&&Y.stateNode.implementation===ot.implementation){a(tt,Y.sibling),Et=c(Y,ot.children||[]),Et.return=tt,tt=Et;break t}else{a(tt,Y);break}else n(tt,Y);Y=Y.sibling}Et=_f(ot,tt.mode,Et),Et.return=tt,tt=Et}return _(tt);case Ct:return ot=Us(ot),_e(tt,Y,ot,Et)}if(Lt(ot))return jt(tt,Y,ot,Et);if(rt(ot)){if(te=rt(ot),typeof te!="function")throw Error(r(150));return ot=te.call(ot),se(tt,Y,ot,Et)}if(typeof ot.then=="function")return _e(tt,Y,ac(ot),Et);if(ot.$$typeof===ft)return _e(tt,Y,tc(tt,ot),Et);sc(tt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,Y!==null&&Y.tag===6?(a(tt,Y.sibling),Et=c(Y,ot),Et.return=tt,tt=Et):(a(tt,Y),Et=vf(ot,tt.mode,Et),Et.return=tt,tt=Et),_(tt)):a(tt,Y)}return function(tt,Y,ot,Et){try{Fo=0;var te=_e(tt,Y,ot,Et);return Mr=null,te}catch(ue){if(ue===Sr||ue===nc)throw ue;var Ne=ei(29,ue,null,tt.mode);return Ne.lanes=Et,Ne.return=tt,Ne}finally{}}}var Os=p0(!0),m0=p0(!1),qa=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ge&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Wl(t),Jm(t,null,a),n}return ql(t,s,n,a),Wl(t)}function Ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,nt(t,a)}}function Df(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=_:u=u.next=_,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nf=!1;function Go(){if(Nf){var t=yr;if(t!==null)throw t}}function Vo(t,n,a,s){Nf=!1;var c=t.updateQueue;qa=!1;var u=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var H=A,it=H.next;H.next=null,_===null?u=it:_.next=it,_=H;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==_&&(A===null?mt.firstBaseUpdate=it:A.next=it,mt.lastBaseUpdate=H))}if(u!==null){var Tt=c.baseState;_=0,mt=it=H=null,A=u;do{var $=A.lane&-536870913,ut=$!==A.lane;if(ut?(De&$)===$:(s&$)===$){$!==0&&$===Ds&&(Nf=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var jt=t,se=A;$=n;var _e=a;switch(se.tag){case 1:if(jt=se.payload,typeof jt=="function"){Tt=jt.call(_e,Tt,$);break t}Tt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=se.payload,$=typeof jt=="function"?jt.call(_e,Tt,$):jt,$==null)break t;Tt=B({},Tt,$);break t;case 2:qa=!0}}$=A.callback,$!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[$]:ut.push($))}else ut={lane:$,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(it=mt=ut,H=Tt):mt=mt.next=ut,_|=$;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);mt===null&&(H=Tt),c.baseState=H,c.firstBaseUpdate=it,c.lastBaseUpdate=mt,u===null&&(c.shared.lanes=0),es|=_,t.lanes=_,t.memoizedState=Tt}}function g0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function v0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)g0(a[t],n)}var Za=Jt(null),rc=Jt(0);function _0(t,n){t=Ca,$t(rc,t),$t(Za,n),Ca=t|n.baseLanes}function Uf(){$t(rc,Ca),$t(Za,Za.current)}function Lf(){Ca=rc.current,Ft(Za),Ft(rc)}var Pn=Jt(null),kn=null;function Ka(t){var n=t.alternate;$t(In,In.current&1),$t(Pn,t),kn===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(kn=t)}function Of(t){$t(In,In.current),$t(Pn,t),kn===null&&(kn=t)}function x0(t){t.tag===22?($t(In,In.current),$t(Pn,t),kn===null&&(kn=t)):Qa()}function Qa(){$t(In,In.current),$t(Pn,Pn.current)}function di(t){Ft(Pn),kn===t&&(kn=null),Ft(In)}var In=Jt(0);function ko(t,n){$t(Pn,Pn.current),$t(In,n)}function zf(t){Ft(In),Ft(Pn),kn===t&&(kn=null)}function oc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,ve=null,Ze=null,xn=null,lc=!1,Er=!1,zs=!1,cc=0,jo=0,Tr=null,CS=0;function fn(){throw Error(r(321))}function Pf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function If(t,n,a,s,c,u){return Ta=u,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ut.H=t===null||t.memoizedState===null?ng:ig,zs=!1,u=a(s,c),zs=!1,Er&&(u=S0(n,a,s,c)),y0(t),u}function y0(t){Ut.H=gc;var n=Ze!==null&&Ze.next!==null;if(Ta=0,xn=Ze=ve=null,lc=!1,jo=0,Tr=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&$l(t)&&(yn=!0))}function S0(t,n,a,s){ve=t;var c=0;do{if(Er&&(Tr=null),jo=0,Er=!1,25<=c)throw Error(r(301));if(c+=1,xn=Ze=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Ut.H=PS,u=n(a,s)}while(Er);return u}function wS(){var t=Ut.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(ve.flags|=1024),n}function Bf(){var t=cc!==0;return cc=0,t}function Ff(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Hf(t){if(lc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}lc=!1}Ta=0,xn=Ze=ve=null,Er=!1,jo=cc=0,Tr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?ve.memoizedState=xn=t:xn=xn.next=t,xn}function pn(){if(Ze===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=xn===null?ve.memoizedState:xn.next;if(n!==null)xn=n,Ze=t;else{if(t===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},xn===null?ve.memoizedState=xn=t:xn=xn.next=t}return xn}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=jo;return jo+=1,Tr===null&&(Tr=[]),t=f0(Tr,t,n),n=ve,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,Ut.H=n===null||n.memoizedState===null?ng:ig),t}function fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===ct)return;if(t.$$typeof===ft)return zn(t)}throw Error(r(438,String(t)))}function Gf(t){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ve.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=uc(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=ge;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function dc(t){var n=pn();return Vf(n,Ze,t)}function Vf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,u=s.pending;if(u!==null){if(c!==null){var _=c.next;c.next=u.next,u.next=_}n.baseQueue=c=u,s.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var A=_=null,H=null,it=n,mt=!1;do{var Tt=it.lane&-536870913;if(Tt!==it.lane?(De&Tt)===Tt:(Ta&Tt)===Tt){var $=it.revertLane;if($===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Tt===Ds&&(mt=!0);else if((Ta&$)===$){it=it.next,$===Ds&&(mt=!0);continue}else Tt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=Tt,_=u):H=H.next=Tt,ve.lanes|=$,es|=$;Tt=it.action,zs&&a(u,Tt),u=it.hasEagerState?it.eagerState:a(u,Tt)}else $={lane:Tt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=$,_=u):H=H.next=$,ve.lanes|=Tt,es|=Tt;it=it.next}while(it!==null&&it!==n);if(H===null?_=u:H.next=A,!fi(u,t.memoizedState)&&(yn=!0,mt&&(a=yr,a!==null)))throw a;t.memoizedState=u,t.baseState=_,t.baseQueue=H,s.lastRenderedState=u}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function kf(t){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do u=t(u,_.action),_=_.next;while(_!==c);fi(u,n.memoizedState)||(yn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function M0(t,n,a){var s=ve,c=pn(),u=Me;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!fi((Ze||c).memoizedState,a);if(_&&(c.memoizedState=a,yn=!0),c=c.queue,qf(b0.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||_||xn!==null&&(xn.memoizedState.tag&1)!==0,br(t?9:8,{destroy:void 0},T0.bind(null,s,c,a,n),null),t){if(s.flags|=2048,Je===null)throw Error(r(349));u||(Ta&127)!==0||E0(s,n,a)}return a}function E0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=uc(),ve.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function T0(t,n,a,s){n.value=a,n.getSnapshot=s,A0(n)&&R0(t)}function b0(t,n,a){return a(function(){A0(n)&&R0(t)})}function A0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function R0(t){var n=Ts(t,2);n!==null&&si(n,t,2)}function jf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),zs){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function C0(t,n,a,s){return t.baseState=a,Vf(t,Ze,typeof s=="function"?s:ba)}function DS(t,n,a,s,c){if(mc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){u.listeners.push(_)}};Ut.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,w0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function w0(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var u=Ut.T,_={};_.types=u!==null?u.types:null,Ut.T=_;try{var A=a(c,s),H=Ut.S;H!==null&&H(_,A),D0(t,n,A)}catch(it){Xf(t,n,it)}finally{u!==null&&_.types!==null&&(u.types=_.types),Ut.T=u}}else try{u=a(c,s),D0(t,n,u)}catch(it){Xf(t,n,it)}}function D0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){N0(t,n,s)},function(s){return Xf(t,n,s)}):N0(t,n,a)}function N0(t,n,a){n.status="fulfilled",n.value=a,U0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,w0(t,a)))}function Xf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,U0(n),n=n.next;while(n!==s)}t.action=null}function U0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function L0(t,n){return n}function O0(t,n){if(Me){var a=Je.formState;if(a!==null){t:{var s=ve;if(Me){if(en){e:{for(var c=en,u=Di;c.nodeType!==8;){if(!u){c=null;break e}if(c=Ui(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){en=Ui(c.nextSibling),s=c.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L0,lastRenderedState:n},a.queue=s,a=$0.bind(null,ve,s),s.dispatch=a,s=jf(!1),u=Qf.bind(null,ve,!1,s.queue),s=Yn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=DS.bind(null,ve,c,u,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function z0(t){var n=pn();return P0(n,Ze,t)}function P0(t,n,a){if(n=Vf(t,n,L0)[0],t=dc(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xo(n)}catch(_){throw _===Sr?nc:_}else s=n;n=pn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,br(9,{destroy:void 0},NS.bind(null,c,a),null)),[s,u,t]}function NS(t,n){t.action=n}function I0(t){var n=pn(),a=Ze;if(a!==null)return P0(n,a,t);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ve.updateQueue,n===null&&(n=uc(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function B0(){return pn().memoizedState}function hc(t,n,a,s){var c=Yn();ve.flags|=t,c.memoizedState=br(1|n,{destroy:void 0},a,s===void 0?null:s)}function pc(t,n,a,s){var c=pn();s=s===void 0?null:s;var u=c.memoizedState.inst;Ze!==null&&s!==null&&Pf(s,Ze.memoizedState.deps)?c.memoizedState=br(n,u,a,s):(ve.flags|=t,c.memoizedState=br(1|n,u,a,s))}function F0(t,n){hc(8390656,8,t,n)}function qf(t,n){pc(2048,8,t,n)}function US(t){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=uc(),ve.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function H0(t){var n=pn().memoizedState;return US({ref:n,nextImpl:t}),function(){if((Ge&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function G0(t,n){return pc(4,2,t,n)}function V0(t,n){return pc(4,4,t,n)}function k0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function j0(t,n,a){a=a!=null?a.concat([t]):null,pc(4,4,k0.bind(null,n,t),a)}function Wf(){}function X0(t,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Pf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function q0(t,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Pf(n,s[1]))return s[0];if(s=t(),zs){Ye(!0);try{t()}finally{Ye(!1)}}return a.memoizedState=[s,n],s}function Yf(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(De&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=nv(),ve.lanes|=t,es|=t,a)}function W0(t,n,a,s){return fi(a,n)?a:Za.current!==null?(t=Yf(t,a,s),fi(t,n)||(yn=!0),t):(Ta&106)===0||(Ta&1073741824)!==0&&(De&261930)===0?(yn=!0,t.memoizedState=a):(t=nv(),ve.lanes|=t,es|=t,n)}function Y0(t,n,a,s,c){var u=Wt.p;Wt.p=u!==0&&8>u?u:8;var _=Ut.T,A={};A.types=_!==null?_.types:null,Ut.T=A,Qf(t,!1,n,a);try{var H=c(),it=Ut.S;if(it!==null&&it(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=RS(H,s);qo(t,n,mt,gi(t))}else qo(t,n,s,gi(t))}catch(Tt){qo(t,n,{then:function(){},status:"rejected",reason:Tt},gi())}finally{Wt.p=u,_!==null&&A.types!==null&&(_.types=A.types),Ut.T=_}}function LS(){}function Zf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Z0(t).queue;Y0(t,c,n,F,a===null?LS:function(){return K0(t),a(s)})}function Z0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:F},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function K0(t){var n=Z0(t);n.next===null&&(n=t.alternate.memoizedState),qo(t,n.next.queue,{},gi())}function Kf(){return zn(jr)}function Q0(){return pn().memoizedState}function J0(){return pn().memoizedState}function OS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();t=Wa(a);var s=Ya(n,t,a);s!==null&&(si(s,n,a),Ho(s,n,a)),n={cache:Tf()},t.payload=n;return}n=n.return}}function zS(t,n,a){var s=gi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},mc(t)?tg(n,a):(a=mf(t,n,a,s),a!==null&&(si(a,t,s),eg(a,n,s)))}function $0(t,n,a){var s=gi();qo(t,n,a,s)}function qo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(mc(t))tg(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var _=n.lastRenderedState,A=u(_,a);if(c.hasEagerState=!0,c.eagerState=A,fi(A,_))return ql(t,n,c,0),Je===null&&Xl(),!1}catch{}finally{}if(a=mf(t,n,c,s),a!==null)return si(a,t,s),eg(a,n,s),!0}return!1}function Qf(t,n,a,s){if(s={lane:2,revertLane:Gd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},mc(t)){if(n)throw Error(r(479))}else n=mf(t,a,s,2),n!==null&&si(n,t,2)}function mc(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function tg(t,n){Er=lc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function eg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,nt(t,a)}}var gc={readContext:zn,use:fc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},ng={readContext:zn,use:fc,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:zn,useEffect:F0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hc(4194308,4,k0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hc(4194308,4,t,n)},useInsertionEffect:function(t,n){hc(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var s=t();if(zs){Ye(!0);try{t()}finally{Ye(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Yn();if(a!==void 0){var c=a(n);if(zs){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=zS.bind(null,ve,t),[s.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=jf(t);var n=t.queue,a=$0.bind(null,ve,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Wf,useDeferredValue:function(t,n){var a=Yn();return Yf(a,t,n)},useTransition:function(){var t=jf(!1);return t=Y0.bind(null,ve,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ve,c=Yn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Je===null)throw Error(r(349));(De&127)!==0||E0(s,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,F0(b0.bind(null,s,u,t),[t]),s.flags|=2048,br(9,{destroy:void 0},T0.bind(null,s,u,a,n),null),a},useId:function(){var t=Yn(),n=Je.identifierPrefix;if(Me){var a=Ji,s=Qi;a=(s&~(1<<32-$e(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=CS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Kf,useFormState:O0,useActionState:O0,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qf.bind(null,ve,!0,a),a.dispatch=n,[t,n]},useMemoCache:Gf,useCacheRefresh:function(){return Yn().memoizedState=OS.bind(null,ve)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Ge&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ig={readContext:zn,use:fc,useCallback:X0,useContext:zn,useEffect:qf,useImperativeHandle:j0,useInsertionEffect:G0,useLayoutEffect:V0,useMemo:q0,useReducer:dc,useRef:B0,useState:function(){return dc(ba)},useDebugValue:Wf,useDeferredValue:function(t,n){var a=pn();return W0(a,Ze.memoizedState,t,n)},useTransition:function(){var t=dc(ba)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:M0,useId:Q0,useHostTransitionStatus:Kf,useFormState:z0,useActionState:z0,useOptimistic:function(t,n){var a=pn();return C0(a,Ze,t,n)},useMemoCache:Gf,useCacheRefresh:J0,useEffectEvent:H0},PS={readContext:zn,use:fc,useCallback:X0,useContext:zn,useEffect:qf,useImperativeHandle:j0,useInsertionEffect:G0,useLayoutEffect:V0,useMemo:q0,useReducer:kf,useRef:B0,useState:function(){return kf(ba)},useDebugValue:Wf,useDeferredValue:function(t,n){var a=pn();return Ze===null?Yf(a,t,n):W0(a,Ze.memoizedState,t,n)},useTransition:function(){var t=kf(ba)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:M0,useId:Q0,useHostTransitionStatus:Kf,useFormState:I0,useActionState:I0,useOptimistic:function(t,n){var a=pn();return Ze!==null?C0(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:J0,useEffectEvent:H0};function Jf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:B({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $f={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=gi(),c=Wa(s);c.payload=n,a!=null&&(c.callback=a),n=Ya(t,c,s),n!==null&&(si(n,t,s),Ho(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=gi(),c=Wa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ya(t,c,s),n!==null&&(si(n,t,s),Ho(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=gi(),s=Wa(a);s.tag=2,n!=null&&(s.callback=n),n=Ya(t,s,a),n!==null&&(si(n,t,a),Ho(n,t,a))}};function ag(t,n,a,s,c,u,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,_):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,s)||!Uo(c,u):!0}function sg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&$f.enqueueReplaceState(n,n.state,null)}function Ps(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=B({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function rg(t){jl(t)}function og(t){console.error(t)}function lg(t){jl(t)}function vc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function cg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function td(t,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){vc(t,n)},a}function ug(t){return t=Wa(t),t.tag=3,t}function fg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;t.payload=function(){return c(u)},t.callback=function(){cg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){cg(n,a,s),typeof c!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function IS(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Cs(n,a,c,!0),a=Pn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return kn===null?Bc():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ic?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Bd(t,s,c)),!1;case 22:return a.flags|=65536,s===ic?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Bd(t,s,c)),!1}throw Error(r(435,a.tag))}return Bd(t,s,c),Bc(),!1}if(Me)return n=Pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==yf&&(t=Error(r(422),{cause:s}),zo(Ri(t,a)))):(s!==yf&&(n=Error(r(423),{cause:s}),zo(Ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Ri(s,a),c=td(t.stateNode,s,c),Df(t,c),dn!==4&&(dn=2)),!1;var u=Error(r(520),{cause:s});if(u=Ri(u,a),tl===null?tl=[u]:tl.push(u),dn!==4&&(dn=2),n===null)return!0;s=Ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=td(a.stateNode,s,t),Df(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ns===null||!ns.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ug(c),fg(c,t,a,s),Df(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ed=Error(r(461)),yn=!1;function bn(t,n,a,s){n.child=t===null?m0(n,null,a,s):Os(n,t.child,a,s)}function dg(t,n,a,s,c){a=a.render;var u=n.ref;if("ref"in s){var _={};for(var A in s)A!=="ref"&&(_[A]=s[A])}else _=s;return ws(n),s=If(t,n,a,_,u,c),A=Bf(),t!==null&&!yn?(Ff(t,n,c),Aa(t,n,c)):(Me&&A&&Kl(n),n.flags|=1,bn(t,n,s,c),n.child)}function hg(t,n,a,s,c){if(t===null){var u=a.type;return typeof u=="function"&&!gf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,pg(t,n,u,s,c)):(t=Yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!cd(t,c)){var _=u.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(_,s)&&t.ref===n.ref)return Aa(t,n,c)}return n.flags|=1,t=ya(u,s),t.ref=n.ref,t.return=n,n.child=t}function pg(t,n,a,s,c){if(t!==null){var u=t.memoizedProps;if(Uo(u,s)&&t.ref===n.ref)if(yn=!1,n.pendingProps=s=u,cd(t,c))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,Aa(t,n,c)}return nd(t,n,a,s,c)}function mg(t,n,a,s){var c=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~u}else s=0,n.child=null;return gg(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(n,u!==null?u.cachePool:null),u!==null?_0(n,u):Uf(),x0(n);else return s=n.lanes=536870912,gg(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(ec(n,u.cachePool),_0(n,u),Qa(),n.memoizedState=null):(t!==null&&ec(n,null),Uf(),Qa());return bn(t,n,c,a),n.child}function Wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gg(t,n,a,s,c){var u=Af();return u=u===null?null:{parent:_n._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&ec(n,null),Uf(),x0(n),t!==null&&Cs(t,n,s,!0),n.childLanes=c,null}function _c(t,n){return n=xc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function vg(t,n,a){return Os(n,t.child,null,a),t=_c(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function BS(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=_c(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wo(null,t);if(Of(n),(t=en)?(t=kv(t,Di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=t0(t),a.return=n,n.child=a,wn=n,en=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return _c(n,s)}var u=t.memoizedState;if(u!==null){var _=u.dehydrated;if(Of(n),c)if(n.flags&256)n.flags&=-257,n=vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||Cs(t,n,a,!1),c=(a&t.childLanes)!==0,yn||c){if(Za.current===null){if(s=Je,s!==null&&(_=vt(s,a),_!==0&&_!==u.retryLane))throw u.retryLane=_,Ts(t,_),si(s,t,_),ed;Bc()}n=vg(t,n,a)}else t=u.treeContext,en=Ui(_.nextSibling),wn=n,Me=!0,Va=null,Di=!1,t!==null&&i0(n,t),n=_c(n,s),n.flags|=134221824;return n}return t=ya(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ar(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function nd(t,n,a,s,c){return ws(n),a=If(t,n,a,s,void 0,c),s=Bf(),t!==null&&!yn?(Ff(t,n,c),Aa(t,n,c)):(Me&&s&&Kl(n),n.flags|=1,bn(t,n,a,c),n.child)}function _g(t,n,a,s,c,u){return ws(n),n.updateQueue=null,a=S0(n,s,a,c),y0(t),s=Bf(),t!==null&&!yn?(Ff(t,n,u),Aa(t,n,u)):(Me&&s&&Kl(n),n.flags|=1,bn(t,n,a,u),n.child)}function xg(t,n,a,s,c){if(ws(n),n.stateNode===null){var u=gr,_=a.contextType;typeof _=="object"&&_!==null&&(u=zn(_)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=$f,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Cf(n),_=a.contextType,u.context=typeof _=="object"&&_!==null?zn(_):gr,u.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Jf(n,a,_,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(_=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),_!==u.state&&$f.enqueueReplaceState(u,u.state,null),Vo(n,s,u,c),Go(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var A=n.memoizedProps,H=Ps(a,A);u.props=H;var it=u.context,mt=a.contextType;_=gr,typeof mt=="object"&&mt!==null&&(_=zn(mt));var Tt=a.getDerivedStateFromProps;mt=typeof Tt=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||it!==_)&&sg(n,u,s,_),qa=!1;var $=n.memoizedState;u.state=$,Vo(n,s,u,c),Go(),it=n.memoizedState,A||$!==it||qa?(typeof Tt=="function"&&(Jf(n,a,Tt,s),it=n.memoizedState),(H=qa||ag(n,a,H,s,$,it,_))?(mt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=it),u.props=s,u.state=it,u.context=_,s=H):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,wf(t,n),_=n.memoizedProps,mt=Ps(a,_),u.props=mt,Tt=n.pendingProps,$=u.context,it=a.contextType,H=gr,typeof it=="object"&&it!==null&&(H=zn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_!==Tt||$!==H)&&sg(n,u,s,H),qa=!1,$=n.memoizedState,u.state=$,Vo(n,s,u,c),Go();var ut=n.memoizedState;_!==Tt||$!==ut||qa||t!==null&&t.dependencies!==null&&$l(t.dependencies)?(typeof A=="function"&&(Jf(n,a,A,s),ut=n.memoizedState),(mt=qa||ag(n,a,mt,s,$,ut,H)||t!==null&&t.dependencies!==null&&$l(t.dependencies))?(it||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,ut,H),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,ut,H)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),u.props=s,u.state=ut,u.context=H,s=mt):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,Ar(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Os(n,t.child,null,c),n.child=Os(n,null,a,c)):bn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=Aa(t,n,c),t}function yg(t,n,a,s){return As(),n.flags|=256,bn(t,n,a,s),n.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(t){return{baseLanes:t,cachePool:c0()}}function sd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=mi),t}function Sg(t,n,a){var s=n.pendingProps,c=!1,u=(n.flags&128)!==0,_;if((_=u)||(_=t!==null&&t.memoizedState===null?!1:(In.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?Ka(n):Qa(),(t=en)?(t=kv(t,Di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=t0(t),a.return=n,n.child=a,wn=n,en=null)):t=null,t===null)throw ka(n);return ah(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,c?(Qa(),c=n.mode,u=xc({mode:"hidden",children:u},c),s=bs(s,c,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=ad(a),s.childLanes=sd(t,_,a),n.memoizedState=id,Wo(null,s)):(Ka(n),rd(n,u))}var A=t.memoizedState;if(A!==null){var H=A.dehydrated;if(H!==null)return FS(t,n,u,_,s,H,A,a)}return c?(Qa(),c=s.fallback,u=n.mode,A=t.child,H=A.sibling,s=ya(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,H!==null?c=ya(H,c):(c=bs(c,u,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Wo(null,s),s=n.child,c=t.child.memoizedState,c===null?c=ad(a):(u=c.cachePool,u!==null?(A=_n._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=c0(),c={baseLanes:c.baseLanes|a,cachePool:u}),s.memoizedState=c,s.childLanes=sd(t,_,a),n.memoizedState=id,Wo(t.child,s)):(Ka(n),a=t.child,t=a.sibling,a=ya(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function rd(t,n){return n=xc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xc(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function yc(t,n,a){return Os(n,t.child,null,a),t=rd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function FS(t,n,a,s,c,u,_,A){if(a)return n.flags&256?(Ka(n),n.flags&=-257,yc(t,n,A)):n.memoizedState!==null?(Qa(),n.child=t.child,n.flags|=128,null):(Qa(),u=c.fallback,_=n.mode,c=xc({mode:"visible",children:c.children},_),u=bs(u,_,A,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Os(n,t.child,null,A),c=n.child,c.memoizedState=ad(A),c.childLanes=sd(t,s,A),n.memoizedState=id,Wo(null,c));if(Ka(n),ah(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var H=s.dgst;return s=H,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,zo({value:c,source:null,stack:null})),yc(t,n,A)}if(yn||Cs(t,n,A,!1),s=(A&t.childLanes)!==0,yn||s){if(Za.current!==null)return yc(t,n,A);if(s=Je,s!==null&&(c=vt(s,A),c!==0&&c!==_.retryLane))throw _.retryLane=c,Ts(t,c),si(s,t,c),ed;return ih(u)||Bc(),yc(t,n,A)}return ih(u)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,en=Ui(u.nextSibling),wn=n,Me=!0,Va=null,Di=!1,t!==null&&i0(n,t),n=rd(n,c.children),n.flags|=134221824,n)}function Mg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Jl(t.return,n,a)}function Eg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&oc(a)===null&&(n=t),t=t.sibling}return n}function Sc(t,n,a,s,c,u){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:u}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=u)}function od(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ld(t,n,a){var s=n.pendingProps,c=s.revealOrder,u=s.tail;s=s.children;var _=In.current;if(n.flags&128)return ko(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,ko(n,_),c==="backwards"&&t!==null?(od(t),bn(t,n,s,a),od(t)):bn(t,n,s,a),s=Me?Oo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,a,n);else if(t.tag===19)Mg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Eg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,od(n)),Sc(n,!0,c,null,u,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&oc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Sc(n,!0,a,null,u,s);break;case"together":Sc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Eg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Sc(n,!1,c,a,u,s)}return n.child}function Tg(t,n,a){var s=n.pendingProps;return ja(n,n.type,s.value),bn(t,n,s.children,a),n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),es|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Cs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ya(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ya(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$l(t)))}function HS(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),ja(n,_n,t.memoizedState.cache),As();break;case 27:case 5:J(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Of(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ka(n),n.flags|=128,null;s=Cs(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Sg(t,n,a):(Ka(n),t=Aa(t,n,a),t!==null?t.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return ld(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Cs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return ld(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ko(n,In.current),s)break;return null;case 22:return n.lanes=0,mg(t,n,a,n.pendingProps);case 24:ja(n,_n,t.memoizedState.cache)}return Aa(t,n,a)}function bg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!cd(t,a)&&(n.flags&128)===0)return yn=!1,HS(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,Me&&(n.flags&1048576)!==0&&n0(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Us(n.elementType),n.type=t,typeof t=="function")gf(t)?(s=Ps(t,s),n.tag=1,n=xg(null,n,t,s,a)):(n.tag=0,n=nd(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===K){n.tag=11,n=dg(null,n,t,s,a);break t}else if(c===At){n.tag=14,n=hg(null,n,t,s,a);break t}else if(c===ft){n.tag=10,n.type=t,n=Tg(null,n,a);break t}}throw n=Pt(t)||t,Error(r(306,n,""))}}return n;case 0:return nd(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ps(s,n.pendingProps),xg(t,n,s,c,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;c=u.element,wf(t,n),Vo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,ja(n,_n,s),s!==u.cache&&Ef(n,[_n],a,!0),Go(),s=_.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=yg(t,n,s,a);break t}else if(s!==c){c=Ri(Error(r(424)),n),zo(c),n=yg(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ui(t.firstChild),wn=n,Me=!0,Va=null,Di=!0,a=m0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(As(),s===c){n=Aa(t,n,a);break t}bn(t,n,s,a)}n=n.child}return n;case 26:return Ar(t,n),t===null?(a=Kv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=wv(n.type,n.pendingProps,Nt.current,n)):n.memoizedState=Kv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return J(n),t===null&&Me&&(s=n.stateNode=qv(n.type,n.pendingProps,Nt.current),wn=n,Di=!0,c=en,ss(n.type)?(sh=c,en=Ui(s.firstChild)):en=c),bn(t,n,n.pendingProps.children,a),Ar(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=s=en)&&(s=O1(s,n.type,n.pendingProps,Di),s!==null?(n.stateNode=s,wn=n,en=Ui(s.firstChild),Di=!1,c=!0):c=!1),c||ka(n)),J(n),c=n.type,u=n.pendingProps,_=t!==null?t.memoizedProps:null,s=u.children,Kd(c,u)?s=null:_!==null&&Kd(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=If(t,n,wS,null,null,a),jr._currentValue=c),Ar(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=en)&&(a=z1(a,n.pendingProps,Di),a!==null?(n.stateNode=a,wn=n,en=null,t=!0):t=!1),t||ka(n)),null;case 13:return Sg(t,n,a);case 4:return U(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Os(n,null,s,a):bn(t,n,s,a),n.child;case 11:return dg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ar(t,n),bn(t,n,s,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return Tg(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,ws(n),c=zn(c),s=s(c),n.flags|=1,bn(t,n,s,a),n.child;case 14:return hg(t,n,n.type,n.pendingProps,a);case 15:return pg(t,n,n.type,n.pendingProps,a);case 19:return ld(t,n,a);case 31:return BS(t,n,a);case 22:return mg(t,n,a,n.pendingProps);case 24:return ws(n),s=zn(_n),t===null?(c=Af(),c===null&&(c=Je,u=Tf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:s,cache:c},Cf(n),ja(n,_n,c)):((t.lanes&a)!==0&&(wf(t,n),Vo(n,null,null,a),Go()),c=t.memoizedState,u=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ja(n,_n,s)):(s=u.cache,ja(n,_n,s),s!==c.cache&&Ef(n,[_n],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&Kl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Ar(t,n),bn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(t){t.flags|=4}function ud(t,n,a,s,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?t_(n,s):t_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(rv())t.flags|=8192;else throw Ls=ic,Rf}else t.flags&=-16777217}function Ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e_(n))if(rv())t.flags|=8192;else throw Ls=ic,Rf}function Mc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?rr():536870912,t.lanes|=n,Nr|=n)}function Yo(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function GS(t,n,a){var s=n.pendingProps;switch(xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(_n),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xr(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sf())),nn(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(Ra(n),u!==null?(nn(n),Ag(n,u)):(nn(n),ud(n,c,null,s,a))):u?u!==t.memoizedState?(Ra(n),nn(n),Ag(n,u)):(nn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ra(n),nn(n),ud(n,c,t,s,a)),null;case 27:if(_t(n),a=Nt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return nn(n),n.subtreeFlags&=-33554433,null}t=lt.current,xr(n)?a0(n):(t=qv(c,s,a),n.stateNode=t,Ra(n))}return nn(n),n.subtreeFlags&=-33554433,null;case 5:if(_t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return nn(n),n.subtreeFlags&=-33554433,null}if(u=lt.current,xr(n))a0(n);else{var _=sl(Nt.current);switch(u){case 1:u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=_.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}u[Gt]=n,u[ae]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)u.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=u;t:switch(Fn(u,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ra(n)}}return nn(n),n.subtreeFlags&=-33554433,ud(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Nt.current,xr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Gt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||bv(t.nodeValue,a)),t||ka(n,!0)}else t=sl(t).createTextNode(s),t[Gt]=n,n.stateNode=t}return nn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=xr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Gt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),t=!1}else a=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(r(558))}return nn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=xr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Gt]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),c=!1}else c=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Mc(n,n.updateQueue),nn(n),null);case 4:return b(),t===null&&Xd(n.stateNode.containerInfo),n.flags|=67108864,nn(n),null;case 10:return Ea(n.type),nn(n),null;case 19:if(zf(n),s=n.memoizedState,s===null)return nn(n),null;if(c=(n.flags&128)!==0,u=s.rendering,u===null)if(c)Yo(s,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=oc(t),u!==null){for(n.flags|=128,Yo(s,!1),t=u.updateQueue,n.updateQueue=t,Mc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$m(a,t),a=a.sibling;return ko(n,In.current&1|2),Me&&Sa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&z()>Oc&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304)}else{if(!c)if(t=oc(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Mc(n,t),Yo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!Me)return nn(n),null}else 2*z()-s.renderingStartTime>Oc&&a!==536870912&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=z(),t.sibling=null,u=In.current,u=c?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Me?ko(n,u):(a=u,$t(Pn,n),$t(In,a),kn===null&&(kn=n)),Me&&Sa(n,s.treeForkCount),t}return nn(n),null;case 22:case 23:return di(n),Lf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Mc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ft(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(_n),nn(n),null;case 25:return null;case 30:return n.flags|=33554432,nn(n),null}throw Error(r(156,n.tag))}function VS(t,n){switch(xf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ea(_n),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return zf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return Ea(n.type),null;case 22:case 23:return di(n),Lf(),t!==null&&Ft(Ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ea(_n),null;case 25:return null;default:return null}}function Rg(t,n){switch(xf(n),n.tag){case 3:Ea(_n),b();break;case 26:case 27:case 5:_t(n);break;case 4:b();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:zf(n);break;case 10:Ea(n.type);break;case 22:case 23:di(n),Lf(),t!==null&&Ft(Ns);break;case 24:Ea(_n)}}function Zo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var u=a.create,_=a.inst;s=u(),_.destroy=s}a=a.next}while(a!==c)}}catch(A){qe(n,n.return,A)}}function Ja(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&t)===t){var _=s.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var H=a,it=A;try{it()}catch(mt){qe(c,H,mt)}}}s=s.next}while(s!==u)}}catch(mt){qe(n,n.return,mt)}}function Cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{v0(n,a)}catch(s){qe(t,t.return,s)}}}function wg(t,n,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){qe(t,n,s)}}function $i(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,u=_a(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=Pv(u)),s=c.ref;break;case 7:if(t.stateNode===null){var _=new vi(t);m(t.child,!1,U1,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){qe(t,n,A)}}function Bn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){qe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){qe(t,n,c)}else a.current=null}function Ec(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Vv(t.stateNode,n[a])}function Dg(t){for(var n=t.return;n!==null&&(dd(n)&&Vv(t.stateNode,n.stateNode),!fd(n));)n=n.return}function Ko(t){for(var n=t.return;n!==null&&(dd(n)&&L1(t.stateNode,n.stateNode),!fd(n));)n=n.return}function fd(t){return t.tag===5||t.tag===3||t.tag===27}function dd(t){return t&&t.tag===7&&t.stateNode!==null}function hd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){qe(t,t.return,c)}}function pd(t,n,a){try{var s=t.stateNode;p1(s,t.type,a,n),s[ae]=n}catch(c){qe(t,t.return,c)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ss(t.type)||t.tag===4}function md(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ss(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki)),Ec(t,s),Ie=!0;else if(c!==4&&(c===27&&(Ec(t,s),s=null,ss(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(gd(t,n,a,s),t=t.sibling;t!==null;)gd(t,n,a,s),t=t.sibling}function Tc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ec(t,s),Ie=!0;else if(c!==4&&(c===27&&(Ec(t,s),s=null,ss(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Tc(t,n,a,s),t=t.sibling;t!==null;)Tc(t,n,a,s),t=t.sibling}function Ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Fn(n,s,a),n[Gt]=t,n[ae]=a}catch(u){qe(t,t.return,u)}}var bc=!1,hi=null;function Lg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(bc=!0)}var ta=null;function Og(){var t=ta;return ta=null,t}var ni=0;function Rr(t,n,a,s,c){return ni=0,zg(t.child,n,a,s,c)}function zg(t,n,a,s,c){for(var u=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var A=$d(_);s.push(A),A.view&&(u=!0)}else u||$d(_).view&&(u=!0);bc=!0,Ov(_,ni===0?n:n+"_"+ni,a),ni++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||zg(t.child,n,a,s,c)&&(u=!0));t=t.sibling}return u}function ea(t,n){for(;t!==null;)t.tag===5?zv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ea(t.child,n)),t=t.sibling}function Ac(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ac(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(Rr(t,a,n,null,!1)||ea(t.child,!1))}t=t.sibling}}function vd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=_a(s,a),u=xa(s.default,a.paired?s.share:s.enter);u!=="none"?Rr(t,c,u,null,!1)?(Ac(t),a.paired||n||zr(t,s.onEnter)):ea(t.child,!1):Ac(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)vd(t,n),t=t.sibling;else Ac(t)}function _d(t){if(hi!==null&&hi.size!==0){var n=hi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var u=xa(a.default,a.share);if(u!=="none"&&(Rr(t,s,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,zr(t,a.onShare)):ea(t.child,!1)),n.delete(s),n.size===0)break}}}_d(t)}t=t.sibling}}}function xd(t){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode),s=hi!==null?hi.get(a):void 0,c=xa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Rr(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,hi.delete(a),zr(t,n.onShare)):zr(t,n.onExit):ea(t.child,!1)),hi!==null&&_d(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xd(t),t=t.sibling;else hi!==null&&_d(t)}function Pg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode);n=xa(n.default,n.update),t.flags&=-5,n!=="none"&&Rr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Pg(t);t=t.sibling}}function yd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ea(t.child,!1))}yd(t)}t=t.sibling}}function Rc(t){if(t.tag===30)t.stateNode.paired=null,ea(t.child,!1),yd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rc(t),t=t.sibling;else yd(t)}function Ig(t){for(t=t.child;t!==null;)t.tag===30?ea(t.child,!1):(t.subtreeFlags&33554432)!==0&&Ig(t),t=t.sibling}function Sd(t,n,a,s,c,u,_){for(var A=!1;n!==null;){if(n.tag===5){var H=n.stateNode;if(u!==null&&ni<u.length){var it=u[ni],mt=$d(H);(it.view||mt.view)&&(A=!0);var Tt;if(Tt=(t.flags&4)===0)if(mt.clip)Tt=!0;else{Tt=it.rect;var $=mt.rect;Tt=Tt.y!==$.y||Tt.x!==$.x||Tt.height!==$.height||Tt.width!==$.width}Tt&&(t.flags|=4),mt.abs?mt=!it.abs:(it=it.rect,mt=mt.rect,mt=it.height!==mt.height||it.width!==mt.width),mt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Ov(H,ni===0?a:a+"_"+ni,c),A&&(t.flags&4)!==0||(ta===null&&(ta=[]),ta.push(H,ni===0?s:s+"_"+ni,n.memoizedProps)),ni++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Sd(t,n.child,a,s,c,u,_)&&(A=!0));n=n.sibling}return A}function Bg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=_a(a,s),u=xa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;ni=0,c=Sd(s,A,c,c,u,_,!1),(t.flags&4)!==0&&c&&zr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Bg(t);t=t.sibling}}var Dn=!1,je=!1,na=!1,Md=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,Nn=null,ia=!1,Qo=!1,Cc=!1,Ed=!1;function kS(t,n,a){if(t=t.containerInfo,Yd=Xr,t=km(t),cf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var u=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var A=0,H=-1,it=-1,mt=0,Tt=0,$=t,ut=null;e:for(;;){for(var jt;$!==s||u!==0&&$.nodeType!==3||(H=A+u),$!==_||c!==0&&$.nodeType!==3||(it=A+c),$.nodeType===3&&(A+=$.nodeValue.length),(jt=$.firstChild)!==null;)ut=$,$=jt;for(;;){if($===t)break e;if(ut===s&&++mt===u&&(H=A),ut===_&&++Tt===c&&(it=A),(jt=$.nextSibling)!==null)break;$=ut,ut=$.parentNode}$=jt}s=H===-1||it===-1?null:{start:H,end:it}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zd={focusedElem:t,selectionRange:s},Xr=!1,a=(a&335544064)===a,Nn=n,n=a?9270:1024;Nn!==null;){if(t=Nn,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&xd(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&Lg(t),wc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&xd(s),wc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Lg(t),wc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Nn=s):(a&&Pg(t),wc(a))}}hi=null}function wc(t){for(;Nn!==null;){var n=Nn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var _=Ps(n.type,c);a=u.getSnapshotBeforeUpdate(_,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(A){qe(n,n.return,A)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)nh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":nh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=_a(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=xa(c.default,c.update),c!=="none"&&Rr(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Nn=s;break}Nn=n.return}}function Hg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),s&4&&Zo(5,a);break;case 1:if(aa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){qe(a,a.return,_)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){qe(a,a.return,_)}}s&64&&Cg(a),s&512&&$i(a,a.return);break;case 3:if(aa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{v0(t,n)}catch(_){qe(a,a.return,_)}}break;case 27:n===null&&s&4&&Ug(a);case 26:case 5:aa(t,a),n===null&&s&4&&hd(a),s&512&&$i(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),s&4&&jg(t,a);break;case 13:aa(t,a),s&4&&Xg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=e1.bind(null,a),P1(t,a))));break;case 22:if(s=a.memoizedState!==null||Dn,!s){var u=n!==null&&n.memoizedState!==null||je;n=Dn,c=je,Dn=s,(je=u)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Gi(t,a,s)):aa(t,a),Dn=n,je=c}break;case 30:aa(t,a),s&512&&$i(a,a.return);break;case 7:s&512&&$i(a,a.return);default:aa(t,a)}}function Td(t,n){for(t=t.child;t!==null;)Gg(t,n),t=t.sibling}function Gg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,_=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(H){qe(t,t.return,H)}bd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ie=!0}catch(H){qe(t,t.return,H)}break;case 18:try{var A=t.stateNode;n?Lv(A,!0):Lv(t.stateNode,!1)}catch(H){qe(t,t.return,H)}break;case 22:case 23:t.memoizedState===null&&Td(t,n);break;default:Td(t,n)}}function bd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Gg(a,s);break t;case 22:a.memoizedState===null&&bd(a,s);break t;default:bd(a,s)}}t=t.sibling}}function Vg(t){var n=t.alternate;n!==null&&(t.alternate=null,Vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&de(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,ii=!1;function Fi(t,n,a){for(a=a.child;a!==null;)kg(t,n,a),a=a.sibling}function kg(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:je||Bn(a,n),Fi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!je&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||Bn(a,n),Ko(a);var s=ln,c=ii;ss(a.type)&&(ln=a.stateNode,ii=!1),Fi(t,n,a),Wv(a.stateNode,a.type,a.memoizedProps),ln=s,ii=c;break;case 5:je||Bn(a,n),Ko(a);case 6:if(a.tag===6&&Ko(a),s=ln,c=ii,ln=null,Fi(t,n,a),ln=s,ii=c,ln!==null)if(ii)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode),Ie=!0}catch(u){qe(a,n,u)}else try{ln.removeChild(a.stateNode),Ie=!0}catch(u){qe(a,n,u)}break;case 18:ln!==null&&(ii?(t=ln,Uv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qr(t)):Uv(ln,a.stateNode));break;case 4:s=ln,c=ii,ln=a.stateNode.containerInfo,ii=!0,Fi(t,n,a),ln=s,ii=c;break;case 0:case 11:case 14:case 15:Ja(2,a,n),je||Ja(4,a,n),Fi(t,n,a);break;case 1:je||(Bn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&wg(a,n,s)),Fi(t,n,a);break;case 21:Fi(t,n,a);break;case 22:je=(s=je)||a.memoizedState!==null,Fi(t,n,a),je=s;break;case 30:Bn(a,n),Fi(t,n,a);break;case 7:je||Bn(a,n),Fi(t,n,a);break;default:Fi(t,n,a)}}function jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(a){qe(n,n.return,a)}}}function Xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(a){qe(n,n.return,a)}}function jS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Fg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Fg),n;default:throw Error(r(435,t.tag))}}function Dc(t,n){var a=jS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=n1.bind(null,t,s);s.then(c,c)}})}function Zn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var u=s[c],_=t,A=n,H=A;t:for(;H!==null;){switch(H.tag){case 27:if(ss(H.type)){ln=H.stateNode,ii=!1;break t}break;case 5:ln=H.stateNode,ii=!1;break t;case 3:case 4:ln=H.stateNode.containerInfo,ii=!0;break t}H=H.return}if(ln===null)throw Error(r(160));kg(_,A,u),ln=null,ii=!1,_=u.alternate,_!==null&&(_.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qg(n,t,a),n=n.sibling}var Hi=null;function qg(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var _=s[u];_.ref.impl=_.nextImpl}Zn(n,t,a),Kn(t),c&4&&(Ja(3,t,t.return),Zo(3,t),Ja(5,t,t.return));break;case 1:Zn(n,t,a),Kn(t),c&512&&(je||s===null||Bn(s,s.return)),c&64&&Dn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Hi,Zn(n,t,a),Kn(t),c&512&&(je||s===null||Bn(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Dn)t.stateNode=wv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Fe]||s[Gt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Fn(s,n,a),s[Gt]=t,Pe(s),n=s;break t;case"link":if(u=$v("link","href",c).get(n+(a.href||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(_,1);break e}}s=c.createElement(n),Fn(s,n,a),c.head.appendChild(s);break;case"meta":if(u=$v("meta","content",c).get(n+(a.content||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(_,1);break e}}s=c.createElement(n),Fn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[Gt]=t,Pe(s),n=s}t.stateNode=n}else Dn||ch(u,t.type,t.stateNode);else t.stateNode=Jv(u,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||je||n.parentNode.removeChild(n)):c.count--,a===null?Dn||ch(u,t.type,t.stateNode):Jv(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&pd(t,t.memoizedProps,s.memoizedProps);break;case 27:Zn(n,t,a),Kn(t),c&512&&(je||s===null||Bn(s,s.return)),s!==null&&c&4&&pd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=na,na=!1,Zn(n,t,a),na=u,Kn(t),c&512&&(je||s===null||Bn(s,s.return)),t.flags&32){n=t.stateNode;try{cr(n,""),Ie=!0}catch(mt){qe(t,t.return,mt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,pd(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Md=!0);break;case 6:if(Zn(n,t,a),Kn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ie=!0}catch(mt){qe(t,t.return,mt)}}break;case 3:if(Ie=!1,Xc=null,u=Hi,Hi=rl(n.containerInfo),Zn(n,t,a),Hi=u,Kn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(mt){qe(t,t.return,mt)}Md&&(Md=!1,Wg(t)),Ie=!1;break;case 4:c=na,na=Dn,s=hm(),u=Hi,Hi=rl(t.stateNode.containerInfo),Zn(n,t,a),Kn(t),Hi=u,Ie&&Qo&&(Cc=!0),Ie=s,na=c;break;case 12:Zn(n,t,a),Kn(t);break;case 31:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 13:Zn(n,t,a),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Lc=z()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 22:u=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var A=Dn,H=je,it=na;Dn=A||u,na=it||u,je=H||_,Zn(n,t,a),je=H,na=it,Dn=A,Kn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||_||Dn||je||(n=_||je,a=Dn,s=je,Dn=u||Dn,je=n,$a(t,2),Dn=a,je=s),!u&&na||Td(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Dc(t,a))));break;case 19:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 30:c&512&&(je||s===null||Bn(s,s.return)),c=hm(),u=Qo,_=(a&335544064)===a,A=t.memoizedProps,Qo=_&&xa(A.default,A.update)!=="none",Zn(n,t,a),Kn(t),_&&s!==null&&Ie&&(t.flags|=4),Qo=u,Ie=c;break;case 21:break;case 7:c&512&&(je||s===null||Bn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Zn(n,t,a),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Ng(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(dd(c)){var u=c.stateNode;s===null?s=[u]:s.push(u)}if(fd(c))break;c=c.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,H=md(t);Tc(t,H,A,_);break;case 5:var it=a.stateNode;a.flags&32&&(cr(it,""),a.flags&=-33);var mt=md(t);Tc(t,mt,it,_);break;case 3:case 4:var Tt=a.stateNode.containerInfo,$=md(t);gd(t,$,Tt,_);break;default:throw Error(r(161))}}catch(ut){qe(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Wg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xr=!0,n.reset(),Xr=!1),t=t.sibling}}function Cr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Yg(n,t),n=n.sibling;else Bg(n)}function Yg(t,n){var a=t.alternate;if(a===null)vd(t,!1);else switch(t.tag){case 3:if(Ed=ia=!1,Og(),Cr(n,t),!ia&&!Cc){if(t=ta,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];zv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ed=!0}ta=null;break;case 5:Cr(n,t);break;case 4:s=ia,ia=!1,Cr(n,t),ia&&(Cc=!0),ia=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?vd(t,!1):Cr(n,t));break;case 30:s=ia,c=Og(),ia=!1,Cr(n,t),ia&&(t.flags|=4);var u=t.memoizedProps,_=t.stateNode;n=_a(u,_),_=_a(a.memoizedProps,_);var A=xa(u.default,u.update);A==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,ni=0,n=Sd(t,a,n,_,A,u,!0),ni!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(zr(t,t.memoizedProps.onUpdate),ta=c):c!==null&&(c.push.apply(c,ta),ta=c),ia=(t.flags&32)!==0?!0:s;break;default:Cr(n,t)}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(t,n.alternate,n),n=n.sibling}function $a(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),$a(a,s);break;case 1:Bn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&wg(a,a.return,c),$a(a,s);break;case 27:(s&2)!==0&&Wv(a.stateNode,a.type,a.memoizedProps);case 5:Bn(a,a.return),a.tag!==5&&a.tag!==27||Ko(a),$a(a,s);break;case 6:Ko(a);break;case 26:Bn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||je||c.parentNode.removeChild(c),$a(a,s);break;case 22:a.memoizedState===null&&$a(a,s);break;case 30:Bn(a,a.return),$a(a,s);break;case 7:Bn(a,a.return);default:$a(a,s)}t=t.sibling}}function Gi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,u=n,_=u.flags,A=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Gi(c,u,a),Zo(4,u);break;case 1:if(Gi(c,u,a),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(mt){qe(s,s.return,mt)}if(s=u,c=s.updateQueue,c!==null){var H=s.stateNode;try{var it=c.shared.hiddenCallbacks;if(it!==null)for(c.shared.hiddenCallbacks=null,c=0;c<it.length;c++)g0(it[c],H)}catch(mt){qe(s,s.return,mt)}}A&&_&64&&Cg(u),$i(u,u.return);break;case 27:(a&2)!==0&&Ug(u);case 5:u.tag!==5&&u.tag!==27||Dg(u),Gi(c,u,a),A&&s===null&&_&4&&hd(u),$i(u,u.return);break;case 6:Dg(u);break;case 26:H=u.stateNode,u.memoizedState!==null||H===null||Dn||ch(rl(H.ownerDocument),u.type,H),Gi(c,u,a),A&&s===null&&_&4&&hd(u),$i(u,u.return);break;case 12:Gi(c,u,a);break;case 31:Gi(c,u,a),A&&_&4&&jg(c,u);break;case 13:Gi(c,u,a),A&&_&4&&Xg(c,u);break;case 22:u.memoizedState===null&&Gi(c,u,a),$i(u,u.return);break;case 30:Gi(c,u,a),$i(u,u.return);break;case 7:$i(u,u.return);default:Gi(c,u,a)}n=n.sibling}}function Ad(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Po(a))}function Rd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t))}function Ni(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Zg(t,n,a,s),n=n.sibling;else c&&Ig(n)}function Zg(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Rc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,s),u&2048&&Zo(9,n);break;case 1:Ni(t,n,a,s);break;case 3:Ni(t,n,a,s),c&&Ed&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Po(u)));break;case 12:if(u&2048){Ni(t,n,a,s),u=n.stateNode;try{var _=n.memoizedProps,A=_.id,H=_.onPostCommit;typeof H=="function"&&H(A,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(it){qe(n,n.return,it)}}else Ni(t,n,a,s);break;case 31:Ni(t,n,a,s);break;case 13:Ni(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(c&&A!==null&&A.memoizedState===null&&Rc(A),_._visibility&2?Ni(t,n,a,s):Jo(t,n)):(c&&A!==null&&A.memoizedState!==null&&Rc(n),_._visibility&2?Ni(t,n,a,s):(_._visibility|=2,wr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Ad(A,n);break;case 24:Ni(t,n,a,s),u&2048&&Rd(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(ea(u.child,!0),ea(n.child,!0))),Ni(t,n,a,s);break;default:Ni(t,n,a,s)}}function wr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,_=n,A=a,H=s,it=_.flags;switch(_.tag){case 0:case 11:case 15:wr(u,_,A,H,c),Zo(8,_);break;case 23:break;case 22:var mt=_.stateNode;_.memoizedState!==null?mt._visibility&2?wr(u,_,A,H,c):Jo(u,_):(mt._visibility|=2,wr(u,_,A,H,c)),c&&it&2048&&Ad(_.alternate,_);break;case 24:wr(u,_,A,H,c),c&&it&2048&&Rd(_.alternate,_);break;default:wr(u,_,A,H,c)}n=n.sibling}}function Jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Jo(a,s),c&2048&&Ad(s.alternate,s);break;case 24:Jo(a,s),c&2048&&Rd(s.alternate,s);break;default:Jo(a,s)}n=n.sibling}}var Is=8192;function Bs(t,n,a){if(t.subtreeFlags&Is)for(t=t.child;t!==null;)Kg(t,n,a),t=t.sibling}function Kg(t,n,a){switch(t.tag){case 26:Bs(t,n,a),t.flags&Is&&(t.memoizedState!==null?K1(a,Hi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&i_(a,t)));break;case 5:Bs(t,n,a),t.flags&Is&&(t=t.stateNode,(n&335544128)===n&&i_(a,t));break;case 3:case 4:var s=Hi;Hi=rl(t.stateNode.containerInfo),Bs(t,n,a),Hi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Is,Is=16777216,Bs(t,n,a),Is=s):Bs(t,n,a));break;case 30:if((t.flags&Is)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,hi===null&&(hi=new Map),hi.set(s,c)}Bs(t,n,a);break;default:Bs(t,n,a)}}function Qg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Nn=s,$g(s,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:$o(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:$o(t);break;case 12:$o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nc(t)):$o(t);break;default:$o(t)}}function Nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Nn=s,$g(s,t)}Qg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),Nc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nc(n));break;default:Nc(n)}t=t.sibling}}function $g(t,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Po(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Nn=s;else t:for(a=t;Nn!==null;){s=Nn;var c=s.sibling,u=s.return;if(Vg(s),s===a){Nn=null;break t}if(c!==null){c.return=u,Nn=c;break t}Nn=u}}}var XS={getCacheForType:function(t){var n=zn(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return zn(_n).controller.signal}},qS=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Je=null,Ae=null,De=0,Xe=0,pi=null,ts=!1,Dr=!1,Cd=!1,Ca=0,dn=0,es=0,Fs=0,Uc=0,mi=0,Nr=0,tl=null,ai=null,wd=!1,Lc=0,tv=0,Oc=1/0,zc=null,ns=null,cn=0,Vi=null,Hs=null,sa=0,Dd=0,Nd=null,ev=null,Ur=null,Lr=null,Or=null,el=0,Pc=null;function gi(){return(Ge&2)!==0&&De!==0?De&-De:Ut.T!==null?Gd():It()}function nv(){if(mi===0)if((De&536870912)===0||Me){var t=rn;rn<<=1,(rn&3932160)===0&&(rn=262144),mi=t}else mi=536870912;return t=Pn.current,t!==null&&(t.flags|=32),mi}function zr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Pv(_a(t.memoizedProps,a))),Lr===null&&(Lr=[]),Lr.push(n.bind(null,s))}}function si(t,n,a){(t===Je&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Pr(t,0),is(t,De,mi,!1)),Qe(t,a),((Ge&2)===0||t!==Je)&&(t===Je&&((Ge&2)===0&&(Fs|=a),dn===4&&is(t,De,mi,!1)),ra(t))}function iv(t,n,a){if((Ge&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||oi(t,n),c=s?ZS(t,n):Ld(t,n,!0),u=s;do{if(c===0){Dr&&!s&&is(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!WS(a)){c=Ld(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;c=tl;var H=A.current.memoizedState.isDehydrated;if(H&&(Pr(A,_).flags|=256),_=Ld(A,_,!1),_!==2&&_!==6){if(Cd&&!H){A.errorRecoveryDisabledLanes|=u,Fs|=u,c=4;break t}u=ai,ai=c,u!==null&&(ai===null?ai=u:ai.push.apply(ai,u))}c=_}if(u=!1,c!==2)continue}}if(c===1){Pr(t,0),is(t,n,0,!0);break}t:{switch(s=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:is(s,n,mi,!ts);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Lc+300-z(),10<c)){if(is(s,n,mi,!ts),En(s,0,!0)!==0)break t;sa=n,s.timeoutHandle=Jd(av.bind(null,s,a,ai,zc,wd,n,mi,Fs,Nr,ts,u,"Throttled",-0,0),c);break t}av(s,a,ai,zc,wd,n,mi,Fs,Nr,ts,u,null,-0,0)}}break}while(!0);ra(t)}function av(t,n,a,s,c,u,_,A,H,it,mt,Tt,$,ut){t.timeoutHandle=-1;var jt=n.subtreeFlags,se=(u&335544064)===u;if(Tt=null,(se||jt&8192||(jt&16785408)===16785408)&&(Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},hi=null,Kg(n,u,Tt),se&&(jt=Tt,se=t.containerInfo,se=(se.nodeType===9?se:se.ownerDocument).__reactViewTransition,se!=null&&(jt.count++,jt.waitingForViewTransition=!0,jt=cl.bind(jt),se.finished.then(jt,jt))),jt=(u&62914560)===u?Lc-z():(u&4194048)===u?tv-z():0,jt=Q1(Tt,jt),jt!==null)){sa=u,t.cancelPendingCommit=jt(dv.bind(null,t,n,u,a,s,c,_,A,H,it,mt,Tt,null,$,ut)),is(t,u,_,!it);return}dv(t,n,u,a,s,c,_,A,H,it,mt,Tt)}function WS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],u=c.getSnapshot;c=c.value;try{if(!fi(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function is(t,n,a,s){n=ma(t,n),n&=~Uc,n&=~Fs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var u=31-$e(c),_=1<<u;s[u]=-1,c&=~_}a!==0&&N(t,a,n)}function Ic(){return(Ge&6)===0?(nl(0),!1):!0}function Ud(){if(Ae!==null){if(Xe===0)var t=Ae.return;else t=Ae,Ma=Rs=null,Hf(t),Mr=null,Fo=0,t=Ae;for(;t!==null;)Rg(t.alternate,t),t=t.return;Ae=null}}function Pr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,v1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Ud(),Je=t,Ae=a=ya(t.current,null),De=n,Xe=0,pi=null,ts=!1,Dr=oi(t,n),Cd=!1,Nr=mi=Uc=Fs=es=dn=0,ai=tl=null,wd=!1,Ca=ma(t,n),Xl(),a}function sv(t,n){ve=null,Ut.H=gc,n===Sr||n===nc?(n=d0(),Xe=3):n===Rf?(n=d0(),Xe=4):Xe=n===ed?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Ae===null&&(dn=1,vc(t,Ri(n,t.current)))}function rv(){var t=Pn.current;return t===null?!0:(De&4194048)===De?kn===null:(De&62914560)===De||(De&536870912)!==0?t===kn:!1}function ov(){var t=Ut.H;return Ut.H=gc,t===null?gc:t}function lv(){var t=Ut.A;return Ut.A=XS,t}function Bc(){dn=4,ts||(De&4194048)!==De&&Pn.current!==null||(Dr=!0),(es&134217727)===0&&(Fs&134217727)===0||Je===null||is(Je,De,mi,!1)}function Ld(t,n,a){var s=Ge;Ge|=2;var c=ov(),u=lv();(Je!==t||De!==n)&&(zc=null,Pr(t,n)),n=!1;var _=dn;t:do try{if(Xe!==0&&Ae!==null){var A=Ae,H=pi;switch(Xe){case 8:Ud(),_=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(n=!0);var it=Xe;if(Xe=0,pi=null,Ir(t,A,H,it),a&&Dr){_=0;break t}break;default:it=Xe,Xe=0,pi=null,Ir(t,A,H,it)}}YS(),_=dn;break}catch(mt){sv(t,mt)}while(!0);return n&&t.shellSuspendCounter++,Ma=Rs=null,Ge=s,Ut.H=c,Ut.A=u,Ae===null&&(Je=null,De=0,Xl()),_}function YS(){for(;Ae!==null;)cv(Ae)}function ZS(t,n){var a=Ge;Ge|=2;var s=ov(),c=lv();Je!==t||De!==n?(zc=null,Oc=z()+500,Pr(t,n)):Dr=oi(t,n);t:do try{if(Xe!==0&&Ae!==null){n=Ae;var u=pi;e:switch(Xe){case 1:Xe=0,pi=null,Ir(t,n,u,1);break;case 2:case 9:if(u0(u)){Xe=0,pi=null,uv(n);break}n=function(){Xe!==2&&Xe!==9||Je!==t||(Xe=7),ra(t)},u.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:u0(u)?(Xe=0,pi=null,uv(n)):(Xe=0,pi=null,Ir(t,n,u,7));break;case 5:var _=null;switch(Ae.tag){case 26:_=Ae.memoizedState;case 5:case 27:var A=Ae;if(_?e_(_):A.stateNode.complete){Xe=0,pi=null;var H=A.sibling;if(H!==null)Ae=H;else{var it=A.return;it!==null?(Ae=it,Fc(it)):Ae=null}break e}}Xe=0,pi=null,Ir(t,n,u,5);break;case 6:Xe=0,pi=null,Ir(t,n,u,6);break;case 8:Ud(),dn=6;break t;default:throw Error(r(462))}}KS();break}catch(mt){sv(t,mt)}while(!0);return Ma=Rs=null,Ut.H=s,Ut.A=c,Ge=a,Ae!==null?0:(Je=null,De=0,Xl(),dn)}function KS(){for(;Ae!==null&&!q();)cv(Ae)}function cv(t){var n=bg(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,n===null?Fc(t):Ae=n}function uv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_g(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=_g(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:Hf(n);var s=n;s===wn&&(Me?(Ql(s),s.tag===5&&s.stateNode!=null&&(en=s.stateNode)):(Ql(s),Me=!0));default:Rg(a,n),n=Ae=$m(n,Ca),n=bg(a,n,Ca)}t.memoizedProps=t.pendingProps,n===null?Fc(t):Ae=n}function Ir(t,n,a,s){Ma=Rs=null,Hf(n),Mr=null,Fo=0;var c=n.return;try{if(IS(t,c,n,a,De)){dn=1,vc(t,Ri(a,t.current)),Ae=null;return}}catch(u){if(c!==null)throw Ae=c,u;dn=1,vc(t,Ri(a,t.current)),Ae=null;return}n.flags&32768?(Me||s===1?t=!0:Dr||(De&536870912)!==0?t=!1:(ts=t=!0,(s===2||s===9||s===3||s===6)&&(s=Pn.current,s!==null&&s.tag===13&&(s.flags|=16384))),fv(n,t)):Fc(n)}function Fc(t){var n=t;do{if((n.flags&32768)!==0){fv(n,ts);return}t=n.return;var a=GS(n.alternate,n,Ca);if(a!==null){Ae=a;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=t}while(n!==null);dn===0&&(dn=5)}function fv(t,n){do{var a=VS(t.alternate,t);if(a!==null){a.flags&=32767,Ae=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ae=t;return}Ae=t=a}while(t!==null);dn=6,Ae=null}function dv(t,n,a,s,c,u,_,A,H,it,mt,Tt){t.cancelPendingCommit=null;do Hc();while(cn!==0);if((Ge&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Je&&(Ae=Je=null,De=0),Hs=n,Vi=t,sa=a,Nd=c,ev=s,QS(t,n,a,_,A,H,Tt)}}function QS(t,n,a,s,c,u,_){var A=n.lanes|n.childLanes;if(Dd=A,A|=pf,li(t,a,A,s,c,u),Lr=null,(a&335544064)===a?(Or=bS(t),s=10262):(Or=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,i1(xt,function(){return Id(),null})):(t.callbackNode=null,t.callbackPriority=0),bc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Ut.T,Ut.T=null,c=Wt.p,Wt.p=2,u=Ge,Ge|=4;try{kS(t,n,a)}finally{Ge=u,Wt.p=c,Ut.T=s}}cn=1,bc?Ur=E1(_,t.containerInfo,Or,Od,zd,$S,Pd,Id,JS):(Od(),zd(),Pd())}function JS(t){if(cn!==0){var n=Vi.onRecoverableError;n(t,{componentStack:null})}}function $S(){cn===3&&(cn=0,Yg(Hs,Vi),cn=4)}function Od(){if(cn===1){cn=0;var t=Vi,n=Hs,a=sa,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Ut.T,Ut.T=null;var c=Wt.p;Wt.p=2;var u=Ge;Ge|=4;try{Qo=Cc=!1,qg(n,t,a),a=Zd;var _=km(t.containerInfo),A=a.focusedElem,H=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&Vm(A.ownerDocument.documentElement,A)){if(H!==null&&cf(A)){var it=H.start,mt=H.end;if(mt===void 0&&(mt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(mt,A.value.length);else{var Tt=A.ownerDocument||document,$=Tt&&Tt.defaultView||window;if($.getSelection){var ut=$.getSelection(),jt=A.textContent.length,se=Math.min(H.start,jt),_e=H.end===void 0?se:Math.min(H.end,jt);!ut.extend&&se>_e&&(_=_e,_e=se,se=_);var tt=Gm(A,se),Y=Gm(A,_e);if(tt&&Y&&(ut.rangeCount!==1||ut.anchorNode!==tt.node||ut.anchorOffset!==tt.offset||ut.focusNode!==Y.node||ut.focusOffset!==Y.offset)){var ot=Tt.createRange();ot.setStart(tt.node,tt.offset),ut.removeAllRanges(),se>_e?(ut.addRange(ot),ut.extend(Y.node,Y.offset)):(ot.setEnd(Y.node,Y.offset),ut.addRange(ot))}}}}for(Tt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&Tt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Tt.length;A++){var Et=Tt[A];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Xr=!!Yd,Zd=Yd=null}finally{Ge=u,Wt.p=c,Ut.T=s}}t.current=n,cn=2}}function zd(){if(cn===2){cn=0;var t=Vi,n=Hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Ut.T,Ut.T=null;var s=Wt.p;Wt.p=2;var c=Ge;Ge|=4;try{Hg(t,n.alternate,n)}finally{Ge=c,Wt.p=s,Ut.T=a}}cn=3}}function Pd(){if(cn===4||cn===3){cn=0;var t=Ur;Ur=null,bt();var n=Vi,a=Hs,s=sa,c=ev,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?cn=5:(cn=0,Hs=Vi=null,hv(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(ns=null),at(s),a=a.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(ce,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Ut.T,u=Wt.p,Wt.p=2,Ut.T=null;try{for(var _=n.onRecoverableError,A=0;A<c.length;A++){var H=c[A];_(H.value,{componentStack:H.stack})}}finally{Ut.T=a,Wt.p=u}}if(c=Lr,_=Or,Or=null,c!==null&&(Lr=null,_===null&&(_=[]),t!==null))for(H=0;H<c.length;H++)a=(0,c[H])(_),a!==void 0&&t.finished.finally(a);(sa&3)!==0&&Hc(),ra(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Pc?el++:(el=0,Pc=n):(el=0,Pc=null),nl(0)}}function hv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Po(n)))}function Hc(){return Ur!==null&&(Ur.skipTransition(),Ur=null),Od(),zd(),Pd(),Id()}function Id(){if(cn!==5)return!1;var t=Vi,n=Dd;Dd=0;var a=at(sa),s=Ut.T,c=Wt.p;try{Wt.p=32>a?32:a,Ut.T=null,a=Nd,Nd=null;var u=Vi,_=sa;if(cn=0,Hs=Vi=null,sa=0,(Ge&6)!==0)throw Error(r(331));var A=Ge;if(Ge|=4,Jg(u.current),Zg(u,u.current,_,a),Ge=A,nl(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(ce,u)}catch{}return!0}finally{Wt.p=c,Ut.T=s,hv(t,n)}}function pv(t,n,a){n=Ri(a,n),n=td(t.stateNode,n,2),t=Ya(t,n,2),t!==null&&(Qe(t,2),ra(t))}function qe(t,n,a){if(t.tag===3)pv(t,t,a);else for(;n!==null;){if(n.tag===3){pv(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ns===null||!ns.has(s))){t=Ri(a,t),a=ug(2),s=Ya(n,a,2),s!==null&&(fg(a,s,n,t),Qe(s,2),ra(s));break}}n=n.return}}function Bd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new qS;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Cd=!0,c.add(a),t=t1.bind(null,t,n,a),n.then(t,t))}function t1(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Je===t&&(De&a)===a&&((dn===4||dn===3&&(De&62914560)===De&&300>z()-Lc)&&(Ge&2)===0?Pr(t,0):Uc|=a,Nr===De&&(Nr=0)),ra(t)}function mv(t,n){n===0&&(n=rr()),t=Ts(t,n),t!==null&&(Qe(t,n),ra(t))}function e1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),mv(t,a)}function n1(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),mv(t,a)}function i1(t,n){return le(t,n)}var Br=null,Fr=null,Fd=!1,Gc=!1,Hd=!1,as=0;function ra(t){t!==Fr&&t.next===null&&(Fr===null?Br=Fr=t:Fr=Fr.next=t),Gc=!0,Fd||(Fd=!0,s1())}function nl(t,n){if(!Hd&&Gc){Hd=!0;do for(var a=!1,s=Br;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var _=s.suspendedLanes,A=s.pingedLanes;u=(1<<31-$e(42|t)+1)-1,u&=c&~(_&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,xv(s,u))}else u=De,u=En(s,s===Je?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||oi(s,u)||(a=!0,xv(s,u));s=s.next}while(a);Hd=!1}}function a1(){gv()}function gv(){Gc=Fd=!1;var t=0;as!==0&&g1()&&(t=as);for(var n=z(),a=null,s=Br;s!==null;){var c=s.next,u=vv(s,n);u===0?(s.next=null,a===null?Br=c:a.next=c,c===null&&(Fr=a)):(a=s,(t!==0||(u&3)!==0)&&(Gc=!0)),s=c}cn!==0&&cn!==5||nl(t),as!==0&&(as=0)}function vv(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var _=31-$e(u),A=1<<_,H=c[_];H===-1?((A&a)===0||(A&s)!==0)&&(c[_]=Ss(A,n)):H<=n&&(t.expiredLanes|=A),u&=~A}if(n=Je,a=De,a=En(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&X(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||oi(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&X(s),at(a)){case 2:case 8:a=j;break;case 32:a=xt;break;case 268435456:a=zt;break;default:a=xt}return s=_v.bind(null,t),a=le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&X(s),t.callbackPriority=2,t.callbackNode=null,2}function _v(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hc()&&t.callbackNode!==a)return null;var s=De;return s=En(t,t===Je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(iv(t,s,n),vv(t,z()),t.callbackNode!=null&&t.callbackNode===a?_v.bind(null,t):null)}function xv(t,n){if(Hc())return null;iv(t,n,!0)}function s1(){_1(function(){(Ge&6)!==0?le(Rt,a1):gv()})}function Gd(){if(as===0){var t=Ds;t===0&&(t=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),as=t}return as}function yv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Il(t)}function r1(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var u=yv((c[ae]||null).action),_=s.submitter;_&&(n=(n=_[ae]||null)?yv(n.formAction):_.getAttribute("formAction"),n!==null&&(u=n,_=null));var A=new Gl("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(as!==0){var H=new FormData(c,_);Zf(a,{pending:!0,data:H,method:c.method,action:u},null,H)}}else typeof u=="function"&&(A.preventDefault(),H=new FormData(c,_),Zf(a,{pending:!0,data:H,method:c.method,action:u},u,H))},currentTarget:c}]})}}for(var Vd=0;Vd<hf.length;Vd++){var kd=hf[Vd],o1=kd.toLowerCase(),l1=kd[0].toUpperCase()+kd.slice(1);Bi(o1,"on"+l1)}Bi(qm,"onAnimationEnd"),Bi(Wm,"onAnimationIteration"),Bi(Ym,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(vS,"onTransitionRun"),Bi(_S,"onTransitionStart"),Bi(xS,"onTransitionCancel"),Bi(Zm,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Sv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var _=s.length-1;0<=_;_--){var A=s[_],H=A.instance,it=A.currentTarget;if(A=A.listener,H!==u&&c.isPropagationStopped())break t;u=A,c.currentTarget=it;try{u(c)}catch(mt){jl(mt)}c.currentTarget=null,u=H}else for(_=0;_<s.length;_++){if(A=s[_],H=A.instance,it=A.currentTarget,A=A.listener,H!==u&&c.isPropagationStopped())break t;u=A,c.currentTarget=it;try{u(c)}catch(mt){jl(mt)}c.currentTarget=null,u=H}}}}function Re(t,n){var a=n[fe];a===void 0&&(a=n[fe]=new Set);var s=t+"__bubble";a.has(s)||(Mv(n,t,2,!1),a.add(s))}function jd(t,n,a){var s=0;n&&(s|=4),Mv(a,t,s,n)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Xd(t){if(!t[Vc]){t[Vc]=!0,tn.forEach(function(a){a!=="selectionchange"&&(c1.has(a)||jd(a,!1,t),jd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vc]||(n[Vc]=!0,jd("selectionchange",!1,n))}}function Mv(t,n,a,s){switch(f_(n)){case 2:var c=eM;break;case 8:c=nM;break;default:c=fh}a=c.bind(null,n,a,t),c=void 0,!Ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function qd(t,n,a,s,c){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var A=s.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=s.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=He(A),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){s=u=_;continue t}A=A.parentNode}}s=s.return}Mm(function(){var it=u,mt=Ku(a),Tt=[];t:{var $=Km.get(t);if($!==void 0){var ut=Gl,jt=t;switch(t){case"keypress":if(Fl(a)===0)break t;case"keydown":case"keyup":ut=Wy;break;case"focusin":jt="focus",ut=nf;break;case"focusout":jt="blur",ut=nf;break;case"beforeblur":case"afterblur":ut=nf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Jy;break;case qm:case Wm:case Ym:ut=By;break;case Zm:ut=tS;break;case"scroll":case"scrollend":ut=Ly;break;case"wheel":ut=nS;break;case"copy":case"cut":case"paste":ut=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Rm;break;case"submit":ut=Ky;break;case"toggle":case"beforetoggle":ut=aS}var se=(n&4)!==0,_e=!se&&(t==="scroll"||t==="scrollend"),tt=se?$!==null?$+"Capture":null:$;se=[];for(var Y=it,ot;Y!==null;){var Et=Y;if(ot=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ot===null||tt===null||(Et=bo(Y,tt),Et!=null&&se.push(al(Y,Et,ot))),_e)break;Y=Y.return}0<se.length&&($=new ut($,jt,null,a,mt),Tt.push({event:$,listeners:se}))}}if((n&7)===0){t:{if(ut=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",ut&&a!==Zu&&(jt=a.relatedTarget||a.fromElement)&&(He(jt)||jt[he]))break t;($||ut)&&(jt=mt.window===mt?mt:(ut=mt.ownerDocument)?ut.defaultView||ut.parentWindow:window,$?(ut=a.relatedTarget||a.toElement,$=it,ut=ut?He(ut):null,ut!==null&&(_e=f(ut),se=ut.tag,ut!==_e||se!==5&&se!==27&&se!==6)&&(ut=null)):($=null,ut=it),$!==ut&&(se=bm,Et="onMouseLeave",tt="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(se=Rm,Et="onPointerLeave",tt="onPointerEnter",Y="pointer"),_e=$==null?jt:Tn($),ot=ut==null?jt:Tn(ut),jt=new se(Et,Y+"leave",$,a,mt),jt.target=_e,jt.relatedTarget=ot,Et=null,He(mt)===it&&(se=new se(tt,Y+"enter",ut,a,mt),se.target=ot,se.relatedTarget=_e,Et=se),_e=Et,se=$&&ut?O($,ut,u1):null,$!==null&&Ev(Tt,jt,$,se,!1),ut!==null&&_e!==null&&Ev(Tt,_e,ut,se,!0)))}t:{if($=it?Tn(it):window,ut=$.nodeName&&$.nodeName.toLowerCase(),ut==="select"||ut==="input"&&$.type==="file")var te=zm;else if(Lm($))if(Pm)te=pS;else{te=dS;var Ne=fS}else ut=$.nodeName,!ut||ut.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?it&&Yu(it.elementType)&&(te=zm):te=hS;if(te&&(te=te(t,it))){Om(Tt,te,a,mt);break t}Ne&&Ne(t,$,it)}switch(Ne=it?Tn(it):window,t){case"focusin":(Lm(Ne)||Ne.contentEditable==="true")&&(hr=Ne,uf=it,Lo=null);break;case"focusout":Lo=uf=hr=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,jm(Tt,a,mt);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":jm(Tt,a,mt)}var ue;if(sf)t:{switch(t){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else dr?Nm(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Cm&&a.locale!=="ko"&&(dr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&dr&&(ue=Em()):(Fa=mt,$u="value"in Fa?Fa.value:Fa.textContent,dr=!0)),Ne=kc(it,pe),0<Ne.length&&(pe=new Am(pe,t,null,a,mt),Tt.push({event:pe,listeners:Ne}),ue?pe.data=ue:(ue=Um(a),ue!==null&&(pe.data=ue)))),(ue=rS?oS(t,a):lS(t,a))&&(pe=kc(it,"onBeforeInput"),0<pe.length&&(Ne=new Am("onBeforeInput","beforeinput",null,a,mt),Tt.push({event:Ne,listeners:pe}),Ne.data=ue)),r1(Tt,t,it,a,mt)}Sv(Tt,n)})}function al(t,n,a){return{instance:t,listener:n,currentTarget:a}}function kc(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=bo(t,a),c!=null&&s.unshift(al(t,c,u)),c=bo(t,n),c!=null&&s.push(al(t,c,u))),t.tag===3)return s;t=t.return}return[]}function u1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ev(t,n,a,s,c){for(var u=n._reactName,_=[];a!==null&&a!==s;){var A=a,H=A.alternate,it=A.stateNode;if(A=A.tag,H!==null&&H===s)break;A!==5&&A!==26&&A!==27||it===null||(H=it,c?(it=bo(a,u),it!=null&&_.unshift(al(a,it,H))):c||(it=bo(a,u),it!=null&&_.push(al(a,it,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var f1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function Tv(t){return(typeof t=="string"?t:""+t).replace(f1,`
`).replace(d1,"")}function bv(t,n){return n=Tv(n),Tv(t)===n}function We(t,n,a,s,c,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||cr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&cr(t,""+s);else return;break;case"className":Pl(t,"class",s);break;case"tabIndex":Pl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(t,a,s);break;case"style":ym(t,s,u);return;case"data":if(n!=="object"){Pl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Il(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&We(t,n,"name",c.name,c,null),We(t,n,"formEncType",c.formEncType,c,null),We(t,n,"formMethod",c.formMethod,c,null),We(t,n,"formTarget",c.formTarget,c,null)):(We(t,n,"encType",c.encType,c,null),We(t,n,"method",c.method,c,null),We(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Il(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ki);return;case"onScroll":s!=null&&Re("scroll",t);return;case"onScrollEnd":s!=null&&Re("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Il(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Re("beforetoggle",t),Re("toggle",t),zl(t,"popover",s);break;case"xlinkActuate":ga(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ga(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ga(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ga(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ga(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ga(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ga(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ga(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ga(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":zl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Ny.get(a)||a,zl(t,a,s);else return}Ie=!0}function Wd(t,n,a,s,c,u){switch(a){case"style":ym(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")cr(t,s);else if(typeof s=="number"||typeof s=="bigint")cr(t,""+s);else return;break;case"onScroll":s!=null&&Re("scroll",t);return;case"onScrollEnd":s!=null&&Re("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[ae]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,c);break t}Ie=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):zl(t,a,s)}return}Ie=!0}function Fn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",t),Re("load",t);var s=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var _=a[u];if(_!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:We(t,n,u,_,a,null)}}c&&We(t,n,"srcSet",a.srcSet,a,null),s&&We(t,n,"src",a.src,a,null);return;case"input":Re("invalid",t);var A=u=_=c=null,H=null,it=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":_=mt;break;case"checked":H=mt;break;case"defaultChecked":it=mt;break;case"value":u=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:We(t,n,s,mt,a,null)}}gm(t,u,A,H,it,_,c,!1);return;case"select":Re("invalid",t),s=_=u=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":u=A;break;case"defaultValue":_=A;break;case"multiple":s=A;default:We(t,n,c,A,a,null)}n=u,a=_,t.multiple=!!s,n!=null?lr(t,!!s,n,!1):a!=null&&lr(t,!!s,a,!0);return;case"textarea":Re("invalid",t),u=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":s=A;break;case"defaultValue":c=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:We(t,n,_,A,a,null)}_m(t,s,c,u);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(s=a[H],s!=null))switch(H){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:We(t,n,H,s,a,null)}return;case"dialog":Re("beforetoggle",t),Re("toggle",t),Re("cancel",t),Re("close",t);break;case"iframe":case"object":Re("load",t);break;case"video":case"audio":for(s=0;s<il.length;s++)Re(il[s],t);break;case"image":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"embed":case"source":case"link":Re("error",t),Re("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(s=a[it],s!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:We(t,n,it,s,a,null)}return;default:if(Yu(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&Wd(t,n,mt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&We(t,n,A,s,a,null))}var h1={};function p1(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,_=null,A=null,H=null,it=null,mt=null;for(ut in a){var Tt=a[ut];if(a.hasOwnProperty(ut)&&Tt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=Tt;default:s.hasOwnProperty(ut)||We(t,n,ut,null,s,Tt)}}for(var $ in s){var ut=s[$];if(Tt=a[$],s.hasOwnProperty($)&&(ut!=null||Tt!=null))switch($){case"type":ut!==Tt&&(Ie=!0),u=ut;break;case"name":ut!==Tt&&(Ie=!0),c=ut;break;case"checked":ut!==Tt&&(Ie=!0),it=ut;break;case"defaultChecked":ut!==Tt&&(Ie=!0),mt=ut;break;case"value":ut!==Tt&&(Ie=!0),_=ut;break;case"defaultValue":ut!==Tt&&(Ie=!0),A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==Tt&&We(t,n,$,ut,s,Tt)}}qu(t,_,A,H,it,mt,u,c);return;case"select":ut=_=A=$=null;for(u in a)if(H=a[u],a.hasOwnProperty(u)&&H!=null)switch(u){case"value":break;case"multiple":ut=H;default:s.hasOwnProperty(u)||We(t,n,u,null,s,H)}for(c in s)if(u=s[c],H=a[c],s.hasOwnProperty(c)&&(u!=null||H!=null))switch(c){case"value":u!==H&&(Ie=!0),$=u;break;case"defaultValue":u!==H&&(Ie=!0),A=u;break;case"multiple":u!==H&&(Ie=!0),_=u;default:u!==H&&We(t,n,c,u,s,H)}n=A,a=_,s=ut,$!=null?lr(t,!!a,$,!1):!!s!=!!a&&(n!=null?lr(t,!!a,n,!0):lr(t,!!a,a?[]:"",!1));return;case"textarea":ut=$=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(t,n,A,null,s,c)}for(_ in s)if(c=s[_],u=a[_],s.hasOwnProperty(_)&&(c!=null||u!=null))switch(_){case"value":c!==u&&(Ie=!0),$=c;break;case"defaultValue":c!==u&&(Ie=!0),ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&We(t,n,_,c,s,u)}vm(t,$,ut);return;case"option":for(var jt in a)if($=a[jt],a.hasOwnProperty(jt)&&$!=null&&!s.hasOwnProperty(jt))switch(jt){case"selected":t.selected=!1;break;default:We(t,n,jt,null,s,$)}for(H in s)if($=s[H],ut=a[H],s.hasOwnProperty(H)&&$!==ut&&($!=null||ut!=null))switch(H){case"selected":$!==ut&&(Ie=!0),t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:We(t,n,H,$,s,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)$=a[se],a.hasOwnProperty(se)&&$!=null&&!s.hasOwnProperty(se)&&We(t,n,se,null,s,$);for(it in s)if($=s[it],ut=a[it],s.hasOwnProperty(it)&&$!==ut&&($!=null||ut!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:We(t,n,it,$,s,ut)}return;default:if(Yu(n)){for(var _e in a)$=a[_e],a.hasOwnProperty(_e)&&$!==void 0&&!s.hasOwnProperty(_e)&&Wd(t,n,_e,void 0,s,$);for(mt in s)$=s[mt],ut=a[mt],!s.hasOwnProperty(mt)||$===ut||$===void 0&&ut===void 0||Wd(t,n,mt,$,s,ut);return}}for(var tt in a)$=a[tt],a.hasOwnProperty(tt)&&$!=null&&!s.hasOwnProperty(tt)&&We(t,n,tt,null,s,$);for(Tt in s)$=s[Tt],ut=a[Tt],!s.hasOwnProperty(Tt)||$===ut||$==null&&ut==null||We(t,n,Tt,$,s,ut)}function Av(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function m1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],u=c.transferSize,_=c.initiatorType,A=c.duration;if(u&&A&&Av(_)){for(_=0,A=c.responseEnd,s+=1;s<a.length;s++){var H=a[s],it=H.startTime;if(it>A)break;var mt=H.transferSize,Tt=H.initiatorType;mt&&Av(Tt)&&(H=H.responseEnd,_+=mt*(H<A?1:(A-it)/(H-it)))}if(--s,n+=8*(u+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yd=null,Zd=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function Rv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function wv(t,n,a,s){return a=sl(a).createElement(t),a[Gt]=s,a[ae]=n,Fn(a,t,n),Pe(a),a}function Kd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qd=null;function g1(){var t=window.event;return t&&t.type==="popstate"?t===Qd?!1:(Qd=t,!0):(Qd=null,!1)}var Jd=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,Dv=typeof Promise=="function"?Promise:void 0,Nv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Jd,_1=typeof queueMicrotask=="function"?queueMicrotask:typeof Dv<"u"?function(t){return Dv.resolve(null).then(t).catch(x1)}:Jd;function x1(t){setTimeout(function(){throw t})}function ss(t){return t==="head"}function Uv(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),qr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")rh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,rh(a);for(var u=a.firstChild;u;){var _=u.nextSibling,A=u.nodeName;u[Fe]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=_}}else a==="body"&&rh(t.ownerDocument.body);a=c}while(a);qr(n)}function Lv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Ov(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function zv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function y1(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function $d(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return y1(n,a,t)}function S1(t){return t.documentElement.clientHeight}function M1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function E1(t,n,a,s,c,u,_,A,H){var it=n.nodeType===9?n:n.ownerDocument;try{var mt=it.startViewTransition({update:function(){var $=it.defaultView,ut=$.navigation&&$.navigation.transition,jt=it.fonts.status;s();var se=[];if(jt==="loaded"&&(S1(it),it.fonts.status==="loading"&&se.push(it.fonts.ready)),jt=se.length,t!==null)for(var _e=t.suspenseyImages,tt=0,Y=0;Y<_e.length;Y++){var ot=_e[Y];if(!ot.complete){var Et=ot.getBoundingClientRect();if(0<Et.bottom&&0<Et.right&&Et.top<$.innerHeight&&Et.left<$.innerWidth){if(tt+=n_(ot),tt>qc){se.length=jt;break}ot=new Promise(M1.bind(ot)),se.push(ot)}}}if(0<se.length)return $=Promise.race([Promise.all(se),new Promise(function(te){return setTimeout(te,500)})]).then(c,c),(ut?Promise.allSettled([ut.finished,$]):$).then(u,u);if(c(),ut)return ut.finished.then(u,u);u()},types:a});it.__reactViewTransition=mt;var Tt=[];return mt.ready.then(function(){for(var $=it.documentElement.getAnimations({subtree:!0}),ut=0;ut<$.length;ut++){var jt=$[ut],se=jt.effect,_e=se.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){Tt.push(jt),jt=se.getKeyframes();for(var tt=_e=void 0,Y=!0,ot=0;ot<jt.length;ot++){var Et=jt[ot],te=Et.width;if(_e===void 0)_e=te;else if(_e!==te){Y=!1;break}if(te=Et.height,tt===void 0)tt=te;else if(tt!==te){Y=!1;break}delete Et.width,delete Et.height,Et.transform==="none"&&delete Et.transform}Y&&_e!==void 0&&tt!==void 0&&(se.setKeyframes(jt),Y=getComputedStyle(se.target,se.pseudoElement),Y.width!==_e||Y.height!==tt)&&(Y=jt[0],Y.width=_e,Y.height=tt,Y=jt[jt.length-1],Y.width=_e,Y.height=tt,se.setKeyframes(jt))}}_()},function($){it.__reactViewTransition===mt&&(it.__reactViewTransition=null);try{if(typeof $=="object"&&$!==null)switch($.name){case"InvalidStateError":($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null)}$!==null&&H($)}finally{s(),c(),_()}}),mt.finished.finally(function(){for(var $=0;$<Tt.length;$++)Tt[$].cancel();it.__reactViewTransition===mt&&(it.__reactViewTransition=null),A()}),mt}catch{return s(),c(),_(),null}}function Gs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:B({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[c])}return s},Gs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pv(t){return{name:t,group:new Gs("group",t),imagePair:new Gs("image-pair",t),old:new Gs("old",t),new:new Gs("new",t)}}function vi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Bv(u,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(H){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,H):n.handleEvent(H)}),s!==null&&(c=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Hr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:c}),m(this._fragmentFiber.child,!1,T1,t,A,s)}this._eventListeners=u}};function T1(t,n,a,s){return x(t).addEventListener(n,a,s),!1}vi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Bv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var u=c.cleanup;c=Hr(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,b1,t,a,c),s.splice(n,1),u!==null&&u()}};function b1(t,n,a,s){return x(t).removeEventListener(n,a,s),!1}function Hr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Iv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Bv(t,n,a,s){if(t.length===0)return-1;s=Iv(s);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&Iv(u.optionsOrUseCapture)===s)return c}return-1}vi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];s.addEventListener(u.type,u.attachedListener,Hr(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],s.removeEventListener(u.type,u.attachedListener,Hr(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},vi.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Fv,t,void 0,void 0)};function Fv(t,n){return t.tag===6?!1:(t=x(t),I1(t,n))}vi.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,th,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Fv(n[a],t);a--);};function th(t,n){return n.push(t),!1}vi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=x(t),t=sl(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,A1,t,void 0,void 0))};function A1(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,R1,t,void 0,void 0)};function R1(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}vi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,C1,t,void 0,void 0);for(var a=n=0;a<ki.length;a++){var s=ki[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):ki[n++]=s}ki.length=n}};function C1(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var ki=[],eh=!1;function w1(t,n,a){ki.push({fragmentInstance:t,observer:n,instance:a}),eh||(eh=!0,B1(function(){eh=!1;var s=ki;ki=[];for(var c=0;c<s.length;c++){var u=s[c];u.observer.unobserve(u.instance)}}))}vi.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,D1,t,void 0,void 0),t};function D1(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}vi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},vi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,th,a,void 0,void 0);var s=x(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),c=x(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=c.compareDocumentPosition(t),H=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&u&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&c===t||H||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||N1(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function N1(t,n,a,s,c){var u=He(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=v(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=O(a,u,P),n===null?n=!1:(m(n,!0,I,u,a),u=S,S=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=O(s,u,P),n===null?n=!1:(m(n,!0,R,u,s),u=S,L=S=null,n=u!==null)),n):!1}function Hv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,th,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=x(s),Hv(t,a);return}if(s=x(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=x(c),Hv(c,a)):x(c).scrollIntoView(t),s+=a?-1:1}};function U1(t,n){return t=x(t),Gv(t,n),!1}function Gv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Vv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var _=0,A=0;A<ki.length;A++){var H=ki[A];(H.fragmentInstance!==n||H.observer!==u||H.instance!==t)&&(ki[_++]=H)}ki.length=_,u.observe(t)}),Gv(t,n))}function L1(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?w1(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function nh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),de(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function O1(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Fe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ui(t.nextSibling),t===null)break}return null}function z1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ui(t.nextSibling),t===null))return null;return t}function kv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ui(t.nextSibling),t===null))return null;return t}function ih(t){return t.data==="$?"||t.data==="$~"}function ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function P1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var sh=null;function jv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Xv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function I1(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function B1(t){Nv(function(){Nv(function(n){return t(n)})})}function qv(t,n,a){switch(n=sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Wv(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&We(t,n,s,null,h1,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ki&&(t.onclick=null),de(t)}function rh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);de(t)}var Li=new Map,Yv=new Set;function rl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var wa=Wt.d;Wt.d={f:F1,r:H1,D:G1,C:V1,L:k1,m:j1,X:q1,S:X1,M:W1};function F1(){var t=wa.f(),n=Ic();return t||n}function H1(t){var n=Se(t);n!==null&&n.tag===5&&n.type==="form"?K0(n):wa.r(t)}var Gr=typeof document>"u"?null:document;function Zv(t,n,a){var s=Gr;if(s&&typeof n=="string"&&n){var c=bi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yv.has(c)||(Yv.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Fn(n,"link",t),Pe(n),s.head.appendChild(n)))}}function G1(t){wa.D(t),Zv("dns-prefetch",t,null)}function V1(t,n){wa.C(t,n),Zv("preconnect",t,n)}function k1(t,n,a){wa.L(t,n,a);var s=Gr;if(s&&t&&n){var c='link[rel="preload"][as="'+bi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+bi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+bi(a.imageSizes)+'"]')):c+='[href="'+bi(t)+'"]';var u=c;switch(n){case"style":u=Vr(t);break;case"script":u=kr(t)}if(!(Li.has(u)||(t=B({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Li.set(u,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ol(u))||n==="script"&&s.querySelector(ll(u))))){var _=s.createElement("link");Fn(_,"link",t),n==="style"&&(_[ze]=!0,_.onload=_.onerror=function(){Ba(_)}),Pe(_),s.head.appendChild(_)}}}function j1(t,n){wa.m(t,n);var a=Gr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+bi(s)+'"][href="'+bi(t)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=kr(t)}if(!Li.has(u)&&(t=B({rel:"modulepreload",href:t},n),Li.set(u,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(u)))return}s=a.createElement("link"),Fn(s,"link",t),Pe(s),a.head.appendChild(s)}}}function X1(t,n,a){wa.S(t,n,a);var s=Gr;if(s&&t){var c=ci(s).hoistableStyles,u=Vr(t);n=n||"default";var _=c.get(u);if(!_){var A={loading:0,preload:null};if(_=s.querySelector(ol(u)))A.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Li.get(u))&&oh(t,a);var H=_=s.createElement("link");Pe(H),Fn(H,"link",t),H._p=new Promise(function(it,mt){H.onload=it,H.onerror=mt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,jc(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(u,_)}}}function q1(t,n){wa.X(t,n);var a=Gr;if(a&&t){var s=ci(a).hoistableScripts,c=kr(t),u=s.get(c);u||(u=a.querySelector(ll(c)),u||(t=B({src:t,async:!0},n),(n=Li.get(c))&&lh(t,n),u=a.createElement("script"),Pe(u),Fn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function W1(t,n){wa.M(t,n);var a=Gr;if(a&&t){var s=ci(a).hoistableScripts,c=kr(t),u=s.get(c);u||(u=a.querySelector(ll(c)),u||(t=B({src:t,async:!0,type:"module"},n),(n=Li.get(c))&&lh(t,n),u=a.createElement("script"),Pe(u),Fn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function Kv(t,n,a,s){var c=(c=Nt.current)?rl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vr(a.href),n=ci(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vr(a.href);var u=ci(c).hoistableStyles,_=u.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,_),(u=c.querySelector(ol(t)))?u._p||(_.instance=u,_.state.loading=5):(u=Li.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Li.set(t,u)),Y1(c,t,u,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=kr(a),n=ci(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vr(t){return'href="'+bi(t)+'"'}function ol(t){return'link[rel="stylesheet"]['+t+"]"}function Qv(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function Y1(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ze]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[ze]=!0,n.onload=n.onerror=Ba.bind(null,n),Fn(n,"link",a),Pe(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function kr(t){return'[src="'+bi(t)+'"]'}function ll(t){return"script[async]"+t}function Jv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+bi(a.href)+'"]');if(s)return n.instance=s,Pe(s),s;var c=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Pe(s),Fn(s,"style",c),jc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Vr(a.href);var u=t.querySelector(ol(c));if(u)return n.state.loading|=4,n.instance=u,Pe(u),u;s=Qv(a),(c=Li.get(c))&&oh(s,c),u=(t.ownerDocument||t).createElement("link"),Pe(u);var _=u;return _._p=new Promise(function(A,H){_.onload=A,_.onerror=H}),Fn(u,"link",s),n.state.loading|=4,jc(u,a.precedence,t),n.instance=u;case"script":return u=kr(a.src),(c=t.querySelector(ll(u)))?(n.instance=c,Pe(c),c):(s=a,(c=Li.get(u))&&(s=B({},a),lh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Pe(c),Fn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,jc(s,a.precedence,t));return n.instance}function jc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,_=0;_<s.length;_++){var A=s[_];if(A.dataset.precedence===n)u=A;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function oh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function lh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xc=null;function $v(t,n,a){if(Xc===null){var s=new Map,c=Xc=new Map;c.set(a,s)}else c=Xc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[Fe]||u[Gt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var _=u.getAttribute(n)||"";_=t+_;var A=s.get(_);A?A.push(u):s.set(_,[u])}}return s}function ch(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Z1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function e_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function n_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function i_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=n_(n),t.suspenseyImages.push(n)),t=J1.bind(t),n.decode().then(t,t))}function K1(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Vr(s.href),u=n.querySelector(ol(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Pe(u);return}u=n.ownerDocument||n,s=Qv(s),(c=Li.get(c))&&oh(s,c),u=u.createElement("link"),Pe(u);var _=u;_._p=new Promise(function(A,H){_.onload=A,_.onerror=H}),Fn(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var qc=0;function Q1(t,n){return t.stylesheets&&t.count===0&&Yc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Yc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&qc===0&&(qc=62500*m1());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>qc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function a_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function cl(){this.count--,a_(this)}function J1(){this.imgCount--,a_(this)}var Wc=null;function Yc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wc=new Map,n.forEach($1,t),Wc=null,cl.call(t))}function $1(t,n){if(!(n.state.loading&4)){var a=Wc.get(t);if(a)var s=a.get(null);else{a=new Map,Wc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var _=c[u];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),u=a.get(_)||s,u===s&&a.set(null,c),a.set(_,c),this.count++,s=cl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var jr={$$typeof:ft,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function tM(t,n,a,s,c,u,_,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.hiddenUpdates=Cn(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.transitionTypes=null,this.incompleteTransitions=new Map}function s_(t,n,a,s,c,u,_,A,H,it,mt,Tt){return t=new tM(t,n,a,_,H,it,mt,Tt,A),n=1,u===!0&&(n|=24),u=ei(3,null,null,n),t.current=u,u.stateNode=t,n=Tf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Cf(u),t}function r_(t){return t?(t=gr,t):gr}function o_(t,n,a,s,c,u){c=r_(c),s.context===null?s.context=c:s.pendingContext=c,s=Wa(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Ya(t,s,n),a!==null&&(si(a,t,n),Ho(a,t,n))}function l_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function uh(t,n){l_(t,n),(t=t.alternate)&&l_(t,n)}function c_(t){if(t.tag===13||t.tag===31){var n=Ts(t,67108864);n!==null&&si(n,t,67108864),uh(t,67108864)}}function u_(t){if(t.tag===13||t.tag===31){var n=gi();n=yt(n);var a=Ts(t,n);a!==null&&si(a,t,n),uh(t,n)}}var Xr=!0;function eM(t,n,a,s){var c=Ut.T;Ut.T=null;var u=Wt.p;try{Wt.p=2,fh(t,n,a,s)}finally{Wt.p=u,Ut.T=c}}function nM(t,n,a,s){var c=Ut.T;Ut.T=null;var u=Wt.p;try{Wt.p=8,fh(t,n,a,s)}finally{Wt.p=u,Ut.T=c}}function fh(t,n,a,s){if(Xr){var c=dh(s);if(c===null)qd(t,n,s,Zc,a),d_(t,s);else if(aM(c,t,n,a,s))s.stopPropagation();else if(d_(t,s),n&4&&-1<iM.indexOf(t)){for(;c!==null;){var u=Se(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var _=Gn(u.pendingLanes);if(_!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var H=1<<31-$e(_);A.entanglements[1]|=H,_&=~H}ra(u),(Ge&6)===0&&(Oc=z()+500,nl(0))}}break;case 31:case 13:A=Ts(u,2),A!==null&&si(A,u,2),Ic(),uh(u,2)}if(u=dh(s),u===null&&qd(t,n,s,Zc,a),u===c)break;c=u}c!==null&&s.stopPropagation()}else qd(t,n,s,null,a)}}function dh(t){return t=Ku(t),hh(t)}var Zc=null;function hh(t){if(Zc=null,t=He(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Zc=t,null}function f_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case Rt:return 2;case j:return 8;case xt:case pt:return 32;case zt:return 268435456;default:return 32}default:return 32}}var ph=!1,rs=null,os=null,ls=null,ul=new Map,fl=new Map,cs=[],iM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d_(t,n){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function dl(t,n,a,s,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},n!==null&&(n=Se(n),n!==null&&c_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function aM(t,n,a,s,c){switch(n){case"focusin":return rs=dl(rs,t,n,a,s,c),!0;case"dragenter":return os=dl(os,t,n,a,s,c),!0;case"mouseover":return ls=dl(ls,t,n,a,s,c),!0;case"pointerover":var u=c.pointerId;return ul.set(u,dl(ul.get(u)||null,t,n,a,s,c)),!0;case"gotpointercapture":return u=c.pointerId,fl.set(u,dl(fl.get(u)||null,t,n,a,s,c)),!0}return!1}function h_(t){var n=He(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Zt(t.priority,function(){u_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Zt(t.priority,function(){u_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=dh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Zu=s,a.target.dispatchEvent(s),Zu=null}else return n=Se(a),n!==null&&c_(n),t.blockedOn=a,!1;n.shift()}return!0}function p_(t,n,a){Kc(t)&&a.delete(n)}function sM(){ph=!1,rs!==null&&Kc(rs)&&(rs=null),os!==null&&Kc(os)&&(os=null),ls!==null&&Kc(ls)&&(ls=null),ul.forEach(p_),fl.forEach(p_)}function Qc(t,n){t.blockedOn===n&&(t.blockedOn=null,ph||(ph=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sM)))}var Jc=null;function m_(t){Jc!==t&&(Jc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jc===t&&(Jc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(hh(s||a)===null)continue;break}var u=Se(a);u!==null&&(t.splice(n,3),n-=3,Zf(u,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function qr(t){function n(H){return Qc(H,t)}rs!==null&&Qc(rs,t),os!==null&&Qc(os,t),ls!==null&&Qc(ls,t),ul.forEach(n),fl.forEach(n);for(var a=0;a<cs.length;a++){var s=cs[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<cs.length&&(a=cs[0],a.blockedOn===null);)h_(a),a.blockedOn===null&&cs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],u=a[s+1],_=c[ae]||null;if(typeof u=="function")_||m_(a);else if(_){var A=null;if(u&&u.hasAttribute("formAction")){if(c=u,_=u[ae]||null)A=_.formAction;else if(hh(c)!==null)continue}else A=_.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),m_(a)}}}function g_(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function mh(t){this._internalRoot=t}$c.prototype.render=mh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=gi();o_(a,s,t,n,null,null)},$c.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;o_(t.current,2,null,t,null,null),Ic(),n[he]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var n=It();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cs.length&&n!==0&&n<cs[a].priority;a++);cs.splice(a,0,t),a===0&&h_(t)}};var v_=e.version;if(v_!=="19.3.1")throw Error(r(527,v_,"19.3.1"));Wt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var rM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{ce=tu.inject(rM),Te=tu}catch{}}return pl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=rg,u=og,_=lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=s_(t,1,!1,null,null,a,s,null,c,u,_,g_),t[he]=n.current,Xd(t),new mh(n)},pl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",u=rg,_=og,A=lg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=s_(t,1,!0,n,a??null,s,c,H,u,_,A,g_),n.context=r_(null),a=n.current,s=gi(),s=yt(s),c=Wa(s),c.callback=null,Ya(a,c,s),a=s,n.current.lanes=a,Qe(n,a),ra(n),t[he]=n.current,Xd(t),new $c(n)},pl.version="19.3.1",pl}var R_;function _M(){if(R_)return _h.exports;R_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_h.exports=vM(),_h.exports}var xM=_M();const yM=Vx(xM);var SM=kx();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jx=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=Xt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:f,iconNode:d,...h},g)=>Xt.createElement("svg",{ref:g,...EM,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:jx("lucide",l),...h},[...d.map(([p,y])=>Xt.createElement(p,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(o,e)=>{const i=Xt.forwardRef(({className:r,...l},f)=>Xt.createElement(TM,{ref:f,iconNode:e,className:jx(`lucide-${MM(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=we("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=we("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=we("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=we("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=we("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=we("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=we("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=we("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=we("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=we("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=we("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=we("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=we("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=we("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=we("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=we("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=we("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=we("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=we("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=we("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=we("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=we("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=we("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=we("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=we("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=we("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=we("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=we("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=we("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=we("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=we("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=we("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=we("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=we("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=we("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=we("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=we("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="180",ZM=0,w_=1,KM=2,Wx=1,Yx=2,za=3,ys=0,Jn=1,la=2,_s=0,fo=1,D_=2,N_=3,U_=4,QM=5,Qs=100,JM=101,$M=102,tE=103,eE=104,nE=200,iE=201,aE=202,sE=203,op=204,lp=205,rE=206,oE=207,lE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,cp=0,up=1,fp=2,mo=3,dp=4,hp=5,pp=6,mp=7,Zx=0,mE=1,gE=2,xs=0,vE=1,_E=2,xE=3,Kx=4,yE=5,SE=6,ME=7,Qx=300,go=301,vo=302,gp=303,vp=304,ku=306,_p=1e3,tr=1001,xp=1002,Mi=1003,EE=1004,ru=1005,ca=1006,bh=1007,er=1008,da=1009,Jx=1010,$x=1011,Al=1012,$p=1013,nr=1014,ua=1015,Ul=1016,tm=1017,em=1018,Rl=1020,ty=35902,ey=35899,ny=1021,iy=1022,Yi=1023,Cl=1026,wl=1027,nm=1028,im=1029,ay=1030,am=1031,sm=1033,Uu=33776,Lu=33777,Ou=33778,zu=33779,yp=35840,Sp=35841,Mp=35842,Ep=35843,Tp=36196,bp=37492,Ap=37496,Rp=37808,Cp=37809,wp=37810,Dp=37811,Np=37812,Up=37813,Lp=37814,Op=37815,zp=37816,Pp=37817,Ip=37818,Bp=37819,Fp=37820,Hp=37821,Gp=36492,Vp=36494,kp=36495,jp=36283,Xp=36284,qp=36285,Wp=36286,TE=3200,bE=3201,sy=0,AE=1,vs="",yi="srgb",_o="srgb-linear",Bu="linear",Ke="srgb",Wr=7680,L_=519,RE=512,CE=513,wE=514,ry=515,DE=516,NE=517,UE=518,LE=519,O_=35044,OE=35048,z_="300 es",fa=2e3,Fu=2001;class So{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=Math.PI/180,Yp=180/Math.PI;function Ll(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[o&255]+jn[o>>8&255]+jn[o>>16&255]+jn[o>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[i&63|128]+jn[i>>8&255]+"-"+jn[i>>16&255]+jn[i>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function Ue(o,e,i){return Math.max(e,Math.min(i,o))}function zE(o,e){return(o%e+e)%e}function Rh(o,e,i){return(1-i)*o+i*e}function ml(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ri(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,i=0){Le.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*l+e.x,this.y=f*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ol{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,d,h){let g=r[l+0],p=r[l+1],y=r[l+2],m=r[l+3];const v=f[d+0],E=f[d+1],T=f[d+2],D=f[d+3];if(h===0){e[i+0]=g,e[i+1]=p,e[i+2]=y,e[i+3]=m;return}if(h===1){e[i+0]=v,e[i+1]=E,e[i+2]=T,e[i+3]=D;return}if(m!==D||g!==v||p!==E||y!==T){let x=1-h;const S=g*v+p*E+y*T+m*D,L=S>=0?1:-1,I=1-S*S;if(I>Number.EPSILON){const P=Math.sqrt(I),O=Math.atan2(P,S*L);x=Math.sin(x*O)/P,h=Math.sin(h*O)/P}const R=h*L;if(g=g*x+v*R,p=p*x+E*R,y=y*x+T*R,m=m*x+D*R,x===1-h){const P=1/Math.sqrt(g*g+p*p+y*y+m*m);g*=P,p*=P,y*=P,m*=P}}e[i]=g,e[i+1]=p,e[i+2]=y,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,l,f,d){const h=r[l],g=r[l+1],p=r[l+2],y=r[l+3],m=f[d],v=f[d+1],E=f[d+2],T=f[d+3];return e[i]=h*T+y*m+g*E-p*v,e[i+1]=g*T+y*v+p*m-h*E,e[i+2]=p*T+y*E+h*v-g*m,e[i+3]=y*T-h*m-g*v-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,g=Math.sin,p=h(r/2),y=h(l/2),m=h(f/2),v=g(r/2),E=g(l/2),T=g(f/2);switch(d){case"XYZ":this._x=v*y*m+p*E*T,this._y=p*E*m-v*y*T,this._z=p*y*T+v*E*m,this._w=p*y*m-v*E*T;break;case"YXZ":this._x=v*y*m+p*E*T,this._y=p*E*m-v*y*T,this._z=p*y*T-v*E*m,this._w=p*y*m+v*E*T;break;case"ZXY":this._x=v*y*m-p*E*T,this._y=p*E*m+v*y*T,this._z=p*y*T+v*E*m,this._w=p*y*m-v*E*T;break;case"ZYX":this._x=v*y*m-p*E*T,this._y=p*E*m+v*y*T,this._z=p*y*T-v*E*m,this._w=p*y*m+v*E*T;break;case"YZX":this._x=v*y*m+p*E*T,this._y=p*E*m+v*y*T,this._z=p*y*T-v*E*m,this._w=p*y*m-v*E*T;break;case"XZY":this._x=v*y*m-p*E*T,this._y=p*E*m-v*y*T,this._z=p*y*T+v*E*m,this._w=p*y*m+v*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],d=i[1],h=i[5],g=i[9],p=i[2],y=i[6],m=i[10],v=r+h+m;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(y-g)*E,this._y=(f-p)*E,this._z=(d-l)*E}else if(r>h&&r>m){const E=2*Math.sqrt(1+r-h-m);this._w=(y-g)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(f+p)/E}else if(h>m){const E=2*Math.sqrt(1+h-r-m);this._w=(f-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(g+y)/E}else{const E=2*Math.sqrt(1+m-r-h);this._w=(d-l)/E,this._x=(f+p)/E,this._y=(g+y)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,d=e._w,h=i._x,g=i._y,p=i._z,y=i._w;return this._x=r*y+d*h+l*p-f*g,this._y=l*y+d*g+f*h-r*p,this._z=f*y+d*p+r*g-l*h,this._w=d*y-r*h-l*g-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=f,this;const g=1-h*h;if(g<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const p=Math.sqrt(g),y=Math.atan2(p,h),m=Math.sin((1-i)*y)/p,v=Math.sin(i*y)/p;return this._w=d*m+this._w*v,this._x=r*m+this._x*v,this._y=l*m+this._y*v,this._z=f*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(P_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(P_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,d=e.y,h=e.z,g=e.w,p=2*(d*l-h*r),y=2*(h*i-f*l),m=2*(f*r-d*i);return this.x=i+g*p+d*m-h*y,this.y=r+g*y+h*p-f*m,this.z=l+g*m+f*y-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,d=i.x,h=i.y,g=i.z;return this.x=l*g-f*h,this.y=f*d-r*g,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new st,P_=new Ol;class xe{constructor(e,i,r,l,f,d,h,g,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,g,p)}set(e,i,r,l,f,d,h,g,p){const y=this.elements;return y[0]=e,y[1]=l,y[2]=h,y[3]=i,y[4]=f,y[5]=g,y[6]=r,y[7]=d,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[3],g=r[6],p=r[1],y=r[4],m=r[7],v=r[2],E=r[5],T=r[8],D=l[0],x=l[3],S=l[6],L=l[1],I=l[4],R=l[7],P=l[2],O=l[5],B=l[8];return f[0]=d*D+h*L+g*P,f[3]=d*x+h*I+g*O,f[6]=d*S+h*R+g*B,f[1]=p*D+y*L+m*P,f[4]=p*x+y*I+m*O,f[7]=p*S+y*R+m*B,f[2]=v*D+E*L+T*P,f[5]=v*x+E*I+T*O,f[8]=v*S+E*R+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],g=e[6],p=e[7],y=e[8];return i*d*y-i*h*p-r*f*y+r*h*g+l*f*p-l*d*g}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],g=e[6],p=e[7],y=e[8],m=y*d-h*p,v=h*g-y*f,E=p*f-d*g,T=i*m+r*v+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=m*D,e[1]=(l*p-y*r)*D,e[2]=(h*r-l*d)*D,e[3]=v*D,e[4]=(y*i-l*g)*D,e[5]=(l*f-h*i)*D,e[6]=E*D,e[7]=(r*g-p*i)*D,e[8]=(d*i-r*f)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,d,h){const g=Math.cos(f),p=Math.sin(f);return this.set(r*g,r*p,-r*(g*d+p*h)+d+e,-l*p,l*g,-l*(-p*d+g*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(wh.makeScale(e,i)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,i){return this.premultiply(wh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new xe;function oy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Hu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function PE(){const o=Hu("canvas");return o.style.display="block",o}const I_={};function Dl(o){o in I_||(I_[o]=!0,console.warn(o))}function IE(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const B_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const o={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ke&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ke&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?Bu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Dl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Dl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[_o]:{primaries:e,whitePoint:r,transfer:Bu,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:r,transfer:Ke,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Be=BE();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Yr;class FE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Yr===void 0&&(Yr=Hu("canvas")),Yr.width=e.width,Yr.height=e.height;const l=Yr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Yr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Hu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(Dh(l[d].image)):f.push(Dh(l[d]))}else f=Dh(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Dh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GE=0;const Nh=new st;class $n extends So{constructor(e=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,r=tr,l=tr,f=ca,d=er,h=Yi,g=da,p=$n.DEFAULT_ANISOTROPY,y=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Ll(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _p:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _p:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Qx;$n.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,i=0,r=0,l=1){hn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const g=e.elements,p=g[0],y=g[4],m=g[8],v=g[1],E=g[5],T=g[9],D=g[2],x=g[6],S=g[10];if(Math.abs(y-v)<.01&&Math.abs(m-D)<.01&&Math.abs(T-x)<.01){if(Math.abs(y+v)<.1&&Math.abs(m+D)<.1&&Math.abs(T+x)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,R=(E+1)/2,P=(S+1)/2,O=(y+v)/4,B=(m+D)/4,G=(T+x)/4;return I>R&&I>P?I<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(I),l=O/r,f=B/r):R>P?R<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(R),r=O/l,f=G/l):P<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(P),r=B/f,l=G/f),this.set(r,l,f,i),this}let L=Math.sqrt((x-T)*(x-T)+(m-D)*(m-D)+(v-y)*(v-y));return Math.abs(L)<.001&&(L=1),this.x=(x-T)/L,this.y=(m-D)/L,this.z=(v-y)/L,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this.w=Ue(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this.w=Ue(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VE extends So{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ca,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new hn(0,0,e,i),this.scissorTest=!1,this.viewport=new hn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new $n(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ca,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new rm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends VE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ly extends $n{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends $n{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,ji):ji.fromBufferAttribute(f,d),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ou.copy(r.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),lu.subVectors(this.max,gl),Zr.subVectors(e.a,gl),Kr.subVectors(e.b,gl),Qr.subVectors(e.c,gl),fs.subVectors(Kr,Zr),ds.subVectors(Qr,Kr),Vs.subVectors(Zr,Qr);let i=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Vs.z,Vs.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Vs.z,0,-Vs.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Vs.y,Vs.x,0];return!Uh(i,Zr,Kr,Qr,lu)||(i=[1,0,0,0,1,0,0,0,1],!Uh(i,Zr,Kr,Qr,lu))?!1:(cu.crossVectors(fs,ds),i=[cu.x,cu.y,cu.z],Uh(i,Zr,Kr,Qr,lu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new st,new st,new st,new st,new st,new st,new st,new st],ji=new st,ou=new sr,Zr=new st,Kr=new st,Qr=new st,fs=new st,ds=new st,Vs=new st,gl=new st,lu=new st,cu=new st,ks=new st;function Uh(o,e,i,r,l){for(let f=0,d=o.length-3;f<=d;f+=3){ks.fromArray(o,f);const h=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),g=e.dot(ks),p=i.dot(ks),y=r.dot(ks);if(Math.max(-Math.max(g,p,y),Math.min(g,p,y))>h)return!1}return!0}const jE=new sr,vl=new st,Lh=new st;class Mo{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):jE.setFromPoints(e).getCenter(r);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Lh)),this.expandByPoint(vl.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Na=new st,Oh=new st,uu=new st,hs=new st,zh=new st,fu=new st,Ph=new st;class cy{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Oh.copy(e).add(i).multiplyScalar(.5),uu.copy(i).sub(e).normalize(),hs.copy(this.origin).sub(Oh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(uu),h=hs.dot(this.direction),g=-hs.dot(uu),p=hs.lengthSq(),y=Math.abs(1-d*d);let m,v,E,T;if(y>0)if(m=d*g-h,v=d*h-g,T=f*y,m>=0)if(v>=-T)if(v<=T){const D=1/y;m*=D,v*=D,E=m*(m+d*v+2*h)+v*(d*m+v+2*g)+p}else v=f,m=Math.max(0,-(d*v+h)),E=-m*m+v*(v+2*g)+p;else v=-f,m=Math.max(0,-(d*v+h)),E=-m*m+v*(v+2*g)+p;else v<=-T?(m=Math.max(0,-(-d*f+h)),v=m>0?-f:Math.min(Math.max(-f,-g),f),E=-m*m+v*(v+2*g)+p):v<=T?(m=0,v=Math.min(Math.max(-f,-g),f),E=v*(v+2*g)+p):(m=Math.max(0,-(d*f+h)),v=m>0?f:Math.min(Math.max(-f,-g),f),E=-m*m+v*(v+2*g)+p);else v=d>0?-f:f,m=Math.max(0,-(d*v+h)),E=-m*m+v*(v+2*g)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Oh).addScaledVector(uu,v),E}intersectSphere(e,i){Na.subVectors(e.center,this.origin);const r=Na.dot(this.direction),l=Na.dot(Na)-r*r,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=r-d,g=r+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,d,h,g;const p=1/this.direction.x,y=1/this.direction.y,m=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),y>=0?(f=(e.min.y-v.y)*y,d=(e.max.y-v.y)*y):(f=(e.max.y-v.y)*y,d=(e.min.y-v.y)*y),r>d||f>l||((f>r||isNaN(r))&&(r=f),(d<l||isNaN(l))&&(l=d),m>=0?(h=(e.min.z-v.z)*m,g=(e.max.z-v.z)*m):(h=(e.max.z-v.z)*m,g=(e.min.z-v.z)*m),r>g||h>l)||((h>r||r!==r)&&(r=h),(g<l||l!==l)&&(l=g),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,r,l,f){zh.subVectors(i,e),fu.subVectors(r,e),Ph.crossVectors(zh,fu);let d=this.direction.dot(Ph),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;hs.subVectors(this.origin,e);const g=h*this.direction.dot(fu.crossVectors(hs,fu));if(g<0)return null;const p=h*this.direction.dot(zh.cross(hs));if(p<0||g+p>d)return null;const y=-h*hs.dot(Ph);return y<0?null:this.at(y/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,f,d,h,g,p,y,m,v,E,T,D,x){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,g,p,y,m,v,E,T,D,x)}set(e,i,r,l,f,d,h,g,p,y,m,v,E,T,D,x){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=f,S[5]=d,S[9]=h,S[13]=g,S[2]=p,S[6]=y,S[10]=m,S[14]=v,S[3]=E,S[7]=T,S[11]=D,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Jr.setFromMatrixColumn(e,0).length(),f=1/Jr.setFromMatrixColumn(e,1).length(),d=1/Jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),g=Math.cos(l),p=Math.sin(l),y=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const v=d*y,E=d*m,T=h*y,D=h*m;i[0]=g*y,i[4]=-g*m,i[8]=p,i[1]=E+T*p,i[5]=v-D*p,i[9]=-h*g,i[2]=D-v*p,i[6]=T+E*p,i[10]=d*g}else if(e.order==="YXZ"){const v=g*y,E=g*m,T=p*y,D=p*m;i[0]=v+D*h,i[4]=T*h-E,i[8]=d*p,i[1]=d*m,i[5]=d*y,i[9]=-h,i[2]=E*h-T,i[6]=D+v*h,i[10]=d*g}else if(e.order==="ZXY"){const v=g*y,E=g*m,T=p*y,D=p*m;i[0]=v-D*h,i[4]=-d*m,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*y,i[9]=D-v*h,i[2]=-d*p,i[6]=h,i[10]=d*g}else if(e.order==="ZYX"){const v=d*y,E=d*m,T=h*y,D=h*m;i[0]=g*y,i[4]=T*p-E,i[8]=v*p+D,i[1]=g*m,i[5]=D*p+v,i[9]=E*p-T,i[2]=-p,i[6]=h*g,i[10]=d*g}else if(e.order==="YZX"){const v=d*g,E=d*p,T=h*g,D=h*p;i[0]=g*y,i[4]=D-v*m,i[8]=T*m+E,i[1]=m,i[5]=d*y,i[9]=-h*y,i[2]=-p*y,i[6]=E*m+T,i[10]=v-D*m}else if(e.order==="XZY"){const v=d*g,E=d*p,T=h*g,D=h*p;i[0]=g*y,i[4]=-m,i[8]=p*y,i[1]=v*m+D,i[5]=d*y,i[9]=E*m-T,i[2]=T*m-E,i[6]=h*y,i[10]=D*m+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XE,e,qE)}lookAt(e,i,r){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ps.crossVectors(r,_i),ps.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ps.crossVectors(r,_i)),ps.normalize(),du.crossVectors(_i,ps),l[0]=ps.x,l[4]=du.x,l[8]=_i.x,l[1]=ps.y,l[5]=du.y,l[9]=_i.y,l[2]=ps.z,l[6]=du.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[4],g=r[8],p=r[12],y=r[1],m=r[5],v=r[9],E=r[13],T=r[2],D=r[6],x=r[10],S=r[14],L=r[3],I=r[7],R=r[11],P=r[15],O=l[0],B=l[4],G=l[8],w=l[12],C=l[1],k=l[5],W=l[9],et=l[13],St=l[2],ft=l[6],K=l[10],dt=l[14],Q=l[3],At=l[7],Ct=l[11],Ht=l[15];return f[0]=d*O+h*C+g*St+p*Q,f[4]=d*B+h*k+g*ft+p*At,f[8]=d*G+h*W+g*K+p*Ct,f[12]=d*w+h*et+g*dt+p*Ht,f[1]=y*O+m*C+v*St+E*Q,f[5]=y*B+m*k+v*ft+E*At,f[9]=y*G+m*W+v*K+E*Ct,f[13]=y*w+m*et+v*dt+E*Ht,f[2]=T*O+D*C+x*St+S*Q,f[6]=T*B+D*k+x*ft+S*At,f[10]=T*G+D*W+x*K+S*Ct,f[14]=T*w+D*et+x*dt+S*Ht,f[3]=L*O+I*C+R*St+P*Q,f[7]=L*B+I*k+R*ft+P*At,f[11]=L*G+I*W+R*K+P*Ct,f[15]=L*w+I*et+R*dt+P*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],d=e[1],h=e[5],g=e[9],p=e[13],y=e[2],m=e[6],v=e[10],E=e[14],T=e[3],D=e[7],x=e[11],S=e[15];return T*(+f*g*m-l*p*m-f*h*v+r*p*v+l*h*E-r*g*E)+D*(+i*g*E-i*p*v+f*d*v-l*d*E+l*p*y-f*g*y)+x*(+i*p*m-i*h*E-f*d*m+r*d*E+f*h*y-r*p*y)+S*(-l*h*y-i*g*m+i*h*v+l*d*m-r*d*v+r*g*y)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],g=e[6],p=e[7],y=e[8],m=e[9],v=e[10],E=e[11],T=e[12],D=e[13],x=e[14],S=e[15],L=m*x*p-D*v*p+D*g*E-h*x*E-m*g*S+h*v*S,I=T*v*p-y*x*p-T*g*E+d*x*E+y*g*S-d*v*S,R=y*D*p-T*m*p+T*h*E-d*D*E-y*h*S+d*m*S,P=T*m*g-y*D*g-T*h*v+d*D*v+y*h*x-d*m*x,O=i*L+r*I+l*R+f*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=L*B,e[1]=(D*v*f-m*x*f-D*l*E+r*x*E+m*l*S-r*v*S)*B,e[2]=(h*x*f-D*g*f+D*l*p-r*x*p-h*l*S+r*g*S)*B,e[3]=(m*g*f-h*v*f-m*l*p+r*v*p+h*l*E-r*g*E)*B,e[4]=I*B,e[5]=(y*x*f-T*v*f+T*l*E-i*x*E-y*l*S+i*v*S)*B,e[6]=(T*g*f-d*x*f-T*l*p+i*x*p+d*l*S-i*g*S)*B,e[7]=(d*v*f-y*g*f+y*l*p-i*v*p-d*l*E+i*g*E)*B,e[8]=R*B,e[9]=(T*m*f-y*D*f-T*r*E+i*D*E+y*r*S-i*m*S)*B,e[10]=(d*D*f-T*h*f+T*r*p-i*D*p-d*r*S+i*h*S)*B,e[11]=(y*h*f-d*m*f-y*r*p+i*m*p+d*r*E-i*h*E)*B,e[12]=P*B,e[13]=(y*D*l-T*m*l+T*r*v-i*D*v-y*r*x+i*m*x)*B,e[14]=(T*h*l-d*D*l-T*r*g+i*D*g+d*r*x-i*h*x)*B,e[15]=(d*m*l-y*h*l+y*r*g-i*m*g-d*r*v+i*h*v)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,d=e.x,h=e.y,g=e.z,p=f*d,y=f*h;return this.set(p*d+r,p*h-l*g,p*g+l*h,0,p*h+l*g,y*h+r,y*g-l*d,0,p*g-l*h,y*g+l*d,f*g*g+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,d){return this.set(1,r,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,d=i._y,h=i._z,g=i._w,p=f+f,y=d+d,m=h+h,v=f*p,E=f*y,T=f*m,D=d*y,x=d*m,S=h*m,L=g*p,I=g*y,R=g*m,P=r.x,O=r.y,B=r.z;return l[0]=(1-(D+S))*P,l[1]=(E+R)*P,l[2]=(T-I)*P,l[3]=0,l[4]=(E-R)*O,l[5]=(1-(v+S))*O,l[6]=(x+L)*O,l[7]=0,l[8]=(T+I)*B,l[9]=(x-L)*B,l[10]=(1-(v+D))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Jr.set(l[0],l[1],l[2]).length();const d=Jr.set(l[4],l[5],l[6]).length(),h=Jr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Xi.copy(this);const p=1/f,y=1/d,m=1/h;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=y,Xi.elements[5]*=y,Xi.elements[6]*=y,Xi.elements[8]*=m,Xi.elements[9]*=m,Xi.elements[10]*=m,i.setFromRotationMatrix(Xi),r.x=f,r.y=d,r.z=h,this}makePerspective(e,i,r,l,f,d,h=fa,g=!1){const p=this.elements,y=2*f/(i-e),m=2*f/(r-l),v=(i+e)/(i-e),E=(r+l)/(r-l);let T,D;if(g)T=f/(d-f),D=d*f/(d-f);else if(h===fa)T=-(d+f)/(d-f),D=-2*d*f/(d-f);else if(h===Fu)T=-d/(d-f),D=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=m,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,f,d,h=fa,g=!1){const p=this.elements,y=2/(i-e),m=2/(r-l),v=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,D;if(g)T=1/(d-f),D=d/(d-f);else if(h===fa)T=-2/(d-f),D=-(d+f)/(d-f);else if(h===Fu)T=-1/(d-f),D=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=m,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Jr=new st,Xi=new sn,XE=new st(0,0,0),qE=new st(1,1,1),ps=new st,du=new st,_i=new st,H_=new sn,G_=new Ol;class ha{constructor(e=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],g=l[1],p=l[5],y=l[9],m=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Ue(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-y,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return H_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class uy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const V_=new st,$r=new Ol,Ua=new sn,hu=new st,_l=new st,YE=new st,ZE=new Ol,k_=new st(1,0,0),j_=new st(0,1,0),X_=new st(0,0,1),q_={type:"added"},KE={type:"removed"},to={type:"childadded",child:null},Ih={type:"childremoved",child:null};class On extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new st,i=new ha,r=new Ol,l=new st(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new xe}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(k_,e)}rotateY(e){return this.rotateOnAxis(j_,e)}rotateZ(e){return this.rotateOnAxis(X_,e)}translateOnAxis(e,i){return V_.copy(e).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(k_,e)}translateY(e){return this.translateOnAxis(j_,e)}translateZ(e){return this.translateOnAxis(X_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?hu.copy(e):hu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(_l,hu,this.up):Ua.lookAt(hu,_l,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),$r.setFromRotationMatrix(Ua),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q_),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(KE),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q_),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,YE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,ZE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let p=0,y=g.length;p<y;p++){const m=g[p];f(e.shapes,m)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,p=this.material.length;g<p;g++)h.push(f(e.materials,this.material[g]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];l.animations.push(f(e.animations,g))}}if(i){const h=d(e.geometries),g=d(e.materials),p=d(e.textures),y=d(e.images),m=d(e.shapes),v=d(e.skeletons),E=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),g.length>0&&(r.materials=g),p.length>0&&(r.textures=p),y.length>0&&(r.images=y),m.length>0&&(r.shapes=m),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const g=[];for(const p in h){const y=h[p];delete y.metadata,g.push(y)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new st(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new st,La=new st,Bh=new st,Oa=new st,eo=new st,no=new st,W_=new st,Fh=new st,Hh=new st,Gh=new st,Vh=new hn,kh=new hn,jh=new hn;class Wi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),qi.subVectors(e,i),l.cross(qi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){qi.subVectors(l,i),La.subVectors(r,i),Bh.subVectors(e,i);const d=qi.dot(qi),h=qi.dot(La),g=qi.dot(Bh),p=La.dot(La),y=La.dot(Bh),m=d*p-h*h;if(m===0)return f.set(0,0,0),null;const v=1/m,E=(p*g-h*y)*v,T=(d*y-h*g)*v;return f.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(e,i,r,l,f,d,h,g){return this.getBarycoord(e,i,r,l,Oa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Oa.x),g.addScaledVector(d,Oa.y),g.addScaledVector(h,Oa.z),g)}static getInterpolatedAttribute(e,i,r,l,f,d){return Vh.setScalar(0),kh.setScalar(0),jh.setScalar(0),Vh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,r),jh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Vh,f.x),d.addScaledVector(kh,f.y),d.addScaledVector(jh,f.z),d}static isFrontFacing(e,i,r,l){return qi.subVectors(r,i),La.subVectors(e,i),qi.cross(La).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),qi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let d,h;eo.subVectors(l,r),no.subVectors(f,r),Fh.subVectors(e,r);const g=eo.dot(Fh),p=no.dot(Fh);if(g<=0&&p<=0)return i.copy(r);Hh.subVectors(e,l);const y=eo.dot(Hh),m=no.dot(Hh);if(y>=0&&m<=y)return i.copy(l);const v=g*m-y*p;if(v<=0&&g>=0&&y<=0)return d=g/(g-y),i.copy(r).addScaledVector(eo,d);Gh.subVectors(e,f);const E=eo.dot(Gh),T=no.dot(Gh);if(T>=0&&E<=T)return i.copy(f);const D=E*p-g*T;if(D<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(no,h);const x=y*T-E*m;if(x<=0&&m-y>=0&&E-T>=0)return W_.subVectors(f,l),h=(m-y)/(m-y+(E-T)),i.copy(l).addScaledVector(W_,h);const S=1/(x+D+v);return d=D*S,h=v*S,i.copy(r).addScaledVector(eo,d).addScaledVector(no,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},pu={h:0,s:0,l:0};function Xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Be.workingColorSpace){return this.r=e,this.g=i,this.b=r,Be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Be.workingColorSpace){if(e=zE(e,1),i=Ue(i,0,1),r=Ue(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Xh(d,f,e+1/3),this.g=Xh(d,f,e),this.b=Xh(d,f,e-1/3)}return Be.colorSpaceToWorking(this,l),this}setStyle(e,i=yi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const r=fy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Be.workingToColorSpace(Xn.copy(this),e),Math.round(Ue(Xn.r*255,0,255))*65536+Math.round(Ue(Xn.g*255,0,255))*256+Math.round(Ue(Xn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Be.workingColorSpace){Be.workingToColorSpace(Xn.copy(this),i);const r=Xn.r,l=Xn.g,f=Xn.b,d=Math.max(r,l,f),h=Math.min(r,l,f);let g,p;const y=(h+d)/2;if(h===d)g=0,p=0;else{const m=d-h;switch(p=y<=.5?m/(d+h):m/(2-d-h),d){case r:g=(l-f)/m+(l<f?6:0);break;case l:g=(f-r)/m+2;break;case f:g=(r-l)/m+4;break}g/=6}return e.h=g,e.s=p,e.l=y,e}getRGB(e,i=Be.workingColorSpace){return Be.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=yi){Be.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,r=Xn.g,l=Xn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+i,ms.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ms),e.getHSL(pu);const r=Rh(ms.h,pu.h,i),l=Rh(ms.s,pu.s,i),f=Rh(ms.l,pu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Ce;Ce.NAMES=fy;let QE=0;class Eo extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=fo,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=lp,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(r.blending=this.blending),this.side!==ys&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==op&&(r.blendSrc=this.blendSrc),this.blendDst!==lp&&(r.blendDst=this.blendDst),this.blendEquation!==Qs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gu extends Eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new st,mu=new Le;let JE=0;class Pi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=O_,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mu.fromBufferAttribute(this,i),mu.applyMatrix3(e),this.setXY(i,mu.x,mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ml(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ri(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ml(i,this.array)),i}setX(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ml(i,this.array)),i}setY(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ml(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ml(i,this.array)),i}setW(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),l=ri(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),l=ri(l,this.array),f=ri(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O_&&(e.usage=this.usage),e}}class dy extends Pi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class hy extends Pi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class mn extends Pi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let $E=0;const Oi=new sn,qh=new On,io=new st,xi=new sr,xl=new sr,Un=new st;class ti extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oy(e)?hy:dy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new xe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,i,r){return Oi.makeTranslation(e,i,r),this.applyMatrix4(Oi),this}scale(e,i,r){return Oi.makeScale(e,i,r),this.applyMatrix4(Oi),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new mn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];xi.setFromBufferAttribute(f),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];xl.setFromBufferAttribute(h),this.morphTargetsRelative?(Un.addVectors(xi.min,xl.min),xi.expandByPoint(Un),Un.addVectors(xi.max,xl.max),xi.expandByPoint(Un)):(xi.expandByPoint(xl.min),xi.expandByPoint(xl.max))}xi.getCenter(r);let l=0;for(let f=0,d=e.count;f<d;f++)Un.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Un));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],g=this.morphTargetsRelative;for(let p=0,y=h.count;p<y;p++)Un.fromBufferAttribute(h,p),g&&(io.fromBufferAttribute(e,p),Un.add(io)),l=Math.max(l,r.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],g=[];for(let G=0;G<r.count;G++)h[G]=new st,g[G]=new st;const p=new st,y=new st,m=new st,v=new Le,E=new Le,T=new Le,D=new st,x=new st;function S(G,w,C){p.fromBufferAttribute(r,G),y.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),v.fromBufferAttribute(f,G),E.fromBufferAttribute(f,w),T.fromBufferAttribute(f,C),y.sub(p),m.sub(p),E.sub(v),T.sub(v);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(D.copy(y).multiplyScalar(T.y).addScaledVector(m,-E.y).multiplyScalar(k),x.copy(m).multiplyScalar(E.x).addScaledVector(y,-T.x).multiplyScalar(k),h[G].add(D),h[w].add(D),h[C].add(D),g[G].add(x),g[w].add(x),g[C].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let G=0,w=L.length;G<w;++G){const C=L[G],k=C.start,W=C.count;for(let et=k,St=k+W;et<St;et+=3)S(e.getX(et+0),e.getX(et+1),e.getX(et+2))}const I=new st,R=new st,P=new st,O=new st;function B(G){P.fromBufferAttribute(l,G),O.copy(P);const w=h[G];I.copy(w),I.sub(P.multiplyScalar(P.dot(w))).normalize(),R.crossVectors(O,w);const k=R.dot(g[G])<0?-1:1;d.setXYZW(G,I.x,I.y,I.z,k)}for(let G=0,w=L.length;G<w;++G){const C=L[G],k=C.start,W=C.count;for(let et=k,St=k+W;et<St;et+=3)B(e.getX(et+0)),B(e.getX(et+1)),B(e.getX(et+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const l=new st,f=new st,d=new st,h=new st,g=new st,p=new st,y=new st,m=new st;if(e)for(let v=0,E=e.count;v<E;v+=3){const T=e.getX(v+0),D=e.getX(v+1),x=e.getX(v+2);l.fromBufferAttribute(i,T),f.fromBufferAttribute(i,D),d.fromBufferAttribute(i,x),y.subVectors(d,f),m.subVectors(l,f),y.cross(m),h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),p.fromBufferAttribute(r,x),h.add(y),g.add(y),p.add(y),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(D,g.x,g.y,g.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),y.subVectors(d,f),m.subVectors(l,f),y.cross(m),r.setXYZ(v+0,y.x,y.y,y.z),r.setXYZ(v+1,y.x,y.y,y.z),r.setXYZ(v+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Un.fromBufferAttribute(e,i),Un.normalize(),e.setXYZ(i,Un.x,Un.y,Un.z)}toNonIndexed(){function e(h,g){const p=h.array,y=h.itemSize,m=h.normalized,v=new p.constructor(g.length*y);let E=0,T=0;for(let D=0,x=g.length;D<x;D++){h.isInterleavedBufferAttribute?E=g[D]*h.data.stride+h.offset:E=g[D]*y;for(let S=0;S<y;S++)v[T++]=p[E++]}return new Pi(v,y,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,r=this.index.array,l=this.attributes;for(const h in l){const g=l[h],p=e(g,r);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const g=[],p=f[h];for(let y=0,m=p.length;y<m;y++){const v=p[y],E=e(v,r);g.push(E)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const p=r[g];e.data.attributes[g]=p.toJSON(e.data)}const l={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],y=[];for(let m=0,v=p.length;m<v;m++){const E=p[m];y.push(E.toJSON(e.data))}y.length>0&&(l[g]=y,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const f=e.morphAttributes;for(const p in f){const y=[],m=f[p];for(let v=0,E=m.length;v<E;v++)y.push(m[v].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,y=d.length;p<y;p++){const m=d[p];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y_=new sn,js=new cy,gu=new Mo,Z_=new st,vu=new st,_u=new st,xu=new st,Wh=new st,yu=new st,K_=new st,Su=new st;class Ve extends On{constructor(e=new ti,i=new Gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){yu.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const y=h[g],m=f[g];y!==0&&(Wh.fromBufferAttribute(m,e),d?yu.addScaledVector(Wh,y):yu.addScaledVector(Wh.sub(i),y))}i.add(yu)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gu.copy(r.boundingSphere),gu.applyMatrix4(f),js.copy(e.ray).recast(e.near),!(gu.containsPoint(js.origin)===!1&&(js.intersectSphere(gu,Z_)===null||js.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(Y_.copy(f).invert(),js.copy(e.ray).applyMatrix4(Y_),!(r.boundingBox!==null&&js.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,js)))}_computeIntersections(e,i,r){let l;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,p=f.attributes.uv,y=f.attributes.uv1,m=f.attributes.normal,v=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,D=v.length;T<D;T++){const x=v[T],S=d[x.materialIndex],L=Math.max(x.start,E.start),I=Math.min(h.count,Math.min(x.start+x.count,E.start+E.count));for(let R=L,P=I;R<P;R+=3){const O=h.getX(R),B=h.getX(R+1),G=h.getX(R+2);l=Mu(this,S,e,r,p,y,m,O,B,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(h.count,E.start+E.count);for(let x=T,S=D;x<S;x+=3){const L=h.getX(x),I=h.getX(x+1),R=h.getX(x+2);l=Mu(this,d,e,r,p,y,m,L,I,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let T=0,D=v.length;T<D;T++){const x=v[T],S=d[x.materialIndex],L=Math.max(x.start,E.start),I=Math.min(g.count,Math.min(x.start+x.count,E.start+E.count));for(let R=L,P=I;R<P;R+=3){const O=R,B=R+1,G=R+2;l=Mu(this,S,e,r,p,y,m,O,B,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(g.count,E.start+E.count);for(let x=T,S=D;x<S;x+=3){const L=x,I=x+1,R=x+2;l=Mu(this,d,e,r,p,y,m,L,I,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function tT(o,e,i,r,l,f,d,h){let g;if(e.side===Jn?g=r.intersectTriangle(d,f,l,!0,h):g=r.intersectTriangle(l,f,d,e.side===ys,h),g===null)return null;Su.copy(h),Su.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Su);return p<i.near||p>i.far?null:{distance:p,point:Su.clone(),object:o}}function Mu(o,e,i,r,l,f,d,h,g,p){o.getVertexPosition(h,vu),o.getVertexPosition(g,_u),o.getVertexPosition(p,xu);const y=tT(o,e,i,r,vu,_u,xu,K_);if(y){const m=new st;Wi.getBarycoord(K_,vu,_u,xu,m),l&&(y.uv=Wi.getInterpolatedAttribute(l,h,g,p,m,new Le)),f&&(y.uv1=Wi.getInterpolatedAttribute(f,h,g,p,m,new Le)),d&&(y.normal=Wi.getInterpolatedAttribute(d,h,g,p,m,new st),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const v={a:h,b:g,c:p,normal:new st,materialIndex:0};Wi.getNormal(vu,_u,xu,v.normal),y.face=v,y.barycoord=m}return y}class ar extends ti{constructor(e=1,i=1,r=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const g=[],p=[],y=[],m=[];let v=0,E=0;T("z","y","x",-1,-1,r,i,e,d,f,0),T("z","y","x",1,-1,r,i,-e,d,f,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,f,4),T("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(g),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(m,2));function T(D,x,S,L,I,R,P,O,B,G,w){const C=R/B,k=P/G,W=R/2,et=P/2,St=O/2,ft=B+1,K=G+1;let dt=0,Q=0;const At=new st;for(let Ct=0;Ct<K;Ct++){const Ht=Ct*k-et;for(let oe=0;oe<ft;oe++){const ge=oe*C-W;At[D]=ge*L,At[x]=Ht*I,At[S]=St,p.push(At.x,At.y,At.z),At[D]=0,At[x]=0,At[S]=O>0?1:-1,y.push(At.x,At.y,At.z),m.push(oe/B),m.push(1-Ct/G),dt+=1}}for(let Ct=0;Ct<G;Ct++)for(let Ht=0;Ht<B;Ht++){const oe=v+Ht+ft*Ct,ge=v+Ht+ft*(Ct+1),V=v+(Ht+1)+ft*(Ct+1),ct=v+(Ht+1)+ft*Ct;g.push(oe,ge,ct),g.push(ge,V,ct),Q+=6}h.addGroup(E,Q,w),E+=Q,v+=dt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Qn(o){const e={};for(let i=0;i<o.length;i++){const r=xo(o[i]);for(const l in r)e[l]=r[l]}return e}function eT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function py(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const nT={clone:xo,merge:Qn};var iT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iT,this.fragmentShader=aT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=eT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class my extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=fa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new st,Q_=new Le,J_=new Le;class zi extends my{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yp*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,i){return this.getViewBounds(e,Q_,J_),i.subVectors(J_,Q_)}setViewOffset(e,i,r,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ah*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;f+=d.offsetX*l/g,i-=d.offsetY*r/p,l*=d.width/g,r*=d.height/p}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ao=-90,so=1;class sT extends On{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new zi(ao,so,e,i);l.layers=this.layers,this.add(l);const f=new zi(ao,so,e,i);f.layers=this.layers,this.add(f);const d=new zi(ao,so,e,i);d.layers=this.layers,this.add(d);const h=new zi(ao,so,e,i);h.layers=this.layers,this.add(h);const g=new zi(ao,so,e,i);g.layers=this.layers,this.add(g);const p=new zi(ao,so,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,d,h,g]=i;for(const p of i)this.remove(p);if(e===fa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Fu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,p,y]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,g),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),e.render(i,y),e.setRenderTarget(m,v,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class gy extends $n{constructor(e=[],i=go,r,l,f,d,h,g,p,y){super(e,i,r,l,f,d,h,g,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rT extends ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new gy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ar(5,5,5),f=new Ia({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:_s});f.uniforms.tEquirect.value=i;const d=new Ve(l,f),h=i.minFilter;return i.minFilter===er&&(i.minFilter=ca),new sT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(f)}}class Ln extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oT={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,d=null;const h=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const D of e.hand.values()){const x=i.getJointPose(D,r),S=this._getHandJoint(p,D);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const y=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],v=y.position.distanceTo(m.position),E=.02,T=.005;p.inputState.pinching&&v>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(oT)))}return h!==null&&(h.visible=l!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ln;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class om{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=i,this.far=r}clone(){return new om(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lT extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cT extends $n{constructor(e=null,i=1,r=1,l,f,d,h,g,p=Mi,y=Mi,m,v){super(null,d,h,g,p,y,l,f,m,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $_ extends Pi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ro=new sn,tx=new sn,Eu=[],ex=new sr,uT=new sn,yl=new Ve,Sl=new Mo;class fT extends Ve{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new $_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,uT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ro),ex.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(ex)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ro),Sl.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(Sl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,f=r.length+1,d=e*f+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(yl.geometry=this.geometry,yl.material=this.material,yl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sl.copy(this.boundingSphere),Sl.applyMatrix4(r),e.ray.intersectsSphere(Sl)!==!1))for(let f=0;f<l;f++){this.getMatrixAt(f,ro),tx.multiplyMatrices(r,ro),yl.matrixWorld=tx,yl.raycast(e,Eu);for(let d=0,h=Eu.length;d<h;d++){const g=Eu[d];g.instanceId=f,g.object=this,i.push(g)}Eu.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new $_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new cT(new Float32Array(l*this.count),l,this.count,nm,ua));const f=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,g=l*e;f[g]=h,f.set(r,g+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zh=new st,dT=new st,hT=new xe;class Zs{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Zh.subVectors(r,i).cross(dT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Zh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||hT.getNormalMatrix(e),l=this.coplanarPoint(Zh).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Mo,pT=new Le(.5,.5),Tu=new st;class lm{constructor(e=new Zs,i=new Zs,r=new Zs,l=new Zs,f=new Zs,d=new Zs){this.planes=[e,i,r,l,f,d]}set(e,i,r,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=fa,r=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],g=f[2],p=f[3],y=f[4],m=f[5],v=f[6],E=f[7],T=f[8],D=f[9],x=f[10],S=f[11],L=f[12],I=f[13],R=f[14],P=f[15];if(l[0].setComponents(p-d,E-y,S-T,P-L).normalize(),l[1].setComponents(p+d,E+y,S+T,P+L).normalize(),l[2].setComponents(p+h,E+m,S+D,P+I).normalize(),l[3].setComponents(p-h,E-m,S-D,P-I).normalize(),r)l[4].setComponents(g,v,x,R).normalize(),l[5].setComponents(p-g,E-v,S-x,P-R).normalize();else if(l[4].setComponents(p-g,E-v,S-x,P-R).normalize(),i===fa)l[5].setComponents(p+g,E+v,S+x,P+R).normalize();else if(i===Fu)l[5].setComponents(g,v,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const i=pT.distanceTo(e.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tu.x=l.normal.x>0?e.max.x:e.min.x,Tu.y=l.normal.y>0?e.max.y:e.min.y,Tu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vy extends Eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nx=new sn,Zp=new cy,bu=new Mo,Au=new st;class ix extends On{constructor(e=new ti,i=new vy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(l),bu.radius+=f,e.ray.intersectsSphere(bu)===!1)return;nx.copy(l).invert(),Zp.copy(e.ray).applyMatrix4(nx);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),g=h*h,p=r.index,m=r.attributes.position;if(p!==null){const v=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let T=v,D=E;T<D;T++){const x=p.getX(T);Au.fromBufferAttribute(m,x),ax(Au,x,g,l,e,i,this)}}else{const v=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let T=v,D=E;T<D;T++)Au.fromBufferAttribute(m,T),ax(Au,T,g,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function ax(o,e,i,r,l,f,d){const h=Zp.distanceSqToPoint(o);if(h<i){const g=new st;Zp.closestPointToPoint(o,g),g.applyMatrix4(r);const p=l.ray.origin.distanceTo(g);if(p<l.near||p>l.far)return;f.push({distance:p,distanceToRay:Math.sqrt(h),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class _y extends $n{constructor(e,i,r=nr,l,f,d,h=Mi,g=Mi,p,y=Cl,m=1){if(y!==Cl&&y!==wl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:m};super(v,l,f,d,h,g,y,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class xy extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nl extends ti{constructor(e=1,i=1,r=1,l=32,f=1,d=!1,h=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:g};const p=this;l=Math.floor(l),f=Math.floor(f);const y=[],m=[],v=[],E=[];let T=0;const D=[],x=r/2;let S=0;L(),d===!1&&(e>0&&I(!0),i>0&&I(!1)),this.setIndex(y),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(E,2));function L(){const R=new st,P=new st;let O=0;const B=(i-e)/r;for(let G=0;G<=f;G++){const w=[],C=G/f,k=C*(i-e)+e;for(let W=0;W<=l;W++){const et=W/l,St=et*g+h,ft=Math.sin(St),K=Math.cos(St);P.x=k*ft,P.y=-C*r+x,P.z=k*K,m.push(P.x,P.y,P.z),R.set(ft,B,K).normalize(),v.push(R.x,R.y,R.z),E.push(et,1-C),w.push(T++)}D.push(w)}for(let G=0;G<l;G++)for(let w=0;w<f;w++){const C=D[w][G],k=D[w+1][G],W=D[w+1][G+1],et=D[w][G+1];(e>0||w!==0)&&(y.push(C,k,et),O+=3),(i>0||w!==f-1)&&(y.push(k,W,et),O+=3)}p.addGroup(S,O,0),S+=O}function I(R){const P=T,O=new Le,B=new st;let G=0;const w=R===!0?e:i,C=R===!0?1:-1;for(let W=1;W<=l;W++)m.push(0,x*C,0),v.push(0,C,0),E.push(.5,.5),T++;const k=T;for(let W=0;W<=l;W++){const St=W/l*g+h,ft=Math.cos(St),K=Math.sin(St);B.x=w*K,B.y=x*C,B.z=w*ft,m.push(B.x,B.y,B.z),v.push(0,C,0),O.x=ft*.5+.5,O.y=K*.5*C+.5,E.push(O.x,O.y),T++}for(let W=0;W<l;W++){const et=P+W,St=k+W;R===!0?y.push(St,St+1,et):y.push(St+1,St,et),G+=3}p.addGroup(S,G,R===!0?1:2),S+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cm extends Nl{constructor(e=1,i=1,r=32,l=1,f=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,f,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:f,thetaStart:d,thetaLength:h}}static fromJSON(e){return new cm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class um extends ti{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const f=[],d=[];h(l),p(r),y(),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(f.slice(),3)),this.setAttribute("uv",new mn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const I=new st,R=new st,P=new st;for(let O=0;O<i.length;O+=3)E(i[O+0],I),E(i[O+1],R),E(i[O+2],P),g(I,R,P,L)}function g(L,I,R,P){const O=P+1,B=[];for(let G=0;G<=O;G++){B[G]=[];const w=L.clone().lerp(R,G/O),C=I.clone().lerp(R,G/O),k=O-G;for(let W=0;W<=k;W++)W===0&&G===O?B[G][W]=w:B[G][W]=w.clone().lerp(C,W/k)}for(let G=0;G<O;G++)for(let w=0;w<2*(O-G)-1;w++){const C=Math.floor(w/2);w%2===0?(v(B[G][C+1]),v(B[G+1][C]),v(B[G][C])):(v(B[G][C+1]),v(B[G+1][C+1]),v(B[G+1][C]))}}function p(L){const I=new st;for(let R=0;R<f.length;R+=3)I.x=f[R+0],I.y=f[R+1],I.z=f[R+2],I.normalize().multiplyScalar(L),f[R+0]=I.x,f[R+1]=I.y,f[R+2]=I.z}function y(){const L=new st;for(let I=0;I<f.length;I+=3){L.x=f[I+0],L.y=f[I+1],L.z=f[I+2];const R=x(L)/2/Math.PI+.5,P=S(L)/Math.PI+.5;d.push(R,1-P)}T(),m()}function m(){for(let L=0;L<d.length;L+=6){const I=d[L+0],R=d[L+2],P=d[L+4],O=Math.max(I,R,P),B=Math.min(I,R,P);O>.9&&B<.1&&(I<.2&&(d[L+0]+=1),R<.2&&(d[L+2]+=1),P<.2&&(d[L+4]+=1))}}function v(L){f.push(L.x,L.y,L.z)}function E(L,I){const R=L*3;I.x=e[R+0],I.y=e[R+1],I.z=e[R+2]}function T(){const L=new st,I=new st,R=new st,P=new st,O=new Le,B=new Le,G=new Le;for(let w=0,C=0;w<f.length;w+=9,C+=6){L.set(f[w+0],f[w+1],f[w+2]),I.set(f[w+3],f[w+4],f[w+5]),R.set(f[w+6],f[w+7],f[w+8]),O.set(d[C+0],d[C+1]),B.set(d[C+2],d[C+3]),G.set(d[C+4],d[C+5]),P.copy(L).add(I).add(R).divideScalar(3);const k=x(P);D(O,C+0,L,k),D(B,C+2,I,k),D(G,C+4,R,k)}}function D(L,I,R,P){P<0&&L.x===1&&(d[I]=L.x-1),R.x===0&&R.z===0&&(d[I]=P/2/Math.PI+.5)}function x(L){return Math.atan2(L.z,-L.x)}function S(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new um(e.vertices,e.indices,e.radius,e.details)}}class fm extends um{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,f,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new fm(e.radius,e.detail)}}class yo extends ti{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(r),g=Math.floor(l),p=h+1,y=g+1,m=e/h,v=i/g,E=[],T=[],D=[],x=[];for(let S=0;S<y;S++){const L=S*v-d;for(let I=0;I<p;I++){const R=I*m-f;T.push(R,-L,0),D.push(0,0,1),x.push(I/h),x.push(1-S/g)}}for(let S=0;S<g;S++)for(let L=0;L<h;L++){const I=L+p*S,R=L+p*(S+1),P=L+1+p*(S+1),O=L+1+p*S;E.push(I,R,O),E.push(R,P,O)}this.setIndex(E),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(D,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Js extends ti{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const g=Math.min(d+h,Math.PI);let p=0;const y=[],m=new st,v=new st,E=[],T=[],D=[],x=[];for(let S=0;S<=r;S++){const L=[],I=S/r;let R=0;S===0&&d===0?R=.5/i:S===r&&g===Math.PI&&(R=-.5/i);for(let P=0;P<=i;P++){const O=P/i;m.x=-e*Math.cos(l+O*f)*Math.sin(d+I*h),m.y=e*Math.cos(d+I*h),m.z=e*Math.sin(l+O*f)*Math.sin(d+I*h),T.push(m.x,m.y,m.z),v.copy(m).normalize(),D.push(v.x,v.y,v.z),x.push(O+R,1-I),L.push(p++)}y.push(L)}for(let S=0;S<r;S++)for(let L=0;L<i;L++){const I=y[S][L+1],R=y[S][L],P=y[S+1][L],O=y[S+1][L+1];(S!==0||d>0)&&E.push(I,R,O),(S!==r-1||g<Math.PI)&&E.push(R,P,O)}this.setIndex(E),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(D,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vu extends ti{constructor(e=1,i=.4,r=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:f},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],g=[],p=[],y=new st,m=new st,v=new st;for(let E=0;E<=r;E++)for(let T=0;T<=l;T++){const D=T/l*f,x=E/r*Math.PI*2;m.x=(e+i*Math.cos(x))*Math.cos(D),m.y=(e+i*Math.cos(x))*Math.sin(D),m.z=i*Math.sin(x),h.push(m.x,m.y,m.z),y.x=e*Math.cos(D),y.y=e*Math.sin(D),v.subVectors(m,y).normalize(),g.push(v.x,v.y,v.z),p.push(T/l),p.push(E/r)}for(let E=1;E<=r;E++)for(let T=1;T<=l;T++){const D=(l+1)*E+T-1,x=(l+1)*(E-1)+T-1,S=(l+1)*(E-1)+T,L=(l+1)*E+T;d.push(D,x,L),d.push(x,S,L)}this.setIndex(d),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ru extends Eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sy,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mT extends Eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gT extends Eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yy extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class vT extends yy{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Kh=new sn,sx=new st,rx=new st;class _T{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=da,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lm,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;sx.setFromMatrixPosition(e.matrixWorld),i.position.copy(sx),rx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(rx),i.updateMatrixWorld(),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sy extends my{constructor(e=-1,i=1,r=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=y*this.view.offsetY,g=h-y*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xT extends _T{constructor(){super(new Sy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yT extends yy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new xT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ST extends zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ox(o,e,i,r){const l=MT(r);switch(i){case ny:return o*e;case nm:return o*e/l.components*l.byteLength;case im:return o*e/l.components*l.byteLength;case ay:return o*e*2/l.components*l.byteLength;case am:return o*e*2/l.components*l.byteLength;case iy:return o*e*3/l.components*l.byteLength;case Yi:return o*e*4/l.components*l.byteLength;case sm:return o*e*4/l.components*l.byteLength;case Uu:case Lu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ou:case zu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:case Ep:return Math.max(o,16)*Math.max(e,8)/4;case yp:case Mp:return Math.max(o,8)*Math.max(e,8)/2;case Tp:case bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Gp:case Vp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case jp:case Xp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qp:case Wp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MT(o){switch(o){case da:case Jx:return{byteLength:1,components:1};case Al:case $x:case Ul:return{byteLength:2,components:1};case tm:case em:return{byteLength:2,components:4};case nr:case $p:case ua:return{byteLength:4,components:1};case ty:case ey:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function My(){let o=null,e=!1,i=null,r=null;function l(f,d){i(f,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function ET(o){const e=new WeakMap;function i(h,g){const p=h.array,y=h.usage,m=p.byteLength,v=o.createBuffer();o.bindBuffer(g,v),o.bufferData(g,p,y),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:m}}function r(h,g,p){const y=g.array,m=g.updateRanges;if(o.bindBuffer(p,h),m.length===0)o.bufferSubData(p,0,y);else{m.sort((E,T)=>E.start-T.start);let v=0;for(let E=1;E<m.length;E++){const T=m[v],D=m[E];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++v,m[v]=D)}m.length=v+1;for(let E=0,T=m.length;E<T;E++){const D=m[E];o.bufferSubData(p,D.start*y.BYTES_PER_ELEMENT,y,D.start,D.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=e.get(h);g&&(o.deleteBuffer(g.buffer),e.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=e.get(h);(!y||y.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,g));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,g),p.version=h.version}}return{get:l,remove:f,update:d}}var TT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
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
#endif`,AT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UT=`#ifdef USE_BATCHING
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
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IT=`#ifdef USE_IRIDESCENCE
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
#endif`,BT=`#ifdef USE_BUMPMAP
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,WT=`#define PI 3.141592653589793
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
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZT=`vec3 transformedNormal = objectNormal;
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
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
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
}`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
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
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sb=`PhysicalMaterial material;
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
#endif`,Mb=`struct PhysicalMaterial {
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
}`,Eb=`
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
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
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
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
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lA=`float getShadowMask() {
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
}`,cA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,fA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dA=`#ifdef USE_SKINNING
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
#endif`,hA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
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
#endif`,_A=`#ifdef USE_TRANSMISSION
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TA=`uniform sampler2D t2D;
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
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`#include <common>
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
}`,DA=`#if DEPTH_PACKING == 3200
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
}`,NA=`#define DISTANCE
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
}`,UA=`#define DISTANCE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`uniform float scale;
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
}`,PA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,FA=`#define LAMBERT
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
}`,HA=`#define LAMBERT
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
}`,GA=`#define MATCAP
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
}`,VA=`#define MATCAP
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
}`,kA=`#define NORMAL
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
}`,jA=`#define NORMAL
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
}`,XA=`#define PHONG
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
}`,qA=`#define PHONG
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
}`,WA=`#define STANDARD
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
}`,YA=`#define STANDARD
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
}`,ZA=`#define TOON
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
}`,KA=`#define TOON
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
}`,QA=`uniform float size;
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
}`,JA=`uniform vec3 diffuse;
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
}`,$A=`#include <common>
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
}`,t2=`uniform vec3 color;
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
}`,e2=`uniform float rotation;
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
}`,n2=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:TT,alphahash_pars_fragment:bT,alphamap_fragment:AT,alphamap_pars_fragment:RT,alphatest_fragment:CT,alphatest_pars_fragment:wT,aomap_fragment:DT,aomap_pars_fragment:NT,batching_pars_vertex:UT,batching_vertex:LT,begin_vertex:OT,beginnormal_vertex:zT,bsdfs:PT,iridescence_fragment:IT,bumpmap_pars_fragment:BT,clipping_planes_fragment:FT,clipping_planes_pars_fragment:HT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:VT,color_fragment:kT,color_pars_fragment:jT,color_pars_vertex:XT,color_vertex:qT,common:WT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:ZT,displacementmap_pars_vertex:KT,displacementmap_vertex:QT,emissivemap_fragment:JT,emissivemap_pars_fragment:$T,colorspace_fragment:tb,colorspace_pars_fragment:eb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:ab,envmap_pars_vertex:sb,envmap_physical_pars_fragment:gb,envmap_vertex:rb,fog_vertex:ob,fog_pars_vertex:lb,fog_fragment:cb,fog_pars_fragment:ub,gradientmap_pars_fragment:fb,lightmap_pars_fragment:db,lights_lambert_fragment:hb,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:vb,lights_toon_pars_fragment:_b,lights_phong_fragment:xb,lights_phong_pars_fragment:yb,lights_physical_fragment:Sb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Eb,lights_fragment_maps:Tb,lights_fragment_end:bb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Rb,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:wb,map_fragment:Db,map_pars_fragment:Nb,map_particle_fragment:Ub,map_particle_pars_fragment:Lb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:zb,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Bb,morphtarget_pars_vertex:Fb,morphtarget_vertex:Hb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:kb,normal_pars_vertex:jb,normal_vertex:Xb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Kb,opaque_fragment:Qb,packing:Jb,premultiplied_alpha_fragment:$b,project_vertex:tA,dithering_fragment:eA,dithering_pars_fragment:nA,roughnessmap_fragment:iA,roughnessmap_pars_fragment:aA,shadowmap_pars_fragment:sA,shadowmap_pars_vertex:rA,shadowmap_vertex:oA,shadowmask_pars_fragment:lA,skinbase_vertex:cA,skinning_pars_vertex:uA,skinning_vertex:fA,skinnormal_vertex:dA,specularmap_fragment:hA,specularmap_pars_fragment:pA,tonemapping_fragment:mA,tonemapping_pars_fragment:gA,transmission_fragment:vA,transmission_pars_fragment:_A,uv_pars_fragment:xA,uv_pars_vertex:yA,uv_vertex:SA,worldpos_vertex:MA,background_vert:EA,background_frag:TA,backgroundCube_vert:bA,backgroundCube_frag:AA,cube_vert:RA,cube_frag:CA,depth_vert:wA,depth_frag:DA,distanceRGBA_vert:NA,distanceRGBA_frag:UA,equirect_vert:LA,equirect_frag:OA,linedashed_vert:zA,linedashed_frag:PA,meshbasic_vert:IA,meshbasic_frag:BA,meshlambert_vert:FA,meshlambert_frag:HA,meshmatcap_vert:GA,meshmatcap_frag:VA,meshnormal_vert:kA,meshnormal_frag:jA,meshphong_vert:XA,meshphong_frag:qA,meshphysical_vert:WA,meshphysical_frag:YA,meshtoon_vert:ZA,meshtoon_frag:KA,points_vert:QA,points_frag:JA,shadow_vert:$A,shadow_frag:t2,sprite_vert:e2,sprite_frag:n2},Kt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},oa={basic:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Qn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Qn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Qn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Qn([Kt.points,Kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Qn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Qn([Kt.common,Kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Qn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Qn([Kt.sprite,Kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Qn([Kt.common,Kt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Qn([Kt.lights,Kt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};oa.physical={uniforms:Qn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Cu={r:0,b:0,g:0},qs=new ha,i2=new sn;function a2(o,e,i,r,l,f,d){const h=new Ce(0);let g=f===!0?0:1,p,y,m=null,v=0,E=null;function T(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?i:e).get(R)),R}function D(I){let R=!1;const P=T(I);P===null?S(h,g):P&&P.isColor&&(S(P,1),R=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(I,R){const P=T(R);P&&(P.isCubeTexture||P.mapping===ku)?(y===void 0&&(y=new Ve(new ar(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:xo(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(O,B,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(y)),qs.copy(R.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),y.material.uniforms.envMap.value=P,y.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(i2.makeRotationFromEuler(qs)),y.material.toneMapped=Be.getTransfer(P.colorSpace)!==Ke,(m!==P||v!==P.version||E!==o.toneMapping)&&(y.material.needsUpdate=!0,m=P,v=P.version,E=o.toneMapping),y.layers.enableAll(),I.unshift(y,y.geometry,y.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ve(new yo(2,2),new Ia({name:"BackgroundMaterial",uniforms:xo(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Be.getTransfer(P.colorSpace)!==Ke,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||v!==P.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,m=P,v=P.version,E=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function S(I,R){I.getRGB(Cu,py(o)),r.buffers.color.setClear(Cu.r,Cu.g,Cu.b,R,d)}function L(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,R=1){h.set(I),g=R,S(h,g)},getClearAlpha:function(){return g},setClearAlpha:function(I){g=I,S(h,g)},render:D,addToRenderList:x,dispose:L}}function s2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let f=l,d=!1;function h(C,k,W,et,St){let ft=!1;const K=m(et,W,k);f!==K&&(f=K,p(f.object)),ft=E(C,et,W,St),ft&&T(C,et,W,St),St!==null&&e.update(St,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,R(C,k,W,et),St!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(St).buffer))}function g(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function y(C){return o.deleteVertexArray(C)}function m(C,k,W){const et=W.wireframe===!0;let St=r[C.id];St===void 0&&(St={},r[C.id]=St);let ft=St[k.id];ft===void 0&&(ft={},St[k.id]=ft);let K=ft[et];return K===void 0&&(K=v(g()),ft[et]=K),K}function v(C){const k=[],W=[],et=[];for(let St=0;St<i;St++)k[St]=0,W[St]=0,et[St]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:et,object:C,attributes:{},index:null}}function E(C,k,W,et){const St=f.attributes,ft=k.attributes;let K=0;const dt=W.getAttributes();for(const Q in dt)if(dt[Q].location>=0){const Ct=St[Q];let Ht=ft[Q];if(Ht===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Ht=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Ht=C.instanceColor)),Ct===void 0||Ct.attribute!==Ht||Ht&&Ct.data!==Ht.data)return!0;K++}return f.attributesNum!==K||f.index!==et}function T(C,k,W,et){const St={},ft=k.attributes;let K=0;const dt=W.getAttributes();for(const Q in dt)if(dt[Q].location>=0){let Ct=ft[Q];Ct===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Ct=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Ct=C.instanceColor));const Ht={};Ht.attribute=Ct,Ct&&Ct.data&&(Ht.data=Ct.data),St[Q]=Ht,K++}f.attributes=St,f.attributesNum=K,f.index=et}function D(){const C=f.newAttributes;for(let k=0,W=C.length;k<W;k++)C[k]=0}function x(C){S(C,0)}function S(C,k){const W=f.newAttributes,et=f.enabledAttributes,St=f.attributeDivisors;W[C]=1,et[C]===0&&(o.enableVertexAttribArray(C),et[C]=1),St[C]!==k&&(o.vertexAttribDivisor(C,k),St[C]=k)}function L(){const C=f.newAttributes,k=f.enabledAttributes;for(let W=0,et=k.length;W<et;W++)k[W]!==C[W]&&(o.disableVertexAttribArray(W),k[W]=0)}function I(C,k,W,et,St,ft,K){K===!0?o.vertexAttribIPointer(C,k,W,St,ft):o.vertexAttribPointer(C,k,W,et,St,ft)}function R(C,k,W,et){D();const St=et.attributes,ft=W.getAttributes(),K=k.defaultAttributeValues;for(const dt in ft){const Q=ft[dt];if(Q.location>=0){let At=St[dt];if(At===void 0&&(dt==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),dt==="instanceColor"&&C.instanceColor&&(At=C.instanceColor)),At!==void 0){const Ct=At.normalized,Ht=At.itemSize,oe=e.get(At);if(oe===void 0)continue;const ge=oe.buffer,V=oe.type,ct=oe.bytesPerElement,Z=V===o.INT||V===o.UNSIGNED_INT||At.gpuType===$p;if(At.isInterleavedBufferAttribute){const rt=At.data,wt=rt.stride,Pt=At.offset;if(rt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Q.locationSize;Lt++)S(Q.location+Lt,rt.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Lt=0;Lt<Q.locationSize;Lt++)x(Q.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Lt=0;Lt<Q.locationSize;Lt++)I(Q.location+Lt,Ht/Q.locationSize,V,Ct,wt*ct,(Pt+Ht/Q.locationSize*Lt)*ct,Z)}else{if(At.isInstancedBufferAttribute){for(let rt=0;rt<Q.locationSize;rt++)S(Q.location+rt,At.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let rt=0;rt<Q.locationSize;rt++)x(Q.location+rt);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let rt=0;rt<Q.locationSize;rt++)I(Q.location+rt,Ht/Q.locationSize,V,Ct,Ht*ct,Ht/Q.locationSize*rt*ct,Z)}}else if(K!==void 0){const Ct=K[dt];if(Ct!==void 0)switch(Ct.length){case 2:o.vertexAttrib2fv(Q.location,Ct);break;case 3:o.vertexAttrib3fv(Q.location,Ct);break;case 4:o.vertexAttrib4fv(Q.location,Ct);break;default:o.vertexAttrib1fv(Q.location,Ct)}}}}L()}function P(){G();for(const C in r){const k=r[C];for(const W in k){const et=k[W];for(const St in et)y(et[St].object),delete et[St];delete k[W]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const W in k){const et=k[W];for(const St in et)y(et[St].object),delete et[St];delete k[W]}delete r[C.id]}function B(C){for(const k in r){const W=r[k];if(W[C.id]===void 0)continue;const et=W[C.id];for(const St in et)y(et[St].object),delete et[St];delete W[C.id]}}function G(){w(),d=!0,f!==l&&(f=l,p(f.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:x,disableUnusedAttributes:L}}function r2(o,e,i){let r;function l(p){r=p}function f(p,y){o.drawArrays(r,p,y),i.update(y,r,1)}function d(p,y,m){m!==0&&(o.drawArraysInstanced(r,p,y,m),i.update(y,r,m))}function h(p,y,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,y,0,m);let E=0;for(let T=0;T<m;T++)E+=y[T];i.update(E,r,1)}function g(p,y,m,v){if(m===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)d(p[T],y[T],v[T]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,y,0,v,0,m);let T=0;for(let D=0;D<m;D++)T+=y[D]*v[D];i.update(T,r,1)}}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function o2(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Yi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const G=B===Ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==da&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ua&&!G)}function g(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=g(p);y!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const m=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=T>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:R,vertexTextures:P,maxSamples:O}}function l2(o){const e=this;let i=null,r=0,l=!1,f=!1;const d=new Zs,h=new xe,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const E=m.length!==0||v||r!==0||l;return l=v,r=m.length,E},this.beginShadows=function(){f=!0,y(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,v){i=y(m,v,0)},this.setState=function(m,v,E){const T=m.clippingPlanes,D=m.clipIntersection,x=m.clipShadows,S=o.get(m);if(!l||T===null||T.length===0||f&&!x)f?y(null):p();else{const L=f?0:r,I=L*4;let R=S.clippingState||null;g.value=R,R=y(T,v,I,E);for(let P=0;P!==I;++P)R[P]=i[P];S.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(m,v,E,T){const D=m!==null?m.length:0;let x=null;if(D!==0){if(x=g.value,T!==!0||x===null){const S=E+D*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(x===null||x.length<S)&&(x=new Float32Array(S));for(let I=0,R=E;I!==D;++I,R+=4)d.copy(m[I]).applyMatrix4(L,h),d.normal.toArray(x,R),x[R+3]=d.constant}g.value=x,g.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,x}}function c2(o){let e=new WeakMap;function i(d,h){return h===gp?d.mapping=go:h===vp&&(d.mapping=vo),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===gp||h===vp)if(e.has(d)){const g=e.get(d).texture;return i(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const p=new rT(g.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const uo=4,lx=[.125,.215,.35,.446,.526,.582],$s=20,Qh=new Sy,cx=new Ce;let Jh=null,$h=0,tp=0,ep=!1;const Ks=(1+Math.sqrt(5))/2,oo=1/Ks,ux=[new st(-Ks,oo,0),new st(Ks,oo,0),new st(-oo,0,Ks),new st(oo,0,Ks),new st(0,Ks,-oo),new st(0,Ks,oo),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],u2=new st;class fx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:d=256,position:h=u2}=f;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,r,l,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,$h,tp),this._renderer.xr.enabled=ep,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===go||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ca,minFilter:ca,generateMipmaps:!1,type:Ul,format:Yi,colorSpace:_o,depthBuffer:!1},l=dx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dx(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f2(f)),this._blurMaterial=d2(f,e,i)}return l}_compileMaterial(e){const i=new Ve(this._lodPlanes[0],e);this._renderer.compile(i,Qh)}_sceneToCubeUV(e,i,r,l,f){const g=new zi(90,1,i,r),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,E=m.toneMapping;m.getClearColor(cx),m.toneMapping=xs,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const D=new Gu({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),x=new Ve(new ar,D);let S=!1;const L=e.background;L?L.isColor&&(D.color.copy(L),e.background=null,S=!0):(D.color.copy(cx),S=!0);for(let I=0;I<6;I++){const R=I%3;R===0?(g.up.set(0,p[I],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+y[I],f.y,f.z)):R===1?(g.up.set(0,0,p[I]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+y[I],f.z)):(g.up.set(0,p[I],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+y[I]));const P=this._cubeSize;wu(l,R*P,I>2?P:0,P,P),m.setRenderTarget(l),S&&m.render(x,g),m.render(e,g)}x.geometry.dispose(),x.material.dispose(),m.toneMapping=E,m.autoClear=v,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===go||e.mapping===vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=px()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hx());const f=l?this._cubemapMaterial:this._equirectMaterial,d=new Ve(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const g=this._cubeSize;wu(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(d,Qh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=ux[(l-f-1)%ux.length];this._blur(e,f-1,f,d,h)}i.autoClear=r}_blur(e,i,r,l,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",f),this._halfBlur(d,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,d,h){const g=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,m=new Ve(this._lodPlanes[l],p),v=p.uniforms,E=this._sizeLods[r]-1,T=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*$s-1),D=f/T,x=isFinite(f)?1+Math.floor(y*D):$s;x>$s&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$s}`);const S=[];let L=0;for(let B=0;B<$s;++B){const G=B/D,w=Math.exp(-G*G/2);S.push(w),B===0?L+=w:B<x&&(L+=2*w)}for(let B=0;B<S.length;B++)S[B]=S[B]/L;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:I}=this;v.dTheta.value=T,v.mipInt.value=I-r;const R=this._sizeLods[l],P=3*R*(l>I-uo?l-I+uo:0),O=4*(this._cubeSize-R);wu(i,P,O,3*R,2*R),g.setRenderTarget(i),g.render(m,Qh)}}function f2(o){const e=[],i=[],r=[];let l=o;const f=o-uo+1+lx.length;for(let d=0;d<f;d++){const h=Math.pow(2,l);i.push(h);let g=1/h;d>o-uo?g=lx[d-o+uo-1]:d===0&&(g=0),r.push(g);const p=1/(h-2),y=-p,m=1+p,v=[y,y,m,y,m,m,y,y,m,m,y,m],E=6,T=6,D=3,x=2,S=1,L=new Float32Array(D*T*E),I=new Float32Array(x*T*E),R=new Float32Array(S*T*E);for(let O=0;O<E;O++){const B=O%3*2/3-1,G=O>2?0:-1,w=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];L.set(w,D*T*O),I.set(v,x*T*O);const C=[O,O,O,O,O,O];R.set(C,S*T*O)}const P=new ti;P.setAttribute("position",new Pi(L,D)),P.setAttribute("uv",new Pi(I,x)),P.setAttribute("faceIndex",new Pi(R,S)),e.push(P),l>uo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function dx(o,e,i){const r=new ir(o,e,i);return r.texture.mapping=ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function d2(o,e,i){const r=new Float32Array($s),l=new st(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dm(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function hx(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dm(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function px(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function dm(){return`

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
	`}function h2(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const g=h.mapping,p=g===gp||g===vp,y=g===go||g===vo;if(p||y){let m=e.get(h);const v=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new fx(o)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const E=h.image;return p&&E&&E.height>0||y&&E&&l(E)?(i===null&&(i=new fx(o)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function l(h){let g=0;const p=6;for(let y=0;y<p;y++)h[y]!==void 0&&g++;return g===p}function f(h){const g=h.target;g.removeEventListener("dispose",f);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function p2(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Dl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function m2(o,e,i,r){const l={},f=new WeakMap;function d(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete l[v.id];const E=f.get(v);E&&(e.remove(E),f.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(m,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function g(m){const v=m.attributes;for(const E in v)e.update(v[E],o.ARRAY_BUFFER)}function p(m){const v=[],E=m.index,T=m.attributes.position;let D=0;if(E!==null){const L=E.array;D=E.version;for(let I=0,R=L.length;I<R;I+=3){const P=L[I+0],O=L[I+1],B=L[I+2];v.push(P,O,O,B,B,P)}}else if(T!==void 0){const L=T.array;D=T.version;for(let I=0,R=L.length/3-1;I<R;I+=3){const P=I+0,O=I+1,B=I+2;v.push(P,O,O,B,B,P)}}else return;const x=new(oy(v)?hy:dy)(v,1);x.version=D;const S=f.get(m);S&&e.remove(S),f.set(m,x)}function y(m){const v=f.get(m);if(v){const E=m.index;E!==null&&v.version<E.version&&p(m)}else p(m);return f.get(m)}return{get:h,update:g,getWireframeAttribute:y}}function g2(o,e,i){let r;function l(v){r=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function g(v,E){o.drawElements(r,E,f,v*d),i.update(E,r,1)}function p(v,E,T){T!==0&&(o.drawElementsInstanced(r,E,f,v*d,T),i.update(E,r,T))}function y(v,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,f,v,0,T);let x=0;for(let S=0;S<T;S++)x+=E[S];i.update(x,r,1)}function m(v,E,T,D){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v.length;S++)p(v[S]/d,E[S],D[S]);else{x.multiDrawElementsInstancedWEBGL(r,E,0,f,v,0,D,0,T);let S=0;for(let L=0;L<T;L++)S+=E[L]*D[L];i.update(S,r,1)}}this.setMode=l,this.setIndex=h,this.render=g,this.renderInstances=p,this.renderMultiDraw=y,this.renderMultiDrawInstances=m}function v2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _2(o,e,i){const r=new WeakMap,l=new hn;function f(d,h,g){const p=d.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=y!==void 0?y.length:0;let v=r.get(h);if(v===void 0||v.count!==m){let C=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var E=C;v!==void 0&&v.texture.dispose();const T=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let R=0;T===!0&&(R=1),D===!0&&(R=2),x===!0&&(R=3);let P=h.attributes.position.count*R,O=1;P>e.maxTextureSize&&(O=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const B=new Float32Array(P*O*4*m),G=new ly(B,P,O,m);G.type=ua,G.needsUpdate=!0;const w=R*4;for(let k=0;k<m;k++){const W=S[k],et=L[k],St=I[k],ft=P*O*4*k;for(let K=0;K<W.count;K++){const dt=K*w;T===!0&&(l.fromBufferAttribute(W,K),B[ft+dt+0]=l.x,B[ft+dt+1]=l.y,B[ft+dt+2]=l.z,B[ft+dt+3]=0),D===!0&&(l.fromBufferAttribute(et,K),B[ft+dt+4]=l.x,B[ft+dt+5]=l.y,B[ft+dt+6]=l.z,B[ft+dt+7]=0),x===!0&&(l.fromBufferAttribute(St,K),B[ft+dt+8]=l.x,B[ft+dt+9]=l.y,B[ft+dt+10]=l.z,B[ft+dt+11]=St.itemSize===4?l.w:1)}}v={count:m,texture:G,size:new Le(P,O)},r.set(h,v),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const D=h.morphTargetsRelative?1:1-T;g.getUniforms().setValue(o,"morphTargetBaseInfluence",D),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function x2(o,e,i,r){let l=new WeakMap;function f(g){const p=r.render.frame,y=g.geometry,m=e.get(g,y);if(l.get(m)!==p&&(e.update(m),l.set(m,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",h)===!1&&g.addEventListener("dispose",h),l.get(g)!==p&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,p))),g.isSkinnedMesh){const v=g.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return m}function d(){l=new WeakMap}function h(g){const p=g.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:d}}const Ey=new $n,mx=new _y(1,1),Ty=new ly,by=new kE,Ay=new gy,gx=[],vx=[],_x=new Float32Array(16),xx=new Float32Array(9),yx=new Float32Array(4);function To(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=gx[l];if(f===void 0&&(f=new Float32Array(l),gx[l]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function An(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Rn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function ju(o,e){let i=vx[e];i===void 0&&(i=new Int32Array(e),vx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function y2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function S2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;o.uniform2fv(this.addr,e),Rn(i,e)}}function M2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(An(i,e))return;o.uniform3fv(this.addr,e),Rn(i,e)}}function E2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;o.uniform4fv(this.addr,e),Rn(i,e)}}function T2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,r))return;yx.set(r),o.uniformMatrix2fv(this.addr,!1,yx),Rn(i,r)}}function b2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,r))return;xx.set(r),o.uniformMatrix3fv(this.addr,!1,xx),Rn(i,r)}}function A2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,r))return;_x.set(r),o.uniformMatrix4fv(this.addr,!1,_x),Rn(i,r)}}function R2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function C2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;o.uniform2iv(this.addr,e),Rn(i,e)}}function w2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;o.uniform3iv(this.addr,e),Rn(i,e)}}function D2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;o.uniform4iv(this.addr,e),Rn(i,e)}}function N2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function U2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;o.uniform2uiv(this.addr,e),Rn(i,e)}}function L2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;o.uniform3uiv(this.addr,e),Rn(i,e)}}function O2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;o.uniform4uiv(this.addr,e),Rn(i,e)}}function z2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(mx.compareFunction=ry,f=mx):f=Ey,i.setTexture2D(e||f,l)}function P2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||by,l)}function I2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ay,l)}function B2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Ty,l)}function F2(o){switch(o){case 5126:return y2;case 35664:return S2;case 35665:return M2;case 35666:return E2;case 35674:return T2;case 35675:return b2;case 35676:return A2;case 5124:case 35670:return R2;case 35667:case 35671:return C2;case 35668:case 35672:return w2;case 35669:case 35673:return D2;case 5125:return N2;case 36294:return U2;case 36295:return L2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return z2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return B2}}function H2(o,e){o.uniform1fv(this.addr,e)}function G2(o,e){const i=To(e,this.size,2);o.uniform2fv(this.addr,i)}function V2(o,e){const i=To(e,this.size,3);o.uniform3fv(this.addr,i)}function k2(o,e){const i=To(e,this.size,4);o.uniform4fv(this.addr,i)}function j2(o,e){const i=To(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function X2(o,e){const i=To(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function q2(o,e){const i=To(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function W2(o,e){o.uniform1iv(this.addr,e)}function Y2(o,e){o.uniform2iv(this.addr,e)}function Z2(o,e){o.uniform3iv(this.addr,e)}function K2(o,e){o.uniform4iv(this.addr,e)}function Q2(o,e){o.uniform1uiv(this.addr,e)}function J2(o,e){o.uniform2uiv(this.addr,e)}function $2(o,e){o.uniform3uiv(this.addr,e)}function tR(o,e){o.uniform4uiv(this.addr,e)}function eR(o,e,i){const r=this.cache,l=e.length,f=ju(i,l);An(r,f)||(o.uniform1iv(this.addr,f),Rn(r,f));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Ey,f[d])}function nR(o,e,i){const r=this.cache,l=e.length,f=ju(i,l);An(r,f)||(o.uniform1iv(this.addr,f),Rn(r,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||by,f[d])}function iR(o,e,i){const r=this.cache,l=e.length,f=ju(i,l);An(r,f)||(o.uniform1iv(this.addr,f),Rn(r,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Ay,f[d])}function aR(o,e,i){const r=this.cache,l=e.length,f=ju(i,l);An(r,f)||(o.uniform1iv(this.addr,f),Rn(r,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Ty,f[d])}function sR(o){switch(o){case 5126:return H2;case 35664:return G2;case 35665:return V2;case 35666:return k2;case 35674:return j2;case 35675:return X2;case 35676:return q2;case 5124:case 35670:return W2;case 35667:case 35671:return Y2;case 35668:case 35672:return Z2;case 35669:case 35673:return K2;case 5125:return Q2;case 36294:return J2;case 36295:return $2;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return aR}}class rR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=F2(i.type)}}class oR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sR(i.type)}}class lR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],r)}}}const np=/(\w+)(\])?(\[|\.)?/g;function Sx(o,e){o.seq.push(e),o.map[e.id]=e}function cR(o,e,i){const r=o.name,l=r.length;for(np.lastIndex=0;;){const f=np.exec(r),d=np.lastIndex;let h=f[1];const g=f[2]==="]",p=f[3];if(g&&(h=h|0),p===void 0||p==="["&&d+2===l){Sx(i,p===void 0?new rR(h,o,e):new oR(h,o,e));break}else{let m=i.map[h];m===void 0&&(m=new lR(h),Sx(i,m)),i=m}}}class Pu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),d=e.getUniformLocation(i,f.name);cR(f,d,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],g=r[h.id];g.needsUpdate!==!1&&h.setValue(e,g.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Mx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const uR=37297;let fR=0;function dR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Ex=new xe;function hR(o){Be._getMatrix(Ex,Be.workingColorSpace,o);const e=`mat3( ${Ex.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(o)){case Bu:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Tx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+dR(o.getShaderSource(e),h)}else return f}function pR(o,e){const i=hR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function mR(o,e){let i;switch(e){case vE:i="Linear";break;case _E:i="Reinhard";break;case xE:i="Cineon";break;case Kx:i="ACESFilmic";break;case SE:i="AgX";break;case ME:i="Neutral";break;case yE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Du=new st;function gR(){Be.getLuminanceCoefficients(Du);const o=Du.x.toFixed(4),e=Du.y.toFixed(4),i=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function _R(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function xR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ml(o){return o!==""}function bx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ax(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kp(o){return o.replace(yR,MR)}const SR=new Map;function MR(o,e){let i=ye[e];if(i===void 0){const r=SR.get(e);if(r!==void 0)i=ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kp(i)}const ER=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(o){return o.replace(ER,TR)}function TR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Cx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function bR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===za&&(e="SHADOWMAP_TYPE_VSM"),e}function AR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case go:case vo:e="ENVMAP_TYPE_CUBE";break;case ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vo:e="ENVMAP_MODE_REFRACTION";break}return e}function CR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zx:e="ENVMAP_BLENDING_MULTIPLY";break;case mE:e="ENVMAP_BLENDING_MIX";break;case gE:e="ENVMAP_BLENDING_ADD";break}return e}function wR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function DR(o,e,i,r){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=bR(i),p=AR(i),y=RR(i),m=CR(i),v=wR(i),E=vR(i),T=_R(f),D=l.createProgram();let x,S,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ml).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ml).join(`
`),S.length>0&&(S+=`
`)):(x=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),S=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xs?"#define TONE_MAPPING":"",i.toneMapping!==xs?ye.tonemapping_pars_fragment:"",i.toneMapping!==xs?mR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,pR("linearToOutputTexel",i.outputColorSpace),gR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ml).join(`
`)),d=Kp(d),d=bx(d,i),d=Ax(d,i),h=Kp(h),h=bx(h,i),h=Ax(h,i),d=Rx(d),h=Rx(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=L+x+d,R=L+S+h,P=Mx(l,l.VERTEX_SHADER,I),O=Mx(l,l.FRAGMENT_SHADER,R);l.attachShader(D,P),l.attachShader(D,O),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function B(k){if(o.debug.checkShaderErrors){const W=l.getProgramInfoLog(D)||"",et=l.getShaderInfoLog(P)||"",St=l.getShaderInfoLog(O)||"",ft=W.trim(),K=et.trim(),dt=St.trim();let Q=!0,At=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,P,O);else{const Ct=Tx(l,P,"vertex"),Ht=Tx(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+Ct+`
`+Ht)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(K===""||dt==="")&&(At=!1);At&&(k.diagnostics={runnable:Q,programLog:ft,vertexShader:{log:K,prefix:x},fragmentShader:{log:dt,prefix:S}})}l.deleteShader(P),l.deleteShader(O),G=new Pu(l,D),w=xR(l,D)}let G;this.getUniforms=function(){return G===void 0&&B(this),G};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(D,uR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fR++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=P,this.fragmentShader=O,this}let NR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new LR(e),i.set(e,r)),r}}class LR{constructor(e){this.id=NR++,this.code=e,this.usedTimes=0}}function OR(o,e,i,r,l,f,d){const h=new uy,g=new UR,p=new Set,y=[],m=l.logarithmicDepthBuffer,v=l.vertexTextures;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(w){return p.add(w),w===0?"uv":`uv${w}`}function x(w,C,k,W,et){const St=W.fog,ft=et.geometry,K=w.isMeshStandardMaterial?W.environment:null,dt=(w.isMeshStandardMaterial?i:e).get(w.envMap||K),Q=dt&&dt.mapping===ku?dt.image.height:null,At=T[w.type];w.precision!==null&&(E=l.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const Ct=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ht=Ct!==void 0?Ct.length:0;let oe=0;ft.morphAttributes.position!==void 0&&(oe=1),ft.morphAttributes.normal!==void 0&&(oe=2),ft.morphAttributes.color!==void 0&&(oe=3);let ge,V,ct,Z;if(At){const ce=oa[At];ge=ce.vertexShader,V=ce.fragmentShader}else ge=w.vertexShader,V=w.fragmentShader,g.update(w),ct=g.getVertexShaderID(w),Z=g.getFragmentShaderID(w);const rt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Pt=et.isInstancedMesh===!0,Lt=et.isBatchedMesh===!0,Ut=!!w.map,Wt=!!w.matcap,F=!!dt,Ee=!!w.aoMap,re=!!w.lightMap,Jt=!!w.bumpMap,Ft=!!w.normalMap,$t=!!w.displacementMap,lt=!!w.emissiveMap,Dt=!!w.metalnessMap,Nt=!!w.roughnessMap,ie=w.anisotropy>0,U=w.clearcoat>0,b=w.dispersion>0,J=w.iridescence>0,_t=w.sheen>0,Mt=w.transmission>0,ht=ie&&!!w.anisotropyMap,qt=U&&!!w.clearcoatMap,Bt=U&&!!w.clearcoatNormalMap,ee=U&&!!w.clearcoatRoughnessMap,ne=J&&!!w.iridescenceMap,Ot=J&&!!w.iridescenceThicknessMap,Vt=_t&&!!w.sheenColorMap,le=_t&&!!w.sheenRoughnessMap,X=!!w.specularMap,q=!!w.specularColorMap,bt=!!w.specularIntensityMap,z=Mt&&!!w.transmissionMap,gt=Mt&&!!w.thicknessMap,Rt=!!w.gradientMap,j=!!w.alphaMap,xt=w.alphaTest>0,pt=!!w.alphaHash,zt=!!w.extensions;let kt=xs;w.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(kt=o.toneMapping);const Yt={shaderID:At,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:V,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:Lt,batchingColor:Lt&&et._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&et.instanceColor!==null,instancingMorph:Pt&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:rt===null?o.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:_o,alphaToCoverage:!!w.alphaToCoverage,map:Ut,matcap:Wt,envMap:F,envMapMode:F&&dt.mapping,envMapCubeUVHeight:Q,aoMap:Ee,lightMap:re,bumpMap:Jt,normalMap:Ft,displacementMap:v&&$t,emissiveMap:lt,normalMapObjectSpace:Ft&&w.normalMapType===AE,normalMapTangentSpace:Ft&&w.normalMapType===sy,metalnessMap:Dt,roughnessMap:Nt,anisotropy:ie,anisotropyMap:ht,clearcoat:U,clearcoatMap:qt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:ee,dispersion:b,iridescence:J,iridescenceMap:ne,iridescenceThicknessMap:Ot,sheen:_t,sheenColorMap:Vt,sheenRoughnessMap:le,specularMap:X,specularColorMap:q,specularIntensityMap:bt,transmission:Mt,transmissionMap:z,thicknessMap:gt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===fo&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:xt,alphaHash:pt,combine:w.combine,mapUv:Ut&&D(w.map.channel),aoMapUv:Ee&&D(w.aoMap.channel),lightMapUv:re&&D(w.lightMap.channel),bumpMapUv:Jt&&D(w.bumpMap.channel),normalMapUv:Ft&&D(w.normalMap.channel),displacementMapUv:$t&&D(w.displacementMap.channel),emissiveMapUv:lt&&D(w.emissiveMap.channel),metalnessMapUv:Dt&&D(w.metalnessMap.channel),roughnessMapUv:Nt&&D(w.roughnessMap.channel),anisotropyMapUv:ht&&D(w.anisotropyMap.channel),clearcoatMapUv:qt&&D(w.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&D(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&D(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&D(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&D(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&D(w.sheenColorMap.channel),sheenRoughnessMapUv:le&&D(w.sheenRoughnessMap.channel),specularMapUv:X&&D(w.specularMap.channel),specularColorMapUv:q&&D(w.specularColorMap.channel),specularIntensityMapUv:bt&&D(w.specularIntensityMap.channel),transmissionMapUv:z&&D(w.transmissionMap.channel),thicknessMapUv:gt&&D(w.thicknessMap.channel),alphaMapUv:j&&D(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ft||ie),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ft.attributes.uv&&(Ut||j),fog:!!St,useFog:w.fog===!0,fogExp2:!!St&&St.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:wt,skinning:et.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:oe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ut&&w.map.isVideoTexture===!0&&Be.getTransfer(w.map.colorSpace)===Ke,decodeVideoTextureEmissive:lt&&w.emissiveMap.isVideoTexture===!0&&Be.getTransfer(w.emissiveMap.colorSpace)===Ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===la,flipSided:w.side===Jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:zt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&w.extensions.multiDraw===!0||Lt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function S(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(L(C,w),I(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function L(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function I(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function R(w){const C=T[w.type];let k;if(C){const W=oa[C];k=nT.clone(W.uniforms)}else k=w.uniforms;return k}function P(w,C){let k;for(let W=0,et=y.length;W<et;W++){const St=y[W];if(St.cacheKey===C){k=St,++k.usedTimes;break}}return k===void 0&&(k=new DR(o,C,w,f),y.push(k)),k}function O(w){if(--w.usedTimes===0){const C=y.indexOf(w);y[C]=y[y.length-1],y.pop(),w.destroy()}}function B(w){g.remove(w)}function G(){g.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:R,acquireProgram:P,releaseProgram:O,releaseShaderCache:B,programs:y,dispose:G}}function zR(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,g){o.get(d)[h]=g}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function PR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function wx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Dx(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function d(m,v,E,T,D,x){let S=o[e];return S===void 0?(S={id:m.id,object:m,geometry:v,material:E,groupOrder:T,renderOrder:m.renderOrder,z:D,group:x},o[e]=S):(S.id=m.id,S.object=m,S.geometry=v,S.material=E,S.groupOrder=T,S.renderOrder=m.renderOrder,S.z=D,S.group=x),e++,S}function h(m,v,E,T,D,x){const S=d(m,v,E,T,D,x);E.transmission>0?r.push(S):E.transparent===!0?l.push(S):i.push(S)}function g(m,v,E,T,D,x){const S=d(m,v,E,T,D,x);E.transmission>0?r.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function p(m,v){i.length>1&&i.sort(m||PR),r.length>1&&r.sort(v||wx),l.length>1&&l.sort(v||wx)}function y(){for(let m=e,v=o.length;m<v;m++){const E=o[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:h,unshift:g,finish:y,sort:p}}function IR(){let o=new WeakMap;function e(r,l){const f=o.get(r);let d;return f===void 0?(d=new Dx,o.set(r,[d])):l>=f.length?(d=new Dx,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function BR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Ce};break;case"SpotLight":i={position:new st,direction:new st,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function FR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let HR=0;function GR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function VR(o){const e=new BR,i=FR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,f=new sn,d=new sn;function h(p){let y=0,m=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let E=0,T=0,D=0,x=0,S=0,L=0,I=0,R=0,P=0,O=0,B=0;p.sort(GR);for(let w=0,C=p.length;w<C;w++){const k=p[w],W=k.color,et=k.intensity,St=k.distance,ft=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)y+=W.r*et,m+=W.g*et,v+=W.b*et;else if(k.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(k.sh.coefficients[K],et);B++}else if(k.isDirectionalLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const dt=k.shadow,Q=i.get(k);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,r.directionalShadow[E]=Q,r.directionalShadowMap[E]=ft,r.directionalShadowMatrix[E]=k.shadow.matrix,L++}r.directional[E]=K,E++}else if(k.isSpotLight){const K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(W).multiplyScalar(et),K.distance=St,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,r.spot[D]=K;const dt=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,dt.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[D]=dt.matrix,k.castShadow){const Q=i.get(k);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,r.spotShadow[D]=Q,r.spotShadowMap[D]=ft,R++}D++}else if(k.isRectAreaLight){const K=e.get(k);K.color.copy(W).multiplyScalar(et),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=K,x++}else if(k.isPointLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){const dt=k.shadow,Q=i.get(k);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,Q.shadowCameraNear=dt.camera.near,Q.shadowCameraFar=dt.camera.far,r.pointShadow[T]=Q,r.pointShadowMap[T]=ft,r.pointShadowMatrix[T]=k.shadow.matrix,I++}r.point[T]=K,T++}else if(k.isHemisphereLight){const K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(et),K.groundColor.copy(k.groundColor).multiplyScalar(et),r.hemi[S]=K,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Kt.LTC_FLOAT_1,r.rectAreaLTC2=Kt.LTC_FLOAT_2):(r.rectAreaLTC1=Kt.LTC_HALF_1,r.rectAreaLTC2=Kt.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=m,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==E||G.pointLength!==T||G.spotLength!==D||G.rectAreaLength!==x||G.hemiLength!==S||G.numDirectionalShadows!==L||G.numPointShadows!==I||G.numSpotShadows!==R||G.numSpotMaps!==P||G.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=D,r.rectArea.length=x,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+P-O,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=B,G.directionalLength=E,G.pointLength=T,G.spotLength=D,G.rectAreaLength=x,G.hemiLength=S,G.numDirectionalShadows=L,G.numPointShadows=I,G.numSpotShadows=R,G.numSpotMaps=P,G.numLightProbes=B,r.version=HR++)}function g(p,y){let m=0,v=0,E=0,T=0,D=0;const x=y.matrixWorldInverse;for(let S=0,L=p.length;S<L;S++){const I=p[S];if(I.isDirectionalLight){const R=r.directional[m];R.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),m++}else if(I.isSpotLight){const R=r.spot[E];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),E++}else if(I.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(x),d.identity(),f.copy(I.matrixWorld),f.premultiply(x),d.extractRotation(f),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(x),v++}else if(I.isHemisphereLight){const R=r.hemi[D];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(x),D++}}}return{setup:h,setupView:g,state:r}}function Nx(o){const e=new VR(o),i=[],r=[];function l(y){p.camera=y,i.length=0,r.length=0}function f(y){i.push(y)}function d(y){r.push(y)}function h(){e.setup(i)}function g(y){e.setupView(i,y)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:d}}function kR(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new Nx(o),e.set(l,[h])):f>=d.length?(h=new Nx(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const jR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XR=`uniform sampler2D shadow_pass;
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
}`;function qR(o,e,i){let r=new lm;const l=new Le,f=new Le,d=new hn,h=new mT({depthPacking:bE}),g=new gT,p={},y=i.maxTextureSize,m={[ys]:Jn,[Jn]:ys,[la]:la},v=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:jR,fragmentShader:XR}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const T=new ti;T.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ve(T,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wx;let S=this.type;this.render=function(O,B,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),W=o.state;W.setBlending(_s),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const et=S!==za&&this.type===za,St=S===za&&this.type!==za;for(let ft=0,K=O.length;ft<K;ft++){const dt=O[ft],Q=dt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const At=Q.getFrameExtents();if(l.multiply(At),f.copy(Q.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(f.x=Math.floor(y/At.x),l.x=f.x*At.x,Q.mapSize.x=f.x),l.y>y&&(f.y=Math.floor(y/At.y),l.y=f.y*At.y,Q.mapSize.y=f.y)),Q.map===null||et===!0||St===!0){const Ht=this.type!==za?{minFilter:Mi,magFilter:Mi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new ir(l.x,l.y,Ht),Q.map.texture.name=dt.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const Ct=Q.getViewportCount();for(let Ht=0;Ht<Ct;Ht++){const oe=Q.getViewport(Ht);d.set(f.x*oe.x,f.y*oe.y,f.x*oe.z,f.y*oe.w),W.viewport(d),Q.updateMatrices(dt,Ht),r=Q.getFrustum(),R(B,G,Q.camera,dt,this.type)}Q.isPointLightShadow!==!0&&this.type===za&&L(Q,G),Q.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(w,C,k)};function L(O,B){const G=e.update(D);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ir(l.x,l.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(B,null,G,v,D,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(B,null,G,E,D,null)}function I(O,B,G,w){let C=null;const k=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)C=k;else if(C=G.isPointLight===!0?g:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const W=C.uuid,et=B.uuid;let St=p[W];St===void 0&&(St={},p[W]=St);let ft=St[et];ft===void 0&&(ft=C.clone(),St[et]=ft,B.addEventListener("dispose",P)),C=ft}if(C.visible=B.visible,C.wireframe=B.wireframe,w===za?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:m[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const W=o.properties.get(C);W.light=G}return C}function R(O,B,G,w,C){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===za)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const et=e.update(O),St=O.material;if(Array.isArray(St)){const ft=et.groups;for(let K=0,dt=ft.length;K<dt;K++){const Q=ft[K],At=St[Q.materialIndex];if(At&&At.visible){const Ct=I(O,At,w,C);O.onBeforeShadow(o,O,B,G,et,Ct,Q),o.renderBufferDirect(G,null,et,Ct,O,Q),O.onAfterShadow(o,O,B,G,et,Ct,Q)}}}else if(St.visible){const ft=I(O,St,w,C);O.onBeforeShadow(o,O,B,G,et,ft,null),o.renderBufferDirect(G,null,et,ft,O,null),O.onAfterShadow(o,O,B,G,et,ft,null)}}const W=O.children;for(let et=0,St=W.length;et<St;et++)R(W[et],B,G,w,C)}function P(O){O.target.removeEventListener("dispose",P);for(const G in p){const w=p[G],C=O.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const WR={[cp]:up,[fp]:pp,[dp]:mp,[mo]:hp,[up]:cp,[pp]:fp,[mp]:dp,[hp]:mo};function YR(o,e){function i(){let z=!1;const gt=new hn;let Rt=null;const j=new hn(0,0,0,0);return{setMask:function(xt){Rt!==xt&&!z&&(o.colorMask(xt,xt,xt,xt),Rt=xt)},setLocked:function(xt){z=xt},setClear:function(xt,pt,zt,kt,Yt){Yt===!0&&(xt*=kt,pt*=kt,zt*=kt),gt.set(xt,pt,zt,kt),j.equals(gt)===!1&&(o.clearColor(xt,pt,zt,kt),j.copy(gt))},reset:function(){z=!1,Rt=null,j.set(-1,0,0,0)}}}function r(){let z=!1,gt=!1,Rt=null,j=null,xt=null;return{setReversed:function(pt){if(gt!==pt){const zt=e.get("EXT_clip_control");pt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),gt=pt;const kt=xt;xt=null,this.setClear(kt)}},getReversed:function(){return gt},setTest:function(pt){pt?rt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(pt){Rt!==pt&&!z&&(o.depthMask(pt),Rt=pt)},setFunc:function(pt){if(gt&&(pt=WR[pt]),j!==pt){switch(pt){case cp:o.depthFunc(o.NEVER);break;case up:o.depthFunc(o.ALWAYS);break;case fp:o.depthFunc(o.LESS);break;case mo:o.depthFunc(o.LEQUAL);break;case dp:o.depthFunc(o.EQUAL);break;case hp:o.depthFunc(o.GEQUAL);break;case pp:o.depthFunc(o.GREATER);break;case mp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}j=pt}},setLocked:function(pt){z=pt},setClear:function(pt){xt!==pt&&(gt&&(pt=1-pt),o.clearDepth(pt),xt=pt)},reset:function(){z=!1,Rt=null,j=null,xt=null,gt=!1}}}function l(){let z=!1,gt=null,Rt=null,j=null,xt=null,pt=null,zt=null,kt=null,Yt=null;return{setTest:function(ce){z||(ce?rt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(ce){gt!==ce&&!z&&(o.stencilMask(ce),gt=ce)},setFunc:function(ce,Te,Ye){(Rt!==ce||j!==Te||xt!==Ye)&&(o.stencilFunc(ce,Te,Ye),Rt=ce,j=Te,xt=Ye)},setOp:function(ce,Te,Ye){(pt!==ce||zt!==Te||kt!==Ye)&&(o.stencilOp(ce,Te,Ye),pt=ce,zt=Te,kt=Ye)},setLocked:function(ce){z=ce},setClear:function(ce){Yt!==ce&&(o.clearStencil(ce),Yt=ce)},reset:function(){z=!1,gt=null,Rt=null,j=null,xt=null,pt=null,zt=null,kt=null,Yt=null}}}const f=new i,d=new r,h=new l,g=new WeakMap,p=new WeakMap;let y={},m={},v=new WeakMap,E=[],T=null,D=!1,x=null,S=null,L=null,I=null,R=null,P=null,O=null,B=new Ce(0,0,0),G=0,w=!1,C=null,k=null,W=null,et=null,St=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,dt=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=dt>=1):Q.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=dt>=2);let At=null,Ct={};const Ht=o.getParameter(o.SCISSOR_BOX),oe=o.getParameter(o.VIEWPORT),ge=new hn().fromArray(Ht),V=new hn().fromArray(oe);function ct(z,gt,Rt,j){const xt=new Uint8Array(4),pt=o.createTexture();o.bindTexture(z,pt),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<Rt;zt++)z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY?o.texImage3D(gt,0,o.RGBA,1,1,j,0,o.RGBA,o.UNSIGNED_BYTE,xt):o.texImage2D(gt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xt);return pt}const Z={};Z[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),rt(o.DEPTH_TEST),d.setFunc(mo),Jt(!1),Ft(w_),rt(o.CULL_FACE),Ee(_s);function rt(z){y[z]!==!0&&(o.enable(z),y[z]=!0)}function wt(z){y[z]!==!1&&(o.disable(z),y[z]=!1)}function Pt(z,gt){return m[z]!==gt?(o.bindFramebuffer(z,gt),m[z]=gt,z===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=gt),z===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=gt),!0):!1}function Lt(z,gt){let Rt=E,j=!1;if(z){Rt=v.get(gt),Rt===void 0&&(Rt=[],v.set(gt,Rt));const xt=z.textures;if(Rt.length!==xt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let pt=0,zt=xt.length;pt<zt;pt++)Rt[pt]=o.COLOR_ATTACHMENT0+pt;Rt.length=xt.length,j=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,j=!0);j&&o.drawBuffers(Rt)}function Ut(z){return T!==z?(o.useProgram(z),T=z,!0):!1}const Wt={[Qs]:o.FUNC_ADD,[JM]:o.FUNC_SUBTRACT,[$M]:o.FUNC_REVERSE_SUBTRACT};Wt[tE]=o.MIN,Wt[eE]=o.MAX;const F={[nE]:o.ZERO,[iE]:o.ONE,[aE]:o.SRC_COLOR,[op]:o.SRC_ALPHA,[uE]:o.SRC_ALPHA_SATURATE,[lE]:o.DST_COLOR,[rE]:o.DST_ALPHA,[sE]:o.ONE_MINUS_SRC_COLOR,[lp]:o.ONE_MINUS_SRC_ALPHA,[cE]:o.ONE_MINUS_DST_COLOR,[oE]:o.ONE_MINUS_DST_ALPHA,[fE]:o.CONSTANT_COLOR,[dE]:o.ONE_MINUS_CONSTANT_COLOR,[hE]:o.CONSTANT_ALPHA,[pE]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(z,gt,Rt,j,xt,pt,zt,kt,Yt,ce){if(z===_s){D===!0&&(wt(o.BLEND),D=!1);return}if(D===!1&&(rt(o.BLEND),D=!0),z!==QM){if(z!==x||ce!==w){if((S!==Qs||R!==Qs)&&(o.blendEquation(o.FUNC_ADD),S=Qs,R=Qs),ce)switch(z){case fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case D_:o.blendFunc(o.ONE,o.ONE);break;case N_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case U_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case D_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case N_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case U_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}L=null,I=null,P=null,O=null,B.set(0,0,0),G=0,x=z,w=ce}return}xt=xt||gt,pt=pt||Rt,zt=zt||j,(gt!==S||xt!==R)&&(o.blendEquationSeparate(Wt[gt],Wt[xt]),S=gt,R=xt),(Rt!==L||j!==I||pt!==P||zt!==O)&&(o.blendFuncSeparate(F[Rt],F[j],F[pt],F[zt]),L=Rt,I=j,P=pt,O=zt),(kt.equals(B)===!1||Yt!==G)&&(o.blendColor(kt.r,kt.g,kt.b,Yt),B.copy(kt),G=Yt),x=z,w=!1}function re(z,gt){z.side===la?wt(o.CULL_FACE):rt(o.CULL_FACE);let Rt=z.side===Jn;gt&&(Rt=!Rt),Jt(Rt),z.blending===fo&&z.transparent===!1?Ee(_s):Ee(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),d.setFunc(z.depthFunc),d.setTest(z.depthTest),d.setMask(z.depthWrite),f.setMask(z.colorWrite);const j=z.stencilWrite;h.setTest(j),j&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),lt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?rt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(z){C!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),C=z)}function Ft(z){z!==ZM?(rt(o.CULL_FACE),z!==k&&(z===w_?o.cullFace(o.BACK):z===KM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),k=z}function $t(z){z!==W&&(K&&o.lineWidth(z),W=z)}function lt(z,gt,Rt){z?(rt(o.POLYGON_OFFSET_FILL),(et!==gt||St!==Rt)&&(o.polygonOffset(gt,Rt),et=gt,St=Rt)):wt(o.POLYGON_OFFSET_FILL)}function Dt(z){z?rt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Nt(z){z===void 0&&(z=o.TEXTURE0+ft-1),At!==z&&(o.activeTexture(z),At=z)}function ie(z,gt,Rt){Rt===void 0&&(At===null?Rt=o.TEXTURE0+ft-1:Rt=At);let j=Ct[Rt];j===void 0&&(j={type:void 0,texture:void 0},Ct[Rt]=j),(j.type!==z||j.texture!==gt)&&(At!==Rt&&(o.activeTexture(Rt),At=Rt),o.bindTexture(z,gt||Z[z]),j.type=z,j.texture=gt)}function U(){const z=Ct[At];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{o.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(){try{o.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{o.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{o.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{o.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(z){ge.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),ge.copy(z))}function le(z){V.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),V.copy(z))}function X(z,gt){let Rt=p.get(gt);Rt===void 0&&(Rt=new WeakMap,p.set(gt,Rt));let j=Rt.get(z);j===void 0&&(j=o.getUniformBlockIndex(gt,z.name),Rt.set(z,j))}function q(z,gt){const j=p.get(gt).get(z);g.get(gt)!==j&&(o.uniformBlockBinding(gt,j,z.__bindingPointIndex),g.set(gt,j))}function bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},At=null,Ct={},m={},v=new WeakMap,E=[],T=null,D=!1,x=null,S=null,L=null,I=null,R=null,P=null,O=null,B=new Ce(0,0,0),G=0,w=!1,C=null,k=null,W=null,et=null,St=null,ge.set(0,0,o.canvas.width,o.canvas.height),V.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:rt,disable:wt,bindFramebuffer:Pt,drawBuffers:Lt,useProgram:Ut,setBlending:Ee,setMaterial:re,setFlipSided:Jt,setCullFace:Ft,setLineWidth:$t,setPolygonOffset:lt,setScissorTest:Dt,activeTexture:Nt,bindTexture:ie,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:ne,texImage3D:Ot,updateUBOMapping:X,uniformBlockBinding:q,texStorage2D:Bt,texStorage3D:ee,texSubImage2D:_t,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:qt,scissor:Vt,viewport:le,reset:bt}}function ZR(o,e,i,r,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,y=new WeakMap;let m;const v=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return E?new OffscreenCanvas(U,b):Hu("canvas")}function D(U,b,J){let _t=1;const Mt=ie(U);if((Mt.width>J||Mt.height>J)&&(_t=J/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(_t*Mt.width),qt=Math.floor(_t*Mt.height);m===void 0&&(m=T(ht,qt));const Bt=b?T(ht,qt):m;return Bt.width=ht,Bt.height=qt,Bt.getContext("2d").drawImage(U,0,0,ht,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+qt+")."),Bt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function x(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(U,b,J,_t,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=b;if(b===o.RED&&(J===o.FLOAT&&(ht=o.R32F),J===o.HALF_FLOAT&&(ht=o.R16F),J===o.UNSIGNED_BYTE&&(ht=o.R8)),b===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ht=o.R8UI),J===o.UNSIGNED_SHORT&&(ht=o.R16UI),J===o.UNSIGNED_INT&&(ht=o.R32UI),J===o.BYTE&&(ht=o.R8I),J===o.SHORT&&(ht=o.R16I),J===o.INT&&(ht=o.R32I)),b===o.RG&&(J===o.FLOAT&&(ht=o.RG32F),J===o.HALF_FLOAT&&(ht=o.RG16F),J===o.UNSIGNED_BYTE&&(ht=o.RG8)),b===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ht=o.RG8UI),J===o.UNSIGNED_SHORT&&(ht=o.RG16UI),J===o.UNSIGNED_INT&&(ht=o.RG32UI),J===o.BYTE&&(ht=o.RG8I),J===o.SHORT&&(ht=o.RG16I),J===o.INT&&(ht=o.RG32I)),b===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),J===o.UNSIGNED_INT&&(ht=o.RGB32UI),J===o.BYTE&&(ht=o.RGB8I),J===o.SHORT&&(ht=o.RGB16I),J===o.INT&&(ht=o.RGB32I)),b===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),J===o.UNSIGNED_INT&&(ht=o.RGBA32UI),J===o.BYTE&&(ht=o.RGBA8I),J===o.SHORT&&(ht=o.RGBA16I),J===o.INT&&(ht=o.RGBA32I)),b===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),b===o.RGBA){const qt=Mt?Bu:Be.getTransfer(_t);J===o.FLOAT&&(ht=o.RGBA32F),J===o.HALF_FLOAT&&(ht=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ht=qt===Ke?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function R(U,b){let J;return U?b===null||b===nr||b===Rl?J=o.DEPTH24_STENCIL8:b===ua?J=o.DEPTH32F_STENCIL8:b===Al&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===nr||b===Rl?J=o.DEPTH_COMPONENT24:b===ua?J=o.DEPTH_COMPONENT32F:b===Al&&(J=o.DEPTH_COMPONENT16),J}function P(U,b){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Mi&&U.minFilter!==ca?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function O(U){const b=U.target;b.removeEventListener("dispose",O),G(b),b.isVideoTexture&&y.delete(b)}function B(U){const b=U.target;b.removeEventListener("dispose",B),C(b)}function G(U){const b=r.get(U);if(b.__webglInit===void 0)return;const J=U.source,_t=v.get(J);if(_t){const Mt=_t[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(U),Object.keys(_t).length===0&&v.delete(J)}r.remove(U)}function w(U){const b=r.get(U);o.deleteTexture(b.__webglTexture);const J=U.source,_t=v.get(J);delete _t[b.__cacheKey],d.memory.textures--}function C(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let Mt=0;Mt<b.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)o.deleteFramebuffer(b.__webglFramebuffer[_t]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=U.textures;for(let _t=0,Mt=J.length;_t<Mt;_t++){const ht=r.get(J[_t]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),d.memory.textures--),r.remove(J[_t])}r.remove(U)}let k=0;function W(){k=0}function et(){const U=k;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),k+=1,U}function St(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ft(U,b){const J=r.get(U);if(U.isVideoTexture&&Dt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const _t=U.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(J,U,b);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+b)}function K(U,b){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Z(J,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+b)}function dt(U,b){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Z(J,U,b);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+b)}function Q(U,b){const J=r.get(U);if(U.version>0&&J.__version!==U.version){rt(J,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+b)}const At={[_p]:o.REPEAT,[tr]:o.CLAMP_TO_EDGE,[xp]:o.MIRRORED_REPEAT},Ct={[Mi]:o.NEAREST,[EE]:o.NEAREST_MIPMAP_NEAREST,[ru]:o.NEAREST_MIPMAP_LINEAR,[ca]:o.LINEAR,[bh]:o.LINEAR_MIPMAP_NEAREST,[er]:o.LINEAR_MIPMAP_LINEAR},Ht={[RE]:o.NEVER,[LE]:o.ALWAYS,[CE]:o.LESS,[ry]:o.LEQUAL,[wE]:o.EQUAL,[UE]:o.GEQUAL,[DE]:o.GREATER,[NE]:o.NOTEQUAL};function oe(U,b){if(b.type===ua&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ca||b.magFilter===bh||b.magFilter===ru||b.magFilter===er||b.minFilter===ca||b.minFilter===bh||b.minFilter===ru||b.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,At[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,At[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,At[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Ct[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Ct[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ht[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mi||b.minFilter!==ru&&b.minFilter!==er||b.type===ua&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ge(U,b){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",O));const _t=b.source;let Mt=v.get(_t);Mt===void 0&&(Mt={},v.set(_t,Mt));const ht=St(b);if(ht!==U.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),Mt[ht].usedTimes++;const qt=Mt[U.__cacheKey];qt!==void 0&&(Mt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&w(b)),U.__cacheKey=ht,U.__webglTexture=Mt[ht].texture}return J}function V(U,b,J){return Math.floor(Math.floor(U/J)/b)}function ct(U,b,J,_t){const ht=U.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,J,_t,b.data);else{ht.sort((Ot,Vt)=>Ot.start-Vt.start);let qt=0;for(let Ot=1;Ot<ht.length;Ot++){const Vt=ht[qt],le=ht[Ot],X=Vt.start+Vt.count,q=V(le.start,b.width,4),bt=V(Vt.start,b.width,4);le.start<=X+1&&q===bt&&V(le.start+le.count-1,b.width,4)===q?Vt.count=Math.max(Vt.count,le.start+le.count-Vt.start):(++qt,ht[qt]=le)}ht.length=qt+1;const Bt=o.getParameter(o.UNPACK_ROW_LENGTH),ee=o.getParameter(o.UNPACK_SKIP_PIXELS),ne=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Ot=0,Vt=ht.length;Ot<Vt;Ot++){const le=ht[Ot],X=Math.floor(le.start/4),q=Math.ceil(le.count/4),bt=X%b.width,z=Math.floor(X/b.width),gt=q,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,bt),o.pixelStorei(o.UNPACK_SKIP_ROWS,z),i.texSubImage2D(o.TEXTURE_2D,0,bt,z,gt,Rt,J,_t,b.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Bt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ee),o.pixelStorei(o.UNPACK_SKIP_ROWS,ne)}}function Z(U,b,J){let _t=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=o.TEXTURE_3D);const Mt=ge(U,b),ht=b.source;i.bindTexture(_t,U.__webglTexture,o.TEXTURE0+J);const qt=r.get(ht);if(ht.version!==qt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+J);const Bt=Be.getPrimaries(Be.workingColorSpace),ee=b.colorSpace===vs?null:Be.getPrimaries(b.colorSpace),ne=b.colorSpace===vs||Bt===ee?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Ot=D(b.image,!1,l.maxTextureSize);Ot=Nt(b,Ot);const Vt=f.convert(b.format,b.colorSpace),le=f.convert(b.type);let X=I(b.internalFormat,Vt,le,b.colorSpace,b.isVideoTexture);oe(_t,b);let q;const bt=b.mipmaps,z=b.isVideoTexture!==!0,gt=qt.__version===void 0||Mt===!0,Rt=ht.dataReady,j=P(b,Ot);if(b.isDepthTexture)X=R(b.format===wl,b.type),gt&&(z?i.texStorage2D(o.TEXTURE_2D,1,X,Ot.width,Ot.height):i.texImage2D(o.TEXTURE_2D,0,X,Ot.width,Ot.height,0,Vt,le,null));else if(b.isDataTexture)if(bt.length>0){z&&gt&&i.texStorage2D(o.TEXTURE_2D,j,X,bt[0].width,bt[0].height);for(let xt=0,pt=bt.length;xt<pt;xt++)q=bt[xt],z?Rt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,q.width,q.height,Vt,le,q.data):i.texImage2D(o.TEXTURE_2D,xt,X,q.width,q.height,0,Vt,le,q.data);b.generateMipmaps=!1}else z?(gt&&i.texStorage2D(o.TEXTURE_2D,j,X,Ot.width,Ot.height),Rt&&ct(b,Ot,Vt,le)):i.texImage2D(o.TEXTURE_2D,0,X,Ot.width,Ot.height,0,Vt,le,Ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,j,X,bt[0].width,bt[0].height,Ot.depth);for(let xt=0,pt=bt.length;xt<pt;xt++)if(q=bt[xt],b.format!==Yi)if(Vt!==null)if(z){if(Rt)if(b.layerUpdates.size>0){const zt=ox(q.width,q.height,b.format,b.type);for(const kt of b.layerUpdates){const Yt=q.data.subarray(kt*zt/q.data.BYTES_PER_ELEMENT,(kt+1)*zt/q.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,kt,q.width,q.height,1,Vt,Yt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,q.width,q.height,Ot.depth,Vt,q.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,X,q.width,q.height,Ot.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,q.width,q.height,Ot.depth,Vt,le,q.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,X,q.width,q.height,Ot.depth,0,Vt,le,q.data)}else{z&&gt&&i.texStorage2D(o.TEXTURE_2D,j,X,bt[0].width,bt[0].height);for(let xt=0,pt=bt.length;xt<pt;xt++)q=bt[xt],b.format!==Yi?Vt!==null?z?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,q.width,q.height,Vt,q.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,X,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Rt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,q.width,q.height,Vt,le,q.data):i.texImage2D(o.TEXTURE_2D,xt,X,q.width,q.height,0,Vt,le,q.data)}else if(b.isDataArrayTexture)if(z){if(gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,j,X,Ot.width,Ot.height,Ot.depth),Rt)if(b.layerUpdates.size>0){const xt=ox(Ot.width,Ot.height,b.format,b.type);for(const pt of b.layerUpdates){const zt=Ot.data.subarray(pt*xt/Ot.data.BYTES_PER_ELEMENT,(pt+1)*xt/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,Ot.width,Ot.height,1,Vt,le,zt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,Vt,le,Ot.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,X,Ot.width,Ot.height,Ot.depth,0,Vt,le,Ot.data);else if(b.isData3DTexture)z?(gt&&i.texStorage3D(o.TEXTURE_3D,j,X,Ot.width,Ot.height,Ot.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,Vt,le,Ot.data)):i.texImage3D(o.TEXTURE_3D,0,X,Ot.width,Ot.height,Ot.depth,0,Vt,le,Ot.data);else if(b.isFramebufferTexture){if(gt)if(z)i.texStorage2D(o.TEXTURE_2D,j,X,Ot.width,Ot.height);else{let xt=Ot.width,pt=Ot.height;for(let zt=0;zt<j;zt++)i.texImage2D(o.TEXTURE_2D,zt,X,xt,pt,0,Vt,le,null),xt>>=1,pt>>=1}}else if(bt.length>0){if(z&&gt){const xt=ie(bt[0]);i.texStorage2D(o.TEXTURE_2D,j,X,xt.width,xt.height)}for(let xt=0,pt=bt.length;xt<pt;xt++)q=bt[xt],z?Rt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Vt,le,q):i.texImage2D(o.TEXTURE_2D,xt,X,Vt,le,q);b.generateMipmaps=!1}else if(z){if(gt){const xt=ie(Ot);i.texStorage2D(o.TEXTURE_2D,j,X,xt.width,xt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,le,Ot)}else i.texImage2D(o.TEXTURE_2D,0,X,Vt,le,Ot);x(b)&&S(_t),qt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function rt(U,b,J){if(b.image.length!==6)return;const _t=ge(U,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const ht=r.get(Mt);if(Mt.version!==ht.__version||_t===!0){i.activeTexture(o.TEXTURE0+J);const qt=Be.getPrimaries(Be.workingColorSpace),Bt=b.colorSpace===vs?null:Be.getPrimaries(b.colorSpace),ee=b.colorSpace===vs||qt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,Vt=[];for(let pt=0;pt<6;pt++)!ne&&!Ot?Vt[pt]=D(b.image[pt],!0,l.maxCubemapSize):Vt[pt]=Ot?b.image[pt].image:b.image[pt],Vt[pt]=Nt(b,Vt[pt]);const le=Vt[0],X=f.convert(b.format,b.colorSpace),q=f.convert(b.type),bt=I(b.internalFormat,X,q,b.colorSpace),z=b.isVideoTexture!==!0,gt=ht.__version===void 0||_t===!0,Rt=Mt.dataReady;let j=P(b,le);oe(o.TEXTURE_CUBE_MAP,b);let xt;if(ne){z&&gt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,j,bt,le.width,le.height);for(let pt=0;pt<6;pt++){xt=Vt[pt].mipmaps;for(let zt=0;zt<xt.length;zt++){const kt=xt[zt];b.format!==Yi?X!==null?z?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt,0,0,kt.width,kt.height,X,kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt,bt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt,0,0,kt.width,kt.height,X,q,kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt,bt,kt.width,kt.height,0,X,q,kt.data)}}}else{if(xt=b.mipmaps,z&&gt){xt.length>0&&j++;const pt=ie(Vt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,j,bt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Ot){z?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Vt[pt].width,Vt[pt].height,X,q,Vt[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,Vt[pt].width,Vt[pt].height,0,X,q,Vt[pt].data);for(let zt=0;zt<xt.length;zt++){const Yt=xt[zt].image[pt].image;z?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt+1,0,0,Yt.width,Yt.height,X,q,Yt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt+1,bt,Yt.width,Yt.height,0,X,q,Yt.data)}}else{z?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,X,q,Vt[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,X,q,Vt[pt]);for(let zt=0;zt<xt.length;zt++){const kt=xt[zt];z?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt+1,0,0,X,q,kt.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,zt+1,bt,X,q,kt.image[pt])}}}x(b)&&S(o.TEXTURE_CUBE_MAP),ht.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function wt(U,b,J,_t,Mt,ht){const qt=f.convert(J.format,J.colorSpace),Bt=f.convert(J.type),ee=I(J.internalFormat,qt,Bt,J.colorSpace),ne=r.get(b),Ot=r.get(J);if(Ot.__renderTarget=b,!ne.__hasExternalTextures){const Vt=Math.max(1,b.width>>ht),le=Math.max(1,b.height>>ht);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,ee,Vt,le,b.depth,0,qt,Bt,null):i.texImage2D(Mt,ht,ee,Vt,le,0,qt,Bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),lt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Mt,Ot.__webglTexture,0,$t(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Mt,Ot.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,b,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const _t=b.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,ht=R(b.stencilBuffer,Mt),qt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=$t(b);lt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,ht,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,ht,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ht,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,U)}else{const _t=b.textures;for(let Mt=0;Mt<_t.length;Mt++){const ht=_t[Mt],qt=f.convert(ht.format,ht.colorSpace),Bt=f.convert(ht.type),ee=I(ht.internalFormat,qt,Bt,ht.colorSpace),ne=$t(b);J&&lt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,ee,b.width,b.height):lt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ne,ee,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ee,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(b.depthTexture);_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const Mt=_t.__webglTexture,ht=$t(b);if(b.depthTexture.format===Cl)lt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===wl)lt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Ut(U){const b=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const _t=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=_t}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const _t=U.texture.mipmaps;_t&&_t.length>0?Lt(b.__webglFramebuffer[0],U):Lt(b.__webglFramebuffer,U)}else if(J){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=o.createRenderbuffer(),Pt(b.__webglDepthbuffer[_t],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}else{const _t=U.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Pt(b.__webglDepthbuffer,U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(U,b,J){const _t=r.get(U);b!==void 0&&wt(_t.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Ut(U)}function F(U){const b=U.texture,J=r.get(U),_t=r.get(b);U.addEventListener("dispose",B);const Mt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,qt=Mt.length>1;if(qt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=b.version,d.memory.textures++),ht){J.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Bt]=[];for(let ee=0;ee<b.mipmaps.length;ee++)J.__webglFramebuffer[Bt][ee]=o.createFramebuffer()}else J.__webglFramebuffer[Bt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Bt=0;Bt<b.mipmaps.length;Bt++)J.__webglFramebuffer[Bt]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Bt=0,ee=Mt.length;Bt<ee;Bt++){const ne=r.get(Mt[Bt]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&lt(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Bt=0;Bt<Mt.length;Bt++){const ee=Mt[Bt];J.__webglColorRenderbuffer[Bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Bt]);const ne=f.convert(ee.format,ee.colorSpace),Ot=f.convert(ee.type),Vt=I(ee.internalFormat,ne,Ot,ee.colorSpace,U.isXRRenderTarget===!0),le=$t(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,le,Vt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,J.__webglColorRenderbuffer[Bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),oe(o.TEXTURE_CUBE_MAP,b);for(let Bt=0;Bt<6;Bt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)wt(J.__webglFramebuffer[Bt][ee],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,ee);else wt(J.__webglFramebuffer[Bt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);x(b)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Bt=0,ee=Mt.length;Bt<ee;Bt++){const ne=Mt[Bt],Ot=r.get(ne);let Vt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Vt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Vt,Ot.__webglTexture),oe(Vt,ne),wt(J.__webglFramebuffer,U,ne,o.COLOR_ATTACHMENT0+Bt,Vt,0),x(ne)&&S(Vt)}i.unbindTexture()}else{let Bt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Bt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,_t.__webglTexture),oe(Bt,b),b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)wt(J.__webglFramebuffer[ee],U,b,o.COLOR_ATTACHMENT0,Bt,ee);else wt(J.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Bt,0);x(b)&&S(Bt),i.unbindTexture()}U.depthBuffer&&Ut(U)}function Ee(U){const b=U.textures;for(let J=0,_t=b.length;J<_t;J++){const Mt=b[J];if(x(Mt)){const ht=L(U),qt=r.get(Mt).__webglTexture;i.bindTexture(ht,qt),S(ht),i.unbindTexture()}}}const re=[],Jt=[];function Ft(U){if(U.samples>0){if(lt(U)===!1){const b=U.textures,J=U.width,_t=U.height;let Mt=o.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(U),Bt=b.length>1;if(Bt)for(let ne=0;ne<b.length;ne++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const ee=U.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ne=0;ne<b.length;ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ne]);const Ot=r.get(b[ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ot,0)}o.blitFramebuffer(0,0,J,_t,0,0,J,_t,Mt,o.NEAREST),g===!0&&(re.length=0,Jt.length=0,re.push(o.COLOR_ATTACHMENT0+ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(re.push(ht),Jt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Bt)for(let ne=0;ne<b.length;ne++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ne]);const Ot=r.get(b[ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,Ot,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function $t(U){return Math.min(l.maxSamples,U.samples)}function lt(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Dt(U){const b=d.render.frame;y.get(U)!==b&&(y.set(U,b),U.update())}function Nt(U,b){const J=U.colorSpace,_t=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==_o&&J!==vs&&(Be.getTransfer(J)===Ke?(_t!==Yi||Mt!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function ie(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=W,this.setTexture2D=ft,this.setTexture2DArray=K,this.setTexture3D=dt,this.setTextureCube=Q,this.rebindTextures=Wt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=lt}function KR(o,e){function i(r,l=vs){let f;const d=Be.getTransfer(l);if(r===da)return o.UNSIGNED_BYTE;if(r===tm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===em)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ty)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ey)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jx)return o.BYTE;if(r===$x)return o.SHORT;if(r===Al)return o.UNSIGNED_SHORT;if(r===$p)return o.INT;if(r===nr)return o.UNSIGNED_INT;if(r===ua)return o.FLOAT;if(r===Ul)return o.HALF_FLOAT;if(r===ny)return o.ALPHA;if(r===iy)return o.RGB;if(r===Yi)return o.RGBA;if(r===Cl)return o.DEPTH_COMPONENT;if(r===wl)return o.DEPTH_STENCIL;if(r===nm)return o.RED;if(r===im)return o.RED_INTEGER;if(r===ay)return o.RG;if(r===am)return o.RG_INTEGER;if(r===sm)return o.RGBA_INTEGER;if(r===Uu||r===Lu||r===Ou||r===zu)if(d===Ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Uu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ou)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Uu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ou)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yp||r===Sp||r===Mp||r===Ep)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===yp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ep)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tp||r===bp||r===Ap)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Tp||r===bp)return d===Ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Ap)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rp||r===Cp||r===wp||r===Dp||r===Np||r===Up||r===Lp||r===Op||r===zp||r===Pp||r===Ip||r===Bp||r===Fp||r===Hp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Rp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Np)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Up)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Op)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ip)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hp)return d===Ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gp||r===Vp||r===kp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Gp)return d===Ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jp||r===Xp||r===qp||r===Wp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===jp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Xp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const QR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JR=`
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

}`;class $R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new xy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:QR,fragmentShader:JR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ve(new yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t3 extends So{constructor(e,i){super();const r=this;let l=null,f=1,d=null,h="local-floor",g=1,p=null,y=null,m=null,v=null,E=null,T=null;const D=typeof XRWebGLBinding<"u",x=new $R,S={},L=i.getContextAttributes();let I=null,R=null;const P=[],O=[],B=new Le;let G=null;const w=new zi;w.viewport=new hn;const C=new zi;C.viewport=new hn;const k=[w,C],W=new ST;let et=null,St=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=P[Z];return rt===void 0&&(rt=new Yh,P[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=P[Z];return rt===void 0&&(rt=new Yh,P[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=P[Z];return rt===void 0&&(rt=new Yh,P[Z]=rt),rt.getHandSpace()};function ft(Z){const rt=O.indexOf(Z.inputSource);if(rt===-1)return;const wt=P[rt];wt!==void 0&&(wt.update(Z.inputSource,Z.frame,p||d),wt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",K),l.removeEventListener("inputsourceschange",dt);for(let Z=0;Z<P.length;Z++){const rt=O[Z];rt!==null&&(O[Z]=null,P[Z].disconnect(rt))}et=null,St=null,x.reset();for(const Z in S)delete S[Z];e.setRenderTarget(I),E=null,v=null,m=null,l=null,R=null,ct.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return m===null&&D&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",K),l.addEventListener("inputsourceschange",dt),L.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Pt=null,Lt=null;L.depth&&(Lt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=L.stencil?wl:Cl,Pt=L.stencil?Rl:nr);const Ut={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:f};m=this.getBinding(),v=m.createProjectionLayer(Ut),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new ir(v.textureWidth,v.textureHeight,{format:Yi,type:da,depthTexture:new _y(v.textureWidth,v.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),R=new ir(E.framebufferWidth,E.framebufferHeight,{format:Yi,type:da,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await l.requestReferenceSpace(h),ct.setContext(l),ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function dt(Z){for(let rt=0;rt<Z.removed.length;rt++){const wt=Z.removed[rt],Pt=O.indexOf(wt);Pt>=0&&(O[Pt]=null,P[Pt].disconnect(wt))}for(let rt=0;rt<Z.added.length;rt++){const wt=Z.added[rt];let Pt=O.indexOf(wt);if(Pt===-1){for(let Ut=0;Ut<P.length;Ut++)if(Ut>=O.length){O.push(wt),Pt=Ut;break}else if(O[Ut]===null){O[Ut]=wt,Pt=Ut;break}if(Pt===-1)break}const Lt=P[Pt];Lt&&Lt.connect(wt)}}const Q=new st,At=new st;function Ct(Z,rt,wt){Q.setFromMatrixPosition(rt.matrixWorld),At.setFromMatrixPosition(wt.matrixWorld);const Pt=Q.distanceTo(At),Lt=rt.projectionMatrix.elements,Ut=wt.projectionMatrix.elements,Wt=Lt[14]/(Lt[10]-1),F=Lt[14]/(Lt[10]+1),Ee=(Lt[9]+1)/Lt[5],re=(Lt[9]-1)/Lt[5],Jt=(Lt[8]-1)/Lt[0],Ft=(Ut[8]+1)/Ut[0],$t=Wt*Jt,lt=Wt*Ft,Dt=Pt/(-Jt+Ft),Nt=Dt*-Jt;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(Dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Lt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const ie=Wt+Dt,U=F+Dt,b=$t-Nt,J=lt+(Pt-Nt),_t=Ee*F/U*ie,Mt=re*F/U*ie;Z.projectionMatrix.makePerspective(b,J,_t,Mt,ie,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ht(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let rt=Z.near,wt=Z.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),W.near=C.near=w.near=rt,W.far=C.far=w.far=wt,(et!==W.near||St!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),et=W.near,St=W.far),W.layers.mask=Z.layers.mask|6,w.layers.mask=W.layers.mask&3,C.layers.mask=W.layers.mask&5;const Pt=Z.parent,Lt=W.cameras;Ht(W,Pt);for(let Ut=0;Ut<Lt.length;Ut++)Ht(Lt[Ut],Pt);Lt.length===2?Ct(W,w,C):W.projectionMatrix.copy(w.projectionMatrix),oe(Z,W,Pt)};function oe(Z,rt,wt){wt===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(wt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&E===null))return g},this.setFoveation=function(Z){g=Z,v!==null&&(v.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(Z){return S[Z]};let ge=null;function V(Z,rt){if(y=rt.getViewerPose(p||d),T=rt,y!==null){const wt=y.views;E!==null&&(e.setRenderTargetFramebuffer(R,E.framebuffer),e.setRenderTarget(R));let Pt=!1;wt.length!==W.cameras.length&&(W.cameras.length=0,Pt=!0);for(let F=0;F<wt.length;F++){const Ee=wt[F];let re=null;if(E!==null)re=E.getViewport(Ee);else{const Ft=m.getViewSubImage(v,Ee);re=Ft.viewport,F===0&&(e.setRenderTargetTextures(R,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(R))}let Jt=k[F];Jt===void 0&&(Jt=new zi,Jt.layers.enable(F),Jt.viewport=new hn,k[F]=Jt),Jt.matrix.fromArray(Ee.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Ee.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(re.x,re.y,re.width,re.height),F===0&&(W.matrix.copy(Jt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Pt===!0&&W.cameras.push(Jt)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){m=r.getBinding();const F=m.getDepthInformation(wt[0]);F&&F.isValid&&F.texture&&x.init(F,l.renderState)}if(Lt&&Lt.includes("camera-access")&&D){e.state.unbindTexture(),m=r.getBinding();for(let F=0;F<wt.length;F++){const Ee=wt[F].camera;if(Ee){let re=S[Ee];re||(re=new xy,S[Ee]=re);const Jt=m.getCameraImage(Ee);re.sourceTexture=Jt}}}}for(let wt=0;wt<P.length;wt++){const Pt=O[wt],Lt=P[wt];Pt!==null&&Lt!==void 0&&Lt.update(Pt,rt,p||d)}ge&&ge(Z,rt),rt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:rt}),T=null}const ct=new My;ct.setAnimationLoop(V),this.setAnimationLoop=function(Z){ge=Z},this.dispose=function(){}}}const Ws=new ha,e3=new sn;function n3(o,e){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,py(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,L,I,R){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(x,S):S.isMeshToonMaterial?(f(x,S),m(x,S)):S.isMeshPhongMaterial?(f(x,S),y(x,S)):S.isMeshStandardMaterial?(f(x,S),v(x,S),S.isMeshPhysicalMaterial&&E(x,S,R)):S.isMeshMatcapMaterial?(f(x,S),T(x,S)):S.isMeshDepthMaterial?f(x,S):S.isMeshDistanceMaterial?(f(x,S),D(x,S)):S.isMeshNormalMaterial?f(x,S):S.isLineBasicMaterial?(d(x,S),S.isLineDashedMaterial&&h(x,S)):S.isPointsMaterial?g(x,S,L,I):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Jn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Jn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const L=e.get(S),I=L.envMap,R=L.envMapRotation;I&&(x.envMap.value=I,Ws.copy(R),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),x.envMapRotation.value.setFromMatrix4(e3.makeRotationFromEuler(Ws)),x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function h(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function g(x,S,L,I){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*L,x.scale.value=I*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function y(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function m(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function E(x,S,L){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Jn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,S){S.matcap&&(x.matcap.value=S.matcap)}function D(x,S){const L=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function i3(o,e,i,r){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(L,I){const R=I.program;r.uniformBlockBinding(L,R)}function p(L,I){let R=l[L.id];R===void 0&&(T(L),R=y(L),l[L.id]=R,L.addEventListener("dispose",x));const P=I.program;r.updateUBOMapping(L,P);const O=e.render.frame;f[L.id]!==O&&(v(L),f[L.id]=O)}function y(L){const I=m();L.__bindingPointIndex=I;const R=o.createBuffer(),P=L.__size,O=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,P,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,R),R}function m(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const I=l[L.id],R=L.uniforms,P=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let O=0,B=R.length;O<B;O++){const G=Array.isArray(R[O])?R[O]:[R[O]];for(let w=0,C=G.length;w<C;w++){const k=G[w];if(E(k,O,w,P)===!0){const W=k.__offset,et=Array.isArray(k.value)?k.value:[k.value];let St=0;for(let ft=0;ft<et.length;ft++){const K=et[ft],dt=D(K);typeof K=="number"||typeof K=="boolean"?(k.__data[0]=K,o.bufferSubData(o.UNIFORM_BUFFER,W+St,k.__data)):K.isMatrix3?(k.__data[0]=K.elements[0],k.__data[1]=K.elements[1],k.__data[2]=K.elements[2],k.__data[3]=0,k.__data[4]=K.elements[3],k.__data[5]=K.elements[4],k.__data[6]=K.elements[5],k.__data[7]=0,k.__data[8]=K.elements[6],k.__data[9]=K.elements[7],k.__data[10]=K.elements[8],k.__data[11]=0):(K.toArray(k.__data,St),St+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(L,I,R,P){const O=L.value,B=I+"_"+R;if(P[B]===void 0)return typeof O=="number"||typeof O=="boolean"?P[B]=O:P[B]=O.clone(),!0;{const G=P[B];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return P[B]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function T(L){const I=L.uniforms;let R=0;const P=16;for(let B=0,G=I.length;B<G;B++){const w=Array.isArray(I[B])?I[B]:[I[B]];for(let C=0,k=w.length;C<k;C++){const W=w[C],et=Array.isArray(W.value)?W.value:[W.value];for(let St=0,ft=et.length;St<ft;St++){const K=et[St],dt=D(K),Q=R%P,At=Q%dt.boundary,Ct=Q+At;R+=At,Ct!==0&&P-Ct<dt.storage&&(R+=P-Ct),W.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=R,R+=dt.storage}}}const O=R%P;return O>0&&(R+=P-O),L.__size=R,L.__cache={},this}function D(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),I}function x(L){const I=L.target;I.removeEventListener("dispose",x);const R=d.indexOf(I.__bindingPointIndex);d.splice(R,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete f[I.id]}function S(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},f={}}return{bind:g,update:p,dispose:S}}class a3{constructor(e={}){const{canvas:i=PE(),context:r=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const T=new Uint32Array(4),D=new Int32Array(4);let x=null,S=null;const L=[],I=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1;this._outputColorSpace=yi;let O=0,B=0,G=null,w=-1,C=null;const k=new hn,W=new hn;let et=null;const St=new Ce(0);let ft=0,K=i.width,dt=i.height,Q=1,At=null,Ct=null;const Ht=new hn(0,0,K,dt),oe=new hn(0,0,K,dt);let ge=!1;const V=new lm;let ct=!1,Z=!1;const rt=new sn,wt=new st,Pt=new hn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Wt(){return G===null?Q:1}let F=r;function Ee(N,nt){return i.getContext(N,nt)}try{const N={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jp}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",j,!1),i.addEventListener("webglcontextcreationerror",xt,!1),F===null){const nt="webgl2";if(F=Ee(nt,N),F===null)throw Ee(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let re,Jt,Ft,$t,lt,Dt,Nt,ie,U,b,J,_t,Mt,ht,qt,Bt,ee,ne,Ot,Vt,le,X,q,bt;function z(){re=new p2(F),re.init(),X=new KR(F,re),Jt=new o2(F,re,e,X),Ft=new YR(F,re),Jt.reversedDepthBuffer&&v&&Ft.buffers.depth.setReversed(!0),$t=new v2(F),lt=new zR,Dt=new ZR(F,re,Ft,lt,Jt,X,$t),Nt=new c2(R),ie=new h2(R),U=new ET(F),q=new s2(F,U),b=new m2(F,U,$t,q),J=new x2(F,b,U,$t),Ot=new _2(F,Jt,Dt),Bt=new l2(lt),_t=new OR(R,Nt,ie,re,Jt,q,Bt),Mt=new n3(R,lt),ht=new IR,qt=new kR(re),ne=new a2(R,Nt,ie,Ft,J,E,g),ee=new qR(R,J,Jt),bt=new i3(F,$t,Jt,Ft),Vt=new r2(F,re,$t),le=new g2(F,re,$t),$t.programs=_t.programs,R.capabilities=Jt,R.extensions=re,R.properties=lt,R.renderLists=ht,R.shadowMap=ee,R.state=Ft,R.info=$t}z();const gt=new t3(R,F);this.xr=gt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const N=re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(N){N!==void 0&&(Q=N,this.setSize(K,dt,!1))},this.getSize=function(N){return N.set(K,dt)},this.setSize=function(N,nt,vt=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=N,dt=nt,i.width=Math.floor(N*Q),i.height=Math.floor(nt*Q),vt===!0&&(i.style.width=N+"px",i.style.height=nt+"px"),this.setViewport(0,0,N,nt)},this.getDrawingBufferSize=function(N){return N.set(K*Q,dt*Q).floor()},this.setDrawingBufferSize=function(N,nt,vt){K=N,dt=nt,Q=vt,i.width=Math.floor(N*vt),i.height=Math.floor(nt*vt),this.setViewport(0,0,N,nt)},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(Ht)},this.setViewport=function(N,nt,vt,yt){N.isVector4?Ht.set(N.x,N.y,N.z,N.w):Ht.set(N,nt,vt,yt),Ft.viewport(k.copy(Ht).multiplyScalar(Q).round())},this.getScissor=function(N){return N.copy(oe)},this.setScissor=function(N,nt,vt,yt){N.isVector4?oe.set(N.x,N.y,N.z,N.w):oe.set(N,nt,vt,yt),Ft.scissor(W.copy(oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(N){Ft.setScissorTest(ge=N)},this.setOpaqueSort=function(N){At=N},this.setTransparentSort=function(N){Ct=N},this.getClearColor=function(N){return N.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(N=!0,nt=!0,vt=!0){let yt=0;if(N){let at=!1;if(G!==null){const It=G.texture.format;at=It===sm||It===am||It===im}if(at){const It=G.texture.type,Zt=It===da||It===nr||It===Al||It===Rl||It===tm||It===em,Qt=ne.getClearColor(),Gt=ne.getClearAlpha(),ae=Qt.r,he=Qt.g,fe=Qt.b;Zt?(T[0]=ae,T[1]=he,T[2]=fe,T[3]=Gt,F.clearBufferuiv(F.COLOR,0,T)):(D[0]=ae,D[1]=he,D[2]=fe,D[3]=Gt,F.clearBufferiv(F.COLOR,0,D))}else yt|=F.COLOR_BUFFER_BIT}nt&&(yt|=F.DEPTH_BUFFER_BIT),vt&&(yt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(yt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",j,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),ne.dispose(),ht.dispose(),qt.dispose(),lt.dispose(),Nt.dispose(),ie.dispose(),J.dispose(),q.dispose(),bt.dispose(),_t.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Ye),gt.removeEventListener("sessionend",$e),gn.stop()};function Rt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const N=$t.autoReset,nt=ee.enabled,vt=ee.autoUpdate,yt=ee.needsUpdate,at=ee.type;z(),$t.autoReset=N,ee.enabled=nt,ee.autoUpdate=vt,ee.needsUpdate=yt,ee.type=at}function xt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function pt(N){const nt=N.target;nt.removeEventListener("dispose",pt),zt(nt)}function zt(N){kt(N),lt.remove(N)}function kt(N){const nt=lt.get(N).programs;nt!==void 0&&(nt.forEach(function(vt){_t.releaseProgram(vt)}),N.isShaderMaterial&&_t.releaseShaderCache(N))}this.renderBufferDirect=function(N,nt,vt,yt,at,It){nt===null&&(nt=Lt);const Zt=at.isMesh&&at.matrixWorld.determinant()<0,Qt=ma(N,nt,vt,yt,at);Ft.setMaterial(yt,Zt);let Gt=vt.index,ae=1;if(yt.wireframe===!0){if(Gt=b.getWireframeAttribute(vt),Gt===void 0)return;ae=2}const he=vt.drawRange,fe=vt.attributes.position;let be=he.start*ae,ke=(he.start+he.count)*ae;It!==null&&(be=Math.max(be,It.start*ae),ke=Math.min(ke,(It.start+It.count)*ae)),Gt!==null?(be=Math.max(be,0),ke=Math.min(ke,Gt.count)):fe!=null&&(be=Math.max(be,0),ke=Math.min(ke,fe.count));const on=ke-be;if(on<0||on===1/0)return;q.setup(at,yt,Qt,vt,Gt);let Fe,ze=Vt;if(Gt!==null&&(Fe=U.get(Gt),ze=le,ze.setIndex(Fe)),at.isMesh)yt.wireframe===!0?(Ft.setLineWidth(yt.wireframeLinewidth*Wt()),ze.setMode(F.LINES)):ze.setMode(F.TRIANGLES);else if(at.isLine){let de=yt.linewidth;de===void 0&&(de=1),Ft.setLineWidth(de*Wt()),at.isLineSegments?ze.setMode(F.LINES):at.isLineLoop?ze.setMode(F.LINE_LOOP):ze.setMode(F.LINE_STRIP)}else at.isPoints?ze.setMode(F.POINTS):at.isSprite&&ze.setMode(F.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)Dl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ze.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const de=at._multiDrawStarts,He=at._multiDrawCounts,Se=at._multiDrawCount,Tn=Gt?U.get(Gt).bytesPerElement:1,ci=lt.get(yt).currentProgram.getUniforms();for(let Pe=0;Pe<Se;Pe++)ci.setValue(F,"_gl_DrawID",Pe),ze.render(de[Pe]/Tn,He[Pe])}else if(at.isInstancedMesh)ze.renderInstances(be,on,at.count);else if(vt.isInstancedBufferGeometry){const de=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,He=Math.min(vt.instanceCount,de);ze.renderInstances(be,on,He)}else ze.render(be,on)};function Yt(N,nt,vt){N.transparent===!0&&N.side===la&&N.forceSinglePass===!1?(N.side=Jn,N.needsUpdate=!0,Gn(N,nt,vt),N.side=ys,N.needsUpdate=!0,Gn(N,nt,vt),N.side=la):Gn(N,nt,vt)}this.compile=function(N,nt,vt=null){vt===null&&(vt=N),S=qt.get(vt),S.init(nt),I.push(S),vt.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),N!==vt&&N.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),S.setupLights();const yt=new Set;return N.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const It=at.material;if(It)if(Array.isArray(It))for(let Zt=0;Zt<It.length;Zt++){const Qt=It[Zt];Yt(Qt,vt,at),yt.add(Qt)}else Yt(It,vt,at),yt.add(It)}),S=I.pop(),yt},this.compileAsync=function(N,nt,vt=null){const yt=this.compile(N,nt,vt);return new Promise(at=>{function It(){if(yt.forEach(function(Zt){lt.get(Zt).currentProgram.isReady()&&yt.delete(Zt)}),yt.size===0){at(N);return}setTimeout(It,10)}re.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ce=null;function Te(N){ce&&ce(N)}function Ye(){gn.stop()}function $e(){gn.start()}const gn=new My;gn.setAnimationLoop(Te),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(N){ce=N,gt.setAnimationLoop(N),N===null?gn.stop():gn.start()},gt.addEventListener("sessionstart",Ye),gt.addEventListener("sessionend",$e),this.render=function(N,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(nt),nt=gt.getCamera()),N.isScene===!0&&N.onBeforeRender(R,N,nt,G),S=qt.get(N,I.length),S.init(nt),I.push(S),rt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),V.setFromProjectionMatrix(rt,fa,nt.reversedDepth),Z=this.localClippingEnabled,ct=Bt.init(this.clippingPlanes,Z),x=ht.get(N,L.length),x.init(),L.push(x),gt.enabled===!0&&gt.isPresenting===!0){const It=R.xr.getDepthSensingMesh();It!==null&&Ii(It,nt,-1/0,R.sortObjects)}Ii(N,nt,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(At,Ct),Ut=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Ut&&ne.addToRenderList(x,N),this.info.render.frame++,ct===!0&&Bt.beginShadows();const vt=S.state.shadowsArray;ee.render(vt,N,nt),ct===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const yt=x.opaque,at=x.transmissive;if(S.setupLights(),nt.isArrayCamera){const It=nt.cameras;if(at.length>0)for(let Zt=0,Qt=It.length;Zt<Qt;Zt++){const Gt=It[Zt];Ti(yt,at,N,Gt)}Ut&&ne.render(N);for(let Zt=0,Qt=It.length;Zt<Qt;Zt++){const Gt=It[Zt];Ei(x,N,Gt,Gt.viewport)}}else at.length>0&&Ti(yt,at,N,nt),Ut&&ne.render(N),Ei(x,N,nt);G!==null&&B===0&&(Dt.updateMultisampleRenderTarget(G),Dt.updateRenderTargetMipmap(G)),N.isScene===!0&&N.onAfterRender(R,N,nt),q.resetDefaultState(),w=-1,C=null,I.pop(),I.length>0?(S=I[I.length-1],ct===!0&&Bt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Ii(N,nt,vt,yt){if(N.visible===!1)return;if(N.layers.test(nt.layers)){if(N.isGroup)vt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(nt);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||V.intersectsSprite(N)){yt&&Pt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(rt);const Zt=J.update(N),Qt=N.material;Qt.visible&&x.push(N,Zt,Qt,vt,Pt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||V.intersectsObject(N))){const Zt=J.update(N),Qt=N.material;if(yt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Pt.copy(N.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),Pt.copy(Zt.boundingSphere.center)),Pt.applyMatrix4(N.matrixWorld).applyMatrix4(rt)),Array.isArray(Qt)){const Gt=Zt.groups;for(let ae=0,he=Gt.length;ae<he;ae++){const fe=Gt[ae],be=Qt[fe.materialIndex];be&&be.visible&&x.push(N,Zt,be,vt,Pt.z,fe)}}else Qt.visible&&x.push(N,Zt,Qt,vt,Pt.z,null)}}const It=N.children;for(let Zt=0,Qt=It.length;Zt<Qt;Zt++)Ii(It[Zt],nt,vt,yt)}function Ei(N,nt,vt,yt){const at=N.opaque,It=N.transmissive,Zt=N.transparent;S.setupLightsView(vt),ct===!0&&Bt.setGlobalState(R.clippingPlanes,vt),yt&&Ft.viewport(k.copy(yt)),at.length>0&&rn(at,nt,vt),It.length>0&&rn(It,nt,vt),Zt.length>0&&rn(Zt,nt,vt),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Ti(N,nt,vt,yt){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[yt.id]===void 0&&(S.state.transmissionRenderTarget[yt.id]=new ir(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Ul:da,minFilter:er,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const It=S.state.transmissionRenderTarget[yt.id],Zt=yt.viewport||k;It.setSize(Zt.z*R.transmissionResolutionScale,Zt.w*R.transmissionResolutionScale);const Qt=R.getRenderTarget(),Gt=R.getActiveCubeFace(),ae=R.getActiveMipmapLevel();R.setRenderTarget(It),R.getClearColor(St),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&ne.render(vt);const he=R.toneMapping;R.toneMapping=xs;const fe=yt.viewport;if(yt.viewport!==void 0&&(yt.viewport=void 0),S.setupLightsView(yt),ct===!0&&Bt.setGlobalState(R.clippingPlanes,yt),rn(N,vt,yt),Dt.updateMultisampleRenderTarget(It),Dt.updateRenderTargetMipmap(It),re.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ke=0,on=nt.length;ke<on;ke++){const Fe=nt[ke],ze=Fe.object,de=Fe.geometry,He=Fe.material,Se=Fe.group;if(He.side===la&&ze.layers.test(yt.layers)){const Tn=He.side;He.side=Jn,He.needsUpdate=!0,pa(ze,vt,yt,de,He,Se),He.side=Tn,He.needsUpdate=!0,be=!0}}be===!0&&(Dt.updateMultisampleRenderTarget(It),Dt.updateRenderTargetMipmap(It))}R.setRenderTarget(Qt,Gt,ae),R.setClearColor(St,ft),fe!==void 0&&(yt.viewport=fe),R.toneMapping=he}function rn(N,nt,vt){const yt=nt.isScene===!0?nt.overrideMaterial:null;for(let at=0,It=N.length;at<It;at++){const Zt=N[at],Qt=Zt.object,Gt=Zt.geometry,ae=Zt.group;let he=Zt.material;he.allowOverride===!0&&yt!==null&&(he=yt),Qt.layers.test(vt.layers)&&pa(Qt,nt,vt,Gt,he,ae)}}function pa(N,nt,vt,yt,at,It){N.onBeforeRender(R,nt,vt,yt,at,It),N.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),at.onBeforeRender(R,nt,vt,yt,N,It),at.transparent===!0&&at.side===la&&at.forceSinglePass===!1?(at.side=Jn,at.needsUpdate=!0,R.renderBufferDirect(vt,nt,yt,at,N,It),at.side=ys,at.needsUpdate=!0,R.renderBufferDirect(vt,nt,yt,at,N,It),at.side=la):R.renderBufferDirect(vt,nt,yt,at,N,It),N.onAfterRender(R,nt,vt,yt,at,It)}function Gn(N,nt,vt){nt.isScene!==!0&&(nt=Lt);const yt=lt.get(N),at=S.state.lights,It=S.state.shadowsArray,Zt=at.state.version,Qt=_t.getParameters(N,at.state,It,nt,vt),Gt=_t.getProgramCacheKey(Qt);let ae=yt.programs;yt.environment=N.isMeshStandardMaterial?nt.environment:null,yt.fog=nt.fog,yt.envMap=(N.isMeshStandardMaterial?ie:Nt).get(N.envMap||yt.environment),yt.envMapRotation=yt.environment!==null&&N.envMap===null?nt.environmentRotation:N.envMapRotation,ae===void 0&&(N.addEventListener("dispose",pt),ae=new Map,yt.programs=ae);let he=ae.get(Gt);if(he!==void 0){if(yt.currentProgram===he&&yt.lightsStateVersion===Zt)return oi(N,Qt),he}else Qt.uniforms=_t.getUniforms(N),N.onBeforeCompile(Qt,R),he=_t.acquireProgram(Qt,Gt),ae.set(Gt,he),yt.uniforms=Qt.uniforms;const fe=yt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(fe.clippingPlanes=Bt.uniform),oi(N,Qt),yt.needsLights=rr(N),yt.lightsStateVersion=Zt,yt.needsLights&&(fe.ambientLightColor.value=at.state.ambient,fe.lightProbe.value=at.state.probe,fe.directionalLights.value=at.state.directional,fe.directionalLightShadows.value=at.state.directionalShadow,fe.spotLights.value=at.state.spot,fe.spotLightShadows.value=at.state.spotShadow,fe.rectAreaLights.value=at.state.rectArea,fe.ltc_1.value=at.state.rectAreaLTC1,fe.ltc_2.value=at.state.rectAreaLTC2,fe.pointLights.value=at.state.point,fe.pointLightShadows.value=at.state.pointShadow,fe.hemisphereLights.value=at.state.hemi,fe.directionalShadowMap.value=at.state.directionalShadowMap,fe.directionalShadowMatrix.value=at.state.directionalShadowMatrix,fe.spotShadowMap.value=at.state.spotShadowMap,fe.spotLightMatrix.value=at.state.spotLightMatrix,fe.spotLightMap.value=at.state.spotLightMap,fe.pointShadowMap.value=at.state.pointShadowMap,fe.pointShadowMatrix.value=at.state.pointShadowMatrix),yt.currentProgram=he,yt.uniformsList=null,he}function En(N){if(N.uniformsList===null){const nt=N.currentProgram.getUniforms();N.uniformsList=Pu.seqWithValue(nt.seq,N.uniforms)}return N.uniformsList}function oi(N,nt){const vt=lt.get(N);vt.outputColorSpace=nt.outputColorSpace,vt.batching=nt.batching,vt.batchingColor=nt.batchingColor,vt.instancing=nt.instancing,vt.instancingColor=nt.instancingColor,vt.instancingMorph=nt.instancingMorph,vt.skinning=nt.skinning,vt.morphTargets=nt.morphTargets,vt.morphNormals=nt.morphNormals,vt.morphColors=nt.morphColors,vt.morphTargetsCount=nt.morphTargetsCount,vt.numClippingPlanes=nt.numClippingPlanes,vt.numIntersection=nt.numClipIntersection,vt.vertexAlphas=nt.vertexAlphas,vt.vertexTangents=nt.vertexTangents,vt.toneMapping=nt.toneMapping}function ma(N,nt,vt,yt,at){nt.isScene!==!0&&(nt=Lt),Dt.resetTextureUnits();const It=nt.fog,Zt=yt.isMeshStandardMaterial?nt.environment:null,Qt=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:_o,Gt=(yt.isMeshStandardMaterial?ie:Nt).get(yt.envMap||Zt),ae=yt.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,he=!!vt.attributes.tangent&&(!!yt.normalMap||yt.anisotropy>0),fe=!!vt.morphAttributes.position,be=!!vt.morphAttributes.normal,ke=!!vt.morphAttributes.color;let on=xs;yt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(on=R.toneMapping);const Fe=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,ze=Fe!==void 0?Fe.length:0,de=lt.get(yt),He=S.state.lights;if(ct===!0&&(Z===!0||N!==C)){const un=N===C&&yt.id===w;Bt.setState(yt,N,un)}let Se=!1;yt.version===de.__version?(de.needsLights&&de.lightsStateVersion!==He.state.version||de.outputColorSpace!==Qt||at.isBatchedMesh&&de.batching===!1||!at.isBatchedMesh&&de.batching===!0||at.isBatchedMesh&&de.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&de.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&de.instancing===!1||!at.isInstancedMesh&&de.instancing===!0||at.isSkinnedMesh&&de.skinning===!1||!at.isSkinnedMesh&&de.skinning===!0||at.isInstancedMesh&&de.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&de.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&de.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&de.instancingMorph===!1&&at.morphTexture!==null||de.envMap!==Gt||yt.fog===!0&&de.fog!==It||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==Bt.numPlanes||de.numIntersection!==Bt.numIntersection)||de.vertexAlphas!==ae||de.vertexTangents!==he||de.morphTargets!==fe||de.morphNormals!==be||de.morphColors!==ke||de.toneMapping!==on||de.morphTargetsCount!==ze)&&(Se=!0):(Se=!0,de.__version=yt.version);let Tn=de.currentProgram;Se===!0&&(Tn=Gn(yt,nt,at));let ci=!1,Pe=!1,Ba=!1;const tn=Tn.getUniforms(),qn=de.uniforms;if(Ft.useProgram(Tn.program)&&(ci=!0,Pe=!0,Ba=!0),yt.id!==w&&(w=yt.id,Pe=!0),ci||C!==N){Ft.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),tn.setValue(F,"projectionMatrix",N.projectionMatrix),tn.setValue(F,"viewMatrix",N.matrixWorldInverse);const Vn=tn.map.cameraPosition;Vn!==void 0&&Vn.setValue(F,wt.setFromMatrixPosition(N.matrixWorld)),Jt.logarithmicDepthBuffer&&tn.setValue(F,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(yt.isMeshPhongMaterial||yt.isMeshToonMaterial||yt.isMeshLambertMaterial||yt.isMeshBasicMaterial||yt.isMeshStandardMaterial||yt.isShaderMaterial)&&tn.setValue(F,"isOrthographic",N.isOrthographicCamera===!0),C!==N&&(C=N,Pe=!0,Ba=!0)}if(at.isSkinnedMesh){tn.setOptional(F,at,"bindMatrix"),tn.setOptional(F,at,"bindMatrixInverse");const un=at.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),tn.setValue(F,"boneTexture",un.boneTexture,Dt))}at.isBatchedMesh&&(tn.setOptional(F,at,"batchingTexture"),tn.setValue(F,"batchingTexture",at._matricesTexture,Dt),tn.setOptional(F,at,"batchingIdTexture"),tn.setValue(F,"batchingIdTexture",at._indirectTexture,Dt),tn.setOptional(F,at,"batchingColorTexture"),at._colorsTexture!==null&&tn.setValue(F,"batchingColorTexture",at._colorsTexture,Dt));const vn=vt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Ot.update(at,vt,Tn),(Pe||de.receiveShadow!==at.receiveShadow)&&(de.receiveShadow=at.receiveShadow,tn.setValue(F,"receiveShadow",at.receiveShadow)),yt.isMeshGouraudMaterial&&yt.envMap!==null&&(qn.envMap.value=Gt,qn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),yt.isMeshStandardMaterial&&yt.envMap===null&&nt.environment!==null&&(qn.envMapIntensity.value=nt.environmentIntensity),Pe&&(tn.setValue(F,"toneMappingExposure",R.toneMappingExposure),de.needsLights&&Ss(qn,Ba),It&&yt.fog===!0&&Mt.refreshFogUniforms(qn,It),Mt.refreshMaterialUniforms(qn,yt,Q,dt,S.state.transmissionRenderTarget[N.id]),Pu.upload(F,En(de),qn,Dt)),yt.isShaderMaterial&&yt.uniformsNeedUpdate===!0&&(Pu.upload(F,En(de),qn,Dt),yt.uniformsNeedUpdate=!1),yt.isSpriteMaterial&&tn.setValue(F,"center",at.center),tn.setValue(F,"modelViewMatrix",at.modelViewMatrix),tn.setValue(F,"normalMatrix",at.normalMatrix),tn.setValue(F,"modelMatrix",at.matrixWorld),yt.isShaderMaterial||yt.isRawShaderMaterial){const un=yt.uniformsGroups;for(let Vn=0,or=un.length;Vn<or;Vn++){const Zi=un[Vn];bt.update(Zi,Tn),bt.bind(Zi,Tn)}}return Tn}function Ss(N,nt){N.ambientLightColor.needsUpdate=nt,N.lightProbe.needsUpdate=nt,N.directionalLights.needsUpdate=nt,N.directionalLightShadows.needsUpdate=nt,N.pointLights.needsUpdate=nt,N.pointLightShadows.needsUpdate=nt,N.spotLights.needsUpdate=nt,N.spotLightShadows.needsUpdate=nt,N.rectAreaLights.needsUpdate=nt,N.hemisphereLights.needsUpdate=nt}function rr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(N,nt,vt){const yt=lt.get(N);yt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,yt.__autoAllocateDepthBuffer===!1&&(yt.__useRenderToTexture=!1),lt.get(N.texture).__webglTexture=nt,lt.get(N.depthTexture).__webglTexture=yt.__autoAllocateDepthBuffer?void 0:vt,yt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,nt){const vt=lt.get(N);vt.__webglFramebuffer=nt,vt.__useDefaultFramebuffer=nt===void 0};const Cn=F.createFramebuffer();this.setRenderTarget=function(N,nt=0,vt=0){G=N,O=nt,B=vt;let yt=!0,at=null,It=!1,Zt=!1;if(N){const Gt=lt.get(N);if(Gt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(F.FRAMEBUFFER,null),yt=!1;else if(Gt.__webglFramebuffer===void 0)Dt.setupRenderTarget(N);else if(Gt.__hasExternalTextures)Dt.rebindTextures(N,lt.get(N.texture).__webglTexture,lt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const fe=N.depthTexture;if(Gt.__boundDepthTexture!==fe){if(fe!==null&&lt.has(fe)&&(N.width!==fe.image.width||N.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(N)}}const ae=N.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Zt=!0);const he=lt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(he[nt])?at=he[nt][vt]:at=he[nt],It=!0):N.samples>0&&Dt.useMultisampledRTT(N)===!1?at=lt.get(N).__webglMultisampledFramebuffer:Array.isArray(he)?at=he[vt]:at=he,k.copy(N.viewport),W.copy(N.scissor),et=N.scissorTest}else k.copy(Ht).multiplyScalar(Q).floor(),W.copy(oe).multiplyScalar(Q).floor(),et=ge;if(vt!==0&&(at=Cn),Ft.bindFramebuffer(F.FRAMEBUFFER,at)&&yt&&Ft.drawBuffers(N,at),Ft.viewport(k),Ft.scissor(W),Ft.setScissorTest(et),It){const Gt=lt.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Gt.__webglTexture,vt)}else if(Zt){const Gt=nt;for(let ae=0;ae<N.textures.length;ae++){const he=lt.get(N.textures[ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ae,he.__webglTexture,vt,Gt)}}else if(N!==null&&vt!==0){const Gt=lt.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Gt.__webglTexture,vt)}w=-1},this.readRenderTargetPixels=function(N,nt,vt,yt,at,It,Zt,Qt=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=lt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Zt!==void 0&&(Gt=Gt[Zt]),Gt){Ft.bindFramebuffer(F.FRAMEBUFFER,Gt);try{const ae=N.textures[Qt],he=ae.format,fe=ae.type;if(!Jt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=N.width-yt&&vt>=0&&vt<=N.height-at&&(N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qt),F.readPixels(nt,vt,yt,at,X.convert(he),X.convert(fe),It))}finally{const ae=G!==null?lt.get(G).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(N,nt,vt,yt,at,It,Zt,Qt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=lt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Zt!==void 0&&(Gt=Gt[Zt]),Gt)if(nt>=0&&nt<=N.width-yt&&vt>=0&&vt<=N.height-at){Ft.bindFramebuffer(F.FRAMEBUFFER,Gt);const ae=N.textures[Qt],he=ae.format,fe=ae.type;if(!Jt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.bufferData(F.PIXEL_PACK_BUFFER,It.byteLength,F.STREAM_READ),N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qt),F.readPixels(nt,vt,yt,at,X.convert(he),X.convert(fe),0);const ke=G!==null?lt.get(G).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,ke);const on=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await IE(F,on,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,It),F.deleteBuffer(be),F.deleteSync(on),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,nt=null,vt=0){const yt=Math.pow(2,-vt),at=Math.floor(N.image.width*yt),It=Math.floor(N.image.height*yt),Zt=nt!==null?nt.x:0,Qt=nt!==null?nt.y:0;Dt.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,vt,0,0,Zt,Qt,at,It),Ft.unbindTexture()};const Qe=F.createFramebuffer(),li=F.createFramebuffer();this.copyTextureToTexture=function(N,nt,vt=null,yt=null,at=0,It=null){It===null&&(at!==0?(Dl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=at,at=0):It=0);let Zt,Qt,Gt,ae,he,fe,be,ke,on;const Fe=N.isCompressedTexture?N.mipmaps[It]:N.image;if(vt!==null)Zt=vt.max.x-vt.min.x,Qt=vt.max.y-vt.min.y,Gt=vt.isBox3?vt.max.z-vt.min.z:1,ae=vt.min.x,he=vt.min.y,fe=vt.isBox3?vt.min.z:0;else{const vn=Math.pow(2,-at);Zt=Math.floor(Fe.width*vn),Qt=Math.floor(Fe.height*vn),N.isDataArrayTexture?Gt=Fe.depth:N.isData3DTexture?Gt=Math.floor(Fe.depth*vn):Gt=1,ae=0,he=0,fe=0}yt!==null?(be=yt.x,ke=yt.y,on=yt.z):(be=0,ke=0,on=0);const ze=X.convert(nt.format),de=X.convert(nt.type);let He;nt.isData3DTexture?(Dt.setTexture3D(nt,0),He=F.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(Dt.setTexture2DArray(nt,0),He=F.TEXTURE_2D_ARRAY):(Dt.setTexture2D(nt,0),He=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,nt.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,nt.unpackAlignment);const Se=F.getParameter(F.UNPACK_ROW_LENGTH),Tn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ci=F.getParameter(F.UNPACK_SKIP_PIXELS),Pe=F.getParameter(F.UNPACK_SKIP_ROWS),Ba=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ae),F.pixelStorei(F.UNPACK_SKIP_ROWS,he),F.pixelStorei(F.UNPACK_SKIP_IMAGES,fe);const tn=N.isDataArrayTexture||N.isData3DTexture,qn=nt.isDataArrayTexture||nt.isData3DTexture;if(N.isDepthTexture){const vn=lt.get(N),un=lt.get(nt),Vn=lt.get(vn.__renderTarget),or=lt.get(un.__renderTarget);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let Zi=0;Zi<Gt;Zi++)tn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(N).__webglTexture,at,fe+Zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(nt).__webglTexture,It,on+Zi)),F.blitFramebuffer(ae,he,Zt,Qt,be,ke,Zt,Qt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(at!==0||N.isRenderTargetTexture||lt.has(N)){const vn=lt.get(N),un=lt.get(nt);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,Qe),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,li);for(let Vn=0;Vn<Gt;Vn++)tn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vn.__webglTexture,at,fe+Vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vn.__webglTexture,at),qn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,It,on+Vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,It),at!==0?F.blitFramebuffer(ae,he,Zt,Qt,be,ke,Zt,Qt,F.COLOR_BUFFER_BIT,F.NEAREST):qn?F.copyTexSubImage3D(He,It,be,ke,on+Vn,ae,he,Zt,Qt):F.copyTexSubImage2D(He,It,be,ke,ae,he,Zt,Qt);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else qn?N.isDataTexture||N.isData3DTexture?F.texSubImage3D(He,It,be,ke,on,Zt,Qt,Gt,ze,de,Fe.data):nt.isCompressedArrayTexture?F.compressedTexSubImage3D(He,It,be,ke,on,Zt,Qt,Gt,ze,Fe.data):F.texSubImage3D(He,It,be,ke,on,Zt,Qt,Gt,ze,de,Fe):N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,It,be,ke,Zt,Qt,ze,de,Fe.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,It,be,ke,Fe.width,Fe.height,ze,Fe.data):F.texSubImage2D(F.TEXTURE_2D,It,be,ke,Zt,Qt,ze,de,Fe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ci),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ba),It===0&&nt.generateMipmaps&&F.generateMipmap(He),Ft.unbindTexture()},this.initRenderTarget=function(N){lt.get(N).__webglFramebuffer===void 0&&Dt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Dt.setTextureCube(N,0):N.isData3DTexture?Dt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Dt.setTexture2DArray(N,0):Dt.setTexture2D(N,0),Ft.unbindTexture()},this.resetState=function(){O=0,B=0,G=null,Ft.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),i.unpackColorSpace=Be._getUnpackColorSpace()}}const Ux={forest:{sky:"#dce9df",horizon:"#eff1d9",ground:"#a8bd7c",grass:"#a6bc77",leaf:"#708e50",leafLight:"#91a563",darkLeaf:"#4e734e",hill:"#99ac8f",farHill:"#a6beb5",water:"#a3c8b3",light:"#fff1cf"},coast:{sky:"#cde6e8",horizon:"#edf2df",ground:"#b8c88c",grass:"#b2c086",leaf:"#6f9672",leafLight:"#a1b57c",darkLeaf:"#4b7d67",hill:"#a5c0ae",farHill:"#c0d5cb",water:"#82c5c4",light:"#fff2d5"},sunset:{sky:"#efdac9",horizon:"#f7e8c8",ground:"#b7bc80",grass:"#b1b574",leaf:"#80915e",leafLight:"#b0ac70",darkLeaf:"#657b55",hill:"#b2ae91",farHill:"#c9c1ac",water:"#b9c3b4",light:"#ffd5a3"}};function s3({speed:o,running:e,route:i,playerCount:r=1,opponentSpeed:l=0,playerDistances:f,analysisActive:d=!1}){const h=Xt.useRef(null),g=Xt.useRef({speed:o,running:e,playerCount:r,opponentSpeed:l,playerDistances:f,analysisActive:d}),p=Xt.useRef(i),y=Xt.useRef(null),m=Xt.useRef(null),[v,E]=Xt.useState(!1);return Xt.useEffect(()=>{g.current={speed:o,running:e,playerCount:r,opponentSpeed:l,playerDistances:f,analysisActive:d}},[o,e,r,l,f,d]),Xt.useEffect(()=>{var T;(T=m.current)==null||T.call(m,r)},[r]),Xt.useEffect(()=>{var T;p.current=i,(T=y.current)==null||T.call(y,i)},[i]),Xt.useEffect(()=>{const T=h.current;if(!T)return;let D;try{D=new a3({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{E(!0);return}const x=new lT,S=Ux[p.current];x.background=new Ce(S.sky),x.fog=new om(S.horizon,48,160),D.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),D.shadowMap.enabled=!0,D.shadowMap.type=Yx,D.outputColorSpace=yi,D.toneMapping=Kx,D.toneMappingExposure=1.08,D.domElement.setAttribute("aria-label","3D 森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進"),D.domElement.setAttribute("role","img"),D.domElement.style.cssText="display:block;width:100%;height:100%;outline:none",T.appendChild(D.domElement);const L=new zi(48,1,.1,300);L.position.set(3.5,4.8,12.3),L.lookAt(-3,1.1,-10);const I=new vT("#fff9e8","#88986b",1.7);x.add(I);const R=new yT(S.light,2.3);R.position.set(-18,28,-16),R.castShadow=!0,R.shadow.mapSize.set(1536,1536),R.shadow.camera.left=-35,R.shadow.camera.right=35,R.shadow.camera.top=24,R.shadow.camera.bottom=-42,R.shadow.camera.near=.5,R.shadow.camera.far=100,R.shadow.normalBias=.045,R.shadow.bias=-15e-5,R.shadow.radius=4,R.target.position.set(0,0,-12),x.add(R,R.target);const P=(X,q=.95)=>new Ru({color:X,roughness:q}),O={ground:P(S.ground),grass:P(S.grass),leaf:P(S.leaf),leafLight:P(S.leafLight),darkLeaf:P(S.darkLeaf),hill:P(S.hill),farHill:P(S.farHill),water:new Ru({color:S.water,roughness:.35,metalness:.07}),bark:P("#867651"),paleBark:P("#d7d4b4"),road:P("#ddcba5"),edge:P("#e6dab9"),rock:P("#b9bbaa"),rockLight:P("#cccdb8"),flower:P("#f6e5a0"),flowerWhite:P("#f4f1d5"),stem:P("#849254"),fence:P("#a59a71"),stripe:P("#dce8d9")},B=new Ia({uniforms:{top:{value:new Ce(S.sky)},bottom:{value:new Ce(S.horizon)}},vertexShader:"varying vec3 vWorld; void main(){vec4 p=modelMatrix*vec4(position,1.0);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){float h=clamp(normalize(vWorld+vec3(0.,20.,0.)).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,smoothstep(0.,.65,h)),1.);
#include <colorspace_fragment>
}`,side:Jn,depthWrite:!1});x.add(new Ve(new Js(245,24,18),B));const G=new Ve(new yo(450,450),O.ground);G.rotation.x=-Math.PI/2,G.position.set(0,-.035,-100),G.receiveShadow=!0,x.add(G);const w=(()=>{let X=4917;return()=>(X=X*16807%2147483647,(X-1)/2147483646)})(),C=X=>Math.sin(X*.035)*3.5*Math.min(1,Math.abs(X)/22);function k(X,q,bt,z){const gt=[],Rt=[];for(let pt=0;pt<=200;pt++){const zt=20-pt,kt=q(zt);if(gt.push(kt-X/2,bt,zt,kt+X/2,bt,zt),pt<200){const Yt=pt*2;Rt.push(Yt,Yt+1,Yt+2,Yt+1,Yt+3,Yt+2)}}const j=new ti;j.setAttribute("position",new mn(gt,3)),j.setIndex(Rt),j.computeVertexNormals();const xt=new Ve(j,z);return xt.receiveShadow=!0,x.add(xt),xt}k(6.6,C,.005,O.edge),k(6.1,C,.018,O.road);const W=X=>C(X)+15+Math.sin(X*.055)*3.5,et=k(5.3,W,-.018,O.edge),St=k(4.3,W,-.008,O.water),ft=new Ln,K=new Ru({color:"#81bdc7",roughness:.34,metalness:.12}),dt=P("#e3d1a7");ft.add(k(200,X=>C(X)+110,.001,K)),ft.add(k(7,X=>C(X)+8.5,.003,dt)),x.add(ft),ft.visible=p.current==="coast";const Q=new Ln,At=new Ve(new Js(8.5,24,16),new Gu({color:"#ffcc83",fog:!1,toneMapped:!1}));Q.add(At);for(const X of[1.3,1.8]){const q=new Ve(new Js(8.5*X,24,16),new Gu({color:"#ffe7b2",transparent:!0,opacity:.075,depthWrite:!1,fog:!1,toneMapped:!1}));Q.add(q)}Q.position.set(-35,30,-135),Q.visible=p.current==="sunset",x.add(Q);const Ct=new Js(1,12,10),Ht=new fm(1,1),oe=new Nl(1,1,1,9),ge=new cm(1,1,9),V=new st(0,1,0);function ct(X,q,bt,z,gt=!1){const Rt=new Ve(gt?Ht:Ct,z);return Rt.position.set(...q),Rt.scale.set(...bt),Rt.castShadow=!0,Rt.receiveShadow=!0,X.add(Rt),Rt}function Z(X,q,bt,z,gt){const Rt=new st(...q),j=new st(...bt),xt=j.clone().sub(Rt),pt=new Ve(oe,gt);return pt.position.copy(Rt.add(j).multiplyScalar(.5)),pt.scale.set(z,xt.length(),z),pt.quaternion.setFromUnitVectors(V,xt.normalize()),pt.castShadow=!0,X.add(pt),pt}[[-57,-3,-113,40,14,32],[41,-4,-132,52,20,28],[1,-4,-168,58,23,31],[-90,-4,-150,45,25,40],[75,-3,-84,38,12,32],[-51,-5,-56,29,10,28]].forEach((X,q)=>ct(x,[X[0],X[1],X[2]],[X[3],X[4],X[5]],q<3?O.farHill:O.hill));const rt=new Ru({color:"#f7f5e6",roughness:1,transparent:!0,opacity:.73,depthWrite:!1});for(let X=0;X<7;X++){const q=new Ln;q.position.set(-75+X*26,31+w()*8,-115-w()*65);for(let bt=0;bt<4;bt++)ct(q,[bt*3.7-5,w()*1.4,w()],[5.5,1.8+w(),2.5],rt);x.add(q)}function wt(X){const q=new Ln;if(X===1){Z(q,[0,0,0],[0,4.1,0],.15,O.bark);for(let bt=0;bt<3;bt++){const z=new Ve(ge,bt===1?O.leaf:O.darkLeaf);z.position.set(0,2.8+bt*1.25,0),z.scale.set(1.65-bt*.38,2.8-bt*.28,1.65-bt*.38),z.castShadow=!0,q.add(z)}}else X===2?(Z(q,[0,0,0],[.12,4.4,0],.16,O.paleBark),Z(q,[0,2.3,0],[-.8,3.7,.15],.075,O.paleBark),ct(q,[0,4.5,0],[1.38,1.8,1.25],O.leafLight),ct(q,[-.7,3.7,.1],[1.05,1.25,1.1],O.leafLight),ct(q,[.8,4.25,-.1],[.92,1.3,1],O.leaf)):(Z(q,[0,0,0],[0,3.9,0],.23,O.bark),Z(q,[0,2.3,0],[-.9,3.6,0],.11,O.bark),Z(q,[0,2.7,0],[.9,4.1,.1],.1,O.bark),ct(q,[0,4.55,0],[1.8,1.7,1.65],O.leaf),ct(q,[-1.05,3.9,.15],[1.25,1.3,1.3],O.darkLeaf),ct(q,[1.1,4.25,.12],[1.25,1.4,1.3],O.leafLight),ct(q,[.1,5.45,-.1],[1.25,1.25,1.23],O.leafLight));return q}const Pt=[wt(0),wt(1),wt(2)],Lt=[],Ut=new Set,Wt=new Set,F=(X,q,bt,z=!1)=>{X.position.x=(z?W(bt):C(bt))+q,X.position.z=bt,x.add(X),Lt.push({object:X,lateral:q,z:bt,stream:z})};for(let X=0;X<91;X++){const q=8-w()*175,bt=X%2?-1:1,z=bt*(7.4+w()*30);if(bt>0&&z>11&&z<21)continue;const gt=Pt[Math.floor(w()*Pt.length)].clone(),Rt=.75+w()*.85;gt.scale.setScalar(Rt),gt.rotation.y=w()*Math.PI*2,Ut.add(gt),F(gt,z,q)}[[-9.6,-9,1.3],[10.3,-22,1.2],[-8.3,-38,1.2]].forEach(([X,q,bt],z)=>{const gt=Pt[z%3].clone();gt.scale.setScalar(bt),Ut.add(gt),F(gt,X,q)});const Ee=P("#a18a62"),re=P("#5d8c70");re.side=la;const Jt=[],Ft=[];for(let X=0;X<=10;X++){const q=X/10,bt=Math.sin(q*Math.PI)*.4,z=Math.sin(q*Math.PI)*.45-q*q*.85;if(Jt.push(-bt,z,q*3.1,0,z+.1*Math.sin(q*Math.PI),q*3.1,bt,z,q*3.1),X<10){const gt=X*3;Ft.push(gt,gt+3,gt+1,gt+1,gt+3,gt+4,gt+1,gt+4,gt+2,gt+2,gt+4,gt+5)}}const $t=new ti;$t.setAttribute("position",new mn(Jt,3)),$t.setIndex(Ft),$t.computeVertexNormals();const lt=new Ln;for(let X=0;X<5;X++)Z(lt,[.12*X*X/4,X,0],[.12*(X+1)*(X+1)/4,X+1,0],.14-X*.008,Ee);for(let X=0;X<9;X++){const q=new Ve($t,re);q.position.set(.75,5,0),q.rotation.y=X*Math.PI*2/9,q.rotation.x=X%3===0?-.2:.05,q.castShadow=!0,lt.add(q)}for(let X=0;X<3;X++)ct(lt,[.6+X*.14,4.9,.1],[.15,.18,.15],Ee);[[-8,-8],[7.3,-20],[-9,-32],[6.5,-43],[-9,-58],[6.7,-75],[-8,-93],[7,-113],[-10,-133],[7,-151]].forEach(([X,q],bt)=>{const z=lt.clone();z.scale.setScalar(.95+bt%3*.12),z.rotation.y=bt*1.7,Wt.add(z),F(z,X,q)});for(let X=0;X<110;X++){const q=new Ln,bt=12-w()*165,z=(X%2?1:-1)*(3.9+w()*9),gt=3+Math.floor(w()*5);for(let Rt=0;Rt<gt;Rt++){const j=(w()-.5)*1.4,xt=(w()-.5)*1.2,pt=.14+w()*.19,zt=new Ve(ge,O.grass);zt.position.set(j,pt/2,xt),zt.scale.set(.08,pt,.08),q.add(zt),Rt<2&&X%3!==0&&(Z(q,[j,0,xt],[j,pt+.07,xt],.013,O.stem),ct(q,[j,pt+.07,xt],[.09,.045,.09],X%2?O.flower:O.flowerWhite))}F(q,z,bt)}for(let X=0;X<32;X++){const q=new Ln,bt=.2+w()*.5;ct(q,[0,bt*.23,0],[bt,bt*.65,bt*.8],X%2?O.rock:O.rockLight,!0),X%2===0&&ct(q,[bt*.7,.08,bt*.4],[bt*.5,bt*.36,bt*.5],O.rockLight,!0),F(q,(X%2?-1:1)*(4+w()*7),8-w()*140)}for(let X=0;X<17;X++){const q=new Ln;Z(q,[0,0,0],[0,1.1,0],.075,O.fence),Z(q,[0,.48,-.1],[0,.48,-3.7],.045,O.fence),Z(q,[0,.92,-.1],[0,.92,-3.7],.045,O.fence),F(q,-5.9,-6-X*3.7)}const Dt=new yo(1,.035);for(let X=0;X<26;X++){const q=new Ve(Dt,O.stripe);q.rotation.x=-Math.PI/2,q.scale.x=.45+w()*1.5,q.position.y=.007,F(q,(w()-.5)*3,-4-w()*145,!0)}const Nt=new Map;for(const X of Lt){X.object.updateMatrixWorld(!0);const q=X.object.matrixWorld.clone().invert(),bt=Ut.has(X.object)?"forest":Wt.has(X.object)?"coast":"world";X.object.traverse(z=>{if(!(z instanceof Ve)||Array.isArray(z.material))return;const gt=`${bt}:${z.geometry.uuid}:${z.material.uuid}:${z.castShadow}:${z.receiveShadow}`;let Rt=Nt.get(gt);Rt||(Rt={geometry:z.geometry,material:z.material,shadow:z.castShadow,receive:z.receiveShadow,kind:bt,entries:[]},Nt.set(gt,Rt)),Rt.entries.push({source:X.object,local:q.clone().multiply(z.matrixWorld)})}),x.remove(X.object)}const ie=new sn,U=[...Nt.values()].map(X=>{const q=new fT(X.geometry,X.material,X.entries.length);return q.castShadow=X.shadow,q.receiveShadow=X.receive,q.frustumCulled=!1,q.instanceMatrix.setUsage(OE),X.entries.forEach((bt,z)=>q.setMatrixAt(z,ie.multiplyMatrices(bt.source.matrixWorld,bt.local))),x.add(q),{mesh:q,entries:X.entries,kind:X.kind}});function b(X){const q=new Ln;q.name=X===1?"P1-GreenCyclist":"P2-BlueCyclist",q.position.set(0,.04,2),x.add(q);const bt=P("#3f4a43"),z=P("#c7cdbd",.5),gt=P("#d5d6bd",.45),Rt=P(X===1?"#3f7568":"#426d9c",.5),j=P("#354b44"),xt=P(X===1?"#568e7b":"#4a83c2"),pt=P(X===1?"#6ca18b":"#72a4db"),zt=P("#3c5149"),kt=P("#dfb58f"),Yt=P("#f1e8cd"),ce=P("#d9d8cb"),Te=P("#efdfbf"),Ye=[];for(const Cn of[.91,-1.03]){const Qe=new Ln;Qe.position.set(0,.58,Cn);const li=new Ve(new Vu(.52,.047,8,36),bt);li.rotation.y=Math.PI/2,li.castShadow=!0,Qe.add(li);const N=new Ve(new Vu(.467,.014,6,36),z);N.rotation.y=Math.PI/2,Qe.add(N),Z(Qe,[-.09,0,0],[.09,0,0],.043,gt);for(let nt=0;nt<12;nt++){const vt=nt*Math.PI/6;Z(Qe,[0,0,0],[0,Math.cos(vt)*.46,Math.sin(vt)*.46],.006,z)}q.add(Qe),Ye.push(Qe)}const $e=[0,.58,.91],gn=[0,.55,.04],Ii=[0,1.34,.36],Ei=[0,1.29,-.81];[[$e,gn],[gn,Ii],[Ii,$e],[Ii,Ei],[Ei,gn],[Ei,[0,.58,-1.03]]].forEach(([Cn,Qe])=>Z(q,Cn,Qe,.035,Rt)),Z(q,[0,1.23,.39],[0,1.48,.44],.027,gt),ct(q,[0,1.48,.43],[.22,.052,.18],j),Z(q,[0,1.29,-.81],[0,1.51,-.83],.024,gt),Z(q,[-.34,1.52,-.87],[.34,1.52,-.87],.022,gt),Z(q,[-.34,1.52,-.87],[-.34,1.5,-1.02],.034,j),Z(q,[.34,1.52,-.87],[.34,1.5,-1.02],.034,j),Z(q,[-.15,.64,.92],[-.15,1.16,.8],.013,gt),Z(q,[.15,.64,.92],[.15,1.16,.8],.013,gt),Z(q,[-.15,1.16,.5],[-.15,1.16,1.2],.016,gt),Z(q,[.15,1.16,.5],[.15,1.16,1.2],.016,gt),Z(q,[-.15,1.16,1.2],[.15,1.16,1.2],.016,gt),ct(q,[0,1.15,1.23],[.07,.035,.02],P("#c37658")),Z(q,[.03,.74,-.14],[.03,.98,-.3],.065,P("#e4d6ac"));const rn=new Ln;q.add(rn),ct(rn,[0,1.64,.37],[.27,.2,.19],zt);const pa=ct(rn,[0,1.99,.17],[.31,.43,.22],xt);pa.rotation.x=-.24,ct(rn,[0,2.18,.13],[.32,.15,.22],pt);const Gn=new Ve(new ar(.42,.045,.014),Yt);Gn.position.set(0,1.98,.392),Gn.rotation.x=-.24,rn.add(Gn),Z(rn,[0,2.21,.04],[0,2.37,-.03],.09,kt);const En=new Ln;En.position.set(0,2.49,-.065),rn.add(En),ct(En,[0,0,0],[.205,.235,.19],kt),ct(En,[0,.035,.07],[.211,.19,.17],ce),ct(En,[-.205,-.015,0],[.043,.07,.045],kt),ct(En,[.205,-.015,0],[.043,.07,.045],kt),ct(En,[0,-.035,-.18],[.05,.06,.065],kt);const oi=new Ve(new Js(.254,18,10,0,Math.PI*2,0,Math.PI*.62),Yt);oi.position.y=.095,oi.scale.set(1,.8,1.1),oi.castShadow=!0,En.add(oi);for(const Cn of[-.13,0,.13])ct(En,[Cn,.272-Math.abs(Cn)*.25,.015],[.021,.014,.125],j);Z(En,[-.19,.04,.06],[-.11,-.19,-.02],.012,j),Z(En,[.19,.04,.06],[.11,-.19,-.02],.012,j);for(const Cn of[-1,1]){const Qe=[Cn*.275,2.18,.12],li=[Cn*.36,1.92,-.36],N=[Cn*.34,1.53,-.94];Z(rn,Qe,li,.082,xt),ct(rn,li,[.065,.065,.065],kt),Z(rn,li,N,.058,kt),ct(rn,N,[.065,.055,.075],kt)}const ma=new Ln;ma.position.set(0,.55,.04),q.add(ma);const Ss=new Ve(new Nl(.14,.14,.025,20),j);Ss.rotation.z=Math.PI/2,Ss.position.x=.09,ma.add(Ss);const rr=[-1,1].map(Cn=>{const Qe=new Ln;q.add(Qe);const li=Z(Qe,[0,0,0],[0,1,0],.105,zt),N=Z(Qe,[0,0,0],[0,1,0],.062,kt),nt=ct(Qe,[0,0,0],[.075,.075,.075],kt),vt=ct(Qe,[0,0,0],[.085,.065,.17],Te),yt=new Ve(new ar(.19,.035,.13),j);Qe.add(yt);const at=Z(Qe,[0,0,0],[0,1,0],.023,gt);return{side:Cn,upper:li,lower:N,knee:nt,shoe:vt,pedal:yt,arm:at}});return{cyclist:q,wheels:Ye,crank:ma,legs:rr,phase:0,traveled:0}}const J=[b(1),b(2)];J[1].cyclist.visible=!1;function _t(X,q,bt,z){const gt=bt.clone().sub(q);X.position.copy(q).add(bt).multiplyScalar(.5),X.scale.set(z,gt.length(),z),X.quaternion.setFromUnitVectors(V,gt.normalize())}const Mt=new Float32Array(105);for(let X=0;X<35;X++)Mt[X*3]=(w()-.5)*28,Mt[X*3+1]=1.2+w()*7,Mt[X*3+2]=8-w()*48;const ht=new ti;ht.setAttribute("position",new Pi(Mt,3)),x.add(new ix(ht,new vy({color:"#fff4cc",size:.055,transparent:!0,opacity:.75,depthWrite:!1}))),y.current=X=>{const q=Ux[X];x.background.set(q.sky),x.fog.color.set(q.horizon),B.uniforms.top.value.set(q.sky),B.uniforms.bottom.value.set(q.horizon),R.color.set(q.light),ft.visible=X==="coast",Q.visible=X==="sunset",St.visible=X!=="coast",et.visible=X!=="coast",R.position.set(X==="sunset"?-30:-18,X==="sunset"?19:28,-16),U.forEach(z=>{z.mesh.visible=z.kind==="world"||(z.kind==="coast"?X==="coast":X!=="coast")});const bt=X==="coast"?"海岸騎行：長者騎著單車沿著棕櫚樹與藍色海洋前進":X==="sunset"?"夕陽騎行：長者騎著單車穿過暖色山丘與林間小徑":"森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進";D.domElement.setAttribute("aria-label",`3D ${g.current.playerCount===2?"雙人競賽，左側綠色玩家 1、右側藍色玩家 2。":""}${bt}`);for(const z of["ground","grass","leaf","leafLight","darkLeaf","hill","farHill","water"])O[z].color.set(q[z])},y.current(p.current);const qt=()=>{g.current.playerCount===2?(L.position.set(2.7,5.3,15),L.lookAt(-1.7,1.2,-9)):(L.position.set(3.5,4.8,12.3),L.lookAt(-3,1.1,-10)),L.fov=L.aspect<1.1?58:48,L.updateProjectionMatrix()},Bt=()=>{const X=T.clientWidth,q=T.clientHeight;!X||!q||(D.setSize(X,q,!1),L.aspect=X/q,qt())};m.current=X=>{var q;J[1].cyclist.visible=X===2,J.forEach((bt,z)=>{bt.cyclist.position.x=X===2?z===0?-1.1:1.1:0,bt.cyclist.position.z=2,bt.traveled=0}),qt(),(q=y.current)==null||q.call(y,p.current)};const ee=new ResizeObserver(Bt);ee.observe(T),Bt(),m.current(g.current.playerCount);let ne=0,Ot=0;function Vt(X,q,bt,z){X.phase+=q*bt*1.55,X.traveled+=q*bt;const{cyclist:gt,wheels:Rt,crank:j,legs:xt,phase:pt}=X;Rt.forEach(zt=>{zt.rotation.x-=q*bt/.52}),j.rotation.x=pt,z&&(gt.rotation.z=q>0?Math.sin(pt)*.014:0,gt.position.y=.04+(q>0?Math.sin(pt*2)*.006:0)),xt.forEach(zt=>{const kt=pt+(zt.side>0?Math.PI:0),Yt=zt.side*.18,ce=new st(Yt,.64+Math.cos(kt)*.225,.04+Math.sin(kt)*.225),Te=new st(Yt,1.57,.36),Ye=ce.clone().sub(Te),$e=Math.min(Ye.length(),1.195),gn=(.61*.61-.59*.59+$e*$e)/(2*$e),Ii=Math.sqrt(Math.max(0,.61*.61-gn*gn)),Ei=Ye.clone().normalize(),Ti=new st(0,-Ei.z,Ei.y).normalize();Ti.z>0&&Ti.negate();const rn=Te.clone().addScaledVector(Ei,gn).addScaledVector(Ti,Ii);_t(zt.upper,Te,rn,.1),_t(zt.lower,rn,ce,.06),zt.knee.position.copy(rn),zt.shoe.position.copy(ce).add(new st(0,-.015,-.055)),zt.pedal.position.copy(ce).add(new st(0,-.07,0)),_t(zt.arm,new st(Yt,.55,.04),ce.clone().add(new st(0,-.07,0)),.023)})}const le=X=>{if(ne=requestAnimationFrame(le),g.current.analysisActive&&Ot&&X-Ot<1e3/30)return;const q=Ot?Math.min((X-Ot)/1e3,.05):0;Ot=X;const{speed:bt,running:z,playerCount:gt,opponentSpeed:Rt,playerDistances:j}=g.current,xt=gt===2,pt=[bt,Rt].map(Yt=>z&&Number.isFinite(Yt)?Math.max(0,Yt)/3.6:0),kt=(xt?(pt[0]+pt[1])/2:pt[0])*q;if(kt>0){for(const Yt of Lt)Yt.z+=kt,Yt.z>18&&(Yt.z-=184),Yt.object.position.z=Yt.z,Yt.object.position.x=(Yt.stream?W(Yt.z):C(Yt.z))+Yt.lateral,Yt.object.updateMatrix();for(const Yt of U)Yt.entries.forEach((ce,Te)=>Yt.mesh.setMatrixAt(Te,ie.multiplyMatrices(ce.source.matrix,ce.local))),Yt.mesh.instanceMatrix.needsUpdate=!0}if(J.forEach((Yt,ce)=>{(ce===0||xt)&&Vt(Yt,pt[ce],q,z)}),xt){const Yt=j??[J[0].traveled,J[1].traveled],ce=Yt[0]-Yt[1],Te=Number.isFinite(ce)?Math.tanh(ce/10)*3.2:0;J.forEach((Ye,$e)=>{const gn=2+($e===0?-Te/2:Te/2);Ye.cyclist.position.z=gn,Ye.cyclist.position.x=C(gn)+($e===0?-1.1:1.1)})}D.render(x,L)};return ne=requestAnimationFrame(le),()=>{var bt;cancelAnimationFrame(ne),ee.disconnect(),y.current=null,m.current=null;const X=new Set,q=new Set;x.traverse(z=>{(z instanceof Ve||z instanceof ix)&&(X.add(z.geometry),(Array.isArray(z.material)?z.material:[z.material]).forEach(gt=>q.add(gt)))}),Pt.forEach(z=>z.traverse(gt=>{gt instanceof Ve&&(X.add(gt.geometry),q.add(gt.material))})),X.forEach(z=>z.dispose()),q.forEach(z=>z.dispose()),(bt=R.shadow.map)==null||bt.dispose(),D.dispose(),D.domElement.parentNode===T&&T.removeChild(D.domElement)}},[]),M.jsx("div",{ref:h,className:"ride-scene",style:{position:"absolute",inset:0,overflow:"hidden",background:"#dce9df"},children:v&&M.jsxs("div",{role:"status",style:{position:"absolute",inset:0,display:"grid",placeContent:"center",textAlign:"center",padding:30,color:"#385b4b",background:"linear-gradient(#e3eddf,#b6c78c)"},children:[M.jsx("strong",{children:"3D 騎行環境需要 WebGL"}),M.jsx("p",{children:"請開啟瀏覽器硬體加速，再重新載入。動作偵測與運動紀錄仍可使用。"})]})})}class Lx{constructor(){an(this,"lastTime",null);an(this,"filtered",0);an(this,"center",0);an(this,"armed",!1);an(this,"lastCrossing",null);an(this,"intervals",[]);an(this,"samples",[]);an(this,"rpm",0);an(this,"frameIntervalMs",0)}reset(){this.lastTime=null,this.filtered=0,this.center=0,this.armed=!1,this.lastCrossing=null,this.intervals=[],this.samples=[],this.rpm=0,this.frameIntervalMs=0}update(e,i,r=1500){if(!Number.isFinite(e)||!Number.isFinite(i))return 0;if(this.lastTime!==null&&(i<this.lastTime||i-this.lastTime>Math.min(6e3,Math.max(1500,Number.isFinite(r)?r:1500)))&&this.reset(),this.lastTime===null)return this.lastTime=i,this.filtered=e,this.center=e,this.samples.push({time:i,value:e}),0;const l=Math.max(0,i-this.lastTime);this.lastTime=i,this.frameIntervalMs=Math.max(l,this.frameIntervalMs*.9);const f=Math.max(1600,Math.min(12e3,this.frameIntervalMs*3.1));for(this.filtered+=(e-this.filtered)*(1-Math.exp(-l/65)),this.center+=(this.filtered-this.center)*(1-Math.exp(-l/2400)),this.samples.push({time:i,value:this.filtered});this.samples.length>1&&this.samples[0].time<i-f;)this.samples.shift();let d=1/0,h=-1/0;for(const T of this.samples)d=Math.min(d,T.value),h=Math.max(h,T.value);const g=h-d,p=Math.max(.024,Math.min(.065,g*.12)),y=this.filtered-this.center;if(y<-p&&(this.armed=!0),this.armed&&y>p&&g>=.065)if(this.armed=!1,this.lastCrossing!==null){const T=i-this.lastCrossing,D=Math.max(5e3,Math.min(12e3,this.frameIntervalMs*4));if(T>=333&&T<=D){this.intervals.push(T),this.intervals.length>3&&this.intervals.shift();const x=[...this.intervals].sort((I,R)=>I-R),S=Math.floor(x.length/2),L=x.length%2?x[S]:(x[S-1]+x[S])/2;this.rpm=Math.min(180,6e4/L)}else T>D&&(this.intervals=[],this.rpm=0);T>=333&&(this.lastCrossing=i)}else this.lastCrossing=i;const m=this.intervals.length?Math.max(1800,this.intervals[this.intervals.length-1]*1.8):Math.max(5500,Math.min(12e3,this.frameIntervalMs*4)*1.1),v=this.lastCrossing!==null&&i-this.lastCrossing>m,E=this.samples.length>1&&i-this.samples[0].time>Math.max(1400,this.frameIntervalMs*2.1)&&g<.045;return(v||E)&&(this.rpm=0,this.intervals=[],this.lastCrossing=null,this.armed=!1),this.rpm}}const ip=-.08,r3=-.3,ap=1500,o3=2e3,Ox=6e3;class zx{constructor(){an(this,"phases",["unarmed","unarmed"]);an(this,"loweredAt",[null,null]);an(this,"liftStartedAt",[null,null]);an(this,"lastFrameTime",null);an(this,"lastStepTime",null);an(this,"lastStepSide",null);an(this,"lastGoodTime",null);an(this,"intervals",[]);an(this,"lastCycleDuration",0);an(this,"cadence",0);an(this,"steps",0);an(this,"feedback","raise")}reset(){this.steps=0,this.suspend()}suspend(){this.phases=["unarmed","unarmed"],this.loweredAt=[null,null],this.liftStartedAt=[null,null],this.lastFrameTime=null,this.lastStepTime=null,this.lastStepSide=null,this.lastGoodTime=null,this.intervals=[],this.lastCycleDuration=0,this.cadence=0,this.feedback="raise"}update(e,i,r,l=ap){var g;if(![e,i,r].every(Number.isFinite))return this.suspend(),this.reading();if(this.lastFrameTime!==null){if(r<this.lastFrameTime||r-this.lastFrameTime>Math.min(6e3,Math.max(ap,Number.isFinite(l)?l:ap)))this.suspend();else if(r===this.lastFrameTime)return this.reading()}if(this.lastFrameTime=r,this.lastStepTime!==null){const p=this.intervals.at(-1)??this.lastCycleDuration,y=Math.min(Ox,Math.max(o3,p*1.5));r-this.lastStepTime>=y&&(this.cadence=0),r-this.lastStepTime>Ox&&(this.lastStepTime=null,this.lastStepSide=null,this.intervals=[])}const f=[e,i],d=[],h=[0,0];if(f.every(p=>p>=ip))this.phases=["unarmed","unarmed"],this.loweredAt=[null,null],this.liftStartedAt=[null,null];else for(const p of[0,1])f[p]<=r3?(this.phases[p]==="raised"&&(d.push(p),h[p]=r-(this.liftStartedAt[p]??r)),this.phases[p]="lowered",this.loweredAt[p]=r,this.liftStartedAt[p]=null):this.phases[p]==="lowered"&&((g=this.liftStartedAt)[p]??(g[p]=this.loweredAt[p]??r),f[p]>=ip&&(this.phases[p]="raised"));if(d.length===1&&d[0]!==this.lastStepSide){if(this.steps+=1,this.lastCycleDuration=h[d[0]],this.lastStepTime!==null){const p=r-this.lastStepTime;if(p>0){this.intervals.push(p),this.intervals.length>5&&this.intervals.shift();const m=3e4/(this.intervals.reduce((v,E)=>v+E,0)/this.intervals.length);this.cadence=Number.isFinite(m)?m:0}}else this.cadence=Math.min(60,3e4/Math.max(500,this.lastCycleDuration));this.lastStepTime=r,this.lastStepSide=d[0],this.lastGoodTime=r,this.feedback="good"}else f.some(p=>p>=ip)||this.phases.some(p=>p==="raised")?this.feedback="lower":this.feedback=this.lastGoodTime!==null&&r-this.lastGoodTime<800?"good":"raise";return this.reading()}reading(){return{cadence:this.cadence,steps:this.steps,feedback:this.feedback}}}function bl(o){return`/bike-game/${o.replace(/^\/+/,"")}`}const l3=3500,c3=1800,u3=6e3,f3=1200;class Px{constructor(){an(this,"lastResultAt",null);an(this,"lastCaptureAt",null);an(this,"captureInterval",null);an(this,"invalidSince",null)}observe(e,i){if(this.lastCaptureAt!==null&&e>this.lastCaptureAt){const r=e-this.lastCaptureAt;this.captureInterval=this.captureInterval===null?r:this.captureInterval*.6+r*.4}this.lastCaptureAt=e,this.lastResultAt=i}freshnessMs(){return this.captureInterval===null?l3:Math.min(u3,Math.max(c3,this.captureInterval*2.5))}isStale(e){return this.lastResultAt!==null&&e-this.lastResultAt>this.freshnessMs()}valid(){this.invalidSince=null}keepMotion(e){return this.invalidSince??(this.invalidSince=e),e-this.invalidSince<=f3}}class El extends Error{constructor(e){super(e),this.name="PoseTimeoutError"}}function Ix(o,e,i){return new Promise((r,l)=>{const f=setTimeout(()=>l(new El(i)),e);o.then(d=>{clearTimeout(f),r(d)},d=>{clearTimeout(f),l(d)})})}function d3(o,e){return e===1?{x:0,width:1}:{x:o===0?.5:0,width:.5}}function h3(o,e){return o.map(i=>({...i,x:e.x+i.x*e.width}))}function po(o,e=.5){return!!o&&(o.visibility??0)>=e&&(o.presence??1)>=e&&o.x>.015&&o.x<.985&&o.y>.015&&o.y<.985}function p3(o,e=4/3,i="seated"){const r=i==="standing"?[23,24,25,26]:[23,24,25,26,27,28];if(!o||!r.every(h=>po(o[h]))||!po(o[11],.4)||!po(o[12],.4))return null;const l=(o[23].x+o[24].x)/2;if(l<.1||l>.9)return null;const f=Math.hypot((o[11].x+o[12].x-o[23].x-o[24].x)/2*e,(o[11].y+o[12].y-o[23].y-o[24].y)/2);if(f<.07)return null;let d=0;if(i==="seated"){const h=o[23].y-(o[25].y*.6+o[27].y*.4),g=o[24].y-(o[26].y*.6+o[28].y*.4);d=(h-g)/f}return{signal:d,leftLift:(o[23].y-o[25].y)/f,rightLift:(o[24].y-o[26].y)/f,quality:Math.round(r.reduce((h,g)=>h+(o[g].visibility??0),0)/r.length*100)}}let lo=null;function m3(){return window.Pose?Promise.resolve(window.Pose):lo||(lo=new Promise((o,e)=>{const i=document.createElement("script");i.src=bl("pose/pose.js"),i.async=!0,i.onload=()=>{window.Pose?o(window.Pose):(lo=null,i.remove(),e(new Error("Local pose runtime is unavailable")))},i.onerror=()=>{lo=null,i.remove(),e(new Error("Cannot load local pose runtime"))},document.head.appendChild(i)}),lo)}const Si=["#d4ee94","#8dcaff"],g3=[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[29,31],[27,31],[28,30],[30,32],[28,32]],v3=Array.from({length:33},(o,e)=>e),Ys=o=>o==="standing"?"請讓肩膀、髖部與膝蓋入鏡":"請讓肩膀到雙腳入鏡",co=(o="請讓肩膀到雙腳入鏡")=>({cadence:0,tracking:!1,quality:0,feedback:o,highKnees:0});function Bx(o){const e=o instanceof Error?o.name:"";return e==="NotAllowedError"||e==="PermissionDeniedError"?"請允許此網站使用攝影機後重試。":e==="NotFoundError"||e==="DevicesNotFoundError"?"找不到攝影機，請連接攝影機後重試。":e==="NotReadableError"||e==="TrackStartError"?"攝影機正被其他程式使用，請關閉其他視訊程式後重試。":e==="SecurityError"?"請使用 HTTPS 或 localhost 開啟遊戲，才能使用攝影機。":"無法啟動動作分析，請確認攝影機和本機辨識模型可用後重試。"}function _3({mode:o,running:e,demoCadence:i,onCadence:r,onTracking:l,playerCount:f=1,exerciseMode:d="seated",demoCadence2:h=i,onPlayers:g,resetKey:p=0}){const y=Xt.useRef(null),m=Xt.useRef(null),v=Xt.useRef({onCadence:r,onTracking:l,onPlayers:g}),E=Xt.useRef({running:e,exerciseMode:d}),T=Xt.useRef([new Lx,new Lx]),D=Xt.useRef([new zx,new zx]),x=Xt.useRef([co(Ys(d)),co(Ys(d))]),S=Xt.useRef([0,0]),L=Xt.useRef(()=>{}),I=Xt.useRef(()=>{}),[R,P]=Xt.useState(x.current),[O,B]=Xt.useState(o==="demo"?"demo":"loading"),[G,w]=Xt.useState(""),[C,k]=Xt.useState(0);return v.current={onCadence:r,onTracking:l,onPlayers:g},E.current={running:e,exerciseMode:d},Xt.useEffect(()=>{e||L.current()},[e]),Xt.useEffect(()=>{for(const W of T.current)W.reset();for(const W of D.current)W.reset();S.current=[0,0],I.current()},[p,d]),Xt.useEffect(()=>{let W=!1,et=!1,St=!1,ft=0,K=0,dt=0,Q=0,At=null,Ct=null,Ht=-1,oe=0,ge=-1,V=performance.now(),ct=performance.now(),Z=null;const rt=Array.from({length:f},(lt,Dt)=>({index:Dt,region:d3(Dt,f),model:null,pending:null,crop:document.createElement("canvas"),health:new Px,capturedAt:0,firstSend:!0,held:!1,imageAspect:4/3}));for(const lt of T.current)lt.reset();for(const lt of D.current)lt.suspend();x.current=[{...co(Ys(E.current.exerciseMode)),highKnees:S.current[0]},{...co(f===2?Ys(E.current.exerciseMode):"單人模式"),highKnees:S.current[1]}],w("");const wt=lt=>{W||lt===Z||(Z=lt,B(lt),v.current.onTracking(lt))},Pt=(lt=!1)=>{var Nt,ie;if(W)return;const Dt=[{...x.current[0]},{...x.current[1]}];P(Dt),v.current.onCadence(Dt[0].cadence),(ie=(Nt=v.current).onPlayers)==null||ie.call(Nt,Dt),lt&&wt(Dt.slice(0,f).some(U=>U.tracking)?"tracking":"positioning")};L.current=()=>{if(!W){for(const lt of T.current)lt.reset();for(const lt of D.current)lt.suspend();x.current=x.current.map(lt=>({...lt,cadence:0,feedback:lt.tracking?"已暫停":lt.feedback})),Pt()}},I.current=()=>{if(!W){for(const lt of T.current)lt.reset();for(const lt of D.current)lt.reset();S.current=[0,0],x.current=x.current.map(lt=>({...lt,cadence:0,highKnees:0,feedback:lt.tracking?E.current.exerciseMode==="standing"?"膝蓋抬到髖部高度":"請交替抬腳踩踏":Ys(E.current.exerciseMode)})),Pt()}},Pt();const Lt=(lt,Dt,Nt=!0)=>{T.current[lt.index].reset(),D.current[lt.index].suspend(),Nt&&(lt.points=void 0),x.current[lt.index]={...x.current[lt.index],cadence:0,tracking:!1,quality:0,feedback:Dt}},Ut=()=>{for(const lt of rt){const Dt=lt.model,Nt=lt.pending;lt.model=null,lt.pending=null,Dt&&Promise.resolve(Nt).catch(()=>{}).then(()=>Dt.close()).catch(()=>{})}},Wt=lt=>{if(!(W||et)){et=!0,ft+=1,cancelAnimationFrame(dt),window.clearInterval(Q),w(lt);for(const Dt of rt)Lt(Dt,"動作分析已暫停，請重新連線");At==null||At.getTracks().forEach(Dt=>{Dt.onended=null,Dt.stop()}),Ut(),Pt(),wt("error")}};if(o==="demo")return x.current=[co("示範・非即時影像"),co("示範・非即時影像")],Pt(),wt("demo"),()=>{W=!0};wt("loading");const F=()=>{const lt=m.current,Dt=y.current,Nt=lt==null?void 0:lt.getContext("2d");if(!lt||!Dt||!Nt)return;const ie=Dt.videoWidth||960,U=Dt.videoHeight||720;(lt.width!==ie||lt.height!==U)&&(lt.width=ie,lt.height=U),Nt.clearRect(0,0,ie,U);const b=ie/640;Nt.lineCap="round";for(const J of rt){const _t=J.points;if(!_t)continue;const Mt=h3(_t,J.region);Nt.save(),Nt.globalAlpha=J.held?.35:x.current[J.index].tracking?1:.6,Nt.strokeStyle=Si[J.index],Nt.fillStyle=Si[J.index],Nt.lineWidth=3.2*b,Nt.shadowColor=Si[J.index],Nt.shadowBlur=5*b;for(const[ht,qt]of g3)!po(_t[ht],.35)||!po(_t[qt],.35)||(Nt.beginPath(),Nt.moveTo(Mt[ht].x*ie,Mt[ht].y*U),Nt.lineTo(Mt[qt].x*ie,Mt[qt].y*U),Nt.stroke());Nt.shadowBlur=0;for(const ht of v3)po(_t[ht],.35)&&(Nt.beginPath(),Nt.arc(Mt[ht].x*ie,Mt[ht].y*U,4.8*b,0,Math.PI*2),Nt.fill());if(E.current.exerciseMode==="standing"&&x.current[J.index].tracking){const ht=(Mt[23].y+Mt[24].y)/2*U;Nt.setLineDash([5*b,4*b]),Nt.lineWidth=1.2*b,Nt.beginPath(),Nt.moveTo((J.region.x+J.region.width*.12)*ie,ht),Nt.lineTo((J.region.x+J.region.width*.88)*ie,ht),Nt.stroke()}Nt.restore()}},Ee=(lt,Dt)=>{if(W||et||St)return;const Nt=performance.now();lt.health.observe(lt.capturedAt,Nt);const ie=Dt.poseLandmarks,U=p3(ie,lt.imageAspect,E.current.exerciseMode);if(!U||!ie){const b=lt.health.keepMotion(Nt);b||Lt(lt,Ys(E.current.exerciseMode),!1),lt.points=ie??(b?lt.points:void 0),lt.held=!ie,x.current[lt.index]={...x.current[lt.index],cadence:0,tracking:!1,quality:0,feedback:b?"正在重新辨識，請讓膝蓋入鏡":Ys(E.current.exerciseMode)}}else{lt.health.valid(),lt.points=ie,lt.held=!1;let b=0,J=S.current[lt.index],_t="已暫停";if(E.current.running){const Mt=lt.health.freshnessMs();if(E.current.exerciseMode==="standing"){const ht=D.current[lt.index].update(U.leftLift,U.rightLift,lt.capturedAt,Mt);b=ht.cadence,J=ht.steps,S.current[lt.index]=J,_t=ht.feedback==="raise"?"膝蓋抬到髖部高度":ht.feedback==="lower"?"放下抬起的膝蓋":"左右交替，做得很好"}else b=T.current[lt.index].update(U.signal,lt.capturedAt,Mt),_t=b>0?"持續交替踩踏":"請交替抬腳踩踏"}x.current[lt.index]={cadence:b,highKnees:J,feedback:_t,tracking:!0,quality:U.quality}}F(),Pt(!0)},re=async lt=>{if(!Ct)throw new Error("Local pose runtime is unavailable");for(const Dt of rt){if(W||et||ft!==lt)return;Dt.health=new Px,Dt.firstSend=!0,Dt.held=!1;const Nt=new Ct({locateFile:U=>bl(`pose/${U}`)});Dt.model=Nt,Nt.setOptions({modelComplexity:0,smoothLandmarks:!0,enableSegmentation:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),Nt.onResults(U=>{ft!==lt||Dt.model!==Nt||Ee(Dt,U)});const ie=Nt.initialize();if(Dt.pending=ie,await Ix(ie,2e4,"辨識模型啟動逾時，請重新連線。"),W||et||ft!==lt)return;Dt.pending===ie&&(Dt.pending=null)}ct=performance.now()},Jt=async lt=>{if(W||et||St)return;St=!0,ft+=1,cancelAnimationFrame(dt),Ut();for(const Nt of rt)Lt(Nt,"正在重新啟動動作分析…");if(F(),Pt(),K>=1){St=!1,Wt(lt instanceof El?lt.message:"動作分析已中斷，請按重新連線恢復骨架標點。");return}K+=1,wt("loading");const Dt=ft;try{if(await re(Dt),W||et||ft!==Dt)return;Ht=-1,oe=0,St=!1,wt("positioning"),dt=requestAnimationFrame(Ft)}catch(Nt){if(W||et||ft!==Dt)return;St=!1,Wt(Nt instanceof El?Nt.message:Bx(Nt))}},Ft=async lt=>{if(W||et||St)return;const Dt=ft,Nt=y.current;if(Nt&&Nt.readyState>=2&&Nt.currentTime!==Ht&&lt-oe>=(f===2?80:66)){Ht=Nt.currentTime,oe=lt;const ie=performance.now();try{for(const U of rt){const b=Nt.videoWidth*U.region.width,J=Nt.videoHeight,_t=Math.min(1,(f===2?480:640)/b,(f===2?640:480)/J),Mt=Math.max(1,Math.round(b*_t)),ht=Math.max(1,Math.round(J*_t));(U.crop.width!==Mt||U.crop.height!==ht)&&(U.crop.width=Mt,U.crop.height=ht);const qt=U.crop.getContext("2d");if(!qt)throw new Error("Cannot create player camera crop");qt.drawImage(Nt,Nt.videoWidth*U.region.x,0,b,J,0,0,Mt,ht),U.imageAspect=Mt/ht,U.capturedAt=ie}for(const U of rt){if(W||et||ft!==Dt||!U.model)return;const b=U.model.send({image:U.crop});if(U.pending=b,await Ix(b,U.firstSend?12e3:6e3,"動作分析回應逾時，請按重新連線恢復。"),W||et||ft!==Dt)return;U.pending===b&&(U.pending=null),U.firstSend=!1}}catch(U){!W&&!et&&ft===Dt&&await Jt(U);return}}!W&&!et&&!St&&ft===Dt&&(dt=requestAnimationFrame(Ft))};return(async()=>{var lt;try{if(!window.isSecureContext||!((lt=navigator.mediaDevices)!=null&&lt.getUserMedia))throw new DOMException("Secure context is required","SecurityError");if(At=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:f===2?1280:960},height:{ideal:720}},audio:!1}),W||et){At.getTracks().forEach(Nt=>Nt.stop());return}At.getVideoTracks().forEach(Nt=>{Nt.onended=()=>Wt("攝影機已中斷，請檢查裝置後重新連線。")});const Dt=y.current;if(!Dt)throw new Error("Camera preview is unavailable");if(Dt.srcObject=At,await Dt.play(),Ct=await m3(),W||et)return;try{if(await re(ft),W||et)return;wt("positioning"),dt=requestAnimationFrame(Ft)}catch(Nt){await Jt(Nt)}if(W||et)return;Q=window.setInterval(()=>{if(W||et||St||document.hidden)return;const Nt=performance.now(),ie=y.current;if(ie&&ie.currentTime!==ge&&(ge=ie.currentTime,V=Nt),Nt-V>3500){Jt(new El("攝影機影像已暫停，請按重新連線恢復。"));return}if(rt.some(U=>U.pending!==null)){let U=!1;for(const b of rt)b.health.isStale(Nt)&&x.current[b.index].tracking&&(b.held=!0,x.current[b.index]={...x.current[b.index],cadence:0,tracking:!1,feedback:"分析延遲，正在等待恢復…"},U=!0);U&&(F(),Pt(!0));return}for(const U of rt)if(U.health.isStale(Nt)||U.health.lastResultAt===null&&Nt-ct>12e3){Jt(new El("人體辨識未持續更新，請按重新連線恢復。"));return}},400)}catch(Dt){!W&&!et&&Wt(Bx(Dt))}})(),()=>{W=!0,ft+=1,cancelAnimationFrame(dt),window.clearInterval(Q),At==null||At.getTracks().forEach(Dt=>{Dt.onended=null,Dt.stop()}),Ut();const lt=y.current;lt&&(lt.srcObject=null);for(const Dt of T.current)Dt.reset();for(const Dt of D.current)Dt.suspend()}},[o,f,C]),M.jsxs("div",{className:`pose-camera pose-camera--${o}`,"data-player-count":f,"data-exercise-mode":d,style:{position:"relative",width:"100%",height:"100%",minHeight:0,overflow:"hidden",borderRadius:12,background:"#26352d",color:"#eef2e5"},children:[o==="camera"?M.jsxs(M.Fragment,{children:[M.jsx("video",{ref:y,muted:!0,playsInline:!0,autoPlay:!0,className:"pose-video","aria-label":"鏡像攝影機畫面",style:{position:"absolute",zIndex:0,inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}}),M.jsx("canvas",{ref:m,className:"pose-overlay","aria-label":"即時人體關節標記",style:{position:"absolute",zIndex:1,pointerEvents:"none",inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}})]}):M.jsx(x3,{running:e,cadences:[i,h],playerCount:f,exerciseMode:d}),M.jsx("div",{"aria-hidden":"true",style:{position:"absolute",zIndex:2,inset:0,pointerEvents:"none",background:"linear-gradient(180deg,#12251e88,transparent 27%,transparent 62%,#12251ed9)"}}),f===2&&M.jsx("div",{"aria-hidden":"true",style:{position:"absolute",zIndex:2,left:"50%",top:29,bottom:38,borderLeft:"1px dashed #dce9cd66"}}),M.jsxs("div",{className:"pose-topline",style:{position:"absolute",zIndex:2,top:8,left:8,right:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:4,fontSize:9},children:[M.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5},children:[M.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:O==="error"?"#e8a78f":Si[0]}}),o==="demo"?"示範動畫・非即時影像":`${f===2?"雙人 ":""}AI 動作分析`]}),M.jsx("span",{style:{fontSize:8,color:"#c4d7ba"},children:d==="standing"?"站姿抬膝":"坐姿踩踏"})]}),M.jsx("div",{className:"pose-player-labels",style:{position:"absolute",zIndex:2,top:27,left:8,right:8,display:"flex",gap:8,pointerEvents:"none"},children:Array.from({length:f},(W,et)=>M.jsxs("span",{"data-player-zone":et+1,style:{flex:1,color:Si[et],fontSize:9,textAlign:"left",textShadow:"0 1px 4px #000"},children:["● 玩家 ",et+1,o==="camera"&&R[et].tracking?` · ${R[et].quality}%`:""]},et))}),O==="loading"&&o==="camera"&&M.jsxs("div",{role:"status",style:{position:"absolute",zIndex:2,inset:"42% 8px auto",textAlign:"center",fontSize:10,textShadow:"0 1px 8px #000"},children:["正在載入",f===2?"雙人":"本機","辨識模型…"]}),O==="error"&&o==="camera"&&M.jsxs("div",{role:"alert",className:"pose-error",style:{position:"absolute",zIndex:2,inset:"29px 7px 28px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",gap:7,padding:7,background:"#24362df5",borderRadius:8},children:[M.jsx("span",{style:{fontSize:10,lineHeight:1.6},children:G}),M.jsx("button",{type:"button",onClick:()=>k(W=>W+1),style:{border:"1px solid #91a878",borderRadius:6,padding:"4px 10px",fontSize:10,color:"#e8f0dc",background:"#3f5540",cursor:"pointer"},children:"重新連線"})]}),M.jsx("div",{className:"pose-footer",style:{position:"absolute",zIndex:2,bottom:6,left:7,right:7,display:"flex",gap:5},children:Array.from({length:f},(W,et)=>M.jsxs("div",{style:{flex:1,minWidth:0,padding:"4px 5px",borderRadius:5,background:"#14291ec4",border:`1px solid ${Si[et]}30`},children:[M.jsx("span",{"data-player-status":et+1,"data-tracking":R[et].tracking?"true":"false","data-cadence":R[et].cadence.toFixed(2),"data-high-knees":R[et].highKnees,style:{display:"block",color:Si[et],fontSize:9,whiteSpace:"nowrap"},children:o==="demo"?`玩家${et+1}示範`:`玩家${et+1}${R[et].tracking?"已辨識":"待入鏡"}`}),M.jsx("span",{title:R[et].feedback,style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:"#dae6d1",fontSize:8,marginTop:2},children:o==="demo"?"非即時影像":R[et].feedback})]},et))})]})}function x3({running:o,cadences:e,playerCount:i,exerciseMode:r}){const l=Xt.useRef(null),f=Xt.useRef({running:o,cadences:e,playerCount:i,exerciseMode:r});return f.current={running:o,cadences:e,playerCount:i,exerciseMode:r},Xt.useEffect(()=>{let d=0,h=0;const g=[.7,2.3],p=y=>{const m=l.current,v=m==null?void 0:m.getContext("2d");if(!m||!v)return;const E=h?Math.min((y-h)/1e3,.1):0;h=y;const T=480,D=360;v.clearRect(0,0,T,D),v.strokeStyle="#c4db9b0e",v.lineWidth=1;for(let x=0;x<T;x+=30)v.beginPath(),v.moveTo(x,0),v.lineTo(x,D),v.stroke();for(let x=0;x<D;x+=30)v.beginPath(),v.moveTo(0,x),v.lineTo(T,x),v.stroke();for(let x=0;x<f.current.playerCount;x++){f.current.running&&(g[x]+=E*f.current.cadences[x]/60*Math.PI*2);const S=g[x],L=f.current.exerciseMode==="standing",I=f.current.playerCount===2?120+x*240:240,R=f.current.playerCount===2?.85:1;v.save(),v.translate(I,0),v.scale(R,1);const P=L?Math.max(0,Math.sin(S)):Math.sin(S),O=L?Math.max(0,-Math.sin(S)):-Math.sin(S),B=L?190:192,G=[[-22,113],[22,113],[-17,B],[17,B],[-37,L?253-P*78:230-P*24],[37,L?253-O*78:230-O*24],[-22+(L?0:Math.cos(S)*12),L?314-P*82:286-P*19],[22-(L?0:Math.cos(S)*12),L?314-O*82:286-O*19],[-40,L?314-P*82:280-P*19],[40,L?314-O*82:280-O*19],[-47,165],[47,165]];L?(v.strokeStyle=`${Si[x]}55`,v.lineWidth=1,v.setLineDash([5,5]),v.beginPath(),v.moveTo(-75,B),v.lineTo(75,B),v.stroke(),v.setLineDash([])):(v.strokeStyle="#bfd09d30",v.lineWidth=5,v.lineCap="round",v.beginPath(),v.moveTo(-49,191),v.lineTo(-49,227),v.lineTo(45,227),v.lineTo(45,301),v.moveTo(-42,227),v.lineTo(-42,301),v.stroke()),v.fillStyle=`${Si[x]}09`,v.beginPath(),v.moveTo(...G[0]),v.lineTo(...G[1]),v.lineTo(...G[3]),v.lineTo(...G[2]),v.closePath(),v.fill(),v.strokeStyle=`${Si[x]}77`,v.lineWidth=2,v.beginPath(),v.ellipse(0,82,18,22,0,0,Math.PI*2),v.stroke(),v.beginPath(),v.moveTo(0,104),v.lineTo(0,113),v.stroke();const w=[[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[0,10],[1,11],[10,2],[11,3]];v.strokeStyle=Si[x],v.shadowColor=Si[x],v.shadowBlur=6,v.lineWidth=3;for(const[C,k]of w)v.beginPath(),v.moveTo(...G[C]),v.lineTo(...G[k]),v.stroke();v.shadowBlur=0;for(const[C,k]of G)v.beginPath(),v.arc(C,k,4.5,0,Math.PI*2),v.fillStyle=Si[x],v.fill(),v.strokeStyle="#26382c",v.lineWidth=1.3,v.stroke();v.restore()}d=requestAnimationFrame(p)};return d=requestAnimationFrame(p),()=>cancelAnimationFrame(d)},[]),M.jsx("canvas",{ref:l,width:480,height:360,"aria-label":`示範${i===2?"雙人":"單人"}${r==="standing"?"站姿高抬膝":"坐姿空中踩踏"}關節動畫，非即時攝影機影像`,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}})}const Fx=[50,100,250,500];function Hx({exerciseMode:o,onExerciseModeChange:e,playerCount:i,onPlayerCountChange:r,raceMeters:l,onRaceMetersChange:f,locked:d,compact:h=!1}){const g=o==="standing"?"左右交替，膝蓋抬到髖部高度才計分":"坐穩椅子，雙腳交替踩踏";return h?M.jsxs("div",{className:"game-setup game-setup-compact","aria-label":"畫面內遊戲設定",children:[M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"運動模式"}),M.jsxs("select",{"aria-label":"畫面內運動模式",value:o,disabled:d,onChange:p=>e(p.target.value),children:[M.jsx("option",{value:"seated",children:"坐姿踩踏"}),M.jsx("option",{value:"standing",children:"站姿高抬膝"})]})]}),M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"騎行玩法"}),M.jsxs("select",{"aria-label":"畫面內騎行玩法",value:i,disabled:d,onChange:p=>r(Number(p.target.value)),children:[M.jsx("option",{value:1,children:"單人漫遊"}),M.jsx("option",{value:2,children:"雙人競賽"})]})]}),i===2&&M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"競賽距離"}),M.jsx("select",{"aria-label":"畫面內競賽距離",value:l,disabled:d,onChange:p=>f(Number(p.target.value)),children:Fx.map(p=>M.jsxs("option",{value:p,children:[p," 公尺"]},p))})]}),M.jsx("p",{className:"game-setup-compact-hint",children:g})]}):M.jsxs("section",{className:"game-setup","aria-label":"遊戲設定",children:[M.jsxs("div",{className:"game-setup-field",children:[M.jsx("span",{className:"game-setup-label",children:"運動模式"}),M.jsxs("div",{className:"game-segmented",role:"group","aria-label":"運動模式",children:[M.jsxs("button",{type:"button","aria-pressed":o==="seated",disabled:d,onClick:()=>e("seated"),children:[M.jsx(Nu,{size:17,"aria-hidden":"true"}),"坐姿踩踏"]}),M.jsxs("button",{type:"button","aria-pressed":o==="standing",disabled:d,onClick:()=>e("standing"),children:[M.jsx(Xx,{size:17,"aria-hidden":"true"}),"站姿高抬膝"]})]}),M.jsx("p",{className:"game-setup-hint",children:g})]}),M.jsxs("div",{className:"game-setup-field",children:[M.jsx("span",{className:"game-setup-label",children:"騎行玩法"}),M.jsxs("div",{className:"game-segmented",role:"group","aria-label":"騎行玩法",children:[M.jsxs("button",{type:"button","aria-pressed":i===1,disabled:d,onClick:()=>r(1),children:[M.jsx(GM,{size:17,"aria-hidden":"true"}),"單人漫遊"]}),M.jsxs("button",{type:"button","aria-pressed":i===2,disabled:d,onClick:()=>r(2),children:[M.jsx(VM,{size:17,"aria-hidden":"true"}),"雙人競賽"]})]}),M.jsx("p",{className:"game-setup-hint",children:i===2?"兩人共用一個鏡頭，依畫面左右分區":"照自己的步調，享受沿途風景"})]}),i===2&&M.jsxs("label",{className:"game-setup-field game-distance-field",children:[M.jsxs("span",{className:"game-setup-label",children:[M.jsx(Tl,{size:13,"aria-hidden":"true"}),"競賽距離"]}),M.jsx("select",{"aria-label":"競賽距離",value:l,disabled:d,onChange:p=>f(Number(p.target.value)),children:Fx.map(p=>M.jsxs("option",{value:p,children:[p," 公尺"]},p))}),M.jsx("span",{className:"game-setup-hint",children:"先抵達終點者獲勝"})]})]})}function Iu(o){return Number.isFinite(o)?Math.max(0,o):0}function y3(o){const e=Math.floor(Iu(o));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function S3({speeds:o,distances:e,targetMeters:i,running:r,countdown:l,result:f}){const d=Math.max(1,Iu(i)),h=e.map(Iu),g=h[0]-h[1],p=Math.abs(g)<.1?null:g>0?0:1;return M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"race-hud","aria-label":"雙人競賽狀態",children:[M.jsxs("div",{className:"race-hud-heading",children:[M.jsxs("span",{children:[M.jsx(Tl,{size:13,"aria-hidden":"true"}),f?"競賽完成":l!==null?"準備出發":r?"競賽進行中":"雙人競賽"]}),M.jsxs("span",{children:["終點 ",d," 公尺"]})]}),M.jsx("div",{className:"race-player-grid",children:[0,1].map(y=>{const m=Math.min(100,h[y]/d*100);return M.jsxs("div",{className:`race-player-card race-player-${y+1}`,"data-player":y+1,"aria-label":`玩家 ${y+1} 狀態`,children:[M.jsxs("div",{className:"race-player-heading",children:[M.jsxs("span",{className:"race-player-name",children:[M.jsx("i",{"aria-hidden":"true"}),"玩家 ",y+1]}),p===y&&M.jsx("span",{className:"race-lead-label",children:"領先"})]}),M.jsxs("div",{className:"race-player-metrics",children:[M.jsxs("div",{className:"race-player-speed",children:[M.jsx("strong",{"data-metric":"speed",children:Iu(o[y]).toFixed(1)}),M.jsx("span",{children:"km/h"})]}),M.jsxs("div",{className:"race-player-distance",children:[M.jsx("strong",{"data-metric":"distance",children:h[y].toFixed(0)}),M.jsxs("span",{children:[" / ",d," 公尺"]})]})]}),M.jsx("div",{className:"race-progress-track",role:"progressbar","aria-label":`玩家 ${y+1} 騎行進度`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(m),"aria-valuetext":`${h[y].toFixed(0)} / ${d} 公尺`,children:M.jsx("span",{style:{width:`${m}%`}})})]},y)})})]}),l!==null&&M.jsxs("div",{className:"race-countdown",role:"status","aria-live":"assertive",children:[M.jsx("span",{children:"準備好了嗎？"}),M.jsx("strong",{children:l>0?l:"出發！"}),M.jsx("span",{children:"左右交替，一起向前"})]}),f&&M.jsxs("div",{className:"race-result-inline",role:"status","aria-live":"polite",children:[M.jsx("span",{className:"race-result-icon",children:M.jsx(qx,{size:24,"aria-hidden":"true"})}),M.jsxs("div",{children:[M.jsx("strong",{children:f.winner==="tie"?"精彩平手！":`玩家 ${f.winner} 獲勝！`}),M.jsxs("span",{children:["完成時間 ",y3(f.elapsed)," · 每一次踩踏都很棒"]})]})]})]})}function sp(){return{elapsed:0,distances:[0,0],result:null}}function M3(o,e,i,r){if(o.result!==null||!Number.isFinite(i)||i<=0||!Number.isFinite(r)||r<=0)return o;const l=e.map(T=>Number.isFinite(T)&&T>0?T/3.6:0),f=o.distances.map(T=>Number.isFinite(T)&&T>0?Math.min(T,r):0),d=f.map((T,D)=>{const x=r-T;return x<=0?0:l[D]>0?x/l[D]:1/0}),h=Math.min(...d),g=h<=i,p=g?h:i,y=(Number.isFinite(o.elapsed)&&o.elapsed>0?o.elapsed:0)+p,m=[Math.min(r,f[0]+l[0]*p),Math.min(r,f[1]+l[1]*p)];if(!g)return{elapsed:y,distances:m,result:null};const E=d.every(T=>T<=i)&&Math.abs(d[0]-d[1])<1e-6?"tie":d[0]<d[1]?1:2;return(E==="tie"||E===1)&&(m[0]=r),(E==="tie"||E===2)&&(m[1]=r),{elapsed:y,distances:m,result:{winner:E,elapsed:y}}}const Gx=[{id:"forest",title:"晨光森林",subtitle:"穿過綠意，和微風打聲招呼",label:"平緩・森林",icon:HM,image:bl("routes/forest.svg")},{id:"coast",title:"蔚藍海岸",subtitle:"沿著海岸線，把心情放晴",label:"平緩・海岸",icon:qM,image:bl("routes/coast.svg")},{id:"sunset",title:"暖陽山丘",subtitle:"追著金色陽光，慢慢向前",label:"平緩・山丘",icon:OM,image:bl("routes/sunset.svg")}],rp=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(Math.floor(o%60)).padStart(2,"0")}`;function E3(){try{const o=JSON.parse(localStorage.getItem("forest-pedal-rides")||"[]");return Array.isArray(o)?o.filter(e=>!!e&&typeof e.route=="string"&&typeof e.date=="string"&&Number.isFinite(Date.parse(e.date))&&Number.isFinite(e.seconds)&&e.seconds>=0&&Number.isFinite(e.distance)&&e.distance>=0).slice(0,100):[]}catch{return[]}}function T3(){var Rt;const[o,e]=Xt.useState("forest"),[i,r]=Xt.useState(!1),[l,f]=Xt.useState("demo"),[d,h]=Xt.useState(42),[g,p]=Xt.useState(38),[y,m]=Xt.useState(0),[v,E]=Xt.useState("demo"),[T,D]=Xt.useState("seated"),[x,S]=Xt.useState(1),[L,I]=Xt.useState(100),[R,P]=Xt.useState(null),[O,B]=Xt.useState(sp),[G,w]=Xt.useState(0),[C,k]=Xt.useState([{cadence:0,tracking:!1,quality:0,feedback:"請讓身體入鏡",highKnees:0},{cadence:0,tracking:!1,quality:0,feedback:"請讓身體入鏡",highKnees:0}]),[W,et]=Xt.useState(!1),[St,ft]=Xt.useState(!1),[K,dt]=Xt.useState(!1),[Q,At]=Xt.useState(15),[Ct,Ht]=Xt.useState(null),[oe,ge]=Xt.useState(E3),[V,ct]=Xt.useState(!0),[Z,rt]=Xt.useState(!1),[wt,Pt]=Xt.useState(!1),[Lt,Ut]=Xt.useState(!1),[Wt,F]=Xt.useState(""),Ee=Xt.useRef(null),re=Xt.useRef(null),Jt=Xt.useRef(null),Ft=Gx.find(j=>j.id===o),$t=O.elapsed,lt=O.distances[0]/1e3,Dt=O.distances[1]/1e3,Nt=i?l==="demo"?d:C[0].tracking?y:0:0,ie=Math.min(30,Nt*.28),U=i&&x===2?l==="demo"?g:C[1].tracking?C[1].cadence:0:0,b=Math.min(30,U*.28),J=((Rt=O.result)==null?void 0:Rt.winner)==="tie"?"兩位玩家平手！":O.result?`玩家 ${O.result.winner} 獲勝`:"一起出發，享受這場競賽。",_t=i||R!==null,Mt=x===1||l==="demo"||C.every(j=>j.tracking),ht=Math.min(1,$t/(Q*60)),qt=Xt.useCallback(j=>m(j),[]),Bt=Xt.useCallback(j=>E(j),[]),ee=Xt.useCallback(j=>k(j),[]),ne=Xt.useRef([ie,b]);ne.current=[ie,b],Xt.useEffect(()=>{if(!i)return;let j=performance.now();const xt=setInterval(()=>{const pt=performance.now(),zt=Math.min((pt-j)/1e3,2);j=pt,B(kt=>x===2?M3(kt,ne.current,zt,L):{...kt,elapsed:kt.elapsed+zt,distances:[kt.distances[0]+ne.current[0]/3.6*zt,0]})},100);return()=>clearInterval(xt)},[i,x,L]),Xt.useEffect(()=>{if(R===null)return;const j=setTimeout(()=>{R<=1?(P(null),r(!0)):P(R-1)},1e3);return()=>clearTimeout(j)},[R]),Xt.useEffect(()=>{O.result&&!Lt&&Vt()},[O.result,Lt]),Xt.useEffect(()=>{i&&l==="camera"&&v==="error"&&(r(!1),F("攝影機已中斷，旅程已暫停。重新連線後可繼續。"))},[i,l,v]),Xt.useEffect(()=>{const j=()=>ft(document.fullscreenElement===Ee.current);return document.addEventListener("fullscreenchange",j),()=>document.removeEventListener("fullscreenchange",j)},[]),Xt.useEffect(()=>{if(!Wt)return;const j=setTimeout(()=>F(""),4e3);return()=>clearTimeout(j)},[Wt]),Xt.useEffect(()=>{const j=xt=>{xt.key==="Escape"&&(Ht(null),dt(!1))};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[]),Xt.useEffect(()=>{if(!Ct)return;const j=document.activeElement,xt=pt=>{if(pt.key!=="Tab")return;const zt=[...document.querySelectorAll(".modal button:not(:disabled), .modal select, .modal a[href], .modal input")],kt=zt[0],Yt=zt[zt.length-1];pt.shiftKey&&document.activeElement===kt?(pt.preventDefault(),Yt==null||Yt.focus()):!pt.shiftKey&&document.activeElement===Yt&&(pt.preventDefault(),kt==null||kt.focus())};return document.addEventListener("keydown",xt),()=>{document.removeEventListener("keydown",xt),j!=null&&j.isConnected&&j.focus()}},[Ct]),Xt.useEffect(()=>{const j=document.body.style.overflow;return(Ct||K)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=j}},[Ct,K]),Xt.useEffect(()=>{Jt.current&&re.current&&Jt.current.gain.setTargetAtTime(!V&&i?.08:0,re.current.currentTime,.3)},[V,i,Z]),Xt.useEffect(()=>()=>{var j;(j=re.current)==null||j.close()},[]);async function Ot(){if(!re.current){const j=new AudioContext;re.current=j;const xt=j.createBuffer(1,j.sampleRate*3,j.sampleRate),pt=xt.getChannelData(0);let zt=0;for(let Te=0;Te<pt.length;Te++)zt=(zt+(Math.random()*2-1)*.025)/1.02,pt[Te]=zt*3;const kt=j.createBufferSource();kt.buffer=xt,kt.loop=!0;const Yt=j.createBiquadFilter();Yt.type="lowpass",Yt.frequency.value=700;const ce=j.createGain();ce.gain.value=0,Jt.current=ce,kt.connect(Yt).connect(ce).connect(j.destination),kt.start(),rt(!0)}await re.current.resume(),ct(j=>!j)}function Vt(){var j;if(r(!1),P(null),$t>0&&!Lt){const pt=[{date:new Date().toISOString(),seconds:Math.floor($t),distance:lt,route:Ft.title,playerCount:x,exerciseMode:T,secondDistance:x===2?Dt:void 0,winner:(j=O.result)==null?void 0:j.winner},...oe].slice(0,100);ge(pt),Ut(!0);try{localStorage.setItem("forest-pedal-rides",JSON.stringify(pt))}catch{F("瀏覽器無法儲存紀錄，本次成績仍可在畫面查看。")}Ht("finish")}else Lt&&Ht("finish")}function le(){r(!1),P(null),B(sp()),w(j=>j+1),m(0),Ut(!1),Ht(null)}function X(){if(R!==null){P(null);return}if(i){r(!1);return}if(!Mt){F("請先讓兩位玩家分別進入鏡頭左右區域。");return}Lt&&(B(sp()),w(j=>j+1),Ut(!1)),x===2&&(Lt||$t===0)?P(3):r(!0)}async function q(){var j;if(K){dt(!1);return}try{document.fullscreenElement?await document.exitFullscreen():(j=Ee.current)!=null&&j.requestFullscreen?await Ee.current.requestFullscreen():dt(!0)}catch{dt(!0)}}function bt(j,xt){_t||($t>0&&!Lt&&Vt(),le(),j(),F(xt))}function z(j){if(l!==j){if(x===2){if(_t){F("請先暫停競賽，再切換動作來源。");return}bt(()=>f(j),"已切換動作來源，競賽將重新開始。")}else f(j);m(0)}}const gt={exerciseMode:T,onExerciseModeChange:j=>{j!==T&&bt(()=>D(j),j==="standing"?"已切換站姿高抬膝；膝蓋抬到髖部高度才計分。":"已切換坐姿踩踏，請坐穩椅子。")},playerCount:x,onPlayerCountChange:j=>{j!==x&&bt(()=>S(j),j===2?"雙人競賽：畫面左側是玩家 1，右側是玩家 2。":"已切換單人漫遊。")},raceMeters:L,onRaceMetersChange:j=>{j!==L&&bt(()=>I(j),`賽程已設定為 ${j} 公尺。`)},locked:_t};return M.jsxs("div",{className:`app-shell${wt?" large-text":""}`,children:[M.jsxs("header",{className:"site-header",children:[M.jsxs("a",{href:"#",className:"brand","aria-label":"森森騎旅首頁",children:[M.jsxs("span",{className:"brand-mark",children:[M.jsx(Th,{size:27,strokeWidth:1.8}),M.jsx("span",{className:"brand-wheel left"}),M.jsx("span",{className:"brand-wheel right"})]}),M.jsxs("span",{children:[M.jsxs("strong",{children:["森森騎旅",M.jsx("span",{className:"brand-dot",children:"."})]}),M.jsx("small",{children:"Little pedals. Big adventures."})]})]}),M.jsxs("nav",{"aria-label":"主要導覽",children:[M.jsxs("button",{className:"nav-item active",onClick:()=>{var j;Ht(null),(j=document.getElementById("ride"))==null||j.scrollIntoView({behavior:"smooth"})},children:[M.jsx(C_,{size:17}),"騎行天地"]}),M.jsxs("button",{className:"nav-item",onClick:()=>Ht("records"),children:[M.jsx(Mh,{size:17}),"我的紀錄"]}),M.jsxs("button",{className:"nav-item",onClick:()=>Ht("guide"),children:[M.jsx(DM,{size:17}),"使用說明"]})]}),M.jsxs("div",{className:"header-right",children:[M.jsxs("span",{className:"local-badge",children:[M.jsx("span",{}),"自在動一動，好心情一整天"]}),M.jsx("button",{className:"icon-button settings-button","aria-label":"騎行設定",onClick:()=>Ht("settings"),children:M.jsx(Eh,{size:19})})]})]}),M.jsxs("main",{id:"ride",className:"main-content",children:[M.jsxs("section",{className:"page-heading",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"eyebrow",children:[M.jsx("span",{}),"YOUR EVERYDAY LITTLE ADVENTURE"]}),M.jsxs("h1",{children:[T==="standing"?"站著動，也能去遠方":"坐著動，也能去遠方",M.jsx("span",{children:"。"})]}),M.jsx("p",{children:"跟著自己的節奏踩踏，讓每一小步，都有好風景。"})]}),M.jsxs("div",{className:"heading-note",children:[M.jsx("span",{className:"note-icon",children:M.jsx(au,{size:21})}),M.jsxs("div",{children:[M.jsx("strong",{children:"不必趕路，享受這一刻"}),M.jsx("span",{children:"今天的旅程，從舒服開始。"})]})]})]}),M.jsxs("div",{className:"dashboard-grid",children:[M.jsxs("div",{className:"main-column",children:[M.jsx(Hx,{...gt}),M.jsxs("section",{className:`ride-card route-${o}${x===2?" is-duel":""}${K?" expanded-view":""}`,ref:Ee,"aria-label":"3D 騎行遊戲","data-fullscreen":St||K,children:[M.jsx(s3,{speed:ie,running:i,route:o,playerCount:x,opponentSpeed:b,playerDistances:O.distances,analysisActive:l==="camera"}),M.jsx("div",{className:"scene-fullscreen-setup",children:M.jsx(Hx,{...gt,compact:!0})}),M.jsxs("div",{className:"scene-top",children:[M.jsxs("div",{className:"scene-location",children:[M.jsxs("span",{className:"scene-kicker",children:[M.jsx(LM,{size:12}),"你的此刻，正在自然裡"]}),M.jsx("h2",{children:Ft.title}),M.jsxs("span",{className:"scene-route-label",children:[M.jsx(Ft.icon,{size:13}),Ft.label,M.jsx("span",{className:"scene-dot",children:"·"}),x===2?"雙人競賽":"自由騎行"]})]}),M.jsxs("div",{className:"scene-tools",children:[M.jsxs("span",{className:"weather-pill",children:[M.jsx(FM,{size:17}),o==="sunset"?"暖陽相伴":o==="coast"?"海風正好":"陽光正好"]}),M.jsx("button",{onClick:()=>void q(),className:"scene-icon","aria-label":"切換全螢幕","aria-pressed":St||K,children:M.jsx(UM,{size:17})})]})]}),M.jsxs("aside",{className:`scene-camera${W?" is-collapsed":""}`,"aria-label":"畫面內人體偵測",children:[M.jsxs("div",{className:"scene-camera-heading",children:[M.jsxs("span",{children:[M.jsx(nu,{size:14}),"人體偵測",M.jsx("span",{className:`camera-status-dot ${v==="tracking"?"detected":""}`})]}),M.jsxs("div",{children:[M.jsx("button",{className:"camera-source-button",onClick:()=>z(l==="demo"?"camera":"demo"),disabled:x===2&&_t,"aria-label":l==="demo"?"開啟即時攝影機":"切回示範模式",children:l==="demo"?"示範":"即時"}),M.jsx("button",{onClick:()=>et(j=>!j),"aria-label":W?"展開人體偵測視窗":"收合人體偵測視窗",children:W?M.jsx(CM,{size:15}):M.jsx(wM,{size:15})})]})]}),M.jsx("div",{className:"camera-viewport",children:M.jsx(_3,{mode:l,running:i,demoCadence:d,demoCadence2:g,playerCount:x,exerciseMode:T,resetKey:G,onCadence:qt,onTracking:Bt,onPlayers:ee})}),M.jsx("div",{className:"scene-camera-summary",role:"status",children:l==="demo"?"示範姿態，尚未使用攝影機":v==="loading"?"正在載入辨識模型…":v==="error"?"攝影機尚未連線":x===2?`玩家 1 ${C[0].tracking?"已辨識":"未入鏡"} · 玩家 2 ${C[1].tracking?"已辨識":"未入鏡"}`:C[0].tracking?"已偵測到你，標點會跟著動作移動":T==="standing"?"請讓肩膀、髖部與膝蓋入鏡":"請讓肩膀、膝蓋和雙腳完整入鏡"})]}),x===2&&M.jsx(S3,{speeds:[ie,b],distances:O.distances,targetMeters:L,running:i,countdown:R,result:O.result}),M.jsxs("div",{className:"scene-status",children:[M.jsx("span",{className:i?"status-dot live":"status-dot"}),l==="demo"?"示範模式":v==="tracking"?"動作已連線":v==="loading"?"攝影機準備中":"攝影機模式",M.jsx("span",{className:"status-separator"}),i?Nt>0?"微風與你同行":"等你開始踩踏":"準備好就出發",M.jsx("span",{className:"status-separator"}),T==="standing"?"站姿高抬膝":"坐姿踩踏"]}),M.jsxs("div",{className:"scene-bottom",children:[M.jsxs("div",{className:"ride-metrics",children:[M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx(Mh,{size:14}),"騎行距離"]}),M.jsxs("strong",{children:[lt.toFixed(2),M.jsx("small",{children:"km"})]})]}),M.jsx("span",{className:"metric-divider"}),M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx(NM,{size:14}),"騎行時間"]}),M.jsx("strong",{children:rp($t)})]})]}),M.jsxs("button",{className:`start-button ${i?"is-running":""}`,onClick:X,disabled:!i&&R===null&&!Mt,children:[i?M.jsx(zM,{size:19,fill:"currentColor"}):M.jsx(PM,{size:19,fill:"currentColor"}),R!==null?`取消倒數 ${R}`:i?"暫停一下":Lt?"再騎一趟":$t>0?"繼續騎行":x===2?"開始競賽":"開始騎行",!i&&M.jsx(eu,{size:18})]}),M.jsxs("button",{className:"end-ride",disabled:$t===0,onClick:Vt,children:[M.jsx(Tl,{size:15}),"結束旅程"]})]}),x===2&&l==="camera"&&!Mt&&!i&&M.jsx("p",{className:"race-positioning-note",children:"請先讓兩位玩家完整入鏡，再開始競賽。"})]}),M.jsxs("section",{className:"routes-section",children:[M.jsxs("div",{className:"section-title",children:[M.jsxs("div",{children:[M.jsx("span",{className:"small-icon",children:M.jsx(C_,{size:18})}),M.jsx("h2",{children:"下一站，想去哪裡？"})]}),M.jsx("span",{children:"3 條風景・隨心切換"})]}),M.jsx("div",{className:"route-grid",children:Gx.map((j,xt)=>M.jsxs("button",{className:`route-card ${o===j.id?"selected":""}`,onClick:()=>{e(j.id),o!==j.id&&F(`已切換至${j.title}，旅程繼續累計。`)},"aria-pressed":o===j.id,children:[M.jsxs("div",{className:"route-image",style:{backgroundImage:`url(${j.image})`},children:[M.jsxs("span",{className:"route-number",children:["0",xt+1]}),M.jsx("span",{className:"route-selection",children:o===j.id?M.jsxs(M.Fragment,{children:[M.jsx(iu,{size:11}),"正在探索"]}):M.jsxs(M.Fragment,{children:[M.jsx(j.icon,{size:11}),j.label.split("・")[1]]})})]}),M.jsxs("div",{className:"route-copy",children:[M.jsxs("h3",{children:[j.title,M.jsx("span",{children:o===j.id?M.jsx("span",{className:"selected-dot"}):M.jsx(RM,{size:15})})]}),M.jsx("p",{children:j.subtitle})]})]},j.id))})]}),M.jsxs("div",{className:"gentle-reminder",children:[M.jsx("span",{className:"reminder-icon",children:M.jsx(su,{size:21})}),M.jsxs("div",{children:[M.jsx("strong",{children:"動得舒服，比動得快更重要。"}),M.jsx("p",{children:T==="standing"?"請在穩固、無障礙的空間站立，量力交替高抬膝；需要支撐時可扶穩固椅背。":"請坐穩有靠背的椅子，依自己的體力輕鬆踩踏；若感到不適，隨時停下休息。"})]}),M.jsx(au,{className:"reminder-leaf",size:35,strokeWidth:1.1})]})]}),M.jsxs("aside",{className:"side-column",children:[M.jsxs("section",{className:"pace-card","data-player":"1",children:[M.jsxs("div",{className:"card-heading",children:[M.jsxs("h2",{children:[M.jsx(bM,{size:17}),x===2?"玩家 1 運動節奏":T==="standing"?"你的高抬膝節奏":"你的踩踏節奏"]}),M.jsxs("span",{className:"live-label",children:[M.jsx("span",{}),l==="demo"?"DEMO":"LIVE"]})]}),M.jsxs("div",{className:"speed-reading",children:[M.jsx("strong",{"data-metric":"speed",children:ie.toFixed(1)}),M.jsx("span",{children:"km/h"}),M.jsxs("span",{className:"speed-illustration",children:[M.jsx(WM,{size:27}),M.jsx(Nu,{size:43,strokeWidth:1.2})]})]}),M.jsx("div",{className:"pace-divider"}),M.jsxs("div",{className:"cadence-reading",children:[M.jsxs("span",{children:[M.jsx(Xx,{size:16}),T==="standing"?"有效抬膝頻率":"踩踏頻率"]}),M.jsxs("strong",{"data-metric":"cadence",children:[Math.round(Nt*(T==="standing"?2:1)),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),M.jsx("div",{className:"pace-bars","aria-hidden":"true",children:Array.from({length:28},(j,xt)=>M.jsx("i",{className:xt<Math.round(Nt/90*28)?"filled":""},xt))}),M.jsxs("p",{className:"pace-caption",children:[i?Nt===0?"輕輕抬腿，開始你的踩踏":Nt>70?"很有活力！記得保持呼吸順暢":"很棒，保持舒服的節奏就好":"按下開始，跟著你的節奏出發",M.jsx(au,{size:13})]}),T==="standing"&&l==="camera"&&M.jsxs("p",{className:"high-knee-feedback","data-player-feedback":"1",children:[C[0].feedback," · 有效抬膝 ",C[0].highKnees," 次"]}),x===2&&M.jsxs("div",{className:"second-player-pace","data-player":"2",children:[M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx("i",{}),"玩家 2"]}),M.jsxs("strong",{"data-metric":"speed",children:[b.toFixed(1),M.jsx("small",{children:"km/h"})]})]}),M.jsxs("div",{children:[M.jsx("span",{children:T==="standing"?"抬膝頻率":"踩踏頻率"}),M.jsxs("strong",{"data-metric":"cadence",children:[Math.round(U*(T==="standing"?2:1)),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),T==="standing"&&l==="camera"&&M.jsxs("p",{"data-player-feedback":"2",children:[C[1].feedback," · ",C[1].highKnees," 次"]})]})]}),M.jsxs("section",{className:"camera-card",children:[M.jsxs("div",{className:"card-heading",children:[M.jsxs("h2",{children:[M.jsx(nu,{size:17}),"偵測與試玩設定"]}),M.jsxs("span",{className:`tracking-label ${v==="tracking"?"tracked":""}`,children:[M.jsx("span",{}),l==="demo"?"示範中":{loading:"啟動中",tracking:"已辨識",positioning:"請調整位置",error:"尚未連線",demo:"準備中"}[v]]})]}),M.jsxs("div",{className:"mode-tabs",role:"group","aria-label":"選擇動作模式",children:[M.jsxs("button",{className:l==="demo"?"active":"",onClick:()=>z("demo"),disabled:x===2&&_t,children:[M.jsx(BM,{size:13}),"先試玩看看"]}),M.jsxs("button",{className:l==="camera"?"active":"",onClick:()=>z("camera"),disabled:x===2&&_t,children:[M.jsx(nu,{size:13}),"使用攝影機"]})]}),M.jsxs("div",{className:"tracking-summary-card",children:[M.jsx("span",{className:"tracking-summary-icon",children:x===2?M.jsx(kM,{size:24}):M.jsx(nu,{size:24})}),M.jsxs("div",{children:[M.jsxs("strong",{children:[T==="standing"?"站姿高抬膝":"坐姿踩踏",x===2?" · 雙人競賽":" · 單人漫遊"]}),M.jsx("p",{children:"人體標點已放在遊戲畫面右上角，放大後也能看見。"})]})]}),l==="camera"&&M.jsx("div",{className:"player-tracking-list",children:C.slice(0,x).map((j,xt)=>M.jsxs("div",{"data-player":xt+1,children:[M.jsx("span",{className:j.tracking?"tracked":"not-tracked"}),M.jsxs("strong",{children:["玩家 ",xt+1]}),M.jsx("span",{children:j.tracking?`已辨識 ${j.quality}%`:"請完整入鏡"})]},xt))}),l==="demo"?M.jsxs("div",{className:"demo-control",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"demo-speed",children:x===2?"玩家 1 示範速度":T==="standing"?"試試不同的高抬膝速度":"試試不同的踩踏速度"}),M.jsxs("span",{children:[d*(T==="standing"?2:1),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),M.jsx("input",{id:"demo-speed",type:"range",min:"0",max:"90",step:"1",value:d,onChange:j=>h(Number(j.target.value)),"aria-label":"示範踩踏速度"}),M.jsxs("div",{className:"range-labels",children:[M.jsx("span",{children:T==="standing"?"慢慢抬":"慢慢踩"}),M.jsx("span",{children:T==="standing"?"活力抬":"活力踩"})]}),x===2&&M.jsxs("div",{className:"player-two-demo",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"demo-speed-2",children:"玩家 2 示範速度"}),M.jsxs("span",{children:[g*(T==="standing"?2:1),M.jsx("small",{children:T==="standing"?"步/分":"rpm"})]})]}),M.jsx("input",{id:"demo-speed-2",type:"range",min:"0",max:"90",step:"1",value:g,onChange:j=>p(Number(j.target.value)),"aria-label":"玩家 2 示範速度"}),M.jsxs("div",{className:"range-labels",children:[M.jsx("span",{children:"慢慢動"}),M.jsx("span",{children:"活力動"})]})]})]}):M.jsxs("div",{className:"camera-instruction",children:[M.jsx("span",{className:"privacy-icon",children:M.jsx(su,{size:17})}),M.jsxs("p",{children:[x===2&&"兩人共用一個鏡頭，分別在畫面左右區域。",T==="standing"?"鏡頭需拍到肩膀、髖部與膝蓋；抬膝時腳踝短暫遮住仍可辨識。":"鏡頭需拍到肩膀、髖部、膝蓋和腳踝。",M.jsx("br",{}),M.jsx("small",{children:"影像僅在裝置分析，不錄影、不上傳。"})]})]})]}),M.jsxs("section",{className:"goal-card",children:[M.jsxs("div",{className:"goal-copy",children:[M.jsxs("span",{className:"goal-eyebrow",children:[M.jsx(Tl,{size:13}),"今天的小目標"]}),M.jsxs("h3",{children:["給自己一點",M.jsx("br",{}),"動起來的時間。"]}),M.jsxs("label",{className:"goal-select",children:[M.jsx("select",{value:Q,onChange:j=>At(Number(j.target.value)),"aria-label":"騎行時間目標",children:[5,10,15,20,30].map(j=>M.jsxs("option",{value:j,children:[j," 分鐘輕鬆騎"]},j))}),M.jsx(AM,{size:12})]})]}),M.jsxs("div",{className:"goal-ring",children:[M.jsxs("svg",{viewBox:"0 0 100 100",children:[M.jsx("circle",{className:"ring-track",cx:"50",cy:"50",r:"42"}),M.jsx("circle",{className:"ring-progress",cx:"50",cy:"50",r:"42",strokeDasharray:`${ht*264} 264`})]}),M.jsx("div",{children:ht>=1?M.jsx(iu,{size:26}):M.jsxs(M.Fragment,{children:[M.jsxs("strong",{children:[Math.floor($t/60),M.jsxs("small",{children:[" / ",Q]})]}),M.jsx("span",{children:"分鐘"})]})})]}),ht>=1&&M.jsx("span",{className:"goal-complete",children:"今天的小目標達成了！"})]})]})]}),M.jsxs("footer",{className:"site-footer",children:[M.jsxs("span",{children:[M.jsx(Th,{size:13}),"每一次踩踏，都是照顧自己的開始。"]}),M.jsxs("div",{children:[M.jsx("span",{children:"為每一個年紀，留一段好風景"}),M.jsx("span",{className:"footer-dot",children:"·"}),M.jsxs("button",{onClick:()=>Ht("settings"),children:["騎行設定",M.jsx(Eh,{size:12})]}),M.jsxs("button",{onClick:()=>Ht("guide"),children:["需要幫忙嗎？",M.jsx(eu,{size:12})]})]})]})]}),M.jsxs("button",{className:`sound-button ${V?"":"sound-on"}`,onClick:()=>void Ot(),"aria-label":V?"開啟自然環境音":"關閉自然環境音",title:V?"開啟自然環境音":"關閉自然環境音",children:[V?M.jsx(XM,{size:18}):M.jsx(jM,{size:18}),M.jsxs("span",{children:["自然環境音",V?"已關閉":"已開啟"]})]}),Wt&&M.jsxs("div",{className:"toast",role:"status",children:[M.jsx(iu,{size:17}),Wt]}),Ct&&SM.createPortal(M.jsx("div",{className:`modal-backdrop${wt?" large-text":""}`,onClick:j=>{j.target===j.currentTarget&&Ht(null)},children:M.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[M.jsx("button",{className:"modal-close icon-button",autoFocus:!0,onClick:()=>Ht(null),"aria-label":"關閉視窗",children:M.jsx(YM,{size:20})}),Ct==="guide"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(au,{size:22})}),M.jsx("p",{className:"eyebrow",children:"A LITTLE GUIDE FOR YOUR RIDE"}),M.jsx("h2",{id:"modal-title",children:"準備好，輕鬆出發。"}),M.jsx("p",{className:"modal-intro",children:"不用穿上車鞋，也能騎進好風景。"}),M.jsxs("ol",{className:"guide-steps",children:[M.jsxs("li",{children:[M.jsx("span",{children:"01"}),M.jsxs("div",{children:[M.jsx("h3",{children:"選擇運動方式與玩法"}),M.jsx("p",{children:"坐姿模式請坐穩有靠背的椅子；站姿模式請留足活動空間，交替把膝蓋抬到髖部高度。可選單人漫遊或同畫面的雙人競賽。"})]})]}),M.jsxs("li",{children:[M.jsx("span",{children:"02"}),M.jsxs("div",{children:[M.jsx("h3",{children:"打開攝影機，讓雙腿入鏡"}),M.jsx("p",{children:"將鏡頭放在前方，拍到肩膀、髖部與膝蓋；坐姿模式還需拍到腳踝。允許攝影機後，綠色標點會跟著身體移動。需要 HTTPS 或本機環境。雙人共用一個鏡頭，畫面左側是綠色玩家 1，右側是藍色玩家 2。右上角小視窗放大後也會持續顯示。"})]})]}),M.jsxs("li",{children:[M.jsx("span",{children:"03"}),M.jsxs("div",{children:[M.jsx("h3",{children:"按下開始，左右交替動起來"}),M.jsx("p",{children:"坐姿像踩空中腳踏車一樣交替抬腿；站姿需完成「抬高、放下」並左右交替才計分。雙人競賽有 3 秒倒數，各自控制一台車，先到終點者獲勝。示範模式可分別調整兩人的速度。"})]})]})]}),M.jsxs("div",{className:"guide-note",children:[M.jsx(su,{size:19}),M.jsx("p",{children:"以自己的舒適程度為準，不需追求速度。如有疼痛、頭暈或喘不過氣，請停止並尋求協助。本遊戲不作醫療評估。"})]}),M.jsxs("button",{className:"primary-button",onClick:()=>Ht(null),children:["知道了，準備出發",M.jsx(eu,{size:17})]})]}),Ct==="records"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(Mh,{size:23})}),M.jsx("p",{className:"eyebrow",children:"EVERY LITTLE RIDE COUNTS"}),M.jsx("h2",{id:"modal-title",children:"我的騎行足跡"}),M.jsx("p",{className:"modal-intro",children:"每一段旅程，都值得記下來。紀錄儲存於此瀏覽器。"}),oe.length?M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"records-totals",children:[M.jsxs("div",{children:[M.jsx("strong",{children:oe.length}),M.jsx("span",{children:"趟旅程"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:oe.reduce((j,xt)=>j+xt.distance,0).toFixed(2)}),M.jsx("span",{children:"總公里"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:Math.floor(oe.reduce((j,xt)=>j+xt.seconds,0)/60)}),M.jsx("span",{children:"總分鐘"})]})]}),M.jsx("div",{className:"records-list",children:oe.map((j,xt)=>M.jsxs("div",{className:"record-row",children:[M.jsx("span",{className:"record-icon",children:M.jsx(Nu,{size:21})}),M.jsxs("div",{children:[M.jsxs("strong",{children:[j.route,j.playerCount===2?" · 雙人競賽":""]}),M.jsx("span",{children:new Date(j.date).toLocaleString("zh-TW",{month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),M.jsxs("div",{children:[M.jsx("strong",{children:j.playerCount===2?`P1 ${Math.round(j.distance*1e3)}m / P2 ${Math.round((j.secondDistance??0)*1e3)}m`:`${j.distance.toFixed(2)} km`}),M.jsx("span",{children:rp(j.seconds)}),j.exerciseMode&&M.jsxs("span",{children:[j.exerciseMode==="standing"?"站姿高抬膝":"坐姿踩踏",j.winner?j.winner==="tie"?" · 平手":` · 玩家 ${j.winner} 獲勝`:""]})]})]},`${j.date}-${xt}`))}),M.jsx("p",{className:"record-footnote",children:"示範與攝影機模式的旅程皆會保存在此。距離為遊戲中的虛擬里程。"})]}):M.jsxs("div",{className:"empty-records",children:[M.jsx(Nu,{size:48,strokeWidth:1.2}),M.jsx("h3",{children:"第一段好風景，正等著你。"}),M.jsx("p",{children:"完成騎行後按「結束旅程」，足跡就會留在這裡。"}),M.jsxs("button",{className:"primary-button",onClick:()=>Ht(null),children:["去騎一會兒",M.jsx(eu,{size:17})]})]})]}),Ct==="finish"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge finish-badge",children:x===2?M.jsx(qx,{size:25}):M.jsx(Tl,{size:25})}),M.jsx("p",{className:"eyebrow",children:"YOU DID SOMETHING GOOD TODAY"}),M.jsx("h2",{id:"modal-title",children:x===2?O.result?J:"雙人騎行已結束":"把這份好心情，帶回生活。"}),M.jsx("p",{className:"modal-intro",children:x===2?"謝謝兩位一起動起來，每一段前進都值得掌聲。":"今天的你很棒，謝謝自己願意動一動。"}),M.jsxs("div",{className:"finish-scene",children:[M.jsx(Th,{size:65,strokeWidth:1.2}),M.jsx("span",{children:"旅程已儲存"})]}),M.jsxs("div",{className:"records-totals",children:[M.jsxs("div",{children:[M.jsx("strong",{children:x===2?Math.round(lt*1e3):lt.toFixed(2)}),M.jsx("span",{children:x===2?"玩家 1 公尺":"公里"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:rp($t)}),M.jsx("span",{children:"騎行時間"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:x===2?Math.round(Dt*1e3):`${Math.round(ht*100)}%`}),M.jsx("span",{children:x===2?"玩家 2 公尺":"目標完成"})]})]}),M.jsxs("p",{className:"finish-note",children:["喝口水，讓身體休息一下。",M.jsx("br",{}),l==="demo"?"本次為示範騎行，里程為虛擬模擬。":"騎行距離為依踩踏節奏推估的遊戲里程。"]}),M.jsxs("button",{className:"primary-button",onClick:le,children:[M.jsx(IM,{size:17}),"開始一段新旅程"]})]}),Ct==="settings"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(Eh,{size:23})}),M.jsx("p",{className:"eyebrow",children:"MAKE YOURSELF COMFORTABLE"}),M.jsx("h2",{id:"modal-title",children:"照你的步調就好。"}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"自然環境音"}),M.jsx("p",{children:"騎行時，讓輕柔風聲陪伴你。"})]}),M.jsx("button",{className:`toggle ${V?"":"on"}`,role:"switch","aria-checked":!V,"aria-label":"自然環境音",onClick:()=>void Ot(),children:M.jsx("span",{})})]}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"友善大字模式"}),M.jsx("p",{children:"放大主要操作與提示文字，看得更輕鬆。"})]}),M.jsx("button",{className:`toggle ${wt?"on":""}`,role:"switch","aria-checked":wt,"aria-label":"友善大字模式",onClick:()=>Pt(j=>!j),children:M.jsx("span",{})})]}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"騎行目標"}),M.jsx("p",{children:"目標達成後仍可繼續自由騎行。"})]}),M.jsx("select",{value:Q,onChange:j=>At(Number(j.target.value)),"aria-label":"設定騎行目標",children:[5,10,15,20,30].map(j=>M.jsxs("option",{value:j,children:[j," 分鐘"]},j))})]}),M.jsxs("div",{className:"guide-note",children:[M.jsx(su,{size:19}),M.jsx("p",{children:"攝影機影像在你的裝置即時分析，不會傳送至伺服器。切換回示範模式便會關閉攝影機。"})]}),M.jsxs("button",{className:"primary-button",onClick:()=>Ht(null),children:["設定完成",M.jsx(iu,{size:17})]})]})]})}),document.fullscreenElement||document.body)]})}yM.createRoot(document.getElementById("root")).render(M.jsx(hM.StrictMode,{children:M.jsx(T3,{})}));
