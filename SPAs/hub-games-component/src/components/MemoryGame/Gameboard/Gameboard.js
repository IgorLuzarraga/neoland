import './Gameboard.css'
import { Card } from "../Card/Card"
import { cards } from '../../../types/MemoryGame/gameTypes'
import { CardBackSide } from '../CardBackSide/CardBackSide'

const template = () =>
    `<div id='memory-game-gameboard'>
    </div>`

// const createGameboard = (handleCardClicked) => {
//     const gameboardHtmlEl = document.querySelector('#memory-game-gameboard')

//     cards.forEach((element, index) => {
//         const card = Card(index)
        
//         CardBackSide(card)

//         card.addEventListener('click', (event) => {
//             handleCardClicked(event)
//         })

//         gameboardHtmlEl.appendChild(card)
//     })
// }

const createGameboard = (handleCardClicked) => {
    const gameboardHtmlEl = document.querySelector('#memory-game-gameboard')

    cards.forEach((element, index) => {
        const card = Card(index)
        
        //CardBackSide(card)

        // card.addEventListener('click', (event) => {
        //     //handleCardClicked(event)
        //     console.log('kaixo')
        //     card.classList.toggle('is-flipped')
        // })

        gameboardHtmlEl.appendChild(card)
    })

    let cardsElements = document.querySelectorAll('.card');

    [...cardsElements].forEach((card)=>{
        //console.log('CARD: ', card )
        card.addEventListener( 'click', function(event) {
            card.classList.toggle('is-flipped')
            handleCardClicked(event, card)
        });
    });

    // let cards = document.querySelectorAll('.card');

    // [...cards].forEach((card)=>{
    //     card.addEventListener( 'click', function() {
    //         card.classList.toggle('is-flipped')
    //     })
    // })    
}

export const Gameboard = (handleCardClicked) => {
    document.querySelector("#memory-game-gameboard-container").innerHTML = template()
    createGameboard(handleCardClicked)
}