// Crea una función llamada `findArrayIndex` que reciba 
// como parametros un array de textos y un texto y devuelve 
// la posición del array cuando el valor del array sea 
// igual al valor del texto que enviaste como parametro.

const assert = require('assert')

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const findArrayIndex = (arr, text) => {
    let index = 0

    for(const el of arr) {
        if(el.includes(text)) {
            return index
        }
        index++
    }

    return -1
}

const lukeId = findArrayIndex(mainCharacters, 'Luke')
const lukeIdExpected = 0

assert.equal(lukeId, lukeIdExpected)

const ReyId = findArrayIndex(mainCharacters, 'Rey')
const ReyIdExpected = 4

assert.equal(ReyId, ReyIdExpected)

const NotACharacterId = findArrayIndex(mainCharacters, 'Werty')
const NotACharacterIdExpected = -1

assert.equal(NotACharacterId, NotACharacterIdExpected)