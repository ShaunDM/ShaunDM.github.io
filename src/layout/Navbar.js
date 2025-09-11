import { Link } from "react-router-dom";
import { ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faMusic,
  faBook,
  faGamepad,
  faFilm,
  faCalendar,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { getAssetTitle } from "../util/api.mjs";

export default function Navbar() {
  const links = [
    { title: "Home", icon: faHouse },
    { title: "Portfolio", icon: faFolder },
    { title: "Books", icon: faBook },
    { title: "Music", icon: faMusic },
    { title: "Games", icon: faGamepad },
    { title: "Movies Tv", icon: faFilm },
    // { title: "Calendar", icon: faCalendar },
    { title: "Contact Me", icon: faAddressCard },
  ];
  return links.map((link) => {
    const path = `${link.title.replaceAll(" ", "_").toLowerCase()}`;

    return (
      <OverlayTrigger
        overlay={
          <Tooltip id={`${path}_tooltip`}>{getAssetTitle(path)}</Tooltip>
        }
        key={`nav_${path}`}
      >
        {link.title === "Home" ? (
          <Link
            to="/"
            state={{ pathname: "/" }}
            reloadDocument={true}
            id={`nav_${path}`}
            key={`nav_${path}`}
          >
            <ListGroup.Item className="nav-icon" action>
              <FontAwesomeIcon
                icon={link.icon}
                title={`${link.title}`}
                size="2x"
              />
            </ListGroup.Item>
          </Link>
        ) : (
          <Link
            to={`/${path}`}
            reloadDocument={true}
            id={`nav_${path}`}
            key={`nav_${path}`}
          >
            <ListGroup.Item className="nav-icon" action>
              <FontAwesomeIcon
                icon={link.icon}
                title={`${link.title}`}
                size="2x"
              />
            </ListGroup.Item>
          </Link>
        )}
      </OverlayTrigger>
    );
  });
}
