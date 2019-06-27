                        /* ternary operators */

let firstVar = 15;
let secondVar = 20;
let thirdVar = 15;
let fourthVar = 20;

let ternaryOp = (firstVar < secondVar)? "The answer is True"
:"the answer is False";

console.log(ternaryOp);

/* if the condition is true the first string ll be printed out if the 
condition is false the second string ll be printed out. */

let ternary = ((firstVar ==fourthVar) && (secondVar!=thirdVar))? 
"The answer is True" : "The answer is False";

console.log(ternary);

                /* examples from MDN web docs */
function getFee(isMember) {
return (isMember ? "$2.00" : "$10.00");
 }

console.log(getFee(false));

console.log(getFee(1));

console.log(getFee(0));

/*
var age = 20;
var education = "diplome";
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer" */