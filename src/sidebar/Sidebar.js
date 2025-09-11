import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { ListGroup } from "react-bootstrap";
import SidebarCarousel from "./SidebarCarousel";
import SidebarList from "./SidebarList";
import SidebarDropdown from "./SidebarDropdown";

export default function Sidebar() {
  const { assets } = useContext(PropContext);
  let sidebar = null;
  const name = `toc_${window.location.pathname.substring(1)}`;

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
    case "dropdown": {
      sidebar = <SidebarDropdown />;
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
    <aside className="sidebar-container">
      <ListGroup className="sidebar" id={name}>
        {sidebar}
      </ListGroup>
    </aside>
  );
}
