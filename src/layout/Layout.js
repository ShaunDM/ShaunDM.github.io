import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Header from "./Header";
import loadMultipleFiles from "../util/loadMultipleFiles";
import { getAssets } from "../util/api";

function Layout() {
  //carouselIndex is causing rerender need to fix.
  const [assets, setAssets] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleSelectCarouselIndex = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const isPhone = useMediaQuery({ query: "( maxwidth: 767 )" });

  const { pathname } = window.location;

  useEffect(() => {
    if (!pathname.includes("calendar")) {
      setAssets(loadMultipleFiles(pathname));
    }
  }, []);

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
