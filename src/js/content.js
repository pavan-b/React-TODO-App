import React from "react";

export default class Content extends React.Component {
constructor(props){
	super(props)
}


handleChange(userInput){
	var changedValue=userInput.target.value;
	this.props.changeText(changedValue);
}


  render() {

const name='pavan';
    return (
    	<div>
<h1>Hi {name}  {this.props.property}!</h1>
<input  value={this.props.property} onChange={this.handleChange.bind(this)} />
</div>
      
    );
  }
}
Content.propTypes={property:React.PropTypes.string.isRequired}
