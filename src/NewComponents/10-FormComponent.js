import React, { Component } from 'react';
import '../CSS/myStyles.css';

export class FormComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      comments:'',
      topic:'vue'
    }
  }

  handleNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleOptionChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handlesubmit = event =>{
    alert(` UserName: ${this.state.firstName} , Comment : ${this.state.comments}, Topic : ${this.state.topic}`)
    event.preventDefault();
  }

  render() {

    return (
      <div className='container'>
        <form className='form' onSubmit={this.handlesubmit}>

          <div className='item'>
            <label>UserName</label>
            <input type='text' value={this.state.firstName}
              onChange={this.handleNameChange}></input>
          </div>

          <div className='item'>
            <label>Comments</label>
            <textarea value={this.state.comments}
              onChange={this.handleCommentsChange}></textarea>
          </div>

          <div className='item'>
            <label>Topic</label>
            <select value={this.state.topic}
              onChange={this.handleOptionChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
              </select>
          </div>

          <button type='submit'>Sumbit</button>

        </form>
      </div>
    )
  }
}

export default FormComponent;