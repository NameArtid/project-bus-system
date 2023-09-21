import React, { useEffect, useState } from "react";
import { Button, Container, Table, Row } from "react-bootstrap";
import "../App.css";
import Axios from "axios";

export default function DatePicker() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/booking").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="App">
      <br />
      <Container>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>วันที่</th>
                <th>เวลาเดินทาง</th>
                <th>ต้นทาง</th>
                <th>ปลายทาง</th>
                <th>ราคา</th>
                <th>Action</th>
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
                  <td>
                    <Button variant="outline-primary" type="submit">
                      จองเลย
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}
