import React from "react";
import { Card, CardGroup } from "react-bootstrap";

export default function CalendarBody({ columns, days, calendarStart }) {
  let rows = [];
  let row = [];
  const blank = <td className="emptyCalendarSlot"></td>;
  for (const [key, value] of Object.entries(days)) {
    if (key == 1) {
      while (row.length !== calendarStart) {
        row.push(blank);
      }
    }
    row.push(
      <td id={key} day={row.length} className="">
        <Card>
          <Card.Title>{key}</Card.Title>
          <Card.Body>Tasks</Card.Body>
          <Card.Footer>Points</Card.Footer>
        </Card>
      </td>
    );
    if (row.length === 7) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length && row.length !== 7) {
    while (row.length <= 7) {
      row.push(blank);
    }
    rows.push(row);
  }

  console.log(row);

  const tbody = (
    <tbody>
      {rows.map((row, index) => {
        return (
          <tr key={`wk: ${index + 1}`} className="calendarWeek">
            <CardGroup>{row}</CardGroup>
          </tr>
        );
      })}
    </tbody>
  );

  console.log(tbody);
  return tbody;
}
