import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => (
  <div>
    <Nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md fixed-top">
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
    </Nav>
  </div>
)

export default Navigation;
