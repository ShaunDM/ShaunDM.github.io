import React from "react";
import Main from "../layout/Main";
import Content from "../layout/Content";
import { useOutletContext } from "react-router-dom";

export default function Books() {
  const images = useOutletContext();
  console.log(images);
  return (
    <Main title="Books">
      <Content thumbs={images[0]} full={images[1]} />
    </Main>
  );
}
