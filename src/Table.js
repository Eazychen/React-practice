import React from "react";
import "./styles/table.css";

const Table = ({ name, address }) => {
	const thStyle = {
		width: "50%",
	};
	const tdStyle = {
		width: "50%",
	};
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th style={thStyle}>公司名稱</th>
						<th style={thStyle}>公司地址</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={tdStyle}>{name}</td>
						<td style={tdStyle}>{address}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
