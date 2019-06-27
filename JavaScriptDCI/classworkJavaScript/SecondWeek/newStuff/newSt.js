    /* string with backtick */

/* const str1 =`I am new stuff.`;
console.log(str1);

let player = {
    name: "Ashu",
    lastName: "Shiferaw",
} 
console.log("My name is \n " + player.name + "\n " + player.lastName);*/

                /* string with backtick and curly-bracket */

/* let person = {
        name: "Ashenafi",
        lastName: "Shiferaw",
    }
        console.log(`My name is ${person.name} ${person.lastName}`);

                          /* calculation */
/* let num1 = 5;
let num2 = 5;
console.log("The result of 5 * 5 is " + (num1 * num2));

                        /* calculation with back-ticks */
/*et numX = 5;
let numY = 5;
console.log(`The result of 5 + 5 is  ${numX + numY}`);
 */
                    /* JavaScript Methods */

                        /* 1 trim */

/* let string = "    Hello    ";
console.log(string);
console.log(string.trim());

                            /* with back-tick */
                            /*
let string1 = `    Hello    `;
console.log(string1);
console.log(string1.trim()); */

        /* to find stuff, and it is case sensitive (true or false) */

let str = `I am Inigo Montoya. You killed my father and prepare to die.`;
console.log(str.includes('Inigo'));//we ll get "true" since this word exists

            /* chosing letters or words on array using substring,
            choosing from certain No to certain No, ex end etc.*/
        

let str2 = `I am Inigo Montoya. You killed my father and prepare to die.`;
console.log(str2.split(' ').join('  '));
console.log(str2.substring(10, str2.length-2));
console.log(str2.substring(0, Infinity));

                        /* match for email ??*/

/* let string2 = `ashe@gmail.com`;

let regex = /\S+@+email+\.\S+/g;
console.log(string2.match(regex));
 */
                    /* lowercase and uppercase */

let string3 = `I am Inigo Montoya. You killed my father and prepare to die.`;
console.log(string3.toUpperCase());
                    
let string4 = `I am Inigo Montoya. You killed my father and prepare to die.`;
console.log(string4.toLowerCase());
console.log(string4.endsWith("."));//we get 'true' since it ends with a point
                     
