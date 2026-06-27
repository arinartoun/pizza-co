import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found!");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
