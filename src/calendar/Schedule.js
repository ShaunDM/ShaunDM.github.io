import React from "react";
import { Card, InputGroup, Row, Col, Form } from "react-bootstrap";

export default function Schedule({ schedule }) {
  return (
    <Card.Body className="padding-0 width-fit">
      <Card.Title>Schedule</Card.Title>
      <Form>
        {schedule.map((task) => {
          return (
            <InputGroup key={task.task_name}>
              <Row id="scheduleListItem" className="">
                <Col xs="auto" className="padding-0 width-fit">
                  <Form.Check
                    type="checkbox"
                    checked={task.completed}
                    id={`checkbox_${task.task_name}`}
                    label={task.task_name}
                    className=""
                  />
                </Col>
                {/*Can't figure out how to align the text to the end*/}
                <Col className="pointsForTask padding-r-0 width-fit">
                  {task.points}
                </Col>
              </Row>
            </InputGroup>
          );
        })}
        <Row id="scheduleListItem">
          <Col className="padding-0 width-fit">
            <Form.Check
              label="fjasdlkhfkljanbf  kfjsadnojfbk aslafjdhf kjafbkj sjdbf kjsabdfjksakdnf ksjkdhfjksaj fhsjkdhfuhgsaduf kjsbn fkjsdjgfk askfkjsdbf dsfndj"
              type="checkbox"
              id="none"
            />
          </Col>
          <Col xs="auto" className="padding-r-0">
            1,000,000
          </Col>
        </Row>
      </Form>
    </Card.Body>
  );
}
