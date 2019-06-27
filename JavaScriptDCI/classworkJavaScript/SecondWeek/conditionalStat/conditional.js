
    
    /* conditional statement and ternaryOperataion under one function */

let varOne = 10;
let varTwo = 10;
if(varOne >= varTwo){
    console.log("I am Ashu");

    console.log((12>2)? "The condition is true": "The condition is false");
    /* let tenaryOp = (12>2)? console.log("The condition is true") :
    console.log("The condition is false"); */
}

let varThree;
varThree = "1";
if (varThree == true) {
console.log(varThree + " is a string.");
}

                        /* another example */

let oneVal = 12;
let twoVal = 14;
let threeVal = 8;

if((oneVal<twoVal) && (oneVal>threeVal) || ((threeVal>oneVal))){
    console.log("This is the && || function");
    console.log((12!=12)? "If true, this ll be executed" : 
     "If false, this ll be executed");
}

else{console.log("if the variable is not true, this ll appear.");}