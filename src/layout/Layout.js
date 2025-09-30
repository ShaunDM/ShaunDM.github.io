import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import OffcanvasSidebar from "../sidebar/OffcanvasSidebar";
import loadMultipleFiles from "../util/loadMultipleFiles";
import { PropContext } from "./PropContext";

//Formats layout for entire page and sets/holds variables/functions at the highest level.
function Layout() {
  const path = window.location.hash.substring(1);
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 767px)" });

  const [index, setIndex] = useState(0);
  const [format, setFormat] = useState(true);
  const [assets, setAssets] = useState(loadMultipleFiles(path));
  const [showOverlay, setShowOverlay] = useState(false);

  //function for navigating carousel.
  const handleSelectIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  //function that allows toggling between a list and carousel format
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

  //function that loads assets for the selectedPath. selectedPath is the pathname of Location object.
  const handleSelectPath = (selectedPath) => {
    setAssets(loadMultipleFiles(selectedPath));
  };

  //toggles offcanvas sidebar for mobile devices on.
  const handleShowOverlay = () => {
    setShowOverlay(true);
  };

  //toggles offcanvas sidebar for mobile devices off.
  const handleCloseOverlay = () => setShowOverlay(false);

  //When utilizing sidebar on a cellular phone, focus will cause window to scoll to Nav.js -> MobileToolbar.js instead of intended element, handleFocus prevents this.
  const handleFocus = (e) => {
    e.target.blur();
  };

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
        handleCloseOverlay: handleCloseOverlay,
        showOverlay: showOverlay,
        handleFocus: handleFocus,
        isMobile: isMobile,
        isTablet: isTablet,
      }}
    >
      <OffcanvasSidebar />
      <Container className="ctnr contain" fluid>
        {/*div below required to place footer on bottom of page when content < vh*/}
        <div>
          <Row className="contain">
            <Header />
          </Row>
          <Row className="contain">
            <Main>
              <Outlet />
            </Main>
          </Row>
        </div>
        <Row>
          <Footer />
        </Row>
        <ScrollToTop />
      </Container>
    </PropContext.Provider>
  );
}

export default Layout;
