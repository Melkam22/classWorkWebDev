import React from 'react';

const countDown = () => {
    let dt = new Date();
    return dt.getDate();
}
const myMonth = () => {
    let mont = new Date();
    return mont.getMonth()+1;
}
const getYear = () =>{
    const newDate = new Date();
    return newDate.getFullYear();
}
/* const add = () => {
    const val1 = 12;
    const val2 = 7;
    return val1 + val2;
} */

const Header = () => {
    //return <div>This is my Header</div>
    return <div>This is my Header & the date is: {countDown()}/{myMonth()}/{getYear()}  
    </div>
}

export default Header;