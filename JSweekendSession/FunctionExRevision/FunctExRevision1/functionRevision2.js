
console.log("................................quiz one ...........................");

function checkCharacter (input) {
    let one = input.match(/o/gi).length;
    let two = input.match(/x/gi).length;
    if(one == two) {
        console.log("true");
    } else {
        console.log("false");
    }
};
checkCharacter("xolXo");//equal No of x & o, it give us True

 
console.log("................................. quiz two .........................");

function fairSplit (slice, recipients, remain) {
 
if(slice/recipients >= remain) {
    console.log("fairly distributed");
} else {
    console.log("not fairly distributed");
}
};
fairSplit(10, 8, 1);//fairly distributed since the remain is >1

console.log("................................. quiz three .......................");

function sumOfCubes (input1) {
    let sum=0;
    for(let a=0; a<input1.length; a++){
        let given = input1[a]**3;
        sum = sum+given;
         
    }
    console.log(sum);
}
sumOfCubes([3,5,7]);//we ll get the sum of the square cubes of given Nos.= 495

console.log("................................. quiz four .......................");


function amplifyNumbers (input2) {
    let result =[];
    for(let b=0; b<input2.length; b++) {
        if(input2[b]% 4 === 0) {
            result.push(input2[b] * 10);
        } else {
            result.push(input2[b]);
        }
    }
    console.log(result);//we ll get 1,2,3,40 etc.
};
amplifyNumbers([1,2,3,4,5,6,7,8,9,10,11,12]);//remainder =0 multiply it by 10 ...

console.log("................................. quiz five .......................");

function monthFinder(month) {
if(month == 1) {
    console.log("January");
} else if (month == 2) {
    console.log ("February");
} else if (month == 3) {
    console.log ("March");
} else if (month == 4) {
    console.log ("April");
 } else if (month == 5) {
        console.log ("May");
 } else if (month == 6) {
    console.log ("June");
}   else if (month == 7) {
    console.log ("July");
}   else if (month == 8) {
    console.log ("August");
}   else if (month == 9) {
    console.log ("September");
}   else if (month == 10) {
    console.log ("October");
}   else if (month == 11) {
    console.log ("November");
}   else if (month == 12) {
    console.log ("December");
} else {
    console.log("this is not a valid No of month");
}
}
monthFinder(5);//12 months called respectively 


console.log("................................. quiz six ........................");

function evenNumbers (input3) {
    let result1=[];
    for(let c=1; c<=input3; c++) {
         
        if(c%2 == 0) {
            result1.push(c);
            } else if(c%2 !==0) {
                    result1.push([]);
                    
            }
    }   
    console.log(result1);
    } 
    
evenNumbers(8);//we ll get all even Nos until the given No, else empty brace

console.log("................................ quiz seven ........................");

function dictionary (words) {
    let emptyBrace =[];
    for(let c=0; c<words.length; c++) {
        if(words[c].substring(0,1) == "A" || words[c].substring(0,1) == "C" ||
            words[c].substring(0,1) == "S" && words[c].length >=4) {  
            emptyBrace.push(words[c]);
    } else {
        emptyBrace.push([]);
    }
}
console.log(emptyBrace);
}//only those words with preset conditions are screened 
dictionary(["Ashu", "Commune", "Speed", "Bottle", "single"]);

console.log("................................ quiz eight ........................");

function quatre (givenWords) {
    let emptyBrace1=[];
    for(let d=0; d<givenWords.length; d++) {
        if(givenWords[d].length == 4) {
            console.log(givenWords[d]);
        } else {
            console.log([]);
        }
    }
};

quatre(["Ashu","Commune", "keep","Bottle", "cool"]);//only words with 4 letters

console.log("................................ quiz nine ........................");

function symmetrical(numbers) {
    let toStr = numbers.toString();//compare 1
    let toSpl = toStr.split("");
    let toRev = toSpl.reverse();//compare 2
     
    if(toStr[0] == toRev[0] && toStr[1] == toRev[1] && toStr[2] == toRev[2] 
        && (toStr[3]== toRev[3] && toStr[4]== toRev[4] && toStr[5]== toRev[5])) {
        console.log("These No.s are symmetrical");
    } else {
        console.log("These No.s are not symmetrical");
    }

}
symmetrical(12391519321);//the reverse and not-reverse are equal then symmetrical

console.log("................................ quiz ten ........................");

 /* 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5. */

function scriptedSentence (wordsReplace) {
let codedVal1 = wordsReplace.replace(/a/gi, "4");
let codedVal2 = codedVal1.replace(/e/gi, "3");
let codedVal3 = codedVal2.replace(/i/gi, "1");
let codedVal4 = codedVal3.replace(/o/gi, "0");
let codedVal5 = codedVal4.replace(/s/gi, "5");
let codedVal6 = codedVal5.replace(/g/gi, "9");
console.log(codedVal6);
 }
scriptedSentence("Programming is Cool!");//letters replaced with characters 

console.log(".......................... la fin! ........................");


function occurances(givenWord2) {
let incrementNum =1;
let word ='';
for(let e=0; e<givenWord2.length; e++) {
    if(givenWord2.charAt(e, 1)== givenWord2.charAt(e+1, 1)){
    incrementNum++;
    } else {
        word = word + givenWord2.charAt(e, 1) + incrementNum;
        incrementNum = 1;
    }
}
console.log(givenWord2.charAt(1));//the problem is here
}
occurances("melkame");//increment indexes with numb & characters   