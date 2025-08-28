import { useOutletContext } from "react-router-dom";
import { getAssetTitle } from "../util/api.mjs";
import { Row } from "react-bootstrap";
import List from "../format/List";

export default function Portfolio() {
  const { assets } = useOutletContext();
  console.log(assets);
  return Object.entries(assets).map(([key, value]) => {
    if (key === "sidebar") return null;
    const itemType = (dir) => (dir.includes("projects") ? "card" : "image");
    return (
      <>
        <Row>
          <h2>{getAssetTitle(key)}</h2>
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
