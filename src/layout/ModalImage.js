import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalImage({ content, showModal, handleClose }) {
  console.log(content);
  return (
    <Modal show={showModal} onHide={handleClose} size="xl">
      <Modal.Body>
        <div className="modalBody">
          <img src={content} alt="" className="modalImage" />
        </div>
      </Modal.Body>
    </Modal>
  );
}
