import React from "react";
import { Card } from "react-bootstrap";

export default function CalendarBody({ days, calendarStart }) {
  let rows = [];
  let row = [];
  const blank = (
    <td className="emptyCalendarSlot calendarDay">
      <Card />
    </td>
  );
  for (const [key, value] of Object.entries(days)) {
    if (key == 1) {
      while (row.length !== calendarStart) {
        row.push(blank);
      }
    }
    row.push(
      <td id={key} day={row.length} className="calendarDay">
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
  if (row.length) {
    while (row.length < 7) {
      row.push(blank);
    }
    rows.push(row);
  }

  return (
    <tbody>
      {rows.map((row, index) => {
        return (
          <tr key={`wk: ${index + 1}`} className="calendarWeek">
            {row}
          </tr>
        );
      })}
    </tbody>
  );
}
