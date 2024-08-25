import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function Layout() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
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
