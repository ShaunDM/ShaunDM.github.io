import React, { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import Schedule from "./Schedule";
import EditSchedule from "./EditSchedule";
import { months } from "../util/api.mjs";

export default function DaySchedule({ month, day, schedule }) {
  const mth = months.findIndex((element) => element == month) + 1;
  const [tab, setTab] = useState("schedule");
  const [tasks, setTasks] = useState(schedule);

  const handleSelectTab = (eventKey) => {
    setTab(eventKey);
  };
  const handleClickTask = ({ target }) => {
    setTasks(
      tasks.map((task, index) => {
        if (target.name == index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <Card id="schedule" className="width-fit">
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="schedule"
          onSelect={handleSelectTab}
        >
          <Nav.Item>
            <Nav.Link href="#schedule" eventKey={"schedule"}>
              {`${mth}/${day}`}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#edit" eventKey={"edit"}>
              Edit Tasks
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      {tab == "schedule" ? (
        <Schedule tasks={tasks} handleClickTask={handleClickTask} />
      ) : (
        <EditSchedule schedule={schedule} />
      )}
    </Card>
  );
}
