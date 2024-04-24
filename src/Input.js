import React, { useRef } from "react";

const Input = () => {
	const ref = useRef();
	return (
		<div>
			<input
				type="text"
				id="test"
				ref={ref}
			/>
			<button
				type="button"
				onClick={() => {
					console.log(ref);
				}}
			>
				取得資料
			</button>
		</div>
	);
};

export default Input;
