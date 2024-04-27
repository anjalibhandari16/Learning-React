import React, { Component } from "react";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback Value", this.state.count);
    //   }
    // );

    this.setState((prevState)=>({count:prevState.count+5}))
    console.log(this.state.count);
  }

  fiveIncrement(){
    this.incrementCount();
    // this.incrementCount();
    // this.incrementCount();
    // this.incrementCount();
    // this.incrementCount();
  }

  render() {
    return (
      <div>
        <h1>Current Count : {this.state.count}</h1>
        <button onClick={() => this.fiveIncrement()}>Click Me</button>
      </div>
    );
  }
}

export default Count;


