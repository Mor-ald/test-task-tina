/* eslint-disable react/prop-types */

import "../styles.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.css";

import React from "react";

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
