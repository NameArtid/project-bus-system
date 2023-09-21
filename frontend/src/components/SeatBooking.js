import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import Axios from "axios";

export default function SeatBooking() {
  const num = [];
  function createNum() {
    for (var i = 1; i <= 34; i++) {
      num.push(i);
    }
    // console.log(num);
    return num;
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //state input
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [booking, setBooking] = useState("");
  const [seat, setSeat] = useState("");

  const [order, setOrder] = useState([]);

  const addOrder = () => {
    Axios.post("http://localhost:3001/api/orders/create", {
      F_name: name,
      L_name: surName,
      phone: phone,
      booking_id: booking,
      seat_number: seat,
    }).then(() => {
      setOrder([
        ...order,
        {
          F_name: name,
          L_name: surName,
          phone: phone,
          booking_id: booking,
          seat_number: seat,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <h1>Seat Booking</h1>
      <br />
      <Container>
        <Row>
          <Col>
            <ul>
              {createNum().map((num) => (
                <div className="seat">
                  <h5 key={num}>{num}</h5>
                </div>
              ))}
            </ul>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ชื่อจริง"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="นามสกุล"
                  onChange={(e) => {
                    setSurName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>เบอร์โทรศัพท์</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="เบอร์โทรส่วนตัว"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>เลขที่นั่ง</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="เลือกที่นั่งที่ต้องการ"
                  onChange={(e) => {
                    setSeat(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>รหัสการจอง</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="เลือกรหัสการจอง"
                  onChange={(e) => {
                    setBooking(e.target.value);
                  }}
                />
              </Form.Group>
              <Link to={"/booking"}>
                <Button variant="outline-secondary">ก่อนหน้า</Button>
              </Link>{" "}
              <Button variant="outline-success" onClick={handleShow}>
                ยืนยันการจอง
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>ยืนยันการจองตั๋ว</Modal.Title>
                </Modal.Header>
                <Modal.Body>ทำรายการเสร็จสิ้น !!!</Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button> */}
                  <Link to={"/"}>
                    <Button variant="outline-success" onClick={addOrder}>
                      OK
                    </Button>
                  </Link>
                </Modal.Footer>
              </Modal>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
