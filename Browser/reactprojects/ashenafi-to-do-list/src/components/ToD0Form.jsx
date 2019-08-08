import React , {Component} from 'react';
import './Header.css';

class ToDoForm extends Component {
    
    state = {
        inputText: null,
        todoItems: [],/* to create a dummylist, sort of database, or leave them empty*/
    }
//this.handleSubmit = this.handleSubmit.bind(this);
handleInputChange = event => {
        const inputText = event.target.value;
        this.setState({inputText: inputText})
        console.log("inputText:",inputText);
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
        //console.log(this);

        this.setState(prevState=>({
            todoItems: [...prevState.todoItems, this.state.inputText]
        }))
    }

render(){
return (
    <div> 
{/* <React.Fragment>  */}
    <form className='input-group my-3'
    onSubmit={this.handleSubmit}>
  
    <input className="form-control"
    name="name"
    type="text" 
    placeholder="Add a new to do item..."
    onChange={this.handleInputChange} />
   
    <div className="input-group-append"> 
    
    <button className="btn btn-outline-secondary" type="submit">
    <i className="fas fa-plus" aria-hidden="true" />&nbsp;Add item
    </button>
     </div>
</form>
{/* shortcircuit */}
{this.state.inputText && <p>Typing: {this.state.inputText}</p>}
{this.state.todoItems.map((items,index)=><ol key={index}>{items}</ol>)}
{/* we ll have our false database on our page */}
{/* </React.Fragment> */}
</div>
    );
}
}
export default ToDoForm;