import React, {Component} from 'react';
//import './App.js';

class Main extends Component {  
state = {
    title: "Tic-Tac-Toe",
    gameStatus: new Array(9).fill(null),
    player: "X" ? "O" : "X",//if X the next-one is O
}

clickedSelection=(e, i)=>{
    e.stopPropagation()
    // 2. a) check if the item clicked is already clicked (check if null)
    //      - if it is clicked do nothing
    //      - if it is not clicked change it to whatever current player is (x or o)
    //      - update the game status in the state with the current array

    // pass tempArray inside the calculateWinner function (not the this.state.gameState)

//gameStatus & player updated 
    let currentGameStatus=this.state.gameStatus;
    if(this.state.gameStatus[i] === null){
    currentGameStatus[i]=this.state.player
    let currentPlayer = this.state.player === "X" ? "O" : "X";
    this.calculateWinner(currentGameStatus);//currentPlayer
    this.setState({
        gameStatus:currentGameStatus,
        player:currentPlayer   
       });
    }
}
 
calculateWinner(currentGameStatus) {
    let winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

for(let d=0; d < winningLines.length; d ++ ){
const [a, b, c] = winningLines[d];
if(currentGameStatus[a] && currentGameStatus[a] === currentGameStatus[b] && currentGameStatus[a] === currentGameStatus[c]){
   let score = document.querySelector(".result").innerHTML += "Bravo! you won.";
}
else if(currentGameStatus[a] && currentGameStatus[a] !== currentGameStatus[b] && currentGameStatus[a] !== currentGameStatus[c]){
    //let score = document.querySelector(".result").innerHTML += "draw, reset & play again.";
}
 } 
//return null;
}

//reset button
function () {
    let object = this.onResetClick();
    if (object) {
      //console.log(value);
      this.setState({object: null}); // <-- reset value
    }
  }


render(){
    console.log(this.props);
return(
    <>
    <h1>Tic-Tac-Toe</h1>
    <div className="result">Result:</div>
    <button className="reset" onClick={this.onResetClick}>Reset</button>

    <div id="container">
    {this.state.gameStatus.map((item, i)=>{
        return (<div onClick={(e)=>this.clickedSelection(e, i)} className="boxes" key={i}><span className="circles">{item}</span></div>)
    })}
    </div>
     </>
        );
    }
}

export default Main;