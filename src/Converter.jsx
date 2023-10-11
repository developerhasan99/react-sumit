function Converter({ temp = 0, scale }) {
	if (scale === "celsius") {
		return (temp * 9) / 5 + 32;
	} else if (scale === "Fahrenheit") {
		return temp - (32 * 5) / 9;
	}
}
export default Converter;
