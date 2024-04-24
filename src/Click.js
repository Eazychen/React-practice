import React, { useEffect, useState } from "react";

const ReactMapSample = (props) => {
	const { data } = props;
	// if (data == null) {
	// 	return <h1>Loading</h1>;
	// }
	return data && data.length ? (
		data.map((d, index) => {
			return <h1 key={index}>{d}</h1>;
		})
	) : (
		<h1>Loading</h1>
	);
};

const Click = () => {
	const [salary, setSalary] = useState(null);
	const [num, setNum] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setSalary([1200, 200, 6454, "eddie"]);
		}, 2000);
	}, [salary]);
	
	return (
		<div>
			<h1>{salary}</h1>
			<h1>{num}</h1>
			<button
				onClick={() => {
					setSalary(salary + 1);
				}}
			>
				add
			</button>
			<ReactMapSample data={salary} />
		</div>
	);
};

export default Click;
