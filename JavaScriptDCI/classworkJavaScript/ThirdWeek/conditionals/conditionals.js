
                    /* conditional statements */

let integOne = 49;
let integTwo = 92;

if((integOne >= 50 && integOne < 99) || (integTwo >= 50 && integTwo < 99)){
    console.log("This is true");
} else {
    console.log("This is false.")
} //quiz one


let air = 49;
let ball = 50;
let call = 40;

if ((air >= 50 && air < 99) || (ball >= 50 && ball < 99) || (call >= 50 && call < 99)) {
    console.log("The answer is true.");
} else {
    console.log("The answer is false.");
}//quiz two
 

let a = 90;
let b = 95;
let c = 80;

if(a > b && a > c) {
    console.log("The variable a is the biggest number.");
}
else if(b > a && b > c) {
    console.log("The variable b is the biggest number.");
} else {console.log("C is the biggest number.");} //quiz 3


let myString = "javascript";
if(myString.substring(0,2)==="Py"){
    console.log(myString);
}else {console.log(`Py${myString}`);
}//quiz 4


let myVar = "Subfounder";
if(myVar.substring(0,3)==="sub") {
    console.log(myVar);
} else if (myVar.substring(0,2)==="co") {
    console.log(myVar);
} else {
    console.log(`The ${myVar}`);
}//another example


/* if((myVar[0].toLowerCase()==="p") && (myVar[1].toLowerCase()==="y")) {
    console.log(myVar);
} else {
    console.log(`${py}${myVar}`);
} */

let variable = 8;
let variable1 = 7;
let sum = (variable * variable1);

if (sum >= 50 && sum <= 80){
    console.log(65);
} else {
    console.log(80);}//quiz 5

let oneElem = 4;
let twoElem =5;
let sumElem = (oneElem + twoElem);

if(sumElem == 8 || oneElem - twoElem == 8 || twoElem - oneElem == 8) {
    console.log("This is true");
}  else {
    console.log("this is false.");
}//quiz 6

let integerOne = 8;
let integerTwo = 7;
let integerSum = (integOne + integTwo);

if (integerOne + integerTwo == 16 || integerSum - integerOne == 9) {
    console.log("this is a true value");
}else {
    console.log("this is a false value");
} //quiz 7


            /* modulos 7 & 11 160%2 =0*/

/* let numeroUn = 22;
let numeroDeux = 3;
if(numeroUn % numeroDeux == 1){
    console.log("the modulo is correct."); 
} else {
    console.log("the remainder/modulo/ is not correct.");   
}//quiz 8 */

/* let numbUn = 121;
let numbDeux = 110;
let numbTrois = 18;
let numbQuat = 11;
if((numbUn % numbDeux == 11) && (numbTrois % numbQuat == 7)) {
    console.log("the modulo is correct!");
} else {
    console.log("the modulo is not correct!");
}//extra quiz 8

 */

let numburr = 14;
let numburr1 = 22;
if ((numburr % 7 === 0) || (numburr % 11 === 0)) {
    console.log(`${numburr} is a multiple of 7 & 11`);
} else if ((numburr1 % 7 ===0) || (numburr1 % 11 ===0)) {
    console.log(`${numburr1} is a multiple of 7 & 11`);
} else {
    console.log(`neither ${numburr} nor ${numburr1} are multiples of 7 & 11.`)
}//quiz 8



let first = 10;
let second = 10;
let bothSum = 20;
if(first + second == bothSum) {
    console.log(bothSum * 3);
} else {
    console.log("the value is not given");
}//quiz 9


let value = 10;
let value1 = 19;
let sumvalue2 = value-value1;
/* let difference = (value - value1); */

if (value <= value1) {
    console.log(sumvalue2);
 } else {console.log(sumvalue2 * 2);
}//quiz 10


 