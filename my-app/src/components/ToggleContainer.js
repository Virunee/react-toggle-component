import React from 'react';
import "../App.css";
import ToggleButton from './ToggleButton'

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

		return (
			<div className={"toggleComponentContainer " + styleclass}>
				<ToggleButton leftText="Hot" rightText="Cold" handleChange={this.handleChange}/>
                <ToggleButton leftText="Option 1" rightText="Option 2" handleChange={this.handleChange}/>
                <ToggleButton leftText="Active" rightText="Not active" handleChange={this.handleChange}/>
                <p className="message">{message}</p>
			</div>
		);
	}
}

export default ToggleContainer;