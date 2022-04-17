import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Header.css";
import logo from "./../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  let navigete = useNavigate();
  return (
    <header>
      <Navbar bg="light" expand="lg" className="px-3">
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="services" as={Link}>Services</Nav.Link>
              <Nav.Link to="about" as={Link}>About</Nav.Link>
              <Nav.Link to="blogs" as={Link}>Blogs</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-danger" onClick={()=>{navigete('signup')}} className="signup-btn border-0 rounded-0 ms-2 px-4">Create Account</Button>
              <Button variant="outline-success" onClick={()=>{navigete('login')}}className="login-btn border-0 rounded-0 ms-2 px-4">Log in</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;