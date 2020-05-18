parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FljV":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function r(){e(this,r),this.layers=[],this.layerCounter=0,this.shouldRender=!0,this.lastFrameRenderedTime=null,this.renderingId=null,this.currentDeltaTime=0,this.requestFrameA=this.requestFrameA.bind(this),this.requestFrameB=this.requestFrameB.bind(this)}return t(r,[{key:"getLayer",value:function(e){return this.layers.find(function(r){return r.layerIndex===e})||null}},{key:"registerLayer",value:function(e){this.layers.push(e)}},{key:"start",value:function(){this.shouldRender=!0,this.renderingId=window.requestAnimationFrame(this.requestFrameA)}},{key:"stop",value:function(){this.shouldRender=!1,this.renderingId&&window.cancelAnimationFrame(this.renderingId)}},{key:"requestFrameA",value:function(e){this.render(e),this.shouldRender&&(this.renderingId=window.requestAnimationFrame(this.requestFrameB))}},{key:"requestFrameB",value:function(e){this.render(e),this.shouldRender&&(this.renderingId=window.requestAnimationFrame(this.requestFrameA))}},{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;for(this.lastFrameRenderedTime||(this.lastFrameRenderedTime=e),this.currentDeltaTime=e-this.lastFrameRenderedTime,this.lastFrameRenderedTime=e,this.layerCounter=0;this.layerCounter<this.layers.length;this.layerCounter++)this.layers[this.layerCounter].update(this.currentDeltaTime),this.layers[this.layerCounter].render()}}]),r}();exports.default=n;
},{}],"gkAU":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.FROM_ORIGIN=0]="FROM_ORIGIN",e[e.FROM_CENTER=1]="FROM_CENTER"}(e=exports.ResizeMethod||(exports.ResizeMethod={}));
},{}],"AQsV":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../types"),s=function(){function e(i,n,s){var h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;t(this,e),this.layerIndex=i,this.entities=[],this.entityCounter=0,this.width=void 0===n?document.body.clientWidth+1:n,this.height=void 0===s?document.body.clientHeight+1:s,this.x=h,this.y=o;var r=document.createElement("canvas");r.style.position="absolute",r.style.zIndex="".concat(this.layerIndex),r.style.display="inline",document.body.appendChild(r);var a=r.getContext("2d");if(!a)throw new Error("Could not initialize canvas 2D context.");this.context=a,this.context.translate(-.5,-.5),this.resize(this.width,this.height),this.setPosition(this.x,this.y)}return i(e,[{key:"resize",value:function(t,e){var i=0,s=0;(arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.ResizeMethod.FROM_ORIGIN)===n.ResizeMethod.FROM_CENTER&&(i=(this.width-t)/2,s=(this.height-e)/2),this.width=t,this.height=e,this.context.canvas.width=this.width,this.context.canvas.height=this.height,this.setPosition(this.x+i,this.y+s)}},{key:"setPosition",value:function(t,e){if(this.x=t,this.y=e,!this._isLayerWithinBounds())throw new Error("Cannot position and resize a layer outside of document body.");this.context.canvas.style.left="".concat(this.x,"px"),this.context.canvas.style.top="".concat(this.y,"px")}},{key:"addEntity",value:function(t){if(!this._isEntityValid(t))throw new Error("Invalid entity cannot be added to this layer.");this.entities.push(t)}},{key:"removeEntity",value:function(t){var e=this.entities.indexOf(t);-1!==e&&this.entities.splice(e,1)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getContext",value:function(){return this.context}},{key:"clear",value:function(){this.context.clearRect(-1,-1,this.width,this.height)}},{key:"update",value:function(t){var e,i;for(this.entityCounter=0;this.entityCounter<this.entities.length;this.entityCounter++)null===(i=(e=this.entities[this.entityCounter]).update)||void 0===i||i.call(e,t)}},{key:"render",value:function(){for(this.clear(),this.entityCounter=0;this.entityCounter<this.entities.length;this.entityCounter++)this.entities[this.entityCounter].render(this.context)}},{key:"_entityIsRenderable",value:function(t){return Boolean(t.render)}},{key:"_entityIsUpdatable",value:function(t){return Boolean(t.update)}},{key:"_isLayerWithinBounds",value:function(){return this.width+this.x>document.body.clientWidth||this.height+this.y>document.body.clientHeight||this.x<0||this.y<0}}]),e}();exports.RenderingLayer=s;
},{"../types":"gkAU"}],"rGA9":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=u(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}function c(e){return function(){var t,r=a(e);if(l()){var n=a(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return i(this,t)}}function i(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?f(t):r}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var y=require(".."),b=function(e){p(u,y.RenderingLayer);var r=c(u);function u(e,n,o){var c,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return t(this,u),(c=r.call(this,e,n,o,i,f)).rerenderNextFrame=!1,c}return n(u,[{key:"allowRerenderOnNextFrame",value:function(){this.rerenderNextFrame=!0}},{key:"_isEntityValid",value:function(e){return o(a(u.prototype),"_entityIsRenderable",this).call(this,e)}},{key:"render",value:function(){this.rerenderNextFrame&&(this.rerenderNextFrame=!1,o(a(u.prototype),"render",this).call(this))}}]),u}();exports.StaticLayer=b;
},{"..":"AQsV"}],"jXhx":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=c(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function u(t){return function(){var e,n=a(t);if(l()){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?f(e):n}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.defineProperty(exports,"__esModule",{value:!0});var s=require(".."),b=function(t){p(c,s.RenderingLayer);var n=u(c);function c(t,r,o){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return e(this,c),n.call(this,t,r,o,u,i)}return r(c,[{key:"_isEntityValid",value:function(t){return o(a(c.prototype),"_entityIsRenderable",this).call(this,t)&&this._entityIsUpdatable(t)}}]),c}();exports.DynamicLayer=b;
},{"..":"AQsV"}],"GkAW":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=i(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function i(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}function c(e){return function(){var t,r=a(e);if(l()){var n=a(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return u(this,t)}}function u(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?f(t):r}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var y=require(".."),d=function(e){s(i,y.RenderingLayer);var r=c(i);function i(e,n,o,c){var u,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return t(this,i),(u=r.call(this,e,o,c,f,l)).deferredTime=n,u.elapsedTimeSinceRender=0,u}return n(i,[{key:"_isEntityValid",value:function(e){return o(a(i.prototype),"_entityIsRenderable",this).call(this,e)&&this._entityIsUpdatable(e)}},{key:"update",value:function(e){this.elapsedTimeSinceRender>this.deferredTime&&o(a(i.prototype),"update",this).call(this,e),this.elapsedTimeSinceRender+=e}},{key:"render",value:function(){this.elapsedTimeSinceRender>this.deferredTime&&(this.elapsedTimeSinceRender=0,o(a(i.prototype),"render",this).call(this))}}]),i}();exports.DeferredLayer=d;
},{"..":"AQsV"}],"fUdq":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var a=r(require("./Engine"));exports.default=a.default;var t=require("./Engine");exports.IEngine=t.IEngine;var i=require("./RenderingLayer");exports.IRenderingLayer=i.IRenderingLayer,exports.RenderingLayer=i.RenderingLayer;var n=require("./RenderingLayer/StaticLayer");exports.IStaticLayer=n.IStaticLayer,exports.StaticLayer=n.StaticLayer;var y=require("./RenderingLayer/DynamicLayer");exports.IDynamicLayer=y.IDynamicLayer,exports.DynamicLayer=y.DynamicLayer;var L=require("./RenderingLayer/DeferredLayer");exports.IDeferredLayer=L.IDeferredLayer,exports.DeferredLayer=L.DeferredLayer,e(require("./types"));
},{"./Engine":"FljV","./RenderingLayer":"AQsV","./RenderingLayer/StaticLayer":"rGA9","./RenderingLayer/DynamicLayer":"jXhx","./RenderingLayer/DeferredLayer":"GkAW","./types":"gkAU"}],"Z4eZ":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e};Object.defineProperty(exports,"__esModule",{value:!0});var r,s,h=n(require("../../src"));!function(t){t.BACKGROUND="#567D46",t.SQUARE="#985629"}(r||(r={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.SQUARE=1]="SQUARE"}(s||(s={}));var u=.1,a=50,o=50,l=function(){function e(i,n){t(this,e),this.width=i,this.height=n}return i(e,[{key:"render",value:function(t){t.fillStyle=r.BACKGROUND,t.fillRect(0,0,this.width,this.height)}}]),e}(),f=function(){function e(i){var n=this;t(this,e),this.isXOutOfBounds=function(){return n.x<0||n.x+a>n.layer.getWidth()},this.isYOutOfBounds=function(){return n.y<0||n.y+o>n.layer.getHeight()},this.layer=i,this.width=a,this.height=o,this.x=10,this.y=10,this.dx=1,this.dy=1}return i(e,[{key:"update",value:function(t){var e=u*t;this.x+=this.dx*e,this.y+=this.dy*e,this.isXOutOfBounds()&&(this.dx*=-1),this.isYOutOfBounds()&&(this.dy*=-1)}},{key:"render",value:function(t){t.fillStyle=r.SQUARE,t.fillRect(this.x,this.y,this.width,this.height)}}]),e}(),c=new h.default,d=new h.StaticLayer(s.BACKGROUND),y=new l(d.getWidth(),d.getHeight());d.addEntity(y),c.registerLayer(d),d.allowRerenderOnNextFrame();var O=new h.DynamicLayer(s.SQUARE),v=new f(O);O.addEntity(v),c.registerLayer(O),c.start();
},{"../../src":"fUdq"}]},{},["Z4eZ"], null)
//# sourceMappingURL=/typescript-render-engine/bouncing-square.d38e3b93.js.map