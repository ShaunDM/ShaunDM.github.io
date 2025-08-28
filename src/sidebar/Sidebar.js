import SidebarCarousel from "./SidebarCarousel";
import SidebarList from "./SidebarList";
import SidebarDropdown from "./SidebarDropdown";
import { useOutletContext } from "react-router-dom";

export default function Sidebar({ assets, handleSelectIndex }) {
  switch (assets.sidebar.type) {
    case null:
      return null;
    case "list": {
      return <SidebarList assets={assets} />;
    }
    case "carousel": {
      return (
        <SidebarCarousel
          assets={assets}
          handleSelectIndex={handleSelectIndex}
        />
      );
    }
    case "dropdown": {
      return <SidebarDropdown assets={assets} />;
    }
    case "calendar": {
      return "Needs doing.";
    }
    default: {
      new Error("Invalid sidebar type in Sidebar!");
    }
  }
}
