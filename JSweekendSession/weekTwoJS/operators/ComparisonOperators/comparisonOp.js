
            /* ComparisonOperator: >, >=, <, <=, ==, !=, !== */

let firstVar = true;
let secondVar = 1;
console.log(`The result of 'true == 1' is : ${firstVar == secondVar}`);
console.log(`The result of 'true === 1' is : ${firstVar === secondVar}`);
 
/* double equal sign compares loosely, only the value, triple equal sign is a 
strict comparison it compares the value and the data type. */

let numberOne = "1";
let numberTwo = true;
console.log(`The result is : ${numberOne == numberTwo}`);

let numb = 120;
let numb1 = 121;
console.log(`${numb <= numb1}`);