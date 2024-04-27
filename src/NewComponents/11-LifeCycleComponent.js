import React, { Component } from 'react'

export class LifeCycleComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first:'one'
      }
      console.log('Life Cycle constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Life Cycle static getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('Life Cycle componentDidMount')
    }

    shouldComponentUpdate(props,state){
        console.log('Life Cycle shouldComponentUpdate');
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Life Cycle getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Life Cycle componentDidUpdate');
        
    }

    handleChange=()=>{
        this.setState({
            first:'two'
        })
    }

  render() {
    console.log('Life Cycle render')
    return (
      <button onClick={this.handleChange}>LifeCycleComponent</button>
    )
  }
}

export default LifeCycleComponent