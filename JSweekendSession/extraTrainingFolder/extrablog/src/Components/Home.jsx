import React, { Component } from 'react';
import Countryside from '../countryside.jpg';

class Home extends Component {
    render() {
        return (
            <div class="card">
                <img src={Countryside} class="card-img-top" alt="c" />
                <div class="card-body">
                    <h5 class="card-title">Card title that wraps to a new line</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        )
    }
}

export default Home;