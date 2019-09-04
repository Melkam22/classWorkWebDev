import React from 'react'
import Countryside from '../countryside.jpg';
import Photo from '../photo.jpg';
import Forest from '../forest.jpg';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <h4>This is the home page</h4>

            <div className="flex">
                <img src={Countryside} alt="Countryside" className="countryside" />
                <img src={Photo} alt="" className="photo" />
                <img src={Forest} alt="Forest" className="image-two" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quas voluptate eius pariatur dolore exercitationem rerum
                consectetur. Atque tempore reprehenderit molestiae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias numquam eaque quasi eveniet dolor vel eius
                repellat odit corporis officia? Necessitatibus doloribus
                sequi unde accusantium porro, quas minima modi eius
                facilis reiciendis, aliquam mollitia, officia numquam
                temporibus corporis iste magni inventore soluta quibusdam?
                Quasi eum illum similique quisquam et, aliquid fugiat
                nisi delectus veniam eaque dolores soluta quibusdam
                pariatur qui perferendis nemo nostrum in voluptatibus
                molestiae iste. Tenetur sit harum dolore dolor quia
                voluptate, aspernatur consectetur eius officiis, odit
                ipsam dignissimos nostrum, fugiat natus! Dolor eum
                reprehenderit quaerat repellat. Consequatur, magnam
                aliquid deleniti odio itaque ipsa cupiditate nesciunt
                veniam unde.</p>
        </div>
    )
}
export default Home;

