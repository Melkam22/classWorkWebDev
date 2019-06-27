
let changeFunc = (given, price)=> {
givenMoney=[
    {200: 0},
    {100: 0},
    {50: 0},
    {20: 0},
    {10: 0},
    {5: 0},
    {1: 0},
    {.5: 0},
    {.20: 0},
    {.10: 0},
    {.05: 0},
    {.02: 0},
    {.01: 0}
];
let change = given-price;
for(let a=0; a<givenMoney.length; a++){
    for(let key in givenMoney[a]){
        while(change.toFixed(2)>=Number(key)){
            givenMoney[a][key]++;
            change=change.toFixed(2)-Number(key);
}
}
} 
//console.log(givenMoney);i ll get the total list
let result = givenMoney.filter(item=>{
    for(let key in item) {
        return item[key] !=0;
    }
});
console.log(result);
};
changeFunc(50, 3.75);
changeFunc(100, 27.45);

console.log(">>>>>>>>>>> casher solution 2 <<<<<<<<<<<<<<<<<<<<<<");

function changeFunc1(given, price){
    let toCustomer=[];
let myMoney=[200,100,50,20,10,5,2,1,.5,.2,.05,.02,.01]; 
let change= given-price;
if(given<price){
    console.log(`you should have at least ${price}€ to buy this product`);
    } else {     
for(let b=0; b<myMoney.length; b++){
        if(change>=myMoney[b]){
        let result1=Math.trunc(change/myMoney[b]);
        console.log(result1);
toCustomer.push((`${result1} x ${myMoney[b]}€`));
console.log(toCustomer);
change=change.toFixed(2)-myMoney[b]*result1;//to solve 0.01€ issue 
}
} 
  return toCustomer; 
}
}
console.log(changeFunc1(30, 24.75));

console.log("_______ another casher solution __________");
/* or other way to do cashier */

function casher2 (iPay, thePrice){
let theDifference = iPay-thePrice;

let myList = [200,100,50,20,10,5,2,1,.5,.2,.05,.02,.01];
for(let a=0; a<myList.length; a++){
if(theDifference >= myList[a]){
    let render = Math.trunc(theDifference/myList[a]);
    console.log(render);
    let myChanges = (`${render} x ${myList[a]}€`);
    console.log(myChanges);
 theDifference=(theDifference-myList[a]*render).toFixed(2);
    }
    if(iPay<thePrice){
    console.log(`you have to have at least ${thePrice} to buy this`);
}
}
}
casher2(200, 140.27);



