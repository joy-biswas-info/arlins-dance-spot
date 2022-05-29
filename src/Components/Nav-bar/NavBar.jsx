import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import { Link} from 'react-router-dom';

const NavBar = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Link to="/"> <img src="./logo192.png" alt="Logo" className='logoImg' /> </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse xs lg="2" className="justify-content-md-end" id="responsive-navbar-nav">
            <Nav className='text-reset'>
            <Link className='fs-5 fw-bolder menu-item text-white nav-link' to="/">Home</Link>
            <Link className='fs-5 fw-bolder menu-item text-white nav-link' to="booking-items">Indoor Class</Link>
            <Nav.Link className='fs-5 fw-bolder menu-item text-white' href="#">Outdoor Class</Nav.Link>
            <Nav.Link className='fs-5 fw-bolder menu-item text-white' href="#">Membership</Nav.Link>
            <Nav.Link className='fs-5 fw-bolder menu-item text-white' href="#">MemberLogIn</Nav.Link>
            <Nav.Link className='fs-5 fw-bolder menu-item text-white' href="#">Contact Us</Nav.Link>
            <Nav.Link className='fs-5 fw-bolder me-4 menu-item' href="#"><i className="fa-solid fa-cart-arrow-down"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;