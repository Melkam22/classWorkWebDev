/* window.addEventListener("mousedown", function(event){
    alert("It is clicked somewhere in the window");
    //console.log(event)
});  */

let link = document.querySelector("a");
link.addEventListener("click", function(event){
    console.log("redirecting stopped", event);
    event.preventDefault();//the link ll not work
})

document.getElementById("button12").addEventListener("mousedown", function(event){
    alert("button is clicked");
    if(event.button==2){//it ll not propagate, it print only what is in the code block
     event.stopPropagation();
     console.log("stop propagation", event);
    }
})
document.getElementById("demo").addEventListener("mousedown", function(event){
    alert("paragraph clicked", event);
})
 
let heading = document.querySelector("h1");
function listener (event){
    if(event.type === "mouseenter"){
        heading.style.color="red";
    } else if (event.type === "mouseleave"){
        heading.style.color="blue";
    }
    //console.log(event);
}
heading.addEventListener("mouseenter", listener);
heading.addEventListener("mouseleave", listener);//hover effect 
//heading.removeEventListener("mouseenter", listener);//to stop the event 
 
//DOM content loaded
function onLoad(event){
    //console.log(event);
    alert("this page has been loaded");
}
document.addEventListener("DOMContentLoaded", onLoad);
//the html content is loaded the 1st before the javascript ...
 
//key Up
let input = document.querySelector("input");
function onKeyUpEvent(event){
    //console.log(event);
    alert(`${event.key} was pressed`);
}
input.addEventListener("keyup", onKeyUpEvent);
//it ll tell us what ever key is pressed on the browser 
 
//Form events
function logSubmit(event){
    log.textContent = `Form submitted! Time Stump: ${event.timeStamp}`;
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData);
    console.log(event);
    console.log("formData.get(name)", formData.get("name"));
}

 
const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
//we ll get what is inserted in the name box

//resetting the time stamp
function logReset(event){
    resetLog.textContent = `Form reset! Time Stamp: ${event.timeStamp}`;
}
const resetLog = document.getElementById("reset-log");
form.addEventListener("reset", logReset); 