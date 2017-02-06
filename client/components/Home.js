import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  add() {
    this.props.addNumber();
  }

  render() {
    return (
      <div className='text-center home'>
        <Button onClick={this.add.bind(this)}>Add Number</Button>
        <div>
          { this.props.number }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    number: state.number_reducer.number
  };
}


export default connect(mapStateToProps, actions)(Home);
