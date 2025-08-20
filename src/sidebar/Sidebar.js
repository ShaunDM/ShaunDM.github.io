import SidebarCarousel from "./SidebarCarousel";
import SidebarList from "./SidebarList";
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
    case "calendar": {
      return "Needs doing.";
    }
    default: {
      new Error("Invalid sidebar type in Sidebar!");
    }
  }
}
