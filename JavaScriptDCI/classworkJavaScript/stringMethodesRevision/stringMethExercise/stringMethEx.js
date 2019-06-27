



let myWord = "Javascript";
if(typeof myWord === "1") {
console.log("It is a string");
} else  {
    console.log("It is not a string");
}//only comparison changes data type the result changes

console.log("........................................................................................");


let myString = " ";
if (myString == " ") {
    console.log("it is empty string");
} else {
    console.log("it is not an empty string");
}//quiz 2, empty string or not empty string

console.log("........................................................................................");


let mySentence = "I like to walk in the park.";
let splited = mySentence.split(" ");
console.log(splited);//quiz 3, it changes the words into an array list

console.log("........................................................................................");


let randomName = "Ashenafi Shiferaw";
let splitedd = randomName.split(" ");
let firstName = splitedd[0];
let secondName = splitedd[1];
let firstLetter = firstName.substring(0,1).toLowerCase();
let restOfFirstName = firstName.substring(1,Infinity);
let allFirstName =  firstLetter + restOfFirstName;

console.log(`camel case is : ${allFirstName}${secondName}.`);///quiz 4, making a camel case

console.log("........................................................................................");


name = " Jasmine"
let emailAddress = "ashu@yahoo.com";
let toSplite = emailAddress.split(" ");
let replaced = toSplite[0] = name;
let toAt = toSplite[1]="@"; 
let toEmailAdd = toSplite[2] = "example.com";
console.log( `My hidden address is: ${replaced}${toAt}${toEmailAdd}`);//quiz 5, hidden email address

console.log("........................................................................................");


let presentation = "This is Ashenafi from Addis.";
let splittedSentence = presentation.split(" ");
let joinedSentence = splittedSentence.join("-");
console.log(joinedSentence);//quiz 6, joined by hyphen words in a sentence

console.log("........................................................................................");

let fullName = "ashenafi shiferaw";
let nameSplited = fullName.split(" ");
 
let firstNamee = nameSplited[0].substring(0,1).toUpperCase();
let restSmallName = nameSplited[0].substring(1,Infinity);
let fullFirstName = firstNamee+restSmallName;

let secondNamee = nameSplited[1].substring(0,1).toUpperCase();
let restSmallSecName = nameSplited[1].substring(1,Infinity);
let fullSecondName = secondNamee+restSmallSecName;
 
console.log(`${fullFirstName}${fullSecondName}`);//quiz 7, initials to uppercase and 2 names attached

console.log("........................................................................................");


/* let number1= 1;
let number2 =2;
let number3=3;
let number4=4;
 
if(number1 == 4) {
    console.log(`${number1}st`);
} else if (number2 == 2) {
    console.log(`${number2}nd`);
}else if( number3 == 3) {
    console.log(`${number3}rd`);
} else if(number4 == 4) {
    console.log(`${number4}th`);
};//quiz 8, 1st, 2nd etc. interpolation without string and loop  */


 
for(let l=1; l<=100; l++) {
if(l % 10 == 1 && l!==11) {
    console.log(`${l} st`);
}
else if (l%10 == 2 && l !== 12) {
    console.log(`${l} nd`);
}
else if (l%10 == 3 && l !== 13) {
    console.log(`${l} rd`);
} else if (l%10 == 4,5,6,7,8,9) {
    console.log(`${l} th`);
}
};//quiz 8, ordinal numbers with loops

console.log("........................................................................................");


let myListOfFruits = "orange, banana, mango, avocado, pineapples, apple";
let splittedFruits = myListOfFruits.split(" ");
let sortedFruits = splittedFruits.sort();
 
console.log(sortedFruits);//quiz 9, splitted and sorted into chronological order



/* let myPattern = "-";
let givenPattern = " ";
givenPattern = 20;

if(givenPattern == 1) {
console.log(`the given value is 1, -`);
} else if ( givenPattern == 2) {
    console.log(` the given value is 2, --`);
} else if (givenPattern == 3) {
    console.log (`the given value is 3, ---`);
} else if (givenPattern == 4) {
    console.log (`the given value is 4, ----`)
} else if (givenPattern == 10) {
    console.log(`the given value is 10, ----------`)
} else if (givenPattern == 20) {
    console.log
    (` the given value is 20
      ----------
      ----------`)
} else if (givenPattern == 30) {
    console.log
(`  the given value is 30
    ----------
    ----------
    ----------`);
}; *///quiz 10, we ll get as much ticks as we have set on the givenPattern variable/ve to find better way/ 

console.log("........................................................................................");

  
let myPaternn = " ";
let myValuee = 15;
for(let m=0; m<myValuee; m++) { 

myPaternn += " - ";

console.log(myPaternn);
};
 //quiz 10,  increasing patterns using loops







console.log("..........................................array ......................................");

                                                     
let year = [2018]; /*leap years 2008, 2016*/ 

if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    console.log(`it is a leap year`);
} else {
    console.log(`it is not a leap year`);
};//quiz 1, leap year
 
console.log("........................................................................................");
 

summ = "";
arr=[];
let oneArray = ["cool-", "blue", "country", "stuff"];
let myShifter = oneArray.shift();
let myPoper = oneArray.pop();
summ = summ + myShifter+myPoper;
arr.push(summ);

console.log(arr);//quiz 2, first and last element of an array

 


/* let firstAndLastIndex = oneArray.splice(0,2,); 
console.log(firstAndLastIndex); *///not working with splice??

/* console.log(`${splicedArray}-${lastSpliced}`);//quiz 2, the first and last item of the array together */
 
console.log("........................................................................................");
 

let listOfNumb = [11,-5,23,5,-1,16,7,2];
let found = listOfNumb.find(function(element){
    return element < 0;  

});

console.log(found);//quiz 3, we ll get the smallest value below the number of reference

/* let operationCalc = Math.min.listOfNumb;
console.log(operationCalc); */

console.log("........................................................................................");

let listOfStudentsName = [
    {name: "Steve", Age: 19, Nationlality: "American"},
    {name: "Dave", Age: 18, Nationlality: "Brasilian"},
    {name: "Mamadou", Age: 21, Nationlality: "Malian"},
    {name: "Katarina", Age: 20, Nationlality: "German"}

];

for(let c=0; c<1; c++) {
    for(let d=0; d<listOfStudentsName.length; d++) {
        console.log(listOfStudentsName[d].name);
    }
};//quiz 5, we ll get all list of people and their description/or only names, age, etc...

console.log("........................................................................................");

                             /* with substring method and concatenation */

let e=[];
let fullWord = "communication";
let myLetters = fullWord.split("");
let joinedLetters = myLetters.join(" ");
 
    finalLetters1 = joinedLetters.substring(0,3);
    finalLetters2 = joinedLetters.substring(0,7);
    finalLetters3 = joinedLetters.substring(0,11);
    finalLetters4 = joinedLetters.substring(0,Infinity); 

console.log(`Result: '${finalLetters1}'  '${finalLetters2}  '${finalLetters3}  '${finalLetters4}'`);  
 


                                            /* other way to do it using loops */

let sum= "";
let emptyAr= [];
let myString1 = "commune";
let splittedString = myString1.split("");
for(let k=0; k<splittedString.length; k++) {
sum = sum+splittedString[k];
emptyAr.push(sum); 
}
 
console.log(emptyAr);
 
console.log("....................................The end..............................................");


