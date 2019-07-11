import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'


class BandsContainer extends Component {
  state = {
    bands: []
  }

  render() {
    return(
      <div>
        <ul>
        </ul>
        <Bands bands={this.props.bands}/>
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {bands: state.bands}

}
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: bands => dispatch({ type: 'ADD_BAND', payload: bands })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
