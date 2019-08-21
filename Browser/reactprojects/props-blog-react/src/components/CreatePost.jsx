import React, { Component } from 'react';
import User from './User';


class CreatePost extends Component {
    state = {
        firstName: '',
        lastName: '',
        content: ''
    }
    handleName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    /* updated variables */
    /* onLog = (e) => {
        e.preventDefault();
        console.log('all', this.state);//we ll on cons. get inserted values from all 
        let myJacket = this.state.jacket;
        myJacket.push(this.state.firstName)
        myJacket.push(this.state.lastName)
        myJacket.push(this.state.content)
        this.setState({
            jacket: myJacket,
            firstName: "",
            lastName: "",
            content: ""
        })
        //console.log('myName', myJacket)//we ll get myName & the inserted input
    } */
    render() {
        let style = {
            color: ""
        }
        if (this.state.firstName !== "" || this.state.lastName !== "" ||
            this.state.content !== '') {
            style.backgroundColor = "rgba(124,27,98,.5)";
        }
        return (
            <div>
                <div className="form" style={style}>
                    <label>First Name <input type="text" onChange={this.handleName} value={this.state.firstName} /></label>
                    <label>Last Name <input type="text" onChange={this.handleLastName} value={this.state.lastName} /></label>
                    <label>Content <textarea onChange={this.handleContent} value={this.state.content}></textarea></label>
                    <button className="submit" onClick={() => this.props.onLog(this.state.firstName, this.state.lastName, this.state.content)}>Submit</button>
                </div>
                <User
                /* firstName={this.state.firstName}//to export content to User.jsx
                lastName={this.state.lastName}
                content={this.state.content} */
                />
            </div>
        )
    }
}

export default CreatePost;