
    /* console.log("hello world!");
    
    var one = ' ausome!';
    var two = 'Ashu is ';

    two += one;
    console.log(two);

    function greetings(){
        console.log("Hello there!");
    }
    greetings();

    function functionResult(a,b){
        console.log(a/b);
    }
    functionResult(21, 2);

 function functionMult(a, b){
    console.log(a*b)
 }
 functionMult(24, 13);

 */
                        /*object oriented*/

/* let movie = [

    title= "Titanic",
    time= 14,
    status= "unavailable"
];

console.log(movie); */

                        /* object oriented in list  */

var movies = [

    {title:"Titanic",
    time:"12pm",
    status:"available"},

    {title:"Kickboxer",
    time:"14pm",
    status:"unavailable"},

    {title:"Speed",
    time:"16pm",
    status:"available"},

    {title:"Castaway",
    time:"18pm",
    status:"unavailable"
}];

for (let movie of movies){
    if(movie.status==="available"){
        console.log(`the movie ${movie.title} plays at ${movie.time}`);
    } else if(movie.status==="unavailable"){
        console.log(`the movie ${movie.title} is sold-out.`)
    }
};
  

        /* if function, half of the answer on console half on browser*/

/* var age = prompt("how old are you?");

if (age<18) {console.log ("you are minor")}
else {console.log("you are major")} */


        /* if function, to be rendered on the browser*/

/* var salary = prompt ("How much is your salary?");

if(salary<1200) {alert("you are poor!")} if(salary<=1800) 
{alert("you are doing ok.")} else {alert("you are rich.")} 
 */

                /* if function, to be rendered on the browser*/
            
/* var color = prompt ("what is your favorite color?"); */


/* if(color==="red") {alert("you are cruel")} if(color==="blue") {alert("you are cool.")}
if(color==="white") {alert("you are maniak")} else {alert("you are very normal.")} */

let color = "green";

if(color!="red","black","blue","white") {console.log("This is the new outcome.");}

                       /*  if statement with logic */
let x = 20;
let y = 30;
if(x == 10 || y > 20) {
    console.log("Either or Or.")
}
if(x !=10 && y < 20) {
    console.log("not going to be true.")
} else {
    console.log("Else is rendered, since, both conditions are not true.")
}

                /*  multiple if statement with logic */

let gender = "Male";
let age = 18;

if(gender == "Male") {
 if(age >= 18) {
    console.log ("You are a " + gender + " and above the minimum legal age limit.");
  }  
    else {
        console.log ("Sorry!," + "you are " + age + " you are not eligible.");
    }
 }
 
else if(gender == "Female") {
    if(age >= 18) {
        console.log ("You are a " + gender + " and above the minimum legal age limit.");
    } 
    else {
        console.log ("Sorry Lady!");
    }
}

                        /* function variable setting */

let firstCode = function(a) {
    let greetings = "Hi, I am " + a;
    return greetings;
}
let a = " Ashu!"

console.log(firstCode(a));

/* document.querySelector("h1").innerHTML ="This is a test."; */