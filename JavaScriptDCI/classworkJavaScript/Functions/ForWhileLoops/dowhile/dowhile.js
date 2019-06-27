
console.log(" ________________    do while loop       _____________________");


let text = "";
let a =11;//run at least 1 times though the condition is not true

do {
    text += `the number is ${a}\n`;
    a++;
}
while(a <= 10);//while is obligatory with dowhile loop 
console.log(text);//either we get 1 -10, or we get the given No if it is not true


console.log(" ________________  object and for-in loop _____________________");

                                /* for-in loops */

let oldCar = {
    mark: "Toyota",
    model: "Tercel",
    year: "1995",
}

for(const key in oldCar) {
    console.log(`${key} : ${oldCar[key]}`);
};//it ll render the keys from the oldCar object


let person = {
    name: "John",
    nameL: "Doe",
    age: 30,
};

let texT ="";
let x;//a variable looping through the properties of the object

for(x in person) {
    texT += `${person[x]}`;
    console.log(`${person[x]}`);
};//it ll render the values of each key in the object 


console.log(" ______________________ forEach _________________________");



let myList = ["apple", "mango", "orange", "banana"];

myList.forEach(function(element){
    console.log(element);
});//we ll get each element in the array

                        /* or with arrow function */

//myList.forEach(element => { console.log(element);});                      

let myTasks = [
    [
        "clean",
        "floor" 
    ],
    [
        "clean",
        "window"
    ],
    [
        "clean",
        "dining table"
    ],
    [
        "cook",
        "breakfast"
    ],
    [
        "clean",
        "kitchen platform"
    ],
    [
        "clean",
        "the dishes"
    ],
];

myTasks.forEach(myTasks=>{
    switch(myTasks[0]) {
        case "clean":
        console.log(`I am cleaning ${myTasks[1]}`);
        break;

        case "cook":
        console.log(`I am cooking ${myTasks[1]}`);
        break;
        default:
        break;
    }
});//better to use forEach method than loop in a nested array 


const fruits = {
    apple: 15,
    mango: 25,
    banana: 30,
}
const entries = Object.entries(fruits)
console.log(entries);//we ll get the values inside the object

const myKeys = Object.keys(fruits);
console.log(myKeys);//we ll get the keys in the function

const myValues = Object.values(fruits);
console.log(myValues);//it ll show us values which are inside the keys

for(const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`);//it ll give us No of values ...
}

let simpleArray = ['apple', 'mango', 'pineapple'];

for(const i of simpleArray) {
    console.log(`${i}`);
};//same as the previous example, we ll get the values individually 

console.log("___________  examples of for in and for of _________________ ");

let taSks = [
    [
        "clean",
        "floor"
    ],
    [
        "clean",
        "windows"
    ],
    [
        "clean",
        "dining table"
    ],
    [
        "clean",
        "kitchen platform"
    ],
    [
        "cook",
        "the breakfast"
    ],
    [
        "clean",
        "the dishes"
    ],
    [
        "clean",
        "the desk"
    ],
]
for (const key in taSks) {
    if(taSks[key][0]=== "clean") {
        console.log(`I am cleaning ${taSks[key][1]}`);
    }

     else if (taSks[key][0]=== "cook") {
        console.log(`I am cooking ${taSks[key][1]}`);
};
}

/* const entries1 = Object.entries(taSks);
console.log(entries1);
 */
 for(const[what, activity] of taSks) {
    console.log(`${what}ing  ${activity} `);
};