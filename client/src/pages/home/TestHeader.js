import React from 'react';
import { connect } from 'react-redux';

export class TestHeader extends React.Component {
    render() {
      return <h2>The current state is {this.props.count}. Edit me at <code>src/components/TestComponent.js</code></h2>;
    }
}

const mapStateToProps = state => {
  return {
    count: state
  };
};

export const ContainerTestHeader = connect(mapStateToProps)(TestHeader);