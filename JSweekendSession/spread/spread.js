
console.log("______________ quiz one _________________________");
let euroAsiaEmpty=[];
let asiaEuroEmpty=[];
let euroCountries=["France", "Germany", "Holland", "Sweden"]; 
let asianCountries = ["China", "Japan", "Thailand", "India"];  
euroAsiaEmpty.push(...euroCountries, ...asianCountries);
console.log(euroAsiaEmpty);
asiaEuroEmpty.push(...asianCountries, ...euroCountries);
console.log(asiaEuroEmpty);


console.log("______________ quiz two _________________________");

function addElement (cars, planes ) {
console.log(...arguments);
}
console.log(addElement(["Fiat","Mercedes","Tata","Toyota"],
["Boeing","AirBus","Bombardier"]
));

console.log("______________ quiz three _________________________");

function largestNumber (input) {
    let myBigNumber = Math.max(...input);
    console.log(myBigNumber);
}
largestNumber([12,10,3,54,98,44,32,19]);//we ll get 98

console.log("______________ quiz four _________________________");

function smallestNumber (input1) {
    let mySmallNumber = Math.min(...input1);
    console.log(mySmallNumber);
}
smallestNumber([12,10,3,54,98,44,32,19]);//we ll get 3

console.log("______________ quiz five _________________________");

let person = {name: "John"}
let job = {role: "Teacher"}
let person1 = {name: "Abebe"}
let job1 = {role: "Accountant"}
let employee = {...person, ...job, ...person1, ...job1};
//const changedName = employee.name = "Ashu";
//const changedRole = employee.role = "Programer";
//console.log(changedName);
//console.log(changedRole);
 
console.log(employee);//we ll get the changed elements inside
//console.log(employee);//it is destructive, it ll change the original values ??

console.log("______________ quiz six _________________________");

 
function average(array) {
    let countUp=0;
    for(let s=0; s<array.length; s++) {
        countUp = countUp+=array[s];
       averValue = countUp/array.length;
    }
    //let result = averValue - Math.floor(averValue)!==0;
    if(averValue - Math.floor(averValue)!==0) {
        console.log("The average is not a whole number");
    } else if(averValue - Math.floor(averValue)==0 ){
        console.log("The average is a whole number");
    }
}
average([3,3,3,3]);//the average value is a whole/not decimal/ No or not


console.log("______________ quiz seven _________________________");
 
function oddRemoval(input2) { 
let myJacket=[];
let sumUp=0;
for(let a=0; a<input2.length; a++) {
sumUp += input2[a]; 
//console.log(sumUp);
if(sumUp % 2 !=0) {
    myJacket.push(sumUp /* input2[(input2.length */-1)//remove one element
    console.log(myJacket);
} else {
    console.log(sumUp);
}
}
};//if sum is odd No. it ll remove 1 from total else sum total
oddRemoval([5, 7, 10, 9, 12, 8]); 

console.log("______________ quiz eight _________________________");

/* x= -b+- Math.sqrt(b**2 -4(ac))/2(a) */
function quadratic(a,b,c) {
    let equation = -b +- Math.sqrt(b**2 -4*(a*c))/2*(a);
    console.log(equation);
}
quadratic(4,2,3);//quadratic equation ??

console.log("______________ quiz nine _________________________");

    let myDate = new Date();
    let daysInNumb = myDate.getDate();
    let myDays = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let getMyDays = myDays[myDate.getDay()];

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let getMonthName = months[myDate.getMonth()];

    let myYear = myDate.getFullYear();
console.log(...getMyDays, ...daysInNumb, ...getMonthName, myYear);