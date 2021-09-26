import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <Navbar sticky="top" expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Админ панель</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' exact>Главная страница</Nav.Link>
            <Nav.Link as={NavLink} to='/catalog'>Страница каталога</Nav.Link>
            <Nav.Link as={NavLink} to='/products'>Товары</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
