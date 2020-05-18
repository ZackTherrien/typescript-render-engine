parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gkAU":[function(require,module,exports) {
"use strict";var e,t;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.STATIC=0]="STATIC",e[e.DYNAMIC=1]="DYNAMIC"}(e=exports.LayerType||(exports.LayerType={})),function(e){e[e.FROM_ORIGIN=0]="FROM_ORIGIN",e[e.FROM_CENTER=1]="FROM_CENTER"}(t=exports.ResizeMethod||(exports.ResizeMethod={}));
},{}],"FljV":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../types"),i=function(){function r(){e(this,r),this.staticLayers=[],this.dynamicLayers=[],this.shouldRender=!0,this.lastFrameRenderedTime=null,this.renderingId=null,this.requestFrameA=this.requestFrameA.bind(this),this.requestFrameB=this.requestFrameB.bind(this)}return t(r,[{key:"getLayer",value:function(e,r){return r===n.LayerType.DYNAMIC?this.dynamicLayers.find(function(r){return r.layerIndex===e})||null:this.staticLayers.find(function(r){return r.layerIndex===e})||null}},{key:"registerLayer",value:function(e){e.layerType===n.LayerType.DYNAMIC?this.dynamicLayers.push(e):this.staticLayers.push(e)}},{key:"start",value:function(){this.shouldRender=!0,this.renderingId=window.requestAnimationFrame(this.requestFrameA)}},{key:"stop",value:function(){this.shouldRender=!1,this.renderingId&&window.cancelAnimationFrame(this.renderingId)}},{key:"requestFrameA",value:function(e){this.render(e),this.shouldRender&&(this.renderingId=window.requestAnimationFrame(this.requestFrameB))}},{key:"requestFrameB",value:function(e){this.render(e),this.shouldRender&&(this.renderingId=window.requestAnimationFrame(this.requestFrameA))}},{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.lastFrameRenderedTime||(this.lastFrameRenderedTime=e);var r=e-this.lastFrameRenderedTime;this.lastFrameRenderedTime=e;for(var t=0;t<this.dynamicLayers.length;t++)this.dynamicLayers[t].update(r),this.dynamicLayers[t].render()}}]),r}();exports.default=i;
},{"../types":"gkAU"}],"AQsV":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../types"),s=function(){function e(i,n,s,h){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;t(this,e),this.layerIndex=i,this.layerType=n,this.entities=[],this.width=void 0===s?document.body.clientWidth+1:s,this.height=void 0===h?document.body.clientHeight+1:h,this.x=o,this.y=r;var a=document.createElement("canvas");a.style.position="absolute",a.style.zIndex="".concat(this.layerIndex),a.style.display="inline",document.body.appendChild(a);var u=a.getContext("2d");if(!u)throw new Error("Could not initialize canvas 2D context.");this.context=u,this.context.translate(-.5,-.5),this.resize(this.width,this.height),this.setPosition(this.x,this.y)}return i(e,[{key:"resize",value:function(t,e){var i=0,s=0;(arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.ResizeMethod.FROM_ORIGIN)===n.ResizeMethod.FROM_CENTER&&(i=(this.width-t)/2,s=(this.height-e)/2),this.width=t,this.height=e,this.context.canvas.width=this.width,this.context.canvas.height=this.height,this.setPosition(this.x+i,this.y+s)}},{key:"setPosition",value:function(t,e){if(this.x=t,this.y=e,!this._isLayerWithinBounds())throw new Error("Cannot position and resize a layer outside of document body.");this.context.canvas.style.left="".concat(this.x,"px"),this.context.canvas.style.top="".concat(this.y,"px")}},{key:"addEntity",value:function(t){if(!this._entityIsRenderable(t))throw new Error("All entities must have a render function.");if(this.layerType===n.LayerType.DYNAMIC&&!this._entityIsUpdatable(t))throw new Error("All entities of dynamic layers must have an updater function.");this.entities.push(t)}},{key:"removeEntity",value:function(t){var e=this.entities.indexOf(t);-1!==e&&this.entities.splice(e,1)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getContext",value:function(){return this.context}},{key:"clear",value:function(){this.context.clearRect(-1,-1,this.width,this.height)}},{key:"update",value:function(t){if(this.layerType===n.LayerType.DYNAMIC)for(var e=0;e<this.entities.length;e++)this.entities[e].update(t)}},{key:"render",value:function(){this.clear();for(var t=0;t<this.entities.length;t++)this.entities[t].render(this.context)}},{key:"_entityIsRenderable",value:function(t){return Boolean(t.render)}},{key:"_entityIsUpdatable",value:function(t){return Boolean(t.update)}},{key:"_isLayerWithinBounds",value:function(){return this.width+this.x>document.body.clientWidth||this.height+this.y>document.body.clientHeight||this.x<0||this.y<0}}]),e}();exports.RenderingLayer=s;
},{"../types":"gkAU"}],"fUdq":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=r(require("./Engine")),t=require("./Engine");exports.IEngine=t.IEngine;var i=require("./RenderingLayer");exports.IRenderingLayer=i.IRenderingLayer,exports.RenderingLayer=i.RenderingLayer,e(require("./types")),exports.default=n.default;
},{"./Engine":"FljV","./RenderingLayer":"AQsV","./types":"gkAU"}],"tkCx":[function(require,module,exports) {
"use strict";var e,r;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.BACKGROUND="rgb(14, 17, 37)",e.SCORE_BACKGROUND="#FF0",e.SCORE_TEXT="rgb(14, 17, 37)",e.WALLS="rgb(17,0,244)",e.PACMAN="#FF0"}(e=exports.Colors||(exports.Colors={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.SCORE=1]="SCORE",e[e.ANIMALS=2]="ANIMALS",e[e.PACMAN=3]="PACMAN"}(r=exports.LayerIndex||(exports.LayerIndex={})),exports.MIN_MOUTH_SIZE=.001,exports.MAX_MOUTH_SIZE=.2,exports.MOUTH_SPEED=exports.MAX_MOUTH_SIZE/650,exports.BODY_SPEED=75/650,exports.BODY_RADIUS=100,exports.pCx=200,exports.pCy=225,exports.ANIMAL_SPREAD_DISTANCE=300;
},{}],"BxjE":[function(require,module,exports) {
module.exports="/typescript-render-engine/dog-and-cat-cover.5e67e510.jpg";
},{}],"JQOu":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}var a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e};Object.defineProperty(exports,"__esModule",{value:!0});var n=a(require("../dog-and-cat-cover.jpg")),r=function(){function e(i,a,r,o){var h=this;t(this,e),this.handleLoad=function(t){return function(){h.img=t,h.animalManager.add(h),h.layer.addEntity(h)}},this.layer=r,this.width=200,this.height=100,this.x=i,this.y=a-this.height/2;var s=new Image;s.src=n.default,s.onload=this.handleLoad(s),this.animalManager=o}return i(e,[{key:"getEatten",value:function(){this.animalManager.remove(this),this.layer.removeEntity(this)}},{key:"update",value:function(t){}},{key:"render",value:function(t){this.img&&t.drawImage(this.img,this.x,this.y,this.width,this.height)}}]),e}();exports.default=r;
},{"../dog-and-cat-cover.jpg":"BxjE"}],"W5lG":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../constants"),r=function(){function t(i,n){e(this,t),this.width=i,this.height=n}return i(t,[{key:"render",value:function(e){e.fillStyle=n.Colors.BACKGROUND,e.fillRect(0,0,this.width,this.height),e.fillStyle=n.Colors.WALLS,e.fillRect(0,375,this.width,75),e.fillRect(0,0,this.width,75)}}]),t}();exports.default=r;
},{"../constants":"tkCx"}],"ZtLP":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var h=i[e];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}function e(t,e,h){return e&&i(t.prototype,e),h&&i(t,h),t}Object.defineProperty(exports,"__esModule",{value:!0});var h=require("../constants"),s=function(){function i(e,s,a){var o=this;t(this,i),this.isOutOfBounds=function(t){return t+o.radius>o.layer.getWidth()||t-o.radius<o.layer.getX()},this.layer=e,this.scorer=a,this.animalManager=s,this.radius=h.BODY_RADIUS,this.x=e.getWidth()/2+e.getX(),this.y=h.pCy,this.orientation="left",this.dx=-h.BODY_SPEED,this.dy=0,this.score=0,this.mouthSize=.2,this.mouthDelta=h.MOUTH_SPEED,this.mouthStart=Math.PI,this.mouthEnd=2*Math.PI,this.eyeCXdelta=50*Math.cos(.3*Math.PI),this.eyeCYdelta=50*Math.sin(.3*Math.PI)}return e(i,[{key:"changeDirection",value:function(t){"left"===t?(this.orientation="left",this.dx=-Math.abs(this.dx)):"right"===t&&(this.orientation="right",this.dx=Math.abs(this.dx))}},{key:"updateAnimalBounds",value:function(){for(var t=this.animalManager.get(),i=0;i<t.length;i++){var e=t[i],h=this.x;e.x<h&&e.x+e.width>this.x+this.radius&&e.y>this.y-this.radius&&e.y+e.height<this.y+this.radius&&(e.getEatten(),this.score+=1,this.scorer.updateScore(this.score))}}},{key:"updateBody",value:function(t){this.mouthSize+=this.mouthDelta*t,this.mouthSize<=0&&this.mouthDelta<0&&(this.mouthDelta*=-1),this.mouthSize<=0&&(this.mouthSize=h.MIN_MOUTH_SIZE),"left"===this.orientation?(this.mouthStart=Math.PI-this.mouthSize*Math.PI,this.mouthEnd=Math.PI+this.mouthSize*Math.PI):(this.mouthStart=this.mouthSize*Math.PI,this.mouthEnd=(2-this.mouthSize)*Math.PI);var i=(.25+this.mouthSize)*Math.PI;this.eyeCXdelta=50*Math.cos(i),this.eyeCYdelta=50*Math.sin(i),this.mouthSize>h.MAX_MOUTH_SIZE&&this.mouthDelta>0&&(this.mouthDelta*=-1)}},{key:"updatePosition",value:function(t){var i=this.x+this.dx*t;this.isOutOfBounds(i)||(this.x=i),this.updateAnimalBounds()}},{key:"update",value:function(t){this.updateBody(t),this.updatePosition(t)}},{key:"render",value:function(t){t.beginPath(),t.arc(this.x,this.y,100,this.mouthStart,this.mouthEnd,"left"===this.orientation),t.lineTo(this.x,this.y),t.closePath(),t.fillStyle=h.Colors.PACMAN,t.fill(),t.strokeStyle="#000",t.stroke(),t.beginPath();var i="right"===this.orientation?1:-1;t.arc(this.x+this.eyeCXdelta*i,this.y-this.eyeCYdelta,10,0,2*Math.PI),t.fillStyle="#000",t.fill(),t.strokeStyle="#FFF",t.stroke()}}]),i}();exports.default=s;
},{"../constants":"tkCx"}],"hqok":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0});var i=require("../constants"),n=function(){function t(r){e(this,t),this.layer=r,this.width=r.getWidth(),this.height=r.getHeight(),this.score=0}return r(t,[{key:"updateScore",value:function(e){this.score=e,this.layer.render()}},{key:"render",value:function(e){e.fillStyle=i.Colors.SCORE_BACKGROUND,e.fillRect(this.width-250,10,200,65),e.fillStyle=i.Colors.SCORE_TEXT,e.font="30px Arial",e.fillText("Score: ".concat(this.score),this.width-220,50)}}]),t}();exports.default=n;
},{"../constants":"tkCx"}],"yhm6":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(){function t(){e(this,t),this.entities=[]}return n(t,[{key:"remove",value:function(e){var t=this.entities.indexOf(e);-1!==t&&this.entities.splice(t,1)}},{key:"add",value:function(e){this.entities.push(e)}},{key:"get",value:function(){return this.entities}}]),t}();exports.Manager=i;
},{}],"cZD6":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../../src")),n=require("./constants"),a=r(require("./entities/animal")),i=r(require("./entities/background")),d=r(require("./entities/pacman")),y=r(require("./entities/score")),u=require("./entities/manager"),s=new t.default,o=new u.Manager,l=new t.RenderingLayer(n.LayerIndex.BACKGROUND,t.LayerType.STATIC),L=new i.default(l.getWidth(),l.getHeight());l.addEntity(L),s.registerLayer(l),l.render();for(var c=new t.RenderingLayer(n.LayerIndex.ANIMALS,t.LayerType.DYNAMIC),f=0;f<6;f++)o.add(new a.default(n.pCx+n.ANIMAL_SPREAD_DISTANCE*f,n.pCy,c,o));s.registerLayer(c);var g=new t.RenderingLayer(n.LayerIndex.SCORE,t.LayerType.STATIC),A=new y.default(g);g.addEntity(A),s.registerLayer(g),g.render();var p=new t.RenderingLayer(n.LayerIndex.PACMAN,t.LayerType.DYNAMIC),w=new d.default(p,o,A);p.addEntity(w),s.registerLayer(p),s.start(),document.body.onkeydown=function(e){"d"===e.key?w.changeDirection("right"):"a"===e.key&&w.changeDirection("left")};
},{"../../src":"fUdq","./constants":"tkCx","./entities/animal":"JQOu","./entities/background":"W5lG","./entities/pacman":"ZtLP","./entities/score":"hqok","./entities/manager":"yhm6"}]},{},["cZD6"], null)
//# sourceMappingURL=/typescript-render-engine/pacman.b29052b1.js.map