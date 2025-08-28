import { useOutletContext } from "react-router-dom";
import ViewCarousel from "../format/ViewCarousel";

export default function Books() {
  const { assets } = useOutletContext();

  return (
    <ViewCarousel
      itemType="image_carousel"
      modalType="image"
      items={assets.items}
      modals={assets.modals}
    />
  );
}
