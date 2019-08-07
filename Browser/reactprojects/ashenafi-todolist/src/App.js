import React from 'react';
import './App.css';
import Header from './Components/Header';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="App">
    <Header tagline="This could be your bucket list as well"/>

  <TodoForm />
    </div>
  );
}

export default App;
