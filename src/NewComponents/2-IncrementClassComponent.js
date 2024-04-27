import React, { Component } from 'react';

class IncrementFunction extends Component {

    constructor(){
        super();
        this.state={val:0}
    }

    increase(){
        this.setState({val:this.state.val+1})
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.increase()}>Click Me</button>
                <br/>
                {this.state.val}
            </div>
        )
    }
} 

export default IncrementFunction;