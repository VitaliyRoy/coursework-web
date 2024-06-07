import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './images/logo.png';

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Логотип" className="logo" />
        <h1>Найвідоміші туристичні місця України</h1>
      </header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/" className="menu-brand">Туризм України</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/about">Про сайт</Nav.Link>
            <Nav.Link href="/gallery">Галерея</Nav.Link>
            <Nav.Link href="/#news">Новини</Nav.Link>
            <Nav.Link href="#contacts">Контакти</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;