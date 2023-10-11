import { Component } from "react";

class Button extends Component {
	render() {
		const { change, lang } = this.props;
		let button;
		if (lang === "en-US") {
			button = <button onClick={change}>ভাষা পরিবর্তন করুন </button>;
		} else {
			button = <button onClick={change}>change the language </button>;
		}
		return button;
	}
}

export default Button;
