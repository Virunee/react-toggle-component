import React from 'react';
import "../App.css";
import ToggleButton from './ToggleButton'

class ToggleContainer extends React.Component {
	
	constructor(props) {
		super(props);
        this.state = {styleClass: "incorrectStyle", message: "The answer is incorrect"};
  }
	
	render() {
        // let styleclass = this.state.correct ? "correctStyle" : "incorrectStyle";
        // let message = this.state.correct ? "The answer is correct" : "The answer is incorrect";
	  
		return (
			<div className={"toggleComponentContainer " + this.state.styleClass}>
				<ToggleButton leftText="Hot" rightText="Cold"/>
                <ToggleButton leftText="Option 1" rightText="Option 2"/>
                <ToggleButton leftText="Active" rightText="Not active"/>
                <p className="message">{this.state.message}</p>
			</div>
		);
	}
}

export default ToggleContainer;