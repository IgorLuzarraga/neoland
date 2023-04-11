// 1.4 En base al ejercicio anterior, crea un botón con 
// el texto 'X' para cada uno de los p que hayas insertado 
// y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io';

const fetchCountriesByName = (name) => {
    const url = `${baseUrl}/?name[]=${name}`
    const urlTest = `https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane`

    fetch(url)
      .then((response) => {
        // la respuesta del servidor es una promesa, así que tenemos que devolver otra promesa
        // para poder procesar el cuerpo de la respuesta
        return response.json();
      })
      .then((data) => {
        showCountriesProbability(data)
      })
      .catch((error) => {
        console.error(error);
      });
    }

const formatProbability = (countryId, probability, name) => {
    const probability_100 = (probability*100).toFixed(2)

    return `The name ${name} has a ${probability_100}% chance of being from the country ${countryId}`
}

const showCountryProbability = (countryId, probability, name, index) => {
    const p = document.createElement('p')
    p.textContent = formatProbability(countryId, probability, name)
    p.id = `p_${index}`

    document.body.appendChild(p)
}

const handleClick = (event) => {
    const btnId = event.target.id

    // Get the p id from the btn id
    // btn id --> btn_{number} // Note: {} not part of the id
    // btn p --> p_{number}    // Note: {} not part of the id
    // in both cases the number is the same, so from the
    // btn id we can get the p id
    const pToRemoveId_str = btnId.replace("btn_", "")
    const pToRemoveId_int = Number.parseInt(pToRemoveId_str)
    const pToRemoveId = `p_${pToRemoveId_int}`

    // Select the p element to remove
    const p = document.querySelector(`#${pToRemoveId}`)
    p.remove()

    // Remember to remove the button that remove the p element
    const btn = document.querySelector(`#${btnId}`)
    btn.remove()
}

const showBtnToRemoveCountryProbability = (index) => {
    const btn = document.createElement('button')
    btn.innerHTML = 'X'
    btn.id = `btn_${index}`
    btn.onclick = handleClick

    document.body.appendChild(btn)
}

const showCountriesProbability = data => {
    data.forEach(element => {
        element.country.forEach((country, index) => {
            showCountryProbability(country.country_id, country.probability, element.name, index)
            showBtnToRemoveCountryProbability(index)
        })

        const hr = document.createElement('hr')
        document.body.appendChild(hr)
    })
}

const showCountryByName = () => {
    const btn = document.querySelector('button')
    const input = document.querySelector('input')

    btn.addEventListener('click', () => {
        fetchCountriesByName(input.value)
    });
}
