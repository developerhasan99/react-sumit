import { Component } from "react";
import Converter from "./Converter";

class TempConverter extends Component {
	state = {
		celsius: "",
		fahrenheit: "",
		scale: "celsius",
	};
	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	handleClick = (scale) => {
		scale;
	};
	render() {
		const { celsius, fahrenheit, scale } = this.state;
		console.log(celsius);
		console.log(fahrenheit);
		return (
			<div>
				<label htmlFor="celsius">Temperature in Celsius:</label>
				<input
					type="number"
					name="celsius"
					id="celsius"
					value={celsius}
					onChange={this.handleChange}
				/>
				<h1>
					{/* Your Converted Temperature is <Converter temp={celTemp} scale={scale} /> */}
				</h1>
				<br />
				<div style={{ marginTop: "10px" }}>
					<label htmlFor="fahrenheit">Temperature in Fahrenheit:</label>
					<input
						type="number"
						name="fahrenheit"
						id="fahrenheit"
						value={fahrenheit}
						onChange={this.handleChange}
					/>
				</div>
				<h1>
					{/* Your Converted Temperature is <Converter temp={fahrenTemp} scale={scale} /> */}
				</h1>
				{/* <button onClick={() => this.handleClick("fahrenheit")}>Convert</button> */}
			</div>
		);
	}
}

export default TempConverter;
