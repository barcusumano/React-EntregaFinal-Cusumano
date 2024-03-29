import React from 'react'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = ({ cartItems }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Link className="pagetitle" to="/">
          FunkoStore
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlinkcontainer">
            <Link className="navlink" to="/catalog">
              Catalog
            </Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categories/WizardingWorld">
                Wizarding World
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/Pokemon">
                Pokemon
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/shoppingPage">
              <CartWidget cartItems={cartItems} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar