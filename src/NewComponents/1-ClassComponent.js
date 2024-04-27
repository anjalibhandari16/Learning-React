import React, { Component } from "react";

class ClassComponent extends Component {

    constructor() {
        super();
        this.state = { val: '' }
    }

    showVal() {
        this.setState({ val: 'You Have Clicked' })
    }


    render() {
        console.log(this.props, this);

        return (
            <div>
                Hello World !!!!! {this.props.name}
                <br />
                {this.props.children}
                <br />
                <button onClick={() => this.showVal()}>Click Me</button>
                <br />
                {this.state.val}
            </div>);
    }
}

export default ClassComponent;
