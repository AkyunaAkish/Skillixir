import React, { Component } from 'react';
import _ from 'lodash';
import TopNav from './navigation/TopNav';
import SideNav from './navigation/SideNav';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let buttons = document.querySelectorAll('button');

    _.each(buttons, (el) => {
      el.addEventListener('click', () => {
        el.blur();
      });
    });
  }

  render() {
    return (
      <div className='layout'>
        <TopNav />
        <SideNav />
        <section className='main-content'>
          { this.props.children }
        </section>
      </div>
    )
  }
}

export default Layout;
