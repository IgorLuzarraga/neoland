// Basandote en el array siguiente, crea una lista 
// ul > li dinámicamente en el html que imprima cada 
// uno de los albums.


const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const createAlbumList = (albums) => {
  const ul = document.createElement('ul')
  
  albums.map(album => {
    const li = document.createElement('li')
    li.textContent = album
    ul.appendChild(li)
  })

  document.body.appendChild(ul)
}

const showAlbums = () => {
  createAlbumList(albums)
}

