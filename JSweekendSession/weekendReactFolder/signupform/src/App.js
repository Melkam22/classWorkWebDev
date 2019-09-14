import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Components/Home';
import Popup from './Components/Popup';
import Render from './Components/Render';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jacket: []
    }
  }
  action = (one, two, three) => {
    let myJacket = this.state.jacket;
    let content = { name: one, lastname: two, email: three }
    myJacket.push(content);
    this.setState({
      jacket: myJacket
    })
  }

  render() {
    return (
      <Router>
        <main className="nav">
          <div className="navbar-fixed">
            <nav>
              <a href="#" className="right">ICON</a>
              <ul className="left">
                <li><Link to="/" className="li">Home</Link> </li>
                <li><Link to="/popup" className="li">Popup</Link> </li>
                <li><Link to="/render" className="li">Render</Link> </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popup" component={() => <Popup action={this.action} />} />
            <Route path="/render" component={() => <Render actionRender={this.state.jacket} />} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;

