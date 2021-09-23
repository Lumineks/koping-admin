import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => (
  <>
    <Navbar fixed="top" expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Админ панель</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Главная страница</Nav.Link>
            <Nav.Link>Страница каталога</Nav.Link>
            <Nav.Link>Товары</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default Header;
