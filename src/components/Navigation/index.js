import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Cheng's portfolio</Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#about-me">about</Nav.Link>
            <Nav.Link href="#work">work</Nav.Link>
            <Nav.Link href="#experience">experience</Nav.Link>
            <Nav.Link href="#contact-me">contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;