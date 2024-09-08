import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";
import Header from "./Header";
import { getAssets } from "../util/api";

function Layout() {
  const assets = getAssets(window.location.pathname);

  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Outlet context={assets} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
