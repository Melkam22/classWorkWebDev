
function chosenNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random()*(max-min +1))+min;
}

let mySubmitButton = document.querySelector("#clc");
mySubmitButton.addEventListener("click", luckyNumber);

let myRandomNumber = chosenNumber(1,10);
 
let myCounter=0;

function luckyNumber(){  
 
let myInput = Number(document.querySelector("input").value);
console.log(myRandomNumber);
let myH1 = document.querySelector("h1");
 
if(myRandomNumber !== myInput && myCounter <3){
    myH1.innerHTML =`no chance this time, try again, ${3-myCounter} attempt${3-myCounter<=1? "":"s"} left`;
    myH1.style.color="green";
    myH1.style.fontSize="45px";
} else if(myRandomNumber === myInput && myCounter <3){
    myH1.innerHTML=`The lucky number was ${myRandomNumber} & you got a car with ${3-myCounter} attempt${3-myCounter<=1? "":"s"}`;
    myH1.style.color="blue";
    myH1.style.fontSize="45px"; 
} else {
    myH1.innerHTML=`The number was ${myRandomNumber} you were not lucky this time, reset and try again!`;
    myH1.style.color="black";
}
myCounter++;//put it here, so that it hasn't go one round when I refresh the page
}

 

//refresh button

document.querySelector("#refresh").addEventListener("click", pageLoad);
function pageLoad(){
    window.location.reload();
    luckyNumber();//calling the function inside the refresh, to go to the landing page
}




//console.log(chosenNumber(0,10));