import { useContext } from "react";
import { PropContext } from "./PropContext";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import Nav from "./Nav";
import { convertPathToTitle } from "../util/api.mjs";

//Renders Route Outlet (location.pathname) content, sidebar on non-mobile device, and navbar.
export default function Main({ children }) {
  const { path, isMobile } = useContext(PropContext);

  return (
    <main name="main" id="main" className="contain">
      <Row className={`contain ${isMobile ? "sticky" : null}`}>
        <Nav />
      </Row>
      <Row className="contain ">
        {path === "/" ? null : (
          <h2
            name="page title"
            style={{ padding: "1rem 0", margin: "0" }}
            className="contain"
          >
            {convertPathToTitle(path)}
          </h2>
        )}
      </Row>
      <Row style={{ flexWrap: "nowrap" }} className="contain">
        {path === "/contact_me" || path === "/" ? (
          <Col className="contain">{children}</Col>
        ) : (
          <>
            {isMobile ? null : (
              <Col xs={3}>
                <Sidebar />
              </Col>
            )}
            <Col lg={9} className="contain">
              {children}
            </Col>
          </>
        )}
      </Row>
    </main>
  );
}
