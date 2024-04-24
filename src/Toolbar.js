import React, { useContext } from "react";
import { ThemeContent } from "./ThemeContent";

const Toolbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContent);
	console.log(theme, toggleTheme);
	return (
		<div style={{ background: theme.background, color: theme.foreground }}>
			<button
				type="button"
				onClick={toggleTheme}
			>
				change
			</button>
		</div>
	);
};

export default Toolbar;
