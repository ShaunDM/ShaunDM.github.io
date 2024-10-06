import React from "react";
import { Card, ListGroup, Row } from "react-bootstrap";

export default function CalendarDayCard({ renderDay, value, active = false }) {
  let sum = 0;
  let hasImportant = false;
  return (
    //need to move date so that it renders on the left.
    <>
      <Card.Title id={renderDay}>{renderDay}</Card.Title>
      <Card.Body id={renderDay} className="padding-0">
        {value.map((task) => {
          if (task.completed) sum += task.points;
          if (task.important && !hasImportant) {
            //need to add overflow-clip
            hasImportant = true;
            return <Card.Text id={renderDay}>{task.task_name}</Card.Text>;
          }
          return null;
        })}
      </Card.Body>
      <Card.Footer id={renderDay} className="padding-0">
        {sum}
      </Card.Footer>
    </>
  );
}
