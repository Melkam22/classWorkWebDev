import React, { Component } from 'react'
import Forest from '../forest.jpg';

class Lifecycle extends Component {

    state = {
        date: new Date()
    }
    componentDidMount() {//ll be rendered after render
        this.reload = setInterval(() => this.tick(), 1000)
    }

    /*
    componentWillMount() {//unsafe & advised not to use
        console.log("willMount");
    }*/
    componentWillUnmount() {//timer func works only in this page, & going to
        console.log("willUnmount");//other pages we don't get error
        clearInterval(this.reload);
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        console.log("render");

        return (
            <div>
                <div className="date" onClick={this.tick}>
                    {this.state.date.toString().slice(0, 24)}: </div>

                <h3>Lifecycle Page</h3>

                <img src={Forest} alt="Forest" className="forest" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem? Dignissimos tempore quidem amet in
                    eveniet facere totam autem ea. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Aliquid perferendis
                    consequuntur beatae reiciendis culpa deleniti quae hic
                    est, alias voluptatem dignissimos fugit nihil in odit
                doloribus iste maiores! Obcaecati, quo!</p>


            </div>

        )
    }
}
export default Lifecycle;