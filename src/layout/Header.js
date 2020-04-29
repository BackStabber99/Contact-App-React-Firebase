//TODO: set NavbarBrand to go to home page and export Header//Done

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand tag={Link} to="/" className="text-white">Contact App</NavbarBrand>
      {
        //Can do this also
        //<Link to="/">Home</Link>
      }
      <NavbarText className="text-white float-right">
        A Contact apps
      </NavbarText>
    </Navbar>
  );
};

export default Header;