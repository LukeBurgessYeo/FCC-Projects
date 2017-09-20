import React from 'react'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

const NavbarInstance = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
          <a href="https://www.freecodecamp.org/">FCC Projects</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer to="/home">
          <NavItem eventKey={1}>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/about">
          <NavItem eventKey={2}>About</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={3} title="Intermediate" id="intermediate-dropdown">
          <LinkContainer to="/quote">
            <MenuItem eventKey={3.1}>Quote Machine</MenuItem>
          </LinkContainer>
          <LinkContainer to="/weather">
            <MenuItem eventKey={3.2}>Weather Viewer</MenuItem>
          </LinkContainer>
          <LinkContainer to="/wikipedia">
            <MenuItem eventKey={3.3}>Wikipedia Viewer</MenuItem>
          </LinkContainer>
          <LinkContainer to="/twitch">
            <MenuItem eventKey={3.4}>Twitch Viewer</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown eventKey={4} title="Advanced" id="advanced-dropdown">
          <LinkContainer to="/calculator">
            <MenuItem eventKey={4.1}>Calculator</MenuItem>
          </LinkContainer>
          <LinkContainer to="/pomodoro">
            <MenuItem eventKey={4.2}>Pomodoro Clock</MenuItem>
          </LinkContainer>
          <LinkContainer to="/tictactoe">
            <MenuItem eventKey={4.3}>X's and O's</MenuItem>
          </LinkContainer>
          <LinkContainer to="/simon">
            <MenuItem eventKey={4.4}>Simon Game</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar >
)
export default NavbarInstance