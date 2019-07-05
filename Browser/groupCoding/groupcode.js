
 
 

/* function getRandomNumber(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
    return Math.floor(Math.random()*(max-min +1)+min); 
}
getRandomNumber(); */

//random Number generation guess game
 
let randomNumber =  Math.floor(Math.random()*11);

console.log(randomNumber);
function randomNumberGenerator(){
    let guessedNumber = randomNumber;
    //let guessed=1;
    let guessed = Number(prompt("hi, please insert No. from 1 to 10"));
    let myIncrement=1;

    while(guessed !== guessedNumber && myIncrement <3){
        guessed = prompt("what you guessed is wrong, note that you have only 2 more attempts left")
        myIncrement++;
    } 
     if( guessed === guessedNumber && myIncrement <3){
        alert("Bravo! you guessed it right!")
        //myIncrement++;
    } else {
         alert("sorry, you have failed to get it right") 
    }
}
randomNumberGenerator();