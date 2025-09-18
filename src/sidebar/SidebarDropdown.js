import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { Accordion, ListGroup } from "react-bootstrap";
import { getAssetTitle } from "../util/api";
import SidebarList from "./SidebarList";

export default function SidebarDropdown() {
  const { assets } = useContext(PropContext);
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const eventKeyArray = (keys) =>
    isMobile ? null : keys.map((key, index) => index);
  return (
    <ListGroup className="sidebar">
      {Object.entries(assets).map(([key, value], index) => {
        if (key === "sidebar" || key === "origin") return null;
        return (
          <ListGroup.Item className="sidebar-header" eventKey={index}>
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
