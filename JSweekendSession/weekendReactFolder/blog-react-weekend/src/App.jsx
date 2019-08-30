import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import InsertInfo from './Components/InsertInfo';
import RenderPage from './Components/RenderPage';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {
    container: []
  }

  firstOp = (a, b, c, d, e) => {
    let myContents = { name: a, lastName: b, email: c, address: d, comment: e };
    let myContainer = this.state.container;
    myContainer.push(myContents);
    this.setState({
      container: myContainer
    })
  }

  render() {
    return (
      <Router>
        <main>
          <nav>
            <li><Link to="/" className="li">Home</Link> </li>
            <li><Link to="/insert-info" className="li">Insert-Info.</Link> </li>
            <li><Link to="/render-page" className="li">Render-Page</Link> </li>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/insert-info"
              render={() => <InsertInfo firstOp={this.firstOp} />} />

            <Route exact path="/render-page"
              render={() => <RenderPage secondOp={this.state.container} />} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
