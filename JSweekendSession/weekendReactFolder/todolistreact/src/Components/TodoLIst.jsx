import React, { Component } from 'react';

class TodoList extends Component {
    state = {
        container: ['Clean my House', 'Take a shower'],
        givenWord: null
    }
    handleValue = (e) => {
        this.setState({
            givenWord: e.target.value
        })
    }

    addAll = () => {
        if (this.state.givenWord !== "") {
            let myContainer = this.state.container;
            myContainer.push(this.state.givenWord);
            this.setState({
                container: myContainer,
                givenWord: ""//this is for the after render cleaned input
            })

        }
    }

    deleteItem = (i) => {
        let myContainer = this.state.container;
        myContainer.splice(i, 1);
        this.setState({
            container: myContainer
        })
    }


    render() {
        //console.log(this.state.givenWord);
        let style = {//on insert word style
            color: ''
        }
        if (this.state.givenWord !== '') {
            style.backgroundColor = "rgba(13,145,61,.5)";
        }

        return (
            <main  >
                <h3>Insert what you ll do.</h3>
                <input type="text" className="input"
                    value={this.state.givenWord}//to make the input empty again
                    onChange={this.handleValue} /> <br />
                <button className="btn" onClick={this.addAll} style={style}>
                    Submit</button>

                <div className="addFunc">
                    {this.state.container.map((item, i) => {
                        return (
                            <h2 className="renderResult">
                                <li className="bulletPoint"> {item}
                                    <button className="delBtn"
                                        onClick={() => this.deleteItem(i)}> X
                                </button></li>
                            </h2>
                        )
                    })}
                </div>


            </main>
        )
    }
}

export default TodoList;