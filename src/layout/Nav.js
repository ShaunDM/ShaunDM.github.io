import { useContext } from "react";
import { PropContext } from "./PropContext";
import { ListGroup } from "react-bootstrap";
import MobileToolbar from "./MobileToolbar";
import Navbar from "./Navbar";

//renders nav element
export default function Nav() {
  const { isMobile } = useContext(PropContext);
  return (
    <nav name="nav" id="nav">
      <ListGroup id="navbar" name="navbar" className="navbar" horizontal>
        {isMobile ? <MobileToolbar /> : null}
        <Navbar />
      </ListGroup>
    </nav>
  );
}
