import React from "react";

export default class Content extends React.Component {
  constructor(props){
    super(props)
    //console.log(this.props )
    var {isEdit}=this.props;
    var {data}=this.props;
  }
componentWillReceiveProps(newProps){
  //console.log(newProps)
  let {isEdit}=newProps;
   //console.log(isEdit)
  this.isEdit=isEdit;
 if (isEdit) {
  this.isEdit=isEdit;
let {data}=newProps;
let {idToEdit}=newProps;
data.map((obj)=>{
  
if(obj.id.toString() === idToEdit.toString()){
  this.data=obj;
  this.refs.id.value=obj.name;
  
  
 }
});
}

  
}

handleEdit(){
  let changedValue={};
changedValue.id=this.data.id;
changedValue.name=this.refs.id.value;

this.props.show(changedValue)
this.refs.id.value='';
  


}


handleChange(){
let changedValue={};
changedValue.id=Date.now();
changedValue.name=this.refs.id.value;

	this.props.addToState(changedValue);
	this.refs.id.value='';
	
	
}
  render() {
    let btnValue='Change it';
    if(!this.isEdit){
    btnValue='Add new';
    }

    return (
    	<div>
    	
<h1>TODO</h1>

 <div className="col-xs-2">
<input  type='text' placeholder='Crate TODO' className='form-control' ref='id' />


<button className={(this.isEdit) ? 'btn btn-info' : 'btn btn-success'} onClick={ (this.isEdit) ? this.handleEdit.bind(this):this.handleChange.bind(this)}  > {btnValue}</button>
</div>

</div>
      
    );
  }
}

