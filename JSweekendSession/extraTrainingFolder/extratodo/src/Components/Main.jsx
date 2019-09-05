import React, { Component } from 'react';
import { declareExportDeclaration } from '@babel/types';


class Main extends Component {
    state = {
        container: [],
        word: []
    }

    handleInput = (e) => {
        this.setState({
            word: e.target.value
        })
    }
    handleClick = () => {
        let myContainer = this.state.container;
        myContainer.push(this.state.word);
        this.setState({
            container: myContainer,
            word: ''
        })
    }
    deleteIt = (d) => {
        let myContainer = this.state.container;
        myContainer.splice(d, 1)
        this.setState({
            container: myContainer
        })
    }


    render() {
        let style = {
            color: null
        }
        if (this.state.word !== "") {
            style.backgroundColor = "rgba(32,51,92,.5)";
        }
        //console.log(this.state.word);
        return (
            <main className="container">
                <input type="text" placeholder="put your todos here"
                    onChange={this.handleInput}
                    value={this.state.word} />
                <button onClick={this.handleClick}>Submit</button>

                {this.state.container.map((item, d) => {
                    return (<div key={d}>
                        <li className="card" style={style}>{item}
                            <button onClick={() => this.deleteIt(d)}>X</button> </li>
                    </div>)
                })}

            </main>
        )
    }
}

export default Main;