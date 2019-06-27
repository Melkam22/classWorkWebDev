console.log("_____________ quiz one ____________________");

let randomQuotes = ()=> {
   let randomQuotes=["What goes around comes around.",
                "what doesn't kill you makes you stronger.",
                "if you have a head shut up and stay there."];
 
    let pick = Math.floor(Math.random()*randomQuotes.length);
    console.log(randomQuotes[pick]);
}
randomQuotes();

                    /* or with parameter*/

let randomQuotes1 = (input)=> {
    let pick1 = Math.floor(Math.random()*input.length);
    console.log(input[pick1]);
    } 
 randomQuotes1(["What goes around comes around.",
 "what doesn't kill you makes you stronger.",
 "if you have a head shut up and stay there."]); 

 console.log("_____________ quiz two ____________________");

 let randomFood = ()=> {
    let randomFood = ["Pizza", "Spaghetti", "Chicken-wings",
                    "Burger", "Kish", "Kibab"];
    let pick2 = Math.floor(Math.random()*randomFood.length);
    console.log(randomFood[pick2]);
 }
 randomFood();

                              /* or */

let randomFood1 = (input)=>{
   let myPick = Math.floor(Math.random()*input.length);
   console.log(input[myPick]);
}
randomFood1(["Pizza", "Spaghetti", "Chicken-wings",
"Burger", "Kish", "Kibab"])

 console.log("_____________ quiz three ____________________");

 /* let today = new Date();
 let currentDay = today.getDate(); */

 /* const monthList = ["January","February","March","April","May",
"June","July","August","September","October","November","December"];
 let myMonth = monthList[today.getMonth()];
let remainingDays = myMonth+1 - currentDay;
 console.log(remainingDays);//??? */

 let lastDay = function(y,m){
    
   return  new Date(y, m +1, 0).getDate();
    
   }
   let today = new Date();
   let currentDay = today.getDate();
console.log(currentDay)
console.log(lastDay(2019,5-currentDay));//remaining days of month
    

 /* let daysToGo = ()=> {
    let myDate = new Date();

     //let myYear = myDate.getFullYear();
     //let remaining = myYear-myDate;
     //console.log(remaining);

     let endOfMonth = 31;
     let remainingDays = endOfMonth - myDate;
     console.log(remainingDays);

 }
 daysToGo();//days remaining to the end of the month */

let myDate = new Date();
myDate.setMonth(6);
myDate.setDate(22);
let remaining = myDate - new Date();
let  daysToGo = remaining/86400000;//1000*60*60*24 = 1day
 console.log(daysToGo);//days remaining till july 22nd */

 console.log("_____________ quiz four ____________________");

 let compareLetters = (input)=>{
   let a = (input.match(/y/gi).length);
   let b = (input.match(/o/gi).length);
   if(a==b) {
      console.log("This word is anagram");
   } else {
      console.log("This word is not anagram");
   }
 };
 compareLetters("Yooy");

/* function myAnagram(given) {
   let splitted = given.split("");
   let joined = splitted.join("");
   if(joined[0]=== joined[joined.length-3] &&
      joined[1] === joined[joined.length-2] &&
      joined[2]=== joined[joined.length-3]){
      console.log("This word is an anagram");
   } else {
      console.log("This word is not anagram.")
   } */
   //console.log(joined[joined.length-3]);
   
/* for(let a=0; a<given.length; a++) {
let myOne = given[0].toLowerCase().match(myLast = given[given.length-2].toLowerCase());
//let myLast = given[given.length-1].toLowerCase();
let myTwo = given[1].toLowerCase().match(mySecondLast = given[given.length-3].toLowerCase());
//let mySecondLast = given[given.length-2].toLowerCase();
let myThird = given[2].toLowerCase().match(myThirdLast = given[given.length-4].toLowerCase());
//let myThirdLast = given[given.length-3].toLowerCase();
if(myOne===myLast && myTwo===mySecondLast && myThird===myThirdLast){
   console.log("This word is anagram");
} else {
   console.log("This word is not anagram");
}
} 
}
myAnagram("tamtam");*/

console.log("_____________ robot exercise ____________________");
 
let tasks = [
   "Clean the floor",
   "Clean the windows",
   "Clear the dining table",
   "Clean the kitchen platform",
   [
       "Prepare breakfast",
       "Cook lunch",
       "Cook dinner"
   ],
   "Clean the dishes",
   "Clean the dining table"
]
for (let i = 0; i < tasks.length; i++) {
   let task = tasks[i];
   if (Array.isArray(task)) { // check if task has subtasks
       for (let j = 0; j < task.length; j++) {
           let subtask = task[j];
           console.log("I am working on subtask : ", subtask)
       }
   } else {
       console.log("I am working on task: ", task)
   }};

   console.log("_______ quiz five, horoscope  _______________");

/* let myHoroscope = "5 january";
const month = ["January","February","March","April","May",
"June","July","August","September","October","November","December"];
let myHoroscope = new Date();
const monJour = myHoroscope.getDate();//we ll get the day today in Nos.
const monMois = month[myHoroscope.getMonth()]; */
//console.log(`${monJour} ${monMois}`);//get day & month 

 
function myHoroscope(month, day){
   let mois = month.toLowerCase();
   if(mois=="january"){
      if(day >20) {
      console.log("Aquarius");
    }   else {
       console.log("Capricorn");
    } 
    if(mois=="february") {
       if(day>19) {
          console.log("Pisces")
       } else {
          console.log ("Aquarius");
       }
    }
   }  
    
}   
myHoroscope('february', 5);
/* Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20-February 18)
Pisces (February 19-March 20)  */