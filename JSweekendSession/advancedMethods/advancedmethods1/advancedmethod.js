
//filter, non-destructive method

console.log("________________  filter method __________________________");

let given1 = [10, 20, 15, 30,57,93,67,74,89];
let myScores = given1.filter(function(value1){
    return value1 >=70;
})
console.log(myScores);//we ll get [ 93, 74, 89 ]

console.log("________________  filter in array of objects ____________________");

let myList1 = [
    {name: "Ashu", status: "active", permanent: true},
    {name: "Melkam", status: "inactive", permanent: false},
    {name: "Frauke", status: "active", permanent: true},
    {name: "Frauki", status: "inactive", permanent: false},
];
let filterOut = myList1.filter(function(screen){
    return !screen.permanent;
});
console.log(filterOut);//we ll get only permanent=true members
//if I put !on the second(return screen) I ll get the opposite result

console.log("________________  map method __________________________");

let given2 = [10, 20, 15, 30,57,93,67,74,89];
let mapped = given2.map(function(value2){
    return value2/2;
});
console.log(mapped);//we ll get [ 5, 10, 7.5, 15, 28.5, 46.5, 33.5, 37, 44.5 ]

console.log("________________  map in array of objects ____________________");

let myList2 = [
    {name: "rice", price: 20},
    {name: "apple", price: 10},
    {name: "banana", price: 12},
    {name: "pineapple", price: 8},
    {name: "meat", price: 24}
];
let halfPrice = myList2.map(function(value){
    if(value.price>10){
        return value.price/2;
    } else {
        return value.price;
    }
});
console.log(halfPrice);//we ll get [ 10, 10, 6, 8, 12 ]


    /* if(value.name.length>=6){
        return value.name;
    }else{
        return [];
    }    
})
console.log(halfPrice);//we ll get banana & pineapple
 */
console.log("________________  reduce method __________________________");

let given3 = [10, 20, 15, 30,57,93,67,74,89];

let myReduce = given3.reduce((arr, curr)=>{
    if(arr >50){
        curr--;
    } return curr;
},0);
console.log(myReduce);//we ll get 88 the last value -1



