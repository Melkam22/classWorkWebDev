
console.log("................................... quiz 1 ..............................................")

function cityInitial(input) {
let cityName = input.substring(0,1).toUpperCase();
let cityName1 = input.substring(1,Infinity);
let cityAdd1 = (cityName+cityName1);


let cityName2 = input.substring(0,1).toUpperCase();
let cityName3 = input.substring(1,Infinity);
let cityAdd2 =  (cityName2+cityName3);


if(cityName==="A" && cityName1.length === 4){  
    console.log(`${cityAdd1}-Ababa`)
}else if(cityName2==="N" && cityName3.length===2){
    console.log(`${cityAdd2}-York`)
} else {
    console.log("no such city exists.")
        }
    };

cityInitial("Addis");//if only it starts with these initials it ll getaddis-ababa & new-york, else ...


console.log("................................... quiz 2 ..............................................");

function suffixAdder(input1) {
    let suffix = "ly";
    let manyInputs = input1.split(" ");

    for(let a=0; a<manyInputs.length; a++) {
        let individual = manyInputs[a];
        console.log(`${individual}${suffix}`);
    }
}
suffixAdder("nice fast brilliant amazing");//it ll loop through all and add a suffix of "ly" on each


console.log("................................... quiz 3 ..............................................");

function reverseNumber(input2) {
    let mySquare =[];

    let toString = input2.toString();
    let toSplit = toString.split("");
    let toReverse = toSplit.reverse();
    let toJoin = toReverse.join(" ");
    mySquare.push(toJoin);
    console.log(mySquare);
}
reverseNumber([39827]);//number reversed and pushed to a square brace

console.log("................................... quiz 4 ..............................................");


function wordAlphabet(input3) {
    let split1 = input3.split("");
    let chronologyWord = split1.sort();
    let joined1 = chronologyWord.join(" ");
    console.log(joined1);
}
wordAlphabet("communication");//chronologically sorted, but 1st it has to be splited per word


console.log("................................... quiz 5 ..............................................");


function filteredNumbers (arr, input4) {
    let filteredNumb = arr.filter(function(value){
        return value <= input4;
    });
    console.log(filteredNumb);
}
filteredNumbers([5,7,11,4,6,3,-2], 4);

console.log("................................... quiz 6 ..............................................");


function dogsYear(mani) {
    dogi = (mani/7);
    console.log(dogi);
};
dogsYear(100);//given human age, it ll tell dog's age

console.log("................................... quiz 7 ..............................................");

function foreverConsumption(age, perDay){
let overAllConsumption = (age * 365);
console.log(`${overAllConsumption} consumption if the person's age is ${age}`);

let dailyConsumption = (overAllConsumption/(365*age));
console.log(`${dailyConsumption} is the daily consumption`);
}
foreverConsumption(98,);//if perDay is given we ll get a different overAllConsumption figure

console.log("................................... quiz 8 ..............................................");


function longestWord (input5) {
    let givenWord = input5.split(" ");
    let biggerOne =0;
    let myWord;
    for(let b=0; b<givenWord.length; b++) {
        if(givenWord[b].length > biggerOne) {
            biggerOne = givenWord[b].length;//with figure we ll get biggest word in index-size
            myWord = givenWord[b];//with this we ll get the biggest word
        }   
    }
    console.log(myWord);     
}
longestWord("this is my longest word screening test");//it ll screen out the longest word


console.log("................................... quiz 9 ..............................................");

function vowelCounter(input6) {
    let myCounter = 0;
    for(let c=0; c<input6.length; c++) {
if(input6.charAt(c) === "a" || input6.charAt(c) === "e" || input6.charAt(c) === "i" || 
input6.charAt(c) === "o" || input6.charAt(c) === "u" || input6.charAt(c) === "A" ||
input6.charAt(c) === "E" || input6.charAt(c) === "I" || input6.charAt(c) === "O" ||
input6.charAt(c )=== "U"){

myCounter += 1;     
    }  
}
console.log(myCounter);   
}

vowelCounter("this is my EXAMPLE for the vowel counter test");//count the vowels in a sentence

console.log("................................... quiz 10 ..............................................");

function occurrenceCounter(input7) {

    let myMatcher = input7.match(/a/gi).length;//with length it give us the number
    console.log(myMatcher);
}
occurrenceCounter("the MAN in the iron mask is in the castle.");//count how many times repeated

console.log("................................... quiz 11 ..............................................");

function eachLetterOccurrence(input8){
let myCount1 = 1;
let myWord1="";
for(let d=0; d<input8.length; d++) {
    if(input8.charAt(d,1)===input8.charAt(d+1,1)){
        myCount1++;
    }else {
        myWord1 = myWord1 + input8.charAt(d,1) + myCount1;
        myCount1=1
    }
}
console.log(myWord1);
}
eachLetterOccurrence("communicccationnnn");//it ll count each character 


console.log("................................... la fin! ..............................................");