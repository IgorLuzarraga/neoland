const assert = require('assert')

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNameArr1 = users.map(user => user.name)

const usersNameArr2 = ["Abel", "Julia", "Pedro", "Amanda"]

assert.deepStrictEqual(usersNameArr1, usersNameArr2) // Both are equal

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName1 = users2.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name)
const usersName2 = ["Anacleto", "Julia", "Pedro", "Anacleto"]

assert.deepStrictEqual(usersName1, usersName2) // Both are equal

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const markIfCityIsVisited = (city) => 
    city.isVisited ? `${city.name} Visited` : city.name

const citiesName1 = cities.map(markIfCityIsVisited)
const citiesName2 = ['Tokyo Visited', 'Madagascar', 'Amsterdam Visited', 'Seul']

assert.deepStrictEqual(citiesName1, citiesName2)
