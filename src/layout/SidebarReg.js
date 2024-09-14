import React from "react";
import { ListGroup } from "react-bootstrap";
import { referenceAsset } from "../util/api";

export default function SidebarReg({ assets }) {
  let links = [];

  for (const [key] of Object.entries(assets)) {
    const assetReference = referenceAsset(key);
    const { id, title } = assetReference;

    links.push(
      <li key={`${id}_toc`} id={`${id}_toc`} className="toc_item">
        <ListGroup.Item action href={`#${id}`} className="toc_link">
          {title}
        </ListGroup.Item>
      </li>
    );
  }

  return (
    <aside>
      <ListGroup className="toc">
        <ul>{links}</ul>
      </ListGroup>
    </aside>
  );
}
