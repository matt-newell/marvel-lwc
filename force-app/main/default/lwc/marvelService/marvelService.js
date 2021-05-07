import { LightningElement, api, wire } from 'lwc';
import getToken from '@salesforce/apex/MarvelService.getToken'

export default class MarvelService extends LightningElement {
    @api characters;
    @api params;
    @wire(getToken)
    wireToken(result){
        if(result.data){
            this.params = result.data;
            this.getCharacters()
            this.dispatchEvent(
                new CustomEvent('token')
            )
        }
    }

    @api async getCharacters(page= 0, pageSize= 15){
        const urlParams = encodeURI(this.params + `&orderBy=-modified&offset=${page}&limit=${pageSize}` )
        let response = await fetch('https://gateway.marvel.com/v1/public/characters?' + urlParams)
        this.characters = await response.json()
        console.log('chars', this.characters);
        
        return this.dispatchEvent(
            new CustomEvent('characters')
        )
    }

    @api async showFirst(){
        await this.getCharacters()
    }

    @api async showNext(){
        await this.getCharacters(this.characters.data.offset + this.characters.data.limit, this.characters.data.limit)
    }

    @api async showPrev(){
        await this.getCharacters(this.characters.data.offset - this.characters.data.limit, this.characters.data.limit)
    }

    @api async showLast(){
        await this.getCharacters(this.characters.data.total - this.characters.data.limit, this.characters.data.limit)
    }    
}

export {MarvelService}