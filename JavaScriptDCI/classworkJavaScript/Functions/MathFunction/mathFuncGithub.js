
function mathRound(number) {
    return Math.round(number);
}
console.log(mathRound(2.6));//pass it to 3



function mathCeil(number) {
    return Math.ceil(number);
}
console.log(mathCeil(2.1))//we ll get 3,, it goes to the top



function mathFloor(number) {
    return Math.floor(number);
}
console.log(mathFloor(2.9))//we ll get 2,, it goes to the bottom


function mathRandom() {
    return Math.random();
}
console.log(mathRandom()*10);//any random number b/n 0 & 1 /*10= b/n 1 & 10/


function mathMin(numbList) {
    let minValue = Math.min(numbList);
    return minValue;
};
console.log(mathMin(249, 345, 799, -5));//sort out only the 1st smallest one


 
let arrayOfNumbers = [4,56,79,123,-1];
for (let a=0; a<arrayOfNumbers.length; a++) {
    return Math.min(...arrayOfNumbers);
function mathMin(arrayOfNumbers) {
    }
};

/* console.log(mathMin(arrayOfNumbers));//the smallest number is given

function squareRoot (myArray) {
   Math.sqrt(myArray);
}
squareRoot(64);// will give us the square root, 11. smt..


function getRoot2(myArray) {
    return Math.SQRT2;
  }
console.log(getRoot2([4])); 
 */


function myRoot(myArray) {
    for(let b=0; b<myArray.length; b++) {
    return(Math.sqrt(myArray[b]));
  }
}
console.log(myRoot([123,0.001,-123,0]));//square root ??

let myArray1 = [1, 3, 2];

console.log(Math.max(...myArray1));//to sort out maximum


//Date object

//get time

let myDate = new Date();
console.log(myDate);//we ll get the current day & time

let getTime = myDate.getTime();
console.log(getTime);//1557825563458 in miliseconds since jan 1 1970

//get year
let getYear = myDate.getFullYear();
console.log(getYear);//we ll get the year

//get month
let getMonth = myDate.getMonth();
console.log(getMonth);//we ll get 4, one month less to solve this

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let getMonthName = months[myDate.getMonth()];
console.log(getMonthName);//we ll get name of the month

//get date
let getDate = myDate.getDate(); 
console.log(getDate);//we ll get dates, 1,2,...

let getHours = myDate.getHours();
console.log(getHours);//we ll get only hours

let getMinutes = myDate.getMinutes();
console.log(getMinutes);//we ll get minutes

let getSeconds = myDate.getSeconds();
console.log(getSeconds);//we ll get seconds 

//date is being used for time measurement 

let start = new Date();
for(let c=0; c<100000; c++) {
    const doSomething = c*c*c;
}
let end = new Date();
console.log(`The loop took ${end - start} ms.`);//The loop took 11ms.



/* let setDay = myDate.setDay();
console.log(setDay, "Monday"); */


/* function squareroot(num) {
    
    for (let i=num; i >= 1; i--) {
        if (i * i === num) {
            num = i;
            break;
       }
   }
   return num;
};

 console.log(squareroot(64));//other way to do square root */


function squareroot1(number11) {
    for (let i=0; i*i<=number11; i++) {
        if (i*i === number11)
            return i;
   }
};
console.log(squareroot1(49));//gives 7, find the square root of one number 


/* function squareroot1(array12) {
    for (let i=0; i <=array12.length; i++) {
        for(let f=0; f<=array12.length; f++) {
        if (array12[i] * array12[i] === array12[f])
            return i;
   }
}
};
console.log(squareroot1([4,36,49]));// */