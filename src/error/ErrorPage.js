import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
export default function ErrorPage({ error }) {
  return (
    <Container
      id="error-page"
      className="contr"
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        fontSize: "3em",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <Row style={{}}>
        <Button
          href={window.location.origin + "/#/"}
          className="nav-icon"
          style={{ position: "absolute", top: "5vh", left: "5vw" }}
          id={`nav_home`}
          onClick={(e) =>
            setTimeout(() => {
              window.location.reload();
            }, 0)
          }
        >
          <FontAwesomeIcon icon={faHouse} title={`Home`} size="4x" />
        </Button>
        <h2 style={{ fontSize: "3em", marginBottom: "1rem" }}>Oops!</h2>
      </Row>
      <Row>
        <p>An unexpected error has occurred.</p>
      </Row>
      <Row>
        <p>
          {error.cause || null}: {error.message}
        </p>
      </Row>
    </Container>
  );
}
