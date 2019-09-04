import React, { Component } from 'react';
import PropsStateGrandChild from './PropsStateGrandChild';

class PropsStateChild extends Component {


    render() {
        return (
            <div className="headingBorder">
                <h1> Hello World!</h1>
                His name is : {this.props.exportName} <br /> His age is :
                {this.props.childAge}
                <input type="text" /* hisAge="childAge" */
                    placeholder="pls insert your age!"
                    onChange={(e) => this.props.changeAge(e.target.value)}
                />

                <PropsStateGrandChild
                    grandName={this.props.exportName/* childName */}
                    grandChildAge={this.props.childAge}
                //??
                />{/* we use this'cos it is not a parent */}
            </div>
        )
    }
}

export default PropsStateChild;