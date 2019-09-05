import React, { Component } from 'react';


class Render extends Component {
    render() {
        //console.log(this.props);
        return (
            <div className=" container">
                {this.props.secondOperation ? (
                    <div>
                        {this.props.secondOperation.map((item, d) => {
                            return (<div key={d} className="post card">
                                <div className="blue-text">{item.firstName}</div>
                                <div className="blue-text">{item.lastName}</div>
                                <div className="blue-text">{item.email}</div>
                                <div className="blue-text">{item.city}</div>
                            </div>
                            )
                        })}
                    </div>) : ''}
            </div>
        )
    }
}

export default Render;