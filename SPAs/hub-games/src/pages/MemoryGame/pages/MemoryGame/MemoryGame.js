import './MemoryGame.css'
import { cards } from '../../types/gameTypes'
import { Gameboard } from '../../components/Gameboard/Gameboard'
import { CardBackSide } from '../../components/CardBackSide/CardBackSide'
import { Jumbotron } from '../../components/Jumbotron/Jumbotron'

const template = () => `
    <div id='container-main'>
        <div id='gameboard-container'>
        </div>
        <div id="jumbotron">
        </div>
    </div>
`
const printTemplate = (template) =>
    document.querySelector("#app").innerHTML = template()

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

const flipCard = (card, cardId) =>
    card.setAttribute('src', cards[cardId].img)

const handleCardClicked = (e) => {
    const card = e.target
    const cardId = card.id

    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)

    flipCard(card, cardId)

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

const createBoard = () => Gameboard(handleCardClicked)

const stopFlipingCard = (cards, cardId) =>
    cards[cardId].removeEventListener('click', handleCardClicked)

const clickedSameCard = (cardId1, cardId2) =>
    cardId1 === cardId2 ? true : false

const chosenCardsMatch = (cardOne, cardTwo) => 
    cardsChosen[0] === cardsChosen[1] ? true : false

const checkIfAllCardsMatch = (cards) => {
    if  (cardsWon.length === cards.length/2) {
        Jumbotron('Good Job! You Win!')
    }
}

const checkForMatch = () => {
    const cards = document.querySelectorAll('img')
    const cardChosenOneId = cardsChosenId[0]
    const cardChosenTwoId = cardsChosenId[1]
    
    if(clickedSameCard(cardChosenOneId, cardChosenTwoId)) {
        CardBackSide(cards[cardChosenOneId])
    }
    else if (chosenCardsMatch()) {
        stopFlipingCard(cards, cardChosenOneId)
        stopFlipingCard(cards, cardChosenTwoId)
        cardsWon.push(cardsChosen)
    } else { // Chosen cards don't match
        CardBackSide(cards[cardChosenOneId])
        CardBackSide(cards[cardChosenTwoId])
    }

    cardsChosen = []
    cardsChosenId = []
    
    checkIfAllCardsMatch(cards)
}

const shuffleCards = () =>
    cards.sort(() => 0.5 - Math.random())

export const MemoryGame = () => {
    printTemplate(template)
    createBoard()
    shuffleCards()
}