import CarouselContent from "./CarouselContent";
import Sidebar from "./Sidebar";
import { Col, Row } from "react-bootstrap";

function Content({
  isPhone,
  assets,
  carouselIndex,
  handleSelectCarouselIndex,
}) {
  const handleChange = () => {};
  return (
    <Row>
      {!isPhone && (
        <Col xs={3}>
          <Sidebar
            assets={assets}
            carouselIndex={carouselIndex}
            handleSelectCarouselIndex={handleSelectCarouselIndex}
          />
        </Col>
      )}
      <Col>
        <CarouselContent
          thumbs={assets[0]}
          full={assets[1]}
          carouselIndex={carouselIndex}
          handleSelectCarouselIndex={handleSelectCarouselIndex}
          handleChange={handleChange}
        />
      </Col>
    </Row>
  );
}

export default Content;
