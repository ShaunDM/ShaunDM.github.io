import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { ListGroup } from "react-bootstrap";
import CarouselSidebar from "./CarouselSidebar";
import ListSidebar from "./ListSidebar";
import MultipleListsSidebar from "./MultipleListsSidebar";

//Chooses sidebar type
export default function Sidebar() {
  const { assets, path } = useContext(PropContext);
  let sidebar = null;
  const name = `toc_${path.substring(1)}`;

  switch (assets.sidebar.type) {
    case null:
      return null;
    case "list": {
      sidebar = <ListSidebar />;
      break;
    }
    case "carousel": {
      sidebar = <CarouselSidebar />;
      break;
    }
    case "lists": {
      sidebar = <MultipleListsSidebar />;
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
    <ListGroup name="sidebar" className="sidebar sticky" id={name}>
      {sidebar}
    </ListGroup>
  );
}
