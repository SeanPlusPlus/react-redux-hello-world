import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    )
  }
}

export default Navigation;
