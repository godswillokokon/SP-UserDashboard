import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Auth from "helpers/auth";

const Root = () => {
  return <App />;
};

Auth.init().then(() => {
  ReactDOM.render(<Root />, document.getElementById("root"));
});

serviceWorker.unregister();
