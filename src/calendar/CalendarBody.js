import React from "react";
import { Card } from "react-bootstrap";
import CalendarDay from "./CalendarDay";

export default function CalendarBody({
  calendarDb,
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
  for (const [key, value] of Object.entries(calendarDb)) {
    const renderDay = key;
    if (key == 1) {
      while (row.length !== calendarStart) {
        row.push(blank);
      }
    }
    row.push(
      <CalendarDay
        renderDay={renderDay}
        value={value}
        day={day}
        row={row}
        handleClickDay={handleClickDay}
      />
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
          <tr key={`wk-${index + 1}`} className="calendarWeek">
            {row}
          </tr>
        );
      })}
    </tbody>
  );
}
