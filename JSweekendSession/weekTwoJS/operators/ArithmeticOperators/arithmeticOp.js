
            /* arithmetic Operators: +, -, /, *, %, ++, -- */

let myNumb = 12;
let myNumb1 = 13;
console.log(`The result of 12 * 14 is: ${myNumb * myNumb1}`);
console.log(`The result of 12 + 14 is: ${myNumb + myNumb1}`);
console.log(`The result of 12 - 14 is: ${myNumb - myNumb1}`);
console.log(`The result of 12 / 14 is: ${myNumb / myNumb1}`);
console.log(`The remainder of 12 / 13 is: ${myNumb1 % myNumb}`); 
console.log((myNumb1 % myNumb));
console.log(`The result 12 increment : ${++myNumb}`);
console.log(`The result of 13 decrement is: ${-- myNumb1}`);


                                /* array */

let list = ["orange", "banana", "rice", "milk"];
console.log(list[1]);

                                /* another array */

let elements = [3,4];
elements.unshift(1, 2); /* elements to add at the beginning of an array */
elements.push(5,6);         /* elements to add in the middle of an array */
elements.splice(2, 0, "a", "b", "c",);
console.log(elements.includes("c")); //if the element exist we ll get "True"


                            /* function */

function greet(name, lastName) {
    console.log("Hello " + "my name is " + name + lastName);
}
greet("Ashu", " Shiferaw");

                                /* function */

function number (carre) {
    return carre * carre ;
}
console.log(number(4));

 