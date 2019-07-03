

function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
return Math.floor(Math.random()*(max-min +1))+min;
}

let submitBtn = document.querySelector("#btn");
submitBtn.addEventListener("click", guessedNumber)

function guessedNumber(){
    let randomizedNumber = randomNumber(1,10);
    let inputValue = Number(document.querySelector("input").value);
    console.log(randomizedNumber);
    console.log(inputValue);
    let myIncrement=1;
    let heading = document.querySelector("h1");
    let paragraph = document.querySelector("p");


    while (randomizedNumber !== inputValue && myIncrement <=3){
        heading.innerHTML="Wrong!!!";
        paragraph.innerHTML=`Try again! You have ${3-myIncrement} attempts left`;
        myIncrement++;
    }
    
}
//guessedNumber();

/* function randomNumberGame2(){
    let playersGuess = randomNumber;
    let guess =1;
    let myIncrement =1;
    //guess = Number(prompt("put any number b/n 1 & 10 here"));
}
randomNumberGame2(); */