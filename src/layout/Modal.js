import React from "react";

export default function Modal({ folder, imageId }) {
  return (
    <div
      class="modal fade"
      id={`${imageId}Modal`}
      tabindex="-1"
      aria-labelledby={`${imageId}Modal`}
      aria-hidden="true"
    >
      <div class="modal-content">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
