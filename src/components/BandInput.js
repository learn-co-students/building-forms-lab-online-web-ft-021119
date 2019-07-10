// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      name : ""
    }

  }

  handleOnChange = (event) => {
    // event.preventDefault()
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
        
      </div>
    )
  }
}

export default BandInput
