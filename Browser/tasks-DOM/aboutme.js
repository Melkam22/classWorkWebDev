
//target the tags
let myStyle = document.querySelector("h1");
let myStyle1 = document.querySelectorAll("LI");

//style contents of these tags
myStyle.style.fontFamily="sans-serif";
myStyle1[0].style.fontFamily="sans-serif";
myStyle1[1].style.fontFamily="sans-serif";
myStyle1[2].style.fontFamily="sans-serif";

//style all at once, using forLoop
for(let a=0; a<myStyle1.length; a++){
    myStyle1[a].style.color="green";
}
//replace contents of these tags
myStyle1[0].innerHTML="Name";
myStyle1[1].innerHTML="Address";
myStyle1[2].innerHTML="Hobbies";

//li, change the class to list-item

/* let myChange = document.createElement("class");

myChange.setAttribute("list-item", ); */

//set conditions to change the color of li etc
let myLis = document.querySelectorAll("LI");

for(let b=0; b<myLis.length; b++){
    if(b%2 ==0){
        myLis[b].style.fontSize="22px";
        myLis[b].style.color="red";
    }
}

//append a picture of you..., 
