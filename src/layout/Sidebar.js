import React from "react";
import SidebarCarousel from "./SidebarCarousel";
import SidebarReg from "./SidebarReg";

export default function Sidebar({
  assets,
  carouselIndex,
  handleSelectCarouselIndex,
}) {
  const hasCarousel = ["/books", "/games", "/movies_tv", "/music"];

  return hasCarousel.includes(window.location.pathname) ? (
    <SidebarCarousel
      assets={assets[0]}
      carouselIndex
      handleSelectCarouselIndex={handleSelectCarouselIndex}
    />
  ) : (
    <SidebarReg assets={assets} />
  );
}
