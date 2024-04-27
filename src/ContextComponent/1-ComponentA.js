import React, { Component } from 'react';
import ComponentB from './2-ComponentB';

class ComponentA extends Component {
  render() {
    return (
      <ComponentB />
    )
  }
}

export default ComponentA