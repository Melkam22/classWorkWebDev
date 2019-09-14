import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';


class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="cont">
                <Jumbotron fluid className="">
                    <Container fluid>
                        <h1 className="display-3">Home Page</h1>
                        <p className="lead">Welcome & thank you for taking part
                         in our petition. Good Luck!</p>
                    </Container>
                </Jumbotron>
                <Button color="primary" size="sm"> Continue</Button>
            </div>
        )
    }
}

export default Home;