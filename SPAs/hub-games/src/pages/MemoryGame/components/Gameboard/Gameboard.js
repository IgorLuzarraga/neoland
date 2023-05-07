import './Gameboard.css'
import { Card } from "../Card/Card"
import { cards } from "../../types/gameTypes"
import { CardBackSide } from '../CardBackSide/CardBackSide'

const template = () =>
    `<div id='gameboard'>
    </div>`

const createGameboard = (handleCardClicked) => {
    const gameboardHtmlEl = document.querySelector('#gameboard')

    cards.forEach((element, index) => {
        const card = Card(index)
        
        CardBackSide(card)

        card.addEventListener('click', (event) => {
            handleCardClicked(event)
        })

        gameboardHtmlEl.appendChild(card)
    })
}

export const Gameboard = (handleCardClicked) => {
    document.querySelector("#gameboard-container").innerHTML = template()
    createGameboard(handleCardClicked)
}