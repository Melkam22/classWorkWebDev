import React, {Component} from 'react';
//import './App.js';

class Main extends Component {
    
state = {
    title: "Tic-Tac-Toe",
    myVariable: new Array(9).fill(null),
    y: "O",
}
// change the function name to be more declarative
addItem=(e, i)=>{
    e.stopPropagation()
    // 1. Get current player. X? O?
    // 2. Go to the game status, update the status with the current click/selection
    // 2. a) check if the item clicked is already clicked (check if null)
    //      - if it is clicked do nothing
    //      - if it is not clicked change it to whatever current player is (x or o)
    //      - update the game status in the state with the current array

    // pass tempArray inside the calculateWinner function (not the this.state.gameState)



    // let tempArray = this.state.gameStatus
    // tempArray[i] = this.state.currentPlayer
    // null => "X" (if the current player is X)
    // this.setState({gameStatus: tempArray})


    let newVariable=this.state.myVariable;
    if(this.state.myVariable[i] === null){
    newVariable[i]=this.state.myPlayer
    let player = this.state.myPlayer === "X" ? "O" : "X";
    this.calculateWinner(player);
    this.setState({
        myVariable:newVariable,
        myPlayer:player   
       })
    }
}
 
calculateWinner(myPlayer) {

    // you want to read the gameStatus from the state
    // put the winningLines in the state?
    // set state something like : gameWinner : null
    // player X O draw

// for(let o=0; o < winningLines.length; o ++ ){
//     const [a, b, c] = winningLines[o];
// if(myPlayer[a] && myPlayer[a] === myPlayer[b] && myPlayer[a] === myPlayer[c]){
//     //return myPlayer[a];
//     alert("you are the winner!");
// }
// } 
//return null;
}


render(){

    console.log(this.props);
    

return(
    
    <>
    <h1>Tic-Tac-Toe</h1>
    <div className="result">Result:</div>
    <button className="reset">Reset</button>

    <div id="container">
    {this.state.myVariable.map((item, i)=>{
        return (<div onClick={(e)=>this.addItem(e, i)} className="boxes" key={i}><span className="circles">{item}</span></div>)
    })}
    </div>
     </>
        );
    }
}

export default Main;