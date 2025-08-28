import { Image, Card, Button } from "react-bootstrap";

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
      console.log(value);

      //look into including multiple cards on smaller pages
      return (
        <div style={{ justifySelf: "center" }}>
          <Button
            href={value.link ? value.link : ""}
            target="_blank"
            variant="dark"
          >
            <Card
              bg="dark"
              text="light"
              style={{ maxWidth: "460px", margin: "0px 0px 25px 0px" }}
            >
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
                <Card.Text>{value.description}</Card.Text>
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
        <embed
          src={value}
          alt={alt}
          onClick={onclick}
          style={{ height: "100%" }}
        />
      ) : (
        <img
          src={value}
          alt={alt}
          onClick={onclick ? onclick : () => window.open(value, "_blank")}
          style={{ height: "100%" }}
        />
      );
    }

    case "image_carousel": {
      return (
        <div style={{ justifySelf: "center" }}>
          <img src={value} alt={alt} onClick={onclick} />
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
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title}
        />
      );
    }

    default: {
      new Error("Invalid element type for CarouselItems");
    }
  }
}
