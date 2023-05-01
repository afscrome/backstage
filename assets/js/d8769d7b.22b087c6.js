/*! For license information please see d8769d7b.22b087c6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[896823],{319732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(824246),i=t(511151);const o={id:"index",title:"Building Backends",sidebar_label:"Overview",description:"Building backends using the new backend system"},a=void 0,s={unversionedId:"backend-system/building-backends/index",id:"backend-system/building-backends/index",title:"Building Backends",description:"Building backends using the new backend system",source:"@site/../docs/backend-system/building-backends/01-index.md",sourceDirName:"backend-system/building-backends",slug:"/backend-system/building-backends/index",permalink:"/docs/backend-system/building-backends/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-backends/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Building Backends",sidebar_label:"Overview",description:"Building backends using the new backend system"},sidebar:"docs",previous:{title:"Naming Patterns",permalink:"/docs/backend-system/architecture/naming-patterns"},next:{title:"Migration Guide",permalink:"/docs/backend-system/building-backends/migrating"}},c={},l=[{value:"Customization",id:"customization",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Services",id:"services",level:3},{value:"Custom Service Implementations",id:"custom-service-implementations",level:3},{value:"Split Into Multiple Backends",id:"split-into-multiple-backends",level:2},{value:"Shared Environments",id:"shared-environments",level:3}];function d(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",h1:"h1",code:"code",pre:"pre",h2:"h2",h3:"h3"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NOTE: If you have an existing backend that is not yet using the new backend\nsystem, see ",(0,r.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"migrating"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This section covers how to set up and customize your own Backstage backend. It covers some aspects of how backend instances fit into the larger system, but for a more in-depth explanation of the role of backends in the backend system, see ",(0,r.jsx)(n.a,{href:"/docs/backend-system/architecture/backends",children:"the architecture section"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["A minimal Backstage backend is very lightweight. It is a single package with a ",(0,r.jsx)(n.code,{children:"package.json"})," file and a ",(0,r.jsx)(n.code,{children:"src/index.ts"})," file, not counting surrounding tooling and documentation. The package is typically placed within the ",(0,r.jsx)(n.code,{children:"packages/backend"})," folder of a Backstage monorepo, but that is up to you. The backend package is part of any project created with ",(0,r.jsx)(n.code,{children:"@backstage/create-app"}),", so you typically do not need to create it yourself."]}),"\n",(0,r.jsxs)(n.p,{children:["When you create a new project with ",(0,r.jsx)(n.code,{children:"@backstage/create-app"}),", you'll get a backend package with a ",(0,r.jsx)(n.code,{children:"src/index.ts"})," that looks something like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createBackend } from '@backstage/backend-defaults';\nimport { appPlugin } from '@backstage/plugin-app-backend';\nimport { catalogPlugin } from '@backstage/plugin-catalog-backend';\nimport {\n  scaffolderPlugin,\n  catalogModuleTemplateKind,\n} from '@backstage/plugin-scaffolder-backend';\n\nconst backend = createBackend();\n\nbackend.add(appPlugin());\nbackend.add(catalogPlugin());\nbackend.add(catalogModuleTemplateKind());\nbackend.add(scaffolderPlugin());\n\nbackend.start();\n"})}),"\n",(0,r.jsx)(n.p,{children:"There will be a couple more plugins and modules in the initial setup, but the overall layout is the same."}),"\n",(0,r.jsxs)(n.p,{children:["What we're doing in this file is creating a new backend using ",(0,r.jsx)(n.code,{children:"createBackend"}),", and then installing a collection of different plugins and modules that we want to be part of that backend. Plugins are standalone features, while modules augment existing plugins. Each module can only target a single plugin, and that plugin must also be present in the same backend. Finally, we start up the backend by calling the ",(0,r.jsx)(n.code,{children:"start"})," method."]}),"\n",(0,r.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,r.jsx)(n.p,{children:"Apart from installing existing plugins and modules in the backend, there are a couple of different ways in which you can customize your backend installation."}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Perhaps the most accessible way is though static configuration, which you can read more about in the documentation for how to ",(0,r.jsx)(n.a,{href:"/docs/conf/writing",children:"write configuration"}),". Many different aspects of the backend can be configured, including both the behavior of the backend itself, as well as many plugins or modules. You'll need to refer to the documentation of each plugin or module to see what configuration is available. Also be sure to check out the documentation of the ",(0,r.jsx)(n.a,{href:"/docs/backend-system/core-services/index",children:"core services"}),", as that also covers how to configure those."]}),"\n",(0,r.jsx)(n.h3,{id:"services",children:"Services"}),"\n",(0,r.jsxs)(n.p,{children:["Speaking of services, they are another important point of customization. Services allow you to make deeper and broader customizations of the backend. They are similar to ",(0,r.jsx)(n.a,{href:"/docs/api/utility-apis",children:"Utility APIs"})," in the frontend system, using dependency injection to make common functionality available to plugins and modules. You can read more about services in the ",(0,r.jsx)(n.a,{href:"/docs/backend-system/architecture/services",children:"architecture section"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["There is a core set of services that must be installed in all backends, for things like logging, database access, serving HTTP, and so on. Luckily, all of these services are installed by default when you use ",(0,r.jsx)(n.code,{children:"createBackend"})," from the ",(0,r.jsx)(n.code,{children:"@backstage/backend-defaults"})," package, which is what you have in a standard setup."]}),"\n",(0,r.jsx)(n.p,{children:"All of these services can be replaced with your own implementations if you need to customize them. The simplest way to do this is to use the existing service implementations but with additional options. Many of the core services can be customized this way, but not all, as they don't all have meaningful options."}),"\n",(0,r.jsx)(n.p,{children:"For example, let's say we want to customize the core configuration service to enable remote configuration loading. That would look something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { configServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    configServiceFactory({\n      remote: { reloadIntervalSeconds: 60 },\n    }),\n  ],\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will make it possible to pass URLs as configuration targets, and those URLs will be polled every 60 seconds for changes."}),"\n",(0,r.jsxs)(n.p,{children:["There is one exception to the above, which is the built-in ",(0,r.jsx)(n.code,{children:"PluginMetadataService"})," that is provided by the framework and is not possible to override."]}),"\n",(0,r.jsx)(n.h3,{id:"custom-service-implementations",children:"Custom Service Implementations"}),"\n",(0,r.jsx)(n.p,{children:"When overriding services you are not limited to the existing implementations, you can also provide your own custom service factories. This will let you globally override services with completely custom implementations, or build on existing implementations to add additional logic."}),"\n",(0,r.jsxs)(n.p,{children:["To override a service, you provide it in the ",(0,r.jsx)(n.code,{children:"services"})," option just like above, but this time we need to use ",(0,r.jsx)(n.code,{children:"createServiceFactory"})," to create our factory. For example, if you want to replace the default ",(0,r.jsx)(n.code,{children:"LoggerService"})," with your own, it might look like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const backend = createBackend({\n  services: [\n    createServiceFactory({\n      service: coreServices.logger,\n      deps: {\n        rootLogger: coreServices.rootLogger,\n        plugin: coreServices.pluginMetadata,\n        config: coreServices.config,\n      },\n      factory({ rootLogger, plugin, config }) {\n        const labels = readCustomLogLabelsForPlugin(config, plugin); // custom logic\n        return rootLogger.child(labels);\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"LoggerService"})," is responsible for creating a specialized logger instance for each plugin, while the ",(0,r.jsx)(n.code,{children:"RootLoggerService"})," is the actual logging implementation. The default implementation of ",(0,r.jsx)(n.code,{children:"LoggerService"})," will decorate the logger with a ",(0,r.jsx)(n.code,{children:"plugin"})," label that contains the plugin ID. Here in our custom implementation we read out additional labels from the configuration and add those as well."]}),"\n",(0,r.jsxs)(n.p,{children:["This example touches on the fact that services can have different scopes, being either scoped to individual plugins or the root backend instance. To read more about this, see the ",(0,r.jsx)(n.a,{href:"/docs/backend-system/architecture/services",children:"architecture section"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"split-into-multiple-backends",children:"Split Into Multiple Backends"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"NOTE: Splitting into multiple backends is an advanced deployment pattern that requires significant effort and there are not yet many built-in tools in the framework to help you out. Only use this if necessary."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A more advanced way to deploy Backstage is to split the backend plugins into multiple different backend deployments. Both the ",(0,r.jsx)(n.a,{href:"/docs/deployment/scaling",children:"deployment documentation"})," and ",(0,r.jsx)(n.a,{href:"/docs/overview/threat-model#trust-model",children:"Threat Model"})," explain the benefits of this, so here we'll focus on how to do it."]}),"\n",(0,r.jsxs)(n.p,{children:["To create a separate backend we need to create an additional backend package. This package will be built and deployed separately from your existing backend. There is currently no template to create a backend via ",(0,r.jsx)(n.code,{children:"yarn new"}),", so the quickest way is to copy the new package and modify. The naming is up to you and it depends on how you are splitting things and up. For this example we'll just use a simple suffix. You might end up with a directory structure like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'packages/\n  backend-a/\n    src/\n      index.ts\n    package.json <- "name": "backend-a"\n  backend-b/\n    src/\n      index.ts\n    package.json <- "name": "backend-b"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can now trim down the ",(0,r.jsx)(n.code,{children:"src/index.ts"})," files to only include the plugins and modules that you want to be part of that backend. For example, if you want to split out the scaffolder plugin, you might end up with something like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// packages/backend-a/src/index.ts, imports omitted\nconst backend = createBackend();\n\nbackend.add(appPlugin());\nbackend.add(catalogPlugin());\nbackend.add(catalogModuleTemplateKind());\nbackend.start();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And ",(0,r.jsx)(n.code,{children:"backend-b"}),", don't forget to clean up dependencies in ",(0,r.jsx)(n.code,{children:"package.json"})," as well:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// packages/backend-b/src/index.ts, imports omitted\nconst backend = createBackend();\n\nbackend.add(scaffolderPlugin());\nbackend.start();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We've now split the backend into two separate deployments, but we still need to make sure that they can communicate with each other. This is the hard and somewhat tedious part, as Backstage currently doesn't provide an out of the box solution that solves this. You'll need to manually configure the two backends with custom implementations of the ",(0,r.jsx)(n.code,{children:"DiscoveryService"})," and have them return the correct URLs for each other. Likewise, you'll also need to provide a custom implementation of the ",(0,r.jsx)(n.code,{children:"DiscoveryApi"})," in the frontend, unless you surface the two backends via a proxy that handles the routing instead."]}),"\n",(0,r.jsx)(n.h3,{id:"shared-environments",children:"Shared Environments"}),"\n",(0,r.jsx)(n.p,{children:"To make it a bit easier to manage multiple backends, it's possible to create a shared environment that can be used across multiple backends. You would typically house it in a separate package that can be referenced by backends in your monorepo, or published to a package registry for broader use."}),"\n",(0,r.jsx)(n.p,{children:"A shared environment contains a set of service implementations that should be used across all backends. These services will override the default ones, but if a service is provided directly to the backend, it will override the one in the shared environment."}),"\n",(0,r.jsxs)(n.p,{children:["A shared environment is defined using ",(0,r.jsx)(n.code,{children:"createSharedEnvironment"}),". In this example we place it in a new and separate package called ",(0,r.jsx)(n.code,{children:"backend-env"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// packages/backend-env/src/index.ts\nimport { createSharedEnvironment } from '@backstage/backend-plugin-api';\nimport { customDiscoveryServiceFactory } from './customDiscoveryServiceFactory';\n\nexport const env = createSharedEnvironment({\n  services: [\n    customDiscoveryServiceFactory(), // custom DiscoveryService implementation\n  ],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And passed on to backends using the ",(0,r.jsx)(n.code,{children:"env"})," option:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// packages/backend-b/src/index.ts, imports omitted\nimport { env } from '@internal/backend-env';\n\nconst backend = createBackend({ env });\n\nbackend.add(scaffolderPlugin());\nbackend.start();\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))t.call(o,l)&&(s[l]=o[l]);if(n){a=n(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),n.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:a.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,s=60110,c=60112;n.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),o=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),a=u("react.provider"),s=u("react.context"),c=u("react.forward_ref"),n.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}function b(){}function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var k=y.prototype=new b;k.constructor=y,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},x=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,t){var r,o={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)x.call(n,r)&&!j.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:v.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var _=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,t,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+O(c,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),P(a,n,t,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),n.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+O(s=e[l],l);c+=P(s,n,t,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)c+=P(s=s.value,n,t,d=r+O(s,l++),a);else if("object"===s)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function T(e,n,t){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function B(){var e=C.current;if(null===e)throw Error(p(321));return e}var R={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:T,forEach:function(e,n,t){T(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return T(e,(function(){n++})),n},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},n.Component=g,n.PureComponent=y,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var o=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,c=v.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)x.call(n,d)&&!j.hasOwnProperty(d)&&(o[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)o.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return B().useCallback(e,n)},n.useContext=function(e,n){return B().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return B().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return B().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return B().useLayoutEffect(e,n)},n.useMemo=function(e,n){return B().useMemo(e,n)},n.useReducer=function(e,n,t){return B().useReducer(e,n,t)},n.useRef=function(e){return B().useRef(e)},n.useState=function(e){return B().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var r=t(667294);const i=r.createContext({});function o(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:s},n)}}}]);