import Item from "./Item";
import { referenceAsset } from "../util/api.mjs";

export default function ViewButtonGroup({ items }) {
  return Object.entries(items).map(([key, value]) => {
    const assetReference = referenceAsset(key);
    const { id, alt, title } = assetReference;
    return (
      <Item
        key={id}
        itemType="button"
        id={id}
        value={value}
        title={title}
        alt={alt}
      />
    );
  });
}
