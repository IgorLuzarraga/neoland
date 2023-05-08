import { CardBackSide } from '../CardBackSide/CardBackSide'
import './Card.css'

export const Card = (id) => {
    const card = document.createElement('img')
    card.setAttribute('id', id)
    card.setAttribute('class', 'memoryGame-card')

    //CardBackSide(card)

    return card
}