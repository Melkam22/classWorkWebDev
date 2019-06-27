
/*data type, primitive and reference(object) the 1st one each
variable is saved independently & one doesn't overwrite the other
but in the 2nd case it overwrite the other*/


let myVal = 10;
function add10 (param) {
    return param + 10;
}
console.log(add10(myVal));//we ll get 20

//numbers
//numbers are always "passed by values"/clones

let germany = 0;
let northKorea = germany;
germany +=1;
northKorea += 2;
console.log(germany, northKorea);//we ll get 1 & 2

//strings
//they are always "passed by values"/clones, overwrite
//but not change the original values

let one = "Ole";
let two = one;
one= "oh la laaa...";
two = "holly cow";

console.log(one, two);//over writes but the original stay the same

//objects are always references
//if we change the value of 1 variable it changes the other too

let score2018= [[1,0], [2,0]];
let score2020= score2018; 

score2018.push([3,1]);
score2020.push([5,1]);//for both updated 
console.log(score2018);//we ll get [[1,0], [2,0],[3,1]] for both
console.log(score2020);//we ll get [[1,0], [2,0],[3,1]]

let player ={
    name: "Ronaldo",
    totalGoals: 650,
}
let playerClone = player;
playerClone.totalGoals=6;
console.log(player);
console.log(playerClone);//for both we ll get totaGoals =6

/* in object type each variable is different, though they have 
the same value & data type they are not equal like in the case 
of primitive data types. eg:- */

//object data type, each variable has an identity
//primitive data type, each variable has not identity

 let num1 = [1,2,3];
 let num2 = [1,2,3];
 console.log(num1 === num2);//we ll get false

console.log("_____________ how to clone object[array] ________");
//five ways to clone an ,object(array)

/* const players = ["Christ Ronaldo", "Lionel Messi", "Neymar"];
//Shallow clones 
//clone an array with a for loop

function cloneArrayFor(arr) {
    let newArr=[];
    for(let a=0; a<arr.length; a++) {
        newArr.push(arr[a]);
    }
    return newArr;
} 
console.log(cloneArrayFor(newArr));
/* 
//2. clone an array with forEach

function cloneArrayForEach(arr) {
    let newArr =[];
    arr.forEach(item=> newArr.push(item));

    return newArr;
}

//3. clone an array with Array.slice

function cloneArraySlice(arr) {
    let newArr = arr.slice(0);

    return newArr;
}

//4. clone an array with array.from

function cloneArrayFrom(arr) {
    let newArr = Array.from(arr);
    
    return newArr;
}
 
//5. clone an array with the ...spread operator, the better way
const arr = ["Christ Ronaldo", "Lionel Messi", "Neymar"];
function cloneArraySpread(arr) {
    let newArr = [...arr];

    return newArr;
}

const players2 = cloneArraySpread(player);
players[0] = "Eden Hazzard";
console.log(players);//all 3 players will be projected
console.log(players2);//
*/
 

 const ball = {
     weight: "400gm",
     diameter: "15cm",
 }

const ball2 = {...ball}
ball2.weight= "500gm";//it ll overwrite the previous one
console.log(ball);//weig = 400g, & diam = 15cm
console.log(ball2);//weig = 500g, & diam = 15cm

console.log(".................... INCREMENT ................");
let x=10;
//x++
console.log(x);//10
console.log(++x);//11, same value
console.log(x++);//11, same value
console.log(x);//12, it shows the latest result not the original
console.log(x+=x);//we ll get 24, 'cos += added it self not 1

console.log(".................... DECREMENT ................");
y=10;
//--y
console.log(y);// we ll get same y value, 10 
console.log(--y);//same value, 9
console.log(y--);//same value, 9
console.log(y);// we ll get 8

console.log("..............while loop  ................");
let s = 1;
while(s<5) {
    console.log(++s)
};//2,3,4,5

console.log(".................const & object ................");

let x1 =1;
x2 = "10";
 /* const */ x1 =10;

let greeter = {
    greeting: "hello",
}
console.log(greeter);

console.log("...... from obj to string, changing data type .....");

greeter = "hello string";
console.log(greeter);
console.log(typeof greeter);//we changed it from obj to string

console.log(".....example from obj to string  ........");

let myWord = {
    word: "object word",
    use: "encourage",
}
console.log(myWord);

//to string

myWord = "string word";
console.log(myWord);
console.log(typeof myWord);//changed from obj to string