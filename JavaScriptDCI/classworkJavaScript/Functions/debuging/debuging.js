
/* many type of errors; syntax errors, run-time error/infinite loops/,semantic error;
naming of variables, reference error; no value is given to the variable,
type error; ex, using a boolean to loop through it,  */

//we use them when we receive codes from other programers 

//type error
let fruits = true;
for(let i=0; i<fruits.length; i++){
    //const item = fruits[i];
    console.log([i]);
};//type error, can not loop through a boolean


//try & catch method of debugging
try {
    console.log(`this is ${myFile}`);
    console.log("world");
} catch(error){
    console.log("caught the error");
}
console.log("continue with the script");//execute only the correct code

//synchronize
/* try {
    setTimeout(function(){
        noSuchVariable;
    }, 1000);
} catch (error){
    console.log("won't work");
};//try & catch ll be executed @ the same time, synchronize, that's a problem */

//assynchronize
setTimeout(function(){
    try{
        noSuchVariable;
    } catch (error) {
        console.log("the previous one won't work!, this is with timer");
    }
}, 1000);//if 1 thing has a problem the other one ll /non-problematic/ll be executed 
//this code ll be executed @ the end since it has 1s time gap

/* try {
    lalaaa//this is undefined,but I ll get the message that I want & understand
} catch (error) {
    console.log(`Error has occured`);
    console.log(`Error name: ${error.name}`);
    console.log(`Error message: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
    console.log(error);
};//shows error happened but other codes could be executed

console.log("Execute the rest of the code ");

let jesonString = '{"age": 30}';
try{
    let user = JSON.parse(jesonString);
    if(!user.name) {
        throw new Error("Incomplete data: no name" + jesonString);
    }
    console.log(user.name);
} catch(e){
    console.log("JSON Error:" + e.message);
};//we ll get, JSON Error:Incomplete data: no name{"age": 30}
 */

//error floating
function a(){
    throw new Error("Error from a!")
}
function b(){
    try{
        a();
    }catch(error){
        throw(error)
    }
}
function c(){
    try{
        b();
    } catch(error) {
        console.log(`Error message: ${error.message}`);//error.name etc.
    }
};
