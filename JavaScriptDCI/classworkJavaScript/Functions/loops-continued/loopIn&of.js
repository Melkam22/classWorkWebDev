
console.log("___________ quiz one, while loop _________________");


/* a while loop that runs as long as i is less than 15. */

let a =0;

while(a<15) {
    console.log("render the result: ", a)
    a++;
};//we ll get from 0 to 14

console.log("_____________ quiz two, array of ..._______________");

let cityNames = ["Paris", "Berlin", "Prague", "Madrid"];
let b =0;
do{console.log(cityNames[b]);
    b++;
} while (b<cityNames.length);//list of cities but not in one line


/* let eachNames = cityNames.forEach(function(element) {
    console.log("These are my result:", element);
});//we ll get names of cities  
 */

console.log("______________ quiz 3, loop   __________________");

 
let oddEven = () => {
    let c=0;
do{c%2===0; 
console.log(c-4);
do {c%2!=0;
console.log(c+3);
c++;
} while (c<20); 
}while (c<20);//deduct 4 from even and add 3 to odd Nos.
}
console.log(oddEven());

console.log("________ quiz 1, do-while loop _____________");

function addedValue (given1) {
let sum=0;
let c=0;
do{sum += given1[c];
    c++; 
}while(c<given1.length);

console.log(sum);
};
addedValue([1,2,3]);//to ve sum of values in an array

console.log("________ quiz 2, while loop _____________");

let addedValue1 = ()=> {
    let sum1=0;
    let d=0;
    do{sum1 += d;
        d++;
    }while(d<20);
    console.log(sum1);
};
addedValue1();//sum of Nos from 1 to 20 

console.log("________ quiz 3, while loop _____________");

  
let IncrDecr = (given2) =>{

for(let z=0; z<given2.length; z++) {
    if(given2[z+1]>given2[z]) {
        console.log("these are ascending numbers");
    } else if (given2[z+1] < given2[z]) {
        console.log("these numbers are descending numbers")
    } else {
        console.log("it is irregular");
    }
}
};
IncrDecr([239, 120, 598, 453,1,4,2,9]);//easier to do it with for loop


console.log("_________ quiz 1, forEach, capitalize   __________________");

/* const toCapitalize = (given3)=> {
    let myJacket=[];
    let e =0;
do{ let myWords = given3[e];
    let myFirstLetter = myWords[0].toUpperCase();
    let remainingLetters = myWords.substring(1,Infinity);
    let fullWord = (myFirstLetter + remainingLetters);
    //myJacket.push(fullWord);
    e++
    console.log(fullWord);
} while(e<given3.length);
};
toCapitalize(["melkam", "sara", "ashenafi", "david"]);  */


const toCap = (input4)=>{
    let myJacket1=[];
        input4.forEach(function(element){
        let toCap1 = element.toLowerCase();
        myJacket1.push(toCap1[0].toUpperCase()+toCap1.substring(1,Infinity));
    });
    return(myJacket1);
}
console.log(toCap(["melkam", "SARA", "ashenafi", "david"]));

console.log("_________ quiz 2, forEach, NoDuplicate   __________________");

 
const noDuplicate = (input5)=> {
let myJacket2=[];
    input5.forEach(function(element) {
        if(myJacket2.indexOf(element)=== -1)
        myJacket2.push(element);
    });
    return myJacket2;
};
console.log(noDuplicate([1,7,2,3,3,5,6,5,7,7,4,4,1,6]));//take only one sample from each


console.log("_________ quiz 3, forEach, Duplicate   __________________");

const duplicate = (word, times)=> {
    let myJacket3=[];
    for(let f=0; f<times; f++) {
        myJacket3.push(word);
    }
    return myJacket3;
}
console.log(duplicate('Ashu', 5));//we multiply our value by n No.


 const duplicate2 = (given, multiplayer)=> {
    let myJack=[];
    g=0;
    do{myJack.push(given);
    g++;
} while(g<multiplayer)
return myJack;
 };  
 console.log(duplicate2('word', 4));//duplicate a word in an arry with do-while loop


 console.log("_________ bonus quiz, 1 forEach, Duplicate   __________________");

/* const func1 = (giveM) => {
    let mySortJack=[];
    let myFinalJacket =[];
    giveM.forEach(function(element){
        if(mySortJack.indexOf(element)===-1)
        mySortJack.push(element);
    });
        //return mySortJack;
        for(let i=0; i<mySortJack.length; i++) {
            if(mySortJack[i] % 2 !=0) {
            myFinalJacket.push(mySortJack[i]);  
            }  
        }
console.log(myFinalJacket) 
    }
    console.log(func1([-2, -2, 3, 3, -5, 7, -5, 0, 7, 7]));
 */
     
console.log("____________ bonus quiz, 2 forEach, Duplicate   __________________");
      
function oddTimes(givenNumb) {
    let number;
    let bigFrequency=1;
    let count;
    for(let i= 0; i<givenNumb.length; i++){
        count = 0;
      for(let j= 0; j<givenNumb.length; j++){
        if(givenNumb[i] == givenNumb[j]){
          count++;
          if(bigFrequency<count) {
            bigFrequency=count;
            number=givenNumb[i];
          }
        }
      }
      //if(count % 2 != 0){
        //return givenNumb[i];
      }
       return `${number} repeated ${bigFrequency} times.`
  };
  console.log(oddTimes([4,3,2,7,1,8,5,6,9,7,3,1,2,7]));//7 repeated n times 
 


const factor = (giveF)=>{
    //console.log([g+1]%[g]===1);
    for(let g=0; g<giveF.length-1; g++) {
        if(giveF[g+1]%giveF[g]!=0) {
        return false;
            //console.log(`${giveF[g]}: is  factor of ${giveF[giveF.length-1]}`);
        }else{
            //console.log(`${giveF[g]}: is factor of ${giveF[giveF.length-1]}`);   
    }
}
        return true;
};
console.log(factor([1, 2, 4, 8, 16, 32]));//any wrong No it ll be false 

 
/* function allAdd(input8){
let sumUp=0;
for(let y=0; y<input8.length; y++) {
    sumUp +=input8[y];
}
console.log(sumUp);
}
allAdd([7,9,3,2,12,4]); */

  