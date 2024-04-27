import React, { Component } from 'react'

class ClickCount extends Component {

  render() {
    const{count,clickHandle} = this.props;

    return (
      <button onClick={clickHandle}> Click {count} Times</button>
    )
  }
}

export default ClickCount