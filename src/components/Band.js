import React, {Component} from 'react'

class Band extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <li>{this.props.name}</li>
        )
    }
}

export default Band