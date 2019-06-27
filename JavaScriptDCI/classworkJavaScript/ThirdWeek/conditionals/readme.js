
                        /* if and else conditions */

let firstName = "Adel";
let age = 14;
if(age < 13) {
    console.log(`${firstName} is a boy.`);
} else if(age >= 13 && age < 20) {
    console.log(`${firstName} is teenager.`);
} else if (age == 20 && age < 30) {
    console.log(`${firstName} is young man.`);
} else {
    console.log(`${firstName} is a woman name.`);
}// quiz one


let surName = "Maria";
let job = "architect";

if(job === "programmer") {
    console.log(`${surName} is working is London.`);
} else if (job === "teacher") {
    console.log(`${surName} is working is Berlin.`);
} else if (job === "architect") {
    console.log(`${surName} is working in New-York.`)
} else/* (job != "programmer","teacher","architect"); */{
     console.log(`${surName} is working is Nirobi.`);
}//quiz two

let divisNumb = 15;
let sound = "Fizz";
let sound2 = "Buzz";

if (divisNumb % 3 === 0 && divisNumb % 5 === 0) {
    console.log(`${sound} ${sound2}`);
} else if (divisNumb % 5 === 0) {
    console.log(`${sound2}`);
} else if(divisNumb % 3 === 0) {
    console.log(`${sound}`);
}
else {
    console.log( divisNumb);
}   
//quiz three


let temp = 21;
let weather = "cloudy";
let feeling = "weather";

if((temp <= 5 && weather == "windy")) {
    console.log(`The ${feeling} is cold.`);
} else if ((temp <= 24 || temp >6) && (weather == "cloudy")){
    console.log(`The ${feeling} is warm.`);
} else if ((temp >=25 && weather == "cloudy")) {
    console.log(`The ${feeling} is humide.`);
} else {
    console.log(`The temprature is ${temp} and the weather is ${weather}`);
}//quiz five



let mark = 92;
let title = "grade";

if ((mark > 90 && mark <= 100)) {
    console.log(`The ${title} is A`);
} else if ((mark >= 75 && mark <= 90)) {
    console.log(`The ${title} is B`);
}
    else if ((mark >= 65 && mark <= 74)) {
        console.log(`The ${title} is C+`);
    } else if ((mark >= 45 && mark <= 64)) {
        console.log(`The ${title} is C`);
    } else if ((mark >= 35 && mark <= 44)) {
        console.log(`The ${title} is D`);
    } else {
        console.log(`The ${title} is F`);
    }//quiz 5