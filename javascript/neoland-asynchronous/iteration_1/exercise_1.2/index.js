// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io';

const fetchCountriesByName = (name) => {
  const url = `${baseUrl}/?name[]=${name}`

  fetch(url)
    .then((response) => {
      // la respuesta del servidor es una promesa, así que tenemos que devolver otra promesa
      // para poder procesar el cuerpo de la respuesta
      return response.json();
    })
    .then((data) => {
      console.log(data); // print the info about what countries
                         // are related to the name introduced as 
                         // the argument 'name'
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const showCountryByName = () => {
    const btn = document.querySelector('button')
    const input = document.querySelector('input')
    btn.addEventListener('click', () => {
      fetchCountriesByName(input.value)
    });
  }
