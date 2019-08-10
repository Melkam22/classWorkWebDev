
 
//import './App.css';
import React from 'react';
import { directive } from '@babel/types';

function one (){
    let theFirst = document.querySelector("#one");
    theFirst.addEventListener("click", function(){
    theFirst.style.backgroundColor ="green";
            let playerOne = 0;
            let playerTwo = 0;
    
            if (playerOne === 1){
               document.querySelector(".one").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 0){
                document.querySelector(".one").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}

function two (){    
    let theSecond = document.querySelector("#two");
    theSecond.addEventListener("click", function(){
    theSecond.style.backgroundColor ="green";
    
            let playerOne = 1;
            let playerTwo = 1;
    
            if (playerOne === 1){
               document.querySelector(".two").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 1){
                document.querySelector(".two").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}

function three(){
    let theThird = document.querySelector("#three");
    theThird.addEventListener("click", function(){
    theThird.style.backgroundColor ="green";
    
            let playerOne = 0;
            let playerTwo = 0;
    
            if (playerOne === 1){
               document.querySelector(".three").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 0){
                document.querySelector(".three").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}
    
    function four(){
    let theFourth = document.querySelector("#four");
    theFourth.addEventListener("click", function(){
    theFourth.style.backgroundColor ="green";
            let playerOne = 1;
            let playerTwo = 1;
    
            if (playerOne === 1){
               document.querySelector(".four").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 1){
                document.querySelector(".four").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}
    
    function five(){
    let theFifth = document.querySelector("#five");
    theFifth.addEventListener("click", function(){
    theFifth.style.backgroundColor ="green";
            let playerOne = 0;
            let playerTwo = 0;
    
            if (playerOne === 1){
               document.querySelector(".five").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 0){
                document.querySelector(".five").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}
    
    function six(){
    let theSixth = document.querySelector("#six");
    theSixth.addEventListener("click", function(){
    theSixth.style.backgroundColor ="green";
    
            let playerOne = 1;
            let playerTwo = 1;
    
            if (playerOne === 1){
               document.querySelector(".six").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 1){
                document.querySelector(".six").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}
    
    
    function seven(){
    let theSeventh = document.querySelector("#seven");
    theSeventh.addEventListener("click", function(){
    theSeventh.style.backgroundColor ="green"; 
    
            let playerOne = 0;
            let playerTwo = 0;
    
            if (playerOne === 1){
               document.querySelector(".seven").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 0){
                document.querySelector(".seven").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}
    
    function eight(){
    let theEighth = document.querySelector("#eight");
    theEighth.addEventListener("click", function(){
    theEighth.style.backgroundColor ="green"; 
    
            let playerOne = 1;
            let playerTwo = 1;
    
            if (playerOne === 1){
               document.querySelector(".eight").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 1){
                document.querySelector(".eight").innerHTML = "O";   
                //playerTwo = 1;
            } 
    })
}
    
    function nine(){
    let theNinth = document.querySelector("#nine");
    theNinth.addEventListener("click", function(){
    theNinth.style.backgroundColor ="green";
            let playerOne = 0;
            let playerTwo = 0;
    
            if (playerOne === 1){
               document.querySelector(".nine").innerHTML = "X";
                //playerOne = 0;
            
            } else if(playerTwo === 0){
                document.querySelector(".nine").innerHTML = "O";   
                //playerTwo = 1;
            } 
    
    })
}

    

const Function =()=>{
    return(
        <div>
            {one()}, {two()}, {three()}, {four()},{five()},{six()},
            {seven()},{eight()},{nine()},
        </div>
    )
}/* all individual functions entered to one function & exported */
        
    export default Function;
    







 