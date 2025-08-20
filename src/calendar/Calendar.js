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
  //Need controllers for bad urls not on the calendar.
  const { assets } = useOutletContext();

  const navigate = useNavigate();

  const { year, month, date } = useParams();
  const today = getCurrentDate();

  const [calendarDb, setCalendarDb] = useState(null);
  const [day, setDay] = useState(date);

  useEffect(() => {
    const abortController = new AbortController();
    if (!year) {
      navigate(`/calendar/${today.year}/${today.month}/${today.day}`);
      setDay(today.day);
      abortController.abort();
    }
    if (window.location.hostname.includes("github")) {
      setCalendarDb(calendar_db[year][month]);
    } else {
      setCalendarDb(null);
      async function loadCalendarDb() {
        try {
          const response = await fetch(`http://localhost:8000/data`, {
            headers: { "Content-Type": "application/json" },
            signal: abortController.signal,
          });

          const payload = await response.json();

          if (payload.error) {
            return Promise.reject({ message: payload.error });
          }
          setCalendarDb(payload);
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
      <div className="calendar">
        <Row className="flex-wrap-nowrap align-items-stretch">
          {day && calendarDb[year][month][day] ? (
            <Col xs="auto" className="padding-0 max-width-33 ">
              <div className="daySchedule padding-0">
                <DaySchedule
                  month={month}
                  day={day}
                  schedule={calendarDb[year][month][day]}
                />
              </div>
            </Col>
          ) : null}
          <Col className="padding-0">
            <div className="calendarContent">
              <div className="calendarTitle">
                <CalendarTitle
                  year={year}
                  month={month}
                  calendarDb={calendarDb}
                />
              </div>
              <div className="calendarBody">
                <CalendarContent
                  month={month}
                  columns={columns}
                  calendarDb={calendarDb[year][month]}
                  calendarStart={calendarStart}
                  day={day}
                  handleClickDay={handleClickDay}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
