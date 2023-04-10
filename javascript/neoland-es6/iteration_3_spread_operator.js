const assert = require('assert'); 

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsLisCopy = [...pointsList]
//assert.equal(pointsList, pointsLisCopy); --> Dosen't pass the test
// because the assert.equal() compares the references 
// of the objects and not their values.

assert.deepStrictEqual(pointsLisCopy, pointsList) // --> Pass the test
// because deepStrictEqual performs a deep comparison, which means that 
// it will check the values of any nested objects or arrays as well. 


// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy}
assert.deepStrictEqual(toyCopy, toy)

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList_ = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const pointsListJoin1 = [...pointsList_, ...pointsLis2] // Method 1
const pointsListJoin2 = [...pointsList_].concat([...pointsLis2]) // Method 2
assert.deepStrictEqual(pointsListJoin1, pointsListJoin2) // Both are equal

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy_ = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toyJoin1 = {...toy_, ...toyUpdate} // Method 1

const toyJoin2 = Object.assign({}, toy_, toyUpdate) // Method 2

assert.deepStrictEqual(toyJoin1, toyJoin2) // Both are equal

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy1 = [...colors.slice(0, 2), ...colors.slice(3)] // Method 1

const colorsCopy2 = colors.slice(0, 2).concat(colors.slice(3)) // Method 2

assert.deepStrictEqual(colorsCopy1, colorsCopy2) // Both are equal

const colorsWithoutElPos2 = ['rojo', 'azul', 'verde', 'naranja'];

assert.deepStrictEqual(colorsCopy1, colorsWithoutElPos2) // Both are equal
// to colorsWithoutElPos2