import { useOutletContext } from "react-router-dom";
import { Row } from "react-bootstrap";
import List from "../format/List";

export default function Games() {
  const { assets } = useOutletContext();
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
