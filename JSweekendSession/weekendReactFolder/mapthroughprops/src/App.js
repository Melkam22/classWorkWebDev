import React, { Component } from 'react';
import './App.css';
import Container from './Components/Container';

class App extends Component {
  state = {
    myList: [
      { name: 'Petter', age: '30', profession: 'lawyer', id: 1 },
      { name: 'Marko', age: '32', profession: 'artist', id: 2 },
      { name: 'Leyla', age: '35', profession: 'teacher', id: 3 },
      { name: 'Alex', age: '22', profession: 'student', id: 4 },
      { name: 'Katarina', age: '31', profession: 'Advisor', id: 5 },
      { name: 'Ahmed', age: '34', profession: 'designer', id: 6 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>List of names, ages, professions & ids.</h1>

        <Container listExport={this.state.myList} />
      </div>
    );
  }
}

export default App;
