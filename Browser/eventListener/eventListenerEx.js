
let button = document.querySelector("#btn");
let list = document.querySelector("ul");

let listVisible = false;
button.addEventListener("click", function listener(){
    listVisible = !listVisible;
    if(listVisible){
        list.style.display="block";
        button.innerHTML= 'get them out of here !'; 
    } else {
        list.style.display= 'none';
        button.innerHTML = 'show favorite destination'
    }
    
    //button .removeEventListener('click', listener)
});