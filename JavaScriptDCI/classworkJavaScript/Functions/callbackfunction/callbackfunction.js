//callback function

/* we use it to render one function inside of another */

console.clear();

function firstFunc(){
    console.log(1);
}
function secondFunc (){
    console.log(2);
}
firstFunc();//1
secondFunc();//2


function firstFunc1(){
    setTimeout(function(){
        console.log("function1:", 1);
    },1000)
}
firstFunc1();//it is executed 1 second after the second one

function firstFunc2() {
    console.log("function2", 2)
}
firstFunc2();//is executed 1st though it is written the second

console.log("_______________  second callback func ___________");

function functionToBeCalled (name) {
    console.log("I was called by:", name); 
}
function funcWithCallBack(dog){
    console.log("I am func With callback");
    dog("func Dog to be called");
}
funcWithCallBack(functionToBeCalled);//from 2nd & call 1st func

console.clear();//to clear the above functions 

console.log("____________ callback func two ______________");

function caller(func){
    console.log("I accept a function then call it");
    func();
}
function callback() {
    console.log("I am a callback func");
}
caller(callback);

console.log("____________ callback  ______________");

function ashuToBeCalled(name) {
    console.log("I am called by the name: ", name);
}
function toBeCallback (callback) {
    console.log("I am function with call back");
    callback("Ashu");
}
toBeCallback(ashuToBeCalled);//I ll get I am called ...: Ashu

console.log("____________ callback example  ______________");

function firstOne (mark) {
    console.log("The mark of my car is :", mark);
}
function secondOne (car) {
    console.log("You ll get the mark of my car.");
    car("Fiat.")
}
  

setTimeout(function() {
    secondOne(firstOne);//I ll get 'the mark of my car is Fiat'
    console.log("timeout");
    firstOne("Fiat");
}, 2000);//I ll get 'the mark of my car is Fiat'


console.clear();

function firtOne (mark) {
    console.log("The mark of my car is :", mark);
}
function secondOne () {
    //console.log("You ll get the mark of my car.");
    //car("Fiat.")
}
setTimeout(secondOne(), 1000);