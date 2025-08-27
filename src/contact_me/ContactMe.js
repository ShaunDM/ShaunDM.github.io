import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Image, Col, Row, Button } from "react-bootstrap";

export default function ContactMe() {
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
          <Button
            id="linkedIn"
            title="Click to go to linked in profile"
            href="https://www.linkedin.com/in/shaun-mcrae-software-engineer/"
            target="_blank"
            style={{
              width: "fit-content",
              borderColor: "rgba(255, 255, 0, 0)",
            }}
            variant="outline-dark"
          >
            <Row
              style={{ flexWrap: "nowrap", alignItems: "center", padding: 5 }}
            >
              <Col>
                <FontAwesomeIcon icon={faLinkedin} className="fa-10x" />
              </Col>
              <Col>
                <h2
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  LinkedIn
                </h2>
              </Col>
            </Row>
          </Button>
          <Button
            id="github"
            title="Click to go to github profile"
            href="https://github.com/ShaunDM"
            style={{
              width: "fit-content",
              borderColor: "rgba(255, 255, 0, 0)",
            }}
            variant="outline-dark"
          >
            <Row
              style={{ alignItems: "center", padding: 5, flexWrap: "nowrap" }}
            >
              <Col>
                <FontAwesomeIcon icon={faGithub} className="fa-10x" />
              </Col>
              <Col>
                <h2
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  Github
                </h2>
              </Col>
            </Row>
          </Button>

          <Button
            id="email"
            title="Click to Email"
            href="#"
            style={{
              width: "fit-content",
              borderColor: "rgba(255, 255, 0, 0)",
            }}
            variant="outline-dark"
            onClick={() => {
              window.location = "mailto:smcra49@gmail.com";
              return false;
            }}
          >
            <Row style={{ alignItems: "center", padding: 5 }}>
              <Col>
                <FontAwesomeIcon icon={faEnvelope} className="fa-10x" />
              </Col>
              <Col>
                <h2
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  Email
                </h2>
              </Col>
            </Row>
          </Button>
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
