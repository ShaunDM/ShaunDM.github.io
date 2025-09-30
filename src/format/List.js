import { useState } from "react";
import { ListGroup, ButtonGroup } from "react-bootstrap";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import ViewListGroup from "./ViewListGroup";
import AlternatingListGroup from "./AlternatingListGroup";
import ViewButtonGroup from "./ViewButtonGroup";
import ViewModal from "./ViewModal";

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
  const { assets, path } = useContext(PropContext);

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
          name={`${path} list group`}
          id={`${path}_list_group`}
          data-bs-theme="dark"
          horizontal
          className="flex-wrap list-standard"
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
        <ListGroup name={`${path} list group`} id={`${path}_list_group`}>
          <AlternatingListGroup
            itemType={itemType}
            items={items}
            handleShowModal={hasModal}
          />
        </ListGroup>
      );
      break;
    }
    case "buttonGroup": {
      list = (
        <ButtonGroup name={`${path} list group`} id={`${path}_list_group`}>
          <ViewButtonGroup items={items} />
        </ButtonGroup>
      );
      break;
    }
    case "horizontal": {
      list = (
        <ListGroup
          name={`${path} list group`}
          id={`${path}_list_group`}
          data-bs-theme="dark"
          horizontal
          className="list-horizontal"
          style={{
            height: `${(76 + lists * 4) / lists}vh`,
          }}
        >
          <ViewListGroup
            itemType={itemType === "image" ? "image_horizontal_list" : itemType}
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
