import React, {Component} from 'react'


class Bands extends Component {
 render(){
    return (
      <ul>
        {this.props.bands.map(b=>(
      <li>{b.name}</li>

        	))}
      </ul>
    );
  }
}
export default Bands