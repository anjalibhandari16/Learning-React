import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    console.log(this)
    return (
      <button onClick={()=>this.props.eventHandeler('child')}>Click Me</button>
    )
  }
}

export default ChildComponent