import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, OverlayTrigger, Popover } from "react-bootstrap";

export default function NavPopover({
  id,
  baseUrl,
  links,
  buttonName,
  urlSuffix = "",
}) {
  let rows = [];
  let row = [];

  for (let i = 0; i < links.length; i++) {
    if (row.length === 3) {
      rows.push(row);
      row = [];
    }
    const url = `${baseUrl}/${links[i].toLowerCase()}${urlSuffix}`;
    row.push(
      <Link id={`linkTo${url}`} key={links[i]} to={url}>
        <Button>{links[i]}</Button>
      </Link>
    );
  }
  if (row.length) {
    rows.push(row);
  }
  const popover = (
    <Popover id={id}>
      <Popover.Body>
        <Table className="overflow-hidden">
          {rows.map((set) => {
            return (
              <tr>
                {set.map((link) => (
                  <td>{link}</td>
                ))}
              </tr>
            );
          })}
        </Table>
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success" className="position-relative">
        {buttonName}
      </Button>
    </OverlayTrigger>
  );
}
