import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ModalImage from "./ModalImage";
import { referenceAsset } from "../util/api";

export default function CarouselContent({
  thumbs,
  full,
  index,
  handleSelectIndex,
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const urlPath = window.location.pathname.substring(1);

  const handleClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleShow = (id) => {
    setShowModal(id);
    //removes "_poster" from file_name
    setModalContent(full[id.substring(0, id.lastIndexOf("_"))]);
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
        activeIndex={index}
        onSelect={handleSelectIndex}
        name={urlPath}
        id={urlPath}
        interval={showModal ? null : "3000"}
        pause={false}
        indicatorLabels={indicators}
      >
        {items}
      </Carousel>
      <ModalImage
        id={showModal}
        content={modalContent}
        showModal={showModal}
        handleClose={handleClose}
      />
    </>
  );
}
