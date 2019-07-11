import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import BandList from '../components/BandList.js'
import { connect } from 'react-redux';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>

        {this.props.bands.map((band,index) => <BandList key={index} band={band} />)}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      bands: state.bands
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addBand: band => dispatch({ type: 'ADD_BAND', payload: band })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
