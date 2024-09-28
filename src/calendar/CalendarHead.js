import React from "react";

export default function CalendarHead({ columns }) {
  return (
    <thead>
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
