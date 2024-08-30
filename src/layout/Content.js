import { useState } from "react";
import CarouselContent from "./CarouselContent";
import Sidebar from "./Sidebar";

// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

function Content({ thumbs, full }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = () => {};

  return (
    <>
      {/*<Sidebar />*/}
      <CarouselContent
        thumbs={thumbs}
        full={full}
        index={index}
        handleChange={handleChange}
        handleSelect={handleSelect}
      />
    </>
  );
}

export default Content;
