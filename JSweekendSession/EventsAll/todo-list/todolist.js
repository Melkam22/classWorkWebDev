

/* myButton = document.querySelector("#btn");
myContainer = document.querySelector(".container");
myButton.addEventListener("click", function(event){
     
    myUl = document.createElement("UL");
    myLi = document.createElement("LI");

    myLi.textContent= document.querySelector("#input").value;

    myContainer.appendChild(myLi);
     
    document.body.appendChild(myContainer);
})//instead of body, my li's are printed in my container */


//to print li element along with the icon to delete it

myButton = document.querySelector("#btn");
myContainer = document.querySelector(".container");
myButton.addEventListener("click", function(event){
     
myInput = document.querySelector("#input").value;
    if(myInput !== ""){ 
let myUl = document.querySelector("#myUlId");
 
let myLi = `<li style="width:150px"> ${myInput} <span>X</span></li>`; 

myUl.innerHTML+=(myLi);
 
console.log(myLi);

     /* document.body.appendChild(finalResult); */
    }

})//weekend session, not working