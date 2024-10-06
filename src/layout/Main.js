import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Main({ title, children }) {
  return (
    <main>
      <Container fluid={true}>
        <Row>
          <h2>{title}</h2>
        </Row>
        <Row>{children}</Row>
      </Container>
    </main>
  );
}
