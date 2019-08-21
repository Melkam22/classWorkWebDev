
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Welcomepage from './WelcomePage';
import CreatePost from './CreatePost';
import User from './User';


class RouterNav extends Component {
    state = {
        jacket: []
    }

    /* updated variables */
    onLog = (a, b, c) => {
        //e.preventDefault();
        //console.log('all', this.state);//we ll on cons. get inserted values from all 
        let post = { firstName: a, lastName: b, content: c }
        let myJacket = this.state.jacket;
        myJacket.push(post)
        this.setState({
            jacket: myJacket,
        })
    }

    render() {
        return (

            <Router>
                <main>
                    <nav>
                        <li> <Link to="/" className="decor">Welcome-Page</Link></li>
                        <li><Link to="/createpost" className="decor">CreatePost</Link></li>
                        <li><Link to="/user" className="decor">User</Link> </li>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Welcomepage} />
                        <Route exact path="/createpost" render={() => <CreatePost onLog={this.onLog} />} />
                        <Route exact path="/user" render={() => <User array={this.state.jacket} />} />{/* to props it on User.jsx */}
                    </Switch>
                </main>
            </Router>

        )
    }
}
export default RouterNav;