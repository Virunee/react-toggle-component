import React from 'react';
import "../App.css";
import ToggleButton from './ToggleButton'
import {toggles} from '../config';

class ToggleContainer extends React.Component {
	
	constructor(props) {
		super(props);
        this.state = {styleClass: "incorrectStyle", message: "undefined message"};
  }

  handleChange = (response) => {
	this.props.handleChange(response);
  }
	
	render() {
		let styleclass = this.props.style ? "correctStyle" : "incorrectStyle";
		let message = this.props.style ? "The answer is correct." : "The answer is incorrect.";

		const toggleButtons = toggles.map(
			({leftText,rightText}, key) => 
		<ToggleButton leftText={leftText} rightText={rightText} handleChange={this.handleChange} key={key} />
		);

		return (
			<div className={"toggleComponentContainer " + styleclass}>
				{toggleButtons}
                <p className="message">{message}</p>
			</div>
		);
	}
}

export default ToggleContainer;