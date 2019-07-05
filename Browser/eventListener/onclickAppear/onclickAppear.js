
let values = document.querySelector("#btn");
let myUl = document.querySelector("ul");

let myList  = true;
values.addEventListener("click", function(){
    myList= !myList;
    if(myList){
        myUl.style.display="block";
        myUl.style.color="blue";
        myUl.style.fontSize="22px";

        values.innerText ="values reappear! "; 
    } else {
        myUl.style.display="none";
        //language.innerText ="remove them all! ";
    } 
})
