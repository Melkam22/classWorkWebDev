
function randomQuote(myQuote){
    let generateNew =  myQuote[Math.floor(Math.random()*myQuote.length)];
    console.log(generateNew);


    let myContainer = document.querySelector(".container");
        myContainer.innerHTML= generateNew/* randomQuote  /(MyQuote)*/;
       return generateNew;
}

export {randomQuote};