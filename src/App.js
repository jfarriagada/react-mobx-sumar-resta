import React, { Component } from 'react'
import { observer } from 'mobx-react'
import data from './data'
import Sumar from './Sumar'
import Restar from './Restar'

// observer es para "observar", cuando la información/estado cambia en otro componente
// lo detecta y lo modifica, en otras palabras vuelve hacer el render del componente App

class App extends Component {
    render(){
        return(
            <div>
                wena
                <Sumar/>
                {data.number}
                <Restar/>
            </div>
        )
    }
}

export default observer(App)