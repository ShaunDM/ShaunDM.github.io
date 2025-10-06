import { ListGroup } from "react-bootstrap";
import Item from "./Item";
import { referenceAsset } from "../util/api.mjs";

/*
Renders a list group.

-itemType: string, is decided by the page being rendered from src/pages/* and effects a switch statement in ./Item.js
-items: object, is an object containing all files for the page's list being rendered, sourced from its asset folder in src/assets/*.
-handleShowModal: function, is conditional for rendering modals, utilized in ./Item.js.
*/
export default function ViewListGroup({ itemType, items, handleShowModal }) {
  return Object.entries(items).map(([key, value]) => {
    const assetReference = referenceAsset(key);
    const { id, alt, title } = assetReference;
    return (
      <ListGroup.Item
        key={id}
        id={`${id}_container`}
        style={{ alignContent: "center" }}
      >
        <Item
          itemType={itemType}
          id={id}
          value={value}
          title={title}
          alt={alt}
          handleShowModal={handleShowModal}
        />
      </ListGroup.Item>
    );
  });
}
