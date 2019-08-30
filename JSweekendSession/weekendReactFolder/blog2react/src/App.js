import React, { Component } from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';



class App extends Component {
    render() {
        return (
            <div className="todo-title center">
                <h2 className="h2 center">Todos</h2>
                <FirstPage />
            </div>
        )
    }
}

export default App;