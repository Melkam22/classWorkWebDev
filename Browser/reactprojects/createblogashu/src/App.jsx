import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import CurrentPosts from './components/CurrentPosts';

function App() {
  return (
    <Router>
      <main>
        <nav className="nav-heading">
          <li><Link to="/" className="decor">Home</Link> </li>
          <li><Link to="/CreatePost" className="decor">CreatePost</Link> </li>
          <li><Link to="/CurrentPosts" className="decor">CurrentPosts</Link></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/currentposts" component={CurrentPosts} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
