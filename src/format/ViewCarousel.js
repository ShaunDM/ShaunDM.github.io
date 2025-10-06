import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { referenceAsset } from "../util/api.mjs";
import { Carousel } from "react-bootstrap";
import Item from "./Item";
import ContentLoading from "../layout/ContentLoading";

/*
Renders a carousel of items supplied by the page's assets in src/assets/*. 

-itemType: string, is decided by the page being rendered from src/pages/* and chooses which switch case is rendered. 
-items: object, is an object containing all files for the page's list being rendered, sourced from its asset folder in src/assets/*.
-itemType: string, is decided by the page being rendered from src/pages/* and chooses which switch case is rendered. 
-handleShowModal: function, is conditional for rendering modals, utilized in ./Item.js.
-showModal: string, state variable based on the id of a modal if it is shown, null if not. Used in this instance to prevent carousel from sliding to next slide.
*/
export default function ViewCarousel({
  itemType,
  items,
  handleShowModal,
  showModal,
}) {
  const { index, handleSelectIndex, path } = useContext(PropContext);

  if (!items) return <ContentLoading />;

  const urlPath = path.substring(1);

  let carouselItems = [];

  for (const [key, value] of Object.entries(items)) {
    const assetReference = referenceAsset(key);
    const { id, alt, title } = assetReference;
    carouselItems.push(
      <Carousel.Item
        key={id}
        className="pointer-on-hover image-container-carousel"
      >
        <Item
          itemType={itemType}
          id={key}
          value={value}
          title={title}
          alt={alt}
          handleShowModal={handleShowModal}
        />
      </Carousel.Item>
    );
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelectIndex}
      name={`${urlPath}_carousel`}
      id={`${urlPath}_carousel`}
      interval={showModal ? null : "3000"}
      indicatorLabels={Object.keys(items)}
      pause="false"
      style={{
        backgroundColor: "black",
      }}
    >
      {carouselItems}
    </Carousel>
  );
}
