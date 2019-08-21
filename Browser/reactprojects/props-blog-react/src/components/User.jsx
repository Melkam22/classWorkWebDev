import React, { Component } from 'react';

/* const currentDate = () => {
    const myDate = new Date();
    console.log(myDate.toString());
} */

class User extends Component {
    state = {
    }

    render() {
        //console.log(this.props.array);
        return (
            <div className="styleUser">
                {this.props.array ? (<div>
                    {this.props.array.map((item) => {
                        return (
                            <h2 className="userStyle">
                                {item.firstName}<br></br>
                                {item.lastName}<br></br>
                                {item.content}
                            </h2>
                        )
                    })}
                </div>) : ""}
            </div>
        )
    }
}

export default User;