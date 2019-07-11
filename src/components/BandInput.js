// Add BandInput component
import React, { Component } from 'react'
import { Connect } from 'react-redux';
import { addBand } from '../actions/Band';

class BandInput extends Component {

  state = {
  name: "",
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // this.props.addBand(band)
  }



  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h2>Band Name</h2>
            <input
            type="text" onChange={this.handleOnChange} value={this.state.name}/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch(addBand(band))
  }
}




// export default connect(null,mapDispatchToProps)(BandInput)
export default BandInput
