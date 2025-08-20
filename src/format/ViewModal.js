import React from "react";
import Modal from "react-bootstrap/Modal";
import { getAssetAlt } from "../util/api.mjs";

export default function ViewModal({
  type,
  id,
  content,
  showModal,
  handleClose,
}) {
  if (!id) return null;
  let modalBody = <div>No Model Content</div>;

  switch (type) {
    case "image": {
      modalBody = (
        <img src={content} alt={getAssetAlt(id)} className="modalImage" />
      );
      break;
    }
    case "iframe": {
      modalBody = <iframe src={content} width="646" height="190" />;
      break;
    }
    default: {
      new Error("Invalid modal type used.");
    }
  }
  return (
    id && (
      <Modal show={showModal} onHide={handleClose} size="xl" id={`${id}_modal`}>
        <Modal.Body>
          <div className="modalBody">{modalBody}</div>
        </Modal.Body>
      </Modal>
    )
  );
}
