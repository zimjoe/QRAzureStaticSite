import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import Header from './Header';
import App from "./App";
//import reportWebVitals from './reportWebVitals';

// hinky solution for now.  Will fix later with a proper menu
const toggleMenu = (show, hide) => {
  [...document.getElementById("QRMenu").children].forEach((child) => {
    if (child.id === "Nav" + show) {
      document.getElementById(child.dataset.toggle).className = "";
      child.className = "current";
    } else {
      document.getElementById(child.dataset.toggle).className = "hidden";
      child.className = "";
    }
  });
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <nav id="QRMenu">
      <button
        id="NavUrl"
        className="current"
        data-toggle="UrlForm"
        onClick={() => {
          toggleMenu("Url", "Wifi");
        }}
      >
        Make a Url QR
      </button>
      <button
        id="NavWifi"
        data-toggle="WifiForm"
        onClick={() => {
          toggleMenu("Wifi", "Url");
        }}
      >
        Make a Wifi QR
      </button>
      <button
        id="NavEmail"
        data-toggle="EmailForm"
        onClick={() => {
          toggleMenu("Email", "Url");
        }}
      >
        Make an Email QR
      </button>
    </nav>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
