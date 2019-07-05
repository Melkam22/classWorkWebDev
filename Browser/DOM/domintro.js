

//the first text
document.body.style.backgroundColor = ("rgba(214,105,14,0.4)");

let first = document.getElementById("one");

one.style.color = "green";
one.style.fontSize = "25px";
one.style.border = "2px solid blue";
one.style.textAlign = "center";

console.dir(document);

//the second text
let second = document.querySelector("#two");
let secParagraphs = document.querySelectorAll("P");

second.style.backgroundColor = "silver";
second.style.marginTop = "10px";
second.style.padding = "8px";
second.style.width = "35%";

secParagraphs[0].innerHTML += " -this is added from the js";
secParagraphs[0].style.backgroundColor = "lightBlue";
secParagraphs[0].style.width = "35%";

secParagraphs[1].style.backgroundColor = "rgba(0,5,6,0.5";
secParagraphs[1].style.width = "35%";

secParagraphs[2].style.backgroundColor = "rgba(95,19,45,0.5";
secParagraphs[2].style.width = "35%";

let ex = 0;
function clc() {
    if (ex==0) {
        let three = document.querySelector("#three");
        three.style.backgroundColor = "rgba(1,7,8,.5)";
        three.style.padding="15px 5px";
        three.style.marginLeft="0%";
        three.style.width="35%";
        /* three.style.display="block";
        three.style.display="flex";
        three.style.flexWrap="wrap"; */
        ex++;   
    }
    else if(ex==1) {
        let three = document.querySelector("#three");
        three.style.backgroundColor="rgba(12,32,79,.5)";
        three.style.padding="25px 15px";
        three.style.marginLeft="25%";
        three.style.width="35%";
        three.style.borderRadius="10px 10px 10px 10px";
        ex++;
    } 
    else if(ex==2){
        let three = document.querySelector("#three");
        three.style.backgroundColor="rgba(90,72,89,.5)"
        three.style.padding="35px 25px";
        three.style.marginLeft="40%";
        three.style.width="35%";
        three.style.borderRadius="15px 15px 15px 15px";
        ex++;
    }
    else if(ex==3){
        let three = document.querySelector("#three");
        three.style.backgroundColor="rgba(190,172,189,.5)"
        three.style.padding="45px 45px";
        three.style.marginLeft="55%";
        three.style.width="35%";
        three.style.borderRadius="20px 20px 20px 20px";
        ex=0;
    }
    else if(ex==4){
        let three = document.querySelector("#three");
        three.style.backgroundColor="rgba(130,227,19,.5)"
        three.style.padding="15px 50px";
        three.style.marginLeft="80%";
        three.style.width="35%";
        three.style.borderRadius="25px 25px 25px 25px";
        ex=0;
    }
};


//submit box

var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
