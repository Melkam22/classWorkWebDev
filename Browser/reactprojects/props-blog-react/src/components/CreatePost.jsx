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
                    <label>First Name <input type="text"
                        onChange={this.handleName} value={this.state.firstName} />
                    </label>
                    <label>Last Name <input type="text"
                        onChange={this.handleLastName} value={this.state.lastName} />
                    </label>
                    <label>Content <textarea
                        onChange={this.handleContent} value={this.state.content}>
                    </textarea></label>
                    <button className="submit"
                        onClick={() => this.props.onLog(this.state.firstName,
                            this.state.lastName, this.state.content,

                            <User />
                        )}>Submit</button>
                </div>

            </div>
        )
    }
}

export default CreatePost;