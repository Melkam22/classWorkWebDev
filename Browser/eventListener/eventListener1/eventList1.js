
let language = document.querySelector("#btn");
let myUl = document.querySelector("ul");

let myList  = false;
language.addEventListener("click", function myLanguages(){
    myList= !listVisible;
    if(listVisible){
        myUl.style.display="block";
        language.innerText ="remove them all! ";
    } else if (listVisible){
        myUl.style.display="none";
        language.innerText ="remove them all! ";
    }
})
