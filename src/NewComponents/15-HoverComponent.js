import React, { Component } from 'react';
import WrappedComponent from './16-HigherOrderFunction';

class HoverComponent extends React.Component {

  render() {

    // const {count} = this.state;
    const {count,countHandler} = this.props;

    return (
    <h2 onMouseOver={countHandler}>Hover {count} Component</h2>
    )
  }
}

export default WrappedComponent(HoverComponent)