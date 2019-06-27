
console.log("___________ map method training _______________");

let number = [7,4,2,9,12,3];
let orderIt =  number.map(function(value){
    return value*2
});
console.log(orderIt);

/* another way */

let number1 = [7,4,2,9,12,3];
let orderIt1 = number1.map(value => value*2);
console.log(orderIt1);

/* two methods together */

let myNames = ["Frauke", "ashu", "melkam", "Ashenafi"];
let mySort = myNames.map(function(value){
    return value.toUpperCase();
});
let finalSort = mySort.sort();
console.log(finalSort);

console.log("___________ filter method training _______________");

function myFilter (value){
    let filtered = value.filter(function(element){
        return element >=7;   
    })
    console.log(filtered);
}
myFilter([7,4,2,9,12,3]);

/* other way */

function myFilter1 (value){
    let filtered1 = value.filter(element=>element>=7);
    console.log(filtered1);
}
myFilter1([7,4,2,9,12,3]);

/* filter in object */ 

let myObj=[
    {id: "ll10", name: "Melkam", No: 101},
    {id: "ll11", name: "Ashu", No: 105},
    {id: "ll12", name: "Marko", No: 110},
    {id: "ll13", name: "Sure", No: 120},
];
let filterOut = myObj.filter(a=>a.No>108);
console.log(filterOut);//we ll get {id: "ll12", name: "Marko", No: 110},
                       //{id: "ll13", name: "Sure", No: 120},


console.log("___________ sort method training _______________");

let myNumbers =[7,4,2,-4,9,12,1,3];
myNumbers.sort((a, b) => a - b);
console.log(myNumbers);//from small to big numbers

/* another one in list of arrays*/

let shapes =[
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"],
    [6, "Hexagon"],
    [10, "Decagon"],
];
let orderedShapes = shapes.sort(function(a,b){
    let one = a[0];
    let two = b[0];
    if(one>two){
        return 1;
    } else if (one<two){
        return -1;
    }
});
console.log(orderedShapes);//it ll be in order 

/* sort in function */

let emptyJacket = [];
const personalities = [
    { name: 'Tom Sawyer', birthdate: 1876, death: 1945 },
    { name: 'Bart Simpson', birthdate: 1989, death: 2019 },
    { name: 'Holden Caufield', birthdate: 1951, death: 1992 },
    { name: 'Tom Joad', birthdate: 1939, death: 1967 },
    { name: 'Peter Griffin', birthdate: 1999, death: 2019 }
];

let sortAge = personalities.sort((a,b)=>{
        let young = a.death - a.birthdate;
        let old = b.death - b.birthdate;
        if(young > old) {
            return 1
        } else if( young < old){
            return -1
        }
    })
console.log(sortAge);//sorted out from the young to the old

console.log("___________ reduce method training ____________________");

let cities = [
    {name: "New-York", population: 5},
    {name: "Paris", population: 7},
    {name: "Addis-Ababa", population: 7},
    {name: "Berlin", population: 3.5},
    {name: "Cairo", population: 35},
];//we ll get; 57.5 Million is the total population size.
let totalPopulation = cities.reduce((accum, curr) => accum + curr.population, 0);
console.log(`${totalPopulation} Million is the total population size.`); 

/* or else */ 

let randomNumbers = [7,4,2,-4,9,12,1,3];
let myReduce = randomNumbers.reduce((accum, curr) => accum+curr, 0);
console.log(myReduce);// we ll get 34


console.log("______________ nested loops ___________________________");

let activities = [
    "clean my room",
    "take a shower",
    "read a book",
    ["breakfast, lunch, dinner"],
    "revise my course",
    "watch a movie",
];
for(let a=0; a<activities.length; a++){
    let myTask = activities[a];
    
   if(Array.isArray(myTask)){
       for(let b=0; b<myTask.length; b++){
       console.log(`my sub-task is preparing: ${myTask[b]}`)
   }  
}  else {
    console.log(`my main tasks are: ${activities[a]}  `)
}
}

console.log("__________ for in loop (not advised in array) ___________________");

let myObject = {a:1, b:2, c:3};
for(let val in myObject){
    console.log(`${myObject[val]}`);
};//we ll get 1,2,3


/* for loop in with an array */
let myArr = "my array";
for(let val in myArr){
    console.log(`${myArr[val]}`);
};//we ll get m y  a r r a y

console.log("__________ for of loop (on array & str) ___________________");

let myArr1 = [1,2,3];  
for(let d of myArr1){
    console.log(`${d}`)
};//I ll get 1,2,3


let myStr1 = "name";
for(let na of myStr1){
    console.log(myStr1);//we ll get name 3 times
    console.log(na);//we ll get n a m e
}

console.log("__________ find the longest word from a string _________________");

function longestWord (given){
    let myComparer=0;
    let myWord;
    let myGiven = given.split(" ");
    for(let e=0; e<myGiven.length; e++){
        if(myGiven[e].length > myComparer){
            myComparer = myGiven[e].length;
            myWord=myGiven[e];
        }
    }
    console.log(myWord);
}
longestWord("I am just testing");//I ll get testing the longest word

console.log("________________ vowel counter  _________________________");

let counter=0;
function myVowels (given){
    for(let f=0; f<given.length; f++){
    if(given.charAt(f)=="a" || given.charAt(f)=="A" || given.charAt(f)=="e" ||
    given.charAt(f)=="E" || given.charAt(f)=="i" || given.charAt(f)=="I" ||
    given.charAt(f)=="o" || given.charAt(f)=="O" || given.charAt(f)=="u" ||
    given.charAt(f)=="U"){
        counter++;
    }
    }
console.log(counter);
}
myVowels("The man in the Iron mask is arriving");//I ve 11 vowels

console.log("__________________ word repetition  _________________________");

function occurrenceCounter(input) {
    let myMatch = input.match(/s/gi).length;
    console.log(myMatch);
}
occurrenceCounter("the MAN in the iron mask is in the castle.");//we ll get 3


console.log("__________________ break function  _________________________");

/* case, break & default  */
const date = new Date().getDay();
let dayOfTheWeek;

switch (date) {
    case 0:
    dayOfTheWeek = "Sunday";
    break;
    case 1:
    dayOfTheWeek = "Monday";
    break;
    case 2:
    dayOfTheWeek = "Tuesday";
    break;
    case 3:
    dayOfTheWeek = "Wednesday";
    break;
    case 4:
    dayOfTheWeek = "Thursday";
    break;
    case 5:
    dayOfTheWeek = "Friday";
    break;
    case 6:
    dayOfTheWeek = "Saturday";
    break;
}
console.log(dayOfTheWeek);//we ll get names of days in letter... 

console.log("_______________________ recursion  _______________________________");

function countdown (value) {
    if(value>0) {
        console.log(value);
        return countdown(value-1);
    }else {
        return value;
    }
};
countdown(10);//same as the previous, but this recursion meth is better

console.log("_______________________ explicit binding  _______________________________");

console.log("____ call ll bind it to the particular scope _____");

function foo5(){
    console.log(this.e);
}
let obj3 = {
    e: 4,
}
let inside = function(){
     console.log("hoo hooooo");
};
foo5.call(inside());//we ll get hoo hooooo, 

console.log("_______________________ binding infos in a class  _______________________________");

let person = {
    firstName: "Lila",
    lastName: "Moon", 
    age: "23",
    job: "Dancer",
    city: "Berlin",
}
function retrieve() {
const values = Object.values(this);
console.log(`${values[0]} ${values[1]} is a ${values[2]} year old ${values[3]} living in ${values[4]}`);
}
retrieve.call(person);


console.log("________________ object function with this. _______________________________________");

let bookList =[ 
    { author: 'J.K. Rowling', title: 'Harry Potter and the Chamber of Secrets', readingStatus: true }, 
    { author: 'Homer', title: 'The Odyssey', readingStatus: true },
    { author: 'Harper Lee', title: 'To Kill a Mockingbird', readingStatus: false }
    ];

function statusCheck (){
    for(let c=0; c<this.length; c++){
        let stat = this[c].readingStatus;
        if(stat===true) {
            console.log("I have already read that");
        } else if(stat===false) {
            console.log("It is on my to read list");
    }
    }
}
statusCheck.call(bookList);//we ll get true,true, false

console.log("_________________  the longest word ________________________");

function longestWord (given){
	let counter =0;
    let myWord;
    let selected = given.split(" ");
    for(let a=0; a<selected.length; a++){
	if(selected[a].length > counter){
		counter = selected[a].length;
        myWord = selected[a];
}
}
console.log(myWord);	  
}
longestWord("the man in the Iron mask");

console.log("_________________ get day,week,month, year ______________________");
 
let myDate = new Date();
let month = ["january","february","march","april","may","june","july","august","september","october","november","december"];
let week =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let myDayNumber = myDate.getDate();

let myMonth = month[myDate.getMonth()];
let year = myDate.getFullYear();
let myWeek = week[myDate.getDay()];
console.log(`${myWeek} ${myMonth}  ${myDayNumber} ${year}`);






 
