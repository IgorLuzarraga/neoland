// Usando la función anterior beneficiate de poder conocer 
// el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como 
// parametros (los mismos parametros que en el anterior 
// ejercicio) llame a la función anteriormente creada 
// ``findArrayIndex`` y obten el indice para posteriormente 
// usar la función de javascript ``.splice()`` para 
// eliminar el elemento del array. 

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y 
// comprueba que funcionan correctamente.

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

// Note: The function dosen't mutate the original array arr
const removeItem = (arr, text) => {
    const arrCopy = [...arr]
    const elToRemoveId = findArrayIndex(arrCopy, text)
    arrCopy.splice(elToRemoveId, 1)

    return arrCopy
}

console.log("\nOriginal array before:\n", mainCharacters)
console.log("\nRemove Item from array:\n", removeItem(mainCharacters, 'Rey'))
console.log("\nOriginal array after:\n", mainCharacters)