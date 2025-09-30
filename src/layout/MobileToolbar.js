import { useContext } from "react";
import { PropContext } from "./PropContext";
import { OverlayTrigger, ListGroup, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//renders MobileToolbar.js as part of the Navbar.js. Toggles sidebar on mobile devices, not shown on desktop.
export default function MobileToolbar() {
  const { handleFocus, handleShowOverlay, assets, isTablet } =
    useContext(PropContext);
  if (!assets.sidebar.type) {
    return null;
  }

  return (
    <OverlayTrigger
      overlay={<Tooltip id={`index_tooltip`}>Index</Tooltip>}
      onFocus={(e) => handleFocus(e)}
    >
      <ListGroup.Item
        name="toggle sidebar"
        id="nav_index"
        className="nav-icon"
        onClick={(e) => handleShowOverlay(e)}
        onFocus={(e) => handleFocus(e)}
        action
      >
        <FontAwesomeIcon
          icon={faBars}
          title="Index"
          size={isTablet ? ".5x" : "2x"}
        />
      </ListGroup.Item>
    </OverlayTrigger>
  );
}
