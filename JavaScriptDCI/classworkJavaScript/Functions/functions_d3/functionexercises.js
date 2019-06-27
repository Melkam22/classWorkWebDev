
console.log("__________________________ quiz one ______________________________");

function addUp (myArray) {
    let myNumber=0;
    for(let a=0; a<=myArray; a++) {
    myNumber = myNumber + a;
   
    }
    console.log(myNumber);  
}
addUp(5);

console.log("__________________________ quiz two ______________________________");

function lessOrEqual(input) {
if(input <=0) {
    console.log("True");
} else {
    console.log("False");
}
}
lessOrEqual(-2);

console.log("__________________________ quiz three ____________________________");

/* missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5 */


function missingNumber(input1) {
    let myAddition =0;
    let givenNumbers = [1,2,3,4,5,6,7,8,9,10];
    let myInputNo=0;
    for(let a=0; a<givenNumbers.length; a++) {
        myAddition = myAddition + givenNumbers[a];
    } 
    /* console.log(myAddition); */
    for(let b=0; b<input1.length; b++) {
        myInputNo = myInputNo + input1[b];
    }
    /* console.log(myInputNo); */
     let difference = myAddition - myInputNo;
     console.log(difference);
    }
    
missingNumber([1, 3, 6, 5, 7, 8, 9, 10]);//tell us if any No is missing 

console.log("__________________________ quiz four _____________________________");


function primeNumber (input2) {
    let even = 10%2===0;
    if(input2 > 1 && input2 % 2 === 1 && input2 % 3 != 0 && input2 % 5 != 0 &&
        input2 % 9 != 0) {
        console.log("this number is prime number");
    } else {
        console.log("This number is not prime number" );
    }  
}
primeNumber(49);//not working correctly 

console.log("__________________________ quiz five _____________________________");

function toCamelCase(input4) {
    let myCompare = input4.includes("_");
    if(myCompare == true) {
        let toReplace = input4.replace("_", " ");
         
        let mySplit = toReplace.split(" ");
    for(let f=0; f<mySplit.length; f++) {
         
        let toCapital = mySplit[1].substring(0,1).toUpperCase();

        /* let toCapital1 = mySplit[2].substring(0,1).toUpperCase(); */

        let fullWordTwo = toCapital + mySplit[1].substring(1,Infinity);

        /* let fullWordThree = toCapital1 + mySplit[2].substring(1,Infinity);
 */
        let allTogether1 = mySplit[0]+fullWordTwo;

        /* let allTogether2 = mySplit[0]+ fullWordTwo + fullWordThree; */

        console.log(allTogether1);
       /*  if(mySplit === mySplit[0] && mySplit === fullWordTwo) {
            console.log(allTogether1);
        } else if (mySplit === mySplit[0] && mySplit === fullWordTwo && mySplit === fullWordThree){
            console.log(allTogether2);
        } */
    }     
}
}
toCamelCase("past_time");//only when it has under score it ll change it to camel case
 

console.log("__________________________ quiz six ______________________________");

 
function theOddOne (input5) {
     
    let toString = input5.toString();
    let toSplit = toString.split("");
    let toJoin = toSplit.join("");

        let myJacket=[];
        for(let c=0; c<toJoin.length; c++) {   
        if(toJoin[0] === toJoin[2]) {
          console.log(toJoin[0]);//work
        }else if (toJoin[0] !== toJoin[2]) {
            console.log(toJoin[4]);
        } else if(toJoin[2] === toJoin[4]) {
         console.log(toJoin[4]);
        } else if (toJoin[2] !== toJoin[4]) {
            console.log(toJoin[2])
        } /* else if(toJoin[4] === toJoin[6]) {
            console.log(toJoin[6]);//work
        } else if(toJoin[4] !== toJoin[6]) {
            console.log(toJoin[6])
        } else   {
            console.log(toJoin[8])
        }  */
    
    }
};
theOddOne([2, 3, 2, 2]);//it is working partially

 
console.log("__________________________ quiz seven _____________________________");

function matchWord (input6) {
    
 let myMatch = input6.includes("ring");
 if(myMatch == true) {
     console.log(`I found the word in my word list`);
 } else {
     console.log("this word is not in my repertory");
 }
};
matchWord("The lord of the ring.");//screen if the word is in my list 

console.log("__________________________ quiz eight _____________________________");


function correctAddress (input7) {
    let first = input7.includes("@");
    let second = input7.includes(".");
    let third = input7.includes(".com");
    if(first== true && second == true && third == true) {
        console.log("your email address is correct.")
    } else {
        console.log("It is not a correct email address!")
    }
};
correctAddress("ashu@yahoo.com");//verify if it has all these characters 

console.log("__________________________ quiz nine  _____________________________");

function pigLatin(input8) {

let myArray = input8.split(" ");
for(let d=0; d<myArray.length; d++) {
    /* let myJacket1=[]; */
    let firstLetter = myArray[d].substring(0,1);
    let fullLetters = myArray[d].substring(1,Infinity) + firstLetter+"ay";
    let finalCapital = fullLetters.substring(0,1).toUpperCase();
    let fullWord = finalCapital + fullLetters.substring(1,Infinity);
     
    console.log(fullWord);    
}
}
pigLatin("what is your name");//first letter @ end add 'ay' and upper case 1st letter

console.log("__________________________ quiz ten  _______________________________");

function toThePower (input9, input10) {
    let myValue = Math.pow(input9, input10);
    console.log(myValue); 
};
toThePower(3,3);//the exponential value with Math.pow



                                     