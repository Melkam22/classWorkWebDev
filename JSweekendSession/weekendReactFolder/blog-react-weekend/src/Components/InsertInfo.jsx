import React, { Component } from 'react';
import RenderPage from './RenderPage';


class InsertInfo extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        passWord: ''
        /* content: '' */
    }

    changeName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    changelastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    changeemail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    changepassWord = (e) => {
        this.setState({
            changepassWord: e.target.value
        })
    }
    /* changecontent = (e) => {
        this.setState({
            content: e.target.value
        })
    } */

    render() {
        return (
            <div>
                <h1>Insert-Info Page</h1>
                <main className="form">
                    <label>First Name <input type="text"
                        onChange={this.changeName} /></label>
                    <label>Last Name<input type="text"
                        onChange={this.changelastName} /> </label>
                    <label>Email Address <input type="text"
                        onChange={this.changeemail} /></label>
                    <label>Pass Word<input type="text"
                        onChange={this.changepassWord} /> </label>
                    {/*  <label>Conetent : <textarea>
                    onChange={this.changecontent}</textarea> </label> */}

                    <button className="btn" onClick={() => this.props.secondFunction(
                        this.state.firstName,
                        this.state.lastName,
                        this.state.email,
                        this.state.passWord,
                        /* this.state.content */
                    )}> Submit </button>
                </main>
                <RenderPage />
            </div>
        )
    }
}

export default InsertInfo

