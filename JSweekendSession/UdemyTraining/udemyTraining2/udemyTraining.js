
const button = document.querySelector("button");
const popup = document.querySelector(".frame");

button.addEventListener("click",()=>{
popup.style.display="block";
});//click on the button and show popup content

const close = document.querySelector(".close");
close.addEventListener("click",()=>{
    popup.style.display="none";
});//click on the close button & show nothing

popup.addEventListener("click",()=>{
popup.style.display="none";
});//click on anywhere in the text & show nothing