import React from "react";
import MediaQuery from "react-responsive";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";

export default function Main({ title, assets, handleSelectIndex, children }) {
  return (
    <main>
      <Container fluid={true}>
        <Row>
          <h2>{title}</h2>
        </Row>
        <Row>
          <MediaQuery minWidth={992}>
            {assets[assets.sidebar.src] && (
              <Col xs={3}>
                <div className="sticky">
                  <Sidebar
                    assets={assets}
                    handleSelectIndex={handleSelectIndex}
                  />
                </div>
              </Col>
            )}
            {!assets[assets.sidebar.src] &&
              assets.sidebar.type &&
              console.error(`No sidebar on page: ${title}`)}
          </MediaQuery>
          <Col>{children}</Col>
        </Row>
      </Container>
    </main>
  );
}
