import { useState } from "react";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import { referenceAsset } from "../util/api.mjs";
import { Carousel } from "react-bootstrap";
import Item from "./Item";
import ViewModal from "./ViewModal";
import ContentLoading from "../layout/ContentLoading";

export default function ViewCarousel({ itemType, modalType, items, modals }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { index, handleSelectIndex } = useContext(PropContext);

  if (!items) return <ContentLoading />;

  const urlPath = window.location.pathname.substring(1);

  const handleClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleShowModal = (id) => {
    setModalContent(modals[id]);
    setShowModal(id);
  };

  let carouselItems = [];

  for (const [key, value] of Object.entries(items)) {
    const assetReference = referenceAsset(key);
    const { id, alt, title } = assetReference;
    carouselItems.push(
      <Carousel.Item key={id} id={id} className="pointer-on-hover">
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
    <>
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
      <ViewModal
        type={modalType}
        id={showModal}
        content={modalContent}
        showModal={showModal}
        handleClose={handleClose}
      />
    </>
  );
}
