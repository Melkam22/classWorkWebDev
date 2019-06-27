

 

sum = 0;
product =1;

let intArray =[4,.2,7,5,.6,9];
for(let i=0; i<intArray.length; i++) {
sum=sum+intArray[i];
product=product*intArray[i];
         
};//quiz 1, the unordered list of intArray will be chronologically set
console.log(`sum: ${sum}
product: ${product}`);
console.log("..................................................................");

 /* let pattern ='*';
let sumPattern=[];
for(let p=0; p<10; p++) {
    for(let a=0; a<10; a++) {
    sumPattern.push(pattern);
        console.log(`${pattern}  `);
    }
};//quiz 2, how to change No with asterisk */

let b ='*';
let c = [];
for(let d=0; d<9; d++) { 
  c.push(b);
 console.log(c); 
}//quiz 2, incrementing astrisks  /* console.log(c.length);  */
for(let d=0; d<9; d++) {
c.pop(d);
console.log(c); 
} //this is array method of increment and decrement values .length not working 'cos we dont have any value for c array 



/* for(let d=1; d<c.length; d++) {
 console.log(c.slice(d));
console.log(c.pop(d)); */
//quiz 3, the reverse works, but it used the string method not an array method*/

console.log("..................................................................");


let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], 
[7, 4, 28, 14], [3, 10, 26, 7]];

for(let e=0; e<arr.length; e++) {
    console.log("row", e);
    /* for(let g=0; g<arr.length; g++) */ //it ll give us the same result       
    for(let g=0; g<arr[e].length; g++) {

console.log(` ${arr[e][g]}`);//quiz 3, we ll get one e after all g's end;
    }    
};
  
console.log("..................................................................");
 
 /* for(let h=1; h<4; h++) { */
        /* for(let j=1; j<=4; j++) { 
            console.log("quiz 4:")
        for(let k=1; k<4; k++) { 
            console.log(` ${j}`); 

}
};//quiz 4, we get 'quiz 4'heading & we print only the outer loop repeated values */
 
let arr4=[];
for(let j=0; j<=3; j++) { 
for(let k=0; k<=4; k++) { 
arr4.push(j);
}
}
console.log(`quiz 4:  ${arr4.join(" ")}`);//quiz 4,to get every element on th same line

console.log("..................................................................");

 /* for(let l=0; l<=4; l++) {
     console.log("quiz 5:")
     for(let m=0; m<=4; m++) {
         console.log(`${m}`);
     }
   
 };//quiz 5, we get 'quiz 5'heading & we print only the inner loop repeated values */

 let arr5=[];
 for(let l=0; l<=4; l++) {
for(let m=0; m<=4; m++) {
    arr5.push(m);
}
}
console.log(`quiz 5: ${arr5.join(" ")}`);