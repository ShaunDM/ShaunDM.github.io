import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { Row } from "react-bootstrap";
import List from "../format/List";
import { checkURL } from "../util/api.mjs";

export default function Games() {
  const { assets } = useContext(PropContext);

  checkURL(assets.origin);

  let items = {};
  for (const [key, value] of Object.entries(assets.images)) {
    items[key] = {
      image: value,
      description: assets.card_descriptions[key],
      link: assets.links[key],
    };
  }

  return (
    <>
      <Row>
        <p>
          A list of video games I enjoy. Clicking the game will open a new tab
          to its steam store page.
        </p>
      </Row>
      <Row>
        <List itemType="card" items={items} />
      </Row>
    </>
  );
}
