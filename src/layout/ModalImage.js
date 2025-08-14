import React from "react";
import Modal from "react-bootstrap/Modal";
import { getAssetAlt } from "../util/api.mjs";

export default function ModalImage({ id, content, showModal, handleClose }) {
  return (
    id && (
      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Body id={`${id}_modal`}>
          <div className="modalBody">
            <img src={content} alt={getAssetAlt(id)} className="modalImage" />
          </div>
        </Modal.Body>
      </Modal>
    )
  );
}
