
document.getElementById("parent-list").addEventListener("click", function(event){
    if(event.target && event.target.nodeName == "LI"){
        console.log(`event.target: `, event.target);
        //console.log(`event.target.nodeName:`, event.target.nodeName );
        //.log(`event:`, event);
        //console.log(`List Item ${event.target.id.replace("post-", "")} was clicked.`);
        //console.log("event.target.id", event.target.id);
    }
})//it ll single out all the elements inside the parent element


document.getElementById("myDiv").addEventListener("click", function(event){
    if(event.target && event.target.matches("a.classA")){
        //console.log(event.target);//anchoring the target
        console.log("anchor element clicked!");
    }
    console.log("event", event);
});//to single out particular elements inside parent element