import React, { Component } from "react";

class EventHandingClickComponent extends Component {
  changeEvent() {
    console.log("Button is pressed ---> Class");
  }
  render() {
    return <button onClick={this.changeEvent}>Click Me --{`>`} Class</button>;
  }
}

export default EventHandingClickComponent;
