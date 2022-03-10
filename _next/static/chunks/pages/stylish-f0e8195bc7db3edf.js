(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{24058:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(67294),e=c(9008);function f(){return(f=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function g(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}var h=["key"],i=["key"],j=(0,d.memo)(function(a){var b,c=a.title,j=a.description,k=a.canonical,l=a.robots,m=a.maxDescriptionCharacters,n=void 0===m?150:m,o=a.twitter,p=void 0===o?{}:o,q=a.og,r=void 0===q?{}:q,s=a.customMetaTags,t=void 0===s?[]:s,u=a.customLinkTags,v=void 0===u?[]:u,w=[];return c&&w.push(d.createElement("title",{key:"title"},c)),l&&w.push(d.createElement("meta",{key:"robots",name:"robots",content:l})),j&&w.push(d.createElement("meta",{key:"description",name:"description",content:j.substr(0,n)})),k&&w.push(d.createElement("link",{key:"canonical",rel:"canonical",href:k})),p.card&&w.push(d.createElement("meta",{key:"twitter:card",name:"twitter:card",content:p.card})),p.site&&w.push(d.createElement("meta",{key:"twitter:site",name:"twitter:site",content:p.site})),(r.url||k)&&w.push(d.createElement("meta",{key:"og:url",property:"og:url",content:r.url||k})),(r.title||c)&&w.push(d.createElement("meta",{key:"og:title",property:"og:title",content:r.title||c})),r.image&&w.push(d.createElement("meta",{key:"og:image",property:"og:image",content:r.image})),(r.description||j)&&w.push(d.createElement("meta",{key:"og:description",property:"og:description",content:null==(b=r.description||j)?void 0:b.substr(0,n)})),r.type&&w.push(d.createElement("meta",{key:"og:type",property:"og:type",content:r.type})),r.siteName&&w.push(d.createElement("meta",{key:"og:site_name",property:"og:site_name",content:r.siteName})),t.length>0&&w.push(t.map(function(a,b){var c=a.key,e=g(a,h);return d.createElement("meta",f({key:"meta-"+(c||b)},e))})),v.length>0&&w.push(v.map(function(a,b){var c=a.key,e=g(a,i);return d.createElement("link",f({key:"link-"+(c||b)},e))})),d.createElement(e.default,null,w)})},78e3:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e=((d=c(67294))&&d.__esModule?d:{"default":d}).default.createContext({});b.AmpStateContext=e},45646:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var d,e=(d=c(67294))&&d.__esModule?d:{"default":d},f=c(78e3);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},72717:function(a,b,c){"use strict";var d=c(930);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var f,g=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)),h=(f=c(11585))&&f.__esModule?f:{"default":f},i=c(78e3),j=c(15850),k=c(45646);function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,f,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set(),f=new Set(),h=new Set(),i={},function(a){var b=!0,d=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){d=!0;var e=a.key.slice(a.key.indexOf("$")+1);c.has(e)?b=!1:c.add(e)}switch(a.type){case"title":case"base":f.has(a.type)?b=!1:f.add(a.type);break;case"meta":for(var g=0,j=n.length;g<j;g++){var k=n[g];if(a.props.hasOwnProperty(k))if("charSet"===k)h.has(k)?b=!1:h.add(k);else{var l=a.props[k],m=i[k]||new Set();("name"!==k||!d)&&m.has(l)?b=!1:(m.add(l),i[k]=m)}}break}return b})).reverse().map(function(a,c){var f=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var h=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a.props||{});return h["data-href"]=h.href,h.href=void 0,h["data-optimized-fonts"]=!0,g.default.cloneElement(a,h)}return g.default.cloneElement(a,{key:f})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},11585:function(a,b,c){"use strict";var d=c(7980),e=c(33227),f=c(88361),g=c(92191),h=c(85971),i=c(52715),j=c(91193);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=function(a){h(k,a);var b,c,g=(b=k,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,d=j(b);if(c){var e=j(this).constructor;a=Reflect.construct(d,arguments,e)}else a=d.apply(this,arguments);return i(this,a)});function k(a){var b;return e(this,k),(b=g.call(this,a)).emitChange=function(){b._hasHeadManager&&b.props.headManager.updateHead(b.props.reduceComponentsToState(d(b.props.headManager.mountedInstances),b.props))},b._hasHeadManager=b.props.headManager&&b.props.headManager.mountedInstances,b}return f(k,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),k}(function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)).Component);b.default=k},61381:function(a,b,c){"use strict";var d=c(65988),e=c.n(d),f=c(24058),g=c(11163),h=c(85893);b.Z=function(a){var b=a.title,c=a.children,d=(0,g.useRouter)(),i="codehex homepage";return(0,h.jsxs)("div",{className:"jsx-2465046483 page",children:[(0,h.jsx)(f.Z,{title:b?"".concat(b," - ").concat(i):i,description:"codehex's homepage. There are links which are codehex has collected that I found interesting. In addition, information on each social networking site account.",canonical:"https://codehex.dev".concat(d.pathname),twitter:{site:"@codehex"},og:{type:"article"},customMetaTags:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"msapplication-TileColor",content:"#da532c"},{name:"theme-color",content:"#ffffff"}],customLinkTags:[{rel:"icon",href:"/assets/favicon/favicon.ico"},{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/favicon/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/favicon/favicon-16x16.png"},{rel:"manifest",href:"/assets/favicon/site.webmanifest"}]}),(0,h.jsx)("main",{className:"jsx-2465046483",children:(0,h.jsx)("div",{className:"jsx-2465046483 page-main",children:c})}),(0,h.jsx)(e(),{id:"2465046483",children:["html,body{background-color:#fff;color:#000;font-size:18px;}","a{-webkit-text-decoration:none;text-decoration:none;color:#0652dd;}","a:hover{-webkit-text-decoration:underline;text-decoration:underline;}","*{box-sizing:border-box;}","li a{line-height:1.8;}","@media (min-width:60em){li a{line-height:1.2;}}"]})]})}},57146:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return f}});var d=c(61381),e=c(85893);function f(){return(0,e.jsx)(d.Z,{children:(0,e.jsx)("h1",{children:"工事中"})})}},39969:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylish",function(){return c(57146)}])},9008:function(a,b,c){a.exports=c(72717)}},function(a){a.O(0,[988,774,888,179],function(){return a(a.s=39969)}),_N_E=a.O()}])