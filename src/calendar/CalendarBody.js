import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CalendarBody({
  days,
  calendarStart,
  day,
  handleClickDay,
}) {
  let rows = [];
  let row = [];

  /*
  blanks are causing a warning to appear, no key. Can't convert blank to an 
  arrow function to solve it easily. Also tried adding an int variable and using 
  `blank-${++blankCount}` as the key, but that caused it to duplicate keys.
  Tried to use a loop with the element created inside and set the key based on int:
  blankCount, a month might have more than a weeks worth of blanks and i is based 
  on row.length so can't do it that way. For some reason it only gave a key to the 
  first blank element.
  */
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
        <Button
          id={key}
          variant="outline-secondary"
          className="padding-0"
          onClick={handleClickDay}
        >
          {key == day ? (
            <Card id={key} bg="secondary" text="light">
              <Card.Title id={key}>{key}</Card.Title>
              <Card.Body id={key}>Tasks</Card.Body>
              <Card.Footer id={key}>Points</Card.Footer>
            </Card>
          ) : (
            <Card id={key} bg="light" border="secondary">
              <Card.Title id={key}>{key}</Card.Title>
              <Card.Body id={key}>Tasks</Card.Body>
              <Card.Footer id={key}>Points</Card.Footer>
            </Card>
          )}
        </Button>
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
