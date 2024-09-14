import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";
import Header from "./Header";
import { useMediaQuery } from "react-responsive";
import { getAssets } from "../util/api";

function Layout() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleSelectCarouselIndex = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  console.log(carouselIndex);

  const isPhone = useMediaQuery({ query: "( maxwidth: 767 )" });
  const assets = getAssets(window.location.pathname);

  return (
    <Container>
      <Row>
        <Header
          isPhone={isPhone}
          carouselIndex={carouselIndex}
          handleSelectCarouselIndex={handleSelectCarouselIndex}
        />
      </Row>
      <Row>
        <Outlet
          context={[isPhone, assets, carouselIndex, handleSelectCarouselIndex]}
        />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
