
function printMessage() {
    console.log("Hi there!");
}

printMessage();//it ll print the message and it can be reused as many as possible


let myMessage = "Hello world!";//not taking this since it is global scope, called shadowing of variables
function printMessage1() {
    let myMessage = "Hi there again!";
    console.log(myMessage);
}
printMessage1();//we ll get only "hi there again" message since it is local scope


                                            /* exemple-1*/

function ashu() {
    let list = ["car", "house", "office", "vacation"];
    console.log(list[list.length-1]);
}

ashu();//function with array to print out the last array

                                            /* exemple-2*/

function ashu1() {
    let list1 = ["car", "house", "office", "vacation"];
        let collecter =[];
        for(let b=0; b<list1.length; b++) {
        splited = list1[b].substring(0,1).toUpperCase();
        restOf = list1[b].substring(1,Infinity);
        merged = splited + restOf;
         
        collecter.push(merged);
         
        }   
        console.log(collecter);//outside the curly bracket of loops to get only one list of response
    }  
ashu1();//function with loops

                                            /* exemple-3*/

function squareroot(number) {
    let squareroot = number * number;
    console.log(squareroot);
}
squareroot(10);//100, fixed varibles can be used again and again just by changing the value

 
function square(number1, number2) {
    let square = number1 * number2;
    console.log(square);
}
square(10,12);//120, setting 2 values is possible too


function newMessage (from, text) {
    let message = `${from}: ${text}`;
    console.log(message);
}
newMessage("Ashenafi", "Hello!");//string interpollation with various variables 



function newMessage1 (from1, to, text1="No message available") {
    let message1 = `${from1}: ${to} ${text1}`;
    console.log(message1);
}
newMessage1("Ashenafi", "Ashu", );//if the 3rd variable /text1/ is not given it ll print out the preset value 

                                        /* age calculator */

function ageCalculator (yearOfBirth) {
    let myAge = 2019 - yearOfBirth;
    console.log(`the age is: ${myAge}`);
}

ageCalculator(1983);








 


