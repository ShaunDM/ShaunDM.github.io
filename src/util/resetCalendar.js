const fs = require("node:fs");

//Creates/Resets the database for the Calendar component
let data = {};
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//i increases by a year in milliseconds
for (
  i = Date.parse("01 Jan 1970");
  i <= Date.now() + 31536000000 * 5;
  i += 31536000000
) {
  const year = new Date(i).getFullYear().toString();
  for (let j = 1; j <= 12; j++) {
    const month = months[j - 1];
    let days = 31;
    switch (month) {
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
    for (let k = 1; k <= days; k++) {
      const day = k.toString();
      if (!data[year]) {
        data[year] = { [month]: null };
      }
      data = {
        ...data,
        [year]: {
          ...data[year],
          [month]: { ...data[year][month], [day]: null },
        },
      };
    }
  }
}

fs.writeFile(
  "./src/assets/calendar/calendardb.json",
  JSON.stringify(data),
  (err) => {
    if (err) throw err;
    console.log("Calendar has been reset");
  }
);
