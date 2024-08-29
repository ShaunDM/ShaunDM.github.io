import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalImage({ content, showModal, handleClose }) {
  console.log(content);
  return (
    <Modal show={showModal} onHide={handleClose} fullscreen="true">
      <Modal.Header closeButton />
      <Modal.Body>
        <img src={content} alt="" />
      </Modal.Body>
    </Modal>
  );
}
