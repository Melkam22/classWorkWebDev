

function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
return Math.floor(Math.random()*(max-min +1))+min;
}


/* function randomNumberGame2(){
    let playersGuess = randomNumber;
    let guess =1;
    let myIncrement =1;
    //guess = Number(prompt("put any number b/n 1 & 10 here"));
}
randomNumberGame2(); */