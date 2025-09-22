import { Row } from "react-bootstrap";
import Nav from "./Nav";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Header() {
  const headerAssets = loadMultipleFiles("header");
  return (
    <header id="header">
      <Row className="header-banner">
        <div className="header-image-container">
          <div
            className="header-image"
            style={{
              backgroundImage: "url(" + headerAssets.banner + ")",
            }}
          />
          {/*Used to make sure the banner doesn't cut partway through <h1> */}
          <h1 style={{ position: "static", opacity: "0" }}>
            {headerAssets.text.title}
          </h1>
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
