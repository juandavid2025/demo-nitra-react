import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">DRG WIKI</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={props.attacksClicked}>Attacks</Nav.Link>
          <Nav.Link onClick={props.weaknessesClicked}>Weakneses</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;