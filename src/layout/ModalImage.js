import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalDialog } from "react-bootstrap";

export default function ModalImage({ content, showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose} size="xl" closeButton>
      <Modal.Body>
        <div className="modalContent">
          <img src={content} alt="" className="modalImage" />
        </div>
      </Modal.Body>
    </Modal>
  );
}
