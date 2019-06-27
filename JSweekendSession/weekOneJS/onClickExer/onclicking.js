
                            /* first container */
let one = document.getElementById("one1");
let ex=0;
function container(){
    if(ex==0) {
        one.innerHTML = "Wel come to this page!";
        one.style.backgroundColor = "silver";
        ex++;
    }
     
      else if (ex==1){
        one.style.backgroundColor = "blue";
        one.innerHTML = "The background color has changed.";
        ex++;
        
    }
    else if (ex==2){
        one.style.backgroundColor = "white";
        one.innerHTML = "This is the empty page.";
        ex=0;
}
}

                            /* second button */

 let btn = document.getElementById("clc");
let x=0;
function main() {
    if(x==0) {
            btn.innerHTML ="Ashu.";
            btn.style.backgroundColor = "blue";
            x++;
        }
        
    else if (x==1){ 
        
            btn.style.backgroundColor = "red";
            btn.innerHTML = "It has changed."
            x=0;
         
    } 
    else if (x!=1) {
            btn.innerHTML ="Click me to change";
            btn.style.backgroundColor = "blue";
            x=0;
    } 
 } 
     

   /*  btn.addEventListener("onclick", firstFunction); */
   /*  btn.addEventListener("onclick", secondFunction); */

