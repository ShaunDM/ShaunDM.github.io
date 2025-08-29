import { ListGroup } from "react-bootstrap";
import SidebarCarousel from "./SidebarCarousel";
import SidebarList from "./SidebarList";
import SidebarDropdown from "./SidebarDropdown";

export default function Sidebar({ assets, handleSelectIndex }) {
  let sidebar = null;
  const name = `toc_${window.location.pathname.substring(1)}`;

  switch (assets.sidebar.type) {
    case null:
      return null;
    case "list": {
      sidebar = <SidebarList assets={assets} />;
      break;
    }
    case "carousel": {
      sidebar = (
        <SidebarCarousel
          assets={assets}
          handleSelectIndex={handleSelectIndex}
        />
      );
      break;
    }
    case "dropdown": {
      sidebar = <SidebarDropdown assets={assets} />;
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
    <aside>
      <ListGroup className="toc" id={name}>
        {sidebar}
      </ListGroup>
    </aside>
  );
}
