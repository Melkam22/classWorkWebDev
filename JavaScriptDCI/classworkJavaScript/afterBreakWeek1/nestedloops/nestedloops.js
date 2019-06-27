

                        /* inner loop */

for(let i=0; i<5; i++) {
    for(let j=0; j<5; j++) {
        console.log("outer-loops:", i, "inner-loops:", j);
    }
}//first all loops in the inner part must be completed before going to outer loops

console.log("....................................................................");
                    /* second inner loop */

let n = 3;
let z=3;
for(let a=0; a<=n; a++) {
    for(let o=0; o<=z; o++) {
console.log("outerLoop", a, "innerLoop", o);
    }
};

console.log("....................................................................");

                    /* nested loop real example */

let a=["id", "name","address","profession", "Nationality", "Marital status"];

let data = [
    [1, "Melkam", "Berlin", "Developer", "Ethiopian", "single"],
    [2, "Ashu", "Addis", "Teacher", "Palistinian", "Married"],
    [3, "Naqvi","Mexico", "Architect", "Pakistan", "Married"]
];

for(let i=1; i<2; i++) {
    for(let j=0; j<data.length; j++){
        console.log(`
        ${a} 
        ${data[j]}`);
    }
}//a is printed only once but data will be printed 3 times