import React, { useState } from "react";
import { Container, Row, Button, Form, Modal, Col } from "react-bootstrap";
import BusTable from "../components/BusTable";
import DriverTable from "../components/DriverTable";

export default function Bus() {
  const [show, setShow] = useState(false);
  const [busList, setBusList] = useState({});
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onSave(e) {
    e.preventDefault();
    fetch("http://localhost:3001/api/bus/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(busList),
    })
      .then((res) => {
        res.json();
        const bus = [...data];
        bus.push({ ...busList });
        setData(bus);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>ข้อมูลรถ</h3>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleShow} size="lg">
              เพิ่มข้อมูล
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>เพิ่มข้อมูลรถ</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label htmlFor="bus_number">ทะเบียนรถ</Form.Label>
                    <Form.Control
                      type="text"
                      id="bus_number"
                      onChange={(e) =>
                        setBusList({ ...busList, bus_number: e.target.value })
                      }
                      // placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label htmlFor="bus_seat">จำนวนที่นั่ง</Form.Label>
                    <Form.Control
                      type="number"
                      id="bus_seat"
                      onChange={(e) =>
                        setBusList({ ...busList, bus_seat: e.target.value })
                      }
                      // placeholder="name@example.com"
                      // autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label htmlFor="driver_id">รหัสคนขับ</Form.Label>
                    <Form.Control
                      type="number"
                      id="driver_id"
                      onChange={(e) =>
                        setBusList({ ...busList, driver_id: e.target.value })
                      }
                      // placeholder="name@example.com"
                      // autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={onSave}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <BusTable />
          </Col>
          <Col>
            <DriverTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
