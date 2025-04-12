import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Container, Nav, Navbar } from "react-bootstrap";

const TopHeader = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      {" "}
      \
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="w-100">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center w-100 text-white"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <p className="mb-0 text-center text-white">
              Summer Sale All Swim Suits And Free Express Delivery - OFF 50%!
              Shop Now
            </p>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link className="d-flex align-items-center gap-1 text-white">
              <span>English</span>
              <IoMdArrowDropdown className="text-white" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
