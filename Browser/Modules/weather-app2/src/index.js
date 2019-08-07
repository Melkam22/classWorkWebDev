
import {myDate} from "./date.js";
myDate();

import {focusBlur} from "./focus-blurd.js";
focusBlur();

/* import {switchFunction} from "./switch.js";
switchFunction(); */

let iconSpan = document.querySelector(".icon-span");
let myHumidity = document.querySelector(".humidity");
let myWindSpeed = document.querySelector(".wind-speed");
let myTemperature = document.querySelector(".temperature");
let myCountry = document.querySelector(".country");
let changingIcon = document.querySelector("#freeIcons");

//weather predictions
let myTomorrow = document.querySelector(".temp");
let myTomorrow1 = document.querySelector(".wind");
let myAfterTomorrow = document.querySelector(".temp1");
let myAfterTomorrow1 = document.querySelector(".wind1");
let myInThreeDays = document.querySelector(".temp2");
let myInThreeDays1 = document.querySelector(".wind2");
let myInFourDays = document.querySelector(".temp3");
let myInFourDays1 = document.querySelector(".wind3");




let myInput = document.querySelector(".button");
myInput.addEventListener("click", function(){
    let myValue = document.querySelector(".input");
    let myCity = myValue.value;
    let myApi = `http://api.openweathermap.org/data/2.5/forecast?q=${myCity}&APPID=950a99d07777436d293fd763f07f0f90&units=metric`;
    fetch(myApi)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data);

        myHumidity.innerHTML +=  data.main.humidity + "%";
        myWindSpeed.innerHTML += data.wind.speed + "km/h";
        myTemperature.innerHTML += Math.floor(data.main.temp) + "°C";
        myCountry.innerHTML += data.sys.country;
        iconSpan.innerHTML = data.weather[0].main;
        changingIcon.innerHTML = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        //weather predictions
        myTomorrow.innerHTML = Math.floor(data.main.temp) + "°C";
        myTomorrow1.innerHTML = data.wind.speed +"kmh";
        myAfterTomorrow.innerHTML = Math.floor(data.main.temp) + "°C";
        myAfterTomorrow1.innerHTML = data.wind.speed +"kmh";
        myInThreeDays.innerHTML = Math.floor(data.main.temp) + "°C";
        myInThreeDays1.innerHTML = data.wind.speed +"kmh";
        myInFourDays.innerHTML = Math.floor(data.main.temp) + "°C";
        myInFourDays1.innerHTML = data.wind.speed +"kmh";

        //background img changes with click
        
    })
})
 