
console.log(".............................................quiz 1.........................................");

function compareCharacters1 (input1) {
    let sum=0;
    for(let a=0; a<input1.length; a++) {
        
        sum +=input1[a].length;
     
        if(sum % 2 == 0 && input1[0]=== input1[2]){
            console.log("true");
        } else {
         console.log("false")
        }
    }
}
compareCharacters1("yloyo");//partially true

                                            /*  or */

function compareCharacters (input) {
    let sum=0;
    let one = (input.match(/o/gi).length);
    let two = (input.match(/y/gi).length);

    if( one == two) {
        console.log("true");
    } else {
        console.log ("false");
    }
}
compareCharacters("yoyo");//quiz 1, if there is equal No of both letters give us true,   

/* function equalCharacter(input) {
    let splittedInput = input.split("");
for(let a=0; a<splittedInput.length; a++) {
     if(splittedInput[a].length == "x" && splittedInput[a].length == "o") { 
         console.log("true");
    } else {
        console.log("false"); 
    }
}
};
equalCharacter("xoxo");//not working
 */



console.log(".............................................quiz 2...........................................");

 
 function evenDivision(totalSlice, recipients, remainingSlice) {
     
     if(totalSlice/recipients >= remainingSlice) {
         
         console.log("true");
     } else {
         console.log("false");
     };
     
 }
 evenDivision(9, 5, 2);//the remaining value is still positive so the answer is true

 console.log(".............................................quiz 3.....................................");


function sumCube (givenNumb) {
for(let b=0; b<givenNumb.length; b++) {
    sum = givenNumb[b]**3;
    console.log(sum);
}
if(givenNumb == 0){
    console.log("the value is 0");
}
};
sumCube([0,3,2,5]);//I ll get the cube root of the given number 


 console.log("..............................................quiz 4.....................................");

 /* function multiplayer(givenNumb) {
     let numbers = [];
     for(let d=1; d<=givenNumb; d++) {
         if(d%5 === 0) {
             numbers.push(d * 10);
         } else {
            numbers.push(d);
         }
          
     }
     console.log(numbers)    
 }
 multiplayer(5);//when the given No is a multiply of ex 5, 7 etc it ll multiply it by 10 else itself */

 function amplifyOper(given2) {
     let number= [];
     /* let stringed = given2.toString();
     let dividedNumb = stringed.split("");
     let joined1 = dividedNumb[d].join(" "); */
    for(let d=0; d<=given2.length; d++) {
if(d % 3 == 0 ) {
    number.push(d * 10);
       }   else {
            number.push(d);
        }
    }
    console.log(number);
}
    
 amplifyOper([0,1,2,3,4,5,6,7,8,9]);//when the given No is a multiply of "n" it ll multiply it by 10 else itself 


 console.log("..........................................quiz 5............................");

 function selectMonth(month) {
    /*  for(let e=1; e<=month.length; e++) { */
    if(month==1){
    console.log("January");
}else if(month==2){
    console.log("February");
} else if(month==3){
    console.log("March");
}else if(month==4){
    console.log("April");
}else if(month==5){
    console.log("May");
} else if(month==6){
    console.log("June");
}else if(month==7){
    console.log("July");
} else if(month==8){
     console.log("August");
} else if(month==9){
    console.log("September");
} else if(month==10){
     console.log("October");
} else if(month==11){
    console.log("November");
} else{
    console.log("December");
        } 
    }
/* }; */

selectMonth(7);//it works this way, hope there ll be a shorter way

console.log("...........................................quiz 6............................");

function evenNumbers(numbers) {
    let jacket=[];
    for(let f=1; f<=numbers; f++) {
        if(f % 2 == 0) {
            jacket.push(f);   
        }  else if(f % 2 !== 0) {
            jacket.push([]);
        }
    }
    console.log(jacket);   
}
evenNumbers(7);//even numbers until the given number are listed

console.log("...........................................quiz 7............................");

function initials(words) {
for(let h=0; h<words.length; h++){
    if(words[h].substring(0,1).toUpperCase() =="A" ||
    words[h].substring(0,1).toUpperCase() =="C" ||
    words[h].substring(0,1).toUpperCase() =="S" &&
    words[h].length >=3) {
        console.log(words[h]);
    } else {
        console.log([]);
    };
}
}//it ll take all words which start with the given letter & are 4 letters long
initials(["Ashu","Abdu","Bottle","Code","Silence","Door","sign","So"]);

 
console.log("...........................................quiz 8............................");


function dictionary(filterWords) {
    let myBrace1 = [];

     for(let g=0; g<filterWords.length; g++) {
if(/* filterWords[g].substring(0,1).toUpperCase()=="A" && */ filterWords[g].length==4) { 
        console.log(filterWords[g]);
        } else {
            console.log([]);
        }  
    }   
};//only words which have 4 letters are rendered
dictionary(["Ashu", "Abdu", "Jane", "Astro", "Alem", "Ahadou", "Ashenafi"]);

console.log("..............................................quiz 9.............................");

function symmetrical (givenNumbers) {
/* let toArr1 = []; */
let stringed1 = givenNumbers.toString();//possible to take individual value
let splitted1 = stringed1.split("");
let reversed1 = splitted1.reverse();//this to compare
if(stringed1[0] == reversed1[0] && stringed1[1] == reversed1[1] && stringed1[2] == reversed1[2]){
    console.log("symmetrical");
} else {
    console.log("not symmetrical");
};
}
 
symmetrical(1234321);//symmetrical the 1st 3 & the last 3 are equal then symetric..

console.log("................................................quiz 10.............................");

function replaceValues(string) {
    let codedValue = string.replace(/a/gi, "4");
    let codedValue1 = codedValue.replace(/e/gi, "3");
    let codedValue2 = codedValue1.replace(/i/gi,"1");
    let codedValue3 = codedValue2.replace(/o/gi, "0");
    let codedValue4 = codedValue3.replace(/s/gi, "5");
    let codedValue5 = codedValue4.replace(/g/gi, "9")
    console.log(codedValue5);
}
replaceValues("programming is Interesting.");//all coded letters ve changed

console.log("..............................   la fin   ...........................");
