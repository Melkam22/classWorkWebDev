import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Register from './Components/Register';
import Render from './Components/Render';

class App extends Component {
  state = {
    container: []
  }

  firstOperation = (a, b, c, d) => {
    let myElements = { firstName: a, lastName: b, email: c, city: d };
    let myContainer = this.state.container;
    myContainer.push(myElements);
    this.setState({
      container: myContainer
    })
  }
  render() {
    return (
      <Router>
        <main>
          <nav>
            <a href="#" className="right">Logo</a>
            <ul>
              <li><Link to="/"> Home</Link></li>
              <li><Link to="/aboutus">AboutUs</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/render">Render</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/register"
              render={() => <Register firstOperation={this.firstOperation} />} />
            <Route exact path="/render"
              render={() => <Render secondOperation={this.state.container} />} />
          </Switch>
        </main>
      </Router>

    );
  }
}

export default App;
