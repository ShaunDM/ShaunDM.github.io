import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { Button, Row } from "react-bootstrap";
import ViewCarousel from "../format/ViewCarousel";
import List from "../format/List";
import { checkURL } from "../util/api.mjs";

export default function Books() {
  const { assets, format, handleSelectFormat, isMobile } =
    useContext(PropContext);

  const type = isMobile ? "standard" : "horizontal";

  checkURL(assets.origin);

  return (
    <>
      <Row>
        <p name="page description" id="page_description">
          A list of books I enjoy. Click the book to open a modal with a
          personal description. Originally, this was formatted as a carousel and
          I spent longer than I care to admit to get it somewhat functional,
          only to realize it'll probably look better as a list. To make myself
          feel better, I put in a button that will let you switch between the
          formats.
        </p>
        <Button
          name="toggle format"
          id="toggle_format_btn"
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
            listType={`${type}`}
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
