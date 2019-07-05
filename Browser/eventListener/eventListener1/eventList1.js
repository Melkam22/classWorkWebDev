
let language = document.querySelector("#btn");
 
language.addEventListener("click", function(){
     
        let elem = document.createElement("ul");
        let li = document.createElement("li");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        li.innerText= "English";
        li1.innerHTML="French";
        li2.innerHTML="Mandarin";
        li3.innerHTML="Russian";
    elem.appendChild(li);
    elem.appendChild(li1);
    elem.appendChild(li2);
    elem.appendChild(li3);
document.body.appendChild(elem);

})
