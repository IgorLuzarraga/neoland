import './RestartGame.css'
//import { Jumbotron } from '../../../../components/Tic-Tac-Toe/Jumbotron/Jumbotron'
import { Jumbotron } from '../Jumbotron/Jumbotron'

export const RestartGame = (gameBoard, gameBoardSquares, currentPlayer, player) => {
    gameBoard.fill(null)

    gameBoardSquares.forEach( square => {
        square.innerText = ''
        square.style.backgroundColor = ''
    })


    Jumbotron('Tic Tac Toe')

    currentPlayer = player
}