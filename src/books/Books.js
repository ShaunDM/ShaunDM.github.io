import React from "react";
import Main from "../layout/Main";
import Content from "../layout/Content";

export default function Books() {
  const carouselImages = require.context(
    "../assets/books/carousel",
    false,
    /\.(png|jpe?g|svg)$/
  );
  let carousel = {};
  carouselImages.keys().forEach((item, index) => {
    carousel[item.replace("./", "")] = carouselImages(item);
  });

  const fullImages = require.context(
    "../assets/books/full",
    false,
    /\.(png|jpe?g|svg)$/
  );
  let full = {};
  fullImages.keys().forEach((item, index) => {
    full[item.replace("./", "")] = fullImages(item);
  });

  return (
    <Main title="Books">
      <Content carousel={carousel} full={full} />
    </Main>
  );
}
