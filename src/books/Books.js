import React from "react";
import Main from "../layout/Main";
import Content from "../layout/Content";

export default function Books() {
  const images = require.context(
    "../assets/books/carousel",
    false,
    /\.(png|jpe?g|svg)$/
  );
  let carousel = {};
  images.keys().forEach((item, index) => {
    carousel[item.replace("./", "")] = images(item);
  });

  return (
    <Main title="Books">
      <Content carousel={carousel} />
    </Main>
  );
}
