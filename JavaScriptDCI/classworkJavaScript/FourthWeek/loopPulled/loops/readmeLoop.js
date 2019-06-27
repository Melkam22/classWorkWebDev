
for(let i=0; i<=20; i++) {
    console.log(i);
}//quiz 1 

console.log('.................................................................');


for (let i= 1; i<=5; i++) {
    if(i==1){
        console.log(`there is ${i} bottle of beer on the wall`);
    }
     else{
        console.log(`there is ${i} bottles of beer on the wall`);
     }
}//quiz 2

console.log('.................................................................');


for (let i=0; i<=20; i++) {

    if(i%2 == 0) {
        console.log(`the value ${i} is even`);
    }
    else {
        console.log(`the value ${i} is odd`);
    }
}//quiz 3

console.log('.................................................................');

for(let i=0; i<=10; i++) {
    let multiplayer= i*9; 
    console.log(`${i} * 9 = ${multiplayer}`);
}//quiz 4

console.log('..................................................................');

let divider =0;
let marks = [90,60,77,81,65];
let average;
for(let i=0; i<marks.length; i++) {
divider = divider + marks[i];
average = divider/marks.length;
} 

console.log(`The average grade is : ${average}`); 

if(average >=90 && average <=100){
    console.log(`your grade is A`);
}
else if(average >=80 && average <90) {
    console.log(`your grade is B`);
}
else if(average >=70 && average <80) {
    console.log(`your grade is C`);
}
else if(average >=60 && average <70) {
    console.log(`your grade is D`);
}
else {
    console.log(`your grade is F`);
}//quiz 5 

console.log('..................................................................');

for(let i=0; i<=100; i++) {
    if(i%3==0 && i%5==0) {
        console.log(`FizzBuzz`);
    }else if(i%3==0) {
        console.log(`Fizz`);
    } else if (i%5==0) {
        console.log(`Buzz`);
    }
}//quiz 6

console.log('..................................................................');

let add=0;
for(let i=0; i<=1000; i++) {

    if((i%3 ==0) || (i%5 ==0)) {
        add = add+i;
    }
     
    /* if(i%(3+5)==0) {
        console.log(`sum of multiples`);
    } else if (i%3==0) {
        console.log (`multiple of 3`);
    } else if(i%5==0){
        console.log(`multiple of 5`);
    } */
}
console.log(add);//quiz 7

console.log('..................................................................');
 
let friendsName=['Thomas','David','Mustapha','Pierre','Catarina'];
for(let i=0; i<friendsName.length; i++) {
filteredName=friendsName[i];
console.log(`Guten Tag ${filteredName} !`);
}       

                                //or 

let classMates =['Mohammed','Franz','Naqvi','Alisio','Miguel','Lorraine'];
let sortedClassMates =classMates.sort();
console.log(sortedClassMates);
for(let i=0; i<classMates.length; i++) {
filteredClassMates = sortedClassMates[i];
console.log(`Bon jorno ${filteredClassMates}!`);

}//quiz 8 i ll do function

console.log('..................................................................');


let i;
for(let i=1; i<=10; i++) {
sum =i*100;
console.log(`the output is ${sum}`);
}//quiz 9a, 

console.log('..................................................................');
let powerOf;
for(let i=0; i<8; i++) {
powerOf = Math.pow(2, i);
console.log(`the output is ${powerOf}`);
}//quiz 9b, 


for(let i=0; i<=10; i++) {
if(i%2==0) {
    console.log(`${i}`);
};
}//quiz 9c,
 

for(let i=1; i<=15; i++) {
    if(i%3==0) {
        console.log(`${i}`);
    };
    }//quiz 9d,

for(let i=9; i>=0; i--){
    console.log(`the reversed values are: ${i}`);
};//quiz 9e, decrementing values  

let word ='madam';
let transform = word.toLowerCase().split('');
let reversed= transform.reverse();
let joined = reversed.join('');
     /*  if(word==reversed)  */ 
      if(word == joined){ 
         console.log(`The word ${word} is a palindrome`);
     }  else {
    console.log(`The word ${word} is not a palindrome`);
    }//quiz 10, with out array


    let myWord = "nursesrun";
    let myTransform = myWord.split('');
    let myReversedWord = myTransform.reverse();
    let myJoinedWord = myReversedWord.join('');

    let myLoop =0;
    for(let i=0; i<myWord.length; i++) {

        if(myWord[i] == myJoinedWord[i]) {
            myLoop++; 
        if(myLoop === myWord.length-1){
            console.log(`The word ${myWord} is a palindrome`)
        
        } else {
           myLoop++;
        if(myLoop === myWord.length-1){
            console.log(`The word ${myWord} is not a palindrome`);
        }
    }
}
    }//quiz 10, with array
 


