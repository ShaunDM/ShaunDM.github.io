import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import NavPopover from "./NavPopover";
import { months } from "../util/api.mjs";
import { convertMonthToTitleCase } from "../util/api.mjs";

export default function CalendarTitle({ year, month, calendarDb }) {
  //Add useState active so that only one popover can be open at a time.
  //Tried above, wasn't sure how to implement with bootstrap API

  const baseUrl = "/calendar";
  const displayMonth = convertMonthToTitleCase(month);
  const displayMonths = months.map((mth) => convertMonthToTitleCase(mth));

  //Need to pass this from higher
  const years = Object.keys(calendarDb);

  //need to add what to do if it goes beyond the year of the database.

  const nextMonth = () => {
    const index = months.findIndex((mth) => month === mth);
    if (index !== 11) {
      return `${year}/${months[index + 1]}`;
    }
    if (index === 11) {
      return `${parseInt(year) + 1}/january`;
    }
    throw console.error("Something went wrong! Next month scroll button");
  };

  const prevMonth = () => {
    const index = months.findIndex((mth) => mth === month);
    if (index !== 0) {
      return `${year}/${months[index - 1]}`;
    }
    if (index === 0) {
      return `${parseInt(year) - 1}/december`;
    }
    throw console.error("Something went wrong! Prev month scroll button");
  };

  return (
    //need to fix styling issues of popover
    <Row>
      <NavPopover
        id="selectYear"
        baseUrl={baseUrl}
        links={years}
        buttonName={year}
        urlSuffix={`/${month}`}
      />
      {/*for some reason won't center*/}
      <Col className="d-flex">
        <div className="justify-item-center">
          <button className="scrollMonth">
            <Link id={"linkToPrevMonth"} to={`${baseUrl}/${prevMonth()}`}>
              <FontAwesomeIcon icon={faChevronLeft} size="2x" />
            </Link>
          </button>
          <h2 className="calendarMonth">
            <NavPopover
              id="selectMonth"
              baseUrl={`${baseUrl}/${year}`}
              links={displayMonths}
              buttonName={displayMonth}
            />
          </h2>
          <button className="scrollMonth">
            <Link id={"linkToNextMonth"} to={`${baseUrl}/${nextMonth()}`}>
              <FontAwesomeIcon icon={faChevronRight} size="2x" />
            </Link>
          </button>
        </div>
      </Col>
    </Row>
  );
}
