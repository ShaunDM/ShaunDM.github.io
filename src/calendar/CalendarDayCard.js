import React from "react";
import { Card, ListGroup, Row } from "react-bootstrap";

export default function CalendarDayCard({ renderDay, value }) {
  let sum = 0;
  return (
    //need to move date so that it renders on the left.
    <>
      <Card.Title id={renderDay}>{renderDay}</Card.Title>
      <Card.Body id={renderDay}>
        <ListGroup id={renderDay}>
          {value.map((task) => {
            if (task.completed) sum += task.points;
            if (task.important) {
              return (
                <ListGroup.Item id={renderDay} className="text-wrap-nowrap">
                  <Row id={renderDay}>{task.task_name}</Row>
                </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
      </Card.Body>
      <Card.Footer id={renderDay}>{sum}</Card.Footer>
    </>
  );
}
