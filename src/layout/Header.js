import { Row } from "react-bootstrap";
import Nav from "./Nav";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Header() {
  const headerAssets = loadMultipleFiles("header");
  return (
    <header id="header">
      <Row>
        <div className="header-image-container">
          <div
            className="header-image"
            style={{
              backgroundImage: "url(" + headerAssets.banner + ")",
            }}
          />
        </div>
        <h1>{headerAssets.text.title}</h1>
      </Row>
      <Row className="add-row-border">
        <Nav />
      </Row>
    </header>
  );
}

export default Header;
