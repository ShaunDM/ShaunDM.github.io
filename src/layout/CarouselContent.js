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
  const [modalContent, setModalContent] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (id) => {
    setShowModal(true);
    const fullKey = id.substring(0, id.lastIndexOf("_")) + ".png" || id;
    setModalContent(full[fullKey]);
  };

  let items = [];
  let indicators = [];

  for (const [key, value] of Object.entries(carousel)) {
    const alt =
      key.substring(0, key.lastIndexOf(".")).replace(/_/g, " ") || key;
    const id = key.substring(0, key.lastIndexOf(".")) || key;

    items.push(
      <div class="carousel-item" key={id}>
        <img
          id={id}
          className="d-block w-100"
          src={value}
          alt={alt}
          onClick={() => handleShow(id)}
        />
      </div>

      // <Carousel.Item key={id}>
      //   <img
      //     id={id}
      //     className="d-block w-100"
      //     src={value}
      //     alt={alt}
      //     onClick={() => handleShow(id)}
      //   />
      //   <ModalImage
      //     content={modalContent}
      //     showModal={showModal}
      //     handleClose={handleClose}
      //   />
      // </Carousel.Item>
    );

    indicators.push(
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
    );
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      onChange={handleChange}
      pause={showModal}
    >
      {items}
    </Carousel>
  );
}

export default CarouselContent;
