
function btn() { 

/* window.addEventListener("load", ()=> { *///we don't need it anymore since it ll be a direct btn search
    let long;
    let lat;
    let temprature = document.querySelector(".temprature");
    let humidity = document.querySelector(".humidity");
    let description = document.querySelector (".description")
    let country = document.querySelector (".country");
    let searchVille = document.getElementById("city");
    

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let city =  searchVille.value;            /* const proxy = "https://cors-anywhere.herokuapp.com/"; */
            const api=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=950a99d07777436d293fd763f07f0f90&units=metric`; 
             
            fetch (api)
            .then (response => {
                return response.json();
            }) 
            .then (data => { 
            console.log(data.main.temp);
            temprature.innerHTML=data.main.temp;
            
            console.log(data.main.humidity);
            humidity.innerHTML=data.main.humidity;
           
            console.log(data.weather[0].description);
            description.innerHTML=data.weather[0].description; 

            console.log(data.sys.country);
            country.innerHTML=data.sys.country; 

          });
        });
    }

};

 
                                            /* the day today */

function fullDate() {
     
    let myDate = new Date();
    /* console.log */alert(myDate);

    let getDate = myDate.getDate();//day in number
  /*   console.log(getDate); */

    let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let getDaysName = days[myDate.getDay()];//day's name in letter
    /* console.log(getDaysName); */
     
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let getMonthName = months[myDate.getMonth()];//month in letter
    /* console.log(getMonthName); */

    let getYear = myDate.getFullYear();//year in number
    /* console.log(getYear); */

    /* console.log */alert(`Today is : ${getDaysName}, ${getDate}th of ${getMonthName} ${getYear} `);
};
fullDate();//we ll get sth like today is : 12 May 2019, onload alert 
 

 



