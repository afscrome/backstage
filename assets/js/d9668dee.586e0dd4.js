/*! For license information please see d9668dee.586e0dd4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[782847],{451939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>f});var n=r(824246),i=r(511151);const o={id:"plugin-tech-insights-node.factretriever",title:"FactRetriever",description:"API reference for FactRetriever"},c=void 0,s={unversionedId:"reference/plugin-tech-insights-node.factretriever",id:"reference/plugin-tech-insights-node.factretriever",title:"FactRetriever",description:"API reference for FactRetriever",source:"@site/../docs/reference/plugin-tech-insights-node.factretriever.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights-node.factretriever",permalink:"/docs/reference/plugin-tech-insights-node.factretriever",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights-node.factretriever.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights-node.factretriever",title:"FactRetriever",description:"API reference for FactRetriever"}},a={},f=[{value:"Properties",id:"properties",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-tech-insights-node"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever",children:(0,n.jsx)(t.code,{children:"FactRetriever"})})]}),"\n",(0,n.jsx)(t.p,{children:"FactRetriever interface"}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface FactRetriever \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.description",children:"description?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:["(Optional)"," A short display description for the fact retriever to be used in the interface."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.entityfilter",children:"entityFilter?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Record<string, string | symbol | (string | symbol)[]>[] | Record<string, string | symbol | (string | symbol)[]>"}),(0,n.jsxs)(t.td,{children:["(Optional)"," An optional object/array of objects of entity filters to indicate if this fact retriever is valid for an entity type. If omitted, the retriever should apply to all entities.","Should be defined for example: { field: 'kind', values: ['component'] } { field: 'metadata.name', values: ['component-1', 'component-2'] }"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.handler",children:"handler"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["(ctx: ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretrievercontext",children:"FactRetrieverContext"}),") => Promise<",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.techinsightfact",children:"TechInsightFact"}),"[]>"]}),(0,n.jsx)(t.td,{children:"Handler function that needs to be implemented to retrieve fact values for entities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.id",children:"id"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A unique identifier of the retriever. Used to identify and store individual facts returned from this retriever and schemas defined by this retriever."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.schema",children:"schema"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-common.factschema",children:"FactSchema"})}),(0,n.jsx)(t.td,{children:"A fact schema defining the shape of data returned from the handler method for each entity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.title",children:"title?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:["(Optional)"," A short display title for the fact retriever to be used in the interface"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factretriever.version",children:"version"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:["Semver string indicating the version of this fact retriever This version is used to determine if the schema this fact retriever matches the data this fact retriever provides.","Should be incremented on changes to returned data from the handler or if the schema changes."]})]})]})]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in o=Object(arguments[a]))r.call(o,f)&&(s[f]=o[f]);if(t){c=t(o);for(var u=0;u<c.length;u++)n.call(o,c[u])&&(s[c[u]]=o[c[u]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,o={},f=null,u=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:f,ref:u,props:o,_owner:c.current}}t.jsx=f,t.jsxs=f},541535:(e,t,r)=>{var n=r(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,s=60110,a=60112;t.Suspense=60113;var f=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;i=l("react.element"),o=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),c=l("react.provider"),s=l("react.context"),a=l("react.forward_ref"),t.Suspense=l("react.suspense"),f=l("react.memo"),u=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||p}function g(){}function j(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var m=j.prototype=new g;m.constructor=j,n(m,v.prototype),m.isPureReactComponent=!0;var x={current:null},b=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,o={},c=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)b.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var f=Array(a),u=0;u<a;u++)f[u]=arguments[u+2];o.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:s,props:o,_owner:x.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var w=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case o:a=!0}}if(a)return c=c(a=e),e=""===n?"."+S(a,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),R(c,t,r,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var u=n+S(s=e[f],f);a+=R(s,t,r,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),f=0;!(s=e.next()).done;)a+=R(s=s.value,t,r,u=n+S(s,f++),c);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function C(e,t,r){if(null==e)return e;var n=[],i=0;return R(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(h(143));return e}},t.Component=v,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(u in t)b.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==f?f[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){f=Array(u);for(var l=0;l<u;l++)f[l]=arguments[l+2];o.children=f}return{$$typeof:i,type:e.type,key:c,ref:s,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>o});var n=r(667294);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:o(e),n.createElement(i.Provider,{value:s},t)}}}]);