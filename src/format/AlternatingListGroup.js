import { ListGroup, Col } from "react-bootstrap";
import Item from "./Item";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { getAssetTitle } from "../util/api.mjs";

/* 
Renders an alternating list group. Only used on viewports that do not pass isMobile variable in src/layout/Layout.js.

-itemType: string, is decided by the page being rendered from src/pages/* and effects a switch statement in ./Item.js
-items: object, is an object containing all files for the page's list being rendered, sourced from its asset folder in src/assets/*.
-handleShowModal: function, is conditional for rendering modals, utilized in ./Item.js.
*/
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
