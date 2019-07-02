
//values dropped at once

/* let myButton = document.querySelector("#submit");

myButton.addEventListener('click', function(){

    myLi = document.createElement("li");
    myLi1 = document.createElement("li");
    myLi2 = document.createElement("li");
    myLi3 = document.createElement("li");
    myLi4 = document.createElement("li");

    myLi.textContent = "milk";//"myInput".value ;
    myLi1.textContent = "coffee";
    myLi2.textContent = "bread";
    myLi3.textContent = "rice";
    myLi4.textContent = "book";
   let container = document.querySelector(".container");
    container.appendChild(myLi);
    container.appendChild(myLi1);
    container.appendChild(myLi2);
    container.appendChild(myLi3);
    container.appendChild(myLi4);

    document.body.appendChild(container);
});
  */

  //insert values & have them in a list

  myButton1 = document.querySelector("#submit");
  myButton1.addEventListener("click", function(){
      myUl = document.createElement("ul");
      myList = document.createElement("li");       

      myList.textContent = document.getElementById("myInput").value;
      myUl.appendChild(myList);
      document.body.appendChild(myList);
  
  });
 