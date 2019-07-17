
function myDate(){
    let currentDate = document.querySelector(".date");
    let result = new Date();
    let dateToExport = result.toString();
    currentDate.innerHTML = dateToExport;
}

export{myDate};