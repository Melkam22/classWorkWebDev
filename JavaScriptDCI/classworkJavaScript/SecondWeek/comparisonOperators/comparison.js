           /*  Comparison operators */

          /*  question 1 true */
let num1 = 8;
let num2 = "8";
console.log(num1 == num2);


let numb1 = true;
let numb2 = "true";
            /*  question 2 false */
console.log(typeof numb1 == typeof numb2);

            /*  question 3 false */
console.log(numb1 === numb2);

let var1 = 8;
let var2 = "8";
                 /*  question 4 false */
console.log(var1 != var2);

let firstVar = 8;
let secondVar = 8;
console.log(firstVar > secondVar);  /*  question 5 false */
console.log(firstVar <= secondVar);   /*  question 6 true */
console.log(firstVar >= secondVar);      /*  question 7 true */

                    /* javascripts deficency  <=, >=*/
let var3 = "Ashenafi";
let var4 = "ashenafi";
console.log(var3 == var4);  /*  question 8 false */
