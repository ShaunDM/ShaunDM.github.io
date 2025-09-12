import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router basename="https://shaundm.github.io/">
      <App />
    </Router>
  </React.StrictMode>
);
