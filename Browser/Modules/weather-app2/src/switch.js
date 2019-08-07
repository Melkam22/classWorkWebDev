
function switchFunction (condition){
    switch (condition.weather[0].main) {
        case "Clear":
        document.body.style.backgroundImage = 'url("./imgfolder/sunnysky.jpeg")';
        break;
        case "Rain":
        document.body.style.backgroundImage = 'url("./imgfolder/sunnysky.jpeg")';
        break;
        case "Clouds":
        document.body.style.backgroundImage = 'url("./imgfolder/sunnysky.jpeg")';
        break;
        case "Mist":
        document.body.style.backgroundImage = 'url("./imgfolder/sunnysky.jpeg")';
        break;
        case "Drizzle":
        document.body.style.backgroundImage = 'url("./imgfolder/sunnysky.jpeg")';
        break;
        case "Windy":
        document.body.style.backgroundImage = 'url("./imgfolder/sunnysky.jpeg")';
        break;
        default:
        break;
}
}

export {switchFunction};