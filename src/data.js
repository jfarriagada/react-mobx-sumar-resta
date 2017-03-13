import { extendObservable } from 'mobx'

class Data {
    constructor(){
        extendObservable(this,
            { number: 0}
        );
    }

    Incrementar(){
        this.number = this.number + 1;
    }

    Decrementar(){
        this.number = this.number - 1;
    }
}


var data = new Data
export default data