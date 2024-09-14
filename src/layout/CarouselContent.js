import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ModalImage from "./ModalImage";
import { referenceAsset } from "../util/api";

function CarouselContent({
  thumbs,
  full,
  carouselIndex,
  handleSelectCarouselIndex,
  handleChange,
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const urlPath = window.location.pathname.substring(1);

  const handleClose = () => {
    setShowModal(false);
    setModalContent(null);
  };
  const handleShow = (id) => {
    setShowModal(true);
    const fullKey = id.substring(0, id.lastIndexOf("_")) || id;
    setModalContent(full[fullKey]);
  };

  let items = [];
  let indicators = [];

  for (const [key, value] of Object.entries(thumbs)) {
    const assetReference = referenceAsset(key);
    const { id, alt } = assetReference;
    indicators.push(id);

    items.push(
      <Carousel.Item key={id}>
        <div className="carouselItem">
          <img
            id={id}
            className="carouselImage"
            src={value}
            alt={alt}
            onClick={() => handleShow(id)}
          />
        </div>
      </Carousel.Item>
    );
  }

  return (
    <>
      <Carousel
        activeIndex={carouselIndex}
        onSelect={handleSelectCarouselIndex}
        onChange={handleChange}
        name={urlPath}
        id={urlPath}
        interval={showModal ? null : "3000"}
        pause={false}
        indicatorLabels={indicators}
      >
        {items}
      </Carousel>
      <ModalImage
        content={modalContent}
        showModal={showModal}
        handleClose={handleClose}
      />
    </>
  );
}

export default CarouselContent;
