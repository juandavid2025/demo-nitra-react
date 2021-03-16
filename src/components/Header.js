import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import "./Header.css";

const header = (props) => {
  return (
    <div className="header">
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">DRG WIKI</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={props.attacksClicked}>Attacks</Nav.Link>
          <Nav.Link onClick={props.weaknessesClicked}>Weakneses</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
      <button className="headerButton" onClick={props.attacksClicked}>
        Attacks
      </button>
      <button className="headerButton" onClick={props.weaknessesClicked}>
        Weakneses
      </button>
    </div>
  );
};

export default header;
