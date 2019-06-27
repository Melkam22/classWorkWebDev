
console.log("______________________ Object Literals _____________________________");


let tasks = [

"clean the Floor.",
"clean the window.",
"clean the table.",
"clean the kitchen.",
    [
        "prepare breakfast",
        "prepare lunch",
        "prepare dinner",
    ],
"clean the dishes.",
"clean the dinning table.",
];

for(let a=0; a<=tasks.length; a++) {
    console.log(`days: ${a}`)
if(tasks /* === 4 */==Array.isArray) {
    for(let b=0; b<tasks[Array.isArray].length; b++) {
        console.log(`sub-task : ${tasks[Array.isArray][b]}`);
    }
} else {
    console.log(`Daily-task: ${tasks[a]}`);
}
};
console.log("see you tomorrow!");//everydays activity including day 4 sub-task
