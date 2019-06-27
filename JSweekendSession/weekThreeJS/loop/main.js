      
      /* let boxclass=document.getElementsByClassName("box"); */

let btn=document.getElementById('btn');
let box1=document.getElementById('box');

btn.addEventListener('click',
function a(){
    let box=document.createElement('div');
    box1.appendChild(box); 
    box.innerHTML="hello";
    /* box.style.margin="0, auto"; */
    box.style.width="100vw";
    box.style.height="100vh";
    box.style.backgroundColor="silver";
} );

btn.addEventListener('mouseover',
function a(){
  /*   console.log(boxclass); */
   /* box1.innerHTML="double clicked"; */
   box1.innerHTML="double clicked ;ljljekj eljlkjelkje ljlkjljeljel  llkjlkjlkj";
   
 } );