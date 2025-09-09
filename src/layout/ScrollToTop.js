import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function ScrollToTop() {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-scroll-to-top`}>Scroll to top</Tooltip>}
    >
      <Button
        variant="outline-light"
        href="#header"
        style={{
          display: "block",
          position: "fixed",
          bottom: "5vh",
          right: "5vw",
          opacity: "50%",
        }}
      >
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="fa-lg" />
      </Button>
    </OverlayTrigger>
  );
}
