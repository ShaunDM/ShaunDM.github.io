import React from "react";
import { Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import MobileToolbar from "./MobileToolbar";
import MediaQuery from "react-responsive";

function Header({ header_content = "Shaun McRae - Software Engineer" }) {
  return (
    <header id="header">
      <Row>
        <h1>{header_content}</h1>
      </Row>
      <Row
        style={{
          borderBottom: "2px solid #303030ff",
          borderTop: "2px solid #303030ff",
        }}
      >
        <MediaQuery maxWidth={991}>
          <Col>
            <MobileToolbar />
          </Col>
        </MediaQuery>
        <Col>
          <Nav />
        </Col>
      </Row>
    </header>
  );
}

export default Header;
