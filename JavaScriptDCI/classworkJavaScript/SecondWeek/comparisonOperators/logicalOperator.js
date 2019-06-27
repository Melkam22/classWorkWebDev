                
                /* Logical operators with && result is false */

let firstVar = 10;
let secondVar = 20;
console.log((firstVar < secondVar) && (firstVar == secondVar));//quiz 1 false

            /* Logical operators with && multiple values*/
let firstVal = 10;
let secondVal = 20;
let thirdVal = 20;
let fourthVal = 20;  //quiz 2 false
console.log((firstVal < secondVal) && (firstVal ==secondVal)&&(thirdVal ==fourthVal));



                /* Logical operators with || result is true*/

let priVar = 10;
let secVar = 20;
console.log((priVar < secVar) || (priVar ==secVar));

        /* Logical operators with || multiple values result = true ???*/

let first = 12;
let second = 15;
let third = 20;
let fourth = 15;
console.log(((fourth > first) && (second == third) || (second >=fourth)));

                /* logical operators with not (!=) */

let elem1 = 10;
let elem2 = 20;
console.log(!(elem1 < elem2)); //quiz 5 false
