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
            height: "100vh",
            marginLeft: "5rem",
            alignContent: "space-around !important",
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
          style={{
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2021/07/24/22/59/document-6490538_1280.jpg"
            style={{
              justifySelf: "center",
              alignSelf: "center",
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
