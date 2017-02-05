import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  add() {
    this.props.addNumber();
  }

  render() {
    return (
      <div>
        <button onClick={this.add.bind(this)}>
          Add Number
        </button>
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
