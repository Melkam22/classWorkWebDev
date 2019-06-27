/* Map, filter, reduce work only with array & similar to
forEach method the only difference is that during this case
we shouldn't have to push results to a new array, map will
 do it automatically */

console.log("_____________ map ex 1  _________________");

let arr = [1,2,3,4];
let squareArr = arr.map(num=>num **2);
console.log(squareArr);//we ll get square of num= [1,4,9,16]

console.log("_____________ map ex 2  _________________");
let numbers = [4,9,16,25];
function mapMethod() {
    return numbers.map(Math.sqrt);
}
console.log(mapMethod());//we ll get the sq root =[2,3,4,5]
console.log(numbers);//the original value is not affected [4,9,16,25]

console.log("_____________ map ex 3 _________________");

let numArr =[1,4,9];
let doubles = numArr.map(function(num){
    return num*2;
});
console.log("doubles: ",doubles);//times 2
console.log("numArr: ", numArr);//original value

console.log("_____________ map ex 4 _________________");

let lengths = ["Ashu", "Melkam", "Frauke"].map(item=>item.length);
console.log(lengths);//we ll get the lenght [4,6,6]

console.log("_____________ map ex 5 _________________");

//using map to reformat object parameters in an array

let newArray = [
{
     key: 1, 
     value: 10,
},
{   key: 2,
    value: 20,
},
{   key: 3,
    value: 30,
},
];
let reformattedArray = newArray.map(moon=> {
    let newObject = {};
    newObject["key" + moon.key]= moon.value;
    return newObject;
});
console.log(reformattedArray);// 
/* the key's are replaced by; [key1, key2, key3] & the value
of "value" will became the value of the keys */

console.log(newArray)//the original result is unchanged


console.log("_____________ filter ex 1 _________________");

let myArray = [1,2,3,4,5];
const evenArray = myArray.filter(num=>num%2 ===0);
console.log(evenArray);//we ll get [2,4]
console.log(myArray);//but the original is unchanged [1,2...5];

console.log("_____________ filter ex 2 _________________");

let age=[17,32,44,11,7,57,85,99];
function checkAges (age) {
    return age>=18;
}
console.log(age.filter(checkAges));//we ll get[32,44,57,85,99]

console.log("_____________ filter ex 3 _________________");

let words = ["spray", "Ashu", "spread", "melkam", "come"];
const result = words.filter(mot =>mot.length <=4);
console.log(result);//we ll get 'ashu, come]

console.log("_____________ reduce ex 1 _________________");

/*it does the opposite of map, instead of diverging outcomes
it will converge them*/

let givenArray = [1,2,3,4];
const reducerFunction = (accumulator, currentValue)=> 
accumulator + currentValue;
const sum = givenArray.reduce(reducerFunction);
console.log(sum);//we ll get 10

/* higher order function, it accepts functions as a parameter */
console.log("_____________ reduce ex 2 _________________");

const sum1 = givenArray.reduce(reducerFunction, 5);//accumul. starts with 5 then go to [1,2,3,4]
console.log(sum1);//we ll get 15

let givenArray1 = [1,2,3,4,5];
const reducerFunction1 = (moon, sun)=>
    moon + sun;
    const sum2 = givenArray1.reduce(reducerFunction1, 10);
    console.log(sum2);//we ll get 25 (givenArray + 10)

    console.log("________ reducer function explained _________");

    const reducer = function(accumulator, currentValue, currentIndex, array){
        console.log("acc: ",accumulator, "currVal: ", currentValue,
        "currentIndex: ", currentIndex, "array: ", array);
        return accumulator + currentValue;
    }
    givenArray1.reduce(reducer);//we ll get the below result
//acc:  1 currVal:  2 currentIndex:  1 array:  [ 1, 2, 3, 4, 5 ]
//acc:  3 currVal:  3 currentIndex:  2 array:  [ 1, 2, 3, 4, 5 ]
//acc:  6 currVal:  4 currentIndex:  3 array:  [ 1, 2, 3, 4, 5 ]
//acc:  10 currVal:  5 currentIndex:  4 array:  [ 1, 2, 3, 4, 5 ]


console.log("_________________ sort method _________________");

let months = ["march", "January", "december", "May", "june", "July"]; 
let sortedMonth = months.map(element=> element.toUpperCase());
let myMonths = sortedMonth.sort();

console.log(myMonths);

console.log("_________________ function to sort letters _____________");

let monthList = ["march", "January", "december", "May", "June", "July"];
let sortMon = monthList.sort(function(a,b){
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a>b){
     return 1;
    }else if(a < b){
     return -1;
    }else if (a === b) {
    return 0;
    }
})
console.log(sortMon);
 
console.log("_________________ sort ex 1 _________________");
let nums = [4,2,-5,3.5,1];
nums.sort((a,b)=>a-b);

console.log(nums);//it ll give us chronology of numbs from small to big

console.log("_________________ sort ex 2 _________________");
let nums1 = [4,2,-5,3.5,1];
nums1.sort((a,b)=>b-a);

console.log(nums1);//it ll give us chronology of numbs from big to small

console.log("_______________ sort with object________________");

let items= [
{name: "Ashu", value: 30},
{name: "Melkam", value: 20},
{name: "Jerry", value: 30},
{name: "Pierre", value: 10},
]
//sort by value
items.sort(function(a,b){
    return a.value -b.value;
})
console.log(items);//values ll be chronologically put small to big

//sort by name 
items.sort(function(a,b) {
    let nameA=a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if(nameA<nameB) {
        return -1;
    }if (nameA > nameB) {
        return 1
    } return 0
})
console.log(items);//names ll be chronologically put
console.log(typeof items);

console.log("_______________ Array.isArray()  s________________");
//array.isArray
/*Array.isArray() is a boolean and it is different than typeof
method since for array typeof ll give as object and it is a 
general name result might be an array or any other object*/

let myArray12 = [1,2,3,4];
console.log(typeof myArray12);//boolean
console.log(Array.isArray([1,2,3,4]));//we ll get true