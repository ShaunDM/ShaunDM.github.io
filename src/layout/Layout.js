import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Layout() {
  const { pathname } = window.location;
  const [index, setIndex] = useState(0);
  const [format, setFormat] = useState(true);
  const [assets, setAssets] = useState(loadMultipleFiles(pathname));
  const handleSelectIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSelectFormat = (selectedFormat) => {
    if (selectedFormat)
      setAssets({ ...assets, sidebar: { ...assets.sidebar, type: "list" } });
    else
      setAssets({
        ...assets,
        sidebar: { ...assets.sidebar, type: "carousel" },
      });
    setFormat(selectedFormat);
  };

  return (
    <Container
      fluid
      style={{ gap: "20px 10px", backgroundColor: "black", color: "white" }}
    >
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
              format: format,
              handleSelectFormat: handleSelectFormat,
            }}
          />
        </Main>
      </Row>
      <Row>
        <Footer />
      </Row>
      <ScrollToTop />
    </Container>
  );
}

export default Layout;
