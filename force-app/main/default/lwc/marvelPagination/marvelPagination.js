import { LightningElement, api } from 'lwc'

export default class MarvelPagination extends LightningElement {
    @api page;
    @api pageSize;
    @api total;

    async showFirst(){    
        return this.dispatchEvent(
            new CustomEvent('showfirst')
        )
    }
    async showNext(){
        return this.dispatchEvent(
            new CustomEvent('shownext')
        )
    }
    async showPrev(){
        return this.dispatchEvent(
            new CustomEvent('showprev')
        )
    }
    async showLast(){
        return this.dispatchEvent(
            new CustomEvent('showlast')
        )        
    }
}