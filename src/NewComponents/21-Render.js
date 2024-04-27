import React, { Component } from 'react'

class RenderProps extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      clickHandle = () => {
          this.setState( prevState => 
          {return {count : prevState.count +1 }}
          )
  
          // this.setState({
          //     count : this.state.count +1
          // })
      }

  render() {
    return (
      <div>{this.props.render(this.state.count,this.clickHandle)}</div>
    )
  }
}

export default RenderProps