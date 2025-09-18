import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { getAssetTitle } from "../util/api.mjs";
import { Row } from "react-bootstrap";
import List from "../format/List";
import { checkURL } from "../util/api.mjs";

export default function Portfolio() {
  const { assets } = useContext(PropContext);
  checkURL(assets.origin);

  return Object.entries(assets).map(([key, value]) => {
    if (key === "sidebar" || key === "origin") return null;
    const itemType = (dir) => (dir.includes("projects") ? "card" : "image");
    return (
      <div key={key}>
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
      </div>
    );
  });
}
