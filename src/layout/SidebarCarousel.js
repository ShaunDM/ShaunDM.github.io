import React from "react";
import { ListGroup } from "react-bootstrap";
import { referenceAsset } from "../util/api";

export default function SidebarCarousel({ assets, handleSelectCarouselIndex }) {
  let links = [];
  const name = `toc_${window.location.pathname.substring(1)}`;

  for (const [key] of Object.entries(assets)) {
    const assetReference = referenceAsset(key);
    const { id, title } = assetReference;
    const slideTo = links.length;

    links.push(
      <ListGroup.Item
        key={`${id}_toc`}
        id={`${name}_${id}`}
        className="tocItem"
        aria-label={id}
        action
        onClick={() => handleSelectCarouselIndex(slideTo)}
      >
        {title}
      </ListGroup.Item>
    );
  }

  return (
    <aside>
      <ListGroup className="toc" id={name}>
        {links}
      </ListGroup>
    </aside>
  );
}
