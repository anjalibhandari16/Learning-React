import React, { Component } from "react";

class EventBind extends Component {
    constructor() {
        super();
        this.state = { message: "Hello Everyone", show: true };

        this.changedMessage=this.changedMessage.bind(this)
    }

    changedMessage() {
        this.setState({ message: "Welcome !! You Have Entered", show: false });
    }

    render() {
        console.log(this.state, "val");

        return (
            <div>
                <div>Hello world</div>
                {this.state.show === true ? (
                    // <button onClick={() => this.changedMessage()}>Click ME</button>
                    <button onClick={this.changedMessage}>Click ME</button>
                ) : null}
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default EventBind;
