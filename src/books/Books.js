import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { Button, Row } from "react-bootstrap";
import ViewCarousel from "../format/ViewCarousel";
import List from "../format/List";

export default function Books() {
  const { assets, format, handleSelectFormat } = useContext(PropContext);

  return (
    <>
      <Row>
        <p>
          A list of books I enjoy. Click the book to open a modal with a
          personal description. Originally, this was formatted as a carousel and
          I spent longer than I care to admit to get it somewhat functional,
          only to realize it'll probably look better as a horizontal list. To
          make myself feel better, I put in a button that will let you switch
          between the formats.
        </p>
        <Button
          variant="dark"
          onClick={() => handleSelectFormat(!format)}
          style={{ justifySelf: "end" }}
        >
          {format ? "List" : "Carousel"}
        </Button>
      </Row>
      <Row>
        {format ? (
          <List
            listType="horizontal"
            itemType="image"
            items={assets.items}
            modalType="image"
            modals={assets.modals}
          />
        ) : (
          <ViewCarousel
            itemType="image_carousel"
            modalType="image"
            items={assets.items}
            modals={assets.modals}
          />
        )}
      </Row>
    </>
  );
}
