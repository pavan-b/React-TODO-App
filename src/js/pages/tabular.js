import React from "react";

import Table from './table';
export default class Tabular extends React.Component {
constructor(){
	super();
	this.delete=this.delete.bind(this);
}
delete(id){
	this.props.deleteFromState(id)
	//console.log('in prop delete')
}


render() {
var {contents}= this.props;
//console.log(contents);
return(
	<div className="col-sm-8">
	<table className="table table-hover">
	    	      <thead>
	    	        <tr>
	    	         
	    	          <th>Task</th>
	    	         
	    	          <th></th>
	    	          
	    	        </tr>
	    	      </thead>
	<tbody>
{contents.map(( d) => {
  
	return <Table key={d.id} print={d} delete={this.delete}  edit={this.props.editFromState}/>;
})}
</tbody>
   </table>
   </div>
);
}
}

	