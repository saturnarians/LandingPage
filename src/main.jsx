import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Fragment>
   <AuthProvider>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
    </AuthProvider>
    </Fragment>
  </React.StrictMode>
);