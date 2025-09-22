import { useState } from "react";
import { PropContext } from "./PropContext";
import { Outlet } from "react-router-dom";
import { Container, Row, Offcanvas } from "react-bootstrap";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import Sidebar from "../sidebar/Sidebar";
import Hit from "./Hit";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Layout() {
  const path = window.location.hash.substring(1);

  const [index, setIndex] = useState(0);
  const [format, setFormat] = useState(true);
  const [assets, setAssets] = useState(loadMultipleFiles(path));
  const [showOverlay, setShowOverlay] = useState(false);
  //variable used in devolpment to find if an event was fired on mobile.
  const [hit, setHit] = useState(false);

  const handleSelectIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSelectFormat = (selectedFormat) => {
    if (selectedFormat)
      setAssets({
        ...assets,
        sidebar: { ...assets.sidebar, type: "list" },
      });
    else
      setAssets({
        ...assets,
        sidebar: { ...assets.sidebar, type: "carousel" },
      });
    setFormat(selectedFormat);
  };

  const handleSelectPath = (selectedPath) => {
    setAssets(loadMultipleFiles(selectedPath));
  };

  const handleShowOverlay = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => setShowOverlay(false);

  const handleFocus = (e) => {
    e.target.blur();
  };

  const handleHit = () => setHit(!hit);

  const footerStyle = path === "/" ? "position-bottom" : null;

  return (
    <PropContext.Provider
      value={{
        assets: assets,
        index: index,
        handleSelectIndex: handleSelectIndex,
        format: format,
        handleSelectFormat: handleSelectFormat,
        path: path,
        handleSelectPath: handleSelectPath,
        handleShowOverlay: handleShowOverlay,
        handleFocus: handleFocus,
        hit: hit,
        handleHit: handleHit,
      }}
    >
      <Offcanvas
        id="mobile_sidebar"
        show={showOverlay}
        onHide={handleCloseOverlay}
        onClick={handleCloseOverlay}
        className="btn-close-light"
        backdrop="static"
      >
        <Offcanvas.Header closeButton className="btn-close-white" />
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
      <Container className="ctnr" fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Hit />
        </Row>
        <Row>
          <Main>
            <Outlet />
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
