
/* $("document").ready(function(){
     $("#btn").click(function(){
         let myImput = $("#input").val();
         let myLi = `<li>${myImput}</li>`
         $("#ul").prepend(myLi);
         $("#input").val("");
     })
}) */

$("document").ready(function(){
    $("#btn").click(function(){
        let myInput = $("#input").val();
        if(myInput !== ""){
            let myLi = `<li style="width:200px">${myInput} <span>X</span> </li>`
            $("#ul").prepend(myLi);
            $("#input").val("");
        }
         
    })

$("#ul").click(function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
    }
})
})

/* myToDo = document.querySelector("#btn");
myContainer = document.querySelector(".container");
myToDo.addEventListener("click", function(){

    myUl = document.createElement("UL");
    myLi = document.createElement("LI");
    myLi.textContent = document.querySelector("#input").value;

    myContainer.appendChild(myLi);
    document.body.appendChild(myContainer); 
}) */

 