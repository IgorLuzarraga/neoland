import './Gameboard.css'
import JSConfetti from 'js-confetti'
import { RestartGame } from '../RestartGame/RestartGame'
import { Jumbotron } from '../Jumbotron/Jumbotron'
import { WinnerChecker } from '../WinnerChecker/Winnerchecker'
import { WinnerSquares } from '../WinnerSquares/WinnerSquares'
import { Player_O, Player_X, WinnerSquaresColor } from '../../../types/Tic-Tac-Toe/gameTypes'

let restartBtn

let currentPlayer = Player_X
let gameBoardSquaresClickEvents
let gameBoardSquaresClickedByPlayers = Array(9).fill(null)
let playerXMovesCounter = 0
let playerOMovesCounter = 0
const jsConfetti = new JSConfetti() // Create JSConfetty just ones!

const template = () => `
    <div id='tic-tac-toe-gameboard'>
        <div class="square" id="0"></div>
        <div class="square" id="1"></div>
        <div class="square" id="2"></div>
        <div class="square" id="3"></div>
        <div class="square" id="4"></div>
        <div class="square" id="5"></div>
        <div class="square" id="6"></div>
        <div class="square" id="7"></div>
        <div class="square" id="8"></div>
    </div>
`

const flipCurrentPlayer = currentPlayer => 
    currentPlayer === Player_X ? Player_O : Player_X

const markWinnergSquares = () => 
    WinnerSquares(gameBoardSquaresClickedByPlayers)
        .map(square => { gameBoardSquaresClickEvents[square]
                            .style
                            .backgroundColor = WinnerSquaresColor
    })

const markCurrentPlayerInSelectedSquare = (e, currentPlayer) =>
    e.target.innerText = currentPlayer

const squareWasClickedBefore = square =>
        (square !== null)  ? true : false

const throwConfetty = () => {
   jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 1500,
  })
}

const updateCounters = (currentPlayer) => {
    switch (currentPlayer) {
        case Player_X:
            const showMovesPlayerX = `Playex X moves: ${++playerXMovesCounter}`
            const counterPlayerX = document.querySelector('#tic-tac-toe-counter-playerX')
            counterPlayerX.innerHTML = showMovesPlayerX
            break
        case Player_O:
            const showMovesPlayerO = `Playex O moves: ${++playerOMovesCounter}`
            const counterPlayerO = document.querySelector('#tic-tac-toe-counter-playerO')
            counterPlayerO.innerHTML = showMovesPlayerO
            break
    }
}

const gameBoardSqureClicked = (e) => {
    const id = e.target.id
    const squareClicked = gameBoardSquaresClickedByPlayers[id]

    if(squareWasClickedBefore(squareClicked)) return null

    gameBoardSquaresClickedByPlayers[id] = currentPlayer

    markCurrentPlayerInSelectedSquare(e, currentPlayer)
    
    updateCounters(currentPlayer)

    if(WinnerChecker(gameBoardSquaresClickedByPlayers)){
        // Show the winner and Throw confetty
        
        Jumbotron(`Player ${currentPlayer} Wins!`)

        markWinnergSquares()

        throwConfetty()

    } else {
        currentPlayer = flipCurrentPlayer(currentPlayer)
    }
}

const listeners = () => {
    gameBoardSquaresClickEvents = Array.from(document.querySelectorAll('.square'))
    gameBoardSquaresClickEvents.forEach(square => 
        square.addEventListener('click', gameBoardSqureClicked))
    
    restartBtn = document.getElementById('restartBtn')

    restartBtn.addEventListener('click', function(event) {
        RestartGame(gameBoardSquaresClickedByPlayers, gameBoardSquaresClickEvents, currentPlayer, Player_X);
    });

}

export const Gameboard = () => {
    document.querySelector("#tic-tac-toe-gameboard-container").innerHTML = template()
    listeners()
}