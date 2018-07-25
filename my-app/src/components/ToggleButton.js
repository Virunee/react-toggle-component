import React from 'react';
import "../App.css";
import { getToggleState, checkIfCorrect } from '../checkIfCorrect';
import {correctCombination} from '../config';

class ToggleButton extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {leftActive: true, rightActive: false, correctStyle: "undefinedstyle"};
		this.handleClick = this.handleClick.bind(this);
  }    

    componentDidUpdate(prevProps,prevState) {
        // console.log(prevState.correctStyle);
        // console.log(this.state.correctStyle);
        // console.log("****");
        if(checkIfCorrect(correctCombination,getToggleState())) {
            if(prevState.correctStyle !== "correctStyle") {
                this.setState({correctStyle: "correctStyle"});
                this.props.handleChange(true);
            }
        } else {
            if(prevState.correctStyle !== "incorrectStyle") {
                this.setState({correctStyle: "incorrectStyle"});
                this.props.handleChange(false);
            }
        }
        // if(prevState.correctStyle !== this.state.correctStyle) {
        //     if(checkIfCorrect(correctCombination,getToggleState())) {
        //         //this.setState({correctStyle: "correctStyle"});
        //         console.log(prevState);
        //         console.log(prevProps);
        //         console.log(this.state.correctStyle);
        //         // if(prevState.correctStyle !== this.state.correctStyle) {
        //         //     this.setState({correctStyle: "correctStyle"});
        //         //     console.log("I am working!");
        //         // }
        //     }
        // }
        
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