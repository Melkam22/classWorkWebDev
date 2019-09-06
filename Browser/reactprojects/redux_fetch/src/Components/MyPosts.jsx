import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyPosts extends Component {

    render() {
        console.log(this.props);//matching element from our obj. & given on console
        const post = this.props.post.find(({ Id }) => {
            return this.props.match.params.mypost_id == Id//'cos the input is No.
        })

        return (
            <div className="container">  {post ?

                (<div className="post card orange-text">
                    <h3 className="center">{post.Title}</h3>
                    <h3 className="center">{post.Image}</h3>
                    <p>{post.Body}</p>
                </div>)//else
                : (<div className="center">There is none!</div>)
            }

            </div>
        )
    }

}


let myStateToProps = (state, /* ownProps */) => {
    return {
        post: state.myData
    }
}

export default connect(myStateToProps)(MyPosts);  