
                /* question 1 */

let str = `I can walk in the park all day!`;
console.log(str.substring(18, 22));
/* console.log(str.charAt(6)); */

                /* question 2 */

let str1 = `JavaScript`;
console.log(str1.substring(3,6));

                /* question 3 */

let str2 = `Hello World`;
console.log(str2.toUpperCase());

                /* question 4 */

let str3 = `Hello Earthling`;
console.log(str3.toLowerCase());

                /* question 5 */

let str4 = `nice-shose`;
console.log(str4.match(/[e-n]/));

/* console.log(str4.match('n'));
console.log(str4.match('l'));
 */
                /* question 6*/

let str5 = `nice shoes`;
let h = `H`;
let j = `J`;
console.log(`${h}${str5}${j}`);
/* console.log(h + str5 + j ); */


                        /* question 7 */

let str6 = `JavaScript`;
let add = `ipt`;
console.log(`${add}${str6}${add}`);
/* console.log(add + str6 + add); */

                                /* question 8 */

let str7 = `JavaScript`;
console.log(str7.toUpperCase());
console.log(str7.includes('Java'));

                         /* question 9 ??*/
let str8 = `JavaScript`;
console.log(`${str8.charAt(str8.length-1)}${str8.substring(1,str8.length-1)}${str8.charAt(0)}`);

let str11 = `JavaScript`;
console.log(str11.substring(1, str11.length-1));
console.log(`T${str11.substring(1, str11.length-1)}J`); 
 
                        /* question 10*/

let list = {
    firstName: `Ashu`,
    live:   `in Berlin`,
    profession: `a web developper.`
};
console.log(`Hi, my name is ${list.firstName} I live ${list.live} and I am ${list.profession}`);

                    /* question 11*/

let str9 = `the quick brown fox`;
console.log(str9.charAt(0).toUpperCase() + str9.substring(1));//only 1st letter is capital


let newExample = "ashenafi";
let newExCrop = newExample.charAt(0).toUpperCase();
let last = newExCrop + newExample.substring(1, newExample.length);

console.log(last);//we ll change the first character to capital letter 