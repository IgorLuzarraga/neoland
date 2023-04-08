//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showShowmeBtn = () =>
    console.log(document.querySelector(".showme").innerHTML);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const showH1Pillado = () => {
    const h1Pillado = document.querySelector("#pillado")
    console.log(h1Pillado.innerHTML);
}

// 1.3 Usa querySelector para mostrar por consola todos los p
const showAllPSelectors = () => {
    const pArr =  document.querySelectorAll("p");
    pArr.forEach(p => console.log(p.innerHTML))
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const showAllPokemons = () => {
    const pokemonArr = document.querySelectorAll('.pokemon')
    pokemonArr.forEach(pokemon => console.log(pokemon.innerHTML))
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
const showAllTestMeElments = () => {
    const testMeArr = document.querySelectorAll('[data-function="testMe"]');
    
    testMeArr.forEach(el => console.log(el.innerHTML))
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
const showThirdTestMeElment = () => {
    const testMeArr = document.querySelectorAll('[data-function="testMe"]');
    
    console.log(testMeArr[2].innerHTML)
}
