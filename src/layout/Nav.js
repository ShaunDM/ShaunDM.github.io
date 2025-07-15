import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faMusic,
  faBook,
  faGamepad,
  faFilm,
  faBars,
  faCalendar,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const links = [
    { title: "Home", icon: faHouse },
    { title: "Portfolio", icon: faFolder },
    { title: "Books", icon: faBook },
    { title: "Music", icon: faMusic },
    { title: "Games", icon: faGamepad },
    { title: "Movies Tv", icon: faFilm },
    { title: "Calendar", icon: faCalendar },
    { title: "Contact Me", icon: faAddressCard },
  ];

  return (
    <nav name="navbar">
      <ul name="nav_icons">
        (
        <li id="nav_bars">
          <Link to="/">
            <FontAwesomeIcon icon={faBars} title="Offcanvas" size="2x" />
          </Link>
        </li>
        )
        {links.map((link) => {
          const path = `${link.title.replaceAll(" ", "_").toLowerCase()}`;
          return (
            <li id={`nav_${path}`} key={`nav_${path}`}>
              {link.title === "Home" ? (
                <Link to="/" state={{ pathname: "/" }}>
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
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
