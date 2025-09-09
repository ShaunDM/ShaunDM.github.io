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

  for (const [key] of Object.entries(list[list.sidebar.src])) {
    const assetReference = referenceAsset(key);
    const { id, title } = assetReference;

    links.push(
      <ListGroup.Item
        href={`#${id}`}
        key={`${id}_toc`}
        id={`${id}_toc`}
        className="tocItem"
        aria-label={title}
        action
        active={false}
      >
        {title}
      </ListGroup.Item>
    );
  }

  return links;
}
