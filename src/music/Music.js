import React from "react";
import { useOutletContext } from "react-router-dom";
import List from "../format/List";
import { Row, Col } from "react-bootstrap";
export default function Music() {
  const { assets } = useOutletContext();

  return (
    <>
      <Row>
        <p>
          Below is a list of playlists for various genres of music, along with a
          few additional ones. No artist/band is repeated across all of the
          playlists, however a few individuals are present among multiple
          sources.
        </p>
        <p>
          These playlists are meant to both share music I enjoy, while also
          introducing a genre to someone who may not have much experience with
          it. As such I tried to include artists with strong portfolios and
          multiple albums to pull from, but mostly I just included bands/songs I
          enjoy and I hope you enjoy them too.
        </p>
      </Row>
      <Row>
        <Col>
          <List listType="alternating" itemType="spotify" assets={assets} />
        </Col>
      </Row>
    </>
  );
}
