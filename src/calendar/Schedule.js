import React from "react";
import { Card, InputGroup, Row, Col, Form } from "react-bootstrap";
import { convertSentenceToId } from "../util/api.mjs";

export default function Schedule({ tasks, handleClickTask }) {
  let sum = 0;
  return (
    <>
      <Card.Body className="padding-0 width-fit">
        <Card.Title>Schedule</Card.Title>
        <Form>
          {tasks.map((task, index) => {
            const { task_name, points, completed } = task;
            if (completed) sum += points;
            return (
              <InputGroup key={task_name}>
                <Row id="scheduleListItem" className="" key={task_name}>
                  <Col xs="auto" className="padding-0 width-fit">
                    <Form.Check
                      type="checkbox"
                      checked={completed}
                      name={index}
                      id={`checkbox_${convertSentenceToId(task_name)}`}
                      label={task_name}
                      className=""
                      onClick={handleClickTask}
                    />
                  </Col>
                  {/*Can't figure out how to align the text to the end*/}
                  <Col className="pointsForTask padding-r-0 width-fit">
                    {points}
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
      <Card.Footer>{sum}</Card.Footer>
    </>
  );
}
