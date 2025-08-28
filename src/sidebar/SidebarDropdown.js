import { Accordion } from "react-bootstrap";
import { getAssetTitle } from "../util/api";
import SidebarList from "./SidebarList";

export default function SidebarDropdown({ assets }) {
  const eventKeyArray = (keys) => keys.map((key, index) => index);
  return (
    <Accordion defaultActiveKey={eventKeyArray(Object.keys(assets))} alwaysOpen>
      {Object.entries(assets).map(([key, value], index) => {
        if (key === "sidebar") return null;
        return (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{getAssetTitle(key)}</Accordion.Header>
            <Accordion.Body style={{ padding: 0 }}>
              <SidebarList
                assets={{
                  [key]: value,
                  sidebar: { src: key },
                }}
              />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
