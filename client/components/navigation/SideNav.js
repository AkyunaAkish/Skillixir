import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  changeRoute(route) {
    browserHistory.push(route);
  }

  render() {
    return (
      <nav className='side-nav'>
        <Button className='side-nav-button logo-button' onClick={this.changeRoute.bind(this, '/')}>
          <img src='/images/logo_white_text.png'/>
        </Button>
        <Button className='side-nav-button' onClick={this.changeRoute.bind(this, '/offering')}>
          OFFERING
          <Glyphicon glyph='tint' className='block icon' />
        </Button>
        <Button className='side-nav-button' onClick={this.changeRoute.bind(this, '/seeking')}>
          SEEKING
          <Glyphicon glyph='eye-open' className='block icon' />
        </Button>
        <Button className='side-nav-button' onClick={this.changeRoute.bind(this, '/signin')}>
          SIGN IN
          <Glyphicon glyph='log-in' className='block icon' />
        </Button>
        <Button className='side-nav-button' onClick={this.changeRoute.bind(this, '/signup')}>
          SIGN UP
          <Glyphicon glyph='globe' className='block icon' />
        </Button>
      </nav>
    );
  }
}

export default SideNav;
