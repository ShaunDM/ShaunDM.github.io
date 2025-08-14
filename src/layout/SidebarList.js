import { ListGroup } from "react-bootstrap";
import { referenceAsset } from "../util/api";

export default function SidebarList({ list }) {
  let links = [];
  console.log(list);

  for (const [key] of Object.entries(list)) {
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
