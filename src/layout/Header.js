import React from "react";

function Header({ header_content = "Shaun McRae - Software Engineer" }) {
  return (
    <header>
      <h1>{header_content}</h1>
    </header>
  );
}

export default Header;
