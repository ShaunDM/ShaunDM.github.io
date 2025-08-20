import React from "react";
import { Image, Card, Button } from "react-bootstrap";

export default function Item({
  itemType,
  id,
  value,
  title,
  alt,
  handleShowModal,
}) {
  switch (itemType) {
    case "image": {
      return (
        <div style={{ justifySelf: "center" }}>
          <img src={value} alt={alt} onClick={() => handleShowModal(id)} />
        </div>
      );
    }
    case "spotify": {
      return (
        <iframe
          src={`https://open.spotify.com/embed/playlist/${value}?utm_source=generator`}
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      );
    }
    case "card": {
      //look into including multiple cards on smaller pages
      return (
        <div style={{ justifySelf: "center" }}>
          <Button
            href={value.link ? value.link : ""}
            target="_blank"
            variant="dark"
          >
            <Card bg="dark" text="light" style={{ margin: "0px 0px 25px 0px" }}>
              <Card.Header>
                <Card.Title>{title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Image
                  src={value.image}
                  alt={alt}
                  fluid
                  href={value.link ? value.link : ""}
                />
                <Card.Text style={{ width: "460px" }}>
                  {value.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
        </div>
      );
    }
    default: {
      new Error("Invalid element type for CarouselItems");
    }
  }
}
