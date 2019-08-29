import React, { Component } from 'react';


class Home extends Component {
    state = {
        myDate: new Date()
    }

    componentDidMount() {//to disable the click effect & make it automatic
        this.reload = setInterval(() => this.myCalc(), 1000)
    }
    myCalc = () => {
        this.setState({
            myDate: new Date()
        })
    }
    componentWillUnmount() {//to make passage to other pages smooth
        clearInterval(this.reload);
    }

    render() {
        return (
            <div>

                <h1 className="home">Welcome to my Home page!
                    <h2>Today is :
                        <div className="homePage" onClick={this.myCalc}>
                            {this.state.myDate.toString().slice(0, 24)}
                        </div>
                    </h2>
                </h1>

            </div>
        )
    }
}

export default Home;
