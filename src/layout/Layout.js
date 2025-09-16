import { useState, useEffect, useRef } from "react";
import { PropContext } from "./PropContext";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Layout() {
  const [path, setPath] = useState(window.location.hash.substring(1));
  const [index, setIndex] = useState(0);
  const [format, setFormat] = useState(true);
  const assets = useRef(loadMultipleFiles(path));
  const handleSelectIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSelectFormat = (selectedFormat) => {
    if (selectedFormat)
      assets.current = {
        ...assets,
        sidebar: { ...assets.sidebar, type: "list" },
      };
    else
      assets.current = {
        ...assets,
        sidebar: { ...assets.sidebar, type: "carousel" },
      };
    setFormat(selectedFormat);
  };

  const handleSelectPath = (selectedPath) => {
    setPath(selectedPath);
  };

  useEffect(() => {
    function getAssets() {
      assets.current = loadMultipleFiles(path);
    }

    getAssets();
  }, [assets, path]);

  if (assets.current.origin !== path.substring(1)) {
    window.location.reload();
  }

  console.log(path, assets, "Fix attempt: 11");

  const footerStyle = path === "/" ? "position-bottom" : null;

  return (
    <PropContext.Provider
      value={{
        assets: assets.current,
        index: index,
        handleSelectIndex: handleSelectIndex,
        format: format,
        handleSelectFormat: handleSelectFormat,
        path: path,
        handleSelectPath: handleSelectPath,
      }}
    >
      <Container className="contr" fluid>
        <Row>
          <Header />
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
