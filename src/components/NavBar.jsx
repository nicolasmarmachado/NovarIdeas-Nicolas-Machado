import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./estilos.css";

export default function NavBar() {
  
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');
      </style>
      <div>
        <Navbar className="navbar">
          <img src="logo_NI.jpg" alt="logo" className="logo" />
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="home" as={Link} to="/">
                  Inicio
                </Nav.Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/categorias/cestos">
                    Cestos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item as={Link} to="/categorias/llaveros">
                    Llaveros
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item as={Link} to="/categorias/paneras">
                    Paneras
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item as={Link} to="/categorias/individuales">
                    Individuales
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <CartWidget />
        </Navbar>
      </div>
    </>
  );
};

