const assert = require('assert')

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const olderThan18_1 = ages.filter(age => age > 18)
const olderThan18_2 = [22, 24, 55, 65, 21, 90];

assert.deepStrictEqual(olderThan18_1, olderThan18_2)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesEven1 = ages2.filter(age => age % 2 === 0)
const agesEven2 = [22, 14, 24, 12, 90];

assert.deepStrictEqual(agesEven1, agesEven2)


// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterStreamerseagueOfLegends1 = (streamer) =>
    streamer.gameMorePlayed === 'League of Legends'

const streamersLeagueOfLegends1 = streamers.filter(filterStreamerseagueOfLegends1)
const streamersLeagueOfLegends2 = [
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
]

assert.deepStrictEqual(streamersLeagueOfLegends1, streamersLeagueOfLegends2)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterStreamersUInName = streamer => 
    streamer.name.includes('u')

const streamersUInName1 = streamers2.filter(filterStreamersUInName)
const streamersUInName2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

assert.deepStrictEqual(streamersUInName1, streamersUInName2)


// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterStreamersLegends = (streamer) =>
    streamer.gameMorePlayed.includes('Legends')

const gameMorePlayedToUpper = streamer => {
    const toUpdate = {gameMorePlayed: streamer.gameMorePlayed.toUpperCase()}
    return streamer.age > 35 ? {...streamer, ...toUpdate} : streamer
}

const streamerLegends1 = 
    streamers
        .filter(filterStreamersLegends)
        .map(gameMorePlayedToUpper)

const streamerLegends2 = [
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS'},
]

assert.deepStrictEqual(streamerLegends1, streamerLegends2)
