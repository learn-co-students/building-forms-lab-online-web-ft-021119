import React, { Component } from 'react';
import { link } from 'fs';

class Bands extends Component {

    render() {
        const bands = this.props.bands.map(band => <li> {band.name}</li>)
        // debugger
        return (
            <div>
                <ul>
                    {bands}
                </ul>
            </div>
        );
    }
}

export default Bands;
