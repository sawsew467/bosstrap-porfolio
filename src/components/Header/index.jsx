import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      expand="md"
      className="bg-dark text-light"
      style={{ backgroundColor: "#f56106", position: 'fixed', left: 0, top: 0, right: 0 }}
    >
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          ThangTVB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link className="text-light" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="text-light" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className="text-light" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="text-light" href="#">
            <i class="fa-brands fa-facebook"></i>
          </Nav.Link>
          <Nav.Link className="text-light" href="#">
            <i class="fa-brands fa-github"></i>
          </Nav.Link>
          <Nav.Link className="text-light" href="#">
            <i class="fa-solid fa-envelope"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
