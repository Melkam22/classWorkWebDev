
/* let i; 
for(i=0; i<=10;i++) {
    i=i+2;//it jumps to every 3rd numbers /2 5 8 11
    console.log(i);
};

for(i=0;i<18;i++){
    i=i+3;//the result will be 2 5 8 11 20
}
console.log(i); */


let sum=10;//globally set variable is always changing
for(let i = 1; i <= 10; i++){
    sum = sum + i;
    console.log(`Sum =${sum}`);
}
 

 
for(let i = 1; i <= 10; i++){
    let sum1=10;//locally set variable is always stay the same
    sum2 = sum1 + i;
    console.log(`Sum2 =${sum2}`);
}
 
let fruits = ['apple', 'orange','banana'];
for(let i=0; i< fruits.length; i++){
    const newArray = fruits[i];
    console.log(newArray);
}

let myString = "digital career institute";
for(let i=0; i < myString.length; i++){
    console.log(`the index of ${myString[i]} is ${i}`);
}

