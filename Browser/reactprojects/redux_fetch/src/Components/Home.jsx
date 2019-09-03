import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//to wrap the title with
import kirsche from '../kirsche.png'

class Home extends Component {
    state = {
        myData: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    myData: response.data.slice(0, 12)
                })
            })
    }
    render() {
        const { myData } = this.state;
        let myDataList = myData.length ? (
            myData.map(item => {
                return (
                    <div className="post card" key={item.id}>
                        <img src={kirsche} alt="k" />
                        <div className="card-content">
                            <Link to={"/" + item.id}>{/* click on link we see only id */}
                                <span className="card-title green-text">{item.title}</span>
                            </Link>{/* so we ve to fetch datas on posts page */}
                            <p>{item.body}</p>
                        </div>
                    </div>
                )
            })

        ) : (
                <div className="center">No data inside yet!</div>
            )

        return (
            <div className="container home">
                <div className="justify">
                    {myDataList}
                </div>
            </div>

        )
    }
}

export default Home;