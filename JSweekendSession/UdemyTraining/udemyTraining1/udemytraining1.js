console.log("_____________________  first exercise ________________________ ");
                    
                    /* last indexOf */

let email = "asheaddis@yahoo.com";
//let result = email.lastIndexOf("o");//we ll get 17
//let result = email.slice(4,13);//we ll get addis@yah
//let result = email.substr(4,10);//I ll get 10 characters from the 4th one
let result = email.replace(/a/gi, "7");//we ll replace all a's with No. 7
console.log(result);

console.log("_____________________  second exercise ________________________ ");

let kisses = 10;
//kisses = kisses+1;
//kisses++;//increment by 1
//kisses--;//decrement by 1
//kisses += 10;//increase by 10
//kisses -=8;
//kisses *=2;//multiply it by 2
kisses /=2;//divided it by 2
console.log(kisses);

console.log("_____________________  third exercise ________________________ ");

let myList = ["me", "myself", "I"];
//let myIndex = myList.length;//I ll see how big the list is
//let myIndex = myList.indexOf("myself");// I ll get 1, if i join it it ll be 1
//let joined = myList.join(", ");//it is joined and one
//let myIndex = joined.indexOf(myList);// indexOf myList we ll get -1
let concated = myList.concat(["they", "she"]);//it ll concat the new values
//let pushed = myList.push("we");//it adds this value to the list, but only index value is seen
 
console.log(concated);

console.log("_____________________  NaN and Null  ________________________ ");

let myName = "Ashu";
let myNanValue = (myName/2);//we ll get NaN

console.log(myNanValue);

                    /* Null is tentionally given to a value*/

let myValue = null;
let myAddition = myValue + 15;
console.log(myAddition);//I ll get 15, null serves as 0

console.log("_____________________  includes meth.  ________________________ ");

let myEmail = "myname@gmail.com";
let myIncludes = myEmail.includes("l");

console.log(myIncludes);//we get true answer

let myArray = ["me", "myself", "I", "she", "he"];
let toCompare = myArray.includes("she");//we ll get true since it exists in the list

console.log(toCompare);

let score = "10";
//console.log(score + 1);//we ll get 101 since the No is a string to change ...console

score = Number(score);
console.log(score + 1);//now we ll get 11 

console.log("_____________________  while loop   ________________________ ");

let i =0;
while(i<5) {
    console.log("while loop:", i);
    i++;
}

const names = ["Ashu", "Melkam", "Frauke"];
let a=0; 
while(a<names.length) {
    console.log(names[a]);
    a++;
};

const namesList = ["Ashu", "Melkam", "Frauke"];
if(namesList.length >=3) {
    console.log("true");
} else {
    console.log("false")
};

function myPassWord(passWo) {
    
    if(passWo.length >=10 && passWo.includes( '1' /*,'3','4','5','6','7','8','9' */)) {
        console.log("the pass word is strong");
    } else if (passWo.length <=10 && passWo.includes( !'1' /*,!'3',!'4',!'5',!'6',!'7',!'8',!'9' */)) {
        console.log("the password is not strong");
    };
}
myPassWord("ashenshi1@yahoo.com");//we ll get the 1st one


console.log("______________  break, continue & switch stat. __________________ ");

const myScores = [40,35,0,60, 75,100, 20,10];
for(let b=0; b<myScores.length; b++) {
    console.log("my score:", myScores[b]);
    if(myScores[b]===100) {
        break;
    } else if(myScores[b]===0) {
        continue;
    }//if score is 0, it ll continue to play
        console.log("congra, top score!");
         
    
};//Nos after 100 are being ignored 


const grades = "A";
const givenGrade =(grades.toUpperCase);
switch(givenGrade) {
    case "a":
    console.log("you got", givenGrade);
    break;
    case "B":
    console.log("you got", givenGrade);
    break;
    case "C":
    console.log("you got", givenGrade);
    break;
    case "D":
    console.log("you got", givenGrade);
    break;
    case "F":
    console.log("you got", givenGrade);
    break;
    default:
    console.log(givenGrade, "not a valid grade");
};

console.log("______________  return & arrow func'n __________________ ");

const calcArea = function(radius) {
    let area = 3.14* radius **2;
    console.log(area);//it has to come before return to make it work
    return area;
}
calcArea(5);

                                /* arrow func'n   lecture 34*/

const calcArea1 = (radius1) => {
    return 3.14 * radius1 ** 2;   
};
const area1 = calcArea1(5);//has to be in a variable 
console.log(area1)

                                /* or */

const calcArea2 = (radi)=>{
    let area2 = 3.14 * radi ** 2;
    console.log(area2, "is the result");
}
calcArea2(5);//we ll get 78.5 is the result

const bill = (products, tax) => {
    let total = 0;
    for(let c=0; c<products.length; c++) {
        total += products[c] + products[c]*tax;
    } return total;
}
console.log(bill([20,30,40],0.2));//amount of (total + tax)


console.log("______________  callback funct'n forEach __________________ ");

let people = ["man", "woman", "boys", "girls", "students"];
    people.forEach(function(person){
        console.log(person);
    });//we ll get each person individually 

//let myPeople = ["man", "boys", "girls", "woman", "students"];
const logPerson = (person, index) => {
    console.log(`${index}-hello ${person}`);
};
 people.forEach(logPerson);//we ll get each name with the index value 

 console.log("______________    object literals       __________________ ");

 let client = {
     name: "Ashu",
     profession: "Programer",
     email: "ashu@hotmail.uk",
     address: "Berlin",
     articles: ["How to code fast?", "When to apply for jobs"]
 };

//console.log(client["name"]= "Melkam");//name is changed to Melkam
//console.log(client["address"]= "Paris");//address is changed to Paris
console.log(client);

console.log("______________ adding methods in object literals ________________ ");

let client1 = {
    name: "Ashu",
    profession: "Programer",
    email: "ashu@hotmail.uk",
    address: "Berlin",
    articles: ["How to code fast?", "When to apply for jobs"],
    login: function() {
        console.log("the user is logged in");
    },
    logout: function() {
        console.log("the user is logged out");
    }
};
client1.login();//we ll see only the inside function's result
client1.logout();//we ll see only the logged out result 
//console.log(client1);//we ll see the entire object 

console.log("___________ adding logBlog function in an object ________________ ");


/* let client2 = {
    name: "Ashu",
    profession: "Programer",
    email: "ashu@hotmail.uk",
    address: "Berlin",
    articles: ["How to code fast?", "When to apply for jobs"],
    login: function() {
        console.log("the user is logged in");
    },
    logout: function() {
        console.log("the user is logged out");
    },
    logBlogs: function(){

        //(this.logBlogs), console.log(this);
        //console.log(this);
    }
    
};//to be done later
 */

console.log("___________ storing object in an array ________________ ");

let customer = {
    Name: "Melkam",
    Email: "melkam@hotmail.uk",
    Address: "Prague",
    blogs:[
        {title: "How to code fast?", comments: 25},
        {title: "When to apply for jobs", comments: 32}
    ],
    login: function() {
        console.log("the user is logged in");
    },
    logout: function() {
        console.log("the user is logged out");
    },
logBlogs(){
console.log("the user had written:");
this.blogs.forEach(blog=>{
    console.log(blog.title, blog.comments);//each object value
});
}
};
customer.logBlogs();//we ll see the blogs object, lecture 41 

console.log("_________________ array    ________________ ");


let movies =[
    {title: "champions",
    time: "12pm",
    status: "available",
    },
    {title: "FA cup",
    time: "14pm",
    status: "unavailable",
    },
    {title: "premier league",
    time: "16pm",
    status: "available",
    },
    {title: "confed cup",
    time: "18pm",
    status: "unavailable",
    },
];
for(let movie of movies){
    if(movie.status==="available"){
        console.log(movie.title + " shows at " + movie.time);
    } else {
        console.log("sorry " + movie.title +" is sold out")
    }
};//we ll list of spectacles based on their status



console.log("_________________ Math methods      ________________ ");

const mathFunc = (givenArea)=>{
    console.log(Math.round(givenArea))//we ll get 8
    console.log(Math.floor(givenArea))//we ll get 7
    console.log(Math.ceil(givenArea))//we ll get 8
    console.log(Math.trunc(givenArea))//it ll chop the decimal off & we ll get 7
}
mathFunc(7.7);

const myRandom = Math.random()*100;//*3, *10, * 15 etc ...
const withOutDecimal = Math.trunc(myRandom);
console.log(withOutDecimal);//random Nos from 1-100 without decimals

                            /* random name selector */

const randomName = (myNames)=>{
    let chooseName = myNames[Math.floor(Math.random()*myNames.length)];
    console.log(chooseName); 
}
randomName(["Ashu", "Melkam", "Me", "She", "They"]);


console.log("_________________ the DOM, avoid node    ________________ ");

const para1 = document.querySelector("p");//select the 1st p
const paraClass = document.querySelector('.main');//select all p's
const paraTag = document.querySelector('a');//select the link


para1.innerText += " this is the modified one from the text editor";
paraClass.innerText += " this is added on from the text editor";
paraTag.innerText= "Link from the text-editor";//change the link

//paraTag.innerText += " added from the text editor"; 
/* para1.forEach(para=>{
    console.log(para)
});
console.log(para[1]); */

const link = document.querySelector("a");
console.log(link.getAttribute("href"));//I ll see google.com
link.setAttribute("class", "color: orange;" );

                            /*the to do list */

/* const button = document.querySelector("button");
button.addEventListener("click",()=>{
    console.log("I am clicked");
});//on console.log we ll see the message when we click on the button
 */
const items = document.querySelectorAll("li");
items.forEach(item=>{
    item.addEventListener("click", ()=>{
        console.log("item clicked");
    })
});//each item/li/ clicked we ll see the message on the console

items.forEach(item=>{
    item.addEventListener("click", e=>{
        e.target.style.textDecoration="line-through";
        console.log(e.target);
    })
});//each click on item and it ll cross it over


/* items.forEach(item=>{
    item.addEventListener("click", e=>{
        e.target.remove();
    })
});//it ll remove each item one by one on click
 */
/* GamepadButton.addEventListener("click", ()=>{
    const li=doc.createElement("li");
    li.textContent="sth new to do";
    ul.prepend(li);
});
ul.addEventListener("click", e=>{
    console.log(e.target);
}) */

                             





