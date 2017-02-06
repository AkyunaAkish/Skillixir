import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='layout'>
        <nav className='side-nav'>
          <Button className='side-nav-button logo-button'>
            <img src='/images/logo_white_text.png'/>
          </Button>
          <Button className='side-nav-button'>
            OFFERING
            <Glyphicon glyph='tint' className='block icon' />
          </Button>
          <Button className='side-nav-button'>
            SEEKING
            <Glyphicon glyph='eye-open' className='block icon' />
          </Button>
          <Button className='side-nav-button'>
            SIGN IN
            <Glyphicon glyph='log-in' className='block icon' />
          </Button>
          <Button className='side-nav-button'>
            SIGN UP
            <Glyphicon glyph='globe' className='block icon' />
          </Button>
        </nav>
        <section className='main-content'>
          { this.props.children }
        </section>
      </div>
    )
  }
}

export default Layout;
