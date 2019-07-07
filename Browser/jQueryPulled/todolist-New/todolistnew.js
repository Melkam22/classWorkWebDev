
 

myButton = document.querySelector("#btn");
myContainer = document.querySelector(".container");
myButton.addEventListener("click", function(event){
     
    myUl = document.createElement("UL");
    myLi = document.createElement("LI");

    myLi.textContent= document.querySelector("#input").value;

    myContainer.appendChild(myLi);
    /* myUl.appendChild(myLi); */

    document.body.appendChild(myContainer);
})//instead of body, my li's are printed in my container