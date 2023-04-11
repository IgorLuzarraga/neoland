// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch(`https://api.agify.io?name=michael`)
  .then((response) => {
    // la respuesta del servidor es una promesa, así que tenemos que devolver otra promesa
    // para poder procesar el cuerpo de la respuesta
    return response.json();
  })
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.error(error);
  });
