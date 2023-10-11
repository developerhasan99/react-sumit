import { Component } from "react";
import "./form.css";

class Form extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		library: "",
		text: "",
		gender: "Male",
		techs: [],
	};
	handleChange = (e) => {
		if (e.target.name === "phone" && this.state.phone.length > 10) {
			return;
		}
		if (e.target.name === "techs") {
			let techs = this.state.techs;
			let value = e.target.value;

			if (!techs.includes(value)) {
				techs.push(e.target.value);
			} else {
				techs = techs.filter((el) => el !== value);
			}

			this.setState({ ...this.state, techs }, () => {
				console.log(this.state);
			});

			return;
		}

		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		const { name, email, phone, library, text, gender } = this.state;
		return (
			<div>
				<form action="" onSubmit={this.submitHandler}>
					<label htmlFor="name">Your Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter Your Name"
						value={name}
						onChange={this.handleChange}
					/>{" "}
					<br />
					<br />
					<label htmlFor="email">Your Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter Your Email"
						value={email}
						onChange={this.handleChange}
					/>
					<br />
					<br />
					<label htmlFor="phone">Your Phone</label>
					<input
						type="number"
						id="phone"
						name="phone"
						maxLength={11}
						placeholder="Enter Your Name"
						value={phone}
						onChange={this.handleChange}
					/>
					<br />
					<br />
					<label htmlFor="library">Your Library: </label>
					<select
						name="library"
						id="library"
						value={library}
						onChange={this.handleChange}
					>
						{" "}
						<option disabled={true} value="">
							Select JavaScript Library
						</option>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
						<option value="next">Next</option>
					</select>
					<br />
					<br />
					<label htmlFor="text">Leave Your Feedback: </label>
					<br />
					<textarea
						name="text"
						id="text"
						cols="30"
						rows="10"
						value={text}
						onChange={this.handleChange}
					></textarea>
					<br />
					<div style={{ marginBottom: "3rem" }}>
						<h3>Select a gender</h3>
						<input
							type="radio"
							name="gender"
							id="male"
							value="Male"
							checked={"Male" === gender}
							onChange={this.handleChange}
						/>
						<label htmlFor="male">Male</label>
						<input
							type="radio"
							name="gender"
							id="female"
							value="Female"
							checked={"Female" === gender}
							onChange={this.handleChange}
						/>
						<label htmlFor="female">Female</label>
					</div>
					<div style={{ marginBottom: "1rem" }}>
						<h1>Techs I have!</h1>
						<input
							type="checkbox"
							value="Mobile"
							id="mobile"
							name="techs"
							onChange={this.handleChange}
						/>
						<label htmlFor="mobile">Mobile</label>
						<input
							type="checkbox"
							name="techs"
							id="laptop"
							value="laptop"
							onChange={this.handleChange}
						/>
						<label htmlFor="laptop">Laptop</label>
						<input
							type="checkbox"
							name="techs"
							id="desktop"
							value="desktop"
							onChange={this.handleChange}
						/>
						<label htmlFor="desktop">Desktop</label>
						<input
							type="checkbox"
							name="techs"
							id="charger"
							value="charger"
							onChange={this.handleChange}
						/>
						<label htmlFor="charger">Charger</label>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;
