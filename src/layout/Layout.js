import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Layout() {
  const { pathname } = window.location;
  const [index, setIndex] = useState(0);
  const assets = loadMultipleFiles(pathname);
  const handleSelectIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Main assets={assets} handleSelectIndex={handleSelectIndex}>
          <Outlet
            context={{
              assets: assets,
              index: index,
              handleSelectIndex: handleSelectIndex,
            }}
          />
        </Main>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
