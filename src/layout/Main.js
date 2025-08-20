import { Outlet } from "react-router-dom";
import { useState } from "react";
import loadMultipleFiles from "../util/loadMultipleFiles";
import MediaQuery from "react-responsive";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import { convertPathToTitle } from "../util/api.mjs";

export default function Main({ children, assets, handleSelectIndex }) {
  const { pathname } = window.location;

  //index is causing rerender need to fix.

  return (
    <main>
      <Row>
        <h2>{convertPathToTitle(pathname)}</h2>
      </Row>
      <Row>
        <MediaQuery minWidth={992}>
          <Col xs={3}>
            <div className="sticky">
              <Sidebar assets={assets} handleSelectIndex={handleSelectIndex} />
            </div>
          </Col>
        </MediaQuery>
        <Col>{children}</Col>
      </Row>
    </main>
  );
}
