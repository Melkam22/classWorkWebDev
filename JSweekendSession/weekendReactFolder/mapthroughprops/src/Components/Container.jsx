import React, { Component } from 'react';

class Container extends Component {
    render() {
        const { listExport } = this.props;//dynamic coding of values, destructuring
        const mapMyList = listExport.map(list => {//loop through all

            //if (list.age > 33) {//we ll see only 2 out of 6 people
            return list.age > 31 ? (//or this, turnary
                //return (
                <div key={list.id}> {/* unique key, unique for each element */}
                    <h1>---------------</h1>
                    <h3>Name: {list.name}</h3>
                    <h3>Age: {list.age}</h3>
                    <h3>Profession: {list.profession}</h3>
                    <h3>Id: {list.id}</h3>
                </div>
            ) : null

        })
        return (
            <div>
                {mapMyList}
            </div>
        )
    }
}

export default Container;