!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){}]);


//the button active effect
let myInput = document.querySelector("input");
myInput.addEventListener("focus", function(event){
    event.target.style.backgroundColor="black";
    event.target.style.color="green";
},true);

myInput.addEventListener("blur", function(event){
    event.target.style.backgroundColor="";
},true);

//fetching data
let myIcon = document.querySelector(".icon");
let myTemperature = document.querySelector(".temperature");
let myWind = document.querySelector(".wind");
let myCountry = document.querySelector(".country");
let myHumidity = document.querySelector(".humidity");
 
let myButton = document.querySelector("#btn");
myButton.addEventListener("click", function(){
    let myCity = document.querySelector("#cityName").value;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=950a99d07777436d293fd763f07f0f90&units=metric`;

    fetch(api)
    .then(response=> {
        return response.json()
    })
    .then(data=>{
        console.log(data)

        myIcon.innerHTML = data.weather[0].description;
        myTemperature.innerHTML += data.main.temp + " °C";
        myWind.innerHTML += data.wind.speed;
        myCountry.innerHTML += data.sys.country;
        myHumidity.innerHTML += data.main.humidity+"%";
        //myExtra.innerHTML = data. etc.;
    })
})

let myExtra = document.querySelector(".extraBox");
    let myDate = new Date();
myExtra.innerHTML= myDate.toString();

 
