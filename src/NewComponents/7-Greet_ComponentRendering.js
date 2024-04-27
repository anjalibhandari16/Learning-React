import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor() {
        super();
        this.state = { isLogged: true }
    }
    // If/else
    // render(){
    //     if(this.state.isLogged){
    //         return(
    //             <div>Hello User123456</div>)
    //     }
    //     return(
    //         <div>Hello User</div>
    //     )
    // }

    // Variable Element
    // render(){
    //     let message
    //     if(this.state.isLogged)
    //         message = <div>Hello User123456</div>
    //     else
    //         message = <div>Hello User</div>

    //     return(
    //         <div>{message}</div>
    //     )
    // }

    // Ternary conditional operator
    // render() {
    //     return (
    //         this.state.isLogged ?
    //             <div>Hello User123456</div> :
    //             <div>Hello User</div>
    //     )
    // }

    //Short circuit operator
    render() {
        return (
            this.state.isLogged && <div>Hello User123456</div>
        )
    }

}

export default ConditionalRendering;