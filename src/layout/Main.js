import MediaQuery from "react-responsive";
import { useContext } from "react";
import { PropContext } from "./PropContext";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import { convertPathToTitle } from "../util/api.mjs";

export default function Main({ children }) {
  //index is causing rerender need to fix.
  const { path } = useContext(PropContext);
  //had <main> element in place of empty brackets, but for some reason it interfered with mobile navigation.
  return (
    <main id="main" className="contain">
      <Row className="add-row-border contain">
        {path === "/" ? null : (
          <h2 style={{ padding: "1rem 0", margin: "0" }} className="contain">
            {convertPathToTitle(path)}
          </h2>
        )}
      </Row>
      <Row style={{ flexWrap: "nowrap" }} className="contain">
        {path === "/contact_me" || path === "/" ? (
          <Col className="contain">{children}</Col>
        ) : (
          <>
            <MediaQuery minWidth={992}>
              <Col xs={3}>
                <div className="sticky">
                  <Sidebar />
                </div>
              </Col>
            </MediaQuery>
            <Col lg={9} className="contain">
              {children}
            </Col>
          </>
        )}
      </Row>
    </main>
  );
}
