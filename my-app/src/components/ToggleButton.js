import React from 'react';
import "../App.css";

class ToggleButton extends React.Component {
	
	constructor() {
		super();
		this.state = {leftActive: true, rightActive: false};
		this.handleClick = this.handleClick.bind(this);
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