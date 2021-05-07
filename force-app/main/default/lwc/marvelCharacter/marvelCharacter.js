import { LightningElement, track, api } from 'lwc'
import { MarvelApi } from 'c/marvelApi'

export default class MarvelCharacter extends LightningElement {
 
    @track characters
    @track isLoading = true

    async connectedCallback(){
        this.characters = await MarvelApi.getCharacters()
        this.isLoading = false
    }

    async handleFirst(){
        this.isLoading = true
        this.characters = await MarvelApi.getCharacters()
        this.isLoading = false
    }

    async handleNext(){
        this.isLoading = true
        this.characters = await MarvelApi.getCharacters(
            this.characters.data.offset + this.characters.data.limit, 
            this.characters.data.limit
        )
        this.isLoading = false
    }

    async handlePrev(){
        this.isLoading = true
        this.characters = await MarvelApi.getCharacters(
            this.characters.data.offset - this.characters.data.limit, 
            this.characters.data.limit
        )
        this.isLoading = false
    }

    async handleLast(){
        this.isLoading = true
        this.characters = await MarvelApi.getCharacters(
            this.characters.data.total - this.characters.data.limit, 
            this.characters.data.limit
        )
        this.isLoading = false
    }

    get showPage(){
        if(this.characters){
            return this.characters.data.offset
        }else{
            return 0
        }
    }

    get showPageSize(){
        if(this.characters){
            return this.characters.data.limit
        }else{
            return 0
        }
    }

    get showTotal(){
        if(this.characters){
            return this.characters.data.total
        }else{
            return 0
        }
    }

    get characterList(){
        if(this.characters){
            return this.characters.data.results
        }else{
            return []
        }
    }
}