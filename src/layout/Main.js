import MediaQuery from "react-responsive";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import { convertPathToTitle } from "../util/api.mjs";

export default function Main({ children }) {
  //index is causing rerender need to fix.
  const { pathname } = window.location;
  return (
    <main>
      {pathname === "/" ? null : (
        <Row>
          <h2 style={{ margin: "0 0 1rem 1rem" }}>
            {convertPathToTitle(pathname)}
          </h2>
        </Row>
      )}
      <Row style={{ flexWrap: "nowrap" }}>
        {pathname === "/contact_me" || pathname === "/" ? null : (
          <MediaQuery minWidth={992}>
            <Col xs={3}>
              <div className="sticky">
                <Sidebar />
              </div>
            </Col>
          </MediaQuery>
        )}
        <Col>{children}</Col>
      </Row>
    </main>
  );
}
