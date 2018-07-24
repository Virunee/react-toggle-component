import React from 'react';
import "../App.css";
import ToggleButton from './ToggleButton'

class ToggleContainer extends React.Component {
	
	constructor() {
		super();
		this.state = {};
  }
		
	render() {

        let container_style = this.props.correct ? "correctStyle" : "incorrectStyle";
	  
		return (
			<div className={"toggleComponentContainer " + container_style}>
				<ToggleButton leftText="Hot" rightText="Cold"/>
                <ToggleButton leftText="Option 1" rightText="Option 2"/>
                <ToggleButton leftText="Active" rightText="Not active"/>
                <p className="message">{this.props.message}</p>
			</div>
		);
	}
}

export default ToggleContainer;