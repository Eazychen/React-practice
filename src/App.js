import React, { useState } from "react";

import { Login, themes } from "./Login";

import Input from "./Input";

class InputComponent extends React.Component {
	test() {
		console.log("hi I'm React");
	}
	render() {
		console.log(this);
		return <h3>I am React</h3>;
	}
}
class Number extends InputComponent {
	useTestChange(v) {
		this.test();
	}
	render() {
		this.useTestChange();
		return <input id="{value}"></input>;
	}
}

class UseEffectSample extends React.Component {
	state = {
		data: "init",
	};
	componentDidMount() {
		console.log("hi");
	}
	componentDidUpdate() {
		console.log("hi new data");
	}
	render() {
		const { data } = this.state;
		return (
			<div>
				<h3>{data}</h3>
				<button
					type="button"
					onClick={() => {
						this.setState({ data: "new data" });
					}}
				>
					change state
				</button>
			</div>
		);
	}
}

function App() {
	const [currentTheme, setCurrentTheme] = useState(themes.logout);

	const toggleTheme = () => {
		setCurrentTheme((pre) =>
			pre === themes.logout ? themes.login : themes.logout
		);
	};

	return (
		<div>
			{/* <Login.Provider value={{ logout: currentTheme, toggleTheme }}>
				<Input />
			</Login.Provider> */}
			<UseEffectSample />
		</div>
	);
}

export default App;
