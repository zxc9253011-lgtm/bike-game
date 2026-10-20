var j1=Object.defineProperty;var q1=(o,e,i)=>e in o?j1(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var wa=(o,e,i)=>q1(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Cx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ld={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function W1(){if(uv)return ul;uv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var d in c)d!=="key"&&(f[d]=c[d])}else f=c;return c=f.ref,{$$typeof:o,type:r,key:h,ref:c!==void 0?c:null,props:f}}return ul.Fragment=e,ul.jsx=i,ul.jsxs=i,ul}var fv;function Y1(){return fv||(fv=1,ld.exports=W1()),ld.exports}var R=Y1(),cd={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function Z1(){if(hv)return xe;hv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(I){return I===null||typeof I!="object"?null:(I=M&&I[M]||I["@@iterator"],typeof I=="function"?I:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function L(I,ft,W){this.props=I,this.context=ft,this.refs=x,this.updater=W||C}L.prototype.isReactComponent={},L.prototype.setState=function(I,ft){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ft,"setState")},L.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function U(){}U.prototype=L.prototype;function A(I,ft,W){this.props=I,this.context=ft,this.refs=x,this.updater=W||C}var H=A.prototype=new U;H.constructor=A,S(H,L.prototype),H.isPureReactComponent=!0;var O=Array.isArray;function z(){}var G={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function w(I,ft,W){var at=W.ref;return{$$typeof:o,type:I,key:ft,ref:at!==void 0?at:null,props:W}}function V(I,ft){return w(I.type,ft,I.props)}function Q(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ut(I){var ft={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(W){return ft[W]})}var vt=/\/+/g;function lt(I,ft){return typeof I=="object"&&I!==null&&I.key!=null?ut(""+I.key):ft.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(ft){I.status==="pending"&&(I.status="fulfilled",I.value=ft)},function(ft){I.status==="pending"&&(I.status="rejected",I.reason=ft)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ot(I,ft,W,at,Tt){var Bt=typeof I;(Bt==="undefined"||Bt==="boolean")&&(I=null);var Ct=!1;if(I===null)Ct=!0;else switch(Bt){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(I.$$typeof){case o:case e:Ct=!0;break;case m:return Ct=I._init,ot(Ct(I._payload),ft,W,at,Tt)}}if(Ct)return Tt=Tt(I),Ct=at===""?"."+lt(I,0):at,O(Tt)?(W="",Ct!=null&&(W=Ct.replace(vt,"$&/")+"/"),ot(Tt,ft,W,"",function(F){return F})):Tt!=null&&(Q(Tt)&&(Tt=V(Tt,W+(Tt.key==null||I&&I.key===Tt.key?"":(""+Tt.key).replace(vt,"$&/")+"/")+Ct)),ft.push(Tt)),1;Ct=0;var Y=at===""?".":at+":";if(O(I))for(var zt=0;zt<I.length;zt++)at=I[zt],Bt=Y+lt(at,zt),Ct+=ot(at,ft,W,Bt,Tt);else if(zt=b(I),typeof zt=="function")for(I=zt.call(I),zt=0;!(at=I.next()).done;)at=at.value,Bt=Y+lt(at,zt++),Ct+=ot(at,ft,W,Bt,Tt);else if(Bt==="object"){if(typeof I.then=="function")return ot(j(I),ft,W,at,Tt);throw ft=String(I),Error("Objects are not valid as a React child (found: "+(ft==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ft)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function Z(I,ft,W){if(I==null)return I;var at=[],Tt=0;return ot(I,at,"","",function(Bt){return ft.call(W,Bt,Tt++)}),at}function Et(I){if(I._status===-1){var ft=I._result,W=ft();W.then(function(at){(I._status===0||I._status===-1)&&(I._status=1,I._result=at,W.status===void 0&&(W.status="fulfilled",W.value=at))},function(at){(I._status===0||I._status===-1)&&(I._status=2,I._result=at,W.status===void 0&&(W.status="rejected",W.reason=at))}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var _t=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ft=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ft))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function mt(I){var ft=G.T,W={};W.types=ft!==null?ft.types:null,G.T=W;try{var at=I(),Tt=G.S;Tt!==null&&Tt(W,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(z,_t)}catch(Bt){_t(Bt)}finally{ft!==null&&W.types!==null&&(ft.types=W.types),G.T=ft}}function wt(I){var ft=G.T;if(ft!==null){var W=ft.types;W===null?ft.types=[I]:W.indexOf(I)===-1&&W.push(I)}else mt(wt.bind(null,I))}var kt={map:Z,forEach:function(I,ft,W){Z(I,function(){ft.apply(this,arguments)},W)},count:function(I){var ft=0;return Z(I,function(){ft++}),ft},toArray:function(I){return Z(I,function(ft){return ft})||[]},only:function(I){if(!Q(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return xe.Activity=p,xe.Children=kt,xe.Component=L,xe.Fragment=i,xe.Profiler=c,xe.PureComponent=A,xe.StrictMode=r,xe.Suspense=v,xe.ViewTransition=y,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,xe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return G.H.useMemoCache(I)}},xe.addTransitionType=wt,xe.cache=function(I){return function(){return I.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(I,ft,W){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var at=S({},I.props),Tt=I.key;if(ft!=null)for(Bt in ft.key!==void 0&&(Tt=""+ft.key),ft)!N.call(ft,Bt)||Bt==="key"||Bt==="__self"||Bt==="__source"||Bt==="ref"&&ft.ref===void 0||(at[Bt]=ft[Bt]);var Bt=arguments.length-2;if(Bt===1)at.children=W;else if(1<Bt){for(var Ct=Array(Bt),Y=0;Y<Bt;Y++)Ct[Y]=arguments[Y+2];at.children=Ct}return w(I.type,Tt,at)},xe.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},xe.createElement=function(I,ft,W){var at,Tt={},Bt=null;if(ft!=null)for(at in ft.key!==void 0&&(Bt=""+ft.key),ft)N.call(ft,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(Tt[at]=ft[at]);var Ct=arguments.length-2;if(Ct===1)Tt.children=W;else if(1<Ct){for(var Y=Array(Ct),zt=0;zt<Ct;zt++)Y[zt]=arguments[zt+2];Tt.children=Y}if(I&&I.defaultProps)for(at in Ct=I.defaultProps,Ct)Tt[at]===void 0&&(Tt[at]=Ct[at]);return w(I,Bt,Tt)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(I){return{$$typeof:d,render:I}},xe.isValidElement=Q,xe.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:Et}},xe.memo=function(I,ft){return{$$typeof:g,type:I,compare:ft===void 0?null:ft}},xe.startTransition=mt,xe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},xe.use=function(I){return G.H.use(I)},xe.useActionState=function(I,ft,W){return G.H.useActionState(I,ft,W)},xe.useCallback=function(I,ft){return G.H.useCallback(I,ft)},xe.useContext=function(I){return G.H.useContext(I)},xe.useDebugValue=function(){},xe.useDeferredValue=function(I,ft){return G.H.useDeferredValue(I,ft)},xe.useEffect=function(I,ft){return G.H.useEffect(I,ft)},xe.useEffectEvent=function(I){return G.H.useEffectEvent(I)},xe.useId=function(){return G.H.useId()},xe.useImperativeHandle=function(I,ft,W){return G.H.useImperativeHandle(I,ft,W)},xe.useInsertionEffect=function(I,ft){return G.H.useInsertionEffect(I,ft)},xe.useLayoutEffect=function(I,ft){return G.H.useLayoutEffect(I,ft)},xe.useMemo=function(I,ft){return G.H.useMemo(I,ft)},xe.useOptimistic=function(I,ft){return G.H.useOptimistic(I,ft)},xe.useReducer=function(I,ft,W){return G.H.useReducer(I,ft,W)},xe.useRef=function(I){return G.H.useRef(I)},xe.useState=function(I){return G.H.useState(I)},xe.useSyncExternalStore=function(I,ft,W){return G.H.useSyncExternalStore(I,ft,W)},xe.useTransition=function(){return G.H.useTransition()},xe.version="19.3.1",xe}var dv;function kp(){return dv||(dv=1,cd.exports=Z1()),cd.exports}var he=kp();const K1=Cx(he);var ud={exports:{}},fl={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function Q1(){return pv||(pv=1,(function(o){function e(j,ot){var Z=j.length;j.push(ot);t:for(;0<Z;){var Et=Z-1>>>1,_t=j[Et];if(0<c(_t,ot))j[Et]=ot,j[Z]=_t,Z=Et;else break t}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var ot=j[0],Z=j.pop();if(Z!==ot){j[0]=Z;t:for(var Et=0,_t=j.length,mt=_t>>>1;Et<mt;){var wt=2*(Et+1)-1,kt=j[wt],I=wt+1,ft=j[I];if(0>c(kt,Z))I<_t&&0>c(ft,kt)?(j[Et]=ft,j[I]=Z,Et=I):(j[Et]=kt,j[wt]=Z,Et=wt);else if(I<_t&&0>c(ft,Z))j[Et]=ft,j[I]=Z,Et=I;else break t}}return ot}function c(j,ot){var Z=j.sortIndex-ot.sortIndex;return Z!==0?Z:j.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var v=[],g=[],m=1,p=null,y=3,M=!1,b=!1,C=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(j){for(var ot=i(g);ot!==null;){if(ot.callback===null)r(g);else if(ot.startTime<=j)r(g),ot.sortIndex=ot.expirationTime,e(v,ot);else break;ot=i(g)}}function H(j){if(C=!1,A(j),!b)if(i(v)!==null)b=!0,O||(O=!0,Q());else{var ot=i(g);ot!==null&&lt(H,ot.startTime-j)}}var O=!1,z=-1,G=5,N=-1;function w(){return S?!0:!(o.unstable_now()-N<G)}function V(){if(S=!1,O){var j=o.unstable_now();N=j;var ot=!0;try{t:{b=!1,C&&(C=!1,L(z),z=-1),M=!0;var Z=y;try{e:{for(A(j),p=i(v);p!==null&&!(p.expirationTime>j&&w());){var Et=p.callback;if(typeof Et=="function"){p.callback=null,y=p.priorityLevel;var _t=Et(p.expirationTime<=j);if(j=o.unstable_now(),typeof _t=="function"){p.callback=_t,A(j),ot=!0;break e}p===i(v)&&r(v),A(j)}else r(v);p=i(v)}if(p!==null)ot=!0;else{var mt=i(g);mt!==null&&lt(H,mt.startTime-j),ot=!1}}break t}finally{p=null,y=Z,M=!1}ot=void 0}}finally{ot?Q():O=!1}}}var Q;if(typeof U=="function")Q=function(){U(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,vt=ut.port2;ut.port1.onmessage=V,Q=function(){vt.postMessage(null)}}else Q=function(){x(V,0)};function lt(j,ot){z=x(function(){j(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(j){switch(y){case 1:case 2:case 3:var ot=3;break;default:ot=y}var Z=y;y=ot;try{return j()}finally{y=Z}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(j,ot){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=y;y=j;try{return ot()}finally{y=Z}},o.unstable_scheduleCallback=function(j,ot,Z){var Et=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Et+Z:Et):Z=Et,j){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Z+_t,j={id:m++,callback:ot,priorityLevel:j,startTime:Z,expirationTime:_t,sortIndex:-1},Z>Et?(j.sortIndex=Z,e(g,j),i(v)===null&&j===i(g)&&(C?(L(z),z=-1):C=!0,lt(H,Z-Et))):(j.sortIndex=_t,e(v,j),b||M||(b=!0,O||(O=!0,Q()))),j},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(j){var ot=y;return function(){var Z=y;y=ot;try{return j.apply(this,arguments)}finally{y=Z}}}})(hd)),hd}var mv;function J1(){return mv||(mv=1,fd.exports=Q1()),fd.exports}var dd={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function $1(){if(gv)return Xn;gv=1;var o=kp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(m,p,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===h?h:""+M,children:m,containerInfo:p,implementation:y}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Xn.browser=function(m){return{$$typeof:f,_reason:m}},Xn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(m,p,null,y)},Xn.flushSync=function(m){var p=v.T,y=r.p;try{if(v.T=null,r.p=2,m)return m()}finally{v.T=p,r.p=y,r.d.f()}},Xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Xn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,M=g(y,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:C}):y==="script"&&r.d.X(m,{crossOrigin:M,integrity:b,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=g(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(m)},Xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,M=g(y,p.crossOrigin);r.d.L(m,y,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=g(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(m)},Xn.requestFormReset=function(m){r.d.r(m)},Xn.unstable_batchedUpdates=function(m,p){return m(p)},Xn.useFormState=function(m,p,y){return v.H.useFormState(m,p,y)},Xn.useFormStatus=function(){return v.H.useHostTransitionStatus()},Xn.version="19.3.1",Xn}var _v;function tM(){if(_v)return dd.exports;_v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dd.exports=$1(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function eM(){if(vv)return fl;vv=1;var o=J1(),e=kp(),i=tM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return v(l),t;if(u===s)return v(l),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=u;else{for(var _=!1,E=l.child;E;){if(E===a){_=!0,a=l,s=u;break}if(E===s){_=!0,s=l,a=u;break}E=E.sibling}if(!_){for(E=u.child;E;){if(E===a){_=!0,a=u,s=l;break}if(E===s){_=!0,s=u,a=l;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,l,u))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=y(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,L=null;function U(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function A(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(x=t),!0):!1}function H(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var u=n;u;u=a(u))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,G=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ot=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),mt=Symbol.for("react.activity"),wt=Symbol.for("react.legacy_hidden"),kt=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ft=Symbol.for("react.recoverable"),W=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ut:return"Profiler";case Q:return"StrictMode";case ot:return"Suspense";case Z:return"SuspenseList";case mt:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case lt:return t.displayName||"Context";case vt:return(t._context.displayName||"Context")+".Consumer";case j:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Et:return n=t.displayName||null,n!==null?n:Bt(t.type)||"Memo";case _t:n=t._payload,t=t._init;try{return Bt(t(n))}catch{}}return null}var Ct=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],te=-1;function Wt(t){return{current:t}}function Pt(t){0>te||(t.current=ve[te],ve[te]=null,te--)}function re(t,n){te++,ve[te]=t.current,t.current=n}var Lt=Wt(null),ge=Wt(null),Ye=Wt(null),we=Wt(null);function P(t,n){switch(re(Ye,n),re(ge,t),re(Lt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?x_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=x_(n),t=y_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Pt(Lt),re(Lt,t)}function T(){Pt(Lt),Pt(ge),Pt(Ye)}function st(t){var n=t.memoizedState;n!==null&&(Vr._currentValue=n.memoizedState,re(we,t)),n=Lt.current;var a=y_(n,t.type);n!==a&&(re(ge,t),re(Lt,a))}function xt(t){ge.current===t&&(Pt(Lt),Pt(ge)),we.current===t&&(Pt(we),Vr._currentValue=F)}var bt,pt;function Kt(t){if(bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);bt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+pt}var It=!1;function ee(t,n){if(!t||It)return"";It=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Gt){var q=Gt}Reflect.construct(t,[],St)}else{try{St.call()}catch(Gt){q=Gt}St=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(Gt){q=Gt}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Gt){if(Gt&&q&&typeof Gt.stack=="string")return[Gt.stack,q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),_=u[0],E=u[1];if(_&&E){var B=_.split(`
`),J=E.split(`
`);for(l=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;l<J.length&&!J[l].includes("DetermineComponentFrameRoot");)l++;if(s===B.length||l===J.length)for(s=B.length-1,l=J.length-1;1<=s&&0<=l&&B[s]!==J[l];)l--;for(;1<=s&&0<=l;s--,l--)if(B[s]!==J[l]){if(s!==1||l!==1)do if(s--,l--,0>l||B[s]!==J[l]){var ct=`
`+B[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=l);break}}}finally{It=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Kt(a):""}function ae(t,n){switch(t.tag){case 26:case 27:case 5:return Kt(t.type);case 16:return Kt("Lazy");case 13:return t.child!==n&&n!==null?Kt("Suspense Fallback"):Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return ee(t.type,!1);case 11:return ee(t.type.render,!1);case 1:return ee(t.type,!0);case 31:return Kt("Activity");case 30:return Kt("ViewTransition");default:return""}}function Dt(t){try{var n="",a=null;do n+=ae(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Vt=Object.prototype.hasOwnProperty,le=o.unstable_scheduleCallback,Jt=o.unstable_cancelCallback,Xt=o.unstable_shouldYield,fe=o.unstable_requestPaint,X=o.unstable_now,Nt=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,At=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,$t=o.unstable_IdlePriority,me=o.log,Be=o.unstable_setDisableYieldValue,be=null,sn=null;function pn(t){if(typeof me=="function"&&Be(t),sn&&typeof sn.setStrictMode=="function")try{sn.setStrictMode(be,t)}catch{}}var Sn=Math.clz32?Math.clz32:Ss,fi=Math.log,Bi=Math.LN2;function Ss(t){return t>>>=0,t===0?32:31-(fi(t)/Bi|0)|0}var it=256,gt=262144,Ht=4194304;function Ot(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function se(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~u,s!==0?l=Ot(s):(_&=E,_!==0?l=Ot(_):a||(a=E&~t,a!==0&&(l=Ot(a))))):(E=s&~u,E!==0?l=Ot(E):_!==0?l=Ot(_):a||(a=s&~t,a!==0&&(l=Ot(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Me(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function _e(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Sn(a),l=1<<s;n|=t[s],a&=~l}return n}function hn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var t=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),t}function Cn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ai(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,a,s,l,u){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-Sn(a),St=1<<ct;E[ct]=0,B[ct]=-1;var q=J[ct];if(q!==null)for(J[ct]=null,ct=0;ct<q.length;ct++){var rt=q[ct];rt!==null&&(rt.lane&=-536870913)}a&=~St}s!==0&&D(t,s,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(_&~n))}function D(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Sn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function $(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Sn(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function dt(t,n){var a=n&-n;return a=(a&42)!==0?1:ht(a),(a&(t.suspendedLanes|n))!==0?0:a}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rt(){var t=zt.p;return t!==0?t:(t=window.event,t===void 0?32:iv(t.type))}function jt(t,n){var a=zt.p;try{return zt.p=t,n()}finally{zt.p=a}}var Zt=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Zt,ne="__reactProps$"+Zt,de="__reactContainer$"+Zt,ce="__reactEvents$"+Zt,Ce="__reactListeners$"+Zt,Ze="__reactHandles$"+Zt,un="__reactResources$"+Zt,ke="__reactMarker$"+Zt,Fe="__reactLoad$"+Zt;function ue(t){delete t[Ft],delete t[ne],delete t[Ce],delete t[Ze]}function Xe(t){var n;if(n=t[Ft])return n;for(var a=t.parentNode;a;){if(n=a[de]||a[Ft]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=I_(t);t!==null;){if(a=t[Ft])return a;t=I_(t)}return n}t=a,a=t.parentNode}return null}function Ae(t){if(t=t[Ft]||t[de]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function wn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function di(t){var n=t[un];return n||(n=t[un]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function He(t){t[ke]=!0}function Ba(t){t[Fe]=void 0}var rn=new Set,Zn={};function Mn(t,n){mn(t,n),mn(t+"Capture",n)}function mn(t,n){for(Zn[t]=n,t=0;t<n.length;t++)rn.add(n[t])}var jn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sr={},Ki={};function uy(t){return Vt.call(Ki,t)?!0:Vt.call(sr,t)?!1:jn.test(t)?Ki[t]=!0:(sr[t]=!0,!1)}var Ge=!1;function sm(){var t=Ge;return Ge=!1,t}function Dl(t,n,a){if(uy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Nl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ma(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function pi(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fy(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){a=""+_,u.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Iu(t){if(!t._valueTracker){var n=rm(t)?"checked":"value";t._valueTracker=fy(t,n,""+t[n])}}function om(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=rm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var hy=/[\n"\\]/g;function Ai(t){return t.replace(hy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bu(t,n,a,s,l,u,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pi(n)):t.value!==""+pi(n)&&(t.value=""+pi(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Fu(t,pi(t.value)):Fu(t,pi(n)):a!=null?Fu(t,pi(a)):s!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+pi(E):t.removeAttribute("name")}function lm(t,n,a,s,l,u,_,E){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Iu(t);return}a=a!=null?""+pi(a):"",n=n!=null?""+pi(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Iu(t)}function Fu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function rr(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+pi(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function cm(t,n,a){if(n!=null&&(n=""+pi(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+pi(a):""}function um(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=pi(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Iu(t)}function or(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var dy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||dy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ge=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(fm(t,l,s),Ge=!0)}else for(var u in n)n.hasOwnProperty(u)&&fm(t,u,n[u])}function Hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),my=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return my.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Gu=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,cr=null;function dm(t){var n=Ae(t);if(n&&(t=n.stateNode)){var a=t[ne]||null;t:switch(t=n.stateNode,n.type){case"input":if(Bu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ai(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[ne]||null;if(!l)throw Error(r(90));Bu(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&om(s)}break t;case"textarea":cm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rr(t,!!a.multiple,n,!1)}}}var ku=!1;function pm(t,n,a){if(ku)return t(n,a);ku=!0;try{var s=t(n);return s}finally{if(ku=!1,(lr!==null||cr!==null)&&(Uc(),lr&&(n=lr,t=cr,cr=lr=null,dm(n),t)))for(n=0;n<t.length;n++)dm(t[n])}}function Mo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[ne]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(ga)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Xu=!1}var Fa=null,ju=null,Ll=null;function mm(){if(Ll)return Ll;var t,n=ju,a=n.length,s,l="value"in Fa?Fa.value:Fa.textContent,u=l.length;for(t=0;t<a&&n[t]===l[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===l[u-s];s++);return Ll=l.slice(t,1<s?1-s:void 0)}function Ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function gm(){return!1}function Kn(t){function n(a,s,l,u,_){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(u):u[E]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?zl:gm,this.isPropagationStopped=gm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Kn(Ha),To=z({},Ha,{view:0,detail:0}),gy=Kn(To),qu,Wu,bo,Il=z({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(qu=t.screenX-bo.screenX,Wu=t.screenY-bo.screenY):Wu=qu=0,bo=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),_m=Kn(Il),_y=z({},Il,{dataTransfer:0}),vy=Kn(_y),xy=z({},To,{relatedTarget:0}),Yu=Kn(xy),yy=z({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=Kn(yy),My=z({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=Kn(My),Ty=z({},Ha,{data:0}),vm=Kn(Ty),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ry[t])?!!n[t]:!1}function Zu(){return Cy}var wy=z({},To,{key:function(t){if(t.key){var n=by[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dy=Kn(wy),Ny=z({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=Kn(Ny),Uy=z({},Ha,{submitter:0}),Ly=Kn(Uy),Oy=z({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),zy=Kn(Oy),Py=z({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Kn(Py),By=z({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=Kn(By),Hy=z({},Ha,{newState:0,oldState:0,source:0}),Gy=Kn(Hy),Vy=[9,13,27,32],Ku=ga&&"CompositionEvent"in window,Ao=null;ga&&"documentMode"in document&&(Ao=document.documentMode);var ky=ga&&"TextEvent"in window&&!Ao,ym=ga&&(!Ku||Ao&&8<Ao&&11>=Ao),Sm=" ",Mm=!1;function Em(t,n){switch(t){case"keyup":return Vy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function Xy(t,n){switch(t){case"compositionend":return Tm(n);case"keypress":return n.which!==32?null:(Mm=!0,Sm);case"textInput":return t=n.data,t===Sm&&Mm?null:t;default:return null}}function jy(t,n){if(ur)return t==="compositionend"||!Ku&&Em(t,n)?(t=mm(),Ll=ju=Fa=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ym&&n.locale!=="ko"?null:n.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qy[t.type]:n==="textarea"}function Am(t,n,a,s){lr?cr?cr.push(s):cr=[s]:lr=s,n=Bc(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ro=null,Co=null;function Wy(t){d_(t,0)}function Bl(t){var n=wn(t);if(om(n))return t}function Rm(t,n){if(t==="change")return n}var Cm=!1;if(ga){var Qu;if(ga){var Ju="oninput"in document;if(!Ju){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),Ju=typeof wm.oninput=="function"}Qu=Ju}else Qu=!1;Cm=Qu&&(!document.documentMode||9<document.documentMode)}function Dm(){Ro&&(Ro.detachEvent("onpropertychange",Nm),Co=Ro=null)}function Nm(t){if(t.propertyName==="value"&&Bl(Co)){var n=[];Am(n,Co,t,Vu(t)),pm(Wy,n)}}function Yy(t,n,a){t==="focusin"?(Dm(),Ro=n,Co=a,Ro.attachEvent("onpropertychange",Nm)):t==="focusout"&&Dm()}function Zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Co)}function Ky(t,n){if(t==="click")return Bl(n)}function Qy(t,n){if(t==="input"||t==="change")return Bl(n)}function Jy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var mi=typeof Object.is=="function"?Object.is:Jy;function wo(t,n){if(mi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Vt.call(n,l)||!mi(t[l],n[l]))return!1}return!0}function $u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,n){var a=Um(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Um(a)}}function Om(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Om(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$u(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$u(t.document)}return n}function tf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $y=ga&&"documentMode"in document&&11>=document.documentMode,fr=null,ef=null,Do=null,nf=!1;function Pm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nf||fr==null||fr!==$u(s)||(s=fr,"selectionStart"in s&&tf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Do&&wo(Do,s)||(Do=s,s=Bc(ef,"onSelect"),0<s.length&&(n=new Pl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=fr)))}function Ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var hr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},af={},Im={};ga&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Es(t){if(af[t])return af[t];if(!hr[t])return t;var n=hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Im)return af[t]=n[a];return t}var Bm=Es("animationend"),Fm=Es("animationiteration"),Hm=Es("animationstart"),tS=Es("transitionrun"),eS=Es("transitionstart"),nS=Es("transitioncancel"),Gm=Es("transitionend"),Vm=new Map,sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sf.push("scrollEnd");function Fi(t,n){Vm.set(t,n),Mn(n,[t])}var iS=0;function _a(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=ki.identifierPrefix;var a=iS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function km(t){if(t==null||typeof t=="string")return t;var n=null,a=Ur;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function va(t,n){return t=km(t),n=km(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ri=[],dr=0,rf=0;function Hl(){for(var t=dr,n=rf=dr=0;n<t;){var a=Ri[n];Ri[n++]=null;var s=Ri[n];Ri[n++]=null;var l=Ri[n];Ri[n++]=null;var u=Ri[n];if(Ri[n++]=null,s!==null&&l!==null){var _=s.pending;_===null?l.next=l:(l.next=_.next,_.next=l),s.pending=l}u!==0&&Xm(a,l,u)}}function Gl(t,n,a,s){Ri[dr++]=t,Ri[dr++]=n,Ri[dr++]=a,Ri[dr++]=s,rf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function of(t,n,a,s){return Gl(t,n,a,s),Vl(t)}function Ts(t,n){return Gl(t,null,null,n),Vl(t)}function Xm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&n!==null&&(l=31-Sn(a),t=u.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),u):null}function Vl(t){if(50<Jo)throw Jo=0,Nc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var pr={};function aS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,n,a,s){return new aS(t,n,a,s)}function lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var a=t.alternate;return a===null?(a=si(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function kl(t,n,a,s,l,u){var _=0;if(s=t,typeof s=="function")lf(s)&&(_=1);else if(typeof s=="string")_=U1(t,a,Lt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case mt:return t=si(31,a,n,l),t.elementType=mt,t.lanes=u,t;case V:return bs(a.children,l,u,n);case Q:_=8,l|=24;break;case ut:return t=si(12,a,n,l|2),t.elementType=ut,t.lanes=u,t;case ot:return t=si(13,a,n,l),t.elementType=ot,t.lanes=u,t;case Z:return t=si(19,a,n,l),t.elementType=Z,t.lanes=u,t;case wt:case I:return t=l|32,t=si(30,a,n,t),t.elementType=I,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case lt:_=10;break t;case vt:_=9;break t;case j:_=11;break t;case Et:_=14;break t;case _t:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=si(_,a,n,l),n.elementType=t,n.type=s,n.lanes=u,n}function bs(t,n,a,s){return t=si(7,t,s,n),t.lanes=a,t}function cf(t,n,a){return t=si(6,t,null,n),t.lanes=a,t}function qm(t){var n=si(18,null,null,0);return n.stateNode=t,n}function uf(t,n,a){return n=si(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Wm=new WeakMap;function Ci(t,n){if(typeof t=="object"&&t!==null){var a=Wm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Dt(n)},Wm.set(t,n),n)}return{value:t,source:n,stack:Dt(n)}}var mr=[],gr=0,Xl=null,No=0,wi=[],Di=0,Ga=null,Ji=1,$i="";function ya(t,n){mr[gr++]=No,mr[gr++]=Xl,Xl=t,No=n}function Ym(t,n,a){wi[Di++]=Ji,wi[Di++]=$i,wi[Di++]=Ga,Ga=t;var s=Ji;t=$i;var l=32-Sn(s)-1;s&=~(1<<l),a+=1;var u=32-Sn(n)+l;if(30<u){var _=l-l%5;u=(s&(1<<_)-1).toString(32),s>>=_,l-=_,Ji=1<<32-Sn(n)+l|a<<l|s,$i=u+t}else Ji=1<<u|a<<l|s,$i=t}function jl(t){t.return!==null&&(ya(t,1),Ym(t,1,0))}function ff(t){for(;t===Xl;)Xl=mr[--gr],mr[gr]=null,No=mr[--gr],mr[gr]=null;for(;t===Ga;)Ga=wi[--Di],wi[Di]=null,$i=wi[--Di],wi[Di]=null,Ji=wi[--Di],wi[Di]=null}function Zm(t,n){wi[Di++]=Ji,wi[Di++]=$i,wi[Di++]=Ga,Ji=n.id,$i=n.overflow,Ga=t}var Ln=null,on=null,Re=!1,Va=null,Ni=!1,hf=Error(r(519));function ka(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(Ci(n,t)),hf}function Km(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ft]=t,n[ne]=s,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<tl.length;a++)Ne(tl[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),lm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),um(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||__(n.textContent,a)?(s.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),s.onScroll!=null&&Ne("scroll",n),s.onScrollEnd!=null&&Ne("scrollend",n),s.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||ka(t,!0)}function ql(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Ln=Ln.return}}function _r(t){if(t!==Ln)return!1;if(!Re)return ql(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vh(t.type,t.memoizedProps)),a=!a),a&&on&&ka(t),ql(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=P_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=P_(t)}else n===27?(n=on,ss(t.type)?(t=Qh,Qh=null,on=t):on=n):on=Ln?Li(t.stateNode.nextSibling):null;return!0}function As(){on=Ln=null,Re=!1}function df(){var t=Va;return t!==null&&(li===null?li=t:li.push.apply(li,t),Va=null),t}function Uo(t){Va===null?Va=[t]:Va.push(t)}var pf=Wt(null),Rs=null,Sa=null;function Xa(t,n,a){re(pf,n._currentValue),n._currentValue=a}function Ma(t){t._currentValue=pf.current,Pt(pf)}function Wl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function mf(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var _=l.child;u=u.firstContext;t:for(;u!==null;){var E=u;u=l;for(var B=0;B<n.length;B++)if(E.context===n[B]){u.lanes|=a,E=u.alternate,E!==null&&(E.lanes|=a),Wl(u.return,a,t),s||(_=null);break t}u=E.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(r(341));_.lanes|=a,u=_.alternate,u!==null&&(u.lanes|=a),Wl(_,a,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,_=l.alternate,_!==null&&(_.lanes|=a),Wl(l.return,a,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function Cs(t,n,a,s){t=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=l.type;mi(l.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(l===we.current){if(_=l.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Vr):t=[Vr])}l=l.return}return t!==null&&mf(n,t,a,s),n.flags|=262144,t!==null}function Yl(t){for(t=t.firstContext;t!==null;){if(!mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){Rs=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Fn(t){return Qm(Rs,t)}function Zl(t,n){return Rs===null&&ws(t),Qm(t,n)}function Qm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(r(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var sS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},rS=o.unstable_scheduleCallback,oS=o.unstable_NormalPriority,En={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new sS,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&rS(oS,function(){t.controller.abort()})}function Jm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Oo=null;function lS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var zo=null,_f=0,Ds=0,vr=null;function cS(t,n){if(zo===null){var a=zo=[];_f=0,Ds=Lh(),vr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return _f++,n.then($m,$m),n}function $m(){if(--_f===0&&(Oo=null,zo!==null)){vr!==null&&(vr.status="fulfilled");var t=zo;zo=null,Ds=0,vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function uS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var t0=Y.S;Y.S=function(t,n){if(qg=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cS(t,n),Oo!==null)for(var a=Pr;a!==null;)Jm(a,Oo),a=a.next;if(a=t.types,a!==null){for(var s=Pr;s!==null;)Jm(s,a),s=s.next;if(Ds!==0){s=Oo,s===null&&(s=Oo=[]);for(var l=0;l<a.length;l++){var u=a[l];s.indexOf(u)===-1&&s.push(u)}}}t0!==null&&t0(t,n)};var Ns=Wt(null);function vf(){var t=Ns.current;return t!==null?t:an.pooledCache}function Kl(t,n){n===null?re(Ns,Ns.current):re(Ns,n.pool)}function e0(){var t=vf();return t===null?null:{parent:En._currentValue,pool:t}}var xr=Error(r(460)),xf=Error(r(474)),Ql=Error(r(542)),Jl={then:function(){}};function n0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function i0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,s0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=an,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,s0(t),t}throw Ls=n,xr}}function Us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ls=a,xr):a}}var Ls=null;function a0(){if(Ls===null)throw Error(r(459));var t=Ls;return Ls=null,t}function s0(t){if(t===xr||t===Ql)throw Error(r(483))}var yr=null,Po=0;function $l(t){var n=Po;return Po+=1,yr===null&&(yr=[]),i0(yr,t,n)}function ja(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tc(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function r0(t){function n(K,k){if(t){var nt=K.deletions;nt===null?(K.deletions=[k],K.flags|=16):nt.push(k)}}function a(K,k){if(!t)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function s(K){for(var k=new Map;K!==null;)K.key===null?k.set(K.index,K):k.set(K.key,K),K=K.sibling;return k}function l(K,k){return K=xa(K,k),K.index=0,K.sibling=null,K}function u(K,k,nt){return K.index=nt,t?(nt=K.alternate,nt!==null?(nt=nt.index,nt<k?(K.flags|=2,k):nt):(K.flags|=134217730,k)):(K.flags|=1048576,k)}function _(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function E(K,k,nt,yt){return k===null||k.tag!==6?(k=cf(nt,K.mode,yt),k.return=K,k):(k=l(k,nt),k.return=K,k)}function B(K,k,nt,yt){var Qt=nt.type;return Qt===V?(K=ct(K,k,nt.props.children,yt,nt.key),ja(K,nt),K):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===_t&&Us(Qt)===k.type)?(k=l(k,nt.props),ja(k,nt),k.return=K,k):(k=kl(nt.type,nt.key,nt.props,null,K.mode,yt),ja(k,nt),k.return=K,k)}function J(K,k,nt,yt){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=uf(nt,K.mode,yt),k.return=K,k):(k=l(k,nt.children||[]),k.return=K,k)}function ct(K,k,nt,yt,Qt){return k===null||k.tag!==7?(k=bs(nt,K.mode,yt,Qt),k.return=K,k):(k=l(k,nt),k.return=K,k)}function St(K,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=cf(""+k,K.mode,nt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case N:return nt=kl(k.type,k.key,k.props,null,K.mode,nt),ja(nt,k),nt.return=K,nt;case w:return k=uf(k,K.mode,nt),k.return=K,k;case _t:return k=Us(k),St(K,k,nt)}if(Ct(k)||at(k))return k=bs(k,K.mode,nt,null),k.return=K,k;if(typeof k.then=="function")return St(K,$l(k),nt);if(k.$$typeof===lt)return St(K,Zl(K,k),nt);tc(K,k)}return null}function q(K,k,nt,yt){var Qt=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Qt!==null?null:E(K,k,""+nt,yt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case N:return nt.key===Qt?B(K,k,nt,yt):null;case w:return nt.key===Qt?J(K,k,nt,yt):null;case _t:return nt=Us(nt),q(K,k,nt,yt)}if(Ct(nt)||at(nt))return Qt!==null?null:ct(K,k,nt,yt,null);if(typeof nt.then=="function")return q(K,k,$l(nt),yt);if(nt.$$typeof===lt)return q(K,k,Zl(K,nt),yt);tc(K,nt)}return null}function rt(K,k,nt,yt,Qt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return K=K.get(nt)||null,E(k,K,""+yt,Qt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case N:return K=K.get(yt.key===null?nt:yt.key)||null,B(k,K,yt,Qt);case w:return K=K.get(yt.key===null?nt:yt.key)||null,J(k,K,yt,Qt);case _t:return yt=Us(yt),rt(K,k,nt,yt,Qt)}if(Ct(yt)||at(yt))return K=K.get(nt)||null,ct(k,K,yt,Qt,null);if(typeof yt.then=="function")return rt(K,k,nt,$l(yt),Qt);if(yt.$$typeof===lt)return rt(K,k,nt,Zl(k,yt),Qt);tc(k,yt)}return null}function Gt(K,k,nt,yt){for(var Qt=null,Oe=null,oe=k,pe=k=0,An=null;oe!==null&&pe<nt.length;pe++){oe.index>pe?(An=oe,oe=null):An=oe.sibling;var Ie=q(K,oe,nt[pe],yt);if(Ie===null){oe===null&&(oe=An);break}t&&oe&&Ie.alternate===null&&n(K,oe),k=u(Ie,k,pe),Oe===null?Qt=Ie:Oe.sibling=Ie,Oe=Ie,oe=An}if(pe===nt.length)return a(K,oe),Re&&ya(K,pe),Qt;if(oe===null){for(;pe<nt.length;pe++)oe=St(K,nt[pe],yt),oe!==null&&(k=u(oe,k,pe),Oe===null?Qt=oe:Oe.sibling=oe,Oe=oe);return Re&&ya(K,pe),Qt}for(oe=s(oe);pe<nt.length;pe++)An=rt(oe,K,pe,nt[pe],yt),An!==null&&(t&&(Ie=An.alternate,Ie!==null&&oe.delete(Ie.key===null?pe:Ie.key)),k=u(An,k,pe),Oe===null?Qt=An:Oe.sibling=An,Oe=An);return t&&oe.forEach(function(us){return n(K,us)}),Re&&ya(K,pe),Qt}function ie(K,k,nt,yt){if(nt==null)throw Error(r(151));for(var Qt=null,Oe=null,oe=k,pe=k=0,An=null,Ie=nt.next();oe!==null&&!Ie.done;pe++,Ie=nt.next()){oe.index>pe?(An=oe,oe=null):An=oe.sibling;var us=q(K,oe,Ie.value,yt);if(us===null){oe===null&&(oe=An);break}t&&oe&&us.alternate===null&&n(K,oe),k=u(us,k,pe),Oe===null?Qt=us:Oe.sibling=us,Oe=us,oe=An}if(Ie.done)return a(K,oe),Re&&ya(K,pe),Qt;if(oe===null){for(;!Ie.done;pe++,Ie=nt.next())Ie=St(K,Ie.value,yt),Ie!==null&&(k=u(Ie,k,pe),Oe===null?Qt=Ie:Oe.sibling=Ie,Oe=Ie);return Re&&ya(K,pe),Qt}for(oe=s(oe);!Ie.done;pe++,Ie=nt.next())Ie=rt(oe,K,pe,Ie.value,yt),Ie!==null&&(t&&(An=Ie.alternate,An!==null&&oe.delete(An.key===null?pe:An.key)),k=u(Ie,k,pe),Oe===null?Qt=Ie:Oe.sibling=Ie,Oe=Ie);return t&&oe.forEach(function(X1){return n(K,X1)}),Re&&ya(K,pe),Qt}function Se(K,k,nt,yt){if(typeof nt=="object"&&nt!==null&&nt.type===V&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case N:t:{for(var Qt=nt.key;k!==null;){if(k.key===Qt){if(Qt=nt.type,Qt===V){if(k.tag===7){a(K,k.sibling),yt=l(k,nt.props.children),ja(yt,nt),yt.return=K,K=yt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===_t&&Us(Qt)===k.type){a(K,k.sibling),yt=l(k,nt.props),ja(yt,nt),yt.return=K,K=yt;break t}a(K,k);break}else n(K,k);k=k.sibling}nt.type===V?(yt=bs(nt.props.children,K.mode,yt,nt.key),ja(yt,nt),yt.return=K,K=yt):(yt=kl(nt.type,nt.key,nt.props,null,K.mode,yt),ja(yt,nt),yt.return=K,K=yt)}return _(K);case w:t:{for(Qt=nt.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(K,k.sibling),yt=l(k,nt.children||[]),yt.return=K,K=yt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}yt=uf(nt,K.mode,yt),yt.return=K,K=yt}return _(K);case _t:return nt=Us(nt),Se(K,k,nt,yt)}if(Ct(nt))return Gt(K,k,nt,yt);if(at(nt)){if(Qt=at(nt),typeof Qt!="function")throw Error(r(150));return nt=Qt.call(nt),ie(K,k,nt,yt)}if(typeof nt.then=="function")return Se(K,k,$l(nt),yt);if(nt.$$typeof===lt)return Se(K,k,Zl(K,nt),yt);tc(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(K,k.sibling),yt=l(k,nt),yt.return=K,K=yt):(a(K,k),yt=cf(nt,K.mode,yt),yt.return=K,K=yt),_(K)):a(K,k)}return function(K,k,nt,yt){try{Po=0;var Qt=Se(K,k,nt,yt);return yr=null,Qt}catch(oe){if(oe===xr||oe===Ql)throw oe;var Oe=si(29,oe,null,K.mode);return Oe.lanes=yt,Oe.return=K,Oe}finally{}}}var Os=r0(!0),o0=r0(!1),qa=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(je&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Vl(t),Xm(t,null,a),n}return Gl(t,s,n,a),Vl(t)}function Io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$(t,a)}}function Mf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=_:u=u.next=_,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ef=!1;function Bo(){if(Ef){var t=vr;if(t!==null)throw t}}function Fo(t,n,a,s){Ef=!1;var l=t.updateQueue;qa=!1;var u=l.firstBaseUpdate,_=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var B=E,J=B.next;B.next=null,_===null?u=J:_.next=J,_=B;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,E=ct.lastBaseUpdate,E!==_&&(E===null?ct.firstBaseUpdate=J:E.next=J,ct.lastBaseUpdate=B))}if(u!==null){var St=l.baseState;_=0,ct=J=B=null,E=u;do{var q=E.lane&-536870913,rt=q!==E.lane;if(rt?(Le&q)===q:(s&q)===q){q!==0&&q===Ds&&(Ef=!0),ct!==null&&(ct=ct.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Gt=t,ie=E;q=n;var Se=a;switch(ie.tag){case 1:if(Gt=ie.payload,typeof Gt=="function"){St=Gt.call(Se,St,q);break t}St=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ie.payload,q=typeof Gt=="function"?Gt.call(Se,St,q):Gt,q==null)break t;St=z({},St,q);break t;case 2:qa=!0}}q=E.callback,q!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=l.callbacks,rt===null?l.callbacks=[q]:rt.push(q))}else rt={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ct===null?(J=ct=rt,B=St):ct=ct.next=rt,_|=q;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,l.lastBaseUpdate=rt,l.shared.pending=null}}while(!0);ct===null&&(B=St),l.baseState=B,l.firstBaseUpdate=J,l.lastBaseUpdate=ct,u===null&&(l.shared.lanes=0),es|=_,t.lanes=_,t.memoizedState=St}}function l0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function c0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)l0(a[t],n)}var Za=Wt(null),ec=Wt(0);function u0(t,n){t=Ra,re(ec,t),re(Za,n),Ra=t|n.baseLanes}function Tf(){re(ec,Ra),re(Za,Za.current)}function bf(){Ra=ec.current,Pt(Za),Pt(ec)}var Hn=Wt(null),qn=null;function Ka(t){var n=t.alternate;re(Gn,Gn.current&1),re(Hn,t),qn===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(qn=t)}function Af(t){re(Gn,Gn.current),re(Hn,t),qn===null&&(qn=t)}function f0(t){t.tag===22?(re(Gn,Gn.current),re(Hn,t),qn===null&&(qn=t)):Qa()}function Qa(){re(Gn,Gn.current),re(Hn,Hn.current)}function gi(t){Pt(Hn),qn===t&&(qn=null),Pt(Gn)}var Gn=Wt(0);function Ho(t,n){re(Hn,Hn.current),re(Gn,n)}function Rf(t){Pt(Gn),Pt(Hn),qn===t&&(qn=null)}function nc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zh(a)||Kh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,ye=null,en=null,Tn=null,ic=!1,Sr=!1,zs=!1,ac=0,Go=0,Mr=null,fS=0;function gn(){throw Error(r(321))}function Cf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!mi(t[a],n[a]))return!1;return!0}function wf(t,n,a,s,l,u){return Ea=u,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Y.H=t===null||t.memoizedState===null?Y0:Z0,zs=!1,u=a(s,l),zs=!1,Sr&&(u=d0(n,a,s,l)),h0(t),u}function h0(t){Y.H=fc;var n=en!==null&&en.next!==null;if(Ea=0,Tn=en=ye=null,ic=!1,Go=0,Mr=null,n)throw Error(r(300));t===null||bn||(t=t.dependencies,t!==null&&Yl(t)&&(bn=!0))}function d0(t,n,a,s){ye=t;var l=0;do{if(Sr&&(Mr=null),Go=0,Sr=!1,25<=l)throw Error(r(301));if(l+=1,Tn=en=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Y.H=xS,u=n(a,s)}while(Sr);return u}function hS(){var t=Y.H,n=t.useState()[0];return n=typeof n.then=="function"?Vo(n):n,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(ye.flags|=1024),n}function Df(){var t=ac!==0;return ac=0,t}function Nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uf(t){if(ic){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ic=!1}Ea=0,Tn=en=ye=null,Sr=!1,Go=ac=0,Mr=null}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?ye.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function xn(){if(en===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var n=Tn===null?ye.memoizedState:Tn.next;if(n!==null)Tn=n,en=t;else{if(t===null)throw ye.alternate===null?Error(r(467)):Error(r(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Tn===null?ye.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(t){var n=Go;return Go+=1,Mr===null&&(Mr=[]),t=i0(Mr,t,n),n=ye,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,Y.H=n===null||n.memoizedState===null?Y0:Z0),t}function rc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vo(t);if(t.$$typeof===ft)return;if(t.$$typeof===lt)return Fn(t)}throw Error(r(438,String(t)))}function Lf(t){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ye.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sc(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=kt;return n.index++,a}function Ta(t,n){return typeof n=="function"?n(t):n}function oc(t){var n=xn();return Of(n,en,t)}function Of(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,u=s.pending;if(u!==null){if(l!==null){var _=l.next;l.next=u.next,u.next=_}n.baseQueue=l=u,s.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{n=l.next;var E=_=null,B=null,J=n,ct=!1;do{var St=J.lane&-536870913;if(St!==J.lane?(Le&St)===St:(Ea&St)===St){var q=J.revertLane;if(q===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),St===Ds&&(ct=!0);else if((Ea&q)===q){J=J.next,q===Ds&&(ct=!0);continue}else St={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=St,_=u):B=B.next=St,ye.lanes|=q,es|=q;St=J.action,zs&&a(u,St),u=J.hasEagerState?J.eagerState:a(u,St)}else q={lane:St,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=q,_=u):B=B.next=q,ye.lanes|=St,es|=St;J=J.next}while(J!==null&&J!==n);if(B===null?_=u:B.next=E,!mi(u,t.memoizedState)&&(bn=!0,ct&&(a=vr,a!==null)))throw a;t.memoizedState=u,t.baseState=_,t.baseQueue=B,s.lastRenderedState=u}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function zf(t){var n=xn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var _=l=l.next;do u=t(u,_.action),_=_.next;while(_!==l);mi(u,n.memoizedState)||(bn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function p0(t,n,a){var s=ye,l=xn(),u=Re;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!mi((en||l).memoizedState,a);if(_&&(l.memoizedState=a,bn=!0),l=l.queue,Bf(_0.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||_||Tn!==null&&(Tn.memoizedState.tag&1)!==0,Er(t?9:8,{destroy:void 0},g0.bind(null,s,l,a,n),null),t){if(s.flags|=2048,an===null)throw Error(r(349));u||(Ea&127)!==0||m0(s,n,a)}return a}function m0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=sc(),ye.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function g0(t,n,a,s){n.value=a,n.getSnapshot=s,v0(n)&&x0(t)}function _0(t,n,a){return a(function(){v0(n)&&x0(t)})}function v0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!mi(t,a)}catch{return!0}}function x0(t){var n=Ts(t,2);n!==null&&ci(n,t,2)}function Pf(t){var n=Qn();if(typeof t=="function"){var a=t;if(t=a(),zs){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},n}function y0(t,n,a,s){return t.baseState=a,Of(t,en,typeof s=="function"?s:Ta)}function dS(t,n,a,s,l){if(uc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){u.listeners.push(_)}};Y.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,S0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function S0(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var u=Y.T,_={};_.types=u!==null?u.types:null,Y.T=_;try{var E=a(l,s),B=Y.S;B!==null&&B(_,E),M0(t,n,E)}catch(J){If(t,n,J)}finally{u!==null&&_.types!==null&&(u.types=_.types),Y.T=u}}else try{u=a(l,s),M0(t,n,u)}catch(J){If(t,n,J)}}function M0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){E0(t,n,s)},function(s){return If(t,n,s)}):E0(t,n,a)}function E0(t,n,a){n.status="fulfilled",n.value=a,T0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,S0(t,a)))}function If(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,T0(n),n=n.next;while(n!==s)}t.action=null}function T0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function b0(t,n){return n}function A0(t,n){if(Re){var a=an.formState;if(a!==null){t:{var s=ye;if(Re){if(on){e:{for(var l=on,u=Ni;l.nodeType!==8;){if(!u){l=null;break e}if(l=Li(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){on=Li(l.nextSibling),s=l.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=Qn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:n},a.queue=s,a=j0.bind(null,ye,s),s.dispatch=a,s=Pf(!1),u=kf.bind(null,ye,!1,s.queue),s=Qn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=dS.bind(null,ye,l,u,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function R0(t){var n=xn();return C0(n,en,t)}function C0(t,n,a){if(n=Of(t,n,b0)[0],t=oc(Ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Vo(n)}catch(_){throw _===xr?Ql:_}else s=n;n=xn();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,Er(9,{destroy:void 0},pS.bind(null,l,a),null)),[s,u,t]}function pS(t,n){t.action=n}function w0(t){var n=xn(),a=en;if(a!==null)return C0(n,a,t);xn(),n=n.memoizedState,a=xn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Er(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ye.updateQueue,n===null&&(n=sc(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function D0(){return xn().memoizedState}function lc(t,n,a,s){var l=Qn();ye.flags|=t,l.memoizedState=Er(1|n,{destroy:void 0},a,s===void 0?null:s)}function cc(t,n,a,s){var l=xn();s=s===void 0?null:s;var u=l.memoizedState.inst;en!==null&&s!==null&&Cf(s,en.memoizedState.deps)?l.memoizedState=Er(n,u,a,s):(ye.flags|=t,l.memoizedState=Er(1|n,u,a,s))}function N0(t,n){lc(8390656,8,t,n)}function Bf(t,n){cc(2048,8,t,n)}function mS(t){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=sc(),ye.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function U0(t){var n=xn().memoizedState;return mS({ref:n,nextImpl:t}),function(){if((je&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function L0(t,n){return cc(4,2,t,n)}function O0(t,n){return cc(4,4,t,n)}function z0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function P0(t,n,a){a=a!=null?a.concat([t]):null,cc(4,4,z0.bind(null,n,t),a)}function Ff(){}function I0(t,n){var a=xn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Cf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function B0(t,n){var a=xn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Cf(n,s[1]))return s[0];if(s=t(),zs){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s}function Hf(t,n,a){return a===void 0||(Ea&1073741824)!==0&&(Le&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Yg(),ye.lanes|=t,es|=t,a)}function F0(t,n,a,s){return mi(a,n)?a:Za.current!==null?(t=Hf(t,a,s),mi(t,n)||(bn=!0),t):(Ea&106)===0||(Ea&1073741824)!==0&&(Le&261930)===0?(bn=!0,t.memoizedState=a):(t=Yg(),ye.lanes|=t,es|=t,n)}function H0(t,n,a,s,l){var u=zt.p;zt.p=u!==0&&8>u?u:8;var _=Y.T,E={};E.types=_!==null?_.types:null,Y.T=E,kf(t,!1,n,a);try{var B=l(),J=Y.S;if(J!==null&&J(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ct=uS(B,s);ko(t,n,ct,yi(t))}else ko(t,n,s,yi(t))}catch(St){ko(t,n,{then:function(){},status:"rejected",reason:St},yi())}finally{zt.p=u,_!==null&&E.types!==null&&(_.types=E.types),Y.T=_}}function gS(){}function Gf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=G0(t).queue;H0(t,l,n,F,a===null?gS:function(){return V0(t),a(s)})}function G0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:F},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function V0(t){var n=G0(t);n.next===null&&(n=t.alternate.memoizedState),ko(t,n.next.queue,{},yi())}function Vf(){return Fn(Vr)}function k0(){return xn().memoizedState}function X0(){return xn().memoizedState}function _S(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=yi();t=Wa(a);var s=Ya(n,t,a);s!==null&&(ci(s,n,a),Io(s,n,a)),n={cache:gf()},t.payload=n;return}n=n.return}}function vS(t,n,a){var s=yi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uc(t)?q0(n,a):(a=of(t,n,a,s),a!==null&&(ci(a,t,s),W0(a,n,s)))}function j0(t,n,a){var s=yi();ko(t,n,a,s)}function ko(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uc(t))q0(n,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var _=n.lastRenderedState,E=u(_,a);if(l.hasEagerState=!0,l.eagerState=E,mi(E,_))return Gl(t,n,l,0),an===null&&Hl(),!1}catch{}finally{}if(a=of(t,n,l,s),a!==null)return ci(a,t,s),W0(a,n,s),!0}return!1}function kf(t,n,a,s){if(s={lane:2,revertLane:Lh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},uc(t)){if(n)throw Error(r(479))}else n=of(t,a,s,2),n!==null&&ci(n,t,2)}function uc(t){var n=t.alternate;return t===ye||n!==null&&n===ye}function q0(t,n){Sr=ic=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function W0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$(t,a)}}var fc={readContext:Fn,use:rc,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn,useEffectEvent:gn},Y0={readContext:Fn,use:rc,useCallback:function(t,n){return Qn().memoizedState=[t,n===void 0?null:n],t},useContext:Fn,useEffect:N0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,lc(4194308,4,z0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return lc(4194308,4,t,n)},useInsertionEffect:function(t,n){lc(4,2,t,n)},useMemo:function(t,n){var a=Qn();n=n===void 0?null:n;var s=t();if(zs){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Qn();if(a!==void 0){var l=a(n);if(zs){pn(!0);try{a(n)}finally{pn(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=vS.bind(null,ye,t),[s.memoizedState,t]},useRef:function(t){var n=Qn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pf(t);var n=t.queue,a=j0.bind(null,ye,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(t,n){var a=Qn();return Hf(a,t,n)},useTransition:function(){var t=Pf(!1);return t=H0.bind(null,ye,t.queue,!0,!1),Qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ye,l=Qn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),an===null)throw Error(r(349));(Le&127)!==0||m0(s,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,N0(_0.bind(null,s,u,t),[t]),s.flags|=2048,Er(9,{destroy:void 0},g0.bind(null,s,u,a,n),null),a},useId:function(){var t=Qn(),n=an.identifierPrefix;if(Re){var a=$i,s=Ji;a=(s&~(1<<32-Sn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ac++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vf,useFormState:A0,useActionState:A0,useOptimistic:function(t){var n=Qn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=kf.bind(null,ye,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lf,useCacheRefresh:function(){return Qn().memoizedState=_S.bind(null,ye)},useEffectEvent:function(t){var n=Qn(),a={impl:t};return n.memoizedState=a,function(){if((je&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Z0={readContext:Fn,use:rc,useCallback:I0,useContext:Fn,useEffect:Bf,useImperativeHandle:P0,useInsertionEffect:L0,useLayoutEffect:O0,useMemo:B0,useReducer:oc,useRef:D0,useState:function(){return oc(Ta)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=xn();return F0(a,en.memoizedState,t,n)},useTransition:function(){var t=oc(Ta)[0],n=xn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:p0,useId:k0,useHostTransitionStatus:Vf,useFormState:R0,useActionState:R0,useOptimistic:function(t,n){var a=xn();return y0(a,en,t,n)},useMemoCache:Lf,useCacheRefresh:X0,useEffectEvent:U0},xS={readContext:Fn,use:rc,useCallback:I0,useContext:Fn,useEffect:Bf,useImperativeHandle:P0,useInsertionEffect:L0,useLayoutEffect:O0,useMemo:B0,useReducer:zf,useRef:D0,useState:function(){return zf(Ta)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=xn();return en===null?Hf(a,t,n):F0(a,en.memoizedState,t,n)},useTransition:function(){var t=zf(Ta)[0],n=xn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:p0,useId:k0,useHostTransitionStatus:Vf,useFormState:w0,useActionState:w0,useOptimistic:function(t,n){var a=xn();return en!==null?y0(a,en,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lf,useCacheRefresh:X0,useEffectEvent:U0};function Xf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=yi(),l=Wa(s);l.payload=n,a!=null&&(l.callback=a),n=Ya(t,l,s),n!==null&&(ci(n,t,s),Io(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=yi(),l=Wa(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ya(t,l,s),n!==null&&(ci(n,t,s),Io(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=yi(),s=Wa(a);s.tag=2,n!=null&&(s.callback=n),n=Ya(t,s,a),n!==null&&(ci(n,t,a),Io(n,t,a))}};function K0(t,n,a,s,l,u,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,_):n.prototype&&n.prototype.isPureReactComponent?!wo(a,s)||!wo(l,u):!0}function Q0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&jf.enqueueReplaceState(n,n.state,null)}function Ps(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function J0(t){Fl(t)}function $0(t){console.error(t)}function tg(t){Fl(t)}function hc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function eg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function qf(t,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){hc(t,n)},a}function ng(t){return t=Wa(t),t.tag=3,t}function ig(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;t.payload=function(){return l(u)},t.callback=function(){eg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){eg(n,a,s),typeof l!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function yS(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Cs(n,a,l,!0),a=Hn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return qn===null?Lc():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===Jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Dh(t,s,l)),!1;case 22:return a.flags|=65536,s===Jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Dh(t,s,l)),!1}throw Error(r(435,a.tag))}return Dh(t,s,l),Lc(),!1}if(Re)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==hf&&(t=Error(r(422),{cause:s}),Uo(Ci(t,a)))):(s!==hf&&(n=Error(r(423),{cause:s}),Uo(Ci(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=Ci(s,a),l=qf(t.stateNode,s,l),Mf(t,l),_n!==4&&(_n=2)),!1;var u=Error(r(520),{cause:s});if(u=Ci(u,a),Qo===null?Qo=[u]:Qo.push(u),_n!==4&&(_n=2),n===null)return!0;s=Ci(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=qf(a.stateNode,s,t),Mf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ns===null||!ns.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=ng(l),ig(l,t,a,s),Mf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Wf=Error(r(461)),bn=!1;function Dn(t,n,a,s){n.child=t===null?o0(n,null,a,s):Os(n,t.child,a,s)}function ag(t,n,a,s,l){a=a.render;var u=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return ws(n),s=wf(t,n,a,_,u,l),E=Df(),t!==null&&!bn?(Nf(t,n,l),ba(t,n,l)):(Re&&E&&jl(n),n.flags|=1,Dn(t,n,s,l),n.child)}function sg(t,n,a,s,l){if(t===null){var u=a.type;return typeof u=="function"&&!lf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,rg(t,n,u,s,l)):(t=kl(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!eh(t,l)){var _=u.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(_,s)&&t.ref===n.ref)return ba(t,n,l)}return n.flags|=1,t=xa(u,s),t.ref=n.ref,t.return=n,n.child=t}function rg(t,n,a,s,l){if(t!==null){var u=t.memoizedProps;if(wo(u,s)&&t.ref===n.ref)if(bn=!1,n.pendingProps=s=u,eh(t,l))(t.flags&131072)!==0&&(bn=!0);else return n.lanes=t.lanes,ba(t,n,l)}return Yf(t,n,a,s,l)}function og(t,n,a,s){var l=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~u}else s=0,n.child=null;return lg(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kl(n,u!==null?u.cachePool:null),u!==null?u0(n,u):Tf(),f0(n);else return s=n.lanes=536870912,lg(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(Kl(n,u.cachePool),u0(n,u),Qa(),n.memoizedState=null):(t!==null&&Kl(n,null),Tf(),Qa());return Dn(t,n,l,a),n.child}function Xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lg(t,n,a,s,l){var u=vf();return u=u===null?null:{parent:En._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Kl(n,null),Tf(),f0(n),t!==null&&Cs(t,n,s,!0),n.childLanes=l,null}function dc(t,n){return n=pc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function cg(t,n,a){return Os(n,t.child,null,a),t=dc(n,n.pendingProps),t.flags|=2,gi(n),n.memoizedState=null,t}function SS(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Re){if(s.mode==="hidden")return t=dc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Xo(null,t);if(Af(n),(t=on)?(t=z_(t,Ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,Ln=n,on=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return dc(n,s)}var u=t.memoizedState;if(u!==null){var _=u.dehydrated;if(Af(n),l)if(n.flags&256)n.flags&=-257,n=cg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(bn||Cs(t,n,a,!1),l=(a&t.childLanes)!==0,bn||l){if(Za.current===null){if(s=an,s!==null&&(_=dt(s,a),_!==0&&_!==u.retryLane))throw u.retryLane=_,Ts(t,_),ci(s,t,_),Wf;Lc()}n=cg(t,n,a)}else t=u.treeContext,on=Li(_.nextSibling),Ln=n,Re=!0,Va=null,Ni=!1,t!==null&&Zm(n,t),n=dc(n,s),n.flags|=134221824;return n}return t=xa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Tr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yf(t,n,a,s,l){return ws(n),a=wf(t,n,a,s,void 0,l),s=Df(),t!==null&&!bn?(Nf(t,n,l),ba(t,n,l)):(Re&&s&&jl(n),n.flags|=1,Dn(t,n,a,l),n.child)}function ug(t,n,a,s,l,u){return ws(n),n.updateQueue=null,a=d0(n,s,a,l),h0(t),s=Df(),t!==null&&!bn?(Nf(t,n,u),ba(t,n,u)):(Re&&s&&jl(n),n.flags|=1,Dn(t,n,a,u),n.child)}function fg(t,n,a,s,l){if(ws(n),n.stateNode===null){var u=pr,_=a.contextType;typeof _=="object"&&_!==null&&(u=Fn(_)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},yf(n),_=a.contextType,u.context=typeof _=="object"&&_!==null?Fn(_):pr,u.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Xf(n,a,_,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(_=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),_!==u.state&&jf.enqueueReplaceState(u,u.state,null),Fo(n,s,u,l),Bo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var E=n.memoizedProps,B=Ps(a,E);u.props=B;var J=u.context,ct=a.contextType;_=pr,typeof ct=="object"&&ct!==null&&(_=Fn(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof u.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ct||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(E||J!==_)&&Q0(n,u,s,_),qa=!1;var q=n.memoizedState;u.state=q,Fo(n,s,u,l),Bo(),J=n.memoizedState,E||q!==J||qa?(typeof St=="function"&&(Xf(n,a,St,s),J=n.memoizedState),(B=qa||K0(n,a,B,s,q,J,_))?(ct||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),u.props=s,u.state=J,u.context=_,s=B):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,Sf(t,n),_=n.memoizedProps,ct=Ps(a,_),u.props=ct,St=n.pendingProps,q=u.context,J=a.contextType,B=pr,typeof J=="object"&&J!==null&&(B=Fn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_!==St||q!==B)&&Q0(n,u,s,B),qa=!1,q=n.memoizedState,u.state=q,Fo(n,s,u,l),Bo();var rt=n.memoizedState;_!==St||q!==rt||qa||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof E=="function"&&(Xf(n,a,E,s),rt=n.memoizedState),(ct=qa||K0(n,a,ct,s,q,rt,B)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(J||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,rt,B),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,rt,B)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),u.props=s,u.state=rt,u.context=B,s=ct):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,Tr(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Os(n,t.child,null,l),n.child=Os(n,null,a,l)):Dn(t,n,a,l),n.memoizedState=u.state,t=n.child):t=ba(t,n,l),t}function hg(t,n,a,s){return As(),n.flags|=256,Dn(t,n,a,s),n.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(t){return{baseLanes:t,cachePool:e0()}}function Qf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=xi),t}function dg(t,n,a){var s=n.pendingProps,l=!1,u=(n.flags&128)!==0,_;if((_=u)||(_=t!==null&&t.memoizedState===null?!1:(Gn.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(l?Ka(n):Qa(),(t=on)?(t=z_(t,Ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,Ln=n,on=null)):t=null,t===null)throw ka(n);return Kh(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,l?(Qa(),l=n.mode,u=pc({mode:"hidden",children:u},l),s=bs(s,l,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=Kf(a),s.childLanes=Qf(t,_,a),n.memoizedState=Zf,Xo(null,s)):(Ka(n),Jf(n,u))}var E=t.memoizedState;if(E!==null){var B=E.dehydrated;if(B!==null)return MS(t,n,u,_,s,B,E,a)}return l?(Qa(),l=s.fallback,u=n.mode,E=t.child,B=E.sibling,s=xa(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,B!==null?l=xa(B,l):(l=bs(l,u,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Xo(null,s),s=n.child,l=t.child.memoizedState,l===null?l=Kf(a):(u=l.cachePool,u!==null?(E=En._currentValue,u=u.parent!==E?{parent:E,pool:E}:u):u=e0(),l={baseLanes:l.baseLanes|a,cachePool:u}),s.memoizedState=l,s.childLanes=Qf(t,_,a),n.memoizedState=Zf,Xo(t.child,s)):(Ka(n),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Jf(t,n){return n=pc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pc(t,n){return t=si(22,t,null,n),t.lanes=0,t}function mc(t,n,a){return Os(n,t.child,null,a),t=Jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function MS(t,n,a,s,l,u,_,E){if(a)return n.flags&256?(Ka(n),n.flags&=-257,mc(t,n,E)):n.memoizedState!==null?(Qa(),n.child=t.child,n.flags|=128,null):(Qa(),u=l.fallback,_=n.mode,l=pc({mode:"visible",children:l.children},_),u=bs(u,_,E,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Os(n,t.child,null,E),l=n.child,l.memoizedState=Kf(E),l.childLanes=Qf(t,s,E),n.memoizedState=Zf,Xo(null,l));if(Ka(n),Kh(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Uo({value:l,source:null,stack:null})),mc(t,n,E)}if(bn||Cs(t,n,E,!1),s=(E&t.childLanes)!==0,bn||s){if(Za.current!==null)return mc(t,n,E);if(s=an,s!==null&&(l=dt(s,E),l!==0&&l!==_.retryLane))throw _.retryLane=l,Ts(t,l),ci(s,t,l),Wf;return Zh(u)||Lc(),mc(t,n,E)}return Zh(u)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,on=Li(u.nextSibling),Ln=n,Re=!0,Va=null,Ni=!1,t!==null&&Zm(n,t),n=Jf(n,l.children),n.flags|=134221824,n)}function pg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Wl(t.return,n,a)}function mg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&nc(a)===null&&(n=t),t=t.sibling}return n}function gc(t,n,a,s,l,u){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:u}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=l,_.treeForkCount=u)}function $f(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function th(t,n,a){var s=n.pendingProps,l=s.revealOrder,u=s.tail;s=s.children;var _=Gn.current;if(n.flags&128)return Ho(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Ho(n,_),l==="backwards"&&t!==null?($f(t),Dn(t,n,s,a),$f(t)):Dn(t,n,s,a),s=Re?No:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,a,n);else if(t.tag===19)pg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=mg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,$f(n)),gc(n,!0,l,null,u,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&nc(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}gc(n,!0,a,null,u,s);break;case"together":gc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=mg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),gc(n,!1,l,a,u,s)}return n.child}function gg(t,n,a){var s=n.pendingProps;return Xa(n,n.type,s.value),Dn(t,n,s.children,a),n.child}function ba(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),es|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Cs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=xa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function eh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function ES(t,n,a){switch(n.tag){case 3:P(n,n.stateNode.containerInfo),Xa(n,En,t.memoizedState.cache),As();break;case 27:case 5:st(n);break;case 4:P(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Af(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ka(n),n.flags|=128,null;s=Cs(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?dg(t,n,a):(Ka(n),t=ba(t,n,a),t!==null?t.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return th(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Cs(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return th(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ho(n,Gn.current),s)break;return null;case 22:return n.lanes=0,og(t,n,a,n.pendingProps);case 24:Xa(n,En,t.memoizedState.cache)}return ba(t,n,a)}function _g(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)bn=!0;else{if(!eh(t,a)&&(n.flags&128)===0)return bn=!1,ES(t,n,a);bn=(t.flags&131072)!==0}else bn=!1,Re&&(n.flags&1048576)!==0&&Ym(n,No,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Us(n.elementType),n.type=t,typeof t=="function")lf(t)?(s=Ps(t,s),n.tag=1,n=fg(null,n,t,s,a)):(n.tag=0,n=Yf(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===j){n.tag=11,n=ag(null,n,t,s,a);break t}else if(l===Et){n.tag=14,n=sg(null,n,t,s,a);break t}else if(l===lt){n.tag=10,n.type=t,n=gg(null,n,a);break t}}throw n=Bt(t)||t,Error(r(306,n,""))}}return n;case 0:return Yf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Ps(s,n.pendingProps),fg(t,n,s,l,a);case 3:t:{if(P(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;l=u.element,Sf(t,n),Fo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Xa(n,En,s),s!==u.cache&&mf(n,[En],a,!0),Bo(),s=_.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=hg(t,n,s,a);break t}else if(s!==l){l=Ci(Error(r(424)),n),Uo(l),n=hg(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Li(t.firstChild),Ln=n,Re=!0,Va=null,Ni=!0,a=o0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(As(),s===l){n=ba(t,n,a);break t}Dn(t,n,s,a)}n=n.child}return n;case 26:return Tr(t,n),t===null?(a=V_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(n.stateNode=S_(n.type,n.pendingProps,Ye.current,n)):n.memoizedState=V_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&Re&&(s=n.stateNode=B_(n.type,n.pendingProps,Ye.current),Ln=n,Ni=!0,l=on,ss(n.type)?(Qh=l,on=Li(s.firstChild)):on=l),Dn(t,n,n.pendingProps.children,a),Tr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((l=s=on)&&(s=_1(s,n.type,n.pendingProps,Ni),s!==null?(n.stateNode=s,Ln=n,on=Li(s.firstChild),Ni=!1,l=!0):l=!1),l||ka(n)),st(n),l=n.type,u=n.pendingProps,_=t!==null?t.memoizedProps:null,s=u.children,Vh(l,u)?s=null:_!==null&&Vh(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=wf(t,n,hS,null,null,a),Vr._currentValue=l),Tr(t,n),Dn(t,n,s,a),n.child;case 6:return t===null&&Re&&((t=a=on)&&(a=v1(a,n.pendingProps,Ni),a!==null?(n.stateNode=a,Ln=n,on=null,t=!0):t=!1),t||ka(n)),null;case 13:return dg(t,n,a);case 4:return P(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Os(n,null,s,a):Dn(t,n,s,a),n.child;case 11:return ag(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Tr(t,n),Dn(t,n,s,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return gg(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,ws(n),l=Fn(l),s=s(l),n.flags|=1,Dn(t,n,s,a),n.child;case 14:return sg(t,n,n.type,n.pendingProps,a);case 15:return rg(t,n,n.type,n.pendingProps,a);case 19:return th(t,n,a);case 31:return SS(t,n,a);case 22:return og(t,n,a,n.pendingProps);case 24:return ws(n),s=Fn(En),t===null?(l=vf(),l===null&&(l=an,u=gf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:s,cache:l},yf(n),Xa(n,En,l)):((t.lanes&a)!==0&&(Sf(t,n),Fo(n,null,null,a),Bo()),l=t.memoizedState,u=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Xa(n,En,s)):(s=u.cache,Xa(n,En,s),s!==l.cache&&mf(n,[En],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Re&&jl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Tr(t,n),Dn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Aa(t){t.flags|=4}function nh(t,n,a,s,l){var u;if((u=(t.mode&32)!==0)&&(u=a===null?q_(n,s):q_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw Ls=Jl,xf}else t.flags&=-16777217}function vg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!W_(n))if(Jg())t.flags|=8192;else throw Ls=Jl,xf}function _c(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?tn():536870912,t.lanes|=n,wr|=n)}function jo(t,n){if(!Re)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function TS(t,n,a){var s=n.pendingProps;switch(ff(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ma(En),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(_r(n)?Aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,df())),ln(n),null;case 26:var l=n.type,u=n.memoizedState;return t===null?(Aa(n),u!==null?(ln(n),vg(n,u)):(ln(n),nh(n,l,null,s,a))):u?u!==t.memoizedState?(Aa(n),ln(n),vg(n,u)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Aa(n),ln(n),nh(n,l,t,s,a)),null;case 27:if(xt(n),a=Ye.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ln(n),n.subtreeFlags&=-33554433,null}t=Lt.current,_r(n)?Km(n):(t=B_(l,s,a),n.stateNode=t,Aa(n))}return ln(n),n.subtreeFlags&=-33554433,null;case 5:if(xt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ln(n),n.subtreeFlags&=-33554433,null}if(u=Lt.current,_r(n))Km(n);else{var _=nl(Ye.current);switch(u){case 1:u=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=_.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?_.createElement(l,{is:s.is}):_.createElement(l)}}u[Ft]=n,u[ne]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)u.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=u;t:switch(kn(u,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Aa(n)}}return ln(n),n.subtreeFlags&=-33554433,nh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Aa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ye.current,_r(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=Ln,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[Ft]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||__(t.nodeValue,a)),t||ka(n,!0)}else t=nl(t).createTextNode(s),t[Ft]=n,n.stateNode=t}return ln(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=_r(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ft]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else a=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ln(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=_r(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Ft]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),l=!1}else l=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_c(n,n.updateQueue),ln(n),null);case 4:return T(),t===null&&Ih(n.stateNode.containerInfo),n.flags|=67108864,ln(n),null;case 10:return Ma(n.type),ln(n),null;case 19:if(Rf(n),s=n.memoizedState,s===null)return ln(n),null;if(l=(n.flags&128)!==0,u=s.rendering,u===null)if(l)jo(s,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=nc(t),u!==null){for(n.flags|=128,jo(s,!1),t=u.updateQueue,n.updateQueue=t,_c(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)jm(a,t),a=a.sibling;return Ho(n,Gn.current&1|2),Re&&ya(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&X()>wc&&(n.flags|=128,l=!0,jo(s,!1),n.lanes=4194304)}else{if(!l)if(t=nc(u),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,_c(n,t),jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!Re)return ln(n),null}else 2*X()-s.renderingStartTime>wc&&a!==536870912&&(n.flags|=128,l=!0,jo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,u=Gn.current,u=l?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Re?Ho(n,u):(a=u,re(Hn,n),re(Gn,a),qn===null&&(qn=n)),Re&&ya(n,s.treeForkCount),t}return ln(n),null;case 22:case 23:return gi(n),bf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&_c(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Pt(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(En),ln(n),null;case 25:return null;case 30:return n.flags|=33554432,ln(n),null}throw Error(r(156,n.tag))}function bS(t,n){switch(ff(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(En),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return xt(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Rf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return Ma(n.type),null;case 22:case 23:return gi(n),bf(),t!==null&&Pt(Ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(En),null;case 25:return null;default:return null}}function xg(t,n){switch(ff(n),n.tag){case 3:Ma(En),T();break;case 26:case 27:case 5:xt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:Rf(n);break;case 10:Ma(n.type);break;case 22:case 23:gi(n),bf(),t!==null&&Pt(Ns);break;case 24:Ma(En)}}function qo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var u=a.create,_=a.inst;s=u(),_.destroy=s}a=a.next}while(a!==l)}}catch(E){Je(n,n.return,E)}}function Ja(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,l=n;var B=a,J=E;try{J()}catch(ct){Je(l,B,ct)}}}s=s.next}while(s!==u)}}catch(ct){Je(n,n.return,ct)}}function yg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{c0(n,a)}catch(s){Je(t,t.return,s)}}}function Sg(t,n,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Je(t,n,s)}}function ta(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,u=_a(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=C_(u)),s=l.ref;break;case 7:if(t.stateNode===null){var _=new Si(t);p(t.child,!1,m1,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){Je(t,n,E)}}function Vn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){Je(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Je(t,n,l)}else a.current=null}function vc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)O_(t.stateNode,n[a])}function Mg(t){for(var n=t.return;n!==null&&(ah(n)&&O_(t.stateNode,n.stateNode),!ih(n));)n=n.return}function Wo(t){for(var n=t.return;n!==null&&(ah(n)&&g1(t.stateNode,n.stateNode),!ih(n));)n=n.return}function ih(t){return t.tag===5||t.tag===3||t.tag===27}function ah(t){return t&&t.tag===7&&t.stateNode!==null}function sh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){Je(t,t.return,l)}}function rh(t,n,a){try{var s=t.stateNode;QS(s,t.type,a,n),s[ne]=n}catch(l){Je(t,t.return,l)}}function Eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ss(t.type)||t.tag===4}function oh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ss(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi)),vc(t,s),Ge=!0;else if(l!==4&&(l===27&&(vc(t,s),s=null,ss(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(lh(t,n,a,s),t=t.sibling;t!==null;)lh(t,n,a,s),t=t.sibling}function xc(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),vc(t,s),Ge=!0;else if(l!==4&&(l===27&&(vc(t,s),s=null,ss(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(xc(t,n,a,s),t=t.sibling;t!==null;)xc(t,n,a,s),t=t.sibling}function Tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);kn(n,s,a),n[Ft]=t,n[ne]=a}catch(u){Je(t,t.return,u)}}var yc=!1,_i=null;function bg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(yc=!0)}var ea=null;function Ag(){var t=ea;return ea=null,t}var ri=0;function br(t,n,a,s,l){return ri=0,Rg(t.child,n,a,s,l)}function Rg(t,n,a,s,l){for(var u=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var E=jh(_);s.push(E),E.view&&(u=!0)}else u||jh(_).view&&(u=!0);yc=!0,A_(_,ri===0?n:n+"_"+ri,a),ri++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Rg(t.child,n,a,s,l)&&(u=!0));t=t.sibling}return u}function na(t,n){for(;t!==null;)t.tag===5?R_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||na(t.child,n)),t=t.sibling}function Sc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Sc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=va(n.default,n.share),n!=="none"&&(br(t,a,n,null,!1)||na(t.child,!1))}t=t.sibling}}function ch(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=_a(s,a),u=va(s.default,a.paired?s.share:s.enter);u!=="none"?br(t,l,u,null,!1)?(Sc(t),a.paired||n||Lr(t,s.onEnter)):na(t.child,!1):Sc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ch(t,n),t=t.sibling;else Sc(t)}function uh(t){if(_i!==null&&_i.size!==0){var n=_i;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var u=va(a.default,a.share);if(u!=="none"&&(br(t,s,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,Lr(t,a.onShare)):na(t.child,!1)),n.delete(s),n.size===0)break}}}uh(t)}t=t.sibling}}}function fh(t){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode),s=_i!==null?_i.get(a):void 0,l=va(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(br(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,_i.delete(a),Lr(t,n.onShare)):Lr(t,n.onExit):na(t.child,!1)),_i!==null&&uh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fh(t),t=t.sibling;else _i!==null&&uh(t)}function Cg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=_a(n,t.stateNode);n=va(n.default,n.update),t.flags&=-5,n!=="none"&&br(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Cg(t);t=t.sibling}}function hh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,na(t.child,!1))}hh(t)}t=t.sibling}}function Mc(t){if(t.tag===30)t.stateNode.paired=null,na(t.child,!1),hh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Mc(t),t=t.sibling;else hh(t)}function wg(t){for(t=t.child;t!==null;)t.tag===30?na(t.child,!1):(t.subtreeFlags&33554432)!==0&&wg(t),t=t.sibling}function dh(t,n,a,s,l,u,_){for(var E=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(u!==null&&ri<u.length){var J=u[ri],ct=jh(B);(J.view||ct.view)&&(E=!0);var St;if(St=(t.flags&4)===0)if(ct.clip)St=!0;else{St=J.rect;var q=ct.rect;St=St.y!==q.y||St.x!==q.x||St.height!==q.height||St.width!==q.width}St&&(t.flags|=4),ct.abs?ct=!J.abs:(J=J.rect,ct=ct.rect,ct=J.height!==ct.height||J.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&A_(B,ri===0?a:a+"_"+ri,l),E&&(t.flags&4)!==0||(ea===null&&(ea=[]),ea.push(B,ri===0?s:s+"_"+ri,n.memoizedProps)),ri++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:dh(t,n.child,a,s,l,u,_)&&(E=!0));n=n.sibling}return E}function Dg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=_a(a,s),u=va(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;ri=0,l=dh(s,E,l,l,u,_,!1),(t.flags&4)!==0&&l&&Lr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Dg(t);t=t.sibling}}var On=!1,Ke=!1,ia=!1,ph=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,zn=null,aa=!1,Yo=!1,Ec=!1,mh=!1;function AS(t,n,a){if(t=t.containerInfo,Hh=kr,t=zm(t),tf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var E=0,B=-1,J=-1,ct=0,St=0,q=t,rt=null;e:for(;;){for(var Gt;q!==s||u!==0&&q.nodeType!==3||(B=E+u),q!==_||l!==0&&q.nodeType!==3||(J=E+l),q.nodeType===3&&(E+=q.nodeValue.length),(Gt=q.firstChild)!==null;)rt=q,q=Gt;for(;;){if(q===t)break e;if(rt===s&&++ct===u&&(B=E),rt===_&&++St===l&&(J=E),(Gt=q.nextSibling)!==null)break;q=rt,rt=q.parentNode}q=Gt}s=B===-1||J===-1?null:{start:B,end:J}}else s=null}s=s||{start:0,end:0}}else s=null;for(Gh={focusedElem:t,selectionRange:s},kr=!1,a=(a&335544064)===a,zn=n,n=a?9270:1024;zn!==null;){if(t=zn,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&fh(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&bg(t),Tc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&fh(s),Tc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&bg(t),Tc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,zn=s):(a&&Cg(t),Tc(a))}}_i=null}function Tc(t){for(;zn!==null;){var n=zn,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var _=Ps(n.type,l);a=u.getSnapshotBeforeUpdate(_,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(E){Je(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Yh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Yh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=_a(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=va(l.default,l.update),l!=="none"&&br(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,zn=s;break}zn=n.return}}function Ug(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),s&4&&qo(5,a);break;case 1:if(sa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Je(a,a.return,_)}else{var l=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Je(a,a.return,_)}}s&64&&yg(a),s&512&&ta(a,a.return);break;case 3:if(sa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{c0(t,n)}catch(_){Je(a,a.return,_)}}break;case 27:n===null&&s&4&&Tg(a);case 26:case 5:sa(t,a),n===null&&s&4&&sh(a),s&512&&ta(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),s&4&&Pg(t,a);break;case 13:sa(t,a),s&4&&Ig(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=BS.bind(null,a),x1(t,a))));break;case 22:if(s=a.memoizedState!==null||On,!s){var u=n!==null&&n.memoizedState!==null||Ke;n=On,l=Ke,On=s,(Ke=u)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Vi(t,a,s)):sa(t,a),On=n,Ke=l}break;case 30:sa(t,a),s&512&&ta(a,a.return);break;case 7:s&512&&ta(a,a.return);default:sa(t,a)}}function gh(t,n){for(t=t.child;t!==null;)Lg(t,n),t=t.sibling}function Lg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,_=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(B){Je(t,t.return,B)}_h(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ge=!0}catch(B){Je(t,t.return,B)}break;case 18:try{var E=t.stateNode;n?b_(E,!0):b_(t.stateNode,!1)}catch(B){Je(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&gh(t,n);break;default:gh(t,n)}}function _h(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Lg(a,s);break t;case 22:a.memoizedState===null&&_h(a,s);break t;default:_h(a,s)}}t=t.sibling}}function Og(t){var n=t.alternate;n!==null&&(t.alternate=null,Og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ue(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var fn=null,oi=!1;function Hi(t,n,a){for(a=a.child;a!==null;)zg(t,n,a),a=a.sibling}function zg(t,n,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:Ke||Vn(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||Vn(a,n),Wo(a);var s=fn,l=oi;ss(a.type)&&(fn=a.stateNode,oi=!1),Hi(t,n,a),F_(a.stateNode,a.type,a.memoizedProps),fn=s,oi=l;break;case 5:Ke||Vn(a,n),Wo(a);case 6:if(a.tag===6&&Wo(a),s=fn,l=oi,fn=null,Hi(t,n,a),fn=s,oi=l,fn!==null)if(oi)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode),Ge=!0}catch(u){Je(a,n,u)}else try{fn.removeChild(a.stateNode),Ge=!0}catch(u){Je(a,n,u)}break;case 18:fn!==null&&(oi?(t=fn,T_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Xr(t)):T_(fn,a.stateNode));break;case 4:s=fn,l=oi,fn=a.stateNode.containerInfo,oi=!0,Hi(t,n,a),fn=s,oi=l;break;case 0:case 11:case 14:case 15:Ja(2,a,n),Ke||Ja(4,a,n),Hi(t,n,a);break;case 1:Ke||(Vn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Sg(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:Ke=(s=Ke)||a.memoizedState!==null,Hi(t,n,a),Ke=s;break;case 30:Vn(a,n),Hi(t,n,a);break;case 7:Ke||Vn(a,n),Hi(t,n,a);break;default:Hi(t,n,a)}}function Pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xr(t)}catch(a){Je(n,n.return,a)}}}function Ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xr(t)}catch(a){Je(n,n.return,a)}}function RS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ng),n;default:throw Error(r(435,t.tag))}}function bc(t,n){var a=RS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=FS.bind(null,t,s);s.then(l,l)}})}function Jn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],_=t,E=n,B=E;t:for(;B!==null;){switch(B.tag){case 27:if(ss(B.type)){fn=B.stateNode,oi=!1;break t}break;case 5:fn=B.stateNode,oi=!1;break t;case 3:case 4:fn=B.stateNode.containerInfo,oi=!0;break t}B=B.return}if(fn===null)throw Error(r(160));zg(_,E,u),fn=null,oi=!1,_=u.alternate,_!==null&&(_.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,t,a),n=n.sibling}var Gi=null;function Bg(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var _=s[u];_.ref.impl=_.nextImpl}Jn(n,t,a),$n(t),l&4&&(Ja(3,t,t.return),qo(3,t),Ja(5,t,t.return));break;case 1:Jn(n,t,a),$n(t),l&512&&(Ke||s===null||Vn(s,s.return)),l&64&&On&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Gi,Jn(n,t,a),$n(t),l&512&&(Ke||s===null||Vn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(On)t.stateNode=S_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=u.ownerDocument||u;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[ke]||s[Ft]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),kn(s,n,a),s[Ft]=t,He(s),n=s;break t;case"link":if(u=j_("link","href",l).get(n+(a.href||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(_,1);break e}}s=l.createElement(n),kn(s,n,a),l.head.appendChild(s);break;case"meta":if(u=j_("meta","content",l).get(n+(a.content||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(_,1);break e}}s=l.createElement(n),kn(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[Ft]=t,He(s),n=s}t.stateNode=n}else On||ed(u,t.type,t.stateNode);else t.stateNode=X_(u,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||Ke||n.parentNode.removeChild(n)):l.count--,a===null?On||ed(u,t.type,t.stateNode):X_(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&rh(t,t.memoizedProps,s.memoizedProps);break;case 27:Jn(n,t,a),$n(t),l&512&&(Ke||s===null||Vn(s,s.return)),s!==null&&l&4&&rh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=ia,ia=!1,Jn(n,t,a),ia=u,$n(t),l&512&&(Ke||s===null||Vn(s,s.return)),t.flags&32){n=t.stateNode;try{or(n,""),Ge=!0}catch(ct){Je(t,t.return,ct)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,rh(t,n,s!==null?s.memoizedProps:n)),l&1024&&(ph=!0);break;case 6:if(Jn(n,t,a),$n(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ge=!0}catch(ct){Je(t,t.return,ct)}}break;case 3:if(Ge=!1,Hc=null,u=Gi,Gi=il(n.containerInfo),Jn(n,t,a),Gi=u,$n(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xr(n.containerInfo)}catch(ct){Je(t,t.return,ct)}ph&&(ph=!1,Fg(t)),Ge=!1;break;case 4:l=ia,ia=On,s=sm(),u=Gi,Gi=il(t.stateNode.containerInfo),Jn(n,t,a),$n(t),Gi=u,Ge&&Yo&&(Ec=!0),Ge=s,ia=l;break;case 12:Jn(n,t,a),$n(t);break;case 31:Jn(n,t,a),$n(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 13:Jn(n,t,a),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cc=X()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 22:u=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var E=On,B=Ke,J=ia;On=E||u,ia=J||u,Ke=B||_,Jn(n,t,a),Ke=B,ia=J,On=E,$n(t),l&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||_||On||Ke||(n=_||Ke,a=On,s=Ke,On=u||On,Ke=n,$a(t,2),On=a,Ke=s),!u&&ia||gh(t,u)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bc(t,a))));break;case 19:Jn(n,t,a),$n(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 30:l&512&&(Ke||s===null||Vn(s,s.return)),l=sm(),u=Yo,_=(a&335544064)===a,E=t.memoizedProps,Yo=_&&va(E.default,E.update)!=="none",Jn(n,t,a),$n(t),_&&s!==null&&Ge&&(t.flags|=4),Yo=u,Ge=l;break;case 21:break;case 7:l&512&&(Ke||s===null||Vn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Jn(n,t,a),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Eg(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(ah(l)){var u=l.stateNode;s===null?s=[u]:s.push(u)}if(ih(l))break;l=l.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,B=oh(t);xc(t,B,E,_);break;case 5:var J=a.stateNode;a.flags&32&&(or(J,""),a.flags&=-33);var ct=oh(t);xc(t,ct,J,_);break;case 3:case 4:var St=a.stateNode.containerInfo,q=oh(t);lh(t,q,St,_);break;default:throw Error(r(161))}}catch(rt){Je(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,kr=!0,n.reset(),kr=!1),t=t.sibling}}function Ar(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Hg(n,t),n=n.sibling;else Dg(n)}function Hg(t,n){var a=t.alternate;if(a===null)ch(t,!1);else switch(t.tag){case 3:if(mh=aa=!1,Ag(),Ar(n,t),!aa&&!Ec){if(t=ea,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];R_(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),mh=!0}ea=null;break;case 5:Ar(n,t);break;case 4:s=aa,aa=!1,Ar(n,t),aa&&(Ec=!0),aa=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?ch(t,!1):Ar(n,t));break;case 30:s=aa,l=Ag(),aa=!1,Ar(n,t),aa&&(t.flags|=4);var u=t.memoizedProps,_=t.stateNode;n=_a(u,_),_=_a(a.memoizedProps,_);var E=va(u.default,u.update);E==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,ri=0,n=dh(t,a,n,_,E,u,!0),ri!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Lr(t,t.memoizedProps.onUpdate),ea=l):l!==null&&(l.push.apply(l,ea),ea=l),aa=(t.flags&32)!==0?!0:s;break;default:Ar(n,t)}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ug(t,n.alternate,n),n=n.sibling}function $a(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),$a(a,s);break;case 1:Vn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Sg(a,a.return,l),$a(a,s);break;case 27:(s&2)!==0&&F_(a.stateNode,a.type,a.memoizedProps);case 5:Vn(a,a.return),a.tag!==5&&a.tag!==27||Wo(a),$a(a,s);break;case 6:Wo(a);break;case 26:Vn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Ke||l.parentNode.removeChild(l),$a(a,s);break;case 22:a.memoizedState===null&&$a(a,s);break;case 30:Vn(a,a.return),$a(a,s);break;case 7:Vn(a,a.return);default:$a(a,s)}t=t.sibling}}function Vi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,u=n,_=u.flags,E=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Vi(l,u,a),qo(4,u);break;case 1:if(Vi(l,u,a),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ct){Je(s,s.return,ct)}if(s=u,l=s.updateQueue,l!==null){var B=s.stateNode;try{var J=l.shared.hiddenCallbacks;if(J!==null)for(l.shared.hiddenCallbacks=null,l=0;l<J.length;l++)l0(J[l],B)}catch(ct){Je(s,s.return,ct)}}E&&_&64&&yg(u),ta(u,u.return);break;case 27:(a&2)!==0&&Tg(u);case 5:u.tag!==5&&u.tag!==27||Mg(u),Vi(l,u,a),E&&s===null&&_&4&&sh(u),ta(u,u.return);break;case 6:Mg(u);break;case 26:B=u.stateNode,u.memoizedState!==null||B===null||On||ed(il(B.ownerDocument),u.type,B),Vi(l,u,a),E&&s===null&&_&4&&sh(u),ta(u,u.return);break;case 12:Vi(l,u,a);break;case 31:Vi(l,u,a),E&&_&4&&Pg(l,u);break;case 13:Vi(l,u,a),E&&_&4&&Ig(l,u);break;case 22:u.memoizedState===null&&Vi(l,u,a),ta(u,u.return);break;case 30:Vi(l,u,a),ta(u,u.return);break;case 7:ta(u,u.return);default:Vi(l,u,a)}n=n.sibling}}function vh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Lo(a))}function xh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Lo(t))}function Ui(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Gg(t,n,a,s),n=n.sibling;else l&&wg(n)}function Gg(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Mc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n,a,s),u&2048&&qo(9,n);break;case 1:Ui(t,n,a,s);break;case 3:Ui(t,n,a,s),l&&mh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Lo(u)));break;case 12:if(u&2048){Ui(t,n,a,s),u=n.stateNode;try{var _=n.memoizedProps,E=_.id,B=_.onPostCommit;typeof B=="function"&&B(E,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(J){Je(n,n.return,J)}}else Ui(t,n,a,s);break;case 31:Ui(t,n,a,s);break;case 13:Ui(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&Mc(E),_._visibility&2?Ui(t,n,a,s):Zo(t,n)):(l&&E!==null&&E.memoizedState!==null&&Mc(n),_._visibility&2?Ui(t,n,a,s):(_._visibility|=2,Rr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&vh(E,n);break;case 24:Ui(t,n,a,s),u&2048&&xh(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(na(u.child,!0),na(n.child,!0))),Ui(t,n,a,s);break;default:Ui(t,n,a,s)}}function Rr(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,_=n,E=a,B=s,J=_.flags;switch(_.tag){case 0:case 11:case 15:Rr(u,_,E,B,l),qo(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?Rr(u,_,E,B,l):Zo(u,_):(ct._visibility|=2,Rr(u,_,E,B,l)),l&&J&2048&&vh(_.alternate,_);break;case 24:Rr(u,_,E,B,l),l&&J&2048&&xh(_.alternate,_);break;default:Rr(u,_,E,B,l)}n=n.sibling}}function Zo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:Zo(a,s),l&2048&&vh(s.alternate,s);break;case 24:Zo(a,s),l&2048&&xh(s.alternate,s);break;default:Zo(a,s)}n=n.sibling}}var Is=8192;function Bs(t,n,a){if(t.subtreeFlags&Is)for(t=t.child;t!==null;)Vg(t,n,a),t=t.sibling}function Vg(t,n,a){switch(t.tag){case 26:Bs(t,n,a),t.flags&Is&&(t.memoizedState!==null?L1(a,Gi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Z_(a,t)));break;case 5:Bs(t,n,a),t.flags&Is&&(t=t.stateNode,(n&335544128)===n&&Z_(a,t));break;case 3:case 4:var s=Gi;Gi=il(t.stateNode.containerInfo),Bs(t,n,a),Gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Is,Is=16777216,Bs(t,n,a),Is=s):Bs(t,n,a));break;case 30:if((t.flags&Is)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,_i===null&&(_i=new Map),_i.set(s,l)}Bs(t,n,a);break;default:Bs(t,n,a)}}function kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];zn=s,jg(s,t)}kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xg(t),t=t.sibling}function Xg(t){switch(t.tag){case 0:case 11:case 15:Ko(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:Ko(t);break;case 12:Ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ac(t)):Ko(t);break;default:Ko(t)}}function Ac(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];zn=s,jg(s,t)}kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),Ac(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ac(n));break;default:Ac(n)}t=t.sibling}}function jg(t,n){for(;zn!==null;){var a=zn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,zn=s;else t:for(a=t;zn!==null;){s=zn;var l=s.sibling,u=s.return;if(Og(s),s===a){zn=null;break t}if(l!==null){l.return=u,zn=l;break t}zn=u}}}var CS={getCacheForType:function(t){var n=Fn(En),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Fn(En).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,je=0,an=null,De=null,Le=0,Qe=0,vi=null,ts=!1,Cr=!1,yh=!1,Ra=0,_n=0,es=0,Fs=0,Rc=0,xi=0,wr=0,Qo=null,li=null,Sh=!1,Cc=0,qg=0,wc=1/0,Dc=null,ns=null,dn=0,ki=null,Hs=null,ra=0,Mh=0,Eh=null,Wg=null,Dr=null,Nr=null,Ur=null,Jo=0,Nc=null;function yi(){return(je&2)!==0&&Le!==0?Le&-Le:Y.T!==null?Lh():Rt()}function Yg(){if(xi===0)if((Le&536870912)===0||Re){var t=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),xi=t}else xi=536870912;return t=Hn.current,t!==null&&(t.flags|=32),xi}function Lr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=C_(_a(t.memoizedProps,a))),Nr===null&&(Nr=[]),Nr.push(n.bind(null,s))}}function ci(t,n,a){(t===an&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)&&(Or(t,0),is(t,Le,xi,!1)),ai(t,a),((je&2)===0||t!==an)&&(t===an&&((je&2)===0&&(Fs|=a),_n===4&&is(t,Le,xi,!1)),oa(t))}function Zg(t,n,a){if((je&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Me(t,n),l=s?US(t,n):bh(t,n,!0),u=s;do{if(l===0){Cr&&!s&&is(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!DS(a)){l=bh(t,n,!1),u=!1;continue}if(l===2){if(u=n,t.errorRecoveryDisabledLanes&u)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;l=Qo;var B=E.current.memoizedState.isDehydrated;if(B&&(Or(E,_).flags|=256),_=bh(E,_,!1),_!==2&&_!==6){if(yh&&!B){E.errorRecoveryDisabledLanes|=u,Fs|=u,l=4;break t}u=li,li=l,u!==null&&(li===null?li=u:li.push.apply(li,u))}l=_}if(u=!1,l!==2)continue}}if(l===1){Or(t,0),is(t,n,0,!0);break}t:{switch(s=t,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:is(s,n,xi,!ts);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Cc+300-X(),10<l)){if(is(s,n,xi,!ts),se(s,0,!0)!==0)break t;ra=n,s.timeoutHandle=Xh(Kg.bind(null,s,a,li,Dc,Sh,n,xi,Fs,wr,ts,u,"Throttled",-0,0),l);break t}Kg(s,a,li,Dc,Sh,n,xi,Fs,wr,ts,u,null,-0,0)}}break}while(!0);oa(t)}function Kg(t,n,a,s,l,u,_,E,B,J,ct,St,q,rt){t.timeoutHandle=-1;var Gt=n.subtreeFlags,ie=(u&335544064)===u;if(St=null,(ie||Gt&8192||(Gt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},_i=null,Vg(n,u,St),ie&&(Gt=St,ie=t.containerInfo,ie=(ie.nodeType===9?ie:ie.ownerDocument).__reactViewTransition,ie!=null&&(Gt.count++,Gt.waitingForViewTransition=!0,Gt=rl.bind(Gt),ie.finished.then(Gt,Gt))),Gt=(u&62914560)===u?Cc-X():(u&4194048)===u?qg-X():0,Gt=O1(St,Gt),Gt!==null)){ra=u,t.cancelPendingCommit=Gt(a_.bind(null,t,n,u,a,s,l,_,E,B,J,ct,St,null,q,rt)),is(t,u,_,!J);return}a_(t,n,u,a,s,l,_,E,B,J,ct,St)}function DS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],u=l.getSnapshot;l=l.value;try{if(!mi(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function is(t,n,a,s){n=_e(t,n),n&=~Rc,n&=~Fs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var u=31-Sn(l),_=1<<u;s[u]=-1,l&=~_}a!==0&&D(t,a,n)}function Uc(){return(je&6)===0?($o(0),!1):!0}function Th(){if(De!==null){if(Qe===0)var t=De.return;else t=De,Sa=Rs=null,Uf(t),yr=null,Po=0,t=De;for(;t!==null;)xg(t.alternate,t),t=t.return;De=null}}function Or(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,t1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ra=0,Th(),an=t,De=a=xa(t.current,null),Le=n,Qe=0,vi=null,ts=!1,Cr=Me(t,n),yh=!1,wr=xi=Rc=Fs=es=_n=0,li=Qo=null,Sh=!1,Ra=_e(t,n),Hl(),a}function Qg(t,n){ye=null,Y.H=fc,n===xr||n===Ql?(n=a0(),Qe=3):n===xf?(n=a0(),Qe=4):Qe=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vi=n,De===null&&(_n=1,hc(t,Ci(n,t.current)))}function Jg(){var t=Hn.current;return t===null?!0:(Le&4194048)===Le?qn===null:(Le&62914560)===Le||(Le&536870912)!==0?t===qn:!1}function $g(){var t=Y.H;return Y.H=fc,t===null?fc:t}function t_(){var t=Y.A;return Y.A=CS,t}function Lc(){_n=4,ts||(Le&4194048)!==Le&&Hn.current!==null||(Cr=!0),(es&134217727)===0&&(Fs&134217727)===0||an===null||is(an,Le,xi,!1)}function bh(t,n,a){var s=je;je|=2;var l=$g(),u=t_();(an!==t||Le!==n)&&(Dc=null,Or(t,n)),n=!1;var _=_n;t:do try{if(Qe!==0&&De!==null){var E=De,B=vi;switch(Qe){case 8:Th(),_=6;break t;case 3:case 2:case 9:case 6:Hn.current===null&&(n=!0);var J=Qe;if(Qe=0,vi=null,zr(t,E,B,J),a&&Cr){_=0;break t}break;default:J=Qe,Qe=0,vi=null,zr(t,E,B,J)}}NS(),_=_n;break}catch(ct){Qg(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Sa=Rs=null,je=s,Y.H=l,Y.A=u,De===null&&(an=null,Le=0,Hl()),_}function NS(){for(;De!==null;)e_(De)}function US(t,n){var a=je;je|=2;var s=$g(),l=t_();an!==t||Le!==n?(Dc=null,wc=X()+500,Or(t,n)):Cr=Me(t,n);t:do try{if(Qe!==0&&De!==null){n=De;var u=vi;e:switch(Qe){case 1:Qe=0,vi=null,zr(t,n,u,1);break;case 2:case 9:if(n0(u)){Qe=0,vi=null,n_(n);break}n=function(){Qe!==2&&Qe!==9||an!==t||(Qe=7),oa(t)},u.then(n,n);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:n0(u)?(Qe=0,vi=null,n_(n)):(Qe=0,vi=null,zr(t,n,u,7));break;case 5:var _=null;switch(De.tag){case 26:_=De.memoizedState;case 5:case 27:var E=De;if(_?W_(_):E.stateNode.complete){Qe=0,vi=null;var B=E.sibling;if(B!==null)De=B;else{var J=E.return;J!==null?(De=J,Oc(J)):De=null}break e}}Qe=0,vi=null,zr(t,n,u,5);break;case 6:Qe=0,vi=null,zr(t,n,u,6);break;case 8:Th(),_n=6;break t;default:throw Error(r(462))}}LS();break}catch(ct){Qg(t,ct)}while(!0);return Sa=Rs=null,Y.H=s,Y.A=l,je=a,De!==null?0:(an=null,Le=0,Hl(),_n)}function LS(){for(;De!==null&&!Xt();)e_(De)}function e_(t){var n=_g(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,n===null?Oc(t):De=n}function n_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ug(a,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=ug(a,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:Uf(n);var s=n;s===Ln&&(Re?(ql(s),s.tag===5&&s.stateNode!=null&&(on=s.stateNode)):(ql(s),Re=!0));default:xg(a,n),n=De=jm(n,Ra),n=_g(a,n,Ra)}t.memoizedProps=t.pendingProps,n===null?Oc(t):De=n}function zr(t,n,a,s){Sa=Rs=null,Uf(n),yr=null,Po=0;var l=n.return;try{if(yS(t,l,n,a,Le)){_n=1,hc(t,Ci(a,t.current)),De=null;return}}catch(u){if(l!==null)throw De=l,u;_n=1,hc(t,Ci(a,t.current)),De=null;return}n.flags&32768?(Re||s===1?t=!0:Cr||(Le&536870912)!==0?t=!1:(ts=t=!0,(s===2||s===9||s===3||s===6)&&(s=Hn.current,s!==null&&s.tag===13&&(s.flags|=16384))),i_(n,t)):Oc(n)}function Oc(t){var n=t;do{if((n.flags&32768)!==0){i_(n,ts);return}t=n.return;var a=TS(n.alternate,n,Ra);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=t}while(n!==null);_n===0&&(_n=5)}function i_(t,n){do{var a=bS(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);_n=6,De=null}function a_(t,n,a,s,l,u,_,E,B,J,ct,St){t.cancelPendingCommit=null;do zc();while(dn!==0);if((je&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===an&&(De=an=null,Le=0),Hs=n,ki=t,ra=a,Eh=l,Wg=s,OS(t,n,a,_,E,B,St)}}function OS(t,n,a,s,l,u,_){var E=n.lanes|n.childLanes;if(Mh=E,E|=rf,hi(t,a,E,s,l,u),Nr=null,(a&335544064)===a?(Ur=lS(t),s=10262):(Ur=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,HS(At,function(){return wh(),null})):(t.callbackNode=null,t.callbackPriority=0),yc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Y.T,Y.T=null,l=zt.p,zt.p=2,u=je,je|=4;try{AS(t,n,a)}finally{je=u,zt.p=l,Y.T=s}}dn=1,yc?Dr=r1(_,t.containerInfo,Ur,Ah,Rh,PS,Ch,wh,zS):(Ah(),Rh(),Ch())}function zS(t){if(dn!==0){var n=ki.onRecoverableError;n(t,{componentStack:null})}}function PS(){dn===3&&(dn=0,Hg(Hs,ki),dn=4)}function Ah(){if(dn===1){dn=0;var t=ki,n=Hs,a=ra,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Y.T,Y.T=null;var l=zt.p;zt.p=2;var u=je;je|=4;try{Yo=Ec=!1,Bg(n,t,a),a=Gh;var _=zm(t.containerInfo),E=a.focusedElem,B=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&Om(E.ownerDocument.documentElement,E)){if(B!==null&&tf(E)){var J=B.start,ct=B.end;if(ct===void 0&&(ct=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ct,E.value.length);else{var St=E.ownerDocument||document,q=St&&St.defaultView||window;if(q.getSelection){var rt=q.getSelection(),Gt=E.textContent.length,ie=Math.min(B.start,Gt),Se=B.end===void 0?ie:Math.min(B.end,Gt);!rt.extend&&ie>Se&&(_=Se,Se=ie,ie=_);var K=Lm(E,ie),k=Lm(E,Se);if(K&&k&&(rt.rangeCount!==1||rt.anchorNode!==K.node||rt.anchorOffset!==K.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var nt=St.createRange();nt.setStart(K.node,K.offset),rt.removeAllRanges(),ie>Se?(rt.addRange(nt),rt.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),rt.addRange(nt))}}}}for(St=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&St.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<St.length;E++){var yt=St[E];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}kr=!!Hh,Gh=Hh=null}finally{je=u,zt.p=l,Y.T=s}}t.current=n,dn=2}}function Rh(){if(dn===2){dn=0;var t=ki,n=Hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var s=zt.p;zt.p=2;var l=je;je|=4;try{Ug(t,n.alternate,n)}finally{je=l,zt.p=s,Y.T=a}}dn=3}}function Ch(){if(dn===4||dn===3){dn=0;var t=Dr;Dr=null,fe();var n=ki,a=Hs,s=ra,l=Wg,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?dn=5:(dn=0,Hs=ki=null,s_(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(ns=null),tt(s),a=a.stateNode,sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Y.T,u=zt.p,zt.p=2,Y.T=null;try{for(var _=n.onRecoverableError,E=0;E<l.length;E++){var B=l[E];_(B.value,{componentStack:B.stack})}}finally{Y.T=a,zt.p=u}}if(l=Nr,_=Ur,Ur=null,l!==null&&(Nr=null,_===null&&(_=[]),t!==null))for(B=0;B<l.length;B++)a=(0,l[B])(_),a!==void 0&&t.finished.finally(a);(ra&3)!==0&&zc(),oa(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Nc?Jo++:(Jo=0,Nc=n):(Jo=0,Nc=null),$o(0)}}function s_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Lo(n)))}function zc(){return Dr!==null&&(Dr.skipTransition(),Dr=null),Ah(),Rh(),Ch(),wh()}function wh(){if(dn!==5)return!1;var t=ki,n=Mh;Mh=0;var a=tt(ra),s=Y.T,l=zt.p;try{zt.p=32>a?32:a,Y.T=null,a=Eh,Eh=null;var u=ki,_=ra;if(dn=0,Hs=ki=null,ra=0,(je&6)!==0)throw Error(r(331));var E=je;if(je|=4,Xg(u.current),Gg(u,u.current,_,a),je=E,$o(0,!1),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(be,u)}catch{}return!0}finally{zt.p=l,Y.T=s,s_(t,n)}}function r_(t,n,a){n=Ci(a,n),n=qf(t.stateNode,n,2),t=Ya(t,n,2),t!==null&&(ai(t,2),oa(t))}function Je(t,n,a){if(t.tag===3)r_(t,t,a);else for(;n!==null;){if(n.tag===3){r_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ns===null||!ns.has(s))){t=Ci(a,t),a=ng(2),s=Ya(n,a,2),s!==null&&(ig(a,s,n,t),ai(s,2),oa(s));break}}n=n.return}}function Dh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wS;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(yh=!0,l.add(a),t=IS.bind(null,t,n,a),n.then(t,t))}function IS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,an===t&&(Le&a)===a&&((_n===4||_n===3&&(Le&62914560)===Le&&300>X()-Cc)&&(je&2)===0?Or(t,0):Rc|=a,wr===Le&&(wr=0)),oa(t)}function o_(t,n){n===0&&(n=tn()),t=Ts(t,n),t!==null&&(ai(t,n),oa(t))}function BS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),o_(t,a)}function FS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),o_(t,a)}function HS(t,n){return le(t,n)}var Pr=null,Ir=null,Nh=!1,Pc=!1,Uh=!1,as=0;function oa(t){t!==Ir&&t.next===null&&(Ir===null?Pr=Ir=t:Ir=Ir.next=t),Pc=!0,Nh||(Nh=!0,VS())}function $o(t,n){if(!Uh&&Pc){Uh=!0;do for(var a=!1,s=Pr;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var _=s.suspendedLanes,E=s.pingedLanes;u=(1<<31-Sn(42|t)+1)-1,u&=l&~(_&~E),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,f_(s,u))}else u=Le,u=se(s,s===an?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Me(s,u)||(a=!0,f_(s,u));s=s.next}while(a);Uh=!1}}function GS(){l_()}function l_(){Pc=Nh=!1;var t=0;as!==0&&$S()&&(t=as);for(var n=X(),a=null,s=Pr;s!==null;){var l=s.next,u=c_(s,n);u===0?(s.next=null,a===null?Pr=l:a.next=l,l===null&&(Ir=a)):(a=s,(t!==0||(u&3)!==0)&&(Pc=!0)),s=l}dn!==0&&dn!==5||$o(t),as!==0&&(as=0)}function c_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var _=31-Sn(u),E=1<<_,B=l[_];B===-1?((E&a)===0||(E&s)!==0)&&(l[_]=hn(E,n)):B<=n&&(t.expiredLanes|=E),u&=~E}if(n=an,a=Le,a=se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Me(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Jt(s),tt(a)){case 2:case 8:a=Yt;break;case 32:a=At;break;case 268435456:a=$t;break;default:a=At}return s=u_.bind(null,t),a=le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Jt(s),t.callbackPriority=2,t.callbackNode=null,2}function u_(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(zc()&&t.callbackNode!==a)return null;var s=Le;return s=se(t,t===an?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Zg(t,s,n),c_(t,X()),t.callbackNode!=null&&t.callbackNode===a?u_.bind(null,t):null)}function f_(t,n){if(zc())return null;Zg(t,n,!0)}function VS(){e1(function(){(je&6)!==0?le(Ut,GS):l_()})}function Lh(){if(as===0){var t=Ds;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),as=t}return as}function h_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(t)}function kS(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var u=h_((l[ne]||null).action),_=s.submitter;_&&(n=(n=_[ne]||null)?h_(n.formAction):_.getAttribute("formAction"),n!==null&&(u=n,_=null));var E=new Pl("action","action",null,s,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(as!==0){var B=new FormData(l,_);Gf(a,{pending:!0,data:B,method:l.method,action:u},null,B)}}else typeof u=="function"&&(E.preventDefault(),B=new FormData(l,_),Gf(a,{pending:!0,data:B,method:l.method,action:u},u,B))},currentTarget:l}]})}}for(var Oh=0;Oh<sf.length;Oh++){var zh=sf[Oh],XS=zh.toLowerCase(),jS=zh[0].toUpperCase()+zh.slice(1);Fi(XS,"on"+jS)}Fi(Bm,"onAnimationEnd"),Fi(Fm,"onAnimationIteration"),Fi(Hm,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(tS,"onTransitionRun"),Fi(eS,"onTransitionStart"),Fi(nS,"onTransitionCancel"),Fi(Gm,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function d_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],B=E.instance,J=E.currentTarget;if(E=E.listener,B!==u&&l.isPropagationStopped())break t;u=E,l.currentTarget=J;try{u(l)}catch(ct){Fl(ct)}l.currentTarget=null,u=B}else for(_=0;_<s.length;_++){if(E=s[_],B=E.instance,J=E.currentTarget,E=E.listener,B!==u&&l.isPropagationStopped())break t;u=E,l.currentTarget=J;try{u(l)}catch(ct){Fl(ct)}l.currentTarget=null,u=B}}}}function Ne(t,n){var a=n[ce];a===void 0&&(a=n[ce]=new Set);var s=t+"__bubble";a.has(s)||(p_(n,t,2,!1),a.add(s))}function Ph(t,n,a){var s=0;n&&(s|=4),p_(a,t,s,n)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Ih(t){if(!t[Ic]){t[Ic]=!0,rn.forEach(function(a){a!=="selectionchange"&&(qS.has(a)||Ph(a,!1,t),Ph(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ic]||(n[Ic]=!0,Ph("selectionchange",!1,n))}}function p_(t,n,a,s){switch(iv(n)){case 2:var l=B1;break;case 8:l=F1;break;default:l=id}a=l.bind(null,n,a,t),l=void 0,!Xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Bh(t,n,a,s,l){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===l)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;E!==null;){if(_=Xe(E),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=u=_;continue t}E=E.parentNode}}s=s.return}pm(function(){var J=u,ct=Vu(a),St=[];t:{var q=Vm.get(t);if(q!==void 0){var rt=Pl,Gt=t;switch(t){case"keypress":if(Ol(a)===0)break t;case"keydown":case"keyup":rt=Dy;break;case"focusin":Gt="focus",rt=Yu;break;case"focusout":Gt="blur",rt=Yu;break;case"beforeblur":case"afterblur":rt=Yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=zy;break;case Bm:case Fm:case Hm:rt=Sy;break;case Gm:rt=Iy;break;case"scroll":case"scrollend":rt=gy;break;case"wheel":rt=Fy;break;case"copy":case"cut":case"paste":rt=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=xm;break;case"submit":rt=Ly;break;case"toggle":case"beforetoggle":rt=Gy}var ie=(n&4)!==0,Se=!ie&&(t==="scroll"||t==="scrollend"),K=ie?q!==null?q+"Capture":null:q;ie=[];for(var k=J,nt;k!==null;){var yt=k;if(nt=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||nt===null||K===null||(yt=Mo(k,K),yt!=null&&ie.push(el(k,yt,nt))),Se)break;k=k.return}0<ie.length&&(q=new rt(q,Gt,null,a,ct),St.push({event:q,listeners:ie}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",rt&&a!==Gu&&(Gt=a.relatedTarget||a.fromElement)&&(Xe(Gt)||Gt[de]))break t;(q||rt)&&(Gt=ct.window===ct?ct:(rt=ct.ownerDocument)?rt.defaultView||rt.parentWindow:window,q?(rt=a.relatedTarget||a.toElement,q=J,rt=rt?Xe(rt):null,rt!==null&&(Se=f(rt),ie=rt.tag,rt!==Se||ie!==5&&ie!==27&&ie!==6)&&(rt=null)):(q=null,rt=J),q!==rt&&(ie=_m,yt="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(ie=xm,yt="onPointerLeave",K="onPointerEnter",k="pointer"),Se=q==null?Gt:wn(q),nt=rt==null?Gt:wn(rt),Gt=new ie(yt,k+"leave",q,a,ct),Gt.target=Se,Gt.relatedTarget=nt,yt=null,Xe(ct)===J&&(ie=new ie(K,k+"enter",rt,a,ct),ie.target=nt,ie.relatedTarget=Se,yt=ie),Se=yt,ie=q&&rt?O(q,rt,WS):null,q!==null&&m_(St,Gt,q,ie,!1),rt!==null&&Se!==null&&m_(St,Se,rt,ie,!0)))}t:{if(q=J?wn(J):window,rt=q.nodeName&&q.nodeName.toLowerCase(),rt==="select"||rt==="input"&&q.type==="file")var Qt=Rm;else if(bm(q))if(Cm)Qt=Qy;else{Qt=Zy;var Oe=Yy}else rt=q.nodeName,!rt||rt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?J&&Hu(J.elementType)&&(Qt=Rm):Qt=Ky;if(Qt&&(Qt=Qt(t,J))){Am(St,Qt,a,ct);break t}Oe&&Oe(t,q,J)}switch(Oe=J?wn(J):window,t){case"focusin":(bm(Oe)||Oe.contentEditable==="true")&&(fr=Oe,ef=J,Do=null);break;case"focusout":Do=ef=fr=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Pm(St,a,ct);break;case"selectionchange":if($y)break;case"keydown":case"keyup":Pm(St,a,ct)}var oe;if(Ku)t:{switch(t){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else ur?Em(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(ym&&a.locale!=="ko"&&(ur||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&ur&&(oe=mm()):(Fa=ct,ju="value"in Fa?Fa.value:Fa.textContent,ur=!0)),Oe=Bc(J,pe),0<Oe.length&&(pe=new vm(pe,t,null,a,ct),St.push({event:pe,listeners:Oe}),oe?pe.data=oe:(oe=Tm(a),oe!==null&&(pe.data=oe)))),(oe=ky?Xy(t,a):jy(t,a))&&(pe=Bc(J,"onBeforeInput"),0<pe.length&&(Oe=new vm("onBeforeInput","beforeinput",null,a,ct),St.push({event:Oe,listeners:pe}),Oe.data=oe)),kS(St,t,J,a,ct)}d_(St,n)})}function el(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bc(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Mo(t,a),l!=null&&s.unshift(el(t,l,u)),l=Mo(t,n),l!=null&&s.push(el(t,l,u))),t.tag===3)return s;t=t.return}return[]}function WS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function m_(t,n,a,s,l){for(var u=n._reactName,_=[];a!==null&&a!==s;){var E=a,B=E.alternate,J=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||J===null||(B=J,l?(J=Mo(a,u),J!=null&&_.unshift(el(a,J,B))):l||(J=Mo(a,u),J!=null&&_.push(el(a,J,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var YS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function g_(t){return(typeof t=="string"?t:""+t).replace(YS,`
`).replace(ZS,"")}function __(t,n){return n=g_(n),g_(t)===n}function $e(t,n,a,s,l,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||or(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&or(t,""+s);else return;break;case"className":Nl(t,"class",s);break;case"tabIndex":Nl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(t,a,s);break;case"style":hm(t,s,u);return;case"data":if(n!=="object"){Nl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ul(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&$e(t,n,"name",l.name,l,null),$e(t,n,"formEncType",l.formEncType,l,null),$e(t,n,"formMethod",l.formMethod,l,null),$e(t,n,"formTarget",l.formTarget,l,null)):($e(t,n,"encType",l.encType,l,null),$e(t,n,"method",l.method,l,null),$e(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ul(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Qi);return;case"onScroll":s!=null&&Ne("scroll",t);return;case"onScrollEnd":s!=null&&Ne("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ul(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),Dl(t,"popover",s);break;case"xlinkActuate":ma(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ma(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ma(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ma(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ma(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ma(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ma(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ma(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ma(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Dl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=py.get(a)||a,Dl(t,a,s);else return}Ge=!0}function Fh(t,n,a,s,l,u){switch(a){case"style":hm(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")or(t,s);else if(typeof s=="number"||typeof s=="bigint")or(t,""+s);else return;break;case"onScroll":s!=null&&Ne("scroll",t);return;case"onScrollEnd":s!=null&&Ne("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Zn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=t[ne]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,l);break t}Ge=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Dl(t,a,s)}return}Ge=!0}function kn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var s=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var _=a[u];if(_!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$e(t,n,u,_,a,null)}}l&&$e(t,n,"srcSet",a.srcSet,a,null),s&&$e(t,n,"src",a.src,a,null);return;case"input":Ne("invalid",t);var E=u=_=l=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":l=ct;break;case"type":_=ct;break;case"checked":B=ct;break;case"defaultChecked":J=ct;break;case"value":u=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:$e(t,n,s,ct,a,null)}}lm(t,u,E,B,J,_,l,!1);return;case"select":Ne("invalid",t),s=_=u=null;for(l in a)if(a.hasOwnProperty(l)&&(E=a[l],E!=null))switch(l){case"value":u=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:$e(t,n,l,E,a,null)}n=u,a=_,t.multiple=!!s,n!=null?rr(t,!!s,n,!1):a!=null&&rr(t,!!s,a,!0);return;case"textarea":Ne("invalid",t),u=l=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":l=E;break;case"children":u=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:$e(t,n,_,E,a,null)}um(t,s,l,u);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:$e(t,n,B,s,a,null)}return;case"dialog":Ne("beforetoggle",t),Ne("toggle",t),Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(s=0;s<tl.length;s++)Ne(tl[s],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$e(t,n,J,s,a,null)}return;default:if(Hu(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&Fh(t,n,ct,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&$e(t,n,E,s,a,null))}var KS={};function QS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,_=null,E=null,B=null,J=null,ct=null;for(rt in a){var St=a[rt];if(a.hasOwnProperty(rt)&&St!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=St;default:s.hasOwnProperty(rt)||$e(t,n,rt,null,s,St)}}for(var q in s){var rt=s[q];if(St=a[q],s.hasOwnProperty(q)&&(rt!=null||St!=null))switch(q){case"type":rt!==St&&(Ge=!0),u=rt;break;case"name":rt!==St&&(Ge=!0),l=rt;break;case"checked":rt!==St&&(Ge=!0),J=rt;break;case"defaultChecked":rt!==St&&(Ge=!0),ct=rt;break;case"value":rt!==St&&(Ge=!0),_=rt;break;case"defaultValue":rt!==St&&(Ge=!0),E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==St&&$e(t,n,q,rt,s,St)}}Bu(t,_,E,B,J,ct,u,l);return;case"select":rt=_=E=q=null;for(u in a)if(B=a[u],a.hasOwnProperty(u)&&B!=null)switch(u){case"value":break;case"multiple":rt=B;default:s.hasOwnProperty(u)||$e(t,n,u,null,s,B)}for(l in s)if(u=s[l],B=a[l],s.hasOwnProperty(l)&&(u!=null||B!=null))switch(l){case"value":u!==B&&(Ge=!0),q=u;break;case"defaultValue":u!==B&&(Ge=!0),E=u;break;case"multiple":u!==B&&(Ge=!0),_=u;default:u!==B&&$e(t,n,l,u,s,B)}n=E,a=_,s=rt,q!=null?rr(t,!!a,q,!1):!!s!=!!a&&(n!=null?rr(t,!!a,n,!0):rr(t,!!a,a?[]:"",!1));return;case"textarea":rt=q=null;for(E in a)if(l=a[E],a.hasOwnProperty(E)&&l!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:$e(t,n,E,null,s,l)}for(_ in s)if(l=s[_],u=a[_],s.hasOwnProperty(_)&&(l!=null||u!=null))switch(_){case"value":l!==u&&(Ge=!0),q=l;break;case"defaultValue":l!==u&&(Ge=!0),rt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&$e(t,n,_,l,s,u)}cm(t,q,rt);return;case"option":for(var Gt in a)if(q=a[Gt],a.hasOwnProperty(Gt)&&q!=null&&!s.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:$e(t,n,Gt,null,s,q)}for(B in s)if(q=s[B],rt=a[B],s.hasOwnProperty(B)&&q!==rt&&(q!=null||rt!=null))switch(B){case"selected":q!==rt&&(Ge=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:$e(t,n,B,q,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)q=a[ie],a.hasOwnProperty(ie)&&q!=null&&!s.hasOwnProperty(ie)&&$e(t,n,ie,null,s,q);for(J in s)if(q=s[J],rt=a[J],s.hasOwnProperty(J)&&q!==rt&&(q!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:$e(t,n,J,q,s,rt)}return;default:if(Hu(n)){for(var Se in a)q=a[Se],a.hasOwnProperty(Se)&&q!==void 0&&!s.hasOwnProperty(Se)&&Fh(t,n,Se,void 0,s,q);for(ct in s)q=s[ct],rt=a[ct],!s.hasOwnProperty(ct)||q===rt||q===void 0&&rt===void 0||Fh(t,n,ct,q,s,rt);return}}for(var K in a)q=a[K],a.hasOwnProperty(K)&&q!=null&&!s.hasOwnProperty(K)&&$e(t,n,K,null,s,q);for(St in s)q=s[St],rt=a[St],!s.hasOwnProperty(St)||q===rt||q==null&&rt==null||$e(t,n,St,q,s,rt)}function v_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],u=l.transferSize,_=l.initiatorType,E=l.duration;if(u&&E&&v_(_)){for(_=0,E=l.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>E)break;var ct=B.transferSize,St=B.initiatorType;ct&&v_(St)&&(B=B.responseEnd,_+=ct*(B<E?1:(E-J)/(B-J)))}if(--s,n+=8*(u+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hh=null,Gh=null;function nl(t){return t.nodeType===9?t:t.ownerDocument}function x_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function S_(t,n,a,s){return a=nl(a).createElement(t),a[Ft]=s,a[ne]=n,kn(a,t,n),He(a),a}function Vh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kh=null;function $S(){var t=window.event;return t&&t.type==="popstate"?t===kh?!1:(kh=t,!0):(kh=null,!1)}var Xh=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,E_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Xh,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(t){return M_.resolve(null).then(t).catch(n1)}:Xh;function n1(t){setTimeout(function(){throw t})}function ss(t){return t==="head"}function T_(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),Xr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Jh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Jh(a);for(var u=a.firstChild;u;){var _=u.nextSibling,E=u.nodeName;u[ke]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=_}}else a==="body"&&Jh(t.ownerDocument.body);a=l}while(a);Xr(n)}function b_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function A_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function R_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function i1(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function jh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return i1(n,a,t)}function a1(t){return t.documentElement.clientHeight}function s1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function r1(t,n,a,s,l,u,_,E,B){var J=n.nodeType===9?n:n.ownerDocument;try{var ct=J.startViewTransition({update:function(){var q=J.defaultView,rt=q.navigation&&q.navigation.transition,Gt=J.fonts.status;s();var ie=[];if(Gt==="loaded"&&(a1(J),J.fonts.status==="loading"&&ie.push(J.fonts.ready)),Gt=ie.length,t!==null)for(var Se=t.suspenseyImages,K=0,k=0;k<Se.length;k++){var nt=Se[k];if(!nt.complete){var yt=nt.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<q.innerHeight&&yt.left<q.innerWidth){if(K+=Y_(nt),K>Gc){ie.length=Gt;break}nt=new Promise(s1.bind(nt)),ie.push(nt)}}}if(0<ie.length)return q=Promise.race([Promise.all(ie),new Promise(function(Qt){return setTimeout(Qt,500)})]).then(l,l),(rt?Promise.allSettled([rt.finished,q]):q).then(u,u);if(l(),rt)return rt.finished.then(u,u);u()},types:a});J.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var q=J.documentElement.getAnimations({subtree:!0}),rt=0;rt<q.length;rt++){var Gt=q[rt],ie=Gt.effect,Se=ie.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){St.push(Gt),Gt=ie.getKeyframes();for(var K=Se=void 0,k=!0,nt=0;nt<Gt.length;nt++){var yt=Gt[nt],Qt=yt.width;if(Se===void 0)Se=Qt;else if(Se!==Qt){k=!1;break}if(Qt=yt.height,K===void 0)K=Qt;else if(K!==Qt){k=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}k&&Se!==void 0&&K!==void 0&&(ie.setKeyframes(Gt),k=getComputedStyle(ie.target,ie.pseudoElement),k.width!==Se||k.height!==K)&&(k=Gt[0],k.width=Se,k.height=K,k=Gt[Gt.length-1],k.width=Se,k.height=K,ie.setKeyframes(Gt))}}_()},function(q){J.__reactViewTransition===ct&&(J.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&B(q)}finally{s(),l(),_()}}),ct.finished.finally(function(){for(var q=0;q<St.length;q++)St[q].cancel();J.__reactViewTransition===ct&&(J.__reactViewTransition=null),E()}),ct}catch{return s(),l(),_(),null}}function Gs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[l])}return s},Gs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function C_(t){return{name:t,group:new Gs("group",t),imagePair:new Gs("image-pair",t),old:new Gs("old",t),new:new Gs("new",t)}}function Si(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Si.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(D_(u,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(B){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(l=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Br(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,o1,t,E,s)}this._eventListeners=u}};function o1(t,n,a,s){return S(t).addEventListener(n,a,s),!1}Si.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=D_(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var u=l.cleanup;l=Br(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,l1,t,a,l),s.splice(n,1),u!==null&&u()}};function l1(t,n,a,s){return S(t).removeEventListener(n,a,s),!1}function Br(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function w_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function D_(t,n,a,s){if(t.length===0)return-1;s=w_(s);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===n&&u.listener===a&&w_(u.optionsOrUseCapture)===s)return l}return-1}Si.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];s.addEventListener(u.type,u.attachedListener,Br(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)u=a[l],s.removeEventListener(u.type,u.attachedListener,Br(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},Si.prototype.focus=function(t){p(this._fragmentFiber.child,!0,N_,t,void 0,void 0)};function N_(t,n){return t.tag===6?!1:(t=S(t),y1(t,n))}Si.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,qh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!N_(n[a],t);a--);};function qh(t,n){return n.push(t),!1}Si.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=nl(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,c1,t,void 0,void 0))};function c1(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}Si.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,u1,t,void 0,void 0)};function u1(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}Si.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,f1,t,void 0,void 0);for(var a=n=0;a<Xi.length;a++){var s=Xi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Xi[n++]=s}Xi.length=n}};function f1(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Xi=[],Wh=!1;function h1(t,n,a){Xi.push({fragmentInstance:t,observer:n,instance:a}),Wh||(Wh=!0,S1(function(){Wh=!1;var s=Xi;Xi=[];for(var l=0;l<s.length;l++){var u=s[l];u.observer.unobserve(u.instance)}}))}Si.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,d1,t,void 0,void 0),t};function d1(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}Si.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},Si.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,qh,a,void 0,void 0);var s=S(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),l=S(a[a.length-1]);var u=M(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),B=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&u&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&l===t||B||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||p1(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function p1(t,n,a,s,l){var u=Xe(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=n,n=y(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=O(a,u,H),n===null?n=!1:(p(n,!0,U,u,a),u=x,x=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=O(s,u,H),n===null?n=!1:(p(n,!0,A,u,s),u=x,L=x=null,n=u!==null)),n):!1}function U_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Si.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,qh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=S(s),U_(t,a);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=S(l),U_(l,a)):S(l).scrollIntoView(t),s+=a?-1:1}};function m1(t,n){return t=S(t),L_(t,n),!1}function L_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function O_(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Br(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var _=0,E=0;E<Xi.length;E++){var B=Xi[E];(B.fragmentInstance!==n||B.observer!==u||B.instance!==t)&&(Xi[_++]=B)}Xi.length=_,u.observe(t)}),L_(t,n))}function g1(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Br(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?h1(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Yh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yh(a),ue(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _1(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ke])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Li(t.nextSibling),t===null)break}return null}function v1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Li(t.nextSibling),t===null))return null;return t}function z_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Li(t.nextSibling),t===null))return null;return t}function Zh(t){return t.data==="$?"||t.data==="$~"}function Kh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function x1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qh=null;function P_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function I_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function y1(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function S1(t){E_(function(){E_(function(n){return t(n)})})}function B_(t,n,a){switch(n=nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function F_(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&$e(t,n,s,null,KS,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Qi&&(t.onclick=null),ue(t)}function Jh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ue(t)}var Oi=new Map,H_=new Set;function il(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ca=zt.d;zt.d={f:M1,r:E1,D:T1,C:b1,L:A1,m:R1,X:w1,S:C1,M:D1};function M1(){var t=Ca.f(),n=Uc();return t||n}function E1(t){var n=Ae(t);n!==null&&n.tag===5&&n.type==="form"?V0(n):Ca.r(t)}var Fr=typeof document>"u"?null:document;function G_(t,n,a){var s=Fr;if(s&&typeof n=="string"&&n){var l=Ai(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),H_.has(l)||(H_.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),kn(n,"link",t),He(n),s.head.appendChild(n)))}}function T1(t){Ca.D(t),G_("dns-prefetch",t,null)}function b1(t,n){Ca.C(t,n),G_("preconnect",t,n)}function A1(t,n,a){Ca.L(t,n,a);var s=Fr;if(s&&t&&n){var l='link[rel="preload"][as="'+Ai(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ai(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ai(a.imageSizes)+'"]')):l+='[href="'+Ai(t)+'"]';var u=l;switch(n){case"style":u=Hr(t);break;case"script":u=Gr(t)}if(!(Oi.has(u)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Oi.set(u,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(al(u))||n==="script"&&s.querySelector(sl(u))))){var _=s.createElement("link");kn(_,"link",t),n==="style"&&(_[Fe]=!0,_.onload=_.onerror=function(){Ba(_)}),He(_),s.head.appendChild(_)}}}function R1(t,n){Ca.m(t,n);var a=Fr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Ai(s)+'"][href="'+Ai(t)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Gr(t)}if(!Oi.has(u)&&(t=z({rel:"modulepreload",href:t},n),Oi.set(u,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(sl(u)))return}s=a.createElement("link"),kn(s,"link",t),He(s),a.head.appendChild(s)}}}function C1(t,n,a){Ca.S(t,n,a);var s=Fr;if(s&&t){var l=di(s).hoistableStyles,u=Hr(t);n=n||"default";var _=l.get(u);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(al(u)))E.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Oi.get(u))&&$h(t,a);var B=_=s.createElement("link");He(B),kn(B,"link",t),B._p=new Promise(function(J,ct){B.onload=J,B.onerror=ct}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Fc(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},l.set(u,_)}}}function w1(t,n){Ca.X(t,n);var a=Fr;if(a&&t){var s=di(a).hoistableScripts,l=Gr(t),u=s.get(l);u||(u=a.querySelector(sl(l)),u||(t=z({src:t,async:!0},n),(n=Oi.get(l))&&td(t,n),u=a.createElement("script"),He(u),kn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function D1(t,n){Ca.M(t,n);var a=Fr;if(a&&t){var s=di(a).hoistableScripts,l=Gr(t),u=s.get(l);u||(u=a.querySelector(sl(l)),u||(t=z({src:t,async:!0,type:"module"},n),(n=Oi.get(l))&&td(t,n),u=a.createElement("script"),He(u),kn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function V_(t,n,a,s){var l=(l=Ye.current)?il(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Hr(a.href),n=di(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Hr(a.href);var u=di(l).hoistableStyles,_=u.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,_),(u=l.querySelector(al(t)))?u._p||(_.instance=u,_.state.loading=5):(u=Oi.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Oi.set(t,u)),N1(l,t,u,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Gr(a),n=di(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Hr(t){return'href="'+Ai(t)+'"'}function al(t){return'link[rel="stylesheet"]['+t+"]"}function k_(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function N1(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Fe]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Fe]=!0,n.onload=n.onerror=Ba.bind(null,n),kn(n,"link",a),He(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Gr(t){return'[src="'+Ai(t)+'"]'}function sl(t){return"script[async]"+t}function X_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ai(a.href)+'"]');if(s)return n.instance=s,He(s),s;var l=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),He(s),kn(s,"style",l),Fc(s,a.precedence,t),n.instance=s;case"stylesheet":l=Hr(a.href);var u=t.querySelector(al(l));if(u)return n.state.loading|=4,n.instance=u,He(u),u;s=k_(a),(l=Oi.get(l))&&$h(s,l),u=(t.ownerDocument||t).createElement("link"),He(u);var _=u;return _._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),kn(u,"link",s),n.state.loading|=4,Fc(u,a.precedence,t),n.instance=u;case"script":return u=Gr(a.src),(l=t.querySelector(sl(u)))?(n.instance=l,He(l),l):(s=a,(l=Oi.get(u))&&(s=z({},a),td(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),He(l),kn(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Fc(s,a.precedence,t));return n.instance}function Fc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)u=E;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hc=null;function j_(t,n,a){if(Hc===null){var s=new Map,l=Hc=new Map;l.set(a,s)}else l=Hc,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var u=a[l];if(!(u[ke]||u[Ft]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var _=u.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(u):s.set(_,[u])}}return s}function ed(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function U1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function W_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Y_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Z_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Y_(n),t.suspenseyImages.push(n)),t=z1.bind(t),n.decode().then(t,t))}function L1(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Hr(s.href),u=n.querySelector(al(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=rl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,He(u);return}u=n.ownerDocument||n,s=k_(s),(l=Oi.get(l))&&$h(s,l),u=u.createElement("link"),He(u);var _=u;_._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),kn(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=rl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gc=0;function O1(t,n){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Gc===0&&(Gc=62500*JS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Gc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function K_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)kc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function rl(){this.count--,K_(this)}function z1(){this.imgCount--,K_(this)}var Vc=null;function kc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,n.forEach(P1,t),Vc=null,rl.call(t))}function P1(t,n){if(!(n.state.loading&4)){var a=Vc.get(t);if(a)var s=a.get(null);else{a=new Map,Vc.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var _=l[u];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}l=n.instance,_=l.getAttribute("data-precedence"),u=a.get(_)||s,u===s&&a.set(null,l),a.set(_,l),this.count++,s=rl.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Vr={$$typeof:lt,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function I1(t,n,a,s,l,u,_,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.hiddenUpdates=Cn(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function Q_(t,n,a,s,l,u,_,E,B,J,ct,St){return t=new I1(t,n,a,_,B,J,ct,St,E),n=1,u===!0&&(n|=24),u=si(3,null,null,n),t.current=u,u.stateNode=t,n=gf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},yf(u),t}function J_(t){return t?(t=pr,t):pr}function $_(t,n,a,s,l,u){l=J_(l),s.context===null?s.context=l:s.pendingContext=l,s=Wa(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Ya(t,s,n),a!==null&&(ci(a,t,n),Io(a,t,n))}function tv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nd(t,n){tv(t,n),(t=t.alternate)&&tv(t,n)}function ev(t){if(t.tag===13||t.tag===31){var n=Ts(t,67108864);n!==null&&ci(n,t,67108864),nd(t,67108864)}}function nv(t){if(t.tag===13||t.tag===31){var n=yi();n=ht(n);var a=Ts(t,n);a!==null&&ci(a,t,n),nd(t,n)}}var kr=!0;function B1(t,n,a,s){var l=Y.T;Y.T=null;var u=zt.p;try{zt.p=2,id(t,n,a,s)}finally{zt.p=u,Y.T=l}}function F1(t,n,a,s){var l=Y.T;Y.T=null;var u=zt.p;try{zt.p=8,id(t,n,a,s)}finally{zt.p=u,Y.T=l}}function id(t,n,a,s){if(kr){var l=ad(s);if(l===null)Bh(t,n,s,Xc,a),av(t,s);else if(G1(l,t,n,a,s))s.stopPropagation();else if(av(t,s),n&4&&-1<H1.indexOf(t)){for(;l!==null;){var u=Ae(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var _=Ot(u.pendingLanes);if(_!==0){var E=u;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var B=1<<31-Sn(_);E.entanglements[1]|=B,_&=~B}oa(u),(je&6)===0&&(wc=X()+500,$o(0))}}break;case 31:case 13:E=Ts(u,2),E!==null&&ci(E,u,2),Uc(),nd(u,2)}if(u=ad(s),u===null&&Bh(t,n,s,Xc,a),u===l)break;l=u}l!==null&&s.stopPropagation()}else Bh(t,n,s,null,a)}}function ad(t){return t=Vu(t),sd(t)}var Xc=null;function sd(t){if(Xc=null,t=Xe(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xc=t,null}function iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case Ut:return 2;case Yt:return 8;case At:case Mt:return 32;case $t:return 268435456;default:return 32}default:return 32}}var rd=!1,rs=null,os=null,ls=null,ol=new Map,ll=new Map,cs=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function av(t,n){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function cl(t,n,a,s,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},n!==null&&(n=Ae(n),n!==null&&ev(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function G1(t,n,a,s,l){switch(n){case"focusin":return rs=cl(rs,t,n,a,s,l),!0;case"dragenter":return os=cl(os,t,n,a,s,l),!0;case"mouseover":return ls=cl(ls,t,n,a,s,l),!0;case"pointerover":var u=l.pointerId;return ol.set(u,cl(ol.get(u)||null,t,n,a,s,l)),!0;case"gotpointercapture":return u=l.pointerId,ll.set(u,cl(ll.get(u)||null,t,n,a,s,l)),!0}return!1}function sv(t){var n=Xe(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,jt(t.priority,function(){nv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,jt(t.priority,function(){nv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Gu=s,a.target.dispatchEvent(s),Gu=null}else return n=Ae(a),n!==null&&ev(n),t.blockedOn=a,!1;n.shift()}return!0}function rv(t,n,a){jc(t)&&a.delete(n)}function V1(){rd=!1,rs!==null&&jc(rs)&&(rs=null),os!==null&&jc(os)&&(os=null),ls!==null&&jc(ls)&&(ls=null),ol.forEach(rv),ll.forEach(rv)}function qc(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,V1)))}var Wc=null;function ov(t){Wc!==t&&(Wc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wc===t&&(Wc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(sd(s||a)===null)continue;break}var u=Ae(a);u!==null&&(t.splice(n,3),n-=3,Gf(u,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function Xr(t){function n(B){return qc(B,t)}rs!==null&&qc(rs,t),os!==null&&qc(os,t),ls!==null&&qc(ls,t),ol.forEach(n),ll.forEach(n);for(var a=0;a<cs.length;a++){var s=cs[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<cs.length&&(a=cs[0],a.blockedOn===null);)sv(a),a.blockedOn===null&&cs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],u=a[s+1],_=l[ne]||null;if(typeof u=="function")_||ov(a);else if(_){var E=null;if(u&&u.hasAttribute("formAction")){if(l=u,_=u[ne]||null)E=_.formAction;else if(sd(l)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ov(a)}}}function lv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function od(t){this._internalRoot=t}Yc.prototype.render=od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=yi();$_(a,s,t,n,null,null)},Yc.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$_(t.current,2,null,t,null,null),Uc(),n[de]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cs.length&&n!==0&&n<cs[a].priority;a++);cs.splice(a,0,t),a===0&&sv(t)}};var cv=e.version;if(cv!=="19.3.1")throw Error(r(527,cv,"19.3.1"));zt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var k1={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{be=Zc.inject(k1),sn=Zc}catch{}}return fl.createRoot=function(t,n){if(!c(t))throw Error(r(299));var a=!1,s="",l=J0,u=$0,_=tg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Q_(t,1,!1,null,null,a,s,null,l,u,_,lv),t[de]=n.current,Ih(t),new od(n)},fl.hydrateRoot=function(t,n,a){if(!c(t))throw Error(r(299));var s=!1,l="",u=J0,_=$0,E=tg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Q_(t,1,!0,n,a??null,s,l,B,u,_,E,lv),n.context=J_(null),a=n.current,s=yi(),s=ht(s),l=Wa(s),l.callback=null,Ya(a,l,s),a=s,n.current.lanes=a,ai(n,a),oa(n),t[de]=n.current,Ih(t),new Yc(n)},fl.version="19.3.1",fl}var xv;function nM(){if(xv)return ud.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ud.exports=eM(),ud.exports}var iM=nM();const aM=Cx(iM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wx=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=he.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:c="",children:f,iconNode:h,...d},v)=>he.createElement("svg",{ref:v,...rM,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:wx("lucide",c),...d},[...h.map(([g,m])=>he.createElement(g,m)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(o,e)=>{const i=he.forwardRef(({className:r,...c},f)=>he.createElement(oM,{ref:f,iconNode:e,className:wx(`lucide-${sM(o)}`,r),...c}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=We("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=We("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=We("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=We("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=We("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=We("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=We("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=We("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=We("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=We("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=We("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=We("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=We("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=We("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=We("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=We("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=We("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=We("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=We("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=We("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=We("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=We("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=We("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=We("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=We("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=We("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=We("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=We("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=We("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=We("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=We("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="180",CM=0,Mv=1,wM=2,Dx=1,Nx=2,za=3,ys=0,ei=1,ca=2,vs=0,co=1,Ev=2,Tv=3,bv=4,DM=5,Ks=100,NM=101,UM=102,LM=103,OM=104,zM=200,PM=201,IM=202,BM=203,$d=204,tp=205,FM=206,HM=207,GM=208,VM=209,kM=210,XM=211,jM=212,qM=213,WM=214,ep=0,np=1,ip=2,fo=3,ap=4,sp=5,rp=6,op=7,Ux=0,YM=1,ZM=2,xs=0,KM=1,QM=2,JM=3,Lx=4,$M=5,tE=6,eE=7,Ox=300,ho=301,po=302,lp=303,cp=304,zu=306,up=1e3,$s=1001,fp=1002,bi=1003,nE=1004,tu=1005,ua=1006,xd=1007,tr=1008,da=1009,zx=1010,Px=1011,Sl=1012,jp=1013,er=1014,fa=1015,Rl=1016,qp=1017,Wp=1018,Ml=1020,Ix=35902,Bx=35899,Fx=1021,Hx=1022,Zi=1023,El=1026,Tl=1027,Yp=1028,Zp=1029,Gx=1030,Kp=1031,Qp=1033,bu=33776,Au=33777,Ru=33778,Cu=33779,hp=35840,dp=35841,pp=35842,mp=35843,gp=36196,_p=37492,vp=37496,xp=37808,yp=37809,Sp=37810,Mp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,Rp=37816,Cp=37817,wp=37818,Dp=37819,Np=37820,Up=37821,Lp=36492,Op=36494,zp=36495,Pp=36283,Ip=36284,Bp=36285,Fp=36286,iE=3200,aE=3201,Vx=0,sE=1,_s="",Ti="srgb",mo="srgb-linear",Du="linear",nn="srgb",jr=7680,Av=519,rE=512,oE=513,lE=514,kx=515,cE=516,uE=517,fE=518,hE=519,Rv=35044,dE=35048,Cv="300 es",ha=2e3,Nu=2001;class vo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const c=r[e];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const c=r.slice(0);for(let f=0,h=c.length;f<h;f++)c[f].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Hp=180/Math.PI;function Cl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[o&255]+Wn[o>>8&255]+Wn[o>>16&255]+Wn[o>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function ze(o,e,i){return Math.max(e,Math.min(i,o))}function pE(o,e){return(o%e+e)%e}function Sd(o,e,i){return(1-i)*o+i*e}function hl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ui(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,i=0){Pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6],this.y=c[1]*i+c[4]*r+c[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),c=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*c+e.x,this.y=f*c+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wl{constructor(e=0,i=0,r=0,c=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=c}static slerpFlat(e,i,r,c,f,h,d){let v=r[c+0],g=r[c+1],m=r[c+2],p=r[c+3];const y=f[h+0],M=f[h+1],b=f[h+2],C=f[h+3];if(d===0){e[i+0]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(p!==C||v!==y||g!==M||m!==b){let S=1-d;const x=v*y+g*M+m*b+p*C,L=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const H=Math.sqrt(U),O=Math.atan2(H,x*L);S=Math.sin(S*O)/H,d=Math.sin(d*O)/H}const A=d*L;if(v=v*S+y*A,g=g*S+M*A,m=m*S+b*A,p=p*S+C*A,S===1-d){const H=1/Math.sqrt(v*v+g*g+m*m+p*p);v*=H,g*=H,m*=H,p*=H}}e[i]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,c,f,h){const d=r[c],v=r[c+1],g=r[c+2],m=r[c+3],p=f[h],y=f[h+1],M=f[h+2],b=f[h+3];return e[i]=d*b+m*p+v*M-g*y,e[i+1]=v*b+m*y+g*p-d*M,e[i+2]=g*b+m*M+d*y-v*p,e[i+3]=m*b-d*p-v*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,c){return this._x=e,this._y=i,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,c=e._y,f=e._z,h=e._order,d=Math.cos,v=Math.sin,g=d(r/2),m=d(c/2),p=d(f/2),y=v(r/2),M=v(c/2),b=v(f/2);switch(h){case"XYZ":this._x=y*m*p+g*M*b,this._y=g*M*p-y*m*b,this._z=g*m*b+y*M*p,this._w=g*m*p-y*M*b;break;case"YXZ":this._x=y*m*p+g*M*b,this._y=g*M*p-y*m*b,this._z=g*m*b-y*M*p,this._w=g*m*p+y*M*b;break;case"ZXY":this._x=y*m*p-g*M*b,this._y=g*M*p+y*m*b,this._z=g*m*b+y*M*p,this._w=g*m*p-y*M*b;break;case"ZYX":this._x=y*m*p-g*M*b,this._y=g*M*p+y*m*b,this._z=g*m*b-y*M*p,this._w=g*m*p+y*M*b;break;case"YZX":this._x=y*m*p+g*M*b,this._y=g*M*p+y*m*b,this._z=g*m*b-y*M*p,this._w=g*m*p-y*M*b;break;case"XZY":this._x=y*m*p-g*M*b,this._y=g*M*p-y*m*b,this._z=g*m*b+y*M*p,this._w=g*m*p+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,c=Math.sin(r);return this._x=e.x*c,this._y=e.y*c,this._z=e.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],c=i[4],f=i[8],h=i[1],d=i[5],v=i[9],g=i[2],m=i[6],p=i[10],y=r+d+p;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(m-v)*M,this._y=(f-g)*M,this._z=(h-c)*M}else if(r>d&&r>p){const M=2*Math.sqrt(1+r-d-p);this._w=(m-v)/M,this._x=.25*M,this._y=(c+h)/M,this._z=(f+g)/M}else if(d>p){const M=2*Math.sqrt(1+d-r-p);this._w=(f-g)/M,this._x=(c+h)/M,this._y=.25*M,this._z=(v+m)/M}else{const M=2*Math.sqrt(1+p-r-d);this._w=(h-c)/M,this._x=(f+g)/M,this._y=(v+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const c=Math.min(1,i/r);return this.slerp(e,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,c=e._y,f=e._z,h=e._w,d=i._x,v=i._y,g=i._z,m=i._w;return this._x=r*m+h*d+c*g-f*v,this._y=c*m+h*v+f*d-r*g,this._z=f*m+h*g+r*v-c*d,this._w=h*m-r*d-c*v-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,c=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+c*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=c,this._z=f,this;const v=1-d*d;if(v<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*c+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const g=Math.sqrt(v),m=Math.atan2(g,d),p=Math.sin((1-i)*m)/g,y=Math.sin(i*m)/g;return this._w=h*p+this._w*y,this._x=r*p+this._x*y,this._y=c*p+this._y*y,this._z=f*p+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(e),c*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,r=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(wv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(wv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*c,this.y=f[1]*i+f[4]*r+f[7]*c,this.z=f[2]*i+f[5]*r+f[8]*c,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,c=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*c+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*c+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*c+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,c=this.z,f=e.x,h=e.y,d=e.z,v=e.w,g=2*(h*c-d*r),m=2*(d*i-f*c),p=2*(f*r-h*i);return this.x=i+v*g+h*p-d*m,this.y=r+v*m+d*g-f*p,this.z=c+v*p+f*m-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*c,this.y=f[1]*i+f[5]*r+f[9]*c,this.z=f[2]*i+f[6]*r+f[10]*c,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this.z=ze(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this.z=ze(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,c=e.y,f=e.z,h=i.x,d=i.y,v=i.z;return this.x=c*v-f*d,this.y=f*h-r*v,this.z=r*d-c*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,c=this.z-e.z;return i*i+r*r+c*c}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const c=Math.sin(i)*e;return this.x=c*Math.sin(r),this.y=Math.cos(i)*e,this.z=c*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),c=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=c,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new et,wv=new wl;class Ee{constructor(e,i,r,c,f,h,d,v,g){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,c,f,h,d,v,g)}set(e,i,r,c,f,h,d,v,g){const m=this.elements;return m[0]=e,m[1]=c,m[2]=d,m[3]=i,m[4]=f,m[5]=v,m[6]=r,m[7]=h,m[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,c=i.elements,f=this.elements,h=r[0],d=r[3],v=r[6],g=r[1],m=r[4],p=r[7],y=r[2],M=r[5],b=r[8],C=c[0],S=c[3],x=c[6],L=c[1],U=c[4],A=c[7],H=c[2],O=c[5],z=c[8];return f[0]=h*C+d*L+v*H,f[3]=h*S+d*U+v*O,f[6]=h*x+d*A+v*z,f[1]=g*C+m*L+p*H,f[4]=g*S+m*U+p*O,f[7]=g*x+m*A+p*z,f[2]=y*C+M*L+b*H,f[5]=y*S+M*U+b*O,f[8]=y*x+M*A+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],c=e[2],f=e[3],h=e[4],d=e[5],v=e[6],g=e[7],m=e[8];return i*h*m-i*d*g-r*f*m+r*d*v+c*f*g-c*h*v}invert(){const e=this.elements,i=e[0],r=e[1],c=e[2],f=e[3],h=e[4],d=e[5],v=e[6],g=e[7],m=e[8],p=m*h-d*g,y=d*v-m*f,M=g*f-h*v,b=i*p+r*y+c*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=p*C,e[1]=(c*g-m*r)*C,e[2]=(d*r-c*h)*C,e[3]=y*C,e[4]=(m*i-c*v)*C,e[5]=(c*f-d*i)*C,e[6]=M*C,e[7]=(r*v-g*i)*C,e[8]=(h*i-r*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,c,f,h,d){const v=Math.cos(f),g=Math.sin(f);return this.set(r*v,r*g,-r*(v*h+g*d)+h+e,-c*g,c*v,-c*(-g*h+v*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Ed.makeScale(e,i)),this}rotate(e){return this.premultiply(Ed.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ed.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let c=0;c<9;c++)if(i[c]!==r[c])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new Ee;function Xx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mE(){const o=Uu("canvas");return o.style.display="block",o}const Dv={};function bl(o){o in Dv||(Dv[o]=!0,console.warn(o))}function gE(o,e,i){return new Promise(function(r,c){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const Nv=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uv=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _E(){const o={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(c,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===nn&&(c.r=Pa(c.r),c.g=Pa(c.g),c.b=Pa(c.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===nn&&(c.r=uo(c.r),c.g=uo(c.g),c.b=uo(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===_s?Du:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,h){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return bl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return bl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[mo]:{primaries:e,whitePoint:r,transfer:Du,toXYZ:Nv,fromXYZ:Uv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:e,whitePoint:r,transfer:nn,toXYZ:Nv,fromXYZ:Uv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),o}const Ve=_E();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qr;class vE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qr===void 0&&(qr=Uu("canvas")),qr.width=e.width,qr.height=e.height;const c=qr.getContext("2d");e instanceof ImageData?c.putImageData(e,0,0):c.drawImage(e,0,0,e.width,e.height),r=qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const c=r.getImageData(0,0,e.width,e.height),f=c.data;for(let h=0;h<f.length;h++)f[h]=Pa(f[h]/255)*255;return r.putImageData(c,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xE=0;class Jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let h=0,d=c.length;h<d;h++)c[h].isDataTexture?f.push(Td(c[h].image)):f.push(Td(c[h]))}else f=Td(c);r.url=f}return i||(e.images[this.uuid]=r),r}}function Td(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?vE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yE=0;const bd=new et;class ni extends vo{constructor(e=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,r=$s,c=$s,f=ua,h=tr,d=Zi,v=da,g=ni.DEFAULT_ANISOTROPY,m=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Cl(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=v,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}c&&r&&c.isVector2&&r.isVector2||c&&r&&c.isVector3&&r.isVector3||c&&r&&c.isMatrix3&&r.isMatrix3?c.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case up:e.x=e.x-Math.floor(e.x);break;case $s:e.x=e.x<0?0:1;break;case fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case up:e.y=e.y-Math.floor(e.y);break;case $s:e.y=e.y<0?0:1;break;case fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=Ox;ni.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,i=0,r=0,c=1){vn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=c}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,c){return this.x=e,this.y=i,this.z=r,this.w=c,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,c=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*c+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*c+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*c+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*c+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,c,f;const v=e.elements,g=v[0],m=v[4],p=v[8],y=v[1],M=v[5],b=v[9],C=v[2],S=v[6],x=v[10];if(Math.abs(m-y)<.01&&Math.abs(p-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(m+y)<.1&&Math.abs(p+C)<.1&&Math.abs(b+S)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(g+1)/2,A=(M+1)/2,H=(x+1)/2,O=(m+y)/4,z=(p+C)/4,G=(b+S)/4;return U>A&&U>H?U<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(U),c=O/r,f=z/r):A>H?A<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(A),r=O/c,f=G/c):H<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(H),r=z/f,c=G/f),this.set(r,c,f,i),this}let L=Math.sqrt((S-b)*(S-b)+(p-C)*(p-C)+(y-m)*(y-m));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(p-C)/L,this.z=(y-m)/L,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this.z=ze(this.z,e.z,i.z),this.w=ze(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this.z=ze(this.z,e,i),this.w=ze(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SE extends vo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ua,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i);const c={width:e,height:i,depth:r.depth},f=new ni(c);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ua,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=e,this.textures[c].image.height=i,this.textures[c].image.depth=r,this.textures[c].isArrayTexture=this.textures[c].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},e.textures[i].image);this.textures[i].source=new Jp(c)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends SE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class jx extends ni{constructor(e=null,i=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:c},this.magFilter=bi,this.minFilter=bi,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ME extends ni{constructor(e=null,i=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:c},this.magFilter=bi,this.minFilter=bi,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ji):ji.fromBufferAttribute(f,h),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const c=e.children;for(let f=0,h=c.length;f<h;f++)this.expandByObject(c[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),nu.subVectors(this.max,dl),Wr.subVectors(e.a,dl),Yr.subVectors(e.b,dl),Zr.subVectors(e.c,dl),fs.subVectors(Yr,Wr),hs.subVectors(Zr,Yr),Vs.subVectors(Wr,Zr);let i=[0,-fs.z,fs.y,0,-hs.z,hs.y,0,-Vs.z,Vs.y,fs.z,0,-fs.x,hs.z,0,-hs.x,Vs.z,0,-Vs.x,-fs.y,fs.x,0,-hs.y,hs.x,0,-Vs.y,Vs.x,0];return!Ad(i,Wr,Yr,Zr,nu)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,Wr,Yr,Zr,nu))?!1:(iu.crossVectors(fs,hs),i=[iu.x,iu.y,iu.z],Ad(i,Wr,Yr,Zr,nu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new et,new et,new et,new et,new et,new et,new et,new et],ji=new et,eu=new ar,Wr=new et,Yr=new et,Zr=new et,fs=new et,hs=new et,Vs=new et,dl=new et,nu=new et,iu=new et,ks=new et;function Ad(o,e,i,r,c){for(let f=0,h=o.length-3;f<=h;f+=3){ks.fromArray(o,f);const d=c.x*Math.abs(ks.x)+c.y*Math.abs(ks.y)+c.z*Math.abs(ks.z),v=e.dot(ks),g=i.dot(ks),m=r.dot(ks);if(Math.max(-Math.max(v,g,m),Math.min(v,g,m))>d)return!1}return!0}const EE=new ar,pl=new et,Rd=new et;class xo{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):EE.setFromPoints(e).getCenter(r);let c=0;for(let f=0,h=e.length;f<h;f++)c=Math.max(c,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(c),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const i=pl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),c=(r-this.radius)*.5;this.center.addScaledVector(pl,c/r),this.radius+=c}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(Rd)),this.expandByPoint(pl.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Na=new et,Cd=new et,au=new et,ds=new et,wd=new et,su=new et,Dd=new et;class qx{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,r,c){Cd.copy(e).add(i).multiplyScalar(.5),au.copy(i).sub(e).normalize(),ds.copy(this.origin).sub(Cd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(au),d=ds.dot(this.direction),v=-ds.dot(au),g=ds.lengthSq(),m=Math.abs(1-h*h);let p,y,M,b;if(m>0)if(p=h*v-d,y=h*d-v,b=f*m,p>=0)if(y>=-b)if(y<=b){const C=1/m;p*=C,y*=C,M=p*(p+h*y+2*d)+y*(h*p+y+2*v)+g}else y=f,p=Math.max(0,-(h*y+d)),M=-p*p+y*(y+2*v)+g;else y=-f,p=Math.max(0,-(h*y+d)),M=-p*p+y*(y+2*v)+g;else y<=-b?(p=Math.max(0,-(-h*f+d)),y=p>0?-f:Math.min(Math.max(-f,-v),f),M=-p*p+y*(y+2*v)+g):y<=b?(p=0,y=Math.min(Math.max(-f,-v),f),M=y*(y+2*v)+g):(p=Math.max(0,-(h*f+d)),y=p>0?f:Math.min(Math.max(-f,-v),f),M=-p*p+y*(y+2*v)+g);else y=h>0?-f:f,p=Math.max(0,-(h*y+d)),M=-p*p+y*(y+2*v)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,p),c&&c.copy(Cd).addScaledVector(au,y),M}intersectSphere(e,i){Na.subVectors(e.center,this.origin);const r=Na.dot(this.direction),c=Na.dot(Na)-r*r,f=e.radius*e.radius;if(c>f)return null;const h=Math.sqrt(f-c),d=r-h,v=r+h;return v<0?null:d<0?this.at(v,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,c,f,h,d,v;const g=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,c=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,c=(e.min.x-y.x)*g),m>=0?(f=(e.min.y-y.y)*m,h=(e.max.y-y.y)*m):(f=(e.max.y-y.y)*m,h=(e.min.y-y.y)*m),r>h||f>c||((f>r||isNaN(r))&&(r=f),(h<c||isNaN(c))&&(c=h),p>=0?(d=(e.min.z-y.z)*p,v=(e.max.z-y.z)*p):(d=(e.max.z-y.z)*p,v=(e.min.z-y.z)*p),r>v||d>c)||((d>r||r!==r)&&(r=d),(v<c||c!==c)&&(c=v),c<0)?null:this.at(r>=0?r:c,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,r,c,f){wd.subVectors(i,e),su.subVectors(r,e),Dd.crossVectors(wd,su);let h=this.direction.dot(Dd),d;if(h>0){if(c)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ds.subVectors(this.origin,e);const v=d*this.direction.dot(su.crossVectors(ds,su));if(v<0)return null;const g=d*this.direction.dot(wd.cross(ds));if(g<0||v+g>h)return null;const m=-d*ds.dot(Dd);return m<0?null:this.at(m/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,r,c,f,h,d,v,g,m,p,y,M,b,C,S){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,c,f,h,d,v,g,m,p,y,M,b,C,S)}set(e,i,r,c,f,h,d,v,g,m,p,y,M,b,C,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=c,x[1]=f,x[5]=h,x[9]=d,x[13]=v,x[2]=g,x[6]=m,x[10]=p,x[14]=y,x[3]=M,x[7]=b,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,c=1/Kr.setFromMatrixColumn(e,0).length(),f=1/Kr.setFromMatrixColumn(e,1).length(),h=1/Kr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*c,i[1]=r[1]*c,i[2]=r[2]*c,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,c=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),v=Math.cos(c),g=Math.sin(c),m=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const y=h*m,M=h*p,b=d*m,C=d*p;i[0]=v*m,i[4]=-v*p,i[8]=g,i[1]=M+b*g,i[5]=y-C*g,i[9]=-d*v,i[2]=C-y*g,i[6]=b+M*g,i[10]=h*v}else if(e.order==="YXZ"){const y=v*m,M=v*p,b=g*m,C=g*p;i[0]=y+C*d,i[4]=b*d-M,i[8]=h*g,i[1]=h*p,i[5]=h*m,i[9]=-d,i[2]=M*d-b,i[6]=C+y*d,i[10]=h*v}else if(e.order==="ZXY"){const y=v*m,M=v*p,b=g*m,C=g*p;i[0]=y-C*d,i[4]=-h*p,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*m,i[9]=C-y*d,i[2]=-h*g,i[6]=d,i[10]=h*v}else if(e.order==="ZYX"){const y=h*m,M=h*p,b=d*m,C=d*p;i[0]=v*m,i[4]=b*g-M,i[8]=y*g+C,i[1]=v*p,i[5]=C*g+y,i[9]=M*g-b,i[2]=-g,i[6]=d*v,i[10]=h*v}else if(e.order==="YZX"){const y=h*v,M=h*g,b=d*v,C=d*g;i[0]=v*m,i[4]=C-y*p,i[8]=b*p+M,i[1]=p,i[5]=h*m,i[9]=-d*m,i[2]=-g*m,i[6]=M*p+b,i[10]=y-C*p}else if(e.order==="XZY"){const y=h*v,M=h*g,b=d*v,C=d*g;i[0]=v*m,i[4]=-p,i[8]=g*m,i[1]=y*p+C,i[5]=h*m,i[9]=M*p-b,i[2]=b*p-M,i[6]=d*m,i[10]=C*p+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TE,e,bE)}lookAt(e,i,r){const c=this.elements;return Mi.subVectors(e,i),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),ps.crossVectors(r,Mi),ps.lengthSq()===0&&(Math.abs(r.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),ps.crossVectors(r,Mi)),ps.normalize(),ru.crossVectors(Mi,ps),c[0]=ps.x,c[4]=ru.x,c[8]=Mi.x,c[1]=ps.y,c[5]=ru.y,c[9]=Mi.y,c[2]=ps.z,c[6]=ru.z,c[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,c=i.elements,f=this.elements,h=r[0],d=r[4],v=r[8],g=r[12],m=r[1],p=r[5],y=r[9],M=r[13],b=r[2],C=r[6],S=r[10],x=r[14],L=r[3],U=r[7],A=r[11],H=r[15],O=c[0],z=c[4],G=c[8],N=c[12],w=c[1],V=c[5],Q=c[9],ut=c[13],vt=c[2],lt=c[6],j=c[10],ot=c[14],Z=c[3],Et=c[7],_t=c[11],mt=c[15];return f[0]=h*O+d*w+v*vt+g*Z,f[4]=h*z+d*V+v*lt+g*Et,f[8]=h*G+d*Q+v*j+g*_t,f[12]=h*N+d*ut+v*ot+g*mt,f[1]=m*O+p*w+y*vt+M*Z,f[5]=m*z+p*V+y*lt+M*Et,f[9]=m*G+p*Q+y*j+M*_t,f[13]=m*N+p*ut+y*ot+M*mt,f[2]=b*O+C*w+S*vt+x*Z,f[6]=b*z+C*V+S*lt+x*Et,f[10]=b*G+C*Q+S*j+x*_t,f[14]=b*N+C*ut+S*ot+x*mt,f[3]=L*O+U*w+A*vt+H*Z,f[7]=L*z+U*V+A*lt+H*Et,f[11]=L*G+U*Q+A*j+H*_t,f[15]=L*N+U*ut+A*ot+H*mt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],c=e[8],f=e[12],h=e[1],d=e[5],v=e[9],g=e[13],m=e[2],p=e[6],y=e[10],M=e[14],b=e[3],C=e[7],S=e[11],x=e[15];return b*(+f*v*p-c*g*p-f*d*y+r*g*y+c*d*M-r*v*M)+C*(+i*v*M-i*g*y+f*h*y-c*h*M+c*g*m-f*v*m)+S*(+i*g*p-i*d*M-f*h*p+r*h*M+f*d*m-r*g*m)+x*(-c*d*m-i*v*p+i*d*y+c*h*p-r*h*y+r*v*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const c=this.elements;return e.isVector3?(c[12]=e.x,c[13]=e.y,c[14]=e.z):(c[12]=e,c[13]=i,c[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],c=e[2],f=e[3],h=e[4],d=e[5],v=e[6],g=e[7],m=e[8],p=e[9],y=e[10],M=e[11],b=e[12],C=e[13],S=e[14],x=e[15],L=p*S*g-C*y*g+C*v*M-d*S*M-p*v*x+d*y*x,U=b*y*g-m*S*g-b*v*M+h*S*M+m*v*x-h*y*x,A=m*C*g-b*p*g+b*d*M-h*C*M-m*d*x+h*p*x,H=b*p*v-m*C*v-b*d*y+h*C*y+m*d*S-h*p*S,O=i*L+r*U+c*A+f*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return e[0]=L*z,e[1]=(C*y*f-p*S*f-C*c*M+r*S*M+p*c*x-r*y*x)*z,e[2]=(d*S*f-C*v*f+C*c*g-r*S*g-d*c*x+r*v*x)*z,e[3]=(p*v*f-d*y*f-p*c*g+r*y*g+d*c*M-r*v*M)*z,e[4]=U*z,e[5]=(m*S*f-b*y*f+b*c*M-i*S*M-m*c*x+i*y*x)*z,e[6]=(b*v*f-h*S*f-b*c*g+i*S*g+h*c*x-i*v*x)*z,e[7]=(h*y*f-m*v*f+m*c*g-i*y*g-h*c*M+i*v*M)*z,e[8]=A*z,e[9]=(b*p*f-m*C*f-b*r*M+i*C*M+m*r*x-i*p*x)*z,e[10]=(h*C*f-b*d*f+b*r*g-i*C*g-h*r*x+i*d*x)*z,e[11]=(m*d*f-h*p*f-m*r*g+i*p*g+h*r*M-i*d*M)*z,e[12]=H*z,e[13]=(m*C*c-b*p*c+b*r*y-i*C*y-m*r*S+i*p*S)*z,e[14]=(b*d*c-h*C*c-b*r*v+i*C*v+h*r*S-i*d*S)*z,e[15]=(h*p*c-m*d*c+m*r*v-i*p*v-h*r*y+i*d*y)*z,this}scale(e){const i=this.elements,r=e.x,c=e.y,f=e.z;return i[0]*=r,i[4]*=c,i[8]*=f,i[1]*=r,i[5]*=c,i[9]*=f,i[2]*=r,i[6]*=c,i[10]*=f,i[3]*=r,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],c=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,c))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),c=Math.sin(i),f=1-r,h=e.x,d=e.y,v=e.z,g=f*h,m=f*d;return this.set(g*h+r,g*d-c*v,g*v+c*d,0,g*d+c*v,m*d+r,m*v-c*h,0,g*v-c*d,m*v+c*h,f*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,c,f,h){return this.set(1,r,f,0,e,1,h,0,i,c,1,0,0,0,0,1),this}compose(e,i,r){const c=this.elements,f=i._x,h=i._y,d=i._z,v=i._w,g=f+f,m=h+h,p=d+d,y=f*g,M=f*m,b=f*p,C=h*m,S=h*p,x=d*p,L=v*g,U=v*m,A=v*p,H=r.x,O=r.y,z=r.z;return c[0]=(1-(C+x))*H,c[1]=(M+A)*H,c[2]=(b-U)*H,c[3]=0,c[4]=(M-A)*O,c[5]=(1-(y+x))*O,c[6]=(S+L)*O,c[7]=0,c[8]=(b+U)*z,c[9]=(S-L)*z,c[10]=(1-(y+C))*z,c[11]=0,c[12]=e.x,c[13]=e.y,c[14]=e.z,c[15]=1,this}decompose(e,i,r){const c=this.elements;let f=Kr.set(c[0],c[1],c[2]).length();const h=Kr.set(c[4],c[5],c[6]).length(),d=Kr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),e.x=c[12],e.y=c[13],e.z=c[14],qi.copy(this);const g=1/f,m=1/h,p=1/d;return qi.elements[0]*=g,qi.elements[1]*=g,qi.elements[2]*=g,qi.elements[4]*=m,qi.elements[5]*=m,qi.elements[6]*=m,qi.elements[8]*=p,qi.elements[9]*=p,qi.elements[10]*=p,i.setFromRotationMatrix(qi),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,c,f,h,d=ha,v=!1){const g=this.elements,m=2*f/(i-e),p=2*f/(r-c),y=(i+e)/(i-e),M=(r+c)/(r-c);let b,C;if(v)b=f/(h-f),C=h*f/(h-f);else if(d===ha)b=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===Nu)b=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=m,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,c,f,h,d=ha,v=!1){const g=this.elements,m=2/(i-e),p=2/(r-c),y=-(i+e)/(i-e),M=-(r+c)/(r-c);let b,C;if(v)b=1/(h-f),C=h/(h-f);else if(d===ha)b=-2/(h-f),C=-(h+f)/(h-f);else if(d===Nu)b=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=m,g[4]=0,g[8]=0,g[12]=y,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let c=0;c<16;c++)if(i[c]!==r[c])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Kr=new et,qi=new cn,TE=new et(0,0,0),bE=new et(1,1,1),ps=new et,ru=new et,Mi=new et,Lv=new cn,Ov=new wl;class pa{constructor(e=0,i=0,r=0,c=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=c}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,c=this._order){return this._x=e,this._y=i,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const c=e.elements,f=c[0],h=c[4],d=c[8],v=c[1],g=c[5],m=c[9],p=c[2],y=c[6],M=c[10];switch(i){case"XYZ":this._y=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(v,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(ze(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(v,f));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(v,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(ze(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-m,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ov.setFromEuler(this),this.setFromQuaternion(Ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class Wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AE=0;const zv=new et,Qr=new wl,Ua=new cn,ou=new et,ml=new et,RE=new et,CE=new wl,Pv=new et(1,0,0),Iv=new et(0,1,0),Bv=new et(0,0,1),Fv={type:"added"},wE={type:"removed"},Jr={type:"childadded",child:null},Nd={type:"childremoved",child:null};class Bn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new et,i=new pa,r=new wl,c=new et(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new cn},normalMatrix:{value:new Ee}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Qr.setFromAxisAngle(e,i),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,i){return Qr.setFromAxisAngle(e,i),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Pv,e)}rotateY(e){return this.rotateOnAxis(Iv,e)}rotateZ(e){return this.rotateOnAxis(Bv,e)}translateOnAxis(e,i){return zv.copy(e).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Pv,e)}translateY(e){return this.translateOnAxis(Iv,e)}translateZ(e){return this.translateOnAxis(Bv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ou.copy(e):ou.set(e,i,r);const c=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(ml,ou,this.up):Ua.lookAt(ou,ml,this.up),this.quaternion.setFromRotationMatrix(Ua),c&&(Ua.extractRotation(c.matrixWorld),Qr.setFromRotationMatrix(Ua),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fv),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wE),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fv),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,c=this.children.length;r<c;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,RE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(d=>({...d})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(e),c.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(d,v){return d[v.uuid]===void 0&&(d[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const v=d.shapes;if(Array.isArray(v))for(let g=0,m=v.length;g<m;g++){const p=v[g];f(e.shapes,p)}else f(e.shapes,v)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let v=0,g=this.material.length;v<g;v++)d.push(f(e.materials,this.material[v]));c.material=d}else c.material=f(e.materials,this.material);if(this.children.length>0){c.children=[];for(let d=0;d<this.children.length;d++)c.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){c.animations=[];for(let d=0;d<this.animations.length;d++){const v=this.animations[d];c.animations.push(f(e.animations,v))}}if(i){const d=h(e.geometries),v=h(e.materials),g=h(e.textures),m=h(e.images),p=h(e.shapes),y=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),v.length>0&&(r.materials=v),g.length>0&&(r.textures=g),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=c,r;function h(d){const v=[];for(const g in d){const m=d[g];delete m.metadata,v.push(m)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const c=e.children[r];this.add(c.clone())}return this}}Bn.DEFAULT_UP=new et(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new et,La=new et,Ud=new et,Oa=new et,$r=new et,to=new et,Hv=new et,Ld=new et,Od=new et,zd=new et,Pd=new vn,Id=new vn,Bd=new vn;class Yi{constructor(e=new et,i=new et,r=new et){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,c){c.subVectors(r,i),Wi.subVectors(e,i),c.cross(Wi);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(e,i,r,c,f){Wi.subVectors(c,i),La.subVectors(r,i),Ud.subVectors(e,i);const h=Wi.dot(Wi),d=Wi.dot(La),v=Wi.dot(Ud),g=La.dot(La),m=La.dot(Ud),p=h*g-d*d;if(p===0)return f.set(0,0,0),null;const y=1/p,M=(g*v-d*m)*y,b=(h*m-d*v)*y;return f.set(1-M-b,b,M)}static containsPoint(e,i,r,c){return this.getBarycoord(e,i,r,c,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(e,i,r,c,f,h,d,v){return this.getBarycoord(e,i,r,c,Oa)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(f,Oa.x),v.addScaledVector(h,Oa.y),v.addScaledVector(d,Oa.z),v)}static getInterpolatedAttribute(e,i,r,c,f,h){return Pd.setScalar(0),Id.setScalar(0),Bd.setScalar(0),Pd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,r),Bd.fromBufferAttribute(e,c),h.setScalar(0),h.addScaledVector(Pd,f.x),h.addScaledVector(Id,f.y),h.addScaledVector(Bd,f.z),h}static isFrontFacing(e,i,r,c){return Wi.subVectors(r,i),La.subVectors(e,i),Wi.cross(La).dot(c)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,c){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[c]),this}setFromAttributeAndIndices(e,i,r,c){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,c),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Wi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,c,f){return Yi.getInterpolation(e,this.a,this.b,this.c,i,r,c,f)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,c=this.b,f=this.c;let h,d;$r.subVectors(c,r),to.subVectors(f,r),Ld.subVectors(e,r);const v=$r.dot(Ld),g=to.dot(Ld);if(v<=0&&g<=0)return i.copy(r);Od.subVectors(e,c);const m=$r.dot(Od),p=to.dot(Od);if(m>=0&&p<=m)return i.copy(c);const y=v*p-m*g;if(y<=0&&v>=0&&m<=0)return h=v/(v-m),i.copy(r).addScaledVector($r,h);zd.subVectors(e,f);const M=$r.dot(zd),b=to.dot(zd);if(b>=0&&M<=b)return i.copy(f);const C=M*g-v*b;if(C<=0&&g>=0&&b<=0)return d=g/(g-b),i.copy(r).addScaledVector(to,d);const S=m*b-M*p;if(S<=0&&p-m>=0&&M-b>=0)return Hv.subVectors(f,c),d=(p-m)/(p-m+(M-b)),i.copy(c).addScaledVector(Hv,d);const x=1/(S+C+y);return h=C*x,d=y*x,i.copy(r).addScaledVector($r,h).addScaledVector(to,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},lu={h:0,s:0,l:0};function Fd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const c=e;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,i),this}setRGB(e,i,r,c=Ve.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ve.colorSpaceToWorking(this,c),this}setHSL(e,i,r,c=Ve.workingColorSpace){if(e=pE(e,1),i=ze(i,0,1),r=ze(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Fd(h,f,e+1/3),this.g=Fd(h,f,e),this.b=Fd(h,f,e-1/3)}return Ve.colorSpaceToWorking(this,c),this}setStyle(e,i=Ti){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=c[1],d=c[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=c[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ti){const r=Yx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Ve.workingToColorSpace(Yn.copy(this),e),Math.round(ze(Yn.r*255,0,255))*65536+Math.round(ze(Yn.g*255,0,255))*256+Math.round(ze(Yn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ve.workingColorSpace){Ve.workingToColorSpace(Yn.copy(this),i);const r=Yn.r,c=Yn.g,f=Yn.b,h=Math.max(r,c,f),d=Math.min(r,c,f);let v,g;const m=(d+h)/2;if(d===h)v=0,g=0;else{const p=h-d;switch(g=m<=.5?p/(h+d):p/(2-h-d),h){case r:v=(c-f)/p+(c<f?6:0);break;case c:v=(f-r)/p+2;break;case f:v=(r-c)/p+4;break}v/=6}return e.h=v,e.s=g,e.l=m,e}getRGB(e,i=Ve.workingColorSpace){return Ve.workingToColorSpace(Yn.copy(this),i),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Ti){Ve.workingToColorSpace(Yn.copy(this),e);const i=Yn.r,r=Yn.g,c=Yn.b;return e!==Ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(e,i,r){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+i,ms.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ms),e.getHSL(lu);const r=Sd(ms.h,lu.h,i),c=Sd(ms.s,lu.s,i),f=Sd(ms.l,lu.l,i);return this.setHSL(r,c,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,c=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*c,this.g=f[1]*i+f[4]*r+f[7]*c,this.b=f[2]*i+f[5]*r+f[8]*c,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Ue;Ue.NAMES=Yx;let DE=0;class yo extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=co,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=tp,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(r.blending=this.blending),this.side!==ys&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$d&&(r.blendSrc=this.blendSrc),this.blendDst!==tp&&(r.blendDst=this.blendDst),this.blendEquation!==Ks&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Av&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const h=[];for(const d in f){const v=f[d];delete v.metadata,h.push(v)}return h}if(i){const f=c(e.textures),h=c(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const c=i.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lu extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=Ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rn=new et,cu=new Pe;let NE=0;class Ii{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Rv,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[e+c]=i.array[r+c];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)cu.fromBufferAttribute(this,i),cu.applyMatrix3(e),this.setXY(i,cu.x,cu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix3(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=hl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ui(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=hl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ui(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=hl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ui(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=hl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ui(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=hl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ui(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ui(i,this.array),r=ui(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,c){return e*=this.itemSize,this.normalized&&(i=ui(i,this.array),r=ui(r,this.array),c=ui(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=c,this}setXYZW(e,i,r,c,f){return e*=this.itemSize,this.normalized&&(i=ui(i,this.array),r=ui(r,this.array),c=ui(c,this.array),f=ui(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=c,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rv&&(e.usage=this.usage),e}}class Zx extends Ii{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Kx extends Ii{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class yn extends Ii{constructor(e,i,r){super(new Float32Array(e),i,r)}}let UE=0;const zi=new cn,Hd=new Bn,eo=new et,Ei=new ar,gl=new ar,Pn=new et;class ii extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xx(e)?Kx:Zx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new Ee().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(e),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,i,r){return zi.makeTranslation(e,i,r),this.applyMatrix4(zi),this}scale(e,i,r){return zi.makeScale(e,i,r),this.applyMatrix4(zi),this}lookAt(e){return Hd.lookAt(e),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let c=0,f=e.length;c<f;c++){const h=e[c];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new yn(r,3))}else{const r=Math.min(e.length,i.count);for(let c=0;c<r;c++){const f=e[c];i.setXYZ(c,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,c=i.length;r<c;r++){const f=i[r];Ei.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const r=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];gl.setFromBufferAttribute(d),this.morphTargetsRelative?(Pn.addVectors(Ei.min,gl.min),Ei.expandByPoint(Pn),Pn.addVectors(Ei.max,gl.max),Ei.expandByPoint(Pn)):(Ei.expandByPoint(gl.min),Ei.expandByPoint(gl.max))}Ei.getCenter(r);let c=0;for(let f=0,h=e.count;f<h;f++)Pn.fromBufferAttribute(e,f),c=Math.max(c,r.distanceToSquared(Pn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],v=this.morphTargetsRelative;for(let g=0,m=d.count;g<m;g++)Pn.fromBufferAttribute(d,g),v&&(eo.fromBufferAttribute(e,g),Pn.add(eo)),c=Math.max(c,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,c=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],v=[];for(let G=0;G<r.count;G++)d[G]=new et,v[G]=new et;const g=new et,m=new et,p=new et,y=new Pe,M=new Pe,b=new Pe,C=new et,S=new et;function x(G,N,w){g.fromBufferAttribute(r,G),m.fromBufferAttribute(r,N),p.fromBufferAttribute(r,w),y.fromBufferAttribute(f,G),M.fromBufferAttribute(f,N),b.fromBufferAttribute(f,w),m.sub(g),p.sub(g),M.sub(y),b.sub(y);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(C.copy(m).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(V),S.copy(p).multiplyScalar(M.x).addScaledVector(m,-b.x).multiplyScalar(V),d[G].add(C),d[N].add(C),d[w].add(C),v[G].add(S),v[N].add(S),v[w].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let G=0,N=L.length;G<N;++G){const w=L[G],V=w.start,Q=w.count;for(let ut=V,vt=V+Q;ut<vt;ut+=3)x(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const U=new et,A=new et,H=new et,O=new et;function z(G){H.fromBufferAttribute(c,G),O.copy(H);const N=d[G];U.copy(N),U.sub(H.multiplyScalar(H.dot(N))).normalize(),A.crossVectors(O,N);const V=A.dot(v[G])<0?-1:1;h.setXYZW(G,U.x,U.y,U.z,V)}for(let G=0,N=L.length;G<N;++G){const w=L[G],V=w.start,Q=w.count;for(let ut=V,vt=V+Q;ut<vt;ut+=3)z(e.getX(ut+0)),z(e.getX(ut+1)),z(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const c=new et,f=new et,h=new et,d=new et,v=new et,g=new et,m=new et,p=new et;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),m.subVectors(h,f),p.subVectors(c,f),m.cross(p),d.fromBufferAttribute(r,b),v.fromBufferAttribute(r,C),g.fromBufferAttribute(r,S),d.add(m),v.add(m),g.add(m),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,v.x,v.y,v.z),r.setXYZ(S,g.x,g.y,g.z)}else for(let y=0,M=i.count;y<M;y+=3)c.fromBufferAttribute(i,y+0),f.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),m.subVectors(h,f),p.subVectors(c,f),m.cross(p),r.setXYZ(y+0,m.x,m.y,m.z),r.setXYZ(y+1,m.x,m.y,m.z),r.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Pn.fromBufferAttribute(e,i),Pn.normalize(),e.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(d,v){const g=d.array,m=d.itemSize,p=d.normalized,y=new g.constructor(v.length*m);let M=0,b=0;for(let C=0,S=v.length;C<S;C++){d.isInterleavedBufferAttribute?M=v[C]*d.data.stride+d.offset:M=v[C]*m;for(let x=0;x<m;x++)y[b++]=g[M++]}return new Ii(y,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,r=this.index.array,c=this.attributes;for(const d in c){const v=c[d],g=e(v,r);i.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const v=[],g=f[d];for(let m=0,p=g.length;m<p;m++){const y=g[m],M=e(y,r);v.push(M)}i.morphAttributes[d]=v}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,v=h.length;d<v;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const g in v)v[g]!==void 0&&(e[g]=v[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const g=r[v];e.data.attributes[v]=g.toJSON(e.data)}const c={};let f=!1;for(const v in this.morphAttributes){const g=this.morphAttributes[v],m=[];for(let p=0,y=g.length;p<y;p++){const M=g[p];m.push(M.toJSON(e.data))}m.length>0&&(c[v]=m,f=!0)}f&&(e.data.morphAttributes=c,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const c=e.attributes;for(const g in c){const m=c[g];this.setAttribute(g,m.clone(i))}const f=e.morphAttributes;for(const g in f){const m=[],p=f[g];for(let y=0,M=p.length;y<M;y++)m.push(p[y].clone(i));this.morphAttributes[g]=m}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,m=h.length;g<m;g++){const p=h[g];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gv=new cn,Xs=new qx,uu=new xo,Vv=new et,fu=new et,hu=new et,du=new et,Gd=new et,pu=new et,kv=new et,mu=new et;class qe extends Bn{constructor(e=new ii,i=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=c.length;f<h;f++){const d=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(c,e);const d=this.morphTargetInfluences;if(f&&d){pu.set(0,0,0);for(let v=0,g=f.length;v<g;v++){const m=d[v],p=f[v];m!==0&&(Gd.fromBufferAttribute(p,e),h?pu.addScaledVector(Gd,m):pu.addScaledVector(Gd.sub(i),m))}i.add(pu)}return i}raycast(e,i){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(f),Xs.copy(e.ray).recast(e.near),!(uu.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(uu,Vv)===null||Xs.origin.distanceToSquared(Vv)>(e.far-e.near)**2))&&(Gv.copy(f).invert(),Xs.copy(e.ray).applyMatrix4(Gv),!(r.boundingBox!==null&&Xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,r){let c;const f=this.geometry,h=this.material,d=f.index,v=f.attributes.position,g=f.attributes.uv,m=f.attributes.uv1,p=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=y.length;b<C;b++){const S=y[b],x=h[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let A=L,H=U;A<H;A+=3){const O=d.getX(A),z=d.getX(A+1),G=d.getX(A+2);c=gu(this,x,e,r,g,m,p,O,z,G),c&&(c.faceIndex=Math.floor(A/3),c.face.materialIndex=S.materialIndex,i.push(c))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=b,x=C;S<x;S+=3){const L=d.getX(S),U=d.getX(S+1),A=d.getX(S+2);c=gu(this,h,e,r,g,m,p,L,U,A),c&&(c.faceIndex=Math.floor(S/3),i.push(c))}}else if(v!==void 0)if(Array.isArray(h))for(let b=0,C=y.length;b<C;b++){const S=y[b],x=h[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(v.count,Math.min(S.start+S.count,M.start+M.count));for(let A=L,H=U;A<H;A+=3){const O=A,z=A+1,G=A+2;c=gu(this,x,e,r,g,m,p,O,z,G),c&&(c.faceIndex=Math.floor(A/3),c.face.materialIndex=S.materialIndex,i.push(c))}}else{const b=Math.max(0,M.start),C=Math.min(v.count,M.start+M.count);for(let S=b,x=C;S<x;S+=3){const L=S,U=S+1,A=S+2;c=gu(this,h,e,r,g,m,p,L,U,A),c&&(c.faceIndex=Math.floor(S/3),i.push(c))}}}}function LE(o,e,i,r,c,f,h,d){let v;if(e.side===ei?v=r.intersectTriangle(h,f,c,!0,d):v=r.intersectTriangle(c,f,h,e.side===ys,d),v===null)return null;mu.copy(d),mu.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(mu);return g<i.near||g>i.far?null:{distance:g,point:mu.clone(),object:o}}function gu(o,e,i,r,c,f,h,d,v,g){o.getVertexPosition(d,fu),o.getVertexPosition(v,hu),o.getVertexPosition(g,du);const m=LE(o,e,i,r,fu,hu,du,kv);if(m){const p=new et;Yi.getBarycoord(kv,fu,hu,du,p),c&&(m.uv=Yi.getInterpolatedAttribute(c,d,v,g,p,new Pe)),f&&(m.uv1=Yi.getInterpolatedAttribute(f,d,v,g,p,new Pe)),h&&(m.normal=Yi.getInterpolatedAttribute(h,d,v,g,p,new et),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const y={a:d,b:v,c:g,normal:new et,materialIndex:0};Yi.getNormal(fu,hu,du,y.normal),m.face=y,m.barycoord=p}return m}class ir extends ii{constructor(e=1,i=1,r=1,c=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:c,heightSegments:f,depthSegments:h};const d=this;c=Math.floor(c),f=Math.floor(f),h=Math.floor(h);const v=[],g=[],m=[],p=[];let y=0,M=0;b("z","y","x",-1,-1,r,i,e,h,f,0),b("z","y","x",1,-1,r,i,-e,h,f,1),b("x","z","y",1,1,e,r,i,c,h,2),b("x","z","y",1,-1,e,r,-i,c,h,3),b("x","y","z",1,-1,e,i,r,c,f,4),b("x","y","z",-1,-1,e,i,-r,c,f,5),this.setIndex(v),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(m,3)),this.setAttribute("uv",new yn(p,2));function b(C,S,x,L,U,A,H,O,z,G,N){const w=A/z,V=H/G,Q=A/2,ut=H/2,vt=O/2,lt=z+1,j=G+1;let ot=0,Z=0;const Et=new et;for(let _t=0;_t<j;_t++){const mt=_t*V-ut;for(let wt=0;wt<lt;wt++){const kt=wt*w-Q;Et[C]=kt*L,Et[S]=mt*U,Et[x]=vt,g.push(Et.x,Et.y,Et.z),Et[C]=0,Et[S]=0,Et[x]=O>0?1:-1,m.push(Et.x,Et.y,Et.z),p.push(wt/z),p.push(1-_t/G),ot+=1}}for(let _t=0;_t<G;_t++)for(let mt=0;mt<z;mt++){const wt=y+mt+lt*_t,kt=y+mt+lt*(_t+1),I=y+(mt+1)+lt*(_t+1),ft=y+(mt+1)+lt*_t;v.push(wt,kt,ft),v.push(kt,I,ft),Z+=6}d.addGroup(M,Z,N),M+=Z,y+=ot}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const c=o[i][r];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=c.clone():Array.isArray(c)?e[i][r]=c.slice():e[i][r]=c}}return e}function ti(o){const e={};for(let i=0;i<o.length;i++){const r=go(o[i]);for(const c in r)e[c]=r[c]}return e}function OE(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Qx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const zE={clone:go,merge:ti};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const h=this.uniforms[c].value;h&&h.isTexture?i.uniforms[c]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[c]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[c]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[c]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[c]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[c]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[c]={type:"m4",value:h.toArray()}:i.uniforms[c]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Jx extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=ha,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new et,Xv=new Pe,jv=new Pe;class Pi extends Jx{constructor(e=50,i=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hp*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,i){return this.getViewBounds(e,Xv,jv),i.subVectors(jv,Xv)}setViewOffset(e,i,r,c,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yd*.5*this.fov)/this.zoom,r=2*i,c=this.aspect*r,f=-.5*c;const h=this.view;if(this.view!==null&&this.view.enabled){const v=h.fullWidth,g=h.fullHeight;f+=h.offsetX*c/v,i-=h.offsetY*r/g,c*=h.width/v,r*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const no=-90,io=1;class BE extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Pi(no,io,e,i);c.layers=this.layers,this.add(c);const f=new Pi(no,io,e,i);f.layers=this.layers,this.add(f);const h=new Pi(no,io,e,i);h.layers=this.layers,this.add(h);const d=new Pi(no,io,e,i);d.layers=this.layers,this.add(d);const v=new Pi(no,io,e,i);v.layers=this.layers,this.add(v);const g=new Pi(no,io,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,c,f,h,d,v]=i;for(const g of i)this.remove(g);if(e===ha)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,v,g,m]=this.children,p=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,c),e.render(i,f),e.setRenderTarget(r,1,c),e.render(i,h),e.setRenderTarget(r,2,c),e.render(i,d),e.setRenderTarget(r,3,c),e.render(i,v),e.setRenderTarget(r,4,c),e.render(i,g),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,c),e.render(i,m),e.setRenderTarget(p,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class $x extends ni{constructor(e=[],i=ho,r,c,f,h,d,v,g,m){super(e,i,r,c,f,h,d,v,g,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FE extends nr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},c=[r,r,r,r,r,r];this.texture=new $x(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new ir(5,5,5),f=new Ia({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:vs});f.uniforms.tEquirect.value=i;const h=new qe(c,f),d=i.minFilter;return i.minFilter===tr&&(i.minFilter=ua),new BE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,c=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,c);e.setRenderTarget(f)}}class In extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let c=null,f=null,h=null;const d=this._targetRay,v=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),x=this._getHandJoint(g,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],y=m.position.distanceTo(p.position),M=.02,b=.005;g.inputState.pinching&&y>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,f.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(f.linearVelocity)):v.hasLinearVelocity=!1,f.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(f.angularVelocity)):v.hasAngularVelocity=!1));d!==null&&(c=i.getPose(e.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return d!==null&&(d.visible=c!==null),v!==null&&(v.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new In;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class $p{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=i,this.far=r}clone(){return new $p(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class GE extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class VE extends ni{constructor(e=null,i=1,r=1,c,f,h,d,v,g=bi,m=bi,p,y){super(null,h,d,v,g,m,c,f,p,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qv extends Ii{constructor(e,i,r,c=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=c}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ao=new cn,Wv=new cn,_u=[],Yv=new ar,kE=new cn,_l=new qe,vl=new xo;class XE extends qe{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new qv(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let c=0;c<r;c++)this.setMatrixAt(c,kE)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ao),Yv.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union(Yv)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new xo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ao),vl.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(vl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,c=this.morphTexture.source.data.data,f=r.length+1,h=e*f+1;for(let d=0;d<r.length;d++)r[d]=c[h+d]}raycast(e,i){const r=this.matrixWorld,c=this.count;if(_l.geometry=this.geometry,_l.material=this.material,_l.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(r),e.ray.intersectsSphere(vl)!==!1))for(let f=0;f<c;f++){this.getMatrixAt(f,ao),Wv.multiplyMatrices(r,ao),_l.matrixWorld=Wv,_l.raycast(e,_u);for(let h=0,d=_u.length;h<d;h++){const v=_u[h];v.instanceId=f,v.object=this,i.push(v)}_u.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new qv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,c=r.length+1;this.morphTexture===null&&(this.morphTexture=new VE(new Float32Array(c*this.count),c,this.count,Yp,fa));const f=this.morphTexture.source.data.data;let h=0;for(let g=0;g<r.length;g++)h+=r[g];const d=this.geometry.morphTargetsRelative?1:1-h,v=c*e;f[v]=d,f.set(r,v+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kd=new et,jE=new et,qE=new Ee;class Ys{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,c){return this.normal.set(e,i,r),this.constant=c,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const c=kd.subVectors(r,i).cross(jE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(kd),c=this.normal.dot(r);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||qE.getNormalMatrix(e),c=this.coplanarPoint(kd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new xo,WE=new Pe(.5,.5),vu=new et;class tm{constructor(e=new Ys,i=new Ys,r=new Ys,c=new Ys,f=new Ys,h=new Ys){this.planes=[e,i,r,c,f,h]}set(e,i,r,c,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(c),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ha,r=!1){const c=this.planes,f=e.elements,h=f[0],d=f[1],v=f[2],g=f[3],m=f[4],p=f[5],y=f[6],M=f[7],b=f[8],C=f[9],S=f[10],x=f[11],L=f[12],U=f[13],A=f[14],H=f[15];if(c[0].setComponents(g-h,M-m,x-b,H-L).normalize(),c[1].setComponents(g+h,M+m,x+b,H+L).normalize(),c[2].setComponents(g+d,M+p,x+C,H+U).normalize(),c[3].setComponents(g-d,M-p,x-C,H-U).normalize(),r)c[4].setComponents(v,y,S,A).normalize(),c[5].setComponents(g-v,M-y,x-S,H-A).normalize();else if(c[4].setComponents(g-v,M-y,x-S,H-A).normalize(),i===ha)c[5].setComponents(g+v,M+y,x+S,H+A).normalize();else if(i===Nu)c[5].setComponents(v,y,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);const i=WE.distanceTo(e.center);return js.radius=.7071067811865476+i,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const i=this.planes,r=e.center,c=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const c=i[r];if(vu.x=c.normal.x>0?e.max.x:e.min.x,vu.y=c.normal.y>0?e.max.y:e.min.y,vu.z=c.normal.z>0?e.max.z:e.min.z,c.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ty extends yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zv=new cn,Gp=new qx,xu=new xo,yu=new et;class Kv extends Bn{constructor(e=new ii,i=new ty){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,c=this.matrixWorld,f=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(c),xu.radius+=f,e.ray.intersectsSphere(xu)===!1)return;Zv.copy(c).invert(),Gp.copy(e.ray).applyMatrix4(Zv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),v=d*d,g=r.index,p=r.attributes.position;if(g!==null){const y=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=y,C=M;b<C;b++){const S=g.getX(b);yu.fromBufferAttribute(p,S),Qv(yu,S,v,c,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=y,C=M;b<C;b++)yu.fromBufferAttribute(p,b),Qv(yu,b,v,c,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=c.length;f<h;f++){const d=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function Qv(o,e,i,r,c,f,h){const d=Gp.distanceSqToPoint(o);if(d<i){const v=new et;Gp.closestPointToPoint(o,v),v.applyMatrix4(r);const g=c.ray.origin.distanceTo(v);if(g<c.near||g>c.far)return;f.push({distance:g,distanceToRay:Math.sqrt(d),point:v,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class ey extends ni{constructor(e,i,r=er,c,f,h,d=bi,v=bi,g,m=El,p=1){if(m!==El&&m!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:p};super(y,c,f,h,d,v,m,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ny extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Al extends ii{constructor(e=1,i=1,r=1,c=32,f=1,h=!1,d=0,v=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:c,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:v};const g=this;c=Math.floor(c),f=Math.floor(f);const m=[],p=[],y=[],M=[];let b=0;const C=[],S=r/2;let x=0;L(),h===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(m),this.setAttribute("position",new yn(p,3)),this.setAttribute("normal",new yn(y,3)),this.setAttribute("uv",new yn(M,2));function L(){const A=new et,H=new et;let O=0;const z=(i-e)/r;for(let G=0;G<=f;G++){const N=[],w=G/f,V=w*(i-e)+e;for(let Q=0;Q<=c;Q++){const ut=Q/c,vt=ut*v+d,lt=Math.sin(vt),j=Math.cos(vt);H.x=V*lt,H.y=-w*r+S,H.z=V*j,p.push(H.x,H.y,H.z),A.set(lt,z,j).normalize(),y.push(A.x,A.y,A.z),M.push(ut,1-w),N.push(b++)}C.push(N)}for(let G=0;G<c;G++)for(let N=0;N<f;N++){const w=C[N][G],V=C[N+1][G],Q=C[N+1][G+1],ut=C[N][G+1];(e>0||N!==0)&&(m.push(w,V,ut),O+=3),(i>0||N!==f-1)&&(m.push(V,Q,ut),O+=3)}g.addGroup(x,O,0),x+=O}function U(A){const H=b,O=new Pe,z=new et;let G=0;const N=A===!0?e:i,w=A===!0?1:-1;for(let Q=1;Q<=c;Q++)p.push(0,S*w,0),y.push(0,w,0),M.push(.5,.5),b++;const V=b;for(let Q=0;Q<=c;Q++){const vt=Q/c*v+d,lt=Math.cos(vt),j=Math.sin(vt);z.x=N*j,z.y=S*w,z.z=N*lt,p.push(z.x,z.y,z.z),y.push(0,w,0),O.x=lt*.5+.5,O.y=j*.5*w+.5,M.push(O.x,O.y),b++}for(let Q=0;Q<c;Q++){const ut=H+Q,vt=V+Q;A===!0?m.push(vt,vt+1,ut):m.push(vt+1,vt,ut),G+=3}g.addGroup(x,G,A===!0?1:2),x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class em extends Al{constructor(e=1,i=1,r=32,c=1,f=!1,h=0,d=Math.PI*2){super(0,e,i,r,c,f,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:d}}static fromJSON(e){return new em(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nm extends ii{constructor(e=[],i=[],r=1,c=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:c};const f=[],h=[];d(c),g(r),m(),this.setAttribute("position",new yn(f,3)),this.setAttribute("normal",new yn(f.slice(),3)),this.setAttribute("uv",new yn(h,2)),c===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const U=new et,A=new et,H=new et;for(let O=0;O<i.length;O+=3)M(i[O+0],U),M(i[O+1],A),M(i[O+2],H),v(U,A,H,L)}function v(L,U,A,H){const O=H+1,z=[];for(let G=0;G<=O;G++){z[G]=[];const N=L.clone().lerp(A,G/O),w=U.clone().lerp(A,G/O),V=O-G;for(let Q=0;Q<=V;Q++)Q===0&&G===O?z[G][Q]=N:z[G][Q]=N.clone().lerp(w,Q/V)}for(let G=0;G<O;G++)for(let N=0;N<2*(O-G)-1;N++){const w=Math.floor(N/2);N%2===0?(y(z[G][w+1]),y(z[G+1][w]),y(z[G][w])):(y(z[G][w+1]),y(z[G+1][w+1]),y(z[G+1][w]))}}function g(L){const U=new et;for(let A=0;A<f.length;A+=3)U.x=f[A+0],U.y=f[A+1],U.z=f[A+2],U.normalize().multiplyScalar(L),f[A+0]=U.x,f[A+1]=U.y,f[A+2]=U.z}function m(){const L=new et;for(let U=0;U<f.length;U+=3){L.x=f[U+0],L.y=f[U+1],L.z=f[U+2];const A=S(L)/2/Math.PI+.5,H=x(L)/Math.PI+.5;h.push(A,1-H)}b(),p()}function p(){for(let L=0;L<h.length;L+=6){const U=h[L+0],A=h[L+2],H=h[L+4],O=Math.max(U,A,H),z=Math.min(U,A,H);O>.9&&z<.1&&(U<.2&&(h[L+0]+=1),A<.2&&(h[L+2]+=1),H<.2&&(h[L+4]+=1))}}function y(L){f.push(L.x,L.y,L.z)}function M(L,U){const A=L*3;U.x=e[A+0],U.y=e[A+1],U.z=e[A+2]}function b(){const L=new et,U=new et,A=new et,H=new et,O=new Pe,z=new Pe,G=new Pe;for(let N=0,w=0;N<f.length;N+=9,w+=6){L.set(f[N+0],f[N+1],f[N+2]),U.set(f[N+3],f[N+4],f[N+5]),A.set(f[N+6],f[N+7],f[N+8]),O.set(h[w+0],h[w+1]),z.set(h[w+2],h[w+3]),G.set(h[w+4],h[w+5]),H.copy(L).add(U).add(A).divideScalar(3);const V=S(H);C(O,w+0,L,V),C(z,w+2,U,V),C(G,w+4,A,V)}}function C(L,U,A,H){H<0&&L.x===1&&(h[U]=L.x-1),A.x===0&&A.z===0&&(h[U]=H/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nm(e.vertices,e.indices,e.radius,e.details)}}class im extends nm{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,c=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(c,f,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new im(e.radius,e.detail)}}class _o extends ii{constructor(e=1,i=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:c};const f=e/2,h=i/2,d=Math.floor(r),v=Math.floor(c),g=d+1,m=v+1,p=e/d,y=i/v,M=[],b=[],C=[],S=[];for(let x=0;x<m;x++){const L=x*y-h;for(let U=0;U<g;U++){const A=U*p-f;b.push(A,-L,0),C.push(0,0,1),S.push(U/d),S.push(1-x/v)}}for(let x=0;x<v;x++)for(let L=0;L<d;L++){const U=L+g*x,A=L+g*(x+1),H=L+1+g*(x+1),O=L+1+g*x;M.push(U,A,O),M.push(A,H,O)}this.setIndex(M),this.setAttribute("position",new yn(b,3)),this.setAttribute("normal",new yn(C,3)),this.setAttribute("uv",new yn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qs extends ii{constructor(e=1,i=32,r=16,c=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:c,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const v=Math.min(h+d,Math.PI);let g=0;const m=[],p=new et,y=new et,M=[],b=[],C=[],S=[];for(let x=0;x<=r;x++){const L=[],U=x/r;let A=0;x===0&&h===0?A=.5/i:x===r&&v===Math.PI&&(A=-.5/i);for(let H=0;H<=i;H++){const O=H/i;p.x=-e*Math.cos(c+O*f)*Math.sin(h+U*d),p.y=e*Math.cos(h+U*d),p.z=e*Math.sin(c+O*f)*Math.sin(h+U*d),b.push(p.x,p.y,p.z),y.copy(p).normalize(),C.push(y.x,y.y,y.z),S.push(O+A,1-U),L.push(g++)}m.push(L)}for(let x=0;x<r;x++)for(let L=0;L<i;L++){const U=m[x][L+1],A=m[x][L],H=m[x+1][L],O=m[x+1][L+1];(x!==0||h>0)&&M.push(U,A,O),(x!==r-1||v<Math.PI)&&M.push(A,H,O)}this.setIndex(M),this.setAttribute("position",new yn(b,3)),this.setAttribute("normal",new yn(C,3)),this.setAttribute("uv",new yn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ou extends ii{constructor(e=1,i=.4,r=12,c=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:c,arc:f},r=Math.floor(r),c=Math.floor(c);const h=[],d=[],v=[],g=[],m=new et,p=new et,y=new et;for(let M=0;M<=r;M++)for(let b=0;b<=c;b++){const C=b/c*f,S=M/r*Math.PI*2;p.x=(e+i*Math.cos(S))*Math.cos(C),p.y=(e+i*Math.cos(S))*Math.sin(C),p.z=i*Math.sin(S),d.push(p.x,p.y,p.z),m.x=e*Math.cos(C),m.y=e*Math.sin(C),y.subVectors(p,m).normalize(),v.push(y.x,y.y,y.z),g.push(b/c),g.push(M/r)}for(let M=1;M<=r;M++)for(let b=1;b<=c;b++){const C=(c+1)*M+b-1,S=(c+1)*(M-1)+b-1,x=(c+1)*(M-1)+b,L=(c+1)*M+b;h.push(C,S,L),h.push(S,x,L)}this.setIndex(h),this.setAttribute("position",new yn(d,3)),this.setAttribute("normal",new yn(v,3)),this.setAttribute("uv",new yn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Su extends yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vx,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YE extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZE extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class iy extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class KE extends iy{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Xd=new cn,Jv=new et,$v=new et;class QE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=da,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tm,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Jv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jv),$v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($v),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ay extends Jx{constructor(e=-1,i=1,r=1,c=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=c,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,c,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=c+i,v=c-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=m*this.view.offsetY,v=d-m*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JE extends QE{constructor(){super(new ay(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $E extends iy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new JE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tT extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function tx(o,e,i,r){const c=eT(r);switch(i){case Fx:return o*e;case Yp:return o*e/c.components*c.byteLength;case Zp:return o*e/c.components*c.byteLength;case Gx:return o*e*2/c.components*c.byteLength;case Kp:return o*e*2/c.components*c.byteLength;case Hx:return o*e*3/c.components*c.byteLength;case Zi:return o*e*4/c.components*c.byteLength;case Qp:return o*e*4/c.components*c.byteLength;case bu:case Au:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ru:case Cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:case mp:return Math.max(o,16)*Math.max(e,8)/4;case hp:case pp:return Math.max(o,8)*Math.max(e,8)/2;case gp:case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Op:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Pp:case Ip:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Bp:case Fp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eT(o){switch(o){case da:case zx:return{byteLength:1,components:1};case Sl:case Px:case Rl:return{byteLength:2,components:1};case qp:case Wp:return{byteLength:2,components:4};case er:case jp:case fa:return{byteLength:4,components:1};case Ix:case Bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sy(){let o=null,e=!1,i=null,r=null;function c(f,h){i(f,h),r=o.requestAnimationFrame(c)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(c),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function nT(o){const e=new WeakMap;function i(d,v){const g=d.array,m=d.usage,p=g.byteLength,y=o.createBuffer();o.bindBuffer(v,y),o.bufferData(v,g,m),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:p}}function r(d,v,g){const m=v.array,p=v.updateRanges;if(o.bindBuffer(g,d),p.length===0)o.bufferSubData(g,0,m);else{p.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<p.length;M++){const b=p[y],C=p[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++y,p[y]=C)}p.length=y+1;for(let M=0,b=p.length;M<b;M++){const C=p[M];o.bufferSubData(g,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}v.clearUpdateRanges()}v.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const v=e.get(d);v&&(o.deleteBuffer(v.buffer),e.delete(d))}function h(d,v){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,v));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,v),g.version=d.version}}return{get:c,remove:f,update:h}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
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
#endif`,sT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cT=`#ifdef USE_AOMAP
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
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
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
#endif`,hT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gT=`#ifdef USE_IRIDESCENCE
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
#endif`,_T=`#ifdef USE_BUMPMAP
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AT=`#define PI 3.141592653589793
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
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CT=`vec3 transformedNormal = objectNormal;
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
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LT="gl_FragColor = linearToOutputTexel( gl_FragColor );",OT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XT=`#ifdef USE_GRADIENTMAP
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
}`,jT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YT=`uniform bool receiveShadow;
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
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tb=`PhysicalMaterial material;
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
#endif`,eb=`struct PhysicalMaterial {
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
}`,nb=`
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hb=`#if defined( USE_POINTS_UV )
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
#endif`,db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
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
#endif`,xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bb=`#ifdef USE_NORMALMAP
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
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gb=`float getShadowMask() {
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
}`,Vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
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
}`,cA=`#if DEPTH_PACKING == 3200
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
}`,uA=`#define DISTANCE
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
}`,fA=`#define DISTANCE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,_A=`uniform vec3 diffuse;
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
}`,vA=`#define LAMBERT
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
}`,xA=`#define LAMBERT
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
}`,yA=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,MA=`#define NORMAL
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
}`,EA=`#define NORMAL
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
}`,TA=`#define PHONG
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
}`,bA=`#define PHONG
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
}`,AA=`#define STANDARD
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
}`,RA=`#define STANDARD
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
}`,CA=`#define TOON
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
}`,wA=`#define TOON
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
}`,DA=`uniform float size;
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
}`,NA=`uniform vec3 diffuse;
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
}`,UA=`#include <common>
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
}`,LA=`uniform vec3 color;
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
}`,OA=`uniform float rotation;
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
}`,zA=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:iT,alphahash_pars_fragment:aT,alphamap_fragment:sT,alphamap_pars_fragment:rT,alphatest_fragment:oT,alphatest_pars_fragment:lT,aomap_fragment:cT,aomap_pars_fragment:uT,batching_pars_vertex:fT,batching_vertex:hT,begin_vertex:dT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:_T,clipping_planes_fragment:vT,clipping_planes_pars_fragment:xT,clipping_planes_pars_vertex:yT,clipping_planes_vertex:ST,color_fragment:MT,color_pars_fragment:ET,color_pars_vertex:TT,color_vertex:bT,common:AT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:CT,displacementmap_pars_vertex:wT,displacementmap_vertex:DT,emissivemap_fragment:NT,emissivemap_pars_fragment:UT,colorspace_fragment:LT,colorspace_pars_fragment:OT,envmap_fragment:zT,envmap_common_pars_fragment:PT,envmap_pars_fragment:IT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:ZT,envmap_vertex:FT,fog_vertex:HT,fog_pars_vertex:GT,fog_fragment:VT,fog_pars_fragment:kT,gradientmap_pars_fragment:XT,lightmap_pars_fragment:jT,lights_lambert_fragment:qT,lights_lambert_pars_fragment:WT,lights_pars_begin:YT,lights_toon_fragment:KT,lights_toon_pars_fragment:QT,lights_phong_fragment:JT,lights_phong_pars_fragment:$T,lights_physical_fragment:tb,lights_physical_pars_fragment:eb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:ab,logdepthbuf_fragment:sb,logdepthbuf_pars_fragment:rb,logdepthbuf_pars_vertex:ob,logdepthbuf_vertex:lb,map_fragment:cb,map_pars_fragment:ub,map_particle_fragment:fb,map_particle_pars_fragment:hb,metalnessmap_fragment:db,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:_b,morphtarget_pars_vertex:vb,morphtarget_vertex:xb,normal_fragment_begin:yb,normal_fragment_maps:Sb,normal_pars_fragment:Mb,normal_pars_vertex:Eb,normal_vertex:Tb,normalmap_pars_fragment:bb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:wb,opaque_fragment:Db,packing:Nb,premultiplied_alpha_fragment:Ub,project_vertex:Lb,dithering_fragment:Ob,dithering_pars_fragment:zb,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:Bb,shadowmap_pars_vertex:Fb,shadowmap_vertex:Hb,shadowmask_pars_fragment:Gb,skinbase_vertex:Vb,skinning_pars_vertex:kb,skinning_vertex:Xb,skinnormal_vertex:jb,specularmap_fragment:qb,specularmap_pars_fragment:Wb,tonemapping_fragment:Yb,tonemapping_pars_fragment:Zb,transmission_fragment:Kb,transmission_pars_fragment:Qb,uv_pars_fragment:Jb,uv_pars_vertex:$b,uv_vertex:tA,worldpos_vertex:eA,background_vert:nA,background_frag:iA,backgroundCube_vert:aA,backgroundCube_frag:sA,cube_vert:rA,cube_frag:oA,depth_vert:lA,depth_frag:cA,distanceRGBA_vert:uA,distanceRGBA_frag:fA,equirect_vert:hA,equirect_frag:dA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:_A,meshlambert_vert:vA,meshlambert_frag:xA,meshmatcap_vert:yA,meshmatcap_frag:SA,meshnormal_vert:MA,meshnormal_frag:EA,meshphong_vert:TA,meshphong_frag:bA,meshphysical_vert:AA,meshphysical_frag:RA,meshtoon_vert:CA,meshtoon_frag:wA,points_vert:DA,points_frag:NA,shadow_vert:UA,shadow_frag:LA,sprite_vert:OA,sprite_frag:zA},qt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},la={basic:{uniforms:ti([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:ti([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:ti([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:ti([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:ti([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:ti([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:ti([qt.points,qt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:ti([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:ti([qt.common,qt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:ti([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:ti([qt.sprite,qt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:ti([qt.common,qt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:ti([qt.lights,qt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};la.physical={uniforms:ti([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Mu={r:0,b:0,g:0},qs=new pa,PA=new cn;function IA(o,e,i,r,c,f,h){const d=new Ue(0);let v=f===!0?0:1,g,m,p=null,y=0,M=null;function b(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?i:e).get(A)),A}function C(U){let A=!1;const H=b(U);H===null?x(d,v):H&&H.isColor&&(x(H,1),A=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,A){const H=b(A);H&&(H.isCubeTexture||H.mapping===zu)?(m===void 0&&(m=new qe(new ir(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:go(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(m)),qs.copy(A.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),m.material.uniforms.envMap.value=H,m.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(PA.makeRotationFromEuler(qs)),m.material.toneMapped=Ve.getTransfer(H.colorSpace)!==nn,(p!==H||y!==H.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,p=H,y=H.version,M=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):H&&H.isTexture&&(g===void 0&&(g=new qe(new _o(2,2),new Ia({name:"BackgroundMaterial",uniforms:go(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(g)),g.material.uniforms.t2D.value=H,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.toneMapped=Ve.getTransfer(H.colorSpace)!==nn,H.matrixAutoUpdate===!0&&H.updateMatrix(),g.material.uniforms.uvTransform.value.copy(H.matrix),(p!==H||y!==H.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=H,y=H.version,M=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function x(U,A){U.getRGB(Mu,Qx(o)),r.buffers.color.setClear(Mu.r,Mu.g,Mu.b,A,h)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,A=1){d.set(U),v=A,x(d,v)},getClearAlpha:function(){return v},setClearAlpha:function(U){v=U,x(d,v)},render:C,addToRenderList:S,dispose:L}}function BA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},c=y(null);let f=c,h=!1;function d(w,V,Q,ut,vt){let lt=!1;const j=p(ut,Q,V);f!==j&&(f=j,g(f.object)),lt=M(w,ut,Q,vt),lt&&b(w,ut,Q,vt),vt!==null&&e.update(vt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,A(w,V,Q,ut),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function v(){return o.createVertexArray()}function g(w){return o.bindVertexArray(w)}function m(w){return o.deleteVertexArray(w)}function p(w,V,Q){const ut=Q.wireframe===!0;let vt=r[w.id];vt===void 0&&(vt={},r[w.id]=vt);let lt=vt[V.id];lt===void 0&&(lt={},vt[V.id]=lt);let j=lt[ut];return j===void 0&&(j=y(v()),lt[ut]=j),j}function y(w){const V=[],Q=[],ut=[];for(let vt=0;vt<i;vt++)V[vt]=0,Q[vt]=0,ut[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:ut,object:w,attributes:{},index:null}}function M(w,V,Q,ut){const vt=f.attributes,lt=V.attributes;let j=0;const ot=Q.getAttributes();for(const Z in ot)if(ot[Z].location>=0){const _t=vt[Z];let mt=lt[Z];if(mt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(mt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(mt=w.instanceColor)),_t===void 0||_t.attribute!==mt||mt&&_t.data!==mt.data)return!0;j++}return f.attributesNum!==j||f.index!==ut}function b(w,V,Q,ut){const vt={},lt=V.attributes;let j=0;const ot=Q.getAttributes();for(const Z in ot)if(ot[Z].location>=0){let _t=lt[Z];_t===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor));const mt={};mt.attribute=_t,_t&&_t.data&&(mt.data=_t.data),vt[Z]=mt,j++}f.attributes=vt,f.attributesNum=j,f.index=ut}function C(){const w=f.newAttributes;for(let V=0,Q=w.length;V<Q;V++)w[V]=0}function S(w){x(w,0)}function x(w,V){const Q=f.newAttributes,ut=f.enabledAttributes,vt=f.attributeDivisors;Q[w]=1,ut[w]===0&&(o.enableVertexAttribArray(w),ut[w]=1),vt[w]!==V&&(o.vertexAttribDivisor(w,V),vt[w]=V)}function L(){const w=f.newAttributes,V=f.enabledAttributes;for(let Q=0,ut=V.length;Q<ut;Q++)V[Q]!==w[Q]&&(o.disableVertexAttribArray(Q),V[Q]=0)}function U(w,V,Q,ut,vt,lt,j){j===!0?o.vertexAttribIPointer(w,V,Q,vt,lt):o.vertexAttribPointer(w,V,Q,ut,vt,lt)}function A(w,V,Q,ut){C();const vt=ut.attributes,lt=Q.getAttributes(),j=V.defaultAttributeValues;for(const ot in lt){const Z=lt[ot];if(Z.location>=0){let Et=vt[ot];if(Et===void 0&&(ot==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),ot==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){const _t=Et.normalized,mt=Et.itemSize,wt=e.get(Et);if(wt===void 0)continue;const kt=wt.buffer,I=wt.type,ft=wt.bytesPerElement,W=I===o.INT||I===o.UNSIGNED_INT||Et.gpuType===jp;if(Et.isInterleavedBufferAttribute){const at=Et.data,Tt=at.stride,Bt=Et.offset;if(at.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Z.locationSize;Ct++)x(Z.location+Ct,at.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ct=0;Ct<Z.locationSize;Ct++)S(Z.location+Ct);o.bindBuffer(o.ARRAY_BUFFER,kt);for(let Ct=0;Ct<Z.locationSize;Ct++)U(Z.location+Ct,mt/Z.locationSize,I,_t,Tt*ft,(Bt+mt/Z.locationSize*Ct)*ft,W)}else{if(Et.isInstancedBufferAttribute){for(let at=0;at<Z.locationSize;at++)x(Z.location+at,Et.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let at=0;at<Z.locationSize;at++)S(Z.location+at);o.bindBuffer(o.ARRAY_BUFFER,kt);for(let at=0;at<Z.locationSize;at++)U(Z.location+at,mt/Z.locationSize,I,_t,mt*ft,mt/Z.locationSize*at*ft,W)}}else if(j!==void 0){const _t=j[ot];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(Z.location,_t);break;case 3:o.vertexAttrib3fv(Z.location,_t);break;case 4:o.vertexAttrib4fv(Z.location,_t);break;default:o.vertexAttrib1fv(Z.location,_t)}}}}L()}function H(){G();for(const w in r){const V=r[w];for(const Q in V){const ut=V[Q];for(const vt in ut)m(ut[vt].object),delete ut[vt];delete V[Q]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const Q in V){const ut=V[Q];for(const vt in ut)m(ut[vt].object),delete ut[vt];delete V[Q]}delete r[w.id]}function z(w){for(const V in r){const Q=r[V];if(Q[w.id]===void 0)continue;const ut=Q[w.id];for(const vt in ut)m(ut[vt].object),delete ut[vt];delete Q[w.id]}}function G(){N(),h=!0,f!==c&&(f=c,g(f.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:G,resetDefaultState:N,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:L}}function FA(o,e,i){let r;function c(g){r=g}function f(g,m){o.drawArrays(r,g,m),i.update(m,r,1)}function h(g,m,p){p!==0&&(o.drawArraysInstanced(r,g,m,p),i.update(m,r,p))}function d(g,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,p);let M=0;for(let b=0;b<p;b++)M+=m[b];i.update(M,r,1)}function v(g,m,p,y){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)h(g[b],m[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,m,0,y,0,p);let b=0;for(let C=0;C<p;C++)b+=m[C]*y[C];i.update(b,r,1)}}this.setMode=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=v}function HA(o,e,i,r){let c;function f(){if(c!==void 0)return c;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");c=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(z){return!(z!==Zi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const G=z===Rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==da&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==fa&&!G)}function v(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const m=v(g);m!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",m,"instead."),g=m);const p=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:v,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:H,maxSamples:O}}function GA(o){const e=this;let i=null,r=0,c=!1,f=!1;const h=new Ys,d=new Ee,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(p,y){const M=p.length!==0||y||r!==0||c;return c=y,r=p.length,M},this.beginShadows=function(){f=!0,m(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,y){i=m(p,y,0)},this.setState=function(p,y,M){const b=p.clippingPlanes,C=p.clipIntersection,S=p.clipShadows,x=o.get(p);if(!c||b===null||b.length===0||f&&!S)f?m(null):g();else{const L=f?0:r,U=L*4;let A=x.clippingState||null;v.value=A,A=m(b,y,U,M);for(let H=0;H!==U;++H)A[H]=i[H];x.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function g(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,y,M,b){const C=p!==null?p.length:0;let S=null;if(C!==0){if(S=v.value,b!==!0||S===null){const x=M+C*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let U=0,A=M;U!==C;++U,A+=4)h.copy(p[U]).applyMatrix4(L,d),h.normal.toArray(S,A),S[A+3]=h.constant}v.value=S,v.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function VA(o){let e=new WeakMap;function i(h,d){return d===lp?h.mapping=ho:d===cp&&(h.mapping=po),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===lp||d===cp)if(e.has(h)){const v=e.get(h).texture;return i(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const g=new FE(v.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",c),i(g.texture,h.mapping)}else return null}}return h}function c(h){const d=h.target;d.removeEventListener("dispose",c);const v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const lo=4,ex=[.125,.215,.35,.446,.526,.582],Js=20,jd=new ay,nx=new Ue;let qd=null,Wd=0,Yd=0,Zd=!1;const Zs=(1+Math.sqrt(5))/2,so=1/Zs,ix=[new et(-Zs,so,0),new et(Zs,so,0),new et(-so,0,Zs),new et(so,0,Zs),new et(0,Zs,-so),new et(0,Zs,so),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],kA=new et;class ax{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,c=100,f={}){const{size:h=256,position:d=kA}=f;qd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,c,v,d),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qd,Wd,Yd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,Eu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ua,minFilter:ua,generateMipmaps:!1,type:Rl,format:Zi,colorSpace:mo,depthBuffer:!1},c=sx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XA(f)),this._blurMaterial=jA(f,e,i)}return c}_compileMaterial(e){const i=new qe(this._lodPlanes[0],e);this._renderer.compile(i,jd)}_sceneToCubeUV(e,i,r,c,f){const v=new Pi(90,1,i,r),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,y=p.autoClear,M=p.toneMapping;p.getClearColor(nx),p.toneMapping=xs,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(c),p.clearDepth(),p.setRenderTarget(null));const C=new Lu({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),S=new qe(new ir,C);let x=!1;const L=e.background;L?L.isColor&&(C.color.copy(L),e.background=null,x=!0):(C.color.copy(nx),x=!0);for(let U=0;U<6;U++){const A=U%3;A===0?(v.up.set(0,g[U],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x+m[U],f.y,f.z)):A===1?(v.up.set(0,0,g[U]),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y+m[U],f.z)):(v.up.set(0,g[U],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y,f.z+m[U]));const H=this._cubeSize;Eu(c,A*H,U>2?H:0,H,H),p.setRenderTarget(c),x&&p.render(S,v),p.render(e,v)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=M,p.autoClear=y,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,c=e.mapping===ho||e.mapping===po;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rx());const f=c?this._cubemapMaterial:this._equirectMaterial,h=new qe(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const v=this._cubeSize;Eu(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(h,jd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=ix[(c-f-1)%ix.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,c,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,c,"latitudinal",f),this._halfBlur(h,e,r,r,c,"longitudinal",f)}_halfBlur(e,i,r,c,f,h,d){const v=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new qe(this._lodPlanes[c],g),y=g.uniforms,M=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Js-1),C=f/b,S=isFinite(f)?1+Math.floor(m*C):Js;S>Js&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Js}`);const x=[];let L=0;for(let z=0;z<Js;++z){const G=z/C,N=Math.exp(-G*G/2);x.push(N),z===0?L+=N:z<S&&(L+=2*N)}for(let z=0;z<x.length;z++)x[z]=x[z]/L;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=b,y.mipInt.value=U-r;const A=this._sizeLods[c],H=3*A*(c>U-lo?c-U+lo:0),O=4*(this._cubeSize-A);Eu(i,H,O,3*A,2*A),v.setRenderTarget(i),v.render(p,jd)}}function XA(o){const e=[],i=[],r=[];let c=o;const f=o-lo+1+ex.length;for(let h=0;h<f;h++){const d=Math.pow(2,c);i.push(d);let v=1/d;h>o-lo?v=ex[h-o+lo-1]:h===0&&(v=0),r.push(v);const g=1/(d-2),m=-g,p=1+g,y=[m,m,p,m,p,p,m,m,p,p,m,p],M=6,b=6,C=3,S=2,x=1,L=new Float32Array(C*b*M),U=new Float32Array(S*b*M),A=new Float32Array(x*b*M);for(let O=0;O<M;O++){const z=O%3*2/3-1,G=O>2?0:-1,N=[z,G,0,z+2/3,G,0,z+2/3,G+1,0,z,G,0,z+2/3,G+1,0,z,G+1,0];L.set(N,C*b*O),U.set(y,S*b*O);const w=[O,O,O,O,O,O];A.set(w,x*b*O)}const H=new ii;H.setAttribute("position",new Ii(L,C)),H.setAttribute("uv",new Ii(U,S)),H.setAttribute("faceIndex",new Ii(A,x)),e.push(H),c>lo&&c--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function sx(o,e,i){const r=new nr(o,e,i);return r.texture.mapping=zu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Eu(o,e,i,r,c){o.viewport.set(e,i,r,c),o.scissor.set(e,i,r,c)}function jA(o,e,i){const r=new Float32Array(Js),c=new et(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:am(),fragmentShader:`

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
		`,blending:vs,depthTest:!1,depthWrite:!1})}function rx(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:am(),fragmentShader:`

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
		`,blending:vs,depthTest:!1,depthWrite:!1})}function ox(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vs,depthTest:!1,depthWrite:!1})}function am(){return`

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
	`}function qA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const v=d.mapping,g=v===lp||v===cp,m=v===ho||v===po;if(g||m){let p=e.get(d);const y=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new ax(o)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||m&&M&&c(M)?(i===null&&(i=new ax(o)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function c(d){let v=0;const g=6;for(let m=0;m<g;m++)d[m]!==void 0&&v++;return v===g}function f(d){const v=d.target;v.removeEventListener("dispose",f);const g=e.get(v);g!==void 0&&(e.delete(v),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function WA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let c;switch(r){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(r)}return e[r]=c,c}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const c=i(r);return c===null&&bl("THREE.WebGLRenderer: "+r+" extension not supported."),c}}}function YA(o,e,i,r){const c={},f=new WeakMap;function h(p){const y=p.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete c[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(p,y){return c[y.id]===!0||(y.addEventListener("dispose",h),c[y.id]=!0,i.memory.geometries++),y}function v(p){const y=p.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function g(p){const y=[],M=p.index,b=p.attributes.position;let C=0;if(M!==null){const L=M.array;C=M.version;for(let U=0,A=L.length;U<A;U+=3){const H=L[U+0],O=L[U+1],z=L[U+2];y.push(H,O,O,z,z,H)}}else if(b!==void 0){const L=b.array;C=b.version;for(let U=0,A=L.length/3-1;U<A;U+=3){const H=U+0,O=U+1,z=U+2;y.push(H,O,O,z,z,H)}}else return;const S=new(Xx(y)?Kx:Zx)(y,1);S.version=C;const x=f.get(p);x&&e.remove(x),f.set(p,S)}function m(p){const y=f.get(p);if(y){const M=p.index;M!==null&&y.version<M.version&&g(p)}else g(p);return f.get(p)}return{get:d,update:v,getWireframeAttribute:m}}function ZA(o,e,i){let r;function c(y){r=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function v(y,M){o.drawElements(r,M,f,y*h),i.update(M,r,1)}function g(y,M,b){b!==0&&(o.drawElementsInstanced(r,M,f,y*h,b),i.update(M,r,b))}function m(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,y,0,b);let S=0;for(let x=0;x<b;x++)S+=M[x];i.update(S,r,1)}function p(y,M,b,C){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)g(y[x]/h,M[x],C[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,f,y,0,C,0,b);let x=0;for(let L=0;L<b;L++)x+=M[L]*C[L];i.update(x,r,1)}}this.setMode=c,this.setIndex=d,this.render=v,this.renderInstances=g,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function KA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:c,update:r}}function QA(o,e,i){const r=new WeakMap,c=new vn;function f(h,d,v){const g=h.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=m!==void 0?m.length:0;let y=r.get(d);if(y===void 0||y.count!==p){let w=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),C===!0&&(A=2),S===!0&&(A=3);let H=d.attributes.position.count*A,O=1;H>e.maxTextureSize&&(O=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*O*4*p),G=new jx(z,H,O,p);G.type=fa,G.needsUpdate=!0;const N=A*4;for(let V=0;V<p;V++){const Q=x[V],ut=L[V],vt=U[V],lt=H*O*4*V;for(let j=0;j<Q.count;j++){const ot=j*N;b===!0&&(c.fromBufferAttribute(Q,j),z[lt+ot+0]=c.x,z[lt+ot+1]=c.y,z[lt+ot+2]=c.z,z[lt+ot+3]=0),C===!0&&(c.fromBufferAttribute(ut,j),z[lt+ot+4]=c.x,z[lt+ot+5]=c.y,z[lt+ot+6]=c.z,z[lt+ot+7]=0),S===!0&&(c.fromBufferAttribute(vt,j),z[lt+ot+8]=c.x,z[lt+ot+9]=c.y,z[lt+ot+10]=c.z,z[lt+ot+11]=vt.itemSize===4?c.w:1)}}y={count:p,texture:G,size:new Pe(H,O)},r.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let S=0;S<g.length;S++)b+=g[S];const C=d.morphTargetsRelative?1:1-b;v.getUniforms().setValue(o,"morphTargetBaseInfluence",C),v.getUniforms().setValue(o,"morphTargetInfluences",g)}v.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function JA(o,e,i,r){let c=new WeakMap;function f(v){const g=r.render.frame,m=v.geometry,p=e.get(v,m);if(c.get(p)!==g&&(e.update(p),c.set(p,g)),v.isInstancedMesh&&(v.hasEventListener("dispose",d)===!1&&v.addEventListener("dispose",d),c.get(v)!==g&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),c.set(v,g))),v.isSkinnedMesh){const y=v.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return p}function h(){c=new WeakMap}function d(v){const g=v.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const ry=new ni,lx=new ey(1,1),oy=new jx,ly=new ME,cy=new $x,cx=[],ux=[],fx=new Float32Array(16),hx=new Float32Array(9),dx=new Float32Array(4);function So(o,e,i){const r=o[0];if(r<=0||r>0)return o;const c=e*i;let f=cx[c];if(f===void 0&&(f=new Float32Array(c),cx[c]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Nn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Pu(o,e){let i=ux[e];i===void 0&&(i=new Int32Array(e),ux[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function $A(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function t2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;o.uniform2fv(this.addr,e),Un(i,e)}}function e2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Nn(i,e))return;o.uniform3fv(this.addr,e),Un(i,e)}}function n2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;o.uniform4fv(this.addr,e),Un(i,e)}}function i2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;dx.set(r),o.uniformMatrix2fv(this.addr,!1,dx),Un(i,r)}}function a2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;hx.set(r),o.uniformMatrix3fv(this.addr,!1,hx),Un(i,r)}}function s2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;fx.set(r),o.uniformMatrix4fv(this.addr,!1,fx),Un(i,r)}}function r2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function o2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;o.uniform2iv(this.addr,e),Un(i,e)}}function l2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;o.uniform3iv(this.addr,e),Un(i,e)}}function c2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;o.uniform4iv(this.addr,e),Un(i,e)}}function u2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function f2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;o.uniform2uiv(this.addr,e),Un(i,e)}}function h2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;o.uniform3uiv(this.addr,e),Un(i,e)}}function d2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;o.uniform4uiv(this.addr,e),Un(i,e)}}function p2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(lx.compareFunction=kx,f=lx):f=ry,i.setTexture2D(e||f,c)}function m2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture3D(e||ly,c)}function g2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTextureCube(e||cy,c)}function _2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture2DArray(e||oy,c)}function v2(o){switch(o){case 5126:return $A;case 35664:return t2;case 35665:return e2;case 35666:return n2;case 35674:return i2;case 35675:return a2;case 35676:return s2;case 5124:case 35670:return r2;case 35667:case 35671:return o2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return u2;case 36294:return f2;case 36295:return h2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return _2}}function x2(o,e){o.uniform1fv(this.addr,e)}function y2(o,e){const i=So(e,this.size,2);o.uniform2fv(this.addr,i)}function S2(o,e){const i=So(e,this.size,3);o.uniform3fv(this.addr,i)}function M2(o,e){const i=So(e,this.size,4);o.uniform4fv(this.addr,i)}function E2(o,e){const i=So(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function T2(o,e){const i=So(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function b2(o,e){const i=So(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function A2(o,e){o.uniform1iv(this.addr,e)}function R2(o,e){o.uniform2iv(this.addr,e)}function C2(o,e){o.uniform3iv(this.addr,e)}function w2(o,e){o.uniform4iv(this.addr,e)}function D2(o,e){o.uniform1uiv(this.addr,e)}function N2(o,e){o.uniform2uiv(this.addr,e)}function U2(o,e){o.uniform3uiv(this.addr,e)}function L2(o,e){o.uniform4uiv(this.addr,e)}function O2(o,e,i){const r=this.cache,c=e.length,f=Pu(i,c);Nn(r,f)||(o.uniform1iv(this.addr,f),Un(r,f));for(let h=0;h!==c;++h)i.setTexture2D(e[h]||ry,f[h])}function z2(o,e,i){const r=this.cache,c=e.length,f=Pu(i,c);Nn(r,f)||(o.uniform1iv(this.addr,f),Un(r,f));for(let h=0;h!==c;++h)i.setTexture3D(e[h]||ly,f[h])}function P2(o,e,i){const r=this.cache,c=e.length,f=Pu(i,c);Nn(r,f)||(o.uniform1iv(this.addr,f),Un(r,f));for(let h=0;h!==c;++h)i.setTextureCube(e[h]||cy,f[h])}function I2(o,e,i){const r=this.cache,c=e.length,f=Pu(i,c);Nn(r,f)||(o.uniform1iv(this.addr,f),Un(r,f));for(let h=0;h!==c;++h)i.setTexture2DArray(e[h]||oy,f[h])}function B2(o){switch(o){case 5126:return x2;case 35664:return y2;case 35665:return S2;case 35666:return M2;case 35674:return E2;case 35675:return T2;case 35676:return b2;case 5124:case 35670:return A2;case 35667:case 35671:return R2;case 35668:case 35672:return C2;case 35669:case 35673:return w2;case 5125:return D2;case 36294:return N2;case 36295:return U2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return I2}}class F2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=v2(i.type)}}class H2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=B2(i.type)}}class G2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const c=this.seq;for(let f=0,h=c.length;f!==h;++f){const d=c[f];d.setValue(e,i[d.id],r)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function px(o,e){o.seq.push(e),o.map[e.id]=e}function V2(o,e,i){const r=o.name,c=r.length;for(Kd.lastIndex=0;;){const f=Kd.exec(r),h=Kd.lastIndex;let d=f[1];const v=f[2]==="]",g=f[3];if(v&&(d=d|0),g===void 0||g==="["&&h+2===c){px(i,g===void 0?new F2(d,o,e):new H2(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new G2(d),px(i,p)),i=p}}}class wu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(i,c),h=e.getUniformLocation(i,f.name);V2(f,h,this)}}setValue(e,i,r,c){const f=this.map[i];f!==void 0&&f.setValue(e,r,c)}setOptional(e,i,r){const c=i[r];c!==void 0&&this.setValue(e,r,c)}static upload(e,i,r,c){for(let f=0,h=i.length;f!==h;++f){const d=i[f],v=r[d.id];v.needsUpdate!==!1&&d.setValue(e,v.value,c)}}static seqWithValue(e,i){const r=[];for(let c=0,f=e.length;c!==f;++c){const h=e[c];h.id in i&&r.push(h)}return r}}function mx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const k2=37297;let X2=0;function j2(o,e){const i=o.split(`
`),r=[],c=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=c;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const gx=new Ee;function q2(o){Ve._getMatrix(gx,Ve.workingColorSpace,o);const e=`mat3( ${gx.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(o)){case Du:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _x(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+j2(o.getShaderSource(e),d)}else return f}function W2(o,e){const i=q2(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Y2(o,e){let i;switch(e){case KM:i="Linear";break;case QM:i="Reinhard";break;case JM:i="Cineon";break;case Lx:i="ACESFilmic";break;case tE:i="AgX";break;case eE:i="Neutral";break;case $M:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tu=new et;function Z2(){Ve.getLuminanceCoefficients(Tu);const o=Tu.x.toFixed(4),e=Tu.y.toFixed(4),i=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function Q2(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function J2(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=o.getActiveAttrib(e,c),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function xl(o){return o!==""}function vx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vp(o){return o.replace($2,eR)}const tR=new Map;function eR(o,e){let i=Te[e];if(i===void 0){const r=tR.get(e);if(r!==void 0)i=Te[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vp(i)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yx(o){return o.replace(nR,iR)}function iR(o,e,i,r){let c="";for(let f=parseInt(e);f<parseInt(i);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function Sx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function aR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Dx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===za&&(e="SHADOWMAP_TYPE_VSM"),e}function sR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case zu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function oR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ux:e="ENVMAP_BLENDING_MULTIPLY";break;case YM:e="ENVMAP_BLENDING_MIX";break;case ZM:e="ENVMAP_BLENDING_ADD";break}return e}function lR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function cR(o,e,i,r){const c=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const v=aR(i),g=sR(i),m=rR(i),p=oR(i),y=lR(i),M=K2(i),b=Q2(f),C=c.createProgram();let S,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(xl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(xl).join(`
`),x.length>0&&(x+=`
`)):(S=[Sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),x=[Sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+m:"",i.envMap?"#define "+p:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xs?"#define TONE_MAPPING":"",i.toneMapping!==xs?Te.tonemapping_pars_fragment:"",i.toneMapping!==xs?Y2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,W2("linearToOutputTexel",i.outputColorSpace),Z2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xl).join(`
`)),h=Vp(h),h=vx(h,i),h=xx(h,i),d=Vp(d),d=vx(d,i),d=xx(d,i),h=yx(h),d=yx(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===Cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=L+S+h,A=L+x+d,H=mx(c,c.VERTEX_SHADER,U),O=mx(c,c.FRAGMENT_SHADER,A);c.attachShader(C,H),c.attachShader(C,O),i.index0AttributeName!==void 0?c.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&c.bindAttribLocation(C,0,"position"),c.linkProgram(C);function z(V){if(o.debug.checkShaderErrors){const Q=c.getProgramInfoLog(C)||"",ut=c.getShaderInfoLog(H)||"",vt=c.getShaderInfoLog(O)||"",lt=Q.trim(),j=ut.trim(),ot=vt.trim();let Z=!0,Et=!0;if(c.getProgramParameter(C,c.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,C,H,O);else{const _t=_x(c,H,"vertex"),mt=_x(c,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(C,c.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+_t+`
`+mt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(j===""||ot==="")&&(Et=!1);Et&&(V.diagnostics={runnable:Z,programLog:lt,vertexShader:{log:j,prefix:S},fragmentShader:{log:ot,prefix:x}})}c.deleteShader(H),c.deleteShader(O),G=new wu(c,C),N=J2(c,C)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=c.getProgramParameter(C,k2)),w},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=X2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=O,this}let uR=0;class fR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,c=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new hR(e),i.set(e,r)),r}}class hR{constructor(e){this.id=uR++,this.code=e,this.usedTimes=0}}function dR(o,e,i,r,c,f,h){const d=new Wx,v=new fR,g=new Set,m=[],p=c.logarithmicDepthBuffer,y=c.vertexTextures;let M=c.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(N){return g.add(N),N===0?"uv":`uv${N}`}function S(N,w,V,Q,ut){const vt=Q.fog,lt=ut.geometry,j=N.isMeshStandardMaterial?Q.environment:null,ot=(N.isMeshStandardMaterial?i:e).get(N.envMap||j),Z=ot&&ot.mapping===zu?ot.image.height:null,Et=b[N.type];N.precision!==null&&(M=c.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const _t=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,mt=_t!==void 0?_t.length:0;let wt=0;lt.morphAttributes.position!==void 0&&(wt=1),lt.morphAttributes.normal!==void 0&&(wt=2),lt.morphAttributes.color!==void 0&&(wt=3);let kt,I,ft,W;if(Et){const be=la[Et];kt=be.vertexShader,I=be.fragmentShader}else kt=N.vertexShader,I=N.fragmentShader,v.update(N),ft=v.getVertexShaderID(N),W=v.getFragmentShaderID(N);const at=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Bt=ut.isInstancedMesh===!0,Ct=ut.isBatchedMesh===!0,Y=!!N.map,zt=!!N.matcap,F=!!ot,ve=!!N.aoMap,te=!!N.lightMap,Wt=!!N.bumpMap,Pt=!!N.normalMap,re=!!N.displacementMap,Lt=!!N.emissiveMap,ge=!!N.metalnessMap,Ye=!!N.roughnessMap,we=N.anisotropy>0,P=N.clearcoat>0,T=N.dispersion>0,st=N.iridescence>0,xt=N.sheen>0,bt=N.transmission>0,pt=we&&!!N.anisotropyMap,Kt=P&&!!N.clearcoatMap,It=P&&!!N.clearcoatNormalMap,ee=P&&!!N.clearcoatRoughnessMap,ae=st&&!!N.iridescenceMap,Dt=st&&!!N.iridescenceThicknessMap,Vt=xt&&!!N.sheenColorMap,le=xt&&!!N.sheenRoughnessMap,Jt=!!N.specularMap,Xt=!!N.specularColorMap,fe=!!N.specularIntensityMap,X=bt&&!!N.transmissionMap,Nt=bt&&!!N.thicknessMap,Ut=!!N.gradientMap,Yt=!!N.alphaMap,At=N.alphaTest>0,Mt=!!N.alphaHash,$t=!!N.extensions;let me=xs;N.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(me=o.toneMapping);const Be={shaderID:Et,shaderType:N.type,shaderName:N.name,vertexShader:kt,fragmentShader:I,defines:N.defines,customVertexShaderID:ft,customFragmentShaderID:W,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Ct,batchingColor:Ct&&ut._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&ut.instanceColor!==null,instancingMorph:Bt&&ut.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:at===null?o.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:mo,alphaToCoverage:!!N.alphaToCoverage,map:Y,matcap:zt,envMap:F,envMapMode:F&&ot.mapping,envMapCubeUVHeight:Z,aoMap:ve,lightMap:te,bumpMap:Wt,normalMap:Pt,displacementMap:y&&re,emissiveMap:Lt,normalMapObjectSpace:Pt&&N.normalMapType===sE,normalMapTangentSpace:Pt&&N.normalMapType===Vx,metalnessMap:ge,roughnessMap:Ye,anisotropy:we,anisotropyMap:pt,clearcoat:P,clearcoatMap:Kt,clearcoatNormalMap:It,clearcoatRoughnessMap:ee,dispersion:T,iridescence:st,iridescenceMap:ae,iridescenceThicknessMap:Dt,sheen:xt,sheenColorMap:Vt,sheenRoughnessMap:le,specularMap:Jt,specularColorMap:Xt,specularIntensityMap:fe,transmission:bt,transmissionMap:X,thicknessMap:Nt,gradientMap:Ut,opaque:N.transparent===!1&&N.blending===co&&N.alphaToCoverage===!1,alphaMap:Yt,alphaTest:At,alphaHash:Mt,combine:N.combine,mapUv:Y&&C(N.map.channel),aoMapUv:ve&&C(N.aoMap.channel),lightMapUv:te&&C(N.lightMap.channel),bumpMapUv:Wt&&C(N.bumpMap.channel),normalMapUv:Pt&&C(N.normalMap.channel),displacementMapUv:re&&C(N.displacementMap.channel),emissiveMapUv:Lt&&C(N.emissiveMap.channel),metalnessMapUv:ge&&C(N.metalnessMap.channel),roughnessMapUv:Ye&&C(N.roughnessMap.channel),anisotropyMapUv:pt&&C(N.anisotropyMap.channel),clearcoatMapUv:Kt&&C(N.clearcoatMap.channel),clearcoatNormalMapUv:It&&C(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&C(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&C(N.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&C(N.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&C(N.sheenColorMap.channel),sheenRoughnessMapUv:le&&C(N.sheenRoughnessMap.channel),specularMapUv:Jt&&C(N.specularMap.channel),specularColorMapUv:Xt&&C(N.specularColorMap.channel),specularIntensityMapUv:fe&&C(N.specularIntensityMap.channel),transmissionMapUv:X&&C(N.transmissionMap.channel),thicknessMapUv:Nt&&C(N.thicknessMap.channel),alphaMapUv:Yt&&C(N.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Pt||we),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(Y||Yt),fog:!!vt,useFog:N.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Tt,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:wt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:me,decodeVideoTexture:Y&&N.map.isVideoTexture===!0&&Ve.getTransfer(N.map.colorSpace)===nn,decodeVideoTextureEmissive:Lt&&N.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(N.emissiveMap.colorSpace)===nn,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ca,flipSided:N.side===ei,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:$t&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&N.extensions.multiDraw===!0||Ct)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Be.vertexUv1s=g.has(1),Be.vertexUv2s=g.has(2),Be.vertexUv3s=g.has(3),g.clear(),Be}function x(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)w.push(V),w.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(L(w,N),U(w,N),w.push(o.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function L(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function U(N,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),N.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),N.push(d.mask)}function A(N){const w=b[N.type];let V;if(w){const Q=la[w];V=zE.clone(Q.uniforms)}else V=N.uniforms;return V}function H(N,w){let V;for(let Q=0,ut=m.length;Q<ut;Q++){const vt=m[Q];if(vt.cacheKey===w){V=vt,++V.usedTimes;break}}return V===void 0&&(V=new cR(o,w,N,f),m.push(V)),V}function O(N){if(--N.usedTimes===0){const w=m.indexOf(N);m[w]=m[m.length-1],m.pop(),N.destroy()}}function z(N){v.remove(N)}function G(){v.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:H,releaseProgram:O,releaseShaderCache:z,programs:m,dispose:G}}function pR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function c(h,d,v){o.get(h)[d]=v}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:c,dispose:f}}function mR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Mx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ex(){const o=[];let e=0;const i=[],r=[],c=[];function f(){e=0,i.length=0,r.length=0,c.length=0}function h(p,y,M,b,C,S){let x=o[e];return x===void 0?(x={id:p.id,object:p,geometry:y,material:M,groupOrder:b,renderOrder:p.renderOrder,z:C,group:S},o[e]=x):(x.id=p.id,x.object=p,x.geometry=y,x.material=M,x.groupOrder=b,x.renderOrder=p.renderOrder,x.z=C,x.group=S),e++,x}function d(p,y,M,b,C,S){const x=h(p,y,M,b,C,S);M.transmission>0?r.push(x):M.transparent===!0?c.push(x):i.push(x)}function v(p,y,M,b,C,S){const x=h(p,y,M,b,C,S);M.transmission>0?r.unshift(x):M.transparent===!0?c.unshift(x):i.unshift(x)}function g(p,y){i.length>1&&i.sort(p||mR),r.length>1&&r.sort(y||Mx),c.length>1&&c.sort(y||Mx)}function m(){for(let p=e,y=o.length;p<y;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:c,init:f,push:d,unshift:v,finish:m,sort:g}}function gR(){let o=new WeakMap;function e(r,c){const f=o.get(r);let h;return f===void 0?(h=new Ex,o.set(r,[h])):c>=f.length?(h=new Ex,f.push(h)):h=f[c],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function _R(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Ue};break;case"SpotLight":i={position:new et,direction:new et,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function vR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let xR=0;function yR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function SR(o){const e=new _R,i=vR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new et);const c=new et,f=new cn,h=new cn;function d(g){let m=0,p=0,y=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,b=0,C=0,S=0,x=0,L=0,U=0,A=0,H=0,O=0,z=0;g.sort(yR);for(let N=0,w=g.length;N<w;N++){const V=g[N],Q=V.color,ut=V.intensity,vt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=Q.r*ut,p+=Q.g*ut,y+=Q.b*ut;else if(V.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],ut);z++}else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ot=V.shadow,Z=i.get(V);Z.shadowIntensity=ot.intensity,Z.shadowBias=ot.bias,Z.shadowNormalBias=ot.normalBias,Z.shadowRadius=ot.radius,Z.shadowMapSize=ot.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=V.shadow.matrix,L++}r.directional[M]=j,M++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(Q).multiplyScalar(ut),j.distance=vt,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[C]=j;const ot=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,ot.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[C]=ot.matrix,V.castShadow){const Z=i.get(V);Z.shadowIntensity=ot.intensity,Z.shadowBias=ot.bias,Z.shadowNormalBias=ot.normalBias,Z.shadowRadius=ot.radius,Z.shadowMapSize=ot.mapSize,r.spotShadow[C]=Z,r.spotShadowMap[C]=lt,A++}C++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(Q).multiplyScalar(ut),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=j,S++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),j.distance=V.distance,j.decay=V.decay,V.castShadow){const ot=V.shadow,Z=i.get(V);Z.shadowIntensity=ot.intensity,Z.shadowBias=ot.bias,Z.shadowNormalBias=ot.normalBias,Z.shadowRadius=ot.radius,Z.shadowMapSize=ot.mapSize,Z.shadowCameraNear=ot.camera.near,Z.shadowCameraFar=ot.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=V.shadow.matrix,U++}r.point[b]=j,b++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(ut),j.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[x]=j,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qt.LTC_FLOAT_1,r.rectAreaLTC2=qt.LTC_FLOAT_2):(r.rectAreaLTC1=qt.LTC_HALF_1,r.rectAreaLTC2=qt.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==M||G.pointLength!==b||G.spotLength!==C||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==L||G.numPointShadows!==U||G.numSpotShadows!==A||G.numSpotMaps!==H||G.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=A+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,G.directionalLength=M,G.pointLength=b,G.spotLength=C,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=L,G.numPointShadows=U,G.numSpotShadows=A,G.numSpotMaps=H,G.numLightProbes=z,r.version=xR++)}function v(g,m){let p=0,y=0,M=0,b=0,C=0;const S=m.matrixWorldInverse;for(let x=0,L=g.length;x<L;x++){const U=g[x];if(U.isDirectionalLight){const A=r.directional[p];A.direction.setFromMatrixPosition(U.matrixWorld),c.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(c),A.direction.transformDirection(S),p++}else if(U.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(U.matrixWorld),c.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(c),A.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),h.identity(),f.copy(U.matrixWorld),f.premultiply(S),h.extractRotation(f),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),y++}else if(U.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(S),C++}}}return{setup:d,setupView:v,state:r}}function Tx(o){const e=new SR(o),i=[],r=[];function c(m){g.camera=m,i.length=0,r.length=0}function f(m){i.push(m)}function h(m){r.push(m)}function d(){e.setup(i)}function v(m){e.setupView(i,m)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:c,state:g,setupLights:d,setupLightsView:v,pushLight:f,pushShadow:h}}function MR(o){let e=new WeakMap;function i(c,f=0){const h=e.get(c);let d;return h===void 0?(d=new Tx(o),e.set(c,[d])):f>=h.length?(d=new Tx(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const ER=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TR=`uniform sampler2D shadow_pass;
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
}`;function bR(o,e,i){let r=new tm;const c=new Pe,f=new Pe,h=new vn,d=new YE({depthPacking:aE}),v=new ZE,g={},m=i.maxTextureSize,p={[ys]:ei,[ei]:ys,[ca]:ca},y=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:ER,fragmentShader:TR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new ii;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new qe(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dx;let x=this.type;this.render=function(O,z,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const N=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(vs),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ut=x!==za&&this.type===za,vt=x===za&&this.type!==za;for(let lt=0,j=O.length;lt<j;lt++){const ot=O[lt],Z=ot.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;c.copy(Z.mapSize);const Et=Z.getFrameExtents();if(c.multiply(Et),f.copy(Z.mapSize),(c.x>m||c.y>m)&&(c.x>m&&(f.x=Math.floor(m/Et.x),c.x=f.x*Et.x,Z.mapSize.x=f.x),c.y>m&&(f.y=Math.floor(m/Et.y),c.y=f.y*Et.y,Z.mapSize.y=f.y)),Z.map===null||ut===!0||vt===!0){const mt=this.type!==za?{minFilter:bi,magFilter:bi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new nr(c.x,c.y,mt),Z.map.texture.name=ot.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const _t=Z.getViewportCount();for(let mt=0;mt<_t;mt++){const wt=Z.getViewport(mt);h.set(f.x*wt.x,f.y*wt.y,f.x*wt.z,f.y*wt.w),Q.viewport(h),Z.updateMatrices(ot,mt),r=Z.getFrustum(),A(z,G,Z.camera,ot,this.type)}Z.isPointLightShadow!==!0&&this.type===za&&L(Z,G),Z.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(N,w,V)};function L(O,z){const G=e.update(C);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new nr(c.x,c.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(z,null,G,y,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(z,null,G,M,C,null)}function U(O,z,G,N){let w=null;const V=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)w=V;else if(w=G.isPointLight===!0?v:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=w.uuid,ut=z.uuid;let vt=g[Q];vt===void 0&&(vt={},g[Q]=vt);let lt=vt[ut];lt===void 0&&(lt=w.clone(),vt[ut]=lt,z.addEventListener("dispose",H)),w=lt}if(w.visible=z.visible,w.wireframe=z.wireframe,N===za?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:p[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=o.properties.get(w);Q.light=G}return w}function A(O,z,G,N,w){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===za)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const ut=e.update(O),vt=O.material;if(Array.isArray(vt)){const lt=ut.groups;for(let j=0,ot=lt.length;j<ot;j++){const Z=lt[j],Et=vt[Z.materialIndex];if(Et&&Et.visible){const _t=U(O,Et,N,w);O.onBeforeShadow(o,O,z,G,ut,_t,Z),o.renderBufferDirect(G,null,ut,_t,O,Z),O.onAfterShadow(o,O,z,G,ut,_t,Z)}}}else if(vt.visible){const lt=U(O,vt,N,w);O.onBeforeShadow(o,O,z,G,ut,lt,null),o.renderBufferDirect(G,null,ut,lt,O,null),O.onAfterShadow(o,O,z,G,ut,lt,null)}}const Q=O.children;for(let ut=0,vt=Q.length;ut<vt;ut++)A(Q[ut],z,G,N,w)}function H(O){O.target.removeEventListener("dispose",H);for(const G in g){const N=g[G],w=O.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const AR={[ep]:np,[ip]:rp,[ap]:op,[fo]:sp,[np]:ep,[rp]:ip,[op]:ap,[sp]:fo};function RR(o,e){function i(){let X=!1;const Nt=new vn;let Ut=null;const Yt=new vn(0,0,0,0);return{setMask:function(At){Ut!==At&&!X&&(o.colorMask(At,At,At,At),Ut=At)},setLocked:function(At){X=At},setClear:function(At,Mt,$t,me,Be){Be===!0&&(At*=me,Mt*=me,$t*=me),Nt.set(At,Mt,$t,me),Yt.equals(Nt)===!1&&(o.clearColor(At,Mt,$t,me),Yt.copy(Nt))},reset:function(){X=!1,Ut=null,Yt.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,Ut=null,Yt=null,At=null;return{setReversed:function(Mt){if(Nt!==Mt){const $t=e.get("EXT_clip_control");Mt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Nt=Mt;const me=At;At=null,this.setClear(me)}},getReversed:function(){return Nt},setTest:function(Mt){Mt?at(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Mt){Ut!==Mt&&!X&&(o.depthMask(Mt),Ut=Mt)},setFunc:function(Mt){if(Nt&&(Mt=AR[Mt]),Yt!==Mt){switch(Mt){case ep:o.depthFunc(o.NEVER);break;case np:o.depthFunc(o.ALWAYS);break;case ip:o.depthFunc(o.LESS);break;case fo:o.depthFunc(o.LEQUAL);break;case ap:o.depthFunc(o.EQUAL);break;case sp:o.depthFunc(o.GEQUAL);break;case rp:o.depthFunc(o.GREATER);break;case op:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Yt=Mt}},setLocked:function(Mt){X=Mt},setClear:function(Mt){At!==Mt&&(Nt&&(Mt=1-Mt),o.clearDepth(Mt),At=Mt)},reset:function(){X=!1,Ut=null,Yt=null,At=null,Nt=!1}}}function c(){let X=!1,Nt=null,Ut=null,Yt=null,At=null,Mt=null,$t=null,me=null,Be=null;return{setTest:function(be){X||(be?at(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(be){Nt!==be&&!X&&(o.stencilMask(be),Nt=be)},setFunc:function(be,sn,pn){(Ut!==be||Yt!==sn||At!==pn)&&(o.stencilFunc(be,sn,pn),Ut=be,Yt=sn,At=pn)},setOp:function(be,sn,pn){(Mt!==be||$t!==sn||me!==pn)&&(o.stencilOp(be,sn,pn),Mt=be,$t=sn,me=pn)},setLocked:function(be){X=be},setClear:function(be){Be!==be&&(o.clearStencil(be),Be=be)},reset:function(){X=!1,Nt=null,Ut=null,Yt=null,At=null,Mt=null,$t=null,me=null,Be=null}}}const f=new i,h=new r,d=new c,v=new WeakMap,g=new WeakMap;let m={},p={},y=new WeakMap,M=[],b=null,C=!1,S=null,x=null,L=null,U=null,A=null,H=null,O=null,z=new Ue(0,0,0),G=0,N=!1,w=null,V=null,Q=null,ut=null,vt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ot=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=ot>=2);let Et=null,_t={};const mt=o.getParameter(o.SCISSOR_BOX),wt=o.getParameter(o.VIEWPORT),kt=new vn().fromArray(mt),I=new vn().fromArray(wt);function ft(X,Nt,Ut,Yt){const At=new Uint8Array(4),Mt=o.createTexture();o.bindTexture(X,Mt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<Ut;$t++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Yt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Nt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return Mt}const W={};W[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),W[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),W[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),at(o.DEPTH_TEST),h.setFunc(fo),Wt(!1),Pt(Mv),at(o.CULL_FACE),ve(vs);function at(X){m[X]!==!0&&(o.enable(X),m[X]=!0)}function Tt(X){m[X]!==!1&&(o.disable(X),m[X]=!1)}function Bt(X,Nt){return p[X]!==Nt?(o.bindFramebuffer(X,Nt),p[X]=Nt,X===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Nt),X===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ct(X,Nt){let Ut=M,Yt=!1;if(X){Ut=y.get(Nt),Ut===void 0&&(Ut=[],y.set(Nt,Ut));const At=X.textures;if(Ut.length!==At.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let Mt=0,$t=At.length;Mt<$t;Mt++)Ut[Mt]=o.COLOR_ATTACHMENT0+Mt;Ut.length=At.length,Yt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Yt=!0);Yt&&o.drawBuffers(Ut)}function Y(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const zt={[Ks]:o.FUNC_ADD,[NM]:o.FUNC_SUBTRACT,[UM]:o.FUNC_REVERSE_SUBTRACT};zt[LM]=o.MIN,zt[OM]=o.MAX;const F={[zM]:o.ZERO,[PM]:o.ONE,[IM]:o.SRC_COLOR,[$d]:o.SRC_ALPHA,[kM]:o.SRC_ALPHA_SATURATE,[GM]:o.DST_COLOR,[FM]:o.DST_ALPHA,[BM]:o.ONE_MINUS_SRC_COLOR,[tp]:o.ONE_MINUS_SRC_ALPHA,[VM]:o.ONE_MINUS_DST_COLOR,[HM]:o.ONE_MINUS_DST_ALPHA,[XM]:o.CONSTANT_COLOR,[jM]:o.ONE_MINUS_CONSTANT_COLOR,[qM]:o.CONSTANT_ALPHA,[WM]:o.ONE_MINUS_CONSTANT_ALPHA};function ve(X,Nt,Ut,Yt,At,Mt,$t,me,Be,be){if(X===vs){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(at(o.BLEND),C=!0),X!==DM){if(X!==S||be!==N){if((x!==Ks||A!==Ks)&&(o.blendEquation(o.FUNC_ADD),x=Ks,A=Ks),be)switch(X){case co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ev:o.blendFunc(o.ONE,o.ONE);break;case Tv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ev:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Tv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,H=null,O=null,z.set(0,0,0),G=0,S=X,N=be}return}At=At||Nt,Mt=Mt||Ut,$t=$t||Yt,(Nt!==x||At!==A)&&(o.blendEquationSeparate(zt[Nt],zt[At]),x=Nt,A=At),(Ut!==L||Yt!==U||Mt!==H||$t!==O)&&(o.blendFuncSeparate(F[Ut],F[Yt],F[Mt],F[$t]),L=Ut,U=Yt,H=Mt,O=$t),(me.equals(z)===!1||Be!==G)&&(o.blendColor(me.r,me.g,me.b,Be),z.copy(me),G=Be),S=X,N=!1}function te(X,Nt){X.side===ca?Tt(o.CULL_FACE):at(o.CULL_FACE);let Ut=X.side===ei;Nt&&(Ut=!Ut),Wt(Ut),X.blending===co&&X.transparent===!1?ve(vs):ve(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),f.setMask(X.colorWrite);const Yt=X.stencilWrite;d.setTest(Yt),Yt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?at(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Pt(X){X!==CM?(at(o.CULL_FACE),X!==V&&(X===Mv?o.cullFace(o.BACK):X===wM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),V=X}function re(X){X!==Q&&(j&&o.lineWidth(X),Q=X)}function Lt(X,Nt,Ut){X?(at(o.POLYGON_OFFSET_FILL),(ut!==Nt||vt!==Ut)&&(o.polygonOffset(Nt,Ut),ut=Nt,vt=Ut)):Tt(o.POLYGON_OFFSET_FILL)}function ge(X){X?at(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=o.TEXTURE0+lt-1),Et!==X&&(o.activeTexture(X),Et=X)}function we(X,Nt,Ut){Ut===void 0&&(Et===null?Ut=o.TEXTURE0+lt-1:Ut=Et);let Yt=_t[Ut];Yt===void 0&&(Yt={type:void 0,texture:void 0},_t[Ut]=Yt),(Yt.type!==X||Yt.texture!==Nt)&&(Et!==Ut&&(o.activeTexture(Ut),Et=Ut),o.bindTexture(X,Nt||W[X]),Yt.type=X,Yt.texture=Nt)}function P(){const X=_t[Et];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(X){kt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),kt.copy(X))}function le(X){I.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),I.copy(X))}function Jt(X,Nt){let Ut=g.get(Nt);Ut===void 0&&(Ut=new WeakMap,g.set(Nt,Ut));let Yt=Ut.get(X);Yt===void 0&&(Yt=o.getUniformBlockIndex(Nt,X.name),Ut.set(X,Yt))}function Xt(X,Nt){const Yt=g.get(Nt).get(X);v.get(Nt)!==Yt&&(o.uniformBlockBinding(Nt,Yt,X.__bindingPointIndex),v.set(Nt,Yt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},Et=null,_t={},p={},y=new WeakMap,M=[],b=null,C=!1,S=null,x=null,L=null,U=null,A=null,H=null,O=null,z=new Ue(0,0,0),G=0,N=!1,w=null,V=null,Q=null,ut=null,vt=null,kt.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:at,disable:Tt,bindFramebuffer:Bt,drawBuffers:Ct,useProgram:Y,setBlending:ve,setMaterial:te,setFlipSided:Wt,setCullFace:Pt,setLineWidth:re,setPolygonOffset:Lt,setScissorTest:ge,activeTexture:Ye,bindTexture:we,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:st,texImage2D:ae,texImage3D:Dt,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:It,texStorage3D:ee,texSubImage2D:xt,texSubImage3D:bt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Kt,scissor:Vt,viewport:le,reset:fe}}function CR(o,e,i,r,c,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Pe,m=new WeakMap;let p;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return M?new OffscreenCanvas(P,T):Uu("canvas")}function C(P,T,st){let xt=1;const bt=we(P);if((bt.width>st||bt.height>st)&&(xt=st/Math.max(bt.width,bt.height)),xt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pt=Math.floor(xt*bt.width),Kt=Math.floor(xt*bt.height);p===void 0&&(p=b(pt,Kt));const It=T?b(pt,Kt):p;return It.width=pt,It.height=Kt,It.getContext("2d").drawImage(P,0,0,pt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+pt+"x"+Kt+")."),It}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(P,T,st,xt,bt=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt=T;if(T===o.RED&&(st===o.FLOAT&&(pt=o.R32F),st===o.HALF_FLOAT&&(pt=o.R16F),st===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.R8UI),st===o.UNSIGNED_SHORT&&(pt=o.R16UI),st===o.UNSIGNED_INT&&(pt=o.R32UI),st===o.BYTE&&(pt=o.R8I),st===o.SHORT&&(pt=o.R16I),st===o.INT&&(pt=o.R32I)),T===o.RG&&(st===o.FLOAT&&(pt=o.RG32F),st===o.HALF_FLOAT&&(pt=o.RG16F),st===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.RG8UI),st===o.UNSIGNED_SHORT&&(pt=o.RG16UI),st===o.UNSIGNED_INT&&(pt=o.RG32UI),st===o.BYTE&&(pt=o.RG8I),st===o.SHORT&&(pt=o.RG16I),st===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),st===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),st===o.UNSIGNED_INT&&(pt=o.RGB32UI),st===o.BYTE&&(pt=o.RGB8I),st===o.SHORT&&(pt=o.RGB16I),st===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),st===o.UNSIGNED_INT&&(pt=o.RGBA32UI),st===o.BYTE&&(pt=o.RGBA8I),st===o.SHORT&&(pt=o.RGBA16I),st===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&(st===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),st===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),T===o.RGBA){const Kt=bt?Du:Ve.getTransfer(xt);st===o.FLOAT&&(pt=o.RGBA32F),st===o.HALF_FLOAT&&(pt=o.RGBA16F),st===o.UNSIGNED_BYTE&&(pt=Kt===nn?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function A(P,T){let st;return P?T===null||T===er||T===Ml?st=o.DEPTH24_STENCIL8:T===fa?st=o.DEPTH32F_STENCIL8:T===Sl&&(st=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===er||T===Ml?st=o.DEPTH_COMPONENT24:T===fa?st=o.DEPTH_COMPONENT32F:T===Sl&&(st=o.DEPTH_COMPONENT16),st}function H(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==bi&&P.minFilter!==ua?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function O(P){const T=P.target;T.removeEventListener("dispose",O),G(T),T.isVideoTexture&&m.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),w(T)}function G(P){const T=r.get(P);if(T.__webglInit===void 0)return;const st=P.source,xt=y.get(st);if(xt){const bt=xt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&N(P),Object.keys(xt).length===0&&y.delete(st)}r.remove(P)}function N(P){const T=r.get(P);o.deleteTexture(T.__webglTexture);const st=P.source,xt=y.get(st);delete xt[T.__cacheKey],h.memory.textures--}function w(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(T.__webglFramebuffer[xt]))for(let bt=0;bt<T.__webglFramebuffer[xt].length;bt++)o.deleteFramebuffer(T.__webglFramebuffer[xt][bt]);else o.deleteFramebuffer(T.__webglFramebuffer[xt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[xt])}else{if(Array.isArray(T.__webglFramebuffer))for(let xt=0;xt<T.__webglFramebuffer.length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[xt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xt=0;xt<T.__webglColorRenderbuffer.length;xt++)T.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[xt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const st=P.textures;for(let xt=0,bt=st.length;xt<bt;xt++){const pt=r.get(st[xt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(st[xt])}r.remove(P)}let V=0;function Q(){V=0}function ut(){const P=V;return P>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c.maxTextures),V+=1,P}function vt(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function lt(P,T){const st=r.get(P);if(P.isVideoTexture&&ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&st.__version!==P.version){const xt=P.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(st,P,T);return}}else P.isExternalTexture&&(st.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+T)}function j(P,T){const st=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&st.__version!==P.version){W(st,P,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+T)}function ot(P,T){const st=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&st.__version!==P.version){W(st,P,T);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+T)}function Z(P,T){const st=r.get(P);if(P.version>0&&st.__version!==P.version){at(st,P,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+T)}const Et={[up]:o.REPEAT,[$s]:o.CLAMP_TO_EDGE,[fp]:o.MIRRORED_REPEAT},_t={[bi]:o.NEAREST,[nE]:o.NEAREST_MIPMAP_NEAREST,[tu]:o.NEAREST_MIPMAP_LINEAR,[ua]:o.LINEAR,[xd]:o.LINEAR_MIPMAP_NEAREST,[tr]:o.LINEAR_MIPMAP_LINEAR},mt={[rE]:o.NEVER,[hE]:o.ALWAYS,[oE]:o.LESS,[kx]:o.LEQUAL,[lE]:o.EQUAL,[fE]:o.GEQUAL,[cE]:o.GREATER,[uE]:o.NOTEQUAL};function wt(P,T){if(T.type===fa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ua||T.magFilter===xd||T.magFilter===tu||T.magFilter===tr||T.minFilter===ua||T.minFilter===xd||T.minFilter===tu||T.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Et[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Et[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Et[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,_t[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,mt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bi||T.minFilter!==tu&&T.minFilter!==tr||T.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function kt(P,T){let st=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",O));const xt=T.source;let bt=y.get(xt);bt===void 0&&(bt={},y.set(xt,bt));const pt=vt(T);if(pt!==P.__cacheKey){bt[pt]===void 0&&(bt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),bt[pt].usedTimes++;const Kt=bt[P.__cacheKey];Kt!==void 0&&(bt[P.__cacheKey].usedTimes--,Kt.usedTimes===0&&N(T)),P.__cacheKey=pt,P.__webglTexture=bt[pt].texture}return st}function I(P,T,st){return Math.floor(Math.floor(P/st)/T)}function ft(P,T,st,xt){const pt=P.updateRanges;if(pt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,st,xt,T.data);else{pt.sort((Dt,Vt)=>Dt.start-Vt.start);let Kt=0;for(let Dt=1;Dt<pt.length;Dt++){const Vt=pt[Kt],le=pt[Dt],Jt=Vt.start+Vt.count,Xt=I(le.start,T.width,4),fe=I(Vt.start,T.width,4);le.start<=Jt+1&&Xt===fe&&I(le.start+le.count-1,T.width,4)===Xt?Vt.count=Math.max(Vt.count,le.start+le.count-Vt.start):(++Kt,pt[Kt]=le)}pt.length=Kt+1;const It=o.getParameter(o.UNPACK_ROW_LENGTH),ee=o.getParameter(o.UNPACK_SKIP_PIXELS),ae=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Dt=0,Vt=pt.length;Dt<Vt;Dt++){const le=pt[Dt],Jt=Math.floor(le.start/4),Xt=Math.ceil(le.count/4),fe=Jt%T.width,X=Math.floor(Jt/T.width),Nt=Xt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,fe,X,Nt,Ut,st,xt,T.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,It),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ee),o.pixelStorei(o.UNPACK_SKIP_ROWS,ae)}}function W(P,T,st){let xt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=o.TEXTURE_3D);const bt=kt(P,T),pt=T.source;i.bindTexture(xt,P.__webglTexture,o.TEXTURE0+st);const Kt=r.get(pt);if(pt.version!==Kt.__version||bt===!0){i.activeTexture(o.TEXTURE0+st);const It=Ve.getPrimaries(Ve.workingColorSpace),ee=T.colorSpace===_s?null:Ve.getPrimaries(T.colorSpace),ae=T.colorSpace===_s||It===ee?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Dt=C(T.image,!1,c.maxTextureSize);Dt=Ye(T,Dt);const Vt=f.convert(T.format,T.colorSpace),le=f.convert(T.type);let Jt=U(T.internalFormat,Vt,le,T.colorSpace,T.isVideoTexture);wt(xt,T);let Xt;const fe=T.mipmaps,X=T.isVideoTexture!==!0,Nt=Kt.__version===void 0||bt===!0,Ut=pt.dataReady,Yt=H(T,Dt);if(T.isDepthTexture)Jt=A(T.format===Tl,T.type),Nt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Jt,Dt.width,Dt.height):i.texImage2D(o.TEXTURE_2D,0,Jt,Dt.width,Dt.height,0,Vt,le,null));else if(T.isDataTexture)if(fe.length>0){X&&Nt&&i.texStorage2D(o.TEXTURE_2D,Yt,Jt,fe[0].width,fe[0].height);for(let At=0,Mt=fe.length;At<Mt;At++)Xt=fe[At],X?Ut&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Xt.width,Xt.height,Vt,le,Xt.data):i.texImage2D(o.TEXTURE_2D,At,Jt,Xt.width,Xt.height,0,Vt,le,Xt.data);T.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(o.TEXTURE_2D,Yt,Jt,Dt.width,Dt.height),Ut&&ft(T,Dt,Vt,le)):i.texImage2D(o.TEXTURE_2D,0,Jt,Dt.width,Dt.height,0,Vt,le,Dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,Jt,fe[0].width,fe[0].height,Dt.depth);for(let At=0,Mt=fe.length;At<Mt;At++)if(Xt=fe[At],T.format!==Zi)if(Vt!==null)if(X){if(Ut)if(T.layerUpdates.size>0){const $t=tx(Xt.width,Xt.height,T.format,T.type);for(const me of T.layerUpdates){const Be=Xt.data.subarray(me*$t/Xt.data.BYTES_PER_ELEMENT,(me+1)*$t/Xt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,me,Xt.width,Xt.height,1,Vt,Be)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Xt.width,Xt.height,Dt.depth,Vt,Xt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,Jt,Xt.width,Xt.height,Dt.depth,0,Xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Xt.width,Xt.height,Dt.depth,Vt,le,Xt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,Jt,Xt.width,Xt.height,Dt.depth,0,Vt,le,Xt.data)}else{X&&Nt&&i.texStorage2D(o.TEXTURE_2D,Yt,Jt,fe[0].width,fe[0].height);for(let At=0,Mt=fe.length;At<Mt;At++)Xt=fe[At],T.format!==Zi?Vt!==null?X?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Xt.width,Xt.height,Vt,Xt.data):i.compressedTexImage2D(o.TEXTURE_2D,At,Jt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ut&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Xt.width,Xt.height,Vt,le,Xt.data):i.texImage2D(o.TEXTURE_2D,At,Jt,Xt.width,Xt.height,0,Vt,le,Xt.data)}else if(T.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,Jt,Dt.width,Dt.height,Dt.depth),Ut)if(T.layerUpdates.size>0){const At=tx(Dt.width,Dt.height,T.format,T.type);for(const Mt of T.layerUpdates){const $t=Dt.data.subarray(Mt*At/Dt.data.BYTES_PER_ELEMENT,(Mt+1)*At/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Mt,Dt.width,Dt.height,1,Vt,le,$t)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Vt,le,Dt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,Dt.width,Dt.height,Dt.depth,0,Vt,le,Dt.data);else if(T.isData3DTexture)X?(Nt&&i.texStorage3D(o.TEXTURE_3D,Yt,Jt,Dt.width,Dt.height,Dt.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Vt,le,Dt.data)):i.texImage3D(o.TEXTURE_3D,0,Jt,Dt.width,Dt.height,Dt.depth,0,Vt,le,Dt.data);else if(T.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(o.TEXTURE_2D,Yt,Jt,Dt.width,Dt.height);else{let At=Dt.width,Mt=Dt.height;for(let $t=0;$t<Yt;$t++)i.texImage2D(o.TEXTURE_2D,$t,Jt,At,Mt,0,Vt,le,null),At>>=1,Mt>>=1}}else if(fe.length>0){if(X&&Nt){const At=we(fe[0]);i.texStorage2D(o.TEXTURE_2D,Yt,Jt,At.width,At.height)}for(let At=0,Mt=fe.length;At<Mt;At++)Xt=fe[At],X?Ut&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Vt,le,Xt):i.texImage2D(o.TEXTURE_2D,At,Jt,Vt,le,Xt);T.generateMipmaps=!1}else if(X){if(Nt){const At=we(Dt);i.texStorage2D(o.TEXTURE_2D,Yt,Jt,At.width,At.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,le,Dt)}else i.texImage2D(o.TEXTURE_2D,0,Jt,Vt,le,Dt);S(T)&&x(xt),Kt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function at(P,T,st){if(T.image.length!==6)return;const xt=kt(P,T),bt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+st);const pt=r.get(bt);if(bt.version!==pt.__version||xt===!0){i.activeTexture(o.TEXTURE0+st);const Kt=Ve.getPrimaries(Ve.workingColorSpace),It=T.colorSpace===_s?null:Ve.getPrimaries(T.colorSpace),ee=T.colorSpace===_s||Kt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ae=T.isCompressedTexture||T.image[0].isCompressedTexture,Dt=T.image[0]&&T.image[0].isDataTexture,Vt=[];for(let Mt=0;Mt<6;Mt++)!ae&&!Dt?Vt[Mt]=C(T.image[Mt],!0,c.maxCubemapSize):Vt[Mt]=Dt?T.image[Mt].image:T.image[Mt],Vt[Mt]=Ye(T,Vt[Mt]);const le=Vt[0],Jt=f.convert(T.format,T.colorSpace),Xt=f.convert(T.type),fe=U(T.internalFormat,Jt,Xt,T.colorSpace),X=T.isVideoTexture!==!0,Nt=pt.__version===void 0||xt===!0,Ut=bt.dataReady;let Yt=H(T,le);wt(o.TEXTURE_CUBE_MAP,T);let At;if(ae){X&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Yt,fe,le.width,le.height);for(let Mt=0;Mt<6;Mt++){At=Vt[Mt].mipmaps;for(let $t=0;$t<At.length;$t++){const me=At[$t];T.format!==Zi?Jt!==null?X?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,0,0,me.width,me.height,Jt,me.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,0,0,me.width,me.height,Jt,Xt,me.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,fe,me.width,me.height,0,Jt,Xt,me.data)}}}else{if(At=T.mipmaps,X&&Nt){At.length>0&&Yt++;const Mt=we(Vt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Yt,fe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Dt){X?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Vt[Mt].width,Vt[Mt].height,Jt,Xt,Vt[Mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,Vt[Mt].width,Vt[Mt].height,0,Jt,Xt,Vt[Mt].data);for(let $t=0;$t<At.length;$t++){const Be=At[$t].image[Mt].image;X?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,0,0,Be.width,Be.height,Jt,Xt,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,fe,Be.width,Be.height,0,Jt,Xt,Be.data)}}else{X?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Jt,Xt,Vt[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,Jt,Xt,Vt[Mt]);for(let $t=0;$t<At.length;$t++){const me=At[$t];X?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,0,0,Jt,Xt,me.image[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,fe,Jt,Xt,me.image[Mt])}}}S(T)&&x(o.TEXTURE_CUBE_MAP),pt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Tt(P,T,st,xt,bt,pt){const Kt=f.convert(st.format,st.colorSpace),It=f.convert(st.type),ee=U(st.internalFormat,Kt,It,st.colorSpace),ae=r.get(T),Dt=r.get(st);if(Dt.__renderTarget=T,!ae.__hasExternalTextures){const Vt=Math.max(1,T.width>>pt),le=Math.max(1,T.height>>pt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,pt,ee,Vt,le,T.depth,0,Kt,It,null):i.texImage2D(bt,pt,ee,Vt,le,0,Kt,It,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Lt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,bt,Dt.__webglTexture,0,re(T)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,bt,Dt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(P,T,st){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer){const xt=T.depthTexture,bt=xt&&xt.isDepthTexture?xt.type:null,pt=A(T.stencilBuffer,bt),Kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=re(T);Lt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,It,pt,T.width,T.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,It,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,P)}else{const xt=T.textures;for(let bt=0;bt<xt.length;bt++){const pt=xt[bt],Kt=f.convert(pt.format,pt.colorSpace),It=f.convert(pt.type),ee=U(pt.internalFormat,Kt,It,pt.colorSpace),ae=re(T);st&&Lt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,ee,T.width,T.height):Lt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ae,ee,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ee,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(T.depthTexture);xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const bt=xt.__webglTexture,pt=re(T);if(T.depthTexture.format===El)Lt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0);else if(T.depthTexture.format===Tl)Lt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function Y(P){const T=r.get(P),st=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const xt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xt.removeEventListener("dispose",bt)};xt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=xt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const xt=P.texture.mipmaps;xt&&xt.length>0?Ct(T.__webglFramebuffer[0],P):Ct(T.__webglFramebuffer,P)}else if(st){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]===void 0)T.__webglDepthbuffer[xt]=o.createRenderbuffer(),Bt(T.__webglDepthbuffer[xt],P,!1);else{const bt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}else{const xt=P.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Bt(T.__webglDepthbuffer,P,!1);else{const bt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(P,T,st){const xt=r.get(P);T!==void 0&&Tt(xt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&Y(P)}function F(P){const T=P.texture,st=r.get(P),xt=r.get(T);P.addEventListener("dispose",z);const bt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,Kt=bt.length>1;if(Kt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=T.version,h.memory.textures++),pt){st.__webglFramebuffer=[];for(let It=0;It<6;It++)if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer[It]=[];for(let ee=0;ee<T.mipmaps.length;ee++)st.__webglFramebuffer[It][ee]=o.createFramebuffer()}else st.__webglFramebuffer[It]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer=[];for(let It=0;It<T.mipmaps.length;It++)st.__webglFramebuffer[It]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let It=0,ee=bt.length;It<ee;It++){const ae=r.get(bt[It]);ae.__webglTexture===void 0&&(ae.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&Lt(P)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let It=0;It<bt.length;It++){const ee=bt[It];st.__webglColorRenderbuffer[It]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[It]);const ae=f.convert(ee.format,ee.colorSpace),Dt=f.convert(ee.type),Vt=U(ee.internalFormat,ae,Dt,ee.colorSpace,P.isXRRenderTarget===!0),le=re(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,le,Vt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,st.__webglColorRenderbuffer[It])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(st.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),wt(o.TEXTURE_CUBE_MAP,T);for(let It=0;It<6;It++)if(T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)Tt(st.__webglFramebuffer[It][ee],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,ee);else Tt(st.__webglFramebuffer[It],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);S(T)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let It=0,ee=bt.length;It<ee;It++){const ae=bt[It],Dt=r.get(ae);let Vt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Vt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Vt,Dt.__webglTexture),wt(Vt,ae),Tt(st.__webglFramebuffer,P,ae,o.COLOR_ATTACHMENT0+It,Vt,0),S(ae)&&x(Vt)}i.unbindTexture()}else{let It=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(It=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,xt.__webglTexture),wt(It,T),T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)Tt(st.__webglFramebuffer[ee],P,T,o.COLOR_ATTACHMENT0,It,ee);else Tt(st.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,It,0);S(T)&&x(It),i.unbindTexture()}P.depthBuffer&&Y(P)}function ve(P){const T=P.textures;for(let st=0,xt=T.length;st<xt;st++){const bt=T[st];if(S(bt)){const pt=L(P),Kt=r.get(bt).__webglTexture;i.bindTexture(pt,Kt),x(pt),i.unbindTexture()}}}const te=[],Wt=[];function Pt(P){if(P.samples>0){if(Lt(P)===!1){const T=P.textures,st=P.width,xt=P.height;let bt=o.COLOR_BUFFER_BIT;const pt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=r.get(P),It=T.length>1;if(It)for(let ae=0;ae<T.length;ae++)i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const ee=P.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let ae=0;ae<T.length;ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),It){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[ae]);const Dt=r.get(T[ae]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Dt,0)}o.blitFramebuffer(0,0,st,xt,0,0,st,xt,bt,o.NEAREST),v===!0&&(te.length=0,Wt.length=0,te.push(o.COLOR_ATTACHMENT0+ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(te.push(pt),Wt.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Wt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),It)for(let ae=0;ae<T.length;ae++){i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[ae]);const Dt=r.get(T[ae]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.TEXTURE_2D,Dt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&v){const T=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function re(P){return Math.min(c.maxSamples,P.samples)}function Lt(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ge(P){const T=h.render.frame;m.get(P)!==T&&(m.set(P,T),P.update())}function Ye(P,T){const st=P.colorSpace,xt=P.format,bt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||st!==mo&&st!==_s&&(Ve.getTransfer(st)===nn?(xt!==Zi||bt!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),T}function we(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=ut,this.resetTextureUnits=Q,this.setTexture2D=lt,this.setTexture2DArray=j,this.setTexture3D=ot,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Lt}function wR(o,e){function i(r,c=_s){let f;const h=Ve.getTransfer(c);if(r===da)return o.UNSIGNED_BYTE;if(r===qp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Ix)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Bx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===zx)return o.BYTE;if(r===Px)return o.SHORT;if(r===Sl)return o.UNSIGNED_SHORT;if(r===jp)return o.INT;if(r===er)return o.UNSIGNED_INT;if(r===fa)return o.FLOAT;if(r===Rl)return o.HALF_FLOAT;if(r===Fx)return o.ALPHA;if(r===Hx)return o.RGB;if(r===Zi)return o.RGBA;if(r===El)return o.DEPTH_COMPONENT;if(r===Tl)return o.DEPTH_STENCIL;if(r===Yp)return o.RED;if(r===Zp)return o.RED_INTEGER;if(r===Gx)return o.RG;if(r===Kp)return o.RG_INTEGER;if(r===Qp)return o.RGBA_INTEGER;if(r===bu||r===Au||r===Ru||r===Cu)if(h===nn)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===bu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Au)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ru)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===bu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Au)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ru)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hp||r===dp||r===pp||r===mp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===hp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gp||r===_p||r===vp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===gp||r===_p)return h===nn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===vp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Np||r===Up)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===xp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ep)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ap)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dp)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Np)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Up)return h===nn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lp||r===Op||r===zp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Lp)return h===nn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Op)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pp||r===Ip||r===Bp||r===Fp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Pp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Ip)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ml?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const DR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NR=`
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

}`;class UR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new ny(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:DR,fragmentShader:NR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qe(new _o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LR extends vo{constructor(e,i){super();const r=this;let c=null,f=1,h=null,d="local-floor",v=1,g=null,m=null,p=null,y=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",S=new UR,x={},L=i.getContextAttributes();let U=null,A=null;const H=[],O=[],z=new Pe;let G=null;const N=new Pi;N.viewport=new vn;const w=new Pi;w.viewport=new vn;const V=[N,w],Q=new tT;let ut=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let at=H[W];return at===void 0&&(at=new Vd,H[W]=at),at.getTargetRaySpace()},this.getControllerGrip=function(W){let at=H[W];return at===void 0&&(at=new Vd,H[W]=at),at.getGripSpace()},this.getHand=function(W){let at=H[W];return at===void 0&&(at=new Vd,H[W]=at),at.getHandSpace()};function lt(W){const at=O.indexOf(W.inputSource);if(at===-1)return;const Tt=H[at];Tt!==void 0&&(Tt.update(W.inputSource,W.frame,g||h),Tt.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){c.removeEventListener("select",lt),c.removeEventListener("selectstart",lt),c.removeEventListener("selectend",lt),c.removeEventListener("squeeze",lt),c.removeEventListener("squeezestart",lt),c.removeEventListener("squeezeend",lt),c.removeEventListener("end",j),c.removeEventListener("inputsourceschange",ot);for(let W=0;W<H.length;W++){const at=O[W];at!==null&&(O[W]=null,H[W].disconnect(at))}ut=null,vt=null,S.reset();for(const W in x)delete x[W];e.setRenderTarget(U),M=null,y=null,p=null,c=null,A=null,ft.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){f=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(W){g=W},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(c,i)),p},this.getFrame=function(){return b},this.getSession=function(){return c},this.setSession=async function(W){if(c=W,c!==null){if(U=e.getRenderTarget(),c.addEventListener("select",lt),c.addEventListener("selectstart",lt),c.addEventListener("selectend",lt),c.addEventListener("squeeze",lt),c.addEventListener("squeezestart",lt),c.addEventListener("squeezeend",lt),c.addEventListener("end",j),c.addEventListener("inputsourceschange",ot),L.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Bt=null,Ct=null;L.depth&&(Ct=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=L.stencil?Tl:El,Bt=L.stencil?Ml:er);const Y={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:f};p=this.getBinding(),y=p.createProjectionLayer(Y),c.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),A=new nr(y.textureWidth,y.textureHeight,{format:Zi,type:da,depthTexture:new ey(y.textureWidth,y.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Tt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,i,Tt),c.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new nr(M.framebufferWidth,M.framebufferHeight,{format:Zi,type:da,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(v),g=null,h=await c.requestReferenceSpace(d),ft.setContext(c),ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ot(W){for(let at=0;at<W.removed.length;at++){const Tt=W.removed[at],Bt=O.indexOf(Tt);Bt>=0&&(O[Bt]=null,H[Bt].disconnect(Tt))}for(let at=0;at<W.added.length;at++){const Tt=W.added[at];let Bt=O.indexOf(Tt);if(Bt===-1){for(let Y=0;Y<H.length;Y++)if(Y>=O.length){O.push(Tt),Bt=Y;break}else if(O[Y]===null){O[Y]=Tt,Bt=Y;break}if(Bt===-1)break}const Ct=H[Bt];Ct&&Ct.connect(Tt)}}const Z=new et,Et=new et;function _t(W,at,Tt){Z.setFromMatrixPosition(at.matrixWorld),Et.setFromMatrixPosition(Tt.matrixWorld);const Bt=Z.distanceTo(Et),Ct=at.projectionMatrix.elements,Y=Tt.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),F=Ct[14]/(Ct[10]+1),ve=(Ct[9]+1)/Ct[5],te=(Ct[9]-1)/Ct[5],Wt=(Ct[8]-1)/Ct[0],Pt=(Y[8]+1)/Y[0],re=zt*Wt,Lt=zt*Pt,ge=Bt/(-Wt+Pt),Ye=ge*-Wt;if(at.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ye),W.translateZ(ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ct[10]===-1)W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const we=zt+ge,P=F+ge,T=re-Ye,st=Lt+(Bt-Ye),xt=ve*F/P*we,bt=te*F/P*we;W.projectionMatrix.makePerspective(T,st,xt,bt,we,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function mt(W,at){at===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(at.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(c===null)return;let at=W.near,Tt=W.far;S.texture!==null&&(S.depthNear>0&&(at=S.depthNear),S.depthFar>0&&(Tt=S.depthFar)),Q.near=w.near=N.near=at,Q.far=w.far=N.far=Tt,(ut!==Q.near||vt!==Q.far)&&(c.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ut=Q.near,vt=Q.far),Q.layers.mask=W.layers.mask|6,N.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const Bt=W.parent,Ct=Q.cameras;mt(Q,Bt);for(let Y=0;Y<Ct.length;Y++)mt(Ct[Y],Bt);Ct.length===2?_t(Q,N,w):Q.projectionMatrix.copy(N.projectionMatrix),wt(W,Q,Bt)};function wt(W,at,Tt){Tt===null?W.matrix.copy(at.matrixWorld):(W.matrix.copy(Tt.matrixWorld),W.matrix.invert(),W.matrix.multiply(at.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Hp*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&M===null))return v},this.setFoveation=function(W){v=W,y!==null&&(y.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(W){return x[W]};let kt=null;function I(W,at){if(m=at.getViewerPose(g||h),b=at,m!==null){const Tt=m.views;M!==null&&(e.setRenderTargetFramebuffer(A,M.framebuffer),e.setRenderTarget(A));let Bt=!1;Tt.length!==Q.cameras.length&&(Q.cameras.length=0,Bt=!0);for(let F=0;F<Tt.length;F++){const ve=Tt[F];let te=null;if(M!==null)te=M.getViewport(ve);else{const Pt=p.getViewSubImage(y,ve);te=Pt.viewport,F===0&&(e.setRenderTargetTextures(A,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(A))}let Wt=V[F];Wt===void 0&&(Wt=new Pi,Wt.layers.enable(F),Wt.viewport=new vn,V[F]=Wt),Wt.matrix.fromArray(ve.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(ve.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(te.x,te.y,te.width,te.height),F===0&&(Q.matrix.copy(Wt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Bt===!0&&Q.cameras.push(Wt)}const Ct=c.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&C){p=r.getBinding();const F=p.getDepthInformation(Tt[0]);F&&F.isValid&&F.texture&&S.init(F,c.renderState)}if(Ct&&Ct.includes("camera-access")&&C){e.state.unbindTexture(),p=r.getBinding();for(let F=0;F<Tt.length;F++){const ve=Tt[F].camera;if(ve){let te=x[ve];te||(te=new ny,x[ve]=te);const Wt=p.getCameraImage(ve);te.sourceTexture=Wt}}}}for(let Tt=0;Tt<H.length;Tt++){const Bt=O[Tt],Ct=H[Tt];Bt!==null&&Ct!==void 0&&Ct.update(Bt,at,g||h)}kt&&kt(W,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),b=null}const ft=new sy;ft.setAnimationLoop(I),this.setAnimationLoop=function(W){kt=W},this.dispose=function(){}}}const Ws=new pa,OR=new cn;function zR(o,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Qx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function c(S,x,L,U,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),p(S,x)):x.isMeshPhongMaterial?(f(S,x),m(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,A)):x.isMeshMatcapMaterial?(f(S,x),b(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),C(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?v(S,x,L,U):x.isSpriteMaterial?g(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ei&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ei&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),U=L.envMap,A=L.envMapRotation;U&&(S.envMap.value=U,Ws.copy(A),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),S.envMapRotation.value.setFromMatrix4(OR.makeRotationFromEuler(Ws)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function v(S,x,L,U){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=U*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function p(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function PR(o,e,i,r){let c={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(L,U){const A=U.program;r.uniformBlockBinding(L,A)}function g(L,U){let A=c[L.id];A===void 0&&(b(L),A=m(L),c[L.id]=A,L.addEventListener("dispose",S));const H=U.program;r.updateUBOMapping(L,H);const O=e.render.frame;f[L.id]!==O&&(y(L),f[L.id]=O)}function m(L){const U=p();L.__bindingPointIndex=U;const A=o.createBuffer(),H=L.__size,O=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,H,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,A),A}function p(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const U=c[L.id],A=L.uniforms,H=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let O=0,z=A.length;O<z;O++){const G=Array.isArray(A[O])?A[O]:[A[O]];for(let N=0,w=G.length;N<w;N++){const V=G[N];if(M(V,O,N,H)===!0){const Q=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let vt=0;for(let lt=0;lt<ut.length;lt++){const j=ut[lt],ot=C(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,Q+vt,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,vt),vt+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,U,A,H){const O=L.value,z=U+"_"+A;if(H[z]===void 0)return typeof O=="number"||typeof O=="boolean"?H[z]=O:H[z]=O.clone(),!0;{const G=H[z];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return H[z]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function b(L){const U=L.uniforms;let A=0;const H=16;for(let z=0,G=U.length;z<G;z++){const N=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,V=N.length;w<V;w++){const Q=N[w],ut=Array.isArray(Q.value)?Q.value:[Q.value];for(let vt=0,lt=ut.length;vt<lt;vt++){const j=ut[vt],ot=C(j),Z=A%H,Et=Z%ot.boundary,_t=Z+Et;A+=Et,_t!==0&&H-_t<ot.storage&&(A+=H-_t),Q.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=ot.storage}}}const O=A%H;return O>0&&(A+=H-O),L.__size=A,L.__cache={},this}function C(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const A=h.indexOf(U.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(c[U.id]),delete c[U.id],delete f[U.id]}function x(){for(const L in c)o.deleteBuffer(c[L]);h=[],c={},f={}}return{bind:v,update:g,dispose:x}}class IR{constructor(e={}){const{canvas:i=mE(),context:r=null,depth:c=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:g=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let S=null,x=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let H=!1;this._outputColorSpace=Ti;let O=0,z=0,G=null,N=-1,w=null;const V=new vn,Q=new vn;let ut=null;const vt=new Ue(0);let lt=0,j=i.width,ot=i.height,Z=1,Et=null,_t=null;const mt=new vn(0,0,j,ot),wt=new vn(0,0,j,ot);let kt=!1;const I=new tm;let ft=!1,W=!1;const at=new cn,Tt=new et,Bt=new vn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function zt(){return G===null?Z:1}let F=r;function ve(D,$){return i.getContext(D,$)}try{const D={alpha:!0,depth:c,stencil:f,antialias:d,premultipliedAlpha:v,preserveDrawingBuffer:g,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xp}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",At,!1),F===null){const $="webgl2";if(F=ve($,D),F===null)throw ve($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let te,Wt,Pt,re,Lt,ge,Ye,we,P,T,st,xt,bt,pt,Kt,It,ee,ae,Dt,Vt,le,Jt,Xt,fe;function X(){te=new WA(F),te.init(),Jt=new wR(F,te),Wt=new HA(F,te,e,Jt),Pt=new RR(F,te),Wt.reversedDepthBuffer&&y&&Pt.buffers.depth.setReversed(!0),re=new KA(F),Lt=new pR,ge=new CR(F,te,Pt,Lt,Wt,Jt,re),Ye=new VA(A),we=new qA(A),P=new nT(F),Xt=new BA(F,P),T=new YA(F,P,re,Xt),st=new JA(F,T,P,re),Dt=new QA(F,Wt,ge),It=new GA(Lt),xt=new dR(A,Ye,we,te,Wt,Xt,It),bt=new zR(A,Lt),pt=new gR,Kt=new MR(te),ae=new IA(A,Ye,we,Pt,st,M,v),ee=new bR(A,st,Wt),fe=new PR(F,re,Wt,Pt),Vt=new FA(F,te,re),le=new ZA(F,te,re),re.programs=xt.programs,A.capabilities=Wt,A.extensions=te,A.properties=Lt,A.renderLists=pt,A.shadowMap=ee,A.state=Pt,A.info=re}X();const Nt=new LR(A,F);this.xr=Nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=te.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=te.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(j,ot,!1))},this.getSize=function(D){return D.set(j,ot)},this.setSize=function(D,$,dt=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=D,ot=$,i.width=Math.floor(D*Z),i.height=Math.floor($*Z),dt===!0&&(i.style.width=D+"px",i.style.height=$+"px"),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(j*Z,ot*Z).floor()},this.setDrawingBufferSize=function(D,$,dt){j=D,ot=$,Z=dt,i.width=Math.floor(D*dt),i.height=Math.floor($*dt),this.setViewport(0,0,D,$)},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(mt)},this.setViewport=function(D,$,dt,ht){D.isVector4?mt.set(D.x,D.y,D.z,D.w):mt.set(D,$,dt,ht),Pt.viewport(V.copy(mt).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(wt)},this.setScissor=function(D,$,dt,ht){D.isVector4?wt.set(D.x,D.y,D.z,D.w):wt.set(D,$,dt,ht),Pt.scissor(Q.copy(wt).multiplyScalar(Z).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(D){Pt.setScissorTest(kt=D)},this.setOpaqueSort=function(D){Et=D},this.setTransparentSort=function(D){_t=D},this.getClearColor=function(D){return D.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,dt=!0){let ht=0;if(D){let tt=!1;if(G!==null){const Rt=G.texture.format;tt=Rt===Qp||Rt===Kp||Rt===Zp}if(tt){const Rt=G.texture.type,jt=Rt===da||Rt===er||Rt===Sl||Rt===Ml||Rt===qp||Rt===Wp,Zt=ae.getClearColor(),Ft=ae.getClearAlpha(),ne=Zt.r,de=Zt.g,ce=Zt.b;jt?(b[0]=ne,b[1]=de,b[2]=ce,b[3]=Ft,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=ne,C[1]=de,C[2]=ce,C[3]=Ft,F.clearBufferiv(F.COLOR,0,C))}else ht|=F.COLOR_BUFFER_BIT}$&&(ht|=F.DEPTH_BUFFER_BIT),dt&&(ht|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),ae.dispose(),pt.dispose(),Kt.dispose(),Lt.dispose(),Ye.dispose(),we.dispose(),st.dispose(),Xt.dispose(),fe.dispose(),xt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",pn),Nt.removeEventListener("sessionend",Sn),fi.stop()};function Ut(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const D=re.autoReset,$=ee.enabled,dt=ee.autoUpdate,ht=ee.needsUpdate,tt=ee.type;X(),re.autoReset=D,ee.enabled=$,ee.autoUpdate=dt,ee.needsUpdate=ht,ee.type=tt}function At(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Mt(D){const $=D.target;$.removeEventListener("dispose",Mt),$t($)}function $t(D){me(D),Lt.remove(D)}function me(D){const $=Lt.get(D).programs;$!==void 0&&($.forEach(function(dt){xt.releaseProgram(dt)}),D.isShaderMaterial&&xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,dt,ht,tt,Rt){$===null&&($=Ct);const jt=tt.isMesh&&tt.matrixWorld.determinant()<0,Zt=_e(D,$,dt,ht,tt);Pt.setMaterial(ht,jt);let Ft=dt.index,ne=1;if(ht.wireframe===!0){if(Ft=T.getWireframeAttribute(dt),Ft===void 0)return;ne=2}const de=dt.drawRange,ce=dt.attributes.position;let Ce=de.start*ne,Ze=(de.start+de.count)*ne;Rt!==null&&(Ce=Math.max(Ce,Rt.start*ne),Ze=Math.min(Ze,(Rt.start+Rt.count)*ne)),Ft!==null?(Ce=Math.max(Ce,0),Ze=Math.min(Ze,Ft.count)):ce!=null&&(Ce=Math.max(Ce,0),Ze=Math.min(Ze,ce.count));const un=Ze-Ce;if(un<0||un===1/0)return;Xt.setup(tt,ht,Zt,dt,Ft);let ke,Fe=Vt;if(Ft!==null&&(ke=P.get(Ft),Fe=le,Fe.setIndex(ke)),tt.isMesh)ht.wireframe===!0?(Pt.setLineWidth(ht.wireframeLinewidth*zt()),Fe.setMode(F.LINES)):Fe.setMode(F.TRIANGLES);else if(tt.isLine){let ue=ht.linewidth;ue===void 0&&(ue=1),Pt.setLineWidth(ue*zt()),tt.isLineSegments?Fe.setMode(F.LINES):tt.isLineLoop?Fe.setMode(F.LINE_LOOP):Fe.setMode(F.LINE_STRIP)}else tt.isPoints?Fe.setMode(F.POINTS):tt.isSprite&&Fe.setMode(F.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)bl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Fe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ue=tt._multiDrawStarts,Xe=tt._multiDrawCounts,Ae=tt._multiDrawCount,wn=Ft?P.get(Ft).bytesPerElement:1,di=Lt.get(ht).currentProgram.getUniforms();for(let He=0;He<Ae;He++)di.setValue(F,"_gl_DrawID",He),Fe.render(ue[He]/wn,Xe[He])}else if(tt.isInstancedMesh)Fe.renderInstances(Ce,un,tt.count);else if(dt.isInstancedBufferGeometry){const ue=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Xe=Math.min(dt.instanceCount,ue);Fe.renderInstances(Ce,un,Xe)}else Fe.render(Ce,un)};function Be(D,$,dt){D.transparent===!0&&D.side===ca&&D.forceSinglePass===!1?(D.side=ei,D.needsUpdate=!0,Ot(D,$,dt),D.side=ys,D.needsUpdate=!0,Ot(D,$,dt),D.side=ca):Ot(D,$,dt)}this.compile=function(D,$,dt=null){dt===null&&(dt=D),x=Kt.get(dt),x.init($),U.push(x),dt.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),D!==dt&&D.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),x.setupLights();const ht=new Set;return D.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Rt=tt.material;if(Rt)if(Array.isArray(Rt))for(let jt=0;jt<Rt.length;jt++){const Zt=Rt[jt];Be(Zt,dt,tt),ht.add(Zt)}else Be(Rt,dt,tt),ht.add(Rt)}),x=U.pop(),ht},this.compileAsync=function(D,$,dt=null){const ht=this.compile(D,$,dt);return new Promise(tt=>{function Rt(){if(ht.forEach(function(jt){Lt.get(jt).currentProgram.isReady()&&ht.delete(jt)}),ht.size===0){tt(D);return}setTimeout(Rt,10)}te.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let be=null;function sn(D){be&&be(D)}function pn(){fi.stop()}function Sn(){fi.start()}const fi=new sy;fi.setAnimationLoop(sn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(D){be=D,Nt.setAnimationLoop(D),D===null?fi.stop():fi.start()},Nt.addEventListener("sessionstart",pn),Nt.addEventListener("sessionend",Sn),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera($),$=Nt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,$,G),x=Kt.get(D,U.length),x.init($),U.push(x),at.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),I.setFromProjectionMatrix(at,ha,$.reversedDepth),W=this.localClippingEnabled,ft=It.init(this.clippingPlanes,W),S=pt.get(D,L.length),S.init(),L.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){const Rt=A.xr.getDepthSensingMesh();Rt!==null&&Bi(Rt,$,-1/0,A.sortObjects)}Bi(D,$,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(Et,_t),Y=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Y&&ae.addToRenderList(S,D),this.info.render.frame++,ft===!0&&It.beginShadows();const dt=x.state.shadowsArray;ee.render(dt,D,$),ft===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=S.opaque,tt=S.transmissive;if(x.setupLights(),$.isArrayCamera){const Rt=$.cameras;if(tt.length>0)for(let jt=0,Zt=Rt.length;jt<Zt;jt++){const Ft=Rt[jt];it(ht,tt,D,Ft)}Y&&ae.render(D);for(let jt=0,Zt=Rt.length;jt<Zt;jt++){const Ft=Rt[jt];Ss(S,D,Ft,Ft.viewport)}}else tt.length>0&&it(ht,tt,D,$),Y&&ae.render(D),Ss(S,D,$);G!==null&&z===0&&(ge.updateMultisampleRenderTarget(G),ge.updateRenderTargetMipmap(G)),D.isScene===!0&&D.onAfterRender(A,D,$),Xt.resetDefaultState(),N=-1,w=null,U.pop(),U.length>0?(x=U[U.length-1],ft===!0&&It.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Bi(D,$,dt,ht){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)dt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||I.intersectsSprite(D)){ht&&Bt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(at);const jt=st.update(D),Zt=D.material;Zt.visible&&S.push(D,jt,Zt,dt,Bt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||I.intersectsObject(D))){const jt=st.update(D),Zt=D.material;if(ht&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Bt.copy(D.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Bt.copy(jt.boundingSphere.center)),Bt.applyMatrix4(D.matrixWorld).applyMatrix4(at)),Array.isArray(Zt)){const Ft=jt.groups;for(let ne=0,de=Ft.length;ne<de;ne++){const ce=Ft[ne],Ce=Zt[ce.materialIndex];Ce&&Ce.visible&&S.push(D,jt,Ce,dt,Bt.z,ce)}}else Zt.visible&&S.push(D,jt,Zt,dt,Bt.z,null)}}const Rt=D.children;for(let jt=0,Zt=Rt.length;jt<Zt;jt++)Bi(Rt[jt],$,dt,ht)}function Ss(D,$,dt,ht){const tt=D.opaque,Rt=D.transmissive,jt=D.transparent;x.setupLightsView(dt),ft===!0&&It.setGlobalState(A.clippingPlanes,dt),ht&&Pt.viewport(V.copy(ht)),tt.length>0&&gt(tt,$,dt),Rt.length>0&&gt(Rt,$,dt),jt.length>0&&gt(jt,$,dt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function it(D,$,dt,ht){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ht.id]===void 0&&(x.state.transmissionRenderTarget[ht.id]=new nr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Rl:da,minFilter:tr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const Rt=x.state.transmissionRenderTarget[ht.id],jt=ht.viewport||V;Rt.setSize(jt.z*A.transmissionResolutionScale,jt.w*A.transmissionResolutionScale);const Zt=A.getRenderTarget(),Ft=A.getActiveCubeFace(),ne=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(vt),lt=A.getClearAlpha(),lt<1&&A.setClearColor(16777215,.5),A.clear(),Y&&ae.render(dt);const de=A.toneMapping;A.toneMapping=xs;const ce=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),x.setupLightsView(ht),ft===!0&&It.setGlobalState(A.clippingPlanes,ht),gt(D,dt,ht),ge.updateMultisampleRenderTarget(Rt),ge.updateRenderTargetMipmap(Rt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ze=0,un=$.length;Ze<un;Ze++){const ke=$[Ze],Fe=ke.object,ue=ke.geometry,Xe=ke.material,Ae=ke.group;if(Xe.side===ca&&Fe.layers.test(ht.layers)){const wn=Xe.side;Xe.side=ei,Xe.needsUpdate=!0,Ht(Fe,dt,ht,ue,Xe,Ae),Xe.side=wn,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(ge.updateMultisampleRenderTarget(Rt),ge.updateRenderTargetMipmap(Rt))}A.setRenderTarget(Zt,Ft,ne),A.setClearColor(vt,lt),ce!==void 0&&(ht.viewport=ce),A.toneMapping=de}function gt(D,$,dt){const ht=$.isScene===!0?$.overrideMaterial:null;for(let tt=0,Rt=D.length;tt<Rt;tt++){const jt=D[tt],Zt=jt.object,Ft=jt.geometry,ne=jt.group;let de=jt.material;de.allowOverride===!0&&ht!==null&&(de=ht),Zt.layers.test(dt.layers)&&Ht(Zt,$,dt,Ft,de,ne)}}function Ht(D,$,dt,ht,tt,Rt){D.onBeforeRender(A,$,dt,ht,tt,Rt),D.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),tt.onBeforeRender(A,$,dt,ht,D,Rt),tt.transparent===!0&&tt.side===ca&&tt.forceSinglePass===!1?(tt.side=ei,tt.needsUpdate=!0,A.renderBufferDirect(dt,$,ht,tt,D,Rt),tt.side=ys,tt.needsUpdate=!0,A.renderBufferDirect(dt,$,ht,tt,D,Rt),tt.side=ca):A.renderBufferDirect(dt,$,ht,tt,D,Rt),D.onAfterRender(A,$,dt,ht,tt,Rt)}function Ot(D,$,dt){$.isScene!==!0&&($=Ct);const ht=Lt.get(D),tt=x.state.lights,Rt=x.state.shadowsArray,jt=tt.state.version,Zt=xt.getParameters(D,tt.state,Rt,$,dt),Ft=xt.getProgramCacheKey(Zt);let ne=ht.programs;ht.environment=D.isMeshStandardMaterial?$.environment:null,ht.fog=$.fog,ht.envMap=(D.isMeshStandardMaterial?we:Ye).get(D.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,ne===void 0&&(D.addEventListener("dispose",Mt),ne=new Map,ht.programs=ne);let de=ne.get(Ft);if(de!==void 0){if(ht.currentProgram===de&&ht.lightsStateVersion===jt)return Me(D,Zt),de}else Zt.uniforms=xt.getUniforms(D),D.onBeforeCompile(Zt,A),de=xt.acquireProgram(Zt,Ft),ne.set(Ft,de),ht.uniforms=Zt.uniforms;const ce=ht.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ce.clippingPlanes=It.uniform),Me(D,Zt),ht.needsLights=tn(D),ht.lightsStateVersion=jt,ht.needsLights&&(ce.ambientLightColor.value=tt.state.ambient,ce.lightProbe.value=tt.state.probe,ce.directionalLights.value=tt.state.directional,ce.directionalLightShadows.value=tt.state.directionalShadow,ce.spotLights.value=tt.state.spot,ce.spotLightShadows.value=tt.state.spotShadow,ce.rectAreaLights.value=tt.state.rectArea,ce.ltc_1.value=tt.state.rectAreaLTC1,ce.ltc_2.value=tt.state.rectAreaLTC2,ce.pointLights.value=tt.state.point,ce.pointLightShadows.value=tt.state.pointShadow,ce.hemisphereLights.value=tt.state.hemi,ce.directionalShadowMap.value=tt.state.directionalShadowMap,ce.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ce.spotShadowMap.value=tt.state.spotShadowMap,ce.spotLightMatrix.value=tt.state.spotLightMatrix,ce.spotLightMap.value=tt.state.spotLightMap,ce.pointShadowMap.value=tt.state.pointShadowMap,ce.pointShadowMatrix.value=tt.state.pointShadowMatrix),ht.currentProgram=de,ht.uniformsList=null,de}function se(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=wu.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function Me(D,$){const dt=Lt.get(D);dt.outputColorSpace=$.outputColorSpace,dt.batching=$.batching,dt.batchingColor=$.batchingColor,dt.instancing=$.instancing,dt.instancingColor=$.instancingColor,dt.instancingMorph=$.instancingMorph,dt.skinning=$.skinning,dt.morphTargets=$.morphTargets,dt.morphNormals=$.morphNormals,dt.morphColors=$.morphColors,dt.morphTargetsCount=$.morphTargetsCount,dt.numClippingPlanes=$.numClippingPlanes,dt.numIntersection=$.numClipIntersection,dt.vertexAlphas=$.vertexAlphas,dt.vertexTangents=$.vertexTangents,dt.toneMapping=$.toneMapping}function _e(D,$,dt,ht,tt){$.isScene!==!0&&($=Ct),ge.resetTextureUnits();const Rt=$.fog,jt=ht.isMeshStandardMaterial?$.environment:null,Zt=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:mo,Ft=(ht.isMeshStandardMaterial?we:Ye).get(ht.envMap||jt),ne=ht.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,de=!!dt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),ce=!!dt.morphAttributes.position,Ce=!!dt.morphAttributes.normal,Ze=!!dt.morphAttributes.color;let un=xs;ht.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(un=A.toneMapping);const ke=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Fe=ke!==void 0?ke.length:0,ue=Lt.get(ht),Xe=x.state.lights;if(ft===!0&&(W===!0||D!==w)){const mn=D===w&&ht.id===N;It.setState(ht,D,mn)}let Ae=!1;ht.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==Xe.state.version||ue.outputColorSpace!==Zt||tt.isBatchedMesh&&ue.batching===!1||!tt.isBatchedMesh&&ue.batching===!0||tt.isBatchedMesh&&ue.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ue.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ue.instancing===!1||!tt.isInstancedMesh&&ue.instancing===!0||tt.isSkinnedMesh&&ue.skinning===!1||!tt.isSkinnedMesh&&ue.skinning===!0||tt.isInstancedMesh&&ue.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ue.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ue.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ue.instancingMorph===!1&&tt.morphTexture!==null||ue.envMap!==Ft||ht.fog===!0&&ue.fog!==Rt||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==It.numPlanes||ue.numIntersection!==It.numIntersection)||ue.vertexAlphas!==ne||ue.vertexTangents!==de||ue.morphTargets!==ce||ue.morphNormals!==Ce||ue.morphColors!==Ze||ue.toneMapping!==un||ue.morphTargetsCount!==Fe)&&(Ae=!0):(Ae=!0,ue.__version=ht.version);let wn=ue.currentProgram;Ae===!0&&(wn=Ot(ht,$,tt));let di=!1,He=!1,Ba=!1;const rn=wn.getUniforms(),Zn=ue.uniforms;if(Pt.useProgram(wn.program)&&(di=!0,He=!0,Ba=!0),ht.id!==N&&(N=ht.id,He=!0),di||w!==D){Pt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),rn.setValue(F,"projectionMatrix",D.projectionMatrix),rn.setValue(F,"viewMatrix",D.matrixWorldInverse);const jn=rn.map.cameraPosition;jn!==void 0&&jn.setValue(F,Tt.setFromMatrixPosition(D.matrixWorld)),Wt.logarithmicDepthBuffer&&rn.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&rn.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,He=!0,Ba=!0)}if(tt.isSkinnedMesh){rn.setOptional(F,tt,"bindMatrix"),rn.setOptional(F,tt,"bindMatrixInverse");const mn=tt.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),rn.setValue(F,"boneTexture",mn.boneTexture,ge))}tt.isBatchedMesh&&(rn.setOptional(F,tt,"batchingTexture"),rn.setValue(F,"batchingTexture",tt._matricesTexture,ge),rn.setOptional(F,tt,"batchingIdTexture"),rn.setValue(F,"batchingIdTexture",tt._indirectTexture,ge),rn.setOptional(F,tt,"batchingColorTexture"),tt._colorsTexture!==null&&rn.setValue(F,"batchingColorTexture",tt._colorsTexture,ge));const Mn=dt.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Dt.update(tt,dt,wn),(He||ue.receiveShadow!==tt.receiveShadow)&&(ue.receiveShadow=tt.receiveShadow,rn.setValue(F,"receiveShadow",tt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Zn.envMap.value=Ft,Zn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&$.environment!==null&&(Zn.envMapIntensity.value=$.environmentIntensity),He&&(rn.setValue(F,"toneMappingExposure",A.toneMappingExposure),ue.needsLights&&hn(Zn,Ba),Rt&&ht.fog===!0&&bt.refreshFogUniforms(Zn,Rt),bt.refreshMaterialUniforms(Zn,ht,Z,ot,x.state.transmissionRenderTarget[D.id]),wu.upload(F,se(ue),Zn,ge)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(wu.upload(F,se(ue),Zn,ge),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&rn.setValue(F,"center",tt.center),rn.setValue(F,"modelViewMatrix",tt.modelViewMatrix),rn.setValue(F,"normalMatrix",tt.normalMatrix),rn.setValue(F,"modelMatrix",tt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const mn=ht.uniformsGroups;for(let jn=0,sr=mn.length;jn<sr;jn++){const Ki=mn[jn];fe.update(Ki,wn),fe.bind(Ki,wn)}}return wn}function hn(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function tn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,$,dt){const ht=Lt.get(D);ht.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),Lt.get(D.texture).__webglTexture=$,Lt.get(D.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:dt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const dt=Lt.get(D);dt.__webglFramebuffer=$,dt.__useDefaultFramebuffer=$===void 0};const Cn=F.createFramebuffer();this.setRenderTarget=function(D,$=0,dt=0){G=D,O=$,z=dt;let ht=!0,tt=null,Rt=!1,jt=!1;if(D){const Ft=Lt.get(D);if(Ft.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),ht=!1;else if(Ft.__webglFramebuffer===void 0)ge.setupRenderTarget(D);else if(Ft.__hasExternalTextures)ge.rebindTextures(D,Lt.get(D.texture).__webglTexture,Lt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ce=D.depthTexture;if(Ft.__boundDepthTexture!==ce){if(ce!==null&&Lt.has(ce)&&(D.width!==ce.image.width||D.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(D)}}const ne=D.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(jt=!0);const de=Lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(de[$])?tt=de[$][dt]:tt=de[$],Rt=!0):D.samples>0&&ge.useMultisampledRTT(D)===!1?tt=Lt.get(D).__webglMultisampledFramebuffer:Array.isArray(de)?tt=de[dt]:tt=de,V.copy(D.viewport),Q.copy(D.scissor),ut=D.scissorTest}else V.copy(mt).multiplyScalar(Z).floor(),Q.copy(wt).multiplyScalar(Z).floor(),ut=kt;if(dt!==0&&(tt=Cn),Pt.bindFramebuffer(F.FRAMEBUFFER,tt)&&ht&&Pt.drawBuffers(D,tt),Pt.viewport(V),Pt.scissor(Q),Pt.setScissorTest(ut),Rt){const Ft=Lt.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ft.__webglTexture,dt)}else if(jt){const Ft=$;for(let ne=0;ne<D.textures.length;ne++){const de=Lt.get(D.textures[ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ne,de.__webglTexture,dt,Ft)}}else if(D!==null&&dt!==0){const Ft=Lt.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,dt)}N=-1},this.readRenderTargetPixels=function(D,$,dt,ht,tt,Rt,jt,Zt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&jt!==void 0&&(Ft=Ft[jt]),Ft){Pt.bindFramebuffer(F.FRAMEBUFFER,Ft);try{const ne=D.textures[Zt],de=ne.format,ce=ne.type;if(!Wt.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-ht&&dt>=0&&dt<=D.height-tt&&(D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Zt),F.readPixels($,dt,ht,tt,Jt.convert(de),Jt.convert(ce),Rt))}finally{const ne=G!==null?Lt.get(G).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(D,$,dt,ht,tt,Rt,jt,Zt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&jt!==void 0&&(Ft=Ft[jt]),Ft)if($>=0&&$<=D.width-ht&&dt>=0&&dt<=D.height-tt){Pt.bindFramebuffer(F.FRAMEBUFFER,Ft);const ne=D.textures[Zt],de=ne.format,ce=ne.type;if(!Wt.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.bufferData(F.PIXEL_PACK_BUFFER,Rt.byteLength,F.STREAM_READ),D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Zt),F.readPixels($,dt,ht,tt,Jt.convert(de),Jt.convert(ce),0);const Ze=G!==null?Lt.get(G).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Ze);const un=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gE(F,un,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Rt),F.deleteBuffer(Ce),F.deleteSync(un),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,dt=0){const ht=Math.pow(2,-dt),tt=Math.floor(D.image.width*ht),Rt=Math.floor(D.image.height*ht),jt=$!==null?$.x:0,Zt=$!==null?$.y:0;ge.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,dt,0,0,jt,Zt,tt,Rt),Pt.unbindTexture()};const ai=F.createFramebuffer(),hi=F.createFramebuffer();this.copyTextureToTexture=function(D,$,dt=null,ht=null,tt=0,Rt=null){Rt===null&&(tt!==0?(bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=tt,tt=0):Rt=0);let jt,Zt,Ft,ne,de,ce,Ce,Ze,un;const ke=D.isCompressedTexture?D.mipmaps[Rt]:D.image;if(dt!==null)jt=dt.max.x-dt.min.x,Zt=dt.max.y-dt.min.y,Ft=dt.isBox3?dt.max.z-dt.min.z:1,ne=dt.min.x,de=dt.min.y,ce=dt.isBox3?dt.min.z:0;else{const Mn=Math.pow(2,-tt);jt=Math.floor(ke.width*Mn),Zt=Math.floor(ke.height*Mn),D.isDataArrayTexture?Ft=ke.depth:D.isData3DTexture?Ft=Math.floor(ke.depth*Mn):Ft=1,ne=0,de=0,ce=0}ht!==null?(Ce=ht.x,Ze=ht.y,un=ht.z):(Ce=0,Ze=0,un=0);const Fe=Jt.convert($.format),ue=Jt.convert($.type);let Xe;$.isData3DTexture?(ge.setTexture3D($,0),Xe=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ge.setTexture2DArray($,0),Xe=F.TEXTURE_2D_ARRAY):(ge.setTexture2D($,0),Xe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const Ae=F.getParameter(F.UNPACK_ROW_LENGTH),wn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),di=F.getParameter(F.UNPACK_SKIP_PIXELS),He=F.getParameter(F.UNPACK_SKIP_ROWS),Ba=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ke.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ke.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,de),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ce);const rn=D.isDataArrayTexture||D.isData3DTexture,Zn=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const Mn=Lt.get(D),mn=Lt.get($),jn=Lt.get(Mn.__renderTarget),sr=Lt.get(mn.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,jn.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Ki=0;Ki<Ft;Ki++)rn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(D).__webglTexture,tt,ce+Ki),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get($).__webglTexture,Rt,un+Ki)),F.blitFramebuffer(ne,de,jt,Zt,Ce,Ze,jt,Zt,F.DEPTH_BUFFER_BIT,F.NEAREST);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(tt!==0||D.isRenderTargetTexture||Lt.has(D)){const Mn=Lt.get(D),mn=Lt.get($);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,ai),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,hi);for(let jn=0;jn<Ft;jn++)rn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,tt,ce+jn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,tt),Zn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,Rt,un+jn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,Rt),tt!==0?F.blitFramebuffer(ne,de,jt,Zt,Ce,Ze,jt,Zt,F.COLOR_BUFFER_BIT,F.NEAREST):Zn?F.copyTexSubImage3D(Xe,Rt,Ce,Ze,un+jn,ne,de,jt,Zt):F.copyTexSubImage2D(Xe,Rt,Ce,Ze,ne,de,jt,Zt);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Zn?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(Xe,Rt,Ce,Ze,un,jt,Zt,Ft,Fe,ue,ke.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,Rt,Ce,Ze,un,jt,Zt,Ft,Fe,ke.data):F.texSubImage3D(Xe,Rt,Ce,Ze,un,jt,Zt,Ft,Fe,ue,ke):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Rt,Ce,Ze,jt,Zt,Fe,ue,ke.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Rt,Ce,Ze,ke.width,ke.height,Fe,ke.data):F.texSubImage2D(F.TEXTURE_2D,Rt,Ce,Ze,jt,Zt,Fe,ue,ke);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,di),F.pixelStorei(F.UNPACK_SKIP_ROWS,He),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ba),Rt===0&&$.generateMipmaps&&F.generateMipmap(Xe),Pt.unbindTexture()},this.initRenderTarget=function(D){Lt.get(D).__webglFramebuffer===void 0&&ge.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ge.setTextureCube(D,0):D.isData3DTexture?ge.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ge.setTexture2DArray(D,0):ge.setTexture2D(D,0),Pt.unbindTexture()},this.resetState=function(){O=0,z=0,G=null,Pt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ve._getUnpackColorSpace()}}const bx={forest:{sky:"#dce9df",horizon:"#eff1d9",ground:"#a8bd7c",grass:"#a6bc77",leaf:"#708e50",leafLight:"#91a563",darkLeaf:"#4e734e",hill:"#99ac8f",farHill:"#a6beb5",water:"#a3c8b3",light:"#fff1cf"},coast:{sky:"#cde6e8",horizon:"#edf2df",ground:"#b8c88c",grass:"#b2c086",leaf:"#6f9672",leafLight:"#a1b57c",darkLeaf:"#4b7d67",hill:"#a5c0ae",farHill:"#c0d5cb",water:"#82c5c4",light:"#fff2d5"},sunset:{sky:"#efdac9",horizon:"#f7e8c8",ground:"#b7bc80",grass:"#b1b574",leaf:"#80915e",leafLight:"#b0ac70",darkLeaf:"#657b55",hill:"#b2ae91",farHill:"#c9c1ac",water:"#b9c3b4",light:"#ffd5a3"}};function BR({speed:o,running:e,route:i}){const r=he.useRef(null),c=he.useRef({speed:o,running:e}),f=he.useRef(i),h=he.useRef(null),[d,v]=he.useState(!1);return he.useEffect(()=>{c.current={speed:o,running:e}},[o,e]),he.useEffect(()=>{var g;f.current=i,(g=h.current)==null||g.call(h,i)},[i]),he.useEffect(()=>{const g=r.current;if(!g)return;let m;try{m=new IR({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{v(!0);return}const p=new GE,y=bx[f.current];p.background=new Ue(y.sky),p.fog=new $p(y.horizon,48,160),m.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),m.shadowMap.enabled=!0,m.shadowMap.type=Nx,m.outputColorSpace=Ti,m.toneMapping=Lx,m.toneMappingExposure=1.08,m.domElement.setAttribute("aria-label","3D 森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進"),m.domElement.setAttribute("role","img"),m.domElement.style.cssText="display:block;width:100%;height:100%;outline:none",g.appendChild(m.domElement);const M=new Pi(48,1,.1,300);M.position.set(3.5,4.8,12.3),M.lookAt(-3,1.1,-10);const b=new KE("#fff9e8","#88986b",1.7);p.add(b);const C=new $E(y.light,2.3);C.position.set(-18,28,-16),C.castShadow=!0,C.shadow.mapSize.set(1536,1536),C.shadow.camera.left=-35,C.shadow.camera.right=35,C.shadow.camera.top=24,C.shadow.camera.bottom=-42,C.shadow.camera.near=.5,C.shadow.camera.far=100,C.shadow.normalBias=.045,C.shadow.bias=-15e-5,C.shadow.radius=4,C.target.position.set(0,0,-12),p.add(C,C.target);const S=(it,gt=.95)=>new Su({color:it,roughness:gt}),x={ground:S(y.ground),grass:S(y.grass),leaf:S(y.leaf),leafLight:S(y.leafLight),darkLeaf:S(y.darkLeaf),hill:S(y.hill),farHill:S(y.farHill),water:new Su({color:y.water,roughness:.35,metalness:.07}),bark:S("#867651"),paleBark:S("#d7d4b4"),road:S("#ddcba5"),edge:S("#e6dab9"),rock:S("#b9bbaa"),rockLight:S("#cccdb8"),flower:S("#f6e5a0"),flowerWhite:S("#f4f1d5"),stem:S("#849254"),fence:S("#a59a71"),stripe:S("#dce8d9")},L=new Ia({uniforms:{top:{value:new Ue(y.sky)},bottom:{value:new Ue(y.horizon)}},vertexShader:"varying vec3 vWorld; void main(){vec4 p=modelMatrix*vec4(position,1.0);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){float h=clamp(normalize(vWorld+vec3(0.,20.,0.)).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,smoothstep(0.,.65,h)),1.);
#include <colorspace_fragment>
}`,side:ei,depthWrite:!1});p.add(new qe(new Qs(245,24,18),L));const U=new qe(new _o(450,450),x.ground);U.rotation.x=-Math.PI/2,U.position.set(0,-.035,-100),U.receiveShadow=!0,p.add(U);const A=(()=>{let it=4917;return()=>(it=it*16807%2147483647,(it-1)/2147483646)})(),H=it=>Math.sin(it*.035)*3.5*Math.min(1,Math.abs(it)/22);function O(it,gt,Ht,Ot){const se=[],Me=[];for(let tn=0;tn<=200;tn++){const Cn=20-tn,ai=gt(Cn);if(se.push(ai-it/2,Ht,Cn,ai+it/2,Ht,Cn),tn<200){const hi=tn*2;Me.push(hi,hi+1,hi+2,hi+1,hi+3,hi+2)}}const _e=new ii;_e.setAttribute("position",new yn(se,3)),_e.setIndex(Me),_e.computeVertexNormals();const hn=new qe(_e,Ot);return hn.receiveShadow=!0,p.add(hn),hn}O(6.6,H,.005,x.edge),O(6.1,H,.018,x.road);const z=it=>H(it)+15+Math.sin(it*.055)*3.5,G=O(5.3,z,-.018,x.edge),N=O(4.3,z,-.008,x.water),w=new In,V=new Su({color:"#81bdc7",roughness:.34,metalness:.12}),Q=S("#e3d1a7");w.add(O(200,it=>H(it)+110,.001,V)),w.add(O(7,it=>H(it)+8.5,.003,Q)),p.add(w),w.visible=f.current==="coast";const ut=new In,vt=new qe(new Qs(8.5,24,16),new Lu({color:"#ffcc83",fog:!1,toneMapped:!1}));ut.add(vt);for(const it of[1.3,1.8]){const gt=new qe(new Qs(8.5*it,24,16),new Lu({color:"#ffe7b2",transparent:!0,opacity:.075,depthWrite:!1,fog:!1,toneMapped:!1}));ut.add(gt)}ut.position.set(-35,30,-135),ut.visible=f.current==="sunset",p.add(ut);const lt=new Qs(1,12,10),j=new im(1,1),ot=new Al(1,1,1,9),Z=new em(1,1,9),Et=new et(0,1,0);function _t(it,gt,Ht,Ot,se=!1){const Me=new qe(se?j:lt,Ot);return Me.position.set(...gt),Me.scale.set(...Ht),Me.castShadow=!0,Me.receiveShadow=!0,it.add(Me),Me}function mt(it,gt,Ht,Ot,se){const Me=new et(...gt),_e=new et(...Ht),hn=_e.clone().sub(Me),tn=new qe(ot,se);return tn.position.copy(Me.add(_e).multiplyScalar(.5)),tn.scale.set(Ot,hn.length(),Ot),tn.quaternion.setFromUnitVectors(Et,hn.normalize()),tn.castShadow=!0,it.add(tn),tn}[[-57,-3,-113,40,14,32],[41,-4,-132,52,20,28],[1,-4,-168,58,23,31],[-90,-4,-150,45,25,40],[75,-3,-84,38,12,32],[-51,-5,-56,29,10,28]].forEach((it,gt)=>_t(p,[it[0],it[1],it[2]],[it[3],it[4],it[5]],gt<3?x.farHill:x.hill));const wt=new Su({color:"#f7f5e6",roughness:1,transparent:!0,opacity:.73,depthWrite:!1});for(let it=0;it<7;it++){const gt=new In;gt.position.set(-75+it*26,31+A()*8,-115-A()*65);for(let Ht=0;Ht<4;Ht++)_t(gt,[Ht*3.7-5,A()*1.4,A()],[5.5,1.8+A(),2.5],wt);p.add(gt)}function kt(it){const gt=new In;if(it===1){mt(gt,[0,0,0],[0,4.1,0],.15,x.bark);for(let Ht=0;Ht<3;Ht++){const Ot=new qe(Z,Ht===1?x.leaf:x.darkLeaf);Ot.position.set(0,2.8+Ht*1.25,0),Ot.scale.set(1.65-Ht*.38,2.8-Ht*.28,1.65-Ht*.38),Ot.castShadow=!0,gt.add(Ot)}}else it===2?(mt(gt,[0,0,0],[.12,4.4,0],.16,x.paleBark),mt(gt,[0,2.3,0],[-.8,3.7,.15],.075,x.paleBark),_t(gt,[0,4.5,0],[1.38,1.8,1.25],x.leafLight),_t(gt,[-.7,3.7,.1],[1.05,1.25,1.1],x.leafLight),_t(gt,[.8,4.25,-.1],[.92,1.3,1],x.leaf)):(mt(gt,[0,0,0],[0,3.9,0],.23,x.bark),mt(gt,[0,2.3,0],[-.9,3.6,0],.11,x.bark),mt(gt,[0,2.7,0],[.9,4.1,.1],.1,x.bark),_t(gt,[0,4.55,0],[1.8,1.7,1.65],x.leaf),_t(gt,[-1.05,3.9,.15],[1.25,1.3,1.3],x.darkLeaf),_t(gt,[1.1,4.25,.12],[1.25,1.4,1.3],x.leafLight),_t(gt,[.1,5.45,-.1],[1.25,1.25,1.23],x.leafLight));return gt}const I=[kt(0),kt(1),kt(2)],ft=[],W=new Set,at=new Set,Tt=(it,gt,Ht,Ot=!1)=>{it.position.x=(Ot?z(Ht):H(Ht))+gt,it.position.z=Ht,p.add(it),ft.push({object:it,lateral:gt,z:Ht,stream:Ot})};for(let it=0;it<91;it++){const gt=8-A()*175,Ht=it%2?-1:1,Ot=Ht*(7.4+A()*30);if(Ht>0&&Ot>11&&Ot<21)continue;const se=I[Math.floor(A()*I.length)].clone(),Me=.75+A()*.85;se.scale.setScalar(Me),se.rotation.y=A()*Math.PI*2,W.add(se),Tt(se,Ot,gt)}[[-9.6,-9,1.3],[10.3,-22,1.2],[-8.3,-38,1.2]].forEach(([it,gt,Ht],Ot)=>{const se=I[Ot%3].clone();se.scale.setScalar(Ht),W.add(se),Tt(se,it,gt)});const Bt=S("#a18a62"),Ct=S("#5d8c70");Ct.side=ca;const Y=[],zt=[];for(let it=0;it<=10;it++){const gt=it/10,Ht=Math.sin(gt*Math.PI)*.4,Ot=Math.sin(gt*Math.PI)*.45-gt*gt*.85;if(Y.push(-Ht,Ot,gt*3.1,0,Ot+.1*Math.sin(gt*Math.PI),gt*3.1,Ht,Ot,gt*3.1),it<10){const se=it*3;zt.push(se,se+3,se+1,se+1,se+3,se+4,se+1,se+4,se+2,se+2,se+4,se+5)}}const F=new ii;F.setAttribute("position",new yn(Y,3)),F.setIndex(zt),F.computeVertexNormals();const ve=new In;for(let it=0;it<5;it++)mt(ve,[.12*it*it/4,it,0],[.12*(it+1)*(it+1)/4,it+1,0],.14-it*.008,Bt);for(let it=0;it<9;it++){const gt=new qe(F,Ct);gt.position.set(.75,5,0),gt.rotation.y=it*Math.PI*2/9,gt.rotation.x=it%3===0?-.2:.05,gt.castShadow=!0,ve.add(gt)}for(let it=0;it<3;it++)_t(ve,[.6+it*.14,4.9,.1],[.15,.18,.15],Bt);[[-8,-8],[7.3,-20],[-9,-32],[6.5,-43],[-9,-58],[6.7,-75],[-8,-93],[7,-113],[-10,-133],[7,-151]].forEach(([it,gt],Ht)=>{const Ot=ve.clone();Ot.scale.setScalar(.95+Ht%3*.12),Ot.rotation.y=Ht*1.7,at.add(Ot),Tt(Ot,it,gt)});for(let it=0;it<110;it++){const gt=new In,Ht=12-A()*165,Ot=(it%2?1:-1)*(3.9+A()*9),se=3+Math.floor(A()*5);for(let Me=0;Me<se;Me++){const _e=(A()-.5)*1.4,hn=(A()-.5)*1.2,tn=.14+A()*.19,Cn=new qe(Z,x.grass);Cn.position.set(_e,tn/2,hn),Cn.scale.set(.08,tn,.08),gt.add(Cn),Me<2&&it%3!==0&&(mt(gt,[_e,0,hn],[_e,tn+.07,hn],.013,x.stem),_t(gt,[_e,tn+.07,hn],[.09,.045,.09],it%2?x.flower:x.flowerWhite))}Tt(gt,Ot,Ht)}for(let it=0;it<32;it++){const gt=new In,Ht=.2+A()*.5;_t(gt,[0,Ht*.23,0],[Ht,Ht*.65,Ht*.8],it%2?x.rock:x.rockLight,!0),it%2===0&&_t(gt,[Ht*.7,.08,Ht*.4],[Ht*.5,Ht*.36,Ht*.5],x.rockLight,!0),Tt(gt,(it%2?-1:1)*(4+A()*7),8-A()*140)}for(let it=0;it<17;it++){const gt=new In;mt(gt,[0,0,0],[0,1.1,0],.075,x.fence),mt(gt,[0,.48,-.1],[0,.48,-3.7],.045,x.fence),mt(gt,[0,.92,-.1],[0,.92,-3.7],.045,x.fence),Tt(gt,-5.9,-6-it*3.7)}const te=new _o(1,.035);for(let it=0;it<26;it++){const gt=new qe(te,x.stripe);gt.rotation.x=-Math.PI/2,gt.scale.x=.45+A()*1.5,gt.position.y=.007,Tt(gt,(A()-.5)*3,-4-A()*145,!0)}const Wt=new Map;for(const it of ft){it.object.updateMatrixWorld(!0);const gt=it.object.matrixWorld.clone().invert(),Ht=W.has(it.object)?"forest":at.has(it.object)?"coast":"world";it.object.traverse(Ot=>{if(!(Ot instanceof qe)||Array.isArray(Ot.material))return;const se=`${Ht}:${Ot.geometry.uuid}:${Ot.material.uuid}:${Ot.castShadow}:${Ot.receiveShadow}`;let Me=Wt.get(se);Me||(Me={geometry:Ot.geometry,material:Ot.material,shadow:Ot.castShadow,receive:Ot.receiveShadow,kind:Ht,entries:[]},Wt.set(se,Me)),Me.entries.push({source:it.object,local:gt.clone().multiply(Ot.matrixWorld)})}),p.remove(it.object)}const Pt=new cn,re=[...Wt.values()].map(it=>{const gt=new XE(it.geometry,it.material,it.entries.length);return gt.castShadow=it.shadow,gt.receiveShadow=it.receive,gt.frustumCulled=!1,gt.instanceMatrix.setUsage(dE),it.entries.forEach((Ht,Ot)=>gt.setMatrixAt(Ot,Pt.multiplyMatrices(Ht.source.matrixWorld,Ht.local))),p.add(gt),{mesh:gt,entries:it.entries,kind:it.kind}}),Lt=new In;Lt.position.set(0,.04,2),p.add(Lt);const ge=S("#3f4a43"),Ye=S("#c7cdbd",.5),we=S("#d5d6bd",.45),P=S("#3f7568",.5),T=S("#354b44"),st=S("#568e7b"),xt=S("#6ca18b"),bt=S("#3c5149"),pt=S("#dfb58f"),Kt=S("#f1e8cd"),It=S("#d9d8cb"),ee=S("#efdfbf"),ae=[];for(const it of[.91,-1.03]){const gt=new In;gt.position.set(0,.58,it);const Ht=new qe(new Ou(.52,.047,8,36),ge);Ht.rotation.y=Math.PI/2,Ht.castShadow=!0,gt.add(Ht);const Ot=new qe(new Ou(.467,.014,6,36),Ye);Ot.rotation.y=Math.PI/2,gt.add(Ot),mt(gt,[-.09,0,0],[.09,0,0],.043,we);for(let se=0;se<12;se++){const Me=se*Math.PI/6;mt(gt,[0,0,0],[0,Math.cos(Me)*.46,Math.sin(Me)*.46],.006,Ye)}Lt.add(gt),ae.push(gt)}const Dt=[0,.58,.91],Vt=[0,.55,.04],le=[0,1.34,.36],Jt=[0,1.29,-.81];[[Dt,Vt],[Vt,le],[le,Dt],[le,Jt],[Jt,Vt],[Jt,[0,.58,-1.03]]].forEach(([it,gt])=>mt(Lt,it,gt,.035,P)),mt(Lt,[0,1.23,.39],[0,1.48,.44],.027,we),_t(Lt,[0,1.48,.43],[.22,.052,.18],T),mt(Lt,[0,1.29,-.81],[0,1.51,-.83],.024,we),mt(Lt,[-.34,1.52,-.87],[.34,1.52,-.87],.022,we),mt(Lt,[-.34,1.52,-.87],[-.34,1.5,-1.02],.034,T),mt(Lt,[.34,1.52,-.87],[.34,1.5,-1.02],.034,T),mt(Lt,[-.15,.64,.92],[-.15,1.16,.8],.013,we),mt(Lt,[.15,.64,.92],[.15,1.16,.8],.013,we),mt(Lt,[-.15,1.16,.5],[-.15,1.16,1.2],.016,we),mt(Lt,[.15,1.16,.5],[.15,1.16,1.2],.016,we),mt(Lt,[-.15,1.16,1.2],[.15,1.16,1.2],.016,we),_t(Lt,[0,1.15,1.23],[.07,.035,.02],S("#c37658")),mt(Lt,[.03,.74,-.14],[.03,.98,-.3],.065,S("#e4d6ac"));const fe=new In;Lt.add(fe),_t(fe,[0,1.64,.37],[.27,.2,.19],bt);const X=_t(fe,[0,1.99,.17],[.31,.43,.22],st);X.rotation.x=-.24,_t(fe,[0,2.18,.13],[.32,.15,.22],xt);const Nt=new qe(new ir(.42,.045,.014),Kt);Nt.position.set(0,1.98,.392),Nt.rotation.x=-.24,fe.add(Nt),mt(fe,[0,2.21,.04],[0,2.37,-.03],.09,pt);const Ut=new In;Ut.position.set(0,2.49,-.065),fe.add(Ut),_t(Ut,[0,0,0],[.205,.235,.19],pt),_t(Ut,[0,.035,.07],[.211,.19,.17],It),_t(Ut,[-.205,-.015,0],[.043,.07,.045],pt),_t(Ut,[.205,-.015,0],[.043,.07,.045],pt),_t(Ut,[0,-.035,-.18],[.05,.06,.065],pt);const Yt=new qe(new Qs(.254,18,10,0,Math.PI*2,0,Math.PI*.62),Kt);Yt.position.y=.095,Yt.scale.set(1,.8,1.1),Yt.castShadow=!0,Ut.add(Yt);for(const it of[-.13,0,.13])_t(Ut,[it,.272-Math.abs(it)*.25,.015],[.021,.014,.125],T);mt(Ut,[-.19,.04,.06],[-.11,-.19,-.02],.012,T),mt(Ut,[.19,.04,.06],[.11,-.19,-.02],.012,T);for(const it of[-1,1]){const gt=[it*.275,2.18,.12],Ht=[it*.36,1.92,-.36],Ot=[it*.34,1.53,-.94];mt(fe,gt,Ht,.082,st),_t(fe,Ht,[.065,.065,.065],pt),mt(fe,Ht,Ot,.058,pt),_t(fe,Ot,[.065,.055,.075],pt)}const At=new In;At.position.set(0,.55,.04),Lt.add(At);const Mt=new qe(new Al(.14,.14,.025,20),T);Mt.rotation.z=Math.PI/2,Mt.position.x=.09,At.add(Mt);const $t=[-1,1].map(it=>{const gt=new In;Lt.add(gt);const Ht=mt(gt,[0,0,0],[0,1,0],.105,bt),Ot=mt(gt,[0,0,0],[0,1,0],.062,pt),se=_t(gt,[0,0,0],[.075,.075,.075],pt),Me=_t(gt,[0,0,0],[.085,.065,.17],ee),_e=new qe(new ir(.19,.035,.13),T);gt.add(_e);const hn=mt(gt,[0,0,0],[0,1,0],.023,we);return{side:it,upper:Ht,lower:Ot,knee:se,shoe:Me,pedal:_e,arm:hn}});function me(it,gt,Ht,Ot){const se=Ht.clone().sub(gt);it.position.copy(gt).add(Ht).multiplyScalar(.5),it.scale.set(Ot,se.length(),Ot),it.quaternion.setFromUnitVectors(Et,se.normalize())}const Be=new Float32Array(105);for(let it=0;it<35;it++)Be[it*3]=(A()-.5)*28,Be[it*3+1]=1.2+A()*7,Be[it*3+2]=8-A()*48;const be=new ii;be.setAttribute("position",new Ii(Be,3)),p.add(new Kv(be,new ty({color:"#fff4cc",size:.055,transparent:!0,opacity:.75,depthWrite:!1}))),h.current=it=>{const gt=bx[it];p.background.set(gt.sky),p.fog.color.set(gt.horizon),L.uniforms.top.value.set(gt.sky),L.uniforms.bottom.value.set(gt.horizon),C.color.set(gt.light),w.visible=it==="coast",ut.visible=it==="sunset",N.visible=it!=="coast",G.visible=it!=="coast",C.position.set(it==="sunset"?-30:-18,it==="sunset"?19:28,-16),re.forEach(Ot=>{Ot.mesh.visible=Ot.kind==="world"||(Ot.kind==="coast"?it==="coast":it!=="coast")});const Ht=it==="coast"?"海岸騎行：長者騎著單車沿著棕櫚樹與藍色海洋前進":it==="sunset"?"夕陽騎行：長者騎著單車穿過暖色山丘與林間小徑":"森林騎行：長者騎著單車，沿著陽光灑落的林間小徑前進";m.domElement.setAttribute("aria-label",`3D ${Ht}`);for(const Ot of["ground","grass","leaf","leafLight","darkLeaf","hill","farHill","water"])x[Ot].color.set(gt[Ot])},h.current(f.current);const sn=()=>{const it=g.clientWidth,gt=g.clientHeight;!it||!gt||(m.setSize(it,gt,!1),M.aspect=it/gt,M.fov=it/gt<1.1?58:48,M.updateProjectionMatrix())},pn=new ResizeObserver(sn);pn.observe(g),sn();let Sn=0,fi=0,Bi=0;const Ss=it=>{Sn=requestAnimationFrame(Ss);const gt=fi?Math.min((it-fi)/1e3,.05):0;fi=it;const{speed:Ht,running:Ot}=c.current,se=Ot?Math.max(0,Ht)/3.6:0,Me=se*gt;if(Me>0){for(const _e of ft)_e.z+=Me,_e.z>18&&(_e.z-=184),_e.object.position.z=_e.z,_e.object.position.x=(_e.stream?z(_e.z):H(_e.z))+_e.lateral,_e.object.updateMatrix();for(const _e of re)_e.entries.forEach((hn,tn)=>_e.mesh.setMatrixAt(tn,Pt.multiplyMatrices(hn.source.matrix,hn.local))),_e.mesh.instanceMatrix.needsUpdate=!0}Bi+=se*gt*1.55,ae.forEach(_e=>{_e.rotation.x-=Me/.52}),At.rotation.x=Bi,Lt.rotation.z=se>0?Math.sin(Bi)*.014:0,Lt.position.y=.04+(se>0?Math.sin(Bi*2)*.006:0),$t.forEach(_e=>{const hn=Bi+(_e.side>0?Math.PI:0),tn=_e.side*.18,Cn=new et(tn,.64+Math.cos(hn)*.225,.04+Math.sin(hn)*.225),ai=new et(tn,1.57,.36),hi=Cn.clone().sub(ai),D=Math.min(hi.length(),1.195),$=(.61*.61-.59*.59+D*D)/(2*D),dt=Math.sqrt(Math.max(0,.61*.61-$*$)),ht=hi.clone().normalize(),tt=new et(0,-ht.z,ht.y).normalize();tt.z>0&&tt.negate();const Rt=ai.clone().addScaledVector(ht,$).addScaledVector(tt,dt);me(_e.upper,ai,Rt,.1),me(_e.lower,Rt,Cn,.06),_e.knee.position.copy(Rt),_e.shoe.position.copy(Cn).add(new et(0,-.015,-.055)),_e.pedal.position.copy(Cn).add(new et(0,-.07,0)),me(_e.arm,new et(tn,.55,.04),Cn.clone().add(new et(0,-.07,0)),.023)}),m.render(p,M)};return Sn=requestAnimationFrame(Ss),()=>{var Ht;cancelAnimationFrame(Sn),pn.disconnect(),h.current=null;const it=new Set,gt=new Set;p.traverse(Ot=>{(Ot instanceof qe||Ot instanceof Kv)&&(it.add(Ot.geometry),(Array.isArray(Ot.material)?Ot.material:[Ot.material]).forEach(se=>gt.add(se)))}),I.forEach(Ot=>Ot.traverse(se=>{se instanceof qe&&(it.add(se.geometry),gt.add(se.material))})),it.forEach(Ot=>Ot.dispose()),gt.forEach(Ot=>Ot.dispose()),(Ht=C.shadow.map)==null||Ht.dispose(),m.dispose(),m.domElement.parentNode===g&&g.removeChild(m.domElement)}},[]),R.jsx("div",{ref:r,className:"ride-scene",style:{position:"absolute",inset:0,overflow:"hidden",background:"#dce9df"},children:d&&R.jsxs("div",{role:"status",style:{position:"absolute",inset:0,display:"grid",placeContent:"center",textAlign:"center",padding:30,color:"#385b4b",background:"linear-gradient(#e3eddf,#b6c78c)"},children:[R.jsx("strong",{children:"3D 騎行環境需要 WebGL"}),R.jsx("p",{children:"請開啟瀏覽器硬體加速，再重新載入。動作偵測與運動紀錄仍可使用。"})]})})}class FR{constructor(){wa(this,"lastTime",null);wa(this,"filtered",0);wa(this,"center",0);wa(this,"armed",!1);wa(this,"lastCrossing",null);wa(this,"intervals",[]);wa(this,"samples",[]);wa(this,"rpm",0)}reset(){this.lastTime=null,this.filtered=0,this.center=0,this.armed=!1,this.lastCrossing=null,this.intervals=[],this.samples=[],this.rpm=0}update(e,i){if(!Number.isFinite(e)||!Number.isFinite(i))return 0;if(this.lastTime!==null&&(i<this.lastTime||i-this.lastTime>1500)&&this.reset(),this.lastTime===null)return this.lastTime=i,this.filtered=e,this.center=e,this.samples.push({time:i,value:e}),0;const r=Math.max(0,i-this.lastTime);for(this.lastTime=i,this.filtered+=(e-this.filtered)*(1-Math.exp(-r/65)),this.center+=(this.filtered-this.center)*(1-Math.exp(-r/2400)),this.samples.push({time:i,value:this.filtered});this.samples.length>1&&this.samples[0].time<i-1600;)this.samples.shift();let c=1/0,f=-1/0;for(const y of this.samples)c=Math.min(c,y.value),f=Math.max(f,y.value);const h=f-c,d=Math.max(.024,Math.min(.065,h*.12)),v=this.filtered-this.center;if(v<-d&&(this.armed=!0),this.armed&&v>d&&h>=.065)if(this.armed=!1,this.lastCrossing!==null){const y=i-this.lastCrossing;if(y>=333&&y<=5e3){this.intervals.push(y),this.intervals.length>3&&this.intervals.shift();const M=[...this.intervals].sort((S,x)=>S-x),b=Math.floor(M.length/2),C=M.length%2?M[b]:(M[b-1]+M[b])/2;this.rpm=Math.min(180,6e4/C)}else y>5e3&&(this.intervals=[],this.rpm=0);y>=333&&(this.lastCrossing=i)}else this.lastCrossing=i;const g=this.intervals.length?Math.max(1800,this.intervals[this.intervals.length-1]*1.8):5500,m=this.lastCrossing!==null&&i-this.lastCrossing>g,p=this.samples.length>1&&i-this.samples[0].time>1400&&h<.045;return(m||p)&&(this.rpm=0,this.intervals=[],this.lastCrossing=null,this.armed=!1),this.rpm}}function yl(o){return`/bike-game/${o.replace(/^\/+/,"")}`}let ro=null;function HR(){return window.Pose?Promise.resolve(window.Pose):ro||(ro=new Promise((o,e)=>{const i=document.createElement("script");i.src=yl("pose/pose.js"),i.async=!0,i.onload=()=>{window.Pose?o(window.Pose):(ro=null,i.remove(),e(new Error("Local pose runtime is unavailable")))},i.onerror=()=>{ro=null,i.remove(),e(new Error("Cannot load local pose runtime"))},document.head.appendChild(i)}),ro)}const GR=[[11,12],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,31],[28,32]],VR=[11,12,23,24,25,26,27,28,31,32],Qd=[23,24,25,26,27,28];function oo(o,e=.5){return!!o&&(o.visibility??0)>=e&&(o.presence??1)>=e&&o.x>.015&&o.x<.985&&o.y>.015&&o.y<.985}function Ax(o){const e=o instanceof Error?o.name:"";return e==="NotAllowedError"||e==="PermissionDeniedError"?"攝影機權限未開啟，請允許此網站使用攝影機後再試一次。":e==="NotFoundError"||e==="DevicesNotFoundError"?"找不到攝影機，請連接攝影機後再試一次。":e==="NotReadableError"||e==="TrackStartError"?"攝影機正被其他程式使用，請關閉其他視訊程式後再試一次。":e==="SecurityError"?"請使用 HTTPS 或 localhost 開啟遊戲，才能使用攝影機。":"無法啟動動作分析，請確認攝影機和本機辨識模型可用，再試一次。"}function kR({mode:o,running:e,demoCadence:i,onCadence:r,onTracking:c}){const f=he.useRef(null),h=he.useRef(null),d=he.useRef({onCadence:r,onTracking:c}),v=he.useRef(e),g=he.useRef(new FR),[m,p]=he.useState(o==="demo"?"demo":"loading"),[y,M]=he.useState(""),[b,C]=he.useState(0),[S,x]=he.useState(0);d.current={onCadence:r,onTracking:c},v.current=e,he.useEffect(()=>{e||(g.current.reset(),d.current.onCadence(0))},[e]),he.useEffect(()=>{let U=!1,A=!1,H=0,O=null,z=null,G=null,N=-1,w=0,V=0,Q=0,ut=0,vt=null;g.current.reset(),M(""),x(0),d.current.onCadence(0);const lt=mt=>{U||mt===vt||(vt=mt,p(mt),d.current.onTracking(mt))},j=()=>{const mt=z;z=null,mt&&Promise.resolve(G).catch(()=>{}).then(()=>mt.close()).catch(()=>{})};if(o==="demo")return lt("demo"),()=>{U=!0};lt("loading");const ot=mt=>{const wt=h.current,kt=f.current,I=wt==null?void 0:wt.getContext("2d");if(!wt||!kt||!I||((wt.width!==kt.videoWidth||wt.height!==kt.videoHeight)&&(wt.width=kt.videoWidth||640,wt.height=kt.videoHeight||480),I.clearRect(0,0,wt.width,wt.height),!mt))return;const ft=wt.width/640;I.lineCap="round",I.lineWidth=3.2*ft;for(const[W,at]of GR)!oo(mt[W],.35)||!oo(mt[at],.35)||(I.strokeStyle=W%2?"#d8f28d":"#9ce4d2",I.shadowColor=I.strokeStyle,I.shadowBlur=8*ft,I.beginPath(),I.moveTo(mt[W].x*wt.width,mt[W].y*wt.height),I.lineTo(mt[at].x*wt.width,mt[at].y*wt.height),I.stroke());I.shadowBlur=0;for(const W of VR)oo(mt[W],.35)&&(I.beginPath(),I.arc(mt[W].x*wt.width,mt[W].y*wt.height,5.5*ft,0,Math.PI*2),I.fillStyle=W%2?"#e0f69e":"#a7eddd",I.fill(),I.strokeStyle="#24392e",I.lineWidth=1.6*ft,I.stroke())},Z=mt=>{if(U)return;const wt=performance.now();ut=wt;const kt=mt.poseLandmarks;ot(kt);const I=!!kt&&Qd.every(W=>oo(kt[W])),ft=!!kt&&oo(kt[11],.4)&&oo(kt[12],.4);if(I&&ft){const W=Math.hypot((kt[11].x+kt[12].x-kt[23].x-kt[24].x)/2,(kt[11].y+kt[12].y-kt[23].y-kt[24].y)/2);if(W>.07){lt("tracking"),V=wt;const at=kt[23].y-(kt[25].y*.6+kt[27].y*.4),Tt=kt[24].y-(kt[26].y*.6+kt[28].y*.4);d.current.onCadence(v.current?g.current.update((at-Tt)/W,wt):0),wt-Q>700&&(x(Math.round(Qd.reduce((Bt,Ct)=>Bt+(kt[Ct].visibility??0),0)/Qd.length*100)),Q=wt)}else lt("positioning"),d.current.onCadence(0),wt-V>600&&g.current.reset()}else lt("positioning"),d.current.onCadence(0),wt-V>600&&g.current.reset()},Et=async mt=>{if(U||A)return;ut&&mt-ut>1600&&(g.current.reset(),d.current.onCadence(0),lt("positioning"));const wt=f.current;if(wt&&z&&wt.readyState>=2&&wt.currentTime!==N&&mt-w>=40){N=wt.currentTime,w=mt;try{const kt=z.send({image:wt});G=kt,await kt,G===kt&&(G=null)}catch(kt){U||(A=!0,M(Ax(kt)),lt("error"),d.current.onCadence(0),O==null||O.getTracks().forEach(I=>I.stop()),j());return}}!U&&!A&&(H=requestAnimationFrame(Et))};return(async()=>{var mt;try{if(!window.isSecureContext||!((mt=navigator.mediaDevices)!=null&&mt.getUserMedia))throw new DOMException("Secure context is required","SecurityError");if(O=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:960},height:{ideal:720}},audio:!1}),U){O.getTracks().forEach(ft=>ft.stop());return}O.getVideoTracks().forEach(ft=>{ft.onended=()=>{U||(A=!0,cancelAnimationFrame(H),M("攝影機已中斷連線，請檢查裝置後重新連線。"),lt("error"),d.current.onCadence(0),g.current.reset(),j())}});const wt=f.current;if(!wt)return;wt.srcObject=O,await wt.play();const kt=await HR();if(U)return;z=new kt({locateFile:ft=>yl(`pose/${ft}`)}),z.setOptions({modelComplexity:0,smoothLandmarks:!0,enableSegmentation:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),z.onResults(Z);const I=z.initialize();if(G=I,await I,G===I&&(G=null),U)return;lt("positioning"),H=requestAnimationFrame(Et)}catch(wt){O==null||O.getTracks().forEach(kt=>kt.stop()),j(),U||(M(Ax(wt)),lt("error"),d.current.onCadence(0))}})(),()=>{U=!0,cancelAnimationFrame(H),O==null||O.getTracks().forEach(wt=>wt.stop()),j();const mt=f.current;mt&&(mt.srcObject=null),g.current.reset()}},[o,b]);const L=m==="demo"?"示範姿態":m==="tracking"?"姿態追蹤中":m==="loading"?"正在開啟攝影機…":m==="error"?"攝影機未連線":"請讓肩膀到雙腳入鏡";return R.jsxs("div",{className:`pose-camera pose-camera--${o}`,style:{position:"relative",width:"100%",height:"100%",minHeight:260,overflow:"hidden",borderRadius:16,background:"#26352d",color:"#eef2e5"},children:[o==="camera"?R.jsxs(R.Fragment,{children:[R.jsx("video",{ref:f,muted:!0,playsInline:!0,autoPlay:!0,className:"pose-video",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}}),R.jsx("canvas",{ref:h,className:"pose-overlay",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",transform:"scaleX(-1)"}})]}):R.jsx(XR,{running:e,cadence:i}),R.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(16,28,21,.25), transparent 28%, transparent 65%, rgba(16,28,21,.6))",pointerEvents:"none"}}),R.jsxs("div",{className:"pose-topline",style:{position:"absolute",top:16,left:17,right:17,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,fontSize:11,letterSpacing:".07em"},children:[R.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[R.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:m==="error"?"#e8a78f":"#c7eb8d",boxShadow:"0 0 10px #c7eb8d66"}}),o==="demo"?"動作分析預覽":"AI 即時動作分析"]}),R.jsx("span",{style:{color:"#d5dfcf",fontFamily:"monospace",fontSize:10},children:"POSE TRACKING"})]}),R.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:"53px 24px 48px",pointerEvents:"none"},children:["topLeft","topRight","bottomLeft","bottomRight"].map(U=>R.jsx("span",{style:{position:"absolute",width:15,height:15,borderColor:"#c8e69a88",borderStyle:"solid",borderWidth:`${U.startsWith("top")?2:0}px ${U.endsWith("Right")?2:0}px ${U.startsWith("bottom")?2:0}px ${U.endsWith("Left")?2:0}px`,...U.startsWith("top")?{top:0}:{bottom:0},...U.endsWith("Left")?{left:0}:{right:0}}},U))}),m==="error"&&o==="camera"&&R.jsxs("div",{role:"alert",className:"pose-error",style:{position:"absolute",inset:"65px 26px 57px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",gap:14,padding:12,background:"#24362df0",borderRadius:12},children:[R.jsx("span",{style:{fontSize:13,lineHeight:1.8},children:y}),R.jsx("button",{type:"button",onClick:()=>C(U=>U+1),style:{border:"1px solid #91a878",borderRadius:8,padding:"8px 18px",color:"#e8f0dc",background:"#3f5540",cursor:"pointer"},children:"重新連線"})]}),m==="loading"&&o==="camera"&&R.jsx("div",{role:"status",style:{position:"absolute",inset:"43% 20px auto",textAlign:"center",fontSize:13,textShadow:"0 1px 8px #000"},children:"正在載入本機辨識模型…"}),R.jsxs("div",{className:"pose-footer",style:{position:"absolute",bottom:15,left:17,right:17,display:"flex",justifyContent:"space-between",alignItems:"center",gap:8},children:[R.jsxs("span",{style:{padding:"6px 9px",borderRadius:6,color:"#e0ebd5",background:"#15271e99",border:"1px solid #b7d29a22",fontSize:10},children:[L,o==="demo"?"・非即時影像":""]}),R.jsx("span",{style:{fontSize:10,color:"#c8d8bc",letterSpacing:".04em"},children:o==="demo"?"12 關節標記":m==="tracking"?`辨識品質 ${S}%`:"肩・髖・膝・踝"})]})]})}function XR({running:o,cadence:e}){const i=he.useRef(null),r=he.useRef({running:o,cadence:e});return r.current={running:o,cadence:e},he.useEffect(()=>{let c=0,f=0,h=.7;const d=v=>{const g=i.current,m=g==null?void 0:g.getContext("2d");if(!g||!m)return;const p=f?Math.min((v-f)/1e3,.1):0;f=v,r.current.running&&(h+=p*r.current.cadence/60*Math.PI*2);const y=480,M=360;m.clearRect(0,0,y,M),m.strokeStyle="#c4db9b0b",m.lineWidth=1;for(let U=0;U<y;U+=30)m.beginPath(),m.moveTo(U,0),m.lineTo(U,M),m.stroke();for(let U=0;U<M;U+=30)m.beginPath(),m.moveTo(0,U),m.lineTo(y,U),m.stroke();const b=m.createRadialGradient(y/2,180,4,y/2,180,160);b.addColorStop(0,"#a7c76f12"),b.addColorStop(1,"#a7c76f00"),m.fillStyle=b,m.fillRect(0,0,y,M);const C=Math.sin(h),S=-C,x=[[218,116],[262,116],[223,192],[257,192],[199,230-C*24],[281,230-S*24],[218+Math.cos(h)*12,286-C*19],[262-Math.cos(h)*12,286-S*19],[200,280-C*19],[280,280-S*19],[193,166],[287,166]];m.strokeStyle="#bfd09d26",m.lineWidth=5,m.lineCap="round",m.beginPath(),m.moveTo(191,191),m.lineTo(191,227),m.lineTo(285,227),m.lineTo(285,298),m.moveTo(198,227),m.lineTo(198,298),m.stroke(),m.fillStyle="#c3d9a508",m.beginPath(),m.moveTo(...x[0]),m.lineTo(...x[1]),m.lineTo(...x[3]),m.lineTo(...x[2]),m.closePath(),m.fill(),m.strokeStyle="#c4d1b15e",m.lineWidth=2,m.beginPath(),m.ellipse(240,85,18,22,0,0,Math.PI*2),m.stroke(),m.beginPath(),m.moveTo(240,108),m.lineTo(240,116),m.stroke();const L=[[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[0,10],[1,11],[10,2],[11,3]];for(const[U,A]of L)m.strokeStyle=U%2===0?"#cce696":"#91cfbf",m.shadowColor=m.strokeStyle,m.shadowBlur=7,m.lineWidth=3,m.beginPath(),m.moveTo(...x[U]),m.lineTo(...x[A]),m.stroke();m.shadowBlur=0,x.forEach(([U,A],H)=>{m.beginPath(),m.arc(U,A,4.5,0,Math.PI*2),m.fillStyle=H%2===0?"#ddf3ae":"#b5e8dc",m.fill(),m.strokeStyle="#26382c",m.lineWidth=1.6,m.stroke()}),m.fillStyle="#d0ddb768",m.font="9px monospace",m.fillText("L",174,215),m.fillText("R",301,215),c=requestAnimationFrame(d)};return c=requestAnimationFrame(d),()=>cancelAnimationFrame(c)},[]),R.jsx("canvas",{ref:i,width:480,height:360,"aria-label":"示範坐姿空中踩踏的關節辨識動畫，非即時攝影機影像",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}})}const Rx=[{id:"forest",title:"晨光森林",subtitle:"穿過綠意，和微風打聲招呼",label:"平緩・森林",icon:MM,image:yl("routes/forest.svg")},{id:"coast",title:"蔚藍海岸",subtitle:"沿著海岸線，把心情放晴",label:"平緩・海岸",icon:bM,image:yl("routes/coast.svg")},{id:"sunset",title:"暖陽山丘",subtitle:"追著金色陽光，慢慢向前",label:"平緩・山丘",icon:gM,image:yl("routes/sunset.svg")}],Jd=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(Math.floor(o%60)).padStart(2,"0")}`;function jR(){try{const o=JSON.parse(localStorage.getItem("forest-pedal-rides")||"[]");return Array.isArray(o)?o.filter(e=>!!e&&typeof e.route=="string"&&typeof e.date=="string"&&Number.isFinite(Date.parse(e.date))&&Number.isFinite(e.seconds)&&e.seconds>=0&&Number.isFinite(e.distance)&&e.distance>=0).slice(0,100):[]}catch{return[]}}function qR(){const[o,e]=he.useState("forest"),[i,r]=he.useState(!1),[c,f]=he.useState("demo"),[h,d]=he.useState(42),[v,g]=he.useState(0),[m,p]=he.useState("demo"),[y,M]=he.useState(0),[b,C]=he.useState(0),[S,x]=he.useState(15),[L,U]=he.useState(null),[A,H]=he.useState(jR),[O,z]=he.useState(!0),[G,N]=he.useState(!1),[w,V]=he.useState(!1),[Q,ut]=he.useState(!1),[vt,lt]=he.useState(""),j=he.useRef(null),ot=he.useRef(null),Z=he.useRef(null),Et=Rx.find(Y=>Y.id===o),_t=i?c==="demo"?h:m==="tracking"?v:0:0,mt=Math.min(30,_t*.28),wt=Math.min(1,y/(S*60)),kt=he.useCallback(Y=>g(Y),[]),I=he.useCallback(Y=>p(Y),[]);he.useEffect(()=>{if(!i)return;let Y=performance.now();const zt=setInterval(()=>{const F=performance.now(),ve=Math.min((F-Y)/1e3,2);Y=F,M(te=>te+ve),C(te=>te+mt/3600*ve)},200);return()=>clearInterval(zt)},[i,mt]),he.useEffect(()=>{if(!vt)return;const Y=setTimeout(()=>lt(""),4e3);return()=>clearTimeout(Y)},[vt]),he.useEffect(()=>{const Y=zt=>{zt.key==="Escape"&&U(null)};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[]),he.useEffect(()=>{if(!L)return;const Y=document.activeElement,zt=document.body.style.overflow;document.body.style.overflow="hidden";const F=ve=>{if(ve.key!=="Tab")return;const te=[...document.querySelectorAll(".modal button:not(:disabled), .modal select, .modal a[href], .modal input")],Wt=te[0],Pt=te[te.length-1];ve.shiftKey&&document.activeElement===Wt?(ve.preventDefault(),Pt==null||Pt.focus()):!ve.shiftKey&&document.activeElement===Pt&&(ve.preventDefault(),Wt==null||Wt.focus())};return document.addEventListener("keydown",F),()=>{document.body.style.overflow=zt,document.removeEventListener("keydown",F),Y!=null&&Y.isConnected&&Y.focus()}},[L]),he.useEffect(()=>{Z.current&&ot.current&&Z.current.gain.setTargetAtTime(!O&&i?.08:0,ot.current.currentTime,.3)},[O,i,G]),he.useEffect(()=>()=>{var Y;(Y=ot.current)==null||Y.close()},[]);async function ft(){if(!ot.current){const Y=new AudioContext;ot.current=Y;const zt=Y.createBuffer(1,Y.sampleRate*3,Y.sampleRate),F=zt.getChannelData(0);let ve=0;for(let re=0;re<F.length;re++)ve=(ve+(Math.random()*2-1)*.025)/1.02,F[re]=ve*3;const te=Y.createBufferSource();te.buffer=zt,te.loop=!0;const Wt=Y.createBiquadFilter();Wt.type="lowpass",Wt.frequency.value=700;const Pt=Y.createGain();Pt.gain.value=0,Z.current=Pt,te.connect(Wt).connect(Pt).connect(Y.destination),te.start(),N(!0)}await ot.current.resume(),z(Y=>!Y)}function W(){if(r(!1),y>0&&!Q){const zt=[{date:new Date().toISOString(),seconds:Math.floor(y),distance:b,route:Et.title},...A].slice(0,100);H(zt),ut(!0);try{localStorage.setItem("forest-pedal-rides",JSON.stringify(zt))}catch{lt("瀏覽器無法儲存紀錄，本次成績仍可在畫面查看。")}U("finish")}else Q&&U("finish")}function at(){r(!1),M(0),C(0),g(0),ut(!1),U(null)}function Tt(){Q&&(M(0),C(0),ut(!1)),r(Y=>!Y)}async function Bt(){var Y;try{document.fullscreenElement?await document.exitFullscreen():await((Y=j.current)==null?void 0:Y.requestFullscreen())}catch{lt("此瀏覽器不支援全螢幕，可使用瀏覽器的放大功能。")}}function Ct(Y){f(Y),g(0)}return R.jsxs("div",{className:`app-shell${w?" large-text":""}`,children:[R.jsxs("header",{className:"site-header",children:[R.jsxs("a",{href:"#",className:"brand","aria-label":"森森騎旅首頁",children:[R.jsxs("span",{className:"brand-mark",children:[R.jsx(vd,{size:27,strokeWidth:1.8}),R.jsx("span",{className:"brand-wheel left"}),R.jsx("span",{className:"brand-wheel right"})]}),R.jsxs("span",{children:[R.jsxs("strong",{children:["森森騎旅",R.jsx("span",{className:"brand-dot",children:"."})]}),R.jsx("small",{children:"Little pedals. Big adventures."})]})]}),R.jsxs("nav",{"aria-label":"主要導覽",children:[R.jsxs("button",{className:"nav-item active",onClick:()=>{var Y;U(null),(Y=document.getElementById("ride"))==null||Y.scrollIntoView({behavior:"smooth"})},children:[R.jsx(Sv,{size:17}),"騎行天地"]}),R.jsxs("button",{className:"nav-item",onClick:()=>U("records"),children:[R.jsx(gd,{size:17}),"我的紀錄"]}),R.jsxs("button",{className:"nav-item",onClick:()=>U("guide"),children:[R.jsx(fM,{size:17}),"使用說明"]})]}),R.jsxs("div",{className:"header-right",children:[R.jsxs("span",{className:"local-badge",children:[R.jsx("span",{}),"自在動一動，好心情一整天"]}),R.jsx("button",{className:"icon-button settings-button","aria-label":"騎行設定",onClick:()=>U("settings"),children:R.jsx(_d,{size:19})})]})]}),R.jsxs("main",{id:"ride",className:"main-content",children:[R.jsxs("section",{className:"page-heading",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"eyebrow",children:[R.jsx("span",{}),"YOUR EVERYDAY LITTLE ADVENTURE"]}),R.jsxs("h1",{children:["坐著動，也能去遠方",R.jsx("span",{children:"。"})]}),R.jsx("p",{children:"跟著自己的節奏踩踏，讓每一小步，都有好風景。"})]}),R.jsxs("div",{className:"heading-note",children:[R.jsx("span",{className:"note-icon",children:R.jsx(Jc,{size:21})}),R.jsxs("div",{children:[R.jsx("strong",{children:"不必趕路，享受這一刻"}),R.jsx("span",{children:"今天的旅程，從舒服開始。"})]})]})]}),R.jsxs("div",{className:"dashboard-grid",children:[R.jsxs("div",{className:"main-column",children:[R.jsxs("section",{className:`ride-card route-${o}`,ref:j,"aria-label":"3D 騎行遊戲",children:[R.jsx(BR,{speed:mt,running:i,route:o}),R.jsxs("div",{className:"scene-top",children:[R.jsxs("div",{className:"scene-location",children:[R.jsxs("span",{className:"scene-kicker",children:[R.jsx(mM,{size:12}),"你的此刻，正在自然裡"]}),R.jsx("h2",{children:Et.title}),R.jsxs("span",{className:"scene-route-label",children:[R.jsx(Et.icon,{size:13}),Et.label,R.jsx("span",{className:"scene-dot",children:"·"}),"自由騎行"]})]}),R.jsxs("div",{className:"scene-tools",children:[R.jsxs("span",{className:"weather-pill",children:[R.jsx(SM,{size:17}),o==="sunset"?"暖陽相伴":o==="coast"?"海風正好":"陽光正好"]}),R.jsx("button",{onClick:()=>void Bt(),className:"scene-icon","aria-label":"切換全螢幕",children:R.jsx(dM,{size:17})})]})]}),R.jsxs("div",{className:"scene-status",children:[R.jsx("span",{className:i?"status-dot live":"status-dot"}),c==="demo"?"示範模式":m==="tracking"?"動作已連線":m==="loading"?"攝影機準備中":"攝影機模式",R.jsx("span",{className:"status-separator"}),i?_t>0?"微風與你同行":"等你開始踩踏":"準備好就出發"]}),R.jsxs("div",{className:"scene-bottom",children:[R.jsxs("div",{className:"ride-metrics",children:[R.jsxs("div",{children:[R.jsxs("span",{children:[R.jsx(gd,{size:14}),"騎行距離"]}),R.jsxs("strong",{children:[b.toFixed(2),R.jsx("small",{children:"km"})]})]}),R.jsx("span",{className:"metric-divider"}),R.jsxs("div",{children:[R.jsxs("span",{children:[R.jsx(hM,{size:14}),"騎行時間"]}),R.jsx("strong",{children:Jd(y)})]})]}),R.jsxs("button",{className:`start-button ${i?"is-running":""}`,onClick:Tt,children:[i?R.jsx(_M,{size:19,fill:"currentColor"}):R.jsx(vM,{size:19,fill:"currentColor"}),i?"暫停一下":Q?"再騎一趟":y>0?"繼續騎行":"開始騎行",!i&&R.jsx(Kc,{size:18})]}),R.jsxs("button",{className:"end-ride",disabled:y===0,onClick:W,children:[R.jsx(md,{size:15}),"結束旅程"]})]})]}),R.jsxs("section",{className:"routes-section",children:[R.jsxs("div",{className:"section-title",children:[R.jsxs("div",{children:[R.jsx("span",{className:"small-icon",children:R.jsx(Sv,{size:18})}),R.jsx("h2",{children:"下一站，想去哪裡？"})]}),R.jsx("span",{children:"3 條風景・隨心切換"})]}),R.jsx("div",{className:"route-grid",children:Rx.map((Y,zt)=>R.jsxs("button",{className:`route-card ${o===Y.id?"selected":""}`,onClick:()=>{e(Y.id),o!==Y.id&&lt(`已切換至${Y.title}，旅程繼續累計。`)},"aria-pressed":o===Y.id,children:[R.jsxs("div",{className:"route-image",style:{backgroundImage:`url(${Y.image})`},children:[R.jsxs("span",{className:"route-number",children:["0",zt+1]}),R.jsx("span",{className:"route-selection",children:o===Y.id?R.jsxs(R.Fragment,{children:[R.jsx(Qc,{size:11}),"正在探索"]}):R.jsxs(R.Fragment,{children:[R.jsx(Y.icon,{size:11}),Y.label.split("・")[1]]})})]}),R.jsxs("div",{className:"route-copy",children:[R.jsxs("h3",{children:[Y.title,R.jsx("span",{children:o===Y.id?R.jsx("span",{className:"selected-dot"}):R.jsx(uM,{size:15})})]}),R.jsx("p",{children:Y.subtitle})]})]},Y.id))})]}),R.jsxs("div",{className:"gentle-reminder",children:[R.jsx("span",{className:"reminder-icon",children:R.jsx($c,{size:21})}),R.jsxs("div",{children:[R.jsx("strong",{children:"動得舒服，比動得快更重要。"}),R.jsx("p",{children:"請坐穩有靠背的椅子，依自己的體力輕鬆踩踏；若感到不適，隨時停下休息。"})]}),R.jsx(Jc,{className:"reminder-leaf",size:35,strokeWidth:1.1})]})]}),R.jsxs("aside",{className:"side-column",children:[R.jsxs("section",{className:"pace-card",children:[R.jsxs("div",{className:"card-heading",children:[R.jsxs("h2",{children:[R.jsx(lM,{size:17}),"你的踩踏節奏"]}),R.jsxs("span",{className:"live-label",children:[R.jsx("span",{}),c==="demo"?"DEMO":"LIVE"]})]}),R.jsxs("div",{className:"speed-reading",children:[R.jsx("strong",{children:mt.toFixed(1)}),R.jsx("span",{children:"km/h"}),R.jsxs("span",{className:"speed-illustration",children:[R.jsx(AM,{size:27}),R.jsx(pd,{size:43,strokeWidth:1.2})]})]}),R.jsx("div",{className:"pace-divider"}),R.jsxs("div",{className:"cadence-reading",children:[R.jsxs("span",{children:[R.jsx(pM,{size:16}),"踩踏頻率"]}),R.jsxs("strong",{children:[Math.round(_t),R.jsx("small",{children:"rpm"})]})]}),R.jsx("div",{className:"pace-bars","aria-hidden":"true",children:Array.from({length:28},(Y,zt)=>R.jsx("i",{className:zt<Math.round(_t/90*28)?"filled":""},zt))}),R.jsxs("p",{className:"pace-caption",children:[i?_t===0?"輕輕抬腿，開始你的踩踏":_t>70?"很有活力！記得保持呼吸順暢":"很棒，保持舒服的節奏就好":"按下開始，跟著你的節奏出發",R.jsx(Jc,{size:13})]})]}),R.jsxs("section",{className:"camera-card",children:[R.jsxs("div",{className:"card-heading",children:[R.jsxs("h2",{children:[R.jsx(yv,{size:17}),"動作小視窗"]}),R.jsxs("span",{className:`tracking-label ${m==="tracking"?"tracked":""}`,children:[R.jsx("span",{}),c==="demo"?"示範中":{loading:"啟動中",tracking:"已辨識",positioning:"請調整位置",error:"尚未連線",demo:"準備中"}[m]]})]}),R.jsxs("div",{className:"mode-tabs",role:"group","aria-label":"選擇動作模式",children:[R.jsxs("button",{className:c==="demo"?"active":"",onClick:()=>Ct("demo"),children:[R.jsx(yM,{size:13}),"先試玩看看"]}),R.jsxs("button",{className:c==="camera"?"active":"",onClick:()=>Ct("camera"),children:[R.jsx(yv,{size:13}),"使用攝影機"]})]}),R.jsx("div",{className:"camera-viewport",children:R.jsx(kR,{mode:c,running:i,demoCadence:h,onCadence:kt,onTracking:I})}),c==="demo"?R.jsxs("div",{className:"demo-control",children:[R.jsxs("div",{children:[R.jsx("label",{htmlFor:"demo-speed",children:"試試不同的踩踏速度"}),R.jsxs("span",{children:[h,R.jsx("small",{children:"rpm"})]})]}),R.jsx("input",{id:"demo-speed",type:"range",min:"0",max:"90",step:"1",value:h,onChange:Y=>d(Number(Y.target.value)),"aria-label":"示範踩踏速度"}),R.jsxs("div",{className:"range-labels",children:[R.jsx("span",{children:"慢慢踩"}),R.jsx("span",{children:"活力踩"})]})]}):R.jsxs("div",{className:"camera-instruction",children:[R.jsx("span",{className:"privacy-icon",children:R.jsx($c,{size:17})}),R.jsxs("p",{children:["鏡頭需拍到肩膀、髖部、膝蓋和腳踝。",R.jsx("br",{}),R.jsx("small",{children:"影像僅在裝置分析，不錄影、不上傳。"})]})]})]}),R.jsxs("section",{className:"goal-card",children:[R.jsxs("div",{className:"goal-copy",children:[R.jsxs("span",{className:"goal-eyebrow",children:[R.jsx(md,{size:13}),"今天的小目標"]}),R.jsxs("h3",{children:["給自己一點",R.jsx("br",{}),"動起來的時間。"]}),R.jsxs("label",{className:"goal-select",children:[R.jsx("select",{value:S,onChange:Y=>x(Number(Y.target.value)),"aria-label":"騎行時間目標",children:[5,10,15,20,30].map(Y=>R.jsxs("option",{value:Y,children:[Y," 分鐘輕鬆騎"]},Y))}),R.jsx(cM,{size:12})]})]}),R.jsxs("div",{className:"goal-ring",children:[R.jsxs("svg",{viewBox:"0 0 100 100",children:[R.jsx("circle",{className:"ring-track",cx:"50",cy:"50",r:"42"}),R.jsx("circle",{className:"ring-progress",cx:"50",cy:"50",r:"42",strokeDasharray:`${wt*264} 264`})]}),R.jsx("div",{children:wt>=1?R.jsx(Qc,{size:26}):R.jsxs(R.Fragment,{children:[R.jsxs("strong",{children:[Math.floor(y/60),R.jsxs("small",{children:[" / ",S]})]}),R.jsx("span",{children:"分鐘"})]})})]}),wt>=1&&R.jsx("span",{className:"goal-complete",children:"今天的小目標達成了！"})]})]})]}),R.jsxs("footer",{className:"site-footer",children:[R.jsxs("span",{children:[R.jsx(vd,{size:13}),"每一次踩踏，都是照顧自己的開始。"]}),R.jsxs("div",{children:[R.jsx("span",{children:"為每一個年紀，留一段好風景"}),R.jsx("span",{className:"footer-dot",children:"·"}),R.jsxs("button",{onClick:()=>U("settings"),children:["騎行設定",R.jsx(_d,{size:12})]}),R.jsxs("button",{onClick:()=>U("guide"),children:["需要幫忙嗎？",R.jsx(Kc,{size:12})]})]})]})]}),R.jsxs("button",{className:`sound-button ${O?"":"sound-on"}`,onClick:()=>void ft(),"aria-label":O?"開啟自然環境音":"關閉自然環境音",title:O?"開啟自然環境音":"關閉自然環境音",children:[O?R.jsx(TM,{size:18}):R.jsx(EM,{size:18}),R.jsxs("span",{children:["自然環境音",O?"已關閉":"已開啟"]})]}),vt&&R.jsxs("div",{className:"toast",role:"status",children:[R.jsx(Qc,{size:17}),vt]}),L&&R.jsx("div",{className:"modal-backdrop",onClick:Y=>{Y.target===Y.currentTarget&&U(null)},children:R.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[R.jsx("button",{className:"modal-close icon-button",autoFocus:!0,onClick:()=>U(null),"aria-label":"關閉視窗",children:R.jsx(RM,{size:20})}),L==="guide"&&R.jsxs(R.Fragment,{children:[R.jsx("span",{className:"modal-badge",children:R.jsx(Jc,{size:22})}),R.jsx("p",{className:"eyebrow",children:"A LITTLE GUIDE FOR YOUR RIDE"}),R.jsx("h2",{id:"modal-title",children:"準備好，輕鬆出發。"}),R.jsx("p",{className:"modal-intro",children:"不用穿上車鞋，也能騎進好風景。"}),R.jsxs("ol",{className:"guide-steps",children:[R.jsxs("li",{children:[R.jsx("span",{children:"01"}),R.jsxs("div",{children:[R.jsx("h3",{children:"坐穩，留一點空間"}),R.jsx("p",{children:"選有靠背、不滑動的穩固椅子，坐好並讓雙腿有安全的活動空間。可請家人在旁協助。"})]})]}),R.jsxs("li",{children:[R.jsx("span",{children:"02"}),R.jsxs("div",{children:[R.jsx("h3",{children:"打開攝影機，讓雙腿入鏡"}),R.jsx("p",{children:"將鏡頭放在前方，完整拍到肩膀、髖部、膝蓋及腳踝。允許攝影機後，綠色標點會跟著身體移動。需要 HTTPS 或本機環境。"})]})]}),R.jsxs("li",{children:[R.jsx("span",{children:"03"}),R.jsxs("div",{children:[R.jsx("h3",{children:"按下開始，輪流抬腿踩踏"}),R.jsx("p",{children:"像踩空中腳踏車一樣交替抬腿。持續踩踏數圈後會顯示速度；踩得越快，騎得越快。停下後車子也會慢慢停下。"})]})]})]}),R.jsxs("div",{className:"guide-note",children:[R.jsx($c,{size:19}),R.jsx("p",{children:"以自己的舒適程度為準，不需追求速度。如有疼痛、頭暈或喘不過氣，請停止並尋求協助。本遊戲不作醫療評估。"})]}),R.jsxs("button",{className:"primary-button",onClick:()=>U(null),children:["知道了，準備出發",R.jsx(Kc,{size:17})]})]}),L==="records"&&R.jsxs(R.Fragment,{children:[R.jsx("span",{className:"modal-badge",children:R.jsx(gd,{size:23})}),R.jsx("p",{className:"eyebrow",children:"EVERY LITTLE RIDE COUNTS"}),R.jsx("h2",{id:"modal-title",children:"我的騎行足跡"}),R.jsx("p",{className:"modal-intro",children:"每一段旅程，都值得記下來。紀錄儲存於此瀏覽器。"}),A.length?R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"records-totals",children:[R.jsxs("div",{children:[R.jsx("strong",{children:A.length}),R.jsx("span",{children:"趟旅程"})]}),R.jsxs("div",{children:[R.jsx("strong",{children:A.reduce((Y,zt)=>Y+zt.distance,0).toFixed(2)}),R.jsx("span",{children:"總公里"})]}),R.jsxs("div",{children:[R.jsx("strong",{children:Math.floor(A.reduce((Y,zt)=>Y+zt.seconds,0)/60)}),R.jsx("span",{children:"總分鐘"})]})]}),R.jsx("div",{className:"records-list",children:A.map((Y,zt)=>R.jsxs("div",{className:"record-row",children:[R.jsx("span",{className:"record-icon",children:R.jsx(pd,{size:21})}),R.jsxs("div",{children:[R.jsx("strong",{children:Y.route}),R.jsx("span",{children:new Date(Y.date).toLocaleString("zh-TW",{month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),R.jsxs("div",{children:[R.jsxs("strong",{children:[Y.distance.toFixed(2)," km"]}),R.jsx("span",{children:Jd(Y.seconds)})]})]},`${Y.date}-${zt}`))}),R.jsx("p",{className:"record-footnote",children:"示範與攝影機模式的旅程皆會保存在此。距離為遊戲中的虛擬里程。"})]}):R.jsxs("div",{className:"empty-records",children:[R.jsx(pd,{size:48,strokeWidth:1.2}),R.jsx("h3",{children:"第一段好風景，正等著你。"}),R.jsx("p",{children:"完成騎行後按「結束旅程」，足跡就會留在這裡。"}),R.jsxs("button",{className:"primary-button",onClick:()=>U(null),children:["去騎一會兒",R.jsx(Kc,{size:17})]})]})]}),L==="finish"&&R.jsxs(R.Fragment,{children:[R.jsx("span",{className:"modal-badge finish-badge",children:R.jsx(md,{size:25})}),R.jsx("p",{className:"eyebrow",children:"YOU DID SOMETHING GOOD TODAY"}),R.jsx("h2",{id:"modal-title",children:"把這份好心情，帶回生活。"}),R.jsx("p",{className:"modal-intro",children:"今天的你很棒，謝謝自己願意動一動。"}),R.jsxs("div",{className:"finish-scene",children:[R.jsx(vd,{size:65,strokeWidth:1.2}),R.jsx("span",{children:"旅程已儲存"})]}),R.jsxs("div",{className:"records-totals",children:[R.jsxs("div",{children:[R.jsx("strong",{children:b.toFixed(2)}),R.jsx("span",{children:"公里"})]}),R.jsxs("div",{children:[R.jsx("strong",{children:Jd(y)}),R.jsx("span",{children:"騎行時間"})]}),R.jsxs("div",{children:[R.jsxs("strong",{children:[Math.round(wt*100),"%"]}),R.jsx("span",{children:"目標完成"})]})]}),R.jsxs("p",{className:"finish-note",children:["喝口水，讓身體休息一下。",R.jsx("br",{}),c==="demo"?"本次為示範騎行，里程為虛擬模擬。":"騎行距離為依踩踏節奏推估的遊戲里程。"]}),R.jsxs("button",{className:"primary-button",onClick:at,children:[R.jsx(xM,{size:17}),"開始一段新旅程"]})]}),L==="settings"&&R.jsxs(R.Fragment,{children:[R.jsx("span",{className:"modal-badge",children:R.jsx(_d,{size:23})}),R.jsx("p",{className:"eyebrow",children:"MAKE YOURSELF COMFORTABLE"}),R.jsx("h2",{id:"modal-title",children:"照你的步調就好。"}),R.jsxs("div",{className:"setting-row",children:[R.jsxs("div",{children:[R.jsx("h3",{children:"自然環境音"}),R.jsx("p",{children:"騎行時，讓輕柔風聲陪伴你。"})]}),R.jsx("button",{className:`toggle ${O?"":"on"}`,role:"switch","aria-checked":!O,"aria-label":"自然環境音",onClick:()=>void ft(),children:R.jsx("span",{})})]}),R.jsxs("div",{className:"setting-row",children:[R.jsxs("div",{children:[R.jsx("h3",{children:"友善大字模式"}),R.jsx("p",{children:"放大主要操作與提示文字，看得更輕鬆。"})]}),R.jsx("button",{className:`toggle ${w?"on":""}`,role:"switch","aria-checked":w,"aria-label":"友善大字模式",onClick:()=>V(Y=>!Y),children:R.jsx("span",{})})]}),R.jsxs("div",{className:"setting-row",children:[R.jsxs("div",{children:[R.jsx("h3",{children:"騎行目標"}),R.jsx("p",{children:"目標達成後仍可繼續自由騎行。"})]}),R.jsx("select",{value:S,onChange:Y=>x(Number(Y.target.value)),"aria-label":"設定騎行目標",children:[5,10,15,20,30].map(Y=>R.jsxs("option",{value:Y,children:[Y," 分鐘"]},Y))})]}),R.jsxs("div",{className:"guide-note",children:[R.jsx($c,{size:19}),R.jsx("p",{children:"攝影機影像在你的裝置即時分析，不會傳送至伺服器。切換回示範模式便會關閉攝影機。"})]}),R.jsxs("button",{className:"primary-button",onClick:()=>U(null),children:["設定完成",R.jsx(Qc,{size:17})]})]})]})})]})}aM.createRoot(document.getElementById("root")).render(R.jsx(K1.StrictMode,{children:R.jsx(qR,{})}));
