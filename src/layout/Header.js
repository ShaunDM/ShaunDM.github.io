import { Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Header() {
  const headerAssets = loadMultipleFiles("header");
  return (
    <header id="header">
      <Row className="header-image-container">
        <h1
          style={{
            backgroundImage: "url(" + headerAssets.banner + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
          }}
        >
          {headerAssets.text.title}
        </h1>
      </Row>
      <Row
        style={{
          borderBottom: "2px solid #303030ff",
          borderTop: "2px solid #303030ff",
        }}
      >
        <Nav />
      </Row>
    </header>
  );
}

export default Header;
