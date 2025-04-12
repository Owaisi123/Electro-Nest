import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { BsSearch, BsPerson, BsHeart, BsBag } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const SecNavbar = () => {
  const [cartItems] = useState(3);

  return (
    <>
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        className="p-3 border-bottom border-dark"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="fs-3 fw-bold text-dark">
            ElectroNest
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="text-dark mx-3">
                Shop
              </Nav.Link>
              <Nav.Link href="#" className="text-dark mx-3">
                Collections
              </Nav.Link>
              <Nav.Link href="#" className="text-dark mx-3 fw-bold">
                VIP Club
              </Nav.Link>
            </Nav>

            <Nav className="align-items-center">
              <Form className="d-flex me-3">
                <FormControl
                  type="search"
                  placeholder="Search luxury items..."
                  className="bg-transparent text-dark border-dark"
                  aria-label="Search"
                />
                <Button variant="outline-light" className="ms-2">
                  <BsSearch className="text-dark" />
                </Button>
              </Form>

              <Nav.Link href="#" className="text-dark mx-2">
                <BsPerson size={20} />
              </Nav.Link>

              <Nav.Link href="#" className="text-dark mx-2 position-relative">
                <BsHeart size={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge bg-warning">
                  2
                </span>
              </Nav.Link>

              <Nav.Link href="#" className="text-dark mx-2 position-relative">
                <BsBag size={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge bg-warning">
                  {cartItems}
                </span>
              </Nav.Link>

              <NavDropdown
                title={
                  <span className="text-dark">
                    English <IoMdArrowDropdown className="d-inline-block" />
                  </span>
                }
                menuVariant="light"
                className="mx-2"
              >
                <NavDropdown.Item href="#">English</NavDropdown.Item>
                <NavDropdown.Item href="#">Urdu</NavDropdown.Item>
                <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SecNavbar;
