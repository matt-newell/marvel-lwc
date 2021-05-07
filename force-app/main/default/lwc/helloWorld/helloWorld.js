import { LightningElement, track, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track isLoading = true
    @track token
    @api characters

    connectedCallback(){
        console.log('One does not simply get a token')
    }
    
    async handleCharacters(){
        this.isLoading = true
        let results = await this.template.querySelector('c-marvel-service').characters
        this.characters = results.data
        this.isLoading = false
    }

    async handleFirst(){
        this.isLoading = true
        await this.template.querySelector('c-marvel-service').showFirst()
        this.isLoading = false
    }

    async handleNext(){
        this.isLoading = true
        await this.template.querySelector('c-marvel-service').showNext()
        this.isLoading = false
    }

    async handlePrev(){
        this.isLoading = true
        await this.template.querySelector('c-marvel-service').showPrev()
        this.isLoading = false
    }

    async handleLast(){
        this.isLoading = true
        await this.template.querySelector('c-marvel-service').showLast()
        this.isLoading = false
    }

    get showPage(){
        if(this.characters){
            return this.characters.offset
        }else{
            return 0
        }
    }

    get showPageSize(){
        if(this.characters){
            return this.characters.limit
        }else{
            return 0
        }
    }

    get showTotal(){
        if(this.characters){
            return this.characters.total
        }else{
            return 0
        }
    }

    get characterList(){
        if(this.characters){
            return this.characters.results
        }else{
            return []
        }
    }
}