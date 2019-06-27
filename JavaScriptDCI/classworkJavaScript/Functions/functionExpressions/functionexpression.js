
                                    /* normal function */

function  sayHi() {
    console.log("Hello!");
}
sayHi();

                                /* function expression  */

let myFunction = sayHi;//we take its braces away inorder to make it a variable rpresented under myfunction




myFunction();

let stat = "Hi";
let square = function(number) {
    let result = number * number;
    stat = "Hi2"
    console.log(result);
    console.log(stat);//console has to be inside the function, & we can assign outside and shadowit inside the function
}

square(5);//25 it is a statement


                                        /* ternary in a function, less advised to use*/

const age = 45;
let welcome = (age <=50) ?
function() {console.log("hello you!"); } :
function() {console.log("Welcome!"); };

welcome();


                                            /* more advised to use */ 

function welcome1() {
    if(age <= 20) {
        console.log("hello you!"); 
    } else {
        console.log("Welcome!");
    }
}
welcome1();