import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { Connect } from 'react-redux'

class BandsContainer extends Component {
  // let bands = this.state.bands.map((band, index) => {
  //   <li key={index}>band</li>
  // })
  render() {
    return(
      <div>
        Hello from bands container
      </div>
    )
  }
}

export default BandsContainer;
