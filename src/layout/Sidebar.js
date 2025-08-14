import SidebarCarousel from "./SidebarCarousel";
import SidebarList from "./SidebarList";

export default function Sidebar({ assets, handleSelectIndex }) {
  const { sidebar } = assets;
  switch (sidebar.type) {
    case "none": {
      return;
    }
    case "list": {
      return <SidebarList list={assets[sidebar.src]} />;
    }
    case "carousel": {
      return (
        <SidebarCarousel
          carouselItems={assets[sidebar.src]}
          handleSelectIndex={handleSelectIndex}
        />
      );
    }
    case "calendar": {
      return "Needs doing.";
    }
    default: {
      new Error("Something went wrong with the sidebar!");
    }
  }
}
