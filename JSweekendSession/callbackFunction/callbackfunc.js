
let CoffeeMachine=(callbackWater,callbackSugar,callbackCoffee)=>{
    callbackWater();
    callbackSugar();
    callbackCoffee();
    console.log("Your coffee is ready now");
 }
 function water(){
    console.log("water is boiling");
}
function sugar(){
    console.log("added sugar in water");
}
function coffee(){
    console.log("added coffee");
}

CoffeeMachine(water,sugar,coffee);

console.log("_____________ passing a function as a variable _______________");

let calculator=(num1,num2, operation)=>{
    return operation(num1,num2);
};
function Add(number1,number2){
return (number1+number2);
} 
function Product(number1,number2){
return number1*number2;
}
function Subtract(number1,number2){
return number1-number2;
}
console.log(Add(3,4)); 
console.log(Product(2,5));
console.log(Subtract(2,5));
let result=calculator(4,6,Product);
console.log(result);//we ll get 24 since it takes the product function, n*n
  
console.log("_____________ passing a function as a variable2 _______________");

let myVariable = (myNum1, myNum2, operate )=>{
    return operate(myNum1,myNum2);
}
 function multiplayer(numero1, numero2){
    return(numero1 * numero2);
}; 

function adder (numero1, numero2){
    return (numero1+numero2);
};

function divider(numero1, numero2){
    return(numero1/numero2);
}
let myMultiplayer = myVariable(120,3, multiplayer );
console.log(myMultiplayer);//we ll get 360 
let myAdder = adder(120, 3, adder);
console.log(myAdder);//we ll get 123
let myDivider = divider(120, 3, divider);
console.log(myDivider);//we ll get 40

console.log(myVariable(2,6, multiplayer));//we ll get 12 