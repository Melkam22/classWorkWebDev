function foo() {
    console.log(c);
}
let c = 10; 
foo();//10, a global variable and func-call site is outside

console.log("_________ default binding _____________");
//default binding
function foo1() {
    //default binding
    console.log(this.b);
    "use strict"//it ll make it work strictly
}
b = 10;
foo1();

console.log("_________ implicit binding _____________");
//implicit binding
function foo() {
    //default binding
    console.log(this.a);
}
let obj = {
    a:2,
}
foo.call(obj);//2 call is a method to call a func inside a func

//another example
function foo2() {
    console.log(this.a);
}
function doFoo() {
    foo2();
}
let obj1 = {
    a: 2,
    foo2: foo2,
}
a="ohh, it's global!";
doFoo(obj1.foo2);//we ll get, ohh, it's global!

console.log("_________ implicit binding _____________");

function ashu () {
    console.log(this.a+ this.b);
}
let myObj = {
    a: 35,
    b: 60,
    key: ashu,//key is a random name 
}
a = 30;
b = 60;
myObj.key();//we ll get 95

console.log("_________ implicit binding _____________");

function ashu2() {
    console.log(this.x);
}
let myObj2 = {
    x: 100,
    ashu2: ashu2,
}
let myObj1 = {
    x: 1,
    myObj2: myObj2,
}
myObj1.myObj2.ashu2();//we ll get 100, it takes the 1st value

console.log("_________ explicit binding _____________");
//explicit binding

function foo3() {
    console.log(this.d);
}
let obj2 = {
    d:20,
}
foo3.call(obj2);//we ll get 20, better to use this one from all


console.log("____ call ll bind it to the particular scope _____");

function foo5(){
    console.log(this.e);
}
let obj3 = {
    e: 4,
}
let inside = function(){
     console.log("hoo hooooo");
};
foo5.call(inside());//we ll get hoo hooooo, 

console.log("____________ new binding _____________");

/* function foo4(a) {
    this.a=a;
}
let newBinding = new foo4(2);//constructing new object from newBinding
console.log(newBinding);//we ll get foo {a: 2}
console.log(newBinding.a);//we ll get 2
 
//priority of usage, how the program prioritize
//1 new binding
//2 explicit
//3 implicit binding
//4 default binding

let instanceOfBar = new newBinding();
console.log(instanceOfBar);//to create a new lookalike/constructor/
 */

console.log("_______ one function multiple use __________");

function car (maxSpeed) {
    this.maxSpeed = maxSpeed;
}
let fastCar = new car (200);
console.log(fastCar);//car { maxSpeed: 200 }

let slowCar = new car(80);
console.log(slowCar);//car { maxSpeed: 80 }

console.log(fastCar.maxSpeed);//we ll get 200
console.log(slowCar.maxSpeed);//we ll get 80

console.log("___1. solve object exercise with this.keyword_____");     

function myVar (name, lastName, address){
        this.name =name;
        this.lastName=lastName;
        this.address = address;
}
let myInfo = new myVar("Ashu", "Shiferaw", "PetenkofferStr.")
console.table(myInfo);//we ll get an object with these 3 info.
     
function myResult(){
   let key=Object.keys(this);
   let value=Object.values(this)
   console.log(key,value);
}  
myResult.call(myInfo);//we ll get an array of 3 informations

/* delete this [myValue[myValue.length-1]]; *///delete last element

console.log("___2. solve object exercise with this.keyword_____");

function myVar1(firName, lastName, age, address) {
    this.firName=firName;
    this.lastName=lastName; 
    this.age=age;
    this.address=address;
}
let listItems = new myVar1("Dave","Petro",25, "Prince-ro")
console.table(listItems);
//to change this object function to an array we ll do the below

function myResult1(){
    let key=Object.keys(this);
    let value=Object.values(this);
    console.log(key,value);
}
myResult1.call(listItems);

console.log("___3. solve object exercise with this.keyword_____");

function myVar2(firName, lastName, age,profession,address){
    this.firName=firName;
    this.lastName=lastName;
    this.age=age;
    this.profession=profession;
    this.address= address;
}
let myValues = new myVar2("Jean-pierre","Ruffo",50,"Programmer","Rue Victor-Hugo, Paris",)
 console.table(myValues);
//to change this object function to an array we ll do the below

function toChange(){
let key= Object.keys(this);
let value= Object.values(this);
console.log(key,value);
}
toChange.call(myValues);//we ll get the array

console.log("________ other method to do object this._____");

let person = {
    firstName: "Lila",
    lastName: "Moon", 
    age: "23",
    job: "Dancer",
    city: "Berlin",
}
function retrieve() {
const values = Object.values(this);
console.log(`${values[0]} ${values[1]} is a ${values[2]} year old ${values[3]} living in ${values[4]}`);
}
retrieve.call(person);

console.log("________ 3, delete the last element _________");

    /* if we feed our object with list of ready-made object */

function myObjectFunction(input){
    let lastItem = input[input.length-1];
    console.log(lastItem);
}
myObjectFunction(["mark:fiat", "color:red", "status:excellent","price:5000$"]);

                                /* or */

function carMod(mark, color, status,price){
    this.mark=mark;
    this.color=color;
    this.status=status;
    this.price=price;
}
let myCar = new carMod("fiat","red","excellent-condition","$5000");
//console.log(myCar);

function ashu(){
    let myKeys = Object.keys(this);
    delete this[myKeys[myKeys.length-1]];
    console.log(this);
}
ashu.call(myCar);//it ll target the last key & values & delete them


console.log("________ 4, object function, length of _________");

function lengthOf(name, lastName){
   this.name=name;
   this.lastName=lastName;
   this.myJacket1=[];  
}
let checkLength = new lengthOf("Ashenafi", "Shiferaw");
console.log(checkLength);//we ll get keys and values

function myLength(){
    let lengthend = Object.values(this);
    let myAnswer = lengthend.length;
    console.log(`length of my values are ${myAnswer}`);
}
myLength.call(checkLength);//we ll get the values length

function addUp(){
this.myJacket1.push({profession:"programer", address:"Berlin"});
    console.log("hi there this is ",checkLength /* this.myJacket1 */);
}
addUp.call(checkLength);
 

console.log("________ 5, object function with this. _________");

let bookList =[ 
    { author: 'J.K. Rowling', title: 'Harry Potter and the Chamber of Secrets', readingStatus: true }, 
    { author: 'Homer', title: 'The Odyssey', readingStatus: true },
    { author: 'Harper Lee', title: 'To Kill a Mockingbird', readingStatus: false }
    ];

function statusCheck (){
    for(let c=0; c<this.length; c++){
        let stat = this[c].readingStatus;
        if(stat===true) {
            console.log("I have already read that");
        } else if(stat===false) {
            console.log("It is on my to read list");
    }
    }
}
statusCheck.call(bookList);//we ll get true,true, false 


/* for(let b=0; b<bookList.length; b++){
    let checkThis = bookList[b].readingStatus;
    if(checkThis === true) {
        console.log("I read it already");
    } else if(checkThis=== false){
        console.log("it is on my to read list.");
    }
}//to be done with this function below, but not working */