import { emailFunction } from "../util/api.mjs";
import { getAssetTitle } from "../util/api.mjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Button } from "react-bootstrap";

export default function Links({ component = "ContactMe", assets }) {
  library.add(fas, far, fab);

  const varnt = component === "ContactMe" ? "dark" : "outline-light";

  return Object.entries(assets.links).map(([key, value]) => (
    <Button
      key={`link_${key}`}
      id={key}
      href={value.url}
      target={value.onClick ? null : "_blank"}
      variant={varnt}
      onClick={value.onClick ? emailFunction : null}
      className="icons"
    >
      {component === "ContactMe" ? (
        <Row style={{ flexWrap: "nowrap" }}>
          <Col>
            <FontAwesomeIcon icon={value.icon_name} className="fa-5x" />
          </Col>
          <Col style={{ justifyContent: "center", alignContent: "center" }}>
            <h2>{getAssetTitle(key)}</h2>
          </Col>
        </Row>
      ) : (
        <FontAwesomeIcon icon={value.icon_name} />
      )}
    </Button>
  ));
}
