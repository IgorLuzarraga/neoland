.holo-effect {
    background: linear-gradient(135deg, #00c6ff, #ff00b8, #d800ff, #ff6a00);
    background-size: 600% 600%;
    animation: holo-gradient 10s ease infinite;
  }
  
  @keyframes holo-gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  
type PokemonPalette = {
    name: string;
    palette: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
}
  
function getPokemonPalette(name: string): PokemonPalette {
const colors = [
    '#A8A878',
    '#F08030',
    '#C03028',
    '#6890F0',
    '#A890F0',
    '#78C850',
    '#F8D030',
    '#E0C068',
    '#EE99AC',
    '#C79FEF',
    '#F85888',
    '#B8B8D0',
    '#A040A0',
    '#F0B6BC',
    '#D77800',
];

const hash = name.split('').reduce((acc, char) => {
    acc = ((acc << 5) - acc) + char.charCodeAt(0);
    return acc & acc;
}, 0);

const color1 = colors[Math.abs(hash) % colors.length];
const color2 = colors[Math.abs(hash * 2) % colors.length];
const color3 = colors[Math.abs(hash * 3) % colors.length];
const color4 = colors[Math.abs(hash * 4) % colors.length];

return {
    name,
    palette: { color1, color2, color3, color4 },
};
}
  ```
  
  This function takes a Pokémon name as an argument and returns an object with the name and a palette object containing four colors generated from the name using a hash function.
  
  I hope this helps! Let me know if you have any other questions.
  
  Source: Conversation with Bing, 4/25/2023
  (1) https://pokepalettes.com. https://pokepalettes.com/.
  (2) https://pokeapi.co/docs/v2. https://pokeapi.co/docs/v2.