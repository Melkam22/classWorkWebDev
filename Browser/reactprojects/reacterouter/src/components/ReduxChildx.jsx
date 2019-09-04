import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReduxChildx extends Component {
    render() {
        return (
            <div>
                <h1>Redux Child, x={this.props.x} </h1>
                <h1><button onClick={this.props.incrementY}>
                    Increment-Y</button> </h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    x: state.x
})

const mapDispatchToProps = (dispatch) => ({
    incrementY: () => dispatch({ type: "Increment_Y" })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxChildx);

