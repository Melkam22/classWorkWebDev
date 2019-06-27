
//closure, it is always a nested function
console.log("______________ global closure _________________________________");

let myVar ="I am global";
function outerFunction(){
    console.log(myVar);
}
outerFunction();//I am global

console.log("______________ local closure _________________________________");

let myVar1 ="I am global";
function outerFunction1(){
    let myVar2 = "I am a local scope";
function innerFunction(){
        return console.log(myVar2)
    }
    return innerFunction();
}
outerFunction1();//I am a local scope 

console.log("______________ closure with parameter _________________________");

function makeAdder(x){
    function add(y){
        return x+y;
    }
    return add;
}
//let plusOne = makeAdder(10);

//let plusTwo = makeAdder(2);
let plusTwenty = makeAdder(10);//x=10

 
//console.log(plusOne(4));//I ll get 14
//console.log(plusOne(1));//I ll get 11
console.log(plusTwenty(20));//I ll get 30, 10=glob scope & 20 local scope

console.log("______________ closure with parameter 2 _________________________");

function makeTitler(x) {
    function title(y) {
        return `${x} ${y}`;
    }
    return title;
}
let mrTitle = makeTitler("Mr.");
let msTitle = makeTitler ("Ms.");
console.log(msTitle("Sara"));//Ms. Sara
console.log(mrTitle("Ashu"));// Mr Ashu

console.log(makeTitler("Dr.")("Jane"));//Dr.Jane
console.log(makeTitler("Prof.")("Mark"));//Prof Mark