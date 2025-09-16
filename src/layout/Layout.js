import { useState, useEffect } from "react";
import { PropContext } from "../PropContext";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  const footerStyle = path === "/" ? "position-bottom" : null;

  return (
    <Container className="contr" fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Main>
          <Outlet />
        </Main>
      </Row>
      <Row className={footerStyle}>
        <Footer />
      </Row>
      <ScrollToTop />
    </Container>
  );
}

export default Layout;
