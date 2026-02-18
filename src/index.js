import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import disableDevtool from 'disable-devtool';
disableDevtool({
  url: 'https://www.time-pass.in/' // redirect if devtools opened
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
