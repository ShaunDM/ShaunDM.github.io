import { useContext } from "react";
import { PropContext } from "./PropContext";
import { Row } from "react-bootstrap";
import loadMultipleFiles from "../util/loadMultipleFiles";

//renders header, static throughout all routes.
function Header() {
  const headerAssets = loadMultipleFiles("header");

  return (
    <header name="header" id="header" className="contain">
      <Row className="header-banner contain">
        <div className="header-image-container contain">
          <div
            className="header-image contain"
            style={{ backgroundImage: "url(" + headerAssets.banner + ")" }}
          >
            <h1
              aria-hidden="true"
              className="contain"
              style={{ position: "static", opacity: "0" }}
            >
              {headerAssets.text.title}
            </h1>
          </div>
        </div>
        <h1 name="site title" className="contain">
          {headerAssets.text.title}
        </h1>
      </Row>
    </header>
  );
}

export default Header;
