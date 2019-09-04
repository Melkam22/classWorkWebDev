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
let myBody = document.querySelector("body");

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
    console.log(data)

    myHumidity.innerHTML += data.main.humidity + "%";
    myWind.innerHTML += data.wind.speed + "kmh";
    myTemp.innerHTML += Math.floor(data.main.temp) + "°c";
    myCountry.innerHTML += data.sys.country;
    myIconSpan.innerHTML = data.weather[0].description;
 

if(data.weather[0].description === "clear sky"){
    myBody.style.backgroundImage = "url('/sunflower.826a5b6c.jpeg')"; 
}
else if(data.weather[0].description === "shower rain" ||
data.weather[0].description === "light rain" ||
data.weather[0].description === "moderate rain"){
myBody.style.backgroundImage = "url('/rain.jpeg')";
    //console.log(myIconSpan)
}
else if(data.weather[0].description === "drizzle"){
myBody.style.backgroundImage = "url('/drizzle.jpeg')"; 
}
else if(data.weather[0].description === "few clouds"){
myBody.style.backgroundImage = "url('/cloudyday.jpg')";
}
else if(data.weather[0].description === "scattered clouds" ||
        data.weather[0].description === "broken clouds" ||
        data.weather[0].description === "overcast clouds"){
    myBody.style.backgroundImage = "url('/scateredclouds.jpeg')";   
}
else if(data.weather[0].description === "mist" ||
data.weather[0].description === "fog"){
    myBody.style.backgroundImage = "url('/fog.jpg')";
}
else if(data.weather[0].description === "thunderstorm" || 
data.weather[0].description === "light thunderstorm" ||
data.weather[0].description === "heavy thunderstorm"){
    myBody.style.backgroundImage = "url('/thunderstorm.png')";
}
}) 
})
