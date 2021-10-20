import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavbarTop() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Container>
      <Navbar.Brand href="#about">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#about">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experiences">Work</Nav.Link>
          <Nav.Link href="#awards">Awards</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  
}

export default NavbarTop
