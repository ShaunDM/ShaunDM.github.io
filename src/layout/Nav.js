import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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

function Nav() {
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

  return (
    <nav
      name="navbar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ul
        name="nav_icons"
        style={{
          padding: "1rem",
          width: "fit-content",
          margin: 0,
        }}
      >
        {links.map((link) => {
          const path = `${link.title.replaceAll(" ", "_").toLowerCase()}`;

          return (
            <OverlayTrigger
              overlay={
                <Tooltip id={`${path}_tooltip`}>{getAssetTitle(path)}</Tooltip>
              }
              key={`nav_${path}`}
            >
              <li
                id={`nav_${path}`}
                key={`nav_${path}`}
                style={{ padding: "0 .5rem", margin: 0 }}
              >
                {link.title === "Home" ? (
                  <Link to="/" state={{ pathname: "/" }} reloadDocument={true}>
                    <FontAwesomeIcon
                      icon={link.icon}
                      title={`${link.title}`}
                      size="2x"
                    />
                  </Link>
                ) : (
                  <Link to={`/${path}`} reloadDocument={true}>
                    <FontAwesomeIcon
                      icon={link.icon}
                      title={`${link.title}`}
                      size="2x"
                    />
                  </Link>
                )}
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
