import React, { Component } from 'react';
import PropsStateChild from './PropsStateChild'

class PropsState extends Component {

    state = {
        childName: "Melkam",
        childAge: ''
    }
    changeAge = (newState) => {
        this.setState({
            childAge: newState
        })
    }
    componentDidMount = () => {
        this.setState({
            childName: "Ashenafi"//update the previous name with this one
        })
        //console.log("Ashu");
    }

    render() {
        return (
            <div className="headingBorder2">They have a child named :
                {this.state.childName} {this.state.childAge} <br />

                <PropsStateChild
                    exportName={this.state.childName}
                    childAge={this.state.childAge}
                    changeAge={this.changeAge}
                />
            </div>
        )
    }
}
export default PropsState;