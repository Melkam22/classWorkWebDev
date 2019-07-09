
myButton = document.querySelector("#btn");
content = document.querySelector("#container");

function eventListen(event){
    if(event.type === "mouseover"){
        content.style.display="none";
         
    } else if(event.type === "mouseup"){
        //location.reload(event); 
        content.style.display="block"; 
        content.style.display="flex"; 
    }
}
myButton.addEventListener("mouseover", eventListen);
myButton.addEventListener("mouseup", eventListen);



//append elements from js
/* myFive = document.createElement(".five");
//myPara = document.createElement("p");

myFive.textContent="five";
myFive.style.width="150px";
myFive.style.height="170px";



let myContainer = document.querySelector(".container");

myContainer.appendChild(myFive);
//myContainer.appendChild(myPara);

document.body.appendChild(myContainer);
//document.body.appendChild(myPara);

//mouse hover on button content disappears & click content coming back 

  */ 