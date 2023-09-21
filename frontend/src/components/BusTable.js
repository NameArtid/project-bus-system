import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import  Axios  from "axios";

export default function BusTable() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3001/api/bus")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setItems(result);
    //   });
    Axios.get("http://localhost:3001/api/bus").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ทะเบียนรถ</th>
            <th>จำนวนที่นั่ง</th>
            <th>รหัสคนขับ</th>
          </tr>
        </thead>
        <tbody>
          {items.map((bus) => (
            <tr key={bus.bus_id}>
              <td>{bus.bus_id}</td>
              <td>{bus.bus_number}</td>
              <td>{bus.bus_seat}</td>
              <td>{bus.driver_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
