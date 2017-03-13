import React, { Component } from 'react'
import data from './data'

class Sumar extends Component {
    render(){
        return(
            <div>
                <button onClick={function(){data.Incrementar()}}>+</button>
            </div>
        )
    }
}

export default Sumar