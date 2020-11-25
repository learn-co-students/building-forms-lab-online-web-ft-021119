import React, { Component } from 'react'

class BandInput extends Component {

  state = {name: ""}

  handleChange = (event) => {
    this.setState({
      name : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}



export default BandInput
