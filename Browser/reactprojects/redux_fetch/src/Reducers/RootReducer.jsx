import React from 'react';
import Kirsche from '../kirsche.png';

const initState = {//state of this folder
    myData: [
        { Id: 1, Title: "The long walk", Image: <img src={Kirsche} alt="" />, Body: "The movie which won the Oscar, The post card element has integrated an image of icon as well. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit corrupti molestiae, repellendus aliquid optio at similique? Eaque mollitia excepturi asperiores!" },
        { Id: 2, Title: "writing silence", Image: <img src={Kirsche} alt="" />, Body: "The book which won many Prizes, The post card element has integrated an image of icon as well. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit corrupti molestiae, repellendus aliquid optio at similique? Eaque mollitia excepturi asperiores!" },
        { Id: 3, Title: "Katarina", Image: <img src={Kirsche} alt="" />, Body: "The amazing lady with multi talents, The post card element has integrated an image of icon as well. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit corrupti molestiae, repellendus aliquid optio at similique? Eaque mollitia excepturi asperiores!" },
        { Id: 4, Title: "Bam bammmm", Image: <img src={Kirsche} alt="" />, Body: "Amazing project of all times, The post card element has integrated an image of icon as well. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit corrupti molestiae, repellendus aliquid optio at similique? Eaque mollitia excepturi asperiores!" },
        { Id: 5, Title: "Katari", Image: <img src={Kirsche} alt="" />, Body: "The lady with multi talents, The post card element has integrated an image of icon as well. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit corrupti molestiae, repellendus aliquid optio at similique? Eaque mollitia excepturi asperiores!" }
    ]
}
{/* < img src = { Kirsche }; alt = "a" > */ }

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;