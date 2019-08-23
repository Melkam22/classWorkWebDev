import React, { Component } from 'react';


class User extends Component {
    state = {
    }

    render() {
        console.log(this.props);
        return (
            <div className="styleUser">
                {this.props.array ? (<div>
                    {this.props.array.map((item, i) => {
                        return (
                            <h2 className="userStyle" key={i}>
                                <p className="time1">{item.firstName}</p>
                                <p className="time2">{item.lastName}</p>
                                <p className="time3">{item.content} {this.props.time}</p>
                            </h2>

                        )
                    })}
                </div>) : ""}
            </div>
        )
    }
}

export default User;