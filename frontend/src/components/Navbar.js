import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <Navbar bg="info" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            BUS Ticket
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
              <Nav.Link as={Link} to={"/"}>
                หน้าแรก
              </Nav.Link>
              <Nav.Link as={Link} to={"/booking"}>
                จองตั๋ว
              </Nav.Link>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/bus"}>
                  รถทัวร์
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/createbooking"}>
                  จัดการการจอง
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/order"}>
                  Order
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/order"}>
                  อื่นๆ
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/order"}>
                  อื่น 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">payment</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
