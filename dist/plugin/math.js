!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=Reveal.getConfig().math||{},t=(e.mathjax||"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js")+"?config="+(e.config||"TeX-AMS_HTML-full"),n={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};function r(e,t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}return{id:"math",init:function(a){r(e,n),r(e.tex2jax,n.tex2jax),e.mathjax=e.config=null,function(e,t){var n=document.querySelector("head"),r=document.createElement("script");r.type="text/javascript",r.src=e;var a=function(){"function"==typeof t&&(t.call(),t=null)};r.onload=a,r.onreadystatechange=function(){"loaded"===this.readyState&&a()},n.appendChild(r)}(t,(function(){MathJax.Hub.Config(e),MathJax.Hub.Queue(["Typeset",MathJax.Hub]),MathJax.Hub.Queue(a.layout),a.on("slidechanged",(function(e){MathJax.Hub.Queue(["Typeset",MathJax.Hub,e.currentSlide])}))}))}}}();Reveal.registerPlugin(r)}});