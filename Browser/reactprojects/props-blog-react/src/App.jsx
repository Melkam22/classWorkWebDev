import React, { Component } from 'react';
import './App.css';
import RouterNav from './components/Router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Creating Blog using props.</h1>

        <RouterNav />
      </div>
    );
  }
}

export default App;
