import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput bands={this.props.bands} addBand={this.props.addBand}/><br />
        Bands:
        <ul>
          {this.props.bands.map((band) => {
            return <li>{band.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  };
}

const bandListItems = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
