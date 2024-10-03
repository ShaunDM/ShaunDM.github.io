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
      <td key={links[i]}>
        <Link id={`linkTo${url}`} to={url}>
          <Button>{links[i]}</Button>
        </Link>
      </td>
    );
  }
  if (row.length) {
    rows.push(row);
  }
  const popover = (
    <Popover id={id}>
      <Popover.Body>
        <Table className="overflow-hidden">
          <tbody>
            {rows.map((set, index) => {
              return <tr key={`row-${index}`}>{set.map((link) => link)}</tr>;
            })}
          </tbody>
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
