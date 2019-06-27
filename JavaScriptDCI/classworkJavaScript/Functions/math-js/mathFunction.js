
console.log("_________________________  quiz one _______________________________");

function randomNumber(myArray) {
    
    for(let a=0; a<myArray.length; a++) {
        myArray[a] = Math.random()* 10; 
        //myArray[a] = Math.trunc();
    }
   /*  return Math.random(number) */
   console.log(myArray);
}
randomNumber([1,2,3,4]);//gives any random No from; 0-1, 1-10, 10-100 etc.

console.log("_________________________  quiz two _______________________________");

function maxVal(Arr) {
    let maxVal = Arr.reduce(function(a,b){
        return Math.max(a,b);
    });
    console.log(maxVal);
};
maxVal([1,2,3,4]);//to get the biggest value 

                                /* or minimum value*/

function minVal(minArr1) {
    let minNumber = minArr1.reduce(function(a,b){
        return Math.min(a,b);
    })
    console.log(minNumber);
}
minVal([1,2,3,4]);//to get the smallest value 
 
/* function lowestNumber (myArray1) {
    let minimumNumber = myArray1.reduce((a, b) => Math.min(a, b))
    console.log(minimumNumber);
};
lowestNumber([14, 58, 20, 77, -5, 66, 82, 42, 67, 42, 4]);
 */
                                            /* or */

function minValue (arrayOfNumbers) { 
for (let b=0; b<arrayOfNumbers.length; b++) {
        return Math.min(...arrayOfNumbers);
    } 
};
console.log(minValue([4,56,79,123,-1]));//the smallest number is given

console.log("_________________________  quiz three ______________________________");

function powerOfSecond (first, second) {
    let power = Math.pow(first, second);
    console.log(power);
}
powerOfSecond(7,3);//it ll give us 7 to the power of 3 == 343

console.log("_________________________  quiz four _______________________________");


function biggestNumber (array2) {
    let max = array2.reduce(function(a, b) {
        return Math.max(a, b);
      });
      console.log(max);
};
biggestNumber([24, 22, 533]);//we ll get the biggest number in an array

/* or */

function bigNumb(givenList){
    for(let z=0; z<givenList.length; z++) {
        return Math.max(...givenList);//or min ...   
    }
};
console.log(bigNumb([24, 22, 533]));

console.log("_________________________  quiz five _______________________________");

/* function round_number(number, dec) {
    return Math.round(number * Math.pow(15, dec)) / Math.pow(15, dec);
}
round_number(3, 142857142857143);
 */

   let decimalTo = (number, divider) => {
   let pi = number/divider
   let myString = pi.toString();
   let mySplit = myString.split("");
   let myJoin = mySplit.join("");

  let firstSix = myJoin.substring(0,8);//crop the first 8 numbers
  let lastTwo =  firstSix.substring(6,8);//crop the last 2 numbers
  let toMultiply = lastTwo*.100;//ex, if result == 28, in order to use Math method (*.100)
  let toCeil = Math.ceil(toMultiply);//ex 2.8 goes to 3

  let firstFour = firstSix.substring(0,6);
   
    console.log(firstSix);
    console.log(`${firstFour}${toCeil}`);
  
 }
 console.log(decimalTo(199, 7));//arrow function works for the nearest decimal No.,22-30


 /* var s = number.toString();
 if (s.indexOf('.') == -1) s += '.';
 while (s.length < s.indexOf('.') + 4) s += '0';
 */


console.log("_________________________ Bonus quiz _______________________________");


function randomName (myNameList) {

let randomItem = myNameList[Math.floor(Math.random()*myNameList.length)];
console.log(randomItem);
};//I get random name from the list, names could be repeated
randomName(["Ashenafi", "Saad", "Jasmine", "Alisio", "Angie","Hanna","Franz","Rene","Ehud","Boyan","Loraine","Ramiz","Yasir","Mohammed","Ramiz","Tamim","Ahmad"]);


console.log("___________________ second quiz - 1 - ______________________________");

function fullDate() {
     
    let myDate = new Date();
    console.log(myDate);

    let getDate = myDate.getDate();//day in number
  /*   console.log(getDate); */

    let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let getDaysName = days[myDate.getDay()];//day's name in letter
    /* console.log(getDaysName); */
     
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let getMonthName = months[myDate.getMonth()];//month in letter
    /* console.log(getMonthName); */

    let getYear = myDate.getFullYear();//year in number
    /* console.log(getYear); */

    console.log(`Today is : ${getDaysName} ${getDate}th of ${getMonthName} ${getYear} `);
};
fullDate();//we ll get sth like today is : 12 May 2019


console.log("___________________ second quiz - 2 - ______________________________");

function formalDay() {
let myDate = new Date();
console.log(myDate);

let getDate = myDate.getDate();

let days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let getDaysName = days[myDate.getDay()];//day's name in letter
  

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let getMonthName = months[myDate.getMonth()];//month in letter


let getYear = myDate.getFullYear();//year in number
console.log(`${getDaysName} ${getDate}th/${getMonthName}/${getYear}`);

};
formalDay();

console.log("___________________ second quiz - 3 - ______________________________");

for (let year=2001; year<=2050; year++) {
    let sunday = new Date(year, 0, 1);//year month day
    if ( sunday.getDay() === 0 ){//if day === 0 
        console.log(`First of January was & will be on ${year}`);
}
};//2006,12,17 etc new-year == sunday


console.log("___________________ second quiz - 4 - ______________________________");


today = new Date();
let x_mas = new Date (today.getFullYear(), 11,25);
if(today.getMonth() == 11 && today.getDate() > 25) {
    x_mas.setFullYear(x_mas.getFullYear()+1);
} let one_day = 1000*60*60*24;
console.log(Math.ceil((x_mas.getTime() - today.getTime())/(one_day))+
"Days left until Christmas,");//.. days remaining to christmas



/* let toDay = new Date();
let cmas = new Date(toDay.getFullYear(),11,25);
if(cmas.getMonth() == 11 && toDay.getDate >25) {
let setCmas  /* toCmas */ /*= cmas.setFullYear(cmas.getFullYear()+1)
} else {
let one_day = 1000*60*60*24;
let toCmas = Math.floor(Math.round((Math.abs(cmas.getTime()-toDay.getTime()))/one_day));
console.log("Days unitl Chrismass "+ toCmas);//days remaining to christmas
}; */

console.log("___________________ second quiz - 5 - ______________________________");

let getDaysInMonth = function(month,year) {
       return new Date(year, month, 0).getDate();// Here January is 0 based
             // Here January is 1 based
             //Day 0 is the last day in the previous month
             
            // return new Date(year, month+1, 0).getDate();
      };
      console.log(getDaysInMonth(1, 2016));
      console.log(getDaysInMonth(2, 2017));
      console.log(getDaysInMonth(9, 2018));
      console.log(getDaysInMonth(3, 2019));

 getDaysInMonth();//the length of the given months

 console.log(".............  with function ...................");

                                /* or use function*/

 function getDaysInMonth1 (month, year) {
    return new Date(year, month, 0).getDate();
 };
 console.log(getDaysInMonth1(1, 2016));
 console.log(getDaysInMonth1(2, 2017));
 console.log(getDaysInMonth1(3, 2018));
 console.log(getDaysInMonth1(4, 2019));//how long were months ...
/*  getDaysInMonth1(); */

let array = [1,2,3,4,5];
/* let array1=[a,b,c,d,e] */

for(let a=0; a<array.length; a++) {
    console.log("outer loop" + array[a])
    for(let b=0; b<array.length; b++){
        console.log("this is inner loop"+ array[b]);
    }
     console.log("Holla");
};


 
  



 
 