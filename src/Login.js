import React from "react";

const themes = {
	login: {
		background: "#F24D98",
		color: "#59D044",
	},
	logout: {
		background: "#ffffff",
		color: "#ffffff",
	},
};

const Login = React.createContext({
	logout: themes.logout,
});
export { Login, themes };
