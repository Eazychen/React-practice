import React from "react";
import { useState } from "react";

import { Login, themes } from "./Login";
import Input from "./Input";

function App() {
	const [currentTheme, SetCurrentTheme] = useState(themes.logout);

	const toggleTheme = () => {
		SetCurrentTheme((pre) =>
			pre === themes.logout ? themes.login : themes.logout
		);
	};

	return (
		<div>
			<Login.Provider value={{ logout: currentTheme, toggleTheme }}>
				<Input />
			</Login.Provider>
		</div>
	);
}
export default App;
