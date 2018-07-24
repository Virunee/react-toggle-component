import React from 'react';
import "../App.css";
import ToggleButton from './ToggleButton'

class ToggleContainer extends React.Component {
	
	constructor() {
		super();
        this.state = {style: "incorrectStyle"};
  }

  componentDidUpdate() {
    var togglebuttons = document.querySelectorAll('.toggleButtonContainer');
    var combination = [];

    for (var i = 0; i<togglebuttons.length; i++) {
    var button = togglebuttons[i].querySelectorAll('div')[0];
    if(button.className === "activeStyle") {
        combination.push(1);
    } else {
        combination.push(0);
    }
    }
    if(combination === this.props.combination) {
        this.setState({style: "correctStyle"});
    } else {
        this.setState({style: "incorrectStyle"});
    }
    console.log(combination);
    }
		
	render() {
      
	  
		return (
			<div className={"toggleComponentContainer " + this.state.style}>
				<ToggleButton leftText="Hot" rightText="Cold"/>
                <ToggleButton leftText="Option 1" rightText="Option 2"/>
                <ToggleButton leftText="Active" rightText="Not active"/>
                <p className="message">{this.props.message}</p>
			</div>
		);
	}
}

export default ToggleContainer;