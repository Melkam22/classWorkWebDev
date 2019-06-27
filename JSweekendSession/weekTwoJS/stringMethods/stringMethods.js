
/* stringMethods; trim, includes, substring, match, toUpperCase,
toLowerCase, slice, charAt, replace, ...*/

let maPhrase = "renard qui habite dans la foret d'acote et qui est tres malin,";
console.log(`L'histoire du ${maPhrase} est tres interessante.`);
console.log(`L'histoire du ${maPhrase.length-1} est tres drole.`);

        /*substring ll take the given middle part and print it*/
console.log(`L'histoire du ${maPhrase.substring(0, 31)} est tres drole.`);
console.log(`L'histoire du ${maPhrase.replace("renard", "lion")} est tres drole.`);
console.log(`L'histoire du ${maPhrase.toUpperCase()} est tres drole.`);
console.log(`L'histoire du ${maPhrase.toLowerCase()} est tres drole.`);
//console.log(`${maPhrase.slice(12,45)}`);
console.log(`${maPhrase.charAt(11)}`);//it cut one character at the given No.
console.log(`${maPhrase.substring(12,45)}`);//same effect as the previous
console.log(`${maPhrase.substr(12,45)}`);//it ll cut 45 characters starting from the 12th 
console.log(`${maPhrase.includes("l")}`);//we ll get true
console.log(`${maPhrase.match(/a/gi).length}`);//we ll see how money of this character are given