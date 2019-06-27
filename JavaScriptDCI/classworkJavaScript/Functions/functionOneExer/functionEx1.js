

function reverseString (givenString) {
    let stringed = givenString.toString();
    let arrayed = stringed.split("");
    let reversed = arrayed.reverse();
    let joined = reversed.join(""); 
     
    console.log(joined);
}
reverseString(45511);//quiz 1, reverse a string into numbers and reverse it after 

                            /* same function but with decimal numbers */

 /* function decimalPlace(giveNum) {
    str="";
         
decimalPlace(518.54); //not working with decimal */

 

console.log(".................................... quiz 1 .............................................");


/* function chronologicallyPut() {
    let givenWords = ["banana", "orange","avocado","pineapple","papaya"];
    let sorted = givenWords.sort();
    console.log(sorted);
}
chronologicallyPut(); */

function chronologicalString(myString1) {
    let string1 = myString1.split("");
    let sorted1 = string1.sort();
    let joined1 = sorted1.join("");
     
    console.log(joined1);
}
chronologicalString("banana");//put characters in alphabetic order
console.log(".................................... quiz 2 .............................................");

function bigNumber(listOfNumbers) {
  
    console.log(Math.max(listOfNumbers));
}

bigNumber((12,5,8,2,4,17));//(it has to be in parenthesis) big number from the given list of numbers

                                                /* or  */

/* function bigNumber1(var1, var2) {
    /* let myVariables = (var1 & var2); */
    /*if(var1 > var2) {
        console.log("var1" + " is greater than " + "var2");
    }else if (var2 > var1 ) {
        console.log("var2" + " is greater than " + "var1");
    } else {
        console.log("var1" + " is equal to " + "var2");
    }
}

bigNumber1(19,9); */

function filteredValue (arr, nub) {
    /* let listOfNum = [6,3,1,8,7,9,12,22]; */
    let filtered = arr.filter(function(value) {
        return value >= nub;});
        console.log(filtered);
    }

filteredValue([6,3,1,8,7,9,12,22],8);//quiz 3,all is given filter it from the list of array and give result


console.log(".................................... quiz 3 .............................................");

function givenDogYear(humanAge) {
    dogsAge = humanAge/7;
    console.log(dogsAge);

}
givenDogYear(33);//quiz 4, input human's age, output dog's age


console.log(".................................... quiz 4 .............................................");


function lifeTime(age, amount) {
    let calc = (365 * age)
    console.log(calc + `  this much chocolate during your entire life-time`);

    dailyConsume = (amount * 365 * age);
    console.log(dailyConsume + ` this is the total amount if you eat ${amount} chocolates a day`);
}
lifeTime(90, 4);//quiz 5, if he eats 3 a day, he ll consume >76000 chocolates in total


console.log(".................................... quiz 5 .............................................");

 /* function longestWord() {
    let myWordList = "This is the sweetest dinner that I have ever prepared";
    let splitWord = myWordList.split(" ");
    let longestWord = 7;
        if(splitWord > longestWord) {
            console.log(splitWord + `is the longest word`);

    }
    /* selectWord = splitWord.length;
     if(selectWord > 8) { */
      /*   console.log();
     }

longestWord();  */
/* 
function findLongestWord(str) {
    return str.length;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");

 */

function findLongestWord(str) {
    let strSplit = str.split(" ");
    let longestWord = 0;
    let word;
    for(var b=0; b<strSplit.length; b++){ 
      if(strSplit[b].length > longestWord){
      longestWord = strSplit[b].length; 
     word=strSplit[b];///without [b] we ll get all the list of the array
       }  
    }
    console.log(word);    
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");//quiz 6, ll get the biggest word


  console.log(".................................... quiz 6 .............................................");


  function vowelCount(myString){

    let vowelList = 'aeiouAEIOU';
    let count = 0;
    
    for(let c=0; c<myString.length; c++){
      if (vowelList.indexOf(myString[c]) !== -1){
       count += 1; 
      }
    
    }
    console.log(count); 
  }
   
  vowelCount("The quick brown fox sAAd");//quiz 7 vowel count is working



  function getVowels(/* str */ string) {
    let vowelsCount=0; 
    /*let string = str.toString(); */

    for (var d=0; d<=string.length; d++) {
  
      if(string.charAt(d) == "a" || string.charAt(d) == "e" || string.charAt(d) == "i" || string.charAt(d) == "o" || string.charAt(d) == "u" ||
       string.charAt(d) == "A" || string.charAt(d) == "E" || string.charAt(d) == "I" || string.charAt(d) == "O" || string.charAt(d) == "U") {
        vowelsCount += 1;
      }
    }
    /* return vowelsCount; */
    console.log(vowelsCount);//quiz 7, vowel count, longest code but the simplest 
  }

  getVowels("The quick brown fox AO");//quiz 7, both work perfectly

  console.log(".................................... quiz 7 .............................................");


  function checkType(data) {
      let myData = typeof data;
      console.log(myData);   
  }
   

  checkType(123); //quiz 8, detect type of a data
   

  console.log(".................................... quiz 8 .............................................");
 
   function matchedfun(input) {
        let  matched = input.match(/h/gi).length;//with length the Number with out the characters
        console.log(matched);
  } 
 
  matchedfun("The man with the iron mask.hoHHHH");//quiz 8, to see if this value exist in the given input


console.log(".................................... quiz 9 .............................................");

 function occurCount(feeder) {
     let count1 = 0;

     for(let e=0; e<feeder.length; e++) {
         let eachWord = feeder[e].split(" ");
         let joined11 = eachWord.join(" ");
         let myIndex = feeder.indexOf(joined11);
         count1 += 1;  
         console.log(joined11); 
         console.log(myIndex);
     } 
     
 }
occurCount("wooorld");//this is to know in which positions letters are placed in a word

                                           /*  or */


    function countWords(myFeeder) {
    let result11 = "";
    let counter = 1;

    for(let f=0; f<=myFeeder.length; f++) {
        if(myFeeder.charAt(f, 1) === myFeeder.charAt(f+1, 1)) {
            counter++;
        }
        else {
            result11 = result11 + myFeeder.charAt(f, 1) + counter;
            counter = 1;
        }
    }

    console.log(result11);//possible to use chartAt or substr

   /*  if(result11.length < myFeeder.length)
        console.log(result11)
    else
        console.log(myFeeder); */
}

countWords("communication");//quiz 10, to know the number of times that characters are repeated in a phrase


                                       /*  or another way */


function countChars(word12) {
    
    let arr = word12.split("");
    let currentChar = arr[0];
    let count = 1;
    let compression = " "; 
    for (let g=1; g<arr.length; g++) {
        if (arr[g] === currentChar) {
            count++;
        } else {
            compression += currentChar + count;
            currentChar = arr[g];
            count = 1;
        }
    }
    compression += currentChar + count;
        
        if (compression.length > word12.length) {
            return word12;
        }
        return compression;
    } 
    
    console.log(countChars("myfavorite"));//it doesn't work with other examples

    /* console.log(countChars("my favorite movie")); */

   /*  countChars("my favorite movie"); */



console.log(".................................... quiz 10 .............................................");

   

 /* function  countOccur(input) {
     let myWord;
     let occurWord = 0;
     let myOccur = input.split(""); 
        for(let s=0; s<myOccur[s].length; s++) {
            if(myOccur[s].length > occurWord) {
                occurWord = myOccur[s].length;
                myWord = myOccur[s].length;
                console.log(`${myWord} ${myOccur[s]} ${myOccur[s].length}`); 
            }
    
        }
         
 }
countOccur("ironmask");
 */




 function characterCount(input) {
  let myCount = 1;
  let myWord ="";

    for(let s=0; s<=input.length; s++) {
        if(input.charAt(s, 1)=== input.charAt(s+1, 1)) {
            myCount++;
        }else {
            myWord = myWord + input.charAt(s, 1) + myCount;
            myCount=1;
            console.log(input.charAt[s][1]);
        }
    }
 
 }
characterCount("Ashu");