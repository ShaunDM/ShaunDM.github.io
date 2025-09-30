import { ListGroup, Col } from "react-bootstrap";
import Item from "./Item";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { getAssetTitle } from "../util/api.mjs";

export default function AlternatingListGroup({
  itemType,
  items,
  handleShowModal,
}) {
  const { assets } = useContext(PropContext);
  return Object.entries(items).map(([key, value], index) => {
    const title = getAssetTitle(key);
    return (
      <ListGroup.Item
        className={`alternating-list-group 
          ${index % 2 ? null : "alternating-list-group-reverse"}`}
        key={key}
        id={key}
      >
        <Col>
          <Item
            itemType={itemType}
            id={`${key}_${itemType}`}
            value={value}
            title={title}
            alt={title}
            handleShowModal={handleShowModal}
          />
        </Col>

        <Col
          id={`${key}_description_container`}
          className="alternating-list-group-description"
          style={{
            backgroundImage: "url(" + assets.icons[key] + ")",
          }}
        >
          <p name={`${key}_description`}>{assets.descriptions[key]}</p>
        </Col>
      </ListGroup.Item>
    );
  });
}
