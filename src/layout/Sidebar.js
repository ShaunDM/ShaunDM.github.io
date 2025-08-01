import React from "react";
import { ListGroup } from "react-bootstrap";
import { referenceAsset } from "../util/api";

export default function Sidebar({ assets }) {
  let links = [];

  for (const [key] of Object.entries(assets)) {
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
      >
        {title}
      </ListGroup.Item>
    );
  }

  return (
    <aside>
      <ListGroup className="toc">{links}</ListGroup>
    </aside>
  );
}
