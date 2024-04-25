import React, { useContext, useState } from "react";
import { Login, themes } from "./Login";
import "./styles/login.css";

const Input = () => {
	const [username, setUserName] = useState("");
	const [password, setPassWord] = useState("");
	const { logout, toggleTheme } = useContext(Login);

	const handlerFormSubmit = (e) => {
		e.preventDefault();
		if (!username || !password) {
			alert("please fill in both fields !");
			return;
		}
		toggleTheme();
		setUserName("");
		setPassWord("");
	};

	const handlerLogout = () => {
		setUserName("");
		setPassWord("");
		alert("user is logout !");
		if (logout !== themes.logout) {
			toggleTheme();
		}
	};

	return (
		<div className="container">
			<h2 className="title">登入</h2>
			<form onSubmit={handlerFormSubmit}>
				<div className="username">
					<label htmlFor="admin">帳號:</label>
					<input
						type="text"
						id="admin"
						value={username}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
				</div>
				<div className="password">
					<label htmlFor="password">密碼:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => {
							setPassWord(e.target.value);
						}}
					/>
				</div>
				<div className="button-group">
					<button
						type="submit"
						className="btn"
					>
						登入
					</button>
					<button
						type="button"
						className="btn"
						onClick={handlerLogout}
					>
						登出
					</button>
				</div>
			</form>

			<h3 style={{ background: logout.background, color: logout.color }}>
				success!
			</h3>
		</div>
	);
};

export default Input;
