import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navigation.css'; // Make sure this import is present

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact>
          {'Startup'}
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={NavLink} to="/savol" activeClassName="active-link">savol</Nav.Link>
            <Nav.Link as={NavLink} to="/goyalar" activeClassName="active-link">g'oyalar</Nav.Link>
            <Nav.Link as={NavLink} to="/huquqiy-hujjatlar" activeClassName="active-link">Huquqiy hujjatlar</Nav.Link>
            <Nav.Link as={NavLink} to="/analitika" activeClassName="active-link">analitika</Nav.Link>
            <Nav.Link as={NavLink} to="/hamjamiyat" activeClassName="active-link">hamjamiyat</Nav.Link>
            <Nav.Link as={NavLink} to="/viz-dastur" activeClassName="active-link">viz-dastur</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;