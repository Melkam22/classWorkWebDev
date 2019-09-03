import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import DataOne from './Components/DataOne';
import DataTwo from './Components/DataTwo';
import MyPosts from './Components/MyPosts';


class App extends Component {
  render() {
    return (
      <Router>
        <nav className="nav-wrapper">
          <div className="container">
            <ul className="right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dataone">Data-One</Link></li>
              <li><Link to="/datatwo">Data-Two</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dataone" component={DataOne} />
          <Route path="/datatwo" component={DataTwo} />
          <Route path="/:mypost_id" component={MyPosts} />
        </Switch>

      </Router>
    )
  }
}

export default App;
