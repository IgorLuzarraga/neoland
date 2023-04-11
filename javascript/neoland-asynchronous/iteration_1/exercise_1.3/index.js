// 1.3 En base al ejercicio anterior. Crea dinamicamente un
// elemento por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de 
// ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET.

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

const showCountriesProbability = data => {
    data.forEach(element => {
        element.country.forEach(country => {
            const p = document.createElement('p')
            p.textContent = formatProbability(country.country_id, country.probability, element.name)
            document.body.appendChild(p)
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
