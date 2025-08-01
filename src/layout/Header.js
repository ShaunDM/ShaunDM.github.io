import React from "react";
import Nav from "./Nav";

function Header({
  index,
  handleSelectIndex,
  header_content = "Shaun McRae - Software Engineer",
}) {
  return (
    <header>
      <Nav />
      <h1>{header_content}</h1>
    </header>
  );
}

export default Header;
