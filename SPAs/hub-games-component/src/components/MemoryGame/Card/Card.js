import { CardBackSide } from '../CardBackSide/CardBackSide'
import './Card.css'

const template = () => `
    <div class="scene">
        <div class="card">
            <div class="card__face card__face--front">front</div>
            <div class="card__face card__face--back">back</div>
        </div>
    </div>
`

export const Card = (id) => {
    const card = document.createElement('div')
    card.setAttribute('id', id)
    //card.setAttribute('class', 'memoryGame-card')
    card.innerHTML = template()

    return card
}

// export const Card = (id) => {
//     const card = document.createElement('img')
//     card.setAttribute('id', id)
//     card.setAttribute('class', 'memoryGame-card')

//     //CardBackSide(card)

//     return card
// }