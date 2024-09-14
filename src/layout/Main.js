import React from "react";
import Sidebar from "./Sidebar";

export default function Main({ title, children }) {
  return (
    <main>
      <h2>{title}</h2>
      {children}
    </main>
  );
}
