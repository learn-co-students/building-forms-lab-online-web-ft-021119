// Add BandInput component
import React, { Component } from 'react'
import { addBand } from '../actions/bands'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={event => this.handleOnChange(event)}
            value={this.state.name}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
