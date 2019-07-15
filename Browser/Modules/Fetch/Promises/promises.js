let promise = new Promise(function(resolve, reject){
    resolve(
        setTimeout(function(){
        alert("The job is done!")
        }, 1000)
        )
})

/* let promise2 = new Promise(function(resolve, reject){
    setTimeout(()=>reject(new Error("Woops!")), 2000)
}) */

let promise3 = new Promise(function(resolve, reject){
    resolve(console.log("Job Done!"));//Job done

    reject(new Error("Job not done!"));//Ignored
})

//the job is not done
/* let promise4 = new Promise(function(resolve, reject){
    setTimeout(()=>{
    reject("The job is not done correctly!")
    }, 4000)
})
promise4.then(
    result => alert(result),
    error => alert(error)
).catch(alert(error)); */ 

//......................................................//

//catch error
let promise4 = new Promise(function(resolve, reject){
    setTimeout(()=>{
    reject(new Error("The job is not done!"))
    }, 4000)
})
promise4.then(
    result => alert(result),
).catch(error=> alert(error));

//...........................................................//

//finally
new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("result"),2000)
})
.finally(()=>alert("promise ready"))
.then(result=> alert(result))//.then handles the result
.check(err => alert(error)); //handles the error object

//...................................................//

//async
async function myFunc(){
    let myVar = "Hello";

}
myFunc().then(alert("async promise"));

//await 
function resolveAfter25Seconds(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved');
        }, 2000);
    })
}

async function asyncCall(){
    console.log('calling');
    let result = await resolveAfter25Seconds();
    console.log(result);//expected output resolved
}
