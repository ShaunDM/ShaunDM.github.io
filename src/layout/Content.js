import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "./Modal";

// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

function Content({ carousel, full, slide = 0 }) {
  const [index, setIndex] = useState(slide);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = () => {};

  let carouselItems = [];

  for (const [key, value] of Object.entries(carousel)) {
    const alt =
      key.substring(0, key.lastIndexOf(".")).replace(/_/g, " ") || key;
    const id = key.substring(0, key.lastIndexOf(".")) || key;

    carouselItems.push(
      <Carousel.Item>
        <img
          id={id}
          className="d-block w-100"
          src={value}
          alt={alt}
          data-bs-toggle="modal"
          data-bs-target={<Modal full={full} imgID={id} />}
        />
      </Carousel.Item>
    );
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      onChange={handleChange}
    >
      {carouselItems}
    </Carousel>
  );
}

export default Content;
