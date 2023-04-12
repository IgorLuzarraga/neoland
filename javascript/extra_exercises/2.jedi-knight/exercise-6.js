// Crea una función llamada `swap` que reciba un array y 
// dos parametros que sean indices del array. La función 
// deberá intercambiar la posición de los valores de los 
// indices que hayamos enviado como parametro. Retorna el 
// array resultante.

const assert = require('assert')

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];


const swap = (arr, id1, id2) => {
    const arrCopy = [...arr]

    if ((id1 < 0) || (id1 >= arr.length)) return null
    if ((id2 < 0) || (id2 >= arr.length)) return null

    const temp = arrCopy[id1]
    arrCopy[id1] =  arrCopy[id2]
    arrCopy[id2] = temp

    return arrCopy
}

const arrSwaped = swap(fantasticFour, 0, 3)
const arrSwapedExpected = [
    "La cosa",
    "Mr. Fantástico",
    "La mujer invisible",
    "La antorcha humana"
  ];

assert.deepStrictEqual(arrSwaped, arrSwapedExpected)