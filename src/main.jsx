import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./Page.jsx";
import "./index.css";
import AuthProvider from "./Auth/AuthProvider.jsx";
import Working from "./components/Working/Working.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Working/>
      <Page />
    </AuthProvider>
  </React.StrictMode>
);
