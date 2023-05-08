import './MemoryGame.css'
import JSConfetti from 'js-confetti'
import { cards } from '../../types/MemoryGame/gameTypes'
import { Gameboard } from '../../components/MemoryGame/Gameboard/Gameboard'
import { CardBackSide } from '../../components/MemoryGame/CardBackSide/CardBackSide'
import { Jumbotron } from '../../components/MemoryGame/Jumbotron/Jumbotron'
import { changePageColor } from '../../utils/MemoryGame/changePageColor'

const jsConfetti = new JSConfetti() // Create JSConfetty just ones!

const template = () => `
    <div id='memory-game-container-main'>
        <div id='memory-game-gameboard-container'></div>
        <div id="memory-game-jumbotron"></div>
    </div>
`
const printTemplate = (template) =>
    //document.querySelector("#app").innerHTML = template()
    document.querySelector("main").innerHTML = template()

let chosenCardsId = []
let chosenCards = []
let matchedCards = []

const flipCard = (card, cardId) => 
   card.setAttribute('src', cards[cardId].img)

const throwConfetty = () => {
    jsConfetti.addConfetti({
     confettiRadius: 6,
     confettiNumber: 1500,
   })
 }

const handleCardClicked = (e) => {
    const card = e.target
    const cardId = card.id

    chosenCards.push(cards[cardId].name)
    chosenCardsId.push(cardId)

    flipCard(card, cardId)

    if (chosenCards.length === 2) {
        setTimeout(checkIfCardsMatch, 400)
    }
}

const createBoard = () => Gameboard(handleCardClicked)

const stopFlipingCard = (cards, cardId) =>
    cards[cardId].removeEventListener('click', handleCardClicked)

const clickedSameCard = (cardId1, cardId2) =>
    cardId1 === cardId2 ? true : false

const chosenCardsMatch = (cardOne, cardTwo) => 
    chosenCards[0] === chosenCards[1] ? true : false

const checkIfAllCardsMatch = (cards) => {
    if  (matchedCards.length === cards.length/2) {
        Jumbotron('Good Job! You Win!')

        throwConfetty()
    }
}

const checkIfCardsMatch = () => {
    const cards = document.querySelectorAll(`.memoryGame-card`)
    const cardChosenOneId = chosenCardsId[0]
    const cardChosenTwoId = chosenCardsId[1]
    
    if(clickedSameCard(cardChosenOneId, cardChosenTwoId)) {
        CardBackSide(cards[cardChosenOneId])
    }
    else if (chosenCardsMatch()) {
        stopFlipingCard(cards, cardChosenOneId)
        stopFlipingCard(cards, cardChosenTwoId)
        matchedCards.push(chosenCards)
    } else { // Chosen cards don't match
        CardBackSide(cards[cardChosenOneId])
        CardBackSide(cards[cardChosenTwoId])
    }

    chosenCards = []
    chosenCardsId = []
    
    checkIfAllCardsMatch(cards)
}

const shuffleCards = () =>
    cards.sort(() => 0.5 - Math.random())

export const MemoryGame = () => {
    changePageColor()
    printTemplate(template)
    createBoard()
    shuffleCards()
}