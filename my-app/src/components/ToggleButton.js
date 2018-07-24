import React from 'react';
import "../App.css";

class ToggleButton extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {leftActive: true, rightActive: false, value: 1};
		this.handleClick = this.handleClick.bind(this);
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
        this.setState({correct: true});
    }
    console.log(combination);
    }
	
	handleClick() {
        this.setState({leftActive: !this.state.leftActive});
        this.setState({rightActive: !this.state.rightActive});     
    }
	
	render() {

        const textLeft = this.props.leftText;
        const textRight = this.props.rightText;

        let btn_class_lft = this.state.leftActive ? "activeStyle" : "inactiveStyle";
        let btn_class_rt = this.state.rightActive ? "activeStyle" : "inactiveStyle";
	  
		return (
			<div onClick={this.handleClick} className="toggleButtonContainer">
				<div className={btn_class_lft}>{textLeft}</div>
                <div className={btn_class_rt}>{textRight}</div>
			</div>
		);
	}
}

export default ToggleButton;