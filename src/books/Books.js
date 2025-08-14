import { Col } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import ContentLoading from "../layout/ContentLoading";
import CarouselContent from "../layout/CarouselContent";

export default function Books() {
  const assets = useOutletContext()[0];
  const index = useOutletContext()[1];
  const handleSelectIndex = useOutletContext()[2];

  if (!Object.keys(assets).length) return <ContentLoading title="Books" />;

  return (
    <Col>
      <CarouselContent
        thumbs={assets.thumbs}
        full={assets.full}
        index={index}
        handleSelectIndex={handleSelectIndex}
      />
    </Col>
  );
}
