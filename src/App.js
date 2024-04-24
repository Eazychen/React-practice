import React from "react";
import { useState, useEffect, useContext } from "react";
import Table from "./Table";

function App() {
	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://data.moa.gov.tw/api/v1/PesticideCompanyType/"
			);
			const data = await response.json();
			console.log("Data received", data);

			setMaterial(data.Data);
		} catch (error) {
			console.log(error);
		}
	};

	const [materials, setMaterial] = useState([]);
	// const [theme, SetTheme] = useState(themes.light);

	// const toggleTheme = () => {
	// 	SetTheme((prevTheme) => {
	// 		return prevTheme === themes.light ? themes.dark : themes.light;
	// 	});
	// };

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			{materials.length > 0 ? (
				materials.map((material, index) => {
					return (
						<Table
							key={index}
							name={material.Company_Name}
							address={material.Company_Addr}
						/>
					);
				})
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default App;
