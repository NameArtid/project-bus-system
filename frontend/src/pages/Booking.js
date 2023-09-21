import React, { useEffect, useState } from "react";
import { Button, Container, Table, Row } from "react-bootstrap";
import "../App.css";
import Axios from "axios";
import SeatBooking from "../components/SeatBooking";
import { Link } from "react-router-dom";

export default function Booking() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:3001").then((response) => {
      setItems(response.data);
    });
  }, []);
  return (
    <div className="App">
      <Container>
        <Row>
          <h3>จัดการการจอง</h3>
          <br />

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
                <tr key={booking.ID}>
                  <td>{booking.ID}</td>
                  <td>{booking.username}</td>
                  <td>{booking.password}</td>
                  {/* <td>{booking.origin_point}</td>
                  <td>{booking.destination_point}</td>
                  <td>{booking.price}</td> */}
                  <td>
                    <Link to={'/seatbooking'}>
                      <Button variant="outline-primary" type="submit">
                        จองเลย
                      </Button>
                    </Link>
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
