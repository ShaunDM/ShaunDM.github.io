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
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <h1>Shaun McRae - Software Engineer</h1>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} title="Home" size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faFolder} title="Portfolio" size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/books">
            <FontAwesomeIcon icon={faBook} title="Books" size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/music">
            <FontAwesomeIcon icon={faMusic} title="Music" size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/games">
            <FontAwesomeIcon icon={faGamepad} title="Games" size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/movies_tv">
            <FontAwesomeIcon icon={faFilm} title="Movies and TV" size="2x" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
