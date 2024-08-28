import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalImage({ image, showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose} fullscreen="true">
      <Modal.Header closeButton />
      <Modal.Body>
        <img src={image} alt="" />
      </Modal.Body>
    </Modal>
  );
}
