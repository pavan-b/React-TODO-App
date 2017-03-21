import React from "react";
import ReactDOM from "react-dom";

import Content from './pages/content';
import Tabular from './pages/tabular';
import StoreApi from './util/storeApi';

export default class Title extends React.Component {
constructor(){
	super();

	
	this.state={
		data:[{
			id:'1',
			name:'pavan'
			
		}],
		isEdit: false,

	};
	this.idToEdit='';
	
}

changeText(d){
	this.setState(()=>{
		this.state.data=d;

	});
	this.store(d);
}

addToState(d){
let temp=this.state.data;
temp.push(d);
this.changeText(temp);

}


deleteFromState(id){
	
let temp=this.state.data;
temp.map((obj)=>{
	
if(obj.id.toString() === id.toString()){var index=temp.indexOf(obj);
temp.splice(index, 1);

 }
});

this.changeText(temp);

}

editFromState(id){
this.idToEdit=id;
	this.setState({isEdit:true});
	
//console.log('1 '+this.state.isEdit)
}

updateIt(d){
	//console.log(d)
let temp=this.state.data;
temp.map((obj)=>{
	
if(obj.id.toString() === d.id.toString()){
obj.name=d.name;

 }
});	

this.setState({isEdit:false})
this.changeText(temp);

}

store(data){
StoreApi.save(data);

}


	  render() {
				//console.log('render called')
	    return (

		    	<div className="container">
		    	<div className="row">
		    	
	    	    <Content  addToState={this.addToState.bind(this)}    {...this.state} show={this.updateIt.bind(this)} idToEdit={this.idToEdit}  />
	    	    
	    	      
		    	<Tabular contents={this.state.data} deleteFromState={this.deleteFromState.bind(this)} editFromState={this.editFromState.bind(this)} /> 
	    	  
	    	    </div>
	    	    </div>
			    );
				}
}

const app = document.getElementById('app');
ReactDOM.render(<Title/>, app);