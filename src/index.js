import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Page, Error404 } from "./Page";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{ path: "*", element: <App /> },
	{ path: "/page", element: <Page /> },
	{ path: "/404", element: <Error404 /> },
]);

root.render(<RouterProvider router={router} />);

// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
