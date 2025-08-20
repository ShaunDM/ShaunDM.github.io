import { ListGroup, Col } from "react-bootstrap";
import Item from "./Item";
import Description from "./Description";
import { useOutletContext } from "react-router-dom";
import { getAssetTitle } from "../util/api.mjs";

export default function ViewListGroup({ itemType, items, handleShowModal }) {
  const { assets } = useOutletContext();
  return Object.entries(items).map(([key, value], index) => {
    console.log(value);
    const title = getAssetTitle(key);
    return assets.descriptions ? (
      <ListGroup.Item
        className={index % 2 ? "flex" : "flex-direction-row-reverse"}
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
            backgroundColor: "rgba(255,255,255,0.6)",
          }}
        >
          <div>
            <Description src={assets.descriptions[key]} />
          </div>
        </Col>
      </ListGroup.Item>
    ) : (
      <ListGroup.Item key={key} id={key}>
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
