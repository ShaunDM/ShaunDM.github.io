import { Row } from "react-bootstrap";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Header() {
  const headerAssets = loadMultipleFiles("header");
  return (
    <header id="header" className="contain">
      <Row className="header-banner contain">
        <div className="header-image-container contain">
          <div
            className="header-image contain"
            style={{
              backgroundImage: "url(" + headerAssets.banner + ")",
            }}
          >
            <h1
              className="contain"
              style={{ position: "static", opacity: "0" }}
            >
              {headerAssets.text.title}
            </h1>
          </div>
        </div>
        <h1 className="contain">{headerAssets.text.title}</h1>
      </Row>
    </header>
  );
}

export default Header;
