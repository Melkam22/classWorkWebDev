!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=document.querySelector("input");n.addEventListener("focus",function(e){e.target.style.backgroundColor="black",e.target.style.color="green"},!0),n.addEventListener("blur",function(e){e.target.style.backgroundColor=""},!0);let r=document.querySelector(".two"),o=(document.querySelector(".icon"),document.querySelector(".temperature")),u=document.querySelector(".wind"),c=document.querySelector(".country"),i=document.querySelector(".humidity"),l=document.querySelector("#img");document.querySelector("#btn").addEventListener("click",function(){let e=document.querySelector("#cityName").value;fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=950a99d07777436d293fd763f07f0f90&units=metric`).then(e=>e.json()).then(e=>{console.log(e),r.style.display="block",r.style.display="flex",document.querySelector(".span").innerHTML+=e.weather[0].description,l.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,o.innerHTML+=e.main.temp+" °C",u.innerHTML+=e.wind.speed,c.innerHTML+=e.sys.country,i.innerHTML+=e.main.humidity+"%"})});let a=document.querySelector(".extraBox"),d=new Date;a.innerHTML=d.toString()}]);