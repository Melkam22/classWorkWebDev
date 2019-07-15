
let myButton = document.querySelector("#btn");
let myContainer = document.querySelector(".container");
let myContent = document.querySelector(".content");
myButton.addEventListener("click", function(event){
let myInput = document.querySelector("#input").value;
 
    if(myInput !== ""){
        let myLi = `<li>${myInput}<span style="margin:10px">X</span></li>`;
        
        let myUl = document.querySelector("#ul");
         myUl.innerHTML += (myLi);
        //console.log(myUl);
    }

    myUl = document.querySelector("#ul");
    myUl.addEventListener("click", function(event){
        if(event.target.tagName === "SPAN"){
            event.target.parentNode.remove();
        }
    })
})