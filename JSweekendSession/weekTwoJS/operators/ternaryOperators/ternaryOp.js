/* ternaryOperations includes: condition, trueExpression and FalseExpression */

let statMarried = true;
console.log((statMarried == 0)? "You can join us" : "sorry, see you next time");

let degree = true;
let age = 18;
console.log(((degree == 1) && (age > 18))? "you are eligible" : "try next time");

/* since it is && logic, both values have to be true inorder to get the 
first statement. this one gives the second one due to > but not >= */


let age1 = 21;
let beverage = (age1 >= 21)? "beer" : "juice";
console.log(beverage);

                                /* or */

/* function wage (high){
    return (high ? "$100" : "$150");
    console.log(wage(true));
} */






