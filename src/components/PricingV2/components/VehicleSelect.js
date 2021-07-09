import React from 'react'
import styled from 'styled-components';
import { Nav, NavLink, NavItem } from 'react-bootstrap';

const StyledNavItem = styled(NavItem)`
  .nav-link.active {
    background-color: #212121;
    border-radius: 12px;
  }
`;

const VehicleSelect = ({ vehicles }) => {
  return (
    <Nav className="flex-row justify-content-center" >
      {vehicles.map(({ name, icon }) => (
        <StyledNavItem>
          <NavLink eventKey={name}>{icon}</NavLink>
        </StyledNavItem>
      ))}
    </Nav>
  );
};

export default VehicleSelect;
