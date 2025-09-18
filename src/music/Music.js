import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";
import List from "../format/List";
import { Row, Col } from "react-bootstrap";
import { checkURL } from "../util/api.mjs";

export default function Music() {
  const { assets } = useContext(PropContext);
  checkURL(assets.origin);

  const isMobile = useMediaQuery({ query: "(max-width: 991px)" })
    ? "standard"
    : "alternating";

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
          enjoy.
        </p>
      </Row>
      <Row>
        <Col>
          <List listType={isMobile} itemType="spotify" assets={assets} />
        </Col>
      </Row>
    </>
  );
}
