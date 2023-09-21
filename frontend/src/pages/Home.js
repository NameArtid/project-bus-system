import React from "react";
import { Container, Row } from "react-bootstrap";
import BasicExample from "../components/Cards";
import UncontrolledExample from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <UncontrolledExample />
        </Row>
        <br />
        <Row>
          <BasicExample />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
