
import React from 'react';
import './App.css';
import logo from './logo.svg';
import MyFunctions from './components/Footer';
import Function from './components/Body';
//import myGame from './components/Body';
//import { directive } from '@babel/types';

function MyApp(){
  return(
    <div>
       
      <h1>This is my first trial of Tic-Tac-Toe</h1>
      <p>This is my first Text.</p>
      <img src={logo} alt="logo" height={100} className="img"/>{/*to add logo, from App.js */}
      <MyFunctions /> {/* to add text and function, from Footer.js */}
      {/* <myGame /> */}
      <Function />
    </div>
  );
}

export default MyApp;
