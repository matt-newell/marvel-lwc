import { LightningElement, api } from 'lwc';

export default class MarvelThumbnail extends LightningElement {
    @api character;

    get characterImage(){
        if(this.character){
            return `background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${this.character.thumbnail.path}.${this.character.thumbnail.extension}")`
        }
    }

    get imageSrc(){
        if(this.character){
            return this.character.thumbnail.path + '.' + this.character.thumbnail.extension
        }
    }

    get characterName(){
        if(this.character){
            return this.character.name
        }
    }

    get resourceURI(){
        if(this.character){
            return this.character.resourceURI
        }
    }
}