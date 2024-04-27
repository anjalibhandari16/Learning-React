import React, { Component } from 'react';
import ComponentC from './3-ComponentC';
import userContext from './useContext';

class ComponentB extends Component {

  // static contextType = userContext;

  render() {
    return (
      <div>
        <>User context from Component B {this.context}</>
        <ComponentC />
      </div>
      
    )
  }
}

ComponentB.contextType = userContext;

export default ComponentB