import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { ListGroup } from "react-bootstrap";
import { getAssetTitle } from "../util/api";
import SidebarList from "./SidebarList";

export default function SidebarDropdown() {
  const { assets } = useContext(PropContext);

  return (
    <ListGroup className="sidebar">
      {Object.entries(assets).map(([key, value]) => {
        if (key === "sidebar" || key === "origin") return null;
        return (
          <ListGroup.Item className="sidebar-header" key={key}>
            <h4>{getAssetTitle(key)}</h4>
            <ListGroup style={{ padding: 0 }}>
              <SidebarList
                list={{
                  [key]: value,
                  sidebar: { src: key },
                }}
              />
            </ListGroup>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
