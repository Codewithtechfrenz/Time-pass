import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import disableDevtool from 'disable-devtool';

// Activate protection
disableDevtool({
  interval: 100,
  disableMenu: true,
  clearLog: true,
  ondevtoolopen: () => {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:24px;
        background:black;
        color:red;">
        DevTools is not allowed on this website.
      </div>
    `;
  }
});


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
