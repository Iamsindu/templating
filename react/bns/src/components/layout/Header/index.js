import React from 'react';

//react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// react-icons
import {ImPhone} from 'react-icons/im'; 
import { MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

//images
import logo from '../../../assets/images/home-page/logo.png';

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col>
              <div className="header__top--details">
                <div className="mr76">
                <span className="info location">
                  <MdLocationOn className="mr"/>
                  Brisbane, Australia 
                </span>
                </div>
                <div>
                <span className="info contact">
                  <ImPhone className="mr" />
                  +997 9852255558
                </span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="header__top--social">
                <FaFacebookF className="social" />
                <FaLinkedinIn className="social" />
                <FaTwitter className="social"/>
                <FaYoutube className="social"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header__bottom">
        <Navbar collapseOnSelect expand="lg" className="navheader">
          <Container>
            <Navbar.Brand href="/">
              <div className="navheader__logo">
                <img src={logo} alt="logo" className="logo" width="82px" height="72px"/>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link href="/" className="nav-items">Home</Nav.Link>
                <Nav.Link href="/about" className="nav-items">About</Nav.Link>                
                <NavDropdown href="/services" className="nav-items text-dark" title="Services" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/services">INDUSTRIAL CLEANING </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/services">RESIDENTIAL CLEANING</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/services">COMMERCIAL CLEANING </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact" className="nav-items">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
    </>
  );
};

export default Header;