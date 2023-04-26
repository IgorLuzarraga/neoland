import "./Card.css"

export const Card = (character) => {
  return `
    <div id='card'>
      <img id='card-img' src=${character.image} alt=${character.name}/>
      <div id='card-character-info'>
        <h4>${character.name}</h4>
        <h4>${character.status}</h4>
        <h4>${character.species}</h4>
      </div>
    </div>
    `
}
