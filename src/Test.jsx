import { Component } from "react";
import Button from "./Button";

class Test extends Component {
	handleClick = () => {
		console.log("the test is successfull!");
	};
	render() {
		return (
			<div>
				<h1>This is a test about button!</h1>
				<Button change={() => this.handleClick()} />
			</div>
		);
	}
}

export default Test;
