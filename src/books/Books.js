import { Col } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Main from "../layout/Main";
import ContentLoading from "../layout/ContentLoading";
import SidebarCarousel from "../layout/SidebarCarousel";
import CarouselContent from "../layout/CarouselContent";

export default function Books() {
  const assets = useOutletContext()[0];
  const index = useOutletContext()[1];
  const handleSelectIndex = useOutletContext()[2];

  if (!Object.keys(assets).length) return <ContentLoading title="Books" />;

  return (
    <Main title="Books">
      <Col xs={3}>
        <SidebarCarousel
          assets={assets.thumbs}
          index={index}
          handleSelectIndex={handleSelectIndex}
        />
      </Col>
      <Col>
        <CarouselContent
          thumbs={assets.thumbs}
          full={assets.full}
          index={index}
          handleSelectIndex={handleSelectIndex}
        />
      </Col>
    </Main>
  );
}
