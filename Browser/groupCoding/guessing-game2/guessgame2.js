

function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
return Math.floor(Math.random()*(max-min +1))+min;
}

let submitBtn = document.querySelector("#btn");
submitBtn.addEventListener("click", guessedNumber)

    let randomizedNumber = randomNumber(50,60);
    let myIncrement=0;
     
function guessedNumber(){
    myIncrement++;
    //console.log(myIncrement);
    let inputValue = Number(document.querySelector("input").value);
    console.log(randomizedNumber);
    //console.log(inputValue);
    let heading = document.querySelector("h1");
    let paragraph = document.querySelector("p");

    if(randomizedNumber !== inputValue && myIncrement <3){
        heading.innerHTML="Wrong!!!";
        paragraph.innerHTML=`Try again! You have ${3-myIncrement} 
        attempt${3-myIncrement<=1? "": "s"} left`;
         
    }
 else if (randomizedNumber === inputValue && myIncrement <=3){
        heading.innerHTML="Bravo!!!";
        paragraph.innerHTML=`The number is indeed ${randomizedNumber}, 
        you got the number correctly after ${3-myIncrement} 
        attempt${3-myIncrement<=1? "": "s"}`;
    }  
    else {
        heading.innerHTML="Sorry, you lost!";
        paragraph.innerHTML="Refresh and play again!";
    }
}

//loader refresh
document.querySelector("#load").addEventListener("click", loader);
function loader(){
window.location.reload();
}
 