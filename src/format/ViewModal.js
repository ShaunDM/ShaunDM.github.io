import Modal from "react-bootstrap/Modal";
import { getAssetAlt } from "../util/api.mjs";

/*
Renders a modal.

-type: string, modal type rendered, decided by switch function below.
-id: string, modal id.
-content: variable, reference of what is being rendered.
-showModal: string, state variable based on the id of a modal if it is shown, null if not. Used in this instance to render modal or not.
-handleClose: function, function that manages state variables for modals and will close a modal once triggered.
*/

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
        <img src={content} alt={getAssetAlt(id)} className="modal-image" />
      );
      break;
    }
    case "iframe": {
      modalBody = <iframe title={id} src={content} width="646" height="190" />;
      break;
    }
    default: {
      new Error("Invalid modal type used.");
    }
  }
  return (
    id && (
      <Modal
        show={showModal}
        onHide={handleClose}
        size="xl"
        name={`${id} modal`}
        id={`${id}_modal`}
      >
        <Modal.Body>
          <div className="modalBody">{modalBody}</div>
        </Modal.Body>
      </Modal>
    )
  );
}
