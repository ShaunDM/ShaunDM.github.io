import React from "react";
import { Table } from "react-bootstrap";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default function CalendarContent({
  month,
  columns,
  calendarDb,
  calendarStart,
}) {
  const displayMonth = month[0].toUpperCase() + month.substring(1);
  return (
    <Table>
      <caption></caption>
      <CalendarHead month={displayMonth} columns={columns} />
      <CalendarBody days={calendarDb} calendarStart={calendarStart} />
    </Table>
  );
}
