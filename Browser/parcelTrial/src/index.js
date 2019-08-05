/* import { randomFill } from "crypto"; */

/* import {myFunc} from "./extra"

document.querySelector("h2").innerHTML +="this is my func to export"; */
//import {focusBlur} from "./focus&blur";
//focusBlur();

/* import {myApi} from "./myapi.js";
myApi(); */

//to target html elements
let myHumidity = document.querySelector(".one");
let myWind = document.querySelector(".two");
let myTemp = document.querySelector(".three");
let myCountry = document.querySelector(".four");
let myIcon = document.querySelector(".icon");
let myIconSpan = document.querySelector(".icon-span");

//let myBody = document.querySelector("body");

let myInput = document.querySelector(".btn");
myInput.addEventListener("click", function(){
    let myValue = document.querySelector(".input");
    let myCity = myValue.value;
let myFullApi = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=950a99d07777436d293fd763f07f0f90&units=metric`;
fetch(myFullApi)
    .then(response=>{
        return response.json();
})
.then(data=>{
    console.log(data);

    myHumidity.innerHTML += data.main.humidity + "%";
    myWind.innerHTML += data.wind.speed + "kmh";
    myTemp.innerHTML += Math.floor(data.main.temp) + "°c";
    myCountry.innerHTML += data.sys.country;
    myIconSpan.innerHTML = data.weather[0].description;
})

//how to change the background image ??
if(myIconSpan.innerHTML === "clear sky"){
myIcon.style.innerHTML = style.backgroundColor= "blue";    
    /* .style.backgroundImage = "url('../images/wind.jpg')"; */
}

})
