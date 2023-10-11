import Clock from "./App";

function ClockList({ quantity }) {
	return (
		<div>
			{quantity.map((key) => (
				<Clock key={Math.random()} />
			))}
		</div>
	);
}

export default ClockList;
