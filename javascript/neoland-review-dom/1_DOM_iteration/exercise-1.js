// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const showCountriesList = () => {
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

    const ulElem = document.createElement('ul')

    countries.forEach(country => {
        const liElem = document.createElement('li')
        liElem.textContent = country

        ulElem.appendChild(liElem)
    })

    document.body.appendChild(ulElem)
}


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eraseElement = (toErase) => {
    const el = document.querySelector(toErase)
    el.remove()
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const showCarList = () => {
    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

    const div = document.querySelector('[data-function="printHere"]')
    const ul = document.createElement('ul')

    cars.forEach(car => {
        li = document.createElement('li')
        li.textContent = car
        
        ul.appendChild(li)
    })

    div.appendChild(ul)

}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries = [
    {title: 'Country #1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Country #2', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Country #3', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Country #4', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Country #5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const showCountriesList2 = () => 
    countries.forEach((country, index) => {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const img = document.createElement('img')

        div.id = `country_#${index}`

        h4.textContent = country.title
        img.src = country.imgUrl

        div.appendChild(h4)
        div.appendChild(img)

        document.body.appendChild(div)
    })


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const handleClick = (event) => {
    const divArr = document.querySelectorAll('div')
    divArr[divArr.length-1].remove()
}

const eraseLastCountry = () => {
    const btn = document.createElement('button')
    btn.onclick = handleClick
    btn.innerHTML = "Erase Last Element"

    document.body.appendChild(btn)
}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const getId = (str) => {
    const numStr = str.replace("btn_#", "")
    return(parseInt(numStr))
}

const handleClickEraseCountry = (event) => {
    const elementToEraseIdNumber = getId(event.target.id)
    const elementToEraseId = `country_#${elementToEraseIdNumber}`

    document.getElementById(elementToEraseId).remove()
}

const btnsToEraseCountries = () => 
    countries.forEach((country, index) => {
        const btn = document.createElement('button')
        btn.onclick = handleClickEraseCountry
        btn.innerHTML = `Erase ${country.title}`
        btn.id = `btn_#${index}`
    
        document.body.appendChild(btn)
    })
