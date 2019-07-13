// Add BandInput component
import React, { Component } from 'react'
import manageBand from '../reducers/manageBand'
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {}

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    dispatch({type: "ADD_BAND", band: this.state})
  }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}



export default connect(null, {manageBand})(BandInput)
