import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='side-nav'>
        <Link to='/' className='side-link'>
          <Button className='side-nav-button logo-button'>
            <img src='/images/logo_white_text.png'/>
          </Button>
        </Link>
        <Link to='/offering' className='side-link'>
          <Button className='side-nav-button'>
            OFFERING
            <Glyphicon glyph='tint' className='block icon' />
          </Button>
        </Link>
        <Link to='/seeking' className='side-link'>
          <Button className='side-nav-button'>
            SEEKING
            <Glyphicon glyph='eye-open' className='block icon' />
          </Button>
        </Link>
        <Link to='/signin' className='side-link'>
          <Button className='side-nav-button'>
            SIGN IN
            <Glyphicon glyph='log-in' className='block icon' />
          </Button>
        </Link>
        <Link to='/signup' className='side-link'>
          <Button className='side-nav-button'>
            SIGN UP
            <Glyphicon glyph='globe' className='block icon' />
          </Button>
        </Link>
      </nav>
    );
  }
}

export default SideNav;
