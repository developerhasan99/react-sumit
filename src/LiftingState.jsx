import { Component } from "react";
import BoilingVerdict from "./Boiling";

class Calculator extends Component {
	state = {
		temperature: "",
		scale: "Celsius",
	};
	handleChange = (e) => {
		this.setState({
			...this.state,
			temperature: e.target.value,
		});
		console.log(e.target.value);
	};

	handleClick = (scale) => {
		this.setState({
			...this.State,
			scale,
		});
	};
	render() {
		const { temperature, scale } = this.state;
		let button;
		if (scale === "Farenheit") {
			button = (
				<button
					style={{ marginTop: "10px" }}
					onClick={() => this.handleClick("celsius")}
				>
					Change the Scale
				</button>
			);
		} else {
			button = (
				<button
					style={{ marginTop: "10px" }}
					onClick={() => this.handleClick("Farenheit")}
				>
					Change the Scale
				</button>
			);
		}

		return (
			<div>
				<fieldset>
					<legend>
						<h2>Enter temperature in {scale}:</h2>
					</legend>
					<input
						type="number"
						name="temperature"
						id="temperature"
						value={temperature}
						onChange={this.handleChange}
					/>
				</fieldset>
				{button}
				<BoilingVerdict temperature={parseFloat(temperature)} scale={scale} />
			</div>
		);
	}
}

export default Calculator;
