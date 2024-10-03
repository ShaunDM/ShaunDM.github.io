import React from "react";

export default function Main({ title, children }) {
  return (
    <main>
      <h2>{title}</h2>
      {children}
    </main>
  );
}
