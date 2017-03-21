import React from "react";

export default class Tabular extends React.Component {

constructor(){
	super()
	this.handleDelete=this.handleDelete.bind(this);
	this.handleEdit=this.handleEdit.bind(this);
}
handleDelete(event){
this.props.delete(event.target.value);
//console.log( 'in tab;e '+id.target.value)
}
handleEdit(event){

this.props.edit(event.target.value);
}



render(){

	var {print}=this.props;
	
 return(



 
    <tr >
      
      <td>{print.name}</td>
      
      <td><button className='btn btn-danger'  value={print.id} onClick={this.handleDelete}>done</button>&nbsp;&nbsp;
      <button className='btn btn-info'  value={print.id} onClick={this.handleEdit}>change</button></td>

      
    </tr>  
  
  





 	);






	};


}
