import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import List from "../format/List";
import { Row, Col } from "react-bootstrap";
import { checkURL } from "../util/api.mjs";

export default function Music() {
  const { assets, isMobile } = useContext(PropContext);
  checkURL(assets.origin);

  const format = isMobile ? "standard" : "alternating";

  return (
    <>
      <Row name="page description" id="page_description">
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
          enjoy.
        </p>
        <p>
          If you liked some or all of these playlists and would like more, there
          is an additional playlist filled with artists that I couldn't fit in
          due to limiting the size of each playlist to about an album's worth of
          songs, except the one. Like before, no artists are repeated, including
          all the playlist's you see here. It's the only other playlist on my{" "}
          <a href="https://open.spotify.com/user/317yn6u2b2y373d2waaudtyvyaae">
            profile
          </a>
          .
        </p>
      </Row>
      <Row>
        <Col>
          <List listType={format} itemType="spotify" assets={assets} />
        </Col>
      </Row>
    </>
  );
}
