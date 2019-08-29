import React, { Component } from 'react'

class RenderPage extends Component {
    render() {

        return (

            <div className="wholeRender">
                {this.props.exportContent ?
                    (
                        <div>
                            {this.props.exportContent.map((item, i) => {
                                return (
                                    <h2 className="keyStyle" key={i}>
                                        <p>{item.firstName}</p>
                                        <p>{item.lastName}</p>
                                        <p>{item.email}</p>
                                        <p>{item.passWord}</p>
                                        <p>{item.content}</p>
                                    </h2>
                                )
                            })}

                        </div>) : ""
                }
            </div>
        )
    }
}

export default RenderPage;