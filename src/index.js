import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store";
// import LoaderBox from "./components/LoaderBox";

const Root = () => (
	// <Provider store={store}>
	// 	<PersistGate persistor={persistor} loading={<LoaderBox />}>
	<App />
	// 	</PersistGate>
	// </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
