import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import BookTable from "../components/BookTable";
import "../App.css";

export default function CreateBooking() {
  return (
    <div>
      <Container>
        <Row>
          <h3 className="App">จัดการการจอง</h3>
        </Row>
        <br />
        <Row>
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> */}
        </Row>
        <br />
        <Row>
          <BookTable />
        </Row>
      </Container>
    </div>
  );
}
