import { useContext } from "react";
import { PropContext } from "../PropContext";
import { Image, Col, Row } from "react-bootstrap";
import Links from "../layout/Links";

export default function ContactMe() {
  const { assets } = useContext(PropContext);

  return (
    <>
      <Row>
        <p>
          Thank you for showing interest in my website and myself. If you'd like
          to contact me or learn more there are some links down below.
        </p>
      </Row>
      <Row style={{ flexWrap: "nowrap" }}>
        <Col className="contact-me">
          <Links assets={assets} />
        </Col>
        <Col xs={8} className="contact-me-image-container">
          <Image src={assets.image} className="contact-me-image" />
        </Col>
      </Row>
    </>
  );
}
