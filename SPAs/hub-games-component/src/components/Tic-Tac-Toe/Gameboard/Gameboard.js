import './Gameboard.css'
import { RestartGame } from '../RestartGame/RestartGame'
import { Jumbotron } from '../Jumbotron/Jumbotron'
import { WinnerChecker } from '../WinnerChecker/Winnerchecker'
import { WinnerSquares } from '../WinnerSquares/WinnerSquares'
import { Player_O, Player_X, WinnerSquaresColor } from '../../../types/Tic-Tac-Toe/gameTypes'

let restartBtn

let currentPlayer = Player_X
let gameBoardSquaresClickEvents
let gameBoardSquaresClickedByPlayers = Array(9).fill(null)

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

const gameBoardSqureClicked = (e) => {
    const id = e.target.id
    const squareClicked = gameBoardSquaresClickedByPlayers[id]

    if(squareWasClickedBefore(squareClicked)) return null

    gameBoardSquaresClickedByPlayers[id] = currentPlayer

    markCurrentPlayerInSelectedSquare(e, currentPlayer)
    
    if(WinnerChecker(gameBoardSquaresClickedByPlayers)){
        Jumbotron(`Player ${currentPlayer} Wins!`)

        markWinnergSquares()
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