import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import List from "../format/List";

export default function MoviesTV() {
  const { assets } = useOutletContext();
  for (const key of Object.keys(assets.items)) {
    if (!Object.keys(assets.comments).some((comment) => comment == key))
      console.error(`Improperly matched key, assets/movies_tv, ${key}`);
    assets.items[key] = { ...assets.items[key], comment: assets.comments[key] };
  }
  return (
    <>
      <div>
        <Row>
          <p>
            To be honest I don't watch much TV and movies have fallen to the
            wayside as well. When I do watch things they tend to be more
            fantastical, which is why a large portion, especially TV shows, are
            animated; I've got enough real life in my real life. Anyway here are
            a few TV shows/Movies I enjoy.
          </p>
        </Row>
        <Row>
          <List itemType="card" items={assets.items} />
        </Row>
      </div>
      <div style={{ margin: "20px 0 0 0" }}>
        <Row
          style={{
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <Col>
            <p>
              "This website uses TMDB and the TMDB APIs but is not endorsed,
              certified, or otherwise approved by TMDB."
            </p>
          </Col>
          <Col>
            <a href="https://www.themoviedb.org/" target="_blank">
              <Image src={assets.tmdb_logo} fluid style={{ maxHeight: 80 }} />
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}
