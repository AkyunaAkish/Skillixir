import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

class TopNav extends Component {
  constructor(props) {
    super(props);
  }

  changeRoute(route) {
    browserHistory.push(route);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className='top-nav'>
        <Navbar.Header>
          <Navbar.Brand>
            <img src='/images/logo_white_text_wide.png' onClick={this.changeRoute.bind(this, '/')} />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className='text-center'>
            <NavItem eventKey={1} onClick={this.changeRoute.bind(this, '/offering')}>
              OFFERING
              <Glyphicon glyph='tint' className='block' />
            </NavItem>
            <NavItem eventKey={2} onClick={this.changeRoute.bind(this, '/seeking')}>
              SEEKING
              <Glyphicon glyph='eye-open' className='block' />
            </NavItem>
            <NavItem eventKey={3} onClick={this.changeRoute.bind(this, '/signin')}>
              SIGN IN
              <Glyphicon glyph='log-in' className='block' />
            </NavItem>
            <NavItem eventKey={4} onClick={this.changeRoute.bind(this, '/signup')}>
              SIGN UP
              <Glyphicon glyph='globe' className='block' />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
