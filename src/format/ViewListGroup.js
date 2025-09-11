import { ListGroup } from "react-bootstrap";
import Item from "./Item";
import { referenceAsset } from "../util/api.mjs";

export default function ViewListGroup({ itemType, items, handleShowModal }) {
  return Object.entries(items).map(([key, value]) => {
    const assetReference = referenceAsset(key);
    const { id, alt, title } = assetReference;
    const style = (itemType) =>
      itemType === "image" ? { height: "90vh", maxHeight: "100%" } : null;
    return (
      <ListGroup.Item key={id} id={id} style={style(itemType)}>
        <Item
          itemType={itemType}
          id={key}
          value={value}
          title={title}
          alt={alt}
          handleShowModal={handleShowModal}
        />
      </ListGroup.Item>
    );
  });
}
