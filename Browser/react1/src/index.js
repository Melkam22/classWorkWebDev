import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
 
const Greeting = () =>{
    return(
        <div>
 <h1>Hello Class!</h1>
 <p>This is my text written on index.js and to be published on the browser.</p>

    <Header />
    </div>
    )
}

ReactDOM.render(<Greeting />, document.querySelector('#root'));

 