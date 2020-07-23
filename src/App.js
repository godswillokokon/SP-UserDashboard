import React from "react";
import Routes from "./pages";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

const ToastConfig = {
  className: "toast__container",
  toastClassName: "toast__toast",
  bodyClassName: "toast__body",
  hideProgressBar: true,
  closeButton: false,
  position: toast.POSITION.TOP_CENTER,
};

// configure global toaster
toast.configure(ToastConfig);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
