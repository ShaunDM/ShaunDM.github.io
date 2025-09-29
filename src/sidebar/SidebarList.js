import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { ListGroup } from "react-bootstrap";
import { referenceAsset } from "../util/api";

export default function SidebarList({ list = undefined }) {
  const { assets, isMobile } = useContext(PropContext);
  let links = [];
  if (!list) {
    list = assets;
  }

  const clickHandler = (id) => {
    if (!isMobile) document.getElementById(id).scrollIntoView();
    //Offsets scroll to compensate for sticky navbar.
    else
      window.scrollTo(
        0,
        document.getElementById(id).offsetTop -
          document.getElementById("navbar").offsetHeight
      );
    document
      .getElementById(id)
      .parentNode.scrollTo(document.getElementById(id).offsetLeft, 0);
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
      >
        {title}
      </ListGroup.Item>
    );
  }

  return links;
}
