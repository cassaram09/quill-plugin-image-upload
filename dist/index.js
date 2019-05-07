!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=quill},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i={ID_SPLIT_FLAG:"__ID_SPLIT__",IMAGE_UPLOAD_PLACEHOLDER_CLASS_NAME:"quill-plugin-image-upload-placeholder"};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=o.a.import("formats/image"),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,p),n=t,o=[{key:"create",value:function(e){var n,r,o=e.split(i.ID_SPLIT_FLAG);o.length>1?(n=o[0],r=o[1]):r=e;var a=c(s(t),"create",this).call(this,r);return"string"==typeof r&&a.setAttribute("src",this.sanitize(r)),n&&a.setAttribute("id",n),a}}],(r=null)&&l(n.prototype,r),o&&l(n,o),t}();d.blotName="imageUpload",d.className=i.IMAGE_UPLOAD_PLACEHOLDER_CLASS_NAME,o.a.register({"formats/imageUploadPlaceholder":d});var y=document.createElement("style");y.type="text/css",document.getElementsByTagName("head")[0].appendChild(y),y.appendChild(document.createTextNode("\n  .".concat(i.IMAGE_UPLOAD_PLACEHOLDER_CLASS_NAME," {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: 3px solid #ccc;\n    border-top-color: #1e986c;\n    animation: ").concat("quill-plugin-image-upload-spinner"," 0.6s linear infinite;\n  }\n  @keyframes ").concat("quill-plugin-image-upload-spinner"," {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n")));var b={id:0,name:"QUILL_IMAGE_PLUS",generate:function(){var e=this.id;return this.id=e+1,"".concat(this.name,"_").concat(e)}};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quill=t,this.options=n,this.range=null,"function"!=typeof this.options.upload&&console.warn("[Missing config] upload function that returns a promise is required"),this.quill.getModule("toolbar").addHandler("image",this.selectLocalImage.bind(this))}var t,n,r;return t=e,(n=[{key:"selectLocalImage",value:function(){this.range=this.quill.getSelection(),this.fileHolder=document.createElement("input"),this.fileHolder.setAttribute("type","file"),this.fileHolder.setAttribute("accept","image/*"),this.fileHolder.onchange=this.fileChanged.bind(this),this.fileHolder.click()}},{key:"fileChanged",value:function(){var e=this,t=this.fileHolder.files[0],n=b.generate(),r=new FileReader;r.addEventListener("load",function(){var t=r.result;e.insertBase64Image(t,n)},!1),t&&r.readAsDataURL(t),this.options.upload(t).then(function(t){e.insertToEditor(t,n)},function(e){console.warn(e.message)})}},{key:"insertBase64Image",value:function(e,t){var n=this.range;this.quill.insertEmbed(n.index,"imageUpload","".concat(t).concat(i.ID_SPLIT_FLAG).concat(e))}},{key:"insertToEditor",value:function(e,t){var n=document.getElementById(t);n&&(n.setAttribute("src",e),n.removeAttribute("id"),n.classList.remove(i.IMAGE_UPLOAD_PLACEHOLDER_CLASS_NAME))}}])&&h(t.prototype,n),r&&h(t,r),e}();t.default=m}]);