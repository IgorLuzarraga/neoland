// En base a la api de Breaking Bad 
// (https://breakingbadapi.com/), vamos a desarrollar una 
// página dinámicamente en la que visualizar una galería 
// con las imagenes y los nombres de los personajes de 
// la serie. Para ellos es necesario usar el endpoint 
// 'https://breakingbadapi.com/api/characters'.

// Si te fijas en la respuesta de la api, la imagen está en 
// la propiedad 'img' y el título en la propiedad 'name'.


// TODO: The API connection fails
// Error: Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://breakingbadapi.com/api/characters. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.
const fetchCharacters = () => {
  // This url dosen'twork
  const  url = 'https://breakingbadapi.com/api/characters'
 
  // This url Works
  //const name = 'Jane'
  //const baseUrl = 'https://api.nationalize.io';
  //const url = `${baseUrl}/?name[]=${name}`

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data); // print the info 
    })
    .catch((error) => {
      console.error(error);
    });
  }

//   const showCountryByName = () => {
//     const btn = document.querySelector('button')
//     const input = document.querySelector('input')
//     btn.addEventListener('click', () => {
//       fetchCountriesByName(input.value)
//     });
//   }
