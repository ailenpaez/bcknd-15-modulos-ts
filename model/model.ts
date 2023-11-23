// IMPORTAR OBJETO ENTERO, para acceder a una prop del objeto uso el punto.
// import fs from "node:fs"
// console.log(fs.readFileSync);

import {readFileSync} from "node:fs" //desestructuring
//Extrae una prop del objeto.

const PATH = "./database/data.json"

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

const getAll = () : ApiData => JSON.parse(readFileSync(PATH).toString());

const getCharacterById = (id: number):string =>{
    const data = getAll();
    const character = data.results.find((character:Character) => character.id === id);
    return character.name;
}

export {getAll, getCharacterById}