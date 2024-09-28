import React from "react";
import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useOutletContext,
  useLocation,
} from "react-router-dom";
import Main from "../layout/Main";
import Content from "../layout/Content";
import { Table, Card, CardGroup } from "react-bootstrap";
import { getCurrentDate } from "../util/api";
import calendar_db from "../assets/calendar/calendar_db.json";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default function Calendar() {
  const isPhone = useOutletContext()[0];
  const assets = useOutletContext()[1];

  const navigate = useNavigate();

  const host = useLocation().host;

  const { year, month } = useParams();
  const today = getCurrentDate();

  console.log(today);

  if (!year) {
    navigate(`/calendar/${today.year}/${today.month}`);
  }

  let date = null;
  if (year == today.year && month == today.month) {
    date = today.day;
  }

  const [yr, setYr] = useState(year);
  const [mth, setMth] = useState(month);
  const [day, setDay] = useState(date);
  const [calendarDb, setCalendarDb] = useState(null);

  useEffect(() => {
    if (host == "github") {
      setCalendarDb(calendar_db[yr][mth]);
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

  const calendarStart = new Date(`${mth} 01, ${year}`).getDay();

  const columns = [
    { label: "S", accessor: "0" },
    { label: "M", accessor: "1" },
    { label: "T", accessor: "2" },
    { label: "W", accessor: "3" },
    { label: "T", accessor: "4" },
    { label: "F", accessor: "5" },
    { label: "S", accessor: "6" },
  ];

  const table = (
    <Table>
      <caption></caption>
      <CalendarHead
        mth={mth[0].toUpperCase() + mth.substring(1)}
        columns={columns}
      />
      <CalendarBody
        columns={columns}
        days={calendarDb}
        calendarStart={calendarStart}
      />
    </Table>
  );

  return table;

  return (
    <Main title="Calendar">
      <Content isPhone={isPhone} assets={assets} />
    </Main>
  );
}
