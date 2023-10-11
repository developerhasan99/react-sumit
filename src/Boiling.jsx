export default function BoilingVerdict({ temperature = 0, scale }) {
	if (scale === "celsius" && temperature >= 100) {
		return <h1>The water will boil now!</h1>;
	} else if (scale === "Farenheit" && temperature >= 212) {
		return <h1>The water will boil now!</h1>;
	} else {
		return <h1>The water will not boil now!</h1>;
	}
}
