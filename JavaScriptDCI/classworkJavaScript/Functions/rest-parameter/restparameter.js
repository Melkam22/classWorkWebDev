
            /* Rest Parameters, only for functions */

function sUm (a,b) {
    return a+b;
}
console.log(sUm(10,10));//we ll get 20

                /* spread operators */

function sumAll(...argums) {
    let sum =0;
    for(let argum of argums) sum += argum;
    return sum;
}
console.log(sumAll(10,20/* ,13,27,20,40, */));//we ll get 130

function subtraction(c,d) {
    return c-d;
}
console.log(subtraction(25,11));//we ll get 14


function subtraction1 (...minuses) {
    let subtract=0;
    for(minus of minuses) subtract-=minus;
    return subtract;
}
console.log(subtraction1(10, 2, 4, -5,/*7 */));//I got -28 ???


/* all not hard-coded arguments will be rendered in an array .. */

function showName (firsName, secondName, ...word) {
    console.log(`${firsName} ${secondName}`);
    console.log(word)//we ll get what is given after name in an array
    console.log(word[0]);//extra titles outside of an array
    console.log(word[1]);//not hard-coded outside of an array
}
showName("Julius", "Caesar", "Consul", "Imperator");

/* Argument Variable, I ll get outcomes though my function
is not expecting any outcome   */

function argVariable () {
    console.log("Argument variable:", arguments.length);//get 2
    console.log("Argument variable:", typeof arguments );//obj
}
console.log(argVariable("hello", "world"));//I ll get 2



                    /* spread operator */

console.log(Math.max(3,2,5,4));//we ll get 5
console.log(Math.min(3,2,5,4));//we ll get 2

                        /* or */

let myVarr = [2,4,12,22,32];
console.log(Math.max(...myVarr));//I ll get 32

            /*we can use it for many arrays */

let myVarr1 = [12, 1279, 33, 599, 21,]
console.log(Math.max(...myVarr, ...myVarr1));//we ll get 32 & 1279

let a = [1,2,3,4];
let b = [7,6,5,4];
let merge = [0, ...a, ...b];
console.log(merge);//it could concatenate values of all variables

let spreadStr = "Hello";// h e l l o
console.log(...spreadStr);//we ll get spread values of the variable
console.log(spreadStr[1]);

function iAmFunction(param1, param2, ...restParam) {
    console.log([...arguments]);//we ll get all values
    console.log(restParam);//we ll get only restParam values
}//it ll keep the 1st 2 for the variables & the rest for the spread variable
iAmFunction("Please", "keep", "your", "voice", "down");
//we ll see, Please keep your voice down &, for 1st 2 variables
//your voice down, the last rest parameter

console.log("......... method to change to odd/even ..........");
let reverse = arr=>arr.map(x=>x%2==0? x-1:x+1);
console.log(reverse([1,2,3,4,5,6,7,8,9]));//odd & even numbers

console.log("......... exercise on rest parameter ..........");

function sumItAll (...values){
    let myJack=[];
    let sum1=0;
    for(let value of values)sum1 += value; 
    myJack.push(sum1);
    return myJack;
}
console.log(sumItAll(10,12,15,22,31));//sum of all numbers & put it in an array