import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Root = () => {
	return <App />;
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
