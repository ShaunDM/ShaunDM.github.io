import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
