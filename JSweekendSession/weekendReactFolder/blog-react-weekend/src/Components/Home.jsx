import React, { Component } from 'react';


class Home extends Component {
    state = {
        myDate: new Date()
    }

    /* componentDidMount() {
        this.reload = setInterval(() => this.currentDate(), 1000)
    } */
    /* currentDate = () => {
        this.setState({
            myDate: new Date()
        })
    } */


    render() {
        return (
            <div>

                <h1 className="home">Welcome to my Home page! </h1>
            </div>
        )
    }
}

export default Home;
