
                                            /* return function */

function sum (a, b) {
    let sum = (a+b);
    return sum;
}
let result = sum(5, 2);

console.log("returned", result);//we can put where ever our variable in the script 


console.log(".........................................................................................");


function checkAge(age) {
    if(age > 18) {
        return true;
    } else {
        return false;
       /*  console.log("You are a minor!") */;
    }
}
/* checkAge(27); *///we are seeing nothing, since return is not printing out anything

function letDrive(age){
if(checkAge(age)) {
    return console.log("you can drive");
}else {
    return console.log("you can not drive");
}
}
letDrive(19);//these 2 functions are together



console.log(".........................................................................................");

let cloudyDay = true;

if(!cloudyDay) {
    console.log("I want coffee");
} else {
    console.log("I want beer");
};//the opposit will happen since we have used "!"

console.log("..............................with & without declared variables ...............");


function doNothing() {
    
    let a;
    let b;
    return;

}
console.log(doNothing() === undefined);//we ll get true since the return is empty & undeclared variables


function doSomething() {
    let a = 1;
    let b = 9;
    let c = a + b;
   /*  console.log(c); *///console has to be inside the braces and we ll get the answer
    return c;
     
}
console.log(doSomething());  /* === undefined *///we ll get false since return has a value 

//we can console.log the function out side and we can get the answer /even after the return funct'n/