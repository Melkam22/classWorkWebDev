                
                /* logicalOperators are &&, || and ! */

let firstNum =12;
let secondNum = 15;
let thirdNum = 12;
console.log(`${firstNum <= thirdNum} && ${secondNum > firstNum}`);

console.log(((firstNum <= thirdNum) && (secondNum > firstNum)) || (firstNum == secondNum));

console.log(!((firstNum == thirdNum) || (secondNum > firstNum)));