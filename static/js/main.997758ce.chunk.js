(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(10),r=c(n(11)),a=c(n(2)),l=c(n(18)),i=c(n(23)),u=c(n(26));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,o.css)({position:"relative"});t.default=function(e){var t=e.checkInterval,n=e.children,o=e.className,c=e.debounce,f=e.followButtonClassName,d=e.mode,p=e.scrollViewClassName;return a.default.createElement(i.default,{checkInterval:t,debounce:c,mode:"top"===d?"top":"bottom"},a.default.createElement("div",{className:(0,r.default)(s+"",(o||"")+"")},a.default.createElement(u.default,{className:p},n),a.default.createElement(l.default,{className:f})))}},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(2)),r=a(n(106));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e,n){var o,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(o=!(a=u(t).call(this,e,n))||"object"!==l(a)&&"function"!==typeof a?s(r):a).createDebouncer(),o.handleEvent=o.handleEvent.bind(s(s(o))),o}var n,a,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),n=t,(a=[{key:"createDebouncer",value:function(){var e=this;this.debouncer=(0,r.default)(function(t){e.props.onEvent&&e.props.onEvent(t)},this.props.debounce)}},{key:"componentDidMount",value:function(){var e=this.props.target;e&&(e.addEventListener(this.props.name,this.handleEvent,{passive:!0}),this.handleEvent({target:e,type:this.props.name}))}},{key:"componentDidUpdate",value:function(e){var t=e.name,n=e.target,o=this.props,r=o.name,a=o.target;a===n&&r===t||(n&&n.removeEventListener(t,this.handleEvent),a&&(a.addEventListener(r,this.handleEvent,{passive:!0}),this.handleEvent({target:a,type:this.props.name})))}},{key:"componentWillUnmount",value:function(){var e=this.props.target;e&&e.removeEventListener(this.props.name,this.handleEvent)}},{key:"componentWillReceiveProps",value:function(e){var t=e.debounce;this.props.debounce!==t&&this.createDebouncer()}},{key:"handleEvent",value:function(e){e.timeStampLow=Date.now(),this.debouncer(e)}},{key:"render",value:function(){return!1}}])&&i(n.prototype,a),f&&i(n,f),t}();t.default=f,f.defaultProps={debounce:200}},106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!t)return e;var n=0,o=null;return function(){var r=arguments,a=Date.now();a-n>t?(e.apply(null,arguments),n=a):(clearTimeout(o),o=setTimeout(function(){e.apply(null,r),n=Date.now()},Math.max(0,t-a+n)))}}},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(24)),r=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){var n=Math.sign(t-e),o=e+Math.sqrt(Math.abs(t-e))*n;return n>0?Math.min(t,o):Math.max(t,o)}var d=function(e){function t(e,n){var o,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(o=!(a=u(t).call(this,e,n))||"object"!==l(a)&&"function"!==typeof a?s(r):a).handleCancelAnimation=o.handleCancelAnimation.bind(s(s(o))),o}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.default.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,n=e.target,o=e.value;n&&(this.addEventListeners(n),this.animate(t,n[t],o,1))}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.name,o=t.target,r=t.value,a=e.target,l=e.value!==r,i=a!==o;i&&(this.removeEventListeners(a),this.addEventListeners(o)),(l||i)&&o&&this.animate(n,o[n],r,1)}},{key:"componentWillUnmount",value:function(){this.removeEventListeners(this.props.target),cancelAnimationFrame(this.animator)}},{key:"addEventListeners",value:function(e){e&&e.addEventListener("pointerdown",this.handleCancelAnimation,{passive:!0})}},{key:"removeEventListeners",value:function(e){e&&e.removeEventListener("pointerdown",this.handleCancelAnimation)}},{key:"animate",value:function(e,t,n,o){var r=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now();"100%"!==n&&"number"!==typeof n||(cancelAnimationFrame(this.animator),this.animator=requestAnimationFrame(function(){var l=r.props.target;if(l){var i="100%"===n?l.scrollHeight-l.offsetHeight:n,u=function(e,t,n,o){for(var r=e,a=0;a<o;a++)r=n(r,t);return r}(t,i,f,(Date.now()-a)/5);Math.abs(i-u)<1.5&&(u=i),l[e]=u,i===u?r.props.onEnd&&r.props.onEnd(!0):r.animate(e,t,n,o+1,a)}}))}},{key:"handleCancelAnimation",value:function(){cancelAnimationFrame(this.animator),this.props.onEnd&&this.props.onEnd(!1)}},{key:"render",value:function(){return!1}}])&&i(n.prototype,o),a&&i(n,a),t}();t.default=d,d.propTypes={name:o.default.string.isRequired,onEnd:o.default.func,target:o.default.any.isRequired,value:o.default.oneOfType([o.default.number,o.default.oneOf(["100%"])]).isRequired}},108:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(27),l=n.n(a),i=n(9),u=n(28),c=n(29),s=n(33),f=n(30),d=n(34),p=n(1),v=n(3),h=n(14),m=n.n(h),b=n(31),y=n.n(b),g=n(32),E=n.n(g),k=n(7),C=n.n(k),O=v.css.keyframes({"0%":{opacity:.2},"100%":{opacity:1}}),w=Object(v.css)({"& > ul.button-bar":{display:"flex",listStyleType:"none",margin:0,padding:0,"& > li:not(:last-child)":{marginRight:10}},"& > .panes":{display:"flex","& > *":{flex:1},"& > *:not(:last-child)":{marginRight:10}}}),_=Object(v.css)({borderColor:"Black",borderStyle:"solid",borderWidth:1,height:400,marginTop:10}),j=Object(v.css)({backgroundColor:"#EEE"}),T=Object(v.css)({paddingLeft:10,paddingRight:10,"&:not(.sticky)":{backgroundColor:"rgba(255, 0, 0, .1)"},"& > p":{animation:"".concat(O," 500ms")}}),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(f.a)(t).call(this,e))).handleAdd1=n.handleAdd.bind(Object(p.a)(Object(p.a)(n)),1),n.handleAdd10=n.handleAdd.bind(Object(p.a)(Object(p.a)(n)),10),n.handleClear=n.handleClear.bind(Object(p.a)(Object(p.a)(n))),n.handleIntervalCallback=n.handleIntervalCallback.bind(Object(p.a)(Object(p.a)(n))),n.handleIntervalEnabledChange=n.handleIntervalEnabledChange.bind(Object(p.a)(Object(p.a)(n))),n.state={intervalEnabled:!1,paragraphs:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleAdd(10)}},{key:"handleAdd",value:function(e){this.setState(function(t){return{paragraphs:[].concat(Object(i.a)(t.paragraphs),Object(i.a)(new Array(e).fill().map(function(){return E()({units:"paragraph"})})))}})}},{key:"handleClear",value:function(){this.setState(function(){return{paragraphs:[]}})}},{key:"handleIntervalCallback",value:function(){this.handleAdd(1)}},{key:"handleIntervalEnabledChange",value:function(e){var t=e.target.checked;this.setState(function(){return{intervalEnabled:t}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:w+""},r.a.createElement("ul",{className:"button-bar"},r.a.createElement("li",null,r.a.createElement("button",{onClick:this.handleAdd1},"Add new paragraph")),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.handleAdd10},"Add 10 new paragraphs")),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.handleClear},"Clear")),r.a.createElement("li",null,r.a.createElement("label",null,r.a.createElement("input",{checked:this.state.intervalEnabled,onChange:this.handleIntervalEnabledChange,type:"checkbox"}),"Add one every second"))),r.a.createElement("div",{className:"panes"},r.a.createElement(C.a,{className:_,scrollViewClassName:j},r.a.createElement(k.StateContext.Consumer,null,function(t){var n=t.sticky;return r.a.createElement("div",{className:m()(T+"",{sticky:n})},e.state.paragraphs.map(function(e){return r.a.createElement("p",{key:e},e)}))})),r.a.createElement(C.a,{className:_,mode:"top"},r.a.createElement(k.StateContext.Consumer,null,function(t){var n=t.sticky;return r.a.createElement("div",{className:m()(T+"",{sticky:n})},Object(i.a)(e.state.paragraphs).reverse().map(function(e){return r.a.createElement("p",{key:e},e)}))}))),this.state.intervalEnabled&&r.a.createElement(y.a,{callback:this.handleIntervalCallback,enabled:!0,timeout:1e3}))}}]),t}(r.a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-scroll-to-bottom",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-scroll-to-bottom","/service-worker.js");x?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):P(e)})}}()},12:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((o=n(2))&&o.__esModule?o:{default:o}).default.createContext({scrollTo:function(){return 0},scrollToBottom:function(){return 0},scrollToEnd:function(){return 0},scrollToTop:function(){return 0}});r.displayName="ScrollToBottomFunctionContext";var a=r;t.default=a},13:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((o=n(2))&&o.__esModule?o:{default:o}).default.createContext({atBottom:!0,atEnd:!0,atTop:!0,mode:"bottom"});r.displayName="ScrollToBottomStateContext";var a=r;t.default=a},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(10),r=u(n(11)),a=u(n(2)),l=u(n(12)),i=u(n(13));function u(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.css)({backgroundColor:"rgba(0, 0, 0, .2)",borderRadius:10,borderWidth:0,bottom:5,cursor:"pointer",height:20,outline:0,position:"absolute",right:20,width:20,"&:hover":{backgroundColor:"rgba(0, 0, 0, .4)"},"&:active":{backgroundColor:"rgba(0, 0, 0, .6)"}});t.default=function(e){var t=e.children,n=e.className;return a.default.createElement(i.default.Consumer,null,function(e){return!e.sticky&&a.default.createElement(l.default.Consumer,null,function(e){var o=e.scrollToEnd;return a.default.createElement("button",{className:(0,r.default)(c+"",(n||"")+""),onClick:o},t)})})}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(24)),r=f(n(2)),a=f(n(104)),l=f(n(105)),i=f(n(12)),u=f(n(25)),c=f(n(107)),s=f(n(13));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=1;function E(e){var t=e.stateContext.mode,n=e.target,o=n.offsetHeight,r=n.scrollHeight,a=n.scrollTop,l=r-a-o<g,i=a<g,u="top"===t?i:l;return{atBottom:l,atEnd:u,atStart:!u,atTop:i}}var k=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=m(t).call(this,e),(n=!r||"object"!==d(r)&&"function"!==typeof r?y(o):r).handleScroll=n.handleScroll.bind(y(y(n))),n.handleScrollEnd=n.handleScrollEnd.bind(y(y(n))),n._ignoreScrollEventBefore=0,n.state={functionContext:{scrollTo:function(e){return n.setState(function(t){var n=t.stateContext;return{scrollTop:e,stateContext:(0,a.default)(n,["animating"],function(){return!0})}})},scrollToBottom:function(){return n.state.functionContext.scrollTo("100%")},scrollToEnd:function(){var e=y(y(n)).state,t=e.functionContext;"top"===e.stateContext.mode?t.scrollToTop():t.scrollToBottom()},scrollToStart:function(){var e=y(y(n)).state,t=e.functionContext;"top"===e.stateContext.mode?t.scrollToBottom():t.scrollToTop()},scrollToTop:function(){return n.state.functionContext.scrollTo(0)}},internalContext:{setTarget:function(e){return n.setState(function(){return{target:e}})}},scrollTop:"top"===e.mode?0:"100%",stateContext:{animating:!1,atBottom:!0,atEnd:!0,atTop:!0,mode:e.mode,sticky:!0},target:null},n}var n,o,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.default.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.enableWorker()}},{key:"disableWorker",value:function(){clearInterval(this._stickyCheckTimeout)}},{key:"enableWorker",value:function(){var e=this;clearInterval(this._stickyCheckTimeout);var t,n,o=!1;this._stickyCheckTimeout=(t=function(){var t=e.state,n=t.stateContext.sticky,r=t.target;n&&r&&!E(t).atEnd?o?Date.now()-o>34&&(t.functionContext.scrollToEnd(),o=!1):o=Date.now():o=!1},n=Math.max(17,this.props.checkInterval)||17,t(),setInterval(t,n))}},{key:"componentWillUnmount",value:function(){this.disableWorker()}},{key:"componentWillReceiveProps",value:function(e){this.setState(function(t){return{stateContext:p({},t.stateContext,{mode:"top"===e.mode?"top":"bottom"})}})}},{key:"handleScroll",value:function(e){var t=this;e.timeStampLow<=this._ignoreScrollEventBefore||(this.disableWorker(),this.setState(function(e){if(e.target){var t=e.scrollTop,n=e.stateContext,o=E(e),r=o.atBottom,l=o.atEnd,i=o.atStart,u=o.atTop,c=n;if(c=(0,a.default)(c,["atBottom"],function(){return r}),c=(0,a.default)(c,["atEnd"],function(){return l}),c=(0,a.default)(c,["atStart"],function(){return i}),c=(0,a.default)(c,["atTop"],function(){return u}),c=(0,a.default)(c,["sticky"],function(){return!!n.animating||l}),null===t&&(c=(0,a.default)(c,["animating"],function(){return!1})),n!==c)return{stateContext:c}}},function(){t.state.stateContext.sticky&&t.enableWorker()}))}},{key:"handleScrollEnd",value:function(){this._ignoreScrollEventBefore=Date.now(),this.setState(function(){return{scrollTop:null}})}},{key:"render",value:function(){var e=this.handleScroll,t=this.handleScrollEnd,n=this.props,o=n.children,a=n.debounce,f=this.state,d=f.functionContext,p=f.internalContext,v=f.scrollTop,h=f.stateContext,m=f.target;return r.default.createElement(u.default.Provider,{value:p},r.default.createElement(i.default.Provider,{value:d},r.default.createElement(s.default.Provider,{value:h},o,m&&r.default.createElement(l.default,{debounce:a,name:"scroll",onEvent:e,target:m}),m&&null!==v&&r.default.createElement(c.default,{name:"scrollTop",onEnd:t,target:m,value:v}))))}}])&&h(n.prototype,o),f&&h(n,f),t}();t.default=k,k.defaultProps={checkInterval:100,debounce:17},k.propTypes={checkInterval:o.default.number,debounce:o.default.number}},25:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((o=n(2))&&o.__esModule?o:{default:o}).default.createContext({_handleUpdate:function(){return 0},_setTarget:function(){return 0}});r.displayName="ScrollToBottomInternalContext";var a=r;t.default=a},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(10),r=i(n(11)),a=i(n(2)),l=i(n(25));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c=(0,o.css)({height:"100%",overflowY:"auto",width:"100%"}),s=function(e){var t=e.children,n=e.className,o=e.setTarget;return a.default.createElement("div",{className:(0,r.default)(c+"",(n||"")+""),ref:o},t)};t.default=function(e){return a.default.createElement(l.default.Consumer,null,function(t){var n=t.setTarget;return a.default.createElement(s,u({setTarget:n},e))})}},35:function(e,t,n){e.exports=n(108)},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AutoHideFollowButton",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Composer",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"FunctionContext",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Panel",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"StateContext",{enumerable:!0,get:function(){return u.default}}),t.default=void 0;var o=c(n(18)),r=c(n(101)),a=c(n(23)),l=c(n(12)),i=c(n(26)),u=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}var s=r.default;t.default=s}},[[35,2,1]]]);
//# sourceMappingURL=main.997758ce.chunk.js.map