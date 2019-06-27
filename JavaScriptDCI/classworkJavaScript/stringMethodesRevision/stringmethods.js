
                        /* string method revision */


let myString ="please find the button & click on the button to find the result.";

console.log(myString.length);
console.log(myString.indexOf("u"));//give me the index of u in the list "firs-tone"
console.log(myString.lastIndexOf("u"));//give me the last U on the list
let findPosition = myString.indexOf("find", 12);//search for this word after line 12
console.log(findPosition);
let searchString = myString.search("on");
console.log(searchString);//it ll give us the number of the string where it lies

let stringFruits = "apple, banana, orange";
let slicedString = stringFruits.slice(7, 13);
console.log(slicedString);//we ll get only banana

let listFruits = "apple, banana, orange";
let substringedFruit = listFruits.substring(7,-1);
console.log(substringedFruit);//same function as slice, negative value put elements on the opposite side 

let toBeReplacedString ="This is a very Cold day!";
let replaced = toBeReplacedString.replace(/cold/i, "sunny");//case insensitive
console.log(replaced);//replace this by this on the list & no effect on capital small letters

let mySentence = "Hello World!";
let chartedAtValue = mySentence.charAt(6);
console.log(chartedAtValue);//gives only one particular index value

let mySentence1 = "Hello World!";
let asquiCode = mySentence.charCodeAt(1);
console.log(asquiCode);//we ll get the asqui code/oreder of the letter


                        /* converting a string to an array */

let myString1 = "a, b c, d";
let toArray = myString1.split(" ");
console.log(toArray);//changing a string to an array
console.log(typeof toArray);