import React from 'react';
import './Styles/Header.css'

const Header = props => {
        return (
            <div className="header">
                <h1>What to do?</h1>
                <p>This could be your bucket list</p>
                <span className="tagline">This is tagline</span>
                <div>{props.tagline}</div>
            </div> 
        );
    }

export default Header;

/* <React.Fragment>
        <h1>What to do?</h1> 
        <span>This could be your bucket list</span>
            </React.Fragment> */