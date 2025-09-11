import MediaQuery from "react-responsive";
import { ListGroup } from "react-bootstrap";
import MobileToolbar from "./MobileToolbar";
import Navbar from "./Navbar";

export default function Nav() {
  return (
    <ListGroup name="navbar" className="navbar" horizontal>
      <MediaQuery maxWidth={991}>
        <MobileToolbar />
      </MediaQuery>
      <Navbar />
    </ListGroup>
  );
}
