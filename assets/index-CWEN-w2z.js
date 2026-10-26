var hM=Object.defineProperty;var pM=(o,e,i)=>e in o?hM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var Ie=(o,e,i)=>pM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Yx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var _h={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function mM(){if(S_)return hl;S_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:f}}return hl.Fragment=e,hl.jsx=i,hl.jsxs=i,hl}var M_;function gM(){return M_||(M_=1,_h.exports=mM()),_h.exports}var M=gM(),xh={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function vM(){if(E_)return xe;E_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(j){return j===null||typeof j!="object"?null:(j=E&&j[E]||j["@@iterator"],typeof j=="function"?j:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function L(j,St,ct){this.props=j,this.context=St,this.refs=x,this.updater=ct||D}L.prototype.isReactComponent={},L.prototype.setState=function(j,St){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,St,"setState")},L.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function z(){}z.prototype=L.prototype;function C(j,St,ct){this.props=j,this.context=St,this.refs=x,this.updater=ct||D}var k=C.prototype=new z;k.constructor=C,S(k,L.prototype),k.isPureReactComponent=!0;var P=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function R(j,St,ct){var Q=ct.ref;return{$$typeof:o,type:j,key:St,ref:Q!==void 0?Q:null,props:ct}}function H(j,St){return R(j.type,St,j.props)}function $(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function vt(j){var St={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ct){return St[ct]})}var dt=/\/+/g;function st(j,St){return typeof j=="object"&&j!==null&&j.key!=null?vt(""+j.key):St.toString(36)}function Z(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(O,O):(j.status="pending",j.then(function(St){j.status==="pending"&&(j.status="fulfilled",j.value=St)},function(St){j.status==="pending"&&(j.status="rejected",j.reason=St)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function ut(j,St,ct,Q,xt){var Pt=typeof j;(Pt==="undefined"||Pt==="boolean")&&(j=null);var Dt=!1;if(j===null)Dt=!0;else switch(Pt){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(j.$$typeof){case o:case e:Dt=!0;break;case y:return Dt=j._init,ut(Dt(j._payload),St,ct,Q,xt)}}if(Dt)return xt=xt(j),Dt=Q===""?"."+st(j,0):Q,P(xt)?(ct="",Dt!=null&&(ct=Dt.replace(dt,"$&/")+"/"),ut(xt,St,ct,"",function(V){return V})):xt!=null&&($(xt)&&(xt=H(xt,ct+(xt.key==null||j&&j.key===xt.key?"":(""+xt.key).replace(dt,"$&/")+"/")+Dt)),St.push(xt)),1;Dt=0;var Ct=Q===""?".":Q+":";if(P(j))for(var Zt=0;Zt<j.length;Zt++)Q=j[Zt],Pt=Ct+st(Q,Zt),Dt+=ut(Q,St,ct,Pt,xt);else if(Zt=T(j),typeof Zt=="function")for(j=Zt.call(j),Zt=0;!(Q=j.next()).done;)Q=Q.value,Pt=Ct+st(Q,Zt++),Dt+=ut(Q,St,ct,Pt,xt);else if(Pt==="object"){if(typeof j.then=="function")return ut(Z(j),St,ct,Q,xt);throw St=String(j),Error("Objects are not valid as a React child (found: "+(St==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":St)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function et(j,St,ct){if(j==null)return j;var Q=[],xt=0;return ut(j,Q,"","",function(Pt){return St.call(ct,Pt,xt++)}),Q}function Rt(j){if(j._status===-1){var St=j._result,ct=St();ct.then(function(Q){(j._status===0||j._status===-1)&&(j._status=1,j._result=Q,ct.status===void 0&&(ct.status="fulfilled",ct.value=Q))},function(Q){(j._status===0||j._status===-1)&&(j._status=2,j._result=Q,ct.status===void 0&&(ct.status="rejected",ct.reason=Q))}),j._status===-1&&(j._status=0,j._result=ct)}if(j._status===1)return j._result.default;throw j._result}var bt=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var St=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(St))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function Ot(j){var St=B.T,ct={};ct.types=St!==null?St.types:null,B.T=ct;try{var Q=j(),xt=B.S;xt!==null&&xt(ct,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(O,bt)}catch(Pt){bt(Pt)}finally{St!==null&&ct.types!==null&&(St.types=ct.types),B.T=St}}function le(j){var St=B.T;if(St!==null){var ct=St.types;ct===null?St.types=[j]:ct.indexOf(j)===-1&&ct.push(j)}else Ot(le.bind(null,j))}var ye={map:et,forEach:function(j,St,ct){et(j,function(){St.apply(this,arguments)},ct)},count:function(j){var St=0;return et(j,function(){St++}),St},toArray:function(j){return et(j,function(St){return St})||[]},only:function(j){if(!$(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return xe.Activity=m,xe.Children=ye,xe.Component=L,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=C,xe.StrictMode=r,xe.Suspense=v,xe.ViewTransition=g,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,xe.__COMPILER_RUNTIME={__proto__:null,c:function(j){return B.H.useMemoCache(j)}},xe.addTransitionType=le,xe.cache=function(j){return function(){return j.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(j,St,ct){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Q=S({},j.props),xt=j.key;if(St!=null)for(Pt in St.key!==void 0&&(xt=""+St.key),St)!N.call(St,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&St.ref===void 0||(Q[Pt]=St[Pt]);var Pt=arguments.length-2;if(Pt===1)Q.children=ct;else if(1<Pt){for(var Dt=Array(Pt),Ct=0;Ct<Pt;Ct++)Dt[Ct]=arguments[Ct+2];Q.children=Dt}return R(j.type,xt,Q)},xe.createContext=function(j){return j={$$typeof:d,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},xe.createElement=function(j,St,ct){var Q,xt={},Pt=null;if(St!=null)for(Q in St.key!==void 0&&(Pt=""+St.key),St)N.call(St,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(xt[Q]=St[Q]);var Dt=arguments.length-2;if(Dt===1)xt.children=ct;else if(1<Dt){for(var Ct=Array(Dt),Zt=0;Zt<Dt;Zt++)Ct[Zt]=arguments[Zt+2];xt.children=Ct}if(j&&j.defaultProps)for(Q in Dt=j.defaultProps,Dt)xt[Q]===void 0&&(xt[Q]=Dt[Q]);return R(j,Pt,xt)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(j){return{$$typeof:h,render:j}},xe.isValidElement=$,xe.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:Rt}},xe.memo=function(j,St){return{$$typeof:p,type:j,compare:St===void 0?null:St}},xe.startTransition=Ot,xe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},xe.use=function(j){return B.H.use(j)},xe.useActionState=function(j,St,ct){return B.H.useActionState(j,St,ct)},xe.useCallback=function(j,St){return B.H.useCallback(j,St)},xe.useContext=function(j){return B.H.useContext(j)},xe.useDebugValue=function(){},xe.useDeferredValue=function(j,St){return B.H.useDeferredValue(j,St)},xe.useEffect=function(j,St){return B.H.useEffect(j,St)},xe.useEffectEvent=function(j){return B.H.useEffectEvent(j)},xe.useId=function(){return B.H.useId()},xe.useImperativeHandle=function(j,St,ct){return B.H.useImperativeHandle(j,St,ct)},xe.useInsertionEffect=function(j,St){return B.H.useInsertionEffect(j,St)},xe.useLayoutEffect=function(j,St){return B.H.useLayoutEffect(j,St)},xe.useMemo=function(j,St){return B.H.useMemo(j,St)},xe.useOptimistic=function(j,St){return B.H.useOptimistic(j,St)},xe.useReducer=function(j,St,ct){return B.H.useReducer(j,St,ct)},xe.useRef=function(j){return B.H.useRef(j)},xe.useState=function(j){return B.H.useState(j)},xe.useSyncExternalStore=function(j,St,ct){return B.H.useSyncExternalStore(j,St,ct)},xe.useTransition=function(){return B.H.useTransition()},xe.version="19.3.1",xe}var T_;function tm(){return T_||(T_=1,xh.exports=vM()),xh.exports}var kt=tm();const _M=Yx(kt);var yh={exports:{}},pl={},Sh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function xM(){return b_||(b_=1,(function(o){function e(Z,ut){var et=Z.length;Z.push(ut);t:for(;0<et;){var Rt=et-1>>>1,bt=Z[Rt];if(0<l(bt,ut))Z[Rt]=ut,Z[et]=bt,et=Rt;else break t}}function i(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var ut=Z[0],et=Z.pop();if(et!==ut){Z[0]=et;t:for(var Rt=0,bt=Z.length,Ot=bt>>>1;Rt<Ot;){var le=2*(Rt+1)-1,ye=Z[le],j=le+1,St=Z[j];if(0>l(ye,et))j<bt&&0>l(St,ye)?(Z[Rt]=St,Z[j]=et,Rt=j):(Z[Rt]=ye,Z[le]=et,Rt=le);else if(j<bt&&0>l(St,et))Z[Rt]=St,Z[j]=et,Rt=j;else break t}}return ut}function l(Z,ut){var et=Z.sortIndex-ut.sortIndex;return et!==0?et:Z.id-ut.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var v=[],p=[],y=1,m=null,g=3,E=!1,T=!1,D=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(Z){for(var ut=i(p);ut!==null;){if(ut.callback===null)r(p);else if(ut.startTime<=Z)r(p),ut.sortIndex=ut.expirationTime,e(v,ut);else break;ut=i(p)}}function k(Z){if(D=!1,C(Z),!T)if(i(v)!==null)T=!0,P||(P=!0,$());else{var ut=i(p);ut!==null&&st(k,ut.startTime-Z)}}var P=!1,O=-1,B=5,N=-1;function R(){return S?!0:!(o.unstable_now()-N<B)}function H(){if(S=!1,P){var Z=o.unstable_now();N=Z;var ut=!0;try{t:{T=!1,D&&(D=!1,L(O),O=-1),E=!0;var et=g;try{e:{for(C(Z),m=i(v);m!==null&&!(m.expirationTime>Z&&R());){var Rt=m.callback;if(typeof Rt=="function"){m.callback=null,g=m.priorityLevel;var bt=Rt(m.expirationTime<=Z);if(Z=o.unstable_now(),typeof bt=="function"){m.callback=bt,C(Z),ut=!0;break e}m===i(v)&&r(v),C(Z)}else r(v);m=i(v)}if(m!==null)ut=!0;else{var Ot=i(p);Ot!==null&&st(k,Ot.startTime-Z),ut=!1}}break t}finally{m=null,g=et,E=!1}ut=void 0}}finally{ut?$():P=!1}}}var $;if(typeof z=="function")$=function(){z(H)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,dt=vt.port2;vt.port1.onmessage=H,$=function(){dt.postMessage(null)}}else $=function(){x(H,0)};function st(Z,ut){O=x(function(){Z(o.unstable_now())},ut)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var ut=3;break;default:ut=g}var et=g;g=ut;try{return Z()}finally{g=et}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(Z,ut){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var et=g;g=Z;try{return ut()}finally{g=et}},o.unstable_scheduleCallback=function(Z,ut,et){var Rt=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Rt+et:Rt):et=Rt,Z){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=et+bt,Z={id:y++,callback:ut,priorityLevel:Z,startTime:et,expirationTime:bt,sortIndex:-1},et>Rt?(Z.sortIndex=et,e(p,Z),i(v)===null&&Z===i(p)&&(D?(L(O),O=-1):D=!0,st(k,et-Rt))):(Z.sortIndex=bt,e(v,Z),T||E||(T=!0,P||(P=!0,$()))),Z},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(Z){var ut=g;return function(){var et=g;g=ut;try{return Z.apply(this,arguments)}finally{g=et}}}})(Mh)),Mh}var A_;function yM(){return A_||(A_=1,Sh.exports=xM()),Sh.exports}var Eh={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function SM(){if(R_)return qn;R_=1;var o=tm();function e(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(y,m,g){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:y,containerInfo:m,implementation:g}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,qn.browser=function(y){return{$$typeof:f,_reason:y}},qn.createPortal=function(y,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return h(y,m,null,g)},qn.flushSync=function(y){var m=v.T,g=r.p;try{if(v.T=null,r.p=2,y)return y()}finally{v.T=m,r.p=g,r.d.f()}},qn.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(y,m))},qn.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},qn.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var g=m.as,E=p(g,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:D}):g==="script"&&r.d.X(y,{crossOrigin:E,integrity:T,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},qn.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);r.d.M(y,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(y)},qn.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,E=p(g,m.crossOrigin);r.d.L(y,g,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},qn.preloadModule=function(y,m){if(typeof y=="string")if(m){var g=p(m.as,m.crossOrigin);r.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(y)},qn.requestFormReset=function(y){r.d.r(y)},qn.unstable_batchedUpdates=function(y,m){return y(m)},qn.useFormState=function(y,m,g){return v.H.useFormState(y,m,g)},qn.useFormStatus=function(){return v.H.useHostTransitionStatus()},qn.version="19.3.1",qn}var C_;function Zx(){if(C_)return Eh.exports;C_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Eh.exports=SM(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function MM(){if(w_)return pl;w_=1;var o=yM(),e=tm(),i=Zx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return v(c),t;if(u===s)return v(c),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=u;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,s=u;break}if(A===s){_=!0,s=c,a=u;break}A=A.sibling}if(!_){for(A=u.child;A;){if(A===a){_=!0,a=u,s=c;break}if(A===s){_=!0,s=u,a=c;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,s,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,s,c,u))return!0;t=t.sibling}return!1}function g(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=g(t);return a===null||D(n,t,a.child,{foundSelf:!1}),n}function D(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(t,n,a.child,s))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,L=null;function z(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(x=t),!0):!1}function k(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function P(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var u=n;u;u=a(u))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,B=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),st=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),le=Symbol.for("react.legacy_hidden"),ye=Symbol.for("react.memo_cache_sentinel"),j=Symbol.for("react.view_transition"),St=Symbol.for("react.recoverable"),ct=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case vt:return"Profiler";case $:return"StrictMode";case ut:return"Suspense";case et:return"SuspenseList";case Ot:return"Activity";case j:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case st:return t.displayName||"Context";case dt:return(t._context.displayName||"Context")+".Consumer";case Z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rt:return n=t.displayName||null,n!==null?n:Pt(t.type)||"Memo";case bt:n=t._payload,t=t._init;try{return Pt(t(n))}catch{}}return null}var Dt=Array.isArray,Ct=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Zt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},Ee=[],te=-1;function ie(t){return{current:t}}function Bt(t){0>te||(t.current=Ee[te],Ee[te]=null,te--)}function $t(t,n){te++,Ee[te]=t.current,t.current=n}var jt=ie(null),he=ie(null),yt=ie(null),It=ie(null);function w(t,n){switch($t(yt,n),$t(he,t),$t(jt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dv(n),t=Nv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Bt(jt),$t(jt,t)}function b(){Bt(jt),Bt(he),Bt(yt)}function q(t){var n=t.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,$t(It,t)),n=jt.current;var a=Nv(n,t.type);n!==a&&($t(he,t),$t(jt,a))}function rt(t){he.current===t&&(Bt(jt),Bt(he)),It.current===t&&(Bt(It),kr._currentValue=V)}var Mt,_t;function Ut(t){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+_t}var At=!1;function Ft(t,n){if(!t||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(Yt){var tt=Yt}Reflect.construct(t,[],Tt)}else{try{Tt.call()}catch(Yt){tt=Yt}Tt=!1;try{var pt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Tt=!0,new t}finally{Tt&&(pt!==void 0?Object.defineProperty(t.prototype,"props",pt):delete t.prototype.props)}}}else{try{throw Error()}catch(Yt){tt=Yt}(Tt=t())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(Yt){if(Yt&&tt&&typeof Yt.stack=="string")return[Yt.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),_=u[0],A=u[1];if(_&&A){var G=_.split(`
`),at=A.split(`
`);for(c=s=0;s<G.length&&!G[s].includes("DetermineComponentFrameRoot");)s++;for(;c<at.length&&!at[c].includes("DetermineComponentFrameRoot");)c++;if(s===G.length||c===at.length)for(s=G.length-1,c=at.length-1;1<=s&&0<=c&&G[s]!==at[c];)c--;for(;1<=s&&0<=c;s--,c--)if(G[s]!==at[c]){if(s!==1||c!==1)do if(s--,c--,0>c||G[s]!==at[c]){var gt=`
`+G[s].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=s&&0<=c);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ut(a):""}function se(t,n){switch(t.tag){case 26:case 27:case 5:return Ut(t.type);case 16:return Ut("Lazy");case 13:return t.child!==n&&n!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return Ft(t.type,!1);case 11:return Ft(t.type.render,!1);case 1:return Ft(t.type,!0);case 31:return Ut("Activity");case 30:return Ut("ViewTransition");default:return""}}function Lt(t){try{var n="",a=null;do n+=se(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Wt=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,ee=o.unstable_cancelCallback,Vt=o.unstable_shouldYield,ve=o.unstable_requestPaint,Y=o.unstable_now,zt=o.unstable_getCurrentPriorityLevel,F=o.unstable_ImmediatePriority,X=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,K=o.unstable_LowPriority,I=o.unstable_IdlePriority,wt=o.log,Xt=o.unstable_setDisableYieldValue,Ht=null,Kt=null;function oe(t){if(typeof wt=="function"&&Xt(t),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(Ht,t)}catch{}}var _e=Math.clz32?Math.clz32:Oe,Ae=Math.log,me=Math.LN2;function Oe(t){return t>>>=0,t===0?32:31-(Ae(t)/me|0)|0}var fn=256,an=262144,tn=4194304;function rn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Sn(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,u=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~u,s!==0?c=rn(s):(_&=A,_!==0?c=rn(_):a||(a=A&~t,a!==0&&(c=rn(a))))):(A=s&~u,A!==0?c=rn(A):_!==0?c=rn(_):a||(a=s&~t,a!==0&&(c=rn(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Dn(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dn(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-_e(a),c=1<<s;n|=t[s],a&=~c}return n}function To(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ia(){var t=tn;return tn<<=1,(tn&62914560)===0&&(tn=4194304),t}function Hn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ai(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ba(t,n,a,s,c,u){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,G=t.expirationTimes,at=t.hiddenUpdates;for(a=_&~a;0<a;){var gt=31-_e(a),Tt=1<<gt;A[gt]=0,G[gt]=-1;var tt=at[gt];if(tt!==null)for(at[gt]=null,gt=0;gt<tt.length;gt++){var pt=tt[gt];pt!==null&&(pt.lane&=-536870913)}a&=~Tt}s!==0&&U(t,s,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(_&~n))}function U(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-_e(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ot(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-_e(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function mt(t,n){var a=n&-n;return a=(a&42)!==0?1:ht(a),(a&(t.suspendedLanes|n))!==0?0:a}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nt(){var t=Zt.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function qt(t,n){var a=Zt.p;try{return Zt.p=t,n()}finally{Zt.p=a}}var Qt=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Qt,ae="__reactProps$"+Qt,pe="__reactContainer$"+Qt,fe="__reactEvents$"+Qt,we="__reactListeners$"+Qt,Ze="__reactHandles$"+Qt,hn="__reactResources$"+Qt,qe="__reactMarker$"+Qt,Ge="__reactLoad$"+Qt;function de(t){delete t[Gt],delete t[ae],delete t[we],delete t[Ze]}function We(t){var n;if(n=t[Gt])return n;for(var a=t.parentNode;a;){if(n=a[pe]||a[Gt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Yv(t);t!==null;){if(a=t[Gt])return a;t=Yv(t)}return n}t=a,a=t.parentNode}return null}function Re(t){if(t=t[Gt]||t[pe]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Nn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function di(t){var n=t[hn];return n||(n=t[hn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ve(t){t[qe]=!0}function Fa(t){t[Ge]=void 0}var on=new Set,Qn={};function Tn(t,n){gn(t,n),gn(t+"Capture",n)}function gn(t,n){for(Qn[t]=n,t=0;t<n.length;t++)on.add(n[t])}var Wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rr={},Ki={};function Uy(t){return Wt.call(Ki,t)?!0:Wt.call(rr,t)?!1:Wn.test(t)?Ki[t]=!0:(rr[t]=!0,!1)}var ke=!1;function gm(){var t=ke;return ke=!1,t}function zl(t,n,a){if(Uy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Pl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ma(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function hi(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ly(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,u.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wu(t){if(!t._valueTracker){var n=vm(t)?"checked":"value";t._valueTracker=Ly(t,n,""+t[n])}}function _m(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=vm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var Oy=/[\n"\\]/g;function Ri(t){return t.replace(Oy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yu(t,n,a,s,c,u,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+hi(n)):t.value!==""+hi(n)&&(t.value=""+hi(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Zu(t,hi(t.value)):Zu(t,hi(n)):a!=null?Zu(t,hi(a)):s!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+hi(A):t.removeAttribute("name")}function xm(t,n,a,s,c,u,_,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Wu(t);return}a=a!=null?""+hi(a):"",n=n!=null?""+hi(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Wu(t)}function Zu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function or(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+hi(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ym(t,n,a){if(n!=null&&(n=""+hi(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+hi(a):""}function Sm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=hi(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Wu(t)}function lr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||zy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Em(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",ke=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(Mm(t,c,s),ke=!0)}else for(var u in n)n.hasOwnProperty(u)&&Mm(t,u,n[u])}function Ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(t){return Iy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Qu=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cr=null,ur=null;function Tm(t){var n=Re(t);if(n&&(t=n.stateNode)){var a=t[ae]||null;t:switch(t=n.stateNode,n.type){case"input":if(Yu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ri(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[ae]||null;if(!c)throw Error(r(90));Yu(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&_m(s)}break t;case"textarea":ym(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&or(t,!!a.multiple,n,!1)}}}var $u=!1;function bm(t,n,a){if($u)return t(n,a);$u=!0;try{var s=t(n);return s}finally{if($u=!1,(cr!==null||ur!==null)&&(Ic(),cr&&(n=cr,t=ur,ur=cr=null,Tm(n),t)))for(n=0;n<t.length;n++)Tm(t[n])}}function bo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[ae]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=!1;if(ga)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){tf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{tf=!1}var Ha=null,ef=null,Bl=null;function Am(){if(Bl)return Bl;var t,n=ef,a=n.length,s,c="value"in Ha?Ha.value:Ha.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[u-s];s++);return Bl=c.slice(t,1<s?1-s:void 0)}function Fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function Rm(){return!1}function Jn(t){function n(a,s,c,u,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Hl:Rm,this.isPropagationStopped=Rm,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Jn(Ga),Ro=O({},Ga,{view:0,detail:0}),By=Jn(Ro),nf,af,Co,Vl=O({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(nf=t.screenX-Co.screenX,af=t.screenY-Co.screenY):af=nf=0,Co=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:af}}),Cm=Jn(Vl),Fy=O({},Vl,{dataTransfer:0}),Hy=Jn(Fy),Gy=O({},Ro,{relatedTarget:0}),sf=Jn(Gy),Vy=O({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),ky=Jn(Vy),jy=O({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=Jn(jy),qy=O({},Ga,{data:0}),wm=Jn(qy),Wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Zy[t])?!!n[t]:!1}function rf(){return Ky}var Qy=O({},Ro,{key:function(t){if(t.key){var n=Wy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jy=Jn(Qy),$y=O({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=Jn($y),t1=O({},Ga,{submitter:0}),e1=Jn(t1),n1=O({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),i1=Jn(n1),a1=O({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=Jn(a1),r1=O({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=Jn(r1),l1=O({},Ga,{newState:0,oldState:0,source:0}),c1=Jn(l1),u1=[9,13,27,32],of=ga&&"CompositionEvent"in window,wo=null;ga&&"documentMode"in document&&(wo=document.documentMode);var f1=ga&&"TextEvent"in window&&!wo,Nm=ga&&(!of||wo&&8<wo&&11>=wo),Um=" ",Lm=!1;function Om(t,n){switch(t){case"keyup":return u1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function d1(t,n){switch(t){case"compositionend":return zm(n);case"keypress":return n.which!==32?null:(Lm=!0,Um);case"textInput":return t=n.data,t===Um&&Lm?null:t;default:return null}}function h1(t,n){if(fr)return t==="compositionend"||!of&&Om(t,n)?(t=Am(),Bl=ef=Ha=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nm&&n.locale!=="ko"?null:n.data;default:return null}}var p1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!p1[t.type]:n==="textarea"}function Im(t,n,a,s){cr?ur?ur.push(s):ur=[s]:cr=s,n=kc(n,"onChange"),0<n.length&&(a=new Gl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Do=null,No=null;function m1(t){Tv(t,0)}function kl(t){var n=Nn(t);if(_m(n))return t}function Bm(t,n){if(t==="change")return n}var Fm=!1;if(ga){var lf;if(ga){var cf="oninput"in document;if(!cf){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),cf=typeof Hm.oninput=="function"}lf=cf}else lf=!1;Fm=lf&&(!document.documentMode||9<document.documentMode)}function Gm(){Do&&(Do.detachEvent("onpropertychange",Vm),No=Do=null)}function Vm(t){if(t.propertyName==="value"&&kl(No)){var n=[];Im(n,No,t,Ju(t)),bm(m1,n)}}function g1(t,n,a){t==="focusin"?(Gm(),Do=n,No=a,Do.attachEvent("onpropertychange",Vm)):t==="focusout"&&Gm()}function v1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(No)}function _1(t,n){if(t==="click")return kl(n)}function x1(t,n){if(t==="input"||t==="change")return kl(n)}function y1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var pi=typeof Object.is=="function"?Object.is:y1;function Uo(t,n){if(pi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Wt.call(n,c)||!pi(t[c],n[c]))return!1}return!0}function uf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jm(t,n){var a=km(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=km(a)}}function Xm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=uf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=uf(t.document)}return n}function ff(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var S1=ga&&"documentMode"in document&&11>=document.documentMode,dr=null,df=null,Lo=null,hf=!1;function Wm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hf||dr==null||dr!==uf(s)||(s=dr,"selectionStart"in s&&ff(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Lo&&Uo(Lo,s)||(Lo=s,s=kc(df,"onSelect"),0<s.length&&(n=new Gl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=dr)))}function Es(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var hr={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionrun:Es("Transition","TransitionRun"),transitionstart:Es("Transition","TransitionStart"),transitioncancel:Es("Transition","TransitionCancel"),transitionend:Es("Transition","TransitionEnd")},pf={},Ym={};ga&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Ts(t){if(pf[t])return pf[t];if(!hr[t])return t;var n=hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ym)return pf[t]=n[a];return t}var Zm=Ts("animationend"),Km=Ts("animationiteration"),Qm=Ts("animationstart"),M1=Ts("transitionrun"),E1=Ts("transitionstart"),T1=Ts("transitioncancel"),Jm=Ts("transitionend"),$m=new Map,mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mf.push("scrollEnd");function Fi(t,n){$m.set(t,n),Tn(n,[t])}var b1=0;function va(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=ki.identifierPrefix;var a=b1++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function t0(t){if(t==null||typeof t=="string")return t;var n=null,a=Lr;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function _a(t,n){return t=t0(t),n=t0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ci=[],pr=0,gf=0;function Xl(){for(var t=pr,n=gf=pr=0;n<t;){var a=Ci[n];Ci[n++]=null;var s=Ci[n];Ci[n++]=null;var c=Ci[n];Ci[n++]=null;var u=Ci[n];if(Ci[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}u!==0&&e0(a,c,u)}}function ql(t,n,a,s){Ci[pr++]=t,Ci[pr++]=n,Ci[pr++]=a,Ci[pr++]=s,gf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function vf(t,n,a,s){return ql(t,n,a,s),Wl(t)}function bs(t,n){return ql(t,null,null,n),Wl(t)}function e0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-_e(a),t=u.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),u):null}function Wl(t){if(50<el)throw el=0,Pc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var mr={};function A1(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,s){return new A1(t,n,a,s)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function n0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yl(t,n,a,s,c,u){var _=0;if(s=t,typeof s=="function")_f(s)&&(_=1);else if(typeof s=="string")_=tM(t,a,jt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ot:return t=ri(31,a,n,c),t.elementType=Ot,t.lanes=u,t;case H:return As(a.children,c,u,n);case $:_=8,c|=24;break;case vt:return t=ri(12,a,n,c|2),t.elementType=vt,t.lanes=u,t;case ut:return t=ri(13,a,n,c),t.elementType=ut,t.lanes=u,t;case et:return t=ri(19,a,n,c),t.elementType=et,t.lanes=u,t;case le:case j:return t=c|32,t=ri(30,a,n,t),t.elementType=j,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case st:_=10;break t;case dt:_=9;break t;case Z:_=11;break t;case Rt:_=14;break t;case bt:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ri(_,a,n,c),n.elementType=t,n.type=s,n.lanes=u,n}function As(t,n,a,s){return t=ri(7,t,s,n),t.lanes=a,t}function xf(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function i0(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function yf(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var a0=new WeakMap;function wi(t,n){if(typeof t=="object"&&t!==null){var a=a0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Lt(n)},a0.set(t,n),n)}return{value:t,source:n,stack:Lt(n)}}var gr=[],vr=0,Zl=null,Oo=0,Di=[],Ni=0,Va=null,Ji=1,$i="";function ya(t,n){gr[vr++]=Oo,gr[vr++]=Zl,Zl=t,Oo=n}function s0(t,n,a){Di[Ni++]=Ji,Di[Ni++]=$i,Di[Ni++]=Va,Va=t;var s=Ji;t=$i;var c=32-_e(s)-1;s&=~(1<<c),a+=1;var u=32-_e(n)+c;if(30<u){var _=c-c%5;u=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ji=1<<32-_e(n)+c|a<<c|s,$i=u+t}else Ji=1<<u|a<<c|s,$i=t}function Kl(t){t.return!==null&&(ya(t,1),s0(t,1,0))}function Sf(t){for(;t===Zl;)Zl=gr[--vr],gr[vr]=null,Oo=gr[--vr],gr[vr]=null;for(;t===Va;)Va=Di[--Ni],Di[Ni]=null,$i=Di[--Ni],Di[Ni]=null,Ji=Di[--Ni],Di[Ni]=null}function r0(t,n){Di[Ni++]=Ji,Di[Ni++]=$i,Di[Ni++]=Va,Ji=n.id,$i=n.overflow,Va=t}var zn=null,ln=null,Ce=!1,ka=null,Ui=!1,Mf=Error(r(519));function ja(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(wi(n,t)),Mf}function o0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Gt]=t,n[ae]=s,a){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)Ue(il[a],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":Ue("invalid",n),xm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ue("invalid",n);break;case"textarea":Ue("invalid",n),Sm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cv(n.textContent,a)?(s.popover!=null&&(Ue("beforetoggle",n),Ue("toggle",n)),s.onScroll!=null&&Ue("scroll",n),s.onScrollEnd!=null&&Ue("scrollend",n),s.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||ja(t,!0)}function Ql(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:zn=zn.return}}function _r(t){if(t!==zn)return!1;if(!Ce)return Ql(t),Ce=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jd(t.type,t.memoizedProps)),a=!a),a&&ln&&ja(t),Ql(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ln=Wv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ln=Wv(t)}else n===27?(n=ln,rs(t.type)?(t=oh,oh=null,ln=t):ln=n):ln=zn?Oi(t.stateNode.nextSibling):null;return!0}function Rs(){ln=zn=null,Ce=!1}function Ef(){var t=ka;return t!==null&&(ci===null?ci=t:ci.push.apply(ci,t),ka=null),t}function zo(t){ka===null?ka=[t]:ka.push(t)}var Tf=ie(null),Cs=null,Sa=null;function Xa(t,n,a){$t(Tf,n._currentValue),n._currentValue=a}function Ma(t){t._currentValue=Tf.current,Bt(Tf)}function Jl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function bf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var _=c.child;u=u.firstContext;t:for(;u!==null;){var A=u;u=c;for(var G=0;G<n.length;G++)if(A.context===n[G]){u.lanes|=a,A=u.alternate,A!==null&&(A.lanes|=a),Jl(u.return,a,t),s||(_=null);break t}u=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,u=_.alternate,u!==null&&(u.lanes|=a),Jl(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),Jl(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function ws(t,n,a,s){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=c.type;pi(c.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(c===It.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(kr):t=[kr])}c=c.return}return t!==null&&bf(n,t,a,s),n.flags|=262144,t!==null}function $l(t){for(t=t.firstContext;t!==null;){if(!pi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){Cs=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return l0(Cs,t)}function tc(t,n){return Cs===null&&Ds(t),l0(t,n)}function l0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(r(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var R1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},C1=o.unstable_scheduleCallback,w1=o.unstable_NormalPriority,bn={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Af(){return{controller:new R1,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&C1(w1,function(){t.controller.abort()})}function c0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Io=null;function D1(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Bo=null,Rf=0,Ns=0,xr=null;function N1(t,n){if(Bo===null){var a=Bo=[];Rf=0,Ns=kd(),xr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Rf++,n.then(u0,u0),n}function u0(){if(--Rf===0&&(Io=null,Bo!==null)){xr!==null&&(xr.status="fulfilled");var t=Bo;Bo=null,Ns=0,xr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function U1(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var f0=Ct.S;Ct.S=function(t,n){if(iv=Y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&N1(t,n),Io!==null)for(var a=Ir;a!==null;)c0(a,Io),a=a.next;if(a=t.types,a!==null){for(var s=Ir;s!==null;)c0(s,a),s=s.next;if(Ns!==0){s=Io,s===null&&(s=Io=[]);for(var c=0;c<a.length;c++){var u=a[c];s.indexOf(u)===-1&&s.push(u)}}}f0!==null&&f0(t,n)};var Us=ie(null);function Cf(){var t=Us.current;return t!==null?t:sn.pooledCache}function ec(t,n){n===null?$t(Us,Us.current):$t(Us,n.pool)}function d0(){var t=Cf();return t===null?null:{parent:bn._currentValue,pool:t}}var yr=Error(r(460)),wf=Error(r(474)),nc=Error(r(542)),ic={then:function(){}};function h0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function p0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,g0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,g0(t),t}throw Os=n,yr}}function Ls(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,yr):a}}var Os=null;function m0(){if(Os===null)throw Error(r(459));var t=Os;return Os=null,t}function g0(t){if(t===yr||t===nc)throw Error(r(483))}var Sr=null,Fo=0;function ac(t){var n=Fo;return Fo+=1,Sr===null&&(Sr=[]),p0(Sr,t,n)}function qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sc(t,n){throw n.$$typeof===B?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function v0(t){function n(it,W){if(t){var ft=it.deletions;ft===null?(it.deletions=[W],it.flags|=16):ft.push(W)}}function a(it,W){if(!t)return null;for(;W!==null;)n(it,W),W=W.sibling;return null}function s(it){for(var W=new Map;it!==null;)it.key===null?W.set(it.index,it):W.set(it.key,it),it=it.sibling;return W}function c(it,W){return it=xa(it,W),it.index=0,it.sibling=null,it}function u(it,W,ft){return it.index=ft,t?(ft=it.alternate,ft!==null?(ft=ft.index,ft<W?(it.flags|=2,W):ft):(it.flags|=134217730,W)):(it.flags|=1048576,W)}function _(it){return t&&it.alternate===null&&(it.flags|=134217730),it}function A(it,W,ft,Et){return W===null||W.tag!==6?(W=xf(ft,it.mode,Et),W.return=it,W):(W=c(W,ft),W.return=it,W)}function G(it,W,ft,Et){var ne=ft.type;return ne===H?(it=gt(it,W,ft.props.children,Et,ft.key),qa(it,ft),it):W!==null&&(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===bt&&Ls(ne)===W.type)?(W=c(W,ft.props),qa(W,ft),W.return=it,W):(W=Yl(ft.type,ft.key,ft.props,null,it.mode,Et),qa(W,ft),W.return=it,W)}function at(it,W,ft,Et){return W===null||W.tag!==4||W.stateNode.containerInfo!==ft.containerInfo||W.stateNode.implementation!==ft.implementation?(W=yf(ft,it.mode,Et),W.return=it,W):(W=c(W,ft.children||[]),W.return=it,W)}function gt(it,W,ft,Et,ne){return W===null||W.tag!==7?(W=As(ft,it.mode,Et,ne),W.return=it,W):(W=c(W,ft),W.return=it,W)}function Tt(it,W,ft){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=xf(""+W,it.mode,ft),W.return=it,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return ft=Yl(W.type,W.key,W.props,null,it.mode,ft),qa(ft,W),ft.return=it,ft;case R:return W=yf(W,it.mode,ft),W.return=it,W;case bt:return W=Ls(W),Tt(it,W,ft)}if(Dt(W)||Q(W))return W=As(W,it.mode,ft,null),W.return=it,W;if(typeof W.then=="function")return Tt(it,ac(W),ft);if(W.$$typeof===st)return Tt(it,tc(it,W),ft);sc(it,W)}return null}function tt(it,W,ft,Et){var ne=W!==null?W.key:null;if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return ne!==null?null:A(it,W,""+ft,Et);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case N:return ft.key===ne?G(it,W,ft,Et):null;case R:return ft.key===ne?at(it,W,ft,Et):null;case bt:return ft=Ls(ft),tt(it,W,ft,Et)}if(Dt(ft)||Q(ft))return ne!==null?null:gt(it,W,ft,Et,null);if(typeof ft.then=="function")return tt(it,W,ac(ft),Et);if(ft.$$typeof===st)return tt(it,W,tc(it,ft),Et);sc(it,ft)}return null}function pt(it,W,ft,Et,ne){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return it=it.get(ft)||null,A(W,it,""+Et,ne);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case N:return it=it.get(Et.key===null?ft:Et.key)||null,G(W,it,Et,ne);case R:return it=it.get(Et.key===null?ft:Et.key)||null,at(W,it,Et,ne);case bt:return Et=Ls(Et),pt(it,W,ft,Et,ne)}if(Dt(Et)||Q(Et))return it=it.get(ft)||null,gt(W,it,Et,ne,null);if(typeof Et.then=="function")return pt(it,W,ft,ac(Et),ne);if(Et.$$typeof===st)return pt(it,W,ft,tc(W,Et),ne);sc(W,Et)}return null}function Yt(it,W,ft,Et){for(var ne=null,Pe=null,ue=W,ge=W=0,Cn=null;ue!==null&&ge<ft.length;ge++){ue.index>ge?(Cn=ue,ue=null):Cn=ue.sibling;var He=tt(it,ue,ft[ge],Et);if(He===null){ue===null&&(ue=Cn);break}t&&ue&&He.alternate===null&&n(it,ue),W=u(He,W,ge),Pe===null?ne=He:Pe.sibling=He,Pe=He,ue=Cn}if(ge===ft.length)return a(it,ue),Ce&&ya(it,ge),ne;if(ue===null){for(;ge<ft.length;ge++)ue=Tt(it,ft[ge],Et),ue!==null&&(W=u(ue,W,ge),Pe===null?ne=ue:Pe.sibling=ue,Pe=ue);return Ce&&ya(it,ge),ne}for(ue=s(ue);ge<ft.length;ge++)Cn=pt(ue,it,ge,ft[ge],Et),Cn!==null&&(t&&(He=Cn.alternate,He!==null&&ue.delete(He.key===null?ge:He.key)),W=u(Cn,W,ge),Pe===null?ne=Cn:Pe.sibling=Cn,Pe=Cn);return t&&ue.forEach(function(fs){return n(it,fs)}),Ce&&ya(it,ge),ne}function re(it,W,ft,Et){if(ft==null)throw Error(r(151));for(var ne=null,Pe=null,ue=W,ge=W=0,Cn=null,He=ft.next();ue!==null&&!He.done;ge++,He=ft.next()){ue.index>ge?(Cn=ue,ue=null):Cn=ue.sibling;var fs=tt(it,ue,He.value,Et);if(fs===null){ue===null&&(ue=Cn);break}t&&ue&&fs.alternate===null&&n(it,ue),W=u(fs,W,ge),Pe===null?ne=fs:Pe.sibling=fs,Pe=fs,ue=Cn}if(He.done)return a(it,ue),Ce&&ya(it,ge),ne;if(ue===null){for(;!He.done;ge++,He=ft.next())He=Tt(it,He.value,Et),He!==null&&(W=u(He,W,ge),Pe===null?ne=He:Pe.sibling=He,Pe=He);return Ce&&ya(it,ge),ne}for(ue=s(ue);!He.done;ge++,He=ft.next())He=pt(ue,it,ge,He.value,Et),He!==null&&(t&&(Cn=He.alternate,Cn!==null&&ue.delete(Cn.key===null?ge:Cn.key)),W=u(He,W,ge),Pe===null?ne=He:Pe.sibling=He,Pe=He);return t&&ue.forEach(function(dM){return n(it,dM)}),Ce&&ya(it,ge),ne}function Me(it,W,ft,Et){if(typeof ft=="object"&&ft!==null&&ft.type===H&&ft.key===null&&ft.props.ref===void 0&&(ft=ft.props.children),typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case N:t:{for(var ne=ft.key;W!==null;){if(W.key===ne){if(ne=ft.type,ne===H){if(W.tag===7){a(it,W.sibling),Et=c(W,ft.props.children),qa(Et,ft),Et.return=it,it=Et;break t}}else if(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===bt&&Ls(ne)===W.type){a(it,W.sibling),Et=c(W,ft.props),qa(Et,ft),Et.return=it,it=Et;break t}a(it,W);break}else n(it,W);W=W.sibling}ft.type===H?(Et=As(ft.props.children,it.mode,Et,ft.key),qa(Et,ft),Et.return=it,it=Et):(Et=Yl(ft.type,ft.key,ft.props,null,it.mode,Et),qa(Et,ft),Et.return=it,it=Et)}return _(it);case R:t:{for(ne=ft.key;W!==null;){if(W.key===ne)if(W.tag===4&&W.stateNode.containerInfo===ft.containerInfo&&W.stateNode.implementation===ft.implementation){a(it,W.sibling),Et=c(W,ft.children||[]),Et.return=it,it=Et;break t}else{a(it,W);break}else n(it,W);W=W.sibling}Et=yf(ft,it.mode,Et),Et.return=it,it=Et}return _(it);case bt:return ft=Ls(ft),Me(it,W,ft,Et)}if(Dt(ft))return Yt(it,W,ft,Et);if(Q(ft)){if(ne=Q(ft),typeof ne!="function")throw Error(r(150));return ft=ne.call(ft),re(it,W,ft,Et)}if(typeof ft.then=="function")return Me(it,W,ac(ft),Et);if(ft.$$typeof===st)return Me(it,W,tc(it,ft),Et);sc(it,ft)}return typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint"?(ft=""+ft,W!==null&&W.tag===6?(a(it,W.sibling),Et=c(W,ft),Et.return=it,it=Et):(a(it,W),Et=xf(ft,it.mode,Et),Et.return=it,it=Et),_(it)):a(it,W)}return function(it,W,ft,Et){try{Fo=0;var ne=Me(it,W,ft,Et);return Sr=null,ne}catch(ue){if(ue===yr||ue===nc)throw ue;var Pe=ri(29,ue,null,it.mode);return Pe.lanes=Et,Pe.return=it,Pe}finally{}}}var zs=v0(!0),_0=v0(!1),Wa=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ye&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Wl(t),e0(t,null,a),n}return ql(t,s,n,a),Wl(t)}function Ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ot(t,a)}}function Uf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=_:u=u.next=_,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lf=!1;function Go(){if(Lf){var t=xr;if(t!==null)throw t}}function Vo(t,n,a,s){Lf=!1;var c=t.updateQueue;Wa=!1;var u=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var G=A,at=G.next;G.next=null,_===null?u=at:_.next=at,_=G;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==_&&(A===null?gt.firstBaseUpdate=at:A.next=at,gt.lastBaseUpdate=G))}if(u!==null){var Tt=c.baseState;_=0,gt=at=G=null,A=u;do{var tt=A.lane&-536870913,pt=tt!==A.lane;if(pt?(ze&tt)===tt:(s&tt)===tt){tt!==0&&tt===Ns&&(Lf=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Yt=t,re=A;tt=n;var Me=a;switch(re.tag){case 1:if(Yt=re.payload,typeof Yt=="function"){Tt=Yt.call(Me,Tt,tt);break t}Tt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=re.payload,tt=typeof Yt=="function"?Yt.call(Me,Tt,tt):Yt,tt==null)break t;Tt=O({},Tt,tt);break t;case 2:Wa=!0}}tt=A.callback,tt!==null&&(t.flags|=64,pt&&(t.flags|=8192),pt=c.callbacks,pt===null?c.callbacks=[tt]:pt.push(tt))}else pt={lane:tt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(at=gt=pt,G=Tt):gt=gt.next=pt,_|=tt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;pt=A,A=pt.next,pt.next=null,c.lastBaseUpdate=pt,c.shared.pending=null}}while(!0);gt===null&&(G=Tt),c.baseState=G,c.firstBaseUpdate=at,c.lastBaseUpdate=gt,u===null&&(c.shared.lanes=0),ns|=_,t.lanes=_,t.memoizedState=Tt}}function x0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function y0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)x0(a[t],n)}var Ka=ie(null),rc=ie(0);function S0(t,n){t=Ra,$t(rc,t),$t(Ka,n),Ra=t|n.baseLanes}function Of(){$t(rc,Ra),$t(Ka,Ka.current)}function zf(){Ra=rc.current,Bt(Ka),Bt(rc)}var Vn=ie(null),Yn=null;function Qa(t){var n=t.alternate;$t(kn,kn.current&1),$t(Vn,t),Yn===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(Yn=t)}function Pf(t){$t(kn,kn.current),$t(Vn,t),Yn===null&&(Yn=t)}function M0(t){t.tag===22?($t(kn,kn.current),$t(Vn,t),Yn===null&&(Yn=t)):Ja()}function Ja(){$t(kn,kn.current),$t(Vn,Vn.current)}function mi(t){Bt(Vn),Yn===t&&(Yn=null),Bt(kn)}var kn=ie(0);function ko(t,n){$t(Vn,Vn.current),$t(kn,n)}function If(t){Bt(kn),Bt(Vn),Yn===t&&(Yn=null)}function oc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sh(a)||rh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,Se=null,en=null,An=null,lc=!1,Mr=!1,Ps=!1,cc=0,jo=0,Er=null,L1=0;function vn(){throw Error(r(321))}function Bf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!pi(t[a],n[a]))return!1;return!0}function Ff(t,n,a,s,c,u){return Ea=u,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ct.H=t===null||t.memoizedState===null?sg:rg,Ps=!1,u=a(s,c),Ps=!1,Mr&&(u=T0(n,a,s,c)),E0(t),u}function E0(t){Ct.H=gc;var n=en!==null&&en.next!==null;if(Ea=0,An=en=Se=null,lc=!1,jo=0,Er=null,n)throw Error(r(300));t===null||Rn||(t=t.dependencies,t!==null&&$l(t)&&(Rn=!0))}function T0(t,n,a,s){Se=t;var c=0;do{if(Mr&&(Er=null),jo=0,Mr=!1,25<=c)throw Error(r(301));if(c+=1,An=en=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Ct.H=G1,u=n(a,s)}while(Mr);return u}function O1(){var t=Ct.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(Se.flags|=1024),n}function Hf(){var t=cc!==0;return cc=0,t}function Gf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vf(t){if(lc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}lc=!1}Ea=0,An=en=Se=null,Mr=!1,jo=cc=0,Er=null}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?Se.memoizedState=An=t:An=An.next=t,An}function Mn(){if(en===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var n=An===null?Se.memoizedState:An.next;if(n!==null)An=n,en=t;else{if(t===null)throw Se.alternate===null?Error(r(467)):Error(r(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},An===null?Se.memoizedState=An=t:An=An.next=t}return An}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=jo;return jo+=1,Er===null&&(Er=[]),t=p0(Er,t,n),n=Se,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,Ct.H=n===null||n.memoizedState===null?sg:rg),t}function fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===St)return;if(t.$$typeof===st)return Gn(t)}throw Error(r(438,String(t)))}function kf(t){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=uc(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=ye;return n.index++,a}function Ta(t,n){return typeof n=="function"?n(t):n}function dc(t){var n=Mn();return jf(n,en,t)}function jf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,u=s.pending;if(u!==null){if(c!==null){var _=c.next;c.next=u.next,u.next=_}n.baseQueue=c=u,s.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var A=_=null,G=null,at=n,gt=!1;do{var Tt=at.lane&-536870913;if(Tt!==at.lane?(ze&Tt)===Tt:(Ea&Tt)===Tt){var tt=at.revertLane;if(tt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Tt===Ns&&(gt=!0);else if((Ea&tt)===tt){at=at.next,tt===Ns&&(gt=!0);continue}else Tt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=Tt,_=u):G=G.next=Tt,Se.lanes|=tt,ns|=tt;Tt=at.action,Ps&&a(u,Tt),u=at.hasEagerState?at.eagerState:a(u,Tt)}else tt={lane:Tt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=tt,_=u):G=G.next=tt,Se.lanes|=Tt,ns|=Tt;at=at.next}while(at!==null&&at!==n);if(G===null?_=u:G.next=A,!pi(u,t.memoizedState)&&(Rn=!0,gt&&(a=xr,a!==null)))throw a;t.memoizedState=u,t.baseState=_,t.baseQueue=G,s.lastRenderedState=u}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Xf(t){var n=Mn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do u=t(u,_.action),_=_.next;while(_!==c);pi(u,n.memoizedState)||(Rn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function b0(t,n,a){var s=Se,c=Mn(),u=Ce;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!pi((en||c).memoizedState,a);if(_&&(c.memoizedState=a,Rn=!0),c=c.queue,Yf(C0.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||_||An!==null&&(An.memoizedState.tag&1)!==0,Tr(t?9:8,{destroy:void 0},R0.bind(null,s,c,a,n),null),t){if(s.flags|=2048,sn===null)throw Error(r(349));u||(Ea&127)!==0||A0(s,n,a)}return a}function A0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=uc(),Se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function R0(t,n,a,s){n.value=a,n.getSnapshot=s,w0(n)&&D0(t)}function C0(t,n,a){return a(function(){w0(n)&&D0(t)})}function w0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!pi(t,a)}catch{return!0}}function D0(t){var n=bs(t,2);n!==null&&ui(n,t,2)}function qf(t){var n=$n();if(typeof t=="function"){var a=t;if(t=a(),Ps){oe(!0);try{a()}finally{oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},n}function N0(t,n,a,s){return t.baseState=a,jf(t,en,typeof s=="function"?s:Ta)}function z1(t,n,a,s,c){if(mc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){u.listeners.push(_)}};Ct.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,U0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function U0(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var u=Ct.T,_={};_.types=u!==null?u.types:null,Ct.T=_;try{var A=a(c,s),G=Ct.S;G!==null&&G(_,A),L0(t,n,A)}catch(at){Wf(t,n,at)}finally{u!==null&&_.types!==null&&(u.types=_.types),Ct.T=u}}else try{u=a(c,s),L0(t,n,u)}catch(at){Wf(t,n,at)}}function L0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){O0(t,n,s)},function(s){return Wf(t,n,s)}):O0(t,n,a)}function O0(t,n,a){n.status="fulfilled",n.value=a,z0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,U0(t,a)))}function Wf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,z0(n),n=n.next;while(n!==s)}t.action=null}function z0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function P0(t,n){return n}function I0(t,n){if(Ce){var a=sn.formState;if(a!==null){t:{var s=Se;if(Ce){if(ln){e:{for(var c=ln,u=Ui;c.nodeType!==8;){if(!u){c=null;break e}if(c=Oi(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){ln=Oi(c.nextSibling),s=c.data==="F!";break t}}ja(s)}s=!1}s&&(n=a[0])}}return a=$n(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:n},a.queue=s,a=ng.bind(null,Se,s),s.dispatch=a,s=qf(!1),u=$f.bind(null,Se,!1,s.queue),s=$n(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=z1.bind(null,Se,c,u,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function B0(t){var n=Mn();return F0(n,en,t)}function F0(t,n,a){if(n=jf(t,n,P0)[0],t=dc(Ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xo(n)}catch(_){throw _===yr?nc:_}else s=n;n=Mn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,Tr(9,{destroy:void 0},P1.bind(null,c,a),null)),[s,u,t]}function P1(t,n){t.action=n}function H0(t){var n=Mn(),a=en;if(a!==null)return F0(n,a,t);Mn(),n=n.memoizedState,a=Mn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Tr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=Se.updateQueue,n===null&&(n=uc(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function G0(){return Mn().memoizedState}function hc(t,n,a,s){var c=$n();Se.flags|=t,c.memoizedState=Tr(1|n,{destroy:void 0},a,s===void 0?null:s)}function pc(t,n,a,s){var c=Mn();s=s===void 0?null:s;var u=c.memoizedState.inst;en!==null&&s!==null&&Bf(s,en.memoizedState.deps)?c.memoizedState=Tr(n,u,a,s):(Se.flags|=t,c.memoizedState=Tr(1|n,u,a,s))}function V0(t,n){hc(8390656,8,t,n)}function Yf(t,n){pc(2048,8,t,n)}function I1(t){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=uc(),Se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function k0(t){var n=Mn().memoizedState;return I1({ref:n,nextImpl:t}),function(){if((Ye&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function j0(t,n){return pc(4,2,t,n)}function X0(t,n){return pc(4,4,t,n)}function q0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function W0(t,n,a){a=a!=null?a.concat([t]):null,pc(4,4,q0.bind(null,n,t),a)}function Zf(){}function Y0(t,n){var a=Mn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Bf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Z0(t,n){var a=Mn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Bf(n,s[1]))return s[0];if(s=t(),Ps){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[s,n],s}function Kf(t,n,a){return a===void 0||(Ea&1073741824)!==0&&(ze&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sv(),Se.lanes|=t,ns|=t,a)}function K0(t,n,a,s){return pi(a,n)?a:Ka.current!==null?(t=Kf(t,a,s),pi(t,n)||(Rn=!0),t):(Ea&106)===0||(Ea&1073741824)!==0&&(ze&261930)===0?(Rn=!0,t.memoizedState=a):(t=sv(),Se.lanes|=t,ns|=t,n)}function Q0(t,n,a,s,c){var u=Zt.p;Zt.p=u!==0&&8>u?u:8;var _=Ct.T,A={};A.types=_!==null?_.types:null,Ct.T=A,$f(t,!1,n,a);try{var G=c(),at=Ct.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=U1(G,s);qo(t,n,gt,xi(t))}else qo(t,n,s,xi(t))}catch(Tt){qo(t,n,{then:function(){},status:"rejected",reason:Tt},xi())}finally{Zt.p=u,_!==null&&A.types!==null&&(_.types=A.types),Ct.T=_}}function B1(){}function Qf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=J0(t).queue;Q0(t,c,n,V,a===null?B1:function(){return $0(t),a(s)})}function J0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $0(t){var n=J0(t);n.next===null&&(n=t.alternate.memoizedState),qo(t,n.next.queue,{},xi())}function Jf(){return Gn(kr)}function tg(){return Mn().memoizedState}function eg(){return Mn().memoizedState}function F1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=xi();t=Ya(a);var s=Za(n,t,a);s!==null&&(ui(s,n,a),Ho(s,n,a)),n={cache:Af()},t.payload=n;return}n=n.return}}function H1(t,n,a){var s=xi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},mc(t)?ig(n,a):(a=vf(t,n,a,s),a!==null&&(ui(a,t,s),ag(a,n,s)))}function ng(t,n,a){var s=xi();qo(t,n,a,s)}function qo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(mc(t))ig(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var _=n.lastRenderedState,A=u(_,a);if(c.hasEagerState=!0,c.eagerState=A,pi(A,_))return ql(t,n,c,0),sn===null&&Xl(),!1}catch{}finally{}if(a=vf(t,n,c,s),a!==null)return ui(a,t,s),ag(a,n,s),!0}return!1}function $f(t,n,a,s){if(s={lane:2,revertLane:kd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},mc(t)){if(n)throw Error(r(479))}else n=vf(t,a,s,2),n!==null&&ui(n,t,2)}function mc(t){var n=t.alternate;return t===Se||n!==null&&n===Se}function ig(t,n){Mr=lc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ag(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ot(t,a)}}var gc={readContext:Gn,use:fc,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn,useEffectEvent:vn},sg={readContext:Gn,use:fc,useCallback:function(t,n){return $n().memoizedState=[t,n===void 0?null:n],t},useContext:Gn,useEffect:V0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hc(4194308,4,q0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hc(4194308,4,t,n)},useInsertionEffect:function(t,n){hc(4,2,t,n)},useMemo:function(t,n){var a=$n();n=n===void 0?null:n;var s=t();if(Ps){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=$n();if(a!==void 0){var c=a(n);if(Ps){oe(!0);try{a(n)}finally{oe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=H1.bind(null,Se,t),[s.memoizedState,t]},useRef:function(t){var n=$n();return t={current:t},n.memoizedState=t},useState:function(t){t=qf(t);var n=t.queue,a=ng.bind(null,Se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zf,useDeferredValue:function(t,n){var a=$n();return Kf(a,t,n)},useTransition:function(){var t=qf(!1);return t=Q0.bind(null,Se,t.queue,!0,!1),$n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Se,c=$n();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),sn===null)throw Error(r(349));(ze&127)!==0||A0(s,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,V0(C0.bind(null,s,u,t),[t]),s.flags|=2048,Tr(9,{destroy:void 0},R0.bind(null,s,u,a,n),null),a},useId:function(){var t=$n(),n=sn.identifierPrefix;if(Ce){var a=$i,s=Ji;a=(s&~(1<<32-_e(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=L1++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Jf,useFormState:I0,useActionState:I0,useOptimistic:function(t){var n=$n();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$f.bind(null,Se,!0,a),a.dispatch=n,[t,n]},useMemoCache:kf,useCacheRefresh:function(){return $n().memoizedState=F1.bind(null,Se)},useEffectEvent:function(t){var n=$n(),a={impl:t};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},rg={readContext:Gn,use:fc,useCallback:Y0,useContext:Gn,useEffect:Yf,useImperativeHandle:W0,useInsertionEffect:j0,useLayoutEffect:X0,useMemo:Z0,useReducer:dc,useRef:G0,useState:function(){return dc(Ta)},useDebugValue:Zf,useDeferredValue:function(t,n){var a=Mn();return K0(a,en.memoizedState,t,n)},useTransition:function(){var t=dc(Ta)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:b0,useId:tg,useHostTransitionStatus:Jf,useFormState:B0,useActionState:B0,useOptimistic:function(t,n){var a=Mn();return N0(a,en,t,n)},useMemoCache:kf,useCacheRefresh:eg,useEffectEvent:k0},G1={readContext:Gn,use:fc,useCallback:Y0,useContext:Gn,useEffect:Yf,useImperativeHandle:W0,useInsertionEffect:j0,useLayoutEffect:X0,useMemo:Z0,useReducer:Xf,useRef:G0,useState:function(){return Xf(Ta)},useDebugValue:Zf,useDeferredValue:function(t,n){var a=Mn();return en===null?Kf(a,t,n):K0(a,en.memoizedState,t,n)},useTransition:function(){var t=Xf(Ta)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:b0,useId:tg,useHostTransitionStatus:Jf,useFormState:H0,useActionState:H0,useOptimistic:function(t,n){var a=Mn();return en!==null?N0(a,en,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:kf,useCacheRefresh:eg,useEffectEvent:k0};function td(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ed={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=xi(),c=Ya(s);c.payload=n,a!=null&&(c.callback=a),n=Za(t,c,s),n!==null&&(ui(n,t,s),Ho(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=xi(),c=Ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Za(t,c,s),n!==null&&(ui(n,t,s),Ho(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=xi(),s=Ya(a);s.tag=2,n!=null&&(s.callback=n),n=Za(t,s,a),n!==null&&(ui(n,t,a),Ho(n,t,a))}};function og(t,n,a,s,c,u,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,_):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,s)||!Uo(c,u):!0}function lg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ed.enqueueReplaceState(n,n.state,null)}function Is(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function cg(t){jl(t)}function ug(t){console.error(t)}function fg(t){jl(t)}function vc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function dg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nd(t,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){vc(t,n)},a}function hg(t){return t=Ya(t),t.tag=3,t}function pg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;t.payload=function(){return c(u)},t.callback=function(){dg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){dg(n,a,s),typeof c!="function"&&(is===null?is=new Set([this]):is.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function V1(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ws(n,a,c,!0),a=Vn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Yn===null?Bc():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ic?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Hd(t,s,c)),!1;case 22:return a.flags|=65536,s===ic?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Hd(t,s,c)),!1}throw Error(r(435,a.tag))}return Hd(t,s,c),Bc(),!1}if(Ce)return n=Vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Mf&&(t=Error(r(422),{cause:s}),zo(wi(t,a)))):(s!==Mf&&(n=Error(r(423),{cause:s}),zo(wi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=wi(s,a),c=nd(t.stateNode,s,c),Uf(t,c),_n!==4&&(_n=2)),!1;var u=Error(r(520),{cause:s});if(u=wi(u,a),tl===null?tl=[u]:tl.push(u),_n!==4&&(_n=2),n===null)return!0;s=wi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=nd(a.stateNode,s,t),Uf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(is===null||!is.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=hg(c),pg(c,t,a,s),Uf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var id=Error(r(461)),Rn=!1;function Un(t,n,a,s){n.child=t===null?_0(n,null,a,s):zs(n,t.child,a,s)}function mg(t,n,a,s,c){a=a.render;var u=n.ref;if("ref"in s){var _={};for(var A in s)A!=="ref"&&(_[A]=s[A])}else _=s;return Ds(n),s=Ff(t,n,a,_,u,c),A=Hf(),t!==null&&!Rn?(Gf(t,n,c),ba(t,n,c)):(Ce&&A&&Kl(n),n.flags|=1,Un(t,n,s,c),n.child)}function gg(t,n,a,s,c){if(t===null){var u=a.type;return typeof u=="function"&&!_f(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,vg(t,n,u,s,c)):(t=Yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!fd(t,c)){var _=u.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(_,s)&&t.ref===n.ref)return ba(t,n,c)}return n.flags|=1,t=xa(u,s),t.ref=n.ref,t.return=n,n.child=t}function vg(t,n,a,s,c){if(t!==null){var u=t.memoizedProps;if(Uo(u,s)&&t.ref===n.ref)if(Rn=!1,n.pendingProps=s=u,fd(t,c))(t.flags&131072)!==0&&(Rn=!0);else return n.lanes=t.lanes,ba(t,n,c)}return ad(t,n,a,s,c)}function _g(t,n,a,s){var c=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~u}else s=0,n.child=null;return xg(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(n,u!==null?u.cachePool:null),u!==null?S0(n,u):Of(),M0(n);else return s=n.lanes=536870912,xg(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(ec(n,u.cachePool),S0(n,u),Ja(),n.memoizedState=null):(t!==null&&ec(n,null),Of(),Ja());return Un(t,n,c,a),n.child}function Wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(t,n,a,s,c){var u=Cf();return u=u===null?null:{parent:bn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&ec(n,null),Of(),M0(n),t!==null&&ws(t,n,s,!0),n.childLanes=c,null}function _c(t,n){return n=xc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function yg(t,n,a){return zs(n,t.child,null,a),t=_c(n,n.pendingProps),t.flags|=2,mi(n),n.memoizedState=null,t}function k1(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ce){if(s.mode==="hidden")return t=_c(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wo(null,t);if(Pf(n),(t=ln)?(t=qv(t,Ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=i0(t),a.return=n,n.child=a,zn=n,ln=null)):t=null,t===null)throw ja(n);return n.lanes=536870912,null}return _c(n,s)}var u=t.memoizedState;if(u!==null){var _=u.dehydrated;if(Pf(n),c)if(n.flags&256)n.flags&=-257,n=yg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Rn||ws(t,n,a,!1),c=(a&t.childLanes)!==0,Rn||c){if(Ka.current===null){if(s=sn,s!==null&&(_=mt(s,a),_!==0&&_!==u.retryLane))throw u.retryLane=_,bs(t,_),ui(s,t,_),id;Bc()}n=yg(t,n,a)}else t=u.treeContext,ln=Oi(_.nextSibling),zn=n,Ce=!0,ka=null,Ui=!1,t!==null&&r0(n,t),n=_c(n,s),n.flags|=134221824;return n}return t=xa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function br(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ad(t,n,a,s,c){return Ds(n),a=Ff(t,n,a,s,void 0,c),s=Hf(),t!==null&&!Rn?(Gf(t,n,c),ba(t,n,c)):(Ce&&s&&Kl(n),n.flags|=1,Un(t,n,a,c),n.child)}function Sg(t,n,a,s,c,u){return Ds(n),n.updateQueue=null,a=T0(n,s,a,c),E0(t),s=Hf(),t!==null&&!Rn?(Gf(t,n,u),ba(t,n,u)):(Ce&&s&&Kl(n),n.flags|=1,Un(t,n,a,u),n.child)}function Mg(t,n,a,s,c){if(Ds(n),n.stateNode===null){var u=mr,_=a.contextType;typeof _=="object"&&_!==null&&(u=Gn(_)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ed,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Df(n),_=a.contextType,u.context=typeof _=="object"&&_!==null?Gn(_):mr,u.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(td(n,a,_,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(_=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),_!==u.state&&ed.enqueueReplaceState(u,u.state,null),Vo(n,s,u,c),Go(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var A=n.memoizedProps,G=Is(a,A);u.props=G;var at=u.context,gt=a.contextType;_=mr,typeof gt=="object"&&gt!==null&&(_=Gn(gt));var Tt=a.getDerivedStateFromProps;gt=typeof Tt=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||at!==_)&&lg(n,u,s,_),Wa=!1;var tt=n.memoizedState;u.state=tt,Vo(n,s,u,c),Go(),at=n.memoizedState,A||tt!==at||Wa?(typeof Tt=="function"&&(td(n,a,Tt,s),at=n.memoizedState),(G=Wa||og(n,a,G,s,tt,at,_))?(gt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=at),u.props=s,u.state=at,u.context=_,s=G):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,Nf(t,n),_=n.memoizedProps,gt=Is(a,_),u.props=gt,Tt=n.pendingProps,tt=u.context,at=a.contextType,G=mr,typeof at=="object"&&at!==null&&(G=Gn(at)),A=a.getDerivedStateFromProps,(at=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_!==Tt||tt!==G)&&lg(n,u,s,G),Wa=!1,tt=n.memoizedState,u.state=tt,Vo(n,s,u,c),Go();var pt=n.memoizedState;_!==Tt||tt!==pt||Wa||t!==null&&t.dependencies!==null&&$l(t.dependencies)?(typeof A=="function"&&(td(n,a,A,s),pt=n.memoizedState),(gt=Wa||og(n,a,gt,s,tt,pt,G)||t!==null&&t.dependencies!==null&&$l(t.dependencies))?(at||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,pt,G),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,pt,G)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=pt),u.props=s,u.state=pt,u.context=G,s=gt):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,br(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=zs(n,t.child,null,c),n.child=zs(n,null,a,c)):Un(t,n,a,c),n.memoizedState=u.state,t=n.child):t=ba(t,n,c),t}function Eg(t,n,a,s){return Rs(),n.flags|=256,Un(t,n,a,s),n.child}var sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rd(t){return{baseLanes:t,cachePool:d0()}}function od(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=_i),t}function Tg(t,n,a){var s=n.pendingProps,c=!1,u=(n.flags&128)!==0,_;if((_=u)||(_=t!==null&&t.memoizedState===null?!1:(kn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ce){if(c?Qa(n):Ja(),(t=ln)?(t=qv(t,Ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=i0(t),a.return=n,n.child=a,zn=n,ln=null)):t=null,t===null)throw ja(n);return rh(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,c?(Ja(),c=n.mode,u=xc({mode:"hidden",children:u},c),s=As(s,c,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=rd(a),s.childLanes=od(t,_,a),n.memoizedState=sd,Wo(null,s)):(Qa(n),ld(n,u))}var A=t.memoizedState;if(A!==null){var G=A.dehydrated;if(G!==null)return j1(t,n,u,_,s,G,A,a)}return c?(Ja(),c=s.fallback,u=n.mode,A=t.child,G=A.sibling,s=xa(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,G!==null?c=xa(G,c):(c=As(c,u,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Wo(null,s),s=n.child,c=t.child.memoizedState,c===null?c=rd(a):(u=c.cachePool,u!==null?(A=bn._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=d0(),c={baseLanes:c.baseLanes|a,cachePool:u}),s.memoizedState=c,s.childLanes=od(t,_,a),n.memoizedState=sd,Wo(t.child,s)):(Qa(n),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function ld(t,n){return n=xc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xc(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function yc(t,n,a){return zs(n,t.child,null,a),t=ld(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function j1(t,n,a,s,c,u,_,A){if(a)return n.flags&256?(Qa(n),n.flags&=-257,yc(t,n,A)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),u=c.fallback,_=n.mode,c=xc({mode:"visible",children:c.children},_),u=As(u,_,A,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,zs(n,t.child,null,A),c=n.child,c.memoizedState=rd(A),c.childLanes=od(t,s,A),n.memoizedState=sd,Wo(null,c));if(Qa(n),rh(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var G=s.dgst;return s=G,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,zo({value:c,source:null,stack:null})),yc(t,n,A)}if(Rn||ws(t,n,A,!1),s=(A&t.childLanes)!==0,Rn||s){if(Ka.current!==null)return yc(t,n,A);if(s=sn,s!==null&&(c=mt(s,A),c!==0&&c!==_.retryLane))throw _.retryLane=c,bs(t,c),ui(s,t,c),id;return sh(u)||Bc(),yc(t,n,A)}return sh(u)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,ln=Oi(u.nextSibling),zn=n,Ce=!0,ka=null,Ui=!1,t!==null&&r0(n,t),n=ld(n,c.children),n.flags|=134221824,n)}function bg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Jl(t.return,n,a)}function Ag(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&oc(a)===null&&(n=t),t=t.sibling}return n}function Sc(t,n,a,s,c,u){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:u}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=u)}function cd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ud(t,n,a){var s=n.pendingProps,c=s.revealOrder,u=s.tail;s=s.children;var _=kn.current;if(n.flags&128)return ko(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,ko(n,_),c==="backwards"&&t!==null?(cd(t),Un(t,n,s,a),cd(t)):Un(t,n,s,a),s=Ce?Oo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,a,n);else if(t.tag===19)bg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Ag(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,cd(n)),Sc(n,!0,c,null,u,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&oc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Sc(n,!0,a,null,u,s);break;case"together":Sc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Ag(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Sc(n,!1,c,a,u,s)}return n.child}function Rg(t,n,a){var s=n.pendingProps;return Xa(n,n.type,s.value),Un(t,n,s.children,a),n.child}function ba(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=xa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function fd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$l(t)))}function X1(t,n,a){switch(n.tag){case 3:w(n,n.stateNode.containerInfo),Xa(n,bn,t.memoizedState.cache),Rs();break;case 27:case 5:q(n);break;case 4:w(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Qa(n),n.flags|=128,null;s=ws(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Tg(t,n,a):(Qa(n),t=ba(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return ud(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(ws(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return ud(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ko(n,kn.current),s)break;return null;case 22:return n.lanes=0,_g(t,n,a,n.pendingProps);case 24:Xa(n,bn,t.memoizedState.cache)}return ba(t,n,a)}function Cg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Rn=!0;else{if(!fd(t,a)&&(n.flags&128)===0)return Rn=!1,X1(t,n,a);Rn=(t.flags&131072)!==0}else Rn=!1,Ce&&(n.flags&1048576)!==0&&s0(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ls(n.elementType),n.type=t,typeof t=="function")_f(t)?(s=Is(t,s),n.tag=1,n=Mg(null,n,t,s,a)):(n.tag=0,n=ad(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===Z){n.tag=11,n=mg(null,n,t,s,a);break t}else if(c===Rt){n.tag=14,n=gg(null,n,t,s,a);break t}else if(c===st){n.tag=10,n.type=t,n=Rg(null,n,a);break t}}throw n=Pt(t)||t,Error(r(306,n,""))}}return n;case 0:return ad(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Is(s,n.pendingProps),Mg(t,n,s,c,a);case 3:t:{if(w(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;c=u.element,Nf(t,n),Vo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Xa(n,bn,s),s!==u.cache&&bf(n,[bn],a,!0),Go(),s=_.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Eg(t,n,s,a);break t}else if(s!==c){c=wi(Error(r(424)),n),zo(c),n=Eg(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ln=Oi(t.firstChild),zn=n,Ce=!0,ka=null,Ui=!0,a=_0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rs(),s===c){n=ba(t,n,a);break t}Un(t,n,s,a)}n=n.child}return n;case 26:return br(t,n),t===null?(a=$v(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(n.stateNode=Uv(n.type,n.pendingProps,yt.current,n)):n.memoizedState=$v(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return q(n),t===null&&Ce&&(s=n.stateNode=Zv(n.type,n.pendingProps,yt.current),zn=n,Ui=!0,c=ln,rs(n.type)?(oh=c,ln=Oi(s.firstChild)):ln=c),Un(t,n,n.pendingProps.children,a),br(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ce&&((c=s=ln)&&(s=FS(s,n.type,n.pendingProps,Ui),s!==null?(n.stateNode=s,zn=n,ln=Oi(s.firstChild),Ui=!1,c=!0):c=!1),c||ja(n)),q(n),c=n.type,u=n.pendingProps,_=t!==null?t.memoizedProps:null,s=u.children,Jd(c,u)?s=null:_!==null&&Jd(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Ff(t,n,O1,null,null,a),kr._currentValue=c),br(t,n),Un(t,n,s,a),n.child;case 6:return t===null&&Ce&&((t=a=ln)&&(a=HS(a,n.pendingProps,Ui),a!==null?(n.stateNode=a,zn=n,ln=null,t=!0):t=!1),t||ja(n)),null;case 13:return Tg(t,n,a);case 4:return w(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zs(n,null,s,a):Un(t,n,s,a),n.child;case 11:return mg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,br(t,n),Un(t,n,s,a),n.child;case 8:return Un(t,n,n.pendingProps.children,a),n.child;case 12:return Un(t,n,n.pendingProps.children,a),n.child;case 10:return Rg(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Ds(n),c=Gn(c),s=s(c),n.flags|=1,Un(t,n,s,a),n.child;case 14:return gg(t,n,n.type,n.pendingProps,a);case 15:return vg(t,n,n.type,n.pendingProps,a);case 19:return ud(t,n,a);case 31:return k1(t,n,a);case 22:return _g(t,n,a,n.pendingProps);case 24:return Ds(n),s=Gn(bn),t===null?(c=Cf(),c===null&&(c=sn,u=Af(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:s,cache:c},Df(n),Xa(n,bn,c)):((t.lanes&a)!==0&&(Nf(t,n),Vo(n,null,null,a),Go()),c=t.memoizedState,u=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Xa(n,bn,s)):(s=u.cache,Xa(n,bn,s),s!==c.cache&&bf(n,[bn],a,!0))),Un(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Ce&&Kl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:br(t,n),Un(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Aa(t){t.flags|=4}function dd(t,n,a,s,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?i_(n,s):i_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(cv())t.flags|=8192;else throw Os=ic,wf}else t.flags&=-16777217}function wg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!a_(n))if(cv())t.flags|=8192;else throw Os=ic,wf}function Mc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ia():536870912,t.lanes|=n,Dr|=n)}function Yo(t,n){if(!Ce)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function cn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function q1(t,n,a){var s=n.pendingProps;switch(Sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ma(bn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(_r(n)?Aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ef())),cn(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(Aa(n),u!==null?(cn(n),wg(n,u)):(cn(n),dd(n,c,null,s,a))):u?u!==t.memoizedState?(Aa(n),cn(n),wg(n,u)):(cn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Aa(n),cn(n),dd(n,c,t,s,a)),null;case 27:if(rt(n),a=yt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return cn(n),n.subtreeFlags&=-33554433,null}t=jt.current,_r(n)?o0(n):(t=Zv(c,s,a),n.stateNode=t,Aa(n))}return cn(n),n.subtreeFlags&=-33554433,null;case 5:if(rt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return cn(n),n.subtreeFlags&=-33554433,null}if(u=jt.current,_r(n))o0(n);else{var _=sl(yt.current);switch(u){case 1:u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=_.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}u[Gt]=n,u[ae]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)u.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=u;t:switch(Xn(u,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Aa(n)}}return cn(n),n.subtreeFlags&=-33554433,dd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=yt.current,_r(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=zn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Gt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cv(t.nodeValue,a)),t||ja(n,!0)}else t=sl(t).createTextNode(s),t[Gt]=n,n.stateNode=t}return cn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=_r(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Gt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),t=!1}else a=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(mi(n),n):(mi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return cn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=_r(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Gt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),c=!1}else c=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(mi(n),n):(mi(n),null)}return mi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Mc(n,n.updateQueue),cn(n),null);case 4:return b(),t===null&&Wd(n.stateNode.containerInfo),n.flags|=67108864,cn(n),null;case 10:return Ma(n.type),cn(n),null;case 19:if(If(n),s=n.memoizedState,s===null)return cn(n),null;if(c=(n.flags&128)!==0,u=s.rendering,u===null)if(c)Yo(s,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=oc(t),u!==null){for(n.flags|=128,Yo(s,!1),t=u.updateQueue,n.updateQueue=t,Mc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)n0(a,t),a=a.sibling;return ko(n,kn.current&1|2),Ce&&ya(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Y()>Oc&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304)}else{if(!c)if(t=oc(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Mc(n,t),Yo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!Ce)return cn(n),null}else 2*Y()-s.renderingStartTime>Oc&&a!==536870912&&(n.flags|=128,c=!0,Yo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,u=kn.current,u=c?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Ce?ko(n,u):(a=u,$t(Vn,n),$t(kn,a),Yn===null&&(Yn=n)),Ce&&ya(n,s.treeForkCount),t}return cn(n),null;case 22:case 23:return mi(n),zf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),a=n.updateQueue,a!==null&&Mc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Bt(Us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(bn),cn(n),null;case 25:return null;case 30:return n.flags|=33554432,cn(n),null}throw Error(r(156,n.tag))}function W1(t,n){switch(Sf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(bn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return rt(n),null;case 31:if(n.memoizedState!==null){if(mi(n),n.alternate===null)throw Error(r(340));Rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(mi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return If(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return Ma(n.type),null;case 22:case 23:return mi(n),zf(),t!==null&&Bt(Us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(bn),null;case 25:return null;default:return null}}function Dg(t,n){switch(Sf(n),n.tag){case 3:Ma(bn),b();break;case 26:case 27:case 5:rt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&mi(n);break;case 13:mi(n);break;case 19:If(n);break;case 10:Ma(n.type);break;case 22:case 23:mi(n),zf(),t!==null&&Bt(Us);break;case 24:Ma(bn)}}function Zo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var u=a.create,_=a.inst;s=u(),_.destroy=s}a=a.next}while(a!==c)}}catch(A){Je(n,n.return,A)}}function $a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&t)===t){var _=s.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var G=a,at=A;try{at()}catch(gt){Je(c,G,gt)}}}s=s.next}while(s!==u)}}catch(gt){Je(n,n.return,gt)}}function Ng(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{y0(n,a)}catch(s){Je(t,t.return,s)}}}function Ug(t,n,a){a.props=Is(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Je(t,n,s)}}function ta(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,u=va(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=Fv(u)),s=c.ref;break;case 7:if(t.stateNode===null){var _=new yi(t);m(t.child,!1,IS,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){Je(t,n,A)}}function jn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Je(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Je(t,n,c)}else a.current=null}function Ec(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Xv(t.stateNode,n[a])}function Lg(t){for(var n=t.return;n!==null&&(pd(n)&&Xv(t.stateNode,n.stateNode),!hd(n));)n=n.return}function Ko(t){for(var n=t.return;n!==null&&(pd(n)&&BS(t.stateNode,n.stateNode),!hd(n));)n=n.return}function hd(t){return t.tag===5||t.tag===3||t.tag===27}function pd(t){return t&&t.tag===7&&t.stateNode!==null}function md(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Je(t,t.return,c)}}function gd(t,n,a){try{var s=t.stateNode;xS(s,t.type,a,n),s[ae]=n}catch(c){Je(t,t.return,c)}}function Og(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function vd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi)),Ec(t,s),ke=!0;else if(c!==4&&(c===27&&(Ec(t,s),s=null,rs(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(_d(t,n,a,s),t=t.sibling;t!==null;)_d(t,n,a,s),t=t.sibling}function Tc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ec(t,s),ke=!0;else if(c!==4&&(c===27&&(Ec(t,s),s=null,rs(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Tc(t,n,a,s),t=t.sibling;t!==null;)Tc(t,n,a,s),t=t.sibling}function zg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Xn(n,s,a),n[Gt]=t,n[ae]=a}catch(u){Je(t,t.return,u)}}var bc=!1,gi=null;function Pg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(bc=!0)}var ea=null;function Ig(){var t=ea;return ea=null,t}var oi=0;function Ar(t,n,a,s,c){return oi=0,Bg(t.child,n,a,s,c)}function Bg(t,n,a,s,c){for(var u=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var A=eh(_);s.push(A),A.view&&(u=!0)}else u||eh(_).view&&(u=!0);bc=!0,Iv(_,oi===0?n:n+"_"+oi,a),oi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||Bg(t.child,n,a,s,c)&&(u=!0));t=t.sibling}return u}function na(t,n){for(;t!==null;)t.tag===5?Bv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||na(t.child,n)),t=t.sibling}function Ac(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ac(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=_a(n.default,n.share),n!=="none"&&(Ar(t,a,n,null,!1)||na(t.child,!1))}t=t.sibling}}function xd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=va(s,a),u=_a(s.default,a.paired?s.share:s.enter);u!=="none"?Ar(t,c,u,null,!1)?(Ac(t),a.paired||n||Or(t,s.onEnter)):na(t.child,!1):Ac(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xd(t,n),t=t.sibling;else Ac(t)}function yd(t){if(gi!==null&&gi.size!==0){var n=gi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var u=_a(a.default,a.share);if(u!=="none"&&(Ar(t,s,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,Or(t,a.onShare)):na(t.child,!1)),n.delete(s),n.size===0)break}}}yd(t)}t=t.sibling}}}function Sd(t){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode),s=gi!==null?gi.get(a):void 0,c=_a(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Ar(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,gi.delete(a),Or(t,n.onShare)):Or(t,n.onExit):na(t.child,!1)),gi!==null&&yd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sd(t),t=t.sibling;else gi!==null&&yd(t)}function Fg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode);n=_a(n.default,n.update),t.flags&=-5,n!=="none"&&Ar(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Fg(t);t=t.sibling}}function Md(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,na(t.child,!1))}Md(t)}t=t.sibling}}function Rc(t){if(t.tag===30)t.stateNode.paired=null,na(t.child,!1),Md(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rc(t),t=t.sibling;else Md(t)}function Hg(t){for(t=t.child;t!==null;)t.tag===30?na(t.child,!1):(t.subtreeFlags&33554432)!==0&&Hg(t),t=t.sibling}function Ed(t,n,a,s,c,u,_){for(var A=!1;n!==null;){if(n.tag===5){var G=n.stateNode;if(u!==null&&oi<u.length){var at=u[oi],gt=eh(G);(at.view||gt.view)&&(A=!0);var Tt;if(Tt=(t.flags&4)===0)if(gt.clip)Tt=!0;else{Tt=at.rect;var tt=gt.rect;Tt=Tt.y!==tt.y||Tt.x!==tt.x||Tt.height!==tt.height||Tt.width!==tt.width}Tt&&(t.flags|=4),gt.abs?gt=!at.abs:(at=at.rect,gt=gt.rect,gt=at.height!==gt.height||at.width!==gt.width),gt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Iv(G,oi===0?a:a+"_"+oi,c),A&&(t.flags&4)!==0||(ea===null&&(ea=[]),ea.push(G,oi===0?s:s+"_"+oi,n.memoizedProps)),oi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Ed(t,n.child,a,s,c,u,_)&&(A=!0));n=n.sibling}return A}function Gg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=va(a,s),u=_a(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;oi=0,c=Ed(s,A,c,c,u,_,!1),(t.flags&4)!==0&&c&&Or(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Gg(t);t=t.sibling}}var Pn=!1,Ke=!1,ia=!1,Td=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,In=null,aa=!1,Qo=!1,Cc=!1,bd=!1;function Y1(t,n,a){if(t=t.containerInfo,Kd=jr,t=qm(t),ff(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var u=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var A=0,G=-1,at=-1,gt=0,Tt=0,tt=t,pt=null;e:for(;;){for(var Yt;tt!==s||u!==0&&tt.nodeType!==3||(G=A+u),tt!==_||c!==0&&tt.nodeType!==3||(at=A+c),tt.nodeType===3&&(A+=tt.nodeValue.length),(Yt=tt.firstChild)!==null;)pt=tt,tt=Yt;for(;;){if(tt===t)break e;if(pt===s&&++gt===u&&(G=A),pt===_&&++Tt===c&&(at=A),(Yt=tt.nextSibling)!==null)break;tt=pt,pt=tt.parentNode}tt=Yt}s=G===-1||at===-1?null:{start:G,end:at}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qd={focusedElem:t,selectionRange:s},jr=!1,a=(a&335544064)===a,In=n,n=a?9270:1024;In!==null;){if(t=In,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&Sd(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&Pg(t),wc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Sd(s),wc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Pg(t),wc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,In=s):(a&&Fg(t),wc(a))}}gi=null}function wc(t){for(;In!==null;){var n=In,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var _=Is(n.type,c);a=u.getSnapshotBeforeUpdate(_,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(A){Je(n,n.return,A)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)ah(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":ah(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=va(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=_a(c.default,c.update),c!=="none"&&Ar(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,In=s;break}In=n.return}}function kg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),s&4&&Zo(5,a);break;case 1:if(sa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Je(a,a.return,_)}else{var c=Is(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Je(a,a.return,_)}}s&64&&Ng(a),s&512&&ta(a,a.return);break;case 3:if(sa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{y0(t,n)}catch(_){Je(a,a.return,_)}}break;case 27:n===null&&s&4&&zg(a);case 26:case 5:sa(t,a),n===null&&s&4&&md(a),s&512&&ta(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),s&4&&Wg(t,a);break;case 13:sa(t,a),s&4&&Yg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=rS.bind(null,a),GS(t,a))));break;case 22:if(s=a.memoizedState!==null||Pn,!s){var u=n!==null&&n.memoizedState!==null||Ke;n=Pn,c=Ke,Pn=s,(Ke=u)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Vi(t,a,s)):sa(t,a),Pn=n,Ke=c}break;case 30:sa(t,a),s&512&&ta(a,a.return);break;case 7:s&512&&ta(a,a.return);default:sa(t,a)}}function Ad(t,n){for(t=t.child;t!==null;)jg(t,n),t=t.sibling}function jg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,_=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(G){Je(t,t.return,G)}Rd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ke=!0}catch(G){Je(t,t.return,G)}break;case 18:try{var A=t.stateNode;n?Pv(A,!0):Pv(t.stateNode,!1)}catch(G){Je(t,t.return,G)}break;case 22:case 23:t.memoizedState===null&&Ad(t,n);break;default:Ad(t,n)}}function Rd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:jg(a,s);break t;case 22:a.memoizedState===null&&Rd(a,s);break t;default:Rd(a,s)}}t=t.sibling}}function Xg(t){var n=t.alternate;n!==null&&(t.alternate=null,Xg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&de(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pn=null,li=!1;function Hi(t,n,a){for(a=a.child;a!==null;)qg(t,n,a),a=a.sibling}function qg(t,n,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Ht,a)}catch{}switch(a.tag){case 26:Ke||jn(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||jn(a,n),Ko(a);var s=pn,c=li;rs(a.type)&&(pn=a.stateNode,li=!1),Hi(t,n,a),Kv(a.stateNode,a.type,a.memoizedProps),pn=s,li=c;break;case 5:Ke||jn(a,n),Ko(a);case 6:if(a.tag===6&&Ko(a),s=pn,c=li,pn=null,Hi(t,n,a),pn=s,li=c,pn!==null)if(li)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(a.stateNode),ke=!0}catch(u){Je(a,n,u)}else try{pn.removeChild(a.stateNode),ke=!0}catch(u){Je(a,n,u)}break;case 18:pn!==null&&(li?(t=pn,zv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Xr(t)):zv(pn,a.stateNode));break;case 4:s=pn,c=li,pn=a.stateNode.containerInfo,li=!0,Hi(t,n,a),pn=s,li=c;break;case 0:case 11:case 14:case 15:$a(2,a,n),Ke||$a(4,a,n),Hi(t,n,a);break;case 1:Ke||(jn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Ug(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:Ke=(s=Ke)||a.memoizedState!==null,Hi(t,n,a),Ke=s;break;case 30:jn(a,n),Hi(t,n,a);break;case 7:Ke||jn(a,n),Hi(t,n,a);break;default:Hi(t,n,a)}}function Wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xr(t)}catch(a){Je(n,n.return,a)}}}function Yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xr(t)}catch(a){Je(n,n.return,a)}}function Z1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Vg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Vg),n;default:throw Error(r(435,t.tag))}}function Dc(t,n){var a=Z1(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=oS.bind(null,t,s);s.then(c,c)}})}function ti(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var u=s[c],_=t,A=n,G=A;t:for(;G!==null;){switch(G.tag){case 27:if(rs(G.type)){pn=G.stateNode,li=!1;break t}break;case 5:pn=G.stateNode,li=!1;break t;case 3:case 4:pn=G.stateNode.containerInfo,li=!0;break t}G=G.return}if(pn===null)throw Error(r(160));qg(_,A,u),pn=null,li=!1,_=u.alternate,_!==null&&(_.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zg(n,t,a),n=n.sibling}var Gi=null;function Zg(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var _=s[u];_.ref.impl=_.nextImpl}ti(n,t,a),ei(t),c&4&&($a(3,t,t.return),Zo(3,t),$a(5,t,t.return));break;case 1:ti(n,t,a),ei(t),c&512&&(Ke||s===null||jn(s,s.return)),c&64&&Pn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Gi,ti(n,t,a),ei(t),c&512&&(Ke||s===null||jn(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Pn)t.stateNode=Uv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[qe]||s[Gt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Xn(s,n,a),s[Gt]=t,Ve(s),n=s;break t;case"link":if(u=n_("link","href",c).get(n+(a.href||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(_,1);break e}}s=c.createElement(n),Xn(s,n,a),c.head.appendChild(s);break;case"meta":if(u=n_("meta","content",c).get(n+(a.content||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(_,1);break e}}s=c.createElement(n),Xn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[Gt]=t,Ve(s),n=s}t.stateNode=n}else Pn||fh(u,t.type,t.stateNode);else t.stateNode=e_(u,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||Ke||n.parentNode.removeChild(n)):c.count--,a===null?Pn||fh(u,t.type,t.stateNode):e_(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&gd(t,t.memoizedProps,s.memoizedProps);break;case 27:ti(n,t,a),ei(t),c&512&&(Ke||s===null||jn(s,s.return)),s!==null&&c&4&&gd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=ia,ia=!1,ti(n,t,a),ia=u,ei(t),c&512&&(Ke||s===null||jn(s,s.return)),t.flags&32){n=t.stateNode;try{lr(n,""),ke=!0}catch(gt){Je(t,t.return,gt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,gd(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Td=!0);break;case 6:if(ti(n,t,a),ei(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ke=!0}catch(gt){Je(t,t.return,gt)}}break;case 3:if(ke=!1,Xc=null,u=Gi,Gi=rl(n.containerInfo),ti(n,t,a),Gi=u,ei(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Xr(n.containerInfo)}catch(gt){Je(t,t.return,gt)}Td&&(Td=!1,Kg(t)),ke=!1;break;case 4:c=ia,ia=Pn,s=gm(),u=Gi,Gi=rl(t.stateNode.containerInfo),ti(n,t,a),ei(t),Gi=u,ke&&Qo&&(Cc=!0),ke=s,ia=c;break;case 12:ti(n,t,a),ei(t);break;case 31:ti(n,t,a),ei(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 13:ti(n,t,a),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Lc=Y()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 22:u=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var A=Pn,G=Ke,at=ia;Pn=A||u,ia=at||u,Ke=G||_,ti(n,t,a),Ke=G,ia=at,Pn=A,ei(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||_||Pn||Ke||(n=_||Ke,a=Pn,s=Ke,Pn=u||Pn,Ke=n,ts(t,2),Pn=a,Ke=s),!u&&ia||Ad(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Dc(t,a))));break;case 19:ti(n,t,a),ei(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 30:c&512&&(Ke||s===null||jn(s,s.return)),c=gm(),u=Qo,_=(a&335544064)===a,A=t.memoizedProps,Qo=_&&_a(A.default,A.update)!=="none",ti(n,t,a),ei(t),_&&s!==null&&ke&&(t.flags|=4),Qo=u,ke=c;break;case 21:break;case 7:c&512&&(Ke||s===null||jn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:ti(n,t,a),ei(t)}}function ei(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Og(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(pd(c)){var u=c.stateNode;s===null?s=[u]:s.push(u)}if(hd(c))break;c=c.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,G=vd(t);Tc(t,G,A,_);break;case 5:var at=a.stateNode;a.flags&32&&(lr(at,""),a.flags&=-33);var gt=vd(t);Tc(t,gt,at,_);break;case 3:case 4:var Tt=a.stateNode.containerInfo,tt=vd(t);_d(t,tt,Tt,_);break;default:throw Error(r(161))}}catch(pt){Je(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Kg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,jr=!0,n.reset(),jr=!1),t=t.sibling}}function Rr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Qg(n,t),n=n.sibling;else Gg(n)}function Qg(t,n){var a=t.alternate;if(a===null)xd(t,!1);else switch(t.tag){case 3:if(bd=aa=!1,Ig(),Rr(n,t),!aa&&!Cc){if(t=ea,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];Bv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),bd=!0}ea=null;break;case 5:Rr(n,t);break;case 4:s=aa,aa=!1,Rr(n,t),aa&&(Cc=!0),aa=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?xd(t,!1):Rr(n,t));break;case 30:s=aa,c=Ig(),aa=!1,Rr(n,t),aa&&(t.flags|=4);var u=t.memoizedProps,_=t.stateNode;n=va(u,_),_=va(a.memoizedProps,_);var A=_a(u.default,u.update);A==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,oi=0,n=Ed(t,a,n,_,A,u,!0),oi!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Or(t,t.memoizedProps.onUpdate),ea=c):c!==null&&(c.push.apply(c,ea),ea=c),aa=(t.flags&32)!==0?!0:s;break;default:Rr(n,t)}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kg(t,n.alternate,n),n=n.sibling}function ts(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),ts(a,s);break;case 1:jn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Ug(a,a.return,c),ts(a,s);break;case 27:(s&2)!==0&&Kv(a.stateNode,a.type,a.memoizedProps);case 5:jn(a,a.return),a.tag!==5&&a.tag!==27||Ko(a),ts(a,s);break;case 6:Ko(a);break;case 26:jn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ke||c.parentNode.removeChild(c),ts(a,s);break;case 22:a.memoizedState===null&&ts(a,s);break;case 30:jn(a,a.return),ts(a,s);break;case 7:jn(a,a.return);default:ts(a,s)}t=t.sibling}}function Vi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,u=n,_=u.flags,A=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Vi(c,u,a),Zo(4,u);break;case 1:if(Vi(c,u,a),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(gt){Je(s,s.return,gt)}if(s=u,c=s.updateQueue,c!==null){var G=s.stateNode;try{var at=c.shared.hiddenCallbacks;if(at!==null)for(c.shared.hiddenCallbacks=null,c=0;c<at.length;c++)x0(at[c],G)}catch(gt){Je(s,s.return,gt)}}A&&_&64&&Ng(u),ta(u,u.return);break;case 27:(a&2)!==0&&zg(u);case 5:u.tag!==5&&u.tag!==27||Lg(u),Vi(c,u,a),A&&s===null&&_&4&&md(u),ta(u,u.return);break;case 6:Lg(u);break;case 26:G=u.stateNode,u.memoizedState!==null||G===null||Pn||fh(rl(G.ownerDocument),u.type,G),Vi(c,u,a),A&&s===null&&_&4&&md(u),ta(u,u.return);break;case 12:Vi(c,u,a);break;case 31:Vi(c,u,a),A&&_&4&&Wg(c,u);break;case 13:Vi(c,u,a),A&&_&4&&Yg(c,u);break;case 22:u.memoizedState===null&&Vi(c,u,a),ta(u,u.return);break;case 30:Vi(c,u,a),ta(u,u.return);break;case 7:ta(u,u.return);default:Vi(c,u,a)}n=n.sibling}}function Cd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Po(a))}function wd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t))}function Li(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Jg(t,n,a,s),n=n.sibling;else c&&Hg(n)}function Jg(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Rc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n,a,s),u&2048&&Zo(9,n);break;case 1:Li(t,n,a,s);break;case 3:Li(t,n,a,s),c&&bd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Po(u)));break;case 12:if(u&2048){Li(t,n,a,s),u=n.stateNode;try{var _=n.memoizedProps,A=_.id,G=_.onPostCommit;typeof G=="function"&&G(A,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(at){Je(n,n.return,at)}}else Li(t,n,a,s);break;case 31:Li(t,n,a,s);break;case 13:Li(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(c&&A!==null&&A.memoizedState===null&&Rc(A),_._visibility&2?Li(t,n,a,s):Jo(t,n)):(c&&A!==null&&A.memoizedState!==null&&Rc(n),_._visibility&2?Li(t,n,a,s):(_._visibility|=2,Cr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Cd(A,n);break;case 24:Li(t,n,a,s),u&2048&&wd(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(na(u.child,!0),na(n.child,!0))),Li(t,n,a,s);break;default:Li(t,n,a,s)}}function Cr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,_=n,A=a,G=s,at=_.flags;switch(_.tag){case 0:case 11:case 15:Cr(u,_,A,G,c),Zo(8,_);break;case 23:break;case 22:var gt=_.stateNode;_.memoizedState!==null?gt._visibility&2?Cr(u,_,A,G,c):Jo(u,_):(gt._visibility|=2,Cr(u,_,A,G,c)),c&&at&2048&&Cd(_.alternate,_);break;case 24:Cr(u,_,A,G,c),c&&at&2048&&wd(_.alternate,_);break;default:Cr(u,_,A,G,c)}n=n.sibling}}function Jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Jo(a,s),c&2048&&Cd(s.alternate,s);break;case 24:Jo(a,s),c&2048&&wd(s.alternate,s);break;default:Jo(a,s)}n=n.sibling}}var Bs=8192;function Fs(t,n,a){if(t.subtreeFlags&Bs)for(t=t.child;t!==null;)$g(t,n,a),t=t.sibling}function $g(t,n,a){switch(t.tag){case 26:Fs(t,n,a),t.flags&Bs&&(t.memoizedState!==null?eM(a,Gi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&r_(a,t)));break;case 5:Fs(t,n,a),t.flags&Bs&&(t=t.stateNode,(n&335544128)===n&&r_(a,t));break;case 3:case 4:var s=Gi;Gi=rl(t.stateNode.containerInfo),Fs(t,n,a),Gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Bs,Bs=16777216,Fs(t,n,a),Bs=s):Fs(t,n,a));break;case 30:if((t.flags&Bs)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,gi===null&&(gi=new Map),gi.set(s,c)}Fs(t,n,a);break;default:Fs(t,n,a)}}function tv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];In=s,nv(s,t)}tv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ev(t),t=t.sibling}function ev(t){switch(t.tag){case 0:case 11:case 15:$o(t),t.flags&2048&&$a(9,t,t.return);break;case 3:$o(t);break;case 12:$o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nc(t)):$o(t);break;default:$o(t)}}function Nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];In=s,nv(s,t)}tv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Nc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nc(n));break;default:Nc(n)}t=t.sibling}}function nv(t,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Po(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,In=s;else t:for(a=t;In!==null;){s=In;var c=s.sibling,u=s.return;if(Xg(s),s===a){In=null;break t}if(c!==null){c.return=u,In=c;break t}In=u}}}var K1={getCacheForType:function(t){var n=Gn(bn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Gn(bn).controller.signal}},Q1=typeof WeakMap=="function"?WeakMap:Map,Ye=0,sn=null,Ne=null,ze=0,Qe=0,vi=null,es=!1,wr=!1,Dd=!1,Ra=0,_n=0,ns=0,Hs=0,Uc=0,_i=0,Dr=0,tl=null,ci=null,Nd=!1,Lc=0,iv=0,Oc=1/0,zc=null,is=null,mn=0,ki=null,Gs=null,ra=0,Ud=0,Ld=null,av=null,Nr=null,Ur=null,Lr=null,el=0,Pc=null;function xi(){return(Ye&2)!==0&&ze!==0?ze&-ze:Ct.T!==null?kd():Nt()}function sv(){if(_i===0)if((ze&536870912)===0||Ce){var t=an;an<<=1,(an&3932160)===0&&(an=262144),_i=t}else _i=536870912;return t=Vn.current,t!==null&&(t.flags|=32),_i}function Or(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Fv(va(t.memoizedProps,a))),Ur===null&&(Ur=[]),Ur.push(n.bind(null,s))}}function ui(t,n,a){(t===sn&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)&&(zr(t,0),as(t,ze,_i,!1)),Ai(t,a),((Ye&2)===0||t!==sn)&&(t===sn&&((Ye&2)===0&&(Hs|=a),_n===4&&as(t,ze,_i,!1)),oa(t))}function rv(t,n,a){if((Ye&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Dn(t,n),c=s?tS(t,n):zd(t,n,!0),u=s;do{if(c===0){wr&&!s&&as(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!J1(a)){c=zd(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;c=tl;var G=A.current.memoizedState.isDehydrated;if(G&&(zr(A,_).flags|=256),_=zd(A,_,!1),_!==2&&_!==6){if(Dd&&!G){A.errorRecoveryDisabledLanes|=u,Hs|=u,c=4;break t}u=ci,ci=c,u!==null&&(ci===null?ci=u:ci.push.apply(ci,u))}c=_}if(u=!1,c!==2)continue}}if(c===1){zr(t,0),as(t,n,0,!0);break}t:{switch(s=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:as(s,n,_i,!es);break t;case 2:ci=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Lc+300-Y(),10<c)){if(as(s,n,_i,!es),Sn(s,0,!0)!==0)break t;ra=n,s.timeoutHandle=th(ov.bind(null,s,a,ci,zc,Nd,n,_i,Hs,Dr,es,u,"Throttled",-0,0),c);break t}ov(s,a,ci,zc,Nd,n,_i,Hs,Dr,es,u,null,-0,0)}}break}while(!0);oa(t)}function ov(t,n,a,s,c,u,_,A,G,at,gt,Tt,tt,pt){t.timeoutHandle=-1;var Yt=n.subtreeFlags,re=(u&335544064)===u;if(Tt=null,(re||Yt&8192||(Yt&16785408)===16785408)&&(Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},gi=null,$g(n,u,Tt),re&&(Yt=Tt,re=t.containerInfo,re=(re.nodeType===9?re:re.ownerDocument).__reactViewTransition,re!=null&&(Yt.count++,Yt.waitingForViewTransition=!0,Yt=cl.bind(Yt),re.finished.then(Yt,Yt))),Yt=(u&62914560)===u?Lc-Y():(u&4194048)===u?iv-Y():0,Yt=nM(Tt,Yt),Yt!==null)){ra=u,t.cancelPendingCommit=Yt(mv.bind(null,t,n,u,a,s,c,_,A,G,at,gt,Tt,null,tt,pt)),as(t,u,_,!at);return}mv(t,n,u,a,s,c,_,A,G,at,gt,Tt)}function J1(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],u=c.getSnapshot;c=c.value;try{if(!pi(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,s){n=dn(t,n),n&=~Uc,n&=~Hs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var u=31-_e(c),_=1<<u;s[u]=-1,c&=~_}a!==0&&U(t,a,n)}function Ic(){return(Ye&6)===0?(nl(0),!1):!0}function Od(){if(Ne!==null){if(Qe===0)var t=Ne.return;else t=Ne,Sa=Cs=null,Vf(t),Sr=null,Fo=0,t=Ne;for(;t!==null;)Dg(t.alternate,t),t=t.return;Ne=null}}function zr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,MS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ra=0,Od(),sn=t,Ne=a=xa(t.current,null),ze=n,Qe=0,vi=null,es=!1,wr=Dn(t,n),Dd=!1,Dr=_i=Uc=Hs=ns=_n=0,ci=tl=null,Nd=!1,Ra=dn(t,n),Xl(),a}function lv(t,n){Se=null,Ct.H=gc,n===yr||n===nc?(n=m0(),Qe=3):n===wf?(n=m0(),Qe=4):Qe=n===id?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vi=n,Ne===null&&(_n=1,vc(t,wi(n,t.current)))}function cv(){var t=Vn.current;return t===null?!0:(ze&4194048)===ze?Yn===null:(ze&62914560)===ze||(ze&536870912)!==0?t===Yn:!1}function uv(){var t=Ct.H;return Ct.H=gc,t===null?gc:t}function fv(){var t=Ct.A;return Ct.A=K1,t}function Bc(){_n=4,es||(ze&4194048)!==ze&&Vn.current!==null||(wr=!0),(ns&134217727)===0&&(Hs&134217727)===0||sn===null||as(sn,ze,_i,!1)}function zd(t,n,a){var s=Ye;Ye|=2;var c=uv(),u=fv();(sn!==t||ze!==n)&&(zc=null,zr(t,n)),n=!1;var _=_n;t:do try{if(Qe!==0&&Ne!==null){var A=Ne,G=vi;switch(Qe){case 8:Od(),_=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(n=!0);var at=Qe;if(Qe=0,vi=null,Pr(t,A,G,at),a&&wr){_=0;break t}break;default:at=Qe,Qe=0,vi=null,Pr(t,A,G,at)}}$1(),_=_n;break}catch(gt){lv(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Sa=Cs=null,Ye=s,Ct.H=c,Ct.A=u,Ne===null&&(sn=null,ze=0,Xl()),_}function $1(){for(;Ne!==null;)dv(Ne)}function tS(t,n){var a=Ye;Ye|=2;var s=uv(),c=fv();sn!==t||ze!==n?(zc=null,Oc=Y()+500,zr(t,n)):wr=Dn(t,n);t:do try{if(Qe!==0&&Ne!==null){n=Ne;var u=vi;e:switch(Qe){case 1:Qe=0,vi=null,Pr(t,n,u,1);break;case 2:case 9:if(h0(u)){Qe=0,vi=null,hv(n);break}n=function(){Qe!==2&&Qe!==9||sn!==t||(Qe=7),oa(t)},u.then(n,n);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:h0(u)?(Qe=0,vi=null,hv(n)):(Qe=0,vi=null,Pr(t,n,u,7));break;case 5:var _=null;switch(Ne.tag){case 26:_=Ne.memoizedState;case 5:case 27:var A=Ne;if(_?a_(_):A.stateNode.complete){Qe=0,vi=null;var G=A.sibling;if(G!==null)Ne=G;else{var at=A.return;at!==null?(Ne=at,Fc(at)):Ne=null}break e}}Qe=0,vi=null,Pr(t,n,u,5);break;case 6:Qe=0,vi=null,Pr(t,n,u,6);break;case 8:Od(),_n=6;break t;default:throw Error(r(462))}}eS();break}catch(gt){lv(t,gt)}while(!0);return Sa=Cs=null,Ct.H=s,Ct.A=c,Ye=a,Ne!==null?0:(sn=null,ze=0,Xl(),_n)}function eS(){for(;Ne!==null&&!Vt();)dv(Ne)}function dv(t){var n=Cg(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,n===null?Fc(t):Ne=n}function hv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Sg(a,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=Sg(a,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:Vf(n);var s=n;s===zn&&(Ce?(Ql(s),s.tag===5&&s.stateNode!=null&&(ln=s.stateNode)):(Ql(s),Ce=!0));default:Dg(a,n),n=Ne=n0(n,Ra),n=Cg(a,n,Ra)}t.memoizedProps=t.pendingProps,n===null?Fc(t):Ne=n}function Pr(t,n,a,s){Sa=Cs=null,Vf(n),Sr=null,Fo=0;var c=n.return;try{if(V1(t,c,n,a,ze)){_n=1,vc(t,wi(a,t.current)),Ne=null;return}}catch(u){if(c!==null)throw Ne=c,u;_n=1,vc(t,wi(a,t.current)),Ne=null;return}n.flags&32768?(Ce||s===1?t=!0:wr||(ze&536870912)!==0?t=!1:(es=t=!0,(s===2||s===9||s===3||s===6)&&(s=Vn.current,s!==null&&s.tag===13&&(s.flags|=16384))),pv(n,t)):Fc(n)}function Fc(t){var n=t;do{if((n.flags&32768)!==0){pv(n,es);return}t=n.return;var a=q1(n.alternate,n,Ra);if(a!==null){Ne=a;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=t}while(n!==null);_n===0&&(_n=5)}function pv(t,n){do{var a=W1(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);_n=6,Ne=null}function mv(t,n,a,s,c,u,_,A,G,at,gt,Tt){t.cancelPendingCommit=null;do Hc();while(mn!==0);if((Ye&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===sn&&(Ne=sn=null,ze=0),Gs=n,ki=t,ra=a,Ld=c,av=s,nS(t,n,a,_,A,G,Tt)}}function nS(t,n,a,s,c,u,_){var A=n.lanes|n.childLanes;if(Ud=A,A|=gf,Ba(t,a,A,s,c,u),Ur=null,(a&335544064)===a?(Lr=D1(t),s=10262):(Lr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,lS(J,function(){return Fd(),null})):(t.callbackNode=null,t.callbackPriority=0),bc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Ct.T,Ct.T=null,c=Zt.p,Zt.p=2,u=Ye,Ye|=4;try{Y1(t,n,a)}finally{Ye=u,Zt.p=c,Ct.T=s}}mn=1,bc?Nr=CS(_,t.containerInfo,Lr,Pd,Id,aS,Bd,Fd,iS):(Pd(),Id(),Bd())}function iS(t){if(mn!==0){var n=ki.onRecoverableError;n(t,{componentStack:null})}}function aS(){mn===3&&(mn=0,Qg(Gs,ki),mn=4)}function Pd(){if(mn===1){mn=0;var t=ki,n=Gs,a=ra,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Ct.T,Ct.T=null;var c=Zt.p;Zt.p=2;var u=Ye;Ye|=4;try{Qo=Cc=!1,Zg(n,t,a),a=Qd;var _=qm(t.containerInfo),A=a.focusedElem,G=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&Xm(A.ownerDocument.documentElement,A)){if(G!==null&&ff(A)){var at=G.start,gt=G.end;if(gt===void 0&&(gt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(gt,A.value.length);else{var Tt=A.ownerDocument||document,tt=Tt&&Tt.defaultView||window;if(tt.getSelection){var pt=tt.getSelection(),Yt=A.textContent.length,re=Math.min(G.start,Yt),Me=G.end===void 0?re:Math.min(G.end,Yt);!pt.extend&&re>Me&&(_=Me,Me=re,re=_);var it=jm(A,re),W=jm(A,Me);if(it&&W&&(pt.rangeCount!==1||pt.anchorNode!==it.node||pt.anchorOffset!==it.offset||pt.focusNode!==W.node||pt.focusOffset!==W.offset)){var ft=Tt.createRange();ft.setStart(it.node,it.offset),pt.removeAllRanges(),re>Me?(pt.addRange(ft),pt.extend(W.node,W.offset)):(ft.setEnd(W.node,W.offset),pt.addRange(ft))}}}}for(Tt=[],pt=A;pt=pt.parentNode;)pt.nodeType===1&&Tt.push({element:pt,left:pt.scrollLeft,top:pt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Tt.length;A++){var Et=Tt[A];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}jr=!!Kd,Qd=Kd=null}finally{Ye=u,Zt.p=c,Ct.T=s}}t.current=n,mn=2}}function Id(){if(mn===2){mn=0;var t=ki,n=Gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Ct.T,Ct.T=null;var s=Zt.p;Zt.p=2;var c=Ye;Ye|=4;try{kg(t,n.alternate,n)}finally{Ye=c,Zt.p=s,Ct.T=a}}mn=3}}function Bd(){if(mn===4||mn===3){mn=0;var t=Nr;Nr=null,ve();var n=ki,a=Gs,s=ra,c=av,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?mn=5:(mn=0,Gs=ki=null,gv(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(is=null),nt(s),a=a.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Ht,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Ct.T,u=Zt.p,Zt.p=2,Ct.T=null;try{for(var _=n.onRecoverableError,A=0;A<c.length;A++){var G=c[A];_(G.value,{componentStack:G.stack})}}finally{Ct.T=a,Zt.p=u}}if(c=Ur,_=Lr,Lr=null,c!==null&&(Ur=null,_===null&&(_=[]),t!==null))for(G=0;G<c.length;G++)a=(0,c[G])(_),a!==void 0&&t.finished.finally(a);(ra&3)!==0&&Hc(),oa(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Pc?el++:(el=0,Pc=n):(el=0,Pc=null),nl(0)}}function gv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Po(n)))}function Hc(){return Nr!==null&&(Nr.skipTransition(),Nr=null),Pd(),Id(),Bd(),Fd()}function Fd(){if(mn!==5)return!1;var t=ki,n=Ud;Ud=0;var a=nt(ra),s=Ct.T,c=Zt.p;try{Zt.p=32>a?32:a,Ct.T=null,a=Ld,Ld=null;var u=ki,_=ra;if(mn=0,Gs=ki=null,ra=0,(Ye&6)!==0)throw Error(r(331));var A=Ye;if(Ye|=4,ev(u.current),Jg(u,u.current,_,a),Ye=A,nl(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Ht,u)}catch{}return!0}finally{Zt.p=c,Ct.T=s,gv(t,n)}}function vv(t,n,a){n=wi(a,n),n=nd(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(Ai(t,2),oa(t))}function Je(t,n,a){if(t.tag===3)vv(t,t,a);else for(;n!==null;){if(n.tag===3){vv(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(is===null||!is.has(s))){t=wi(a,t),a=hg(2),s=Za(n,a,2),s!==null&&(pg(a,s,n,t),Ai(s,2),oa(s));break}}n=n.return}}function Hd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Q1;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Dd=!0,c.add(a),t=sS.bind(null,t,n,a),n.then(t,t))}function sS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,sn===t&&(ze&a)===a&&((_n===4||_n===3&&(ze&62914560)===ze&&300>Y()-Lc)&&(Ye&2)===0?zr(t,0):Uc|=a,Dr===ze&&(Dr=0)),oa(t)}function _v(t,n){n===0&&(n=Ia()),t=bs(t,n),t!==null&&(Ai(t,n),oa(t))}function rS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_v(t,a)}function oS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),_v(t,a)}function lS(t,n){return ce(t,n)}var Ir=null,Br=null,Gd=!1,Gc=!1,Vd=!1,ss=0;function oa(t){t!==Br&&t.next===null&&(Br===null?Ir=Br=t:Br=Br.next=t),Gc=!0,Gd||(Gd=!0,uS())}function nl(t,n){if(!Vd&&Gc){Vd=!0;do for(var a=!1,s=Ir;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var _=s.suspendedLanes,A=s.pingedLanes;u=(1<<31-_e(42|t)+1)-1,u&=c&~(_&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Mv(s,u))}else u=ze,u=Sn(s,s===sn?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Dn(s,u)||(a=!0,Mv(s,u));s=s.next}while(a);Vd=!1}}function cS(){xv()}function xv(){Gc=Gd=!1;var t=0;ss!==0&&SS()&&(t=ss);for(var n=Y(),a=null,s=Ir;s!==null;){var c=s.next,u=yv(s,n);u===0?(s.next=null,a===null?Ir=c:a.next=c,c===null&&(Br=a)):(a=s,(t!==0||(u&3)!==0)&&(Gc=!0)),s=c}mn!==0&&mn!==5||nl(t),ss!==0&&(ss=0)}function yv(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var _=31-_e(u),A=1<<_,G=c[_];G===-1?((A&a)===0||(A&s)!==0)&&(c[_]=To(A,n)):G<=n&&(t.expiredLanes|=A),u&=~A}if(n=sn,a=ze,a=Sn(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ee(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Dn(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ee(s),nt(a)){case 2:case 8:a=X;break;case 32:a=J;break;case 268435456:a=I;break;default:a=J}return s=Sv.bind(null,t),a=ce(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ee(s),t.callbackPriority=2,t.callbackNode=null,2}function Sv(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hc()&&t.callbackNode!==a)return null;var s=ze;return s=Sn(t,t===sn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(rv(t,s,n),yv(t,Y()),t.callbackNode!=null&&t.callbackNode===a?Sv.bind(null,t):null)}function Mv(t,n){if(Hc())return null;rv(t,n,!0)}function uS(){ES(function(){(Ye&6)!==0?ce(F,cS):xv()})}function kd(){if(ss===0){var t=Ns;t===0&&(t=fn,fn<<=1,(fn&261888)===0&&(fn=256)),ss=t}return ss}function Ev(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Il(t)}function fS(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var u=Ev((c[ae]||null).action),_=s.submitter;_&&(n=(n=_[ae]||null)?Ev(n.formAction):_.getAttribute("formAction"),n!==null&&(u=n,_=null));var A=new Gl("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ss!==0){var G=new FormData(c,_);Qf(a,{pending:!0,data:G,method:c.method,action:u},null,G)}}else typeof u=="function"&&(A.preventDefault(),G=new FormData(c,_),Qf(a,{pending:!0,data:G,method:c.method,action:u},u,G))},currentTarget:c}]})}}for(var jd=0;jd<mf.length;jd++){var Xd=mf[jd],dS=Xd.toLowerCase(),hS=Xd[0].toUpperCase()+Xd.slice(1);Fi(dS,"on"+hS)}Fi(Zm,"onAnimationEnd"),Fi(Km,"onAnimationIteration"),Fi(Qm,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(M1,"onTransitionRun"),Fi(E1,"onTransitionStart"),Fi(T1,"onTransitionCancel"),Fi(Jm,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Tv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var _=s.length-1;0<=_;_--){var A=s[_],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==u&&c.isPropagationStopped())break t;u=A,c.currentTarget=at;try{u(c)}catch(gt){jl(gt)}c.currentTarget=null,u=G}else for(_=0;_<s.length;_++){if(A=s[_],G=A.instance,at=A.currentTarget,A=A.listener,G!==u&&c.isPropagationStopped())break t;u=A,c.currentTarget=at;try{u(c)}catch(gt){jl(gt)}c.currentTarget=null,u=G}}}}function Ue(t,n){var a=n[fe];a===void 0&&(a=n[fe]=new Set);var s=t+"__bubble";a.has(s)||(bv(n,t,2,!1),a.add(s))}function qd(t,n,a){var s=0;n&&(s|=4),bv(a,t,s,n)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Wd(t){if(!t[Vc]){t[Vc]=!0,on.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||qd(a,!1,t),qd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vc]||(n[Vc]=!0,qd("selectionchange",!1,n))}}function bv(t,n,a,s){switch(p_(n)){case 2:var c=rM;break;case 8:c=oM;break;default:c=hh}a=c.bind(null,n,a,t),c=void 0,!tf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Yd(t,n,a,s,c){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var A=s.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=s.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=We(A),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){s=u=_;continue t}A=A.parentNode}}s=s.return}bm(function(){var at=u,gt=Ju(a),Tt=[];t:{var tt=$m.get(t);if(tt!==void 0){var pt=Gl,Yt=t;switch(t){case"keypress":if(Fl(a)===0)break t;case"keydown":case"keyup":pt=Jy;break;case"focusin":Yt="focus",pt=sf;break;case"focusout":Yt="blur",pt=sf;break;case"beforeblur":case"afterblur":pt=sf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pt=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pt=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pt=i1;break;case Zm:case Km:case Qm:pt=ky;break;case Jm:pt=s1;break;case"scroll":case"scrollend":pt=By;break;case"wheel":pt=o1;break;case"copy":case"cut":case"paste":pt=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pt=Dm;break;case"submit":pt=e1;break;case"toggle":case"beforetoggle":pt=c1}var re=(n&4)!==0,Me=!re&&(t==="scroll"||t==="scrollend"),it=re?tt!==null?tt+"Capture":null:tt;re=[];for(var W=at,ft;W!==null;){var Et=W;if(ft=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ft===null||it===null||(Et=bo(W,it),Et!=null&&re.push(al(W,Et,ft))),Me)break;W=W.return}0<re.length&&(tt=new pt(tt,Yt,null,a,gt),Tt.push({event:tt,listeners:re}))}}if((n&7)===0){t:{if(pt=t==="mouseover"||t==="pointerover",tt=t==="mouseout"||t==="pointerout",pt&&a!==Qu&&(Yt=a.relatedTarget||a.fromElement)&&(We(Yt)||Yt[pe]))break t;(tt||pt)&&(Yt=gt.window===gt?gt:(pt=gt.ownerDocument)?pt.defaultView||pt.parentWindow:window,tt?(pt=a.relatedTarget||a.toElement,tt=at,pt=pt?We(pt):null,pt!==null&&(Me=f(pt),re=pt.tag,pt!==Me||re!==5&&re!==27&&re!==6)&&(pt=null)):(tt=null,pt=at),tt!==pt&&(re=Cm,Et="onMouseLeave",it="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(re=Dm,Et="onPointerLeave",it="onPointerEnter",W="pointer"),Me=tt==null?Yt:Nn(tt),ft=pt==null?Yt:Nn(pt),Yt=new re(Et,W+"leave",tt,a,gt),Yt.target=Me,Yt.relatedTarget=ft,Et=null,We(gt)===at&&(re=new re(it,W+"enter",pt,a,gt),re.target=ft,re.relatedTarget=Me,Et=re),Me=Et,re=tt&&pt?P(tt,pt,mS):null,tt!==null&&Av(Tt,Yt,tt,re,!1),pt!==null&&Me!==null&&Av(Tt,Me,pt,re,!0)))}t:{if(tt=at?Nn(at):window,pt=tt.nodeName&&tt.nodeName.toLowerCase(),pt==="select"||pt==="input"&&tt.type==="file")var ne=Bm;else if(Pm(tt))if(Fm)ne=x1;else{ne=v1;var Pe=g1}else pt=tt.nodeName,!pt||pt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?at&&Ku(at.elementType)&&(ne=Bm):ne=_1;if(ne&&(ne=ne(t,at))){Im(Tt,ne,a,gt);break t}Pe&&Pe(t,tt,at)}switch(Pe=at?Nn(at):window,t){case"focusin":(Pm(Pe)||Pe.contentEditable==="true")&&(dr=Pe,df=at,Lo=null);break;case"focusout":Lo=df=dr=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Wm(Tt,a,gt);break;case"selectionchange":if(S1)break;case"keydown":case"keyup":Wm(Tt,a,gt)}var ue;if(of)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else fr?Om(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Nm&&a.locale!=="ko"&&(fr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&fr&&(ue=Am()):(Ha=gt,ef="value"in Ha?Ha.value:Ha.textContent,fr=!0)),Pe=kc(at,ge),0<Pe.length&&(ge=new wm(ge,t,null,a,gt),Tt.push({event:ge,listeners:Pe}),ue?ge.data=ue:(ue=zm(a),ue!==null&&(ge.data=ue)))),(ue=f1?d1(t,a):h1(t,a))&&(ge=kc(at,"onBeforeInput"),0<ge.length&&(Pe=new wm("onBeforeInput","beforeinput",null,a,gt),Tt.push({event:Pe,listeners:ge}),Pe.data=ue)),fS(Tt,t,at,a,gt)}Tv(Tt,n)})}function al(t,n,a){return{instance:t,listener:n,currentTarget:a}}function kc(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=bo(t,a),c!=null&&s.unshift(al(t,c,u)),c=bo(t,n),c!=null&&s.push(al(t,c,u))),t.tag===3)return s;t=t.return}return[]}function mS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Av(t,n,a,s,c){for(var u=n._reactName,_=[];a!==null&&a!==s;){var A=a,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===s)break;A!==5&&A!==26&&A!==27||at===null||(G=at,c?(at=bo(a,u),at!=null&&_.unshift(al(a,at,G))):c||(at=bo(a,u),at!=null&&_.push(al(a,at,G)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var gS=/\r\n?/g,vS=/\u0000|\uFFFD/g;function Rv(t){return(typeof t=="string"?t:""+t).replace(gS,`
`).replace(vS,"")}function Cv(t,n){return n=Rv(n),Rv(t)===n}function $e(t,n,a,s,c,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||lr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&lr(t,""+s);else return;break;case"className":Pl(t,"class",s);break;case"tabIndex":Pl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(t,a,s);break;case"style":Em(t,s,u);return;case"data":if(n!=="object"){Pl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Il(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&$e(t,n,"name",c.name,c,null),$e(t,n,"formEncType",c.formEncType,c,null),$e(t,n,"formMethod",c.formMethod,c,null),$e(t,n,"formTarget",c.formTarget,c,null)):($e(t,n,"encType",c.encType,c,null),$e(t,n,"method",c.method,c,null),$e(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Il(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Qi);return;case"onScroll":s!=null&&Ue("scroll",t);return;case"onScrollEnd":s!=null&&Ue("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Il(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ue("beforetoggle",t),Ue("toggle",t),zl(t,"popover",s);break;case"xlinkActuate":ma(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ma(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ma(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ma(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ma(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ma(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ma(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ma(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ma(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":zl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Py.get(a)||a,zl(t,a,s);else return}ke=!0}function Zd(t,n,a,s,c,u){switch(a){case"style":Em(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")lr(t,s);else if(typeof s=="number"||typeof s=="bigint")lr(t,""+s);else return;break;case"onScroll":s!=null&&Ue("scroll",t);return;case"onScrollEnd":s!=null&&Ue("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Qn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[ae]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,c);break t}ke=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):zl(t,a,s)}return}ke=!0}function Xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",t),Ue("load",t);var s=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var _=a[u];if(_!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$e(t,n,u,_,a,null)}}c&&$e(t,n,"srcSet",a.srcSet,a,null),s&&$e(t,n,"src",a.src,a,null);return;case"input":Ue("invalid",t);var A=u=_=c=null,G=null,at=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":c=gt;break;case"type":_=gt;break;case"checked":G=gt;break;case"defaultChecked":at=gt;break;case"value":u=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:$e(t,n,s,gt,a,null)}}xm(t,u,A,G,at,_,c,!1);return;case"select":Ue("invalid",t),s=_=u=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":u=A;break;case"defaultValue":_=A;break;case"multiple":s=A;default:$e(t,n,c,A,a,null)}n=u,a=_,t.multiple=!!s,n!=null?or(t,!!s,n,!1):a!=null&&or(t,!!s,a,!0);return;case"textarea":Ue("invalid",t),u=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":s=A;break;case"defaultValue":c=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:$e(t,n,_,A,a,null)}Sm(t,s,c,u);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(s=a[G],s!=null))switch(G){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:$e(t,n,G,s,a,null)}return;case"dialog":Ue("beforetoggle",t),Ue("toggle",t),Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":Ue("load",t);break;case"video":case"audio":for(s=0;s<il.length;s++)Ue(il[s],t);break;case"image":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"embed":case"source":case"link":Ue("error",t),Ue("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(s=a[at],s!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$e(t,n,at,s,a,null)}return;default:if(Ku(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&Zd(t,n,gt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&$e(t,n,A,s,a,null))}var _S={};function xS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,_=null,A=null,G=null,at=null,gt=null;for(pt in a){var Tt=a[pt];if(a.hasOwnProperty(pt)&&Tt!=null)switch(pt){case"checked":break;case"value":break;case"defaultValue":G=Tt;default:s.hasOwnProperty(pt)||$e(t,n,pt,null,s,Tt)}}for(var tt in s){var pt=s[tt];if(Tt=a[tt],s.hasOwnProperty(tt)&&(pt!=null||Tt!=null))switch(tt){case"type":pt!==Tt&&(ke=!0),u=pt;break;case"name":pt!==Tt&&(ke=!0),c=pt;break;case"checked":pt!==Tt&&(ke=!0),at=pt;break;case"defaultChecked":pt!==Tt&&(ke=!0),gt=pt;break;case"value":pt!==Tt&&(ke=!0),_=pt;break;case"defaultValue":pt!==Tt&&(ke=!0),A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:pt!==Tt&&$e(t,n,tt,pt,s,Tt)}}Yu(t,_,A,G,at,gt,u,c);return;case"select":pt=_=A=tt=null;for(u in a)if(G=a[u],a.hasOwnProperty(u)&&G!=null)switch(u){case"value":break;case"multiple":pt=G;default:s.hasOwnProperty(u)||$e(t,n,u,null,s,G)}for(c in s)if(u=s[c],G=a[c],s.hasOwnProperty(c)&&(u!=null||G!=null))switch(c){case"value":u!==G&&(ke=!0),tt=u;break;case"defaultValue":u!==G&&(ke=!0),A=u;break;case"multiple":u!==G&&(ke=!0),_=u;default:u!==G&&$e(t,n,c,u,s,G)}n=A,a=_,s=pt,tt!=null?or(t,!!a,tt,!1):!!s!=!!a&&(n!=null?or(t,!!a,n,!0):or(t,!!a,a?[]:"",!1));return;case"textarea":pt=tt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:$e(t,n,A,null,s,c)}for(_ in s)if(c=s[_],u=a[_],s.hasOwnProperty(_)&&(c!=null||u!=null))switch(_){case"value":c!==u&&(ke=!0),tt=c;break;case"defaultValue":c!==u&&(ke=!0),pt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&$e(t,n,_,c,s,u)}ym(t,tt,pt);return;case"option":for(var Yt in a)if(tt=a[Yt],a.hasOwnProperty(Yt)&&tt!=null&&!s.hasOwnProperty(Yt))switch(Yt){case"selected":t.selected=!1;break;default:$e(t,n,Yt,null,s,tt)}for(G in s)if(tt=s[G],pt=a[G],s.hasOwnProperty(G)&&tt!==pt&&(tt!=null||pt!=null))switch(G){case"selected":tt!==pt&&(ke=!0),t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:$e(t,n,G,tt,s,pt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)tt=a[re],a.hasOwnProperty(re)&&tt!=null&&!s.hasOwnProperty(re)&&$e(t,n,re,null,s,tt);for(at in s)if(tt=s[at],pt=a[at],s.hasOwnProperty(at)&&tt!==pt&&(tt!=null||pt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:$e(t,n,at,tt,s,pt)}return;default:if(Ku(n)){for(var Me in a)tt=a[Me],a.hasOwnProperty(Me)&&tt!==void 0&&!s.hasOwnProperty(Me)&&Zd(t,n,Me,void 0,s,tt);for(gt in s)tt=s[gt],pt=a[gt],!s.hasOwnProperty(gt)||tt===pt||tt===void 0&&pt===void 0||Zd(t,n,gt,tt,s,pt);return}}for(var it in a)tt=a[it],a.hasOwnProperty(it)&&tt!=null&&!s.hasOwnProperty(it)&&$e(t,n,it,null,s,tt);for(Tt in s)tt=s[Tt],pt=a[Tt],!s.hasOwnProperty(Tt)||tt===pt||tt==null&&pt==null||$e(t,n,Tt,tt,s,pt)}function wv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],u=c.transferSize,_=c.initiatorType,A=c.duration;if(u&&A&&wv(_)){for(_=0,A=c.responseEnd,s+=1;s<a.length;s++){var G=a[s],at=G.startTime;if(at>A)break;var gt=G.transferSize,Tt=G.initiatorType;gt&&wv(Tt)&&(G=G.responseEnd,_+=gt*(G<A?1:(A-at)/(G-at)))}if(--s,n+=8*(u+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kd=null,Qd=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function Dv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uv(t,n,a,s){return a=sl(a).createElement(t),a[Gt]=s,a[ae]=n,Xn(a,t,n),Ve(a),a}function Jd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $d=null;function SS(){var t=window.event;return t&&t.type==="popstate"?t===$d?!1:($d=t,!0):($d=null,!1)}var th=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Ov=typeof requestAnimationFrame=="function"?requestAnimationFrame:th,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(t){return Lv.resolve(null).then(t).catch(TS)}:th;function TS(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function zv(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),Xr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")lh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,lh(a);for(var u=a.firstChild;u;){var _=u.nextSibling,A=u.nodeName;u[qe]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=_}}else a==="body"&&lh(t.ownerDocument.body);a=c}while(a);Xr(n)}function Pv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Iv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Bv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function bS(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function eh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return bS(n,a,t)}function AS(t){return t.documentElement.clientHeight}function RS(t){this.addEventListener("load",t),this.addEventListener("error",t)}function CS(t,n,a,s,c,u,_,A,G){var at=n.nodeType===9?n:n.ownerDocument;try{var gt=at.startViewTransition({update:function(){var tt=at.defaultView,pt=tt.navigation&&tt.navigation.transition,Yt=at.fonts.status;s();var re=[];if(Yt==="loaded"&&(AS(at),at.fonts.status==="loading"&&re.push(at.fonts.ready)),Yt=re.length,t!==null)for(var Me=t.suspenseyImages,it=0,W=0;W<Me.length;W++){var ft=Me[W];if(!ft.complete){var Et=ft.getBoundingClientRect();if(0<Et.bottom&&0<Et.right&&Et.top<tt.innerHeight&&Et.left<tt.innerWidth){if(it+=s_(ft),it>qc){re.length=Yt;break}ft=new Promise(RS.bind(ft)),re.push(ft)}}}if(0<re.length)return tt=Promise.race([Promise.all(re),new Promise(function(ne){return setTimeout(ne,500)})]).then(c,c),(pt?Promise.allSettled([pt.finished,tt]):tt).then(u,u);if(c(),pt)return pt.finished.then(u,u);u()},types:a});at.__reactViewTransition=gt;var Tt=[];return gt.ready.then(function(){for(var tt=at.documentElement.getAnimations({subtree:!0}),pt=0;pt<tt.length;pt++){var Yt=tt[pt],re=Yt.effect,Me=re.pseudoElement;if(Me!=null&&Me.startsWith("::view-transition")){Tt.push(Yt),Yt=re.getKeyframes();for(var it=Me=void 0,W=!0,ft=0;ft<Yt.length;ft++){var Et=Yt[ft],ne=Et.width;if(Me===void 0)Me=ne;else if(Me!==ne){W=!1;break}if(ne=Et.height,it===void 0)it=ne;else if(it!==ne){W=!1;break}delete Et.width,delete Et.height,Et.transform==="none"&&delete Et.transform}W&&Me!==void 0&&it!==void 0&&(re.setKeyframes(Yt),W=getComputedStyle(re.target,re.pseudoElement),W.width!==Me||W.height!==it)&&(W=Yt[0],W.width=Me,W.height=it,W=Yt[Yt.length-1],W.width=Me,W.height=it,re.setKeyframes(Yt))}}_()},function(tt){at.__reactViewTransition===gt&&(at.__reactViewTransition=null);try{if(typeof tt=="object"&&tt!==null)switch(tt.name){case"InvalidStateError":(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null)}tt!==null&&G(tt)}finally{s(),c(),_()}}),gt.finished.finally(function(){for(var tt=0;tt<Tt.length;tt++)Tt[tt].cancel();at.__reactViewTransition===gt&&(at.__reactViewTransition=null),A()}),gt}catch{return s(),c(),_(),null}}function Vs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Vs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Vs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[c])}return s},Vs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Fv(t){return{name:t,group:new Vs("group",t),imagePair:new Vs("image-pair",t),old:new Vs("old",t),new:new Vs("new",t)}}function yi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}yi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Gv(u,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(G){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,G):n.handleEvent(G)}),s!==null&&(c=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Fr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:c}),m(this._fragmentFiber.child,!1,wS,t,A,s)}this._eventListeners=u}};function wS(t,n,a,s){return S(t).addEventListener(n,a,s),!1}yi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Gv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var u=c.cleanup;c=Fr(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,DS,t,a,c),s.splice(n,1),u!==null&&u()}};function DS(t,n,a,s){return S(t).removeEventListener(n,a,s),!1}function Fr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Hv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Gv(t,n,a,s){if(t.length===0)return-1;s=Hv(s);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&Hv(u.optionsOrUseCapture)===s)return c}return-1}yi.prototype.dispatchEvent=function(t){var n=g(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];s.addEventListener(u.type,u.attachedListener,Fr(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],s.removeEventListener(u.type,u.attachedListener,Fr(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},yi.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Vv,t,void 0,void 0)};function Vv(t,n){return t.tag===6?!1:(t=S(t),VS(t,n))}yi.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,nh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Vv(n[a],t);a--);};function nh(t,n){return n.push(t),!1}yi.prototype.blur=function(){var t=g(this._fragmentFiber);t!==null&&(t=S(t),t=sl(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,NS,t,void 0,void 0))};function NS(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}yi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,US,t,void 0,void 0)};function US(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}yi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,LS,t,void 0,void 0);for(var a=n=0;a<ji.length;a++){var s=ji[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):ji[n++]=s}ji.length=n}};function LS(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var ji=[],ih=!1;function OS(t,n,a){ji.push({fragmentInstance:t,observer:n,instance:a}),ih||(ih=!0,kS(function(){ih=!1;var s=ji;ji=[];for(var c=0;c<s.length;c++){var u=s[c];u.observer.unobserve(u.instance)}}))}yi.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,zS,t,void 0,void 0),t};function zS(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}yi.prototype.getRootNode=function(t){var n=g(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},yi.prototype.compareDocumentPosition=function(t){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,nh,a,void 0,void 0);var s=S(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),c=S(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=c.compareDocumentPosition(t),G=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&u&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&c===t||G||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||PS(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function PS(t,n,a,s,c){var u=We(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=g(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=P(a,u,k),n===null?n=!1:(m(n,!0,z,u,a),u=x,x=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=P(s,u,k),n===null?n=!1:(m(n,!0,C,u,s),u=x,L=x=null,n=u!==null)),n):!1}function kv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}yi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,nh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||g(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=S(s),kv(t,a);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=S(c),kv(c,a)):S(c).scrollIntoView(t),s+=a?-1:1}};function IS(t,n){return t=S(t),jv(t,n),!1}function jv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Xv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var _=0,A=0;A<ji.length;A++){var G=ji[A];(G.fragmentInstance!==n||G.observer!==u||G.instance!==t)&&(ji[_++]=G)}ji.length=_,u.observe(t)}),jv(t,n))}function BS(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?OS(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function ah(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ah(a),de(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function FS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[qe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Oi(t.nextSibling),t===null)break}return null}function HS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Oi(t.nextSibling),t===null))return null;return t}function qv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Oi(t.nextSibling),t===null))return null;return t}function sh(t){return t.data==="$?"||t.data==="$~"}function rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function GS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var oh=null;function Wv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Yv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function VS(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function kS(t){Ov(function(){Ov(function(n){return t(n)})})}function Zv(t,n,a){switch(n=sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Kv(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&$e(t,n,s,null,_S,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Qi&&(t.onclick=null),de(t)}function lh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);de(t)}var zi=new Map,Qv=new Set;function rl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ca=Zt.d;Zt.d={f:jS,r:XS,D:qS,C:WS,L:YS,m:ZS,X:QS,S:KS,M:JS};function jS(){var t=Ca.f(),n=Ic();return t||n}function XS(t){var n=Re(t);n!==null&&n.tag===5&&n.type==="form"?$0(n):Ca.r(t)}var Hr=typeof document>"u"?null:document;function Jv(t,n,a){var s=Hr;if(s&&typeof n=="string"&&n){var c=Ri(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qv.has(c)||(Qv.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Xn(n,"link",t),Ve(n),s.head.appendChild(n)))}}function qS(t){Ca.D(t),Jv("dns-prefetch",t,null)}function WS(t,n){Ca.C(t,n),Jv("preconnect",t,n)}function YS(t,n,a){Ca.L(t,n,a);var s=Hr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ri(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ri(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ri(a.imageSizes)+'"]')):c+='[href="'+Ri(t)+'"]';var u=c;switch(n){case"style":u=Gr(t);break;case"script":u=Vr(t)}if(!(zi.has(u)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),zi.set(u,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ol(u))||n==="script"&&s.querySelector(ll(u))))){var _=s.createElement("link");Xn(_,"link",t),n==="style"&&(_[Ge]=!0,_.onload=_.onerror=function(){Fa(_)}),Ve(_),s.head.appendChild(_)}}}function ZS(t,n){Ca.m(t,n);var a=Hr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ri(s)+'"][href="'+Ri(t)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Vr(t)}if(!zi.has(u)&&(t=O({rel:"modulepreload",href:t},n),zi.set(u,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(u)))return}s=a.createElement("link"),Xn(s,"link",t),Ve(s),a.head.appendChild(s)}}}function KS(t,n,a){Ca.S(t,n,a);var s=Hr;if(s&&t){var c=di(s).hoistableStyles,u=Gr(t);n=n||"default";var _=c.get(u);if(!_){var A={loading:0,preload:null};if(_=s.querySelector(ol(u)))A.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=zi.get(u))&&ch(t,a);var G=_=s.createElement("link");Ve(G),Xn(G,"link",t),G._p=new Promise(function(at,gt){G.onload=at,G.onerror=gt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,jc(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(u,_)}}}function QS(t,n){Ca.X(t,n);var a=Hr;if(a&&t){var s=di(a).hoistableScripts,c=Vr(t),u=s.get(c);u||(u=a.querySelector(ll(c)),u||(t=O({src:t,async:!0},n),(n=zi.get(c))&&uh(t,n),u=a.createElement("script"),Ve(u),Xn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function JS(t,n){Ca.M(t,n);var a=Hr;if(a&&t){var s=di(a).hoistableScripts,c=Vr(t),u=s.get(c);u||(u=a.querySelector(ll(c)),u||(t=O({src:t,async:!0,type:"module"},n),(n=zi.get(c))&&uh(t,n),u=a.createElement("script"),Ve(u),Xn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function $v(t,n,a,s){var c=(c=yt.current)?rl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Gr(a.href),n=di(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Gr(a.href);var u=di(c).hoistableStyles,_=u.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,_),(u=c.querySelector(ol(t)))?u._p||(_.instance=u,_.state.loading=5):(u=zi.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zi.set(t,u)),$S(c,t,u,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Vr(a),n=di(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Gr(t){return'href="'+Ri(t)+'"'}function ol(t){return'link[rel="stylesheet"]['+t+"]"}function t_(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function $S(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ge]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ge]=!0,n.onload=n.onerror=Fa.bind(null,n),Xn(n,"link",a),Ve(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Vr(t){return'[src="'+Ri(t)+'"]'}function ll(t){return"script[async]"+t}function e_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ri(a.href)+'"]');if(s)return n.instance=s,Ve(s),s;var c=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ve(s),Xn(s,"style",c),jc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Gr(a.href);var u=t.querySelector(ol(c));if(u)return n.state.loading|=4,n.instance=u,Ve(u),u;s=t_(a),(c=zi.get(c))&&ch(s,c),u=(t.ownerDocument||t).createElement("link"),Ve(u);var _=u;return _._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),Xn(u,"link",s),n.state.loading|=4,jc(u,a.precedence,t),n.instance=u;case"script":return u=Vr(a.src),(c=t.querySelector(ll(u)))?(n.instance=c,Ve(c),c):(s=a,(c=zi.get(u))&&(s=O({},a),uh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ve(c),Xn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,jc(s,a.precedence,t));return n.instance}function jc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,_=0;_<s.length;_++){var A=s[_];if(A.dataset.precedence===n)u=A;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xc=null;function n_(t,n,a){if(Xc===null){var s=new Map,c=Xc=new Map;c.set(a,s)}else c=Xc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[qe]||u[Gt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var _=u.getAttribute(n)||"";_=t+_;var A=s.get(_);A?A.push(u):s.set(_,[u])}}return s}function fh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function a_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function s_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function r_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=s_(n),t.suspenseyImages.push(n)),t=iM.bind(t),n.decode().then(t,t))}function eM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Gr(s.href),u=n.querySelector(ol(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Ve(u);return}u=n.ownerDocument||n,s=t_(s),(c=zi.get(c))&&ch(s,c),u=u.createElement("link"),Ve(u);var _=u;_._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),Xn(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var qc=0;function nM(t,n){return t.stylesheets&&t.count===0&&Yc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Yc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&qc===0&&(qc=62500*yS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>qc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function o_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function cl(){this.count--,o_(this)}function iM(){this.imgCount--,o_(this)}var Wc=null;function Yc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wc=new Map,n.forEach(aM,t),Wc=null,cl.call(t))}function aM(t,n){if(!(n.state.loading&4)){var a=Wc.get(t);if(a)var s=a.get(null);else{a=new Map,Wc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var _=c[u];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),u=a.get(_)||s,u===s&&a.set(null,c),a.set(_,c),this.count++,s=cl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var kr={$$typeof:st,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function sM(t,n,a,s,c,u,_,A,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.hiddenUpdates=Hn(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.transitionTypes=null,this.incompleteTransitions=new Map}function l_(t,n,a,s,c,u,_,A,G,at,gt,Tt){return t=new sM(t,n,a,_,G,at,gt,Tt,A),n=1,u===!0&&(n|=24),u=ri(3,null,null,n),t.current=u,u.stateNode=t,n=Af(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Df(u),t}function c_(t){return t?(t=mr,t):mr}function u_(t,n,a,s,c,u){c=c_(c),s.context===null?s.context=c:s.pendingContext=c,s=Ya(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Za(t,s,n),a!==null&&(ui(a,t,n),Ho(a,t,n))}function f_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dh(t,n){f_(t,n),(t=t.alternate)&&f_(t,n)}function d_(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&ui(n,t,67108864),dh(t,67108864)}}function h_(t){if(t.tag===13||t.tag===31){var n=xi();n=ht(n);var a=bs(t,n);a!==null&&ui(a,t,n),dh(t,n)}}var jr=!0;function rM(t,n,a,s){var c=Ct.T;Ct.T=null;var u=Zt.p;try{Zt.p=2,hh(t,n,a,s)}finally{Zt.p=u,Ct.T=c}}function oM(t,n,a,s){var c=Ct.T;Ct.T=null;var u=Zt.p;try{Zt.p=8,hh(t,n,a,s)}finally{Zt.p=u,Ct.T=c}}function hh(t,n,a,s){if(jr){var c=ph(s);if(c===null)Yd(t,n,s,Zc,a),m_(t,s);else if(cM(c,t,n,a,s))s.stopPropagation();else if(m_(t,s),n&4&&-1<lM.indexOf(t)){for(;c!==null;){var u=Re(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var _=rn(u.pendingLanes);if(_!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var G=1<<31-_e(_);A.entanglements[1]|=G,_&=~G}oa(u),(Ye&6)===0&&(Oc=Y()+500,nl(0))}}break;case 31:case 13:A=bs(u,2),A!==null&&ui(A,u,2),Ic(),dh(u,2)}if(u=ph(s),u===null&&Yd(t,n,s,Zc,a),u===c)break;c=u}c!==null&&s.stopPropagation()}else Yd(t,n,s,null,a)}}function ph(t){return t=Ju(t),mh(t)}var Zc=null;function mh(t){if(Zc=null,t=We(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Zc=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case F:return 2;case X:return 8;case J:case K:return 32;case I:return 268435456;default:return 32}default:return 32}}var gh=!1,os=null,ls=null,cs=null,ul=new Map,fl=new Map,us=[],lM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function dl(t,n,a,s,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},n!==null&&(n=Re(n),n!==null&&d_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function cM(t,n,a,s,c){switch(n){case"focusin":return os=dl(os,t,n,a,s,c),!0;case"dragenter":return ls=dl(ls,t,n,a,s,c),!0;case"mouseover":return cs=dl(cs,t,n,a,s,c),!0;case"pointerover":var u=c.pointerId;return ul.set(u,dl(ul.get(u)||null,t,n,a,s,c)),!0;case"gotpointercapture":return u=c.pointerId,fl.set(u,dl(fl.get(u)||null,t,n,a,s,c)),!0}return!1}function g_(t){var n=We(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,qt(t.priority,function(){h_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,qt(t.priority,function(){h_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ph(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Qu=s,a.target.dispatchEvent(s),Qu=null}else return n=Re(a),n!==null&&d_(n),t.blockedOn=a,!1;n.shift()}return!0}function v_(t,n,a){Kc(t)&&a.delete(n)}function uM(){gh=!1,os!==null&&Kc(os)&&(os=null),ls!==null&&Kc(ls)&&(ls=null),cs!==null&&Kc(cs)&&(cs=null),ul.forEach(v_),fl.forEach(v_)}function Qc(t,n){t.blockedOn===n&&(t.blockedOn=null,gh||(gh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,uM)))}var Jc=null;function __(t){Jc!==t&&(Jc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jc===t&&(Jc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(mh(s||a)===null)continue;break}var u=Re(a);u!==null&&(t.splice(n,3),n-=3,Qf(u,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Xr(t){function n(G){return Qc(G,t)}os!==null&&Qc(os,t),ls!==null&&Qc(ls,t),cs!==null&&Qc(cs,t),ul.forEach(n),fl.forEach(n);for(var a=0;a<us.length;a++){var s=us[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)g_(a),a.blockedOn===null&&us.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],u=a[s+1],_=c[ae]||null;if(typeof u=="function")_||__(a);else if(_){var A=null;if(u&&u.hasAttribute("formAction")){if(c=u,_=u[ae]||null)A=_.formAction;else if(mh(c)!==null)continue}else A=_.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),__(a)}}}function x_(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function vh(t){this._internalRoot=t}$c.prototype.render=vh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=xi();u_(a,s,t,n,null,null)},$c.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;u_(t.current,2,null,t,null,null),Ic(),n[pe]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,t),a===0&&g_(t)}};var y_=e.version;if(y_!=="19.3.1")throw Error(r(527,y_,"19.3.1"));Zt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var fM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Ht=tu.inject(fM),Kt=tu}catch{}}return pl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=cg,u=ug,_=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=l_(t,1,!1,null,null,a,s,null,c,u,_,x_),t[pe]=n.current,Wd(t),new vh(n)},pl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",u=cg,_=ug,A=fg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=l_(t,1,!0,n,a??null,s,c,G,u,_,A,x_),n.context=c_(null),a=n.current,s=xi(),s=ht(s),c=Ya(s),c.callback=null,Za(a,c,s),a=s,n.current.lanes=a,Ai(n,a),oa(n),t[pe]=n.current,Wd(t),new $c(n)},pl.version="19.3.1",pl}var D_;function EM(){if(D_)return yh.exports;D_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yh.exports=MM(),yh.exports}var TM=EM();const bM=Yx(TM);var AM=Zx();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kx=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=kt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:f,iconNode:d,...h},v)=>kt.createElement("svg",{ref:v,...CM,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:Kx("lucide",l),...h},[...d.map(([p,y])=>kt.createElement(p,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(o,e)=>{const i=kt.forwardRef(({className:r,...l},f)=>kt.createElement(wM,{ref:f,iconNode:e,className:Kx(`lucide-${RM(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=De("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=De("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=De("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=De("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=De("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=De("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=De("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=De("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=De("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=De("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=De("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=De("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=De("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=De("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=De("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=De("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=De("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=De("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=De("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=De("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=De("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=De("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=De("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=De("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=De("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=De("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=De("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=De("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=De("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=De("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=De("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=De("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=De("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=De("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=De("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=De("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=De("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const em="180",eE=0,U_=1,nE=2,Jx=1,$x=2,Oa=3,Ms=0,ii=1,ca=2,xs=0,uo=1,L_=2,O_=3,z_=4,iE=5,Js=100,aE=101,sE=102,rE=103,oE=104,lE=200,cE=201,uE=202,fE=203,up=204,fp=205,dE=206,hE=207,pE=208,mE=209,gE=210,vE=211,_E=212,xE=213,yE=214,dp=0,hp=1,pp=2,po=3,mp=4,gp=5,vp=6,_p=7,ty=0,SE=1,ME=2,ys=0,EE=1,TE=2,bE=3,ey=4,AE=5,RE=6,CE=7,ny=300,mo=301,go=302,xp=303,yp=304,Xu=306,Sp=1e3,er=1001,Mp=1002,bi=1003,wE=1004,ru=1005,ua=1006,Rh=1007,nr=1008,ha=1009,iy=1010,ay=1011,Al=1012,nm=1013,ir=1014,fa=1015,Ul=1016,im=1017,am=1018,Rl=1020,sy=35902,ry=35899,oy=1021,ly=1022,Zi=1023,Cl=1026,wl=1027,sm=1028,rm=1029,cy=1030,om=1031,lm=1033,Ou=33776,zu=33777,Pu=33778,Iu=33779,Ep=35840,Tp=35841,bp=35842,Ap=35843,Rp=36196,Cp=37492,wp=37496,Dp=37808,Np=37809,Up=37810,Lp=37811,Op=37812,zp=37813,Pp=37814,Ip=37815,Bp=37816,Fp=37817,Hp=37818,Gp=37819,Vp=37820,kp=37821,jp=36492,Xp=36494,qp=36495,Wp=36283,Yp=36284,Zp=36285,Kp=36286,DE=3200,NE=3201,uy=0,UE=1,_s="",Ei="srgb",vo="srgb-linear",Hu="linear",nn="srgb",qr=7680,P_=519,LE=512,OE=513,zE=514,fy=515,PE=516,IE=517,BE=518,FE=519,I_=35044,HE=35048,B_="300 es",da=2e3,Gu=2001;class yo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ch=Math.PI/180,Qp=180/Math.PI;function Ll(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zn[o&255]+Zn[o>>8&255]+Zn[o>>16&255]+Zn[o>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]).toLowerCase()}function Be(o,e,i){return Math.max(e,Math.min(i,o))}function GE(o,e){return(o%e+e)%e}function wh(o,e,i){return(1-i)*o+i*e}function ml(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function fi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,i=0){Fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Be(this.x,e.x,i.x),this.y=Be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Be(this.x,e,i),this.y=Be(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*l+e.x,this.y=f*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ol{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,d,h){let v=r[l+0],p=r[l+1],y=r[l+2],m=r[l+3];const g=f[d+0],E=f[d+1],T=f[d+2],D=f[d+3];if(h===0){e[i+0]=v,e[i+1]=p,e[i+2]=y,e[i+3]=m;return}if(h===1){e[i+0]=g,e[i+1]=E,e[i+2]=T,e[i+3]=D;return}if(m!==D||v!==g||p!==E||y!==T){let S=1-h;const x=v*g+p*E+y*T+m*D,L=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const k=Math.sqrt(z),P=Math.atan2(k,x*L);S=Math.sin(S*P)/k,h=Math.sin(h*P)/k}const C=h*L;if(v=v*S+g*C,p=p*S+E*C,y=y*S+T*C,m=m*S+D*C,S===1-h){const k=1/Math.sqrt(v*v+p*p+y*y+m*m);v*=k,p*=k,y*=k,m*=k}}e[i]=v,e[i+1]=p,e[i+2]=y,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,l,f,d){const h=r[l],v=r[l+1],p=r[l+2],y=r[l+3],m=f[d],g=f[d+1],E=f[d+2],T=f[d+3];return e[i]=h*T+y*m+v*E-p*g,e[i+1]=v*T+y*g+p*m-h*E,e[i+2]=p*T+y*E+h*g-v*m,e[i+3]=y*T-h*m-v*g-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,v=Math.sin,p=h(r/2),y=h(l/2),m=h(f/2),g=v(r/2),E=v(l/2),T=v(f/2);switch(d){case"XYZ":this._x=g*y*m+p*E*T,this._y=p*E*m-g*y*T,this._z=p*y*T+g*E*m,this._w=p*y*m-g*E*T;break;case"YXZ":this._x=g*y*m+p*E*T,this._y=p*E*m-g*y*T,this._z=p*y*T-g*E*m,this._w=p*y*m+g*E*T;break;case"ZXY":this._x=g*y*m-p*E*T,this._y=p*E*m+g*y*T,this._z=p*y*T+g*E*m,this._w=p*y*m-g*E*T;break;case"ZYX":this._x=g*y*m-p*E*T,this._y=p*E*m+g*y*T,this._z=p*y*T-g*E*m,this._w=p*y*m+g*E*T;break;case"YZX":this._x=g*y*m+p*E*T,this._y=p*E*m+g*y*T,this._z=p*y*T-g*E*m,this._w=p*y*m-g*E*T;break;case"XZY":this._x=g*y*m-p*E*T,this._y=p*E*m-g*y*T,this._z=p*y*T+g*E*m,this._w=p*y*m+g*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],d=i[1],h=i[5],v=i[9],p=i[2],y=i[6],m=i[10],g=r+h+m;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(y-v)*E,this._y=(f-p)*E,this._z=(d-l)*E}else if(r>h&&r>m){const E=2*Math.sqrt(1+r-h-m);this._w=(y-v)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(f+p)/E}else if(h>m){const E=2*Math.sqrt(1+h-r-m);this._w=(f-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(v+y)/E}else{const E=2*Math.sqrt(1+m-r-h);this._w=(d-l)/E,this._x=(f+p)/E,this._y=(v+y)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,d=e._w,h=i._x,v=i._y,p=i._z,y=i._w;return this._x=r*y+d*h+l*p-f*v,this._y=l*y+d*v+f*h-r*p,this._z=f*y+d*p+r*v-l*h,this._w=d*y-r*h-l*v-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=f,this;const v=1-h*h;if(v<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const p=Math.sqrt(v),y=Math.atan2(p,h),m=Math.sin((1-i)*y)/p,g=Math.sin(i*y)/p;return this._w=d*m+this._w*g,this._x=r*m+this._x*g,this._y=l*m+this._y*g,this._z=f*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(e=0,i=0,r=0){lt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(F_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(F_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,d=e.y,h=e.z,v=e.w,p=2*(d*l-h*r),y=2*(h*i-f*l),m=2*(f*r-d*i);return this.x=i+v*p+d*m-h*y,this.y=r+v*y+h*p-f*m,this.z=l+v*m+f*y-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Be(this.x,e.x,i.x),this.y=Be(this.y,e.y,i.y),this.z=Be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Be(this.x,e,i),this.y=Be(this.y,e,i),this.z=Be(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,d=i.x,h=i.y,v=i.z;return this.x=l*v-f*h,this.y=f*d-r*v,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dh=new lt,F_=new Ol;class Te{constructor(e,i,r,l,f,d,h,v,p){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,v,p)}set(e,i,r,l,f,d,h,v,p){const y=this.elements;return y[0]=e,y[1]=l,y[2]=h,y[3]=i,y[4]=f,y[5]=v,y[6]=r,y[7]=d,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[3],v=r[6],p=r[1],y=r[4],m=r[7],g=r[2],E=r[5],T=r[8],D=l[0],S=l[3],x=l[6],L=l[1],z=l[4],C=l[7],k=l[2],P=l[5],O=l[8];return f[0]=d*D+h*L+v*k,f[3]=d*S+h*z+v*P,f[6]=d*x+h*C+v*O,f[1]=p*D+y*L+m*k,f[4]=p*S+y*z+m*P,f[7]=p*x+y*C+m*O,f[2]=g*D+E*L+T*k,f[5]=g*S+E*z+T*P,f[8]=g*x+E*C+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],v=e[6],p=e[7],y=e[8];return i*d*y-i*h*p-r*f*y+r*h*v+l*f*p-l*d*v}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],v=e[6],p=e[7],y=e[8],m=y*d-h*p,g=h*v-y*f,E=p*f-d*v,T=i*m+r*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=m*D,e[1]=(l*p-y*r)*D,e[2]=(h*r-l*d)*D,e[3]=g*D,e[4]=(y*i-l*v)*D,e[5]=(l*f-h*i)*D,e[6]=E*D,e[7]=(r*v-p*i)*D,e[8]=(d*i-r*f)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,d,h){const v=Math.cos(f),p=Math.sin(f);return this.set(r*v,r*p,-r*(v*d+p*h)+d+e,-l*p,l*v,-l*(-p*d+v*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Nh.makeScale(e,i)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new Te;function dy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Vu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function VE(){const o=Vu("canvas");return o.style.display="block",o}const H_={};function Dl(o){o in H_||(H_[o]=!0,console.warn(o))}function kE(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const G_=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jE(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===nn&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===nn&&(l.r=fo(l.r),l.g=fo(l.g),l.b=fo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?Hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Dl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Dl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vo]:{primaries:e,whitePoint:r,transfer:Hu,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:r,transfer:nn,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),o}const Xe=jE();function za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wr;class XE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Wr===void 0&&(Wr=Vu("canvas")),Wr.width=e.width,Wr.height=e.height;const l=Wr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Wr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=za(f[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(za(i[r]/255)*255):i[r]=za(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qE=0;class cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(Uh(l[d].image)):f.push(Uh(l[d]))}else f=Uh(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Uh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?XE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WE=0;const Lh=new lt;class ai extends yo{constructor(e=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,r=er,l=er,f=ua,d=nr,h=Zi,v=ha,p=ai.DEFAULT_ANISOTROPY,y=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ll(),this.name="",this.source=new cm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=v,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sp:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sp:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=ny;ai.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,i=0,r=0,l=1){yn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const v=e.elements,p=v[0],y=v[4],m=v[8],g=v[1],E=v[5],T=v[9],D=v[2],S=v[6],x=v[10];if(Math.abs(y-g)<.01&&Math.abs(m-D)<.01&&Math.abs(T-S)<.01){if(Math.abs(y+g)<.1&&Math.abs(m+D)<.1&&Math.abs(T+S)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,C=(E+1)/2,k=(x+1)/2,P=(y+g)/4,O=(m+D)/4,B=(T+S)/4;return z>C&&z>k?z<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(z),l=P/r,f=O/r):C>k?C<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(C),r=P/l,f=B/l):k<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(k),r=O/f,l=B/f),this.set(r,l,f,i),this}let L=Math.sqrt((S-T)*(S-T)+(m-D)*(m-D)+(g-y)*(g-y));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(m-D)/L,this.z=(g-y)/L,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Be(this.x,e.x,i.x),this.y=Be(this.y,e.y,i.y),this.z=Be(this.z,e.z,i.z),this.w=Be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Be(this.x,e,i),this.y=Be(this.y,e,i),this.z=Be(this.z,e,i),this.w=Be(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YE extends yo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ua,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new yn(0,0,e,i),this.scissorTest=!1,this.viewport=new yn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new ai(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ua,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new cm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends YE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class hy extends ai{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZE extends ai{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Xi):Xi.fromBufferAttribute(f,d),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ou.copy(r.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),lu.subVectors(this.max,gl),Yr.subVectors(e.a,gl),Zr.subVectors(e.b,gl),Kr.subVectors(e.c,gl),ds.subVectors(Zr,Yr),hs.subVectors(Kr,Zr),ks.subVectors(Yr,Kr);let i=[0,-ds.z,ds.y,0,-hs.z,hs.y,0,-ks.z,ks.y,ds.z,0,-ds.x,hs.z,0,-hs.x,ks.z,0,-ks.x,-ds.y,ds.x,0,-hs.y,hs.x,0,-ks.y,ks.x,0];return!Oh(i,Yr,Zr,Kr,lu)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,Yr,Zr,Kr,lu))?!1:(cu.crossVectors(ds,hs),i=[cu.x,cu.y,cu.z],Oh(i,Yr,Zr,Kr,lu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Xi=new lt,ou=new sr,Yr=new lt,Zr=new lt,Kr=new lt,ds=new lt,hs=new lt,ks=new lt,gl=new lt,lu=new lt,cu=new lt,js=new lt;function Oh(o,e,i,r,l){for(let f=0,d=o.length-3;f<=d;f+=3){js.fromArray(o,f);const h=l.x*Math.abs(js.x)+l.y*Math.abs(js.y)+l.z*Math.abs(js.z),v=e.dot(js),p=i.dot(js),y=r.dot(js);if(Math.max(-Math.max(v,p,y),Math.min(v,p,y))>h)return!1}return!0}const KE=new sr,vl=new lt,zh=new lt;class So{constructor(e=new lt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):KE.setFromPoints(e).getCenter(r);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(zh)),this.expandByPoint(vl.copy(e.center).sub(zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Da=new lt,Ph=new lt,uu=new lt,ps=new lt,Ih=new lt,fu=new lt,Bh=new lt;class py{constructor(e=new lt,i=new lt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ph.copy(e).add(i).multiplyScalar(.5),uu.copy(i).sub(e).normalize(),ps.copy(this.origin).sub(Ph);const f=e.distanceTo(i)*.5,d=-this.direction.dot(uu),h=ps.dot(this.direction),v=-ps.dot(uu),p=ps.lengthSq(),y=Math.abs(1-d*d);let m,g,E,T;if(y>0)if(m=d*v-h,g=d*h-v,T=f*y,m>=0)if(g>=-T)if(g<=T){const D=1/y;m*=D,g*=D,E=m*(m+d*g+2*h)+g*(d*m+g+2*v)+p}else g=f,m=Math.max(0,-(d*g+h)),E=-m*m+g*(g+2*v)+p;else g=-f,m=Math.max(0,-(d*g+h)),E=-m*m+g*(g+2*v)+p;else g<=-T?(m=Math.max(0,-(-d*f+h)),g=m>0?-f:Math.min(Math.max(-f,-v),f),E=-m*m+g*(g+2*v)+p):g<=T?(m=0,g=Math.min(Math.max(-f,-v),f),E=g*(g+2*v)+p):(m=Math.max(0,-(d*f+h)),g=m>0?f:Math.min(Math.max(-f,-v),f),E=-m*m+g*(g+2*v)+p);else g=d>0?-f:f,m=Math.max(0,-(d*g+h)),E=-m*m+g*(g+2*v)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Ph).addScaledVector(uu,g),E}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),l=Da.dot(Da)-r*r,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=r-d,v=r+d;return v<0?null:h<0?this.at(v,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,d,h,v;const p=1/this.direction.x,y=1/this.direction.y,m=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),y>=0?(f=(e.min.y-g.y)*y,d=(e.max.y-g.y)*y):(f=(e.max.y-g.y)*y,d=(e.min.y-g.y)*y),r>d||f>l||((f>r||isNaN(r))&&(r=f),(d<l||isNaN(l))&&(l=d),m>=0?(h=(e.min.z-g.z)*m,v=(e.max.z-g.z)*m):(h=(e.max.z-g.z)*m,v=(e.min.z-g.z)*m),r>v||h>l)||((h>r||r!==r)&&(r=h),(v<l||l!==l)&&(l=v),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,r,l,f){Ih.subVectors(i,e),fu.subVectors(r,e),Bh.crossVectors(Ih,fu);let d=this.direction.dot(Bh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ps.subVectors(this.origin,e);const v=h*this.direction.dot(fu.crossVectors(ps,fu));if(v<0)return null;const p=h*this.direction.dot(Ih.cross(ps));if(p<0||v+p>d)return null;const y=-h*ps.dot(Bh);return y<0?null:this.at(y/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,i,r,l,f,d,h,v,p,y,m,g,E,T,D,S){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,v,p,y,m,g,E,T,D,S)}set(e,i,r,l,f,d,h,v,p,y,m,g,E,T,D,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=f,x[5]=d,x[9]=h,x[13]=v,x[2]=p,x[6]=y,x[10]=m,x[14]=g,x[3]=E,x[7]=T,x[11]=D,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Qr.setFromMatrixColumn(e,0).length(),f=1/Qr.setFromMatrixColumn(e,1).length(),d=1/Qr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),v=Math.cos(l),p=Math.sin(l),y=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const g=d*y,E=d*m,T=h*y,D=h*m;i[0]=v*y,i[4]=-v*m,i[8]=p,i[1]=E+T*p,i[5]=g-D*p,i[9]=-h*v,i[2]=D-g*p,i[6]=T+E*p,i[10]=d*v}else if(e.order==="YXZ"){const g=v*y,E=v*m,T=p*y,D=p*m;i[0]=g+D*h,i[4]=T*h-E,i[8]=d*p,i[1]=d*m,i[5]=d*y,i[9]=-h,i[2]=E*h-T,i[6]=D+g*h,i[10]=d*v}else if(e.order==="ZXY"){const g=v*y,E=v*m,T=p*y,D=p*m;i[0]=g-D*h,i[4]=-d*m,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*y,i[9]=D-g*h,i[2]=-d*p,i[6]=h,i[10]=d*v}else if(e.order==="ZYX"){const g=d*y,E=d*m,T=h*y,D=h*m;i[0]=v*y,i[4]=T*p-E,i[8]=g*p+D,i[1]=v*m,i[5]=D*p+g,i[9]=E*p-T,i[2]=-p,i[6]=h*v,i[10]=d*v}else if(e.order==="YZX"){const g=d*v,E=d*p,T=h*v,D=h*p;i[0]=v*y,i[4]=D-g*m,i[8]=T*m+E,i[1]=m,i[5]=d*y,i[9]=-h*y,i[2]=-p*y,i[6]=E*m+T,i[10]=g-D*m}else if(e.order==="XZY"){const g=d*v,E=d*p,T=h*v,D=h*p;i[0]=v*y,i[4]=-m,i[8]=p*y,i[1]=g*m+D,i[5]=d*y,i[9]=E*m-T,i[2]=T*m-E,i[6]=h*y,i[10]=D*m+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QE,e,JE)}lookAt(e,i,r){const l=this.elements;return Si.subVectors(e,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),ms.crossVectors(r,Si),ms.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),ms.crossVectors(r,Si)),ms.normalize(),du.crossVectors(Si,ms),l[0]=ms.x,l[4]=du.x,l[8]=Si.x,l[1]=ms.y,l[5]=du.y,l[9]=Si.y,l[2]=ms.z,l[6]=du.z,l[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[4],v=r[8],p=r[12],y=r[1],m=r[5],g=r[9],E=r[13],T=r[2],D=r[6],S=r[10],x=r[14],L=r[3],z=r[7],C=r[11],k=r[15],P=l[0],O=l[4],B=l[8],N=l[12],R=l[1],H=l[5],$=l[9],vt=l[13],dt=l[2],st=l[6],Z=l[10],ut=l[14],et=l[3],Rt=l[7],bt=l[11],Ot=l[15];return f[0]=d*P+h*R+v*dt+p*et,f[4]=d*O+h*H+v*st+p*Rt,f[8]=d*B+h*$+v*Z+p*bt,f[12]=d*N+h*vt+v*ut+p*Ot,f[1]=y*P+m*R+g*dt+E*et,f[5]=y*O+m*H+g*st+E*Rt,f[9]=y*B+m*$+g*Z+E*bt,f[13]=y*N+m*vt+g*ut+E*Ot,f[2]=T*P+D*R+S*dt+x*et,f[6]=T*O+D*H+S*st+x*Rt,f[10]=T*B+D*$+S*Z+x*bt,f[14]=T*N+D*vt+S*ut+x*Ot,f[3]=L*P+z*R+C*dt+k*et,f[7]=L*O+z*H+C*st+k*Rt,f[11]=L*B+z*$+C*Z+k*bt,f[15]=L*N+z*vt+C*ut+k*Ot,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],d=e[1],h=e[5],v=e[9],p=e[13],y=e[2],m=e[6],g=e[10],E=e[14],T=e[3],D=e[7],S=e[11],x=e[15];return T*(+f*v*m-l*p*m-f*h*g+r*p*g+l*h*E-r*v*E)+D*(+i*v*E-i*p*g+f*d*g-l*d*E+l*p*y-f*v*y)+S*(+i*p*m-i*h*E-f*d*m+r*d*E+f*h*y-r*p*y)+x*(-l*h*y-i*v*m+i*h*g+l*d*m-r*d*g+r*v*y)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],v=e[6],p=e[7],y=e[8],m=e[9],g=e[10],E=e[11],T=e[12],D=e[13],S=e[14],x=e[15],L=m*S*p-D*g*p+D*v*E-h*S*E-m*v*x+h*g*x,z=T*g*p-y*S*p-T*v*E+d*S*E+y*v*x-d*g*x,C=y*D*p-T*m*p+T*h*E-d*D*E-y*h*x+d*m*x,k=T*m*v-y*D*v-T*h*g+d*D*g+y*h*S-d*m*S,P=i*L+r*z+l*C+f*k;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=L*O,e[1]=(D*g*f-m*S*f-D*l*E+r*S*E+m*l*x-r*g*x)*O,e[2]=(h*S*f-D*v*f+D*l*p-r*S*p-h*l*x+r*v*x)*O,e[3]=(m*v*f-h*g*f-m*l*p+r*g*p+h*l*E-r*v*E)*O,e[4]=z*O,e[5]=(y*S*f-T*g*f+T*l*E-i*S*E-y*l*x+i*g*x)*O,e[6]=(T*v*f-d*S*f-T*l*p+i*S*p+d*l*x-i*v*x)*O,e[7]=(d*g*f-y*v*f+y*l*p-i*g*p-d*l*E+i*v*E)*O,e[8]=C*O,e[9]=(T*m*f-y*D*f-T*r*E+i*D*E+y*r*x-i*m*x)*O,e[10]=(d*D*f-T*h*f+T*r*p-i*D*p-d*r*x+i*h*x)*O,e[11]=(y*h*f-d*m*f-y*r*p+i*m*p+d*r*E-i*h*E)*O,e[12]=k*O,e[13]=(y*D*l-T*m*l+T*r*g-i*D*g-y*r*S+i*m*S)*O,e[14]=(T*h*l-d*D*l-T*r*v+i*D*v+d*r*S-i*h*S)*O,e[15]=(d*m*l-y*h*l+y*r*v-i*m*v-d*r*g+i*h*g)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,d=e.x,h=e.y,v=e.z,p=f*d,y=f*h;return this.set(p*d+r,p*h-l*v,p*v+l*h,0,p*h+l*v,y*h+r,y*v-l*d,0,p*v-l*h,y*v+l*d,f*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,d){return this.set(1,r,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,d=i._y,h=i._z,v=i._w,p=f+f,y=d+d,m=h+h,g=f*p,E=f*y,T=f*m,D=d*y,S=d*m,x=h*m,L=v*p,z=v*y,C=v*m,k=r.x,P=r.y,O=r.z;return l[0]=(1-(D+x))*k,l[1]=(E+C)*k,l[2]=(T-z)*k,l[3]=0,l[4]=(E-C)*P,l[5]=(1-(g+x))*P,l[6]=(S+L)*P,l[7]=0,l[8]=(T+z)*O,l[9]=(S-L)*O,l[10]=(1-(g+D))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Qr.set(l[0],l[1],l[2]).length();const d=Qr.set(l[4],l[5],l[6]).length(),h=Qr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],qi.copy(this);const p=1/f,y=1/d,m=1/h;return qi.elements[0]*=p,qi.elements[1]*=p,qi.elements[2]*=p,qi.elements[4]*=y,qi.elements[5]*=y,qi.elements[6]*=y,qi.elements[8]*=m,qi.elements[9]*=m,qi.elements[10]*=m,i.setFromRotationMatrix(qi),r.x=f,r.y=d,r.z=h,this}makePerspective(e,i,r,l,f,d,h=da,v=!1){const p=this.elements,y=2*f/(i-e),m=2*f/(r-l),g=(i+e)/(i-e),E=(r+l)/(r-l);let T,D;if(v)T=f/(d-f),D=d*f/(d-f);else if(h===da)T=-(d+f)/(d-f),D=-2*d*f/(d-f);else if(h===Gu)T=-d/(d-f),D=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=m,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,f,d,h=da,v=!1){const p=this.elements,y=2/(i-e),m=2/(r-l),g=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,D;if(v)T=1/(d-f),D=d/(d-f);else if(h===da)T=-2/(d-f),D=-(d+f)/(d-f);else if(h===Gu)T=-1/(d-f),D=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=m,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Qr=new lt,qi=new un,QE=new lt(0,0,0),JE=new lt(1,1,1),ms=new lt,du=new lt,Si=new lt,k_=new un,j_=new Ol;class pa{constructor(e=0,i=0,r=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],v=l[1],p=l[5],y=l[9],m=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(v,p)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(v,f));break;case"ZYX":this._y=Math.asin(-Be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(v,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-y,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return k_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return j_.setFromEuler(this),this.setFromQuaternion(j_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class my{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $E=0;const X_=new lt,Jr=new Ol,Na=new un,hu=new lt,_l=new lt,tT=new lt,eT=new Ol,q_=new lt(1,0,0),W_=new lt(0,1,0),Y_=new lt(0,0,1),Z_={type:"added"},nT={type:"removed"},$r={type:"childadded",child:null},Fh={type:"childremoved",child:null};class Fn extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new lt,i=new pa,r=new Ol,l=new lt(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new Te}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new my,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Jr.setFromAxisAngle(e,i),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,i){return Jr.setFromAxisAngle(e,i),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(q_,e)}rotateY(e){return this.rotateOnAxis(W_,e)}rotateZ(e){return this.rotateOnAxis(Y_,e)}translateOnAxis(e,i){return X_.copy(e).applyQuaternion(this.quaternion),this.position.add(X_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(q_,e)}translateY(e){return this.translateOnAxis(W_,e)}translateZ(e){return this.translateOnAxis(Y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?hu.copy(e):hu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(_l,hu,this.up):Na.lookAt(hu,_l,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),Jr.setFromRotationMatrix(Na),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z_),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(nT),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z_),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,tT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,eT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,v){return h[v.uuid]===void 0&&(h[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const v=h.shapes;if(Array.isArray(v))for(let p=0,y=v.length;p<y;p++){const m=v[p];f(e.shapes,m)}else f(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let v=0,p=this.material.length;v<p;v++)h.push(f(e.materials,this.material[v]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const v=this.animations[h];l.animations.push(f(e.animations,v))}}if(i){const h=d(e.geometries),v=d(e.materials),p=d(e.textures),y=d(e.images),m=d(e.shapes),g=d(e.skeletons),E=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),v.length>0&&(r.materials=v),p.length>0&&(r.textures=p),y.length>0&&(r.images=y),m.length>0&&(r.shapes=m),g.length>0&&(r.skeletons=g),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const v=[];for(const p in h){const y=h[p];delete y.metadata,v.push(y)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new lt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new lt,Ua=new lt,Hh=new lt,La=new lt,to=new lt,eo=new lt,K_=new lt,Gh=new lt,Vh=new lt,kh=new lt,jh=new yn,Xh=new yn,qh=new yn;class Yi{constructor(e=new lt,i=new lt,r=new lt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Wi.subVectors(e,i),l.cross(Wi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Wi.subVectors(l,i),Ua.subVectors(r,i),Hh.subVectors(e,i);const d=Wi.dot(Wi),h=Wi.dot(Ua),v=Wi.dot(Hh),p=Ua.dot(Ua),y=Ua.dot(Hh),m=d*p-h*h;if(m===0)return f.set(0,0,0),null;const g=1/m,E=(p*v-h*y)*g,T=(d*y-h*v)*g;return f.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,i,r,l,f,d,h,v){return this.getBarycoord(e,i,r,l,La)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(f,La.x),v.addScaledVector(d,La.y),v.addScaledVector(h,La.z),v)}static getInterpolatedAttribute(e,i,r,l,f,d){return jh.setScalar(0),Xh.setScalar(0),qh.setScalar(0),jh.fromBufferAttribute(e,i),Xh.fromBufferAttribute(e,r),qh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(jh,f.x),d.addScaledVector(Xh,f.y),d.addScaledVector(qh,f.z),d}static isFrontFacing(e,i,r,l){return Wi.subVectors(r,i),Ua.subVectors(e,i),Wi.cross(Ua).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Wi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let d,h;to.subVectors(l,r),eo.subVectors(f,r),Gh.subVectors(e,r);const v=to.dot(Gh),p=eo.dot(Gh);if(v<=0&&p<=0)return i.copy(r);Vh.subVectors(e,l);const y=to.dot(Vh),m=eo.dot(Vh);if(y>=0&&m<=y)return i.copy(l);const g=v*m-y*p;if(g<=0&&v>=0&&y<=0)return d=v/(v-y),i.copy(r).addScaledVector(to,d);kh.subVectors(e,f);const E=to.dot(kh),T=eo.dot(kh);if(T>=0&&E<=T)return i.copy(f);const D=E*p-v*T;if(D<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(eo,h);const S=y*T-E*m;if(S<=0&&m-y>=0&&E-T>=0)return K_.subVectors(f,l),h=(m-y)/(m-y+(E-T)),i.copy(l).addScaledVector(K_,h);const x=1/(S+D+g);return d=D*x,h=g*x,i.copy(r).addScaledVector(to,d).addScaledVector(eo,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},pu={h:0,s:0,l:0};function Wh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Xe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Xe.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Xe.workingColorSpace){if(e=GE(e,1),i=Be(i,0,1),r=Be(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Wh(d,f,e+1/3),this.g=Wh(d,f,e),this.b=Wh(d,f,e-1/3)}return Xe.colorSpaceToWorking(this,l),this}setStyle(e,i=Ei){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const r=gy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return Xe.workingToColorSpace(Kn.copy(this),e),Math.round(Be(Kn.r*255,0,255))*65536+Math.round(Be(Kn.g*255,0,255))*256+Math.round(Be(Kn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Xe.workingColorSpace){Xe.workingToColorSpace(Kn.copy(this),i);const r=Kn.r,l=Kn.g,f=Kn.b,d=Math.max(r,l,f),h=Math.min(r,l,f);let v,p;const y=(h+d)/2;if(h===d)v=0,p=0;else{const m=d-h;switch(p=y<=.5?m/(d+h):m/(2-d-h),d){case r:v=(l-f)/m+(l<f?6:0);break;case l:v=(f-r)/m+2;break;case f:v=(r-l)/m+4;break}v/=6}return e.h=v,e.s=p,e.l=y,e}getRGB(e,i=Xe.workingColorSpace){return Xe.workingToColorSpace(Kn.copy(this),i),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Ei){Xe.workingToColorSpace(Kn.copy(this),e);const i=Kn.r,r=Kn.g,l=Kn.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+i,gs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(gs),e.getHSL(pu);const r=wh(gs.h,pu.h,i),l=wh(gs.s,pu.s,i),f=wh(gs.l,pu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Le;Le.NAMES=gy;let iT=0;class Mo extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=uo,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=up,this.blendDst=fp,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==Ms&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==up&&(r.blendSrc=this.blendSrc),this.blendDst!==fp&&(r.blendDst=this.blendDst),this.blendEquation!==Js&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const d=[];for(const h in f){const v=f[h];delete v.metadata,d.push(v)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ku extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=ty,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wn=new lt,mu=new Fe;let aT=0;class Bi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=I_,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mu.fromBufferAttribute(this,i),mu.applyMatrix3(e),this.setXY(i,mu.x,mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ml(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=fi(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ml(i,this.array)),i}setX(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ml(i,this.array)),i}setY(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ml(i,this.array)),i}setZ(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ml(i,this.array)),i}setW(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=fi(i,this.array),r=fi(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=fi(i,this.array),r=fi(r,this.array),l=fi(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=fi(i,this.array),r=fi(r,this.array),l=fi(l,this.array),f=fi(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==I_&&(e.usage=this.usage),e}}class vy extends Bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class _y extends Bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class En extends Bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let sT=0;const Pi=new un,Yh=new Fn,no=new lt,Mi=new sr,xl=new sr,Bn=new lt;class si extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dy(e)?_y:vy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new Te().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,i,r){return Pi.makeTranslation(e,i,r),this.applyMatrix4(Pi),this}scale(e,i,r){return Pi.makeScale(e,i,r),this.applyMatrix4(Pi),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new En(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];Mi.setFromBufferAttribute(f),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];xl.setFromBufferAttribute(h),this.morphTargetsRelative?(Bn.addVectors(Mi.min,xl.min),Mi.expandByPoint(Bn),Bn.addVectors(Mi.max,xl.max),Mi.expandByPoint(Bn)):(Mi.expandByPoint(xl.min),Mi.expandByPoint(xl.max))}Mi.getCenter(r);let l=0;for(let f=0,d=e.count;f<d;f++)Bn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Bn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],v=this.morphTargetsRelative;for(let p=0,y=h.count;p<y;p++)Bn.fromBufferAttribute(h,p),v&&(no.fromBufferAttribute(e,p),Bn.add(no)),l=Math.max(l,r.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],v=[];for(let B=0;B<r.count;B++)h[B]=new lt,v[B]=new lt;const p=new lt,y=new lt,m=new lt,g=new Fe,E=new Fe,T=new Fe,D=new lt,S=new lt;function x(B,N,R){p.fromBufferAttribute(r,B),y.fromBufferAttribute(r,N),m.fromBufferAttribute(r,R),g.fromBufferAttribute(f,B),E.fromBufferAttribute(f,N),T.fromBufferAttribute(f,R),y.sub(p),m.sub(p),E.sub(g),T.sub(g);const H=1/(E.x*T.y-T.x*E.y);isFinite(H)&&(D.copy(y).multiplyScalar(T.y).addScaledVector(m,-E.y).multiplyScalar(H),S.copy(m).multiplyScalar(E.x).addScaledVector(y,-T.x).multiplyScalar(H),h[B].add(D),h[N].add(D),h[R].add(D),v[B].add(S),v[N].add(S),v[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let B=0,N=L.length;B<N;++B){const R=L[B],H=R.start,$=R.count;for(let vt=H,dt=H+$;vt<dt;vt+=3)x(e.getX(vt+0),e.getX(vt+1),e.getX(vt+2))}const z=new lt,C=new lt,k=new lt,P=new lt;function O(B){k.fromBufferAttribute(l,B),P.copy(k);const N=h[B];z.copy(N),z.sub(k.multiplyScalar(k.dot(N))).normalize(),C.crossVectors(P,N);const H=C.dot(v[B])<0?-1:1;d.setXYZW(B,z.x,z.y,z.z,H)}for(let B=0,N=L.length;B<N;++B){const R=L[B],H=R.start,$=R.count;for(let vt=H,dt=H+$;vt<dt;vt+=3)O(e.getX(vt+0)),O(e.getX(vt+1)),O(e.getX(vt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,E=r.count;g<E;g++)r.setXYZ(g,0,0,0);const l=new lt,f=new lt,d=new lt,h=new lt,v=new lt,p=new lt,y=new lt,m=new lt;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),D=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,T),f.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),y.subVectors(d,f),m.subVectors(l,f),y.cross(m),h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),h.add(y),v.add(y),p.add(y),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(D,v.x,v.y,v.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),f.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),y.subVectors(d,f),m.subVectors(l,f),y.cross(m),r.setXYZ(g+0,y.x,y.y,y.z),r.setXYZ(g+1,y.x,y.y,y.z),r.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Bn.fromBufferAttribute(e,i),Bn.normalize(),e.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(h,v){const p=h.array,y=h.itemSize,m=h.normalized,g=new p.constructor(v.length*y);let E=0,T=0;for(let D=0,S=v.length;D<S;D++){h.isInterleavedBufferAttribute?E=v[D]*h.data.stride+h.offset:E=v[D]*y;for(let x=0;x<y;x++)g[T++]=p[E++]}return new Bi(g,y,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,r=this.index.array,l=this.attributes;for(const h in l){const v=l[h],p=e(v,r);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const v=[],p=f[h];for(let y=0,m=p.length;y<m;y++){const g=p[y],E=e(g,r);v.push(E)}i.morphAttributes[h]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,v=d.length;h<v;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const p in v)v[p]!==void 0&&(e[p]=v[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const p=r[v];e.data.attributes[v]=p.toJSON(e.data)}const l={};let f=!1;for(const v in this.morphAttributes){const p=this.morphAttributes[v],y=[];for(let m=0,g=p.length;m<g;m++){const E=p[m];y.push(E.toJSON(e.data))}y.length>0&&(l[v]=y,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const f=e.morphAttributes;for(const p in f){const y=[],m=f[p];for(let g=0,E=m.length;g<E;g++)y.push(m[g].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,y=d.length;p<y;p++){const m=d[p];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q_=new un,Xs=new py,gu=new So,J_=new lt,vu=new lt,_u=new lt,xu=new lt,Zh=new lt,yu=new lt,$_=new lt,Su=new lt;class je extends Fn{constructor(e=new si,i=new ku){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){yu.set(0,0,0);for(let v=0,p=f.length;v<p;v++){const y=h[v],m=f[v];y!==0&&(Zh.fromBufferAttribute(m,e),d?yu.addScaledVector(Zh,y):yu.addScaledVector(Zh.sub(i),y))}i.add(yu)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gu.copy(r.boundingSphere),gu.applyMatrix4(f),Xs.copy(e.ray).recast(e.near),!(gu.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(gu,J_)===null||Xs.origin.distanceToSquared(J_)>(e.far-e.near)**2))&&(Q_.copy(f).invert(),Xs.copy(e.ray).applyMatrix4(Q_),!(r.boundingBox!==null&&Xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,r){let l;const f=this.geometry,d=this.material,h=f.index,v=f.attributes.position,p=f.attributes.uv,y=f.attributes.uv1,m=f.attributes.normal,g=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const S=g[T],x=d[S.materialIndex],L=Math.max(S.start,E.start),z=Math.min(h.count,Math.min(S.start+S.count,E.start+E.count));for(let C=L,k=z;C<k;C+=3){const P=h.getX(C),O=h.getX(C+1),B=h.getX(C+2);l=Mu(this,x,e,r,p,y,m,P,O,B),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(h.count,E.start+E.count);for(let S=T,x=D;S<x;S+=3){const L=h.getX(S),z=h.getX(S+1),C=h.getX(S+2);l=Mu(this,d,e,r,p,y,m,L,z,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const S=g[T],x=d[S.materialIndex],L=Math.max(S.start,E.start),z=Math.min(v.count,Math.min(S.start+S.count,E.start+E.count));for(let C=L,k=z;C<k;C+=3){const P=C,O=C+1,B=C+2;l=Mu(this,x,e,r,p,y,m,P,O,B),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(v.count,E.start+E.count);for(let S=T,x=D;S<x;S+=3){const L=S,z=S+1,C=S+2;l=Mu(this,d,e,r,p,y,m,L,z,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function rT(o,e,i,r,l,f,d,h){let v;if(e.side===ii?v=r.intersectTriangle(d,f,l,!0,h):v=r.intersectTriangle(l,f,d,e.side===Ms,h),v===null)return null;Su.copy(h),Su.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Su);return p<i.near||p>i.far?null:{distance:p,point:Su.clone(),object:o}}function Mu(o,e,i,r,l,f,d,h,v,p){o.getVertexPosition(h,vu),o.getVertexPosition(v,_u),o.getVertexPosition(p,xu);const y=rT(o,e,i,r,vu,_u,xu,$_);if(y){const m=new lt;Yi.getBarycoord($_,vu,_u,xu,m),l&&(y.uv=Yi.getInterpolatedAttribute(l,h,v,p,m,new Fe)),f&&(y.uv1=Yi.getInterpolatedAttribute(f,h,v,p,m,new Fe)),d&&(y.normal=Yi.getInterpolatedAttribute(d,h,v,p,m,new lt),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const g={a:h,b:v,c:p,normal:new lt,materialIndex:0};Yi.getNormal(vu,_u,xu,g.normal),y.face=g,y.barycoord=m}return y}class Ss extends si{constructor(e=1,i=1,r=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const v=[],p=[],y=[],m=[];let g=0,E=0;T("z","y","x",-1,-1,r,i,e,d,f,0),T("z","y","x",1,-1,r,i,-e,d,f,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,f,4),T("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(v),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(y,3)),this.setAttribute("uv",new En(m,2));function T(D,S,x,L,z,C,k,P,O,B,N){const R=C/O,H=k/B,$=C/2,vt=k/2,dt=P/2,st=O+1,Z=B+1;let ut=0,et=0;const Rt=new lt;for(let bt=0;bt<Z;bt++){const Ot=bt*H-vt;for(let le=0;le<st;le++){const ye=le*R-$;Rt[D]=ye*L,Rt[S]=Ot*z,Rt[x]=dt,p.push(Rt.x,Rt.y,Rt.z),Rt[D]=0,Rt[S]=0,Rt[x]=P>0?1:-1,y.push(Rt.x,Rt.y,Rt.z),m.push(le/O),m.push(1-bt/B),ut+=1}}for(let bt=0;bt<B;bt++)for(let Ot=0;Ot<O;Ot++){const le=g+Ot+st*bt,ye=g+Ot+st*(bt+1),j=g+(Ot+1)+st*(bt+1),St=g+(Ot+1)+st*bt;v.push(le,ye,St),v.push(ye,j,St),et+=6}h.addGroup(E,et,N),E+=et,g+=ut}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function ni(o){const e={};for(let i=0;i<o.length;i++){const r=_o(o[i]);for(const l in r)e[l]=r[l]}return e}function oT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function xy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const lT={clone:_o,merge:ni};var cT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cT,this.fragmentShader=uT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=oT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class yy extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new lt,tx=new Fe,ex=new Fe;class Ii extends yy{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Qp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ch*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qp*2*Math.atan(Math.tan(Ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,tx,ex),i.subVectors(ex,tx)}setViewOffset(e,i,r,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ch*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,p=d.fullHeight;f+=d.offsetX*l/v,i-=d.offsetY*r/p,l*=d.width/v,r*=d.height/p}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const io=-90,ao=1;class fT extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ii(io,ao,e,i);l.layers=this.layers,this.add(l);const f=new Ii(io,ao,e,i);f.layers=this.layers,this.add(f);const d=new Ii(io,ao,e,i);d.layers=this.layers,this.add(d);const h=new Ii(io,ao,e,i);h.layers=this.layers,this.add(h);const v=new Ii(io,ao,e,i);v.layers=this.layers,this.add(v);const p=new Ii(io,ao,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,d,h,v]=i;for(const p of i)this.remove(p);if(e===da)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,v,p,y]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,v),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),e.render(i,y),e.setRenderTarget(m,g,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Sy extends ai{constructor(e=[],i=mo,r,l,f,d,h,v,p,y){super(e,i,r,l,f,d,h,v,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dT extends ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Sy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ss(5,5,5),f=new Pa({name:"CubemapFromEquirect",uniforms:_o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:xs});f.uniforms.tEquirect.value=i;const d=new je(l,f),h=i.minFilter;return i.minFilter===nr&&(i.minFilter=ua),new fT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(f)}}class xn extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class Kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,d=null;const h=this._targetRay,v=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const D of e.hand.values()){const S=i.getJointPose(D,r),x=this._getHandJoint(p,D);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const y=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],g=y.position.distanceTo(m.position),E=.02,T=.005;p.inputState.pinching&&g>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,f.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(f.linearVelocity)):v.hasLinearVelocity=!1,f.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(f.angularVelocity)):v.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return h!==null&&(h.visible=l!==null),v!==null&&(v.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new xn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class um{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=i,this.far=r}clone(){return new um(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pT extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class mT extends ai{constructor(e=null,i=1,r=1,l,f,d,h,v,p=bi,y=bi,m,g){super(null,d,h,v,p,y,l,f,m,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nx extends Bi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new un,ix=new un,Eu=[],ax=new sr,gT=new un,yl=new je,Sl=new So;class vT extends je{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new nx(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,gT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,so),ax.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(ax)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,so),Sl.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Sl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,f=r.length+1,d=e*f+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(yl.geometry=this.geometry,yl.material=this.material,yl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sl.copy(this.boundingSphere),Sl.applyMatrix4(r),e.ray.intersectsSphere(Sl)!==!1))for(let f=0;f<l;f++){this.getMatrixAt(f,so),ix.multiplyMatrices(r,so),yl.matrixWorld=ix,yl.raycast(e,Eu);for(let d=0,h=Eu.length;d<h;d++){const v=Eu[d];v.instanceId=f,v.object=this,i.push(v)}Eu.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new nx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new mT(new Float32Array(l*this.count),l,this.count,sm,fa));const f=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,v=l*e;f[v]=h,f.set(r,v+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qh=new lt,_T=new lt,xT=new Te;class Ks{constructor(e=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Qh.subVectors(r,i).cross(_T.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Qh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||xT.getNormalMatrix(e),l=this.coplanarPoint(Qh).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new So,yT=new Fe(.5,.5),Tu=new lt;class fm{constructor(e=new Ks,i=new Ks,r=new Ks,l=new Ks,f=new Ks,d=new Ks){this.planes=[e,i,r,l,f,d]}set(e,i,r,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=da,r=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],v=f[2],p=f[3],y=f[4],m=f[5],g=f[6],E=f[7],T=f[8],D=f[9],S=f[10],x=f[11],L=f[12],z=f[13],C=f[14],k=f[15];if(l[0].setComponents(p-d,E-y,x-T,k-L).normalize(),l[1].setComponents(p+d,E+y,x+T,k+L).normalize(),l[2].setComponents(p+h,E+m,x+D,k+z).normalize(),l[3].setComponents(p-h,E-m,x-D,k-z).normalize(),r)l[4].setComponents(v,g,S,C).normalize(),l[5].setComponents(p-v,E-g,x-S,k-C).normalize();else if(l[4].setComponents(p-v,E-g,x-S,k-C).normalize(),i===da)l[5].setComponents(p+v,E+g,x+S,k+C).normalize();else if(i===Gu)l[5].setComponents(v,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const i=yT.distanceTo(e.center);return qs.radius=.7071067811865476+i,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tu.x=l.normal.x>0?e.max.x:e.min.x,Tu.y=l.normal.y>0?e.max.y:e.min.y,Tu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class My extends Mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sx=new un,Jp=new py,bu=new So,Au=new lt;class rx extends Fn{constructor(e=new si,i=new My){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(l),bu.radius+=f,e.ray.intersectsSphere(bu)===!1)return;sx.copy(l).invert(),Jp.copy(e.ray).applyMatrix4(sx);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),v=h*h,p=r.index,m=r.attributes.position;if(p!==null){const g=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let T=g,D=E;T<D;T++){const S=p.getX(T);Au.fromBufferAttribute(m,S),ox(Au,S,v,l,e,i,this)}}else{const g=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let T=g,D=E;T<D;T++)Au.fromBufferAttribute(m,T),ox(Au,T,v,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function ox(o,e,i,r,l,f,d){const h=Jp.distanceSqToPoint(o);if(h<i){const v=new lt;Jp.closestPointToPoint(o,v),v.applyMatrix4(r);const p=l.ray.origin.distanceTo(v);if(p<l.near||p>l.far)return;f.push({distance:p,distanceToRay:Math.sqrt(h),point:v,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Ey extends ai{constructor(e,i,r=ir,l,f,d,h=bi,v=bi,p,y=Cl,m=1){if(y!==Cl&&y!==wl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:m};super(g,l,f,d,h,v,y,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ty extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nl extends si{constructor(e=1,i=1,r=1,l=32,f=1,d=!1,h=0,v=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:v};const p=this;l=Math.floor(l),f=Math.floor(f);const y=[],m=[],g=[],E=[];let T=0;const D=[],S=r/2;let x=0;L(),d===!1&&(e>0&&z(!0),i>0&&z(!1)),this.setIndex(y),this.setAttribute("position",new En(m,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(E,2));function L(){const C=new lt,k=new lt;let P=0;const O=(i-e)/r;for(let B=0;B<=f;B++){const N=[],R=B/f,H=R*(i-e)+e;for(let $=0;$<=l;$++){const vt=$/l,dt=vt*v+h,st=Math.sin(dt),Z=Math.cos(dt);k.x=H*st,k.y=-R*r+S,k.z=H*Z,m.push(k.x,k.y,k.z),C.set(st,O,Z).normalize(),g.push(C.x,C.y,C.z),E.push(vt,1-R),N.push(T++)}D.push(N)}for(let B=0;B<l;B++)for(let N=0;N<f;N++){const R=D[N][B],H=D[N+1][B],$=D[N+1][B+1],vt=D[N][B+1];(e>0||N!==0)&&(y.push(R,H,vt),P+=3),(i>0||N!==f-1)&&(y.push(H,$,vt),P+=3)}p.addGroup(x,P,0),x+=P}function z(C){const k=T,P=new Fe,O=new lt;let B=0;const N=C===!0?e:i,R=C===!0?1:-1;for(let $=1;$<=l;$++)m.push(0,S*R,0),g.push(0,R,0),E.push(.5,.5),T++;const H=T;for(let $=0;$<=l;$++){const dt=$/l*v+h,st=Math.cos(dt),Z=Math.sin(dt);O.x=N*Z,O.y=S*R,O.z=N*st,m.push(O.x,O.y,O.z),g.push(0,R,0),P.x=st*.5+.5,P.y=Z*.5*R+.5,E.push(P.x,P.y),T++}for(let $=0;$<l;$++){const vt=k+$,dt=H+$;C===!0?y.push(dt,dt+1,vt):y.push(dt+1,dt,vt),B+=3}p.addGroup(x,B,C===!0?1:2),x+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dm extends Nl{constructor(e=1,i=1,r=32,l=1,f=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,f,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:f,thetaStart:d,thetaLength:h}}static fromJSON(e){return new dm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hm extends si{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const f=[],d=[];h(l),p(r),y(),this.setAttribute("position",new En(f,3)),this.setAttribute("normal",new En(f.slice(),3)),this.setAttribute("uv",new En(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const z=new lt,C=new lt,k=new lt;for(let P=0;P<i.length;P+=3)E(i[P+0],z),E(i[P+1],C),E(i[P+2],k),v(z,C,k,L)}function v(L,z,C,k){const P=k+1,O=[];for(let B=0;B<=P;B++){O[B]=[];const N=L.clone().lerp(C,B/P),R=z.clone().lerp(C,B/P),H=P-B;for(let $=0;$<=H;$++)$===0&&B===P?O[B][$]=N:O[B][$]=N.clone().lerp(R,$/H)}for(let B=0;B<P;B++)for(let N=0;N<2*(P-B)-1;N++){const R=Math.floor(N/2);N%2===0?(g(O[B][R+1]),g(O[B+1][R]),g(O[B][R])):(g(O[B][R+1]),g(O[B+1][R+1]),g(O[B+1][R]))}}function p(L){const z=new lt;for(let C=0;C<f.length;C+=3)z.x=f[C+0],z.y=f[C+1],z.z=f[C+2],z.normalize().multiplyScalar(L),f[C+0]=z.x,f[C+1]=z.y,f[C+2]=z.z}function y(){const L=new lt;for(let z=0;z<f.length;z+=3){L.x=f[z+0],L.y=f[z+1],L.z=f[z+2];const C=S(L)/2/Math.PI+.5,k=x(L)/Math.PI+.5;d.push(C,1-k)}T(),m()}function m(){for(let L=0;L<d.length;L+=6){const z=d[L+0],C=d[L+2],k=d[L+4],P=Math.max(z,C,k),O=Math.min(z,C,k);P>.9&&O<.1&&(z<.2&&(d[L+0]+=1),C<.2&&(d[L+2]+=1),k<.2&&(d[L+4]+=1))}}function g(L){f.push(L.x,L.y,L.z)}function E(L,z){const C=L*3;z.x=e[C+0],z.y=e[C+1],z.z=e[C+2]}function T(){const L=new lt,z=new lt,C=new lt,k=new lt,P=new Fe,O=new Fe,B=new Fe;for(let N=0,R=0;N<f.length;N+=9,R+=6){L.set(f[N+0],f[N+1],f[N+2]),z.set(f[N+3],f[N+4],f[N+5]),C.set(f[N+6],f[N+7],f[N+8]),P.set(d[R+0],d[R+1]),O.set(d[R+2],d[R+3]),B.set(d[R+4],d[R+5]),k.copy(L).add(z).add(C).divideScalar(3);const H=S(k);D(P,R+0,L,H),D(O,R+2,z,H),D(B,R+4,C,H)}}function D(L,z,C,k){k<0&&L.x===1&&(d[z]=L.x-1),C.x===0&&C.z===0&&(d[z]=k/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.vertices,e.indices,e.radius,e.details)}}class pm extends hm{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,f,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new pm(e.radius,e.detail)}}class xo extends si{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(r),v=Math.floor(l),p=h+1,y=v+1,m=e/h,g=i/v,E=[],T=[],D=[],S=[];for(let x=0;x<y;x++){const L=x*g-d;for(let z=0;z<p;z++){const C=z*m-f;T.push(C,-L,0),D.push(0,0,1),S.push(z/h),S.push(1-x/v)}}for(let x=0;x<v;x++)for(let L=0;L<h;L++){const z=L+p*x,C=L+p*(x+1),k=L+1+p*(x+1),P=L+1+p*x;E.push(z,C,P),E.push(C,k,P)}this.setIndex(E),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(D,3)),this.setAttribute("uv",new En(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class $s extends si{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const v=Math.min(d+h,Math.PI);let p=0;const y=[],m=new lt,g=new lt,E=[],T=[],D=[],S=[];for(let x=0;x<=r;x++){const L=[],z=x/r;let C=0;x===0&&d===0?C=.5/i:x===r&&v===Math.PI&&(C=-.5/i);for(let k=0;k<=i;k++){const P=k/i;m.x=-e*Math.cos(l+P*f)*Math.sin(d+z*h),m.y=e*Math.cos(d+z*h),m.z=e*Math.sin(l+P*f)*Math.sin(d+z*h),T.push(m.x,m.y,m.z),g.copy(m).normalize(),D.push(g.x,g.y,g.z),S.push(P+C,1-z),L.push(p++)}y.push(L)}for(let x=0;x<r;x++)for(let L=0;L<i;L++){const z=y[x][L+1],C=y[x][L],k=y[x+1][L],P=y[x+1][L+1];(x!==0||d>0)&&E.push(z,C,P),(x!==r-1||v<Math.PI)&&E.push(C,k,P)}this.setIndex(E),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(D,3)),this.setAttribute("uv",new En(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ju extends si{constructor(e=1,i=.4,r=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:f},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],v=[],p=[],y=new lt,m=new lt,g=new lt;for(let E=0;E<=r;E++)for(let T=0;T<=l;T++){const D=T/l*f,S=E/r*Math.PI*2;m.x=(e+i*Math.cos(S))*Math.cos(D),m.y=(e+i*Math.cos(S))*Math.sin(D),m.z=i*Math.sin(S),h.push(m.x,m.y,m.z),y.x=e*Math.cos(D),y.y=e*Math.sin(D),g.subVectors(m,y).normalize(),v.push(g.x,g.y,g.z),p.push(T/l),p.push(E/r)}for(let E=1;E<=r;E++)for(let T=1;T<=l;T++){const D=(l+1)*E+T-1,S=(l+1)*(E-1)+T-1,x=(l+1)*(E-1)+T,L=(l+1)*E+T;d.push(D,S,L),d.push(S,x,L)}this.setIndex(d),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ru extends Mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uy,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ST extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MT extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class by extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class ET extends by{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Jh=new un,lx=new lt,cx=new lt;class TT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=ha,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fm,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;lx.setFromMatrixPosition(e.matrixWorld),i.position.copy(lx),cx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(cx),i.updateMatrixWorld(),Jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ay extends yy{constructor(e=-1,i=1,r=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=y*this.view.offsetY,v=h-y*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bT extends TT{constructor(){super(new Ay(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AT extends by{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new bT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RT extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ux(o,e,i,r){const l=CT(r);switch(i){case oy:return o*e;case sm:return o*e/l.components*l.byteLength;case rm:return o*e/l.components*l.byteLength;case cy:return o*e*2/l.components*l.byteLength;case om:return o*e*2/l.components*l.byteLength;case ly:return o*e*3/l.components*l.byteLength;case Zi:return o*e*4/l.components*l.byteLength;case lm:return o*e*4/l.components*l.byteLength;case Ou:case zu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pu:case Iu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:case Ap:return Math.max(o,16)*Math.max(e,8)/4;case Ep:case bp:return Math.max(o,8)*Math.max(e,8)/2;case Rp:case Cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case zp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case jp:case Xp:case qp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Wp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CT(o){switch(o){case ha:case iy:return{byteLength:1,components:1};case Al:case ay:case Ul:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case ir:case nm:case fa:return{byteLength:4,components:1};case sy:case ry:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:em}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=em);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ry(){let o=null,e=!1,i=null,r=null;function l(f,d){i(f,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function wT(o){const e=new WeakMap;function i(h,v){const p=h.array,y=h.usage,m=p.byteLength,g=o.createBuffer();o.bindBuffer(v,g),o.bufferData(v,p,y),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:m}}function r(h,v,p){const y=v.array,m=v.updateRanges;if(o.bindBuffer(p,h),m.length===0)o.bufferSubData(p,0,y);else{m.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<m.length;E++){const T=m[g],D=m[E];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,m[g]=D)}m.length=g+1;for(let E=0,T=m.length;E<T;E++){const D=m[E];o.bufferSubData(p,D.start*y.BYTES_PER_ELEMENT,y,D.start,D.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=e.get(h);v&&(o.deleteBuffer(v.buffer),e.delete(h))}function d(h,v){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=e.get(h);(!y||y.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,v));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,v),p.version=h.version}}return{get:l,remove:f,update:d}}var DT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NT=`#ifdef USE_ALPHAHASH
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
#endif`,UT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PT=`#ifdef USE_AOMAP
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
#endif`,IT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`#ifdef USE_BATCHING
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
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kT=`#ifdef USE_IRIDESCENCE
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
#endif`,jT=`#ifdef USE_BUMPMAP
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
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$T=`#define PI 3.141592653589793
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
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
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
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
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
#endif`,Cb=`struct PhysicalMaterial {
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
}`,wb=`
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fb=`#if defined( USE_POINTS_UV )
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
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
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
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p2=`float getShadowMask() {
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
}`,m2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g2=`#ifdef USE_SKINNING
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
#endif`,v2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_2=`#ifdef USE_SKINNING
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
#endif`,x2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E2=`#ifdef USE_TRANSMISSION
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
#endif`,T2=`#ifdef USE_TRANSMISSION
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
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D2=`uniform sampler2D t2D;
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
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`#include <common>
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
}`,P2=`#if DEPTH_PACKING == 3200
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
}`,I2=`#define DISTANCE
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
}`,B2=`#define DISTANCE
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
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G2=`uniform float scale;
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
}`,V2=`uniform vec3 diffuse;
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
}`,k2=`#include <common>
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
}`,j2=`uniform vec3 diffuse;
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
}`,X2=`#define LAMBERT
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
}`,q2=`#define LAMBERT
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
}`,W2=`#define MATCAP
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
}`,Y2=`#define MATCAP
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
}`,Z2=`#define NORMAL
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
}`,K2=`#define NORMAL
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
}`,Q2=`#define PHONG
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
}`,J2=`#define PHONG
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
}`,$2=`#define STANDARD
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
}`,tA=`#define STANDARD
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
}`,eA=`#define TOON
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
}`,nA=`#define TOON
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
}`,iA=`uniform float size;
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
}`,aA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,rA=`uniform vec3 color;
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
}`,oA=`uniform float rotation;
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
}`,lA=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:DT,alphahash_pars_fragment:NT,alphamap_fragment:UT,alphamap_pars_fragment:LT,alphatest_fragment:OT,alphatest_pars_fragment:zT,aomap_fragment:PT,aomap_pars_fragment:IT,batching_pars_vertex:BT,batching_vertex:FT,begin_vertex:HT,beginnormal_vertex:GT,bsdfs:VT,iridescence_fragment:kT,bumpmap_pars_fragment:jT,clipping_planes_fragment:XT,clipping_planes_pars_fragment:qT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:YT,color_fragment:ZT,color_pars_fragment:KT,color_pars_vertex:QT,color_vertex:JT,common:$T,cube_uv_reflection_fragment:tb,defaultnormal_vertex:eb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:ab,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ob,envmap_fragment:lb,envmap_common_pars_fragment:cb,envmap_pars_fragment:ub,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Mb,envmap_vertex:db,fog_vertex:hb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:vb,lightmap_pars_fragment:_b,lights_lambert_fragment:xb,lights_lambert_pars_fragment:yb,lights_pars_begin:Sb,lights_toon_fragment:Eb,lights_toon_pars_fragment:Tb,lights_phong_fragment:bb,lights_phong_pars_fragment:Ab,lights_physical_fragment:Rb,lights_physical_pars_fragment:Cb,lights_fragment_begin:wb,lights_fragment_maps:Db,lights_fragment_end:Nb,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:zb,map_fragment:Pb,map_pars_fragment:Ib,map_particle_fragment:Bb,map_particle_pars_fragment:Fb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:kb,morphnormal_vertex:jb,morphtarget_pars_vertex:Xb,morphtarget_vertex:qb,normal_fragment_begin:Wb,normal_fragment_maps:Yb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:t2,clearcoat_pars_fragment:e2,iridescence_pars_fragment:n2,opaque_fragment:i2,packing:a2,premultiplied_alpha_fragment:s2,project_vertex:r2,dithering_fragment:o2,dithering_pars_fragment:l2,roughnessmap_fragment:c2,roughnessmap_pars_fragment:u2,shadowmap_pars_fragment:f2,shadowmap_pars_vertex:d2,shadowmap_vertex:h2,shadowmask_pars_fragment:p2,skinbase_vertex:m2,skinning_pars_vertex:g2,skinning_vertex:v2,skinnormal_vertex:_2,specularmap_fragment:x2,specularmap_pars_fragment:y2,tonemapping_fragment:S2,tonemapping_pars_fragment:M2,transmission_fragment:E2,transmission_pars_fragment:T2,uv_pars_fragment:b2,uv_pars_vertex:A2,uv_vertex:R2,worldpos_vertex:C2,background_vert:w2,background_frag:D2,backgroundCube_vert:N2,backgroundCube_frag:U2,cube_vert:L2,cube_frag:O2,depth_vert:z2,depth_frag:P2,distanceRGBA_vert:I2,distanceRGBA_frag:B2,equirect_vert:F2,equirect_frag:H2,linedashed_vert:G2,linedashed_frag:V2,meshbasic_vert:k2,meshbasic_frag:j2,meshlambert_vert:X2,meshlambert_frag:q2,meshmatcap_vert:W2,meshmatcap_frag:Y2,meshnormal_vert:Z2,meshnormal_frag:K2,meshphong_vert:Q2,meshphong_frag:J2,meshphysical_vert:$2,meshphysical_frag:tA,meshtoon_vert:eA,meshtoon_frag:nA,points_vert:iA,points_frag:aA,shadow_vert:sA,shadow_frag:rA,sprite_vert:oA,sprite_frag:lA},Jt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},la={basic:{uniforms:ni([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ni([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Le(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ni([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ni([Jt.common,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.roughnessmap,Jt.metalnessmap,Jt.fog,Jt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ni([Jt.common,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.gradientmap,Jt.fog,Jt.lights,{emissive:{value:new Le(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ni([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ni([Jt.points,Jt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ni([Jt.common,Jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ni([Jt.common,Jt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ni([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ni([Jt.sprite,Jt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:ni([Jt.common,Jt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:ni([Jt.lights,Jt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};la.physical={uniforms:ni([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Cu={r:0,b:0,g:0},Ws=new pa,cA=new un;function uA(o,e,i,r,l,f,d){const h=new Le(0);let v=f===!0?0:1,p,y,m=null,g=0,E=null;function T(z){let C=z.isScene===!0?z.background:null;return C&&C.isTexture&&(C=(z.backgroundBlurriness>0?i:e).get(C)),C}function D(z){let C=!1;const k=T(z);k===null?x(h,v):k&&k.isColor&&(x(k,1),C=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,C){const k=T(C);k&&(k.isCubeTexture||k.mapping===Xu)?(y===void 0&&(y=new je(new Ss(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:_o(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(P,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(y)),Ws.copy(C.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),y.material.uniforms.envMap.value=k,y.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(cA.makeRotationFromEuler(Ws)),y.material.toneMapped=Xe.getTransfer(k.colorSpace)!==nn,(m!==k||g!==k.version||E!==o.toneMapping)&&(y.material.needsUpdate=!0,m=k,g=k.version,E=o.toneMapping),y.layers.enableAll(),z.unshift(y,y.geometry,y.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new je(new xo(2,2),new Pa({name:"BackgroundMaterial",uniforms:_o(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Xe.getTransfer(k.colorSpace)!==nn,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||g!==k.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,m=k,g=k.version,E=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function x(z,C){z.getRGB(Cu,xy(o)),r.buffers.color.setClear(Cu.r,Cu.g,Cu.b,C,d)}function L(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,C=1){h.set(z),v=C,x(h,v)},getClearAlpha:function(){return v},setClearAlpha:function(z){v=z,x(h,v)},render:D,addToRenderList:S,dispose:L}}function fA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let f=l,d=!1;function h(R,H,$,vt,dt){let st=!1;const Z=m(vt,$,H);f!==Z&&(f=Z,p(f.object)),st=E(R,vt,$,dt),st&&T(R,vt,$,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(st||d)&&(d=!1,C(R,H,$,vt),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function v(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function y(R){return o.deleteVertexArray(R)}function m(R,H,$){const vt=$.wireframe===!0;let dt=r[R.id];dt===void 0&&(dt={},r[R.id]=dt);let st=dt[H.id];st===void 0&&(st={},dt[H.id]=st);let Z=st[vt];return Z===void 0&&(Z=g(v()),st[vt]=Z),Z}function g(R){const H=[],$=[],vt=[];for(let dt=0;dt<i;dt++)H[dt]=0,$[dt]=0,vt[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:vt,object:R,attributes:{},index:null}}function E(R,H,$,vt){const dt=f.attributes,st=H.attributes;let Z=0;const ut=$.getAttributes();for(const et in ut)if(ut[et].location>=0){const bt=dt[et];let Ot=st[et];if(Ot===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(Ot=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(Ot=R.instanceColor)),bt===void 0||bt.attribute!==Ot||Ot&&bt.data!==Ot.data)return!0;Z++}return f.attributesNum!==Z||f.index!==vt}function T(R,H,$,vt){const dt={},st=H.attributes;let Z=0;const ut=$.getAttributes();for(const et in ut)if(ut[et].location>=0){let bt=st[et];bt===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(bt=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(bt=R.instanceColor));const Ot={};Ot.attribute=bt,bt&&bt.data&&(Ot.data=bt.data),dt[et]=Ot,Z++}f.attributes=dt,f.attributesNum=Z,f.index=vt}function D(){const R=f.newAttributes;for(let H=0,$=R.length;H<$;H++)R[H]=0}function S(R){x(R,0)}function x(R,H){const $=f.newAttributes,vt=f.enabledAttributes,dt=f.attributeDivisors;$[R]=1,vt[R]===0&&(o.enableVertexAttribArray(R),vt[R]=1),dt[R]!==H&&(o.vertexAttribDivisor(R,H),dt[R]=H)}function L(){const R=f.newAttributes,H=f.enabledAttributes;for(let $=0,vt=H.length;$<vt;$++)H[$]!==R[$]&&(o.disableVertexAttribArray($),H[$]=0)}function z(R,H,$,vt,dt,st,Z){Z===!0?o.vertexAttribIPointer(R,H,$,dt,st):o.vertexAttribPointer(R,H,$,vt,dt,st)}function C(R,H,$,vt){D();const dt=vt.attributes,st=$.getAttributes(),Z=H.defaultAttributeValues;for(const ut in st){const et=st[ut];if(et.location>=0){let Rt=dt[ut];if(Rt===void 0&&(ut==="instanceMatrix"&&R.instanceMatrix&&(Rt=R.instanceMatrix),ut==="instanceColor"&&R.instanceColor&&(Rt=R.instanceColor)),Rt!==void 0){const bt=Rt.normalized,Ot=Rt.itemSize,le=e.get(Rt);if(le===void 0)continue;const ye=le.buffer,j=le.type,St=le.bytesPerElement,ct=j===o.INT||j===o.UNSIGNED_INT||Rt.gpuType===nm;if(Rt.isInterleavedBufferAttribute){const Q=Rt.data,xt=Q.stride,Pt=Rt.offset;if(Q.isInstancedInterleavedBuffer){for(let Dt=0;Dt<et.locationSize;Dt++)x(et.location+Dt,Q.meshPerAttribute);R.isInstancedMesh!==!0&&vt._maxInstanceCount===void 0&&(vt._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Dt=0;Dt<et.locationSize;Dt++)S(et.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Dt=0;Dt<et.locationSize;Dt++)z(et.location+Dt,Ot/et.locationSize,j,bt,xt*St,(Pt+Ot/et.locationSize*Dt)*St,ct)}else{if(Rt.isInstancedBufferAttribute){for(let Q=0;Q<et.locationSize;Q++)x(et.location+Q,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&vt._maxInstanceCount===void 0&&(vt._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Q=0;Q<et.locationSize;Q++)S(et.location+Q);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Q=0;Q<et.locationSize;Q++)z(et.location+Q,Ot/et.locationSize,j,bt,Ot*St,Ot/et.locationSize*Q*St,ct)}}else if(Z!==void 0){const bt=Z[ut];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(et.location,bt);break;case 3:o.vertexAttrib3fv(et.location,bt);break;case 4:o.vertexAttrib4fv(et.location,bt);break;default:o.vertexAttrib1fv(et.location,bt)}}}}L()}function k(){B();for(const R in r){const H=r[R];for(const $ in H){const vt=H[$];for(const dt in vt)y(vt[dt].object),delete vt[dt];delete H[$]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const $ in H){const vt=H[$];for(const dt in vt)y(vt[dt].object),delete vt[dt];delete H[$]}delete r[R.id]}function O(R){for(const H in r){const $=r[H];if($[R.id]===void 0)continue;const vt=$[R.id];for(const dt in vt)y(vt[dt].object),delete vt[dt];delete $[R.id]}}function B(){N(),d=!0,f!==l&&(f=l,p(f.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:N,dispose:k,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:S,disableUnusedAttributes:L}}function dA(o,e,i){let r;function l(p){r=p}function f(p,y){o.drawArrays(r,p,y),i.update(y,r,1)}function d(p,y,m){m!==0&&(o.drawArraysInstanced(r,p,y,m),i.update(y,r,m))}function h(p,y,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,y,0,m);let E=0;for(let T=0;T<m;T++)E+=y[T];i.update(E,r,1)}function v(p,y,m,g){if(m===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)d(p[T],y[T],g[T]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,y,0,g,0,m);let T=0;for(let D=0;D<m;D++)T+=y[D]*g[D];i.update(T,r,1)}}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=v}function hA(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Zi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const B=O===Ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ha&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==fa&&!B)}function v(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=v(p);y!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const m=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=T>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:C,vertexTextures:k,maxSamples:P}}function pA(o){const e=this;let i=null,r=0,l=!1,f=!1;const d=new Ks,h=new Te,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const E=m.length!==0||g||r!==0||l;return l=g,r=m.length,E},this.beginShadows=function(){f=!0,y(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,g){i=y(m,g,0)},this.setState=function(m,g,E){const T=m.clippingPlanes,D=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!l||T===null||T.length===0||f&&!S)f?y(null):p();else{const L=f?0:r,z=L*4;let C=x.clippingState||null;v.value=C,C=y(T,g,z,E);for(let k=0;k!==z;++k)C[k]=i[k];x.clippingState=C,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function p(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(m,g,E,T){const D=m!==null?m.length:0;let S=null;if(D!==0){if(S=v.value,T!==!0||S===null){const x=E+D*4,L=g.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let z=0,C=E;z!==D;++z,C+=4)d.copy(m[z]).applyMatrix4(L,h),d.normal.toArray(S,C),S[C+3]=d.constant}v.value=S,v.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,S}}function mA(o){let e=new WeakMap;function i(d,h){return h===xp?d.mapping=mo:h===yp&&(d.mapping=go),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===xp||h===yp)if(e.has(d)){const v=e.get(d).texture;return i(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const p=new dT(v.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const co=4,fx=[.125,.215,.35,.446,.526,.582],tr=20,$h=new Ay,dx=new Le;let tp=null,ep=0,np=0,ip=!1;const Qs=(1+Math.sqrt(5))/2,ro=1/Qs,hx=[new lt(-Qs,ro,0),new lt(Qs,ro,0),new lt(-ro,0,Qs),new lt(ro,0,Qs),new lt(0,Qs,-ro),new lt(0,Qs,ro),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],gA=new lt;class px{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:d=256,position:h=gA}=f;tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,l,v,h),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tp,ep,np),this._renderer.xr.enabled=ip,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ua,minFilter:ua,generateMipmaps:!1,type:Ul,format:Zi,colorSpace:vo,depthBuffer:!1},l=mx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mx(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vA(f)),this._blurMaterial=_A(f,e,i)}return l}_compileMaterial(e){const i=new je(this._lodPlanes[0],e);this._renderer.compile(i,$h)}_sceneToCubeUV(e,i,r,l,f){const v=new Ii(90,1,i,r),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,E=m.toneMapping;m.getClearColor(dx),m.toneMapping=ys,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const D=new ku({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),S=new je(new Ss,D);let x=!1;const L=e.background;L?L.isColor&&(D.color.copy(L),e.background=null,x=!0):(D.color.copy(dx),x=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(v.up.set(0,p[z],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x+y[z],f.y,f.z)):C===1?(v.up.set(0,0,p[z]),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y+y[z],f.z)):(v.up.set(0,p[z],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y,f.z+y[z]));const k=this._cubeSize;wu(l,C*k,z>2?k:0,k,k),m.setRenderTarget(l),x&&m.render(S,v),m.render(e,v)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=E,m.autoClear=g,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===mo||e.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gx());const f=l?this._cubemapMaterial:this._equirectMaterial,d=new je(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const v=this._cubeSize;wu(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(d,$h)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=hx[(l-f-1)%hx.length];this._blur(e,f-1,f,d,h)}i.autoClear=r}_blur(e,i,r,l,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",f),this._halfBlur(d,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,d,h){const v=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,m=new je(this._lodPlanes[l],p),g=p.uniforms,E=this._sizeLods[r]-1,T=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*tr-1),D=f/T,S=isFinite(f)?1+Math.floor(y*D):tr;S>tr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${tr}`);const x=[];let L=0;for(let O=0;O<tr;++O){const B=O/D,N=Math.exp(-B*B/2);x.push(N),O===0?L+=N:O<S&&(L+=2*N)}for(let O=0;O<x.length;O++)x[O]=x[O]/L;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:z}=this;g.dTheta.value=T,g.mipInt.value=z-r;const C=this._sizeLods[l],k=3*C*(l>z-co?l-z+co:0),P=4*(this._cubeSize-C);wu(i,k,P,3*C,2*C),v.setRenderTarget(i),v.render(m,$h)}}function vA(o){const e=[],i=[],r=[];let l=o;const f=o-co+1+fx.length;for(let d=0;d<f;d++){const h=Math.pow(2,l);i.push(h);let v=1/h;d>o-co?v=fx[d-o+co-1]:d===0&&(v=0),r.push(v);const p=1/(h-2),y=-p,m=1+p,g=[y,y,m,y,m,m,y,y,m,m,y,m],E=6,T=6,D=3,S=2,x=1,L=new Float32Array(D*T*E),z=new Float32Array(S*T*E),C=new Float32Array(x*T*E);for(let P=0;P<E;P++){const O=P%3*2/3-1,B=P>2?0:-1,N=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];L.set(N,D*T*P),z.set(g,S*T*P);const R=[P,P,P,P,P,P];C.set(R,x*T*P)}const k=new si;k.setAttribute("position",new Bi(L,D)),k.setAttribute("uv",new Bi(z,S)),k.setAttribute("faceIndex",new Bi(C,x)),e.push(k),l>co&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function mx(o,e,i){const r=new ar(o,e,i);return r.texture.mapping=Xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function _A(o,e,i){const r=new Float32Array(tr),l=new lt(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mm(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function gx(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mm(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function vx(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function mm(){return`

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
	`}function xA(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const v=h.mapping,p=v===xp||v===yp,y=v===mo||v===go;if(p||y){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new px(o)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const E=h.image;return p&&E&&E.height>0||y&&E&&l(E)?(i===null&&(i=new px(o)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function l(h){let v=0;const p=6;for(let y=0;y<p;y++)h[y]!==void 0&&v++;return v===p}function f(h){const v=h.target;v.removeEventListener("dispose",f);const p=e.get(v);p!==void 0&&(e.delete(v),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function yA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Dl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function SA(o,e,i,r){const l={},f=new WeakMap;function d(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const E=f.get(g);E&&(e.remove(E),f.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(m,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function v(m){const g=m.attributes;for(const E in g)e.update(g[E],o.ARRAY_BUFFER)}function p(m){const g=[],E=m.index,T=m.attributes.position;let D=0;if(E!==null){const L=E.array;D=E.version;for(let z=0,C=L.length;z<C;z+=3){const k=L[z+0],P=L[z+1],O=L[z+2];g.push(k,P,P,O,O,k)}}else if(T!==void 0){const L=T.array;D=T.version;for(let z=0,C=L.length/3-1;z<C;z+=3){const k=z+0,P=z+1,O=z+2;g.push(k,P,P,O,O,k)}}else return;const S=new(dy(g)?_y:vy)(g,1);S.version=D;const x=f.get(m);x&&e.remove(x),f.set(m,S)}function y(m){const g=f.get(m);if(g){const E=m.index;E!==null&&g.version<E.version&&p(m)}else p(m);return f.get(m)}return{get:h,update:v,getWireframeAttribute:y}}function MA(o,e,i){let r;function l(g){r=g}let f,d;function h(g){f=g.type,d=g.bytesPerElement}function v(g,E){o.drawElements(r,E,f,g*d),i.update(E,r,1)}function p(g,E,T){T!==0&&(o.drawElementsInstanced(r,E,f,g*d,T),i.update(E,r,T))}function y(g,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,f,g,0,T);let S=0;for(let x=0;x<T;x++)S+=E[x];i.update(S,r,1)}function m(g,E,T,D){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<g.length;x++)p(g[x]/d,E[x],D[x]);else{S.multiDrawElementsInstancedWEBGL(r,E,0,f,g,0,D,0,T);let x=0;for(let L=0;L<T;L++)x+=E[L]*D[L];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=v,this.renderInstances=p,this.renderMultiDraw=y,this.renderMultiDrawInstances=m}function EA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function TA(o,e,i){const r=new WeakMap,l=new yn;function f(d,h,v){const p=d.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=y!==void 0?y.length:0;let g=r.get(h);if(g===void 0||g.count!==m){let R=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var E=R;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),D===!0&&(C=2),S===!0&&(C=3);let k=h.attributes.position.count*C,P=1;k>e.maxTextureSize&&(P=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const O=new Float32Array(k*P*4*m),B=new hy(O,k,P,m);B.type=fa,B.needsUpdate=!0;const N=C*4;for(let H=0;H<m;H++){const $=x[H],vt=L[H],dt=z[H],st=k*P*4*H;for(let Z=0;Z<$.count;Z++){const ut=Z*N;T===!0&&(l.fromBufferAttribute($,Z),O[st+ut+0]=l.x,O[st+ut+1]=l.y,O[st+ut+2]=l.z,O[st+ut+3]=0),D===!0&&(l.fromBufferAttribute(vt,Z),O[st+ut+4]=l.x,O[st+ut+5]=l.y,O[st+ut+6]=l.z,O[st+ut+7]=0),S===!0&&(l.fromBufferAttribute(dt,Z),O[st+ut+8]=l.x,O[st+ut+9]=l.y,O[st+ut+10]=l.z,O[st+ut+11]=dt.itemSize===4?l.w:1)}}g={count:m,texture:B,size:new Fe(k,P)},r.set(h,g),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const D=h.morphTargetsRelative?1:1-T;v.getUniforms().setValue(o,"morphTargetBaseInfluence",D),v.getUniforms().setValue(o,"morphTargetInfluences",p)}v.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:f}}function bA(o,e,i,r){let l=new WeakMap;function f(v){const p=r.render.frame,y=v.geometry,m=e.get(v,y);if(l.get(m)!==p&&(e.update(m),l.set(m,p)),v.isInstancedMesh&&(v.hasEventListener("dispose",h)===!1&&v.addEventListener("dispose",h),l.get(v)!==p&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),l.set(v,p))),v.isSkinnedMesh){const g=v.skeleton;l.get(g)!==p&&(g.update(),l.set(g,p))}return m}function d(){l=new WeakMap}function h(v){const p=v.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:d}}const Cy=new ai,_x=new Ey(1,1),wy=new hy,Dy=new ZE,Ny=new Sy,xx=[],yx=[],Sx=new Float32Array(16),Mx=new Float32Array(9),Ex=new Float32Array(4);function Eo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=xx[l];if(f===void 0&&(f=new Float32Array(l),xx[l]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function On(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function qu(o,e){let i=yx[e];i===void 0&&(i=new Int32Array(e),yx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function AA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function RA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ln(i,e))return;o.uniform2fv(this.addr,e),On(i,e)}}function CA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Ln(i,e))return;o.uniform3fv(this.addr,e),On(i,e)}}function wA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ln(i,e))return;o.uniform4fv(this.addr,e),On(i,e)}}function DA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),On(i,e)}else{if(Ln(i,r))return;Ex.set(r),o.uniformMatrix2fv(this.addr,!1,Ex),On(i,r)}}function NA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),On(i,e)}else{if(Ln(i,r))return;Mx.set(r),o.uniformMatrix3fv(this.addr,!1,Mx),On(i,r)}}function UA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),On(i,e)}else{if(Ln(i,r))return;Sx.set(r),o.uniformMatrix4fv(this.addr,!1,Sx),On(i,r)}}function LA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function OA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ln(i,e))return;o.uniform2iv(this.addr,e),On(i,e)}}function zA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ln(i,e))return;o.uniform3iv(this.addr,e),On(i,e)}}function PA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ln(i,e))return;o.uniform4iv(this.addr,e),On(i,e)}}function IA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function BA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ln(i,e))return;o.uniform2uiv(this.addr,e),On(i,e)}}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ln(i,e))return;o.uniform3uiv(this.addr,e),On(i,e)}}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ln(i,e))return;o.uniform4uiv(this.addr,e),On(i,e)}}function GA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(_x.compareFunction=fy,f=_x):f=Cy,i.setTexture2D(e||f,l)}function VA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Dy,l)}function kA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ny,l)}function jA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||wy,l)}function XA(o){switch(o){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return wA;case 35674:return DA;case 35675:return NA;case 35676:return UA;case 5124:case 35670:return LA;case 35667:case 35671:return OA;case 35668:case 35672:return zA;case 35669:case 35673:return PA;case 5125:return IA;case 36294:return BA;case 36295:return FA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return jA}}function qA(o,e){o.uniform1fv(this.addr,e)}function WA(o,e){const i=Eo(e,this.size,2);o.uniform2fv(this.addr,i)}function YA(o,e){const i=Eo(e,this.size,3);o.uniform3fv(this.addr,i)}function ZA(o,e){const i=Eo(e,this.size,4);o.uniform4fv(this.addr,i)}function KA(o,e){const i=Eo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function QA(o,e){const i=Eo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function JA(o,e){const i=Eo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $A(o,e){o.uniform1iv(this.addr,e)}function tR(o,e){o.uniform2iv(this.addr,e)}function eR(o,e){o.uniform3iv(this.addr,e)}function nR(o,e){o.uniform4iv(this.addr,e)}function iR(o,e){o.uniform1uiv(this.addr,e)}function aR(o,e){o.uniform2uiv(this.addr,e)}function sR(o,e){o.uniform3uiv(this.addr,e)}function rR(o,e){o.uniform4uiv(this.addr,e)}function oR(o,e,i){const r=this.cache,l=e.length,f=qu(i,l);Ln(r,f)||(o.uniform1iv(this.addr,f),On(r,f));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Cy,f[d])}function lR(o,e,i){const r=this.cache,l=e.length,f=qu(i,l);Ln(r,f)||(o.uniform1iv(this.addr,f),On(r,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Dy,f[d])}function cR(o,e,i){const r=this.cache,l=e.length,f=qu(i,l);Ln(r,f)||(o.uniform1iv(this.addr,f),On(r,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Ny,f[d])}function uR(o,e,i){const r=this.cache,l=e.length,f=qu(i,l);Ln(r,f)||(o.uniform1iv(this.addr,f),On(r,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||wy,f[d])}function fR(o){switch(o){case 5126:return qA;case 35664:return WA;case 35665:return YA;case 35666:return ZA;case 35674:return KA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return $A;case 35667:case 35671:return tR;case 35668:case 35672:return eR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return aR;case 36295:return sR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return uR}}class dR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=XA(i.type)}}class hR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fR(i.type)}}class pR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],r)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function Tx(o,e){o.seq.push(e),o.map[e.id]=e}function mR(o,e,i){const r=o.name,l=r.length;for(ap.lastIndex=0;;){const f=ap.exec(r),d=ap.lastIndex;let h=f[1];const v=f[2]==="]",p=f[3];if(v&&(h=h|0),p===void 0||p==="["&&d+2===l){Tx(i,p===void 0?new dR(h,o,e):new hR(h,o,e));break}else{let m=i.map[h];m===void 0&&(m=new pR(h),Tx(i,m)),i=m}}}class Bu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),d=e.getUniformLocation(i,f.name);mR(f,d,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],v=r[h.id];v.needsUpdate!==!1&&h.setValue(e,v.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function bx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const gR=37297;let vR=0;function _R(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Ax=new Te;function xR(o){Xe._getMatrix(Ax,Xe.workingColorSpace,o);const e=`mat3( ${Ax.elements.map(i=>i.toFixed(4))} )`;switch(Xe.getTransfer(o)){case Hu:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Rx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+_R(o.getShaderSource(e),h)}else return f}function yR(o,e){const i=xR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function SR(o,e){let i;switch(e){case EE:i="Linear";break;case TE:i="Reinhard";break;case bE:i="Cineon";break;case ey:i="ACESFilmic";break;case RE:i="AgX";break;case CE:i="Neutral";break;case AE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Du=new lt;function MR(){Xe.getLuminanceCoefficients(Du);const o=Du.x.toFixed(4),e=Du.y.toFixed(4),i=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ER(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function TR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function bR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ml(o){return o!==""}function Cx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AR=/^[ \t]*#include +<([\w\d./]+)>/gm;function $p(o){return o.replace(AR,CR)}const RR=new Map;function CR(o,e){let i=be[e];if(i===void 0){const r=RR.get(e);if(r!==void 0)i=be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $p(i)}const wR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dx(o){return o.replace(wR,DR)}function DR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Nx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function NR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===$x?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oa&&(e="SHADOWMAP_TYPE_VSM"),e}function UR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function OR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ty:e="ENVMAP_BLENDING_MULTIPLY";break;case SE:e="ENVMAP_BLENDING_MIX";break;case ME:e="ENVMAP_BLENDING_ADD";break}return e}function zR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function PR(o,e,i,r){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const v=NR(i),p=UR(i),y=LR(i),m=OR(i),g=zR(i),E=ER(i),T=TR(f),D=l.createProgram();let S,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ml).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ml).join(`
`),x.length>0&&(x+=`
`)):(S=[Nx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),x=[Nx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ys?"#define TONE_MAPPING":"",i.toneMapping!==ys?be.tonemapping_pars_fragment:"",i.toneMapping!==ys?SR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,yR("linearToOutputTexel",i.outputColorSpace),MR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ml).join(`
`)),d=$p(d),d=Cx(d,i),d=wx(d,i),h=$p(h),h=Cx(h,i),h=wx(h,i),d=Dx(d),h=Dx(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===B_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===B_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=L+S+d,C=L+x+h,k=bx(l,l.VERTEX_SHADER,z),P=bx(l,l.FRAGMENT_SHADER,C);l.attachShader(D,k),l.attachShader(D,P),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function O(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(D)||"",vt=l.getShaderInfoLog(k)||"",dt=l.getShaderInfoLog(P)||"",st=$.trim(),Z=vt.trim(),ut=dt.trim();let et=!0,Rt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,k,P);else{const bt=Rx(l,k,"vertex"),Ot=Rx(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+bt+`
`+Ot)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(Z===""||ut==="")&&(Rt=!1);Rt&&(H.diagnostics={runnable:et,programLog:st,vertexShader:{log:Z,prefix:S},fragmentShader:{log:ut,prefix:x}})}l.deleteShader(k),l.deleteShader(P),B=new Bu(l,D),N=bR(l,D)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(D,gR)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vR++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=k,this.fragmentShader=P,this}let IR=0;class BR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new FR(e),i.set(e,r)),r}}class FR{constructor(e){this.id=IR++,this.code=e,this.usedTimes=0}}function HR(o,e,i,r,l,f,d){const h=new my,v=new BR,p=new Set,y=[],m=l.logarithmicDepthBuffer,g=l.vertexTextures;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(N){return p.add(N),N===0?"uv":`uv${N}`}function S(N,R,H,$,vt){const dt=$.fog,st=vt.geometry,Z=N.isMeshStandardMaterial?$.environment:null,ut=(N.isMeshStandardMaterial?i:e).get(N.envMap||Z),et=ut&&ut.mapping===Xu?ut.image.height:null,Rt=T[N.type];N.precision!==null&&(E=l.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const bt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ot=bt!==void 0?bt.length:0;let le=0;st.morphAttributes.position!==void 0&&(le=1),st.morphAttributes.normal!==void 0&&(le=2),st.morphAttributes.color!==void 0&&(le=3);let ye,j,St,ct;if(Rt){const Ht=la[Rt];ye=Ht.vertexShader,j=Ht.fragmentShader}else ye=N.vertexShader,j=N.fragmentShader,v.update(N),St=v.getVertexShaderID(N),ct=v.getFragmentShaderID(N);const Q=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Pt=vt.isInstancedMesh===!0,Dt=vt.isBatchedMesh===!0,Ct=!!N.map,Zt=!!N.matcap,V=!!ut,Ee=!!N.aoMap,te=!!N.lightMap,ie=!!N.bumpMap,Bt=!!N.normalMap,$t=!!N.displacementMap,jt=!!N.emissiveMap,he=!!N.metalnessMap,yt=!!N.roughnessMap,It=N.anisotropy>0,w=N.clearcoat>0,b=N.dispersion>0,q=N.iridescence>0,rt=N.sheen>0,Mt=N.transmission>0,_t=It&&!!N.anisotropyMap,Ut=w&&!!N.clearcoatMap,At=w&&!!N.clearcoatNormalMap,Ft=w&&!!N.clearcoatRoughnessMap,se=q&&!!N.iridescenceMap,Lt=q&&!!N.iridescenceThicknessMap,Wt=rt&&!!N.sheenColorMap,ce=rt&&!!N.sheenRoughnessMap,ee=!!N.specularMap,Vt=!!N.specularColorMap,ve=!!N.specularIntensityMap,Y=Mt&&!!N.transmissionMap,zt=Mt&&!!N.thicknessMap,F=!!N.gradientMap,X=!!N.alphaMap,J=N.alphaTest>0,K=!!N.alphaHash,I=!!N.extensions;let wt=ys;N.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(wt=o.toneMapping);const Xt={shaderID:Rt,shaderType:N.type,shaderName:N.name,vertexShader:ye,fragmentShader:j,defines:N.defines,customVertexShaderID:St,customFragmentShaderID:ct,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:Dt,batchingColor:Dt&&vt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&vt.instanceColor!==null,instancingMorph:Pt&&vt.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Q===null?o.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:vo,alphaToCoverage:!!N.alphaToCoverage,map:Ct,matcap:Zt,envMap:V,envMapMode:V&&ut.mapping,envMapCubeUVHeight:et,aoMap:Ee,lightMap:te,bumpMap:ie,normalMap:Bt,displacementMap:g&&$t,emissiveMap:jt,normalMapObjectSpace:Bt&&N.normalMapType===UE,normalMapTangentSpace:Bt&&N.normalMapType===uy,metalnessMap:he,roughnessMap:yt,anisotropy:It,anisotropyMap:_t,clearcoat:w,clearcoatMap:Ut,clearcoatNormalMap:At,clearcoatRoughnessMap:Ft,dispersion:b,iridescence:q,iridescenceMap:se,iridescenceThicknessMap:Lt,sheen:rt,sheenColorMap:Wt,sheenRoughnessMap:ce,specularMap:ee,specularColorMap:Vt,specularIntensityMap:ve,transmission:Mt,transmissionMap:Y,thicknessMap:zt,gradientMap:F,opaque:N.transparent===!1&&N.blending===uo&&N.alphaToCoverage===!1,alphaMap:X,alphaTest:J,alphaHash:K,combine:N.combine,mapUv:Ct&&D(N.map.channel),aoMapUv:Ee&&D(N.aoMap.channel),lightMapUv:te&&D(N.lightMap.channel),bumpMapUv:ie&&D(N.bumpMap.channel),normalMapUv:Bt&&D(N.normalMap.channel),displacementMapUv:$t&&D(N.displacementMap.channel),emissiveMapUv:jt&&D(N.emissiveMap.channel),metalnessMapUv:he&&D(N.metalnessMap.channel),roughnessMapUv:yt&&D(N.roughnessMap.channel),anisotropyMapUv:_t&&D(N.anisotropyMap.channel),clearcoatMapUv:Ut&&D(N.clearcoatMap.channel),clearcoatNormalMapUv:At&&D(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&D(N.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&D(N.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&D(N.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&D(N.sheenColorMap.channel),sheenRoughnessMapUv:ce&&D(N.sheenRoughnessMap.channel),specularMapUv:ee&&D(N.specularMap.channel),specularColorMapUv:Vt&&D(N.specularColorMap.channel),specularIntensityMapUv:ve&&D(N.specularIntensityMap.channel),transmissionMapUv:Y&&D(N.transmissionMap.channel),thicknessMapUv:zt&&D(N.thicknessMap.channel),alphaMapUv:X&&D(N.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Bt||It),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:vt.isPoints===!0&&!!st.attributes.uv&&(Ct||X),fog:!!dt,useFog:N.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:xt,skinning:vt.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ct&&N.map.isVideoTexture===!0&&Xe.getTransfer(N.map.colorSpace)===nn,decodeVideoTextureEmissive:jt&&N.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(N.emissiveMap.colorSpace)===nn,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ca,flipSided:N.side===ii,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:I&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I&&N.extensions.multiDraw===!0||Dt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Xt.vertexUv1s=p.has(1),Xt.vertexUv2s=p.has(2),Xt.vertexUv3s=p.has(3),p.clear(),Xt}function x(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const H in N.defines)R.push(H),R.push(N.defines[H]);return N.isRawShaderMaterial===!1&&(L(R,N),z(R,N),R.push(o.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function L(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function z(N,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),N.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),N.push(h.mask)}function C(N){const R=T[N.type];let H;if(R){const $=la[R];H=lT.clone($.uniforms)}else H=N.uniforms;return H}function k(N,R){let H;for(let $=0,vt=y.length;$<vt;$++){const dt=y[$];if(dt.cacheKey===R){H=dt,++H.usedTimes;break}}return H===void 0&&(H=new PR(o,R,N,f),y.push(H)),H}function P(N){if(--N.usedTimes===0){const R=y.indexOf(N);y[R]=y[y.length-1],y.pop(),N.destroy()}}function O(N){v.remove(N)}function B(){v.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:k,releaseProgram:P,releaseShaderCache:O,programs:y,dispose:B}}function GR(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,v){o.get(d)[h]=v}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function VR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ux(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Lx(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function d(m,g,E,T,D,S){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:g,material:E,groupOrder:T,renderOrder:m.renderOrder,z:D,group:S},o[e]=x):(x.id=m.id,x.object=m,x.geometry=g,x.material=E,x.groupOrder=T,x.renderOrder=m.renderOrder,x.z=D,x.group=S),e++,x}function h(m,g,E,T,D,S){const x=d(m,g,E,T,D,S);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function v(m,g,E,T,D,S){const x=d(m,g,E,T,D,S);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(m,g){i.length>1&&i.sort(m||VR),r.length>1&&r.sort(g||Ux),l.length>1&&l.sort(g||Ux)}function y(){for(let m=e,g=o.length;m<g;m++){const E=o[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:h,unshift:v,finish:y,sort:p}}function kR(){let o=new WeakMap;function e(r,l){const f=o.get(r);let d;return f===void 0?(d=new Lx,o.set(r,[d])):l>=f.length?(d=new Lx,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function jR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new lt,color:new Le};break;case"SpotLight":i={position:new lt,direction:new lt,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[e.id]=i,i}}}function XR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let qR=0;function WR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function YR(o){const e=new jR,i=XR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new lt);const l=new lt,f=new un,d=new un;function h(p){let y=0,m=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,T=0,D=0,S=0,x=0,L=0,z=0,C=0,k=0,P=0,O=0;p.sort(WR);for(let N=0,R=p.length;N<R;N++){const H=p[N],$=H.color,vt=H.intensity,dt=H.distance,st=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)y+=$.r*vt,m+=$.g*vt,g+=$.b*vt;else if(H.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(H.sh.coefficients[Z],vt);O++}else if(H.isDirectionalLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ut=H.shadow,et=i.get(H);et.shadowIntensity=ut.intensity,et.shadowBias=ut.bias,et.shadowNormalBias=ut.normalBias,et.shadowRadius=ut.radius,et.shadowMapSize=ut.mapSize,r.directionalShadow[E]=et,r.directionalShadowMap[E]=st,r.directionalShadowMatrix[E]=H.shadow.matrix,L++}r.directional[E]=Z,E++}else if(H.isSpotLight){const Z=e.get(H);Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy($).multiplyScalar(vt),Z.distance=dt,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,r.spot[D]=Z;const ut=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,ut.updateMatrices(H),H.castShadow&&P++),r.spotLightMatrix[D]=ut.matrix,H.castShadow){const et=i.get(H);et.shadowIntensity=ut.intensity,et.shadowBias=ut.bias,et.shadowNormalBias=ut.normalBias,et.shadowRadius=ut.radius,et.shadowMapSize=ut.mapSize,r.spotShadow[D]=et,r.spotShadowMap[D]=st,C++}D++}else if(H.isRectAreaLight){const Z=e.get(H);Z.color.copy($).multiplyScalar(vt),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=Z,S++}else if(H.isPointLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const ut=H.shadow,et=i.get(H);et.shadowIntensity=ut.intensity,et.shadowBias=ut.bias,et.shadowNormalBias=ut.normalBias,et.shadowRadius=ut.radius,et.shadowMapSize=ut.mapSize,et.shadowCameraNear=ut.camera.near,et.shadowCameraFar=ut.camera.far,r.pointShadow[T]=et,r.pointShadowMap[T]=st,r.pointShadowMatrix[T]=H.shadow.matrix,z++}r.point[T]=Z,T++}else if(H.isHemisphereLight){const Z=e.get(H);Z.skyColor.copy(H.color).multiplyScalar(vt),Z.groundColor.copy(H.groundColor).multiplyScalar(vt),r.hemi[x]=Z,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Jt.LTC_FLOAT_1,r.rectAreaLTC2=Jt.LTC_FLOAT_2):(r.rectAreaLTC1=Jt.LTC_HALF_1,r.rectAreaLTC2=Jt.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=m,r.ambient[2]=g;const B=r.hash;(B.directionalLength!==E||B.pointLength!==T||B.spotLength!==D||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==L||B.numPointShadows!==z||B.numSpotShadows!==C||B.numSpotMaps!==k||B.numLightProbes!==O)&&(r.directional.length=E,r.spot.length=D,r.rectArea.length=S,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+k-P,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=O,B.directionalLength=E,B.pointLength=T,B.spotLength=D,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=L,B.numPointShadows=z,B.numSpotShadows=C,B.numSpotMaps=k,B.numLightProbes=O,r.version=qR++)}function v(p,y){let m=0,g=0,E=0,T=0,D=0;const S=y.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const z=p[x];if(z.isDirectionalLight){const C=r.directional[m];C.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),m++}else if(z.isSpotLight){const C=r.spot[E];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),E++}else if(z.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(S),d.identity(),f.copy(z.matrixWorld),f.premultiply(S),d.extractRotation(f),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(z.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(S),g++}else if(z.isHemisphereLight){const C=r.hemi[D];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(S),D++}}}return{setup:h,setupView:v,state:r}}function Ox(o){const e=new YR(o),i=[],r=[];function l(y){p.camera=y,i.length=0,r.length=0}function f(y){i.push(y)}function d(y){r.push(y)}function h(){e.setup(i)}function v(y){e.setupView(i,y)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:d}}function ZR(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new Ox(o),e.set(l,[h])):f>=d.length?(h=new Ox(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
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
}`;function JR(o,e,i){let r=new fm;const l=new Fe,f=new Fe,d=new yn,h=new ST({depthPacking:NE}),v=new MT,p={},y=i.maxTextureSize,m={[Ms]:ii,[ii]:Ms,[ca]:ca},g=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:KR,fragmentShader:QR}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new si;T.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new je(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jx;let x=this.type;this.render=function(P,O,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const N=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(xs),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const vt=x!==Oa&&this.type===Oa,dt=x===Oa&&this.type!==Oa;for(let st=0,Z=P.length;st<Z;st++){const ut=P[st],et=ut.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;l.copy(et.mapSize);const Rt=et.getFrameExtents();if(l.multiply(Rt),f.copy(et.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(f.x=Math.floor(y/Rt.x),l.x=f.x*Rt.x,et.mapSize.x=f.x),l.y>y&&(f.y=Math.floor(y/Rt.y),l.y=f.y*Rt.y,et.mapSize.y=f.y)),et.map===null||vt===!0||dt===!0){const Ot=this.type!==Oa?{minFilter:bi,magFilter:bi}:{};et.map!==null&&et.map.dispose(),et.map=new ar(l.x,l.y,Ot),et.map.texture.name=ut.name+".shadowMap",et.camera.updateProjectionMatrix()}o.setRenderTarget(et.map),o.clear();const bt=et.getViewportCount();for(let Ot=0;Ot<bt;Ot++){const le=et.getViewport(Ot);d.set(f.x*le.x,f.y*le.y,f.x*le.z,f.y*le.w),$.viewport(d),et.updateMatrices(ut,Ot),r=et.getFrustum(),C(O,B,et.camera,ut,this.type)}et.isPointLightShadow!==!0&&this.type===Oa&&L(et,B),et.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(N,R,H)};function L(P,O){const B=e.update(D);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ar(l.x,l.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(O,null,B,g,D,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(O,null,B,E,D,null)}function z(P,O,B,N){let R=null;const H=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)R=H;else if(R=B.isPointLight===!0?v:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=R.uuid,vt=O.uuid;let dt=p[$];dt===void 0&&(dt={},p[$]=dt);let st=dt[vt];st===void 0&&(st=R.clone(),dt[vt]=st,O.addEventListener("dispose",k)),R=st}if(R.visible=O.visible,R.wireframe=O.wireframe,N===Oa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:m[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=o.properties.get(R);$.light=B}return R}function C(P,O,B,N,R){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Oa)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const vt=e.update(P),dt=P.material;if(Array.isArray(dt)){const st=vt.groups;for(let Z=0,ut=st.length;Z<ut;Z++){const et=st[Z],Rt=dt[et.materialIndex];if(Rt&&Rt.visible){const bt=z(P,Rt,N,R);P.onBeforeShadow(o,P,O,B,vt,bt,et),o.renderBufferDirect(B,null,vt,bt,P,et),P.onAfterShadow(o,P,O,B,vt,bt,et)}}}else if(dt.visible){const st=z(P,dt,N,R);P.onBeforeShadow(o,P,O,B,vt,st,null),o.renderBufferDirect(B,null,vt,st,P,null),P.onAfterShadow(o,P,O,B,vt,st,null)}}const $=P.children;for(let vt=0,dt=$.length;vt<dt;vt++)C($[vt],O,B,N,R)}function k(P){P.target.removeEventListener("dispose",k);for(const B in p){const N=p[B],R=P.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const $R={[dp]:hp,[pp]:vp,[mp]:_p,[po]:gp,[hp]:dp,[vp]:pp,[_p]:mp,[gp]:po};function t3(o,e){function i(){let Y=!1;const zt=new yn;let F=null;const X=new yn(0,0,0,0);return{setMask:function(J){F!==J&&!Y&&(o.colorMask(J,J,J,J),F=J)},setLocked:function(J){Y=J},setClear:function(J,K,I,wt,Xt){Xt===!0&&(J*=wt,K*=wt,I*=wt),zt.set(J,K,I,wt),X.equals(zt)===!1&&(o.clearColor(J,K,I,wt),X.copy(zt))},reset:function(){Y=!1,F=null,X.set(-1,0,0,0)}}}function r(){let Y=!1,zt=!1,F=null,X=null,J=null;return{setReversed:function(K){if(zt!==K){const I=e.get("EXT_clip_control");K?I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT):I.clipControlEXT(I.LOWER_LEFT_EXT,I.NEGATIVE_ONE_TO_ONE_EXT),zt=K;const wt=J;J=null,this.setClear(wt)}},getReversed:function(){return zt},setTest:function(K){K?Q(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(K){F!==K&&!Y&&(o.depthMask(K),F=K)},setFunc:function(K){if(zt&&(K=$R[K]),X!==K){switch(K){case dp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case pp:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case mp:o.depthFunc(o.EQUAL);break;case gp:o.depthFunc(o.GEQUAL);break;case vp:o.depthFunc(o.GREATER);break;case _p:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}X=K}},setLocked:function(K){Y=K},setClear:function(K){J!==K&&(zt&&(K=1-K),o.clearDepth(K),J=K)},reset:function(){Y=!1,F=null,X=null,J=null,zt=!1}}}function l(){let Y=!1,zt=null,F=null,X=null,J=null,K=null,I=null,wt=null,Xt=null;return{setTest:function(Ht){Y||(Ht?Q(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Ht){zt!==Ht&&!Y&&(o.stencilMask(Ht),zt=Ht)},setFunc:function(Ht,Kt,oe){(F!==Ht||X!==Kt||J!==oe)&&(o.stencilFunc(Ht,Kt,oe),F=Ht,X=Kt,J=oe)},setOp:function(Ht,Kt,oe){(K!==Ht||I!==Kt||wt!==oe)&&(o.stencilOp(Ht,Kt,oe),K=Ht,I=Kt,wt=oe)},setLocked:function(Ht){Y=Ht},setClear:function(Ht){Xt!==Ht&&(o.clearStencil(Ht),Xt=Ht)},reset:function(){Y=!1,zt=null,F=null,X=null,J=null,K=null,I=null,wt=null,Xt=null}}}const f=new i,d=new r,h=new l,v=new WeakMap,p=new WeakMap;let y={},m={},g=new WeakMap,E=[],T=null,D=!1,S=null,x=null,L=null,z=null,C=null,k=null,P=null,O=new Le(0,0,0),B=0,N=!1,R=null,H=null,$=null,vt=null,dt=null;const st=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ut=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(et)[1]),Z=ut>=1):et.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Z=ut>=2);let Rt=null,bt={};const Ot=o.getParameter(o.SCISSOR_BOX),le=o.getParameter(o.VIEWPORT),ye=new yn().fromArray(Ot),j=new yn().fromArray(le);function St(Y,zt,F,X){const J=new Uint8Array(4),K=o.createTexture();o.bindTexture(Y,K),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let I=0;I<F;I++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,X,0,o.RGBA,o.UNSIGNED_BYTE,J):o.texImage2D(zt+I,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,J);return K}const ct={};ct[o.TEXTURE_2D]=St(o.TEXTURE_2D,o.TEXTURE_2D,1),ct[o.TEXTURE_CUBE_MAP]=St(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[o.TEXTURE_2D_ARRAY]=St(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ct[o.TEXTURE_3D]=St(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Q(o.DEPTH_TEST),d.setFunc(po),ie(!1),Bt(U_),Q(o.CULL_FACE),Ee(xs);function Q(Y){y[Y]!==!0&&(o.enable(Y),y[Y]=!0)}function xt(Y){y[Y]!==!1&&(o.disable(Y),y[Y]=!1)}function Pt(Y,zt){return m[Y]!==zt?(o.bindFramebuffer(Y,zt),m[Y]=zt,Y===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=zt),Y===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function Dt(Y,zt){let F=E,X=!1;if(Y){F=g.get(zt),F===void 0&&(F=[],g.set(zt,F));const J=Y.textures;if(F.length!==J.length||F[0]!==o.COLOR_ATTACHMENT0){for(let K=0,I=J.length;K<I;K++)F[K]=o.COLOR_ATTACHMENT0+K;F.length=J.length,X=!0}}else F[0]!==o.BACK&&(F[0]=o.BACK,X=!0);X&&o.drawBuffers(F)}function Ct(Y){return T!==Y?(o.useProgram(Y),T=Y,!0):!1}const Zt={[Js]:o.FUNC_ADD,[aE]:o.FUNC_SUBTRACT,[sE]:o.FUNC_REVERSE_SUBTRACT};Zt[rE]=o.MIN,Zt[oE]=o.MAX;const V={[lE]:o.ZERO,[cE]:o.ONE,[uE]:o.SRC_COLOR,[up]:o.SRC_ALPHA,[gE]:o.SRC_ALPHA_SATURATE,[pE]:o.DST_COLOR,[dE]:o.DST_ALPHA,[fE]:o.ONE_MINUS_SRC_COLOR,[fp]:o.ONE_MINUS_SRC_ALPHA,[mE]:o.ONE_MINUS_DST_COLOR,[hE]:o.ONE_MINUS_DST_ALPHA,[vE]:o.CONSTANT_COLOR,[_E]:o.ONE_MINUS_CONSTANT_COLOR,[xE]:o.CONSTANT_ALPHA,[yE]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(Y,zt,F,X,J,K,I,wt,Xt,Ht){if(Y===xs){D===!0&&(xt(o.BLEND),D=!1);return}if(D===!1&&(Q(o.BLEND),D=!0),Y!==iE){if(Y!==S||Ht!==N){if((x!==Js||C!==Js)&&(o.blendEquation(o.FUNC_ADD),x=Js,C=Js),Ht)switch(Y){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case L_:o.blendFunc(o.ONE,o.ONE);break;case O_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case z_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case L_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case O_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}L=null,z=null,k=null,P=null,O.set(0,0,0),B=0,S=Y,N=Ht}return}J=J||zt,K=K||F,I=I||X,(zt!==x||J!==C)&&(o.blendEquationSeparate(Zt[zt],Zt[J]),x=zt,C=J),(F!==L||X!==z||K!==k||I!==P)&&(o.blendFuncSeparate(V[F],V[X],V[K],V[I]),L=F,z=X,k=K,P=I),(wt.equals(O)===!1||Xt!==B)&&(o.blendColor(wt.r,wt.g,wt.b,Xt),O.copy(wt),B=Xt),S=Y,N=!1}function te(Y,zt){Y.side===ca?xt(o.CULL_FACE):Q(o.CULL_FACE);let F=Y.side===ii;zt&&(F=!F),ie(F),Y.blending===uo&&Y.transparent===!1?Ee(xs):Ee(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),f.setMask(Y.colorWrite);const X=Y.stencilWrite;h.setTest(X),X&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),jt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Q(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(Y){R!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),R=Y)}function Bt(Y){Y!==eE?(Q(o.CULL_FACE),Y!==H&&(Y===U_?o.cullFace(o.BACK):Y===nE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),H=Y}function $t(Y){Y!==$&&(Z&&o.lineWidth(Y),$=Y)}function jt(Y,zt,F){Y?(Q(o.POLYGON_OFFSET_FILL),(vt!==zt||dt!==F)&&(o.polygonOffset(zt,F),vt=zt,dt=F)):xt(o.POLYGON_OFFSET_FILL)}function he(Y){Y?Q(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function yt(Y){Y===void 0&&(Y=o.TEXTURE0+st-1),Rt!==Y&&(o.activeTexture(Y),Rt=Y)}function It(Y,zt,F){F===void 0&&(Rt===null?F=o.TEXTURE0+st-1:F=Rt);let X=bt[F];X===void 0&&(X={type:void 0,texture:void 0},bt[F]=X),(X.type!==Y||X.texture!==zt)&&(Rt!==F&&(o.activeTexture(F),Rt=F),o.bindTexture(Y,zt||ct[Y]),X.type=Y,X.texture=zt)}function w(){const Y=bt[Rt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function rt(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ut(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function se(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Lt(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(Y){ye.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),ye.copy(Y))}function ce(Y){j.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),j.copy(Y))}function ee(Y,zt){let F=p.get(zt);F===void 0&&(F=new WeakMap,p.set(zt,F));let X=F.get(Y);X===void 0&&(X=o.getUniformBlockIndex(zt,Y.name),F.set(Y,X))}function Vt(Y,zt){const X=p.get(zt).get(Y);v.get(zt)!==X&&(o.uniformBlockBinding(zt,X,Y.__bindingPointIndex),v.set(zt,X))}function ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},Rt=null,bt={},m={},g=new WeakMap,E=[],T=null,D=!1,S=null,x=null,L=null,z=null,C=null,k=null,P=null,O=new Le(0,0,0),B=0,N=!1,R=null,H=null,$=null,vt=null,dt=null,ye.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:Q,disable:xt,bindFramebuffer:Pt,drawBuffers:Dt,useProgram:Ct,setBlending:Ee,setMaterial:te,setFlipSided:ie,setCullFace:Bt,setLineWidth:$t,setPolygonOffset:jt,setScissorTest:he,activeTexture:yt,bindTexture:It,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:se,texImage3D:Lt,updateUBOMapping:ee,uniformBlockBinding:Vt,texStorage2D:At,texStorage3D:Ft,texSubImage2D:rt,texSubImage3D:Mt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ut,scissor:Wt,viewport:ce,reset:ve}}function e3(o,e,i,r,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,y=new WeakMap;let m;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,b){return E?new OffscreenCanvas(w,b):Vu("canvas")}function D(w,b,q){let rt=1;const Mt=It(w);if((Mt.width>q||Mt.height>q)&&(rt=q/Math.max(Mt.width,Mt.height)),rt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const _t=Math.floor(rt*Mt.width),Ut=Math.floor(rt*Mt.height);m===void 0&&(m=T(_t,Ut));const At=b?T(_t,Ut):m;return At.width=_t,At.height=Ut,At.getContext("2d").drawImage(w,0,0,_t,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+_t+"x"+Ut+")."),At}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),w;return w}function S(w){return w.generateMipmaps}function x(w){o.generateMipmap(w)}function L(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(w,b,q,rt,Mt=!1){if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _t=b;if(b===o.RED&&(q===o.FLOAT&&(_t=o.R32F),q===o.HALF_FLOAT&&(_t=o.R16F),q===o.UNSIGNED_BYTE&&(_t=o.R8)),b===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(_t=o.R8UI),q===o.UNSIGNED_SHORT&&(_t=o.R16UI),q===o.UNSIGNED_INT&&(_t=o.R32UI),q===o.BYTE&&(_t=o.R8I),q===o.SHORT&&(_t=o.R16I),q===o.INT&&(_t=o.R32I)),b===o.RG&&(q===o.FLOAT&&(_t=o.RG32F),q===o.HALF_FLOAT&&(_t=o.RG16F),q===o.UNSIGNED_BYTE&&(_t=o.RG8)),b===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(_t=o.RG8UI),q===o.UNSIGNED_SHORT&&(_t=o.RG16UI),q===o.UNSIGNED_INT&&(_t=o.RG32UI),q===o.BYTE&&(_t=o.RG8I),q===o.SHORT&&(_t=o.RG16I),q===o.INT&&(_t=o.RG32I)),b===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),q===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),q===o.UNSIGNED_INT&&(_t=o.RGB32UI),q===o.BYTE&&(_t=o.RGB8I),q===o.SHORT&&(_t=o.RGB16I),q===o.INT&&(_t=o.RGB32I)),b===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),q===o.UNSIGNED_INT&&(_t=o.RGBA32UI),q===o.BYTE&&(_t=o.RGBA8I),q===o.SHORT&&(_t=o.RGBA16I),q===o.INT&&(_t=o.RGBA32I)),b===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),b===o.RGBA){const Ut=Mt?Hu:Xe.getTransfer(rt);q===o.FLOAT&&(_t=o.RGBA32F),q===o.HALF_FLOAT&&(_t=o.RGBA16F),q===o.UNSIGNED_BYTE&&(_t=Ut===nn?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function C(w,b){let q;return w?b===null||b===ir||b===Rl?q=o.DEPTH24_STENCIL8:b===fa?q=o.DEPTH32F_STENCIL8:b===Al&&(q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ir||b===Rl?q=o.DEPTH_COMPONENT24:b===fa?q=o.DEPTH_COMPONENT32F:b===Al&&(q=o.DEPTH_COMPONENT16),q}function k(w,b){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==bi&&w.minFilter!==ua?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function P(w){const b=w.target;b.removeEventListener("dispose",P),B(b),b.isVideoTexture&&y.delete(b)}function O(w){const b=w.target;b.removeEventListener("dispose",O),R(b)}function B(w){const b=r.get(w);if(b.__webglInit===void 0)return;const q=w.source,rt=g.get(q);if(rt){const Mt=rt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&N(w),Object.keys(rt).length===0&&g.delete(q)}r.remove(w)}function N(w){const b=r.get(w);o.deleteTexture(b.__webglTexture);const q=w.source,rt=g.get(q);delete rt[b.__cacheKey],d.memory.textures--}function R(w){const b=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let Mt=0;Mt<b.__webglFramebuffer[rt].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[rt][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)o.deleteFramebuffer(b.__webglFramebuffer[rt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=w.textures;for(let rt=0,Mt=q.length;rt<Mt;rt++){const _t=r.get(q[rt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),d.memory.textures--),r.remove(q[rt])}r.remove(w)}let H=0;function $(){H=0}function vt(){const w=H;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),H+=1,w}function dt(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function st(w,b){const q=r.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&q.__version!==w.version){const rt=w.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(q,w,b);return}}else w.isExternalTexture&&(q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+b)}function Z(w,b){const q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){ct(q,w,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+b)}function ut(w,b){const q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){ct(q,w,b);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+b)}function et(w,b){const q=r.get(w);if(w.version>0&&q.__version!==w.version){Q(q,w,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+b)}const Rt={[Sp]:o.REPEAT,[er]:o.CLAMP_TO_EDGE,[Mp]:o.MIRRORED_REPEAT},bt={[bi]:o.NEAREST,[wE]:o.NEAREST_MIPMAP_NEAREST,[ru]:o.NEAREST_MIPMAP_LINEAR,[ua]:o.LINEAR,[Rh]:o.LINEAR_MIPMAP_NEAREST,[nr]:o.LINEAR_MIPMAP_LINEAR},Ot={[LE]:o.NEVER,[FE]:o.ALWAYS,[OE]:o.LESS,[fy]:o.LEQUAL,[zE]:o.EQUAL,[BE]:o.GEQUAL,[PE]:o.GREATER,[IE]:o.NOTEQUAL};function le(w,b){if(b.type===fa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ua||b.magFilter===Rh||b.magFilter===ru||b.magFilter===nr||b.minFilter===ua||b.minFilter===Rh||b.minFilter===ru||b.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Rt[b.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Rt[b.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Rt[b.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,bt[b.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,bt[b.minFilter]),b.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,Ot[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==ru&&b.minFilter!==nr||b.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ye(w,b){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",P));const rt=b.source;let Mt=g.get(rt);Mt===void 0&&(Mt={},g.set(rt,Mt));const _t=dt(b);if(_t!==w.__cacheKey){Mt[_t]===void 0&&(Mt[_t]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),Mt[_t].usedTimes++;const Ut=Mt[w.__cacheKey];Ut!==void 0&&(Mt[w.__cacheKey].usedTimes--,Ut.usedTimes===0&&N(b)),w.__cacheKey=_t,w.__webglTexture=Mt[_t].texture}return q}function j(w,b,q){return Math.floor(Math.floor(w/q)/b)}function St(w,b,q,rt){const _t=w.updateRanges;if(_t.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,q,rt,b.data);else{_t.sort((Lt,Wt)=>Lt.start-Wt.start);let Ut=0;for(let Lt=1;Lt<_t.length;Lt++){const Wt=_t[Ut],ce=_t[Lt],ee=Wt.start+Wt.count,Vt=j(ce.start,b.width,4),ve=j(Wt.start,b.width,4);ce.start<=ee+1&&Vt===ve&&j(ce.start+ce.count-1,b.width,4)===Vt?Wt.count=Math.max(Wt.count,ce.start+ce.count-Wt.start):(++Ut,_t[Ut]=ce)}_t.length=Ut+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),Ft=o.getParameter(o.UNPACK_SKIP_PIXELS),se=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Lt=0,Wt=_t.length;Lt<Wt;Lt++){const ce=_t[Lt],ee=Math.floor(ce.start/4),Vt=Math.ceil(ce.count/4),ve=ee%b.width,Y=Math.floor(ee/b.width),zt=Vt,F=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ve),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,ve,Y,zt,F,q,rt,b.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,se)}}function ct(w,b,q){let rt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=o.TEXTURE_3D);const Mt=ye(w,b),_t=b.source;i.bindTexture(rt,w.__webglTexture,o.TEXTURE0+q);const Ut=r.get(_t);if(_t.version!==Ut.__version||Mt===!0){i.activeTexture(o.TEXTURE0+q);const At=Xe.getPrimaries(Xe.workingColorSpace),Ft=b.colorSpace===_s?null:Xe.getPrimaries(b.colorSpace),se=b.colorSpace===_s||At===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Lt=D(b.image,!1,l.maxTextureSize);Lt=yt(b,Lt);const Wt=f.convert(b.format,b.colorSpace),ce=f.convert(b.type);let ee=z(b.internalFormat,Wt,ce,b.colorSpace,b.isVideoTexture);le(rt,b);let Vt;const ve=b.mipmaps,Y=b.isVideoTexture!==!0,zt=Ut.__version===void 0||Mt===!0,F=_t.dataReady,X=k(b,Lt);if(b.isDepthTexture)ee=C(b.format===wl,b.type),zt&&(Y?i.texStorage2D(o.TEXTURE_2D,1,ee,Lt.width,Lt.height):i.texImage2D(o.TEXTURE_2D,0,ee,Lt.width,Lt.height,0,Wt,ce,null));else if(b.isDataTexture)if(ve.length>0){Y&&zt&&i.texStorage2D(o.TEXTURE_2D,X,ee,ve[0].width,ve[0].height);for(let J=0,K=ve.length;J<K;J++)Vt=ve[J],Y?F&&i.texSubImage2D(o.TEXTURE_2D,J,0,0,Vt.width,Vt.height,Wt,ce,Vt.data):i.texImage2D(o.TEXTURE_2D,J,ee,Vt.width,Vt.height,0,Wt,ce,Vt.data);b.generateMipmaps=!1}else Y?(zt&&i.texStorage2D(o.TEXTURE_2D,X,ee,Lt.width,Lt.height),F&&St(b,Lt,Wt,ce)):i.texImage2D(o.TEXTURE_2D,0,ee,Lt.width,Lt.height,0,Wt,ce,Lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,X,ee,ve[0].width,ve[0].height,Lt.depth);for(let J=0,K=ve.length;J<K;J++)if(Vt=ve[J],b.format!==Zi)if(Wt!==null)if(Y){if(F)if(b.layerUpdates.size>0){const I=ux(Vt.width,Vt.height,b.format,b.type);for(const wt of b.layerUpdates){const Xt=Vt.data.subarray(wt*I/Vt.data.BYTES_PER_ELEMENT,(wt+1)*I/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,J,0,0,wt,Vt.width,Vt.height,1,Wt,Xt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,J,0,0,0,Vt.width,Vt.height,Lt.depth,Wt,Vt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,J,ee,Vt.width,Vt.height,Lt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?F&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,J,0,0,0,Vt.width,Vt.height,Lt.depth,Wt,ce,Vt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,J,ee,Vt.width,Vt.height,Lt.depth,0,Wt,ce,Vt.data)}else{Y&&zt&&i.texStorage2D(o.TEXTURE_2D,X,ee,ve[0].width,ve[0].height);for(let J=0,K=ve.length;J<K;J++)Vt=ve[J],b.format!==Zi?Wt!==null?Y?F&&i.compressedTexSubImage2D(o.TEXTURE_2D,J,0,0,Vt.width,Vt.height,Wt,Vt.data):i.compressedTexImage2D(o.TEXTURE_2D,J,ee,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?F&&i.texSubImage2D(o.TEXTURE_2D,J,0,0,Vt.width,Vt.height,Wt,ce,Vt.data):i.texImage2D(o.TEXTURE_2D,J,ee,Vt.width,Vt.height,0,Wt,ce,Vt.data)}else if(b.isDataArrayTexture)if(Y){if(zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,X,ee,Lt.width,Lt.height,Lt.depth),F)if(b.layerUpdates.size>0){const J=ux(Lt.width,Lt.height,b.format,b.type);for(const K of b.layerUpdates){const I=Lt.data.subarray(K*J/Lt.data.BYTES_PER_ELEMENT,(K+1)*J/Lt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,K,Lt.width,Lt.height,1,Wt,ce,I)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Lt.width,Lt.height,Lt.depth,Wt,ce,Lt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ee,Lt.width,Lt.height,Lt.depth,0,Wt,ce,Lt.data);else if(b.isData3DTexture)Y?(zt&&i.texStorage3D(o.TEXTURE_3D,X,ee,Lt.width,Lt.height,Lt.depth),F&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Lt.width,Lt.height,Lt.depth,Wt,ce,Lt.data)):i.texImage3D(o.TEXTURE_3D,0,ee,Lt.width,Lt.height,Lt.depth,0,Wt,ce,Lt.data);else if(b.isFramebufferTexture){if(zt)if(Y)i.texStorage2D(o.TEXTURE_2D,X,ee,Lt.width,Lt.height);else{let J=Lt.width,K=Lt.height;for(let I=0;I<X;I++)i.texImage2D(o.TEXTURE_2D,I,ee,J,K,0,Wt,ce,null),J>>=1,K>>=1}}else if(ve.length>0){if(Y&&zt){const J=It(ve[0]);i.texStorage2D(o.TEXTURE_2D,X,ee,J.width,J.height)}for(let J=0,K=ve.length;J<K;J++)Vt=ve[J],Y?F&&i.texSubImage2D(o.TEXTURE_2D,J,0,0,Wt,ce,Vt):i.texImage2D(o.TEXTURE_2D,J,ee,Wt,ce,Vt);b.generateMipmaps=!1}else if(Y){if(zt){const J=It(Lt);i.texStorage2D(o.TEXTURE_2D,X,ee,J.width,J.height)}F&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Wt,ce,Lt)}else i.texImage2D(o.TEXTURE_2D,0,ee,Wt,ce,Lt);S(b)&&x(rt),Ut.__version=_t.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Q(w,b,q){if(b.image.length!==6)return;const rt=ye(w,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+q);const _t=r.get(Mt);if(Mt.version!==_t.__version||rt===!0){i.activeTexture(o.TEXTURE0+q);const Ut=Xe.getPrimaries(Xe.workingColorSpace),At=b.colorSpace===_s?null:Xe.getPrimaries(b.colorSpace),Ft=b.colorSpace===_s||Ut===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const se=b.isCompressedTexture||b.image[0].isCompressedTexture,Lt=b.image[0]&&b.image[0].isDataTexture,Wt=[];for(let K=0;K<6;K++)!se&&!Lt?Wt[K]=D(b.image[K],!0,l.maxCubemapSize):Wt[K]=Lt?b.image[K].image:b.image[K],Wt[K]=yt(b,Wt[K]);const ce=Wt[0],ee=f.convert(b.format,b.colorSpace),Vt=f.convert(b.type),ve=z(b.internalFormat,ee,Vt,b.colorSpace),Y=b.isVideoTexture!==!0,zt=_t.__version===void 0||rt===!0,F=Mt.dataReady;let X=k(b,ce);le(o.TEXTURE_CUBE_MAP,b);let J;if(se){Y&&zt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,X,ve,ce.width,ce.height);for(let K=0;K<6;K++){J=Wt[K].mipmaps;for(let I=0;I<J.length;I++){const wt=J[I];b.format!==Zi?ee!==null?Y?F&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I,0,0,wt.width,wt.height,ee,wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I,ve,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?F&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I,0,0,wt.width,wt.height,ee,Vt,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I,ve,wt.width,wt.height,0,ee,Vt,wt.data)}}}else{if(J=b.mipmaps,Y&&zt){J.length>0&&X++;const K=It(Wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,X,ve,K.width,K.height)}for(let K=0;K<6;K++)if(Lt){Y?F&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Wt[K].width,Wt[K].height,ee,Vt,Wt[K].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,Wt[K].width,Wt[K].height,0,ee,Vt,Wt[K].data);for(let I=0;I<J.length;I++){const Xt=J[I].image[K].image;Y?F&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I+1,0,0,Xt.width,Xt.height,ee,Vt,Xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I+1,ve,Xt.width,Xt.height,0,ee,Vt,Xt.data)}}else{Y?F&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ee,Vt,Wt[K]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,ee,Vt,Wt[K]);for(let I=0;I<J.length;I++){const wt=J[I];Y?F&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I+1,0,0,ee,Vt,wt.image[K]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,I+1,ve,ee,Vt,wt.image[K])}}}S(b)&&x(o.TEXTURE_CUBE_MAP),_t.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function xt(w,b,q,rt,Mt,_t){const Ut=f.convert(q.format,q.colorSpace),At=f.convert(q.type),Ft=z(q.internalFormat,Ut,At,q.colorSpace),se=r.get(b),Lt=r.get(q);if(Lt.__renderTarget=b,!se.__hasExternalTextures){const Wt=Math.max(1,b.width>>_t),ce=Math.max(1,b.height>>_t);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,_t,Ft,Wt,ce,b.depth,0,Ut,At,null):i.texImage2D(Mt,_t,Ft,Wt,ce,0,Ut,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),jt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,Mt,Lt.__webglTexture,0,$t(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,Mt,Lt.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(w,b,q){if(o.bindRenderbuffer(o.RENDERBUFFER,w),b.depthBuffer){const rt=b.depthTexture,Mt=rt&&rt.isDepthTexture?rt.type:null,_t=C(b.stencilBuffer,Mt),Ut=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=$t(b);jt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,_t,b.width,b.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,_t,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,_t,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,w)}else{const rt=b.textures;for(let Mt=0;Mt<rt.length;Mt++){const _t=rt[Mt],Ut=f.convert(_t.format,_t.colorSpace),At=f.convert(_t.type),Ft=z(_t.internalFormat,Ut,At,_t.colorSpace),se=$t(b);q&&jt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,se,Ft,b.width,b.height):jt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,se,Ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=r.get(b.depthTexture);rt.__renderTarget=b,(!rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st(b.depthTexture,0);const Mt=rt.__webglTexture,_t=$t(b);if(b.depthTexture.format===Cl)jt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===wl)jt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Ct(w){const b=r.get(w),q=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const rt=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",Mt)};rt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=rt}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const rt=w.texture.mipmaps;rt&&rt.length>0?Dt(b.__webglFramebuffer[0],w):Dt(b.__webglFramebuffer,w)}else if(q){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=o.createRenderbuffer(),Pt(b.__webglDepthbuffer[rt],w,!1);else{const Mt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=b.__webglDepthbuffer[rt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,_t)}}else{const rt=w.texture.mipmaps;if(rt&&rt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Pt(b.__webglDepthbuffer,w,!1);else{const Mt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,_t)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(w,b,q){const rt=r.get(w);b!==void 0&&xt(rt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&Ct(w)}function V(w){const b=w.texture,q=r.get(w),rt=r.get(b);w.addEventListener("dispose",O);const Mt=w.textures,_t=w.isWebGLCubeRenderTarget===!0,Ut=Mt.length>1;if(Ut||(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=b.version,d.memory.textures++),_t){q.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[At]=[];for(let Ft=0;Ft<b.mipmaps.length;Ft++)q.__webglFramebuffer[At][Ft]=o.createFramebuffer()}else q.__webglFramebuffer[At]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)q.__webglFramebuffer[At]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let At=0,Ft=Mt.length;At<Ft;At++){const se=r.get(Mt[At]);se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&jt(w)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Ft=Mt[At];q.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[At]);const se=f.convert(Ft.format,Ft.colorSpace),Lt=f.convert(Ft.type),Wt=z(Ft.internalFormat,se,Lt,Ft.colorSpace,w.isXRRenderTarget===!0),ce=$t(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,ce,Wt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,q.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(q.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),le(o.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)xt(q.__webglFramebuffer[At][Ft],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ft);else xt(q.__webglFramebuffer[At],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let At=0,Ft=Mt.length;At<Ft;At++){const se=Mt[At],Lt=r.get(se);let Wt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Wt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Wt,Lt.__webglTexture),le(Wt,se),xt(q.__webglFramebuffer,w,se,o.COLOR_ATTACHMENT0+At,Wt,0),S(se)&&x(Wt)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(At=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,rt.__webglTexture),le(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)xt(q.__webglFramebuffer[Ft],w,b,o.COLOR_ATTACHMENT0,At,Ft);else xt(q.__webglFramebuffer,w,b,o.COLOR_ATTACHMENT0,At,0);S(b)&&x(At),i.unbindTexture()}w.depthBuffer&&Ct(w)}function Ee(w){const b=w.textures;for(let q=0,rt=b.length;q<rt;q++){const Mt=b[q];if(S(Mt)){const _t=L(w),Ut=r.get(Mt).__webglTexture;i.bindTexture(_t,Ut),x(_t),i.unbindTexture()}}}const te=[],ie=[];function Bt(w){if(w.samples>0){if(jt(w)===!1){const b=w.textures,q=w.width,rt=w.height;let Mt=o.COLOR_BUFFER_BIT;const _t=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=r.get(w),At=b.length>1;if(At)for(let se=0;se<b.length;se++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Ft=w.texture.mipmaps;Ft&&Ft.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let se=0;se<b.length;se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[se]);const Lt=r.get(b[se]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Lt,0)}o.blitFramebuffer(0,0,q,rt,0,0,q,rt,Mt,o.NEAREST),v===!0&&(te.length=0,ie.length=0,te.push(o.COLOR_ATTACHMENT0+se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(te.push(_t),ie.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let se=0;se<b.length;se++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[se]);const Lt=r.get(b[se]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.TEXTURE_2D,Lt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&v){const b=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function $t(w){return Math.min(l.maxSamples,w.samples)}function jt(w){const b=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(w){const b=d.render.frame;y.get(w)!==b&&(y.set(w,b),w.update())}function yt(w,b){const q=w.colorSpace,rt=w.format,Mt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||q!==vo&&q!==_s&&(Xe.getTransfer(q)===nn?(rt!==Zi||Mt!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=vt,this.resetTextureUnits=$,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=ut,this.setTextureCube=et,this.rebindTextures=Zt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=jt}function n3(o,e){function i(r,l=_s){let f;const d=Xe.getTransfer(l);if(r===ha)return o.UNSIGNED_BYTE;if(r===im)return o.UNSIGNED_SHORT_4_4_4_4;if(r===am)return o.UNSIGNED_SHORT_5_5_5_1;if(r===sy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ry)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===iy)return o.BYTE;if(r===ay)return o.SHORT;if(r===Al)return o.UNSIGNED_SHORT;if(r===nm)return o.INT;if(r===ir)return o.UNSIGNED_INT;if(r===fa)return o.FLOAT;if(r===Ul)return o.HALF_FLOAT;if(r===oy)return o.ALPHA;if(r===ly)return o.RGB;if(r===Zi)return o.RGBA;if(r===Cl)return o.DEPTH_COMPONENT;if(r===wl)return o.DEPTH_STENCIL;if(r===sm)return o.RED;if(r===rm)return o.RED_INTEGER;if(r===cy)return o.RG;if(r===om)return o.RG_INTEGER;if(r===lm)return o.RGBA_INTEGER;if(r===Ou||r===zu||r===Pu||r===Iu)if(d===nn)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Ou)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Ou)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ep||r===Tp||r===bp||r===Ap)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Ep)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ap)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rp||r===Cp||r===wp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Rp||r===Cp)return d===nn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===wp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dp||r===Np||r===Up||r===Lp||r===Op||r===zp||r===Pp||r===Ip||r===Bp||r===Fp||r===Hp||r===Gp||r===Vp||r===kp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Dp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Np)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Up)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Op)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ip)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kp)return d===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jp||r===Xp||r===qp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===jp)return d===nn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wp||r===Yp||r===Zp||r===Kp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Wp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Yp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const i3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a3=`
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

}`;class s3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ty(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Pa({vertexShader:i3,fragmentShader:a3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new je(new xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r3 extends yo{constructor(e,i){super();const r=this;let l=null,f=1,d=null,h="local-floor",v=1,p=null,y=null,m=null,g=null,E=null,T=null;const D=typeof XRWebGLBinding<"u",S=new s3,x={},L=i.getContextAttributes();let z=null,C=null;const k=[],P=[],O=new Fe;let B=null;const N=new Ii;N.viewport=new yn;const R=new Ii;R.viewport=new yn;const H=[N,R],$=new RT;let vt=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let Q=k[ct];return Q===void 0&&(Q=new Kh,k[ct]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(ct){let Q=k[ct];return Q===void 0&&(Q=new Kh,k[ct]=Q),Q.getGripSpace()},this.getHand=function(ct){let Q=k[ct];return Q===void 0&&(Q=new Kh,k[ct]=Q),Q.getHandSpace()};function st(ct){const Q=P.indexOf(ct.inputSource);if(Q===-1)return;const xt=k[Q];xt!==void 0&&(xt.update(ct.inputSource,ct.frame,p||d),xt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function Z(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",Z),l.removeEventListener("inputsourceschange",ut);for(let ct=0;ct<k.length;ct++){const Q=P[ct];Q!==null&&(P[ct]=null,k[ct].disconnect(Q))}vt=null,dt=null,S.reset();for(const ct in x)delete x[ct];e.setRenderTarget(z),E=null,g=null,m=null,l=null,C=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){f=ct,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){h=ct,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ct){p=ct},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return m===null&&D&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ct){if(l=ct,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",Z),l.addEventListener("inputsourceschange",ut),L.xrCompatible!==!0&&await i.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(O),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Pt=null,Dt=null;L.depth&&(Dt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=L.stencil?wl:Cl,Pt=L.stencil?Rl:ir);const Ct={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:f};m=this.getBinding(),g=m.createProjectionLayer(Ct),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new ar(g.textureWidth,g.textureHeight,{format:Zi,type:ha,depthTexture:new Ey(g.textureWidth,g.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new ar(E.framebufferWidth,E.framebufferHeight,{format:Zi,type:ha,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(v),p=null,d=await l.requestReferenceSpace(h),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ut(ct){for(let Q=0;Q<ct.removed.length;Q++){const xt=ct.removed[Q],Pt=P.indexOf(xt);Pt>=0&&(P[Pt]=null,k[Pt].disconnect(xt))}for(let Q=0;Q<ct.added.length;Q++){const xt=ct.added[Q];let Pt=P.indexOf(xt);if(Pt===-1){for(let Ct=0;Ct<k.length;Ct++)if(Ct>=P.length){P.push(xt),Pt=Ct;break}else if(P[Ct]===null){P[Ct]=xt,Pt=Ct;break}if(Pt===-1)break}const Dt=k[Pt];Dt&&Dt.connect(xt)}}const et=new lt,Rt=new lt;function bt(ct,Q,xt){et.setFromMatrixPosition(Q.matrixWorld),Rt.setFromMatrixPosition(xt.matrixWorld);const Pt=et.distanceTo(Rt),Dt=Q.projectionMatrix.elements,Ct=xt.projectionMatrix.elements,Zt=Dt[14]/(Dt[10]-1),V=Dt[14]/(Dt[10]+1),Ee=(Dt[9]+1)/Dt[5],te=(Dt[9]-1)/Dt[5],ie=(Dt[8]-1)/Dt[0],Bt=(Ct[8]+1)/Ct[0],$t=Zt*ie,jt=Zt*Bt,he=Pt/(-ie+Bt),yt=he*-ie;if(Q.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(yt),ct.translateZ(he),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Dt[10]===-1)ct.projectionMatrix.copy(Q.projectionMatrix),ct.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const It=Zt+he,w=V+he,b=$t-yt,q=jt+(Pt-yt),rt=Ee*V/w*It,Mt=te*V/w*It;ct.projectionMatrix.makePerspective(b,q,rt,Mt,It,w),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Ot(ct,Q){Q===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(Q.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(l===null)return;let Q=ct.near,xt=ct.far;S.texture!==null&&(S.depthNear>0&&(Q=S.depthNear),S.depthFar>0&&(xt=S.depthFar)),$.near=R.near=N.near=Q,$.far=R.far=N.far=xt,(vt!==$.near||dt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),vt=$.near,dt=$.far),$.layers.mask=ct.layers.mask|6,N.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const Pt=ct.parent,Dt=$.cameras;Ot($,Pt);for(let Ct=0;Ct<Dt.length;Ct++)Ot(Dt[Ct],Pt);Dt.length===2?bt($,N,R):$.projectionMatrix.copy(N.projectionMatrix),le(ct,$,Pt)};function le(ct,Q,xt){xt===null?ct.matrix.copy(Q.matrixWorld):(ct.matrix.copy(xt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(Q.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(Q.projectionMatrix),ct.projectionMatrixInverse.copy(Q.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Qp*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&E===null))return v},this.setFoveation=function(ct){v=ct,g!==null&&(g.fixedFoveation=ct),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ct)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(ct){return x[ct]};let ye=null;function j(ct,Q){if(y=Q.getViewerPose(p||d),T=Q,y!==null){const xt=y.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let Pt=!1;xt.length!==$.cameras.length&&($.cameras.length=0,Pt=!0);for(let V=0;V<xt.length;V++){const Ee=xt[V];let te=null;if(E!==null)te=E.getViewport(Ee);else{const Bt=m.getViewSubImage(g,Ee);te=Bt.viewport,V===0&&(e.setRenderTargetTextures(C,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(C))}let ie=H[V];ie===void 0&&(ie=new Ii,ie.layers.enable(V),ie.viewport=new yn,H[V]=ie),ie.matrix.fromArray(Ee.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ee.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(te.x,te.y,te.width,te.height),V===0&&($.matrix.copy(ie.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Pt===!0&&$.cameras.push(ie)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){m=r.getBinding();const V=m.getDepthInformation(xt[0]);V&&V.isValid&&V.texture&&S.init(V,l.renderState)}if(Dt&&Dt.includes("camera-access")&&D){e.state.unbindTexture(),m=r.getBinding();for(let V=0;V<xt.length;V++){const Ee=xt[V].camera;if(Ee){let te=x[Ee];te||(te=new Ty,x[Ee]=te);const ie=m.getCameraImage(Ee);te.sourceTexture=ie}}}}for(let xt=0;xt<k.length;xt++){const Pt=P[xt],Dt=k[xt];Pt!==null&&Dt!==void 0&&Dt.update(Pt,Q,p||d)}ye&&ye(ct,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),T=null}const St=new Ry;St.setAnimationLoop(j),this.setAnimationLoop=function(ct){ye=ct},this.dispose=function(){}}}const Ys=new pa,o3=new un;function l3(o,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,xy(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,L,z,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),m(S,x)):x.isMeshPhongMaterial?(f(S,x),y(S,x)):x.isMeshStandardMaterial?(f(S,x),g(S,x),x.isMeshPhysicalMaterial&&E(S,x,C)):x.isMeshMatcapMaterial?(f(S,x),T(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),D(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?v(S,x,L,z):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ii&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ii&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),z=L.envMap,C=L.envMapRotation;z&&(S.envMap.value=z,Ys.copy(C),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),S.envMapRotation.value.setFromMatrix4(o3.makeRotationFromEuler(Ys)),S.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function v(S,x,L,z){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=z*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function y(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function E(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function D(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function c3(o,e,i,r){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(L,z){const C=z.program;r.uniformBlockBinding(L,C)}function p(L,z){let C=l[L.id];C===void 0&&(T(L),C=y(L),l[L.id]=C,L.addEventListener("dispose",S));const k=z.program;r.updateUBOMapping(L,k);const P=e.render.frame;f[L.id]!==P&&(g(L),f[L.id]=P)}function y(L){const z=m();L.__bindingPointIndex=z;const C=o.createBuffer(),k=L.__size,P=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,k,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,C),C}function m(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const z=l[L.id],C=L.uniforms,k=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let P=0,O=C.length;P<O;P++){const B=Array.isArray(C[P])?C[P]:[C[P]];for(let N=0,R=B.length;N<R;N++){const H=B[N];if(E(H,P,N,k)===!0){const $=H.__offset,vt=Array.isArray(H.value)?H.value:[H.value];let dt=0;for(let st=0;st<vt.length;st++){const Z=vt[st],ut=D(Z);typeof Z=="number"||typeof Z=="boolean"?(H.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,$+dt,H.__data)):Z.isMatrix3?(H.__data[0]=Z.elements[0],H.__data[1]=Z.elements[1],H.__data[2]=Z.elements[2],H.__data[3]=0,H.__data[4]=Z.elements[3],H.__data[5]=Z.elements[4],H.__data[6]=Z.elements[5],H.__data[7]=0,H.__data[8]=Z.elements[6],H.__data[9]=Z.elements[7],H.__data[10]=Z.elements[8],H.__data[11]=0):(Z.toArray(H.__data,dt),dt+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(L,z,C,k){const P=L.value,O=z+"_"+C;if(k[O]===void 0)return typeof P=="number"||typeof P=="boolean"?k[O]=P:k[O]=P.clone(),!0;{const B=k[O];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return k[O]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function T(L){const z=L.uniforms;let C=0;const k=16;for(let O=0,B=z.length;O<B;O++){const N=Array.isArray(z[O])?z[O]:[z[O]];for(let R=0,H=N.length;R<H;R++){const $=N[R],vt=Array.isArray($.value)?$.value:[$.value];for(let dt=0,st=vt.length;dt<st;dt++){const Z=vt[dt],ut=D(Z),et=C%k,Rt=et%ut.boundary,bt=et+Rt;C+=Rt,bt!==0&&k-bt<ut.storage&&(C+=k-bt),$.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=C,C+=ut.storage}}}const P=C%k;return P>0&&(C+=k-P),L.__size=C,L.__cache={},this}function D(L){const z={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(z.boundary=4,z.storage=4):L.isVector2?(z.boundary=8,z.storage=8):L.isVector3||L.isColor?(z.boundary=16,z.storage=12):L.isVector4?(z.boundary=16,z.storage=16):L.isMatrix3?(z.boundary=48,z.storage=48):L.isMatrix4?(z.boundary=64,z.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),z}function S(L){const z=L.target;z.removeEventListener("dispose",S);const C=d.indexOf(z.__bindingPointIndex);d.splice(C,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete f[z.id]}function x(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},f={}}return{bind:v,update:p,dispose:x}}class u3{constructor(e={}){const{canvas:i=VE(),context:r=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const T=new Uint32Array(4),D=new Int32Array(4);let S=null,x=null;const L=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let k=!1;this._outputColorSpace=Ei;let P=0,O=0,B=null,N=-1,R=null;const H=new yn,$=new yn;let vt=null;const dt=new Le(0);let st=0,Z=i.width,ut=i.height,et=1,Rt=null,bt=null;const Ot=new yn(0,0,Z,ut),le=new yn(0,0,Z,ut);let ye=!1;const j=new fm;let St=!1,ct=!1;const Q=new un,xt=new lt,Pt=new yn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Zt(){return B===null?et:1}let V=r;function Ee(U,ot){return i.getContext(U,ot)}try{const U={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:v,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${em}`),i.addEventListener("webglcontextlost",F,!1),i.addEventListener("webglcontextrestored",X,!1),i.addEventListener("webglcontextcreationerror",J,!1),V===null){const ot="webgl2";if(V=Ee(ot,U),V===null)throw Ee(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let te,ie,Bt,$t,jt,he,yt,It,w,b,q,rt,Mt,_t,Ut,At,Ft,se,Lt,Wt,ce,ee,Vt,ve;function Y(){te=new yA(V),te.init(),ee=new n3(V,te),ie=new hA(V,te,e,ee),Bt=new t3(V,te),ie.reversedDepthBuffer&&g&&Bt.buffers.depth.setReversed(!0),$t=new EA(V),jt=new GR,he=new e3(V,te,Bt,jt,ie,ee,$t),yt=new mA(C),It=new xA(C),w=new wT(V),Vt=new fA(V,w),b=new SA(V,w,$t,Vt),q=new bA(V,b,w,$t),Lt=new TA(V,ie,he),At=new pA(jt),rt=new HR(C,yt,It,te,ie,Vt,At),Mt=new l3(C,jt),_t=new kR,Ut=new ZR(te),se=new uA(C,yt,It,Bt,q,E,v),Ft=new JR(C,q,ie),ve=new c3(V,$t,ie,Bt),Wt=new dA(V,te,$t),ce=new MA(V,te,$t),$t.programs=rt.programs,C.capabilities=ie,C.extensions=te,C.properties=jt,C.renderLists=_t,C.shadowMap=Ft,C.state=Bt,C.info=$t}Y();const zt=new r3(C,V);this.xr=zt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const U=te.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=te.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(U){U!==void 0&&(et=U,this.setSize(Z,ut,!1))},this.getSize=function(U){return U.set(Z,ut)},this.setSize=function(U,ot,mt=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=U,ut=ot,i.width=Math.floor(U*et),i.height=Math.floor(ot*et),mt===!0&&(i.style.width=U+"px",i.style.height=ot+"px"),this.setViewport(0,0,U,ot)},this.getDrawingBufferSize=function(U){return U.set(Z*et,ut*et).floor()},this.setDrawingBufferSize=function(U,ot,mt){Z=U,ut=ot,et=mt,i.width=Math.floor(U*mt),i.height=Math.floor(ot*mt),this.setViewport(0,0,U,ot)},this.getCurrentViewport=function(U){return U.copy(H)},this.getViewport=function(U){return U.copy(Ot)},this.setViewport=function(U,ot,mt,ht){U.isVector4?Ot.set(U.x,U.y,U.z,U.w):Ot.set(U,ot,mt,ht),Bt.viewport(H.copy(Ot).multiplyScalar(et).round())},this.getScissor=function(U){return U.copy(le)},this.setScissor=function(U,ot,mt,ht){U.isVector4?le.set(U.x,U.y,U.z,U.w):le.set(U,ot,mt,ht),Bt.scissor($.copy(le).multiplyScalar(et).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(U){Bt.setScissorTest(ye=U)},this.setOpaqueSort=function(U){Rt=U},this.setTransparentSort=function(U){bt=U},this.getClearColor=function(U){return U.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(U=!0,ot=!0,mt=!0){let ht=0;if(U){let nt=!1;if(B!==null){const Nt=B.texture.format;nt=Nt===lm||Nt===om||Nt===rm}if(nt){const Nt=B.texture.type,qt=Nt===ha||Nt===ir||Nt===Al||Nt===Rl||Nt===im||Nt===am,Qt=se.getClearColor(),Gt=se.getClearAlpha(),ae=Qt.r,pe=Qt.g,fe=Qt.b;qt?(T[0]=ae,T[1]=pe,T[2]=fe,T[3]=Gt,V.clearBufferuiv(V.COLOR,0,T)):(D[0]=ae,D[1]=pe,D[2]=fe,D[3]=Gt,V.clearBufferiv(V.COLOR,0,D))}else ht|=V.COLOR_BUFFER_BIT}ot&&(ht|=V.DEPTH_BUFFER_BIT),mt&&(ht|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",F,!1),i.removeEventListener("webglcontextrestored",X,!1),i.removeEventListener("webglcontextcreationerror",J,!1),se.dispose(),_t.dispose(),Ut.dispose(),jt.dispose(),yt.dispose(),It.dispose(),q.dispose(),Vt.dispose(),ve.dispose(),rt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",oe),zt.removeEventListener("sessionend",_e),Ae.stop()};function F(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const U=$t.autoReset,ot=Ft.enabled,mt=Ft.autoUpdate,ht=Ft.needsUpdate,nt=Ft.type;Y(),$t.autoReset=U,Ft.enabled=ot,Ft.autoUpdate=mt,Ft.needsUpdate=ht,Ft.type=nt}function J(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function K(U){const ot=U.target;ot.removeEventListener("dispose",K),I(ot)}function I(U){wt(U),jt.remove(U)}function wt(U){const ot=jt.get(U).programs;ot!==void 0&&(ot.forEach(function(mt){rt.releaseProgram(mt)}),U.isShaderMaterial&&rt.releaseShaderCache(U))}this.renderBufferDirect=function(U,ot,mt,ht,nt,Nt){ot===null&&(ot=Dt);const qt=nt.isMesh&&nt.matrixWorld.determinant()<0,Qt=dn(U,ot,mt,ht,nt);Bt.setMaterial(ht,qt);let Gt=mt.index,ae=1;if(ht.wireframe===!0){if(Gt=b.getWireframeAttribute(mt),Gt===void 0)return;ae=2}const pe=mt.drawRange,fe=mt.attributes.position;let we=pe.start*ae,Ze=(pe.start+pe.count)*ae;Nt!==null&&(we=Math.max(we,Nt.start*ae),Ze=Math.min(Ze,(Nt.start+Nt.count)*ae)),Gt!==null?(we=Math.max(we,0),Ze=Math.min(Ze,Gt.count)):fe!=null&&(we=Math.max(we,0),Ze=Math.min(Ze,fe.count));const hn=Ze-we;if(hn<0||hn===1/0)return;Vt.setup(nt,ht,Qt,mt,Gt);let qe,Ge=Wt;if(Gt!==null&&(qe=w.get(Gt),Ge=ce,Ge.setIndex(qe)),nt.isMesh)ht.wireframe===!0?(Bt.setLineWidth(ht.wireframeLinewidth*Zt()),Ge.setMode(V.LINES)):Ge.setMode(V.TRIANGLES);else if(nt.isLine){let de=ht.linewidth;de===void 0&&(de=1),Bt.setLineWidth(de*Zt()),nt.isLineSegments?Ge.setMode(V.LINES):nt.isLineLoop?Ge.setMode(V.LINE_LOOP):Ge.setMode(V.LINE_STRIP)}else nt.isPoints?Ge.setMode(V.POINTS):nt.isSprite&&Ge.setMode(V.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Dl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ge.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Ge.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const de=nt._multiDrawStarts,We=nt._multiDrawCounts,Re=nt._multiDrawCount,Nn=Gt?w.get(Gt).bytesPerElement:1,di=jt.get(ht).currentProgram.getUniforms();for(let Ve=0;Ve<Re;Ve++)di.setValue(V,"_gl_DrawID",Ve),Ge.render(de[Ve]/Nn,We[Ve])}else if(nt.isInstancedMesh)Ge.renderInstances(we,hn,nt.count);else if(mt.isInstancedBufferGeometry){const de=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,We=Math.min(mt.instanceCount,de);Ge.renderInstances(we,hn,We)}else Ge.render(we,hn)};function Xt(U,ot,mt){U.transparent===!0&&U.side===ca&&U.forceSinglePass===!1?(U.side=ii,U.needsUpdate=!0,rn(U,ot,mt),U.side=Ms,U.needsUpdate=!0,rn(U,ot,mt),U.side=ca):rn(U,ot,mt)}this.compile=function(U,ot,mt=null){mt===null&&(mt=U),x=Ut.get(mt),x.init(ot),z.push(x),mt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(ot.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),U!==mt&&U.traverseVisible(function(nt){nt.isLight&&nt.layers.test(ot.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),x.setupLights();const ht=new Set;return U.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Nt=nt.material;if(Nt)if(Array.isArray(Nt))for(let qt=0;qt<Nt.length;qt++){const Qt=Nt[qt];Xt(Qt,mt,nt),ht.add(Qt)}else Xt(Nt,mt,nt),ht.add(Nt)}),x=z.pop(),ht},this.compileAsync=function(U,ot,mt=null){const ht=this.compile(U,ot,mt);return new Promise(nt=>{function Nt(){if(ht.forEach(function(qt){jt.get(qt).currentProgram.isReady()&&ht.delete(qt)}),ht.size===0){nt(U);return}setTimeout(Nt,10)}te.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ht=null;function Kt(U){Ht&&Ht(U)}function oe(){Ae.stop()}function _e(){Ae.start()}const Ae=new Ry;Ae.setAnimationLoop(Kt),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(U){Ht=U,zt.setAnimationLoop(U),U===null?Ae.stop():Ae.start()},zt.addEventListener("sessionstart",oe),zt.addEventListener("sessionend",_e),this.render=function(U,ot){if(ot!==void 0&&ot.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(ot),ot=zt.getCamera()),U.isScene===!0&&U.onBeforeRender(C,U,ot,B),x=Ut.get(U,z.length),x.init(ot),z.push(x),Q.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),j.setFromProjectionMatrix(Q,da,ot.reversedDepth),ct=this.localClippingEnabled,St=At.init(this.clippingPlanes,ct),S=_t.get(U,L.length),S.init(),L.push(S),zt.enabled===!0&&zt.isPresenting===!0){const Nt=C.xr.getDepthSensingMesh();Nt!==null&&me(Nt,ot,-1/0,C.sortObjects)}me(U,ot,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(Rt,bt),Ct=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Ct&&se.addToRenderList(S,U),this.info.render.frame++,St===!0&&At.beginShadows();const mt=x.state.shadowsArray;Ft.render(mt,U,ot),St===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=S.opaque,nt=S.transmissive;if(x.setupLights(),ot.isArrayCamera){const Nt=ot.cameras;if(nt.length>0)for(let qt=0,Qt=Nt.length;qt<Qt;qt++){const Gt=Nt[qt];fn(ht,nt,U,Gt)}Ct&&se.render(U);for(let qt=0,Qt=Nt.length;qt<Qt;qt++){const Gt=Nt[qt];Oe(S,U,Gt,Gt.viewport)}}else nt.length>0&&fn(ht,nt,U,ot),Ct&&se.render(U),Oe(S,U,ot);B!==null&&O===0&&(he.updateMultisampleRenderTarget(B),he.updateRenderTargetMipmap(B)),U.isScene===!0&&U.onAfterRender(C,U,ot),Vt.resetDefaultState(),N=-1,R=null,z.pop(),z.length>0?(x=z[z.length-1],St===!0&&At.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function me(U,ot,mt,ht){if(U.visible===!1)return;if(U.layers.test(ot.layers)){if(U.isGroup)mt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ot);else if(U.isLight)x.pushLight(U),U.castShadow&&x.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||j.intersectsSprite(U)){ht&&Pt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Q);const qt=q.update(U),Qt=U.material;Qt.visible&&S.push(U,qt,Qt,mt,Pt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||j.intersectsObject(U))){const qt=q.update(U),Qt=U.material;if(ht&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Pt.copy(U.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Pt.copy(qt.boundingSphere.center)),Pt.applyMatrix4(U.matrixWorld).applyMatrix4(Q)),Array.isArray(Qt)){const Gt=qt.groups;for(let ae=0,pe=Gt.length;ae<pe;ae++){const fe=Gt[ae],we=Qt[fe.materialIndex];we&&we.visible&&S.push(U,qt,we,mt,Pt.z,fe)}}else Qt.visible&&S.push(U,qt,Qt,mt,Pt.z,null)}}const Nt=U.children;for(let qt=0,Qt=Nt.length;qt<Qt;qt++)me(Nt[qt],ot,mt,ht)}function Oe(U,ot,mt,ht){const nt=U.opaque,Nt=U.transmissive,qt=U.transparent;x.setupLightsView(mt),St===!0&&At.setGlobalState(C.clippingPlanes,mt),ht&&Bt.viewport(H.copy(ht)),nt.length>0&&an(nt,ot,mt),Nt.length>0&&an(Nt,ot,mt),qt.length>0&&an(qt,ot,mt),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function fn(U,ot,mt,ht){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ht.id]===void 0&&(x.state.transmissionRenderTarget[ht.id]=new ar(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ul:ha,minFilter:nr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Nt=x.state.transmissionRenderTarget[ht.id],qt=ht.viewport||H;Nt.setSize(qt.z*C.transmissionResolutionScale,qt.w*C.transmissionResolutionScale);const Qt=C.getRenderTarget(),Gt=C.getActiveCubeFace(),ae=C.getActiveMipmapLevel();C.setRenderTarget(Nt),C.getClearColor(dt),st=C.getClearAlpha(),st<1&&C.setClearColor(16777215,.5),C.clear(),Ct&&se.render(mt);const pe=C.toneMapping;C.toneMapping=ys;const fe=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),x.setupLightsView(ht),St===!0&&At.setGlobalState(C.clippingPlanes,ht),an(U,mt,ht),he.updateMultisampleRenderTarget(Nt),he.updateRenderTargetMipmap(Nt),te.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ze=0,hn=ot.length;Ze<hn;Ze++){const qe=ot[Ze],Ge=qe.object,de=qe.geometry,We=qe.material,Re=qe.group;if(We.side===ca&&Ge.layers.test(ht.layers)){const Nn=We.side;We.side=ii,We.needsUpdate=!0,tn(Ge,mt,ht,de,We,Re),We.side=Nn,We.needsUpdate=!0,we=!0}}we===!0&&(he.updateMultisampleRenderTarget(Nt),he.updateRenderTargetMipmap(Nt))}C.setRenderTarget(Qt,Gt,ae),C.setClearColor(dt,st),fe!==void 0&&(ht.viewport=fe),C.toneMapping=pe}function an(U,ot,mt){const ht=ot.isScene===!0?ot.overrideMaterial:null;for(let nt=0,Nt=U.length;nt<Nt;nt++){const qt=U[nt],Qt=qt.object,Gt=qt.geometry,ae=qt.group;let pe=qt.material;pe.allowOverride===!0&&ht!==null&&(pe=ht),Qt.layers.test(mt.layers)&&tn(Qt,ot,mt,Gt,pe,ae)}}function tn(U,ot,mt,ht,nt,Nt){U.onBeforeRender(C,ot,mt,ht,nt,Nt),U.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),nt.onBeforeRender(C,ot,mt,ht,U,Nt),nt.transparent===!0&&nt.side===ca&&nt.forceSinglePass===!1?(nt.side=ii,nt.needsUpdate=!0,C.renderBufferDirect(mt,ot,ht,nt,U,Nt),nt.side=Ms,nt.needsUpdate=!0,C.renderBufferDirect(mt,ot,ht,nt,U,Nt),nt.side=ca):C.renderBufferDirect(mt,ot,ht,nt,U,Nt),U.onAfterRender(C,ot,mt,ht,nt,Nt)}function rn(U,ot,mt){ot.isScene!==!0&&(ot=Dt);const ht=jt.get(U),nt=x.state.lights,Nt=x.state.shadowsArray,qt=nt.state.version,Qt=rt.getParameters(U,nt.state,Nt,ot,mt),Gt=rt.getProgramCacheKey(Qt);let ae=ht.programs;ht.environment=U.isMeshStandardMaterial?ot.environment:null,ht.fog=ot.fog,ht.envMap=(U.isMeshStandardMaterial?It:yt).get(U.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&U.envMap===null?ot.environmentRotation:U.envMapRotation,ae===void 0&&(U.addEventListener("dispose",K),ae=new Map,ht.programs=ae);let pe=ae.get(Gt);if(pe!==void 0){if(ht.currentProgram===pe&&ht.lightsStateVersion===qt)return Dn(U,Qt),pe}else Qt.uniforms=rt.getUniforms(U),U.onBeforeCompile(Qt,C),pe=rt.acquireProgram(Qt,Gt),ae.set(Gt,pe),ht.uniforms=Qt.uniforms;const fe=ht.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(fe.clippingPlanes=At.uniform),Dn(U,Qt),ht.needsLights=Ia(U),ht.lightsStateVersion=qt,ht.needsLights&&(fe.ambientLightColor.value=nt.state.ambient,fe.lightProbe.value=nt.state.probe,fe.directionalLights.value=nt.state.directional,fe.directionalLightShadows.value=nt.state.directionalShadow,fe.spotLights.value=nt.state.spot,fe.spotLightShadows.value=nt.state.spotShadow,fe.rectAreaLights.value=nt.state.rectArea,fe.ltc_1.value=nt.state.rectAreaLTC1,fe.ltc_2.value=nt.state.rectAreaLTC2,fe.pointLights.value=nt.state.point,fe.pointLightShadows.value=nt.state.pointShadow,fe.hemisphereLights.value=nt.state.hemi,fe.directionalShadowMap.value=nt.state.directionalShadowMap,fe.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,fe.spotShadowMap.value=nt.state.spotShadowMap,fe.spotLightMatrix.value=nt.state.spotLightMatrix,fe.spotLightMap.value=nt.state.spotLightMap,fe.pointShadowMap.value=nt.state.pointShadowMap,fe.pointShadowMatrix.value=nt.state.pointShadowMatrix),ht.currentProgram=pe,ht.uniformsList=null,pe}function Sn(U){if(U.uniformsList===null){const ot=U.currentProgram.getUniforms();U.uniformsList=Bu.seqWithValue(ot.seq,U.uniforms)}return U.uniformsList}function Dn(U,ot){const mt=jt.get(U);mt.outputColorSpace=ot.outputColorSpace,mt.batching=ot.batching,mt.batchingColor=ot.batchingColor,mt.instancing=ot.instancing,mt.instancingColor=ot.instancingColor,mt.instancingMorph=ot.instancingMorph,mt.skinning=ot.skinning,mt.morphTargets=ot.morphTargets,mt.morphNormals=ot.morphNormals,mt.morphColors=ot.morphColors,mt.morphTargetsCount=ot.morphTargetsCount,mt.numClippingPlanes=ot.numClippingPlanes,mt.numIntersection=ot.numClipIntersection,mt.vertexAlphas=ot.vertexAlphas,mt.vertexTangents=ot.vertexTangents,mt.toneMapping=ot.toneMapping}function dn(U,ot,mt,ht,nt){ot.isScene!==!0&&(ot=Dt),he.resetTextureUnits();const Nt=ot.fog,qt=ht.isMeshStandardMaterial?ot.environment:null,Qt=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:vo,Gt=(ht.isMeshStandardMaterial?It:yt).get(ht.envMap||qt),ae=ht.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pe=!!mt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),fe=!!mt.morphAttributes.position,we=!!mt.morphAttributes.normal,Ze=!!mt.morphAttributes.color;let hn=ys;ht.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(hn=C.toneMapping);const qe=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Ge=qe!==void 0?qe.length:0,de=jt.get(ht),We=x.state.lights;if(St===!0&&(ct===!0||U!==R)){const gn=U===R&&ht.id===N;At.setState(ht,U,gn)}let Re=!1;ht.version===de.__version?(de.needsLights&&de.lightsStateVersion!==We.state.version||de.outputColorSpace!==Qt||nt.isBatchedMesh&&de.batching===!1||!nt.isBatchedMesh&&de.batching===!0||nt.isBatchedMesh&&de.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&de.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&de.instancing===!1||!nt.isInstancedMesh&&de.instancing===!0||nt.isSkinnedMesh&&de.skinning===!1||!nt.isSkinnedMesh&&de.skinning===!0||nt.isInstancedMesh&&de.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&de.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&de.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&de.instancingMorph===!1&&nt.morphTexture!==null||de.envMap!==Gt||ht.fog===!0&&de.fog!==Nt||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==At.numPlanes||de.numIntersection!==At.numIntersection)||de.vertexAlphas!==ae||de.vertexTangents!==pe||de.morphTargets!==fe||de.morphNormals!==we||de.morphColors!==Ze||de.toneMapping!==hn||de.morphTargetsCount!==Ge)&&(Re=!0):(Re=!0,de.__version=ht.version);let Nn=de.currentProgram;Re===!0&&(Nn=rn(ht,ot,nt));let di=!1,Ve=!1,Fa=!1;const on=Nn.getUniforms(),Qn=de.uniforms;if(Bt.useProgram(Nn.program)&&(di=!0,Ve=!0,Fa=!0),ht.id!==N&&(N=ht.id,Ve=!0),di||R!==U){Bt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),on.setValue(V,"projectionMatrix",U.projectionMatrix),on.setValue(V,"viewMatrix",U.matrixWorldInverse);const Wn=on.map.cameraPosition;Wn!==void 0&&Wn.setValue(V,xt.setFromMatrixPosition(U.matrixWorld)),ie.logarithmicDepthBuffer&&on.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&on.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,Ve=!0,Fa=!0)}if(nt.isSkinnedMesh){on.setOptional(V,nt,"bindMatrix"),on.setOptional(V,nt,"bindMatrixInverse");const gn=nt.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),on.setValue(V,"boneTexture",gn.boneTexture,he))}nt.isBatchedMesh&&(on.setOptional(V,nt,"batchingTexture"),on.setValue(V,"batchingTexture",nt._matricesTexture,he),on.setOptional(V,nt,"batchingIdTexture"),on.setValue(V,"batchingIdTexture",nt._indirectTexture,he),on.setOptional(V,nt,"batchingColorTexture"),nt._colorsTexture!==null&&on.setValue(V,"batchingColorTexture",nt._colorsTexture,he));const Tn=mt.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Lt.update(nt,mt,Nn),(Ve||de.receiveShadow!==nt.receiveShadow)&&(de.receiveShadow=nt.receiveShadow,on.setValue(V,"receiveShadow",nt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Qn.envMap.value=Gt,Qn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&ot.environment!==null&&(Qn.envMapIntensity.value=ot.environmentIntensity),Ve&&(on.setValue(V,"toneMappingExposure",C.toneMappingExposure),de.needsLights&&To(Qn,Fa),Nt&&ht.fog===!0&&Mt.refreshFogUniforms(Qn,Nt),Mt.refreshMaterialUniforms(Qn,ht,et,ut,x.state.transmissionRenderTarget[U.id]),Bu.upload(V,Sn(de),Qn,he)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Bu.upload(V,Sn(de),Qn,he),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&on.setValue(V,"center",nt.center),on.setValue(V,"modelViewMatrix",nt.modelViewMatrix),on.setValue(V,"normalMatrix",nt.normalMatrix),on.setValue(V,"modelMatrix",nt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const gn=ht.uniformsGroups;for(let Wn=0,rr=gn.length;Wn<rr;Wn++){const Ki=gn[Wn];ve.update(Ki,Nn),ve.bind(Ki,Nn)}}return Nn}function To(U,ot){U.ambientLightColor.needsUpdate=ot,U.lightProbe.needsUpdate=ot,U.directionalLights.needsUpdate=ot,U.directionalLightShadows.needsUpdate=ot,U.pointLights.needsUpdate=ot,U.pointLightShadows.needsUpdate=ot,U.spotLights.needsUpdate=ot,U.spotLightShadows.needsUpdate=ot,U.rectAreaLights.needsUpdate=ot,U.hemisphereLights.needsUpdate=ot}function Ia(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(U,ot,mt){const ht=jt.get(U);ht.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),jt.get(U.texture).__webglTexture=ot,jt.get(U.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:mt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,ot){const mt=jt.get(U);mt.__webglFramebuffer=ot,mt.__useDefaultFramebuffer=ot===void 0};const Hn=V.createFramebuffer();this.setRenderTarget=function(U,ot=0,mt=0){B=U,P=ot,O=mt;let ht=!0,nt=null,Nt=!1,qt=!1;if(U){const Gt=jt.get(U);if(Gt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(V.FRAMEBUFFER,null),ht=!1;else if(Gt.__webglFramebuffer===void 0)he.setupRenderTarget(U);else if(Gt.__hasExternalTextures)he.rebindTextures(U,jt.get(U.texture).__webglTexture,jt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const fe=U.depthTexture;if(Gt.__boundDepthTexture!==fe){if(fe!==null&&jt.has(fe)&&(U.width!==fe.image.width||U.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(U)}}const ae=U.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(qt=!0);const pe=jt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(pe[ot])?nt=pe[ot][mt]:nt=pe[ot],Nt=!0):U.samples>0&&he.useMultisampledRTT(U)===!1?nt=jt.get(U).__webglMultisampledFramebuffer:Array.isArray(pe)?nt=pe[mt]:nt=pe,H.copy(U.viewport),$.copy(U.scissor),vt=U.scissorTest}else H.copy(Ot).multiplyScalar(et).floor(),$.copy(le).multiplyScalar(et).floor(),vt=ye;if(mt!==0&&(nt=Hn),Bt.bindFramebuffer(V.FRAMEBUFFER,nt)&&ht&&Bt.drawBuffers(U,nt),Bt.viewport(H),Bt.scissor($),Bt.setScissorTest(vt),Nt){const Gt=jt.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt.__webglTexture,mt)}else if(qt){const Gt=ot;for(let ae=0;ae<U.textures.length;ae++){const pe=jt.get(U.textures[ae]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ae,pe.__webglTexture,mt,Gt)}}else if(U!==null&&mt!==0){const Gt=jt.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gt.__webglTexture,mt)}N=-1},this.readRenderTargetPixels=function(U,ot,mt,ht,nt,Nt,qt,Qt=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=jt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&qt!==void 0&&(Gt=Gt[qt]),Gt){Bt.bindFramebuffer(V.FRAMEBUFFER,Gt);try{const ae=U.textures[Qt],pe=ae.format,fe=ae.type;if(!ie.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=U.width-ht&&mt>=0&&mt<=U.height-nt&&(U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Qt),V.readPixels(ot,mt,ht,nt,ee.convert(pe),ee.convert(fe),Nt))}finally{const ae=B!==null?jt.get(B).__webglFramebuffer:null;Bt.bindFramebuffer(V.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(U,ot,mt,ht,nt,Nt,qt,Qt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=jt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&qt!==void 0&&(Gt=Gt[qt]),Gt)if(ot>=0&&ot<=U.width-ht&&mt>=0&&mt<=U.height-nt){Bt.bindFramebuffer(V.FRAMEBUFFER,Gt);const ae=U.textures[Qt],pe=ae.format,fe=ae.type;if(!ie.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,we),V.bufferData(V.PIXEL_PACK_BUFFER,Nt.byteLength,V.STREAM_READ),U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Qt),V.readPixels(ot,mt,ht,nt,ee.convert(pe),ee.convert(fe),0);const Ze=B!==null?jt.get(B).__webglFramebuffer:null;Bt.bindFramebuffer(V.FRAMEBUFFER,Ze);const hn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await kE(V,hn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,we),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Nt),V.deleteBuffer(we),V.deleteSync(hn),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,ot=null,mt=0){const ht=Math.pow(2,-mt),nt=Math.floor(U.image.width*ht),Nt=Math.floor(U.image.height*ht),qt=ot!==null?ot.x:0,Qt=ot!==null?ot.y:0;he.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,mt,0,0,qt,Qt,nt,Nt),Bt.unbindTexture()};const Ai=V.createFramebuffer(),Ba=V.createFramebuffer();this.copyTextureToTexture=function(U,ot,mt=null,ht=null,nt=0,Nt=null){Nt===null&&(nt!==0?(Dl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=nt,nt=0):Nt=0);let qt,Qt,Gt,ae,pe,fe,we,Ze,hn;const qe=U.isCompressedTexture?U.mipmaps[Nt]:U.image;if(mt!==null)qt=mt.max.x-mt.min.x,Qt=mt.max.y-mt.min.y,Gt=mt.isBox3?mt.max.z-mt.min.z:1,ae=mt.min.x,pe=mt.min.y,fe=mt.isBox3?mt.min.z:0;else{const Tn=Math.pow(2,-nt);qt=Math.floor(qe.width*Tn),Qt=Math.floor(qe.height*Tn),U.isDataArrayTexture?Gt=qe.depth:U.isData3DTexture?Gt=Math.floor(qe.depth*Tn):Gt=1,ae=0,pe=0,fe=0}ht!==null?(we=ht.x,Ze=ht.y,hn=ht.z):(we=0,Ze=0,hn=0);const Ge=ee.convert(ot.format),de=ee.convert(ot.type);let We;ot.isData3DTexture?(he.setTexture3D(ot,0),We=V.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(he.setTexture2DArray(ot,0),We=V.TEXTURE_2D_ARRAY):(he.setTexture2D(ot,0),We=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ot.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ot.unpackAlignment);const Re=V.getParameter(V.UNPACK_ROW_LENGTH),Nn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),di=V.getParameter(V.UNPACK_SKIP_PIXELS),Ve=V.getParameter(V.UNPACK_SKIP_ROWS),Fa=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ae),V.pixelStorei(V.UNPACK_SKIP_ROWS,pe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,fe);const on=U.isDataArrayTexture||U.isData3DTexture,Qn=ot.isDataArrayTexture||ot.isData3DTexture;if(U.isDepthTexture){const Tn=jt.get(U),gn=jt.get(ot),Wn=jt.get(Tn.__renderTarget),rr=jt.get(gn.__renderTarget);Bt.bindFramebuffer(V.READ_FRAMEBUFFER,Wn.__webglFramebuffer),Bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let Ki=0;Ki<Gt;Ki++)on&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.get(U).__webglTexture,nt,fe+Ki),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.get(ot).__webglTexture,Nt,hn+Ki)),V.blitFramebuffer(ae,pe,qt,Qt,we,Ze,qt,Qt,V.DEPTH_BUFFER_BIT,V.NEAREST);Bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(nt!==0||U.isRenderTargetTexture||jt.has(U)){const Tn=jt.get(U),gn=jt.get(ot);Bt.bindFramebuffer(V.READ_FRAMEBUFFER,Ai),Bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ba);for(let Wn=0;Wn<Gt;Wn++)on?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,nt,fe+Wn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,nt),Qn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,Nt,hn+Wn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,Nt),nt!==0?V.blitFramebuffer(ae,pe,qt,Qt,we,Ze,qt,Qt,V.COLOR_BUFFER_BIT,V.NEAREST):Qn?V.copyTexSubImage3D(We,Nt,we,Ze,hn+Wn,ae,pe,qt,Qt):V.copyTexSubImage2D(We,Nt,we,Ze,ae,pe,qt,Qt);Bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Qn?U.isDataTexture||U.isData3DTexture?V.texSubImage3D(We,Nt,we,Ze,hn,qt,Qt,Gt,Ge,de,qe.data):ot.isCompressedArrayTexture?V.compressedTexSubImage3D(We,Nt,we,Ze,hn,qt,Qt,Gt,Ge,qe.data):V.texSubImage3D(We,Nt,we,Ze,hn,qt,Qt,Gt,Ge,de,qe):U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Nt,we,Ze,qt,Qt,Ge,de,qe.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Nt,we,Ze,qe.width,qe.height,Ge,qe.data):V.texSubImage2D(V.TEXTURE_2D,Nt,we,Ze,qt,Qt,Ge,de,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Re),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,di),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ve),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Fa),Nt===0&&ot.generateMipmaps&&V.generateMipmap(We),Bt.unbindTexture()},this.initRenderTarget=function(U){jt.get(U).__webglFramebuffer===void 0&&he.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?he.setTextureCube(U,0):U.isData3DTexture?he.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?he.setTexture2DArray(U,0):he.setTexture2D(U,0),Bt.unbindTexture()},this.resetState=function(){P=0,O=0,B=null,Bt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Xe._getUnpackColorSpace()}}const zx={forest:{sky:"#dce9df",horizon:"#eff1d9",ground:"#a8bd7c",grass:"#a6bc77",leaf:"#708e50",leafLight:"#91a563",darkLeaf:"#4e734e",hill:"#99ac8f",farHill:"#a6beb5",water:"#a3c8b3",light:"#fff1cf"},coast:{sky:"#cde6e8",horizon:"#edf2df",ground:"#b8c88c",grass:"#b2c086",leaf:"#6f9672",leafLight:"#a1b57c",darkLeaf:"#4b7d67",hill:"#a5c0ae",farHill:"#c0d5cb",water:"#82c5c4",light:"#fff2d5"},sunset:{sky:"#efdac9",horizon:"#f7e8c8",ground:"#b7bc80",grass:"#b1b574",leaf:"#80915e",leafLight:"#b0ac70",darkLeaf:"#657b55",hill:"#b2ae91",farHill:"#c9c1ac",water:"#b9c3b4",light:"#ffd5a3"}};function f3({speed:o,running:e,route:i,playerCount:r=1,opponentSpeed:l=0,playerDistances:f,analysisActive:d=!1,exerciseMode:h="seated"}){const v=kt.useRef(null),p=kt.useRef({speed:o,running:e,playerCount:r,opponentSpeed:l,playerDistances:f,analysisActive:d,exerciseMode:h}),y=kt.useRef(i),m=kt.useRef(null),g=kt.useRef(null),E=kt.useRef(null),[T,D]=kt.useState(!1);return kt.useEffect(()=>{p.current={speed:o,running:e,playerCount:r,opponentSpeed:l,playerDistances:f,analysisActive:d,exerciseMode:h}},[o,e,r,l,f,d,h]),kt.useEffect(()=>{var S;(S=g.current)==null||S.call(g,r)},[r]),kt.useEffect(()=>{var S;(S=E.current)==null||S.call(E)},[h]),kt.useEffect(()=>{var S;y.current=i,(S=m.current)==null||S.call(m,i)},[i]),kt.useEffect(()=>{const S=v.current;if(!S)return;let x;try{x=new u3({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{D(!0);return}const L=new pT,z=zx[y.current];L.background=new Le(z.sky),L.fog=new um(z.horizon,48,160),x.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),x.shadowMap.enabled=!0,x.shadowMap.type=$x,x.outputColorSpace=Ei,x.toneMapping=ey,x.toneMappingExposure=1.08,x.domElement.setAttribute("aria-label","3D 森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進"),x.domElement.setAttribute("role","img"),x.domElement.style.cssText="display:block;width:100%;height:100%;outline:none",S.appendChild(x.domElement);const C=new Ii(48,1,.1,300);C.position.set(3.5,4.8,12.3),C.lookAt(-3,1.1,-10);const k=new ET("#fff9e8","#88986b",1.7);L.add(k);const P=new AT(z.light,2.3);P.position.set(-18,28,-16),P.castShadow=!0,P.shadow.mapSize.set(1536,1536),P.shadow.camera.left=-35,P.shadow.camera.right=35,P.shadow.camera.top=24,P.shadow.camera.bottom=-42,P.shadow.camera.near=.5,P.shadow.camera.far=100,P.shadow.normalBias=.045,P.shadow.bias=-15e-5,P.shadow.radius=4,P.target.position.set(0,0,-12),L.add(P,P.target);const O=(F,X=.95)=>new Ru({color:F,roughness:X}),B={ground:O(z.ground),grass:O(z.grass),leaf:O(z.leaf),leafLight:O(z.leafLight),darkLeaf:O(z.darkLeaf),hill:O(z.hill),farHill:O(z.farHill),water:new Ru({color:z.water,roughness:.35,metalness:.07}),bark:O("#867651"),paleBark:O("#d7d4b4"),road:O("#ddcba5"),edge:O("#e6dab9"),rock:O("#b9bbaa"),rockLight:O("#cccdb8"),flower:O("#f6e5a0"),flowerWhite:O("#f4f1d5"),stem:O("#849254"),fence:O("#a59a71"),stripe:O("#dce8d9")},N=new Pa({uniforms:{top:{value:new Le(z.sky)},bottom:{value:new Le(z.horizon)}},vertexShader:"varying vec3 vWorld; void main(){vec4 p=modelMatrix*vec4(position,1.0);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){float h=clamp(normalize(vWorld+vec3(0.,20.,0.)).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,smoothstep(0.,.65,h)),1.);
#include <colorspace_fragment>
}`,side:ii,depthWrite:!1});L.add(new je(new $s(245,24,18),N));const R=new je(new xo(450,450),B.ground);R.rotation.x=-Math.PI/2,R.position.set(0,-.035,-100),R.receiveShadow=!0,L.add(R);const H=(()=>{let F=4917;return()=>(F=F*16807%2147483647,(F-1)/2147483646)})(),$=F=>Math.sin(F*.035)*3.5*Math.min(1,Math.abs(F)/22);function vt(F,X,J,K){const I=[],wt=[];for(let Kt=0;Kt<=200;Kt++){const oe=20-Kt,_e=X(oe);if(I.push(_e-F/2,J,oe,_e+F/2,J,oe),Kt<200){const Ae=Kt*2;wt.push(Ae,Ae+1,Ae+2,Ae+1,Ae+3,Ae+2)}}const Xt=new si;Xt.setAttribute("position",new En(I,3)),Xt.setIndex(wt),Xt.computeVertexNormals();const Ht=new je(Xt,K);return Ht.receiveShadow=!0,L.add(Ht),Ht}vt(6.6,$,.005,B.edge),vt(6.1,$,.018,B.road);const dt=F=>$(F)+15+Math.sin(F*.055)*3.5,st=vt(5.3,dt,-.018,B.edge),Z=vt(4.3,dt,-.008,B.water),ut=new xn,et=new Ru({color:"#81bdc7",roughness:.34,metalness:.12}),Rt=O("#e3d1a7");ut.add(vt(200,F=>$(F)+110,.001,et)),ut.add(vt(7,F=>$(F)+8.5,.003,Rt)),L.add(ut),ut.visible=y.current==="coast";const bt=new xn,Ot=new je(new $s(8.5,24,16),new ku({color:"#ffcc83",fog:!1,toneMapped:!1}));bt.add(Ot);for(const F of[1.3,1.8]){const X=new je(new $s(8.5*F,24,16),new ku({color:"#ffe7b2",transparent:!0,opacity:.075,depthWrite:!1,fog:!1,toneMapped:!1}));bt.add(X)}bt.position.set(-35,30,-135),bt.visible=y.current==="sunset",L.add(bt);const le=new $s(1,12,10),ye=new pm(1,1),j=new Nl(1,1,1,9),St=new dm(1,1,9),ct=new lt(0,1,0);function Q(F,X,J,K,I=!1){const wt=new je(I?ye:le,K);return wt.position.set(...X),wt.scale.set(...J),wt.castShadow=!0,wt.receiveShadow=!0,F.add(wt),wt}function xt(F,X,J,K,I){const wt=new lt(...X),Xt=new lt(...J),Ht=Xt.clone().sub(wt),Kt=new je(j,I);return Kt.position.copy(wt.add(Xt).multiplyScalar(.5)),Kt.scale.set(K,Ht.length(),K),Kt.quaternion.setFromUnitVectors(ct,Ht.normalize()),Kt.castShadow=!0,F.add(Kt),Kt}[[-57,-3,-113,40,14,32],[41,-4,-132,52,20,28],[1,-4,-168,58,23,31],[-90,-4,-150,45,25,40],[75,-3,-84,38,12,32],[-51,-5,-56,29,10,28]].forEach((F,X)=>Q(L,[F[0],F[1],F[2]],[F[3],F[4],F[5]],X<3?B.farHill:B.hill));const Pt=new Ru({color:"#f7f5e6",roughness:1,transparent:!0,opacity:.73,depthWrite:!1});for(let F=0;F<7;F++){const X=new xn;X.position.set(-75+F*26,31+H()*8,-115-H()*65);for(let J=0;J<4;J++)Q(X,[J*3.7-5,H()*1.4,H()],[5.5,1.8+H(),2.5],Pt);L.add(X)}function Dt(F){const X=new xn;if(F===1){xt(X,[0,0,0],[0,4.1,0],.15,B.bark);for(let J=0;J<3;J++){const K=new je(St,J===1?B.leaf:B.darkLeaf);K.position.set(0,2.8+J*1.25,0),K.scale.set(1.65-J*.38,2.8-J*.28,1.65-J*.38),K.castShadow=!0,X.add(K)}}else F===2?(xt(X,[0,0,0],[.12,4.4,0],.16,B.paleBark),xt(X,[0,2.3,0],[-.8,3.7,.15],.075,B.paleBark),Q(X,[0,4.5,0],[1.38,1.8,1.25],B.leafLight),Q(X,[-.7,3.7,.1],[1.05,1.25,1.1],B.leafLight),Q(X,[.8,4.25,-.1],[.92,1.3,1],B.leaf)):(xt(X,[0,0,0],[0,3.9,0],.23,B.bark),xt(X,[0,2.3,0],[-.9,3.6,0],.11,B.bark),xt(X,[0,2.7,0],[.9,4.1,.1],.1,B.bark),Q(X,[0,4.55,0],[1.8,1.7,1.65],B.leaf),Q(X,[-1.05,3.9,.15],[1.25,1.3,1.3],B.darkLeaf),Q(X,[1.1,4.25,.12],[1.25,1.4,1.3],B.leafLight),Q(X,[.1,5.45,-.1],[1.25,1.25,1.23],B.leafLight));return X}const Ct=[Dt(0),Dt(1),Dt(2)],Zt=[],V=new Set,Ee=new Set,te=(F,X,J,K=!1)=>{F.position.x=(K?dt(J):$(J))+X,F.position.z=J,L.add(F),Zt.push({object:F,lateral:X,z:J,stream:K})};for(let F=0;F<91;F++){const X=8-H()*175,J=F%2?-1:1,K=J*(7.4+H()*30);if(J>0&&K>11&&K<21)continue;const I=Ct[Math.floor(H()*Ct.length)].clone(),wt=.75+H()*.85;I.scale.setScalar(wt),I.rotation.y=H()*Math.PI*2,V.add(I),te(I,K,X)}[[-9.6,-9,1.3],[10.3,-22,1.2],[-8.3,-38,1.2]].forEach(([F,X,J],K)=>{const I=Ct[K%3].clone();I.scale.setScalar(J),V.add(I),te(I,F,X)});const ie=O("#a18a62"),Bt=O("#5d8c70");Bt.side=ca;const $t=[],jt=[];for(let F=0;F<=10;F++){const X=F/10,J=Math.sin(X*Math.PI)*.4,K=Math.sin(X*Math.PI)*.45-X*X*.85;if($t.push(-J,K,X*3.1,0,K+.1*Math.sin(X*Math.PI),X*3.1,J,K,X*3.1),F<10){const I=F*3;jt.push(I,I+3,I+1,I+1,I+3,I+4,I+1,I+4,I+2,I+2,I+4,I+5)}}const he=new si;he.setAttribute("position",new En($t,3)),he.setIndex(jt),he.computeVertexNormals();const yt=new xn;for(let F=0;F<5;F++)xt(yt,[.12*F*F/4,F,0],[.12*(F+1)*(F+1)/4,F+1,0],.14-F*.008,ie);for(let F=0;F<9;F++){const X=new je(he,Bt);X.position.set(.75,5,0),X.rotation.y=F*Math.PI*2/9,X.rotation.x=F%3===0?-.2:.05,X.castShadow=!0,yt.add(X)}for(let F=0;F<3;F++)Q(yt,[.6+F*.14,4.9,.1],[.15,.18,.15],ie);[[-8,-8],[7.3,-20],[-9,-32],[6.5,-43],[-9,-58],[6.7,-75],[-8,-93],[7,-113],[-10,-133],[7,-151]].forEach(([F,X],J)=>{const K=yt.clone();K.scale.setScalar(.95+J%3*.12),K.rotation.y=J*1.7,Ee.add(K),te(K,F,X)});for(let F=0;F<110;F++){const X=new xn,J=12-H()*165,K=(F%2?1:-1)*(3.9+H()*9),I=3+Math.floor(H()*5);for(let wt=0;wt<I;wt++){const Xt=(H()-.5)*1.4,Ht=(H()-.5)*1.2,Kt=.14+H()*.19,oe=new je(St,B.grass);oe.position.set(Xt,Kt/2,Ht),oe.scale.set(.08,Kt,.08),X.add(oe),wt<2&&F%3!==0&&(xt(X,[Xt,0,Ht],[Xt,Kt+.07,Ht],.013,B.stem),Q(X,[Xt,Kt+.07,Ht],[.09,.045,.09],F%2?B.flower:B.flowerWhite))}te(X,K,J)}for(let F=0;F<32;F++){const X=new xn,J=.2+H()*.5;Q(X,[0,J*.23,0],[J,J*.65,J*.8],F%2?B.rock:B.rockLight,!0),F%2===0&&Q(X,[J*.7,.08,J*.4],[J*.5,J*.36,J*.5],B.rockLight,!0),te(X,(F%2?-1:1)*(4+H()*7),8-H()*140)}for(let F=0;F<17;F++){const X=new xn;xt(X,[0,0,0],[0,1.1,0],.075,B.fence),xt(X,[0,.48,-.1],[0,.48,-3.7],.045,B.fence),xt(X,[0,.92,-.1],[0,.92,-3.7],.045,B.fence),te(X,-5.9,-6-F*3.7)}const It=new xo(1,.035);for(let F=0;F<26;F++){const X=new je(It,B.stripe);X.rotation.x=-Math.PI/2,X.scale.x=.45+H()*1.5,X.position.y=.007,te(X,(H()-.5)*3,-4-H()*145,!0)}const w=new Map;for(const F of Zt){F.object.updateMatrixWorld(!0);const X=F.object.matrixWorld.clone().invert(),J=V.has(F.object)?"forest":Ee.has(F.object)?"coast":"world";F.object.traverse(K=>{if(!(K instanceof je)||Array.isArray(K.material))return;const I=`${J}:${K.geometry.uuid}:${K.material.uuid}:${K.castShadow}:${K.receiveShadow}`;let wt=w.get(I);wt||(wt={geometry:K.geometry,material:K.material,shadow:K.castShadow,receive:K.receiveShadow,kind:J,entries:[]},w.set(I,wt)),wt.entries.push({source:F.object,local:X.clone().multiply(K.matrixWorld)})}),L.remove(F.object)}const b=new un,q=[...w.values()].map(F=>{const X=new vT(F.geometry,F.material,F.entries.length);return X.castShadow=F.shadow,X.receiveShadow=F.receive,X.frustumCulled=!1,X.instanceMatrix.setUsage(HE),F.entries.forEach((J,K)=>X.setMatrixAt(K,b.multiplyMatrices(J.source.matrixWorld,J.local))),L.add(X),{mesh:X,entries:F.entries,kind:F.kind}});function rt(F){const X=new xn;X.name=F===1?"P1-GreenCyclist":"P2-BlueCyclist",X.position.set(0,.04,2),L.add(X);const J=O("#3f4a43"),K=O("#c7cdbd",.5),I=O("#d5d6bd",.45),wt=O(F===1?"#3f7568":"#426d9c",.5),Xt=O("#354b44"),Ht=O(F===1?"#568e7b":"#4a83c2"),Kt=O(F===1?"#6ca18b":"#72a4db"),oe=O("#3c5149"),_e=O("#dfb58f"),Ae=O("#f1e8cd"),me=O("#d9d8cb"),Oe=O("#efdfbf"),fn=[];for(const mt of[.91,-1.03]){const ht=new xn;ht.position.set(0,.58,mt);const nt=new je(new ju(.52,.047,8,36),J);nt.rotation.y=Math.PI/2,nt.castShadow=!0,ht.add(nt);const Nt=new je(new ju(.467,.014,6,36),K);Nt.rotation.y=Math.PI/2,ht.add(Nt),xt(ht,[-.09,0,0],[.09,0,0],.043,I);for(let qt=0;qt<12;qt++){const Qt=qt*Math.PI/6;xt(ht,[0,0,0],[0,Math.cos(Qt)*.46,Math.sin(Qt)*.46],.006,K)}X.add(ht),fn.push(ht)}const an=[0,.58,.91],tn=[0,.55,.04],rn=[0,1.34,.36],Sn=[0,1.29,-.81];[[an,tn],[tn,rn],[rn,an],[rn,Sn],[Sn,tn],[Sn,[0,.58,-1.03]]].forEach(([mt,ht])=>xt(X,mt,ht,.035,wt)),xt(X,[0,1.23,.39],[0,1.48,.44],.027,I),Q(X,[0,1.48,.43],[.22,.052,.18],Xt),xt(X,[0,1.29,-.81],[0,1.51,-.83],.024,I),xt(X,[-.34,1.52,-.87],[.34,1.52,-.87],.022,I),xt(X,[-.34,1.52,-.87],[-.34,1.5,-1.02],.034,Xt),xt(X,[.34,1.52,-.87],[.34,1.5,-1.02],.034,Xt),xt(X,[-.15,.64,.92],[-.15,1.16,.8],.013,I),xt(X,[.15,.64,.92],[.15,1.16,.8],.013,I),xt(X,[-.15,1.16,.5],[-.15,1.16,1.2],.016,I),xt(X,[.15,1.16,.5],[.15,1.16,1.2],.016,I),xt(X,[-.15,1.16,1.2],[.15,1.16,1.2],.016,I),Q(X,[0,1.15,1.23],[.07,.035,.02],O("#c37658")),xt(X,[.03,.74,-.14],[.03,.98,-.3],.065,O("#e4d6ac"));const dn=new xn;X.add(dn),Q(dn,[0,1.64,.37],[.27,.2,.19],oe);const To=Q(dn,[0,1.99,.17],[.31,.43,.22],Ht);To.rotation.x=-.24,Q(dn,[0,2.18,.13],[.32,.15,.22],Kt);const Ia=new je(new Ss(.42,.045,.014),Ae);Ia.position.set(0,1.98,.392),Ia.rotation.x=-.24,dn.add(Ia),xt(dn,[0,2.21,.04],[0,2.37,-.03],.09,_e);const Hn=new xn;Hn.position.set(0,2.49,-.065),dn.add(Hn),Q(Hn,[0,0,0],[.205,.235,.19],_e),Q(Hn,[0,.035,.07],[.211,.19,.17],me),Q(Hn,[-.205,-.015,0],[.043,.07,.045],_e),Q(Hn,[.205,-.015,0],[.043,.07,.045],_e),Q(Hn,[0,-.035,-.18],[.05,.06,.065],_e);const Ai=new je(new $s(.254,18,10,0,Math.PI*2,0,Math.PI*.62),Ae);Ai.position.y=.095,Ai.scale.set(1,.8,1.1),Ai.castShadow=!0,Hn.add(Ai);for(const mt of[-.13,0,.13])Q(Hn,[mt,.272-Math.abs(mt)*.25,.015],[.021,.014,.125],Xt);xt(Hn,[-.19,.04,.06],[-.11,-.19,-.02],.012,Xt),xt(Hn,[.19,.04,.06],[.11,-.19,-.02],.012,Xt);for(const mt of[-1,1]){const ht=[mt*.275,2.18,.12],nt=[mt*.36,1.92,-.36],Nt=[mt*.34,1.53,-.94];xt(dn,ht,nt,.082,Ht),Q(dn,nt,[.065,.065,.065],_e),xt(dn,nt,Nt,.058,_e),Q(dn,Nt,[.065,.055,.075],_e)}const Ba=new xn;Ba.position.set(0,.55,.04),X.add(Ba);const U=new je(new Nl(.14,.14,.025,20),Xt);U.rotation.z=Math.PI/2,U.position.x=.09,Ba.add(U);const ot=[-1,1].map(mt=>{const ht=new xn;X.add(ht);const nt=xt(ht,[0,0,0],[0,1,0],.105,oe),Nt=xt(ht,[0,0,0],[0,1,0],.062,_e),qt=Q(ht,[0,0,0],[.075,.075,.075],_e),Qt=Q(ht,[0,0,0],[.085,.065,.17],Oe),Gt=new je(new Ss(.19,.035,.13),Xt);ht.add(Gt);const ae=xt(ht,[0,0,0],[0,1,0],.023,I);return{side:mt,upper:nt,lower:Nt,knee:qt,shoe:Qt,pedal:Gt,arm:ae}});return{cyclist:X,wheels:fn,crank:Ba,legs:ot,phase:0,traveled:0}}const Mt=[rt(1),rt(2)];Mt[1].cyclist.visible=!1;function _t(F){const X=new xn;X.name=F===1?"P1-GreenRunner":"P2-BlueRunner",X.position.set(0,.04,2),X.scale.setScalar(1.06),L.add(X);const J=new xn;X.add(J);const K=O(F===1?"#568e7b":"#4a83c2"),I=O(F===1?"#6ca18b":"#72a4db"),wt=O("#3c5149"),Xt=O("#dfb58f"),Ht=O("#dddccf"),Kt=O("#efdfbf"),oe=O("#56655c"),_e=O("#f1e8cd");Q(J,[0,1.17,.025],[.25,.18,.19],wt);const Ae=Q(J,[0,1.61,-.015],[.3,.42,.21],K);Ae.rotation.x=-.055,Q(J,[0,1.84,-.025],[.31,.13,.2],I);const me=new je(new Ss(.42,.045,.014),_e);me.position.set(0,1.64,.194),me.rotation.x=-.055,J.add(me),xt(J,[0,1.94,-.035],[0,2.1,-.04],.09,Xt);const Oe=new xn;Oe.position.set(0,2.25,-.05),J.add(Oe),Q(Oe,[0,0,0],[.205,.235,.19],Xt),Q(Oe,[0,.05,.055],[.213,.2,.175],Ht),Q(Oe,[-.205,-.01,0],[.043,.07,.045],Xt),Q(Oe,[.205,-.01,0],[.043,.07,.045],Xt),Q(Oe,[0,-.035,-.18],[.05,.06,.065],Xt);const fn=[-1,1].map(tn=>{const rn=xt(J,[0,0,0],[0,1,0],.098,wt),Sn=xt(J,[0,0,0],[0,1,0],.061,Xt),Dn=Q(J,[0,0,0],[.073,.073,.073],Xt),dn=new xn;return Q(dn,[0,0,-.055],[.092,.075,.18],Kt),Q(dn,[0,-.05,-.055],[.095,.025,.185],oe),J.add(dn),{side:tn,upper:rn,lower:Sn,knee:Dn,shoe:dn}}),an=[-1,1].map(tn=>({side:tn,upper:xt(J,[0,0,0],[0,1,0],.08,K),lower:xt(J,[0,0,0],[0,1,0],.054,Xt),elbow:Q(J,[0,0,0],[.061,.061,.061],Xt),hand:Q(J,[0,0,0],[.065,.075,.06],Xt)}));return X.visible=!1,{runner:X,body:J,legs:fn,arms:an,phase:0,traveled:0}}const Ut=[_t(1),_t(2)];function At(F,X,J,K){const I=J.clone().sub(X);F.position.copy(X).add(J).multiplyScalar(.5),F.scale.set(K,I.length(),K),F.quaternion.setFromUnitVectors(ct,I.normalize())}const Ft=new Float32Array(105);for(let F=0;F<35;F++)Ft[F*3]=(H()-.5)*28,Ft[F*3+1]=1.2+H()*7,Ft[F*3+2]=8-H()*48;const se=new si;se.setAttribute("position",new Bi(Ft,3)),L.add(new rx(se,new My({color:"#fff4cc",size:.055,transparent:!0,opacity:.75,depthWrite:!1}))),m.current=F=>{const X=zx[F];L.background.set(X.sky),L.fog.color.set(X.horizon),N.uniforms.top.value.set(X.sky),N.uniforms.bottom.value.set(X.horizon),P.color.set(X.light),ut.visible=F==="coast",bt.visible=F==="sunset",Z.visible=F!=="coast",st.visible=F!=="coast",P.position.set(F==="sunset"?-30:-18,F==="sunset"?19:28,-16),q.forEach(K=>{K.mesh.visible=K.kind==="world"||(K.kind==="coast"?F==="coast":F!=="coast")});const J=p.current.exerciseMode==="running"?`${F==="coast"?"海岸":F==="sunset"?"夕陽":"森林"}原地踏步跑步：長者沿著自然小徑步行與慢跑`:F==="coast"?"海岸騎行：長者騎著單車沿著棕櫚樹與藍色海洋前進":F==="sunset"?"夕陽騎行：長者騎著單車穿過暖色山丘與林間小徑":"森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進";x.domElement.setAttribute("aria-label",`3D ${p.current.playerCount===2?"雙人競賽，左側綠色玩家 1、右側藍色玩家 2。":""}${J}`);for(const K of["ground","grass","leaf","leafLight","darkLeaf","hill","farHill","water"])B[K].color.set(X[K])},m.current(y.current);const Lt=()=>{p.current.playerCount===2?(C.position.set(2.7,5.3,15),C.lookAt(-1.7,1.2,-9)):(C.position.set(3.5,4.8,12.3),C.lookAt(-3,1.1,-10)),C.fov=C.aspect<1.1?58:48,C.updateProjectionMatrix()},Wt=()=>{const F=S.clientWidth,X=S.clientHeight;!F||!X||(x.setSize(F,X,!1),C.aspect=F/X,Lt())};g.current=F=>{var X,J;Mt.forEach((K,I)=>{const wt=F===2?I===0?-1.1:1.1:0;K.cyclist.position.set(wt,.04,2),Ut[I].runner.position.set(wt,.04,2),K.traveled=0,Ut[I].traveled=0}),(X=E.current)==null||X.call(E),Lt(),(J=m.current)==null||J.call(m,y.current)},E.current=()=>{const F=p.current.exerciseMode==="running";Mt.forEach((X,J)=>{const K=J===0||p.current.playerCount===2;X.cyclist.visible=K&&!F,Ut[J].runner.visible=K&&F}),x.domElement.setAttribute("data-activity",F?"running":"cycling"),x.domElement.setAttribute("aria-label",F?"3D 原地踏步跑步：長者沿著林間小徑步行與慢跑":"3D 森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進")};const ce=new ResizeObserver(Wt);ce.observe(S),Wt(),g.current(p.current.playerCount);let ee=0,Vt=0;function ve(F,X,J,K){F.phase+=X*J*1.55,F.traveled+=X*J;const{cyclist:I,wheels:wt,crank:Xt,legs:Ht,phase:Kt}=F;wt.forEach(oe=>{oe.rotation.x-=X*J/.52}),Xt.rotation.x=Kt,K&&(I.rotation.z=X>0?Math.sin(Kt)*.014:0,I.position.y=.04+(X>0?Math.sin(Kt*2)*.006:0)),Ht.forEach(oe=>{const _e=Kt+(oe.side>0?Math.PI:0),Ae=oe.side*.18,me=new lt(Ae,.64+Math.cos(_e)*.225,.04+Math.sin(_e)*.225),Oe=new lt(Ae,1.57,.36),fn=me.clone().sub(Oe),an=Math.min(fn.length(),1.195),tn=(.61*.61-.59*.59+an*an)/(2*an),rn=Math.sqrt(Math.max(0,.61*.61-tn*tn)),Sn=fn.clone().normalize(),Dn=new lt(0,-Sn.z,Sn.y).normalize();Dn.z>0&&Dn.negate();const dn=Oe.clone().addScaledVector(Sn,tn).addScaledVector(Dn,rn);At(oe.upper,Oe,dn,.1),At(oe.lower,dn,me,.06),oe.knee.position.copy(dn),oe.shoe.position.copy(me).add(new lt(0,-.015,-.055)),oe.pedal.position.copy(me).add(new lt(0,-.07,0)),At(oe.arm,new lt(Ae,.55,.04),me.clone().add(new lt(0,-.07,0)),.023)})}function Y(F,X,J,K){const I=K&&X>0;I&&(F.phase+=J*Math.PI*2*Math.min(1.5,Math.max(.22,X*.55)),F.traveled+=X*J);const wt=I?Math.min(.4,.16+X*.09):0,Xt=I?Math.min(.26,.08+X*.055):0;F.body.position.y=I?Math.abs(Math.sin(F.phase))*Math.min(.035,X*.012):0,F.body.rotation.z=I?Math.sin(F.phase)*.022:0,F.legs.forEach(Ht=>{const Kt=F.phase+(Ht.side>0?Math.PI:0),oe=I?Math.sin(Kt):0,_e=Ht.side*.17,Ae=new lt(_e,1.14,.025),me=new lt(_e,.1+Math.max(0,-Math.cos(Kt))*Xt,oe*wt),Oe=me.clone().sub(Ae),fn=Math.min(Oe.length(),1.095),an=Oe.clone().normalize();me.copy(Ae).addScaledVector(an,fn);const tn=(.56*.56-.54*.54+fn*fn)/(2*fn),rn=Math.sqrt(Math.max(0,.56*.56-tn*tn)),Sn=new lt(0,-an.z,an.y).normalize();Sn.z>0&&Sn.negate();const Dn=Ae.clone().addScaledVector(an,tn).addScaledVector(Sn,rn);At(Ht.upper,Ae,Dn,.098),At(Ht.lower,Dn,me,.061),Ht.knee.position.copy(Dn),Ht.shoe.position.copy(me),Ht.shoe.rotation.x=I?Math.max(0,Math.cos(Kt))*.16:0}),F.arms.forEach(Ht=>{const Kt=F.phase+(Ht.side>0?Math.PI:0),oe=I?Math.sin(Kt):0,_e=I?Math.min(1,X/2.1):0,Ae=new lt(Ht.side*.275,1.86,-.02),me=new lt(Ht.side*.335,1.54,-oe*.2+.02),Oe=new lt(Ht.side*.335,1.25+_e*.28,me.z-.05-_e*.23);At(Ht.upper,Ae,me,.08),At(Ht.lower,me,Oe,.054),Ht.elbow.position.copy(me),Ht.hand.position.copy(Oe)})}const zt=F=>{if(ee=requestAnimationFrame(zt),p.current.analysisActive&&Vt&&F-Vt<1e3/30)return;const X=Vt?Math.min((F-Vt)/1e3,.05):0;Vt=F;const{speed:J,running:K,playerCount:I,opponentSpeed:wt,playerDistances:Xt,exerciseMode:Ht}=p.current,Kt=I===2,oe=[J,wt].map(me=>K&&Number.isFinite(me)?Math.max(0,me)/3.6:0),Ae=(Kt?(oe[0]+oe[1])/2:oe[0])*X;if(Ae>0){for(const me of Zt)me.z+=Ae,me.z>18&&(me.z-=184),me.object.position.z=me.z,me.object.position.x=(me.stream?dt(me.z):$(me.z))+me.lateral,me.object.updateMatrix();for(const me of q)me.entries.forEach((Oe,fn)=>me.mesh.setMatrixAt(fn,b.multiplyMatrices(Oe.source.matrix,Oe.local))),me.mesh.instanceMatrix.needsUpdate=!0}if(Ht==="running"?Ut.forEach((me,Oe)=>{(Oe===0||Kt)&&Y(me,oe[Oe],X,K)}):Mt.forEach((me,Oe)=>{(Oe===0||Kt)&&ve(me,oe[Oe],X,K)}),Kt){const me=Xt??[Ht==="running"?Ut[0].traveled:Mt[0].traveled,Ht==="running"?Ut[1].traveled:Mt[1].traveled],Oe=me[0]-me[1],fn=Number.isFinite(Oe)?Math.tanh(Oe/10)*3.2:0;Mt.forEach((an,tn)=>{const rn=2+(tn===0?-fn/2:fn/2);an.cyclist.position.z=rn,an.cyclist.position.x=$(rn)+(tn===0?-1.1:1.1),Ut[tn].runner.position.z=rn,Ut[tn].runner.position.x=an.cyclist.position.x})}x.render(L,C)};return ee=requestAnimationFrame(zt),()=>{var J;cancelAnimationFrame(ee),ce.disconnect(),m.current=null,g.current=null,E.current=null;const F=new Set,X=new Set;L.traverse(K=>{(K instanceof je||K instanceof rx)&&(F.add(K.geometry),(Array.isArray(K.material)?K.material:[K.material]).forEach(I=>X.add(I)))}),Ct.forEach(K=>K.traverse(I=>{I instanceof je&&(F.add(I.geometry),X.add(I.material))})),F.forEach(K=>K.dispose()),X.forEach(K=>K.dispose()),(J=P.shadow.map)==null||J.dispose(),x.dispose(),x.domElement.parentNode===S&&S.removeChild(x.domElement)}},[]),M.jsx("div",{ref:v,className:"ride-scene",style:{position:"absolute",inset:0,overflow:"hidden",background:"#dce9df"},children:T&&M.jsxs("div",{role:"status",style:{position:"absolute",inset:0,display:"grid",placeContent:"center",textAlign:"center",padding:30,color:"#385b4b",background:"linear-gradient(#e3eddf,#b6c78c)"},children:[M.jsx("strong",{children:"3D 騎行環境需要 WebGL"}),M.jsx("p",{children:"請開啟瀏覽器硬體加速，再重新載入。動作偵測與運動紀錄仍可使用。"})]})})}class Px{constructor(){Ie(this,"lastTime",null);Ie(this,"filtered",0);Ie(this,"center",0);Ie(this,"armed",!1);Ie(this,"lastCrossing",null);Ie(this,"intervals",[]);Ie(this,"samples",[]);Ie(this,"rpm",0);Ie(this,"frameIntervalMs",0)}reset(){this.lastTime=null,this.filtered=0,this.center=0,this.armed=!1,this.lastCrossing=null,this.intervals=[],this.samples=[],this.rpm=0,this.frameIntervalMs=0}update(e,i,r=1500){if(!Number.isFinite(e)||!Number.isFinite(i))return 0;if(this.lastTime!==null&&(i<this.lastTime||i-this.lastTime>Math.min(6e3,Math.max(1500,Number.isFinite(r)?r:1500)))&&this.reset(),this.lastTime===null)return this.lastTime=i,this.filtered=e,this.center=e,this.samples.push({time:i,value:e}),0;const l=Math.max(0,i-this.lastTime);this.lastTime=i,this.frameIntervalMs=Math.max(l,this.frameIntervalMs*.9);const f=Math.max(1600,Math.min(12e3,this.frameIntervalMs*3.1));for(this.filtered+=(e-this.filtered)*(1-Math.exp(-l/65)),this.center+=(this.filtered-this.center)*(1-Math.exp(-l/2400)),this.samples.push({time:i,value:this.filtered});this.samples.length>1&&this.samples[0].time<i-f;)this.samples.shift();let d=1/0,h=-1/0;for(const T of this.samples)d=Math.min(d,T.value),h=Math.max(h,T.value);const v=h-d,p=Math.max(.024,Math.min(.065,v*.12)),y=this.filtered-this.center;if(y<-p&&(this.armed=!0),this.armed&&y>p&&v>=.065)if(this.armed=!1,this.lastCrossing!==null){const T=i-this.lastCrossing,D=Math.max(5e3,Math.min(12e3,this.frameIntervalMs*4));if(T>=333&&T<=D){this.intervals.push(T),this.intervals.length>3&&this.intervals.shift();const S=[...this.intervals].sort((z,C)=>z-C),x=Math.floor(S.length/2),L=S.length%2?S[x]:(S[x-1]+S[x])/2;this.rpm=Math.min(180,6e4/L)}else T>D&&(this.intervals=[],this.rpm=0);T>=333&&(this.lastCrossing=i)}else this.lastCrossing=i;const m=this.intervals.length?Math.max(1800,this.intervals[this.intervals.length-1]*1.8):Math.max(5500,Math.min(12e3,this.frameIntervalMs*4)*1.1),g=this.lastCrossing!==null&&i-this.lastCrossing>m,E=this.samples.length>1&&i-this.samples[0].time>Math.max(1400,this.frameIntervalMs*2.1)&&v<.045;return(g||E)&&(this.rpm=0,this.intervals=[],this.lastCrossing=null,this.armed=!1),this.rpm}}const sp=-.08,d3=-.3,rp=1500,h3=2e3,Ix=6e3;class Bx{constructor(){Ie(this,"phases",["unarmed","unarmed"]);Ie(this,"loweredAt",[null,null]);Ie(this,"liftStartedAt",[null,null]);Ie(this,"lastFrameTime",null);Ie(this,"lastStepTime",null);Ie(this,"lastStepSide",null);Ie(this,"lastGoodTime",null);Ie(this,"intervals",[]);Ie(this,"lastCycleDuration",0);Ie(this,"cadence",0);Ie(this,"steps",0);Ie(this,"feedback","raise")}reset(){this.steps=0,this.suspend()}suspend(){this.phases=["unarmed","unarmed"],this.loweredAt=[null,null],this.liftStartedAt=[null,null],this.lastFrameTime=null,this.lastStepTime=null,this.lastStepSide=null,this.lastGoodTime=null,this.intervals=[],this.lastCycleDuration=0,this.cadence=0,this.feedback="raise"}update(e,i,r,l=rp){var v;if(![e,i,r].every(Number.isFinite))return this.suspend(),this.reading();if(this.lastFrameTime!==null){if(r<this.lastFrameTime||r-this.lastFrameTime>Math.min(6e3,Math.max(rp,Number.isFinite(l)?l:rp)))this.suspend();else if(r===this.lastFrameTime)return this.reading()}if(this.lastFrameTime=r,this.lastStepTime!==null){const p=this.intervals.at(-1)??this.lastCycleDuration,y=Math.min(Ix,Math.max(h3,p*1.5));r-this.lastStepTime>=y&&(this.cadence=0),r-this.lastStepTime>Ix&&(this.lastStepTime=null,this.lastStepSide=null,this.intervals=[])}const f=[e,i],d=[],h=[0,0];if(f.every(p=>p>=sp))this.phases=["unarmed","unarmed"],this.loweredAt=[null,null],this.liftStartedAt=[null,null];else for(const p of[0,1])f[p]<=d3?(this.phases[p]==="raised"&&(d.push(p),h[p]=r-(this.liftStartedAt[p]??r)),this.phases[p]="lowered",this.loweredAt[p]=r,this.liftStartedAt[p]=null):this.phases[p]==="lowered"&&((v=this.liftStartedAt)[p]??(v[p]=this.loweredAt[p]??r),f[p]>=sp&&(this.phases[p]="raised"));if(d.length===1&&d[0]!==this.lastStepSide){if(this.steps+=1,this.lastCycleDuration=h[d[0]],this.lastStepTime!==null){const p=r-this.lastStepTime;if(p>0){this.intervals.push(p),this.intervals.length>5&&this.intervals.shift();const m=3e4/(this.intervals.reduce((g,E)=>g+E,0)/this.intervals.length);this.cadence=Number.isFinite(m)?m:0}}else this.cadence=Math.min(60,3e4/Math.max(500,this.lastCycleDuration));this.lastStepTime=r,this.lastStepSide=d[0],this.lastGoodTime=r,this.feedback="good"}else f.some(p=>p>=sp)||this.phases.some(p=>p==="raised")?this.feedback="lower":this.feedback=this.lastGoodTime!==null&&r-this.lastGoodTime<800?"good":"raise";return this.reading()}reading(){return{cadence:this.cadence,steps:this.steps,feedback:this.feedback}}}const Nu=.025,p3=.012,m3=250,Uu=6e3;class Fx{constructor(){Ie(this,"filtered",null);Ie(this,"neutral",[0,0]);Ie(this,"armed",[!0,!0]);Ie(this,"lastFrameTime",null);Ie(this,"lastStepTime",null);Ie(this,"lastStepSide",null);Ie(this,"intervals",[]);Ie(this,"cadence",0);Ie(this,"steps",0)}reset(){this.steps=0,this.suspend()}suspend(){this.filtered=null,this.neutral=[0,0],this.armed=[!0,!0],this.lastFrameTime=null,this.lastStepTime=null,this.lastStepSide=null,this.intervals=[],this.cadence=0}update(e,i,r,l=1500){if(![e,i,r].every(Number.isFinite))return this.suspend(),this.reading();const f=Math.min(Uu,Math.max(1500,Number.isFinite(l)?l:1500));if(this.lastFrameTime!==null&&(r<this.lastFrameTime||r-this.lastFrameTime>f)&&this.suspend(),r===this.lastFrameTime)return this.reading();if(this.lastFrameTime===null||!this.filtered)return this.lastFrameTime=r,this.filtered=[e,i],this.neutral=[e,i],this.reading();const d=r-this.lastFrameTime;this.lastFrameTime=r;const h=1-Math.exp(-d/90);if(this.filtered[0]+=(e-this.filtered[0])*h,this.filtered[1]+=(i-this.filtered[1])*h,this.lastStepTime!==null){const m=this.intervals.at(-1),g=m===void 0?1800:Math.min(Uu,Math.max(1800,m*1.8));r-this.lastStepTime>=g&&(this.cadence=0),r-this.lastStepTime>Uu&&(this.lastStepTime=null,this.intervals=[])}for(const m of[0,1])this.neutral[m]=Math.min(this.neutral[m],this.filtered[m]);const v=Math.max(0,Math.min(this.filtered[0]-this.neutral[0],this.filtered[1]-this.neutral[1]));this.neutral[0]+=v,this.neutral[1]+=v;const p=[this.filtered[0]-this.neutral[0],this.filtered[1]-this.neutral[1]];for(const m of[0,1])p[m]<=p3&&(this.armed[m]=!0);const y=p[0]>=Nu&&p[0]-p[1]>=Nu?0:p[1]>=Nu&&p[1]-p[0]>=Nu?1:null;if(y!==null&&this.armed[y]){this.armed[y]=!1;const m=this.lastStepTime===null?null:r-this.lastStepTime;if(y!==this.lastStepSide&&(m===null||m>=m3)){if(this.steps+=1,m!==null&&m<=Uu){this.intervals.push(m),this.intervals.length>5&&this.intervals.shift();const g=[...this.intervals].sort((D,S)=>D-S),E=Math.floor(g.length/2),T=g.length%2?g[E]:(g[E-1]+g[E])/2;this.cadence=3e4/T}else this.cadence=15;this.lastStepTime=r,this.lastStepSide=y}}return this.reading()}reading(){return{cadence:this.cadence,steps:this.steps,feedback:this.cadence>0?"good":"step"}}}function bl(o){return`/bike-game/${o.replace(/^\/+/,"")}`}const g3=3500,v3=1800,_3=6e3,x3=1200;class Hx{constructor(){Ie(this,"lastResultAt",null);Ie(this,"lastCaptureAt",null);Ie(this,"captureInterval",null);Ie(this,"invalidSince",null)}observe(e,i){if(this.lastCaptureAt!==null&&e>this.lastCaptureAt){const r=e-this.lastCaptureAt;this.captureInterval=this.captureInterval===null?r:this.captureInterval*.6+r*.4}this.lastCaptureAt=e,this.lastResultAt=i}freshnessMs(){return this.captureInterval===null?g3:Math.min(_3,Math.max(v3,this.captureInterval*2.5))}isStale(e){return this.lastResultAt!==null&&e-this.lastResultAt>this.freshnessMs()}valid(){this.invalidSince=null}keepMotion(e){return this.invalidSince??(this.invalidSince=e),e-this.invalidSince<=x3}}class El extends Error{constructor(e){super(e),this.name="PoseTimeoutError"}}function Gx(o,e,i){return new Promise((r,l)=>{const f=setTimeout(()=>l(new El(i)),e);o.then(d=>{clearTimeout(f),r(d)},d=>{clearTimeout(f),l(d)})})}function y3(o,e){return e===1?{x:0,width:1}:{x:o===0?.5:0,width:.5}}function S3(o,e){return o.map(i=>({...i,x:e.x+i.x*e.width}))}function ho(o,e=.5){return!!o&&(o.visibility??0)>=e&&(o.presence??1)>=e&&o.x>.015&&o.x<.985&&o.y>.015&&o.y<.985}function M3(o,e=4/3,i="seated"){const r=i==="seated"?[23,24,25,26,27,28]:[23,24,25,26];if(!o||!r.every(h=>ho(o[h]))||!ho(o[11],.4)||!ho(o[12],.4))return null;const l=(o[23].x+o[24].x)/2;if(l<.1||l>.9)return null;const f=Math.hypot((o[11].x+o[12].x-o[23].x-o[24].x)/2*e,(o[11].y+o[12].y-o[23].y-o[24].y)/2);if(f<.07)return null;let d=0;if(i==="seated"){const h=o[23].y-(o[25].y*.6+o[27].y*.4),v=o[24].y-(o[26].y*.6+o[28].y*.4);d=(h-v)/f}return{signal:d,leftLift:(o[23].y-o[25].y)/f,rightLift:(o[24].y-o[26].y)/f,quality:Math.round(r.reduce((h,v)=>h+(o[v].visibility??0),0)/r.length*100)}}let oo=null;function E3(){return window.Pose?Promise.resolve(window.Pose):oo||(oo=new Promise((o,e)=>{const i=document.createElement("script");i.src=bl("pose/pose.js"),i.async=!0,i.onload=()=>{window.Pose?o(window.Pose):(oo=null,i.remove(),e(new Error("Local pose runtime is unavailable")))},i.onerror=()=>{oo=null,i.remove(),e(new Error("Cannot load local pose runtime"))},document.head.appendChild(i)}),oo)}const Ti=["#d4ee94","#8dcaff"],T3=[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[29,31],[27,31],[28,30],[30,32],[28,32]],b3=Array.from({length:33},(o,e)=>e),Zs=o=>o!=="seated"?"請讓肩膀、髖部與膝蓋入鏡":"請讓肩膀到雙腳入鏡",lo=(o="請讓肩膀到雙腳入鏡")=>({cadence:0,tracking:!1,quality:0,feedback:o,highKnees:0,steps:0});function Vx(o){const e=o instanceof Error?o.name:"";return e==="NotAllowedError"||e==="PermissionDeniedError"?"請允許此網站使用攝影機後重試。":e==="NotFoundError"||e==="DevicesNotFoundError"?"找不到攝影機，請連接攝影機後重試。":e==="NotReadableError"||e==="TrackStartError"?"攝影機正被其他程式使用，請關閉其他視訊程式後重試。":e==="SecurityError"?"請使用 HTTPS 或 localhost 開啟遊戲，才能使用攝影機。":"無法啟動動作分析，請確認攝影機和本機辨識模型可用後重試。"}function A3({mode:o,running:e,demoCadence:i,onCadence:r,onTracking:l,playerCount:f=1,exerciseMode:d="seated",demoCadence2:h=i,onPlayers:v,resetKey:p=0}){const y=kt.useRef(null),m=kt.useRef(null),g=kt.useRef({onCadence:r,onTracking:l,onPlayers:v}),E=kt.useRef({running:e,exerciseMode:d}),T=kt.useRef([new Px,new Px]),D=kt.useRef([new Bx,new Bx]),S=kt.useRef([new Fx,new Fx]),x=kt.useRef([lo(Zs(d)),lo(Zs(d))]),L=kt.useRef([0,0]),z=kt.useRef([0,0]),C=kt.useRef(()=>{}),k=kt.useRef(()=>{}),[P,O]=kt.useState(x.current),[B,N]=kt.useState(o==="demo"?"demo":"loading"),[R,H]=kt.useState(""),[$,vt]=kt.useState(0);return g.current={onCadence:r,onTracking:l,onPlayers:v},E.current={running:e,exerciseMode:d},kt.useEffect(()=>{e||C.current()},[e]),kt.useEffect(()=>{for(const dt of T.current)dt.reset();for(const dt of D.current)dt.reset();for(const dt of S.current)dt.reset();L.current=[0,0],z.current=[0,0],k.current()},[p,d]),kt.useEffect(()=>{let dt=!1,st=!1,Z=!1,ut=0,et=0,Rt=0,bt=0,Ot=null,le=null,ye=-1,j=0,St=-1,ct=performance.now(),Q=performance.now(),xt=null;const Pt=Array.from({length:f},(yt,It)=>({index:It,region:y3(It,f),model:null,pending:null,crop:document.createElement("canvas"),health:new Hx,capturedAt:0,firstSend:!0,held:!1,imageAspect:4/3}));for(const yt of T.current)yt.reset();for(const yt of D.current)yt.suspend();for(const yt of S.current)yt.suspend();x.current=[{...lo(Zs(E.current.exerciseMode)),highKnees:L.current[0],steps:E.current.exerciseMode==="running"?z.current[0]:E.current.exerciseMode==="standing"?L.current[0]:0},{...lo(f===2?Zs(E.current.exerciseMode):"單人模式"),highKnees:L.current[1],steps:E.current.exerciseMode==="running"?z.current[1]:E.current.exerciseMode==="standing"?L.current[1]:0}],H("");const Dt=yt=>{dt||yt===xt||(xt=yt,N(yt),g.current.onTracking(yt))},Ct=(yt=!1)=>{var w,b;if(dt)return;const It=[{...x.current[0]},{...x.current[1]}];O(It),g.current.onCadence(It[0].cadence),(b=(w=g.current).onPlayers)==null||b.call(w,It),yt&&Dt(It.slice(0,f).some(q=>q.tracking)?"tracking":"positioning")};C.current=()=>{if(!dt){for(const yt of T.current)yt.reset();for(const yt of D.current)yt.suspend();for(const yt of S.current)yt.suspend();x.current=x.current.map(yt=>({...yt,cadence:0,feedback:yt.tracking?"已暫停":yt.feedback})),Ct()}},k.current=()=>{if(!dt){for(const yt of T.current)yt.reset();for(const yt of D.current)yt.reset();for(const yt of S.current)yt.reset();L.current=[0,0],z.current=[0,0],x.current=x.current.map(yt=>({...yt,cadence:0,highKnees:0,steps:0,feedback:yt.tracking?E.current.exerciseMode==="standing"?"膝蓋抬到髖部高度":E.current.exerciseMode==="running"?"輕鬆左右踏步，不必抬高膝蓋":"請交替抬腳踩踏":Zs(E.current.exerciseMode)})),Ct()}},Ct();const Zt=(yt,It,w=!0)=>{T.current[yt.index].reset(),D.current[yt.index].suspend(),S.current[yt.index].suspend(),w&&(yt.points=void 0),x.current[yt.index]={...x.current[yt.index],cadence:0,tracking:!1,quality:0,feedback:It}},V=()=>{for(const yt of Pt){const It=yt.model,w=yt.pending;yt.model=null,yt.pending=null,It&&Promise.resolve(w).catch(()=>{}).then(()=>It.close()).catch(()=>{})}},Ee=yt=>{if(!(dt||st)){st=!0,ut+=1,cancelAnimationFrame(Rt),window.clearInterval(bt),H(yt);for(const It of Pt)Zt(It,"動作分析已暫停，請重新連線");Ot==null||Ot.getTracks().forEach(It=>{It.onended=null,It.stop()}),V(),Ct(),Dt("error")}};if(o==="demo")return x.current=[lo("示範・非即時影像"),lo("示範・非即時影像")],Ct(),Dt("demo"),()=>{dt=!0};Dt("loading");const te=()=>{const yt=m.current,It=y.current,w=yt==null?void 0:yt.getContext("2d");if(!yt||!It||!w)return;const b=It.videoWidth||960,q=It.videoHeight||720;(yt.width!==b||yt.height!==q)&&(yt.width=b,yt.height=q),w.clearRect(0,0,b,q);const rt=b/640;w.lineCap="round";for(const Mt of Pt){const _t=Mt.points;if(!_t)continue;const Ut=S3(_t,Mt.region);w.save(),w.globalAlpha=Mt.held?.35:x.current[Mt.index].tracking?1:.6,w.strokeStyle=Ti[Mt.index],w.fillStyle=Ti[Mt.index],w.lineWidth=3.2*rt,w.shadowColor=Ti[Mt.index],w.shadowBlur=5*rt;for(const[At,Ft]of T3)!ho(_t[At],.35)||!ho(_t[Ft],.35)||(w.beginPath(),w.moveTo(Ut[At].x*b,Ut[At].y*q),w.lineTo(Ut[Ft].x*b,Ut[Ft].y*q),w.stroke());w.shadowBlur=0;for(const At of b3)ho(_t[At],.35)&&(w.beginPath(),w.arc(Ut[At].x*b,Ut[At].y*q,4.8*rt,0,Math.PI*2),w.fill());if(E.current.exerciseMode==="standing"&&x.current[Mt.index].tracking){const At=(Ut[23].y+Ut[24].y)/2*q;w.setLineDash([5*rt,4*rt]),w.lineWidth=1.2*rt,w.beginPath(),w.moveTo((Mt.region.x+Mt.region.width*.12)*b,At),w.lineTo((Mt.region.x+Mt.region.width*.88)*b,At),w.stroke()}w.restore()}},ie=(yt,It)=>{if(dt||st||Z)return;const w=performance.now();yt.health.observe(yt.capturedAt,w);const b=It.poseLandmarks,q=M3(b,yt.imageAspect,E.current.exerciseMode);if(!q||!b){const rt=yt.health.keepMotion(w);rt||Zt(yt,Zs(E.current.exerciseMode),!1),yt.points=b??(rt?yt.points:void 0),yt.held=!b,x.current[yt.index]={...x.current[yt.index],cadence:0,tracking:!1,quality:0,feedback:rt?"正在重新辨識，請讓膝蓋入鏡":Zs(E.current.exerciseMode)}}else{yt.health.valid(),yt.points=b,yt.held=!1;let rt=0,Mt=L.current[yt.index],_t=E.current.exerciseMode==="running"?z.current[yt.index]:E.current.exerciseMode==="standing"?Mt:0,Ut="已暫停";if(E.current.running){const At=yt.health.freshnessMs();if(E.current.exerciseMode==="standing"){const Ft=D.current[yt.index].update(q.leftLift,q.rightLift,yt.capturedAt,At);rt=Ft.cadence,Mt=Ft.steps,L.current[yt.index]=Mt,_t=Mt,Ut=Ft.feedback==="raise"?"膝蓋抬到髖部高度":Ft.feedback==="lower"?"放下抬起的膝蓋":"左右交替，做得很好"}else if(E.current.exerciseMode==="running"){const Ft=S.current[yt.index].update(q.leftLift,q.rightLift,yt.capturedAt,At);rt=Ft.cadence,_t=Ft.steps,z.current[yt.index]=_t,Ut=Ft.feedback==="good"?"左右踏步，做得很好":"輕鬆左右踏步，不必抬高膝蓋"}else rt=T.current[yt.index].update(q.signal,yt.capturedAt,At),Ut=rt>0?"持續交替踩踏":"請交替抬腳踩踏"}x.current[yt.index]={cadence:rt,highKnees:Mt,steps:_t,feedback:Ut,tracking:!0,quality:q.quality}}te(),Ct(!0)},Bt=async yt=>{if(!le)throw new Error("Local pose runtime is unavailable");for(const It of Pt){if(dt||st||ut!==yt)return;It.health=new Hx,It.firstSend=!0,It.held=!1;const w=new le({locateFile:q=>bl(`pose/${q}`)});It.model=w,w.setOptions({modelComplexity:0,smoothLandmarks:!0,enableSegmentation:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),w.onResults(q=>{ut!==yt||It.model!==w||ie(It,q)});const b=w.initialize();if(It.pending=b,await Gx(b,2e4,"辨識模型啟動逾時，請重新連線。"),dt||st||ut!==yt)return;It.pending===b&&(It.pending=null)}Q=performance.now()},$t=async yt=>{if(dt||st||Z)return;Z=!0,ut+=1,cancelAnimationFrame(Rt),V();for(const w of Pt)Zt(w,"正在重新啟動動作分析…");if(te(),Ct(),et>=1){Z=!1,Ee(yt instanceof El?yt.message:"動作分析已中斷，請按重新連線恢復骨架標點。");return}et+=1,Dt("loading");const It=ut;try{if(await Bt(It),dt||st||ut!==It)return;ye=-1,j=0,Z=!1,Dt("positioning"),Rt=requestAnimationFrame(jt)}catch(w){if(dt||st||ut!==It)return;Z=!1,Ee(w instanceof El?w.message:Vx(w))}},jt=async yt=>{if(dt||st||Z)return;const It=ut,w=y.current;if(w&&w.readyState>=2&&w.currentTime!==ye&&yt-j>=(f===2?80:66)){ye=w.currentTime,j=yt;const b=performance.now();try{for(const q of Pt){const rt=w.videoWidth*q.region.width,Mt=w.videoHeight,_t=Math.min(1,(f===2?480:640)/rt,(f===2?640:480)/Mt),Ut=Math.max(1,Math.round(rt*_t)),At=Math.max(1,Math.round(Mt*_t));(q.crop.width!==Ut||q.crop.height!==At)&&(q.crop.width=Ut,q.crop.height=At);const Ft=q.crop.getContext("2d");if(!Ft)throw new Error("Cannot create player camera crop");Ft.drawImage(w,w.videoWidth*q.region.x,0,rt,Mt,0,0,Ut,At),q.imageAspect=Ut/At,q.capturedAt=b}for(const q of Pt){if(dt||st||ut!==It||!q.model)return;const rt=q.model.send({image:q.crop});if(q.pending=rt,await Gx(rt,q.firstSend?12e3:6e3,"動作分析回應逾時，請按重新連線恢復。"),dt||st||ut!==It)return;q.pending===rt&&(q.pending=null),q.firstSend=!1}}catch(q){!dt&&!st&&ut===It&&await $t(q);return}}!dt&&!st&&!Z&&ut===It&&(Rt=requestAnimationFrame(jt))};return(async()=>{var yt;try{if(!window.isSecureContext||!((yt=navigator.mediaDevices)!=null&&yt.getUserMedia))throw new DOMException("Secure context is required","SecurityError");if(Ot=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:f===2?1280:960},height:{ideal:720}},audio:!1}),dt||st){Ot.getTracks().forEach(w=>w.stop());return}Ot.getVideoTracks().forEach(w=>{w.onended=()=>Ee("攝影機已中斷，請檢查裝置後重新連線。")});const It=y.current;if(!It)throw new Error("Camera preview is unavailable");if(It.srcObject=Ot,await It.play(),le=await E3(),dt||st)return;try{if(await Bt(ut),dt||st)return;Dt("positioning"),Rt=requestAnimationFrame(jt)}catch(w){await $t(w)}if(dt||st)return;bt=window.setInterval(()=>{if(dt||st||Z||document.hidden)return;const w=performance.now(),b=y.current;if(b&&b.currentTime!==St&&(St=b.currentTime,ct=w),w-ct>3500){$t(new El("攝影機影像已暫停，請按重新連線恢復。"));return}if(Pt.some(q=>q.pending!==null)){let q=!1;for(const rt of Pt)rt.health.isStale(w)&&x.current[rt.index].tracking&&(rt.held=!0,x.current[rt.index]={...x.current[rt.index],cadence:0,tracking:!1,feedback:"分析延遲，正在等待恢復…"},q=!0);q&&(te(),Ct(!0));return}for(const q of Pt)if(q.health.isStale(w)||q.health.lastResultAt===null&&w-Q>12e3){$t(new El("人體辨識未持續更新，請按重新連線恢復。"));return}},400)}catch(It){!dt&&!st&&Ee(Vx(It))}})(),()=>{dt=!0,ut+=1,cancelAnimationFrame(Rt),window.clearInterval(bt),Ot==null||Ot.getTracks().forEach(It=>{It.onended=null,It.stop()}),V();const yt=y.current;yt&&(yt.srcObject=null);for(const It of T.current)It.reset();for(const It of D.current)It.suspend();for(const It of S.current)It.suspend()}},[o,f,$]),M.jsxs("div",{className:`pose-camera pose-camera--${o}`,"data-player-count":f,"data-exercise-mode":d,style:{position:"relative",width:"100%",height:"100%",minHeight:0,overflow:"hidden",borderRadius:12,background:"#26352d",color:"#eef2e5"},children:[o==="camera"?M.jsxs(M.Fragment,{children:[M.jsx("video",{ref:y,muted:!0,playsInline:!0,autoPlay:!0,className:"pose-video","aria-label":"鏡像攝影機畫面",style:{position:"absolute",zIndex:0,inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}}),M.jsx("canvas",{ref:m,className:"pose-overlay","aria-label":"即時人體關節標記",style:{position:"absolute",zIndex:1,pointerEvents:"none",inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}})]}):M.jsx(R3,{running:e,cadences:[i,h],playerCount:f,exerciseMode:d}),M.jsx("div",{"aria-hidden":"true",style:{position:"absolute",zIndex:2,inset:0,pointerEvents:"none",background:"linear-gradient(180deg,#12251e88,transparent 27%,transparent 62%,#12251ed9)"}}),f===2&&M.jsx("div",{"aria-hidden":"true",style:{position:"absolute",zIndex:2,left:"50%",top:29,bottom:38,borderLeft:"1px dashed #dce9cd66"}}),M.jsxs("div",{className:"pose-topline",style:{position:"absolute",zIndex:2,top:8,left:8,right:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:4,fontSize:9},children:[M.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5},children:[M.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:B==="error"?"#e8a78f":Ti[0]}}),o==="demo"?"示範動畫・非即時影像":`${f===2?"雙人 ":""}AI 動作分析`]}),M.jsx("span",{style:{fontSize:8,color:"#c4d7ba"},children:d==="running"?"跑步・原地踏步":d==="standing"?"站姿抬膝":"坐姿踩踏"})]}),M.jsx("div",{className:"pose-player-labels",style:{position:"absolute",zIndex:2,top:27,left:8,right:8,display:"flex",gap:8,pointerEvents:"none"},children:Array.from({length:f},(dt,st)=>M.jsxs("span",{"data-player-zone":st+1,style:{flex:1,color:Ti[st],fontSize:9,textAlign:"left",textShadow:"0 1px 4px #000"},children:["● 玩家 ",st+1,o==="camera"&&P[st].tracking?` · ${P[st].quality}%`:""]},st))}),B==="loading"&&o==="camera"&&M.jsxs("div",{role:"status",style:{position:"absolute",zIndex:2,inset:"42% 8px auto",textAlign:"center",fontSize:10,textShadow:"0 1px 8px #000"},children:["正在載入",f===2?"雙人":"本機","辨識模型…"]}),B==="error"&&o==="camera"&&M.jsxs("div",{role:"alert",className:"pose-error",style:{position:"absolute",zIndex:2,inset:"29px 7px 28px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",gap:7,padding:7,background:"#24362df5",borderRadius:8},children:[M.jsx("span",{style:{fontSize:10,lineHeight:1.6},children:R}),M.jsx("button",{type:"button",onClick:()=>vt(dt=>dt+1),style:{border:"1px solid #91a878",borderRadius:6,padding:"4px 10px",fontSize:10,color:"#e8f0dc",background:"#3f5540",cursor:"pointer"},children:"重新連線"})]}),M.jsx("div",{className:"pose-footer",style:{position:"absolute",zIndex:2,bottom:6,left:7,right:7,display:"flex",gap:5},children:Array.from({length:f},(dt,st)=>M.jsxs("div",{style:{flex:1,minWidth:0,padding:"4px 5px",borderRadius:5,background:"#14291ec4",border:`1px solid ${Ti[st]}30`},children:[M.jsx("span",{"data-player-status":st+1,"data-tracking":P[st].tracking?"true":"false","data-cadence":P[st].cadence.toFixed(2),"data-high-knees":P[st].highKnees,"data-steps":P[st].steps,style:{display:"block",color:Ti[st],fontSize:9,whiteSpace:"nowrap"},children:o==="demo"?`玩家${st+1}示範`:`玩家${st+1}${P[st].tracking?"已辨識":"待入鏡"}`}),M.jsx("span",{title:P[st].feedback,style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:"#dae6d1",fontSize:8,marginTop:2},children:o==="demo"?"非即時影像":P[st].feedback})]},st))})]})}function R3({running:o,cadences:e,playerCount:i,exerciseMode:r}){const l=kt.useRef(null),f=kt.useRef({running:o,cadences:e,playerCount:i,exerciseMode:r});return f.current={running:o,cadences:e,playerCount:i,exerciseMode:r},kt.useEffect(()=>{let d=0,h=0;const v=[.7,2.3],p=y=>{const m=l.current,g=m==null?void 0:m.getContext("2d");if(!m||!g)return;const E=h?Math.min((y-h)/1e3,.1):0;h=y;const T=480,D=360;g.clearRect(0,0,T,D),g.strokeStyle="#c4db9b0e",g.lineWidth=1;for(let S=0;S<T;S+=30)g.beginPath(),g.moveTo(S,0),g.lineTo(S,D),g.stroke();for(let S=0;S<D;S+=30)g.beginPath(),g.moveTo(0,S),g.lineTo(T,S),g.stroke();for(let S=0;S<f.current.playerCount;S++){f.current.running&&(v[S]+=E*f.current.cadences[S]/60*Math.PI*2);const x=v[S],L=f.current.exerciseMode!=="seated",z=f.current.exerciseMode==="running",C=z?14:78,k=z?18:82,P=f.current.playerCount===2?120+S*240:240,O=f.current.playerCount===2?.85:1;g.save(),g.translate(P,0),g.scale(O,1);const B=L?Math.max(0,Math.sin(x)):Math.sin(x),N=L?Math.max(0,-Math.sin(x)):-Math.sin(x),R=L?190:192,H=[[-22,113],[22,113],[-17,R],[17,R],[-37,L?253-B*C:230-B*24],[37,L?253-N*C:230-N*24],[-22+(L?0:Math.cos(x)*12),L?314-B*k:286-B*19],[22-(L?0:Math.cos(x)*12),L?314-N*k:286-N*19],[-40,L?314-B*k:280-B*19],[40,L?314-N*k:280-N*19],[-47,165],[47,165]];L?z||(g.strokeStyle=`${Ti[S]}55`,g.lineWidth=1,g.setLineDash([5,5]),g.beginPath(),g.moveTo(-75,R),g.lineTo(75,R),g.stroke(),g.setLineDash([])):(g.strokeStyle="#bfd09d30",g.lineWidth=5,g.lineCap="round",g.beginPath(),g.moveTo(-49,191),g.lineTo(-49,227),g.lineTo(45,227),g.lineTo(45,301),g.moveTo(-42,227),g.lineTo(-42,301),g.stroke()),g.fillStyle=`${Ti[S]}09`,g.beginPath(),g.moveTo(...H[0]),g.lineTo(...H[1]),g.lineTo(...H[3]),g.lineTo(...H[2]),g.closePath(),g.fill(),g.strokeStyle=`${Ti[S]}77`,g.lineWidth=2,g.beginPath(),g.ellipse(0,82,18,22,0,0,Math.PI*2),g.stroke(),g.beginPath(),g.moveTo(0,104),g.lineTo(0,113),g.stroke();const $=[[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[0,10],[1,11],[10,2],[11,3]];g.strokeStyle=Ti[S],g.shadowColor=Ti[S],g.shadowBlur=6,g.lineWidth=3;for(const[vt,dt]of $)g.beginPath(),g.moveTo(...H[vt]),g.lineTo(...H[dt]),g.stroke();g.shadowBlur=0;for(const[vt,dt]of H)g.beginPath(),g.arc(vt,dt,4.5,0,Math.PI*2),g.fillStyle=Ti[S],g.fill(),g.strokeStyle="#26382c",g.lineWidth=1.3,g.stroke();g.restore()}d=requestAnimationFrame(p)};return d=requestAnimationFrame(p),()=>cancelAnimationFrame(d)},[]),M.jsx("canvas",{ref:l,width:480,height:360,"aria-label":`示範${i===2?"雙人":"單人"}${r==="running"?"跑步・輕鬆原地踏步，不必抬高膝蓋":r==="standing"?"站姿高抬膝":"坐姿空中踩踏"}關節動畫，非即時攝影機影像`,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}})}const kx=[50,100,250,500];function jx({exerciseMode:o,onExerciseModeChange:e,playerCount:i,onPlayerCountChange:r,raceMeters:l,onRaceMetersChange:f,locked:d,compact:h=!1}){const v=o==="running"?"原地輕鬆交替踏步，不必抬高膝蓋":o==="standing"?"左右交替，膝蓋抬到髖部高度才計分":"坐穩椅子，雙腳交替踩踏";return h?M.jsxs("div",{className:"game-setup game-setup-compact","aria-label":"畫面內遊戲設定",children:[M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"運動模式"}),M.jsxs("select",{"aria-label":"畫面內運動模式",value:o,disabled:d,onChange:p=>e(p.target.value),children:[M.jsx("option",{value:"seated",children:"坐姿踩踏"}),M.jsx("option",{value:"standing",children:"站姿高抬膝"}),M.jsx("option",{value:"running",children:"原地踏步跑步"})]})]}),M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"騎行玩法"}),M.jsxs("select",{"aria-label":"畫面內騎行玩法",value:i,disabled:d,onChange:p=>r(Number(p.target.value)),children:[M.jsx("option",{value:1,children:"單人漫遊"}),M.jsx("option",{value:2,children:"雙人競賽"})]})]}),i===2&&M.jsxs("label",{className:"game-setup-compact-field",children:[M.jsx("span",{children:"競賽距離"}),M.jsx("select",{"aria-label":"畫面內競賽距離",value:l,disabled:d,onChange:p=>f(Number(p.target.value)),children:kx.map(p=>M.jsxs("option",{value:p,children:[p," 公尺"]},p))})]}),M.jsx("p",{className:"game-setup-compact-hint",children:v})]}):M.jsxs("section",{className:"game-setup","aria-label":"遊戲設定",children:[M.jsxs("div",{className:"game-setup-field",children:[M.jsx("span",{className:"game-setup-label",children:"運動模式"}),M.jsxs("div",{className:"game-segmented exercise-mode-options",role:"group","aria-label":"運動模式",children:[M.jsxs("button",{type:"button","aria-pressed":o==="seated",disabled:d,onClick:()=>e("seated"),children:[M.jsx(Lu,{size:17,"aria-hidden":"true"}),"坐姿踩踏"]}),M.jsxs("button",{type:"button","aria-pressed":o==="standing",disabled:d,onClick:()=>e("standing"),children:[M.jsx(cp,{size:17,"aria-hidden":"true"}),"站姿高抬膝"]}),M.jsxs("button",{type:"button",className:"running-mode","aria-pressed":o==="running",disabled:d,onClick:()=>e("running"),children:[M.jsx(DM,{size:17,"aria-hidden":"true"}),"原地踏步跑步"]})]}),M.jsx("p",{className:"game-setup-hint",children:v})]}),M.jsxs("div",{className:"game-setup-field",children:[M.jsx("span",{className:"game-setup-label",children:"騎行玩法"}),M.jsxs("div",{className:"game-segmented",role:"group","aria-label":"騎行玩法",children:[M.jsxs("button",{type:"button","aria-pressed":i===1,disabled:d,onClick:()=>r(1),children:[M.jsx(WM,{size:17,"aria-hidden":"true"}),"單人漫遊"]}),M.jsxs("button",{type:"button","aria-pressed":i===2,disabled:d,onClick:()=>r(2),children:[M.jsx(YM,{size:17,"aria-hidden":"true"}),"雙人競賽"]})]}),M.jsx("p",{className:"game-setup-hint",children:i===2?"兩人共用一個鏡頭，依畫面左右分區":"照自己的步調，享受沿途風景"})]}),i===2&&M.jsxs("label",{className:"game-setup-field game-distance-field",children:[M.jsxs("span",{className:"game-setup-label",children:[M.jsx(Tl,{size:13,"aria-hidden":"true"}),"競賽距離"]}),M.jsx("select",{"aria-label":"競賽距離",value:l,disabled:d,onChange:p=>f(Number(p.target.value)),children:kx.map(p=>M.jsxs("option",{value:p,children:[p," 公尺"]},p))}),M.jsx("span",{className:"game-setup-hint",children:"先抵達終點者獲勝"})]})]})}function Fu(o){return Number.isFinite(o)?Math.max(0,o):0}function C3(o){const e=Math.floor(Fu(o));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function w3({speeds:o,distances:e,targetMeters:i,running:r,countdown:l,result:f}){const d=Math.max(1,Fu(i)),h=e.map(Fu),v=h[0]-h[1],p=Math.abs(v)<.1?null:v>0?0:1;return M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"race-hud","aria-label":"雙人競賽狀態",children:[M.jsxs("div",{className:"race-hud-heading",children:[M.jsxs("span",{children:[M.jsx(Tl,{size:13,"aria-hidden":"true"}),f?"競賽完成":l!==null?"準備出發":r?"競賽進行中":"雙人競賽"]}),M.jsxs("span",{children:["終點 ",d," 公尺"]})]}),M.jsx("div",{className:"race-player-grid",children:[0,1].map(y=>{const m=Math.min(100,h[y]/d*100);return M.jsxs("div",{className:`race-player-card race-player-${y+1}`,"data-player":y+1,"aria-label":`玩家 ${y+1} 狀態`,children:[M.jsxs("div",{className:"race-player-heading",children:[M.jsxs("span",{className:"race-player-name",children:[M.jsx("i",{"aria-hidden":"true"}),"玩家 ",y+1]}),p===y&&M.jsx("span",{className:"race-lead-label",children:"領先"})]}),M.jsxs("div",{className:"race-player-metrics",children:[M.jsxs("div",{className:"race-player-speed",children:[M.jsx("strong",{"data-metric":"speed",children:Fu(o[y]).toFixed(1)}),M.jsx("span",{children:"km/h"})]}),M.jsxs("div",{className:"race-player-distance",children:[M.jsx("strong",{"data-metric":"distance",children:h[y].toFixed(0)}),M.jsxs("span",{children:[" / ",d," 公尺"]})]})]}),M.jsx("div",{className:"race-progress-track",role:"progressbar","aria-label":`玩家 ${y+1} 騎行進度`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(m),"aria-valuetext":`${h[y].toFixed(0)} / ${d} 公尺`,children:M.jsx("span",{style:{width:`${m}%`}})})]},y)})})]}),l!==null&&M.jsxs("div",{className:"race-countdown",role:"status","aria-live":"assertive",children:[M.jsx("span",{children:"準備好了嗎？"}),M.jsx("strong",{children:l>0?l:"出發！"}),M.jsx("span",{children:"左右交替，一起向前"})]}),f&&M.jsxs("div",{className:"race-result-inline",role:"status","aria-live":"polite",children:[M.jsx("span",{className:"race-result-icon",children:M.jsx(Qx,{size:24,"aria-hidden":"true"})}),M.jsxs("div",{children:[M.jsx("strong",{children:f.winner==="tie"?"精彩平手！":`玩家 ${f.winner} 獲勝！`}),M.jsxs("span",{children:["完成時間 ",C3(f.elapsed)," · 每一次踩踏都很棒"]})]})]})]})}function op(){return{elapsed:0,distances:[0,0],result:null}}function D3(o,e,i,r){if(o.result!==null||!Number.isFinite(i)||i<=0||!Number.isFinite(r)||r<=0)return o;const l=e.map(T=>Number.isFinite(T)&&T>0?T/3.6:0),f=o.distances.map(T=>Number.isFinite(T)&&T>0?Math.min(T,r):0),d=f.map((T,D)=>{const S=r-T;return S<=0?0:l[D]>0?S/l[D]:1/0}),h=Math.min(...d),v=h<=i,p=v?h:i,y=(Number.isFinite(o.elapsed)&&o.elapsed>0?o.elapsed:0)+p,m=[Math.min(r,f[0]+l[0]*p),Math.min(r,f[1]+l[1]*p)];if(!v)return{elapsed:y,distances:m,result:null};const E=d.every(T=>T<=i)&&Math.abs(d[0]-d[1])<1e-6?"tie":d[0]<d[1]?1:2;return(E==="tie"||E===1)&&(m[0]=r),(E==="tie"||E===2)&&(m[1]=r),{elapsed:y,distances:m,result:{winner:E,elapsed:y}}}const Xx={seated:"坐姿踩踏",standing:"站姿高抬膝",running:"原地踏步跑步"};function N3(o){return o!=="seated"}function qx(o,e){const i=Number.isFinite(e)?Math.max(0,e):0;return o==="running"?Math.min(12,i*.16):Math.min(30,i*.28)}const Wx=[{id:"forest",title:"晨光森林",subtitle:"穿過綠意，和微風打聲招呼",label:"平緩・森林",icon:qM,image:bl("routes/forest.svg")},{id:"coast",title:"蔚藍海岸",subtitle:"沿著海岸線，把心情放晴",label:"平緩・海岸",icon:JM,image:bl("routes/coast.svg")},{id:"sunset",title:"暖陽山丘",subtitle:"追著金色陽光，慢慢向前",label:"平緩・山丘",icon:HM,image:bl("routes/sunset.svg")}],lp=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(Math.floor(o%60)).padStart(2,"0")}`;function U3(){try{const o=JSON.parse(localStorage.getItem("forest-pedal-rides")||"[]");return Array.isArray(o)?o.filter(e=>!!e&&typeof e.route=="string"&&typeof e.date=="string"&&Number.isFinite(Date.parse(e.date))&&Number.isFinite(e.seconds)&&e.seconds>=0&&Number.isFinite(e.distance)&&e.distance>=0).slice(0,100):[]}catch{return[]}}function L3(){var K;const[o,e]=kt.useState("forest"),[i,r]=kt.useState(!1),[l,f]=kt.useState("demo"),[d,h]=kt.useState(42),[v,p]=kt.useState(38),[y,m]=kt.useState(0),[g,E]=kt.useState("demo"),[T,D]=kt.useState("seated"),[S,x]=kt.useState(1),[L,z]=kt.useState(100),[C,k]=kt.useState(null),[P,O]=kt.useState(op),[B,N]=kt.useState(0),[R,H]=kt.useState([{cadence:0,tracking:!1,quality:0,feedback:"請讓身體入鏡",highKnees:0,steps:0},{cadence:0,tracking:!1,quality:0,feedback:"請讓身體入鏡",highKnees:0,steps:0}]),[$,vt]=kt.useState(!1),[dt,st]=kt.useState(!1),[Z,ut]=kt.useState(!1),[et,Rt]=kt.useState(15),[bt,Ot]=kt.useState(null),[le,ye]=kt.useState(U3),[j,St]=kt.useState(!0),[ct,Q]=kt.useState(!1),[xt,Pt]=kt.useState(!1),[Dt,Ct]=kt.useState(!1),[Zt,V]=kt.useState(""),Ee=kt.useRef(null),te=kt.useRef(null),ie=kt.useRef(null),Bt=Wx.find(I=>I.id===o),$t=P.elapsed,jt=P.distances[0]/1e3,he=P.distances[1]/1e3,yt=i?l==="demo"?d:R[0].tracking?y:0:0,It=qx(T,yt),w=i&&S===2?l==="demo"?v:R[1].tracking?R[1].cadence:0:0,b=qx(T,w),q=N3(T),rt=T==="running",Mt=Xx[T],_t=((K=P.result)==null?void 0:K.winner)==="tie"?"兩位玩家平手！":P.result?`玩家 ${P.result.winner} 獲勝`:"一起出發，享受這場競賽。",Ut=i||C!==null,At=S===1||l==="demo"||R.every(I=>I.tracking),Ft=Math.min(1,$t/(et*60)),se=kt.useCallback(I=>m(I),[]),Lt=kt.useCallback(I=>E(I),[]),Wt=kt.useCallback(I=>H(I),[]),ce=kt.useRef([It,b]);ce.current=[It,b],kt.useEffect(()=>{if(!i)return;let I=performance.now();const wt=setInterval(()=>{const Xt=performance.now(),Ht=Math.min((Xt-I)/1e3,2);I=Xt,O(Kt=>S===2?D3(Kt,ce.current,Ht,L):{...Kt,elapsed:Kt.elapsed+Ht,distances:[Kt.distances[0]+ce.current[0]/3.6*Ht,0]})},100);return()=>clearInterval(wt)},[i,S,L]),kt.useEffect(()=>{if(C===null)return;const I=setTimeout(()=>{C<=1?(k(null),r(!0)):k(C-1)},1e3);return()=>clearTimeout(I)},[C]),kt.useEffect(()=>{P.result&&!Dt&&Vt()},[P.result,Dt]),kt.useEffect(()=>{i&&l==="camera"&&g==="error"&&(r(!1),V("攝影機已中斷，旅程已暫停。重新連線後可繼續。"))},[i,l,g]),kt.useEffect(()=>{const I=()=>st(document.fullscreenElement===Ee.current);return document.addEventListener("fullscreenchange",I),()=>document.removeEventListener("fullscreenchange",I)},[]),kt.useEffect(()=>{if(!Zt)return;const I=setTimeout(()=>V(""),4e3);return()=>clearTimeout(I)},[Zt]),kt.useEffect(()=>{const I=wt=>{wt.key==="Escape"&&(Ot(null),ut(!1))};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[]),kt.useEffect(()=>{if(!bt)return;const I=document.activeElement,wt=Xt=>{if(Xt.key!=="Tab")return;const Ht=[...document.querySelectorAll(".modal button:not(:disabled), .modal select, .modal a[href], .modal input")],Kt=Ht[0],oe=Ht[Ht.length-1];Xt.shiftKey&&document.activeElement===Kt?(Xt.preventDefault(),oe==null||oe.focus()):!Xt.shiftKey&&document.activeElement===oe&&(Xt.preventDefault(),Kt==null||Kt.focus())};return document.addEventListener("keydown",wt),()=>{document.removeEventListener("keydown",wt),I!=null&&I.isConnected&&I.focus()}},[bt]),kt.useEffect(()=>{const I=document.body.style.overflow;return(bt||Z)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=I}},[bt,Z]),kt.useEffect(()=>{ie.current&&te.current&&ie.current.gain.setTargetAtTime(!j&&i?.08:0,te.current.currentTime,.3)},[j,i,ct]),kt.useEffect(()=>()=>{var I;(I=te.current)==null||I.close()},[]);async function ee(){if(!te.current){const I=new AudioContext;te.current=I;const wt=I.createBuffer(1,I.sampleRate*3,I.sampleRate),Xt=wt.getChannelData(0);let Ht=0;for(let Ae=0;Ae<Xt.length;Ae++)Ht=(Ht+(Math.random()*2-1)*.025)/1.02,Xt[Ae]=Ht*3;const Kt=I.createBufferSource();Kt.buffer=wt,Kt.loop=!0;const oe=I.createBiquadFilter();oe.type="lowpass",oe.frequency.value=700;const _e=I.createGain();_e.gain.value=0,ie.current=_e,Kt.connect(oe).connect(_e).connect(I.destination),Kt.start(),Q(!0)}await te.current.resume(),St(I=>!I)}function Vt(){var I;if(r(!1),k(null),$t>0&&!Dt){const Xt=[{date:new Date().toISOString(),seconds:Math.floor($t),distance:jt,route:Bt.title,playerCount:S,exerciseMode:T,secondDistance:S===2?he:void 0,winner:(I=P.result)==null?void 0:I.winner},...le].slice(0,100);ye(Xt),Ct(!0);try{localStorage.setItem("forest-pedal-rides",JSON.stringify(Xt))}catch{V("瀏覽器無法儲存紀錄，本次成績仍可在畫面查看。")}Ot("finish")}else Dt&&Ot("finish")}function ve(){r(!1),k(null),O(op()),N(I=>I+1),m(0),Ct(!1),Ot(null)}function Y(){if(C!==null){k(null);return}if(i){r(!1);return}if(!At){V("請先讓兩位玩家分別進入鏡頭左右區域。");return}Dt&&(O(op()),N(I=>I+1),Ct(!1)),S===2&&(Dt||$t===0)?k(3):r(!0)}async function zt(){var I;if(Z){ut(!1);return}try{document.fullscreenElement?await document.exitFullscreen():(I=Ee.current)!=null&&I.requestFullscreen?await Ee.current.requestFullscreen():ut(!0)}catch{ut(!0)}}function F(I,wt){Ut||($t>0&&!Dt&&Vt(),ve(),I(),V(wt))}function X(I){if(l!==I){if(S===2){if(Ut){V("請先暫停競賽，再切換動作來源。");return}F(()=>f(I),"已切換動作來源，競賽將重新開始。")}else f(I);m(0)}}const J={exerciseMode:T,onExerciseModeChange:I=>{I!==T&&F(()=>D(I),I==="running"?"已切換原地踏步跑步；輕鬆左右交替踏步就能前進，不必抬高膝蓋。":I==="standing"?"已切換站姿高抬膝；膝蓋抬到髖部高度才計分。":"已切換坐姿踩踏，請坐穩椅子。")},playerCount:S,onPlayerCountChange:I=>{I!==S&&F(()=>x(I),I===2?"雙人競賽：畫面左側是玩家 1，右側是玩家 2。":"已切換單人漫遊。")},raceMeters:L,onRaceMetersChange:I=>{I!==L&&F(()=>z(I),`賽程已設定為 ${I} 公尺。`)},locked:Ut};return M.jsxs("div",{className:`app-shell${xt?" large-text":""}`,children:[M.jsxs("header",{className:"site-header",children:[M.jsxs("a",{href:"#",className:"brand","aria-label":"森森騎旅首頁",children:[M.jsxs("span",{className:"brand-mark",children:[M.jsx(Ah,{size:27,strokeWidth:1.8}),M.jsx("span",{className:"brand-wheel left"}),M.jsx("span",{className:"brand-wheel right"})]}),M.jsxs("span",{children:[M.jsxs("strong",{children:["森森騎旅",M.jsx("span",{className:"brand-dot",children:"."})]}),M.jsx("small",{children:"Little pedals. Big adventures."})]})]}),M.jsxs("nav",{"aria-label":"主要導覽",children:[M.jsxs("button",{className:"nav-item active",onClick:()=>{var I;Ot(null),(I=document.getElementById("ride"))==null||I.scrollIntoView({behavior:"smooth"})},children:[M.jsx(N_,{size:17}),"騎行天地"]}),M.jsxs("button",{className:"nav-item",onClick:()=>Ot("records"),children:[M.jsx(Th,{size:17}),"我的紀錄"]}),M.jsxs("button",{className:"nav-item",onClick:()=>Ot("guide"),children:[M.jsx(PM,{size:17}),"使用說明"]})]}),M.jsxs("div",{className:"header-right",children:[M.jsxs("span",{className:"local-badge",children:[M.jsx("span",{}),"自在動一動，好心情一整天"]}),M.jsx("button",{className:"icon-button settings-button","aria-label":"騎行設定",onClick:()=>Ot("settings"),children:M.jsx(bh,{size:19})})]})]}),M.jsxs("main",{id:"ride",className:"main-content",children:[M.jsxs("section",{className:"page-heading",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"eyebrow",children:[M.jsx("span",{}),"YOUR EVERYDAY LITTLE ADVENTURE"]}),M.jsxs("h1",{children:[rt?"輕鬆踏步，也能去遠方":T==="standing"?"站著動，也能去遠方":"坐著動，也能去遠方",M.jsx("span",{children:"。"})]}),M.jsx("p",{children:rt?"原地交替小步踏動，讓畫面中的你跑進好風景。":"跟著自己的節奏踩踏，讓每一小步，都有好風景。"})]}),M.jsxs("div",{className:"heading-note",children:[M.jsx("span",{className:"note-icon",children:M.jsx(au,{size:21})}),M.jsxs("div",{children:[M.jsx("strong",{children:"不必趕路，享受這一刻"}),M.jsx("span",{children:"今天的旅程，從舒服開始。"})]})]})]}),M.jsxs("div",{className:"dashboard-grid",children:[M.jsxs("div",{className:"main-column",children:[M.jsx(jx,{...J}),M.jsxs("section",{className:`ride-card route-${o}${S===2?" is-duel":""}${Z?" expanded-view":""}`,ref:Ee,"aria-label":"3D 騎行遊戲","data-fullscreen":dt||Z,children:[M.jsx(f3,{speed:It,running:i,route:o,playerCount:S,opponentSpeed:b,playerDistances:P.distances,analysisActive:l==="camera",exerciseMode:T}),M.jsx("div",{className:"scene-fullscreen-setup",children:M.jsx(jx,{...J,compact:!0})}),M.jsxs("div",{className:"scene-top",children:[M.jsxs("div",{className:"scene-location",children:[M.jsxs("span",{className:"scene-kicker",children:[M.jsx(FM,{size:12}),"你的此刻，正在自然裡"]}),M.jsx("h2",{children:Bt.title}),M.jsxs("span",{className:"scene-route-label",children:[M.jsx(Bt.icon,{size:13}),Bt.label,M.jsx("span",{className:"scene-dot",children:"·"}),S===2?"雙人競賽":rt?"自由跑步":"自由騎行"]})]}),M.jsxs("div",{className:"scene-tools",children:[M.jsxs("span",{className:"weather-pill",children:[M.jsx(XM,{size:17}),o==="sunset"?"暖陽相伴":o==="coast"?"海風正好":"陽光正好"]}),M.jsx("button",{onClick:()=>void zt(),className:"scene-icon","aria-label":"切換全螢幕","aria-pressed":dt||Z,children:M.jsx(BM,{size:17})})]})]}),M.jsxs("aside",{className:`scene-camera${$?" is-collapsed":""}`,"aria-label":"畫面內人體偵測",children:[M.jsxs("div",{className:"scene-camera-heading",children:[M.jsxs("span",{children:[M.jsx(nu,{size:14}),"人體偵測",M.jsx("span",{className:`camera-status-dot ${g==="tracking"?"detected":""}`})]}),M.jsxs("div",{children:[M.jsx("button",{className:"camera-source-button",onClick:()=>X(l==="demo"?"camera":"demo"),disabled:S===2&&Ut,"aria-label":l==="demo"?"開啟即時攝影機":"切回示範模式",children:l==="demo"?"示範":"即時"}),M.jsx("button",{onClick:()=>vt(I=>!I),"aria-label":$?"展開人體偵測視窗":"收合人體偵測視窗",children:$?M.jsx(OM,{size:15}):M.jsx(zM,{size:15})})]})]}),M.jsx("div",{className:"camera-viewport",children:M.jsx(A3,{mode:l,running:i,demoCadence:d,demoCadence2:v,playerCount:S,exerciseMode:T,resetKey:B,onCadence:se,onTracking:Lt,onPlayers:Wt})}),M.jsx("div",{className:"scene-camera-summary",role:"status",children:l==="demo"?"示範姿態，尚未使用攝影機":g==="loading"?"正在載入辨識模型…":g==="error"?"攝影機尚未連線":S===2?`玩家 1 ${R[0].tracking?"已辨識":"未入鏡"} · 玩家 2 ${R[1].tracking?"已辨識":"未入鏡"}`:R[0].tracking?"已偵測到你，標點會跟著動作移動":q?"請讓肩膀、髖部與膝蓋入鏡":"請讓肩膀、膝蓋和雙腳完整入鏡"})]}),S===2&&M.jsx(w3,{speeds:[It,b],distances:P.distances,targetMeters:L,running:i,countdown:C,result:P.result}),M.jsxs("div",{className:"scene-status",children:[M.jsx("span",{className:i?"status-dot live":"status-dot"}),l==="demo"?"示範模式":g==="tracking"?"動作已連線":g==="loading"?"攝影機準備中":"攝影機模式",M.jsx("span",{className:"status-separator"}),i?yt>0?"微風與你同行":rt?"等你開始踏步":"等你開始踩踏":"準備好就出發",M.jsx("span",{className:"status-separator"}),Mt]}),M.jsxs("div",{className:"scene-bottom",children:[M.jsxs("div",{className:"ride-metrics",children:[M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx(Th,{size:14}),rt?"跑步距離":"騎行距離"]}),M.jsxs("strong",{children:[jt.toFixed(2),M.jsx("small",{children:"km"})]})]}),M.jsx("span",{className:"metric-divider"}),M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx(IM,{size:14}),rt?"跑步時間":"騎行時間"]}),M.jsx("strong",{children:lp($t)})]})]}),M.jsxs("button",{className:`start-button ${i?"is-running":""}`,onClick:Y,disabled:!i&&C===null&&!At,children:[i?M.jsx(GM,{size:19,fill:"currentColor"}):M.jsx(VM,{size:19,fill:"currentColor"}),C!==null?`取消倒數 ${C}`:i?"暫停一下":Dt?rt?"再跑一趟":"再騎一趟":$t>0?rt?"繼續跑步":"繼續騎行":S===2?"開始競賽":rt?"開始跑步":"開始騎行",!i&&M.jsx(eu,{size:18})]}),M.jsxs("button",{className:"end-ride",disabled:$t===0,onClick:Vt,children:[M.jsx(Tl,{size:15}),"結束旅程"]})]}),S===2&&l==="camera"&&!At&&!i&&M.jsx("p",{className:"race-positioning-note",children:"請先讓兩位玩家完整入鏡，再開始競賽。"})]}),M.jsxs("section",{className:"routes-section",children:[M.jsxs("div",{className:"section-title",children:[M.jsxs("div",{children:[M.jsx("span",{className:"small-icon",children:M.jsx(N_,{size:18})}),M.jsx("h2",{children:"下一站，想去哪裡？"})]}),M.jsx("span",{children:"3 條風景・隨心切換"})]}),M.jsx("div",{className:"route-grid",children:Wx.map((I,wt)=>M.jsxs("button",{className:`route-card ${o===I.id?"selected":""}`,onClick:()=>{e(I.id),o!==I.id&&V(`已切換至${I.title}，旅程繼續累計。`)},"aria-pressed":o===I.id,children:[M.jsxs("div",{className:"route-image",style:{backgroundImage:`url(${I.image})`},children:[M.jsxs("span",{className:"route-number",children:["0",wt+1]}),M.jsx("span",{className:"route-selection",children:o===I.id?M.jsxs(M.Fragment,{children:[M.jsx(iu,{size:11}),"正在探索"]}):M.jsxs(M.Fragment,{children:[M.jsx(I.icon,{size:11}),I.label.split("・")[1]]})})]}),M.jsxs("div",{className:"route-copy",children:[M.jsxs("h3",{children:[I.title,M.jsx("span",{children:o===I.id?M.jsx("span",{className:"selected-dot"}):M.jsx(LM,{size:15})})]}),M.jsx("p",{children:I.subtitle})]})]},I.id))})]}),M.jsxs("div",{className:"gentle-reminder",children:[M.jsx("span",{className:"reminder-icon",children:M.jsx(su,{size:21})}),M.jsxs("div",{children:[M.jsx("strong",{children:"動得舒服，比動得快更重要。"}),M.jsx("p",{children:rt?"原地交替小步踏動，依舒服的高度踏步即可；需要支撐時可扶穩固椅背。":T==="standing"?"請在穩固、無障礙的空間站立，量力交替高抬膝；需要支撐時可扶穩固椅背。":"請坐穩有靠背的椅子，依自己的體力輕鬆踩踏；若感到不適，隨時停下休息。"})]}),M.jsx(au,{className:"reminder-leaf",size:35,strokeWidth:1.1})]})]}),M.jsxs("aside",{className:"side-column",children:[M.jsxs("section",{className:"pace-card","data-player":"1",children:[M.jsxs("div",{className:"card-heading",children:[M.jsxs("h2",{children:[M.jsx(NM,{size:17}),S===2?"玩家 1 運動節奏":rt?"你的踏步節奏":T==="standing"?"你的高抬膝節奏":"你的踩踏節奏"]}),M.jsxs("span",{className:"live-label",children:[M.jsx("span",{}),l==="demo"?"DEMO":"LIVE"]})]}),M.jsxs("div",{className:"speed-reading",children:[M.jsx("strong",{"data-metric":"speed",children:It.toFixed(1)}),M.jsx("span",{children:"km/h"}),M.jsxs("span",{className:"speed-illustration",children:[M.jsx($M,{size:27}),rt?M.jsx(cp,{size:43,strokeWidth:1.2}):M.jsx(Lu,{size:43,strokeWidth:1.2})]})]}),M.jsx("div",{className:"pace-divider"}),M.jsxs("div",{className:"cadence-reading",children:[M.jsxs("span",{children:[M.jsx(cp,{size:16}),rt?"踏步頻率":T==="standing"?"有效抬膝頻率":"踩踏頻率"]}),M.jsxs("strong",{"data-metric":"cadence",children:[Math.round(yt*(q?2:1)),M.jsx("small",{children:q?"步/分":"rpm"})]})]}),M.jsx("div",{className:"pace-bars","aria-hidden":"true",children:Array.from({length:28},(I,wt)=>M.jsx("i",{className:wt<Math.round(yt/90*28)?"filled":""},wt))}),M.jsxs("p",{className:"pace-caption",children:[i?yt===0?rt?"輕鬆左右交替踏步，不必抬高膝蓋":"輕輕抬腿，開始你的踩踏":yt>70?"很有活力！記得保持呼吸順暢":"很棒，保持舒服的節奏就好":"按下開始，跟著你的節奏出發",M.jsx(au,{size:13})]}),q&&l==="camera"&&M.jsxs("p",{className:"high-knee-feedback","data-player-feedback":"1",children:[R[0].feedback," ·"," ",rt?"有效踏步":"有效抬膝"," ",R[0].steps," 次"]}),S===2&&M.jsxs("div",{className:"second-player-pace","data-player":"2",children:[M.jsxs("div",{children:[M.jsxs("span",{children:[M.jsx("i",{}),"玩家 2"]}),M.jsxs("strong",{"data-metric":"speed",children:[b.toFixed(1),M.jsx("small",{children:"km/h"})]})]}),M.jsxs("div",{children:[M.jsx("span",{children:rt?"踏步頻率":T==="standing"?"抬膝頻率":"踩踏頻率"}),M.jsxs("strong",{"data-metric":"cadence",children:[Math.round(w*(q?2:1)),M.jsx("small",{children:q?"步/分":"rpm"})]})]}),q&&l==="camera"&&M.jsxs("p",{"data-player-feedback":"2",children:[R[1].feedback," · ",R[1].steps," 次"]})]})]}),M.jsxs("section",{className:"camera-card",children:[M.jsxs("div",{className:"card-heading",children:[M.jsxs("h2",{children:[M.jsx(nu,{size:17}),"偵測與試玩設定"]}),M.jsxs("span",{className:`tracking-label ${g==="tracking"?"tracked":""}`,children:[M.jsx("span",{}),l==="demo"?"示範中":{loading:"啟動中",tracking:"已辨識",positioning:"請調整位置",error:"尚未連線",demo:"準備中"}[g]]})]}),M.jsxs("div",{className:"mode-tabs",role:"group","aria-label":"選擇動作模式",children:[M.jsxs("button",{className:l==="demo"?"active":"",onClick:()=>X("demo"),disabled:S===2&&Ut,children:[M.jsx(jM,{size:13}),"先試玩看看"]}),M.jsxs("button",{className:l==="camera"?"active":"",onClick:()=>X("camera"),disabled:S===2&&Ut,children:[M.jsx(nu,{size:13}),"使用攝影機"]})]}),M.jsxs("div",{className:"tracking-summary-card",children:[M.jsx("span",{className:"tracking-summary-icon",children:S===2?M.jsx(ZM,{size:24}):M.jsx(nu,{size:24})}),M.jsxs("div",{children:[M.jsxs("strong",{children:[Mt,S===2?" · 雙人競賽":" · 單人漫遊"]}),M.jsx("p",{children:"人體標點已放在遊戲畫面右上角，放大後也能看見。"})]})]}),l==="camera"&&M.jsx("div",{className:"player-tracking-list",children:R.slice(0,S).map((I,wt)=>M.jsxs("div",{"data-player":wt+1,children:[M.jsx("span",{className:I.tracking?"tracked":"not-tracked"}),M.jsxs("strong",{children:["玩家 ",wt+1]}),M.jsx("span",{children:I.tracking?`已辨識 ${I.quality}%`:"請完整入鏡"})]},wt))}),l==="demo"?M.jsxs("div",{className:"demo-control",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"demo-speed",children:S===2?"玩家 1 示範速度":rt?"試試不同的踏步速度":T==="standing"?"試試不同的高抬膝速度":"試試不同的踩踏速度"}),M.jsxs("span",{children:[d*(q?2:1),M.jsx("small",{children:q?"步/分":"rpm"})]})]}),M.jsx("input",{id:"demo-speed",type:"range",min:"0",max:"90",step:"1",value:d,onChange:I=>h(Number(I.target.value)),"aria-label":"示範踩踏速度"}),M.jsxs("div",{className:"range-labels",children:[M.jsx("span",{children:rt?"慢慢踏":T==="standing"?"慢慢抬":"慢慢踩"}),M.jsx("span",{children:rt?"輕快踏":T==="standing"?"活力抬":"活力踩"})]}),S===2&&M.jsxs("div",{className:"player-two-demo",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"demo-speed-2",children:"玩家 2 示範速度"}),M.jsxs("span",{children:[v*(q?2:1),M.jsx("small",{children:q?"步/分":"rpm"})]})]}),M.jsx("input",{id:"demo-speed-2",type:"range",min:"0",max:"90",step:"1",value:v,onChange:I=>p(Number(I.target.value)),"aria-label":"玩家 2 示範速度"}),M.jsxs("div",{className:"range-labels",children:[M.jsx("span",{children:"慢慢動"}),M.jsx("span",{children:"活力動"})]})]})]}):M.jsxs("div",{className:"camera-instruction",children:[M.jsx("span",{className:"privacy-icon",children:M.jsx(su,{size:17})}),M.jsxs("p",{children:[S===2&&"兩人共用一個鏡頭，分別在畫面左右區域。",rt?"鏡頭需拍到肩膀、髖部與膝蓋；原地小步交替即可，不必把膝蓋抬到特定高度。":T==="standing"?"鏡頭需拍到肩膀、髖部與膝蓋；抬膝時腳踝短暫遮住仍可辨識。":"鏡頭需拍到肩膀、髖部、膝蓋和腳踝。",M.jsx("br",{}),M.jsx("small",{children:"影像僅在裝置分析，不錄影、不上傳。"})]})]})]}),M.jsxs("section",{className:"goal-card",children:[M.jsxs("div",{className:"goal-copy",children:[M.jsxs("span",{className:"goal-eyebrow",children:[M.jsx(Tl,{size:13}),"今天的小目標"]}),M.jsxs("h3",{children:["給自己一點",M.jsx("br",{}),"動起來的時間。"]}),M.jsxs("label",{className:"goal-select",children:[M.jsx("select",{value:et,onChange:I=>Rt(Number(I.target.value)),"aria-label":"騎行時間目標",children:[5,10,15,20,30].map(I=>M.jsxs("option",{value:I,children:[I," 分鐘輕鬆騎"]},I))}),M.jsx(UM,{size:12})]})]}),M.jsxs("div",{className:"goal-ring",children:[M.jsxs("svg",{viewBox:"0 0 100 100",children:[M.jsx("circle",{className:"ring-track",cx:"50",cy:"50",r:"42"}),M.jsx("circle",{className:"ring-progress",cx:"50",cy:"50",r:"42",strokeDasharray:`${Ft*264} 264`})]}),M.jsx("div",{children:Ft>=1?M.jsx(iu,{size:26}):M.jsxs(M.Fragment,{children:[M.jsxs("strong",{children:[Math.floor($t/60),M.jsxs("small",{children:[" / ",et]})]}),M.jsx("span",{children:"分鐘"})]})})]}),Ft>=1&&M.jsx("span",{className:"goal-complete",children:"今天的小目標達成了！"})]})]})]}),M.jsxs("footer",{className:"site-footer",children:[M.jsxs("span",{children:[M.jsx(Ah,{size:13}),"每一次踩踏，都是照顧自己的開始。"]}),M.jsxs("div",{children:[M.jsx("span",{children:"為每一個年紀，留一段好風景"}),M.jsx("span",{className:"footer-dot",children:"·"}),M.jsxs("button",{onClick:()=>Ot("settings"),children:["騎行設定",M.jsx(bh,{size:12})]}),M.jsxs("button",{onClick:()=>Ot("guide"),children:["需要幫忙嗎？",M.jsx(eu,{size:12})]})]})]})]}),M.jsxs("button",{className:`sound-button ${j?"":"sound-on"}`,onClick:()=>void ee(),"aria-label":j?"開啟自然環境音":"關閉自然環境音",title:j?"開啟自然環境音":"關閉自然環境音",children:[j?M.jsx(QM,{size:18}):M.jsx(KM,{size:18}),M.jsxs("span",{children:["自然環境音",j?"已關閉":"已開啟"]})]}),Zt&&M.jsxs("div",{className:"toast",role:"status",children:[M.jsx(iu,{size:17}),Zt]}),bt&&AM.createPortal(M.jsx("div",{className:`modal-backdrop${xt?" large-text":""}`,onClick:I=>{I.target===I.currentTarget&&Ot(null)},children:M.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[M.jsx("button",{className:"modal-close icon-button",autoFocus:!0,onClick:()=>Ot(null),"aria-label":"關閉視窗",children:M.jsx(tE,{size:20})}),bt==="guide"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(au,{size:22})}),M.jsx("p",{className:"eyebrow",children:"A LITTLE GUIDE FOR YOUR RIDE"}),M.jsx("h2",{id:"modal-title",children:"準備好，輕鬆出發。"}),M.jsx("p",{className:"modal-intro",children:"不用穿上車鞋，也能騎進好風景。"}),M.jsxs("ol",{className:"guide-steps",children:[M.jsxs("li",{children:[M.jsx("span",{children:"01"}),M.jsxs("div",{children:[M.jsx("h3",{children:"選擇運動方式與玩法"}),M.jsx("p",{children:"坐姿模式請坐穩椅子；高抬膝模式需交替把膝蓋抬到髖部附近。原地踏步跑步模式只要輕鬆交替踏步，不要求膝蓋抬多高。三種模式都可選單人漫遊或雙人競賽。"})]})]}),M.jsxs("li",{children:[M.jsx("span",{children:"02"}),M.jsxs("div",{children:[M.jsx("h3",{children:"打開攝影機，讓雙腿入鏡"}),M.jsx("p",{children:"將鏡頭放在前方，拍到肩膀、髖部與膝蓋；坐姿模式還需拍到腳踝。允許攝影機後，綠色標點會跟著身體移動。需要 HTTPS 或本機環境。雙人共用一個鏡頭，畫面左側是綠色玩家 1，右側是藍色玩家 2。右上角小視窗放大後也會持續顯示。"})]})]}),M.jsxs("li",{children:[M.jsx("span",{children:"03"}),M.jsxs("div",{children:[M.jsx("h3",{children:"按下開始，左右交替動起來"}),M.jsx("p",{children:"坐姿交替踩踏，高抬膝需完成抬高再放下；跑步模式只要原地交替小步踏動，就會帶動3D角色跑步。雙人競賽有 3 秒倒數，各自控制自己的角色，先到終點者獲勝。示範模式可分別調整兩人的速度。"})]})]})]}),M.jsxs("div",{className:"guide-note",children:[M.jsx(su,{size:19}),M.jsx("p",{children:"以自己的舒適程度為準，不需追求速度。如有疼痛、頭暈或喘不過氣，請停止並尋求協助。本遊戲不作醫療評估。"})]}),M.jsxs("button",{className:"primary-button",onClick:()=>Ot(null),children:["知道了，準備出發",M.jsx(eu,{size:17})]})]}),bt==="records"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(Th,{size:23})}),M.jsx("p",{className:"eyebrow",children:"EVERY LITTLE RIDE COUNTS"}),M.jsx("h2",{id:"modal-title",children:"我的騎行足跡"}),M.jsx("p",{className:"modal-intro",children:"每一段旅程，都值得記下來。紀錄儲存於此瀏覽器。"}),le.length?M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"records-totals",children:[M.jsxs("div",{children:[M.jsx("strong",{children:le.length}),M.jsx("span",{children:"趟旅程"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:le.reduce((I,wt)=>I+wt.distance,0).toFixed(2)}),M.jsx("span",{children:"總公里"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:Math.floor(le.reduce((I,wt)=>I+wt.seconds,0)/60)}),M.jsx("span",{children:"總分鐘"})]})]}),M.jsx("div",{className:"records-list",children:le.map((I,wt)=>M.jsxs("div",{className:"record-row",children:[M.jsx("span",{className:"record-icon",children:M.jsx(Lu,{size:21})}),M.jsxs("div",{children:[M.jsxs("strong",{children:[I.route,I.playerCount===2?" · 雙人競賽":""]}),M.jsx("span",{children:new Date(I.date).toLocaleString("zh-TW",{month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),M.jsxs("div",{children:[M.jsx("strong",{children:I.playerCount===2?`P1 ${Math.round(I.distance*1e3)}m / P2 ${Math.round((I.secondDistance??0)*1e3)}m`:`${I.distance.toFixed(2)} km`}),M.jsx("span",{children:lp(I.seconds)}),I.exerciseMode&&M.jsxs("span",{children:[Xx[I.exerciseMode]||"坐姿踩踏",I.winner?I.winner==="tie"?" · 平手":` · 玩家 ${I.winner} 獲勝`:""]})]})]},`${I.date}-${wt}`))}),M.jsx("p",{className:"record-footnote",children:"示範與攝影機模式的旅程皆會保存在此。距離為遊戲中的虛擬里程。"})]}):M.jsxs("div",{className:"empty-records",children:[M.jsx(Lu,{size:48,strokeWidth:1.2}),M.jsx("h3",{children:"第一段好風景，正等著你。"}),M.jsx("p",{children:"完成騎行後按「結束旅程」，足跡就會留在這裡。"}),M.jsxs("button",{className:"primary-button",onClick:()=>Ot(null),children:["去騎一會兒",M.jsx(eu,{size:17})]})]})]}),bt==="finish"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge finish-badge",children:S===2?M.jsx(Qx,{size:25}):M.jsx(Tl,{size:25})}),M.jsx("p",{className:"eyebrow",children:"YOU DID SOMETHING GOOD TODAY"}),M.jsx("h2",{id:"modal-title",children:S===2?P.result?_t:"雙人騎行已結束":"把這份好心情，帶回生活。"}),M.jsx("p",{className:"modal-intro",children:S===2?"謝謝兩位一起動起來，每一段前進都值得掌聲。":"今天的你很棒，謝謝自己願意動一動。"}),M.jsxs("div",{className:"finish-scene",children:[M.jsx(Ah,{size:65,strokeWidth:1.2}),M.jsx("span",{children:"旅程已儲存"})]}),M.jsxs("div",{className:"records-totals",children:[M.jsxs("div",{children:[M.jsx("strong",{children:S===2?Math.round(jt*1e3):jt.toFixed(2)}),M.jsx("span",{children:S===2?"玩家 1 公尺":"公里"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:lp($t)}),M.jsx("span",{children:"騎行時間"})]}),M.jsxs("div",{children:[M.jsx("strong",{children:S===2?Math.round(he*1e3):`${Math.round(Ft*100)}%`}),M.jsx("span",{children:S===2?"玩家 2 公尺":"目標完成"})]})]}),M.jsxs("p",{className:"finish-note",children:["喝口水，讓身體休息一下。",M.jsx("br",{}),l==="demo"?"本次為示範騎行，里程為虛擬模擬。":rt?"跑步距離為依踏步節奏推估的遊戲里程。":"騎行距離為依踩踏節奏推估的遊戲里程。"]}),M.jsxs("button",{className:"primary-button",onClick:ve,children:[M.jsx(kM,{size:17}),"開始一段新旅程"]})]}),bt==="settings"&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"modal-badge",children:M.jsx(bh,{size:23})}),M.jsx("p",{className:"eyebrow",children:"MAKE YOURSELF COMFORTABLE"}),M.jsx("h2",{id:"modal-title",children:"照你的步調就好。"}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"自然環境音"}),M.jsx("p",{children:"騎行時，讓輕柔風聲陪伴你。"})]}),M.jsx("button",{className:`toggle ${j?"":"on"}`,role:"switch","aria-checked":!j,"aria-label":"自然環境音",onClick:()=>void ee(),children:M.jsx("span",{})})]}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"友善大字模式"}),M.jsx("p",{children:"放大主要操作與提示文字，看得更輕鬆。"})]}),M.jsx("button",{className:`toggle ${xt?"on":""}`,role:"switch","aria-checked":xt,"aria-label":"友善大字模式",onClick:()=>Pt(I=>!I),children:M.jsx("span",{})})]}),M.jsxs("div",{className:"setting-row",children:[M.jsxs("div",{children:[M.jsx("h3",{children:"騎行目標"}),M.jsx("p",{children:"目標達成後仍可繼續自由騎行。"})]}),M.jsx("select",{value:et,onChange:I=>Rt(Number(I.target.value)),"aria-label":"設定騎行目標",children:[5,10,15,20,30].map(I=>M.jsxs("option",{value:I,children:[I," 分鐘"]},I))})]}),M.jsxs("div",{className:"guide-note",children:[M.jsx(su,{size:19}),M.jsx("p",{children:"攝影機影像在你的裝置即時分析，不會傳送至伺服器。切換回示範模式便會關閉攝影機。"})]}),M.jsxs("button",{className:"primary-button",onClick:()=>Ot(null),children:["設定完成",M.jsx(iu,{size:17})]})]})]})}),document.fullscreenElement||document.body)]})}bM.createRoot(document.getElementById("root")).render(M.jsx(_M.StrictMode,{children:M.jsx(L3,{})}));
