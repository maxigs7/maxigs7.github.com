!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=0)}([function(t,e,n){n(1),n(2),n(3),$(function(){$(".nav-link").on("click",function(t){$("html, body").animate({scrollTop:$(t.currentTarget.hash).offset().top},500)}),$("#burger").on("click",function(t){var e=$(this).data("target");$(e).toggleClass("collapse")}),$("[data-ago-from]").each(function(t,e){var n,o=$(this),r=o.data("ago-from"),a=o.data("ago-to"),u=moment(r,"MM/DD/YYYY");n=a?moment(a,"MM/DD/YYYY"):moment(),o.text("("+function(t,e){var n=(r=t,a=e,u=a.diff(r,"year"),i=a.diff(r,"month")-12*u,{year:u,month:i}),o="";var r,a,u,i;1==n.year?o+="YEAR "+n.year:1<n.year&&(o+="YEARS "+n.year);1==n.month?o+=" MONTH "+n.month:1<n.month&&(o+=" MONTHS "+n.month);return o}(u,n)+")")})})},function(t,e,n){},function(t,e,n){},function(t,e,n){}]);
//# sourceMappingURL=index.a03f5af7b1c4558d1152.js.map