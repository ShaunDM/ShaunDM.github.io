import React from "react";
import { Card, Button } from "react-bootstrap";
import CalendarDayCard from "./CalendarDayCard";

export default function CalendarDay({
  renderDay,
  value,
  day,
  row,
  handleClickDay,
}) {
  return (
    /*For some reason button doesn't encompass each component below it, 
    even though it counts the click. So every component has to have the id to
    pass to the event or when you click an element "above" the button 
    it returns undefined.*/
    <td id={renderDay} key={renderDay} day={row.length} className="calendarDay">
      <Button
        id={renderDay}
        variant="outline-secondary"
        className="padding-0 width-fit rounded-0"
        onClick={handleClickDay}
      >
        {renderDay == day ? (
          <Card
            id={renderDay}
            bg="secondary"
            text="light"
            className="width-fit"
          >
            <CalendarDayCard
              renderDay={renderDay}
              value={value}
              active={true}
            />
          </Card>
        ) : (
          <Card
            id={renderDay}
            bg="light"
            border="secondary"
            className="width-fit"
          >
            <CalendarDayCard renderDay={renderDay} value={value} />
          </Card>
        )}
      </Button>
    </td>
  );
}
