import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

class TopNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className='top-nav'>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/' className='side-link'>
              <img src='/images/logo_white_text_wide.png'/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              OFFERING
              <Glyphicon glyph='tint' className='block inline' />
            </NavItem>
            <NavItem eventKey={2}>
              SEEKING
              <Glyphicon glyph='eye-open' className='block inline' />
            </NavItem>
            <NavItem eventKey={3}>
              SIGN IN
              <Glyphicon glyph='log-in' className='block inline' />
            </NavItem>
            <NavItem eventKey={4}>
              SIGN U
              <Glyphicon glyph='globe' className='block inline' />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
