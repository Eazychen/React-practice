import React, { useState } from "react";

const Create = ({ messages, setMessages }) => {
	let [input, setInput] = useState("");

	const submitButtonHandler = (e) => {
		e.preventDefault();
		setMessages([...messages, input]);
		// 這個概念是每次按下這個按鈕，會執行展開原本的messages然後在加入新的input值在儲存成一個陣列
		setInput("");
	};
	const inputHandler = (e) => {
		setInput(e.target.value);
	};

	return (
		<form>
			<input
				onChange={inputHandler}
				value={input}
				type="text"
			/>
			<button onClick={submitButtonHandler}>submit</button>
		</form>
	);
};

export default Create;
