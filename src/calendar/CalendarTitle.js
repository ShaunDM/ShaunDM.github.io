import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import NavPopover from "./NavPopover";

export default function CalendarTitle({ year, month }) {
  const displayMonth = month[0].toUpperCase() + month.substring(1);
  return (
    <Row>
      <button className="fixed">{year}</button>
      <Col className="d-flex justify-content-center">
        <button className="">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <h2 className="calendarMonth">
          <button>{displayMonth}</button>
        </h2>
        <button className="">
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </Col>
    </Row>
  );
}
