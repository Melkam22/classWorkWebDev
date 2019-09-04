import React, { Component } from 'react';

class PropsStateGrandChild extends Component {
    render() {
        return (
            <div className="headingBorder1">
                <h2>Hello this is the grand child!</h2>
                The name of my father is : {this.props.childName} <br />
                His age is :  {this.props.grandChildAge}
            </div>
        )
    }
}
export default PropsStateGrandChild;