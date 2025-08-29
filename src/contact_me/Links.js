import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Button } from "react-bootstrap";

export default function Links({ id, value, title }) {
  library.add(fas, far, fab);
  console.log(value);

  return (
    <Button
      id={id}
      href={value.url}
      target={value.onClick ? null : "_blank"}
      style={{
        width: "fit-content",
        borderColor: "rgba(255, 255, 0, 0)",
      }}
      variant="dark"
      onClick={value.onClick ? value.onClick : null}
    >
      <Row style={{ flexWrap: "nowrap", alignItems: "center", padding: 5 }}>
        <Col>
          <FontAwesomeIcon icon={value.icon_name} className="fa-5x" />
        </Col>
        <Col>
          <h2
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          >
            {title}
          </h2>
        </Col>
      </Row>
    </Button>
  );
}
