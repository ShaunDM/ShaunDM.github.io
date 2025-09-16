import { ListGroup, Col } from "react-bootstrap";
import Item from "./Item";
import { useContext } from "react";
import { PropContext } from "../PropContext";
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
        className={
          index % 2
            ? "alternating-list-group"
            : "alternating-list-group alternating-list-group-reverse"
        }
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
          style={{
            backgroundImage: "url(" + assets.icons[key] + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "lighten",
          }}
        >
          <div>{assets.descriptions[key]}</div>
        </Col>
      </ListGroup.Item>
    );
  });
}
