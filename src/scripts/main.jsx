import "../index.html";
import "../styles/main.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
