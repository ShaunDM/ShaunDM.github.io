import { useContext } from "react";
import { PropContext } from "./PropContext";
import { OverlayTrigger, ListGroup, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MobileToolbar() {
  const { handleFocus, handleShowOverlay, assets } = useContext(PropContext);
  if (!assets.sidebar.type) {
    return null;
  }

  return (
    <OverlayTrigger
      overlay={<Tooltip id={`index_tooltip`}>Index</Tooltip>}
      onFocus={(e) => handleFocus(e)}
    >
      <ListGroup.Item
        id="nav_index"
        className="nav-icon-item"
        onClick={(e) => handleShowOverlay(e)}
        onFocus={(e) => handleFocus(e)}
        action
      >
        <FontAwesomeIcon icon={faBars} title="Index" size="2x" />
      </ListGroup.Item>
    </OverlayTrigger>
  );
}
