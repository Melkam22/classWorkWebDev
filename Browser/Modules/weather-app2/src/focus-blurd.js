
function focusBlur(){
    let myFocus = document.querySelector(".input");
    myFocus.addEventListener("focus", function(event){
        event.target.style.background="black";
        event.target.style.color="green";
        event.target.style.fontWeight="bold";
    },true);

    myFocus.addEventListener("blur", function(event){
        event.target.style.background="";
    },true)
};

export{focusBlur};