import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import ViewListGroup from "./ViewListGroup";
import ViewModal from "./ViewModal";
import AlternatingListGroup from "./AlternatingListGroup";

export default function List({
  listType = "standard",
  lists = 1,
  itemType,
  items = {},
  modalType,
  modals,
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { assets } = useOutletContext();

  const handleClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleShowModal = (id) => {
    setModalContent(modals[id]);
    setShowModal(id);
  };

  const hasModal = modals ? handleShowModal : null;

  if (!Object.keys(items).length) items = assets[assets.sidebar.src];

  let list = null;

  switch (listType) {
    case "standard": {
      list = (
        <ListGroup
          data-bs-theme="dark"
          horizontal
          className="flex-wrap"
          style={{ justifyContent: "center", padding: "0 2rem 0 2rem" }}
        >
          <ViewListGroup
            itemType={itemType}
            items={items}
            handleShowModal={hasModal}
          />
        </ListGroup>
      );
      break;
    }
    case "alternating": {
      list = (
        <ListGroup>
          <AlternatingListGroup
            itemType={itemType}
            items={items}
            handleShowModal={hasModal}
          />
        </ListGroup>
      );
      break;
    }
    case "horizontal": {
      list = (
        <ListGroup
          data-bs-theme="dark"
          horizontal
          style={{
            padding: "0 2rem 0 2rem",
            flexWrap: "nowrap",
            overflowX: "scroll",
            overflowY: "clip",
            maxWidth: "70vw",
            maxHeight: `${90 / lists}vh`,
          }}
        >
          <ViewListGroup
            itemType={itemType}
            items={items}
            handleShowModal={hasModal}
          />
        </ListGroup>
      );
      break;
    }
    default: {
      console.error("Something went wrong. format/List.js listType");
    }
  }

  return (
    <>
      {list}
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
