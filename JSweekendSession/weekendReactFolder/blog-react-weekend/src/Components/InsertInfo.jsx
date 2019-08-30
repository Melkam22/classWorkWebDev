import React, { Component } from 'react';
import RenderPage from './RenderPage';

class InsertInfo extends Component {
    state = {
        name: null,
        lastName: null,
        email: null,
        address: null,
        comment: null
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    handleComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    render() {

        return (
            <div>
                <h1>from InsertInfo</h1>

                <main className="main">
                    <label>First Name: <input type="text"
                        value={this.state.name}
                        onChange={this.handleName} />
                    </label>
                    <label>Last Name: <input type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastName} />
                    </label>
                    <label>Email: <input type="text"
                        value={this.state.email}
                        onChange={this.handleEmail} />
                    </label>
                    <label>Physical Address: <input type="text"
                        value={this.state.address}
                        onChange={this.handleAddress} />
                    </label>
                    <label>Comment:
                        <textarea
                            value={this.state.comment}
                            onChange={this.handleComment}>
                        </textarea></label>

                    <button onClick={() => this.props.firstOp(
                        this.state.name,
                        this.state.lastName,
                        this.state.email,
                        this.state.address,
                        this.state.comment,
                        this.setState({
                            name: '', lastName: '', email: '', address: '', comment: ''
                        }),
                        < RenderPage />
                    )}>Submit</button>
                </main>
            </div>

        )
    }
}

export default InsertInfo;