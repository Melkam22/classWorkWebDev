
let myScore1 =0;
let myScore2 =0;
let myScore3 =0;
class Game {
    constructor(player1, player2, player3){
        this.player1=player1;
        this.player2=player2;
        this.player3=player3;
    }
    //first thrower 
rollingDice1(){
   let result1 = Math.floor(Math.random()*7);
     if(result1 ==1){
         console.log(`Ashu, your result is${myScore1+=1000}`);
         if(myScore1 === 10000){
           console.log("bravo Ashu! you win the game!");
        }
     }
    else if(result1 ==2){
        console.log(`Ashu, your result is${myScore1+=2500}`);
        if(myScore1 === 10000){
          console.log("bravo Ashu! you win the game!");
       }
    }
    else if(result1 ==3){
        console.log(`Ashu, your result is${myScore1+=2000}`);
        if(myScore1 === 10000){
          console.log("bravo Ashu! you win the game!");
       }
    }
    if(result1 ==4){
        console.log(`Ashu, your result is ${myScore1+=2000}`);
        if(myScore1 === 10000){
            console.log("bravo Ashu! you win the game!");
        }
    } 
    if(result1 ==5){
        console.log(`Ashu, your result is ${myScore1+=1500}`);
        if(myScore1 === 10000){
            console.log("bravo Ashu! you win the game!");
        }
    }   
    if(result1 ==6){
        console.log(`Ashu, your result is ${myScore1+=1000}`);
        if(myScore1 === 10000){
            console.log("bravo Ashu! you win the game!");
        }
    }     
}
//second thrower
rollingDice2(){
    let result2 = Math.floor(Math.random()*7);
    if(result2 ==1){
        console.log(`Melkam, your result is${myScore2+=2500}`);
        if(myScore2 === 10000){
            console.log("bravo Melkam! you win the game!");
        }
    } 
    if(result2 ==2){
        console.log(`Melkam, your result is${myScore2+=1000}`);
        if(myScore2 === 10000){
            console.log("bravo Melkam! you win the game!");
        }
    } 
    if(result2 ==3){
        console.log(`Melkam, your result is${myScore2+=1500}`);
        if(myScore2 === 10000){
            console.log("bravo Melkam! you win the game!");
        }
    } 
    if(result2 ==4){
        console.log(`Melkam, your result is${myScore2+=2500}`);
        if(myScore2 === 10000){
            console.log("bravo Melkam! you win the game!");
        }
    } 
    if(result2 ==5){
        console.log(`Melkam, your result is${myScore2+=1000}`);
        if(myScore2 === 10000){
            console.log("bravo Melkam! you win the game!");
        }
    } 
    if(result2 ==6){
        console.log(`Melkam, your result is${myScore2+=1500}`);
        if(myScore2 === 10000){
            console.log("bravo Melkam! you win the game!");
        }
    } 
}
//third thrower
rollingDice3(){
    let result3 = Math.floor(Math.random()*7);
    if(result3 ==1){
        console.log(`Mark, your result is ${myScore3+=1000}`);
        if(myScore3 === 10000){
            console.log("bravo Mark! you win the game!");
        }
    } 
    if(result3 ==2){
        console.log(`Mark, your result is ${myScore3+=2000}`);
        if(myScore3 === 10000){
            console.log("bravo Mark! you win the game!");
        }
    }
    if(result3 ==3){
        console.log(`Mark, your result is ${myScore3+=2500}`);
        if(myScore3 === 10000){
            console.log("bravo Mark! you win the game!");
        }
    } 
    if(result3 ==4){
        console.log(`Mark, your result is ${myScore3+=1000}`);
        if(myScore3 === 10000){
            console.log("bravo Mark! you win the game!");
        }
    }   
    if(result3 ==5){
        console.log(`Mark, your result is ${myScore3+=2500}`);
        if(myScore3 === 10000){
            console.log("bravo Mark! you win the game!");
        }
    }  
    if(result3 ==6){
        console.log(`Mark, your result is ${myScore3+=1000}`);
        if(myScore3 === 10000){
            console.log("bravo Mark! you win the game!");
        }
    }    
}
}
let resultCheck = new Game("Ashu", "Melkam", "Mark");

resultCheck.rollingDice1();
resultCheck.rollingDice2();
resultCheck.rollingDice3();