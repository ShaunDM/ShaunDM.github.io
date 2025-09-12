import { useState } from "react";
import { PropContext } from "./PropContext";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import loadMultipleFiles from "../util/loadMultipleFiles";
import Test from "../test/Test";

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

  const footerStyle = pathname === "/" ? "position-bottom" : null;

  return (
    <PropContext.Provider
      value={{
        assets: assets,
        index: index,
        handleSelectIndex: handleSelectIndex,
        format: format,
        handleSelectFormat: handleSelectFormat,
      }}
    >
      <Container className="contr" fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Main>
            <Test />
          </Main>
        </Row>
        <Row className={footerStyle}>
          <Footer />
        </Row>
        <ScrollToTop />
      </Container>
    </PropContext.Provider>
  );
}

export default Layout;
