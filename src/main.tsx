import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById('root')

if (!container) {
  throw Error('#root Container not found!')
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
