 
function dateFunction(){
    let currentDate = document.querySelector(".date");
    //currentDate.addEventListener("load", function(){
    let myDate = new Date();
    let fullDate = myDate.toString();
    currentDate.innerHTML=fullDate;
console.log(fullDate);
//})
}
 
export {dateFunction};






 