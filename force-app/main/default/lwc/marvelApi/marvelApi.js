import getToken from '@salesforce/apex/MarvelService.getToken'

const getCharacters = async (page= 0, pageSize= 15) => {
    const urlParams = encodeURI(await MarvelApi.token() + `&offset=${page}&limit=${pageSize}&orderBy=-modified` )
    let response = await fetch('https://gateway.marvel.com/v1/public/characters?' + urlParams)
    MarvelApi.characters = await response.json()
    return MarvelApi.characters
}

let MarvelApi = {
    characters: {},
    token: async () => {
        return getToken()
    },
    getCharacters: async (page, pageSize) => {
        return getCharacters(page, pageSize)
    }

}

export { MarvelApi }