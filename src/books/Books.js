import React from "react";
import { Col } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import ViewCarousel from "../format/ViewCarousel";

export default function Books() {
  const { assets } = useOutletContext();

  return (
    <ViewCarousel
      itemType="image"
      modalType="image"
      items={assets.items}
      modals={assets.modals}
    />
  );
}
