import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'


class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li> )
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', band: formData })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
