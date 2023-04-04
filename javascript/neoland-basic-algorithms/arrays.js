//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(`The selected avenger is ${avengers[0]}`)

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = 'IRONMAN'

console.log(`The new avengers team is ${avengers}`)

//1.3 console numero de elementos en el array usando la 
// propiedad correcta de Array.
console.log(`Number of avengers: ${avengers.length}`)

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty")
rickAndMortyCharacters.push("Summer")

const length = rickAndMortyCharacters.length
console.log(`The last array character is ${rickAndMortyCharacters[length-1]}`)

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop()
const last = rickAndMortyCharacters2.length-1
console.log(`First character ${rickAndMortyCharacters2[0]}, last character ${rickAndMortyCharacters2[last]}`)

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];


const firstCharacter = rickAndMortyCharacters3.slice(0, 1)
const newCharactersArr = 
    rickAndMortyCharacters3
        .slice(0, 1)
        .concat(rickAndMortyCharacters3.slice(2))

console.log("New characters array: ", newCharactersArr)