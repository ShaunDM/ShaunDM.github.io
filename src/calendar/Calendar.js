import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Main from "../layout/Main";
import Content from "../layout/Content";
import { Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { getCurrentDate } from "../util/api";

export default function Calendar() {
  const isPhone = useOutletContext()[0];
  const assets = useOutletContext()[1];

  const navigate = useNavigate();

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
  }, [year, month]);

  console.log(calendarDb);

  if (!calendarDb) {
    return "...Loading";
  }

  const table = (
    <Table>
      <caption></caption>
      <thead>
        <tr>
          <button>Year</button>
          <button>Back</button>
          Month
          <button>Forward</button>
        </tr>
        <tr>
          <th scope="col">S</th>
          <th scope="col">M</th>
          <th scope="col">T</th>
          <th scope="col">W</th>
          <th scope="col">T</th>
          <th scope="col">F</th>
          <th scope="col">S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Date</td>
        </tr>
      </tbody>
    </Table>
  );

  return;

  return (
    <Main title="Calendar">
      <Content isPhone={isPhone} assets={assets} />
    </Main>
  );
}
