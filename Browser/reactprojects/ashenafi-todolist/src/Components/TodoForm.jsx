import React, {Component} from 'react';

class TodoForm extends Component {
    render(){
        return(
<form>
   
     
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
     
     
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        )
    }
}
export default TodoForm;
 