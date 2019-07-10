import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import {createBand} from '../actions'
import {connect} from 'react-redux'
import Band from '../components/Band'

class BandsContainer extends Component {
  constructor(props){
    super(props)
    
  }

  generateBands = () => {
    return this.props.bands.map(band => <Band name={band.name}/>)
    
    // console.log(this.props.bands)
  }

  render() {
    return(
      <div>
        <BandInput createBand={this.props.createBand}/>
        <ul>
          {this.generateBands()}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = ({bands}) => {
  return {bands}
}

let mapDispatchToProps = (dispatch) => {
  return {
    createBand: (band) => dispatch({type: "CREATE_BAND", data: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
