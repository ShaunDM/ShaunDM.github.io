import React from "react";
import Nav from "./Nav";
import { useMediaQuery } from "react-responsive";

function Header({ header_content = "Shaun McRae - Software Engineer" }) {
  const isPhone = useMediaQuery({ query: "( maxwidth: 767 )" });
  const header = isPhone ? (
    <>
      <Nav />
      <h1>{header_content}</h1>
    </>
  ) : (
    <>
      <h1>{header_content}</h1>
      <Nav isPhone={isPhone} />
    </>
  );

  return <header>{header}</header>;
}

export default Header;
