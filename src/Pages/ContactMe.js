import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { Image, Col, Row } from "react-bootstrap";
import Links from "../assets/Links";
import { checkURL } from "../util/api.mjs";

export default function ContactMe() {
  const { assets, isMobile } = useContext(PropContext);
  checkURL(assets.origin);

  return (
    <>
      <Row>
        <p name="page description" id="page_description">
          Thank you for showing interest in my website and myself. If you'd like
          to contact me or learn more there are some links down below.
        </p>
      </Row>
      <Row style={{ flexWrap: "nowrap", justifyContent: "space-evenly" }}>
        <Col className="contact-me">
          <Links assets={assets} />
        </Col>
        {isMobile ? null : (
          <Col xs={8} className="contact-me-image-container">
            <Image
              src={assets.image}
              className="contact-me-image"
              alt="background pic"
            />
          </Col>
        )}
      </Row>
    </>
  );
}
