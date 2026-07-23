Warning: truncated output (original token count: 265071)
Total output lines: 1208

/* Bundled LazyCat file chooser inject.
 * Generated from vendor/lzc-file-pickers.umd.js and open-save-chooser.js.
 */
(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.filePicker={}))})(this,function(exports){"use strict";/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function makeMap(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,isOn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),isModelListener=e=>e.startsWith("onUpdate:"),extend=Object.assign,remove=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},hasOwnProperty$1=Object.prototype.hasOwnProperty,hasOwn=(e,n)=>hasOwnProperty$1.call(e,n),isArray$3=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isFunction$2=e=>typeof e=="function",isString=e=>typeof e=="string",isSymbol=e=>typeof e=="symbol",isObject=e=>e!==null&&typeof e=="object",isPromise$2=e=>(isObject(e)||isFunction$2(e))&&isFunction$2(e.then)&&isFunction$2(e.catch),objectToString=Object.prototype.toString,toTypeString=e=>objectToString.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,(n,t)=>t?t.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,n)=>!Object.is(e,n),invokeArrayFns=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},def=(e,n,t,o=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:o,value:t})},looseToNumber=e=>{const n=parseFloat(e);return isNaN(n)?e:n},toNumber=e=>{const n=isString(e)?Number(e):NaN;return isNaN(n)?e:n};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function normalizeStyle(e){if(isArray$3(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],i=isString(o)?parseStringStyle(o):normalizeStyle(o);if(i)for(const r in i)n[r]=i[r]}return n}else if(isString(e)||isObject(e))return e}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*[^]*?\*\//g;function parseStringStyle(e){const n={};return e.replace(styleCommentRE,"").split(listDelimiterRE).forEach(t=>{if(t){const o=t.split(propertyDelimiterRE);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function normalizeClass(e){let n="";if(isString(e))n=e;else if(isArray$3(e))for(let t=0;t<e.length;t++){const o=normalizeClass(e[t]);o&&(n+=o+" ")}else if(isObject(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let activeEffectScope;class EffectScope{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=activeEffectScope,!n&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=activeEffectScope;try{return activeEffectScope=this,n()}finally{activeEffectScope=t}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(n){if(this._active){this._active=!1;let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(this.effects.length=0,t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function getCurrentScope(){return activeEffectScope}let activeSub;const pausedQueueEffects=new WeakSet;class ReactiveEffect{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,activeEffectScope&&activeEffectScope.active&&activeEffectScope.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pausedQueueEffects.has(this)&&(pausedQueueEffects.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||batch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cleanupEffect(this),prepareDeps(this);const n=activeSub,t=shouldTrack;activeSub=this,shouldTrack=!0;try{return this.fn()}finally{cleanupDeps(this),activeSub=n,shouldTrack=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)removeSub(n);this.deps=this.depsTail=void 0,cleanupEffect(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pausedQueueEffects.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){isDirty(this)&&this.run()}get dirty(){return isDirty(this)}}let batchDepth=0,batchedSub,batchedComputed;function batch(e,n=!1){if(e.flags|=8,n){e.next=batchedComputed,batchedComputed=e;return}e.next=batchedSub,batchedSub=e}function startBatch(){batchDepth++}function endBatch(){if(--batchDepth>0)return;if(batchedComputed){let n=batchedComputed;for(batchedComputed=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;batchedSub;){let n=batchedSub;for(batchedSub=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(o){e||(e=o)}n=t}}if(e)throw e}function prepareDeps(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function cleanupDeps(e){let n,t=e.depsTail,o=t;for(;o;){const i=o.prevDep;o.version===-1?(o===t&&(t=i),removeSub(o),removeDep(o)):n=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=i}e.deps=n,e.depsTail=t}function isDirty(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(refreshComputed(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function refreshComputed(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===globalVersion))return;e.globalVersion=globalVersion;const n=e.dep;if(e.flags|=2,n.version>0&&!e.isSSR&&e.deps&&!isDirty(e)){e.flags&=-3;return}const t=activeSub,o=shouldTrack;activeSub=e,shouldTrack=!0;try{prepareDeps(e);const i=e.fn(e._value);(n.version===0||hasChanged(i,e._value))&&(e._value=i,n.version++)}catch(i){throw n.version++,i}finally{activeSub=t,shouldTrack=o,cleanupDeps(e),e.flags&=-3}}function removeSub(e,n=!1){const{dep:t,prevSub:o,nextSub:i}=e;if(o&&(o.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=o,e.nextSub=void 0),t.subs===e&&(t.subs=o,!o&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)removeSub(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function removeDep(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function cleanupEffect(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=activeSub;activeSub=void 0;try{n()}finally{activeSub=t}}}let globalVersion=0;class Link{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dep{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!activeSub||!shouldTrack||activeSub===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==activeSub)t=this.activeLink=new Link(activeSub,this),activeSub.deps?(t.prevDep=activeSub.depsTail,activeSub.depsTail.nextDep=t,activeSub.depsTail=t):activeSub.deps=activeSub.depsTail=t,addSub(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const o=t.nextDep;o.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=o),t.prevDep=activeSub.depsTail,t.nextDep=void 0,activeSub.depsTail.nextDep=t,activeSub.depsTail=t,activeSub.deps===t&&(activeSub.deps=o)}return t}trigger(n){this.version++,globalVersion++,this.notify(n)}notify(n){startBatch();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{endBatch()}}}function addSub(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let o=n.deps;o;o=o.nextDep)addSub(o)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const targetMap=new WeakMap,ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol(""),ARRAY_ITERATE_KEY=Symbol("");function track(e,n,t){if(shouldTrack&&activeSub){let o=targetMap.get(e);o||targetMap.set(e,o=new Map);let i=o.get(t);i||(o.set(t,i=new Dep),i.map=o,i.key=t),i.track()}}function trigger(e,n,t,o,i,r){const y=targetMap.get(e);if(!y){globalVersion++;return}const g=E=>{E&&E.trigger()};if(startBatch(),n==="clear")y.forEach(g);else{const E=isArray$3(e),P=E&&isIntegerKey(t);if(E&&t==="length"){const $=Number(o);y.forEach((K,j)=>{(j==="length"||j===ARRAY_ITERATE_KEY||!isSymbol(j)&&j>=$)&&g(K)})}else switch((t!==void 0||y.has(void 0))&&g(y.get(t)),P&&g(y.get(ARRAY_ITERATE_KEY)),n){case"add":E?P&&g(y.get("length")):(g(y.get(ITERATE_KEY)),isMap(e)&&g(y.get(MAP_KEY_ITERATE_KEY)));break;case"delete":E||(g(y.get(ITERATE_KEY)),isMap(e)&&g(y.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&g(y.get(ITERATE_KEY));break}}endBatch()}function reactiveReadArray(e){const n=toRaw(e);return n===e?n:(track(n,"iterate",ARRAY_ITERATE_KEY),isShallow(e)?n:n.map(toReactive))}function shallowReadArray(e){return track(e=toRaw(e),"iterate",ARRAY_ITERATE_KEY),e}const arrayInstrumentations={__proto__:null,[Symbol.iterator](){return iterator$1(this,Symbol.iterator,toReactive)},concat(...e){return reactiveReadArray(this).concat(...e.map(n=>isArray$3(n)?reactiveReadArray(n):n))},entries(){return iterator$1(this,"entries",e=>(e[1]=toReactive(e[1]),e))},every(e,n){return apply(this,"every",e,n,void 0,arguments)},filter(e,n){return apply(this,"filter",e,n,t=>t.map(toReactive),arguments)},find(e,n){return apply(this,"find",e,n,toReactive,arguments)},findIndex(e,n){return apply(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return apply(this,"findLast",e,n,toReactive,arguments)},findLastIndex(e,n){return apply(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return apply(this,"forEach",e,n,void 0,arguments)},includes(...e){return searchProxy(this,"includes",e)},indexOf(...e){return searchProxy(this,"indexOf",e)},join(e){return reactiveReadArray(this).join(e)},lastIndexOf(...e){return searchProxy(this,"lastIndexOf",e)},map(e,n){return apply(this,"map",e,n,void 0,arguments)},pop(){return noTracking(this,"pop")},push(...e){return noTracking(this,"push",e)},reduce(e,...n){return reduce$2(this,"reduce",e,n)},reduceRight(e,...n){return reduce$2(this,"reduceRight",e,n)},shift(){return noTracking(this,"shift")},some(e,n){return apply(this,"some",e,n,void 0,arguments)},splice(...e){return noTracking(this,"splice",e)},toReversed(){return reactiveReadArray(this).toReversed()},toSorted(e){return reactiveReadArray(this).toSorted(e)},toSpliced(...e){return reactiveReadArray(this).toSpliced(...e)},unshift(...e){return noTracking(this,"unshift",e)},values(){return iterator$1(this,"values",toReactive)}};function iterator$1(e,n,t){const o=shallowReadArray(e),i=o[n]();return o!==e&&!isShallow(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=t(r.value)),r}),i}const arrayProto=Array.prototype;function apply(e,n,t,o,i,r){const y=shallowReadArray(e),g=y!==e&&!isShallow(e),E=y[n];if(E!==arrayProto[n]){const K=E.apply(e,r);return g?toReactive(K):K}let P=t;y!==e&&(g?P=function(K,j){return t.call(this,toReactive(K),j,e)}:t.length>2&&(P=function(K,j){return t.call(this,K,j,e)}));const $=E.call(y,P,o);return g&&i?i($):$}function reduce$2(e,n,t,o){const i=shallowReadArray(e);let r=t;return i!==e&&(isShallow(e)?t.length>3&&(r=function(y,g,E){return t.call(this,y,g,E,e)}):r=function(y,g,E){return t.call(this,y,toReactive(g),E,e)}),i[n](r,...o)}function searchProxy(e,n,t){const o=toRaw(e);track(o,"iterate",ARRAY_ITERATE_KEY);const i=o[n](...t);return(i===-1||i===!1)&&isProxy(t[0])?(t[0]=toRaw(t[0]),o[n](...t)):i}function noTracking(e,n,t=[]){pauseTracking(),startBatch();const o=toRaw(e)[n].apply(e,t);return endBatch(),resetTracking(),o}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(isSymbol));function hasOwnProperty(e){isSymbol(e)||(e=String(e));const n=toRaw(this);return track(n,"has",e),n.hasOwnProperty(e)}class BaseReactiveHandler{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,o){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return o===(i?r?shallowReadonlyMap:readonlyMap:r?shallowReactiveMap:reactiveMap).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(o)?n:void 0;const y=isArray$3(n);if(!i){let E;if(y&&(E=arrayInstrumentations[t]))return E;if(t==="hasOwnProperty")return hasOwnProperty}const g=Reflect.get(n,t,isRef(n)?n:o);return(isSymbol(t)?builtInSymbols.has(t):isNonTrackableKeys(t))||(i||track(n,"get",t),r)?g:isRef(g)?y&&isIntegerKey(t)?g:g.value:isObject(g)?i?readonly(g):reactive(g):g}}class MutableReactiveHandler extends BaseReactiveHandler{constructor(n=!1){super(!1,n)}set(n,t,o,i){let r=n[t];if(!this._isShallow){const E=isReadonly(r);if(!isShallow(o)&&!isReadonly(o)&&(r=toRaw(r),o=toRaw(o)),!isArray$3(n)&&isRef(r)&&!isRef(o))return E?!1:(r.value=o,!0)}const y=isArray$3(n)&&isIntegerKey(t)?Number(t)<n.length:hasOwn(n,t),g=Reflect.set(n,t,o,isRef(n)?n:i);return n===toRaw(i)&&(y?hasChanged(o,r)&&trigger(n,"set",t,o):trigger(n,"add",t,o)),g}deleteProperty(n,t){const o=hasOwn(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&o&&trigger(n,"delete",t,void 0),i}has(n,t){const o=Reflect.has(n,t);return(!isSymbol(t)||!builtInSymbols.has(t))&&track(n,"has",t),o}ownKeys(n){return track(n,"iterate",isArray$3(n)?"length":ITERATE_KEY),Reflect.ownKeys(n)}}class ReadonlyReactiveHandler extends BaseReactiveHandler{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const mutableHandlers=new MutableReactiveHandler,readonlyHandlers=new ReadonlyReactiveHandler,shallowReactiveHandlers=new MutableReactiveHandler(!0),shallowReadonlyHandlers=new ReadonlyReactiveHandler(!0),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function createIterableMethod(e,n,t){return function(...o){const i=this.__v_raw,r=toRaw(i),y=isMap(r),g=e==="entries"||e===Symbol.iterator&&y,E=e==="keys"&&y,P=i[e](...o),$=t?toShallow:n?toReadonly:toReactive;return!n&&track(r,"iterate",E?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:K,done:j}=P.next();return j?{value:K,done:j}:{value:g?[$(K[0]),$(K[1])]:$(K),done:j}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function createInstrumentations(e,n){const t={get(i){const r=this.__v_raw,y=toRaw(r),g=toRaw(i);e||(hasChanged(i,g)&&track(y,"get",i),track(y,"get",g));const{has:E}=getProto(y),P=n?toShallow:e?toReadonly:toReactive;if(E.call(y,i))return P(r.get(i));if(E.call(y,g))return P(r.get(g));r!==y&&r.get(i)},get size(){const i=this.__v_raw;return!e&&track(toRaw(i),"iterate",ITERATE_KEY),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,y=toRaw(r),g=toRaw(i);return e||(hasChanged(i,g)&&track(y,"has",i),track(y,"has",g)),i===g?r.has(i):r.has(i)||r.has(g)},forEach(i,r){const y=this,g=y.__v_raw,E=toRaw(g),P=n?toShallow:e?toReadonly:toReactive;return!e&&track(E,"iterate",ITERATE_KEY),g.forEach(($,K)=>i.call(r,P($),P(K),y))}};return extend(t,e?{add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear")}:{add(i){!n&&!isShallow(i)&&!isReadonly(i)&&(i=toRaw(i));const r=toRaw(this);return getProto(r).has.call(r,i)||(r.add(i),trigger(r,"add",i,i)),this},set(i,r){!n&&!isShallow(r)&&!isReadonly(r)&&(r=toRaw(r));const y=toRaw(this),{has:g,get:E}=getProto(y);let P=g.call(y,i);P||(i=toRaw(i),P=g.call(y,i));const $=E.call(y,i);return y.set(i,r),P?hasChanged(r,$)&&trigger(y,"set",i,r):trigger(y,"add",i,r),this},delete(i){const r=toRaw(this),{has:y,get:g}=getProto(r);let E=y.call(r,i);E||(i=toRaw(i),E=y.call(r,i)),g&&g.call(r,i);const P=r.delete(i);return E&&trigger(r,"delete",i,void 0),P},clear(){const i=toRaw(this),r=i.size!==0,y=i.clear();return r&&trigger(i,"clear",void 0,void 0),y}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=createIterableMethod(i,e,n)}),t}function createInstrumentationGetter(e,n){const t=createInstrumentations(e,n);return(o,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(hasOwn(t,i)&&i in o?t:o,i,r)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},shallowReadonlyCollectionHandlers={get:createInstrumentationGetter(!0,!0)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function shallowReadonly(e){return createReactiveObject(e,!0,shallowReadonlyHandlers,shallowReadonlyCollectionHandlers,shallowReadonlyMap)}function createReactiveObject(e,n,t,o,i){if(!isObject(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const y=getTargetType(e);if(y===0)return e;const g=new Proxy(e,y===2?o:t);return i.set(e,g),g}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return e?!!e.__v_raw:!1}function toRaw(e){const n=e&&e.__v_raw;return n?toRaw(n):e}function markRaw(e){return!hasOwn(e,"__v_skip")&&Object.isExtensible(e)&&def(e,"__v_skip",!0),e}const toReactive=e=>isObject(e)?reactive(e):e,toReadonly=e=>isObject(e)?readonly(e):e;function isRef(e){return e?e.__v_isRef===!0:!1}function ref(e){return createRef(e,!1)}function createRef(e,n){return isRef(e)?e:new RefImpl(e,n)}class RefImpl{constructor(n,t){this.dep=new Dep,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:toRaw(n),this._value=t?n:toReactive(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,o=this.__v_isShallow||isShallow(n)||isReadonly(n);n=o?n:toRaw(n),hasChanged(n,t)&&(this._rawValue=n,this._value=o?n:toReactive(n),this.dep.trigger())}}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,n,t)=>n==="__v_raw"?e:unref(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const i=e[n];return isRef(i)&&!isRef(t)?(i.value=t,!0):Reflect.set(e,n,t,o)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}class ComputedRefImpl{constructor(n,t,o){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Dep(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=globalVersion-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&activeSub!==this)return batch(this,!0),!0}get value(){const n=this.dep.track();return refreshComputed(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function computed$1(e,n,t=!1){let o,i;return isFunction$2(e)?o=e:(o=e.get,i=e.set),new ComputedRefImpl(o,i,t)}const INITIAL_WATCHER_VALUE={},cleanupMap=new WeakMap;let activeWatcher;function onWatcherCleanup(e,n=!1,t=activeWatcher){if(t){let o=cleanupMap.get(t);o||cleanupMap.set(t,o=[]),o.push(e)}}function watch$1(e,n,t=EMPTY_OBJ){const{immediate:o,deep:i,once:r,scheduler:y,augmentJob:g,call:E}=t,P=z=>i?z:isShallow(z)||i===!1||i===0?traverse(z,1):traverse(z);let $,K,j,F,H=!1,J=!1;if(isRef(e)?(K=()=>e.value,H=isShallow(e)):isReactive(e)?(K=()=>P(e),H=!0):isArray$3(e)?(J=!0,H=e.some(z=>isReactive(z)||isShallow(z)),K=()=>e.map(z=>{if(isRef(z))return z.value;if(isReactive(z))return P(z);if(isFunction$2(z))return E?E(z,2):z()})):isFunction$2(e)?n?K=E?()=>E(e,2):e:K=()=>{if(j){pauseTracking();try{j()}finally{resetTracking()}}const z=activeWatcher;activeWatcher=$;try{return E?E(e,3,[F]):e(F)}finally{activeWatcher=z}}:K=NOOP,n&&i){const z=K,Z=i===!0?1/0:i;K=()=>traverse(z(),Z)}const W=getCurrentScope(),c=()=>{$.stop(),W&&W.active&&remove(W.effects,$)};if(r&&n){const z=n;n=(...Z)=>{z(...Z),c()}}let C=J?new Array(e.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const L=z=>{if(!(!($.flags&1)||!$.dirty&&!z))if(n){const Z=$.run();if(i||H||(J?Z.some((S,T)=>hasChanged(S,C[T])):hasChanged(Z,C))){j&&j();const S=activeWatcher;activeWatcher=$;try{const T=[Z,C===INITIAL_WATCHER_VALUE?void 0:J&&C[0]===INITIAL_WATCHER_VALUE?[]:C,F];E?E(n,3,T):n(...T),C=Z}finally{activeWatcher=S}}}else $.run()};return g&&g(L),$=new ReactiveEffect(K),$.scheduler=y?()=>y(L,!1):L,F=z=>onWatcherCleanup(z,!1,$),j=$.onStop=()=>{const z=cleanupMap.get($);if(z){if(E)E(z,4);else for(const Z of z)Z();cleanupMap.delete($)}},n?o?L(!0):C=$.run():y?y(L.bind(null,!0),!0):$.run(),c.pause=$.pause.bind($),c.resume=$.resume.bind($),c.stop=c,c}function traverse(e,n=1/0,t){if(n<=0||!isObject(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,isRef(e))traverse(e.value,n,t);else if(isArray$3(e))for(let o=0;o<e.length;o++)traverse(e[o],n,t);else if(isSet(e)||isMap(e))e.forEach(o=>{traverse(o,n,t)});else if(isPlainObject(e)){for(const o in e)traverse(e[o],n,t);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&traverse(e[o],n,t)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const stack=[];let isWarning=!1;function warn$1(e,...n){if(isWarning)return;isWarning=!0,pauseTracking();const t=stack.length?stack[stack.length-1].component:null,o=t&&t.appContext.config.warnHandler,i=getComponentTrace();if(o)callWithErrorHandling(o,t,11,[e+n.map(r=>{var y,g;return(g=(y=r.toString)==null?void 0:y.call(r))!=null?g:JSON.stringify(r)}).join(""),t&&t.proxy,i.map(({vnode:r})=>`at <${formatComponentName(t,r.type)}>`).join(`
`),i]);else{const r=[`[Vue warn]: ${e}`,...n];i.length&&r.push(`
`,...formatTrace(i)),console.warn(...r)}resetTracking(),isWarning=!1}function getComponentTrace(){let e=stack[stack.length-1];if(!e)return[];const n=[];for(;e;){const t=n[0];t&&t.vnode===e?t.recurseCount++:n.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return n}function formatTrace(e){const n=[];return e.forEach((t,o)=>{n.push(...o===0?[]:[`
`],...formatTraceEntry(t))}),n}function formatTraceEntry({vnode:e,recurseCount:n}){const t=n>0?`... (${n} recursive calls)`:"",o=e.component?e.component.parent==null:!1,i=` at <${formatComponentName(e.component,e.type,o)}`,r=">"+t;return e.props?[i,...formatProps(e.props),r]:[i+r]}function formatProps(e){const n=[],t=Object.keys(e);return t.slice(0,3).forEach(o=>{n.push(...formatProp(o,e[o]))}),t.length>3&&n.push(" ..."),n}function formatProp(e,n,t){return isString(n)?(n=JSON.stringify(n),t?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?t?n:[`${e}=${n}`]:isRef(n)?(n=formatProp(e,toRaw(n.value),!0),t?n:[`${e}=Ref<`,n,">"]):isFunction$2(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=toRaw(n),t?n:[`${e}=`,n])}function callWithErrorHandling(e,n,t,o){try{return o?e(...o):e()}catch(i){handleError(i,n,t)}}function callWithAsyncErrorHandling(e,n,t,o){if(isFunction$2(e)){const i=callWithErrorHandling(e,n,t,o);return i&&isPromise$2(i)&&i.catch(r=>{handleError(r,n,t)}),i}if(isArray$3(e)){const i=[];for(let r=0;r<e.length;r++)i.push(callWithAsyncErrorHandling(e[r],n,t,o));return i}}function handleError(e,n,t,o=!0){const i=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:y}=n&&n.appContext.config||EMPTY_OBJ;if(n){let g=n.parent;const E=n.proxy,P=`https://vuejs.org/error-reference/#runtime-${t}`;for(;g;){const $=g.ec;if($){for(let K=0;K<$.length;K++)if($[K](e,E,P)===!1)return}g=g.parent}if(r){pauseTracking(),callWithErrorHandling(r,null,10,[e,E,P]),resetTracking();return}}logError(e,t,i,o,y)}function logError(e,n,t,o=!0,i=!1){if(i)throw e;console.error(e)}const queue$1=[];let flushIndex=-1;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(e){const n=currentFlushPromise||resolvedPromise;return e?n.then(this?e.bind(this):e):n}function findInsertionIndex(e){let n=flushIndex+1,t=queue$1.length;for(;n<t;){const o=n+t>>>1,i=queue$1[o],r=getId(i);r<e||r===e&&i.flags&2?n=o+1:t=o}return n}function queueJob(e){if(!(e.flags&1)){const n=getId(e),t=queue$1[queue$1.length-1];!t||!(e.flags&2)&&n>=getId(t)?queue$1.push(e):queue$1.splice(findInsertionIndex(n),0,e),e.flags|=1,queueFlush()}}function queueFlush(){currentFlushPromise||(currentFlushPromise=resolvedPromise.then(flushJobs))}function queuePostFlushCb(e){isArray$3(e)?pendingPostFlushCbs.push(...e):activePostFlushCbs&&e.id===-1?activePostFlushCbs.splice(postFlushIndex+1,0,e):e.flags&1||(pendingPostFlushCbs.push(e),e.flags|=1),queueFlush()}function flushPreFlushCbs(e,n,t=flushIndex+1){for(;t<queue$1.length;t++){const o=queue$1[t];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;queue$1.splice(t,1),t--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function flushPostFlushCbs(e){if(pendingPostFlushCbs.length){const n=[...new Set(pendingPostFlushCbs)].sort((t,o)=>getId(t)-getId(o));if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...n);return}for(activePostFlushCbs=n,postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){const t=activePostFlushCbs[postFlushIndex];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?e.flags&2?-1:1/0:e.id;function flushJobs(e){try{for(flushIndex=0;flushIndex<queue$1.length;flushIndex++){const n=queue$1[flushIndex];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),callWithErrorHandling(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;flushIndex<queue$1.length;flushIndex++){const n=queue$1[flushIndex];n&&(n.flags&=-2)}flushIndex=-1,queue$1.length=0,flushPostFlushCbs(),currentFlushPromise=null,(queue$1.length||pendingPostFlushCbs.length)&&flushJobs()}}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const n=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,n}function withCtx(e,n=currentRenderingInstance,t){if(!n||e._n)return e;const o=(...i)=>{o._d&&setBlockTracking(-1);const r=setCurrentRenderingInstance(n);let y;try{y=e(...i)}finally{setCurrentRenderingInstance(r),o._d&&setBlockTracking(1)}return y};return o._n=!0,o._c=!0,o._d=!0,o}function invokeDirectiveHook(e,n,t,o){const i=e.dirs,r=n&&n.dirs;for(let y=0;y<i.length;y++){const g=i[y];r&&(g.oldValue=r[y].value);let E=g.dir[o];E&&(pauseTracking(),callWithAsyncErrorHandling(E,t,8,[e.el,g,e,n]),resetTracking())}}const TeleportEndKey=Symbol("_vte"),isTeleport=e=>e.__isTeleport;function setTransitionHooks(e,n){e.shapeFlag&6&&e.component?(e.transition=n,setTransitionHooks(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}/*! #__NO_SIDE_EFFECTS__ */function defineComponent(e,n){return isFunction$2(e)?extend({name:e.name},n,{setup:e}):e}function markAsyncBoundary(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function setRef(e,n,t,o,i=!1){if(isArray$3(e)){e.forEach((H,J)=>setRef(H,n&&(isArray$3(n)?n[J]:n),t,o,i));return}if(isAsyncWrapper(o)&&!i){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&setRef(e,n,t,o.component.subTree);return}const r=o.shapeFlag&4?getComponentPublicInstance(o.component):o.el,y=i?null:r,{i:g,r:E}=e,P=n&&n.r,$=g.refs===EMPTY_OBJ?g.refs={}:g.refs,K=g.setupState,j=toRaw(K),F=K===EMPTY_OBJ?()=>!1:H=>hasOwn(j,H);if(P!=null&&P!==E&&(isString(P)?($[P]=null,F(P)&&(K[P]=null)):isRef(P)&&(P.value=null)),isFunction$2(E))callWithErrorHandling(E,g,12,[y,$]);else{const H=isString(E),J=isRef(E);if(H||J){const W=()=>{if(e.f){const c=H?F(E)?K[E]:$[E]:E.value;i?isArray$3(c)&&remove(c,r):isArray$3(c)?c.includes(r)||c.push(r):H?($[E]=[r],F(E)&&(K[E]=$[E])):(E.value=[r],e.k&&($[e.k]=E.value))}else H?($[E]=y,F(E)&&(K[E]=y)):J&&(E.value=y,e.k&&($[e.k]=y))};y?(W.id=-1,queuePostRenderEffect(W,t)):W()}}}getGlobalThis().requestIdleCallback,getGlobalThis().cancelIdleCallback;const isAsyncWrapper=e=>!!e.type.__asyncLoader,isKeepAlive=e=>e.type.__isKeepAlive;function onActivated(e,n){registerKeepAliveHook(e,"a",n)}function onDeactivated(e,n){registerKeepAliveHook(e,"da",n)}function registerKeepAliveHook(e,n,t=currentInstance){const o=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(injectHook(n,o,t),t){let i=t.parent;for(;i&&i.parent;)isKeepAlive(i.parent.vnode)&&injectToKeepAliveRoot(o,n,t,i),i=i.parent}}function injectToKeepAliveRoot(e,n,t,o){const i=injectHook(n,e,o,!0);onUnmounted(()=>{remove(o[n],i)},t)}function injectHook(e,n,t=currentInstance,o=!1){if(t){const i=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...y)=>{pauseTracking();const g=setCurrentInstance(t),E=callWithAsyncErrorHandling(n,t,e,y);return g(),resetTracking(),E});return o?i.unshift(r):i.push(r),r}}const createHook=e=>(n,t=currentInstance)=>{(!isInSSRComponentSetup||e==="sp")&&injectHook(e,(...o)=>n(...o),t)},onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,n=currentInstance){injectHook("ec",e,n)}const NULL_DYNAMIC_COMPONENT=Symbol.for("v-ndc"),getPublicInstance=e=>e?isStatefulComponent(e)?getComponentPublicInstance(e):getPublicInstance(e.parent):null,publicPropertiesMap=extend(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>e.f||(e.f=()=>{queueJob(e.update)}),$nextTick:e=>e.n||(e.n=nextTick.bind(e.proxy)),$watch:e=>instanceWatch.bind(e)}),hasSetupBinding=(e,n)=>e!==EMPTY_OBJ&&!e.__isScriptSetup&&hasOwn(e,n),PublicInstanceProxyHandlers={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:o,data:i,props:r,accessCache:y,type:g,appContext:E}=e;let P;if(n[0]!=="$"){const F=y[n];if(F!==void 0)switch(F){case 1:return o[n];case 2:return i[n];case 4:return t[n];case 3:return r[n]}else{if(hasSetupBinding(o,n))return y[n]=1,o[n];if(i!==EMPTY_OBJ&&hasOwn(i,n))return y[n]=2,i[n];if((P=e.propsOptions[0])&&hasOwn(P,n))return y[n]=3,r[n];if(t!==EMPTY_OBJ&&hasOwn(t,n))return y[n]=4,t[n];shouldCacheAccess&&(y[n]=0)}}const $=publicPropertiesMap[n];let K,j;if($)return n==="$attrs"&&track(e.attrs,"get",""),$(e);if((K=g.__cssModules)&&(K=K[n]))return K;if(t!==EMPTY_OBJ&&hasOwn(t,n))return y[n]=4,t[n];if(j=E.config.globalProperties,hasOwn(j,n))return j[n]},set({_:e},n,t){const{data:o,setupState:i,ctx:r}=e;return hasSetupBinding(i,n)?(i[n]=t,!0):o!==EMPTY_OBJ&&hasOwn(o,n)?(o[n]=t,!0):hasOwn(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:i,propsOptions:r}},y){let g;return!!t[y]||e!==EMPTY_OBJ&&hasOwn(e,y)||hasSetupBinding(n,y)||(g=r[0])&&hasOwn(g,y)||hasOwn(o,y)||hasOwn(publicPropertiesMap,y)||hasOwn(i.config.globalProperties,y)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:hasOwn(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function normalizePropsOrEmits(e){return isArray$3(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let shouldCacheAccess=!0;function applyOptions(e){const n=resolveMergedOptions(e),t=e.proxy,o=e.ctx;shouldCacheAccess=!1,n.beforeCreate&&callHook(n.beforeCreate,e,"bc");const{data:i,computed:r,methods:y,watch:g,provide:E,inject:P,created:$,beforeMount:K,mounted:j,beforeUpdate:F,updated:H,activated:J,deactivated:W,beforeDestroy:c,beforeUnmount:C,destroyed:L,unmounted:z,render:Z,renderTracked:S,renderTriggered:T,errorCaptured:A,serverPrefetch:G,expose:_,inheritAttrs:O,components:l,directives:d,filters:f}=n;if(P&&resolveInjections(P,o,null),y)for(const Y in y){const w=y[Y];isFunction$2(w)&&(o[Y]=w.bind(t))}if(i){const Y=i.call(t,t);isObject(Y)&&(e.data=reactive(Y))}if(shouldCacheAccess=!0,r)for(const Y in r){const w=r[Y],Q=isFunction$2(w)?w.bind(t,t):isFunction$2(w.get)?w.get.bind(t,t):NOOP,ne=!isFunction$2(w)&&isFunction$2(w.set)?w.set.bind(t):NOOP,ue=computed({get:Q,set:ne});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>ue.value,set:de=>ue.value=de})}if(g)for(const Y in g)createWatcher(g[Y],o,t,Y);if(E){const Y=isFunction$2(E)?E.call(t):E;Reflect.ownKeys(Y).forEach(w=>{provide(w,Y[w])})}$&&callHook($,e,"c");function B(Y,w){isArray$3(w)?w.forEach(Q=>Y(Q.bind(t))):w&&Y(w.bind(t))}if(B(onBeforeMount,K),B(onMounted,j),B(onBeforeUpdate,F),B(onUpdated,H),B(onActivated,J),B(onDeactivated,W),B(onErrorCaptured,A),B(onRenderTracked,S),B(onRenderTriggered,T),B(onBeforeUnmount,C),B(onUnmounted,z),B(onServerPrefetch,G),isArray$3(_))if(_.length){const Y=e.exposed||(e.exposed={});_.forEach(w=>{Object.defineProperty(Y,w,{get:()=>t[w],set:Q=>t[w]=Q})})}else e.exposed||(e.exposed={});Z&&e.render===NOOP&&(e.render=Z),O!=null&&(e.inheritAttrs=O),l&&(e.components=l),d&&(e.directives=d),G&&markAsyncBoundary(e)}function resolveInjections(e,n,t=NOOP){isArray$3(e)&&(e=normalizeInject(e));for(const o in e){const i=e[o];let r;isObject(i)?"default"in i?r=inject(i.from||o,i.default,!0):r=inject(i.from||o):r=inject(i),isRef(r)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:y=>r.value=y}):n[o]=r}}function callHook(e,n,t){callWithAsyncErrorHandling(isArray$3(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function createWatcher(e,n,t,o){let i=o.includes(".")?createPathGetter(t,o):()=>t[o];if(isString(e)){const r=n[e];isFunction$2(r)&&watch(i,r)}else if(isFunction$2(e))watch(i,e.bind(t));else if(isObject(e))if(isArray$3(e))e.forEach(r=>createWatcher(r,n,t,o));else{const r=isFunction$2(e.handler)?e.handler.bind(t):n[e.handler];isFunction$2(r)&&watch(i,r,e)}}function resolveMergedOptions(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:i,optionsCache:r,config:{optionMergeStrategies:y}}=e.appContext,g=r.get(n);let E;return g?E=g:!i.length&&!t&&!o?E=n:(E={},i.length&&i.forEach(P=>mergeOptions(E,P,y,!0)),mergeOptions(E,n,y)),isObject(n)&&r.set(n,E),E}function mergeOptions(e,n,t,o=!1){const{mixins:i,extends:r}=n;r&&mergeOptions(e,r,t,!0),i&&i.forEach(y=>mergeOptions(e,y,t,!0));for(const y in n)if(!(o&&y==="expose")){const g=internalOptionMergeStrats[y]||t&&t[y];e[y]=g?g(e[y],n[y]):n[y]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeEmitsOrPropsOptions,emits:mergeEmitsOrPropsOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,n){return n?e?function(){return extend(isFunction$2(e)?e.call(this,this):e,isFunction$2(n)?n.call(this,this):n)}:n:e}function mergeInject(e,n){return mergeObjectOptions(normalizeInject(e),normalizeInject(n))}function normalizeInject(e){if(isArray$3(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function mergeAsArray(e,n){return e?[...new Set([].concat(e,n))]:n}function mergeObjectOptions(e,n){return e?extend(Object.create(null),e,n):n}function mergeEmitsOrPropsOptions(e,n){return e?isArray$3(e)&&isArray$3(n)?[...new Set([...e,...n])]:extend(Object.create(null),normalizePropsOrEmits(e),normalizePropsOrEmits(n??{})):n}function mergeWatchOptions(e,n){if(!e)return n;if(!n)return e;const t=extend(Object.create(null),e);for(const o in n)t[o]=mergeAsArray(e[o],n[o]);return t}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(e,n){return function(o,i=null){isFunction$2(o)||(o=extend({},o)),i!=null&&!isObject(i)&&(i=null);const r=createAppContext(),y=new WeakSet,g=[];let E=!1;const P=r.app={_uid:uid$1++,_component:o,_props:i,_container:null,_context:r,_instance:null,version:version$2,get config(){return r.config},set config($){},use($,...K){return y.has($)||($&&isFunction$2($.install)?(y.add($),$.install(P,...K)):isFunction$2($)&&(y.add($),$(P,...K))),P},mixin($){return r.mixins.includes($)||r.mixins.push($),P},component($,K){return K?(r.components[$]=K,P):r.components[$]},directive($,K){return K?(r.directives[$]=K,P):r.directives[$]},mount($,K,j){if(!E){const F=P._ceVNode||createVNode(o,i);return F.appContext=r,j===!0?j="svg":j===!1&&(j=void 0),K&&n?n(F,$):e(F,$,j),E=!0,P._container=$,$.__vue_app__=P,getComponentPublicInstance(F.component)}},onUnmount($){g.push($)},unmount(){E&&(callWithAsyncErrorHandling(g,P._instance,16),e(null,P._container),delete P._container.__vue_app__)},provide($,K){return r.provides[$]=K,P},runWithContext($){const K=currentApp;currentApp=P;try{return $()}finally{currentApp=K}}};return P}}let currentApp=null;function provide(e,n){if(currentInstance){let t=currentInstance.provides;const o=currentInstance.parent&&currentInstance.parent.provides;o===t&&(t=currentInstance.provides=Object.create(o)),t[e]=n}}function inject(e,n,t=!1){const o=currentInstance||currentRenderingInstance;if(o||currentApp){const i=currentApp?currentApp._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&isFunction$2(n)?n.call(o&&o.proxy):n}}const internalObjectProto={},createInternalObject=()=>Object.create(internalObjectProto),isInternalObject=e=>Object.getPrototypeOf(e)===internalObjectProto;function initProps(e,n,t,o=!1){const i={},r=createInternalObject();e.propsDefaults=Object.create(null),setFullProps(e,n,i,r);for(const y in e.propsOptions[0])y in i||(i[y]=void 0);t?e.props=o?i:shallowReactive(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function updateProps(e,n,t,o){const{props:i,attrs:r,vnode:{patchFlag:y}}=e,g=toRaw(i),[E]=e.propsOptions;let P=!1;if((o||y>0)&&!(y&16)){if(y&8){const $=e.vnode.dynamicProps;for(let K=0;K<$.length;K++){let j=$[K];if(isEmitListener(e.emitsOptions,j))continue;const F=n[j];if(E)if(hasOwn(r,j))F!==r[j]&&(r[j]=F,P=!0);else{const H=camelize(j);i[H]=resolvePropValue(E,g,H,F,e,!1)}else F!==r[j]&&(r[j]=F,P=!0)}}}else{setFullProps(e,n,i,r)&&(P=!0);let $;for(const K in g)(!n||!hasOwn(n,K)&&(($=hyphenate(K))===K||!hasOwn(n,$)))&&(E?t&&(t[K]!==void 0||t[$]!==void 0)&&(i[K]=resolvePropValue(E,g,K,void 0,e,!0)):delete i[K]);if(r!==g)for(const K in r)(!n||!hasOwn(n,K))&&(delete r[K],P=!0)}P&&trigger(e.attrs,"set","")}function setFullProps(e,n,t,o){const[i,r]=e.propsOptions;let y=!1,g;if(n)for(let E in n){if(isReservedProp(E))continue;const P=n[E];let $;i&&hasOwn(i,$=camelize(E))?!r||!r.includes($)?t[$]=P:(g||(g={}))[$]=P:isEmitListener(e.emitsOptions,E)||(!(E in o)||P!==o[E])&&(o[E]=P,y=!0)}if(r){const E=toRaw(t),P=g||EMPTY_OBJ;for(let $=0;$<r.length;$++){const K=r[$];t[K]=resolvePropValue(i,E,K,P[K],e,!hasOwn(P,K))}}return y}function resolvePropValue(e,n,t,o,i,r){const y=e[t];if(y!=null){const g=hasOwn(y,"default");if(g&&o===void 0){const E=y.default;if(y.type!==Function&&!y.skipFactory&&isFunction$2(E)){const{propsDefaults:P}=i;if(t in P)o=P[t];else{const $=setCurrentInstance(i);o=P[t]=E.call(null,n),$()}}else o=E;i.ce&&i.ce._setProp(t,o)}y[0]&&(r&&!g?o=!1:y[1]&&(o===""||o===hyphenate(t))&&(o=!0))}return o}const mixinPropsCache=new WeakMap;function normalizePropsOptions(e,n,t=!1){const o=t?mixinPropsCache:n.propsCache,i=o.get(e);if(i)return i;const r=e.props,y={},g=[];let E=!1;if(!isFunction$2(e)){const $=K=>{E=!0;const[j,F]=normalizePropsOptions(K,n,!0);extend(y,j),F&&g.push(...F)};!t&&n.mixins.length&&n.mixins.forEach($),e.extends&&$(e.extends),e.mixins&&e.mixins.forEach($)}if(!r&&!E)return isObject(e)&&o.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray$3(r))for(let $=0;$<r.length;$++){const K=camelize(r[$]);validatePropName(K)&&(y[K]=EMPTY_OBJ)}else if(r)for(const $ in r){const K=camelize($);if(validatePropName(K)){const j=r[$],F=y[K]=isArray$3(j)||isFunction$2(j)?{type:j}:extend({},j),H=F.type;let J=!1,W=!0;if(isArray$3(H))for(let c=0;c<H.length;++c){const C=H[c],L=isFunction$2(C)&&C.name;if(L==="Boolean"){J=!0;break}else L==="String"&&(W=!1)}else J=isFunction$2(H)&&H.name==="Boolean";F[0]=J,F[1]=W,(J||hasOwn(F,"default"))&&g.push(K)}}const P=[y,g];return isObject(e)&&o.set(e,P),P}function validatePropName(e){return e[0]!=="$"&&!isReservedProp(e)}const isInternalKey=e=>e[0]==="_"||e==="$stable",normalizeSlotValue=e=>isArray$3(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot=(e,n,t)=>{if(n._n)return n;const o=withCtx((...i)=>normalizeSlotValue(n(...i)),t);return o._c=!1,o},normalizeObjectSlots=(e,n,t)=>{const o=e._ctx;for(const i in e){if(isInternalKey(i))continue;const r=e[i];if(isFunction$2(r))n[i]=normalizeSlot(i,r,o);else if(r!=null){const y=normalizeSlotValue(r);n[i]=()=>y}}},normalizeVNodeSlots=(e,n)=>{const t=normalizeSlotValue(n);e.slots.default=()=>t},assignSlots=(e,n,t)=>{for(const o in n)(t||o!=="_")&&(e[o]=n[o])},initSlots=(e,n,t)=>{const o=e.slots=createInternalObject();if(e.vnode.shapeFlag&32){const i=n._;i?(assignSlots(o,n,t),t&&def(o,"_",i,!0)):normalizeObjectSlots(n,o)}else n&&normalizeVNodeSlots(e,n)},updateSlots=(e,n,t)=>{const{vnode:o,slots:i}=e;let r=!0,y=EMPTY_OBJ;if(o.shapeFlag&32){const g=n._;g?t&&g===1?r=!1:assignSlots(i,n,t):(r=!n.$stable,normalizeObjectSlots(n,i)),y=n}else n&&(normalizeVNodeSlots(e,n),y={default:1});if(r)for(const g in i)!isInternalKey(g)&&y[g]==null&&delete i[g]},queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function baseCreateRenderer(e,n){const t=getGlobalThis();t.__VUE__=!0;const{insert:o,remove:i,patchProp:r,createElement:y,createText:g,createComment:E,setText:P,setElementText:$,parentNode:K,nextSibling:j,setScopeId:F=NOOP,insertStaticContent:H}=e,J=(I,U,te,x=null,fe=null,b=null,q=void 0,X=null,ae=!!U.dynamicChildren)=>{if(I===U)return;I&&!isSameVNodeType(I,U)&&(x=M(I),de(I,fe,b,!0),I=null),U.patchFlag===-2&&(ae=!1,U.dynamicChildren=null);const{type:oe,ref:se,shapeFlag:pe}=U;switch(oe){case Text:W(I,U,te,x);break;case Comment:c(I,U,te,x);break;case Static:I==null&&C(U,te,x,q);break;case Fragment:l(I,U,te,x,fe,b,q,X,ae);break;default:pe&1?Z(I,U,te,x,fe,b,q,X,ae):pe&6?d(I,U,te,x,fe,b,q,X,ae):(pe&64||pe&128)&&oe.process(I,U,te,x,fe,b,q,X,ae,N)}se!=null&&fe&&setRef(se,I&&I.ref,b,U||I,!U)},W=(I,U,te,x)=>{if(I==null)o(U.el=g(U.children),te,x);else{const fe=U.el=I.el;U.children!==I.children&&P(fe,U.children)}},c=(I,U,te,x)=>{I==null?o(U.el=E(U.children||""),te,x):U.el=I.el},C=(I,U,te,x)=>{[I.el,I.anchor]=H(I.children,U,te,x,I.el,I.anchor)},L=({el:I,anchor:U},te,x)=>{let fe;for(;I&&I!==U;)fe=j(I),o(I,te,x),I=fe;o(U,te,x)},z=({el:I,anchor:U})=>{let te;for(;I&&I!==U;)te=j(I),i(I),I=te;i(U)},Z=(I,U,te,x,fe,b,q,X,ae)=>{U.type==="svg"?q="svg":U.type==="math"&&(q="mathml"),I==null?S(U,te,x,fe,b,q,X,ae):G(I,U,fe,b,q,X,ae)},S=(I,U,te,x,fe,b,q,X)=>{let ae,oe;const{props:se,shapeFlag:pe,transition:ye,dirs:_e}=I;if(ae=I.el=y(I.type,b,se&&se.is,se),pe&8?$(ae,I.children):pe&16&&A(I.children,ae,null,x,fe,resolveChildrenNamespace(I,b),q,X),_e&&invokeDirectiveHook(I,null,x,"created"),T(ae,I,I.scopeId,q,x),se){for(const ge in se)ge!=="value"&&!isReservedProp(ge)&&r(ae,ge,null,se[ge],b,x);"value"in se&&r(ae,"value",null,se.value,b),(oe=se.onVnodeBeforeMount)&&invokeVNodeHook(oe,x,I)}_e&&invokeDirectiveHook(I,null,x,"beforeMount");const Oe=needTransition(fe,ye);Oe&&ye.beforeEnter(ae),o(ae,U,te),((oe=se&&se.onVnodeMounted)||Oe||_e)&&queuePostRenderEffect(()=>{oe&&invokeVNodeHook(oe,x,I),Oe&&ye.enter(ae),_e&&invokeDirectiveHook(I,null,x,"mounted")},fe)},T=(I,U,te,x,fe)=>{if(te&&F(I,te),x)for(let b=0;b<x.length;b++)F(I,x[b]);if(fe){let b=fe.subTree;if(U===b||isSuspense(b.type)&&(b.ssContent===U||b.ssFallback===U)){const q=fe.vnode;T(I,q,q.scopeId,q.slotScopeIds,fe.parent)}}},A=(I,U,te,x,fe,b,q,X,ae=0)=>{for(let oe=ae;oe<I.length;oe++){const se=I[oe]=X?cloneIfMounted(I[oe]):normalizeVNode(I[oe]);J(null,se,U,te,x,fe,b,q,X)}},G=(I,U,te,x,fe,b,q)=>{const X=U.el=I.el;let{patchFlag:ae,dynamicChildren:oe,dirs:se}=U;ae|=I.patchFlag&16;const pe=I.props||EMPTY_OBJ,ye=U.props||EMPTY_OBJ;let _e;if(te&&toggleRecurse(te,!1),(_e=ye.onVnodeBeforeUpdate)&&invokeVNodeHook(_e,te,U,I),se&&invokeDirectiveHook(U,I,te,"beforeUpdate"),te&&toggleRecurse(te,!0),(pe.innerHTML&&ye.innerHTML==null||pe.textContent&&ye.textContent==null)&&$(X,""),oe?_(I.dynamicChildren,oe,X,te,x,resolveChildrenNamespace(U,fe),b):q||w(I,U,X,null,te,x,resolveChildrenNamespace(U,fe),b,!1),ae>0){if(ae&16)O(X,pe,ye,te,fe);else if(ae&2&&pe.class!==ye.class&&r(X,"class",null,ye.class,fe),ae&4&&r(X,"style",pe.style,ye.style,fe),ae&8){const Oe=U.dynamicProps;for(let ge=0;ge<Oe.length;ge++){const Re=Oe[ge],Ie=pe[Re],ke=ye[Re];(ke!==Ie||Re==="value")&&r(X,Re,Ie,ke,fe,te)}}ae&1&&I.children!==U.children&&$(X,U.children)}else!q&&oe==null&&O(X,pe,ye,te,fe);((_e=ye.onVnodeUpdated)||se)&&queuePostRenderEffect(()=>{_e&&invokeVNodeHook(_e,te,U,I),se&&invokeDirectiveHook(U,I,te,"updated")},x)},_=(I,U,te,x,fe,b,q)=>{for(let X=0;X<U.length;X++){const ae=I[X],oe=U[X],se=ae.el&&(ae.type===Fragment||!isSameVNodeType(ae,oe)||ae.shapeFlag&70)?K(ae.el):te;J(ae,oe,se,null,x,fe,b,q,!0)}},O=(I,U,te,x,fe)=>{if(U!==te){if(U!==EMPTY_OBJ)for(const b in U)!isReservedProp(b)&&!(b in te)&&r(I,b,U[b],null,fe,x);for(const b in te){if(isReservedProp(b))continue;const q=te[b],X=U[b];q!==X&&b!=="value"&&r(I,b,X,q,fe,x)}"value"in te&&r(I,"value",U.value,te.value,fe)}},l=(I,U,te,x,fe,b,q,X,ae)=>{const oe=U.el=I?I.el:g(""),se=U.anchor=I?I.anchor:g("");let{patchFlag:pe,dynamicChildren:ye,slotScopeIds:_e}=U;_e&&(X=X?X.concat(_e):_e),I==null?(o(oe,te,x),o(se,te,x),A(U.children||[],te,se,fe,b,q,X,ae)):pe>0&&pe&64&&ye&&I.dynamicChildren?(_(I.dynamicChildren,ye,te,fe,b,q,X),(U.key!=null||fe&&U===fe.subTree)&&traverseStaticChildren(I,U,!0)):w(I,U,te,se,fe,b,q,X,ae)},d=(I,U,te,x,fe,b,q,X,ae)=>{U.slotScopeIds=X,I==null?U.shapeFlag&512?fe.ctx.activate(U,te,x,q,ae):f(U,te,x,fe,b,q,ae):v(I,U,ae)},f=(I,U,te,x,fe,b,q)=>{const X=I.component=createComponentInstance(I,x,fe);if(isKeepAlive(I)&&(X.ctx.renderer=N),setupComponent(X,!1,q),X.asyncDep){if(fe&&fe.registerDep(X,B,q),!I.el){const ae=X.subTree=createVNode(Comment);c(null,ae,U,te)}}else B(X,I,U,te,fe,b,q)},v=(I,U,te)=>{const x=U.component=I.component;if(shouldUpdateComponent(I,U,te))if(x.asyncDep&&!x.asyncResolved){Y(x,U,te);return}else x.next=U,x.update();else U.el=I.el,x.vnode=U},B=(I,U,te,x,fe,b,q)=>{const X=()=>{if(I.isMounted){let{next:pe,bu:ye,u:_e,parent:Oe,vnode:ge}=I;{const Te=locateNonHydratedAsyncRoot(I);if(Te){pe&&(pe.el=ge.el,Y(I,pe,q)),Te.asyncDep.then(()=>{I.isUnmounted||X()});return}}let Re=pe,Ie;toggleRecurse(I,!1),pe?(pe.el=ge.el,Y(I,pe,q)):pe=ge,ye&&invokeArrayFns(ye),(Ie=pe.props&&pe.props.onVnodeBeforeUpdate)&&invokeVNodeHook(Ie,Oe,pe,ge),toggleRecurse(I,!0);const ke=renderComponentRoot(I),Ae=I.subTree;I.subTree=ke,J(Ae,ke,K(Ae.el),M(Ae),I,fe,b),pe.el=ke.el,Re===null&&updateHOCHostEl(I,ke.el),_e&&queuePostRenderEffect(_e,fe),(Ie=pe.props&&pe.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(Ie,Oe,pe,ge),fe)}else{let pe;const{el:ye,props:_e}=U,{bm:Oe,m:ge,parent:Re,root:Ie,type:ke}=I,Ae=isAsyncWrapper(U);if(toggleRecurse(I,!1),Oe&&invokeArrayFns(Oe),!Ae&&(pe=_e&&_e.onVnodeBeforeMount)&&invokeVNodeHook(pe,Re,U),toggleRecurse(I,!0),ye&&k){const Te=()=>{I.subTree=renderComponentRoot(I),k(ye,I.subTree,I,fe,null)};Ae&&ke.__asyncHydrate?ke.__asyncHydrate(ye,I,Te):Te()}else{Ie.ce&&Ie.ce._injectChildStyle(ke);const Te=I.subTree=renderComponentRoot(I);J(null,Te,te,x,I,fe,b),U.el=Te.el}if(ge&&queuePostRenderEffect(ge,fe),!Ae&&(pe=_e&&_e.onVnodeMounted)){const Te=U;queuePostRenderEffect(()=>invokeVNodeHook(pe,Re,Te),fe)}(U.shapeFlag&256||Re&&isAsyncWrapper(Re.vnode)&&Re.vnode.shapeFlag&256)&&I.a&&queuePostRenderEffect(I.a,fe),I.isMounted=!0,U=te=x=null}};I.scope.on();const ae=I.effect=new ReactiveEffect(X);I.scope.off();const oe=I.update=ae.run.bind(ae),se=I.job=ae.runIfDirty.bind(ae);se.i=I,se.id=I.uid,ae.scheduler=()=>queueJob(se),toggleRecurse(I,!0),oe()},Y=(I,U,te)=>{U.component=I;const x=I.vnode.props;I.vnode=U,I.next=null,updateProps(I,U.props,x,te),updateSlots(I,U.children,te),pauseTracking(),flushPreFlushCbs(I),resetTracking()},w=(I,U,te,x,fe,b,q,X,ae=!1)=>{const oe=I&&I.children,se=I?I.shapeFlag:0,pe=U.children,{patchFlag:ye,shapeFlag:_e}=U;if(ye>0){if(ye&128){ne(oe,pe,te,x,fe,b,q,X,ae);return}else if(ye&256){Q(oe,pe,te,x,fe,b,q,X,ae);return}}_e&8?(se&16&&Se(oe,fe,b),pe!==oe&&$(te,pe)):se&16?_e&16?ne(oe,pe,te,x,fe,b,q,X,ae):Se(oe,fe,b,!0):(se&8&&$(te,""),_e&16&&A(pe,te,x,fe,b,q,X,ae))},Q=(I,U,te,x,fe,b,q,X,ae)=>{I=I||EMPTY_ARR,U=U||EMPTY_ARR;const oe=I.length,se=U.length,pe=Math.min(oe,se);let ye;for(ye=0;ye<pe;ye++){const _e=U[ye]=ae?cloneIfMounted(U[ye]):normalizeVNode(U[ye]);J(I[ye],_e,te,null,fe,b,q,X,ae)}oe>se?Se(I,fe,b,!0,!1,pe):A(U,te,x,fe,b,q,X,ae,pe)},ne=(I,U,te,x,fe,b,q,X,ae)=>{let oe=0;const se=U.length;let pe=I.length-1,ye=se-1;for(;oe<=pe&&oe<=ye;){const _e=I[oe],Oe=U[oe]=ae?cloneIfMounted(U[oe]):normalizeVNode(U[oe]);if(isSameVNodeType(_e,Oe))J(_e,Oe,te,null,fe,b,q,X,ae);else break;oe++}for(;oe<=pe&&oe<=ye;){const _e=I[pe],Oe=U[ye]=ae?cloneIfMounted(U[ye]):normalizeVNode(U[ye]);if(isSameVNodeType(_e,Oe))J(_e,Oe,te,null,fe,b,q,X,ae);else break;pe--,ye--}if(oe>pe){if(oe<=ye){const _e=ye+1,Oe=_e<se?U[_e].el:x;for(;oe<=ye;)J(null,U[oe]=ae?cloneIfMounted(U[oe]):normalizeVNode(U[oe]),te,Oe,fe,b,q,X,ae),oe++}}else if(oe>ye)for(;oe<=pe;)de(I[oe],fe,b,!0),oe++;else{const _e=oe,Oe=oe,ge=new Map;for(oe=Oe;oe<=ye;oe++){const Ce=U[oe]=ae?cloneIfMounted(U[oe]):normalizeVNode(U[oe]);Ce.key!=null&&ge.set(Ce.key,oe)}let Re,Ie=0;const ke=ye-Oe+1;let Ae=!1,Te=0;const Ue=new Array(ke);for(oe=0;oe<ke;oe++)Ue[oe]=0;for(oe=_e;oe<=pe;oe++){const Ce=I[oe];if(Ie>=ke){de(Ce,fe,b,!0);continue}let m;if(Ce.key!=null)m=ge.get(Ce.key);else for(Re=Oe;Re<=ye;Re++)if(Ue[Re-Oe]===0&&isSameVNodeType(Ce,U[Re])){m=Re;break}m===void 0?de(Ce,fe,b,!0):(Ue[m-Oe]=oe+1,m>=Te?Te=m:Ae=!0,J(Ce,U[m],te,null,fe,b,q,X,ae),Ie++)}const ve=Ae?getSequence(Ue):EMPTY_ARR;for(Re=ve.length-1,oe=ke-1;oe>=0;oe--){const Ce=Oe+oe,m=U[Ce],D=Ce+1<se?U[Ce+1].el:x;Ue[oe]===0?J(null,m,te,D,fe,b,q,X,ae):Ae&&(Re<0||oe!==ve[Re]?ue(m,te,D,2):Re--)}}},ue=(I,U,te,x,fe=null)=>{const{el:b,type:q,transition:X,children:ae,shapeFlag:oe}=I;if(oe&6){ue(I.component.subTree,U,te,x);return}if(oe&128){I.suspense.move(U,te,x);return}if(oe&64){q.move(I,U,te,N);return}if(q===Fragment){o(b,U,te);for(let pe=0;pe<ae.length;pe++)ue(ae[pe],U,te,x);o(I.anchor,U,te);return}if(q===Static){L(I,U,te);return}if(x!==2&&oe&1&&X)if(x===0)X.beforeEnter(b),o(b,U,te),queuePostRenderEffect(()=>X.enter(b),fe);else{const{leave:pe,delayLeave:ye,afterLeave:_e}=X,Oe=()=>o(b,U,te),ge=()=>{pe(b,()=>{Oe(),_e&&_e()})};ye?ye(b,Oe,ge):ge()}else o(b,U,te)},de=(I,U,te,x=!1,fe=!1)=>{const{type:b,props:q,ref:X,children:ae,dynamicChildren:oe,shapeFlag:se,patchFlag:pe,dirs:ye,cacheIndex:_e}=I;if(pe===-2&&(fe=!1),X!=null&&setRef(X,null,te,I,!0),_e!=null&&(U.renderCache[_e]=void 0),se&256){U.ctx.deactivate(I);return}const Oe=se&1&&ye,ge=!isAsyncWrapper(I);let Re;if(ge&&(Re=q&&q.onVnodeBeforeUnmount)&&invokeVNodeHook(Re,U,I),se&6)he(I.component,te,x);else{if(se&128){I.suspense.unmount(te,x);return}Oe&&invokeDirectiveHook(I,null,U,"beforeUnmount"),se&64?I.type.remove(I,U,te,N,x):oe&&!oe.hasOnce&&(b!==Fragment||pe>0&&pe&64)?Se(oe,U,te,!1,!0):(b===Fragment&&pe&384||!fe&&se&16)&&Se(ae,U,te),x&&le(I)}(ge&&(Re=q&&q.onVnodeUnmounted)||Oe)&&queuePostRenderEffect(()=>{Re&&invokeVNodeHook(Re,U,I),Oe&&invokeDirectiveHook(I,null,U,"unmounted")},te)},le=I=>{const{type:U,el:te,anchor:x,transition:fe}=I;if(U===Fragment){me(te,x);return}if(U===Static){z(I);return}const b=()=>{i(te),fe&&!fe.persisted&&fe.afterLeave&&fe.afterLeave()};if(I.shapeFlag&1&&fe&&!fe.persisted){const{leave:q,delayLeave:X}=fe,ae=()=>q(te,b);X?X(I.el,b,ae):ae()}else b()},me=(I,U)=>{let te;for(;I!==U;)te=j(I),i(I),I=te;i(U)},he=(I,U,te)=>{const{bum:x,scope:fe,job:b,subTree:q,um:X,m:ae,a:oe}=I;invalidateMount(ae),invalidateMount(oe),x&&invokeArrayFns(x),fe.stop(),b&&(b.flags|=8,de(q,I,U,te)),X&&queuePostRenderEffect(X,U),queuePostRenderEffect(()=>{I.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},Se=(I,U,te,x=!1,fe=!1,b=0)=>{for(let q=b;q<I.length;q++)de(I[q],U,te,x,fe)},M=I=>{if(I.shapeFlag&6)return M(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const U=j(I.anchor||I.el),te=U&&U[TeleportEndKey];return te?j(te):U};let ee=!1;const a=(I,U,te)=>{I==null?U._vnode&&de(U._vnode,null,null,!0):J(U._vnode||null,I,U,null,null,null,te),U._vnode=I,ee||(ee=!0,flushPreFlushCbs(),flushPostFlushCbs(),ee=!1)},N={p:J,um:de,m:ue,r:le,mt:f,mc:A,pc:w,pbc:_,n:M,o:e};let s,k;return{render:a,hydrate:s,createApp:createAppAPI(a,s)}}function resolveChildrenNamespace({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function toggleRecurse({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function needTransition(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function traverseStaticChildren(e,n,t=!1){const o=e.children,i=n.children;if(isArray$3(o)&&isArray$3(i))for(let r=0;r<o.length;r++){const y=o[r];let g=i[r];g.shapeFlag&1&&!g.dynamicChildren&&((g.patchFlag<=0||g.patchFlag===32)&&(g=i[r]=cloneIfMounted(i[r]),g.el=y.el),!t&&g.patchFlag!==-2&&traverseStaticChildren(y,g)),g.type===Text&&(g.el=y.el)}}function getSequence(e){const n=e.slice(),t=[0];let o,i,r,y,g;const E=e.length;for(o=0;o<E;o++){const P=e[o];if(P!==0){if(i=t[t.length-1],e[i]<P){n[o]=i,t.push(o);continue}for(r=0,y=t.length-1;r<y;)g=r+y>>1,e[t[g]]<P?r=g+1:y=g;P<e[t[r]]&&(r>0&&(n[o]=t[r-1]),t[r]=o)}}for(r=t.length,y=t[r-1];r-- >0;)t[r]=y,y=n[y];return t}function locateNonHydratedAsyncRoot(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:locateNonHydratedAsyncRoot(n)}function invalidateMount(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const ssrContextKey=Symbol.for("v-scx"),useSSRContext=()=>inject(ssrContextKey);function watch(e,n,t){return doWatch(e,n,t)}function doWatch(e,n,t=EMPTY_OBJ){const{immediate:o,deep:i,flush:r,once:y}=t,g=extend({},t),E=n&&o||!n&&r!=="post";let P;if(isInSSRComponentSetup){if(r==="sync"){const F=useSSRContext();P=F.__watcherHandles||(F.__watcherHandles=[])}else if(!E){const F=()=>{};return F.stop=NOOP,F.resume=NOOP,F.pause=NOOP,F}}const $=currentInstance;g.call=(F,H,J)=>callWithAsyncErrorHandling(F,$,H,J);let K=!1;r==="post"?g.scheduler=F=>{queuePostRenderEffect(F,$&&$.suspense)}:r!=="sync"&&(K=!0,g.scheduler=(F,H)=>{H?F():queueJob(F)}),g.augmentJob=F=>{n&&(F.flags|=4),K&&(F.flags|=2,$&&(F.id=$.uid,F.i=$))};const j=watch$1(e,n,g);return isInSSRComponentSetup&&(P?P.push(j):E&&j()),j}function instanceWatch(e,n,t){const o=this.proxy,i=isString(e)?e.includes(".")?createPathGetter(o,e):()=>o[e]:e.bind(o,o);let r;isFunction$2(n)?r=n:(r=n.handler,t=n);const y=setCurrentInstance(this),g=doWatch(i,r.bind(o),t);return y(),g}function createPathGetter(e,n){const t=n.split(".");return()=>{let o=e;for(let i=0;i<t.length&&o;i++)o=o[t[i]];return o}}const getModelModifiers=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${camelize(n)}Modifiers`]||e[`${hyphenate(n)}Modifiers`];function emit(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||EMPTY_OBJ;let i=t;const r=n.startsWith("update:"),y=r&&getModelModifiers(o,n.slice(7));y&&(y.trim&&(i=t.map($=>isString($)?$.trim():$)),y.number&&(i=t.map(looseToNumber)));let g,E=o[g=toHandlerKey(n)]||o[g=toHandlerKey(camelize(n))];!E&&r&&(E=o[g=toHandlerKey(hyphenate(n))]),E&&callWithAsyncErrorHandling(E,e,6,i);const P=o[g+"Once"];if(P){if(!e.emitted)e.emitted={};else if(e.emitted[g])return;e.emitted[g]=!0,callWithAsyncErrorHandling(P,e,6,i)}}function normalizeEmitsOptions(e,n,t=!1){const o=n.emitsCache,i=o.get(e);if(i!==void 0)return i;const r=e.emits;let y={},g=!1;if(!isFunction$2(e)){const E=P=>{const $=normalizeEmitsOptions(P,n,!0);$&&(g=!0,extend(y,$))};!t&&n.mixins.length&&n.mixins.forEach(E),e.extends&&E(e.extends),e.mixins&&e.mixins.forEach(E)}return!r&&!g?(isObject(e)&&o.set(e,null),null):(isArray$3(r)?r.forEach(E=>y[E]=null):extend(y,r),isObject(e)&&o.set(e,y),y)}function isEmitListener(e,n){return!e||!isOn(n)?!1:(n=n.slice(2).replace(/Once$/,""),hasOwn(e,n[0].toLowerCase()+n.slice(1))||hasOwn(e,hyphenate(n))||hasOwn(e,n))}function markAttrsAccessed(){}function renderComponentRoot(e){const{type:n,vnode:t,proxy:o,withProxy:i,propsOptions:[r],slots:y,attrs:g,emit:E,render:P,renderCache:$,props:K,data:j,setupState:F,ctx:H,inheritAttrs:J}=e,W=setCurrentRenderingInstance(e);let c,C;try{if(t.shapeFlag&4){const z=i||o,Z=z;c=normalizeVNode(P.call(Z,z,$,K,F,j,H)),C=g}else{const z=n;c=normalizeVNode(z.length>1?z(K,{attrs:g,slots:y,emit:E}):z(K,null)),C=n.props?g:getFunctionalFallthrough(g)}}catch(z){blockStack.length=0,handleError(z,e,1),c=createVNode(Comment)}let L=c;if(C&&J!==!1){const z=Object.keys(C),{shapeFlag:Z}=L;z.length&&Z&7&&(r&&z.some(isModelListener)&&(C=filterModelListeners(C,r)),L=cloneVNode(L,C,!1,!0))}return t.dirs&&(L=cloneVNode(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&setTransitionHooks(L,t.transition),c=L,setCurrentRenderingInstance(W),c}const getFunctionalFallthrough=e=>{let n;for(const t in e)(t==="class"||t==="style"||isOn(t))&&((n||(n={}))[t]=e[t]);return n},filterModelListeners=(e,n)=>{const t={};for(const o in e)(!isModelListener(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function shouldUpdateComponent(e,n,t){const{props:o,children:i,component:r}=e,{props:y,children:g,patchFlag:E}=n,P=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&E>=0){if(E&1024)return!0;if(E&16)return o?hasPropsChanged(o,y,P):!!y;if(E&8){const $=n.dynamicProps;for(let K=0;K<$.length;K++){const j=$[K];if(y[j]!==o[j]&&!isEmitListener(P,j))return!0}}}else return(i||g)&&(!g||!g.$stable)?!0:o===y?!1:o?y?hasPropsChanged(o,y,P):!0:!!y;return!1}function hasPropsChanged(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const r=o[i];if(n[r]!==e[r]&&!isEmitListener(t,r))return!0}return!1}function updateHOCHostEl({vnode:e,parent:n},t){for(;n;){const o=n.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=n.vnode).el=t,n=n.parent;else break}}const isSuspense=e=>e.__isSuspense;function queueEffectWithSuspense(e,n){n&&n.pendingBranch?isArray$3(e)?n.effects.push(...e):n.effects.push(e):queuePostFlushCb(e)}const Fragment=Symbol.for("v-fgt"),Text=Symbol.for("v-txt"),Comment=Symbol.for("v-cmt"),Static=Symbol.for("v-stc"),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e,n=!1){isBlockTreeEnabled+=e,e<0&&currentBlock&&n&&(currentBlock.hasOnce=!0)}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,n,t,o,i,r){return setupBlock(createBaseVNode(e,n,t,o,i,r,!0))}function createBlock(e,n,t,o,i){return setupBlock(createVNode(e,n,t,o,i,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,n){return e.type===n.type&&e.key===n.key}const normalizeKey=({key:e})=>e??null,normalizeRef=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?isString(e)||isRef(e)||isFunction$2(e)?{i:currentRenderingInstance,r:e,k:n,f:!!t}:e:null);function createBaseVNode(e,n=null,t=null,o=0,i=null,r=e===Fragment?0:1,y=!1,g=!1){const E={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&normalizeKey(n),ref:n&&normalizeRef(n),scopeId:currentScopeId,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return g?(normalizeChildren(E,t),r&128&&e.normalize(E)):t&&(E.shapeFlag|=isString(t)?8:16),isBlockTreeEnabled>0&&!y&&currentBlock&&(E.patchFlag>0||r&6)&&E.patchFlag!==32&&currentBlock.push(E),E}const createVNode=_createVNode;function _createVNode(e,n=null,t=null,o=0,i=null,r=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e=Comment),isVNode(e)){const g=cloneVNode(e,n,!0);return t&&normalizeChildren(g,t),isBlockTreeEnabled>0&&!r&&currentBlock&&(g.shapeFlag&6?currentBlock[currentBlock.indexOf(e)]=g:currentBlock.push(g)),g.patchFlag=-2,g}if(isClassComponent(e)&&(e=e.__vccOpts),n){n=guardReactiveProps(n);let{class:g,style:E}=n;g&&!isString(g)&&(n.class=normalizeClass(g)),isObject(E)&&(isProxy(E)&&!isArray$3(E)&&(E=extend({},E)),n.style=normalizeStyle(E))}const y=isString(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject(e)?4:isFunction$2(e)?2:0;return createBaseVNode(e,n,t,o,i,y,r,!0)}function guardReactiveProps(e){return e?isProxy(e)||isInternalObject(e)?extend({},e):e:null}function cloneVNode(e,n,t=!1,o=!1){const{props:i,ref:r,patchFlag:y,children:g,transition:E}=e,P=n?mergeProps(i||{},n):i,$={__v_isVNode:!0,__v_skip:!0,type:e.type,props:P,key:P&&normalizeKey(P),ref:n&&n.ref?t&&r?isArray$3(r)?r.concat(normalizeRef(n)):[r,normalizeRef(n)]:normalizeRef(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:g,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Fragment?y===-1?16:y|16:y,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:E,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return E&&o&&setTransitionHooks($,E.clone($)),$}function createTextVNode(e=" ",n=0){return createVNode(Text,null,e,n)}function createCommentVNode(e="",n=!1){return n?(openBlock(),createBlock(Comment,null,e)):createVNode(Comment,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment):isArray$3(e)?createVNode(Fragment,null,e.slice()):isVNode(e)?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cloneVNode(e)}function normalizeChildren(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(isArray$3(n))t=16;else if(typeof n=="object")if(o&65){const i=n.default;i&&(i._c&&(i._d=!1),normalizeChildren(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!isInternalObject(n)?n._ctx=currentRenderingInstance:i===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else isFunction$2(n)?(n={default:n,_ctx:currentRenderingInstance},t=32):(n=String(n),o&64?(t=16,n=[createTextVNode(n)]):t=8);e.children=n,e.shapeFlag|=t}function mergeProps(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const i in o)if(i==="class")n.class!==o.class&&(n.class=normalizeClass([n.class,o.class]));else if(i==="style")n.style=normalizeStyle([n.style,o.style]);else if(isOn(i)){const r=n[i],y=o[i];y&&r!==y&&!(isArray$3(r)&&r.includes(y))&&(n[i]=r?[].concat(r,y):y)}else i!==""&&(n[i]=o[i])}return n}function invokeVNodeHook(e,n,t,o=null){callWithAsyncErrorHandling(e,n,7,[t,o])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(e,n,t){const o=e.type,i=(n?n.appContext:e.appContext)||emptyAppContext,r={uid:uid++,vnode:e,type:o,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(o,i),emitsOptions:normalizeEmitsOptions(o,i),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:o.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=emit.bind(null,r),e.ce&&e.ce(r),r}let currentInstance=null,internalSetCurrentInstance,setInSSRSetupState;{const e=getGlobalThis(),n=(t,o)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(o),r=>{i.length>1?i.forEach(y=>y(r)):i[0](r)}};internalSetCurrentInstance=n("__VUE_INSTANCE_SETTERS__",t=>currentInstance=t),setInSSRSetupState=n("__VUE_SSR_SETTERS__",t=>isInSSRComponentSetup=t)}const setCurrentInstance=e=>{const n=currentInstance;return internalSetCurrentInstance(e),e.scope.on(),()=>{e.scope.off(),internalSetCurrentInstance(n)}},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),internalSetCurrentInstance(null)};function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,n=!1,t=!1){n&&setInSSRSetupState(n);const{props:o,children:i}=e.vnode,r=isStatefulComponent(e);initProps(e,o,r,n),initSlots(e,i,t);const y=r?setupStatefulComponent(e,n):void 0;return n&&setInSSRSetupState(!1),y}function setupStatefulComponent(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,PublicInstanceProxyHandlers);const{setup:o}=t;if(o){pauseTracking();const i=e.setupContext=o.length>1?createSetupContext(e):null,r=setCurrentInstance(e),y=callWithErrorHandling(o,e,0,[e.props,i]),g=isPromise$2(y);if(resetTracking(),r(),(g||e.sp)&&!isAsyncWrapper(e)&&markAsyncBoundary(e),g){if(y.then(unsetCurrentInstance,unsetCurrentInstance),n)return y.then(E=>{handleSetupResult(e,E,n)}).catch(E=>{handleError(E,e,0)});e.asyncDep=y}else handleSetupResult(e,y,n)}else finishComponentSetup(e,n)}function handleSetupResult(e,n,t){isFunction$2(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:isObject(n)&&(e.setupState=proxyRefs(n)),finishComponentSetup(e,t)}let compile;function finishComponentSetup(e,n,t){const o=e.type;if(!e.render){if(!n&&compile&&!o.render){const i=o.template||resolveMergedOptions(e).template;if(i){const{isCustomElement:r,compilerOptions:y}=e.appContext.config,{delimiters:g,compilerOptions:E}=o,P=extend(extend({isCustomElement:r,delimiters:g},y),E);o.render=compile(i,P)}}e.render=o.render||NOOP}{const i=setCurrentInstance(e);pauseTracking();try{applyOptions(e)}finally{resetTracking(),i()}}}const attrsProxyHandlers={get(e,n){return track(e,"get",""),e[n]}};function createSetupContext(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,attrsProxyHandlers),slots:e.slots,emit:e.emit,expose:n}}function getComponentPublicInstance(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in publicPropertiesMap)return publicPropertiesMap[t](e)},has(n,t){return t in n||t in publicPropertiesMap}})):e.proxy}const classifyRE=/(?:^|[-_])(\w)/g,classify=e=>e.replace(classifyRE,n=>n.toUpperCase()).replace(/[-_]/g,"");function getComponentName(e,n=!0){return isFunction$2(e)?e.displayName||e.name:e.name||n&&e.__name}function formatComponentName(e,n,t=!1){let o=getComponentName(n);if(!o&&n.__file){const i=n.__file.match(/([^/\\]+)\.\w+$/);i&&(o=i[1])}if(!o&&e&&e.parent){const i=r=>{for(const y in r)if(r[y]===n)return y};o=i(e.components||e.parent.type.components)||i(e.appContext.components)}return o?classify(o):t?"App":"Anonymous"}function isClassComponent(e){return isFunction$2(e)&&"__vccOpts"in e}const computed=(e,n)=>computed$1(e,n,isInSSRComponentSetup),version$2="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let policy;const tt=typeof window<"u"&&window.trustedTypes;if(tt)try{policy=tt.createPolicy("vue",{createHTML:e=>e})}catch{}const unsafeToTrustedHTML=policy?e=>policy.createHTML(e):e=>e,svgNS="http://www.w3.org/2000/svg",mathmlNS="http://www.w3.org/1998/Math/MathML",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const i=n==="svg"?doc.createElementNS(svgNS,e):n==="mathml"?doc.createElementNS(mathmlNS,e):t?doc.createElement(e,{is:t}):doc.createElement(e);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,i,r){const y=t?t.previousSibling:n.lastChild;if(i&&(i===r||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{templateContainer.innerHTML=unsafeToTrustedHTML(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const g=templateContainer.content;if(o==="svg"||o==="mathml"){const E=g.firstChild;for(;E.firstChild;)g.appendChild(E.firstChild);g.removeChild(E)}n.insertBefore(g,t)}return[y?y.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},vtcKey=Symbol("_vtc");function patchClass(e,n,t){const o=e[vtcKey];o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const vShowOriginalDisplay=Symbol("_vod"),vShowHidden=Symbol("_vsh"),CSS_VAR_TEXT=Symbol(""),displayRE=/(^|;)\s*display\s*:/;function patchStyle(e,n,t){const o=e.style,i=isString(t);let r=!1;if(t&&!i){if(n)if(isString(n))for(const y of n.split(";")){const g=y.slice(0,y.indexOf(":")).trim();t[g]==null&&setStyle(o,g,"")}else for(const y in n)t[y]==null&&setStyle(o,y,"");for(const y in t)y==="display"&&(r=!0),setStyle(o,y,t[y])}else if(i){if(n!==t){const y=o[CSS_VAR_TEXT];y&&(t+=";"+y),o.cssText=t,r=displayRE.test(t)}}else n&&e.removeAttribute("style");vShowOriginalDisplay in e&&(e[vShowOriginalDisplay]=r?o.display:"",e[vShowHidden]&&(o.display="none"))}const importantRE=/\s*!important$/;function setStyle(e,n,t){if(isArray$3(t))t.forEach(o=>setStyle(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=autoPrefix(e,n);importantRE.test(t)?e.setProperty(hyphenate(o),t.replace(importantRE,""),"important"):e[o]=t}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,n){const t=prefixCache[n];if(t)return t;let o=camelize(n);if(o!=="filter"&&o in e)return prefixCache[n]=o;o=capitalize(o);for(let i=0;i<prefixes.length;i++){const r=prefixes[i]+o;if(r in e)return prefixCache[n]=r}return n}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,n,t,o,i,r=isSpecialBooleanAttr(n)){o&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(xlinkNS,n.slice(6,n.length)):e.setAttributeNS(xlinkNS,n,t):t==null||r&&!includeBooleanAttr(t)?e.removeAttribute(n):e.setAttribute(n,r?"":isSymbol(t)?String(t):t)}function patchDOMProp(e,n,t,o,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?unsafeToTrustedHTML(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const g=r==="OPTION"?e.getAttribute("value")||"":e.value,E=t==null?e.type==="checkbox"?"on":"":String(t);(g!==E||!("_value"in e))&&(e.value=E),t==null&&e.removeAttribute(n),e._value=t;return}let y=!1;if(t===""||t==null){const g=typeof e[n];g==="boolean"?t=includeBooleanAttr(t):t==null&&g==="string"?(t="",y=!0):g==="number"&&(t=0,y=!0)}try{e[n]=t}catch{}y&&e.removeAttribute(i||n)}function addEventListener(e,n,t,o){e.addEventListener(n,t,o)}function removeEventListener(e,n,t,o){e.removeEventListener(n,t,o)}const veiKey=Symbol("_vei");function patchEvent(e,n,t,o,i=null){const r=e[veiKey]||(e[veiKey]={}),y=r[n];if(o&&y)y.value=o;else{const[g,E]=parseName(n);if(o){const P=r[n]=createInvoker(o,i);addEventListener(e,g,P,E)}else y&&(removeEventListener(e,g,y,E),r[n]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let n;if(optionsModifierRE.test(e)){n={};let o;for(;o=e.match(optionsModifierRE);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hyphenate(e.slice(2)),n]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(o,t.value),n,5,[o])};return t.value=e,t.attached=getNow(),t}function patchStopImmediatePropagation(e,n){if(isArray$3(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>i=>!i._stopped&&o&&o(i))}else return n}const isNativeOn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,patchProp=(e,n,t,o,i,r)=>{const y=i==="svg";n==="class"?patchClass(e,o,y):n==="style"?patchStyle(e,t,o):isOn(n)?isModelListener(n)||patchEvent(e,n,t,o,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):shouldSetAsProp(e,n,o,y))?(patchDOMProp(e,n,o),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&patchAttr(e,n,o,y,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!isString(o))?patchDOMProp(e,camelize(n),o,r,n):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),patchAttr(e,n,o,y))};function shouldSetAsProp(e,n,t,o){if(o)return!!(n==="innerHTML"||n==="textContent"||n in e&&isNativeOn(n)&&isFunction$2(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return isNativeOn(n)&&isString(t)?!1:n in e}const REMOVAL={};/*! #__NO_SIDE_EFFECTS__ */function defineCustomElement(e,n,t){const o=defineComponent(e,n);isPlainObject(o)&&extend(o,n);class i extends VueElement{constructor(y){super(o,y,t)}}return i.def=o,i}const BaseClass=typeof HTMLElement<"u"?HTMLElement:class{};class VueElement extends BaseClass{constructor(n,t={},o=createApp){super(),this._def=n,this._props=t,this._createApp=o,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&o!==createApp?this._root=this.shadowRoot:n.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof VueElement){this._parent=n;break}this._instance||(this._resolved?(this._setParent(),this._update()):n&&n._pendingResolve?this._pendingResolve=n._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(n=this._parent){n&&(this._instance.parent=n._instance,this._instance.provides=n._instance.provides)}disconnectedCallback(){this._connected=!1,nextTick(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const i of o)this._setAttr(i.attributeName)}),this._ob.observe(this,{attributes:!0});const n=(o,i=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:y}=o;let g;if(r&&!isArray$3(r))for(const E in r){const P=r[E];(P===Number||P&&P.type===Number)&&(E in this._props&&(this._props[E]=toNumber(this._props[E])),(g||(g=Object.create(null)))[camelize(E)]=!0)}this._numberProps=g,i&&this._resolveProps(o),this.shadowRoot&&this._applyStyles(y),this._mount(o)},t=this._def.__asyncLoader;t?this._pendingResolve=t().then(o=>n(this._def=o,!0)):n(this._def)}_mount(n){this._app=this._createApp(n),n.configureApp&&n.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const t=this._instance&&this._instance.exposed;if(t)for(const o in t)hasOwn(this,o)||Object.defineProperty(this,o,{get:()=>unref(t[o])})}_r…225071 tokens truncated…"ISCSI_ERR_IDBM":return g.ISCSI_ERR_IDBM;case 7:case"ISCSI_ERR_INVAL":return g.ISCSI_ERR_INVAL;case 8:case"ISCSI_ERR_TRANS_TIMEOUT":return g.ISCSI_ERR_TRANS_TIMEOUT;case 9:case"ISCSI_ERR_INTERNAL":return g.ISCSI_ERR_INTERNAL;case 10:case"ISCSI_ERR_LOGOUT":return g.ISCSI_ERR_LOGOUT;case 11:case"ISCSI_ERR_PDU_TIMEOUT":return g.ISCSI_ERR_PDU_TIMEOUT;case 12:case"ISCSI_ERR_TRANS_NOT_FOUND":return g.ISCSI_ERR_TRANS_NOT_FOUND;case 13:case"ISCSI_ERR_ACCESS":return g.ISCSI_ERR_ACCESS;case 14:case"ISCSI_ERR_TRANS_CAPS":return g.ISCSI_ERR_TRANS_CAPS;case 15:case"ISCSI_ERR_SESS_EXISTS":return g.ISCSI_ERR_SESS_EXISTS;case 16:case"ISCSI_ERR_INVALID_MGMT_REQ":return g.ISCSI_ERR_INVALID_MGMT_REQ;case 17:case"ISCSI_ERR_ISNS_UNAVAILABLE":return g.ISCSI_ERR_ISNS_UNAVAILABLE;case 18:case"ISCSI_ERR_ISCSID_COMM_ERR":return g.ISCSI_ERR_ISCSID_COMM_ERR;case 19:case"ISCSI_ERR_FATAL_LOGIN":return g.ISCSI_ERR_FATAL_LOGIN;case 20:case"ISCSI_ERR_ISCSID_NOTCONN":return g.ISCSI_ERR_ISCSID_NOTCONN;case 21:case"ISCSI_ERR_NO_OBJS_FOUND":return g.ISCSI_ERR_NO_OBJS_FOUND;case 22:case"ISCSI_ERR_SYSFS_LOOKUP":return g.ISCSI_ERR_SYSFS_LOOKUP;case 23:case"ISCSI_ERR_HOST_NOT_FOUND":return g.ISCSI_ERR_HOST_NOT_FOUND;case 24:case"ISCSI_ERR_LOGIN_AUTH_FAILED":return g.ISCSI_ERR_LOGIN_AUTH_FAILED;case 25:case"ISCSI_ERR_ISNS_QUERY":return g.ISCSI_ERR_ISNS_QUERY;case 26:case"ISCSI_ERR_ISNS_REG_FAILED":return g.ISCSI_ERR_ISNS_REG_FAILED;case 27:case"ISCSI_ERR_OP_NOT_SUPP":return g.ISCSI_ERR_OP_NOT_SUPP;case 28:case"ISCSI_ERR_BUSY":return g.ISCSI_ERR_BUSY;case 29:case"ISCSI_ERR_AGAIN":return g.ISCSI_ERR_AGAIN;case 30:case"ISCSI_ERR_UNKNOWN_DISCOVERY_TYPE":return g.ISCSI_ERR_UNKNOWN_DISCOVERY_TYPE;case 31:case"ISCSI_ERR_CHILD_TERMINATED":return g.ISCSI_ERR_CHILD_TERMINATED;case 32:case"ISCSI_ERR_SESSION_NOT_CONNECTED":return g.ISCSI_ERR_SESSION_NOT_CONNECTED;case 1001:case"ISCSI_MANAGER_ERR":return g.ISCSI_MANAGER_ERR;case 1002:case"ISCSI_MANAGER_ADDRESS_LOOKUP":return g.ISCSI_MANAGER_ADDRESS_LOOKUP;case 1003:case"ISCSI_MANAGER_IQN_INVALID":return g.ISCSI_MANAGER_IQN_INVALID;case-1:case"UNRECOGNIZED":default:return g.UNRECOGNIZED}}e.iSCSIErrorCodeFromJSON=E;function P(a){switch(a){case g.ISCSI_SUCCESS:return"ISCSI_SUCCESS";case g.ISCSI_ERR:return"ISCSI_ERR";case g.ISCSI_ERR_SESS_NOT_FOUND:return"ISCSI_ERR_SESS_NOT_FOUND";case g.ISCSI_ERR_NOMEM:return"ISCSI_ERR_NOMEM";case g.ISCSI_ERR_TRANS:return"ISCSI_ERR_TRANS";case g.ISCSI_ERR_LOGIN:return"ISCSI_ERR_LOGIN";case g.ISCSI_ERR_IDBM:return"ISCSI_ERR_IDBM";case g.ISCSI_ERR_INVAL:return"ISCSI_ERR_INVAL";case g.ISCSI_ERR_TRANS_TIMEOUT:return"ISCSI_ERR_TRANS_TIMEOUT";case g.ISCSI_ERR_INTERNAL:return"ISCSI_ERR_INTERNAL";case g.ISCSI_ERR_LOGOUT:return"ISCSI_ERR_LOGOUT";case g.ISCSI_ERR_PDU_TIMEOUT:return"ISCSI_ERR_PDU_TIMEOUT";case g.ISCSI_ERR_TRANS_NOT_FOUND:return"ISCSI_ERR_TRANS_NOT_FOUND";case g.ISCSI_ERR_ACCESS:return"ISCSI_ERR_ACCESS";case g.ISCSI_ERR_TRANS_CAPS:return"ISCSI_ERR_TRANS_CAPS";case g.ISCSI_ERR_SESS_EXISTS:return"ISCSI_ERR_SESS_EXISTS";case g.ISCSI_ERR_INVALID_MGMT_REQ:return"ISCSI_ERR_INVALID_MGMT_REQ";case g.ISCSI_ERR_ISNS_UNAVAILABLE:return"ISCSI_ERR_ISNS_UNAVAILABLE";case g.ISCSI_ERR_ISCSID_COMM_ERR:return"ISCSI_ERR_ISCSID_COMM_ERR";case g.ISCSI_ERR_FATAL_LOGIN:return"ISCSI_ERR_FATAL_LOGIN";case g.ISCSI_ERR_ISCSID_NOTCONN:return"ISCSI_ERR_ISCSID_NOTCONN";case g.ISCSI_ERR_NO_OBJS_FOUND:return"ISCSI_ERR_NO_OBJS_FOUND";case g.ISCSI_ERR_SYSFS_LOOKUP:return"ISCSI_ERR_SYSFS_LOOKUP";case g.ISCSI_ERR_HOST_NOT_FOUND:return"ISCSI_ERR_HOST_NOT_FOUND";case g.ISCSI_ERR_LOGIN_AUTH_FAILED:return"ISCSI_ERR_LOGIN_AUTH_FAILED";case g.ISCSI_ERR_ISNS_QUERY:return"ISCSI_ERR_ISNS_QUERY";case g.ISCSI_ERR_ISNS_REG_FAILED:return"ISCSI_ERR_ISNS_REG_FAILED";case g.ISCSI_ERR_OP_NOT_SUPP:return"ISCSI_ERR_OP_NOT_SUPP";case g.ISCSI_ERR_BUSY:return"ISCSI_ERR_BUSY";case g.ISCSI_ERR_AGAIN:return"ISCSI_ERR_AGAIN";case g.ISCSI_ERR_UNKNOWN_DISCOVERY_TYPE:return"ISCSI_ERR_UNKNOWN_DISCOVERY_TYPE";case g.ISCSI_ERR_CHILD_TERMINATED:return"ISCSI_ERR_CHILD_TERMINATED";case g.ISCSI_ERR_SESSION_NOT_CONNECTED:return"ISCSI_ERR_SESSION_NOT_CONNECTED";case g.ISCSI_MANAGER_ERR:return"ISCSI_MANAGER_ERR";case g.ISCSI_MANAGER_ADDRESS_LOOKUP:return"ISCSI_MANAGER_ADDRESS_LOOKUP";case g.ISCSI_MANAGER_IQN_INVALID:return"ISCSI_MANAGER_IQN_INVALID";case g.UNRECOGNIZED:default:return"UNRECOGNIZED"}}e.iSCSIErrorCodeToJSON=P;var $;(function(a){a[a.None=0]="None",a[a.CHAP=1]="CHAP",a[a.MutualCHAP=2]="MutualCHAP",a[a.UNRECOGNIZED=-1]="UNRECOGNIZED"})($=e.ISCSIAuthType||(e.ISCSIAuthType={}));function K(a){switch(a){case 0:case"None":return $.None;case 1:case"CHAP":return $.CHAP;case 2:case"MutualCHAP":return $.MutualCHAP;case-1:case"UNRECOGNIZED":default:return $.UNRECOGNIZED}}e.iSCSIAuthTypeFromJSON=K;function j(a){switch(a){case $.None:return"None";case $.CHAP:return"CHAP";case $.MutualCHAP:return"MutualCHAP";case $.UNRECOGNIZED:default:return"UNRECOGNIZED"}}e.iSCSIAuthTypeToJSON=j;var F;(function(a){a[a.ISCSI_TRANSPORT_TCP=0]="ISCSI_TRANSPORT_TCP",a[a.ISCSI_TRANSPORT_ISER=1]="ISCSI_TRANSPORT_ISER",a[a.UNRECOGNIZED=-1]="UNRECOGNIZED"})(F=e.ISCSITransportName||(e.ISCSITransportName={}));function H(a){switch(a){case 0:case"ISCSI_TRANSPORT_TCP":return F.ISCSI_TRANSPORT_TCP;case 1:case"ISCSI_TRANSPORT_ISER":return F.ISCSI_TRANSPORT_ISER;case-1:case"UNRECOGNIZED":default:return F.UNRECOGNIZED}}e.iSCSITransportNameFromJSON=H;function J(a){switch(a){case F.ISCSI_TRANSPORT_TCP:return"ISCSI_TRANSPORT_TCP";case F.ISCSI_TRANSPORT_ISER:return"ISCSI_TRANSPORT_ISER";case F.UNRECOGNIZED:default:return"UNRECOGNIZED"}}e.iSCSITransportNameToJSON=J;var W;(function(a){a[a.ISCSI_SESSION_LOGGED_IN=0]="ISCSI_SESSION_LOGGED_IN",a[a.ISCSI_SESSION_FAILED=1]="ISCSI_SESSION_FAILED",a[a.ISCSI_SESSION_FREE=2]="ISCSI_SESSION_FREE",a[a.UNRECOGNIZED=-1]="UNRECOGNIZED"})(W=e.ISCSISessionState||(e.ISCSISessionState={}));function c(a){switch(a){case 0:case"ISCSI_SESSION_LOGGED_IN":return W.ISCSI_SESSION_LOGGED_IN;case 1:case"ISCSI_SESSION_FAILED":return W.ISCSI_SESSION_FAILED;case 2:case"ISCSI_SESSION_FREE":return W.ISCSI_SESSION_FREE;case-1:case"UNRECOGNIZED":default:return W.UNRECOGNIZED}}e.iSCSISessionStateFromJSON=c;function C(a){switch(a){case W.ISCSI_SESSION_LOGGED_IN:return"ISCSI_SESSION_LOGGED_IN";case W.ISCSI_SESSION_FAILED:return"ISCSI_SESSION_FAILED";case W.ISCSI_SESSION_FREE:return"ISCSI_SESSION_FREE";case W.UNRECOGNIZED:default:return"UNRECOGNIZED"}}e.iSCSISessionStateToJSON=C;var L;(function(a){a[a.ISCSI_SESSION_TARGET_UNBOUND=0]="ISCSI_SESSION_TARGET_UNBOUND",a[a.ISCSI_SESSION_TARGET_ALLOCATED=1]="ISCSI_SESSION_TARGET_ALLOCATED",a[a.ISCSI_SESSION_TARGET_SCANNED=2]="ISCSI_SESSION_TARGET_SCANNED",a[a.ISCSI_SESSION_TARGET_UNBINDING=3]="ISCSI_SESSION_TARGET_UNBINDING",a[a.ISCSI_SESSION_TARGET_MAX=4]="ISCSI_SESSION_TARGET_MAX",a[a.UNRECOGNIZED=-1]="UNRECOGNIZED"})(L=e.ISCSISessionTargetState||(e.ISCSISessionTargetState={}));function z(a){switch(a){case 0:case"ISCSI_SESSION_TARGET_UNBOUND":return L.ISCSI_SESSION_TARGET_UNBOUND;case 1:case"ISCSI_SESSION_TARGET_ALLOCATED":return L.ISCSI_SESSION_TARGET_ALLOCATED;case 2:case"ISCSI_SESSION_TARGET_SCANNED":return L.ISCSI_SESSION_TARGET_SCANNED;case 3:case"ISCSI_SESSION_TARGET_UNBINDING":return L.ISCSI_SESSION_TARGET_UNBINDING;case 4:case"ISCSI_SESSION_TARGET_MAX":return L.ISCSI_SESSION_TARGET_MAX;case-1:case"UNRECOGNIZED":default:return L.UNRECOGNIZED}}e.iSCSISessionTargetStateFromJSON=z;function Z(a){switch(a){case L.ISCSI_SESSION_TARGET_UNBOUND:return"ISCSI_SESSION_TARGET_UNBOUND";case L.ISCSI_SESSION_TARGET_ALLOCATED:return"ISCSI_SESSION_TARGET_ALLOCATED";case L.ISCSI_SESSION_TARGET_SCANNED:return"ISCSI_SESSION_TARGET_SCANNED";case L.ISCSI_SESSION_TARGET_UNBINDING:return"ISCSI_SESSION_TARGET_UNBINDING";case L.ISCSI_SESSION_TARGET_MAX:return"ISCSI_SESSION_TARGET_MAX";case L.UNRECOGNIZED:default:return"UNRECOGNIZED"}}e.iSCSISessionTargetStateToJSON=Z;var S;(function(a){a[a.ISCSI_CONN_UP=0]="ISCSI_CONN_UP",a[a.ISCSI_CONN_DOWN=1]="ISCSI_CONN_DOWN",a[a.ISCSI_CONN_FAILED=2]="ISCSI_CONN_FAILED",a[a.ISCSI_CONN_BOUND=3]="ISCSI_CONN_BOUND",a[a.UNRECOGNIZED=-1]="UNRECOGNIZED"})(S=e.ISCSIConnectionState||(e.ISCSIConnectionState={}));function T(a){switch(a){case 0:case"ISCSI_CONN_UP":return S.ISCSI_CONN_UP;case 1:case"ISCSI_CONN_DOWN":return S.ISCSI_CONN_DOWN;case 2:case"ISCSI_CONN_FAILED":return S.ISCSI_CONN_FAILED;case 3:case"ISCSI_CONN_BOUND":return S.ISCSI_CONN_BOUND;case-1:case"UNRECOGNIZED":default:return S.UNRECOGNIZED}}e.iSCSIConnectionStateFromJSON=T;function A(a){switch(a){case S.ISCSI_CONN_UP:return"ISCSI_CONN_UP";case S.ISCSI_CONN_DOWN:return"ISCSI_CONN_DOWN";case S.ISCSI_CONN_FAILED:return"ISCSI_CONN_FAILED";case S.ISCSI_CONN_BOUND:return"ISCSI_CONN_BOUND";case S.UNRECOGNIZED:default:return"UNRECOGNIZED"}}e.iSCSIConnectionStateToJSON=A;function G(){return{portal:"",groupTag:"",target:""}}e.ISCSITarget={encode(a,N=r.default.Writer.create()){return a.portal!==""&&N.uint32(10).string(a.portal),a.groupTag!==""&&N.uint32(18).string(a.groupTag),a.target!==""&&N.uint32(26).string(a.target),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=G();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.portal=s.string();continue;case 2:if(U!==18)break;I.groupTag=s.string();continue;case 3:if(U!==26)break;I.target=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{portal:M(a.portal)?String(a.portal):"",groupTag:M(a.groupTag)?String(a.groupTag):"",target:M(a.target)?String(a.target):""}},toJSON(a){const N={};return a.portal!==""&&(N.portal=a.portal),a.groupTag!==""&&(N.groupTag=a.groupTag),a.target!==""&&(N.target=a.target),N},create(a){return e.ISCSITarget.fromPartial(a??{})},fromPartial(a){var N,s,k;const I=G();return I.portal=(N=a.portal)!==null&&N!==void 0?N:"",I.groupTag=(s=a.groupTag)!==null&&s!==void 0?s:"",I.target=(k=a.target)!==null&&k!==void 0?k:"",I}};function _(){return{username:"",password:"",usernameIn:"",passwordIn:""}}e.ISCSICHAPAuth={encode(a,N=r.default.Writer.create()){return a.username!==""&&N.uint32(10).string(a.username),a.password!==""&&N.uint32(18).string(a.password),a.usernameIn!==""&&N.uint32(26).string(a.usernameIn),a.passwordIn!==""&&N.uint32(34).string(a.passwordIn),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=_();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.username=s.string();continue;case 2:if(U!==18)break;I.password=s.string();continue;case 3:if(U!==26)break;I.usernameIn=s.string();continue;case 4:if(U!==34)break;I.passwordIn=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{username:M(a.username)?String(a.username):"",password:M(a.password)?String(a.password):"",usernameIn:M(a.usernameIn)?String(a.usernameIn):"",passwordIn:M(a.passwordIn)?String(a.passwordIn):""}},toJSON(a){const N={};return a.username!==""&&(N.username=a.username),a.password!==""&&(N.password=a.password),a.usernameIn!==""&&(N.usernameIn=a.usernameIn),a.passwordIn!==""&&(N.passwordIn=a.passwordIn),N},create(a){return e.ISCSICHAPAuth.fromPartial(a??{})},fromPartial(a){var N,s,k,I;const U=_();return U.username=(N=a.username)!==null&&N!==void 0?N:"",U.password=(s=a.password)!==null&&s!==void 0?s:"",U.usernameIn=(k=a.usernameIn)!==null&&k!==void 0?k:"",U.passwordIn=(I=a.passwordIn)!==null&&I!==void 0?I:"",U}};function O(){return{address:"",authType:0,auth:void 0,startup:!1,login:!1}}e.DiscoverTargetsRequest={encode(a,N=r.default.Writer.create()){return a.address!==""&&N.uint32(10).string(a.address),a.authType!==0&&N.uint32(16).int32(a.authType),a.auth!==void 0&&e.ISCSICHAPAuth.encode(a.auth,N.uint32(26).fork()).ldelim(),a.startup===!0&&N.uint32(32).bool(a.startup),a.login===!0&&N.uint32(40).bool(a.login),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=O();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.address=s.string();continue;case 2:if(U!==16)break;I.authType=s.int32();continue;case 3:if(U!==26)break;I.auth=e.ISCSICHAPAuth.decode(s,s.uint32());continue;case 4:if(U!==32)break;I.startup=s.bool();continue;case 5:if(U!==40)break;I.login=s.bool();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{address:M(a.address)?String(a.address):"",authType:M(a.authType)?K(a.authType):0,auth:M(a.auth)?e.ISCSICHAPAuth.fromJSON(a.auth):void 0,startup:M(a.startup)?!!a.startup:!1,login:M(a.login)?!!a.login:!1}},toJSON(a){const N={};return a.address!==""&&(N.address=a.address),a.authType!==0&&(N.authType=j(a.authType)),a.auth!==void 0&&(N.auth=e.ISCSICHAPAuth.toJSON(a.auth)),a.startup===!0&&(N.startup=a.startup),a.login===!0&&(N.login=a.login),N},create(a){return e.DiscoverTargetsRequest.fromPartial(a??{})},fromPartial(a){var N,s,k,I;const U=O();return U.address=(N=a.address)!==null&&N!==void 0?N:"",U.authType=(s=a.authType)!==null&&s!==void 0?s:0,U.auth=a.auth!==void 0&&a.auth!==null?e.ISCSICHAPAuth.fromPartial(a.auth):void 0,U.startup=(k=a.startup)!==null&&k!==void 0?k:!1,U.login=(I=a.login)!==null&&I!==void 0?I:!1,U}};function l(){return{targets:[],code:0,rawMessage:""}}e.DiscoverTargetsResponse={encode(a,N=r.default.Writer.create()){for(const s of a.targets)e.ISCSITarget.encode(s,N.uint32(10).fork()).ldelim();return a.code!==0&&N.uint32(16).int32(a.code),a.rawMessage!==""&&N.uint32(26).string(a.rawMessage),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=l();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.targets.push(e.ISCSITarget.decode(s,s.uint32()));continue;case 2:if(U!==16)break;I.code=s.int32();continue;case 3:if(U!==26)break;I.rawMessage=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{targets:Array.isArray(a==null?void 0:a.targets)?a.targets.map(N=>e.ISCSITarget.fromJSON(N)):[],code:M(a.code)?E(a.code):0,rawMessage:M(a.rawMessage)?String(a.rawMessage):""}},toJSON(a){var N;const s={};return!((N=a.targets)===null||N===void 0)&&N.length&&(s.targets=a.targets.map(k=>e.ISCSITarget.toJSON(k))),a.code!==0&&(s.code=P(a.code)),a.rawMessage!==""&&(s.rawMessage=a.rawMessage),s},create(a){return e.DiscoverTargetsResponse.fromPartial(a??{})},fromPartial(a){var N,s,k;const I=l();return I.targets=((N=a.targets)===null||N===void 0?void 0:N.map(U=>e.ISCSITarget.fromPartial(U)))||[],I.code=(s=a.code)!==null&&s!==void 0?s:0,I.rawMessage=(k=a.rawMessage)!==null&&k!==void 0?k:"",I}};function d(){return{target:void 0,authType:0,auth:void 0}}e.SetAuthRequest={encode(a,N=r.default.Writer.create()){return a.target!==void 0&&e.ISCSITarget.encode(a.target,N.uint32(10).fork()).ldelim(),a.authType!==0&&N.uint32(16).int32(a.authType),a.auth!==void 0&&e.ISCSICHAPAuth.encode(a.auth,N.uint32(26).fork()).ldelim(),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=d();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.target=e.ISCSITarget.decode(s,s.uint32());continue;case 2:if(U!==16)break;I.authType=s.int32();continue;case 3:if(U!==26)break;I.auth=e.ISCSICHAPAuth.decode(s,s.uint32());continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{target:M(a.target)?e.ISCSITarget.fromJSON(a.target):void 0,authType:M(a.authType)?K(a.authType):0,auth:M(a.auth)?e.ISCSICHAPAuth.fromJSON(a.auth):void 0}},toJSON(a){const N={};return a.target!==void 0&&(N.target=e.ISCSITarget.toJSON(a.target)),a.authType!==0&&(N.authType=j(a.authType)),a.auth!==void 0&&(N.auth=e.ISCSICHAPAuth.toJSON(a.auth)),N},create(a){return e.SetAuthRequest.fromPartial(a??{})},fromPartial(a){var N;const s=d();return s.target=a.target!==void 0&&a.target!==null?e.ISCSITarget.fromPartial(a.target):void 0,s.authType=(N=a.authType)!==null&&N!==void 0?N:0,s.auth=a.auth!==void 0&&a.auth!==null?e.ISCSICHAPAuth.fromPartial(a.auth):void 0,s}};function f(){return{name:"",value:""}}e.NodeOptions={encode(a,N=r.default.Writer.create()){return a.name!==""&&N.uint32(10).string(a.name),a.value!==""&&N.uint32(18).string(a.value),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=f();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.name=s.string();continue;case 2:if(U!==18)break;I.value=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{name:M(a.name)?String(a.name):"",value:M(a.value)?String(a.value):""}},toJSON(a){const N={};return a.name!==""&&(N.name=a.name),a.value!==""&&(N.value=a.value),N},create(a){return e.NodeOptions.fromPartial(a??{})},fromPartial(a){var N,s;const k=f();return k.name=(N=a.name)!==null&&N!==void 0?N:"",k.value=(s=a.value)!==null&&s!==void 0?s:"",k}};function v(){return{target:void 0,fields:[]}}e.ISCSINode={encode(a,N=r.default.Writer.create()){a.target!==void 0&&e.ISCSITarget.encode(a.target,N.uint32(10).fork()).ldelim();for(const s of a.fields)e.NodeOptions.encode(s,N.uint32(18).fork()).ldelim();return N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=v();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.target=e.ISCSITarget.decode(s,s.uint32());continue;case 2:if(U!==18)break;I.fields.push(e.NodeOptions.decode(s,s.uint32()));continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{target:M(a.target)?e.ISCSITarget.fromJSON(a.target):void 0,fields:Array.isArray(a==null?void 0:a.fields)?a.fields.map(N=>e.NodeOptions.fromJSON(N)):[]}},toJSON(a){var N;const s={};return a.target!==void 0&&(s.target=e.ISCSITarget.toJSON(a.target)),!((N=a.fields)===null||N===void 0)&&N.length&&(s.fields=a.fields.map(k=>e.NodeOptions.toJSON(k))),s},create(a){return e.ISCSINode.fromPartial(a??{})},fromPartial(a){var N;const s=v();return s.target=a.target!==void 0&&a.target!==null?e.ISCSITarget.fromPartial(a.target):void 0,s.fields=((N=a.fields)===null||N===void 0?void 0:N.map(k=>e.NodeOptions.fromPartial(k)))||[],s}};function B(){return{target:void 0,options:[],startup:!1}}e.CreateOrUpdateNodeRequest={encode(a,N=r.default.Writer.create()){a.target!==void 0&&e.ISCSITarget.encode(a.target,N.uint32(10).fork()).ldelim();for(const s of a.options)e.NodeOptions.encode(s,N.uint32(18).fork()).ldelim();return a.startup===!0&&N.uint32(24).bool(a.startup),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=B();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.target=e.ISCSITarget.decode(s,s.uint32());continue;case 2:if(U!==18)break;I.options.push(e.NodeOptions.decode(s,s.uint32()));continue;case 3:if(U!==24)break;I.startup=s.bool();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{target:M(a.target)?e.ISCSITarget.fromJSON(a.target):void 0,options:Array.isArray(a==null?void 0:a.options)?a.options.map(N=>e.NodeOptions.fromJSON(N)):[],startup:M(a.startup)?!!a.startup:!1}},toJSON(a){var N;const s={};return a.target!==void 0&&(s.target=e.ISCSITarget.toJSON(a.target)),!((N=a.options)===null||N===void 0)&&N.length&&(s.options=a.options.map(k=>e.NodeOptions.toJSON(k))),a.startup===!0&&(s.startup=a.startup),s},create(a){return e.CreateOrUpdateNodeRequest.fromPartial(a??{})},fromPartial(a){var N,s;const k=B();return k.target=a.target!==void 0&&a.target!==null?e.ISCSITarget.fromPartial(a.target):void 0,k.options=((N=a.options)===null||N===void 0?void 0:N.map(I=>e.NodeOptions.fromPartial(I)))||[],k.startup=(s=a.startup)!==null&&s!==void 0?s:!1,k}};function Y(){return{nodes:[],code:0,rawMessage:""}}e.GetNodesResponse={encode(a,N=r.default.Writer.create()){for(const s of a.nodes)e.ISCSINode.encode(s,N.uint32(10).fork()).ldelim();return a.code!==0&&N.uint32(16).int32(a.code),a.rawMessage!==""&&N.uint32(26).string(a.rawMessage),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=Y();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.nodes.push(e.ISCSINode.decode(s,s.uint32()));continue;case 2:if(U!==16)break;I.code=s.int32();continue;case 3:if(U!==26)break;I.rawMessage=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{nodes:Array.isArray(a==null?void 0:a.nodes)?a.nodes.map(N=>e.ISCSINode.fromJSON(N)):[],code:M(a.code)?E(a.code):0,rawMessage:M(a.rawMessage)?String(a.rawMessage):""}},toJSON(a){var N;const s={};return!((N=a.nodes)===null||N===void 0)&&N.length&&(s.nodes=a.nodes.map(k=>e.ISCSINode.toJSON(k))),a.code!==0&&(s.code=P(a.code)),a.rawMessage!==""&&(s.rawMessage=a.rawMessage),s},create(a){return e.GetNodesResponse.fromPartial(a??{})},fromPartial(a){var N,s,k;const I=Y();return I.nodes=((N=a.nodes)===null||N===void 0?void 0:N.map(U=>e.ISCSINode.fromPartial(U)))||[],I.code=(s=a.code)!==null&&s!==void 0?s:0,I.rawMessage=(k=a.rawMessage)!==null&&k!==void 0?k:"",I}};function w(){return{devPath:"",size:i.default.UZERO,readOnly:!1,vendor:void 0,model:void 0}}e.ISCSILunInfo={encode(a,N=r.default.Writer.create()){return a.devPath!==""&&N.uint32(10).string(a.devPath),a.size.isZero()||N.uint32(16).uint64(a.size),a.readOnly===!0&&N.uint32(24).bool(a.readOnly),a.vendor!==void 0&&N.uint32(34).string(a.vendor),a.model!==void 0&&N.uint32(42).string(a.model),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=w();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.devPath=s.string();continue;case 2:if(U!==16)break;I.size=s.uint64();continue;case 3:if(U!==24)break;I.readOnly=s.bool();continue;case 4:if(U!==34)break;I.vendor=s.string();continue;case 5:if(U!==42)break;I.model=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{devPath:M(a.devPath)?String(a.devPath):"",size:M(a.size)?i.default.fromValue(a.size):i.default.UZERO,readOnly:M(a.readOnly)?!!a.readOnly:!1,vendor:M(a.vendor)?String(a.vendor):void 0,model:M(a.model)?String(a.model):void 0}},toJSON(a){const N={};return a.devPath!==""&&(N.devPath=a.devPath),a.size.isZero()||(N.size=(a.size||i.default.UZERO).toString()),a.readOnly===!0&&(N.readOnly=a.readOnly),a.vendor!==void 0&&(N.vendor=a.vendor),a.model!==void 0&&(N.model=a.model),N},create(a){return e.ISCSILunInfo.fromPartial(a??{})},fromPartial(a){var N,s,k,I;const U=w();return U.devPath=(N=a.devPath)!==null&&N!==void 0?N:"",U.size=a.size!==void 0&&a.size!==null?i.default.fromValue(a.size):i.default.UZERO,U.readOnly=(s=a.readOnly)!==null&&s!==void 0?s:!1,U.vendor=(k=a.vendor)!==null&&k!==void 0?k:void 0,U.model=(I=a.model)!==null&&I!==void 0?I:void 0,U}};function Q(){return{target:void 0,sid:"",ifaceInitiatorname:"",ifaceIpaddress:"",ifacePort:0,sessionState:0,connectionState:0,targetState:0,lunsCount:0,lunInfo:[],jsonInfo:void 0}}e.ISCSISession={encode(a,N=r.default.Writer.create()){a.target!==void 0&&e.ISCSITarget.encode(a.target,N.uint32(10).fork()).ldelim(),a.sid!==""&&N.uint32(18).string(a.sid),a.ifaceInitiatorname!==""&&N.uint32(26).string(a.ifaceInitiatorname),a.ifaceIpaddress!==""&&N.uint32(34).string(a.ifaceIpaddress),a.ifacePort!==0&&N.uint32(40).int32(a.ifacePort),a.sessionState!==0&&N.uint32(48).int32(a.sessionState),a.connectionState!==0&&N.uint32(56).int32(a.connectionState),a.targetState!==0&&N.uint32(64).int32(a.targetState),a.lunsCount!==0&&N.uint32(72).int32(a.lunsCount);for(const s of a.lunInfo)e.ISCSILunInfo.encode(s,N.uint32(82).fork()).ldelim();return a.jsonInfo!==void 0&&N.uint32(90).string(a.jsonInfo),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=Q();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.target=e.ISCSITarget.decode(s,s.uint32());continue;case 2:if(U!==18)break;I.sid=s.string();continue;case 3:if(U!==26)break;I.ifaceInitiatorname=s.string();continue;case 4:if(U!==34)break;I.ifaceIpaddress=s.string();continue;case 5:if(U!==40)break;I.ifacePort=s.int32();continue;case 6:if(U!==48)break;I.sessionState=s.int32();continue;case 7:if(U!==56)break;I.connectionState=s.int32();continue;case 8:if(U!==64)break;I.targetState=s.int32();continue;case 9:if(U!==72)break;I.lunsCount=s.int32();continue;case 10:if(U!==82)break;I.lunInfo.push(e.ISCSILunInfo.decode(s,s.uint32()));continue;case 11:if(U!==90)break;I.jsonInfo=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{target:M(a.target)?e.ISCSITarget.fromJSON(a.target):void 0,sid:M(a.sid)?String(a.sid):"",ifaceInitiatorname:M(a.ifaceInitiatorname)?String(a.ifaceInitiatorname):"",ifaceIpaddress:M(a.ifaceIpaddress)?String(a.ifaceIpaddress):"",ifacePort:M(a.ifacePort)?Number(a.ifacePort):0,sessionState:M(a.sessionState)?c(a.sessionState):0,connectionState:M(a.connectionState)?T(a.connectionState):0,targetState:M(a.targetState)?z(a.targetState):0,lunsCount:M(a.lunsCount)?Number(a.lunsCount):0,lunInfo:Array.isArray(a==null?void 0:a.lunInfo)?a.lunInfo.map(N=>e.ISCSILunInfo.fromJSON(N)):[],jsonInfo:M(a.jsonInfo)?String(a.jsonInfo):void 0}},toJSON(a){var N;const s={};return a.target!==void 0&&(s.target=e.ISCSITarget.toJSON(a.target)),a.sid!==""&&(s.sid=a.sid),a.ifaceInitiatorname!==""&&(s.ifaceInitiatorname=a.ifaceInitiatorname),a.ifaceIpaddress!==""&&(s.ifaceIpaddress=a.ifaceIpaddress),a.ifacePort!==0&&(s.ifacePort=Math.round(a.ifacePort)),a.sessionState!==0&&(s.sessionState=C(a.sessionState)),a.connectionState!==0&&(s.connectionState=A(a.connectionState)),a.targetState!==0&&(s.targetState=Z(a.targetState)),a.lunsCount!==0&&(s.lunsCount=Math.round(a.lunsCount)),!((N=a.lunInfo)===null||N===void 0)&&N.length&&(s.lunInfo=a.lunInfo.map(k=>e.ISCSILunInfo.toJSON(k))),a.jsonInfo!==void 0&&(s.jsonInfo=a.jsonInfo),s},create(a){return e.ISCSISession.fromPartial(a??{})},fromPartial(a){var N,s,k,I,U,te,x,fe,b,q;const X=Q();return X.target=a.target!==void 0&&a.target!==null?e.ISCSITarget.fromPartial(a.target):void 0,X.sid=(N=a.sid)!==null&&N!==void 0?N:"",X.ifaceInitiatorname=(s=a.ifaceInitiatorname)!==null&&s!==void 0?s:"",X.ifaceIpaddress=(k=a.ifaceIpaddress)!==null&&k!==void 0?k:"",X.ifacePort=(I=a.ifacePort)!==null&&I!==void 0?I:0,X.sessionState=(U=a.sessionState)!==null&&U!==void 0?U:0,X.connectionState=(te=a.connectionState)!==null&&te!==void 0?te:0,X.targetState=(x=a.targetState)!==null&&x!==void 0?x:0,X.lunsCount=(fe=a.lunsCount)!==null&&fe!==void 0?fe:0,X.lunInfo=((b=a.lunInfo)===null||b===void 0?void 0:b.map(ae=>e.ISCSILunInfo.fromPartial(ae)))||[],X.jsonInfo=(q=a.jsonInfo)!==null&&q!==void 0?q:void 0,X}};function ne(){return{sessions:[],code:0,rawMessage:""}}e.GetSessionResponse={encode(a,N=r.default.Writer.create()){for(const s of a.sessions)e.ISCSISession.encode(s,N.uint32(10).fork()).ldelim();return a.code!==0&&N.uint32(16).int32(a.code),a.rawMessage!==""&&N.uint32(26).string(a.rawMessage),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=ne();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.sessions.push(e.ISCSISession.decode(s,s.uint32()));continue;case 2:if(U!==16)break;I.code=s.int32();continue;case 3:if(U!==26)break;I.rawMessage=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{sessions:Array.isArray(a==null?void 0:a.sessions)?a.sessions.map(N=>e.ISCSISession.fromJSON(N)):[],code:M(a.code)?E(a.code):0,rawMessage:M(a.rawMessage)?String(a.rawMessage):""}},toJSON(a){var N;const s={};return!((N=a.sessions)===null||N===void 0)&&N.length&&(s.sessions=a.sessions.map(k=>e.ISCSISession.toJSON(k))),a.code!==0&&(s.code=P(a.code)),a.rawMessage!==""&&(s.rawMessage=a.rawMessage),s},create(a){return e.GetSessionResponse.fromPartial(a??{})},fromPartial(a){var N,s,k;const I=ne();return I.sessions=((N=a.sessions)===null||N===void 0?void 0:N.map(U=>e.ISCSISession.fromPartial(U)))||[],I.code=(s=a.code)!==null&&s!==void 0?s:0,I.rawMessage=(k=a.rawMessage)!==null&&k!==void 0?k:"",I}};function ue(){return{target:void 0}}e.NodeOperationRequest={encode(a,N=r.default.Writer.create()){return a.target!==void 0&&e.ISCSITarget.encode(a.target,N.uint32(10).fork()).ldelim(),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=ue();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.target=e.ISCSITarget.decode(s,s.uint32());continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{target:M(a.target)?e.ISCSITarget.fromJSON(a.target):void 0}},toJSON(a){const N={};return a.target!==void 0&&(N.target=e.ISCSITarget.toJSON(a.target)),N},create(a){return e.NodeOperationRequest.fromPartial(a??{})},fromPartial(a){const N=ue();return N.target=a.target!==void 0&&a.target!==null?e.ISCSITarget.fromPartial(a.target):void 0,N}};function de(){return{code:0,rawMessage:""}}e.CommonResponse={encode(a,N=r.default.Writer.create()){return a.code!==0&&N.uint32(8).int32(a.code),a.rawMessage!==""&&N.uint32(18).string(a.rawMessage),N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=de();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==8)break;I.code=s.int32();continue;case 2:if(U!==18)break;I.rawMessage=s.string();continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{code:M(a.code)?E(a.code):0,rawMessage:M(a.rawMessage)?String(a.rawMessage):""}},toJSON(a){const N={};return a.code!==0&&(N.code=P(a.code)),a.rawMessage!==""&&(N.rawMessage=a.rawMessage),N},create(a){return e.CommonResponse.fromPartial(a??{})},fromPartial(a){var N,s;const k=de();return k.code=(N=a.code)!==null&&N!==void 0?N:0,k.rawMessage=(s=a.rawMessage)!==null&&s!==void 0?s:"",k}};function le(){return{initiators:[]}}e.GetInitiatorsResponse={encode(a,N=r.default.Writer.create()){for(const s of a.initiators)N.uint32(10).string(s);return N},decode(a,N){const s=a instanceof r.default.Reader?a:r.default.Reader.create(a);let k=N===void 0?s.len:s.pos+N;const I=le();for(;s.pos<k;){const U=s.uint32();switch(U>>>3){case 1:if(U!==10)break;I.initiators.push(s.string());continue}if((U&7)===4||U===0)break;s.skipType(U&7)}return I},fromJSON(a){return{initiators:Array.isArray(a==null?void 0:a.initiators)?a.initiators.map(N=>String(N)):[]}},toJSON(a){var N;const s={};return!((N=a.initiators)===null||N===void 0)&&N.length&&(s.initiators=a.initiators),s},create(a){return e.GetInitiatorsResponse.fromPartial(a??{})},fromPartial(a){var N;const s=le();return s.initiators=((N=a.initiators)===null||N===void 0?void 0:N.map(k=>k))||[],s}};class me{constructor(N){this.rpc=N,this.DiscoverTargets=this.DiscoverTargets.bind(this),this.SetNodeAuth=this.SetNodeAuth.bind(this),this.CreateOrUpdateNode=this.CreateOrUpdateNode.bind(this),this.GetNodes=this.GetNodes.bind(this),this.GetSession=this.GetSession.bind(this),this.DeleteNode=this.DeleteNode.bind(this),this.PerformLogin=this.PerformLogin.bind(this),this.PerformLogout=this.PerformLogout.bind(this),this.PerformRescan=this.PerformRescan.bind(this),this.GetInitiators=this.GetInitiators.bind(this)}DiscoverTargets(N,s,k){return this.rpc.unary(e.ISCSIServiceDiscoverTargetsDesc,e.DiscoverTargetsRequest.fromPartial(N),s,k)}SetNodeAuth(N,s,k){return this.rpc.unary(e.ISCSIServiceSetNodeAuthDesc,e.SetAuthRequest.fromPartial(N),s,k)}CreateOrUpdateNode(N,s,k){return this.rpc.unary(e.ISCSIServiceCreateOrUpdateNodeDesc,e.CreateOrUpdateNodeRequest.fromPartial(N),s,k)}GetNodes(N,s,k){return this.rpc.unary(e.ISCSIServiceGetNodesDesc,y.Empty.fromPartial(N),s,k)}GetSession(N,s,k){return this.rpc.unary(e.ISCSIServiceGetSessionDesc,y.Empty.fromPartial(N),s,k)}DeleteNode(N,s,k){return this.rpc.unary(e.ISCSIServiceDeleteNodeDesc,e.NodeOperationRequest.fromPartial(N),s,k)}PerformLogin(N,s,k){return this.rpc.unary(e.ISCSIServicePerformLoginDesc,e.NodeOperationRequest.fromPartial(N),s,k)}PerformLogout(N,s,k){return this.rpc.unary(e.ISCSIServicePerformLogoutDesc,e.NodeOperationRequest.fromPartial(N),s,k)}PerformRescan(N,s,k){return this.rpc.unary(e.ISCSIServicePerformRescanDesc,y.Empty.fromPartial(N),s,k)}GetInitiators(N,s,k){return this.rpc.unary(e.ISCSIServiceGetInitiatorsDesc,y.Empty.fromPartial(N),s,k)}}e.ISCSIServiceClientImpl=me,e.ISCSIServiceDesc={serviceName:"cloud.lazycat.apis.common.ISCSIService"},e.ISCSIServiceDiscoverTargetsDesc={methodName:"DiscoverTargets",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return e.DiscoverTargetsRequest.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.DiscoverTargetsResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServiceSetNodeAuthDesc={methodName:"SetNodeAuth",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return e.SetAuthRequest.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.CommonResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServiceCreateOrUpdateNodeDesc={methodName:"CreateOrUpdateNode",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return e.CreateOrUpdateNodeRequest.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.CommonResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServiceGetNodesDesc={methodName:"GetNodes",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return y.Empty.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.GetNodesResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServiceGetSessionDesc={methodName:"GetSession",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return y.Empty.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.GetSessionResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServiceDeleteNodeDesc={methodName:"DeleteNode",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return e.NodeOperationRequest.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.CommonResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServicePerformLoginDesc={methodName:"PerformLogin",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return e.NodeOperationRequest.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.CommonResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServicePerformLogoutDesc={methodName:"PerformLogout",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return e.NodeOperationRequest.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.CommonResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServicePerformRescanDesc={methodName:"PerformRescan",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return y.Empty.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.CommonResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}},e.ISCSIServiceGetInitiatorsDesc={methodName:"GetInitiators",service:e.ISCSIServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return y.Empty.encode(this).finish()}},responseType:{deserializeBinary(a){const N=e.GetInitiatorsResponse.decode(a);return Object.assign(Object.assign({},N),{toObject(){return N}})}}};class he{constructor(N,s){this.host=N,this.options=s}unary(N,s,k,I){var U;const te=Object.assign(Object.assign({},s),N.requestType),x=k&&this.options.metadata?new o.BrowserHeaders(Object.assign(Object.assign({},(U=this.options)===null||U===void 0?void 0:U.metadata.headersMap),k==null?void 0:k.headersMap)):k??this.options.metadata;return new Promise((fe,b)=>{var q;const X=t.grpc.unary(N,Object.assign(Object.assign({request:te,host:this.host,metadata:x??{}},this.options.transport!==void 0?{transport:this.options.transport}:{}),{debug:(q=this.options.debug)!==null&&q!==void 0?q:!1,onEnd:function(ae){if(ae.status===t.grpc.Code.OK)fe(ae.message.toObject());else{const oe=new ee(ae.statusMessage,ae.status,ae.trailers);b(oe)}}}));I&&I.addEventListener("abort",()=>{X.close(),b(I.reason)})})}}e.GrpcWebImpl=he;const Se=(()=>{if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof commonjsGlobal<"u")return commonjsGlobal;throw"Unable to locate global object"})();r.default.util.Long!==i.default&&(r.default.util.Long=i.default,r.default.configure());function M(a){return a!=null}class ee extends Se.Error{constructor(N,s,k){super(N),this.code=s,this.metadata=k}}e.GrpcWebError=ee})(iscsi);var notification={};(function(e){var n=commonjsGlobal&&commonjsGlobal.__importDefault||function(F){return F&&F.__esModule?F:{default:F}};Object.defineProperty(e,"__esModule",{value:!0}),e.GrpcWebError=e.GrpcWebImpl=e.NotificationServiceNotifyDesc=e.NotificationServiceDesc=e.NotificationServiceClientImpl=e.NotifyResponse=e.NotifyRequest=void 0;const t=grpcWebClient_umdExports,o=browserHeaders_umdExports,i=n(umdExports),r=n(minimal);function y(){return{title:"",body:"",deeplinkUrl:void 0}}e.NotifyRequest={encode(F,H=r.default.Writer.create()){return F.title!==""&&H.uint32(10).string(F.title),F.body!==""&&H.uint32(18).string(F.body),F.deeplinkUrl!==void 0&&H.uint32(26).string(F.deeplinkUrl),H},decode(F,H){const J=F instanceof r.default.Reader?F:r.default.Reader.create(F);let W=H===void 0?J.len:J.pos+H;const c=y();for(;J.pos<W;){const C=J.uint32();switch(C>>>3){case 1:if(C!==10)break;c.title=J.string();continue;case 2:if(C!==18)break;c.body=J.string();continue;case 3:if(C!==26)break;c.deeplinkUrl=J.string();continue}if((C&7)===4||C===0)break;J.skipType(C&7)}return c},fromJSON(F){return{title:K(F.title)?String(F.title):"",body:K(F.body)?String(F.body):"",deeplinkUrl:K(F.deeplinkUrl)?String(F.deeplinkUrl):void 0}},toJSON(F){const H={};return F.title!==""&&(H.title=F.title),F.body!==""&&(H.body=F.body),F.deeplinkUrl!==void 0&&(H.deeplinkUrl=F.deeplinkUrl),H},create(F){return e.NotifyRequest.fromPartial(F??{})},fromPartial(F){var H,J,W;const c=y();return c.title=(H=F.title)!==null&&H!==void 0?H:"",c.body=(J=F.body)!==null&&J!==void 0?J:"",c.deeplinkUrl=(W=F.deeplinkUrl)!==null&&W!==void 0?W:void 0,c}};function g(){return{}}e.NotifyResponse={encode(F,H=r.default.Writer.create()){return H},decode(F,H){const J=F instanceof r.default.Reader?F:r.default.Reader.create(F);let W=H===void 0?J.len:J.pos+H;const c=g();for(;J.pos<W;){const C=J.uint32();if((C&7)===4||C===0)break;J.skipType(C&7)}return c},fromJSON(F){return{}},toJSON(F){return{}},create(F){return e.NotifyResponse.fromPartial(F??{})},fromPartial(F){return g()}};class E{constructor(H){this.rpc=H,this.Notify=this.Notify.bind(this)}Notify(H,J,W){return this.rpc.unary(e.NotificationServiceNotifyDesc,e.NotifyRequest.fromPartial(H),J,W)}}e.NotificationServiceClientImpl=E,e.NotificationServiceDesc={serviceName:"cloud.lazycat.apis.localdevice.NotificationService"},e.NotificationServiceNotifyDesc={methodName:"Notify",service:e.NotificationServiceDesc,requestStream:!1,responseStream:!1,requestType:{serializeBinary(){return e.NotifyRequest.encode(this).finish()}},responseType:{deserializeBinary(F){const H=e.NotifyResponse.decode(F);return Object.assign(Object.assign({},H),{toObject(){return H}})}}};class P{constructor(H,J){this.host=H,this.options=J}unary(H,J,W,c){var C;const L=Object.assign(Object.assign({},J),H.requestType),z=W&&this.options.metadata?new o.BrowserHeaders(Object.assign(Object.assign({},(C=this.options)===null||C===void 0?void 0:C.metadata.headersMap),W==null?void 0:W.headersMap)):W??this.options.metadata;return new Promise((Z,S)=>{var T;const A=t.grpc.unary(H,Object.assign(Object.assign({request:L,host:this.host,metadata:z??{}},this.options.transport!==void 0?{transport:this.options.transport}:{}),{debug:(T=this.options.debug)!==null&&T!==void 0?T:!1,onEnd:function(G){if(G.status===t.grpc.Code.OK)Z(G.message.toObject());else{const _=new j(G.statusMessage,G.status,G.trailers);S(_)}}}));c&&c.addEventListener("abort",()=>{A.close(),S(c.reason)})})}}e.GrpcWebImpl=P;const $=(()=>{if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof commonjsGlobal<"u")return commonjsGlobal;throw"Unable to locate global object"})();r.default.util.Long!==i.default&&(r.default.util.Long=i.default,r.default.configure());function K(F){return F!=null}class j extends $.Error{constructor(H,J,W){super(H),this.code=J,this.metadata=W}}e.GrpcWebError=j})(notification),function(e){var n=commonjsGlobal&&commonjsGlobal.__awaiter||function(Se,M,ee,a){function N(s){return s instanceof ee?s:new ee(function(k){k(s)})}return new(ee||(ee=Promise))(function(s,k){function I(x){try{te(a.next(x))}catch(fe){k(fe)}}function U(x){try{te(a.throw(x))}catch(fe){k(fe)}}function te(x){x.done?s(x.value):N(x.value).then(I,U)}te((a=a.apply(Se,M||[])).next())})},t=commonjsGlobal&&commonjsGlobal.__importDefault||function(Se){return Se&&Se.__esModule?Se:{default:Se}};Object.defineProperty(e,"__esModule",{value:!0}),e.grpc=e.isWebShell=e.EndDeviceProxy=e.lzcAPIGateway=void 0;const o=grpcweb,i=end_device,r=users,y=box,g=browseronly,E=peripheral_device,P=package_manager,$=network_manager,K=ingress,j=dialog,F=config,H=photo,J=network,W=contacts,c=device,C=permission,L=file_handler,z=filetrans,Z=localLaunch,S=client,T=remoteInputMethod,A=dlna,G=grpcWebClient_umdExports;Object.defineProperty(e,"grpc",{enumerable:!0,get:function(){return G.grpc}});const _=t(require$$23),O=devopt,l=message,d=remoteControl,f=tvos,v=version,B=onewaySync,Y=cloudDriver,w=ble,Q=iscsi,ne=notification,ue={transport:G.grpc.CrossBrowserHttpTransport({withCredentials:!0}),debug:!1};class de{constructor(M="/_lzc/runtime/grpc/",ee=!1){M=M.replace(/\/+$/,""),this.host=M,ue.debug=ee;const a=new o.GrpcWebImpl(M,ue);this.devices=new i.EndDeviceServiceClientImpl(a),this.users=new r.UserManagerClientImpl(a),this.bo=new g.BrowserOnlyProxyClientImpl(a),this._session=this.bo.QuerySessionInfo({}),this.appinfo=this.bo.QueryAppInfo({}),this.pkgm=new P.PackageManagerClientImpl(a),this.pd=new E.PeripheralDeviceServiceClientImpl(a),this.iscsi=new Q.ISCSIServiceClientImpl(a),this.ac=new K.AccessControlerServiceClientImpl(a),this.box=new y.BoxServiceClientImpl(a),this.nm=new $.NetworkManagerClientImpl(a),this.rmp=new A.RemoteMediaPlayerServiceClientImpl(a),this.fileTransfer=new z.FileTransferServiceClientImpl(a),this.devopt=new O.DevOptServiceClientImpl(a),this.message=new l.MessageServiceClientImpl(a),this.tvos=new f.TvOSClientImpl(a),this.version=new v.VersionInfoServiceClientImpl(a),this.contacts=new W.ContactsManagerClientImpl(a),me(this.bo)}openDevices(){return n(this,void 0,void 0,function*(){return new Promise((M,ee)=>{this.bo.PairAllDevices({}).subscribe({error:a=>ee(a),complete:()=>M()})})})}getDeviceProxy(M,ee=void 0){return n(this,void 0,void 0,function*(){const a=(yield this.getDeviceURL(M)).toString().replace(/\/+$/,""),N=yield this.requestAuthToken(this,a),s=ee??new G.grpc.Metadata;s.set("lzc_dapi_auth_token",N);const k=new o.GrpcWebImpl(a,Object.assign(Object.assign({},ue),{metadata:s}));return new le(k)})}getDeviceURL(M){return n(this,void 0,void 0,function*(){let ee=yield this.session;return new URL((yield this.devices.ListEndDevices({uid:ee.uid})).devices.find(a=>a.uniqueDeivceId==M).deviceApiUrl)})}currentDeviceURL(M=this){return n(this,void 0,void 0,function*(){let ee=yield M.session,a=ee.uid,s=(yield M.devices.ListEndDevices({uid:a})).devices.find(k=>k.uniqueDeivceId==ee.deviceId);return new URL(s.deviceApiUrl)})}get session(){return new Promise(M=>{this._session=this.bo.QuerySessionInfo({}),M(this._session)})}requestAuthToken(M,ee){return n(this,void 0,void 0,function*(){const a=yield fetch("/_lzc/deviceapi_auth_token",{method:"POST",body:ee});if(!a.ok)throw new Error(`${a.status}: ${a.statusText}`);const N=yield a.json(),s=N.Token,k=N.Deadline;if(M.deviceApiTokenDeadline=Date.parse(k),s===void 0)throw new Error(`Token not set: ${N}`);return s})}get currentDevice(){if(this._currentDevice&&Date.now()<this.deviceApiTokenDeadline)return new Promise(ee=>ee(this._currentDevice));function M(ee){return n(this,void 0,void 0,function*(){return(yield ee.currentDeviceURL(ee)).toString().replace(/\/+$/,"")})}return new Promise(ee=>n(this,void 0,void 0,function*(){const a=yield M(this),N=yield this.requestAuthToken(this,a);this.authToken=N;const s=new G.grpc.Metadata;s.set("lzc_dapi_auth_token",N);const k=new o.GrpcWebImpl(a,Object.assign(Object.assign({},ue),{metadata:s}));this._currentDevice=new le(k),ee(this._currentDevice)}))}}e.lzcAPIGateway=de;class le{constructor(M){this.dialog=new j.DialogManagerClientImpl(M),this.config=new F.UserConfigClientImpl(M),this.photolibrary=new H.PhotoLibraryClientImpl(M),this.network=new J.NetworkManagerClientImpl(M),this.device=new c.DeviceServiceClientImpl(M),this.fileHandler=new L.FileHandlerClientImpl(M),this.permission=new C.PermissionManagerClientImpl(M),this.localLaunch=new Z.LocalLaunchServiceClientImpl(M),this.client=new S.ClientClientImpl(M),this.rim=new T.RimClientImpl(M),this.remoteControl=new d.RemoteControlClientImpl(M),this.contact=new W.ContactsManagerClientImpl(M),this.cloudDriver=new Y.CloudDriverClientImpl(M),this.onewaysync=new B.OnewaySyncClientImpl(M),this.ble=new w.BleManagerClientImpl(M),this.notification=new ne.NotificationServiceClientImpl(M)}}e.EndDeviceProxy=le;function me(Se){return n(this,void 0,void 0,function*(){function M(a,N){console.log(`%c ${a} %c ${N} %c`,"background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:#3488ff; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;","background:transparent")}M(`The ${_.default.name} version is`,`${_.default.version}`);let ee=yield Se.QueryAPIServerInfo({});M("LZC SDK Version is",`${ee.frontendVersion}`)})}function he(){return navigator.userAgent.indexOf("Lazycat")!=-1}e.isWebShell=he}(dist);const grpc=new dist.lzcAPIGateway("/_lzc/runtime/grpc/"),getBoxName=async()=>(await grpc.box.QueryInfo({})).boxName;async function getFileDomain(e){if(e)return`file.${e}.heiyu.space`;try{const n=await grpc.pkgm.QueryApplication({deployIds:["cloud.lazycat.shell.files"]}),[t]=n.infoList;return t.domain}catch{return`file.${await getBoxName()}.heiyu.space`}}const _hoisted_1=["src"],_sfc_main=defineComponent({__name:"FilePicker.ce",props:{boxId:{default:"",type:String},type:{default:filePickerType.directory,type:String},title:{type:String},rootpath:{type:String},rootname:{type:String},source:{type:Array},accept:{type:String},extname:{type:String},filterSelectVisible:{type:Boolean,default:!1},confirmButtonTitle:{type:String},tableList:{type:Array},multiple:{type:Boolean,default:void 0},isModal:{type:Boolean,default:void 0},choiceFileOnly:{type:Boolean,default:void 0},choiceDirOnly:{type:Boolean,default:void 0},ignorePath:{type:Array}},emits:["submit","close"],setup(e,{emit:n}){const t=n,o=e,i=ref(""),r=computed(()=>`${y.value}/#/filepicker2`),y=computed(()=>`https://${i.value}`),g=computed(()=>{console.log("props=====>",o);const j=encodeURIComponent(JSON.stringify(o));return console.log("JSON.stringify(props)====",j),r.value+`?props=${j}`}),E=ref(),P=ref(),$=computed(()=>K()?{width:"100%",height:"100%",background:"white"}:{width:"100%",height:"100%"});window.addEventListener("message",j=>{j.data.origin===window.origin&&(j.data.type==="close"?t("close"):j.data.type==="submit"?t("submit",j.data.fileList,j.data.source):j.data.type==="init"&&clearInterval(P.value))});function K(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}return onBeforeMount(async()=>{const j=await getFileDomain(o.boxId);j&&(i.value=j)}),onMounted(()=>{P.value=setInterval(()=>{E.value.contentWindow.postMessage({type:"init"},y.value)},500)}),(j,F)=>i.value?(openBlock(),createElementBlock("iframe",{key:0,id:"iframe",ref_key:"ifr",ref:E,style:normalizeStyle($.value),src:g.value,frameborder:"0"},null,12,_hoisted_1)):createCommentVNode("",!0)}}),filePicker=defineCustomElement(_sfc_main);customElements.define("lzc-file-picker",filePicker),exports.FilePicker=_sfc_main,exports.filePickerType=filePickerType,exports.tableListType=tableListType,Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=lzc-file-pickers.umd.js.map

;
(function () {
  const DEFAULT_CONFIG = {
    diskRoot: "/_lzc/files/home",
    fallbackMime: "application/octet-stream",
    locale: "auto",
    text: {},
    hooks: {
      fileSystemAccess: true,
      fileInput: true,
    },
  };

  const PICKER_TAG = "lzc-file-picker";

  const INJECT_PARAMS = (() => {
    try {
      return typeof ctx === "object" &&
        ctx &&
        typeof ctx.params === "object" &&
        ctx.params
        ? ctx.params
        : {};
    } catch (error) {
      return {};
    }
  })();

  const CONFIG = {
    ...DEFAULT_CONFIG,
    ...INJECT_PARAMS,
    hooks: {
      ...DEFAULT_CONFIG.hooks,
      ...(typeof INJECT_PARAMS.hooks === "object" && INJECT_PARAMS.hooks
        ? INJECT_PARAMS.hooks
        : {}),
    },
  };

  const HOOK_STATE_KEY = "__lzcOpenSaveChooserHooks";
  const HOOK_STATE = (() => {
    const existing = window[HOOK_STATE_KEY];
    if (existing) {
      existing.choosing ??= false;
      existing.inputChoosing ??= false;
      existing.anchorChoosing ??= false;
      existing.bypassInputClick ??= false;
      existing.bypassAnchorClick ??= false;
      existing.originalShowOpenFilePicker ??=
        window.showOpenFilePicker?.bind(window);
      existing.originalShowSaveFilePicker ??=
        window.showSaveFilePicker?.bind(window);
      existing.originalInputClick ??= HTMLInputElement.prototype.click;
      existing.originalAnchorClick ??= HTMLAnchorElement.prototype.click;
      return existing;
    }

    const state = {
      choosing: false,
      inputChoosing: false,
      anchorChoosing: false,
      bypassInputClick: false,
      bypassAnchorClick: false,
      originalShowOpenFilePicker: window.showOpenFilePicker?.bind(window),
      originalShowSaveFilePicker: window.showSaveFilePicker?.bind(window),
      originalInputClick: HTMLInputElement.prototype.click,
      originalAnchorClick: HTMLAnchorElement.prototype.click,
    };
    window[HOOK_STATE_KEY] = state;
    return state;
  })();

  const STATE = {
    modal: null,
    modalAbort: null,
    hooks: HOOK_STATE,
  };

  const DEFAULT_TEXT = {
    "zh-CN": {
      openTitle: "打开",
      saveTitle: "保存",
      openLocal: "从本地打开",
      openLazyCat: "从懒猫打开",
      saveLocal: "保存至本地",
      saveLazyCat: "保存至懒猫",
      cancel: "取消",
    },
    "en-US": {
      openTitle: "Open",
      saveTitle: "Save",
      openLocal: "Open from local device",
      openLazyCat: "Open from LazyCat",
      saveLocal: "Save to local device",
      saveLazyCat: "Save to LazyCat",
      cancel: "Cancel",
    },
  };

  const resolveLocale = () => {
    const rawLocale =
      CONFIG.locale === "auto" || !CONFIG.locale
        ? navigator.language || navigator.userLanguage || "en-US"
        : String(CONFIG.locale);
    return rawLocale.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
  };

  const resolveText = () => {
    const locale = resolveLocale();
    const paramsText =
      typeof CONFIG.text === "object" && CONFIG.text ? CONFIG.text : {};
    const localeText =
      typeof paramsText[locale] === "object" && paramsText[locale]
        ? paramsText[locale]
        : {};
    const flatText = Object.fromEntries(
      Object.entries(paramsText).filter(([, value]) => typeof value === "string"),
    );

    return {
      ...DEFAULT_TEXT[locale],
      ...localeText,
      ...flatText,
    };
  };

  const TEXT = resolveText();


  const MIME_BY_EXTENSION = {
    avif: "image/avif",
    bmp: "image/bmp",
    csv: "text/csv",
    gif: "image/gif",
    htm: "text/html",
    html: "text/html",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    js: "text/javascript",
    json: "application/json",
    md: "text/markdown",
    mjs: "text/javascript",
    pdf: "application/pdf",
    png: "image/png",
    svg: "image/svg+xml",
    txt: "text/plain",
    webp: "image/webp",
    xml: "application/xml",
    zip: "application/zip",
  };

  const ensureStyles = () => {
    if (document.getElementById("lzc-open-save-chooser-style")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "lzc-open-save-chooser-style";
    style.textContent = `
      .lzc-open-save-chooser {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: rgba(15, 23, 42, 0.36);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      .lzc-open-save-chooser__dialog {
        width: min(360px, calc(100vw - 32px));
        padding: 16px;
        color: #1f2937;
        background: #fff;
        border: 1px solid rgba(15, 23, 42, 0.12);
        border-radius: 8px;
        box-shadow: 0 18px 50px rgba(15, 23, 42, 0.22);
      }

      .lzc-open-save-chooser__title {
        margin: 0 0 12px;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
      }

      .lzc-open-save-chooser__actions {
        display: grid;
        gap: 8px;
      }

      .lzc-open-save-chooser__button {
        width: 100%;
        min-height: 40px;
        padding: 9px 12px;
        color: #111827;
        background: #f8fafc;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font: inherit;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
      }

      .lzc-open-save-chooser__button:hover,
      .lzc-open-save-chooser__button:focus-visible {
        background: #eef2ff;
        border-color: #6366f1;
        outline: none;
      }

      .lzc-open-save-chooser__cancel {
        margin-top: 10px;
        width: 100%;
        min-height: 36px;
        padding: 8px 12px;
        color: #4b5563;
        background: transparent;
        border: 0;
        border-radius: 6px;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
      }

      .lzc-open-save-chooser__cancel:hover,
      .lzc-open-save-chooser__cancel:focus-visible {
        background: #f3f4f6;
        outline: none;
      }
    `;
    document.head.appendChild(style);
  };

  const closeModal = () => {
    if (!STATE.modal) {
      return;
    }

    STATE.modal.remove();
    STATE.modal = null;
    STATE.modalAbort = null;
    document.removeEventListener("keydown", onModalKeydown, true);
  };

  function onModalKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      STATE.modalAbort?.();
    }
  }

  const showChoiceModal = ({ title, choices }) =>
    new Promise((resolve, reject) => {
      closeModal();
      ensureStyles();

      const abort = () => {
        closeModal();
        reject(createAbortError());
      };

      const overlay = document.createElement("div");
      overlay.className = "lzc-open-save-chooser";
      overlay.setAttribute("role", "presentation");

      const dialog = document.createElement("div");
      dialog.className = "lzc-open-save-chooser__dialog";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-label", title);

      const heading = document.createElement("h2");
      heading.className = "lzc-open-save-chooser__title";
      heading.textContent = title;
      dialog.appendChild(heading);

      const actions = document.createElement("div");
      actions.className = "lzc-open-save-chooser__actions";

      for (const choice of choices) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lzc-open-save-chooser__button";
        button.textContent = choice.label;
        button.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          closeModal();
          try {
            resolve(choice.onSelect());
          } catch (error) {
            reject(error);
          }
        });
        actions.appendChild(button);
      }

      dialog.appendChild(actions);

      const cancel = document.createElement("button");
      cancel.type = "button";
      cancel.className = "lzc-open-save-chooser__cancel";
      cancel.textContent = TEXT.cancel;
      cancel.addEventListener("click", abort);
      dialog.appendChild(cancel);

      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          abort();
        }
      });

      overlay.appendChild(dialog);
      document.body.appendChild(overlay);
      STATE.modal = overlay;
      STATE.modalAbort = abort;
      document.addEventListener("keydown", onModalKeydown, true);

      const firstAction = overlay.querySelector(
        ".lzc-open-save-chooser__button",
      );
      if (firstAction) {
        firstAction.focus();
      }
    });

  const createAbortError = () => {
    try {
      return new DOMException("The user aborted a request.", "AbortError");
    } catch (error) {
      const abortError = new Error("The user aborted a request.");
      abortError.name = "AbortError";
      return abortError;
    }
  };

  const waitForLazyCatPicker = async () => {
    if (!customElements.get(PICKER_TAG)) {
      await customElements.whenDefined(PICKER_TAG);
    }
  };

  const hasLazyCatPicker = () => Boolean(customElements.get(PICKER_TAG));

  const setPickerProp = (picker, key, value) => {
    if (value !== undefined) {
      picker[key] = value;
    }
  };

  const parsePickerEventDetail = (event) => {
    const detail = Array.isArray(event?.detail)
      ? event.detail
      : [event?.detail];
    return {
      fileList: detail[0],
      source: detail[1],
    };
  };

  const parsePickerStats = (rawFileList) => {
    let fileList = rawFileList;
    if (typeof fileList === "string") {
      try {
        fileList = JSON.parse(fileList);
      } catch (error) {
        throw new Error("Failed to parse LazyCat picker result.");
      }
    }

    if (Array.isArray(fileList)) {
      return fileList.filter(Boolean);
    }

    return [fileList].filter(Boolean);
  };

  const createPicker = async (props = {}) => {
    await waitForLazyCatPicker();

    const picker = document.createElement(PICKER_TAG);
    for (const [key, value] of Object.entries(props)) {
      setPickerProp(picker, key, value);
    }
    picker.style.position = "fixed";
    picker.style.inset = "0";
    picker.style.zIndex = "2147483647";
    document.body.appendChild(picker);

    return picker;
  };

  const statToPath = (stat) => stat?.filename || stat?.basename || "";

  const statToName = (stat) => {
    const filename = statToPath(stat);
    const parts = filename.split("/");
    return parts[parts.length - 1] || stat?.basename || "untitled";
  };

  const getExtension = (name) => {
    const baseName = name.split("/").pop() || name;
    const dotIndex = baseName.lastIndexOf(".");
    if (dotIndex <= 0 || dotIndex === baseName.length - 1) {
      return "";
    }
    return baseName.slice(dotIndex + 1).toLowerCase();
  };

  const normalizeExtension = (extension) =>
    String(extension || "")
      .trim()
      .replace(/^\./, "")
      .toLowerCase();

  const joinLazyCatPath = (directoryPath, fileName) => {
    const normalizedDirectory = String(directoryPath || "").trim();
    const normalizedFileName = String(fileName || "")
      .trim()
      .replace(/^\/+/, "");

    if (!normalizedFileName) {
      return normalizedDirectory || "/";
    }
    if (!normalizedDirectory || normalizedDirectory === "/") {
      return `/${normalizedFileName}`;
    }
    return `${normalizedDirectory.replace(/\/+$/, "")}/${normalizedFileName}`;
  };

  const inferAcceptDetails = (options = {}) => {
    const details = {
      mimeTypes: [],
      extensions: [],
      preferredMime: "",
      preferredExtension: "",
    };

    for (const type of options.types || []) {
      for (const [mimeType, extensions] of Object.entries(type.accept || {})) {
        if (mimeType && mimeType !== "*/*" && !mimeType.endsWith("/*")) {
          details.mimeTypes.push(mimeType);
        }

        for (const extension of extensions || []) {
          const normalized = normalizeExtension(extension);
          if (normalized) {
            details.extensions.push(normalized);
          }
        }
      }
    }

    details.preferredMime = details.mimeTypes[0] || "";
    details.preferredExtension = details.extensions[0] || "";
    return details;
  };

  const toPickerFilterString = (values) => {
    const seen = new Set();
    const normalizedValues = [];

    for (const value of values) {
      const normalized = String(value || "").trim();
      if (!normalized || seen.has(normalized)) {
        continue;
      }
      seen.add(normalized);
      normalizedValues.push(normalized);
    }

    return normalizedValues.length ? normalizedValues.join(",") : undefined;
  };

  const pickerFiltersFromOptions = (options = {}) => {
    const mimeTypes = [];
    const extensions = [];

    for (const type of options.types || []) {
      for (const [mimeType, acceptedExtensions] of Object.entries(
        type.accept || {},
      )) {
        if (mimeType && mimeType !== "*/*") {
          mimeTypes.push(mimeType);
        }

        for (const extension of acceptedExtensions || []) {
          const normalized = normalizeExtension(extension);
          if (normalized) {
            extensions.push(normalized);
          }
        }
      }
    }

    return {
      accept: toPickerFilterString(mimeTypes),
      extname: toPickerFilterString(extensions),
    };
  };

  const optionsFromInputAccept = (accept) => {
    const mimeAccept = {};
    const extensionAccept = [];

    for (const value of accept
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)) {
      if (value.startsWith(".")) {
        extensionAccept.push(value);
        continue;
      }

      mimeAccept[value] = [];
    }

    if (extensionAccept.length) {
      mimeAccept["*/*"] = extensionAccept;
    }

    return Object.keys(mimeAccept).length
      ? {
          types: [
            {
              accept: mimeAccept,
            },
          ],
        }
      : {};
  };

  const pickerFiltersFromInputAccept = (accept) => {
    const mimeTypes = [];
    const extensions = [];

    for (const value of String(accept || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)) {
      if (value.startsWith(".")) {
        const normalized = normalizeExtension(value);
        if (normalized) {
          extensions.push(normalized);
        }
        continue;
      }

      mimeTypes.push(value);
    }

    return {
      accept: toPickerFilterString(mimeTypes),
      extname: toPickerFilterString(extensions),
    };
  };

  const inferMimeFromFileName = (name, acceptDetails = {}) => {
    const extension = getExtension(name);
    if (!extension) {
      return "";
    }

    for (const type of acceptDetails.mimeTypes || []) {
      const accept = (acceptDetails.options?.types || []).find(
        (item) => item.accept?.[type],
      );
      const extensions = accept?.accept?.[type] || [];
      if (
        extensions.some(
          (candidate) => normalizeExtension(candidate) === extension,
        )
      ) {
        return type;
      }
    }

    return MIME_BY_EXTENSION[extension] || "";
  };

  const chooseMimeType = ({ blob, fileName, options }) => {
    const acceptDetails = inferAcceptDetails(options);
    return (
      blob?.type ||
      inferMimeFromFileName(fileName, {
        ...acceptDetails,
        options,
      }) ||
      acceptDetails.preferredMime ||
      CONFIG.fallbackMime
    );
  };

  const removeTrailingDot = (value) =>
    typeof value === "string" && value.endsWith(".")
      ? value.slice(0, -1)
      : value;

  const normalizeLazyCatSaveStat = (stat) => {
    if (!stat || typeof stat !== "object") {
      return stat;
    }

    return {
      ...stat,
      filename: removeTrailingDot(stat.filename),
      basename: removeTrailingDot(stat.basename),
    };
  };

  const readLazyCatFile = async (path) => {
    const response = await fetch(`${CONFIG.diskRoot}${path}`);
    if (!response.ok) {
      throw new Error(`Failed to read LazyCat file: ${response.status}`);
    }
    return response.blob();
  };

  const writeLazyCatFile = async ({ path, chunks, mimeType }) => {
    const blob = new Blob(chunks, {
      type: mimeType || CONFIG.fallbackMime,
    });
    const response = await fetch(`${CONFIG.diskRoot}${path}`, {
      method: "PUT",
      headers: {
        "content-type": blob.type || CONFIG.fallbackMime,
      },
      body: blob,
    });
    if (!response.ok) {
      throw new Error(`Failed to write LazyCat file: ${response.status}`);
    }
  };

  const createLazyCatOpenHandle = (stat, options) => {
    const path = statToPath(stat);
    const name = statToName(stat);

    return {
      kind: "file",
      name,
      async getFile() {
        const blob = await readLazyCatFile(path);
        return new File([blob], name, {
          type: chooseMimeType({ blob, fileName: name, options }),
          lastModified: Date.now(),
        });
      },
      async isSameEntry(other) {
        return Boolean(other && other.__lazyCatPath === path);
      },
      __lazyCatPath: path,
    };
  };

  const createLazyCatSaveHandle = (stat, options) => {
    const path = statToPath(stat);
    const name = statToName(stat);

    return {
      kind: "file",
      name,
      async getFile() {
        const blob = await readLazyCatFile(path);
        return new File([blob], name, {
          type: chooseMimeType({ blob, fileName: name, options }),
          lastModified: Date.now(),
        });
      },
      async createWritable() {
        const chunks = [];
        let writtenMimeType = "";

        const writeChunk = async (data) => {
          if (data && typeof data === "object" && "type" in data) {
            if (data.type === "seek") {
              return;
            }
            if (data.type === "truncate") {
              chunks.length = 0;
              return;
            }
            if (data.type === "write") {
              data = data.data;
            }
          }

          if (data?.type) {
            writtenMimeType = data.type;
          }
          chunks.push(data);
        };

        const stream = new WritableStream({
          write: writeChunk,
          async close() {
            await writeLazyCatFile({
              path,
              chunks,
              mimeType: chooseMimeType({
                blob: writtenMimeType ? { type: writtenMimeType } : null,
                fileName: name,
                options,
              }),
            });
          },
          async abort() {
            chunks.length = 0;
          },
        });

        stream.write = async (data) => {
          const writer = stream.getWriter();
          try {
            await writer.write(data);
          } finally {
            writer.releaseLock();
          }
        };
        stream.close = async () => {
          const writer = stream.getWriter();
          try {
            await writer.close();
          } finally {
            writer.releaseLock();
          }
        };
        stream.abort = async (reason) => {
          const writer = stream.getWriter();
          try {
            await writer.abort(reason);
          } finally {
            writer.releaseLock();
          }
        };

        return stream;
      },
      async isSameEntry(other) {
        return Boolean(other && other.__lazyCatPath === path);
      },
      __lazyCatPath: path,
    };
  };

  const runLazyCatPicker = async (props = {}) => {
    if (!hasLazyCatPicker()) {
      throw new Error("LazyCat picker is unavailable.");
    }

    const picker = await createPicker({
      isModal: true,
      ...props,
    });

    return new Promise((resolve, reject) => {
      const cleanup = () => {
        picker.remove();
      };

      picker.addEventListener(
        "submit",
        (event) => {
          try {
            const { fileList, source } = parsePickerEventDetail(event);
            const stats = parsePickerStats(fileList);
            cleanup();
            resolve({ stats, source });
          } catch (error) {
            cleanup();
            reject(error);
          }
        },
        { once: true },
      );

      picker.addEventListener(
        "close",
        () => {
          cleanup();
          reject(createAbortError());
        },
        { once: true },
      );
    });
  };

  const openLazyCatFilePicker = async (options = {}) => {
    const { stats } = await runLazyCatPicker({
      type: "file",
      title: TEXT.openLazyCat,
      multiple: !!options.multiple,
      choiceFileOnly: true,
      ...pickerFiltersFromOptions(options),
    });
    const handles = stats.map((stat) => createLazyCatOpenHandle(stat, options));
    return options?.multiple ? handles : [handles[0]].filter(Boolean);
  };

  const openLazyCatSavePicker = async (options = {}) => {
    const { stats } = await runLazyCatPicker({
      type: "saveAs",
      title: TEXT.saveLazyCat,
      choiceDirOnly: true,
    });
    const rawStat = stats[0];
    if (!rawStat) {
      throw createAbortError();
    }

    const targetPath = statToPath(rawStat);
    const saveName = removeTrailingDot(rawStat.saveName);
    const stat = normalizeLazyCatSaveStat({
      ...rawStat,
      basename: saveName || rawStat.basename,
      filename: saveName ? joinLazyCatPath(targetPath, saveName) : targetPath,
      type: "file",
    });

    return createLazyCatSaveHandle(stat, options);
  };

  const chooseOpenTarget = (options) =>
    hasLazyCatPicker()
      ? showChoiceModal({
          title: TEXT.openTitle,
          choices: [
            {
              label: TEXT.openLocal,
              onSelect: () => STATE.hooks.originalShowOpenFilePicker(options),
            },
            {
              label: TEXT.openLazyCat,
              onSelect: () => openLazyCatFilePicker(options),
            },
          ],
        })
      : STATE.hooks.originalShowOpenFilePicker(options);

  const chooseSaveTarget = (options) =>
    hasLazyCatPicker()
      ? showChoiceModal({
          title: TEXT.saveTitle,
          choices: [
            {
              label: TEXT.saveLocal,
              onSelect: () => STATE.hooks.originalShowSaveFilePicker(options),
            },
            {
              label: TEXT.saveLazyCat,
              onSelect: () => openLazyCatSavePicker(options),
            },
          ],
        })
      : STATE.hooks.originalShowSaveFilePicker(options);

  const isDownloadAnchor = (anchor) =>
    anchor instanceof HTMLAnchorElement &&
    Boolean(anchor.download) &&
    anchor.href.startsWith("blob:");

  const saveDownloadAnchorToLazyCat = async (anchor) => {
    const response = await fetch(anchor.href);
    if (!response.ok) {
      throw new Error(`Failed to read download blob: ${response.status}`);
    }

    const blob = await response.blob();
    const handle = await openLazyCatSavePicker();
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
    URL.revokeObjectURL(anchor.href);
  };

  const chooseDownloadTarget = (anchor) =>
    hasLazyCatPicker()
      ? showChoiceModal({
          title: TEXT.saveTitle,
          choices: [
            {
              label: TEXT.saveLocal,
              onSelect: () => STATE.hooks.originalAnchorClick.call(anchor),
            },
            {
              label: TEXT.saveLazyCat,
              onSelect: () => saveDownloadAnchorToLazyCat(anchor),
            },
          ],
        })
      : STATE.hooks.originalAnchorClick.call(anchor);

  const getFileInputFromEventTarget = (target) => {
    const element = target instanceof Element ? target : null;
    if (!element) {
      return null;
    }

    const input = element.closest?.("input[type='file']");
    if (input instanceof HTMLInputElement) {
      return input;
    }

    const label = element.closest?.("label");
    if (!label) {
      return null;
    }

    if (
      label.control instanceof HTMLInputElement &&
      label.control.type === "file"
    ) {
      return label.control;
    }

    return null;
  };

  const createInputFiles = async (stats, input) => {
    const dataTransfer = new DataTransfer();
    const selectedStats = input.multiple ? stats : stats.slice(0, 1);
    const options = input.accept ? optionsFromInputAccept(input.accept) : {};

    for (const stat of selectedStats) {
      const path = statToPath(stat);
      const name = statToName(stat);
      const blob = await readLazyCatFile(path);
      dataTransfer.items.add(
        new File([blob], name, {
          type: chooseMimeType({ blob, fileName: name, options }),
          lastModified: Date.now(),
        }),
      );
    }

    return dataTransfer.files;
  };

  const openLazyCatInputPicker = async (input) => {
    const { stats } = await runLazyCatPicker({
      type: "file",
      title: TEXT.openLazyCat,
      multiple: !!input.multiple,
      choiceFileOnly: true,
      ...pickerFiltersFromInputAccept(input.accept),
    });
    input.files = await createInputFiles(stats, input);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const chooseInputTarget = (input) =>
    hasLazyCatPicker()
      ? showChoiceModal({
          title: TEXT.openTitle,
          choices: [
            {
              label: TEXT.openLocal,
              onSelect: () => {
                STATE.hooks.bypassInputClick = true;
                try {
                  STATE.hooks.originalInputClick.call(input);
                } finally {
                  STATE.hooks.bypassInputClick = false;
                }
              },
            },
            {
              label: TEXT.openLazyCat,
              onSelect: () => openLazyCatInputPicker(input),
            },
          ],
        })
      : (() => {
          STATE.hooks.bypassInputClick = true;
          try {
            return STATE.hooks.originalInputClick.call(input);
          } finally {
            STATE.hooks.bypassInputClick = false;
          }
        })();

  const shouldUseNativeFileInput = (input) =>
    STATE.hooks.bypassInputClick ||
    input.type !== "file" ||
    input.webkitdirectory ||
    !hasLazyCatPicker();

  const shouldUseNativeDownloadAnchor = (anchor) =>
    STATE.hooks.bypassAnchorClick || !isDownloadAnchor(anchor) || !hasLazyCatPicker();

  const interceptFileInput = async (input) => {
    if (shouldUseNativeFileInput(input)) {
      return false;
    }
    if (STATE.hooks.inputChoosing) {
      return true;
    }

    STATE.hooks.inputChoosing = true;
    try {
      await chooseInputTarget(input);
    } catch (error) {
      if (error?.name !== "AbortError") {
        throw error;
      }
    } finally {
      STATE.hooks.inputChoosing = false;
    }
    return true;
  };

  const interceptFileInputSilently = (input) => {
    interceptFileInput(input).catch((error) => {
      if (error?.name !== "AbortError") {
        console.error("LazyCat file input picker failed.", error);
      }
    });
  };

  const interceptDownloadAnchor = async (anchor) => {
    if (shouldUseNativeDownloadAnchor(anchor)) {
      return false;
    }
    if (STATE.hooks.anchorChoosing) {
      return true;
    }

    STATE.hooks.anchorChoosing = true;
    try {
      await chooseDownloadTarget(anchor);
    } catch (error) {
      if (error?.name !== "AbortError") {
        throw error;
      }
    } finally {
      STATE.hooks.anchorChoosing = false;
    }
    return true;
  };

  const interceptDownloadAnchorSilently = (anchor) => {
    interceptDownloadAnchor(anchor).catch((error) => {
      if (error?.name !== "AbortError") {
        console.error("LazyCat download picker failed.", error);
      }
    });
  };

  const installFilePickerHooks = () => {
    if (
      CONFIG.hooks.fileSystemAccess &&
      STATE.hooks.originalShowOpenFilePicker &&
      !window.showOpenFilePicker?.__lzcHooked
    ) {
      const hookedShowOpenFilePicker = async (options) => {
        if (STATE.hooks.choosing) {
          return STATE.hooks.originalShowOpenFilePicker(options);
        }

        STATE.hooks.choosing = true;
        try {
          return await chooseOpenTarget(options);
        } finally {
          STATE.hooks.choosing = false;
        }
      };
      hookedShowOpenFilePicker.__lzcHooked = true;
      window.showOpenFilePicker = hookedShowOpenFilePicker;
    }

    if (
      CONFIG.hooks.fileSystemAccess &&
      STATE.hooks.originalShowSaveFilePicker &&
      !window.showSaveFilePicker?.__lzcHooked
    ) {
      const hookedShowSaveFilePicker = async (options) => {
        if (STATE.hooks.choosing) {
          return STATE.hooks.originalShowSaveFilePicker(options);
        }

        STATE.hooks.choosing = true;
        try {
          return await chooseSaveTarget(options);
        } finally {
          STATE.hooks.choosing = false;
        }
      };
      hookedShowSaveFilePicker.__lzcHooked = true;
      window.showSaveFilePicker = hookedShowSaveFilePicker;
    }
  };

  const installFileInputHooks = () => {
    if (
      !CONFIG.hooks.fileInput ||
      HTMLInputElement.prototype.click.__lzcHooked
    ) {
      return;
    }

    const hookedClick = function () {
      if (this instanceof HTMLInputElement && this.type === "file") {
        if (shouldUseNativeFileInput(this)) {
          return STATE.hooks.originalInputClick.call(this);
        }
        interceptFileInputSilently(this);
        return;
      }

      return STATE.hooks.originalInputClick.call(this);
    };
    hookedClick.__lzcHooked = true;
    HTMLInputElement.prototype.click = hookedClick;

    document.addEventListener(
      "click",
      (event) => {
        const input = getFileInputFromEventTarget(event.target);
        if (!input || shouldUseNativeFileInput(input)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        interceptFileInputSilently(input);
      },
      true,
    );
  };

  const installDownloadAnchorHooks = () => {
    if (HTMLAnchorElement.prototype.click.__lzcHooked) {
      return;
    }

    const hookedClick = function () {
      if (isDownloadAnchor(this)) {
        if (shouldUseNativeDownloadAnchor(this)) {
          return STATE.hooks.originalAnchorClick.call(this);
        }
        interceptDownloadAnchorSilently(this);
        return;
      }

      return STATE.hooks.originalAnchorClick.call(this);
    };
    hookedClick.__lzcHooked = true;
    HTMLAnchorElement.prototype.click = hookedClick;
  };

  installFilePickerHooks();
  installFileInputHooks();
  installDownloadAnchorHooks();
})();
