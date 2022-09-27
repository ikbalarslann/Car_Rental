import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import "./scss/main.scss";
import NavBar from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
