import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const onclick = handleShowModal ? () => handleShowModal(id) : null;
  switch (itemType) {
    case "button": {
      return (
        <Button
          href={value.link ? value.link : ""}
          target="_blank"
          variant="dark"
          id={id}
          className="add-column-border"
          style={{ alignContent: "center" }}
        >
          {title}
        </Button>
      );
    }
    case "card": {
      //look into including multiple cards on smaller pages
      return (
        <Button
          href={value.link ? value.link : ""}
          target="_blank"
          variant="dark"
          id={id}
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
              {value.image ? <Image src={value.image} alt={alt} fluid /> : null}
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
        <object
          data={value}
          type="application/pdf"
          style={{ width: "auto", height: "100%" }}
          className="contain"
        >
          <p>{title}</p>
        </object>
      ) : (
        <Image
          id={id}
          src={value}
          alt={alt}
          onClick={onclick ? onclick : () => window.open(value, "_blank")}
          className="pointer-on-hover"
          style={isMobile ? { maxWidth: "100%" } : null}
        />
      );
    }

    case "image_horizontal_list": {
      return value.includes("pdf") ? (
        <object
          data={value}
          type="application/pdf"
          style={{
            height: "100%",
            width: "auto",
            maxWidth: "100vw",
            maxHeight: "100%",
          }}
        >
          <p>{title}</p>
        </object>
      ) : (
        <Image
          id={id}
          src={value}
          alt={alt}
          onClick={onclick ? onclick : () => window.open(value, "_blank")}
          className="pointer-on-hover image-container"
        />
      );
    }

    case "image_carousel": {
      return (
        <div
          id={id}
          className="pointer-on-hover"
          style={{ justifySelf: "center" }}
        >
          <img src={value} alt={alt} onClick={onclick} className="contain" />
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
