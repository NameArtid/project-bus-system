import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

export default function BookTable() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/booking").then((response) => {
      setItems(response.data);
    });
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>วันที่</th>
            <th>เวลา</th>
            <th>ต้นทาง</th>
            <th>ปลายทาง</th>
            <th>ราคา</th>
            <th>รหัสรถทัวร์</th>
          </tr>
        </thead>
        <tbody>
          {items.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.travel_date}</td>
              <td>{booking.travel_time}</td>
              <td>{booking.origin_point}</td>
              <td>{booking.destination_point}</td>
              <td>{booking.price}</td>
              <td>{booking.bus_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
