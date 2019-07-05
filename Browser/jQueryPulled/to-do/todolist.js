
myToDo = document.querySelector("#btn");
myToDo.addEventListener("click", function(){

    myUl = document.createElement("UL");
    myLi = document.createElement("LI");
    myLi.textContent = document.querySelector("#input").value;
    myUl.appendChild(myLi);
    let final = document.body.appendChild(myLi);
    //let myList = document.querySelector(".result")
     //console.log(final);
})

 