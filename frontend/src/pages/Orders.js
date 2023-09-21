import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import "../App.css";
import Axios from "axios";

export default function Orders() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/orders").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <h3 className="App">รายละเอียดของออเดอร์</h3>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>เบอร์โทร</th>
              <th>ไอดีการจอง</th>
              <th>ที่นั่ง</th>
            </tr>
          </thead>
          <tbody>
            {items.map((orders) => (
              <tr key={orders.order_id}>
                <td>{orders.order_id}</td>
                <td>{orders.F_name}</td>
                <td>{orders.L_name}</td>
                <td>{orders.phone}</td>
                <td>{orders.booking_id}</td>
                <td>{orders.seat_number	}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
