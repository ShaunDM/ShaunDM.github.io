import Offcanvas from "react-bootstrap/Offcanvas";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";

//Renders offcanvas sidebar that navigates the page for mobile devices
export default function OffCanvasSidebar() {
  const { showOverlay, handleCloseOverlay } = useContext(PropContext);

  return (
    <Offcanvas
      name="mobile sidebar"
      id="mobile_sidebar"
      show={showOverlay}
      onHide={handleCloseOverlay}
      onClick={handleCloseOverlay}
      className="btn-close-light"
      backdrop="static"
    >
      <Offcanvas.Header closeButton className="btn-close-white" />
      <Sidebar />
    </Offcanvas>
  );
}
