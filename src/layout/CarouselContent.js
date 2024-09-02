import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ModalImage from "./ModalImage";
import RenderTooltip from "../util/RenderToolTip";

function CarouselContent({ thumbs, full, index, handleChange, handleSelect }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const urlPath = window.location.pathname.substring(1);

  const handleClose = () => setShowModal(false);
  const handleShow = (id) => {
    setShowModal(true);
    const fullKey = id.substring(0, id.lastIndexOf("_")) + ".png" || id;
    setModalContent(full[fullKey]);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click Me!
    </Tooltip>
  );

  let items = [];
  let indicators = [];

  for (const [key, value] of Object.entries(thumbs)) {
    const alt =
      key.substring(0, key.lastIndexOf(".")).replace(/_/g, " ") || key;
    const id = key.substring(0, key.lastIndexOf(".")) || key;

    items.push(
      <Carousel.Item key={id} margin="0">
        <div className="slideContent">
          <img
            id={id}
            className="slideImage"
            src={value}
            alt={alt}
            onClick={() => handleShow(id)}
          />
        </div>
      </Carousel.Item>
    );

    // items.push(
    //   <li class="carousel-item" key={id}>
    //     <img
    //       id={id}
    //       className="d-block w-100"
    //       src={value}
    //       alt={alt}
    //       onClick={() => handleShow(id)}
    //     />
    //   </li>
    // );

    // indicators.push(
    //   <li class="carousel-indicators" key={id + "_indicator"}>
    //     <button
    //       type="button"
    //       data-bs-target={urlPath}
    //       data-bs-slide-to="0"
    //       class="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //   </li>
    // );
  }

  // const content = (
  //   <div id={urlPath} class="carousel slide">
  //     <ul class="carousel-indicators">{indicators}</ul>
  //     <ul class="carousel-inner">{items}</ul>
  //     <button
  //       class="carousel-control-prev"
  //       type="button"
  //       data-bs-target="#carouselExampleIndicators"
  //       data-bs-slide="prev"
  //     >
  //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  //       <span class="visually-hidden">Previous</span>
  //     </button>
  //     <button
  //       class="carousel-control-next"
  //       type="button"
  //       data-bs-target="#carouselExampleIndicators"
  //       data-bs-slide="next"
  //     >
  //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
  //       <span class="visually-hidden">Next</span>
  //     </button>
  //   </div>
  // );

  return (
    <>
      <OverlayTrigger
        delay={{ show: 250, hide: 400 }}
        trigger="hover"
        placement="right"
        overlay={renderTooltip}
      >
        <div className="slideshow">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            onChange={handleChange}
            id={urlPath}
            interval={showModal ? null : "3000"}
            pause={false}
          >
            {items}
          </Carousel>
        </div>
      </OverlayTrigger>
      <ModalImage
        content={modalContent}
        showModal={showModal}
        handleClose={handleClose}
      />
    </>
  );
}

export default CarouselContent;
