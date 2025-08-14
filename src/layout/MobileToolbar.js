import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MobileToolbar() {
  return (
    <li id="nav_bars">
      <Link to="/">
        <FontAwesomeIcon icon={faBars} title="Offcanvas" size="2x" />
      </Link>
    </li>
  );
}
