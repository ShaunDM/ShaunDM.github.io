import { Link } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import { useContext } from "react";
import { PropContext } from "../PropContext";
import List from "../format/List";

export default function MoviesTV() {
  const { assets } = useContext(PropContext);
  for (const key of Object.keys(assets.items)) {
    if (!Object.keys(assets.comments).some((comment) => comment === key))
      console.error(`Improperly matched key, assets/movies_tv, ${key}`);
    assets.items[key] = { ...assets.items[key], comment: assets.comments[key] };
  }
  return (
    <>
      <Row>
        <p>
          To be honest I don't watch much TV and movies have fallen to the
          wayside as well. When I do watch things they tend to be more
          fantastical, which is why a large portion, especially TV shows, are
          animated; I've got enough real life in my real life. Anyway here are a
          few TV shows and movies I enjoy. Clicking the movie/show will open a
          new tab to its TMDB page.
        </p>
      </Row>
      <Row>
        <List itemType="card" items={assets.items} />
      </Row>
      <Row style={{ margin: "1rem 0 0 0" }}>
        <Col className="movies-tv-tmdb-container">
          <p>
            "This website uses TMDB and the TMDB APIs but is not endorsed,
            certified, or otherwise approved by TMDB."
          </p>
          <Link to="https://www.themoviedb.org/" target="_blank">
            <Image
              src={assets.tmdb_logo}
              fluid
              className="movies-tv-tmdb-image"
            />
          </Link>
        </Col>
      </Row>
    </>
  );
}
