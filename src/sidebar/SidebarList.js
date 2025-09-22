import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { ListGroup } from "react-bootstrap";
import { referenceAsset } from "../util/api";

export default function SidebarList({ list = undefined }) {
  const { assets } = useContext(PropContext);
  let links = [];
  if (!list) {
    list = assets;
  }

  const clickHandler = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  for (const [key] of Object.entries(list[list.sidebar.src])) {
    const assetReference = referenceAsset(key);
    const { id, title } = assetReference;

    links.push(
      <ListGroup.Item
        onClick={() => clickHandler(id)}
        key={`${id}_toc`}
        id={`${id}_toc`}
        className="sidebar-item"
        aria-label={title}
        action
        active={false}
        style={{
          zIndex: "9999",
        }}
      >
        {title}
      </ListGroup.Item>
    );
  }

  return links;
}
