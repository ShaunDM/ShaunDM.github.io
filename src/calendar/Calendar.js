import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Main from "../layout/Main";
import { getCurrentDate } from "../util/api";
import calendar_db from "../assets/calendar/calendar_db.json";
import CalendarContent from "./CalendarContent";
import CalendarTitle from "./CalendarTitle";
import DaySchedule from "./DaySchedule";

export default function Calendar() {
  const isPhone = useOutletContext()[0];
  const assets = useOutletContext()[1];

  const navigate = useNavigate();

  const { year, month, date } = useParams();
  const today = getCurrentDate();

  if (!year) {
    navigate(`/calendar/${today.year}/${today.month}`);
  }

  const [calendarDb, setCalendarDb] = useState(null);
  const [day, setDay] = useState(date);

  const baseUrl = `/calendar/${year}/${month}`;

  const handleClickDay = (event) => {
    window.history.replaceState(
      event.target.id,
      "",
      `${baseUrl}/${event.target.id}`
    );
    setDay(event.target.id);
  };

  if (!date && year === today.year && month === today.month) {
    handleClickDay(today.day);
  }

  useEffect(() => {
    if (window.location.host.includes("github")) {
      setCalendarDb(calendar_db[year][month]);
    } else {
      setCalendarDb(null);
      const abortController = new AbortController();
      async function loadCalendarDb() {
        try {
          const response = await fetch(`http://localhost:8000/${year}`, {
            headers: { "Content-Type": "application/json" },
            signal: abortController.signal,
          });

          const payload = await response.json();

          if (payload.error) {
            return Promise.reject({ message: payload.error });
          }
          setCalendarDb(payload[month]);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
          }
        }
      }

      loadCalendarDb();

      return () => abortController.abort();
    }
  }, [year, month]);

  if (!calendarDb) {
    return "...Loading";
  }

  const calendarStart = new Date(`${month} 01, ${year}`).getDay();

  const columns = [
    { label: "S", accessor: "0" },
    { label: "M", accessor: "1" },
    { label: "T", accessor: "2" },
    { label: "W", accessor: "3" },
    { label: "T", accessor: "4" },
    { label: "F", accessor: "5" },
    { label: "S", accessor: "6" },
  ];

  return (
    <Main title="Calendar">
      <Row>
        {day && calendarDb[day] ? (
          <Col xs={3}>
            <DaySchedule month={month} day={day} schedule={calendarDb[day]} />{" "}
          </Col>
        ) : null}
        <Col className="calendar">
          <CalendarTitle year={year} month={month} calendarDb={calendarDb} />
          <CalendarContent
            month={month}
            columns={columns}
            calendarDb={calendarDb}
            calendarStart={calendarStart}
            day={day}
            handleClickDay={handleClickDay}
          />
        </Col>
      </Row>
    </Main>
  );
}
