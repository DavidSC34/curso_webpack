!function(e){function n(n){for(var t,i,u=n[0],c=n[1],l=n[2],p=0,s=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(f&&f(n);s.length;)s.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(t=!1)}t&&(a.splice(n--,1),e=i(i.s=r[0]))}return e}var t={},o={2:0},a=[];function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(r,t,function(n){return e[n]}.bind(null,t));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=c;a.push([7,0]),r()}([function(e,n,r){"use strict";r(2);function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,o;return n=e,(r=[{key:"render",value:function(e){var n=document.createElement("h1"),r=document.querySelector("body");n.innerHTML='Webpack is awesome. This is "'+e+'"page',r.appendChild(n)}}])&&t(n.prototype,r),o&&t(n,o),e}();n.a=o},,function(e,n,r){},,,,function(e,n,r){},function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.p+"86dad7b0c0ab1f85a8d8a71721139790.jpg";r(6);function a(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,t;return n=e,(r=[{key:"render",value:function(){var e=document.createElement("img");e.src=o,e.alt="Kiwi",e.classList.add("kiwi-image"),document.querySelector("body").appendChild(e)}}])&&a(n.prototype,r),t&&a(n,t),e}(),u=r(1),c=r.n(u);(new t.a).render(c.a.upperFirst("kiwi")),(new i).render()}]);