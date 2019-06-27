


function cityName(myCity) {
    let myVar = myCity.substring(0,1).toUpperCase();

    if(myCity.substring(0,1) == myVar && myCity.substring(1,3) == "os"
     || myCity.substring(0,1) == myVar && myCity.substring(1,3) == "ew") {
        console.log(myCity)
    } else {
        console.log("Las-vegas");
    }
}

cityName("New-york");//quiz 1, only the first 3 letters are detected /Los-or-New../

console.log(".....................................quiz 1.............................................");
 
function myResult(sum,sum1,sum2) {
    let addedVal = (sum + sum1+ sum2);
    console.log(addedVal);
}

myResult(5,7,12);//quiz 2, added values of variables  /possibility to do it in an array

console.log(".....................................quiz 2.............................................");

function splitted(FirstName) {
    let givenName = FirstName.split(" ");
    let firstOne = givenName[0];
    console.log(firstOne);
}

splitted("Ashenafi Shiferaw");//quiz 3, it ll give you only the first name since it is splitted 

console.log(".....................................quiz 3.............................................");


function divisible(input) {
    let firstOne = 200;
    if(firstOne % input == 0) {
        console.log("Ture");
    } else {
        console.log("False");
    }
}
divisible(100);//quiz 4, result is true since firstOne is divisible by 100/input/

console.log(".....................................quiz 4.............................................");
 
function toAdverbe(root, root1, root2,) {
    /* for(let c=0; c<root.length; c++) {
    addedUp = (root[c]); */                   
     let suffix = "ly";
    console.log(`${root}${suffix}  ${root1}${suffix} ${root2}${suffix}`);
    }
     
toAdverbe("nice","slow","fast");//quiz 5, it ll add suffix ly on each adjective i ll put

console.log(".....................................quiz 5.............................................");

function evenOdd(numValue){
    if(numValue % 2 == 0) {
        console.log("this number is Even")
    }else {
        console.log("this number is Odd");
    }
}
evenOdd(1);//quiz 6, verify weather the input is even or not

console.log("..................................... quiz 6.............................................");

function triangle(missingAngle) {

    let angle = "";
    let firstAngle = (angle <= 27 && angle >= 50);
    let secondAngle = (angle == 45 && angle == 45);
    if(firstAngle == firstAngle && missingAngle > 45 && missingAngle  <= 95) {
        console.log("This angle is Obtuse");
    } else if(secondAngle == secondAngle && missingAngle >= 45 && missingAngle <=45 ) {
        console.log("This angle is Acute");
    } else {
        console.log("The angle is Right angle triangle")
    }
}
triangle("50");//quiz 7, to be redone 
 
console.log(".....................................quiz 7 .............................................");


function ashu1() {
    let list1 = ["car", "house", "office", "vacation"];
        let collector =[];
        for(let b=0; b<list1.length; b++) {
        splitted = list1[b].substring(0,1).toUpperCase();
        restOf = list1[b].substring(1,Infinity);
        merged = (splitted + restOf);
         
        collector.push(merged);
         
        }   
        console.log(collector);//outside the curly bracket of loops to get only one list of response
    }  
ashu1();//quiz 8, there has to be other way with loops 

console.log(".....................................quiz 8.............................................");

function wordCount(myWord) {
     
    let splittedWord = myWord.split(" ");
    counted = splittedWord.length;
    console.log(counted);
}
wordCount("This is a very very nice example.");//quiz 9, function to count the length of any given sentence
 
console.log(".....................................quiz 9.............................................");

function valueMultiplayer(givenNumb){
    let coverArray = [];
     
    for(let c=0; c<givenNumb.length; c++) {
        let multiplyee = givenNumb.length;
        let multiplyer = givenNumb[c];
        multyplyIt = multiplyee * multiplyer
        coverArray.push(multyplyIt);
        console.log(coverArray); 
    }
       
}
valueMultiplayer([3,5,8,9]);//quiz 10, multiply the content by the length of the array

console.log(".....................................the end.............................................");
 