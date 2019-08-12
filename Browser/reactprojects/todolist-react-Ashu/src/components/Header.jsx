
import React, {Component} from 'react';

class Header extends Component{
state = {
    title: 'My lists are:',
    keywords: "",
    itemsArray: []
}

inputChangeHandler=(event)=>{
    this.setState({
    keywords: event.target.value//same function as stopDefault()
});
}

addItem=()=>{
    if(this.state.keywords !== ""){
    let newArray = this.state.itemsArray;
    newArray.push(this.state.keywords);//what is added onClick is newArray
    this.setState({
        itemsArray:newArray,//the big jacket is itemsArray === newArray
        keywords: ""
    })
}
}
deleteItem = (i)=>{
 let newArray = this.state.itemsArray;
 newArray.splice(i,1);
 this.setState({
    itemsArray:newArray,
 })
}

render(){
    //console.log(this.state.keywords);
return(
    <header>
            <div className="logo">Image</div>{/*value={} to make the input empty again */}
            <input type="text" value={this.state.keywords} className="input" onChange={this.inputChangeHandler} />
            <button onClick={this.addItem}>Add</button>
            {/* <div>{this.state.title}</div> */}
            <div>
    {this.state.itemsArray.map((item,i)=>{
    return(
        <div className="projection-field">
        <li className="li">{item}<button className="btn" onClick={()=>this.deleteItem(i)} >X</button></li>
        </div>
        )
        })
        }
    </div>
</header>
        );
    }
}

export default Header;