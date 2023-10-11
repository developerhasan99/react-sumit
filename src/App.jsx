import { Component } from "react";
import "./App.css";
import Button from "./Button";

class Clock extends Component {
	state = { time: new Date(), lang: "en-US" };

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				time: new Date(),
			});
		});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	handleClick = (lang) => {
		this.setState({
			lang,
		});
	};

	render() {
		const { time, lang } = this.state;
		let clockLang;
		let h1;
		let h2;
		let h3;

		if (lang === "en-US") {
			h1 = "Have a nice day dear!";
			h2 = "Today's date is ";
			h3 = "Now the time is";

			clockLang = (
				<Button change={() => this.handleClick("bn-BD")} lang="bn-BD"></Button>
			);
		} else {
			h1 = "আপনার দিন শুভ হোক!";
			h2 = "আজকের তারিখ হল ";
			h3 = "এখন সময় হল";
			clockLang = (
				<Button change={() => this.handleClick("en-US")} lang="en-US"></Button>
			);
		}

		return (
			<div>
				<div>
					<h1>{h1}</h1>
					<h2>
						{h2}
						{time.toDateString()}
					</h2>
					<h3>
						{h3} {time.toLocaleTimeString(lang)}
					</h3>
					{clockLang}
				</div>
				<hr />
			</div>
		);
	}
}

export default Clock;
