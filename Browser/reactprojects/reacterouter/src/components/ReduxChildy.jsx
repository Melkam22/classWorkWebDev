import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxChildy extends Component {
    render() {
        return (
            <div>
                <h1>Redux Childy, Y = {this.props.y}</h1>
                <h1><button onClick={this.props.incrementX}>{/* line 9 & 24 has to be */}
                    Increment-X</button> </h1> {/* the same */}

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    y: state.y
})

//export default ReduxChildy;

const mapDispatchToProps = (dispatch) => ({
    incrementX: () => dispatch({ type: "Increment_X" }) /* increment small & cpit */
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxChildy);