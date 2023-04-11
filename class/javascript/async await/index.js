const mostrarPokemon = async (pokemonName) => {
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const datos = await respuesta.json();
  
      // crear elementos del DOM y establecer sus atributos y contenido
      const nombre = document.createElement('h1');
      nombre.textContent = datos.name;
  
      const imagen = document.createElement('img');
      imagen.src = datos.sprites.front_default;
  
      // agregar elementos al DOM
      document.body.appendChild(nombre);
      document.body.appendChild(imagen);
    } catch (error) {
      console.error(error);
    }
  };
  
  //mostrarPokemon('pikachu'); // muestra información sobre el Pokémon Pikachu en la página
  

  // ----------------------- Method 2 (using promises - fetch) ---------------
  const mostrarPokemon2 = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    
    fetch(url)
      .then((response) => {
        // la respuesta del servidor es una promesa, así que tenemos que devolver otra promesa
        // para poder procesar el cuerpo de la respuesta
        return response.json();
      })
      .then((data) => {
        // crear elementos del DOM y establecer sus atributos y contenido
        const nombre = document.createElement('h1');
        nombre.textContent = data.name;
    
        const imagen = document.createElement('img');
        imagen.src = data.sprites.front_default;
    
        // agregar elementos al DOM
        document.body.appendChild(nombre);
        document.body.appendChild(imagen);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  