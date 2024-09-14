import React from "react";
import Nav from "./Nav";

function Header({
  isPhone,
  carouselIndex,
  handleSelectCarouselIndex,
  header_content = "Shaun McRae - Software Engineer",
}) {
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
