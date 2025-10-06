import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

//Button that scrolls to top of page when clicked.
export default function ScrollToTop() {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-scroll-to-top`}>Scroll to top</Tooltip>}
    >
      <Button
        id="scroll_to_top"
        name="scroll to top"
        variant="outline-light"
        onClick={() => document.getElementById("header").scrollIntoView()}
        className="scroll-to-top"
      >
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="fa-lg" />
      </Button>
    </OverlayTrigger>
  );
}
