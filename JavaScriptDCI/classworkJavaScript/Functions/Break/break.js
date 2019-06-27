
                /* case, break & default  */
const date = new Date().getDay();
let dayOfTheWeek;

switch (date) {
    case 0:
    dayOfTheWeek = "Sunday";
    break;
    case 1:
    dayOfTheWeek = "Monday";
    break;
    case 2:
    dayOfTheWeek = "Tuesday";
    break;
    case 3:
    dayOfTheWeek = "Wednesday";
    break;
    case 4:
    dayOfTheWeek = "Thursday";
    break;
    case 5:
    dayOfTheWeek = "Friday";
    break;
    case 6:
    dayOfTheWeek = "Saturday";
    break;
}
console.log(dayOfTheWeek);//we ll get names of days in letter... 

/* switch (new Date().getDay()) {
    case 4:
    case 5:
        statement = "Soon it is Weekend";
        break; 
    case 0:
    case 6:
       statement = "It is Weekend";
        break;
    default: 
        statement = "Looking forward to the Weekend";
}
console.log(statement); */


switch(date){
    case 0:
    Text = "Today is Sunday";
    break;
    case 6:
    Text = "Today is Saturday";
    break;
    default:
    Text = "Looking forward to the weekend";
}
console.log(Text);

const x = 0;
switch(x){
case 0:
text1 = "off";
break;
case 1:
text1 = "on";
break;
default:
text1 = "No value found";
};
console.log(text1);//off, on, no value,  values, case sens


const myName = "Melkam";
switch(myName) {
    case "Solomon":
    statement = `The name is ${myName}`;
    console.log(statement);
    break;
    case "Ashu":
    statement = `The name is ${myName}`;
    console.log(statement);
    break;
    case "Peter":
    statement = `The name is ${myName}`;
    console.log(statement);
    break;
    default:
    statement= `The name is not on our list`;
    console.log(statement);
}//we ll get names and default value 
//console.log(myName); we don't always need this part


const age = 15;
switch(age) {
    case 8:
    case 10:
    case 12:
    case 14:
    remark = `It is time for school`;
    break;
    case 15:
    remark = `You can not apply for University yet`;
    break; 
    default:
    remark = `Welcome to College!`;
}
console.log(remark);


const myGrade ='A';
switch(myGrade.toUpperCase()) {
    case 'A':
    text2 = `your grade is ${myGrade}`;
    console.log(text2);
    break;
    case 'B':
    text2 = `your grade is ${myGrade}`;
    console.log(text2);
    break;
    case 'C':
    text2 = `your grade is ${myGrade}`;
    console.log(text2);
    break;
    case 'D':
    text2 = `your grade is ${myGrade}`;
    console.log(text2);
    break;
    case 'F':
    text2 = `your grade is ${myGrade}`;
    console.log(text2);
    break;
    default:
    text2= `this grade is not correct`;
    console.log(text2);
};
//console.log(text2);we ll get upper & lower case grades


                    /*switch group work*/

const myChallenge = (input)=> {
    let myJacket =[];
    for (i=0; i<=30; i++) {
    let myNumber = Math.floor(Math.random()*10);
    myJacket.push(myNumber);    
}
let finalRandom = myJacket.join("");
//input = /12/gi;
let stringedInput = input.toString();
let splittedInput = stringedInput.split("");
let joinedInput = splittedInput.join("");
console.log(joinedInput);//index value of the input to compare
//console.log(joinedInput);
let compare = finalRandom.match(joinedInput)/* ==input */; 
console.log(compare);
 
/* if(joinedInput.length ==2) {
console.log(`you got 100 euro!`);
} else */ if (joinedInput.length ==4) {
    console.log(`you got 150 euro!`)
} else if(joinedInput.indexOf('12') ==6) {
    console.log(`you got 500 euro!`)
} else {
    console.log(`Luck was not with you! try again!`)
} 
};
myChallenge("12");

 /* switch(input) {
    case 'A':
    //text =  ;
    console.log(`${compare==input} you got 100 euro!`);
    break;
    case 'B':
    //text =  ;
    console.log(`${compare==input} you got 150 euro!`);
    break;
    case 'C':
    //text =  you got 500 euro!`;
    console.log(`${compare==input}`);
    break;
    default:
    //text2=  ;
    console.log(`Not lucky! try again!`);
}  */
 

/* let expr = 'Bananas';
switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log("Sorry, we are out of " + expr + ".");
  }
  
  console.log("Is there anything else you'd like?");

  */

                    /* output list of words */


let foo = 4;
let output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 6!');
}
 

"I pack my suitcase and take with me my red shirt, toy car, toothbrush, phone."

let listOfWords =6;
let myWord = " ";
switch(listOfWords) {
    case 0:
    myWord += "I pack my ";
    case 1:
    myWord += "suitcase and ";
    case 2:
    myWord += "take with me ";
    case 3:
    myWord += "my red shirt ";
    case 4:
    myWord += "my toy car ";   
    console.log(myWord);
    break;
    case 5:
    myWord += "my toothbrush, ";  
    console.log(myWord); 
    break; 
    case 6:
    myWord += " & my phone. "; 
    console.log(myWord);  
    break;   
    //default:
     
}
console.log('choose a number from 0 to 3!');

                    /* count repetition */

function compare(input11 ) {

uniqueCount = ["11","12","13","14","14","15","11","12","13","16","17","18","18","11"];
//let count = {};
let count =0;
uniqueCount.forEach(function(input){
    //count[input] = (count[input] ||0)+1;});
    if(input11[0]==input) {
      count++;
    };
    /* if(input11[1] == input) {
      count++;
    }; */
  
     if(count>1 && count[0] <2 /* || input11[1]>1 && input11[1]<2 */) {
        console.log(`you won 100 euro`)
    } else if(input11[0]>2 && input11[0] <3 /* || input11[1]>2 && input11[1]<3 */) {
        console.log(`you won 150 euro`)
    } else if (input11[0]>3 && input11[0] <4 /* || input11[1]>3 && input11[1]<4 */) {
        console.log(`you won 500 euro`)
    } else {
        console.log(`not lucky, try again!`)
      }
})
};
compare(["11"/* ,"13" */]);//??
 



