_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{E7vA:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/slack_invitation",function(){return o("fjIA")}])},fjIA:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return j}));var n=o("nKUr"),r=o("MX0m"),s=o.n(r),a=o("8Kt/"),c=o.n(a);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=o("q1tI");function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=f(e);if(t){var r=f(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return d(this,o)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,o,r,s=x(a);function a(){return i(this,a),s.apply(this,arguments)}return t=a,(o=[{key:"componentDidMount",value:function(){var e="6Le-vr0UAAAAALh9uIQyL3xL2fAEzKpo4_DPgepD",t=document.createElement("script");t.src="https://www.google.com/recaptcha/api.js?render=".concat(e),t.addEventListener("load",(function(){window.grecaptcha.ready((function(){window.grecaptcha.execute(e,{action:"validate_captcha"}).then((function(e){document.getElementById("g-recaptcha-response").value=e}))}))})),document.body.appendChild(t)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"hidden",id:"g-recaptcha-response",name:"g-recaptcha-response"}),Object(n.jsx)("input",{type:"hidden",name:"action",value:"validate_captcha"})]})}}])&&l(t.prototype,o),r&&l(t,r),a}(o.n(b).a.Component);function j(){return Object(n.jsxs)("div",{className:"jsx-2557551123 slack-invitation",children:[Object(n.jsxs)(c.a,{children:[Object(n.jsx)("title",{className:"jsx-2557551123",children:"Join code-hex workspace on Slack!"}),Object(n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no",className:"jsx-2557551123"}),Object(n.jsx)("link",{rel:"shortcut icon",href:"https://slack.global.ssl.fastly.net/272a/img/icons/favicon-32.png",className:"jsx-2557551123"})]}),Object(n.jsxs)("div",{className:"jsx-2557551123 splash",children:[Object(n.jsxs)("div",{className:"jsx-2557551123 logos",children:[Object(n.jsx)("div",{className:"jsx-2557551123 logo org"}),Object(n.jsx)("div",{className:"jsx-2557551123 logo slack"})]}),Object(n.jsxs)("p",{className:"jsx-2557551123",children:["Join ",Object(n.jsx)("b",{className:"jsx-2557551123",children:"code-hex"})," workspace on Slack."]}),Object(n.jsxs)("form",{method:"post",action:"https://slack-invitation.codehex.now.sh/invite",className:"jsx-2557551123",children:[Object(n.jsx)("input",{autofocus:"true",name:"email",placeholder:"you@yourdomain.com",type:"email",required:!0,pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",className:"jsx-2557551123 form-item"}),Object(n.jsx)(m,{}),Object(n.jsx)("button",{className:"jsx-2557551123 ",children:"Get my Invite"})]}),Object(n.jsxs)("p",{className:"jsx-2557551123 btm",children:["or"," ",Object(n.jsx)("a",{href:"https://code-hex.slack.com",target:"_top",className:"jsx-2557551123",children:"sign in"})," ","or ",Object(n.jsx)("a",{href:"https://twitter.com/codehex",className:"jsx-2557551123",children:"feedback"}),"."]}),Object(n.jsxs)("p",{className:"jsx-2557551123 btm",children:["Repository:"," ",Object(n.jsx)("a",{href:"https://github.com/Code-Hex/slack-invitation",className:"jsx-2557551123",children:"https://github.com/Code-Hex/slack-invitation"})]})]}),Object(n.jsx)(s.a,{id:"2557551123",children:[".splash.jsx-2557551123{width:300px;margin:200px auto;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial;}","@media (max-width:500px){.splash.jsx-2557551123{margin-top:100px;}}",".head.jsx-2557551123{margin-bottom:40px;}",".logos.jsx-2557551123{position:relative;margin-bottom:40px;}",".logo.jsx-2557551123{width:48px;height:48px;display:inline-block;background-size:cover;margin-left:0.3em;}",".logo.slack.jsx-2557551123{margin-left:0.6em;background-image:url(assets/svg/slack.svg);}",".logo.org.jsx-2557551123::after{position:absolute;display:block;content:'+';top:15px;left:0;width:300px;text-align:center;color:#d6d6d6;font:15px Helvetica Neue;}","p.jsx-2557551123{font-size:15px;margin:5px 0;}","select.jsx-2557551123{background:none;}","button.jsx-2557551123,.form-item.jsx-2557551123{font-size:12px;margin-top:10px;vertical-align:middle;display:block;text-align:center;box-sizing:border-box;width:100%;padding:9px;}","button.jsx-2557551123{color:#fff;font-weight:bold;border-width:0;background:#e01563;text-transform:uppercase;cursor:pointer;-webkit-appearence:none;-moz-appearence:none;appearence:none;-webkit-appearence:none;outline:0;-webkit-transition:background-color 150ms ease-in,color 150ms ease-in;transition:background-color 150ms ease-in,color 150ms ease-in;}","button.loading.jsx-2557551123{pointer-events:none;}","button.jsx-2557551123:disabled{color:#9b9b9b;background-color:#d6d6d6;cursor:default;pointer-events:none;}","button.error.jsx-2557551123{background-color:#f4001e;text-transform:none;}","button.success.jsx-2557551123:disabled{color:#fff;background-color:#68c200;}","button.jsx-2557551123:not(.disabled):active{background-color:#7a002f;}","b.jsx-2557551123{-webkit-transition:-webkit-transform 150ms ease-in;-webkit-transition:transform 150ms ease-in;transition:transform 150ms ease-in;}","b.grow.jsx-2557551123{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}","form.jsx-2557551123{margin-top:20px;margin-bottom:0;}","input.jsx-2557551123{color:#9b9b9b;border:1px solid #d6d6d6;}","input.jsx-2557551123:focus{color:#666;border-color:#999;outline:0;}",".active.jsx-2557551123{color:#e01563;}","p.btm.jsx-2557551123{padding:10px 0 10px;font-size:11px;}","p.btm.jsx-2557551123 a.jsx-2557551123{color:#e01563;-webkit-text-decoration:none;text-decoration:none;}","p.btm.jsx-2557551123 a.jsx-2557551123:hover{background-color:#e01563;color:#fff;}",".logo.org.jsx-2557551123{background-image:url(assets/svg/codehex.svg);}"]})]})}}},[["E7vA",0,1,2]]]);