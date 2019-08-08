import React , {Component} from 'react';

class ToDoForm extends Component {
    handleSubmit(e){
        e.preventDefault();
        console.log('Create an event');
    }
    render(){
        return (
            <form className='input-group my-3'
            onSubmit={this.handleSubmit}>
  
    <input type="text" className="form-control" placeholder="Add a new to do item"/>
   
    <input type="password" className="form-control" placeholder="Password"/>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        )
    }
}
export default ToDoForm