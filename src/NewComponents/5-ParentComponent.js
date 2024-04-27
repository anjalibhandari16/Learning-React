import React, {Component} from 'react';
import ChildComponent from './6-ChildComponent';

class ParentComponent extends Component{
    constructor(){
        super()
        this.state={greet:'Hello'}

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(prop){
        alert(`Hello message ${this.state.greet} from ${prop}`)
    }

    render(){
        return(
            <ChildComponent eventHandeler={this.greetParent}/>
        )
    }
}

export default ParentComponent;