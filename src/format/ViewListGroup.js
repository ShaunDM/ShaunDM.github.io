import { ListGroup } from "react-bootstrap";
import Item from "./Item";
import { useOutletContext } from "react-router-dom";
import { getAssetTitle } from "../util/api.mjs";

export default function ViewListGroup({ itemType, items, handleShowModal }) {
  const { assets } = useOutletContext();
  return Object.entries(items).map(([key, value]) => {
    const title = getAssetTitle(key);
    const style = (itemType) =>
      itemType === "image" ? { height: "100%" } : null;
    return (
      <ListGroup.Item key={key} id={key} style={style(itemType)}>
        <Item
          itemType={itemType}
          id={`${key}_${itemType}`}
          value={value}
          title={title}
          alt={title}
          handleShowModal={handleShowModal}
        />
      </ListGroup.Item>
    );
  });
}
