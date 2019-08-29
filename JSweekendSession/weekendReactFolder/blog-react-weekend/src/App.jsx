import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import InsertInfo from './Components/InsertInfo';
import RenderPage from './Components/RenderPage';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {
    emptyArray: []
  }

  myFunc = (a, b, c, d, e) => {
    let allElements = { firstName: a, lastName: b, email: c, passWord: d, content: e }
    let myEmptyArray = this.state.emptyArray;
    myEmptyArray.push(allElements);
    this.setState({
      emptyArray: myEmptyArray
    })
    //console.log('array', myEmptyArray);
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
              render={() => <InsertInfo secondFunction={this.myFunc} />} />
            <Route exact path="/render-page"
              render={() => <RenderPage
                exportContent={this.state.emptyArray} />} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
