
//Callback

console.log("______________ quiz one _______________ ");

function each1 (name ) {
    console.log("this is my name :",name);  
}
function myArray (one) {
    console.log("my name is given here");
    one("Ashu");
}
myArray(each1);//we ll get my name is: Ashu


let each= (arr, callback)=>{
    arr.forEach(value => {
        callback(value)
    });
}//go through each element & execute the below given instructions
each([1,2,3,4], function(val){
    console.log("given value:", val);
});
each([1,2,3,4], function(val){
    console.log("value times 2: ", val*2);
});
each([1,2,3,4], function(val){
    console.log("value divided by 2: ", val/2);
});

                        /* or */

let newFunc = (val, callback)=> {
    val.forEach(Element=> {
        callback(Element)
    });
}
newFunc([2,4,6,8], function(whatToDo){
    console.log(whatToDo*2);
});

                    /*again with array func*/

let arrayFunc = (one, two)=>{
    one.forEach(Element=> {
        two(Element);
    });
}
arrayFunc([6,9,12,15], function(given){
    console.log(given/3);
});//each element in the array is divided by 3
arrayFunc([6,9,12,15], function(given){
    console.log(given/2);
});//each element in the array is divided by 2

console.log("______________ quiz two _______________ ");

 
let map = (arr, callback)=>{
    let myJacket=[];
    arr.forEach(value=>{
        myJacket.push(callback(value))
    });
    console.log(myJacket);
}
map([1,2,3,4], function(val){
    return val * 5;
}); // [5,10,15,20]
 
console.log("______________ quiz three _______________ ");

let filter = (arr, callback)=> {
    let myJacket1=[];
    arr.forEach(value=>{
     if(callback(value)==false)myJacket1.push(value);
    });
    console.log(myJacket1);
}
filter([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]
filter([2,3,4,5], function(val){
    return val % 2 === 0;

//filter([1234], val => val%2===0); works with arrow func too
}); // [3,5]//we ll get false true instead of the numbers

let myDate = new Date();
console.log(myDate);

let daysOfWeek=["Sunday", "Monday", "Tuesday","Wednesday",
"Thursday", "Friday", "Saturday"];
let myWeekDays = daysOfWeek[myDate.getDay()];
console.log(myWeekDays);