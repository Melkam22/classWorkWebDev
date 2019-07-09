
function randomNumber (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
 
myButton = document.querySelector("#btn");
myButton.addEventListener("click", compareFunc);

let compareOne = randomNumber(0,10);
let myCounter=0;
 
function compareFunc(event){
    myCounter++;
    let myPara1 = document.querySelector("#para1");
    let myPara2 = document.querySelector("#para2");
    
    let mySecondComparer = Number(document.querySelector("#myInput").value);
    //console.log(mySecondComparer);

if(compareOne !== mySecondComparer && myCounter <3){
    myPara1.innerHTML="your guess was wrong!";
    myPara2.innerHTML=`you still have ${3-myCounter} chance${3-myCounter<=1?"":"s"}, try again!`;
} else if(compareOne === mySecondComparer & myCounter <3){
    myCounter++;
    myPara1.innerHTML="Bravo!! your guess was Correct!";
    myPara2.innerHTML=`you guess it correct after ${3-myCounter} attempt${3-myCounter<=1? "":"s"}!`;
    /* i.style.color="red"; */
} else {
    myPara1.innerHTML="Sorry!! you run out of chances!";
    myPara2.innerHTML=`Click on the refresh button & start the game again!`;
}

myRefresh = document.querySelector("#refresh");
myRefresh.addEventListener("click", refreshFunc);

function refreshFunc(event){
    window.location.reload();
}
}
 