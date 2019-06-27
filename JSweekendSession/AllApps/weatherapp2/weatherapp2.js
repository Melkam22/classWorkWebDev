
window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let city = "Berlin";            /* const proxy = "https://cors-anywhere.herokuapp.com/"; */
            const api=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=386265e63b71f1f72e77fb2a6a3d003c`; 
             
            fetch (api)
            .then (response => {
                return response.json();
            }) 
            .then (data => {
             
            console.log(data.name);
            locationTimezone.innerHTML=data.name;
            
            console.log(data);
            temperatureDegree.innerHTML=data.main.temp;
            /* const {temperature, summary} = data.currently; */
           
            console.log(data.weather[0].description);
            temperatureDescription.innerHTML=data.weather[0].description; 
                  
            });
        });
    }
});