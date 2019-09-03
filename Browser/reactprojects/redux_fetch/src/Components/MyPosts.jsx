import React, { Component } from 'react';
import axios from 'axios';
import { isTemplateElement } from '@babel/types';

class MyPosts extends Component {
    state = {
        post: []
    }

    componentDidMount() {//to get what we put after our home address
        let myId = this.props.match.params.mypost_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + myId)
            .then(response => {
                this.setState({//route parameter
                    post: response.data
                })
            })
    }

    render() {
        const post = this.state.post ? (
            <div className="post orange-text">
                <h3 className="center">{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
                <div className="center">There is none!</div>
            );

        return (
            <div className="container home">
                {post}
            </div>
        )
    }
}

export default MyPosts;  