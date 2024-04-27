import React,{ Component } from "react";



class Message extends Component{

    constructor(){
        super();
        this.state={message:'Hellow Visitor'}
    }

    changeComponent(){
        this.setState({
            message:'You have Entered'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeComponent()}>Click Me</button>
            </div>
        )
    }
}

export default Message;