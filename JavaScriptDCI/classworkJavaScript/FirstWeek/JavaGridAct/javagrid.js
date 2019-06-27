
var btn=document.getElementById("btn");
btn.addEventListener("onclick",function playAnim(){
var box=document.getElementById("box");
box.style.animationName="slideOut";
box.style.animationDuration="2s";
box.style.animationPlayState="running";
});

var btn=document.getElementById("btn");
btn.addEventListener("ondblclick",function playAnim1(){
var box=document.getElementById("box");
box.style.animationName="slideBack";
box.style.animationDuration="2s";
box.style.animationPlayState="running";
});