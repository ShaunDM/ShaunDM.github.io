import React from "react";
import Main from "../layout/Main";
import { Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

export default function Calendar() {
  const isPhone = useOutletContext()[0];
  const assets = useOutletContext()[1];

  const table = (
    <Table>
      <caption></caption>
      <thead>
        <tr>
          <button>Year</button>
          <button>Back</button>
          Month
          <button>Forward</button>
        </tr>
        <tr>
          <th scope="col">S</th>
          <th scope="col">M</th>
          <th scope="col">T</th>
          <th scope="col">W</th>
          <th scope="col">T</th>
          <th scope="col">F</th>
          <th scope="col">S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Date</td>
        </tr>
      </tbody>
    </Table>
  );

  return (
    <Main title="Calendar">
      <Content isPhone={isPhone} assets={assets} />
    </Main>
  );
}
