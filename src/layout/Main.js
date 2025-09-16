import MediaQuery from "react-responsive";
import { useContext } from "react";
import { PropContext } from "../PropContext";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import { convertPathToTitle } from "../util/api.mjs";

export default function Main({ children }) {
  //index is causing rerender need to fix.
  const { path } = useContext(PropContext);
  return (
    <main className="add-row-border">
      {path === "/" ? null : (
        <Row>
          <h2 style={{ margin: "0 0 1rem 1rem" }}>
            {convertPathToTitle(path)}
          </h2>
        </Row>
      )}
      <Row style={{ flexWrap: "nowrap" }}>
        {path === "/contact_me" || path === "/" ? null : (
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
