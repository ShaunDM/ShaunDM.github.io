import React from "react";

export default function CalendarHead({ month, columns }) {
  return (
    <thead>
      <tr>
        <button>Year</button>
        <button>Back</button>
        {month}
        <button>Forward</button>
      </tr>
      <tr>
        {columns.map(({ label, accessor }) => {
          return (
            <th scope="col" key={accessor}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
