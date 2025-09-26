import { Row } from "react-bootstrap";
import Nav from "./Nav";
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
            {/*Used to make sure the banner doesn't cut partway through <h1> */}
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
      {/*To do: get sticky working, probably not working due to ancestor overflow needing to be set to visible*/}
      <Row className="add-row-border contain">
        <Nav />
      </Row>
    </header>
  );
}

export default Header;
