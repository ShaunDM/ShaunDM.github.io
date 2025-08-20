import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import ViewListGroup from "./ViewListGroup";
import ViewModal from "./ViewModal";

export default function List({ itemType, items = {}, modalType, modals }) {
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

  if (!Object.keys(items).length) items = assets[assets.sidebar.src];

  return (
    <>
      {assets.descriptions ? (
        <ListGroup>
          <ViewListGroup
            itemType={itemType}
            items={items}
            handleShowModal={handleShowModal}
          />
        </ListGroup>
      ) : (
        <ListGroup
          data-bs-theme="dark"
          horizontal
          className="flex-wrap"
          style={{ justifyContent: "center", padding: "0 2rem 0 2rem" }}
        >
          <ViewListGroup
            itemType={itemType}
            items={items}
            handleShowModal={handleShowModal}
          />
        </ListGroup>
      )}
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
