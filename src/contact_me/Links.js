import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Button } from "react-bootstrap";

export default function Links({ id, value, title }) {
  library.add(fas, far, fab);

  return (
    <Button
      key={`link_${id}`}
      id={id}
      href={value.url}
      target={value.onClick ? null : "_blank"}
      variant="dark"
      onClick={value.onClick ? value.onClick : null}
    >
      <Row style={{ flexWrap: "nowrap" }}>
        <Col>
          <FontAwesomeIcon icon={value.icon_name} className="fa-5x" />
        </Col>
        <Col style={{ justifyContent: "center", alignContent: "center" }}>
          <h2>{title}</h2>
        </Col>
      </Row>
    </Button>
  );
}
