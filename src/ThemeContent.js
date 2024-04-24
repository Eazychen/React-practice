import React from "react";

const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee",
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222",
	},
};
const ThemeContent = React.createContext({
	theme: themes.light,
	toggleTheme: () => {
		console.log("ssss");
	},
});

export { ThemeContent, themes };
