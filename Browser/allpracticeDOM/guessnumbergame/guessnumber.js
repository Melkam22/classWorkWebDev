
let myRandom = Math.floor(Math.random()*11);
console.log(myRandom);
function randomNumberGame(){
    let myConsole = myRandom;
    let myGuess = Number(prompt("put number between1 & 10 here."));
    let myCount=1;

    while (myGuess != myConsole && myCount <3){
        myGuess = prompt("your answer is not correct, try again!");
        myCount++;
    } if(myGuess === myConsole && myCount <3){
        alert("Bravo!, your answer is correct!")
    } else {
        alert("sorry, your trial attempt is over.")
    }
}
randomNumberGame();