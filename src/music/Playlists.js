import {
  Ratio,
  Carousel,
  Accordion,
  ToggleButton,
  ButtonGroup,
  Col,
  ListGroup,
  Image,
} from "react-bootstrap";
import SpotifyPlayer from "./SpotifyPlayer";
import PlaylistDescription from "./PlaylistDescription";

export default function Playlists({ assets, index, handleSelectIndex }) {
  const stations = Object.keys(assets.playlistSrcs).map((station, index) => {
    const title = station.replaceAll("_slash_", "/").replaceAll("_", " ");
    return (
      <ListGroup.Item
        className={index % 2 ? "flex" : "flex-direction-row-reverse"}
        key={station}
        id={station}
      >
        <Col>
          <SpotifyPlayer src={assets.playlistSrcs[station]} />
        </Col>
        <Col
          style={{
            backgroundImage: "url(" + assets.icons[station] + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "lighten",
            backgroundColor: "rgba(255,255,255,0.6)",
          }}
        >
          <div>
            <PlaylistDescription src={assets.playlistDescs[station]} />
          </div>
        </Col>
      </ListGroup.Item>
    );
  });

  return (
    <ListGroup>
      {stations}
      {/*Mobile
      <Accordion>
        {const src = `https://open.spotify.com/embed/playlist/${Object.values(
              object
            )}?utm_source=generator`;
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      */}
    </ListGroup>
  );
}
