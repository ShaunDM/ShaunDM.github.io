import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { ListGroup } from "react-bootstrap";
import SidebarCarousel from "./SidebarCarousel";
import SidebarList from "./SidebarList";
import SidebarMultipleLists from "./SidebarMultipleLists";

export default function Sidebar() {
  const { assets, path } = useContext(PropContext);
  let sidebar = null;
  const name = `toc_${path.substring(1)}`;

  switch (assets.sidebar.type) {
    case null:
      return null;
    case "list": {
      sidebar = <SidebarList />;
      break;
    }
    case "carousel": {
      sidebar = <SidebarCarousel />;
      break;
    }
    case "lists": {
      sidebar = <SidebarMultipleLists />;
      break;
    }
    case "calendar": {
      sidebar = "Needs doing.";
      break;
    }
    default: {
      new Error("Invalid sidebar type in Sidebar!");
    }
  }
  return (
    <ListGroup className="sidebar" id={name}>
      {sidebar}
    </ListGroup>
  );
}
