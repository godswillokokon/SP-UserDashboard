import React from "react";
import Routes from "./pages";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div>
      <Routes />
    </div>
  );
}

export default App;
