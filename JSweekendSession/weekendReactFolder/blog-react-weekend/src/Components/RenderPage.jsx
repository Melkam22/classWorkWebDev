import React, { Component } from 'react';

class RenderPage extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="renderPage">
                <h1>from RenderPage</h1>

                {this.props.secondOp ? (<div>

                    {this.props.secondOp.map((item, i) => {
                        return (
                            <div className="myKey" key={i}>
                                <p>{item.name}</p>
                                <p>{item.lastName}</p>
                                <p>{item.email}</p>
                                <p>{item.address}</p>
                                <p>{item.comment}</p>
                            </div>
                        )
                    })}
                </div>) : ""}
            </div>
        )
    }
}

export default RenderPage;