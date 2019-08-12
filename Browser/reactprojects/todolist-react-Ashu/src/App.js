import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Photo from './photo.jpg';
//import { directive } from '@babel/types';

function App() {
  return (
     <div>
       <h1>This is a todo-list using React.</h1>
       <p>This is the text inside App.js to be exported to index.js</p>

       <img src={Photo} alt="photo" />
       <Header />

     </div>
  );
}

export default App;
