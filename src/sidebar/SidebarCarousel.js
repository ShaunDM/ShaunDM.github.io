import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { ListGroup } from "react-bootstrap";
import { referenceAsset } from "../util/api";

export default function SidebarCarousel() {
  const { assets, handleSelectIndex, path } = useContext(PropContext);
  let links = [];
  const name = `toc_${path.substring(1)}`;
  for (const [key] of Object.entries(assets[assets.sidebar.src])) {
    const assetReference = referenceAsset(key);
    const { id, title } = assetReference;
    const slideTo = links.length;

    links.push(
      <ListGroup.Item
        key={`${id}_toc`}
        id={`${name}_${id}`}
        className="sidebar-item"
        aria-label={id}
        action
        onClick={() => handleSelectIndex(slideTo)}
      >
        {title}
      </ListGroup.Item>
    );
  }

  return links;
}
