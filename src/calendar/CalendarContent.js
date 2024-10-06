import React from "react";
import { Table } from "react-bootstrap";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default function CalendarContent({
  month,
  columns,
  calendarDb,
  calendarStart,
  day,
  handleClickDay,
}) {
  const displayMonth = month[0].toUpperCase() + month.substring(1);
  //When calendar has more room than it needs, it expands the row width instead of stopping at the minimum size.
  return (
    <Table className="calendarTable">
      <caption></caption>
      <CalendarHead month={displayMonth} columns={columns} />
      <CalendarBody
        calendarDb={calendarDb}
        calendarStart={calendarStart}
        day={day}
        handleClickDay={handleClickDay}
      />
    </Table>
  );
}
