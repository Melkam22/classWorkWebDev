import React, { Component } from 'react';


class FirstPage extends Component {
    state = {
        container: [],
        word: null
    }

    inputCalc = (e) => {
        this.setState({
            word: e.target.value
        })
    }

    clickCalc = () => {
        if (this.state.word !== "") {
            let myContainer = this.state.container;
            myContainer.push(this.state.word);
            this.setState({
                container: myContainer,
                word: ''
            })
        }
    }
    deleteIt = (i) => {
        let myContainer = this.state.container;
        myContainer.splice(i, 1);
        this.setState({
            container: myContainer

        })
    }

    render() {
        let style = {
            color: ''
        }
        if (this.state.word !== "") {
            style.backgroundColor = "rgba(93,58,87,.6)";
        }
        return (
            <main className="main container" style={style}>
                <h3>Simple todo list.</h3>
                <label> <input type="text"
                    placeholder="put your todo's here!"
                    value={this.state.word}
                    onChange={this.inputCalc} /></label>

                <button
                    className="btn white-text bold"//materialized css
                    onClick={this.clickCalc}>Submit</button>

                <div className="my-items center">
                    {this.state.container.map((item, i) => {
                        return (
                            <div className="myKey collection-item" key={i}>
                                <li>{item} <button className="btn collection"//collect gap
                                    onClick={() => this.deleteIt(i)}>X</button> </li>
                            </div>
                        )
                    })}
                </div>


            </main>
        )
    }
}

export default FirstPage;