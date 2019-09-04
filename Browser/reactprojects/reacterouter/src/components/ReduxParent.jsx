import React, { Component } from 'react';
import ReduxChildx from './ReduxChildx';
import ReduxChildy from './ReduxChildy';

class ReduxParent extends Component {
    render() {
        return (
            <div>
                <h1>Redux Parent</h1>

                <ReduxChildx />
                <ReduxChildy />
            </div>
        );
    }
}

export default ReduxParent;