import React from "react";
import { Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import MobileToolbar from "./MobileToolbar";
import MediaQuery from "react-responsive";

function Header({
  index,
  handleSelectIndex,
  header_content = "Shaun McRae - Software Engineer",
}) {
  return (
    <header id="header">
      <Row>
        <MediaQuery maxWidth={991}>
          <Col>
            <MobileToolbar />
          </Col>
        </MediaQuery>
        <Col>
          <Nav />
        </Col>
      </Row>
      <Row>
        <h1>{header_content}</h1>
      </Row>
    </header>
  );
}

export default Header;
