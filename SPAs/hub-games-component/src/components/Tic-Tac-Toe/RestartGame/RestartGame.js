import './RestartGame.css'
import { Jumbotron } from '../Jumbotron/Jumbotron'
import { RestartCounters } from '../RestartCounters/RestartCounters'

export const RestartGame = (
    gameBoard, 
    gameBoardSquares, 
    currentPlayer, 
    player,
    playerXMovesCounter,
    playerOMovesCounter) => {

    gameBoard.fill(null)

    gameBoardSquares.forEach( square => {
        square.innerText = ''
        square.style.backgroundColor = ''
    })


    Jumbotron('Tic Tac Toe')

    currentPlayer = player
    
    playerOMovesCounter = 0
    playerXMovesCounter = 0

    RestartCounters()
}