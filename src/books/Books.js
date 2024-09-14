import React from "react";
import Main from "../layout/Main";
import Content from "../layout/Content";
import { useOutletContext } from "react-router-dom";

export default function Books() {
  const isPhone = useOutletContext()[0];
  const assets = useOutletContext()[1];
  const carouselIndex = useOutletContext()[2];
  const handleSelectCarouselIndex = useOutletContext()[3];

  return (
    <Main title="Books">
      <Content
        isPhone={isPhone}
        assets={assets}
        carouselIndex={carouselIndex}
        handleSelectCarouselIndex={handleSelectCarouselIndex}
      />
    </Main>
  );
}
