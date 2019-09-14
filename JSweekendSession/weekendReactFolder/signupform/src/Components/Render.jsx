import React, { Component } from 'react';
import { Table } from 'reactstrap';


class Render extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>All Signees of the Petition :</h3>
                <Table className="container">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {this.props.actionRender.map((item, e) => {
                        return (
                            <thead>
                                <tr>
                                    <th scope="row">{e + 1} </th>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.email}</td>
                                </tr>
                            </thead>
                        )
                    })}
                </Table>
            </div>
        )
    }
}

export default Render;