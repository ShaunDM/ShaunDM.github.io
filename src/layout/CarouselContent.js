import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ModalImage from "./ModalImage";

function CarouselContent({
  carousel,
  full,
  index,
  handleChange,
  handleSelect,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let carouselItems = [];

  for (const [key, value] of Object.entries(carousel)) {
    const alt =
      key.substring(0, key.lastIndexOf(".")).replace(/_/g, " ") || key;
    const id = key.substring(0, key.lastIndexOf(".")) || key;
    const fullKey = key.substring(0, key.lastIndexOf("_")) + ".png" || key;

    carouselItems.push(
      <Carousel.Item>
        <img
          id={id}
          className="d-block w-100"
          src={value}
          alt={alt}
          onClick={handleShow}
        />
        <ModalImage
          image={full[fullKey]}
          showModal={showModal}
          handleClose={handleClose}
        />
      </Carousel.Item>
    );
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      onChange={handleChange}
      pause={showModal}
    >
      {carouselItems}
    </Carousel>
  );
}

export default CarouselContent;
