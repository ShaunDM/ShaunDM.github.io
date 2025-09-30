import { ListGroup } from "react-bootstrap";
import Item from "./Item";
import { referenceAsset } from "../util/api.mjs";

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
