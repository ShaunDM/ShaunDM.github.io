import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, OverlayTrigger, Popover } from "react-bootstrap";

export default function NavPopover({ id, baseUrl, links, buttonName }) {
  const rows = [];
  const row = [];

  for (let i = 0; i < links.length; i++) {
    if (row.length === 3) {
      rows.push(row);
      row = [];
    }
    row.push(
      <Link to={`${baseUrl}/${links[i].path}`}>
        <Button>{links[i].name}</Button>
      </Link>
    );
  }
  if (row.length) {
    rows.push(row);
  }
  const popover = (
    <Popover id={id}>
      <Popover.Body>
        <Table>
          {rows.map((row) => {
            <tr>
              {row.map((link) => (
                <td>{link}</td>
              ))}
            </tr>;
          })}
        </Table>
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="success">{buttonName}</Button>
    </OverlayTrigger>
  );
}
