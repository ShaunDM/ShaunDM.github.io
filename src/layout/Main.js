import React from "react";
import Sidebar from "./Sidebar";

export default function Main({ title, children }) {
  return (
    <main>
      {/* <Sidebar carousel={carousel} />
      <article name={title}>
        <h2 id={`${title}_title`}>{title}</h2>
        {children}
      </article> */}
      {children}
    </main>
  );
}
