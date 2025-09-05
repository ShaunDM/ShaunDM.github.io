import { useOutletContext } from "react-router-dom";
import { Image, Col, Row } from "react-bootstrap";
import Links from "./Links";
import { getAssetTitle } from "../util/api.mjs";

export default function ContactMe() {
  const { assets } = useOutletContext();
  const functionEmail = () => {
    window.location = "mailto:smcra49@gmail.com";
    return false;
  };
  console.log(assets);

  return (
    <>
      <Row>
        <p>
          Thank you for showing interest in my website and myself. If you'd like
          to contact me or learn more there are some links down below.
        </p>
      </Row>
      <Row style={{ flexWrap: "nowrap" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            height: "80vh",
            marginLeft: "5rem",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {Object.entries(assets.links).map(([key, value]) => (
            <Links
              id={key}
              value={
                value.onClick ? { ...value, onClick: functionEmail } : value
              }
              title={getAssetTitle(key)}
            />
          ))}
        </Col>
        <Col
          xs={8}
          className="contact_me_image_container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={assets.image}
            style={{
              padding: 5,
              maxHeight: "80vh",
              maxWidth: "80%",
            }}
          />
        </Col>
      </Row>
    </>
  );
}
