import React from 'react';


let day =()=>{
    let dt = new Date();
    return dt.getDate();
}
const myMonth = () => {
    let mont = new Date();
    return mont.getMonth()+1;
}
const myYear = () => {
    let year = new Date();
    return year.getFullYear();
}

//to be included inside MyFunctions func & to be exported to App.js
const MyFunctions = () =>{
    return(
    <div>This are my functions from Footer.js to be exported to App.js,
        the day today is :  
        {day()}/{myMonth()}/{myYear()}</div>
    ); 
}

export default MyFunctions;