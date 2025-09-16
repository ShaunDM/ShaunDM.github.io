import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { getAssetTitle } from "../util/api.mjs";
import { Row } from "react-bootstrap";
import List from "../format/List";

export default function Portfolio() {
  const { assets } = useContext(PropContext);
  return Object.entries(assets).map(([key, value]) => {
    if (key === "sidebar") return null;
    const itemType = (dir) => (dir.includes("projects") ? "card" : "image");
    return (
      <>
        <Row>
          <h4>{getAssetTitle(key)}</h4>
        </Row>
        <Row>
          <List
            listType="horizontal"
            lists={Object.keys(assets).length - 1}
            itemType={itemType(key)}
            items={value}
          />
        </Row>
      </>
    );
  });
}
