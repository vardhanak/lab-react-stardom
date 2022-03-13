import React, { Component } from 'react'
import Prostar from './Stardom';


export default class Data extends Component {
    constructor(props){
        super(props);
        this.state= this.props.data //accesing props
    }

    render() {
        return (
            <div>
                 <Prostar data = {this.state}/>
                      {/*React calls /return the Data component of state value {data= {this.state}} as props.  */}

            </div>
        )
    }
}