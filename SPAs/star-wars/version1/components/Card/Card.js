import "./Card.css"

export const Card = (character) => {
  return `
    <img src=${character.image} alt=${character.name}/>
    <h4>${character.name}</h4>
    `
}
