import React from 'react';
import { connect } from 'react-redux';

export class TestButton1 extends React.Component {
    render() {
      return <button onClick={this.props.handleClick}>{this.props.name}</button>;
    }
}

const mapDispatchForIncrement = dispatch => {
  return {
    handleClick: () => dispatch({ type: 'INCREMENT' })
  }
};

const mapDispatchForDecrement = dispatch => {
  return {
    handleClick: () => dispatch({type: 'DECREMENT'})
  }
};


export const ContainerIncrementButton = connect(null, mapDispatchForIncrement)(TestButton1);
export const ContainerDecrementButton = connect(null, mapDispatchForDecrement)(TestButton1);

