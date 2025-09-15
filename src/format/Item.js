import { Image, Card, Button } from "react-bootstrap";
import Description from "./Description";

export default function Item({
  itemType,
  id,
  value,
  title,
  alt,
  handleShowModal,
}) {
  const onclick = handleShowModal ? () => handleShowModal(id) : null;
  switch (itemType) {
    case "card": {
      //look into including multiple cards on smaller pages
      return (
        <div id={id}>
          <Button
            href={value.link ? value.link : ""}
            target="_blank"
            variant="dark"
          >
            <Card bg="dark" text="light" className="card-style">
              <Card.Header>
                <Card.Title>{title}</Card.Title>
                {value.genres ? (
                  <Card.Subtitle className="mb-2 text-muted">
                    {value.genres.join(" / ")}
                  </Card.Subtitle>
                ) : null}
              </Card.Header>
              <Card.Body>
                {value.image ? (
                  <Image src={value.image} alt={alt} fluid />
                ) : null}
                <Card.Text>
                  <Description src={value.description} />
                </Card.Text>
                {value.comment ? (
                  <Card.Text
                    className="blockquote-footer"
                    style={{ margin: "1em 0 0 0" }}
                  >
                    {value.comment}
                  </Card.Text>
                ) : null}
              </Card.Body>
            </Card>
          </Button>
        </div>
      );
    }

    case "iframe": {
      return (
        <iframe
          id={id}
          src={value}
          width="100%"
          height="352"
          allow="fullscreen"
          loading="lazy"
          title={title}
        />
      );
    }
    case "image": {
      return value.includes("pdf") ? (
        <embed id={id} src={value} alt={alt} onClick={onclick} />
      ) : (
        <img
          id={id}
          src={value}
          alt={alt}
          onClick={onclick ? onclick : () => window.open(value, "_blank")}
          className="pointer-on-hover"
        />
      );
    }

    case "image_carousel": {
      return (
        <div
          style={{ justifySelf: "center" }}
          id={id}
          className="pointer-on-hover"
        >
          <img src={value} alt={alt} onClick={onclick} />
        </div>
      );
    }

    case "spotify": {
      return (
        <iframe
          id={id}
          src={`https://open.spotify.com/embed/playlist/${value}?utm_source=generator`}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title}
        />
      );
    }

    default: {
      new Error("Invalid element type for carousel-items");
    }
  }
}
