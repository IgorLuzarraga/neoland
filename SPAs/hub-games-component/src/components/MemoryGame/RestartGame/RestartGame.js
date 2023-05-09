import './RestartGame.css'
import { Jumbotron } from '../Jumbotron/Jumbotron'
import { RestartCounter } from '../RestartCounter/RestartCounter'

// export const RestartGame = (
//     gameBoard, 
//     gameBoardSquares,
//     playerMovesCounter) => {

//     gameBoard.fill(null)

//     gameBoardSquares.forEach( square => {
//         square.innerText = ''
//         square.style.backgroundColor = ''
//     })

//     Jumbotron('Memory Game')
    
//     playerMovesCounter = 0

//     RestartCounter()
// }

export const RestartGame = (createBoard) => {

    console.log('kaixo reset btn')
    createBoard()
    RestartCounter()
}