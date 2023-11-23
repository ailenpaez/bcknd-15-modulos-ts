interface ApiData {
    info : any ,
    results: any
}

interface Character {
    id: number,
    name: string
    status: string,
    spices: string,
    type: string,
    gender: string,
    origin: any,
    location: any,
    image: string,
    episode: string[],
    url: string,
    created: string
}

export {ApiData, Character}