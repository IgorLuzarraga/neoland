const assert = require('assert')

// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
// .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
// array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const totalScoreForRPGGames = (videogames) =>
    videogames
        .filter(game => game.genders.find( gender => gender === 'RPG'))
        .reduce((acc, game) => 
            ({...acc, totalScore: acc.totalScore + game.score, counter: acc.counter + 1})
        , {totalScore: 0, counter: 0} )

const averageScoreForRPGGames = (videogames) => {
    const rpgGamesReduced = totalScoreForRPGGames(videogames)

    return rpgGamesReduced.counter === 0 
        ? -1
        : (rpgGamesReduced.totalScore / rpgGamesReduced.counter).toFixed(2)

}

const averageScoreForRPGGamesExpected = 7.88

assert.equal(averageScoreForRPGGames(videogames), averageScoreForRPGGamesExpected) // both are equal
