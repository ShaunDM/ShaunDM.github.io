import { useState } from "react";
import { ListGroup, ButtonGroup } from "react-bootstrap";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import ViewListGroup from "./ViewListGroup";
import AlternatingListGroup from "./AlternatingListGroup";
import ViewButtonGroup from "./ViewButtonGroup";
import ViewCarousel from "./ViewCarousel";
import ViewModal from "./ViewModal";

/*
List holds variables that prop down to listType used and their subsequent items and decides which list type is used. 

-listName: string, variable that gives each list a unique id.
-listType: string, variable that decides the case of a switch function that chooses what type of list is created. Options: standard- flex list, alternating- two related content containers per item that take up a row and switch position with each subsequent row, buttonGroup- a list of buttons in a horizontal row, carousel- a carousel of items (created through react-bootstrap), horizontal- a single horizontal row.
-lists: int, some pages have multiple lists, these are formatted as multiple horizontal lists. To control individual list height to a somewhat flexible extent the number of lists is part of a calculation for list height, see case: "horizontal" style.
-itemType: string, variable that decides how each individual item is rendered in ./Items.js
-items: object, is an object containing all files for the page's list being rendered, sourced from its asset folder in src/assets/*.
-modalType: string, decides how the modal is rendered in ./ViewModal.js
-modals: object, is an object containing all files for the page's modals to be rendered, sourced from its asset folder in src/assets/*.
*/
export default function List({
  listName,
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

  console.log(assets);

  let list = null;

  switch (listType) {
    case "standard": {
      list = (
        <ListGroup
          name={`list group`}
          id={`${listName}_list_group`}
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
        <ListGroup name={`${path} list group`} id={`${listName}_list_group`}>
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
        <ButtonGroup name={`${path} list group`} id={`${listName}_list_group`}>
          <ViewButtonGroup items={items} />
        </ButtonGroup>
      );
      break;
    }
    case "carousel": {
      list = (
        <ViewCarousel
          itemType={itemType}
          items={items}
          handleShowModal={hasModal}
          showModal={showModal}
        />
      );
      break;
    }
    case "horizontal": {
      list = (
        <ListGroup
          name={`${path} list group`}
          id={`${listName}_list_group`}
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
