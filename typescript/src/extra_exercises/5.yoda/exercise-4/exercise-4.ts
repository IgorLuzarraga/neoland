// Vamos a usar de nuevo JSON SERVER para crear un listado de personajes y 
// planetas de Star Wars.

// Para ello, ejecutemos ``json-server --watch exercise-4.json``. En este 
// caso el endpoint con los personajes es 
// `http://localhost:3000/characters`.

// La idea es crear una galería con los planetas, que podemos obtener del 
// endpoint `http://localhost:3000/planets` y, que si el usuario hace click 
// en alguno de los planetas, salga debajo los personajes que están asociados 
// por el .idPlanet a ese planeta en cuestión, mostrando tanto sus 
// imágenes .avatar como sus nombres .name. Para poder obtener la 
// información de los personajes podemos hacer un filtro de los personajes 
// llamando a la url, por 
// ejemplo ``http://localhost:3000/characters?idPlanet=1`` y, teniendo 
// en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
// Además de esto, agrega un buscador para poder filtrar los personajes 
// una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir 
// el input debajo del planeta y encima de los personajes listados.

import { Character, Characters, Planets } from "./types"

export const showPlanetsGallery = () => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <div style="margin-left:100px">
            <div data-function="planets" style="display: flex; gap:20px"></div>
            <div data-function="search"></div>
            <div data-function="characters" style="display: flex; flex-wrap: wrap"></div>
        </div>
    `

    fetchGallery()
}

const insertCharacterInfo = (divPlanet: HTMLDivElement, character: Character) => {

    const divCharacter = document.createElement('div')
    divCharacter.className = 'planet-character'

    const pCharacterName = document.createElement('p')
    pCharacterName.textContent = `Name: ${character.name}`
    divCharacter.appendChild(pCharacterName)

    const pCharacterDesc = document.createElement('p')
    pCharacterDesc.textContent = `Description: ${character.description}`
    divCharacter.appendChild(pCharacterDesc)

    const imgCharacter = document.createElement('img')
    imgCharacter.src = character.avatar
    imgCharacter.style.width= "150px"
    imgCharacter.style.height= "150px"
    divCharacter.append(imgCharacter)

    divPlanet.appendChild(divCharacter)
}

const insertCharacters = (planetUrl: string, divPlanet: HTMLDivElement) => {
    fetch(planetUrl)
            .then((response) => {
                return response.json();
            })
            .then((characters: Characters) => {
                characters.forEach(character => {
                    insertCharacterInfo(divPlanet, character)
                })
            })
            .catch((error) => {
                console.error(error);
            })
}


const charactersFilterBy = (characters: Characters, strToFilter: string) => 
    characters.filter(character => character.name.includes(strToFilter))

const insertFilteredCharacters = (planetUrl: string, divPlanet: HTMLDivElement, strToFilter: string) => {
    removeCharacterInfo(divPlanet)
    
    fetch(planetUrl)
            .then((response) => {
                return response.json();
            })
            .then((characters: Characters) => {
                const filteredCharacters = charactersFilterBy(characters, strToFilter)
                filteredCharacters.forEach(character => {
                    insertCharacterInfo(divPlanet, character)
                })
            })
            .catch((error) => {
                console.error(error);
            })
}

const removeCharacterInfo = (divPlanet: HTMLDivElement) => {
    const allPlanetCharacters = divPlanet.querySelectorAll('div.planet-character'); 
    allPlanetCharacters.forEach(planetCharacter => planetCharacter.remove())
}

const showPlanetCharacters = (imgPlanet: HTMLImageElement, divPlanet: HTMLDivElement, planetId: number) => {
    imgPlanet.addEventListener('click', () => {
        const  planetUrl = `http://localhost:3000/characters?idPlanet=${planetId}`

        const inputFilterCharacters = document.createElement('input')
        divPlanet.appendChild(inputFilterCharacters)

        inputFilterCharacters.addEventListener('input', () => {
            insertFilteredCharacters(planetUrl, divPlanet, inputFilterCharacters.value)
        })

        insertCharacters(planetUrl, divPlanet)
    })

    return divPlanet
}

const showGallery = (gallery: Planets) => {
    const divGallery = document.querySelector('[data-function="planets"]')

    gallery.forEach((planet) => {
        let divPlanet = document.createElement('div')    
        const pPlanetName = document.createElement('p')
        const imgPlanet = document.createElement('img')

        divPlanet.id = planet.id.toString()
        pPlanetName.textContent = planet.name
        imgPlanet.src = planet.image

        showPlanetCharacters(imgPlanet, divPlanet, planet.id)

        divPlanet.appendChild(pPlanetName)
        divPlanet.appendChild(imgPlanet)

        divGallery?.appendChild(divPlanet)
    })
}

const fetchGallery = () => {
    const  url = `http://localhost:3000/planets`

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((gallery) => {
            showGallery(gallery)
        })
        .catch((error) => {
            console.error(error);
        })
}

