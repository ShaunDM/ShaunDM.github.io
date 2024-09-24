import React from "react";
import { useState, useEffect } from "react";
import Main from "../layout/Main";
import Content from "../layout/Content";
import { Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

export default function Calendar() {
  const isPhone = useOutletContext()[0];
  const assets = useOutletContext()[1];

  const [year, setYear] = useState(new Date(Date.now()).getFullYear());
  const [month, setMonth] = useState(new Date(Date.now()).getMonth());
  const [day, setDay] = useState(new Date(Date.now()).getDate());
  const [calendarDb, setCalendarDb] = useState({});

  useEffect(() => {
    setCalendarDb({});
    const abortController = new AbortController();

    async function loadCalendarDb() {
      try {
        const response = await fetch("../assets/calendar/calendarDb.json", {
          headers: { "Content-Type": "application/json" },
          signal: abortController.signal,
        });

        const payload = await response.json();
        if (payload.error) {
          return Promise.reject({ message: payload.error });
        }
        setCalendarDb(payload.data[year][month]);
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

  console.log(calendarDb["1"]);

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
