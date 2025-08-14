import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MediaQuery from "react-responsive";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import loadMultipleFiles from "../util/loadMultipleFiles";
import { convertPathToTitle } from "../util/api.mjs";

function Layout() {
  //index is causing rerender need to fix.
  const { pathname } = window.location;
  const [index, setIndex] = useState(0);
  const handleSelectIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const assets = loadMultipleFiles(pathname);

  return (
    <Container fluid>
      <Row>
        <Header index={index} handleSelectIndex={handleSelectIndex} />
      </Row>
      <Row>
        <Main
          title={convertPathToTitle(pathname)}
          assets={assets}
          handleSelectIndex={handleSelectIndex}
        >
          <Outlet context={[assets, index, handleSelectIndex]} />
        </Main>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
