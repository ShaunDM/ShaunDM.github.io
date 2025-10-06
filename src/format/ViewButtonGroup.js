import Item from "./Item";
import { ListGroupItem } from "react-bootstrap";
import { referenceAsset } from "../util/api.mjs";

//Renders a horizontal list of buttons.
//items: object, is an object containing all files for the page being rendered, sourced from its asset folder in src/assets/*.

export default function ViewButtonGroup({ items }) {
  return Object.entries(items).map(([key, value]) => {
    const assetReference = referenceAsset(key);
    const { id, alt, title } = assetReference;
    return (
      <ListGroupItem key={id} id={`${id}_container`} className="btn-group">
        <Item itemType="button" id={id} value={value} title={title} alt={alt} />
      </ListGroupItem>
    );
  });
}
