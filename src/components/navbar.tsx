import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./styles/navbar.scss";

interface NavigationProps {
  title: string;
}

const Navigation: React.FC<NavigationProps> = ({ title }) => (
  <Navbar bg="dark" variant="dark" className="navBar">
    <Navbar.Brand href="#home">{title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <LinkContainer to="/">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/projects">
          <Nav.Link>Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cv">
          <Nav.Link>CV</Nav.Link>
        </LinkContainer>
        <Nav.Item>
          <Button variant="outline-secondary" size="sm" className="ml-10">
            Download CV
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
