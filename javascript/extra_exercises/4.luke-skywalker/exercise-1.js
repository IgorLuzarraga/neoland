// Dado el siguiente javascript filtra los videojuegos 
// por gender = 'Aventura' usando .filter() y usa .reduce() 
// para conseguir la media de sus .score. La función 
// .find() también podría ayudarte para el contrar el 
// genero 'Aventura' en el array .gender.

const assert = require('assert')

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Odissey', genders: ['Plataforma'], score: 8.5},
    {name: 'Diablo III', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Shadow of the Colossus', genders: ['Aventura', 'El mejor videojuego'], score: 10},
]


const byAventura = videogame => videogame.genders.includes('Aventura')
const totalScoreReducer = (acc, current) => {
    acc.totalScore += current.score
    acc.counter++
    return acc
}

const ScoreInit = {
    totalScore: 0,
    counter: 0
}

const average = videogames => {
    const score = 
    videogames
        .filter(byAventura)
        .reduce(totalScoreReducer, ScoreInit)

    return score.counter === 0 
                ? -1 
                : parseFloat((score.totalScore/score.counter).toFixed(2))
                    
}

const averageActual = average(videogames)
const averageExpected = 7.95

assert.equal(averageActual, averageExpected)


