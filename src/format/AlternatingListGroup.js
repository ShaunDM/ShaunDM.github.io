import { ListGroup, Col } from "react-bootstrap";
import Item from "./Item";
import Description from "./Description";
import { useOutletContext } from "react-router-dom";
import { getAssetTitle } from "../util/api.mjs";

export default function AlternatingListGroup({
  itemType,
  items,
  handleShowModal,
}) {
  const { assets } = useOutletContext();
  return Object.entries(items).map(([key, value], index) => {
    const title = getAssetTitle(key);
    return (
      <ListGroup.Item
        className={
          index % 2
            ? "alternatingListGroup"
            : "alternatingListGroup alternatingListGroupReverse"
        }
        key={key}
        id={key}
        style={{
          backgroundColor: "#282c34",
          color: "white",
          borderColor: "#1c1e20",
        }}
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
          <div>
            <Description src={assets.descriptions[key]} />
          </div>
        </Col>
      </ListGroup.Item>
    );
  });
}
