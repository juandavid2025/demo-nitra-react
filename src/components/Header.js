import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { BrowserRouter as Link } from "react-router-dom";

const Header = (props) => {
  // let { path, url } = useRouteMatch();

  return (
    <div className="header">
      <button className="headerButton">
        <Link to={`/attacks`}>Attacks</Link>
      </button>
      <button className="headerButton">
        <Link to={`/weaknesses`}>Weaknesses</Link>
      </button>
    </div>
  );
};

export default Header;
