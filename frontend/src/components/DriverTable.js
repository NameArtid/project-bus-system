import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

export default function DriverTable() {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/driver")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setItems(result);
  //     });
  // }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/driver").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ชื่อคนขับ</th>
          </tr>
        </thead>
        <tbody>
          {items.map((drive) => (
            <tr key={drive.driver_id}>
              <td>{drive.driver_id}</td>
              <td>{drive.driver_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
