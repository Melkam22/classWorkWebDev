import React from 'react';

function CreatePost() {
    return (
        <div>
            <form className="form">
                <div className="first"> <button>Username</button><input className="input1" type="text" /></div>
                <div className="second"> <button>Title</button><input className="input2" type="text" /></div>
                <div className="third"><button>Content</button><input className="input3" type="text" /></div>

                <button className="btn">Create a post</button>
            </form>
        </div>
    );
}

export default CreatePost;