
                             /*  array */

let fruits = ['Apple', 'Orange', 123, undefined, null, false, true,];
console.log(typeof fruits);//object
console.log(fruits[1]);//2nd element on the list
console.log(fruits.length -1);//we ll get not the element by name but just the No.
let arrayToString = (fruits.toString());//changing our array to string
console.log(arrayToString);
console.log(typeof arrayToString);//we ll get string
console.log(arrayToString[3]);//it's a string now & we ll get just the 3rd letter
 

let numList = [50,19,3,1294,4829,59,99,8];
console.log(numList.sort());
/* it is tacking into consideration the first No. so, /13 >1200/ it is useful
for array(alphabetical order) */

let charList = ['banana','box','sugar','onion','bread','rice'];
console.log(charList.sort());//will be placed alphabetically
console.log(charList[charList.length -1]);//we ll get the last index 
charList.push('spaghetti');//this ll be added at the end
console.log(charList);


let studyProg = ['maths','biology','chemistry','geography'];
console.log(studyProg);
console.log(studyProg[studyProg.length -1]);//the last index with full string
console.log(studyProg.sort());//chronological
studyProg.push('astronomy');
/* studyProg.pop(); */ //we ll get rid of the last item
console.log(studyProg);
console.log(studyProg.join(' - ')); //it ll join the lists with a given symbol & it ll transform into a string.
studyProg[1] = 'physics';//to substitute items with another one
console.log(studyProg);

                        /*  empty-space */

studyProg[5]='economics';//there ll be an empty space before economics,5th element.
console.log(studyProg);

delete studyProg[studyProg.length -1];
console.log(studyProg);//it ll delete the last item but the place is reserved
console.log(studyProg.reverse());//reverse the order

/* studyProg.splice('philosophy','psychology');
console.log(studyProg); */







             /* since it's a string now, it ll print the
                    3rd character of the first word */


            /* we can put evrything inside array and inside object too */

/* let films = [
    {
        type: "action",
        time: 12
    },
    {
        type: "drama",
        time: 14
    }
];

console.log(films); */