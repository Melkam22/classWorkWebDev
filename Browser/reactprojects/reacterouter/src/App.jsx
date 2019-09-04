import React from 'react';
import './App.css';
import Home from './components/Home';
import Lifecycle from './components/Lifecycle';
import Services from './components/Services';
import Askedquestions from './components/Askedquestions';
import PropsState from './components/PropsState';
import PageNotFound from './components/PageNotFound';
import ReduxParent from './components/ReduxParent';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <main>
        <nav>
          <li> <Link to="/" className="decoration">Home</Link></li>
          <li> <Link to="/lifecycle" className="decoration">Lifecycle</Link></li>
          <li><Link to="/services" className="decoration">Services</Link></li>
          <li><Link to="/askedquestions" className="decoration">Askedquestions</Link></li>
          <li><Link to="/propsstate" className="decoration">PropsState</Link> </li>
          <li><Link to="/Redux" className="decoration">Redux</Link> </li>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lifecycle" component={Lifecycle} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/askedquestions" component={Askedquestions} />
          <Route exact path="/propsstate" component={PropsState} />
          <Route path="/Redux" component={ReduxParent} />

          <Route path="" component={PageNotFound} />{/* error occurs, this fires */}

        </Switch>
      </main>
    </Router>
  );
}
export default App;

