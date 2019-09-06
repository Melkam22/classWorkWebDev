import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';//to wrap the title with
import kirsche from '../kirsche.png';
import { connect } from 'react-redux';//we use this, hig-ord'r func, instead of axios

class Home extends Component {

    render() {
        console.log(this.props);
        const { myData } = this.props;
        //const { myData } = this.state;//state didn't exist anymore so, use props
        let myDataList = myData.length ? (
            myData.map(item => {
                return (
                    <div className="post card" key={item.Id}>
                        <img src={kirsche} alt="k" />
                        <div className="card-content">
                            <Link to={"/" + item.Id}>{/* click on link we see only id */}
                                <span className="card-title green-text">
                                    {item.Title}</span>
                            </Link>{/* so we ve to fetch datas on posts page */}
                            <p>{item.Body}</p>
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

const mapStateToProps = (state) => {
    return {
        myData: state.myData
    }
}

export default connect(mapStateToProps)(Home);//null is the action part