import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout() {
  return (
    <Container>
      <Row>
        <Nav />
      </Row>
      <Row>
        <Outlet />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
