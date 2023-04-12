// Dado el siguiente html y javascript. Utiliza el array 
// para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const createPlacesList = (places) => {
    const ul = document.createElement('ul')
    const div = document.querySelector('[data-function="printHere"]')

    places.map(place => {
        const li = document.createElement('li')
        li.textContent = place

        ul.appendChild(li)
    })

    div.appendChild(ul)

    document.body.appendChild(div)
}

const showPlaces = () => {
    createPlacesList(places)
}