                                /* toPrague */


let names = ['mario','melkam','Ashu','marko','Mule','sintayehu'];
for(let i=0; i<names.length; i++) {
let toFirstLetter = names[i].substring(0,1).toUpperCase();
let toIntegral = names[i].substring(1,Infinity);
let toMerged = (toFirstLetter+toIntegral);
/* toIntegral.pop(); */
console.log(toMerged);
}
 
                                 /* filter values */

//let add =0;
let numbers = [4,1,3,21,45,78,102,5,11];
for(let i=0; i<numbers.length; i++) {
//add= add+numbers[i];
filtered = numbers.filter(function(value){
return value >= 10 && value <= 50;
}); 
} 
console.log(filtered);
 

                                  /* function */

let myCourses = [
{id:3,
course: "Maths",
credit: "5 hours"},
{id: 1,
course: "Geography",
credit: "2 hours"},
{id: 2,
 course: "Programming",
 credit: "7 hours"
},
{id:15,
 course: "Physics",
 credit: "4 hours"
},
{id: 7,
 course: "Economics",
 credit: "5,5 hours"
}];
myCourses.sort(function(a,b){
    if(a.id > b.id) return 1;
    if(a.id < b.id) return -1;
    return 0;
});
console.log(myCourses);


                                /*added values */

let adjectives = ['separate','independent','Valuabl','possibl'];
for(let i=0; i<adjectives.length; i++) {
toAdverbs = adjectives[i].substring(0,1).toUpperCase();
toTheRest = adjectives[i].substring(1,Infinity);
toMergeBoth = (toAdverbs+toTheRest);  
console.log(`It gives us: ${toMergeBoth}ly`);
} 

                     /* splited , reversed and added values at the beginning*/
 
let myNames = ['ashu','Marko','melkamu','george','frauke'];
for(let i=0; i<myNames.length; i++) {
toCapital = myNames[i].substring(0,1).toUpperCase();
toCrop = myNames[i].substring(1,Infinity);
merged = (toCapital+toCrop);
 
console.log(`The results are: ${merged}`);
}

                        /* change the chronology of words */

let chronologyNames = "Time Show";
let splitted = chronologyNames.split(' ');
let reversed = splitted.reverse(); 
let joined = reversed.join(' ');
console.log(joined);


                        /* summing up values or accumulators*/

let mySum =0;
let mySumingNoumbers = [2,-1,3,1,2,0,-2,4];
for(let n of mySumingNoumbers){
mySum +=n;
} 
console.log(mySum); 

/* same function */
let valueEmpty =0;
let mySumn =[2,-1,3,1,2,0,-2,4]
for(let a=0; a<mySumn.length; a++){
valueEmpty += mySumn[a]; 
}
console.log(valueEmpty);

                        /* same exercise different approach */
let mySum1 =0;
let mySummedNo = [2,-1,3,-12,20,0,-2,4];
for(let i=0; i<mySummedNo.length; i++) {
mySum1= mySum1+mySummedNo[i];
};
console.log(mySum1); 

                        /* accumulators */

let myNumberss = [2,-1,3,1,2,0,-2,4];
let mySumm = myNumberss.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;},0);

console.log(mySumm);//it ll give us the same result


                        /* min & max values range in an array */
    
/* let arrayNumbers = arrayFromRange(1,7);
function arrayFromRange(min, max){
for(let i=min; i<=max; i++)
output=[];
output.push(i);
return output;
}
console.log(arrayNumbers);//not working well ?? */

            /* includes function to verify an element exists in our list */

let allListedNumbers = [1,2,3,4];
function includes (array, searchElement) {
for(let element of array)
if(element ===searchElement)
return true;
return false;
}
console.log(includes(allListedNumbers, 5));//false, because 5 is not in the list

                    /* same function with different variables */

let myList = [2,-3,5,9,45,4];
function includes (listedNumbers, searchedNumber){
    for(let n of listedNumbers)
    if(n === searchedNumber)
    return true;
    return false;
}
console.log(includes(myList, -3));//we ll get true result since 5 is in the list 

                    /* to exclude values in a list of an array */

/* let output;
let listOfNumb = [1,2,3,4,1,5,1,1];
output = except (listOfNumb,[1]);
console.log(output);

function except(array, excluded) {
let output =[];
};
  */
                    /* moving elements in a list of arrays */

let movedNumb = [1,2,3,4,5,6,7];
let output = move(movedNumb, 1, 3)
console.log(output);
function move(array,index,offset){
let position = index + offset;
if(position >= array.length || position < 0) {
console.error('invalid offset.');
return;
}

let output = [...array];
let element = output.splice(index, 1)[0];
output.splice(position,0,element);
return output;
 
} //it ll put 1 after 3 numbers on the list, but I dont know how??
 
 
                                    /* count occurences function */

/* let myCountNumbers = [5,1,2,-1,3,2,4];
let myCount = countOccurences(myCountNumbers,2);
console.log(myCount);
function countOccurences(array, searchElement) {

};//not working?? */

                                /* get maximum value on list of array*/
 
let myListedNums = [5,1,2,-1,3,2,4]; 
let max = getMax([5,1,2,-1,3,2,4]);
function getMax(array) {
    if(array.length===0) return undefined;
    array.reduce((a,b) => {
        return (a>b) ? a : b;
    });
}//not working ??
 

                                        /* sorting and filtering */

let listOfMovies = [
    {title: "The ring", year: 2001, rating: 5},
    {title: "Buffalo", year: 2010, rating: 3.5},
    {title: "Mastermind", year: 2018, rating: 5.5},
    {title: "She", year: 2010, rating: 3},
];

/* let myTitles = listOfMovies.filter (m => m.year === 2010 && m.rating >=3.5);//filter based on values */
/* let myTitles = listOfMovies.sort((a, b)=> a.rating - b.rating);//rating descending order*/
let myTitles = listOfMovies.map(m=>m.title);//print out only movies titles of all movies

console.log(myTitles);//filtering throug a function

                                    /* other way to filter */
let myFiltWords = ['speed', 'live', 'communication', 'elite'];
let myFiltResult = myFiltWords.filter(myFiltWords => myFiltWords.length > 6);

console.log(myFiltResult);//filter the longest word from the list

                                /* foreach element  */

let myArray1 = ['air', 'beer', 'code'];
myArray1.forEach(function(element) {
console.log(element);
});//we ll get each array separately 

                                /* multiplying all elements by a number */
let arrayy1 = [1, 4, 9, 16];

let arrayy2 = arrayy1.map(x => x * 2);

console.log(arrayy2);