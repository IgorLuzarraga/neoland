import './TicTacToe.css'
import { Gameboard } from '../../components/Gameboard/Gameboard'

const template = () => `
    <div id='tic-tac-toe-container-main'>
        <div id="tic-tac-toe-jumbotron">Tic Tac Toe</div>
        <div id="tic-tac-toe-gameboard-container"></div>
        <button id="restartBtn">Restart</button>
    </div>
`

const printTemplate = (template) =>
    document.querySelector("main").innerHTML = template()

const createBoard = () => Gameboard()

export const TicTacToe = () => {
    printTemplate(template)
    createBoard()
}