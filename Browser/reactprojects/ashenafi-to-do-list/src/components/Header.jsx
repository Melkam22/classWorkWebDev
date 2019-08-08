import React  from 'react';
import './Header.css';
import logo from '../logo.svg';
const Header = props=> {
        return (
            <div className='header'>
                <h1>What to do?</h1>
               <div>{props.tagline}</div>
               <img src={logo} alt="logo" height="120"/>
            </div>
        )
    }
export default Header;