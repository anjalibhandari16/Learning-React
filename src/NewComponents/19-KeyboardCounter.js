import React, { Component } from 'react'

class KeyboardCounter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      increaseCount = () => {
        this.setState( prevState => {
            return {count : prevState.count +1}
        })
      }


  render() {
    const{count} = this.state;

        return (
        // <input onKeyPress={this.increaseCount}>Pressed Keyboard {count} Times</input>
        // <input onKeyPress={this.increaseCount}></input>
        <></>

        )
  }
}

export default KeyboardCounter