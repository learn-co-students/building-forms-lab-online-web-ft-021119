import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { addBand } from '../actions/Band'
import Bands from '../components/Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {


  render() {
    return(
      <div>
        <BandInput addBand = { this.props.addBand } />
        <Bands bands = {this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })
// const mapStateToProps = (state) => {
//   return {
//     bands: state.bands
//   }
// }

export default connect(mapStateToProps, { addBand })(BandsContainer);
