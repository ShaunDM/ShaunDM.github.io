import fs from "node:fs";
import { formatMonth } from "./api.mjs";

/*Creates/Resets the database (JSON) for the Calendar component.
creates data structure of:
{"year": {[year]: "month": {[month]: "day": {[day]: {[taskname]: [isCompleted, pointsAwarded], }}}}};
Might revert back to {[year] :{[month]: {[day]: {taskname: [isCompleted, pointsAwarded]}}}};
*/

let data = { 1970: null };

//i increases by a year in milliseconds
for (
  let i = Date.parse("01 Jan 1970");
  i <= Date.now() + 31536000000 * 5;
  i += 31536000000
) {
  const year = new Date(i).getFullYear().toString();
  if (!data[year]) {
    data[year] = { january: null };
  }

  for (let j = 1; j <= 12; j++) {
    const month = formatMonth(j - 1).toLowerCase();
    let days = 31;
    switch (j) {
      case 4: {
      }
      case 6: {
      }
      case 9: {
      }
      case 11: {
        days = 30;
        break;
      }
      case 2: {
        year % 4 ? (days = 28) : (days = 29);
        break;
      }
      default: {
        break;
      }
    }

    if (!data[year][month]) {
      data[year][month] = { 1: null };
    }

    for (let k = 1; k <= days; k++) {
      data[year][month] = {
        ...data[year][month],
        [k]: [
          {
            task_name: "Finish website",
            completed: false,
            points: 1000,
            important: true,
          },
          {
            task_name: "Go to the gym",
            completed: true,
            points: 50,
            important: false,
          },
          {
            task_name: "Get a new job",
            completed: false,
            points: 5000,
            important: true,
          },
        ],
      };
    }
  }
}

fs.writeFile(
  "./src/assets/calendar/calendar_db.json",
  JSON.stringify({ data: data }),
  (err) => {
    if (err) throw err;
    console.log("Calendar has been reset");
  }
);
