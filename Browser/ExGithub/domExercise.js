//question one
function calc() {
    let a = Number(document.querySelector("#value1").value);
    let b = Number(document.querySelector("#value2").value);
    let op = document.querySelector("#operator").value;

    let calculate;
    if(op == "add"){
        calculate = a+b;
    }
    else if(op == "sub"){
        calculate = a-b;
    }
    else if(op == "div"){
        calculate = a/b;
    } else if (op == "mul"){
        calculate = a*b;
    }

document.querySelector("#result").innerHTML += /* Math.round( */calculate;

}

//question two

a=0; /* apple */
function fnc(){
questionTwo = document.querySelector("#btn");
if(a==0) {
    questionTwo.innerHTML = "  humm, exquisite!";
    questionTwo.style.width= "270px";
    questionTwo.style.height = "50px";
    questionTwo.style.backgroundColor="skyblue";
    questionTwo.style.color = "black";
    questionTwo.style.fontSize = 25;
    a++;
}
else if(a==1){
    questionTwo.style.backgroundColor="silver";
    questionTwo.style.width = "120px";
    questionTwo.style.height = "25px";
    questionTwo.innerHTML ="Apple";
    a=0;
}
}

b=0; /* banana */
function fnc1(){
    questionTwo1 = document.querySelector("#btn1");
    if(b==0) {
        questionTwo1.innerHTML = "  sooo, delicious!";
        questionTwo1.style.width= "270px";
        questionTwo1.style.height = "50px";
        questionTwo1.style.backgroundColor="skyblue";
        questionTwo1.style.color = "black";
        questionTwo1.style.fontSize = 25;
        b++;
    }
    else if(b==1){
        questionTwo1.style.backgroundColor="silver";
        questionTwo1.style.width = "120px";
        questionTwo1.style.height = "25px";
        questionTwo1.innerHTML ="Banana";
        b=0;
    }
    }

    c=0; /* strawberry */
function fnc2(){
    questionTwo2 = document.querySelector("#btn2");
    if(c==0) {
        questionTwo2.innerHTML = "  amazingly sweet!";
        questionTwo2.style.width= "270px";
        questionTwo2.style.height = "50px";
        questionTwo2.style.backgroundColor="skyblue";
        questionTwo2.style.color = "black";
        questionTwo2.style.fontSize = 25;
        c++;
    }
    else if(c==1){
        questionTwo2.style.backgroundColor="silver";
        questionTwo2.style.width = "120px";
        questionTwo2.style.height = "25px";
        questionTwo2.innerHTML ="Strawberry";
        c=0;
    }
    }
    

//dropdown

e=0;
function effect(){
    let myEffect = document.querySelector("#dropDown");
    let firstDrop = document.querySelector("#app");
    let secondDrop = document.querySelector("#ban");
    let thirdDrop = document.querySelector("#straw");

    if(e==0){
    myEffect.style.backgroundColor="rgba(123,234,23,.5)";
    myEffect.style.width="200px";
    myEffect.style.height="50px";
    e++;
}
else if(e==1){
    firstDrop.style.backgroundColor="skyblue";
    alert("humm, apple is yummy!");
    e++;
}
else if(e==2){
    secondDrop.style.backgroundColor="skyblue";
    alert("sooo, banana, is so delicious!");
    e++;
}
else if(e==3){
    thirdDrop.style.backgroundColor="skyblue";
    alert("strawberry is amazingly sweet!");
    e++;
}

else if(e==4){
    myEffect.style.backgroundColor="silver";
    myEffect.style.width="80px";
    myEffect.style.height="22px";
    e=0;
}
}



//question three

function rad(){
   let myRad = document.querySelector("#radius").value;
   let myHeight = document.querySelector("#height").value;
   let calculate = 3.14*myRad**2 *myHeight;

document.querySelector("#volResult").innerHTML += /* Math.round( */calculate;
}

//question four

function areaCalc() {
    let myHeight = document.querySelector("#sideHeight").value;
    let myWidth = document.querySelector("#sideWidth").value;
    let area = (myHeight*myWidth);

document.querySelector("#areaResult").innerHTML += area;
}

//question 4-2

//let myWindow;
function btn4() {
let sideX = document.getElementById("sideX").value;
let sideY = document.getElementById("sideY").value;
window.innerWidth=sideX;
window.innerHeight= sideY;

let myWindow = window.open("", "", `width= ${sideX}, width= ${sideY}`);
myWindow.resizeTo(`${sideX},${sideY}`);
myWindow.focus();
}

//question five

let myBold = document.getElementsByTagName("strong");
let mainOne = document.querySelector("#jacket5");
let toNormal = document.querySelector("#jacket5");

toNormal.addEventListener('mousedown',function(){
  for(let i=0; i<myBold.length; i++) {
       myBold[i].style.backgroundColor = "white";
  }
} 
);

mainOne.addEventListener('mouseover',function(){
    for(let a=0; a<myBold.length; a++){                                                    
    myBold[a].style.backgroundColor = "rgba(123,48,101,.5)";
    }
}
);
 