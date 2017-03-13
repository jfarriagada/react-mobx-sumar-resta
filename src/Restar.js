import React, { Component } from 'react'
import data from './data'

class Restar extends Component {
    render(){
        return(
            <div>
                <button onClick={function(){data.Decrementar()}}>-</button>
            </div>
        )
    }
}

export default Restar