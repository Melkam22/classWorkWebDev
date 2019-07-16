
/* import createBanner from "./banner.js";*/

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
let myDisplay = document.querySelector(".two");
let myIcon = document.querySelector(".icon");
let myTemperature = document.querySelector(".temperature");
let myWind = document.querySelector(".wind");
let myCountry = document.querySelector(".country");
let myHumidity = document.querySelector(".humidity");
let myImg =document.querySelector("#img");
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
        myDisplay.style.display="block";//to make the content visible on browser
        myDisplay.style.display="flex";
        document.querySelector(".span").innerHTML += data.weather[0].description;
        myImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;//for icons
        myTemperature.innerHTML += data.main.temp + " °C";
        myWind.innerHTML += data.wind.speed;
        myCountry.innerHTML += data.sys.country;
        myHumidity.innerHTML += data.main.humidity+"%";
    })
})

let myExtra = document.querySelector(".extraBox");
    let myDate = new Date();
myExtra.innerHTML= myDate.toString();

 









/*import WebpackImg from "./webpack-logo.png";

const createElement = message => {
  const element = document.createElement("div");
  element.innerHTML = message;
  return element;
};

const createImage = image => {
  const element = document.createElement("div");
  const imageElement = new Image();
  imageElement.src = image;
  element.appendChild(imageElement);
  return element;
};

document.body.appendChild(
  createElement("Webpack lives by the love of Open Source.")
);

document.body.appendChild(createBanner());
document.body.appendChild(createImage(WebpackImg)); */