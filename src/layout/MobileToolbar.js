import { useContext } from "react";
import { PropContext } from "./PropContext";
import { useState } from "react";
import { OverlayTrigger, ListGroup, Tooltip } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar/Sidebar";

export default function MobileToolbar() {
  const { type } = useContext(PropContext).assets.sidebar;
  const [show, setShow] = useState(false);
  if (!type) {
    return null;
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFocus = (e) => e.target.blur();

  return (
    <>
      <OverlayTrigger overlay={<Tooltip id={`index_tooltip`}>Index</Tooltip>}>
        <ListGroup.Item
          id="nav_index"
          className="nav-icon-item"
          onClick={handleShow}
          onFocus={(e) => handleFocus(e)}
          action
        >
          <FontAwesomeIcon icon={faBars} title="Index" size="2x" />
        </ListGroup.Item>
      </OverlayTrigger>
      <Offcanvas show={show} onClick={handleClose} className="btn-close-light">
        <Offcanvas.Header closeButton className="btn-close-white" />
        <Sidebar />
      </Offcanvas>
    </>
  );
}
